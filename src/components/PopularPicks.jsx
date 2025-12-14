import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function PopularPicks({ items = [] }) {
  if (!items.length) return null;

  return (
    <section
      className="
        py-16
        bg-[color:var(--page-bg)]
        text-[color:var(--ink)]
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Popular Picks
          </h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">
            Most loved items by our customers
          </p>

          {/* Pickup notice */}
          <div className="mt-3 inline-block rounded-md bg-yellow-50 border border-yellow-200 px-3 py-2 text-xs text-yellow-800">
            📍 Pickup only at café · No home delivery
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                rounded-2xl
                bg-neutral-50
                border border-black/5
                hover:border-[color:var(--accent)]
                transition
              "
            >
              <MenuItem item={item} compact />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="
              inline-block px-6 py-3 rounded-lg text-sm font-medium
              border border-black/20 text-black
              hover:bg-black hover:text-white
              transition
            "
          >
            View Full Menu →
          </Link>

          <p className="mt-2 text-xs text-[color:var(--muted)]">
            Orders are prepared for café pickup only
          </p>
        </div>
      </div>
    </section>
  );
}