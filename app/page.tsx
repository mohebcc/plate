import { Hero } from "@/components/landing/hero";
import { PricingSection } from "@/components/landing/pricing";
import { restaurants } from "@/lib/data";
import { RestaurantCard } from "@/components/directory/restaurant-card";

export default function HomePage() {
  const featured = restaurants.filter((item) => item.featured);

  return (
    <main>
      <Hero />

      <section className="container-shell py-16">
        <h2 className="text-3xl font-semibold">Why restaurants choose Plately</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "No large third-party commission fees",
            "Beautiful website setup + maintenance handled",
            "Local discovery traffic through city and cuisine pages"
          ].map((benefit) => (
            <article key={benefit} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-medium">{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <PricingSection />

      <section className="container-shell py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Featured restaurants</h2>
            <p className="text-slate-600">High-performing partners currently boosted in local discovery.</p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </main>
  );
}
