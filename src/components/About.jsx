import React from "react";

export default function AboutComponent() {
  const heroImg = "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1200&q=80";

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <img src={heroImg} className="w-full h-72 object-cover rounded-xl mb-6" alt="Cafe" />
      <h1 className="text-3xl font-semibold mb-4">About Cup OF Cafee</h1>
      <p className="text-gray-600 mb-4">
        Cup OF Cafee is a small neighbourhood cafe serving fresh tea & coffee.
        We focus on simple flavors, affordable prices and a friendly space.
      </p>

      <div className="flex gap-3">
        <a href="/menu" className="px-4 py-2 rounded-lg bg-[color:var(--accent)] text-black font-medium">See Menu</a>
        <a href="/prebook" className="px-4 py-2 rounded-lg border border-gray-200 text-[color:var(--ink)] font-medium">Prebook Pickup</a>
      </div>
    </section>
  );
}