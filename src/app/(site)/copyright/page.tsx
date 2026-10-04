import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Copyright & Trademarks",
  description:
    "Ownership of this directory's original content, the status of third-party game names and logos, permitted reuse, and how to send a takedown request.",
  path: "/copyright",
});

export default function CopyrightPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Copyright", href: "/copyright" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Copyright and trademarks
      </h1>

      <div className="content-prose mt-6">
        <h2>Our content</h2>
        <p>
          The original text, page structure, data organisation, and design of{" "}
          {siteConfig.name} are © {new Date().getFullYear()}{" "}
          {siteConfig.name}. You may quote reasonable excerpts with
          attribution and a link. Republishing substantial portions —
          including scraping listings wholesale — requires permission via
          the <Link href="/contact">contact page</Link>.
        </p>

        <h2>Third-party names and logos</h2>
        <p>
          Game names, app logos, and trademarks shown in listings belong to
          their respective owners. They appear here for identification
          purposes in an informational directory — the established context
          for nominative use — and their presence implies no affiliation
          with, sponsorship by, or endorsement from any rights holder. This
          directory is independent of every platform it lists.
        </p>

        <h2>Takedown and objection requests</h2>
        <p>
          If you are a rights holder and believe an image, name, or other
          material on this site infringes your rights, contact us via the{" "}
          <Link href="/contact">contact form</Link> or{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>{" "}
          with: the page address, identification of the material, evidence of
          your rights, and what you are asking for (removal, correction, or
          attribution). Verifiable requests are reviewed promptly and
          resolved in line with applicable law.
        </p>

        <h2>Corrections distinct from takedowns</h2>
        <p>
          If your concern is accuracy rather than rights — a listing
          describing your platform incorrectly — the faster route is the{" "}
          <Link href="/corrections-policy">corrections process</Link>.
        </p>
      </div>
    </div>
  );
}
