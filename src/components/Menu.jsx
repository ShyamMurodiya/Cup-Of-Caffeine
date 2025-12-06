import React, { useEffect, useState } from "react";
import { SHOP_NUMBER, SHEET_API_URL } from "../constants";

const FALLBACK_MENU = [
  { id: 1, category: "Tea", name: "Special Tea", price: 15 },
  { id: 2, category: "Tea", name: "Masala Tea", price: 20 },
  { id: 3, category: "Coffee", name: "Hot Coffee", price: 40 },
  { id: 4, category: "Coffee", name: "Cold Coffee", price: 70 },
  { id: 5, category: "Snacks", name: "Sandwich", price: 40 },
  { id: 6, category: "Maggi", name: "Masala Maggi", price: 50 },
  { id: 7, category: "Burger", name: "Veg Burger", price: 60 },
];

export default function Menu() {
  const [items, setItems] = useState(FALLBACK_MENU);
  const [loading, setLoading] = useState(Boolean(SHEET_API_URL));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!SHEET_API_URL) return;
    let mounted = true;
    setLoading(true);

    fetch(SHEET_API_URL)
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
        }));
        if (mounted && normalized.length) setItems(normalized);
      })
      .catch((err) => {
        if (mounted) setError(err.message);
      })
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  const grouped = items.reduce((acc, item) => {
    const cat = item.category || "Others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  const orderWhatsApp = (item) => {
    const msg = `Hi, I'd like to order: ${item.name} (₹${item.price}) from Cup OF Cafee.`;
    window.open(`https://wa.me/${SHOP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="menu" className="bg-[color:var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Menu</h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">Fresh & affordable — updated daily</p>
        </div>

        {loading && <p className="text-center text-sm text-[color:var(--muted)]">Loading menu…</p>}
        {error && <p className="text-center text-sm text-red-600 mb-4">Could not load menu — showing default list.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(grouped).map((category) => (
            <div key={category} className="card p-5 bg-[color:var(--card)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{category}</h3>
                <span className="text-xs px-2 py-1 rounded-md bg-[color:var(--soft)] text-[color:var(--muted)]">{grouped[category].length} items</span>
              </div>

              <div className="divide-y divide-gray-100">
                {grouped[category].map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover shadow-sm" />
                      ) : (
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[color:var(--soft)] text-[color:var(--muted)] font-medium">
                          {item.name?.slice(0, 1)}
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-[color:var(--muted)]">Fresh • Hot</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold">₹{item.price}</p>
                      <button onClick={() => orderWhatsApp(item)} className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-[color:var(--accent)] text-black font-medium hover:bg-[color:var(--accent-dark)] transition">
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href={`https://wa.me/${SHOP_NUMBER}`} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded-lg bg-[color:var(--accent)] text-black font-semibold shadow hover:bg-[color:var(--accent-dark)] transition">
            Order Full Menu on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}