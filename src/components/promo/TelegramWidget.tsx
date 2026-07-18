"use client";

import { useState } from "react";

const TELEGRAM_URL = "https://t.me/AllYonoPatti";

/**
 * Persistent floating channel-join CTA, mirrored on the opposite corner
 * from PromoAlert so the two never overlap. Telegram's own brand blue is
 * used deliberately (not the site's purple/gold) — the recognizable colour
 * is part of what makes the icon legible as "this opens Telegram" at a
 * glance. Dismissible per visit; a reload brings it back, same as
 * PromoAlert's dismissal model.
 */
export function TelegramWidget() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="fixed bottom-20 left-4 z-50 lg:bottom-6 lg:left-6">
      <div className="relative flex items-center">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#2AABEE] py-3 pr-4 pl-3 text-sm font-semibold text-white shadow-lg hover:bg-[#229ED9]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.15" />
            <path
              d="M18.4 7.3 16.5 17c-.14.66-.53.82-1.08.51l-3-2.2-1.44 1.4c-.16.16-.3.3-.6.3l.22-3.1 5.66-5.1c.25-.22-.05-.35-.38-.13l-7 4.4-3-.95c-.66-.2-.67-.66.14-.98l11.7-4.5c.55-.2 1.03.13.83.98Z"
              fill="white"
            />
          </svg>
          <span className="hidden sm:inline">
            Join our Telegram Channel and be updated!
          </span>
          <span className="sm:hidden">Join our Telegram</span>
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss Telegram invite"
          className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-500 shadow-md hover:text-slate-800"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
