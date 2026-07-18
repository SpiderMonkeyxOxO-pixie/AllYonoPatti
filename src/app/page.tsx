import Image from "next/image";
import Link from "next/link";
import { GameCard } from "@/components/ui/GameCard";
import { featuredGames, games } from "@/data/games";
import { INDEPENDENCE_NOTICE } from "@/lib/compliance";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Teen Patti Games India 2026 | Promo Codes & Rewards Directory",
  description:
    "Browse an independent directory of 53 Teen Patti games and related platforms. Neutral information on features, promo codes, rewards, safety checks, and download links — not a betting site.",
  path: "/",
  keywords: [
    "Teen Patti",
    "Teen Patti games India",
    "Teen Patti promo codes",
    "Teen Patti rewards",
    "Teen Patti apps",
    "Teen Patti directory",
    "Indian card games",
  ],
});

export default function HomePage() {
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
              India&apos;s Independent Teen Patti Directory
            </h1>
            <p className="mt-4 text-lg text-brand-100">
              {games.length} games, covered neutrally — features, promo
              codes, and the safety checks worth doing before you install
              anything.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/games"
                className="inline-flex min-h-12 items-center rounded-lg bg-gold-400 px-5 text-base font-semibold text-brand-950 hover:bg-gold-300"
              >
                Browse all {games.length} games
              </Link>
              <Link
                href="/guides/what-is-teen-patti"
                className="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-5 text-base font-medium text-white hover:bg-white/10"
              >
                New to Teen Patti? Start here
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-8">
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

        <section aria-labelledby="featured-heading" className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <h2
              id="featured-heading"
              className="font-display text-2xl font-bold text-slate-900"
            >
              Featured listings
            </h2>
            <Link
              href="/games"
              className="inline-flex min-h-11 items-center text-sm font-medium text-brand-700 hover:underline"
            >
              View the full directory
            </Link>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            A cross-section of the directory. Featuring is an editorial choice
            and is not a recommendation or ranking.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featuredGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        <section aria-labelledby="explore-heading" className="mt-14">
          <h2
            id="explore-heading"
            className="font-display text-2xl font-bold text-slate-900"
          >
            Explore the directory
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            <Link
              href="/promo-codes"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">Promo codes</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Promo-code status for every listed game, with plain-language
                notes on conditions and why codes stop working. Codes are
                shown only when supplied and verified — never invented.
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
              href="/guides"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Teen Patti guides
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Rules, hand rankings, terminology, and how the Indian card
                game compares with poker — written for people learning from
                scratch.
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
                A high-level look at how online gaming is regulated in India
                and why the answer depends on your state.
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
