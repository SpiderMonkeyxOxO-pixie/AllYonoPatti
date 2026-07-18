# Content Completion Report

Last updated: 2026-07-17

This report tracks every placeholder, unverified fact, and content gap in
the directory, per the project's compliance rules ("never invent — mark and
record instead").

## 2026-07-17 update: download links added, roster reduced to 53

**Owner-directed reversal of the no-download-button decision.** The initial
build deliberately omitted Download buttons because no download links
existed. On 2026-07-17 the owner supplied a per-game list of links and,
after the affiliate/tracking redirect pattern (`?code=...&t=<unix-ts>`,
non-canonical domains including uono777.co, uonoslots.fun, and
uonovipplay.vip) was flagged, explicitly confirmed these are the owner's
own affiliate/tracking links under their control and directed that real
Download buttons use them. Implemented as `downloadUrl` on `GameEntry`,
rendered conditionally (only when set) with
`target="_blank" rel="noopener noreferrer sponsored"` on game cards, promo
daily cards, and game detail pages, each marked with a visible disclosure
line. An `/affiliate-disclosure` page was added (footer Legal column +
sitemap), and the about / editorial-policy independence wording was
updated accordingly.

**Roster reduced from 56 to 53.** The owner supplied no URL for three
games and confirmed that no-URL means remove (not leave pending):

- Spin 777 (`spin-777`, was in `src/data/games/spin-family.ts`)
- Spin Lucky (`spin-lucky`, was in `src/data/games/spin-family.ts`)
- Ind Bingo (`ind-bingo`, was in `src/data/games/misc-platforms.ts`)

All `relatedGameSlugs` references to the three were removed, Bingo 101's
"one of two bingo-focused titles" prose was corrected to "the only", and
`EXPECTED_GAME_COUNT` is now 53. Their logo/image assets remain in
`public/images/games/` unused (same handling as the other unused-asset
notes below).

**Raw-data anomalies for the owner to double-check against their source:**

1. **777 Game** — the owner's paste had a second domain
   (`www.777game7.com`) glued directly onto the URL value with no
   separator. The clean URL
   (`https://www.777game2.com/?code=H53WZ731GKT&t=1781948890`) was used;
   the owner should confirm whether `777game7.com` was meant to replace it.
2. **Love Rummy** — the owner's paste ended with a stray URL-encoded emoji
   (`%F0%9F%94%97`); it was omitted and the clean URL used.

Note: the download links are recorded as owner-controlled referral links
only. They do not change any `verificationStatus` or `promoStatus` — no
destination has been independently verified as an official channel.

## 2026-07-17 update: default languages set, official-website copy changed

**Supported languages.** The owner directed that all games show "English,
Hindi" for languages, in place of the generic "awaiting verification" text.
Implemented as the new default in `defineGame()` (`src/data/games/define.ts`)
— it cascades to all 53 games, none of which override it individually — with
a "(reported)" qualifier on the Quick Facts row, matching how `platform` and
`supportedDevices` already flag category-level (not independently
per-app-verified) facts. No per-game evidence was supplied; this is a
directory-wide generalisation for the Teen Patti/Indian-rummy app category,
not a claim that each app was individually checked.

**Official website fallback text.** Changed from the generic "Information
awaiting verification" to "Not determined" on the Quick Facts row
specifically — a copy change only, not a data change; still zero official
websites are on record for any game.

## Verification status summary

| Item | Status |
|---|---|
| Game entries | 53 / 53 present, all `verificationStatus: "awaiting-review"` |
| Promo codes | 0 supplied. All 53 promo pages show `promoStatus: "awaiting-review"` and "Awaiting verification" in the hub |
| Download links | 53 / 53 supplied by the owner 2026-07-17 (owner-controlled referral links; destinations not independently verified) |
| Official websites | None supplied for any game — Quick Facts shows "Not determined" |
| Supported languages | Defaulted 2026-07-17 to "English, Hindi (reported)" for all 53 — category-level generalisation, not independently confirmed per app |
| Platform/device facts | Marked "(reported)" — Android assumed from segment norms, not confirmed |
| Last-checked dates | None set — pages show "Not yet independently checked" |
| Reward details per game | None verified — pages render the neutral fallback text |

