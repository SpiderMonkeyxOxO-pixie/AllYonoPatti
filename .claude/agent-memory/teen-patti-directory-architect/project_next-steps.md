---
name: teen-patti-next-steps
description: Resume point — AllYonoPatti is live; next session's likely focus is the DhanGame launch on 2026-07-23
metadata:
  type: project
---

Site launched 2026-07-18 and is live at https://allyonopatti.com (see [[teen-patti-directory-status]] for deployment details). Owner signed off 2026-07-19 with "See you on 23!" — almost certainly meaning the **DhanGame launch date, 23 July 2026**, so that's the most likely reason for the next session.

**Why:** Pickup list for whatever session runs next.

**How to apply — the 23rd:**
1. **Update the DhanGame listing with real info** once it's actually launched: `src/data/games/misc-platforms.ts`'s `dhan-game` entry currently says "has not launched, no features to review yet" in `shortDescription`/`fullDescription`/`informationalStatus` — replace with verified facts once available, following the same never-invent rules as every other listing. Same for whether the advertised bonus terms (₹100–500 welcome, up to 200% first deposit — see the [[teen-patti-directory-status]] note) held up or changed.
2. The homepage countdown card removes itself automatically once the release window passes (`getActiveUpcomingGames()` filters by date) — no action needed there.
3. Consider whether `/blog/dhan-game-launch-details` needs an update note or a follow-up post now that real info exists, rather than leaving it as a pre-launch-only piece.
4. If a real download URL, promo code, or official domain gets supplied, wire them in the same way every other game's data was added this project (owner supplies via chat, Claude verifies and implements — see [[owner-profile]] for how that exchange usually goes).

**Still open, lower priority (carried over from 2026-07-18, not blockers):**
- **Contact email** — site currently shows `contact@allyonopatti.com`. Asked the owner whether that's real; never got a direct answer (conversation moved on). Worth re-confirming.
- **`CONTACT_FORM_ENDPOINT`** — still unset; form works but can't actually deliver messages.
- **`promo-code.txt`** — was still blank (0 live codes) as of last check. Whether the owner has started entering real codes since launch is unknown — check on resume.
- Which promo codes from allyonoupdate.com to import, if any (see prior notes — domain-like "codes" there should not be imported as codes without explicit confirmation).
- 2 unidentified hash-named logo files in `WEBP YONO LOGO/`, and Max Rummy's PNG-not-WebP logo — both cosmetic, no rush.
- `hero.jpg` is only 600×300 source resolution, visibly soft at large viewport widths — ask for a higher-res version if ever raised again.

**Verify before relying on it**: whether editing `promo-code.txt` on the live server now reflects without running `deploy-promo.sh` at all — the architecture changed to read it live via an API route partway through 2026-07-18, but this wasn't independently confirmed end-to-end. Test it directly if the owner asks about the current promo-code workflow.

**Deploy command** (same as before, still correct): `cd /www/wwwroot/allyonopatti.com && git pull && bash scripts/deploy-promo.sh`.

Related: [[teen-patti-directory-status]], [[owner-profile]].
