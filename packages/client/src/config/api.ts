import { getAuthHeaders, removeToken } from '../utils/auth';

// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://server-production-7e27.up.railway.app';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
  },
  CONTACT: `${API_BASE_URL}/api/contact`,
  CONTENT: `${API_BASE_URL}/api/content`,
  CONTENT_PAGE: (page: string) => `${API_BASE_URL}/api/content/${encodeURIComponent(page)}`,
  SOCIAL_MEDIA: {
    POSTS: `${API_BASE_URL}/api/social-media/posts`,
    STATS: `${API_BASE_URL}/api/social-media/stats`,
    REFRESH: `${API_BASE_URL}/api/social-media/refresh`,
  },
} as const;

export const apiRequest = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  return response;
};

export const ADMIN_LOGIN_PATH = '/admin/login';

/**
 * `apiRequest` for admin-only endpoints: attaches the login token and, when the
 * server answers 401 (missing, expired or revoked session), clears the token
 * and sends the admin back to the login page.
 */
export const authRequest = async (url: string, options: RequestInit = {}) => {
  const response = await apiRequest(url, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  });

  if (response.status === 401) {
    removeToken();
    window.location.assign(ADMIN_LOGIN_PATH);
  }

  return response;
};
