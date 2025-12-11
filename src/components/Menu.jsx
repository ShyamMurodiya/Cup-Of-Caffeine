// src/pages/Menu.jsx
import React, { useEffect, useMemo, useState } from "react";
import { SHOP_NUMBER, SHEET_API_URL } from "../constants";

/* fallback data (kept same) */
const FALLBACK_MENU = [
  { id: 1, category: "Tea", name: "Special Tea", price: 15 },
  { id: 2, category: "Tea", name: "Masala Tea", price: 20 },
  { id: 3, category: "Coffee", name: "Hot Coffee", price: 40 },
  { id: 4, category: "Coffee", name: "Cold Coffee", price: 70 },
  { id: 5, category: "Snacks", name: "Sandwich", price: 40 },
  { id: 6, category: "Maggi", name: "Masala Maggi", price: 50 },
  { id: 7, category: "Burger", name: "Veg Burger", price: 60 },
];

/* small util to format price or show dash */
const formatPrice = (p) => {
  if (p === undefined || p === null || p === "" || p === "—") return "—";
  const n = Number(p);
  if (Number.isNaN(n)) return p;
  return `₹${n}`;
};

export default function Menu() {
  const [items, setItems] = useState(FALLBACK_MENU);
  const [loading, setLoading] = useState(Boolean(SHEET_API_URL));
  const [error, setError] = useState(null);

  // UI states
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default"); // 'default' | 'price-asc' | 'price-desc' | 'name'

  useEffect(() => {
    if (!SHEET_API_URL) {
      setLoading(false);
      return;
    }

    const ac = new AbortController();
    let mounted = true;

    setLoading(true);
    setError(null);

    // small timeout wrapper (optional)
    const timeoutId = setTimeout(() => {
      ac.abort();
      // if aborted by timeout, will go to catch
    }, 12000);

    fetch(SHEET_API_URL, { signal: ac.signal })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch menu");
        return r.json();
      })
      .then((data) => {
        const normalized = (data || []).map((d, i) => ({
          id: d.id ?? i,
          category: d.Category ?? d.category ?? "Misc",
          name: d.Item ?? d.item ?? d.Name ?? d.name ?? "Item",
          price: d.Price ?? d.price ?? d.price_inr ?? "—",
          image: d.ImageURL ?? d.image ?? "",
          meta: {
            veg: !!(d.Veg ?? d.veg ?? d.isVeg),
            bestseller: !!(d.BestSeller ?? d.bestseller),
          },
        }));
        if (mounted && normalized.length) setItems(normalized);
      })
      .catch((err) => {
        if (mounted) {
          if (err.name === "AbortError") setError("Request timed out.");
          else setError(err.message || "Could not load menu.");
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
          clearTimeout(timeoutId);
        }
      });

    return () => {
      mounted = false;
      ac.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  // categories derived from items
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
        ? `${it.name} ${it.description ?? ""} ${it.category}`.toLowerCase().includes(q)
        : true;
      return inCat && inQuery;
    });

    if (sortBy === "price-asc") {
      arr = arr.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
    } else if (sortBy === "price-desc") {
      arr = arr.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
    } else if (sortBy === "name") {
      arr = arr.sort((a, b) => a.name.localeCompare(b.name));
    }
    return arr;
  }, [items, query, activeCategory, sortBy]);

  // grouped by category for display (preserves category order from categories[])
  const grouped = useMemo(() => {
    const map = {};
    for (const it of filteredItems) {
      const cat = it.category || "Others";
      if (!map[cat]) map[cat] = [];
      map[cat].push(it);
    }
    return map;
  }, [filteredItems]);

  // simple order flow (asks quantity via prompt — keeps it light)
  const orderWhatsApp = (item) => {
    const qty = prompt(`How many "${item.name}" would you like?`, "1");
    if (qty === null) return; // user cancelled
    const safeQty = Number(qty) && Number(qty) > 0 ? Number(qty) : 1;
    const msg = `Hi, I'd like to order: ${item.name} (Qty: ${safeQty}) — ${formatPrice(item.price)} from Cup OF Caffee.`;
    const url = `https://wa.me/${SHOP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="menu" className="bg-[color:var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Menu</h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">Fresh & affordable — updated daily</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-6">
          <input
            aria-label="Search menu"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search items, e.g. cappuccino"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white"
          />

          <div className="flex gap-3">
            <select
              aria-label="Filter by category"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-3 py-3 rounded-lg border border-gray-200 bg-white"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              aria-label="Sort menu"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-3 rounded-lg border border-gray-200 bg-white"
            >
              <option value="default">Sort — default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name: A → Z</option>
            </select>
          </div>
        </div>

        {/* Loading / Error */}
        {loading && (
          <div className="space-y-4">
            {/* simple skeleton rows */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-5 bg-[color:var(--card)] rounded-lg animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-lg bg-gray-200" />
                        <div className="space-y-1">
                          <div className="h-3 bg-gray-200 rounded w-32" />
                          <div className="h-2 bg-gray-200 rounded w-20" />
                        </div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-20" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-sm text-red-600 mb-4">
            {error} — showing available items.
          </p>
        )}

        {/* Empty state */}
        {!loading && Object.keys(grouped).length === 0 && (
          <div className="p-8 bg-[color:var(--card)] rounded-lg text-center">
            <p className="text-gray-600">No items found. Try clearing filters or search.</p>
          </div>
        )}

        {/* Menu sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(grouped).map((category) => (
            <div key={category} className="card p-5 bg-[color:var(--card)] rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  {category}
                </h3>
                <span className="text-xs px-2 py-1 rounded-md bg-[color:var(--soft)] text-[color:var(--muted)]">
                  {grouped[category].length} items
                </span>
              </div>

              <div className="divide-y divide-gray-100">
                {grouped[category].map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-lg object-cover shadow-sm"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23909ca3' font-size='10'%3ENo%20img%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[color:var(--soft)] text-[color:var(--muted)] font-medium">
                          {item.name?.slice(0, 1)}
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-[color:var(--muted)]">
                          {/* small meta hint */}
                          {item.meta?.veg ? "Veg • " : ""}
                          Fresh • Hot
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold">{formatPrice(item.price)}</p>
                      <div className="mt-2 flex items-center justify-end gap-2">
                        {item.meta?.bestseller && (
                          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">Bestseller</span>
                        )}
                        <button
                          onClick={() => orderWhatsApp(item)}
                          className="inline-block text-xs px-3 py-1 rounded-full bg-[color:var(--accent)] text-black font-medium hover:bg-[color:var(--accent-dark)] transition"
                          aria-label={`Order ${item.name}`}
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <a
            href={`https://wa.me/${SHOP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-[color:var(--accent)] text-black font-semibold shadow hover:bg-[color:var(--accent-dark)] transition"
            aria-label="Order full menu on WhatsApp"
          >
            Order Full Menu on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}