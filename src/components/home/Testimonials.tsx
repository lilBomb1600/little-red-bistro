import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/ui/Reveal";
import { reviews } from "@/data/reviews";
import { business } from "@/data/business";

export function Testimonials() {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="What regulars keep coming back for"
          subtitle={`Rated ${business.rating} on ${business.reviewSource}, from ${business.reviewCount} reviews.`}
          align="center"
          light
          className="mx-auto max-w-xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div
                className={`h-full rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 ${r.featured ? "lg:col-span-2" : ""}`}
              >
                <Quote className="h-6 w-6 text-brick" />
                <p className="mt-4 text-balance leading-relaxed text-cream/90">{r.text}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display font-semibold text-cream">{r.name}</p>
                    <p className="text-xs text-cream/50">
                      {r.location}
                      {r.badge ? ` · ${r.badge}` : ""}
                    </p>
                  </div>
                  <StarRating rating={r.rating} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
