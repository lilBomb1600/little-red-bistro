/**
 * ADAPT ME: the only kit file you edit per project.
 *
 * Map the project's data file (src/data/business.ts) onto the kit. Copy facts from that file; never type a new fact here.
 * If the data file doesn't have it, leave the field out and ask the owner.
 */
import { business } from "@/data/business";
import type { BusinessFacts, DayOfWeek, Locale, OgImage, PageEntry, ServiceFact } from "./types";

/**
 * Origin used when NEXT_PUBLIC_SITE_URL isn't set: the *.vercel.app URL while it's a preview (business.ts has no siteUrl).
 * On launch set NEXT_PUBLIC_SITE_URL=https://www.client.com in Vercel instead of editing this.
 */
export const FALLBACK_URL: string = "https://little-red-bistro.vercel.app";

/** Languages that have their OWN URL. This site is English only. */
export const LOCALES: Locale[] = ["en"];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * 1200x630 JPG in public/. The project has no photos yet (data/gallery.ts: every image is ready: false and
 * public/images is empty), so the share card is the site's own wordmark. Swap in a real photo once there is one.
 */
export const OG_IMAGE: OgImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: `${business.name} wordmark: crêpes, panini and coffee in Pleasant Hill, CA`,
};

// "Pleasant Hill, CA 94523" -> locality, region, postal code (all from business.address.line2).
const [locality, regionZip] = business.address.line2.split(", ");
const [region, postalCode] = regionZip.split(" ");

/** "8:00 AM" -> "08:00", "4:00 PM" -> "16:00". */
function to24h(time: string): string {
  const [, h, m, ap] = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i) ?? [];
  if (!h) throw new Error(`[seo-kit] can't read the hours "${time}" in data/business.ts`);
  let hour = Number(h) % 12;
  if (ap.toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${m}`;
}

/** One entry per day from business.hours ("8:00 AM – 4:00 PM"). */
const hours = business.hours.map(({ day, hours: span }) => {
  const [opens, closes] = span.split(/\s*[–-]\s*/);
  return { days: [day as DayOfWeek], opens: to24h(opens), closes: to24h(closes) };
});

export const facts: BusinessFacts = {
  name: business.name,
  // business.category is "Bistro & Coffeehouse": a coffee shop that is also a sit-down restaurant (crêpes, panini, wine).
  type: ["CafeOrCoffeeShop", "Restaurant"],
  description: business.description,
  telephone: business.phoneHref.replace(/^tel:/, ""),
  email: business.email,
  // Storefront: the full public address from business.ts.
  address: { street: business.address.line1, locality, region, postalCode },
  serviceArea: [`${locality}, ${region}`],
  image: [OG_IMAGE.url],
  hasMap: business.mapsHref,
  hours,
  priceRange: business.priceRange,
  menu: "/menu",
  sameAs: [business.social.instagram, business.social.facebook].filter(Boolean),
  // No aggregateRating: business.rating/reviewCount are Google's numbers, and self-serving stars aren't shown (standard B5).
};

/** A cafe has no separate service pages, so no Service nodes. */
export const services: ServiceFact[] = [];

/** Every indexable URL. Leave out thank-you, invoice, handoff and preview-only pages. */
export const pages: PageEntry[] = [{ path: "/" }, { path: "/menu" }, { path: "/about" }, { path: "/gallery" }, { path: "/contact" }];
