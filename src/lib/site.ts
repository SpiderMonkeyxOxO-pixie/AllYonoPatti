/**
 * Central site configuration.
 *
 * The production domain is configurable via NEXT_PUBLIC_SITE_URL.
 * The fallback below is a placeholder and is recorded in
 * CONTENT-COMPLETION-REPORT.md as awaiting confirmation.
 */

export const siteConfig = {
  name: "AllYonoPatti",
  tagline: "Independent Teen Patti game directory",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://allyonopatti.com").replace(
    /\/$/,
    "",
  ),
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@allyonopatti.com",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-DY32HFLYDN",
  logo: "/images/site/logo.png",
  locale: "en_IN",
} as const;

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
