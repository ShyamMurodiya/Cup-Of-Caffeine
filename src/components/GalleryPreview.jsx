import React from "react";
import { Link } from "react-router-dom";

// ✅ CORRECT PATHS
import img1 from "../assets/cafeimg/cocimg7.jpeg";
import img2 from "../assets/cafeimg/cocimg1.jpg";
import img3 from "../assets/cafeimg/cocimg9.jpeg";

export default function GalleryPreview() {
  const images = [img1, img2, img3];

  return (
    <section className="bg-[color:var(--bg)] py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--ink)]">
            Café Moments ☕
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
                alt={`Cafe ${index}`}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-block px-6 py-3 rounded-lg border border-gray-300 text-sm font-medium text-[color:var(--ink)] hover:bg-gray-50 transition"
          >
            View Full Gallery →
          </Link>
        </div>

      </div>
    </section>
  );
}