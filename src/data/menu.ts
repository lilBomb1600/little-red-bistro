export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  priceDouble?: number;
  priceNote?: string;
  popular?: boolean;
  vegetarian?: boolean;
  imageId?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "espresso",
    title: "Espresso & Coffee",
    subtitle: "Hot or iced · Single / Double",
    items: [
      { name: "Espresso", price: 2.9, priceDouble: 3.5 },
      { name: "Americano", price: 2.9, priceDouble: 3.5 },
      { name: "Macchiato", price: 3.5, priceDouble: 3.9 },
      { name: "Cappuccino", price: 4.0, priceDouble: 4.75 },
      { name: "Latte", price: 4.0, priceDouble: 4.75, popular: true },
      { name: "Mocha Latte", price: 4.5, priceDouble: 5.25 },
      { name: "Caramel Mocha", price: 4.5, priceDouble: 5.25 },
      { name: "Caramel Latte", price: 4.5, priceDouble: 5.25 },
      { name: "Vanilla Latte", price: 4.5, priceDouble: 5.25 },
      { name: "Hazelnut Latte", price: 4.5, priceDouble: 5.25 },
      { name: "White Chocolate Latte", price: 4.5, priceDouble: 5.25 },
      { name: "Irish Cream Latte", price: 4.5, priceDouble: 5.25 },
      { name: "Raspberry Mocha Latte", price: 4.5, priceDouble: 5.25 },
      { name: "Fresh Brewed Coffee", price: 2.9, priceDouble: 3.5, popular: true },
      { name: "Chai Latte", price: 4.0, priceDouble: 4.95 },
      { name: "Hot Chocolate", price: 3.5, priceDouble: 4.5 },
      { name: "Organic Hot Tea Variety", price: 3.0, vegetarian: true },
      { name: "Soy or Almond Milk", priceNote: "+$0.70 / +$1.00" },
    ],
  },
  {
    id: "frappe",
    title: "Frappé",
    subtitle: "Single / Double",
    items: [
      { name: "Mocha Frappé", price: 4.95, priceDouble: 5.95 },
      { name: "Caramel Frappé", price: 4.95, priceDouble: 5.95 },
      { name: "Caramel Mocha Frappé", price: 4.95, priceDouble: 5.95 },
      { name: "White Chocolate Frappé", price: 4.95, priceDouble: 5.95 },
      { name: "Irish Cream Frappé", price: 4.95, priceDouble: 5.95 },
      { name: "Raspberry Mocha Frappé", price: 4.95, priceDouble: 5.95 },
    ],
  },
  {
    id: "other-drinks",
    title: "Juice, Soda & Beer/Wine",
    note: "Ask about our full wine selection, by the glass or bottle.",
    items: [
      { name: "Italian Soda", price: 3.5, vegetarian: true },
      { name: "Fresh Squeezed Orange Juice", price: 4.5, priceDouble: 6.0, vegetarian: true },
      { name: "Fresh Squeezed Lemonade", price: 3.5, vegetarian: true },
      { name: "Smoothies", price: 4.5, vegetarian: true, popular: true },
      { name: "Imported Beer", priceNote: "$5.50 / bottle" },
      { name: "Personal Champagne", priceNote: "$6.90 / bottle" },
      { name: "Mimosa, Fresh Squeezed OJ", priceNote: "$8.00 / glass", popular: true },
    ],
  },
  {
    id: "sweet-crepes",
    title: "Sweet Crêpes",
    items: [
      { name: "Plain Crêpe", price: 5.9, vegetarian: true },
      { name: "Nutella", price: 7.0, vegetarian: true, popular: true, imageId: "sweet-crepe" },
      { name: "Honey-Walnut", price: 7.9, vegetarian: true },
      { name: "Strawberry & Nutella", price: 9.9, vegetarian: true },
      { name: "Banana & Nutella", price: 8.9, vegetarian: true },
      { name: "Strawberry, Banana & Nutella", price: 10.9, vegetarian: true },
      { name: "Strawberry, Banana, Kiwi & Nutella", price: 12.0, vegetarian: true },
      { name: "Peanut Butter & Jelly Crêpe", price: 7.9, vegetarian: true },
      { name: "Brie Cheese, Fresh Pear & Jelly Crêpe", price: 13.0, vegetarian: true },
      { name: "Strawberry Jam w/Feta Cheese", price: 8.9, vegetarian: true },
    ],
  },
  {
    id: "savory-crepes",
    title: "Savory Crêpes",
    note: "Choice of cheese: Mozzarella, Pepper Jack, Swiss, Provolone, or Feta.",
    items: [
      { name: "Chicken Alfredo", description: "Grilled chicken breast, fresh tomatoes, Alfredo sauce, w/Parmesan and mozzarella.", price: 12.9 },
      { name: "Champignon Crêpe", description: "Sautéed mushrooms, Alfredo sauce, w/choice of cheese.", price: 9.9, vegetarian: true, imageId: "savory-crepe" },
      { name: "Ham & Cheese", description: "Sliced ham, roasted red peppers, bacon, w/choice of cheese.", price: 11.9 },
      { name: "Feta Crêpe", description: "Bulgarian feta cheese, fresh tomatoes, fresh avocado.", price: 11.0, vegetarian: true },
      { name: "Capri", description: "Organic baby spinach, tomatoes, fresh mozzarella.", price: 11.0, vegetarian: true },
      { name: "Green Eggs & Ham", description: "Our special green crêpe w/eggs, ham and choice of cheese.", price: 11.9 },
      { name: "Norwegian Smoked Salmon", description: "Premium smoked salmon, fresh avocado, tomatoes, cream cheese, Parmesan, house dill sauce, capers.", price: 14.5, popular: true },
      { name: "Little Italy", description: "Grilled chicken breast, organic baby spinach, fresh tomatoes, artichoke hearts, sautéed mushrooms, Alfredo sauce w/choice of cheese.", price: 14.5 },
    ],
  },
  {
    id: "panini",
    title: "Panini",
    items: [
      { name: "Santa Fe Panini", description: "Grilled chicken breast, roasted red pepper, pesto w/choice of cheese.", price: 12.9 },
      { name: "Roasted Turkey Panini", description: "Roasted turkey breast, fresh tomatoes, bacon, pesto w/choice of cheese.", price: 12.9 },
      { name: "Ham Panini", description: "Gold Medal awarded smoked ham, house special veggie spread, pickles, tomatoes w/choice of cheese.", price: 11.5 },
      { name: "Beef Panini", description: "Roast beef, tomatoes, sautéed mushrooms, pesto w/choice of cheese.", price: 13.0 },
      { name: "Panini di Prosciutto", description: "Thin prosciutto slices, roasted red pepper, pesto, fresh mozzarella.", price: 13.0 },
      { name: "Veggie Panini", description: "Mushrooms, organic baby spinach, sliced tomatoes, fresh mozzarella, pesto.", price: 12.0, vegetarian: true, popular: true, imageId: "panini" },
      { name: "Tuna Panini", description: "Tuna, celery, tomatoes, shredded carrots, artichokes, mayo w/choice of cheese.", priceNote: "Currently not served" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Village Greek Salad (Shopska)", description: "Tomatoes, cucumbers, roasted bell peppers, onions, olives, feta cheese, olive oil.", price: 11.0, vegetarian: true },
      { name: "Greek Salad", description: "Tomatoes, cucumbers, lettuce, onion, olives, feta cheese.", price: 10.0, vegetarian: true, imageId: "greek-salad" },
      { name: "Caesar Salad", description: "Lettuce, Parmesan cheese, croutons w/Caesar dressing. Add grilled chicken breast +$3.90.", price: 9.0, vegetarian: true },
      { name: "Organic Green Salad", description: "Fresh spring greens mix, tomatoes, sunflower seeds, fried onions, artichoke hearts, house vinaigrette.", price: 9.5, vegetarian: true, popular: true },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast Croissant Sandwiches",
    items: [
      { name: "Ham, Egg and Cheese", price: 7.5, imageId: "breakfast-croissant" },
      { name: "Turkey, Bacon and Cheese", price: 7.5 },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      {
        name: "The Delicious Organic Veggie Sandwich",
        description:
          "Avocado, roasted red peppers, spring greens, alfalfa sprouts, provolone cheese, pesto aioli spread on organic multigrain bread. Can be ordered with choice of meat or eggs for additional cost.",
        price: 9.5,
        vegetarian: true,
        popular: true,
        imageId: "veggie-sandwich",
      },
    ],
  },
  {
    id: "flatbread",
    title: "Flatbread Pizza",
    subtitle: "$10.50 each",
    items: [
      { name: "Parmigiana", description: "Bacon, Parmesan, chile-basil, topped with fresh arugula.", price: 10.5, imageId: "flatbread-pizza" },
      { name: "Margherita", description: "Fresh mozzarella, tomatoes, basil-pesto.", price: 10.5, vegetarian: true, popular: true },
      { name: "Veronese", description: "Prosciutto, mushrooms, artichoke hearts, basil-pesto.", price: 10.5 },
      { name: "Florentine", description: "Chicken breast, mozzarella, oregano, spinach, tomatoes, olive oil, garlic.", price: 10.5 },
    ],
  },
];
