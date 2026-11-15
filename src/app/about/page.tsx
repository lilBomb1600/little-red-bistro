import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { business } from "@/data/business";
import { galleryImages } from "@/data/gallery";

export const metadata = pageMetadata(pageCopy.about);

const heroImage = galleryImages.find((g) => g.id === "coffee-bags-shelf")!;
const storyImage = galleryImages.find((g) => g.id === "storefront-exterior")!;

const values = [
  {
    title: "Organic, single-estate coffee",
    body: "We roast around some of the best organic, single-estate beans in the Bay Area — every espresso, latte, and frappé starts there.",
  },
  {
    title: "Made fresh, every day",
    body: "Crêpes, panini, flatbreads, and pastries are made to order and baked daily, not stocked from a freezer.",
  },
  {
    title: "A place to stay a while",
    body: "Free no-lag WiFi, plenty of patio seating, and a casual, quiet space — good for working, catching up, or a slow weekend brunch.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
              <span className="h-px w-6 bg-brick" />
              About Us
            </span>
            <h1 className="font-display text-balance text-4xl font-bold text-ink sm:text-5xl">
              Your neighborhood fix, since day one
            </h1>
            <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-ink-light">{business.description}</p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15">
            <SmartImage src={heroImage.src} alt={heroImage.alt} ready={heroImage.ready} icon="cup" sizes="560px" priority />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal delay={0.1} className="relative order-1 aspect-[6/5] overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10 lg:order-2">
            <SmartImage src={storyImage.src} alt={storyImage.alt} ready={storyImage.ready} sizes="560px" />
          </Reveal>
          <Reveal className="order-2 lg:order-1">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
              <span className="h-px w-6 bg-brick" />
              Our Story
            </span>
            <h2 className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl">
              A little place people grow up loving
            </h2>
            <p className="mt-5 text-balance leading-relaxed text-ink-light">
              Tucked into a Pleasant Hill storefront with a red awning and a patio full of red chairs, Little Red
              Bistro has become the kind of spot regulars build routines around — a coffee before a dog walk, a
              crêpe with old friends, a panini and a quiet corner to get work done.
            </p>
            <p className="mt-4 text-balance leading-relaxed text-ink-light">
              We keep it simple: organic, single-estate coffee, made-to-order crêpes and panini, and a wine and beer
              list for when brunch turns into something longer.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
              <span className="h-px w-6 bg-brick" />
              What Matters to Us
            </span>
            <h2 className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl">Our values</h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-3xl bg-ivory p-7 shadow-sm shadow-ink/5">
                <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-ivory py-24 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
                <span className="h-px w-6 bg-brick" />
                Good to Know
              </span>
              <h2 className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl">
                Amenities & services
              </h2>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-semibold text-sage-dark">
              <ShieldCheck className="h-4 w-4" />
              Health Score: {business.healthScore}
            </span>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {business.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2.5 text-sm text-ink-light">
                <Check className="h-4 w-4 shrink-0 text-sage" />
                {a}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
