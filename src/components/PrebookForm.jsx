import React, { useState } from "react";
import { SHOP_NUMBER } from "../constants";

export default function PrebookForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState("");
  const [qty, setQty] = useState(1);
  const [pickup, setPickup] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!phone.trim()) return "Please enter your phone.";
    if (!items.trim()) return "Please enter item(s) to prebook.";
    if (!pickup) return "Please select pickup date & time.";
    return null;
  };

  const openWhatsApp = (message) => {
    window.open(
      `https://wa.me/${SHOP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return alert(err);

    setLoading(true);
    const message = [
      `*Prebooking - Cup OF Cafee*`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Items: ${items}`,
      `Quantity: ${qty}`,
      `Pickup: ${new Date(pickup).toLocaleString()}`,
      `Notes: Please keep it ready.`,
    ].join("\n");

    openWhatsApp(message);
    setLoading(false);
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <div className="card p-6 bg-[color:var(--card)]">
        <h3 className="text-lg font-semibold mb-3">Prebook / Reserve Coffee</h3>
        <p className="text-sm text-[color:var(--muted)] mb-2">
          Prebook to save time and collect your order from the café.
        </p>

        <div className="mb-4 inline-block rounded-md bg-yellow-50 border border-yellow-200 px-3 py-2 text-xs text-yellow-800">
          📍 Pickup only at café · No home delivery
        </div>
        <p className="text-sm text-[color:var(--muted)] mb-4">
          Book now and pick up at your chosen time. We'll have it ready.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 border rounded-md"
              placeholder="Your name"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-3 py-2 border rounded-md"
              placeholder="Phone (e.g. 98xxxxxxx)"
            />
          </div>

          <input
            value={items}
            onChange={(e) => setItems(e.target.value)}
            className="px-3 py-2 border rounded-md"
            placeholder="Items (e.g. 2x Cold Coffee, 1x Sandwich)"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="px-3 py-2 border rounded-md"
              aria-label="Quantity"
            />
            <input
              type="datetime-local"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="px-3 py-2 border rounded-md"
              aria-label="Pickup date and time"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[color:var(--accent)] text-black font-medium"
              disabled={loading}
            >
              {loading ? "Preparing…" : "Prebook on WhatsApp"}
            </button>
            <p className="text-xs text-[color:var(--muted)] mt-2">
              ℹ️ This is not a home delivery service. Orders are prepared for
              café pickup only.
            </p>
          </div>

          <div className="text-xs text-[color:var(--muted)]">
            Tip: Use the same phone number you use for WhatsApp. Please visit
            the café to collect your order.
          </div>
        </form>
      </div>
    </section>
  );
}
