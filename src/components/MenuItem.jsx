// src/components/MenuItem.jsx
import React from "react";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=60";

export default function MenuItem({ item, compact = false }) {
  const waText = encodeURIComponent(
    `Hi, I'd like to order: ${item.name} (₹${item.price})`
  );
  const waLink = `https://wa.me/918308670846?text=${waText}`;

  return (
    <article
      className={`
        rounded-2xl p-4 flex flex-col gap-3
        bg-white text-[color:var(--ink)]
        border border-black/5
        shadow-sm
        ${compact ? "text-center" : ""}
      `}
    >
      {/* Image */}
      <div
        className={`
          w-full rounded-xl overflow-hidden
          ${compact ? "h-32" : "h-40 md:h-48"}
          bg-gray-100
        `}
      >
        <img
          src={item.image || FALLBACK_IMG}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-base md:text-lg font-semibold">
          {item.name}
        </h3>

        {!compact && (
          <p className="text-sm mt-1 text-[color:var(--muted)]">
            {item.description || "Fresh • Tasty"}
          </p>
        )}
      </div>

      {/* Price + Actions */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <span className="text-lg font-bold">
            ₹{item.price}
          </span>

          {!compact && (
            <span className="text-sm ml-2 text-[color:var(--muted)]">
              · {item.category}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="
              px-3 py-2 rounded-md text-sm font-medium
              bg-[color:var(--accent)] text-black
              hover:opacity-90 transition
            "
          >
            Order
          </a>

          {!compact && (
            <button
              className="
                px-3 py-2 rounded-md text-sm
                border border-gray-200
                hover:bg-gray-50
                transition
              "
              onClick={() => alert(`${item.name} added to cart (demo)`)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}