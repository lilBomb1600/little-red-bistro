import { Leaf } from "lucide-react";
import type { MenuItem } from "@/data/menu";

function priceLabel(item: MenuItem) {
  if (item.priceNote) return item.priceNote;
  if (item.price === undefined) return "";
  return item.priceDouble ? `$${item.price.toFixed(2)} / $${item.priceDouble.toFixed(2)}` : `$${item.price.toFixed(2)}`;
}

export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-baseline gap-3 border-b border-ink/8 py-3">
      <span className="flex items-center gap-2 font-medium text-ink">
        {item.name}
        {item.vegetarian && <Leaf className="h-3.5 w-3.5 shrink-0 text-sage" />}
        {item.popular && <span className="rounded-full bg-brick/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brick">Popular</span>}
      </span>
      <span className="flex-1 border-b border-dotted border-ink/25 translate-y-[-3px]" />
      <span className="shrink-0 font-display text-sm font-semibold text-brick">{priceLabel(item)}</span>
    </li>
  );
}
