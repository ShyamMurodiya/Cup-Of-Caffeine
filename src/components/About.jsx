import React from "react";

export default function AboutComponent() {
  const heroImg =
    "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1200&q=80";

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero image */}
      <img
        src={heroImg}
        className="w-full h-72 object-cover rounded-xl mb-6"
        alt="Cafe"
      />

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-4 text-[color:var(--ink)]">
        About Cup Of Caffeine
      </h1>

      {/* Description */}
      <p className="text-[color:var(--muted)] mb-6 leading-relaxed">
        Cup Of Caffeine is a small neighbourhood cafe serving fresh tea and
        coffee. We focus on simple flavors, affordable prices, and a friendly
        space where everyone feels welcome.
      </p>

      {/* Actions */}
      <div className="flex gap-3">
        <a
          href="/menu"
          className="px-4 py-2 rounded-lg bg-[color:var(--accent)] text-black font-medium hover:scale-105 transition"
        >
          See Menu
        </a>

        <a
          href="/prebook"
          className="px-4 py-2 rounded-lg border border-gray-200 text-[color:var(--ink)] font-medium hover:bg-gray-50 transition"
        >
          Prebook Pickup
        </a>
      </div>
    </section>
  );
}