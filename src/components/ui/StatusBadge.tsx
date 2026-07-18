import {
  promoStatusLabels,
  verificationStatusLabels,
} from "@/lib/compliance";

const badgeStyles: Record<string, string> = {
  "reported-active": "bg-emerald-50 text-emerald-800 border-emerald-200",
  verified: "bg-emerald-50 text-emerald-800 border-emerald-200",
  unverified: "bg-amber-50 text-amber-800 border-amber-200",
  "awaiting-review": "bg-slate-100 text-slate-700 border-slate-200",
  "availability-unknown": "bg-amber-50 text-amber-800 border-amber-200",
  expired: "bg-rose-50 text-rose-800 border-rose-200",
};

type StatusBadgeProps = {
  status: string;
  kind: "promo" | "verification";
};

export function StatusBadge({ status, kind }: StatusBadgeProps) {
  const label =
    kind === "promo"
      ? (promoStatusLabels[status] ?? status)
      : (verificationStatusLabels[status] ?? status);

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        badgeStyles[status] ?? badgeStyles["awaiting-review"]
      }`}
    >
      {label}
    </span>
  );
}
