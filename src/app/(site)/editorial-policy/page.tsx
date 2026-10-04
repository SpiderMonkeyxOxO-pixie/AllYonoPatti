import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Editorial Policy",
  description:
    "How this directory researches listings, handles sources, labels unverified information, maintains independence, and keeps content updated.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Editorial Policy", href: "/editorial-policy" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Editorial policy
      </h1>

      <div className="content-prose mt-6">
        <h2>Research standards</h2>
        <p>
          Listings are built from a structured data model in which every
          claim occupies a field with an explicit verification status. The
          discipline this enforces is the core of our approach: a fact is
          either verified against a documented source, or it is labelled
          &quot;awaiting verification&quot; — visibly, on the page. We treat
          an honest gap as better information than a confident guess.
        </p>

        <h2>What we never publish</h2>
        <ul>
          <li>Invented promo codes, reward amounts, or bonus values</li>
          <li>Invented app versions, ratings, download counts, or ownership details</li>
          <li>Claims that a platform is licensed, legal, safe, official, or verified without supplied evidence</li>
          <li>Guarantees that any code works or that any reward will be received</li>
          <li>Links to APK files or unofficial download sources</li>
        </ul>

        <h2>Source handling</h2>
        <p>
          Verified facts cite their basis in the listing&apos;s data record,
          including a last-checked date shown on the page. Descriptions of
          unverified platforms are written in explicitly hedged language
          (&quot;reported&quot;, &quot;presented as&quot;) that distinguishes
          observation of marketing from confirmed fact. Promo-code statuses
          use a fixed vocabulary — reported active, unverified, expired,
          availability unknown, awaiting review — chosen to avoid the
          unverifiable claim &quot;working&quot;.
        </p>

        <h2>Independence</h2>
        <p>
          Editorial content is not influenced by any listed platform. The
          directory accepts no payment for listings, placement, or status
          labels. Download buttons on game and promo pages use referral
          links managed by the site operator; they are disclosed on the{" "}
          <Link href="/affiliate-disclosure">affiliate-disclosure page</Link>,
          marked at the point of appearance, and kept separate from
          editorial judgments — a referral link never changes a status
          label, a verification status, or how a listing is written.
        </p>

        <h2>Updates and corrections</h2>
        <p>
          Every listing shows published and updated dates. Status fields are
          revised when new information is supplied and reviewed, and expired
          information is relabelled rather than silently deleted. Errors
          reported through the{" "}
          <Link href="/corrections-policy">corrections process</Link> are
          reviewed against sources and corrected on the page.
        </p>

        <h2>Writing standards</h2>
        <p>
          Content is written to be useful to a person, in plain language,
          without promotional pressure: no urgency tactics, no guaranteed
          winnings, no exaggerated reward claims. Educational content about
          Teen Patti aims for accuracy about the game as it is actually
          played, and safety content aims to be actionable rather than
          alarmist.
        </p>
      </div>
    </div>
  );
}
