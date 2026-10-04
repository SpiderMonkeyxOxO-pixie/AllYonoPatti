import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { games } from "@/data/games";
import { INDEPENDENCE_NOTICE } from "@/lib/compliance";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About This Directory",
  description:
    "What this independent Teen Patti game directory is, how it works, what it deliberately does not do, and the limits of the information it publishes.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        About this directory
      </h1>

      <div className="content-prose mt-6">
        <h2>Purpose</h2>
        <p>
          This website is an informational directory for people researching
          Teen Patti games and the platforms that offer them. It currently
          lists {games.length} games, each with a profile page and a
          promo-code page, alongside educational guides to the card game
          itself and articles on platform safety. The goal is simple: when
          someone searches for one of these apps, they should be able to find
          neutral information and sensible cautions in one place, instead of
          only promotional pages competing to secure an install.
        </p>

        <h2>Independence</h2>
        <p>{INDEPENDENCE_NOTICE}</p>
        <p>
          The download buttons on game and promo pages use referral links
          managed by this website&apos;s operator, which may produce a
          referral benefit when used. These links are disclosed on the{" "}
          <Link href="/affiliate-disclosure">affiliate-disclosure page</Link>{" "}
          and marked where they appear. They do not influence how any listing
          is written or labelled, and no platform pays for placement or a
          status label.
        </p>

        <h2>Editorial approach</h2>
        <p>
          Every listing is built from a single structured data source with
          explicit status fields. Facts we have not confirmed are labelled
          &quot;awaiting verification&quot; rather than guessed at; promo
          codes appear only when supplied and reviewed, and are never
          invented; and status labels like &quot;reported active&quot; are
          used instead of unverifiable claims like &quot;working&quot;. The
          full standards are in our{" "}
          <Link href="/editorial-policy">editorial policy</Link>, and errors
          can be reported through the{" "}
          <Link href="/corrections-policy">corrections process</Link>.
        </p>

        <h2>Limitations — read this part</h2>
        <p>
          Honest limits matter more on this subject than most. This directory
          does not audit the platforms it lists: it has not inspected their
          code, tested their payment flows, or verified their operators unless
          a listing explicitly says otherwise. Listing here is not a
          recommendation, a safety endorsement, or a legality assessment.
          Real-money gaming carries genuine financial risk, is regulated
          differently across Indian states, and involves platforms whose
          quality varies enormously. The final checks — operator identity,
          terms, and your own state&apos;s law — always belong to you. Our{" "}
          <Link href="/guides/how-to-review-a-teen-patti-platform-safely">
            platform review guide
          </Link>{" "}
          exists to make those checks practical.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, corrections, and verification evidence are welcome via
          the <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
