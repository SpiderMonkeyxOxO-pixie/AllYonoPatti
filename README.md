# AllYonoPatti — Teen Patti Game Directory

A mobile-first, independent informational directory of 53 Teen Patti-related
games. Built with Next.js 16 (App Router), React 19, TypeScript (strict),
and Tailwind CSS 4. Not a casino, betting platform, or APK host.

## Commands

```bash
npm run dev        # local development
npm run build      # production build (fails on invalid game/article data)
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Architecture

- `src/data/games/` — single source of truth for all 53 games.
  `types.ts` defines `GameEntry`; family files hold entries; `index.ts`
  merges and **validates at build time** (duplicate slugs, missing fields,
  invalid related refs, invented promo statuses all fail the build).
- `src/data/articles/` — typed blog posts and guides, also validated.
- `src/app/games/[slug]` and `src/app/promo-codes/[slug]` — statically
  generated from the shared data (53 + 53 pages). Never create per-game
  route files.
- `src/lib/compliance.ts` — shared, approved compliance wording. Reuse it;
  do not weaken it.
- `src/lib/site.ts` — domain/email config via env (see `.env.example`).

## Compliance rules (non-negotiable)

- Never invent promo codes, reward amounts, ratings, versions, licensing
  claims, or official URLs. Unknown facts are marked
  "Information awaiting verification".
- Promo statuses use only: reported-active, unverified, expired,
  availability-unknown, awaiting-review. Never "working"/"verified" without
  supplied evidence.
- No APK hosting or links to unofficial download sources. The only
  download links are the owner-supplied `downloadUrl` referral links
  (disclosed at /affiliate-disclosure); never add any other download link.
- Neutral language only — no casino-style promotional wording.

See `CONTENT-COMPLETION-REPORT.md` for current placeholders and backlog.
