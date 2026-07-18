"use client";

import Link from "next/link";
import { trackEvent, withUtm } from "@/lib/analytics";

type Placement = "game_card" | "promo_card" | "game_detail";

type DownloadLinkProps = {
  /** The game's owner-supplied referral URL (`downloadUrl`). */
  href: string;
  gameName: string;
  gameSlug: string;
  /** Where this button renders — tagged into both UTM params and the GA event. */
  placement: Placement;
  /** Visible button text; defaults to "Download". */
  label?: string;
  /** Full class override for contexts that need different button styling. */
  className?: string;
};

/**
 * Outbound download CTA for a game's owner-supplied referral link.
 * Render only when `downloadUrl` is set on the entry — never for games
 * without one, and never with an invented URL. Uses rel="sponsored"
 * because these are affiliate/referral links controlled by the site
 * operator; the full explanation lives at /affiliate-disclosure.
 *
 * UTM params are appended on top of the link's own `?code=...&t=...`
 * query string (never overwritten) so the destination — which the site
 * operator also controls for several of these domains — can see which
 * on-site placement drove each click. A matching GA4 event fires
 * client-side before the browser navigates away.
 */
export function DownloadLink({
  href,
  gameName,
  gameSlug,
  placement,
  label = "Download",
  className,
}: DownloadLinkProps) {
  const taggedHref = withUtm(href, {
    utm_source: "allyonopatti",
    utm_medium: placement,
    utm_campaign: "game_download",
    utm_content: gameSlug,
  });

  return (
    <a
      href={taggedHref}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`Download ${gameName} — referral link, opens an external site in a new tab`}
      onClick={() =>
        trackEvent("download_click", {
          game_name: gameName,
          game_slug: gameSlug,
          placement,
        })
      }
      className={
        className ??
        "inline-flex min-h-11 items-center justify-center gap-1 rounded-lg bg-gold-400 px-3.5 text-sm font-semibold text-brand-950 hover:bg-gold-300"
      }
    >
      {label}
      <span aria-hidden="true">&#8599;</span>
    </a>
  );
}

/**
 * Compact disclosure line shown near Download buttons, per the site's
 * commitment to mark monetized links where they appear.
 */
export function DownloadDisclosureNote({ className }: { className?: string }) {
  return (
    <p className={className ?? "mt-2 text-[11px] leading-relaxed text-slate-500"}>
      Download is a referral link managed by this site&apos;s operator; it
      opens an external platform site.{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline hover:text-slate-700"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}
