import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata, formatDate } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "The terms governing use of this informational directory: permitted use, intellectual property, external links, accuracy limits, and liability limitations.",
  path: "/terms-and-conditions",
});

const LAST_UPDATED = "2026-07-17";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Terms & Conditions", href: "/terms-and-conditions" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Terms and conditions
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated {formatDate(LAST_UPDATED)}
      </p>

      <div className="content-prose mt-6">
        <h2>1. What these terms cover</h2>
        <p>
          These terms govern your use of {siteConfig.name} (the
          &quot;site&quot;), an informational directory about Teen Patti
          games and related platforms. By using the site you accept these
          terms; if you do not accept them, please do not use the site.
        </p>

        <h2>2. Permitted use</h2>
        <p>
          The site is provided for personal, non-commercial information
          purposes. You may read, link to, and share its pages. You must be
          of legal age in your jurisdiction to use content concerning
          real-money gaming platforms.
        </p>

        <h2>3. Prohibited behaviour</h2>
        <ul>
          <li>Scraping, republishing, or mirroring substantial parts of the site without permission</li>
          <li>Using the site or its contact form to send spam, malware, or unlawful material</li>
          <li>Attempting to disrupt, probe, or gain unauthorised access to the site or its infrastructure</li>
          <li>Misrepresenting site content as official communication from any listed platform</li>
        </ul>

        <h2>4. Intellectual property</h2>
        <p>
          The site&apos;s original text, structure, and design are owned by
          the site operator. Game names, logos, and trademarks appearing in
          listings belong to their respective owners and are used for
          identification in an informational directory; no affiliation or
          endorsement is implied. See the{" "}
          <Link href="/copyright">copyright page</Link> for permissions and
          takedown requests.
        </p>

        <h2>5. External links and third-party platforms</h2>
        <p>
          Links to external websites and platforms are provided for
          reference. Those services are independently operated; we do not
          control them and accept no responsibility for their content,
          conduct, or terms. Using any third-party platform is a matter
          between you and its operator.
        </p>

        <h2>6. Accuracy limitations</h2>
        <p>
          Content is provided in good faith under the standards in our{" "}
          <Link href="/editorial-policy">editorial policy</Link>, but the
          site makes no warranty that any information is complete, current,
          or error-free. Facts marked &quot;awaiting verification&quot; are
          exactly that. The site&apos;s{" "}
          <Link href="/disclaimer">disclaimer</Link> forms part of these
          terms.
        </p>

        <h2>7. Liability limitations</h2>
        <p>
          To the maximum extent permitted by law, the site and its operator
          are not liable for any loss or damage — including financial loss
          arising from use of any listed platform — resulting from reliance
          on site content or from use of external services linked from the
          site. Nothing in these terms excludes liability that cannot
          lawfully be excluded.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
          These terms may be revised; material changes will appear on this
          page with an updated date. Continued use after a revision
          constitutes acceptance.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about these terms can be sent via the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
