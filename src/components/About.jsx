import React from "react";
import GalleryPreview from "./GalleryPreview";
import Reviews from "../pages/Reviews/ReviewsPage";
import PrebookForm from "./PrebookForm";

export default function AboutComponent() {
  const heroImg =
    "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1200&q=80";

  return (
    <section className="bg-[color:var(--page-bg)]">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* HERO IMAGE */}
        <img
          src={heroImg}
          className="w-full h-80 object-cover rounded-2xl mb-10"
          alt="Cup Of Caffeine café"
        />

        {/* ABOUT TEXT */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[color:var(--ink)]">
            About Cup Of Caffeine ☕
          </h1>

          <p className="text-[color:var(--muted)] mb-4 leading-relaxed">
            Cup Of Caffeine is a neighbourhood café where every cup is brewed
            fresh and served with care. We believe in simple flavours,
            affordable pricing, and a warm space where everyone feels welcome.
          </p>

          <p className="text-[color:var(--muted)] mb-6 leading-relaxed">
            Whether you stop by for a quick tea or spend time relaxing with
            friends, our café is designed to give you a calm and comfortable
            experience.
          </p>

          {/* INFO NOTE */}
          <div className="inline-block rounded-md bg-yellow-50 border border-yellow-200 px-4 py-2 text-sm text-yellow-800 mb-8">
            📍 Dine-in & takeaway available · Pickup at café only (No home delivery)
          </div>

          {/* CTA */}
          <div className="mb-16">
            <a
              href="/menu"
              className="inline-block px-6 py-3 rounded-xl bg-[color:var(--accent)] text-black font-semibold shadow hover:scale-105 transition"
            >
              View Our Menu →
            </a>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-[color:var(--ink)]">
            Café Moments 📸
          </h2>
          <GalleryPreview />
        </div>

        {/* REVIEWS SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-[color:var(--ink)]">
            What Our Customers Say ⭐
          </h2>
          <Reviews />
        </div>

        {/* PREBOOK SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-[color:var(--ink)]">
            Prebook Your Order ☎️
          </h2>
          <PrebookForm />
        </div>

      </div>
    </section>
  );
}