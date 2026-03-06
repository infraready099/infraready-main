/**
 * Central config for the landing page.
 *
 * Set NEXT_PUBLIC_APP_URL in Vercel env vars to point to the app deployment.
 * Falls back to the Vercel preview URL during development.
 */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.infraready.io";

export const APP_LINKS = {
  signIn:     `${APP_URL}/login`,
  getStarted: `${APP_URL}/projects/new`,
  dashboard:  `${APP_URL}/projects`,
};
