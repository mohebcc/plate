import { RestaurantSummary, MenuItem } from "@/lib/types";

export const restaurants: RestaurantSummary[] = [
  {
    id: "r_1",
    slug: "saffron-bowl",
    name: "Saffron Bowl",
    city: "Huntington Beach",
    zip: "92648",
    cuisine: ["mediterranean", "halal"],
    rating: 4.8,
    priceLevel: "$$",
    isOpen: true,
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=80",
    shortDescription: "Family-owned Mediterranean kitchen with made-to-order wraps and bowls."
  },
  {
    id: "r_2",
    slug: "ocean-slice-pizza",
    name: "Ocean Slice Pizza",
    city: "Costa Mesa",
    zip: "92626",
    cuisine: ["pizza"],
    rating: 4.6,
    priceLevel: "$$",
    isOpen: false,
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80",
    shortDescription: "New York inspired pizza with locally sourced ingredients."
  },
  {
    id: "r_3",
    slug: "sunrise-matcha-bar",
    name: "Sunrise Matcha Bar",
    city: "Irvine",
    zip: "92618",
    cuisine: ["coffee", "dessert", "vegan"],
    rating: 4.9,
    priceLevel: "$$",
    isOpen: true,
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    shortDescription: "Specialty matcha, coffee, and vegan pastries for grab-and-go mornings."
  }
];

export const menuByRestaurant: Record<string, MenuItem[]> = {
  "saffron-bowl": [
    {
      id: "m_1",
      category: "Bowls",
      name: "Chicken Shawarma Bowl",
      description: "Basmati rice, pickled onions, hummus, garlic toum.",
      price: 14.5
    },
    {
      id: "m_2",
      category: "Wraps",
      name: "Falafel Wrap",
      description: "Crispy falafel, tahini, cucumber, tomato.",
      price: 11.25
    }
  ],
  "ocean-slice-pizza": [
    {
      id: "m_3",
      category: "Signature Pies",
      name: "Calabrian Heat",
      description: "Mozzarella, spicy salami, calabrian chili, honey drizzle.",
      price: 23
    }
  ],
  "sunrise-matcha-bar": [
    {
      id: "m_4",
      category: "Matcha",
      name: "Ceremonial Matcha Latte",
      description: "Organic ceremonial grade matcha with oat milk.",
      price: 7.5
    }
  ]
};
