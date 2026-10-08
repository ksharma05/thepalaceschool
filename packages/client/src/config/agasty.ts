// Agasty integration configuration.
//
// Deliberately NOT env-overridable, unlike `config/api.ts`: the payment widget
// derives its OWN API base by sniffing its own <script src> hostname. Ours must
// match it, and we only control one of the two. An env var would make "our POST
// hits dev while the widget's context GET hits prod" representable — and that
// failure mode looks like a missing admission, not a misconfiguration.
const AGASTY_BASE_URL = 'https://server-core.agasty.ai';

export const AGASTY_WIDGET_SCRIPT_URL =
  'https://agasty.ai/embed/admission-payment-widget.js';

/** Where a parent can see and pay fees outside this flow. Same destination as the header's portal link. */
export const AGASTY_FEE_PORTAL_URL = 'https://agasty.ai/signin';

export const ADMISSION_ENQUIRY_PATH = '/admission-enquiry';

/** The Palace School's single center/board on Agasty. */
export const AGASTY_DEFAULTS = {
  CENTER_ID: 1837,
  BOARD_ID: 295,
} as const;

/**
 * Coerce a `?centerId=`/`?boardId=` query value to a usable id.
 *
 * Handles `null`, `''` (what `searchParams.get()` returns for a bare `?centerId=`),
 * `'0'`, `'abc'` and `'12.5'` uniformly by falling back, so callers never have to
 * build a URL like `…/center//board/…`.
 */
export const resolveAgastyId = (raw: string | null, fallback: number): number => {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
};

// Builder functions rather than the flat endpoint strings used in `config/api.ts`,
// because every Agasty path is parameterised by center and board.
export const AGASTY_ENDPOINTS = {
  admissionCreate: (centerId: number, boardId: number) =>
    `${AGASTY_BASE_URL}/agasty/api/v1/admMngmnt/center/${centerId}/board/${boardId}`,
  centerInfo: (centerId: number) =>
    `${AGASTY_BASE_URL}/agasty/api/v1/unauth/info/center/${centerId}`,
} as const;

/**
 * Shown as a "return to our site" link on Agasty's payment-status page.
 *
 * Purely a fallback for when the original tab is gone (mobile tab eviction) —
 * the modal handles the normal case. Carries no token: this URL ends up in
 * browser history and referrer headers.
 */
export const buildAdmissionReturnUrl = (centerId: number, boardId: number): string => {
  const params = new URLSearchParams({
    centerId: String(centerId),
    boardId: String(boardId),
    paymentReturn: '1',
  });
  return `${window.location.origin}${ADMISSION_ENQUIRY_PATH}?${params.toString()}`;
};
