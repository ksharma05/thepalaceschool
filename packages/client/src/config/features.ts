// Runtime feature flags for optional site sections.
//
// Defaults ship with the build so the app renders correctly with zero configuration
// (same convention as `config/api.ts`). Unlike the `VITE_*` values there, these are
// overridable at RUNTIME rather than build time: the override lives in the server's
// StaticContent collection under the `SITE_FEATURES_PAGE_KEY` row, so a section can be
// switched on or off from the admin dashboard without a rebuild or redeploy.
//
// Keyed by section so new flags can be added alongside `gallery` without reworking this.

export interface SiteFeatures {
  gallery: {
    /** Renders the gallery's search box + category filter chips. */
    showSearchAndFilter: boolean;
  };
}

/** The `StaticContent.page` key whose `content` holds a JSON-encoded Partial<SiteFeatures>. */
export const SITE_FEATURES_PAGE_KEY = 'site-features';

export const DEFAULT_SITE_FEATURES: SiteFeatures = {
  gallery: {
    showSearchAndFilter: false,
  },
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Merges a parsed override onto the defaults, one section at a time, keeping only
 * booleans that the defaults already declare. A partial, misspelled or wrongly-typed
 * row therefore degrades to the default flag instead of leaving it `undefined`.
 */
export const mergeSiteFeatures = (raw: unknown): SiteFeatures => {
  if (!isRecord(raw)) return DEFAULT_SITE_FEATURES;

  const merged = {} as SiteFeatures;

  (Object.keys(DEFAULT_SITE_FEATURES) as Array<keyof SiteFeatures>).forEach((section) => {
    const defaults = DEFAULT_SITE_FEATURES[section];
    const override = raw[section];

    merged[section] = { ...defaults };

    if (!isRecord(override)) return;

    (Object.keys(defaults) as Array<keyof typeof defaults>).forEach((flag) => {
      const value = override[flag];
      if (typeof value === 'boolean') {
        merged[section][flag] = value;
      }
    });
  });

  return merged;
};
