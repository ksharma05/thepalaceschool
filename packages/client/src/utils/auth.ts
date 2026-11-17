const TOKEN_KEY = 'token';

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * Reads the `exp` claim (seconds since epoch) from a JWT without verifying it.
 * The server does the real verification; this only lets the UI notice an
 * expired session before making a request. Returns null if unreadable.
 */
const getTokenExpiry = (token: string): number | null => {
  try {
    const payload = token.split('.')[1];
    if (!payload) return null;
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
    const { exp } = JSON.parse(atob(padded));
    return typeof exp === 'number' ? exp : null;
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  if (!token) return false;

  const exp = getTokenExpiry(token);
  if (exp === null || exp * 1000 <= Date.now()) {
    removeToken();
    return false;
  }
  return true;
};

export const getAuthHeaders = (): Record<string, string> => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
