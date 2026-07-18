import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { INDEPENDENCE_NOTICE, PROMO_CHANGE_NOTICE } from "@/lib/compliance";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "The scope and limits of the information on this directory: informational content only, no legal or financial advice, and independently operated external platforms.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Disclaimer", href: "/disclaimer" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Disclaimer
      </h1>

      <div className="content-prose mt-6">
        <h2>Informational content only</h2>
        <p>
          Everything published on this website — game listings, promo-code
          pages, guides, blog articles, and overview pages — is informational
          content. Nothing here constitutes legal advice, financial advice,
          tax advice, or a recommendation to install, register with, deposit
          on, or play any game or platform. Decisions about using any listed
          platform are yours, made at your own risk.
        </p>

        <h2>Information changes and may be incomplete</h2>
        <p>
          {PROMO_CHANGE_NOTICE} Listings identify what has and has not been
          verified; where a fact is marked &quot;awaiting verification&quot;,
          it has not been independently confirmed. Despite our{" "}
          <Link href="/editorial-policy">editorial standards</Link>, errors
          and out-of-date details can occur, and we correct them through our{" "}
          <Link href="/corrections-policy">corrections process</Link>.
        </p>

        <h2>External platforms are independently operated</h2>
        <p>
          {INDEPENDENCE_NOTICE} The platforms listed here are operated by
          third parties over whom this website has no control. We are not
          responsible for their content, conduct, game outcomes, payment
          handling, data practices, or availability, and a listing here is
          not an endorsement of any of them.
        </p>

        <h2>Risk notice</h2>
        <p>
          Real-money gaming involves genuine financial risk, is intended for
          adults only, and is restricted or prohibited in some Indian states.
          No content on this site should be read as suggesting that winnings,
          rewards, or bonuses are likely or guaranteed. If play stops feeling
          voluntary, our{" "}
          <Link href="/responsible-gaming">responsible gaming</Link> page
          lists support options.
        </p>
      </div>
    </div>
  );
}
