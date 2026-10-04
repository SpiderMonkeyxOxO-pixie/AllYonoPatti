import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact the directory team to report an error, supply verification evidence, make a privacy request, or ask a general question.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Contact
      </h1>
      <p className="mt-3 text-slate-600">
        Use this form to report an error in a listing, supply verification
        evidence for a game or promo code, make a privacy request, or ask a
        general question. Please note we cannot help with platform accounts,
        deposits, or withdrawals — those belong to the relevant operator,
        which we do not represent.
      </p>

      <div className="mt-7">
        <ContactForm />
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Prefer email? Write to{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-brand-700 underline"
        >
          {siteConfig.contactEmail}
        </a>
        .
      </p>

      <p className="mt-4 rounded-xl border border-slate-200 bg-slate-100 p-4 text-xs leading-relaxed text-slate-600">
        Privacy notice: your name, email address, and message are used only to
        respond to your enquiry and are handled as described in our{" "}
        <Link href="/privacy-policy" className="underline">
          privacy policy
        </Link>
        . This form includes automated spam protection; no tracking cookies
        are set by submitting it.
      </p>
    </div>
  );
}
