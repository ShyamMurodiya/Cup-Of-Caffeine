// src/components/MenuItem.jsx
import React from "react";

export default function MenuItem({ item }) {
  const waText = encodeURIComponent(`Hi, I'd like to order: ${item.name} (₹${item.price})`);
  const waLink = `https://wa.me/918308670846?text=${waText}`;

  return (
    <article className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <div className="h-40 md:h-48 w-full rounded-xl overflow-hidden bg-gray-100">
        {item.img ? (
          <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <span className="text-lg font-bold">₹{item.price}</span>
          <span className="text-sm text-gray-500 ml-2"> · {item.category}</span>
        </div>

        <div className="flex gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn bg-[color:var(--accent)] text-black px-3 py-2 rounded-md text-sm"
            aria-label={`Order ${item.name} on WhatsApp`}
          >
            Order
          </a>
          <button
            className="btn border border-gray-200 px-3 py-2 rounded-md text-sm"
            onClick={() => alert(`${item.name} added to cart (demo)`) }
            aria-label={`Add ${item.name} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}