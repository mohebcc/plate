const plans = [
  { name: "Starter", setup: "$299", monthly: "$39", highlights: ["Hosted page", "Menu", "Direct ordering"] },
  {
    name: "Growth",
    setup: "$499",
    monthly: "$79",
    highlights: ["Custom design", "Analytics", "SEO controls"]
  },
  {
    name: "Premium",
    setup: "$899",
    monthly: "$129",
    highlights: ["Custom domain", "Marketing support", "Featured listing boost"]
  }
];

export function PricingSection() {
  return (
    <section className="container-shell py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Simple plans for growing restaurants</h2>
        <p className="mt-2 text-slate-600">Transparent setup + monthly pricing designed for local operators.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-500">Setup fee {plan.setup}</p>
            <p className="mt-1 text-2xl font-bold">{plan.monthly}/mo</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
