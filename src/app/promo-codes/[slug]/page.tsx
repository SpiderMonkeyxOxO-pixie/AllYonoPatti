import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection, type FaqItem } from "@/components/ui/FaqSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CopyButton } from "@/components/ui/CopyButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { games, getGameBySlug, type GameEntry } from "@/data/games";
import {
  PROMO_CHANGE_NOTICE,
  promoStatusLabels,
} from "@/lib/compliance";
import { buildMetadata, formatDate } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return buildMetadata({
    title: `${game.name} Promo Code — Status & Conditions`,
    description: `Current ${game.name} promo code status: ${promoStatusLabels[game.promoStatus]}. What a ${game.name} code may provide, eligibility conditions, and why codes stop working.`,
    path: `/promo-codes/${game.slug}`,
    image: game.featuredImage,
  });
}

function buildPromoFaqs(game: GameEntry): FaqItem[] {
  const label = promoStatusLabels[game.promoStatus] ?? game.promoStatus;
  return [
    {
      question: `Is there a working ${game.name} promo code today?`,
      answer: `The recorded status is "${label}". ${game.promoCode ? `The code on record is shown above, but its current validity is not guaranteed — operators can withdraw codes at any time.` : `No code has been supplied and reviewed for ${game.name}, so none is published here. Be cautious of sites that always seem to have a code for every app; that pattern usually means codes are being invented.`}`,
    },
    {
      question: `Can this directory guarantee a ${game.name} code will work?`,
      answer:
        "No, and neither can anyone else outside the operator. Whether a code applies depends on the operator's current campaign, your account's eligibility, your region, and timing. This directory records status honestly rather than promising outcomes.",
    },
    {
      question: `Someone sent me a ${game.name} code with a big reward attached. Should I trust it?`,
      answer:
        "Treat unsolicited codes with suspicion, especially when they arrive with urgency ('today only') or ask you to visit a link, share an OTP, or pay a fee to 'unlock' the reward. Legitimate promo codes never require payments or credentials to redeem.",
    },
    {
      question: `Will new ${game.name} codes be added here?`,
      answer: `If a code for ${game.name} is supplied and passes review, this page will list it with its conditions and a last-checked date. Status changes are recorded rather than overwritten, and expired codes are labelled as expired rather than removed silently.`,
    },
  ];
}

