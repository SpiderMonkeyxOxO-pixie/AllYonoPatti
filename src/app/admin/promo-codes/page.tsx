import { PromoEditor, type EditorGame } from "@/components/admin/PromoEditor";
import { games } from "@/data/games";
import { requireAdmin } from "@/lib/admin-auth";
import { readPromoSheet, todayIst } from "@/lib/promo-file";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function AdminPromoCodesPage() {
  await requireAdmin();
  const sheet = readPromoSheet();
  const bySlug = new Map(sheet.rows.map((r) => [r.slug, r] as const));

  const editorGames: EditorGame[] = games.map((g) => {
    const r = bySlug.get(g.slug);
    return {
      slug: g.slug,
      name: g.name,
      logo: g.logo,
      hasDownload: Boolean(g.downloadUrl),
      morning: r?.morning ?? "",
      afternoon: r?.afternoon ?? "",
      evening: r?.evening ?? "",
    };
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="font-display text-2xl font-bold text-slate-900">
        Daily promo codes
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Enter each platform&apos;s Morning / Afternoon / Evening code, then
        press Save. Changes appear on{" "}
        <a
          href={`${siteConfig.url}/promo-codes`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {siteConfig.url.replace("https://", "")}/promo-codes
        </a>{" "}
        and every platform page immediately — no rebuild.
      </p>
      <PromoEditor
        games={editorGames}
        date={sheet.date}
        today={todayIst()}
        savedAt={sheet.savedAt}
        siteUrl={siteConfig.url}
      />
    </main>
  );
}
