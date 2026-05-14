/**
 * Decodes a Base64 URL-encoded string.
 * Used to decode image URLs returned by the school info API.
 */
export const decodeBase64Url = (str: string): string => {
  try {
    const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    return atob(base64);
  } catch {
    return str;
  }
};
