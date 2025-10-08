// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://server-production-7e27.up.railway.app';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
  },
  CONTACT: `${API_BASE_URL}/api/contact`,
  CONTENT: `${API_BASE_URL}/api/content`,
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
