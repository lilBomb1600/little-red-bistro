import { Clock, MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";

export function HoursLocation() {
  return (
    <section className="border-t border-ink/10 bg-ivory py-24 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-3xl border border-ink/10">
          <iframe
            src={business.mapsEmbedSrc}
            className="h-72 w-full lg:h-full lg:min-h-[320px]"
            loading="lazy"
            title="Little Red Bistro location map"
          />
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl bg-cream p-8 sm:p-10">
          <div className="flex items-center gap-2 text-brick">
            <Clock className="h-5 w-5" />
            <h3 className="font-display text-xl font-semibold text-ink">Hours</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-ink-light">
            {business.hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b border-ink/5 py-1.5">
                <span>{h.day}</span>
                <span className="font-medium text-ink">{h.hours}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-2 text-brick">
            <MapPin className="h-5 w-5" />
            <h3 className="font-display text-xl font-semibold text-ink">Location</h3>
          </div>
          <p className="mt-3 text-sm text-ink-light">{business.address.full}</p>
          <a
            href={business.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-brick-dark"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
