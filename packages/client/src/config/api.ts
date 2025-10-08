// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
    VERIFY: `${API_BASE_URL}/api/auth/verify`,
  },
  CONTACT: {
    SUBMIT: `${API_BASE_URL}/api/contact/submit`,
    GET_ALL: `${API_BASE_URL}/api/contact/all`,
  },
  CONTENT: {
    GET: `${API_BASE_URL}/api/content`,
    UPDATE: `${API_BASE_URL}/api/content/update`,
  },
} as const;

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};
