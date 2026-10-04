import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { guideArticles } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Teen Patti Guides — Rules, Hand Rankings & Basics",
  description:
    "Beginner-friendly guides to the teen patti card game: complete rules, hand rankings, key terms like blind and chaal, and how the Indian poker game compares with poker.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
      />
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
        Teen Patti guides
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Everything needed to understand the Indian card game itself — the
        rules, the hand rankings, the vocabulary, and how it differs from
        poker — plus a practical guide to reviewing platforms safely. Written
        for people learning from scratch.
      </p>
      <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {guideArticles.map((guide) => (
          <ArticleCard key={guide.slug} article={guide} basePath="/guides" />
        ))}
      </div>
    </div>
  );
}
