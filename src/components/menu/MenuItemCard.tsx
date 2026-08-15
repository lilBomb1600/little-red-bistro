import { Leaf } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SmartImage } from "@/components/ui/SmartImage";
import { galleryImages } from "@/data/gallery";
import type { MenuItem } from "@/data/menu";

function priceLabel(item: MenuItem) {
  if (item.priceNote) return item.priceNote;
  if (item.price === undefined) return "";
  return item.priceDouble ? `$${item.price.toFixed(2)} / $${item.priceDouble.toFixed(2)}` : `$${item.price.toFixed(2)}`;
}

export function MenuItemCard({ item }: { item: MenuItem }) {
  const image = item.imageId ? galleryImages.find((g) => g.id === item.imageId) : undefined;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-ivory shadow-sm shadow-ink/5 transition-shadow hover:shadow-lg hover:shadow-ink/10">
      <div className="relative aspect-square overflow-hidden">
        <SmartImage
          src={image?.src ?? ""}
          alt={image?.alt ?? item.name}
          ready={Boolean(image?.ready)}
          sizes="(min-width: 1024px) 320px, 90vw"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        {item.popular && (
          <Badge variant="brick" className="absolute left-4 top-4">
            Popular
          </Badge>
        )}
        {item.vegetarian && (
          <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-ivory/90 text-sage shadow-sm" title="Vegetarian">
            <Leaf className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
          <span className="shrink-0 font-display text-base font-semibold text-brick">{priceLabel(item)}</span>
        </div>
        {item.description && <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-light">{item.description}</p>}
      </div>
    </div>
  );
}
