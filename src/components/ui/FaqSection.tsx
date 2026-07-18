import { JsonLd } from "@/components/seo/JsonLd";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
  heading?: string;
};

/**
 * Visible FAQ section with matching FAQPage structured data.
 * The schema is generated from the exact items rendered on the page.
 */
export function FaqSection({
  items,
  heading = "Frequently asked questions",
}: FaqSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="mt-10">
      <JsonLd data={schema} />
      <h2 id="faq-heading" className="text-xl font-semibold text-slate-900">
        {heading}
      </h2>
      <dl className="mt-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <dt className="font-medium text-slate-900">{item.question}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
