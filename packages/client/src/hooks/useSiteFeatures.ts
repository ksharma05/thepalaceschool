import { useEffect, useState } from 'react';
import { API_ENDPOINTS, apiRequest } from '../config/api';
import {
  DEFAULT_SITE_FEATURES,
  SITE_FEATURES_PAGE_KEY,
  mergeSiteFeatures,
} from '../config/features';
import type { SiteFeatures } from '../config/features';

/**
 * Reads the runtime feature flags from the server, falling back to the build-time
 * defaults on any failure (missing row, unreachable API, malformed JSON).
 *
 * The flags row is optional: `GET /api/content/:page` answers 404 until someone
 * seeds it, which is the expected steady state, so a 404 is not logged as an error.
 */
export const useSiteFeatures = () => {
  const [features, setFeatures] = useState<SiteFeatures>(DEFAULT_SITE_FEATURES);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchFeatures = async () => {
      try {
        const response = await apiRequest(
          API_ENDPOINTS.CONTENT_PAGE(SITE_FEATURES_PAGE_KEY)
        );

        if (cancelled) return;

        // 404 just means no overrides have been configured yet.
        if (response.ok) {
          const result = await response.json();
          if (!cancelled) {
            setFeatures(mergeSiteFeatures(JSON.parse(result.content)));
          }
        } else if (response.status !== 404) {
          console.error('Error fetching site features:', response.status);
        }
      } catch (error) {
        // Network failure, or the stored content was not valid JSON.
        if (!cancelled) {
          console.error('Error loading site features, using defaults:', error);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchFeatures();

    return () => {
      cancelled = true;
    };
  }, []);

  return { features, isLoading };
};
