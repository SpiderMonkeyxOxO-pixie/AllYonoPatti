"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PromoAlertProps = {
  /** How many games have a live daily code right now. 0 renders nothing. */
  count: number;
};

/**
 * Small pulsing corner badge that only appears when promo-code.txt has an
 * actual live code for today — never a manufactured "new offer" nudge.
 * Collapsed by default (icon only); a click reveals the CTA.
 *
 * This renders from the root layout, outside `children`, so React never
 * unmounts it on client-side navigation between pages — plain component
 * state is enough to keep a dismissal in effect for the rest of the visit
 * without reaching for sessionStorage. A hard reload (or tomorrow's
 * rebuild, once new codes replace today's) naturally resets it.
 */
export function PromoAlert({ count }: PromoAlertProps) {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (count === 0 || dismissed) return null;

  const dismiss = () => {
    setOpen(false);
    setDismissed(true);
  };

  return (
    <div className="fixed right-4 bottom-20 z-50 lg:right-6 lg:bottom-6">
      {open && (
        <div
          role="dialog"
          aria-label="New promo code available"
          className="on-dark relative mb-3 w-72 rounded-2xl border border-gold-400/40 bg-linear-to-br from-brand-950 via-brand-900 to-brand-800 p-4 shadow-xl"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full text-brand-200 hover:bg-white/10 hover:text-white"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <p className="font-display pr-6 text-lg font-semibold text-white">
            New promo code
          </p>
          <p className="mt-1 text-sm text-brand-100">
            {count === 1
              ? "1 game has a fresh code today."
              : `${count} games have a fresh code today.`}
          </p>
          <Link
            href="/promo-codes"
            onClick={dismiss}
            className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-gold-400 px-4 text-sm font-semibold text-brand-950 hover:bg-gold-300"
          >
            Claim it now
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={
          open
            ? "Hide new promo code details"
            : `New promo code available for ${count} game${count === 1 ? "" : "s"} — show details`
        }
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-brand-950 shadow-lg hover:bg-gold-300"
      >
        <span
          aria-hidden="true"
          className="animate-promo-pulse absolute inset-0 rounded-full bg-gold-400"
        />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M2.5 8.5A2.5 2.5 0 0 1 5 6h14a2.5 2.5 0 0 1 0 5H5a2.5 2.5 0 0 1-2.5-2.5ZM12 6v14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6c-1.5 0-3-.9-3-2.5S10 1 11 1.5 12 4 12 6ZM12 6c1.5 0 3-.9 3-2.5S13 1 12 1.5 12 4 12 6Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
