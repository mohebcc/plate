import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="container-shell py-24">
        <p className="mb-4 inline-flex rounded-full border border-orange-400/40 px-4 py-1 text-sm text-orange-300">
          Your restaurant. Your orders. No commissions.
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          We build and grow direct ordering websites for independent restaurants.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-300">
          Plately combines discovery traffic, professional restaurant websites, and integrated ordering so
          local businesses can own customer relationships.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/directory" className="rounded-xl bg-primary px-5 py-3 font-medium text-white">
            Explore restaurants
          </Link>
          <Link href="/get-started" className="rounded-xl border border-slate-700 px-5 py-3 font-medium">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
