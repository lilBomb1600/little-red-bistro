import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { menu } from "@/data/menu";
import { galleryImages } from "@/data/gallery";

const featuredIds = ["sweet-crepe", "panini", "flatbread-pizza", "greek-salad"];
const featured = featuredIds.map((id) => {
  const image = galleryImages.find((g) => g.id === id)!;
  const item = menu.flatMap((c) => c.items).find((i) => i.imageId === id);
  return { image, item };
});

export function FeaturedMenu() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="On the Menu" title="Fresh, made-to-order favorites" align="center" className="mx-auto max-w-xl" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(({ image, item }, i) => (
            <Reveal key={image.id} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-3xl bg-ivory shadow-sm shadow-ink/5 transition-shadow hover:shadow-lg hover:shadow-ink/10">
                <div className="relative aspect-square overflow-hidden">
                  <SmartImage
                    src={image.src}
                    alt={image.alt}
                    ready={image.ready}
                    sizes="(min-width: 1024px) 280px, 90vw"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  {item?.popular && (
                    <Badge variant="brick" className="absolute left-3 top-3">
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{item?.name}</h3>
                  {item?.price !== undefined && (
                    <p className="mt-1 text-sm font-semibold text-brick">
                      ${item.price.toFixed(2)}
                      {item.priceDouble && ` / $${item.priceDouble.toFixed(2)}`}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/menu" className="group inline-flex items-center gap-2 text-sm font-semibold text-brick">
            See the full menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
