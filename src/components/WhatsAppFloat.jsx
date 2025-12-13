import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SHOP_NUMBER } from "../constants";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hi, I want to order from Cup Of Caffeine ☕"
  );

  return (
    <a
      href={`https://wa.me/${SHOP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-green-500 text-white
        shadow-lg hover:scale-105
        transition
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}