export default async function PromoPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const statusLabel = promoStatusLabels[game.promoStatus] ?? game.promoStatus;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Promo Codes", href: "/promo-codes" },
          { name: game.name, href: `/promo-codes/${game.slug}` },
        ]}
      />

      <header className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Image
          src={game.logo}
          alt={`${game.name} logo`}
          width={72}
          height={72}
          className="h-18 w-18 shrink-0 rounded-2xl border border-slate-200 object-cover"
          priority
        />
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
            {game.name} promo code information
          </h1>
          <p className="mt-2 text-slate-600">
            The recorded promo-code status for {game.name}, with the
            conditions and cautions that apply to codes for apps like this.
          </p>
        </div>
      </header>

      {/* Status card */}
      <section
        aria-labelledby="status-heading"
        className="mt-7 rounded-xl border border-slate-200 bg-white p-5"
      >
        <h2 id="status-heading" className="text-lg font-semibold text-slate-900">
          Current status
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <StatusBadge status={game.promoStatus} kind="promo" />
          <span className="text-sm text-slate-600">
            {game.promoLastChecked
              ? `Last checked ${formatDate(game.promoLastChecked)}`
              : "Not yet independently checked"}
          </span>
        </div>
        <div className="mt-4">
          {game.promoCode ? (
            <p className="text-slate-700">
              Recorded code:{" "}
              <code className="rounded bg-slate-100 px-2 py-1 font-mono text-base">
                {game.promoCode}
              </code>
            </p>
          ) : (
            <p className="text-sm leading-relaxed text-slate-600">
              No promo code is on record for {game.name}. This directory
              publishes a code only after it has been supplied and reviewed;
              it never invents codes to fill space. The status &quot;
              {statusLabel}&quot; means exactly that — nothing has been
              confirmed either way.
            </p>
          )}
        </div>

        {/* Daily release slots */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Daily release slots
            {game.promoDaily?.date &&
              ` — ${formatDate(game.promoDaily.date)}`}
          </h3>
          <dl className="mt-2 divide-y divide-slate-100">
            {(
              [
                ["Morning", game.promoDaily?.morning],
                ["Afternoon", game.promoDaily?.afternoon],
                ["Evening", game.promoDaily?.evening],
              ] as const
            ).map(([label, code]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-2 py-2"
              >
                <dt className="w-24 shrink-0 text-xs font-medium text-slate-500">
                  {label}
                </dt>
                {code ? (
                  <>
                    <dd className="min-w-0 flex-1">
                      <code className="block truncate rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
                        {code}
                      </code>
                    </dd>
                    <CopyButton
                      value={code}
                      label={`Copy the ${label.toLowerCase()} code for ${game.name}`}
                    />
                  </>
                ) : (
                  <dd className="flex-1 text-xs text-slate-400">
                    Not released yet
                  </dd>
                )}
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs text-slate-500">
            Slots are filled only when a code is supplied and reviewed for
            that release period — empty slots are never filled with guesses.
          </p>
        </div>
      </section>

      {/* What a code may provide */}
      <section aria-labelledby="provides-heading" className="mt-10">
        <h2
          id="provides-heading"
          className="text-xl font-semibold text-slate-900"
        >
          What a {game.name} code may provide
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {game.promoDescription ??
            `No specific promo details have been verified for ${game.name}. In this app segment, codes typically grant small amounts of bonus credit, extra spins or chips, or entry to a limited-time offer. What any individual code actually provides is set entirely by the operator's current campaign, and advertised values often come with playthrough or withdrawal restrictions attached.`}
        </p>
      </section>

      {/* Eligibility and conditions */}
      <section aria-labelledby="conditions-heading" className="mt-10">
        <h2
          id="conditions-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Eligibility and conditions
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {game.promoConditions ??
            "No conditions are on record for this listing. Typical conditions in this segment include: new accounts only, one redemption per user or device, minimum deposit requirements, regional availability, and expiry windows. Assume every code has conditions even when none are shown alongside it."}
        </p>
      </section>

      {/* Where codes are entered */}
      <section aria-labelledby="where-heading" className="mt-10">
        <h2 id="where-heading" className="text-xl font-semibold text-slate-900">
          Where a code is normally entered
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Apps in this segment usually accept codes in one of three places: a
          field during account sign-up, a &quot;redeem&quot; or
          &quot;gift&quot; section inside the app&apos;s wallet or profile
          area, or a bonus banner that opens a code entry box. If {game.name}{" "}
          offers no visible entry point, that is a sign the app may not run a
          code programme at all — regardless of what third-party pages claim.
        </p>
      </section>

      {/* Why codes fail */}
      <section aria-labelledby="fail-heading" className="mt-10">
        <h2 id="fail-heading" className="text-xl font-semibold text-slate-900">
          Common reasons a code does not work
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-slate-700">
          <li>The campaign ended — codes usually expire quickly and quietly.</li>
          <li>The code was limited to new accounts or first deposits.</li>
          <li>A redemption cap was reached before you tried it.</li>
          <li>The code was region-restricted or app-version-specific.</li>
          <li>The code was mistyped, or never real in the first place.</li>
        </ul>
      </section>

      {/* Expiry warning */}
      <section
        aria-labelledby="expiry-heading"
        className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5"
      >
        <h2 id="expiry-heading" className="text-lg font-semibold text-amber-900">
          Expiry and availability
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-amber-900">
          {PROMO_CHANGE_NOTICE} A status shown on this page reflects the last
          recorded check, not a live guarantee.
        </p>
      </section>

      {/* Safety warning */}
      <section aria-labelledby="fake-heading" className="mt-10">
        <h2 id="fake-heading" className="text-xl font-semibold text-slate-900">
          Watch out for fake codes and impersonation
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Fake promo codes are a common lure. Warning signs include codes
          promising unusually large rewards, pages or messages impersonating{" "}
          {game.name} support staff, requests to pay a fee or share an OTP to
          &quot;activate&quot; a bonus, and download links bundled with a
          code. A real code never costs money to redeem and never needs your
          banking credentials. When in doubt, redeem nothing and verify with
          the operator directly.
        </p>
      </section>

      {/* Link to game profile */}
      <section
        aria-labelledby="profile-heading"
        className="mt-10 rounded-xl border border-slate-200 bg-white p-5"
      >
        <h2
          id="profile-heading"
          className="text-lg font-semibold text-slate-900"
        >
          About {game.name}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {game.shortDescription}
        </p>
        <Link
          href={`/games/${game.slug}`}
          className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-brand-600 px-4 text-sm font-medium text-white hover:bg-brand-700"
        >
          View the full {game.name} profile
        </Link>
      </section>

      <FaqSection items={buildPromoFaqs(game)} />

      <p className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500">
        Page published {formatDate(game.publishedAt)} · Last updated{" "}
        {formatDate(game.updatedAt)}. Spotted an out-of-date status?{" "}
        <Link href="/corrections-policy" className="underline">
          Let us know
        </Link>
        .
      </p>
    </div>
  );
}
