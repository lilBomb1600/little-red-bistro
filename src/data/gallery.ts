export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "food" | "drink" | "shop";
  featured?: boolean;
  /** True once a real photo file has been dropped into /public/images/gallery */
  ready: boolean;
};

// Real photos are wired up below by filename. Drop files into
// /public/images/gallery using these exact names and flip `ready` to true —
// nothing else needs to change.
export const galleryImages: GalleryImage[] = [
  {
    id: "storefront-exterior",
    src: "/images/gallery/storefront-exterior.jpg",
    alt: "Little Red Bistro's storefront, red awning and red patio chairs out front",
    category: "shop",
    featured: true,
    ready: false,
  },
  {
    id: "coffee-pour",
    src: "/images/gallery/coffee-pour.jpg",
    alt: "Espresso being poured into cups behind the counter",
    category: "drink",
    ready: false,
  },
  {
    id: "sweet-crepe",
    src: "/images/gallery/sweet-crepe.jpg",
    alt: "A sweet crêpe topped with strawberry, chocolate drizzle, and a scoop of ice cream",
    category: "food",
    featured: true,
    ready: false,
  },
  {
    id: "savory-crepe",
    src: "/images/gallery/savory-crepe.jpg",
    alt: "A folded savory crêpe drizzled with sauce",
    category: "food",
    ready: false,
  },
  {
    id: "panini",
    src: "/images/gallery/panini.jpg",
    alt: "A grilled panini sliced in half, pesto and melted cheese visible",
    category: "food",
    ready: false,
  },
  {
    id: "greek-salad",
    src: "/images/gallery/greek-salad.jpg",
    alt: "A Greek salad with tomatoes, cucumbers, olives, red onion, and feta",
    category: "food",
    ready: false,
  },
  {
    id: "coffee-bags-shelf",
    src: "/images/gallery/coffee-bags-shelf.jpg",
    alt: "Bags of house coffee beans lined up on a shelf",
    category: "shop",
    ready: false,
  },
  {
    id: "breakfast-croissant",
    src: "/images/gallery/breakfast-croissant.jpg",
    alt: "A breakfast croissant sandwich with ham, egg, and cheese",
    category: "food",
    ready: false,
  },
  {
    id: "veggie-sandwich",
    src: "/images/gallery/veggie-sandwich.jpg",
    alt: "The Delicious Organic Veggie Sandwich, stacked with avocado and sprouts on multigrain bread",
    category: "food",
    ready: false,
  },
  {
    id: "flatbread-pizza",
    src: "/images/gallery/flatbread-pizza.jpg",
    alt: "A flatbread pizza topped with fresh arugula and shaved Parmesan",
    category: "food",
    featured: true,
    ready: false,
  },
];
