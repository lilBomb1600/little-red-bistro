import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { CategorySection } from "@/components/menu/CategorySection";
import { menu } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu | Little Red Bistro",
  description: "Crêpes, panini, flatbreads, salads, and organic coffee — the full Little Red Bistro menu.",
};

export default function MenuPage() {
  return (
    <div className="bg-cream">
      <section className="pb-10 pt-32 sm:pt-40">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
            <span className="h-px w-6 bg-brick" />
            Menu
          </span>
          <h1 className="font-display text-balance text-4xl font-bold text-ink sm:text-5xl">Everything on offer</h1>
          <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-ink-light">
            Coffee, crêpes, panini, salads, and flatbreads — made fresh, every day.
          </p>
        </Container>
      </section>

      <Container>
        <CategoryNav />
      </Container>

      <div className="divide-y divide-ink/8">
        {menu.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
