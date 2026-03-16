import { restaurants } from "@/lib/data";
import { RestaurantCard } from "@/components/directory/restaurant-card";

export default function CityPage({ params }: { params: { slug: string } }) {
  const cityName = params.slug.replaceAll("-", " ").toLowerCase();
  const filtered = restaurants.filter((r) => r.city.toLowerCase() === cityName);

  return (
    <main className="container-shell py-12">
      <h1 className="text-3xl font-semibold capitalize">Restaurants in {cityName}</h1>
      <p className="mt-2 text-slate-600">Local SEO landing page for city discovery and direct ordering.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
