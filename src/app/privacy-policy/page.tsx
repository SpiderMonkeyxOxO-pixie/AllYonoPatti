import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata, formatDate } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "What data this directory collects, how contact-form submissions are handled, the cookies and analytics in use, retention practices, and your rights.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "2026-07-17";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Privacy policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated {formatDate(LAST_UPDATED)}
      </p>

      <div className="content-prose mt-6">
        <h2>The short version</h2>
        <p>
          This is a content website. You can read everything on it without
          creating an account, and we collect personal information in exactly
          one place: the contact form, if you choose to use it. We do not
          sell personal data, and we do not run gaming, betting, or payment
          systems that would require it.
        </p>

        <h2>Data we collect</h2>
        <ul>
          <li>
            <strong>Contact-form submissions</strong> — your name, email
            address, chosen topic, and message, used solely to respond to
            your enquiry.
          </li>
          <li>
            <strong>Server logs</strong> — standard technical records (IP
            address, user agent, requested pages) kept by our hosting
            provider for security and reliability, as is normal for any
            website.
          </li>
        </ul>

        <h2>Analytics</h2>
        <p>
          This site currently runs without a third-party analytics service.
          If one is introduced, this policy will be updated first to name the
          service, describe what it records, and explain any consent controls
          offered.
        </p>

        <h2>Cookies</h2>
        <p>
          The site does not set marketing or tracking cookies. Any cookies
          present are limited to technical necessities of the hosting
          platform. Details live in the{" "}
          <Link href="/cookie-policy">cookie policy</Link>, which will be
          updated before any change in practice.
        </p>

        <h2>Retention</h2>
        <p>
          Contact-form correspondence is kept only as long as needed to
          resolve the enquiry and for a reasonable record-keeping period
          afterwards, then deleted. Hosting-level logs rotate on the
          provider&apos;s standard schedule.
        </p>

        <h2>Security</h2>
        <p>
          The site is served over HTTPS, applies standard security headers,
          and stores no user accounts, passwords, or payment details of any
          kind. Contact-form delivery uses a configured service endpoint
          rather than exposing addresses in page code.
        </p>

        <h2>Third-party services and links</h2>
        <p>
          The site links to external websites and platforms that operate
          under their own privacy policies, which we do not control. Reading
          a listing here shares nothing about you with any listed platform.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of personal
          data you have sent us — use the{" "}
          <Link href="/contact">contact form</Link> with the
          &quot;privacy request&quot; topic or email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          . We respond to verifiable requests within a reasonable period,
          consistent with applicable Indian data-protection law.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          Material changes will be reflected on this page with an updated
          date. Continued use of the site after a change constitutes
          acceptance of the revised policy.
        </p>
      </div>
    </div>
  );
}
