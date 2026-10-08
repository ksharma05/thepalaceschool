import { AGASTY_WIDGET_SCRIPT_URL } from '../config/agasty';

export interface AgastyPaymentRenderOptions {
  centerId: number;
  boardId: number;
  admissionId: number;
  token: string;
  el?: string | HTMLElement;
  returnUrl?: string;
}

declare global {
  interface Window {
    AgastyPayment?: {
      render: (options: AgastyPaymentRenderOptions) => void;
    };
  }
}

const LOAD_TIMEOUT_MS = 15_000;

/**
 * Cached across calls so a double mount, a StrictMode re-run or two components
 * all share one network request. Reset to null on failure so Retry can work.
 */
let loadPromise: Promise<void> | null = null;

/**
 * Inject Agasty's payment widget script, once.
 *
 * Loaded on demand rather than from index.html: it is only ever needed after an
 * admission has been submitted, and keeping it out of the document until then
 * means the vendor script never coexists with the filled-in form, which carries
 * a child's name, date of birth and the parents' contact details.
 */
export const loadAgastyWidget = (): Promise<void> => {
  if (window.AgastyPayment) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise<void>((resolve, reject) => {
    // An existing node can outlive this module's state across an HMR update.
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${AGASTY_WIDGET_SCRIPT_URL}"]`
    );
    const script = existing ?? document.createElement('script');

    let settled = false;
    const cleanup = () => {
      window.clearTimeout(timeoutId);
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
    };

    /** Lets a later Retry re-attempt instead of resolving the same dead promise. */
    const fail = (message: string) => {
      if (settled) return;
      settled = true;
      cleanup();
      loadPromise = null;
      script.remove();
      reject(new Error(message));
    };

    function onLoad() {
      if (settled) return;
      // A 200 that served an HTML error page would fire `load` without registering.
      if (!window.AgastyPayment) {
        fail('Agasty payment widget loaded but did not register');
        return;
      }
      settled = true;
      cleanup();
      resolve();
    }

    function onError() {
      fail('Failed to load the Agasty payment widget');
    }

    const timeoutId = window.setTimeout(
      () => fail('Timed out loading the Agasty payment widget'),
      LOAD_TIMEOUT_MS
    );

    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);

    if (!existing) {
      // Classic script, not a module: it is an IIFE that reads `document.currentScript`.
      script.src = AGASTY_WIDGET_SCRIPT_URL;
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return loadPromise;
};

/**
 * Hand a container over to the widget.
 *
 * Resolves once `render()` has been *invoked* — the vendor function returns
 * `undefined` and fetches its payment context afterwards, painting both success
 * and failure into the container itself. So a resolved promise means "the script
 * loaded and we handed off", never "the fee row is on screen".
 */
export const renderAgastyWidget = async (
  options: AgastyPaymentRenderOptions
): Promise<void> => {
  await loadAgastyWidget();
  window.AgastyPayment!.render(options);
};
