import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600",
  ];

  return (
    <section className="bg-[color:var(--bg)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Café Moments
          </h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">
            A glimpse of our place & coffee
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src={src}
                alt="Cafe gallery"
                className="w-full h-56 object-cover hover:scale-105 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-block px-6 py-3 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}