import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { formatDate } from "@/lib/seo";

type ArticleCardProps = {
  article: Article;
  basePath: "/blog" | "/guides";
};

export function ArticleCard({ article, basePath }: ArticleCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {article.featuredImage ? (
        <Image
          src={article.featuredImage}
          alt=""
          width={600}
          height={315}
          className="aspect-40/21 w-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="block h-1 bg-linear-to-r from-brand-600 via-brand-500 to-gold-400"
        />
      )}
      <div className="flex flex-1 flex-col p-4 pt-4 sm:p-5 sm:pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-700">
          {article.category}
        </p>
        <h3 className="mt-1.5 font-semibold text-slate-900">
          <Link
            href={`${basePath}/${article.slug}`}
            className="hover:text-brand-700 hover:underline"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {article.description}
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Updated {formatDate(article.updatedAt)}
        </p>
      </div>
    </article>
  );
}
