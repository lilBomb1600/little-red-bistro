import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { business } from "@/data/business";
import { galleryImages } from "@/data/gallery";

const image = galleryImages.find((g) => g.id === "storefront-exterior")!;

export function AboutPreview() {
  return (
    <section className="border-t border-ink/10 bg-ivory py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 aspect-[6/5] overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10 lg:order-1">
          <SmartImage src={image.src} alt={image.alt} ready={image.ready} sizes="560px" />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
            <span className="h-px w-6 bg-brick" />
            About Us
          </span>
          <h2 className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl">
            A cozy corner of Pleasant Hill
          </h2>
          <p className="mt-5 text-balance leading-relaxed text-ink-light">{business.description}</p>
          <Link href="/about" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brick">
            Read our story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
