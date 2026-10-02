import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  articleBasePath,
  getArticleBySlug,
  type Article,
} from "@/data/articles";
import { formatDate } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ArticlePageProps = {
  article: Article;
  basePath: "/blog" | "/guides";
  sectionName: "Blog" | "Guides";
};

/**
 * PHASE 3 WAVE 1 (see phase3/ALLYONOPATTI_COM_WAVE1_IMPLEMENTATION.md): editorial
 * cross-links from this domain's Teen Patti guides to AllYonoGuru.com's 5
 * Teen-Patti-specific posts. Added per phase2/PORTFOLIO_WIDE_FINAL_DISPOSITION.md
 * §10.1 — reciprocal to the cross-links added on AllYonoGuru.com in the same wave.
 * Keyed by guide slug; the other 4 guides without an obvious direct topical match
 * (teen-patti-terms, teen-patti-vs-poker, how-to-review-a-teen-patti-platform-safely,
 * teen-patti-in-hindi) intentionally have no entry here.
 */
const TEEN_PATTI_GURU_CROSS_LINKS: Record<string, { href: string; label: string }[]> = {
  "teen-patti-rules": [
    { href: "https://allyonoguru.com/blog/3-patti-rules-complete-guide", label: "3 Patti Rules Complete Guide on AllYonoGuru.com" },
    { href: "https://allyonoguru.com/blog/how-to-win-at-teen-patti", label: "How to Win at Teen Patti on AllYonoGuru.com" },
  ],
  "teen-patti-hand-rankings": [
    { href: "https://allyonoguru.com/blog/teen-patti-hand-ranking-and-sequence-order", label: "Teen Patti Hand Ranking and Sequence Order on AllYonoGuru.com" },
  ],
  "teen-patti-sequence-guide": [
    { href: "https://allyonoguru.com/blog/teen-patti-hand-ranking-and-sequence-order", label: "Teen Patti Hand Ranking and Sequence Order on AllYonoGuru.com" },
  ],
  "common-teen-patti-variations": [
    { href: "https://allyonoguru.com/blog/ak47-teen-patti-rules", label: "AK47 Teen Patti Rules on AllYonoGuru.com" },
    { href: "https://allyonoguru.com/blog/muflis-teen-patti-rules", label: "Muflis Teen Patti Rules on AllYonoGuru.com" },
  ],
  "what-is-teen-patti": [
    { href: "https://allyonoguru.com/blog/how-to-win-at-teen-patti", label: "How to Win at Teen Patti on AllYonoGuru.com" },
  ],
};

export function ArticlePage({
  article,
  basePath,
  sectionName,
}: ArticlePageProps) {
  const related = (article.relatedSlugs ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    ...(article.featuredImage
      ? { image: absoluteUrl(article.featuredImage) }
      : {}),
    mainEntityOfPage: absoluteUrl(`${basePath}/${article.slug}`),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo) },
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: sectionName, href: basePath },
          { name: article.title, href: `${basePath}/${article.slug}` },
        ]}
      />
      <p className="text-xs font-medium uppercase tracking-wide text-brand-700">
        {article.category}
      </p>
      <h1 className="font-display mt-1.5 text-3xl font-bold tracking-tight text-slate-900">
        {article.title}
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        Published {formatDate(article.publishedAt)} · Updated{" "}
        {formatDate(article.updatedAt)}
      </p>

      {article.featuredImage && (
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt ?? ""}
          width={1200}
          height={630}
          priority
          className="mt-6 aspect-40/21 w-full rounded-xl object-cover"
        />
      )}

      <ArticleBody sections={article.sections} />

      <p className="mt-8 rounded-xl border border-slate-200 bg-slate-100 p-4 text-xs leading-relaxed text-slate-600">
        This article is informational only and is not legal or financial
        advice. This website is an independent directory: it does not operate
        games, take bets, or process payments. See our{" "}
        <Link href="/editorial-policy" className="underline">
          editorial policy
        </Link>{" "}
        for how content is researched and updated.
      </p>

      {article.faq && article.faq.length > 0 && (
        <FaqSection items={article.faq} />
      )}

      {TEEN_PATTI_GURU_CROSS_LINKS[article.slug] && (
        <section aria-labelledby="guru-cross-links" className="mt-8 rounded-xl border border-brand-100 bg-brand-50 p-4">
          <h2 id="guru-cross-links" className="text-sm font-semibold text-slate-900">
            More Teen Patti reading
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1.5">
            {TEEN_PATTI_GURU_CROSS_LINKS[article.slug].map((link) => (
              <li key={link.href} className="text-sm">
                <a href={link.href} className="text-brand-700 underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related-articles" className="mt-10">
          <h2
            id="related-articles"
            className="text-xl font-semibold text-slate-900"
          >
            Related reading
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
            {related.map((r) => (
              <ArticleCard
                key={r.slug}
                article={r}
                basePath={articleBasePath(r) as "/blog" | "/guides"}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
