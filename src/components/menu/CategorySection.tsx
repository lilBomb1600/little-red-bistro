import { Container } from "@/components/ui/Container";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { MenuItemRow } from "@/components/menu/MenuItemRow";
import type { MenuCategory } from "@/data/menu";

const cardLayoutIds = new Set(["savory-crepes", "panini", "salads", "breakfast", "sandwiches", "flatbread"]);

export function CategorySection({ category }: { category: MenuCategory }) {
  const useCards = cardLayoutIds.has(category.id);

  return (
    <section id={category.id} className="scroll-mt-40 py-14 first:pt-10">
      <Container>
        <div className="mb-8">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{category.title}</h2>
          {category.subtitle && <p className="mt-1 text-sm text-ink-light">{category.subtitle}</p>}
        </div>

        {useCards ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        ) : (
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {category.items.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </ul>
        )}

        {category.note && <p className="mt-6 text-sm italic text-ink-light">{category.note}</p>}
      </Container>
    </section>
  );
}