## Awaiting owner input

1. **Production domain** — code falls back to `https://allyonopatti.com`
   (placeholder). Set `NEXT_PUBLIC_SITE_URL` before launch.
2. **Contact email** — placeholder `contact@allyonopatti.com`. Set
   `NEXT_PUBLIC_CONTACT_EMAIL`.
3. **Contact-form delivery** — `CONTACT_FORM_ENDPOINT` unset; the form
   validates but honestly reports it cannot send and points to email.
4. **Promo codes** — when the owner supplies codes with evidence, update the
   game's entry (`promoCode`, `promoStatus`, `promoLastChecked`,
   `promoConditions`) in `src/data/games/*.ts`. Daily release-period codes
   go in `promoDaily: { date, morning?, afternoon?, evening? }`; empty slots
   render "Not released yet".
5. **Codes visible on AllYonoUpdate.com NOT imported** — the layout
   reference page (allyonoupdate.com/promo-code-updates) shows some morning
   codes (e.g. "LUCKYMAX" for 777 Game) plus several domain-like strings
   presented as codes (e.g. "gamerummy.com", "indslots.vip",
   "clubinrvip1.one"). None were copied into this site's data: the plain
   codes await owner confirmation, and the domain-like entries look like
   download-site addresses rather than promo codes, which conflicts with
   the no-unofficial-download-links rule. Owner should confirm which, if
   any, to import and with what status.
6. **Two unidentified logo files** not used (hash-named):
   `WEBP YONO LOGO/aelorbg65owsgr1pvyv2.webp`, `at9zwghcmujmrj8fze1h.webp`.
   Confirm which games they belong to, if any.
7. **Max Rummy logo is PNG** (`max-rummy.png`), the only non-WebP game
   asset. next/image optimizes it at serve time; supply a WebP if preferred.
8. **`Main-logo.png` (636 KB)** at repo root is unused; the site uses
   `WEBP YONO LOGO/MAIN-LOGO-1024px.webp` copied to
   `public/images/site/logo.webp`.

## Editorial backlog (cornerstone articles)

Published: 9 guides + 6 blog posts. The cornerstone list is complete —
the final four were added 2026-07-17:

- Teen Patti Sequence Guide (guide, Rules and Hand Rankings) —
  `teen-patti-sequence-guide`
- Common Teen Patti Variations (guide, Teen Patti Basics) —
  `common-teen-patti-variations`
- Teen Patti in Hindi (guide, Teen Patti Basics) — `teen-patti-in-hindi`
- Teen Patti and Indian Online-Gaming Awareness (blog, Legal and Industry
  Updates) — `teen-patti-and-indian-online-gaming-awareness`

Note: the variations guide describes variants generically and makes no
claim about which of the 53 listed games offer which variants (none
verified). The Hindi guide notes that per-app language support is
unverified. The awareness post stays deliberately high-level with no
state-specific legal conclusions, matching `/legalities`.

## Structural notes

- ~~No affiliate relationships exist, so no affiliate-disclosure page was
  created~~ Superseded 2026-07-17: owner-controlled referral download links
  now exist on all 53 listings, so `/affiliate-disclosure` was created and
  the about / editorial-policy pages now disclose the links instead of
  denying them. See the 2026-07-17 update section above.
- Game-page sections "Commonly reported characteristics" and "Game modes"
  are category-level descriptions (6 variants), explicitly labelled as
  category patterns rather than verified per-app facts. Per-game unique
  content lives in `shortDescription`, `fullDescription`, `safetyNotes`,
  aliases, and related-game sets.
- The `/legalities` page is deliberately high-level with no
  state-by-state conclusions, pending reviewed legal sources.
