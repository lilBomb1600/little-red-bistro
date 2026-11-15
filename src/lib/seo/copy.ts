/**
 * Per-page titles and meta descriptions (LAUNCH-STANDARD.md section A): 50-60 character titles, 120-160 character
 * descriptions, real facts only (all from src/data/business.ts, menu.ts and gallery.ts).
 * pageMetadata() adds " | Little Red Bistro" to a title that doesn't already name the bistro.
 */
import { localTitle } from "./metadata";

export const pageCopy = {
  home: {
    title: localTitle("Crêpes & Coffee", "Pleasant Hill"),
    description:
      "Organic single-estate coffee, sweet and savory crêpes, panini and flatbreads at 690 Gregory Ln in Pleasant Hill, CA. Patio seating, free Wi-Fi, open daily.",
    path: "/",
  },
  menu: {
    title: localTitle("Crêpe & Coffee Menu", "Pleasant Hill"),
    description:
      "Espresso drinks, frappés, fresh-squeezed juice, sweet and savory crêpes, panini, flatbreads, salads, beer and wine at Little Red Bistro in Pleasant Hill, CA.",
    path: "/menu",
  },
  about: {
    title: "About Little Red Bistro, a Pleasant Hill, CA Coffeehouse",
    description:
      "Little Red Bistro is a Pleasant Hill, CA bistro and coffeehouse: organic coffee, crêpes, panini, pastries baked daily, beer and wine, and dog-friendly patios.",
    path: "/about",
  },
  gallery: {
    title: "Gallery: Inside Little Red Bistro in Pleasant Hill, CA",
    description:
      "A look inside Little Red Bistro in Pleasant Hill, CA: crêpes, panini, organic coffee and the red-awning patio on Gregory Ln, open seven days a week.",
    path: "/gallery",
  },
  contact: {
    title: "Hours & Directions to Little Red Bistro in Pleasant Hill, CA",
    description:
      "Call Little Red Bistro at (925) 954-8274 or visit 690 Gregory Ln #4, Pleasant Hill, CA. Open 8 AM-4 PM weekdays, 9 AM-4 PM weekends. Takes reservations.",
    path: "/contact",
  },
};
