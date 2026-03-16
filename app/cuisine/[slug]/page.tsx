import { restaurants } from "@/lib/data";
import { RestaurantCard } from "@/components/directory/restaurant-card";

export default function CuisinePage({ params }: { params: { slug: string } }) {
  const cuisine = params.slug.toLowerCase();
  const filtered = restaurants.filter((restaurant) => restaurant.cuisine.includes(cuisine as never));

  return (
    <main className="container-shell py-12">
      <h1 className="text-3xl font-semibold capitalize">{cuisine} restaurants</h1>
      <p className="mt-2 text-slate-600">Discover independent spots and order direct through Plately.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
