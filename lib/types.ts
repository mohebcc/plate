export type Cuisine =
  | "coffee"
  | "burgers"
  | "pizza"
  | "mediterranean"
  | "sushi"
  | "halal"
  | "vegan"
  | "dessert";

export interface RestaurantSummary {
  id: string;
  slug: string;
  name: string;
  city: string;
  zip: string;
  cuisine: Cuisine[];
  rating: number;
  priceLevel: "$" | "$$" | "$$$";
  isOpen: boolean;
  featured: boolean;
  coverImage: string;
  shortDescription: string;
}

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
}
