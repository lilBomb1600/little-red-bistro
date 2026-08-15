import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export function Highlights() {
  return (
    <section className="border-y border-ink/10 bg-ivory py-8">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {business.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm font-medium text-ink-light">
              <Check className="h-4 w-4 text-sage" />
              {h}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
