import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Corrections Policy",
  description:
    "How to report an error on this directory and how reported corrections are reviewed, applied, and recorded.",
  path: "/corrections-policy",
});

export default function CorrectionsPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Corrections Policy", href: "/corrections-policy" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Corrections policy
      </h1>

      <div className="content-prose mt-6">
        <p>
          A directory about a fast-moving app ecosystem will contain errors
          from time to time — promo statuses go stale, apps rebrand, details
          change. This page explains how to tell us and what happens when
          you do. Corrections make the directory better, and we treat them
          as contributions, not complaints.
        </p>

        <h2>How to report an error</h2>
        <p>
          Use the <Link href="/contact">contact form</Link> with the
          &quot;report an error or correction&quot; topic, or email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          . The most useful reports include: the page address, the specific
          statement you believe is wrong, what you believe is correct, and —
          where possible — a source we can check, such as an operator&apos;s
          own page or documentation.
        </p>

        <h2>How reports are reviewed</h2>
        <ol>
          <li>
            We acknowledge the report and check the claim against available
            sources.
          </li>
          <li>
            If the error is confirmed, we correct the listing&apos;s data
            record, which updates every page built from it, and refresh the
            page&apos;s last-updated date.
          </li>
          <li>
            If the claim cannot be confirmed either way, the relevant field
            is set to &quot;awaiting verification&quot; rather than left
            asserting something contested.
          </li>
          <li>
            If the report concerns a promo code, the code&apos;s status is
            updated using our fixed status vocabulary — expired codes are
            relabelled as expired, not deleted, so readers can see the
            history.
          </li>
        </ol>

        <h2>What we correct versus what we won&apos;t</h2>
        <p>
          Factual errors, stale statuses, broken links, and misattributed
          details are all in scope. Requests to make a listing more
          promotional, to remove accurate safety cautions, or to add
          unverifiable claims (&quot;mark our code as working&quot;) are
          declined — the <Link href="/editorial-policy">editorial policy</Link>{" "}
          governs those decisions regardless of who asks.
        </p>

        <h2>Timing</h2>
        <p>
          We aim to review correction reports within a few working days.
          Corrections affecting safety-relevant information are prioritised.
        </p>
      </div>
    </div>
  );
}
