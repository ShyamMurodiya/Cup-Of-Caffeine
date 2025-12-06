import React from "react";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=60",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=60",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=60",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-semibold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="rounded overflow-hidden card">
            <img src={src} alt={`gallery-${i}`} className="w-full h-48 object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}