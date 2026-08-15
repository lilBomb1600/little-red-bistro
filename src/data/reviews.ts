export type Review = {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  badge?: string;
  featured?: boolean;
};

// Real customer reviews, sourced from Yelp. Do not invent or edit these.
// Note: these are curated 5-star quotes — the site's headline rating uses the
// real aggregate (4.1 stars, 112 reviews) from the Google Business listing,
// not an average of just these quotes.
export const reviews: Review[] = [
  {
    name: "Laura E.",
    location: "Piedmont, CA",
    rating: 5,
    date: "April 2, 2024",
    badge: "Elite 26 · All-Star · 95 Coffee reviews",
    text: "Such a cute find in Pleasant Hill! We came here once we realized that Rooted closed at 1pm (PH location). I'm so glad my friend suggested this spot as it is cute and has great coffee! The barista working there was super nice and patient. He didn't rush me at all and even brought our food and drinks out to us. I had a sugar free vanilla latte with almond milk, which was great. Friend also got a salad and panini (and coffee), which she liked. They have a nice selection of salads, paninis, and crêpes, in addition to the usual cafe beverages. There's a lot of seating outside (and some inside) and we had no trouble finding a spot to sit. I'd love to come back and try more items in the future!",
    featured: true,
  },
  {
    name: "Lisa E.",
    location: "CA",
    rating: 5,
    date: "July 5, 2026",
    text: "GREW UP ENJOYING THIS LIL PLACE!!! Love the crêpes and smoothies! Love so so so much. Completely underrated!",
  },
  {
    name: "Luis S.",
    location: "Fairfield, CA",
    rating: 5,
    date: "April 11, 2026",
    text: "Great service. Relaxing environment. Best paninis around town. I recommend the special sauce to go with it. It really tops off the flavors.",
  },
  {
    name: "Alpha A.",
    location: "Pleasant Hill, CA",
    rating: 5,
    date: "March 5, 2026",
    badge: "6 Sandwich reviews",
    text: "Honestly, I have not tried their food but I always sit here for a short while after walking my dog for a cup of coffee. I love their strong coffee, aromatic and smooth to taste. They're dog friendly, too! They even offer my dog a bowl of water. Hope I can find time to try their crêpe and warm food!",
  },
];
