import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const img =
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop";

  return (
    <section className="relative overflow-hidden">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="h-[85vh] md:h-[90vh] bg-center bg-cover relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-container h-full flex items-center pt-20">
          <div className="text-white max-w-xl">
            <p className="uppercase text-sm tracking-wider text-[color:var(--accent)] mb-2">
              Cup Of Caffeine
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Taste • Relax • Enjoy
            </h1>

            <p className="text-sm md:text-base text-white/90 mb-6">
              Fresh tea & coffee, tasty snacks and a warm place to relax —
              Mate Chauk, Nagpur.
            </p>

            <div className="flex gap-3">
              <a
                href="https://wa.me/918308670846"
                target="_blank"
                rel="noreferrer"
                className="btn bg-[color:var(--accent)] text-black"
              >
                Order on WhatsApp
              </a>

              <Link
                to="/menu"
                className="btn border border-white/30 text-white"
              >
                See Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}