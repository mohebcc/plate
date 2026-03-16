import { RestaurantCard } from "@/components/directory/restaurant-card";
import { restaurants } from "@/lib/data";

export default function DirectoryPage() {
  return (
    <main className="container-shell py-12">
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold">Discover nearby restaurants</h1>
        <p className="max-w-2xl text-slate-600">
          Search by city, ZIP, cuisine, or restaurant name. Plately boosts local independent spots and direct
          ordering experiences.
        </p>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "coffee",
            "burgers",
            "pizza",
            "mediterranean",
            "sushi",
            "halal",
            "vegan",
            "dessert"
          ].map((filter) => (
            <span key={filter} className="rounded-full bg-slate-200 px-3 py-1 text-slate-700">
              {filter}
            </span>
          ))}
        </div>
      </header>
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </main>
  );
}
