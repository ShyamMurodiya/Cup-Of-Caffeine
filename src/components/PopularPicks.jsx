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
    transition-colors
  "
>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Popular Picks
          </h2>
          <p className="text-sm opacity-70 mt-1">
            Most loved items by our customers
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                rounded-2xl
                bg-neutral-50 dark:bg-neutral-900
                border border-black/5 dark:border-white/10
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
              dark:border-white/30 dark:text-white
              dark:hover:bg-white dark:hover:text-black
              transition
            "
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}