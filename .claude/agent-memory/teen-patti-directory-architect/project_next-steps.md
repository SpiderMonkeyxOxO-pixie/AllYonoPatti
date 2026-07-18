---
name: teen-patti-next-steps
description: Pre-launch checklist and resume point — AllYonoPatti is planned to publish 2026-07-18, day after this session
metadata:
  type: project
---

End of 2026-07-17 session: site feature-complete (redesign, download links, all 15 articles with FAQ/links, daily promo-code system, promo-visibility UI, languages/website copy) and audited (typecheck/lint/build all clean, full route sweep clean, 3 real bugs found and fixed — see [[teen-patti-directory-status]]). **Owner said they will publish the site 2026-07-18.**

**Why:** This is the pickup list for whatever session runs next, likely the launch session itself.

**How to apply — blockers before publishing (highest priority, ask owner directly if not yet resolved):**
1. **Production domain** — `NEXT_PUBLIC_SITE_URL` is unset; code falls back to the placeholder `https://allyonopatti.com`. Canonical URLs, sitemap, robots.txt, and JSON-LD all depend on this being correct. No `.env` file exists yet, only `.env.example`.
2. **Contact email** — `NEXT_PUBLIC_CONTACT_EMAIL` unset, placeholder `contact@allyonopatti.com` shown on contact/policy pages.
3. **`CONTACT_FORM_ENDPOINT`** unset — the contact form validates input but honestly tells users it can't send and to email directly instead. Fine as a stopgap, not ideal for a live launch.
4. **`promo-code.txt` is currently blank** (0 live codes, by design — never shipped with invented codes). This isn't a blocker exactly, but the site launches with zero visible promo codes unless the owner enters real ones first. Workflow: fill in codes → `npm run promo:reset` is for the *next* day, not needed before first entries → ask Claude to rebuild → verify → deploy.

**Lower-priority, no rush:**
5. Which promo codes from allyonoupdate.com to import, if any (plain codes: "LUCKYMAX" for 777 Game, "101z-FreeSpins0717" etc. for 101Z, "bingo101.buzz" for Bingo 101). Domain-like "codes" there (gamerummy.com, indslots.vip, etc.) look like download links, not codes — don't import as codes without explicit confirmation.
6. Identity of 2 unused hash-named logo files in `WEBP YONO LOGO/` (`aelorbg65owsgr1pvyv2.webp`, `at9zwghcmujmrj8fze1h.webp`).
7. Optional: higher-resolution replacement for `hero.jpg` (currently only 600×300, visibly soft at large viewport widths) and for Max Rummy's PNG logo (only non-WebP game asset).

**How to enter daily promo codes (current, correct workflow — supersedes any older instruction to edit `src/data/games/*.ts` directly):**
Edit `promo-code.txt` at the repo root: `slug | name | morning | afternoon | evening`, one row per game, plus a shared `DATE | YYYY-MM-DD` line. Fill in a code as it's released, leave blank if not out yet. Run `npm run promo:reset` at the start of each new day to clear all cells and bump DATE in one step (recommended over clearing 53 rows by hand). Ask Claude to rebuild after editing — it's baked in at build time, not live-updated. Full instructions are in the file's own header comments, including the safety-net warnings the parser can emit.

**Deployment reminder:** this repo is not under version control (`git init` never run) and `promo-code.txt` is a plain file the build reads via Node `fs` — wherever this gets deployed, that file needs to travel with the deployment and be re-editable there, or the daily-code workflow breaks.

Related: [[teen-patti-directory-status]], [[owner-profile]].
