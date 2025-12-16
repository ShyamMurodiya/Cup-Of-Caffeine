import React, { useState } from "react";

// ✅ Import images with CORRECT extensions
import img1 from "../../assets/cafeimg/cocimg1.jpg";
import img2 from "../../assets/cafeimg/cocimg2.jpg";
import img3 from "../../assets/cafeimg/cocimg3.jpg";
import img5 from "../../assets/cafeimg/cocimg5.jpg";
import img6 from "../../assets/cafeimg/cocimg6.jpeg";
import img7 from "../../assets/cafeimg/cocimg7.jpeg";
import img8 from "../../assets/cafeimg/cocimg8.jpeg";
import img9 from "../../assets/cafeimg/cocimg9.jpeg";
import img10 from "../../assets/cafeimg/cocimg10.jpg";

export default function GalleryPage() {
  // ✅ REAL image imports (NOT strings)
  const images = [
    img1,
    img2,
    img3,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
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
            onClick={() => setActiveImg(src)}
            className="relative group overflow-hidden rounded-2xl shadow-sm cursor-pointer"
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              loading="lazy"
              className="
                w-full h-72 md:h-80 object-cover
                transition-transform duration-300
                group-hover:scale-110
              "
            />

            {/* Hover overlay */}
            <div className="
              absolute inset-0 bg-black/0
              group-hover:bg-black/30
              transition flex items-center justify-center
            ">
              <span className="
                text-white text-sm font-medium
                opacity-0 group-hover:opacity-100 transition
              ">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div
          className="
            fixed inset-0 z-50 bg-black/80
            flex items-center justify-center px-4
          "
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