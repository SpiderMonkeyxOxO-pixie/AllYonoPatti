"use client";

import { useEffect, useState } from "react";

/**
 * Tiny pulsing dot shown on the header's "Promo Codes" button when a
 * daily code is live. Fetches /api/promo-status client-side rather than
 * receiving it from the (static) server-rendered Header, so it reflects a
 * promo-code.txt edit immediately without a rebuild — same pattern as
 * PromoAlert and BottomNav.
 */
export function PromoPulseDot() {
  const [hasFreshPromo, setHasFreshPromo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/promo-status")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count?: number } | null) => {
        if (!cancelled && data) setHasFreshPromo((data.count ?? 0) > 0);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!hasFreshPromo) return null;

  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
      <span className="animate-promo-pulse absolute inset-0 rounded-full bg-brand-700" />
      <span className="relative h-2.5 w-2.5 rounded-full bg-brand-700" />
    </span>
  );
}
