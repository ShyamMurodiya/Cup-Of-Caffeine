import React, { useState } from "react";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80",
  ];

  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Gallery
        </h1>
        <p className="text-sm text-[color:var(--muted)]">
          A glimpse of our café, coffee & moments
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-sm cursor-pointer"
            onClick={() => setActiveImg(src)}
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              loading="lazy"
              className="w-full h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
              <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setActiveImg(null)}
        >
          <img
            src={activeImg}
            alt="Preview"
            className="max-h-[90vh] max-w-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}