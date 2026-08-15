import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/data/gallery";

const preview = galleryImages.slice(0, 6);

export function GalleryPreview() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Gallery" title="A little taste of what's inside" />
          <Link href="/gallery" className="group inline-flex items-center gap-2 text-sm font-semibold text-brick">
            View full gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {preview.map((img, i) => (
            <Reveal key={img.id} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-2xl">
              <SmartImage src={img.src} alt={img.alt} ready={img.ready} sizes="(min-width: 1024px) 220px, 45vw" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
