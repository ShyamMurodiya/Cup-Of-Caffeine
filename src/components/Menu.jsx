// src/pages/Menu.jsx
import React, { useMemo, useState } from "react";
import { SHOP_NUMBER } from "../constants";
import useMenu from "../hooks/useMenu";

/* small util to format price or show dash */
const formatPrice = (p) => {
  if (p === undefined || p === null || p === "" || p === "—") return "—";
  const n = Number(p);
  if (Number.isNaN(n)) return p;
  return `₹${n}`;
};

export default function Menu() {
  const items = useMenu(); // ✅ SINGLE SOURCE OF TRUTH

  // UI states
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // categories
  const categories = useMemo(() => {
    const set = new Set(items.map((it) => it.category || "Others"));
    return ["All", ...Array.from(set)];
  }, [items]);

  // filtered & sorted items
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();

    let arr = items.filter((it) => {
      const inCat = activeCategory === "All" ? true : it.category === activeCategory;
      const inQuery = q
        ? `${it.name} ${it.category}`.toLowerCase().includes(q)
        : true;
      return inCat && inQuery;
    });

    if (sortBy === "price-asc") {
      arr = [...arr].sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
    } else if (sortBy === "price-desc") {
      arr = [...arr].sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
    } else if (sortBy === "name") {
      arr = [...arr].sort((a, b) => a.name.localeCompare(b.name));
    }

    return arr;
  }, [items, query, activeCategory, sortBy]);

  // group by category
  const grouped = useMemo(() => {
    const map = {};
    for (const it of filteredItems) {
      const cat = it.category || "Others";
      if (!map[cat]) map[cat] = [];
      map[cat].push(it);
    }
    return map;
  }, [filteredItems]);

  const orderWhatsApp = (item) => {
    const msg = `Hi, I'd like to order: ${item.name} (${formatPrice(
      item.price
    )}) from Cup OF Caffee.`;
    window.open(
      `https://wa.me/${SHOP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="menu" className="bg-[color:var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Menu</h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">
            Fresh & affordable — updated daily
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search items…"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white"
          />

          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-200 bg-white"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-200 bg-white"
          >
            <option value="default">Sort</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name: A → Z</option>
          </select>
        </div>

        {/* Empty state */}
        {Object.keys(grouped).length === 0 && (
          <div className="p-8 bg-[color:var(--card)] rounded-lg text-center">
            <p className="text-gray-600">No items found.</p>
          </div>
        )}

        {/* Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(grouped).map((category) => (
            <div key={category} className="p-5 bg-[color:var(--card)] rounded-xl">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">{category}</h3>
                <span className="text-xs text-[color:var(--muted)]">
                  {grouped[category].length} items
                </span>
              </div>

              <div className="divide-y">
                {grouped[category].map((item) => (
                  <div
                    key={item.id}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-[color:var(--muted)]">
                        Fresh • Hot
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold">
                        {formatPrice(item.price)}
                      </p>
                      <button
                        onClick={() => orderWhatsApp(item)}
                        className="mt-2 text-xs px-3 py-1 rounded-full bg-[color:var(--accent)] text-black"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={`https://wa.me/${SHOP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-[color:var(--accent)] text-black font-semibold"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}