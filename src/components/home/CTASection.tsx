import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export function CTASection() {
  return (
    <section className="bg-brick py-16">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">Jump-start your day here.</h2>
          <p className="mt-2 text-ivory/80">Open daily · Patio seating · Dogs welcome</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-brick transition-transform hover:-translate-y-0.5">
            Get Directions
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-full border border-ivory/40 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
