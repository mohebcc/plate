import { notFound } from "next/navigation";
import Image from "next/image";
import { menuByRestaurant, restaurants } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export default function RestaurantPage({ params }: Props) {
  const restaurant = restaurants.find((item) => item.slug === params.slug);
  if (!restaurant) {
    notFound();
  }

  const menu = menuByRestaurant[restaurant.slug] ?? [];

  return (
    <main>
      <section className="relative h-80">
        <Image src={restaurant.coverImage} alt={restaurant.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container-shell relative flex h-full items-end pb-8 text-white">
          <div>
            <h1 className="text-4xl font-semibold">{restaurant.name}</h1>
            <p className="mt-2 text-slate-200">{restaurant.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-8 py-12 lg:grid-cols-[2fr,1fr]">
        <article>
          <h2 className="text-2xl font-semibold">Menu</h2>
          <div className="mt-5 space-y-4">
            {menu.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{item.category}</p>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                  <p className="font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Start your order</h2>
          <p className="mt-2 text-sm text-slate-600">Pickup and delivery options can be configured per restaurant.</p>
          <button className="mt-4 w-full rounded-lg bg-primary px-4 py-3 font-medium text-white">
            Continue to checkout
          </button>
          <dl className="mt-5 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <dt>Rating</dt>
              <dd>{restaurant.rating.toFixed(1)} ★</dd>
            </div>
            <div className="flex justify-between">
              <dt>Status</dt>
              <dd>{restaurant.isOpen ? "Open" : "Closed"}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Price level</dt>
              <dd>{restaurant.priceLevel}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
