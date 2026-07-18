import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/ui/FaqSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DownloadLink } from "@/components/ui/DownloadLink";
import { GameCard } from "@/components/ui/GameCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { games, getGameBySlug, getRelatedGames } from "@/data/games";
import {
  AWAITING_VERIFICATION,
  NO_APK_NOTICE,
  promoStatusLabels,
} from "@/lib/compliance";
import {
  buildGameFaqs,
  getModesDescription,
  getReportedFeatures,
} from "@/lib/game-content";
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
    title: `${game.name} — Information, Features & Safety Checks`,
    description: `Neutral directory information about ${game.name}: reported features of this ${game.category.toLowerCase()}, promo-code status, access guidance, and safety checks before installing.`,
    path: `/games/${game.slug}`,
    image: game.featuredImage,
  });
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game);
  const faqs = buildGameFaqs(game);
  const features = getReportedFeatures(game);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "All Games", href: "/games" },
          { name: game.name, href: `/games/${game.slug}` },
        ]}
      />

      {/* Name and neutral summary */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Image
          src={game.logo}
          alt={`${game.name} logo`}
          width={88}
          height={88}
          className="h-22 w-22 shrink-0 rounded-2xl border border-slate-200 object-cover"
          priority
        />
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
            {game.name}
          </h1>
          <p className="mt-2 text-slate-600">{game.shortDescription}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <StatusBadge status={game.verificationStatus} kind="verification" />
            <span className="text-xs text-slate-500">{game.category}</span>
          </div>
        </div>
      </header>

      <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        {game.informationalStatus} This page is an independent listing, not an
        official page for {game.name}, and nothing here is a recommendation to
        install or spend.
      </p>

      {/* Quick facts */}
      <section aria-labelledby="facts-heading" className="mt-8">
        <h2 id="facts-heading" className="text-xl font-semibold text-slate-900">
          Quick facts
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">
              Quick facts about {game.name}
            </caption>
            <tbody>
              {[
                ["Name", game.name],
                [
                  "Also seen as",
                  game.aliases?.length ? game.aliases.join(", ") : "—",
                ],
                ["Category", game.category],
                ["Platforms", game.platform.join(", ")],
                ["Devices", game.supportedDevices.join(", ")],
                [
                  "Languages",
                  `${game.supportedLanguages.join(", ")} (reported)`,
                ],
                ["Official website", game.officialWebsite ?? "Not determined"],
                [
                  "Promo code",
                  game.promoCode ??
                    `None on record (${promoStatusLabels[game.promoStatus]})`,
                ],
                [
                  "Last checked",
                  game.lastChecked
                    ? formatDate(game.lastChecked)
                    : "Not yet independently checked",
                ],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-200">
                  <th
                    scope="row"
                    className="w-40 py-2.5 pr-4 text-left align-top font-medium text-slate-900"
                  >
                    {label}
                  </th>
                  <td className="py-2.5 text-slate-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What it is */}
      <section aria-labelledby="about-heading" className="mt-10">
        <h2 id="about-heading" className="text-xl font-semibold text-slate-900">
          What is {game.name}?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {game.fullDescription}
        </p>
      </section>

      {/* Features */}
      <section aria-labelledby="features-heading" className="mt-10">
        <h2
          id="features-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Commonly reported characteristics
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Based on how {game.category.toLowerCase()} apps like {game.name} are
          typically presented. Not verified for this specific app.
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-slate-700">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Modes */}
      <section aria-labelledby="modes-heading" className="mt-10">
        <h2 id="modes-heading" className="text-xl font-semibold text-slate-900">
          Game modes and structure
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {getModesDescription(game)}
        </p>
      </section>

      {/* Devices and languages */}
      <section aria-labelledby="devices-heading" className="mt-10">
        <h2
          id="devices-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Devices and languages
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {game.name} is reported as an Android app; iOS or web versions have
          not been confirmed for this listing. Language support is{" "}
          {game.supportedLanguages[0] === AWAITING_VERIFICATION
            ? "not yet verified — check the app listing or operator documentation for current language options, including Hindi support"
            : `reported as: ${game.supportedLanguages.join(", ")}`}
          .
        </p>
      </section>

      {/* Promo summary + link */}
      <section
        aria-labelledby="promo-heading"
        className="mt-10 rounded-xl border border-slate-200 bg-white p-5"
      >
        <h2 id="promo-heading" className="text-xl font-semibold text-slate-900">
          Promo code summary
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <StatusBadge status={game.promoStatus} kind="promo" />
          {game.promoLastChecked && (
            <span className="text-xs text-slate-500">
              Last checked {formatDate(game.promoLastChecked)}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {game.promoCode
            ? `A code has been recorded for ${game.name}. See the promo page for the code, its recorded conditions, and its status history.`
            : `No promo code is currently on record for ${game.name}. This directory only publishes codes that have been supplied and reviewed — it never invents them. The promo page explains how codes for apps like this usually work and what to watch for.`}
        </p>
        <Link
          href={`/promo-codes/${game.slug}`}
          className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-brand-600 px-4 text-sm font-medium text-white hover:bg-brand-700"
        >
          View {game.name} promo-code information
        </Link>
      </section>

      {/* Rewards */}
      <section aria-labelledby="rewards-heading" className="mt-10">
        <h2
          id="rewards-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Rewards and incentives
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {game.rewardInformation ??
            `Specific reward details for ${game.name} are awaiting verification. Apps in this segment commonly advertise sign-up credits, daily bonuses, or referral incentives; availability, eligibility, and restrictions change frequently and rewards are never guaranteed. Read the operator's current terms rather than relying on screenshots or forwarded offers.`}{" "}
          Our{" "}
          <Link href="/rewards" className="text-brand-700 underline">
            rewards overview
          </Link>{" "}
          explains how these structures usually behave.
        </p>
      </section>

      {/* Access guidance */}
      <section aria-labelledby="access-heading" className="mt-10">
        <h2
          id="access-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Access and official-source checks
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">{NO_APK_NOTICE}</p>
        {game.downloadUrl && (
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
            <DownloadLink
              href={game.downloadUrl}
              gameName={game.name}
              label={`Download ${game.name}`}
              className="inline-flex min-h-11 items-center gap-1 rounded-lg bg-gold-400 px-4 text-sm font-semibold text-brand-950 hover:bg-gold-300"
            />
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              This button uses a referral link managed by this website&apos;s
              operator and opens an external site that this directory does not
              operate. It has not been separately verified as the
              platform&apos;s official channel, and anything offered there is
              controlled by the platform, not by this directory. See the{" "}
              <Link href="/affiliate-disclosure" className="underline">
                affiliate disclosure
              </Link>
              .
            </p>
          </div>
        )}
        <p className="mt-3 leading-relaxed text-slate-700">
          No official website or store listing has been independently
          verified for {game.name}. Before installing, confirm the exact app
          name, icon, and publisher; search for the operator&apos;s own site
          rather than following links from messages or ads; and be suspicious
          of any page that pressures you to install quickly.
        </p>
      </section>

      {/* Permissions and privacy */}
      <section aria-labelledby="permissions-heading" className="mt-10">
        <h2
          id="permissions-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Permissions and privacy considerations
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Review requested permissions before installing any card-gaming app.
          A game like {game.name} has no obvious need for access to your
          contacts, SMS, call logs, or files — requests like these deserve an
          explanation from the operator or a decision not to install. Also
          check what identity and payment details the app collects at sign-up
          and whether its privacy policy explains retention and sharing.
        </p>
      </section>

      {/* Safety checklist */}
      <section aria-labelledby="safety-heading" className="mt-10">
        <h2 id="safety-heading" className="text-xl font-semibold text-slate-900">
          Safety checklist before using {game.name}
        </h2>
        {game.safetyNotes && (
          <p className="mt-3 rounded-xl border border-slate-200 bg-slate-100 p-4 text-sm leading-relaxed text-slate-700">
            <strong className="font-semibold">Note for this listing:</strong>{" "}
            {game.safetyNotes}
          </p>
        )}
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-slate-700">
          <li>Identify the operator and check that it publishes real contact details.</li>
          <li>Read deposit, withdrawal, and bonus terms in full before paying anything.</li>
          <li>Confirm the app&apos;s legal availability in your state.</li>
          <li>Start with no money committed and set a time and spending limit first.</li>
          <li>Never share OTPs, banking passwords, or KYC documents over chat.</li>
        </ul>
      </section>

      {/* Age and legal notice */}
      <section
        aria-labelledby="legal-heading"
        className="mt-10 rounded-xl border border-slate-200 bg-slate-100 p-5"
      >
        <h2 id="legal-heading" className="text-lg font-semibold text-slate-900">
          Age and legal notice
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {game.ageNotice}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {game.legalNotice}
        </p>
      </section>

      <FaqSection items={faqs} />

      {/* Related games */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-12">
          <h2
            id="related-heading"
            className="text-xl font-semibold text-slate-900"
          >
            Related games
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
            {related.map((r) => (
              <GameCard key={r.slug} game={r} />
            ))}
          </div>
        </section>
      )}

      {/* Further reading */}
      <section aria-labelledby="reading-heading" className="mt-12">
        <h2
          id="reading-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Further reading
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-slate-700">
          <li>
            <Link
              href="/guides/how-to-review-a-teen-patti-platform-safely"
              className="text-brand-700 underline"
            >
              How to review a Teen Patti platform safely
            </Link>
          </li>
          <li>
            <Link
              href="/blog/how-to-identify-fake-teen-patti-apps"
              className="text-brand-700 underline"
            >
              How to identify fake Teen Patti apps and websites
            </Link>
          </li>
          <li>
            <Link
              href="/blog/understanding-app-permissions"
              className="text-brand-700 underline"
            >
              Understanding app permissions before installation
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500">
        Listing published {formatDate(game.publishedAt)} · Last updated{" "}
        {formatDate(game.updatedAt)}.{" "}
        {game.lastChecked
          ? `Facts last checked ${formatDate(game.lastChecked)}.`
          : "Key facts have not yet been independently checked and are awaiting review."}{" "}
        Spotted an error?{" "}
        <Link href="/corrections-policy" className="underline">
          Report it here
        </Link>
        .
      </p>
    </div>
  );
}
