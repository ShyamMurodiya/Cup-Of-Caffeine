import React from "react";
import PrebookForm from "../../components/PrebookForm";

export default function VisitUsPage() {
  return (
    <section className="bg-[color:var(--page-bg)]">
      
      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold text-[color:var(--ink)] mb-3">
          Visit Cup Of Caffeine ☕
        </h1>
        <p className="text-[color:var(--muted)] max-w-xl mx-auto">
          Freshly brewed tea & coffee, cozy seating and a calm place to relax —
          right in the heart of Nagpur.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          
          {/* OPENING HOURS */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">🕒 Opening Hours</h3>
            <p className="text-sm text-[color:var(--muted)]">
              Monday – Sunday
            </p>
            <p className="text-xl font-semibold text-[color:var(--ink)] mt-1">
              8:00 AM – 10:00 PM
            </p>
          </div>

          {/* LOCATION */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-1">📍 Location</h3>
            <p className="text-sm text-[color:var(--muted)] mb-4">
              Mate Chowk, Nagpur
            </p>

            <iframe
              title="Cup Of Caffeine Location"
              src="https://www.google.com/maps?q=Mate%20Chowk%20Nagpur&output=embed"
              className="w-full h-52 rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          
          {/* HOW TO ORDER */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3">☕ How to Order</h3>
            <ul className="text-sm text-[color:var(--muted)] space-y-2">
              <li>✔ Order directly at the café</li>
              <li>✔ WhatsApp ordering available for pickup</li>
              <li className="text-red-600 font-medium">
                ✖ No home delivery available
              </li>
            </ul>
          </div>

          {/* GOOD TO KNOW */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3">✨ Good to Know</h3>
            <ul className="text-sm text-[color:var(--muted)] space-y-2">
              <li>☕ Freshly prepared after you order</li>
              <li>🪑 Calm & cozy seating</li>
              <li>💳 Cash & UPI accepted</li>
              <li>📶 Perfect spot to relax or work</li>
            </ul>
          </div>
        </div>
      </div>

      {/* WHATSAPP CTA */}
      <div className="pb-20 text-center">
        <a
          href="https://wa.me/918308670846"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2
            px-10 py-4 rounded-2xl
            bg-[color:var(--accent)] text-black
            font-semibold text-lg
            shadow-lg
            hover:scale-105 transition
          "
        >
          💬 Message on WhatsApp
        </a>

        <p className="mt-3 text-sm text-[color:var(--muted)]">
          Pickup only · No home delivery
        </p>
      </div>

      {/* PREBOOK SECTION (BOTTOM) */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-2 text-[color:var(--ink)] text-center">
          Prebook Your Order ☎️
        </h2>
        <p className="text-sm text-[color:var(--muted)] mb-8 text-center">
          Save time by pre-booking and collect directly from the café
        </p>

        <PrebookForm />
      </div>

    </section>
  );
}