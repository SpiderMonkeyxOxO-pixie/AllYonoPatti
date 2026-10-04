import Link from "next/link";
import { PromoDailyCard } from "@/components/promo/PromoDailyCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqSection } from "@/components/ui/FaqSection";
import { games, getGamesWithLivePromo } from "@/data/games";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

// promo-code.txt is edited directly on the server (no rebuild step) — this
// page must re-read it on every request rather than serve a cached/static
// snapshot, or edits would never show up without a manual rebuild.
export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: `Teen Patti Promo Code Status Updates — All ${games.length} Games`,
  description: `Daily promo-code status for all ${games.length} Teen Patti games, with separate morning, afternoon, and evening release slots per platform. Codes are recorded when supplied — never invented or guaranteed.`,
  path: "/promo-codes",
});

const hubFaqs = [
  {
    question: "How often are promo codes updated?",
    answer:
      'Codes are entered manually up to three times a day — morning, afternoon, and evening — as each platform releases them and the information is supplied to this directory. Slots without a supplied code show "Not released yet" rather than an invented value.',
  },
  {
    question: "Are promo codes active for the whole day?",
    answer:
      "Not always. A code can change by release period, timing, app version, or platform notice. Check the morning, afternoon, and evening slots for the latest recorded value, and treat every code as subject to change.",
  },
  {
    question: 'What does "Not released yet" mean?',
    answer:
      "It means no code for that release period has been supplied and recorded for that platform. It may not have been published yet, or it may not exist — this directory does not fill empty slots with guesses. Check back later or open the platform's promo page for context.",
  },
  {
    question: `Does ${siteConfig.name} provide code support?`,
    answer:
      "No. This website is an informational tracker only. It does not handle account access, passwords, OTPs, payments, or private user concerns — those belong to the relevant platform operator, which this directory does not represent.",
  },
];

export default function PromoCodesPage() {
  const games = getGamesWithLivePromo();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Promo Codes", href: "/promo-codes" },
        ]}
      />

      {/* Hero */}
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
        Teen Patti promo code status updates
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Browse the latest recorded promo codes for all {games.length} listed
        platforms, with a separate slot for the morning, afternoon, and
        evening release periods.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="#daily-codes"
          className="inline-flex min-h-12 items-center rounded-lg bg-brand-600 px-5 text-base font-medium text-white hover:bg-brand-700"
        >
          Jump to codes by platform
        </a>
        <Link
          href="/games"
          className="inline-flex min-h-12 items-center rounded-lg border border-slate-300 bg-white px-5 text-base font-medium text-slate-700 hover:bg-slate-50"
        >
          Browse game list
        </Link>
      </div>

      <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        {siteConfig.name} records promo-code information for reference only.
        It does not guarantee that a code will remain active, apply to every
        account, or work across all app versions — and it never publishes a
        code that has not been supplied and reviewed.
      </p>

      {/* Daily codes by platform */}
      <section aria-labelledby="daily-codes-heading" className="mt-12">
        <h2
          id="daily-codes"
          className="scroll-mt-24 text-2xl font-bold text-slate-900"
        >
          <span id="daily-codes-heading">Daily promo codes by platform</span>
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Codes below are entered manually up to three times a day — morning,
          afternoon, and evening — as each platform releases them and the
          information reaches this directory. Tap Copy to copy a code to your
          clipboard. Empty slots show &quot;Not released yet&quot;.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {games.map((game) => (
            <PromoDailyCard key={game.slug} game={game} />
          ))}
        </div>

        <div className="mt-6 space-y-2 text-xs leading-relaxed text-slate-500">
          <p>
            Codes are recorded for reference only. {siteConfig.name} does not
            guarantee a code remains active, applies to every account, or
            works across all app versions.
          </p>
          <p>
            This directory does not host APK files. Download buttons, where
            shown, use referral links managed by this site&apos;s operator
            and open the external platform site — see the{" "}
            <Link href="/affiliate-disclosure" className="underline">
              affiliate disclosure
            </Link>
            . The other buttons lead to each platform&apos;s profile and
            promo pages on this site, where access and official-source
            guidance is provided.
          </p>
        </div>
      </section>

      {/* Before you rely */}
      <section aria-labelledby="rely-heading" className="mt-12">
        <h2 id="rely-heading" className="text-2xl font-bold text-slate-900">
          Before you rely on any code update
        </h2>
        <ul className="mt-4 space-y-3">
          <li className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600">
            Always check the date shown on the notice. Promo-code status can
            change based on release timing, app version, platform notices, or
            account-specific conditions.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600">
            Do not assume an older code update is still current. A newer
            notice may replace it, revise it, or mark it as ended.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600">
            This site does not request passwords, OTPs, payment details, or
            private account screenshots. Never share private information
            through unofficial contact routes.
          </li>
        </ul>
      </section>

      {/* Related updates */}
      <section aria-labelledby="related-heading" className="mt-12">
        <h2 id="related-heading" className="text-2xl font-bold text-slate-900">
          Related updates
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Promo-code notices can sometimes appear alongside broader platform
          changes.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          <Link
            href="/games"
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
          >
            <h3 className="font-semibold text-slate-900">Game list</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Browse the current recorded game directory by category.
            </p>
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
          >
            <h3 className="font-semibold text-slate-900">Blog updates</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Read newly published and revised articles, including promo-code
              awareness guides.
            </p>
          </Link>
          <Link
            href="/editorial-policy"
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md sm:p-5"
          >
            <h3 className="font-semibold text-slate-900">Editorial policy</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              See how promo-code status notices are reviewed and labelled.
            </p>
          </Link>
        </div>
        <p className="mt-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-sm font-medium text-brand-700 hover:underline"
          >
            Back to home
          </Link>
        </p>
      </section>

      <FaqSection items={hubFaqs} />

      {/* Important note */}
      <section
        aria-labelledby="important-heading"
        className="mt-12 rounded-xl border border-slate-200 bg-slate-100 p-5"
      >
        <h2
          id="important-heading"
          className="text-lg font-semibold text-slate-900"
        >
          Important note
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {siteConfig.name} records promo-code status information for general
          reference. Review the current status label and recorded date before
          relying on any release update, and verify details directly with the
          relevant operator. For background, read{" "}
          <Link
            href="/blog/how-promo-codes-usually-work"
            className="text-brand-700 underline"
          >
            how promo codes usually work
          </Link>{" "}
          and{" "}
          <Link
            href="/blog/why-a-promo-code-may-not-work"
            className="text-brand-700 underline"
          >
            why a promo code may not work
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
