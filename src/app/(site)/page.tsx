import Image from "next/image";
import Link from "next/link";
import { UpcomingGameCard } from "@/components/games/UpcomingGameCard";
import { GameCard } from "@/components/ui/GameCard";
import {
  featuredGames,
  games,
  newestPinnedSlug,
  teenPattiRelevantGames,
} from "@/data/games";
import { getActiveUpcomingGames } from "@/data/upcoming-games";
import { INDEPENDENCE_NOTICE } from "@/lib/compliance";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Teen Patti Rules, Hand Rankings & Guides | Teen Patti Category Guide",
  description: `Learn Teen Patti: complete rules, hand rankings, terminology, and variants — plus an honestly-labelled directory of ${games.length} card/casual apps in the wider ecosystem, with ${teenPattiRelevantGames.length} confirmed to document a real Teen Patti table or mode.`,
  path: "/",
  keywords: [
    "Teen Patti",
    "Teen Patti rules",
    "Teen Patti hand rankings",
    "Teen Patti games India",
    "Teen Patti apps",
    "Teen Patti guide",
    "Teen Patti variants",
    "Indian card games",
  ],
});

export default function HomePage() {
  const upcomingGames = getActiveUpcomingGames();

  return (
    <div>
      <section className="on-dark relative overflow-hidden bg-brand-950">
        <Image
          src="/images/site/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-brand-950/90 via-brand-950/70 to-brand-950/30"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20 lg:py-24">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Teen Patti, Explained — Rules, Rankings, and Real Platforms
            </h1>
            <p className="mt-4 text-lg text-brand-100">
              Everything the game itself involves — boot, blind and seen,
              chaal, sideshow, hand rankings, and every common variant —
              plus an honestly-labelled look at which apps actually document
              a Teen Patti table.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/guides/teen-patti-rules"
                className="inline-flex min-h-12 items-center rounded-lg bg-gold-400 px-5 text-base font-semibold text-brand-950 hover:bg-gold-300"
              >
                Learn the rules
              </Link>
              <Link
                href="/games"
                className="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-5 text-base font-medium text-white hover:bg-white/10"
              >
                Browse the platform directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-8">
        {/* Launch countdown: first thing under the hero so visitors see it immediately. */}
        {upcomingGames.length > 0 && (
          <section aria-labelledby="upcoming-heading" className="mb-10">
            <h2
              id="upcoming-heading"
              className="font-display text-2xl font-bold text-slate-900"
            >
              Coming soon
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Announced platforms not yet available to review.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {upcomingGames.map((game) => (
                <UpcomingGameCard key={game.slug} game={game} />
              ))}
            </div>
          </section>
        )}

        <section
          aria-labelledby="independence-heading"
          className="rounded-xl border border-slate-200 bg-white p-5"
        >
          <h2
            id="independence-heading"
            className="text-sm font-semibold uppercase tracking-wide text-slate-500"
          >
            What this website is — and is not
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {INDEPENDENCE_NOTICE}
          </p>
        </section>

        {/* Core mission: the category education itself, first. */}
        <section aria-labelledby="learn-heading" className="mt-12">
          <h2
            id="learn-heading"
            className="font-display text-2xl font-bold text-slate-900"
          >
            Learn Teen Patti
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            The game itself, explained from scratch — rules, rankings,
            vocabulary, and every common variant.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            <Link
              href="/guides/teen-patti-rules"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Rules, step by step
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Boot, blind and seen, chaal, sideshow, and show — a full
                round explained in order.
              </p>
            </Link>
            <Link
              href="/guides/teen-patti-hand-rankings"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">Hand rankings</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Trail, pure sequence, sequence, colour, pair, high card — the
                full order, with how ties break.
              </p>
            </Link>
            <Link
              href="/guides/teen-patti-terms"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">Terminology</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Blind, chaal, pack, show, sideshow — a plain-language glossary
                of the betting vocabulary.
              </p>
            </Link>
            <Link
              href="/guides/common-teen-patti-variations"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">Variants</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Muflis, AK47, joker rounds, Best of Four, 999, and how each
                one changes the base game.
              </p>
            </Link>
            <Link
              href="/guides/teen-patti-vs-poker"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Teen Patti vs poker
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                What&apos;s actually different, point by point — cards,
                rankings, blind play, and pace.
              </p>
            </Link>
            <Link
              href="/guides"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                All guides &amp; the Hindi glossary
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                The full guide index, including terms in Hindi and English
                side by side.
              </p>
            </Link>
          </div>
        </section>

        {/* Genuinely Teen-Patti-relevant platforms, ahead of the generic
            ecosystem grid — see TeenPattiRelevance in src/data/games/types.ts
            for what "documented" means here. */}
        <section aria-labelledby="tp-platforms-heading" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2
              id="tp-platforms-heading"
              className="font-display text-2xl font-bold text-slate-900"
            >
              Platforms with a documented Teen Patti offering
            </h2>
            <Link
              href="/games"
              className="inline-flex min-h-11 items-center text-sm font-medium text-brand-700 hover:underline"
            >
              See all {games.length} tracked
            </Link>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            {teenPattiRelevantGames.length} of the {games.length} platforms
            tracked in this directory have their own description explicitly
            naming a Teen Patti table or mode. Listing here is informational,
            not a recommendation, and unverified unless marked otherwise.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {teenPattiRelevantGames.map((game) => (
              <GameCard
                key={game.slug}
                game={game}
                isNewest={game.slug === newestPinnedSlug}
              />
            ))}
          </div>
        </section>

        {/* Teen-Patti-specific safety and legal context. */}
        <section aria-labelledby="safety-heading" className="mt-14">
          <h2
            id="safety-heading"
            className="font-display text-2xl font-bold text-slate-900"
          >
            Safety and legal context
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            <Link
              href="/guides/how-to-review-a-teen-patti-platform-safely"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Review a platform safely
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                A five-step checklist for evaluating any Teen Patti app before
                it touches your phone.
              </p>
            </Link>
            <Link
              href="/gambling-awareness"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Gambling awareness
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Age restrictions, warning signs of problematic play, and
                where to find support — written to inform, not to judge.
              </p>
            </Link>
            <Link
              href="/legalities"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Legalities overview
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                A high-level look at how online real-money gaming is
                regulated in India and why the answer depends on your state.
              </p>
            </Link>
          </div>
        </section>


        {/* Generic ecosystem directory — kept, but positioned after the
            category-education and Teen-Patti-relevant sections above rather
            than leading the homepage. */}
        <section aria-labelledby="featured-heading" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2
              id="featured-heading"
              className="font-display text-2xl font-bold text-slate-900"
            >
              Full card &amp; casual-app ecosystem
            </h2>
            <Link
              href="/games"
              className="inline-flex min-h-11 items-center text-sm font-medium text-brand-700 hover:underline"
            >
              View the full directory
            </Link>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            A cross-section of the wider {games.length}-platform directory —
            rummy, slots, spin, bingo, and multi-game apps tracked for
            context, not all of them documented as Teen Patti offerings.
            Featuring is an editorial choice and is not a recommendation or
            ranking.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featuredGames.map((game) => (
              <GameCard
                key={game.slug}
                game={game}
                isNewest={game.slug === newestPinnedSlug}
              />
            ))}
          </div>
        </section>

        {/* Supporting/legacy sections — reachable, not identity-defining. */}
        <section aria-labelledby="more-heading" className="mt-14">
          <h2
            id="more-heading"
            className="font-display text-2xl font-bold text-slate-900"
          >
            More on this site
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            <Link
              href="/promo-codes"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">Promo codes</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Promo-code status for every listed platform, with
                plain-language notes on conditions and why codes stop
                working. Codes are shown only when supplied and verified —
                never invented.
              </p>
            </Link>
            <Link
              href="/rewards"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Rewards &amp; incentives
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                How reward structures on these platforms usually work, what
                restrictions commonly apply, and why no reward is ever
                guaranteed.
              </p>
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">Blog</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Articles on platform safety, spotting fake apps, app
                permissions, and how promo codes actually behave.
              </p>
            </Link>
          </div>
        </section>

        <section aria-labelledby="how-heading" className="mt-14">
          <h2
            id="how-heading"
            className="font-display text-2xl font-bold text-slate-900"
          >
            How this directory works
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="font-semibold text-slate-900">We list</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Each of the {games.length} games gets a profile page and a
                promo-code page built from one shared, validated data source.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="font-semibold text-slate-900">We label</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Every fact carries a status. Anything we have not confirmed
                is marked awaiting verification — we would rather show a gap
                than an invented detail.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="font-semibold text-slate-900">You verify</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Final checks always belong with you and the operator. Our{" "}
                <Link
                  href="/guides/how-to-review-a-teen-patti-platform-safely"
                  className="text-brand-700 underline"
                >
                  platform review guide
                </Link>{" "}
                shows what to look for.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
