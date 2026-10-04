import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "How the download links on this directory work: they are referral links managed by the site operator, they open external platform sites, and they never influence editorial content or status labels.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Affiliate disclosure
      </h1>

      <div className="content-prose mt-6">
        <h2>What the download links are</h2>
        <p>
          Game and promo pages on this directory include a
          &quot;Download&quot; button for listed platforms. These buttons use
          referral links that are supplied, managed, and controlled by this
          website&apos;s operator. Following one opens an external,
          third-party platform site in a new tab — a site this directory does
          not operate. Because these are referral links, the operator of this
          website may receive a referral benefit when they are used. Each
          link is marked as sponsored (<code>rel=&quot;sponsored&quot;</code>)
          and labelled where it appears.
        </p>

        <h2>What the links are not</h2>
        <p>
          A download link here is provided for convenience, not as an
          endorsement. Beyond the operator&apos;s control of the link itself,
          the destination has not been independently verified: this directory
          has not confirmed that any destination is a platform&apos;s
          official channel, inspected what it installs, or reviewed the
          offers shown there. Anything on the destination site — downloads,
          bonuses, codes, terms — is controlled by that platform, can change
          without notice, and is not guaranteed by this directory. This
          website still hosts no APK files of any kind.
        </p>

        <h2>Editorial independence</h2>
        <p>
          Referral links do not change how listings are written or labelled.
          Verification statuses, promo-code statuses, safety notes, and
          editorial descriptions follow the standards in the{" "}
          <Link href="/editorial-policy">editorial policy</Link> regardless of
          whether a listing carries a download link, and no platform pays for
          placement, a listing, or a status label.
        </p>

        <h2>Questions and corrections</h2>
        <p>
          Questions about these links are welcome via the{" "}
          <Link href="/contact">contact page</Link>, and errors can be
          reported through the{" "}
          <Link href="/corrections-policy">corrections process</Link>. For the
          checks worth doing before installing anything, see{" "}
          <Link href="/guides/how-to-review-a-teen-patti-platform-safely">
            how to review a Teen Patti platform safely
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
