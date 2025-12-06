import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="order-2 md:order-1">
          <div className="rounded-2xl overflow-hidden card">
            <img
              src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200&auto=format&fit=crop"
              alt="Cup OF Cafee interior"
              className="w-full h-64 md:h-80 object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <p className="text-sm text-[color:var(--accent)] font-medium mb-2">Cup OF Cafee</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Taste • Relax • Enjoy</h2>

          <p className="text-[color:var(--muted)] mb-4">
            Cup OF Cafee started as a small local spot five months ago with one goal — serve great tea and coffee in a warm, friendly space.
            We use fresh ingredients, prepare orders quickly, and keep prices affordable so everyone can enjoy.
          </p>

          <ul className="text-sm text-[color:var(--muted)] space-y-2 mb-4">
            <li><strong>Location:</strong> Mate Chauk, Nagpur</li>
            <li><strong>Opening hours:</strong> 9 AM – 9 PM (All days)</li>
            <li><strong>Contact (WhatsApp):</strong> <a href="https://wa.me/918308670846" className="underline">8308670846</a></li>
          </ul>

          <div className="flex gap-3">
            <a
              href="#menu"
              className="inline-block px-4 py-2 rounded-lg bg-[color:var(--accent)] text-black font-medium shadow hover:bg-[color:var(--accent-dark)] transition"
            >
              See Menu
            </a>

            <a
              href="#prebook"
              className="inline-block px-4 py-2 rounded-lg border border-gray-200 text-[color:var(--ink)] font-medium hover:bg-gray-50 transition"
            >
              Prebook a Pickup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}