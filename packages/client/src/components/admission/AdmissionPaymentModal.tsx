import { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { AlertCircle, X } from 'lucide-react';
import { buildAdmissionReturnUrl } from '../../config/agasty';
import { renderAgastyWidget } from '../../utils/agastyWidget';

interface AdmissionPaymentModalProps {
  open: boolean;
  centerId: number;
  boardId: number;
  admissionId: number;
  token: string;
  studentName: string;
  onClose: () => void;
}

/** Comfortably above the widget's own context round-trip, which has no concurrency guard. */
const REFRESH_COOLDOWN_MS = 1500;

/** We can never detect "Paid", so we can never stop refreshing on our own. */
const MAX_REFRESHES_PER_SESSION = 10;

/**
 * Tracks OUR script load, not the widget's state.
 *
 * `render()` returns `undefined` and fetches afterwards, so `handed-off` means
 * only "the script loaded and we called render". The widget may still be
 * fetching, may have bailed with a console error, or may have painted its own
 * error — all three land here. Never gate behaviour on it.
 */
type ScriptStatus = 'loading' | 'handed-off' | 'failed';

const AdmissionPaymentModal = ({
  open,
  centerId,
  boardId,
  admissionId,
  token,
  studentName,
  onClose,
}: AdmissionPaymentModalProps) => {
  const [scriptStatus, setScriptStatus] = useState<ScriptStatus>('loading');
  const [refreshKey, setRefreshKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const renderedKeyRef = useRef<string | null>(null);
  const lastRefreshAtRef = useRef(0);
  const refreshCountRef = useRef(0);

  // Effect A — hand the container to the widget.
  useEffect(() => {
    if (!open) {
      // Dialog unmounts its children, so a reopen gets a fresh node and must re-render.
      renderedKeyRef.current = null;
      refreshCountRef.current = 0;
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const key = `${admissionId}:${refreshKey}`;
    if (renderedKeyRef.current === key) return; // kills the StrictMode double-invoke
    renderedKeyRef.current = key;

    let cancelled = false;
    setScriptStatus('loading');
    lastRefreshAtRef.current = Date.now();

    renderAgastyWidget({
      centerId,
      boardId,
      admissionId,
      token,
      el: container,
      returnUrl: buildAdmissionReturnUrl(centerId, boardId),
    })
      // Resolves when render() was INVOKED, not when the widget painted.
      .then(() => {
        if (!cancelled) setScriptStatus('handed-off');
      })
      .catch(() => {
        if (cancelled) return;
        renderedKeyRef.current = null; // let Retry re-attempt
        setScriptStatus('failed');
      });

    // Deliberately does NOT clear the container: the ref guard prevents duplicate
    // renders, and clearing here would leave StrictMode's second run showing an
    // empty box.
    return () => {
      cancelled = true;
    };
  }, [open, centerId, boardId, admissionId, token, refreshKey]);

  // Effect B — refresh when the parent comes back from the bank tab.
  useEffect(() => {
    if (!open) return;

    const requestRefresh = () => {
      if (document.visibilityState !== 'visible') return;
      if (refreshCountRef.current >= MAX_REFRESHES_PER_SESSION) return;

      const now = Date.now();
      if (now - lastRefreshAtRef.current < REFRESH_COOLDOWN_MS) return;

      lastRefreshAtRef.current = now;
      refreshCountRef.current += 1;
      setRefreshKey((key) => key + 1);
    };

    // Both are needed: `visibilitychange` covers tab switching including mobile,
    // but does not fire when the payment opens as a separate desktop window and
    // the parent clicks back. The cooldown dedupes the pair.
    document.addEventListener('visibilitychange', requestRefresh);
    window.addEventListener('focus', requestRefresh);
    return () => {
      document.removeEventListener('visibilitychange', requestRefresh);
      window.removeEventListener('focus', requestRefresh);
    };
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 transition-opacity duration-300 data-closed:opacity-0 motion-reduce:transition-none"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border-primary bg-surface-elevated p-6 shadow-xl transition duration-300 data-closed:scale-95 data-closed:opacity-0 motion-reduce:transition-none motion-reduce:data-closed:scale-100 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-xl font-semibold text-text-primary">
              Registration submitted — one last step
            </DialogTitle>
            <button
              type="button"
              onClick={onClose}
              className="-mr-1 -mt-1 rounded-lg p-1.5 text-text-tertiary transition-colors duration-300 hover:bg-surface-secondary"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          <DialogDescription className="mt-2 text-sm text-text-secondary">
            We have saved <span className="font-semibold">{studentName}</span>&apos;s
            registration. To confirm it, please pay the registration fee shown below.
          </DialogDescription>

          <p className="mt-4 rounded-xl border border-info-600/30 bg-info-600/10 p-4 text-sm text-text-secondary">
            <span className="font-semibold">Pay Now</span> opens your bank&apos;s secure page
            in a <span className="font-semibold">new tab</span>. Please keep this tab open —
            the status below updates automatically when you come back. If nothing opens, allow
            pop-ups for this site and try again. If you close the bank page without paying,
            please wait about ten minutes before trying again.
          </p>

          {/* Our own status, kept OUTSIDE the vendor container so screen readers do
              not announce the widget&apos;s full redraw on every refresh. */}
          <div aria-live="polite" className="mt-4 text-sm text-text-secondary">
            {scriptStatus === 'loading' && <p>Loading payment options…</p>}
            {scriptStatus === 'failed' && (
              <div className="rounded-xl border border-error-600/40 bg-error-600/10 p-4">
                <p className="flex items-center gap-2 font-medium text-text-primary">
                  <AlertCircle className="h-4 w-4" />
                  We could not load the payment form.
                </p>
                <button
                  type="button"
                  onClick={() => setRefreshKey((key) => key + 1)}
                  className="mt-3 rounded-lg bg-cta-bg px-4 py-2 text-sm font-semibold text-cta-text transition-colors duration-300 hover:bg-cta-hover"
                >
                  Try again
                </button>
              </div>
            )}
          </div>

          <section aria-label="Registration fee payment">
            {/* OWNED BY AgastyPayment — it calls innerHTML = "" on this node.
                NEVER put JSX children here. */}
            <div ref={containerRef} className="min-h-28" />
          </section>

          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-border-primary px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-300 hover:bg-surface-secondary"
            >
              I&apos;ll pay later
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AdmissionPaymentModal;
