declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires a GA4 event if gtag has loaded; a no-op otherwise (e.g. blocked by an ad blocker). */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

/**
 * Appends UTM params to a URL without disturbing whatever query string it
 * already has (e.g. a game's own `?code=...&t=<unix-ts>` referral params).
 * Returns the URL unchanged if it isn't parseable rather than throwing —
 * an outbound button must still work even if tagging fails.
 */
export function withUtm(url: string, params: Record<string, string>): string {
  try {
    const u = new URL(url);
    for (const [key, value] of Object.entries(params)) {
      u.searchParams.set(key, value);
    }
    return u.toString();
  } catch {
    return url;
  }
}
