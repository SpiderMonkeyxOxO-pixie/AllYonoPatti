import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { blogPosts } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog — Platform Safety, Promo Codes & Awareness",
  description:
    "Articles on Teen Patti platform safety, spotting fake apps, app permissions, promo-code behaviour, and responsible gaming — written for Indian players.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
        Blog
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Practical articles about the Teen Patti app ecosystem: how to evaluate
        platforms, how promo codes really behave, and how to keep play safe
        and deliberate. For rules and gameplay learning, see the{" "}
        <Link href="/guides" className="text-brand-700 underline">
          guides section
        </Link>
        .
      </p>
      <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <ArticleCard key={post.slug} article={post} basePath="/blog" />
        ))}
      </div>
    </div>
  );
}
