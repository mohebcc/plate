import Link from "next/link";
import Image from "next/image";
import { RestaurantSummary } from "@/lib/types";

export function RestaurantCard({ restaurant }: { restaurant: RestaurantSummary }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={restaurant.coverImage}
        alt={restaurant.name}
        width={1200}
        height={700}
        className="h-44 w-full object-cover"
      />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">{restaurant.name}</h3>
            <p className="text-sm text-slate-600">{restaurant.city}</p>
          </div>
          <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700">
            {restaurant.rating.toFixed(1)} ★
          </span>
        </div>
        <p className="text-sm text-slate-600">{restaurant.shortDescription}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span>{restaurant.priceLevel}</span>
          <span>•</span>
          <span>{restaurant.cuisine.join(", ")}</span>
          <span>•</span>
          <span className={restaurant.isOpen ? "text-emerald-600" : "text-rose-600"}>
            {restaurant.isOpen ? "Open now" : "Closed"}
          </span>
        </div>
        <Link
          href={`/restaurant/${restaurant.slug}`}
          className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        >
          View restaurant
        </Link>
      </div>
    </article>
  );
}
