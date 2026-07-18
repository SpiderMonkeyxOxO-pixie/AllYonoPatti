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
          alt=""
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
