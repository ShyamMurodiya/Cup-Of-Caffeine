import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fff8e7] border-t border-black/5 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="font-semibold text-lg text-[color:var(--ink)]">
              Cup Of Caffeine ☕
            </h3>
            <p className="text-sm text-[color:var(--muted)] mt-2 max-w-xs">
              A cozy neighborhood café serving freshly brewed tea & coffee in Nagpur.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm mb-3 text-[color:var(--ink)]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              <li><Link to="/" className="hover:text-black">Home</Link></li>
              <li><Link to="/menu" className="hover:text-black">Menu</Link></li>
              <li><Link to="/about" className="hover:text-black">About</Link></li>
              <li><Link to="/contact" className="hover:text-black">Visit Us</Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-medium text-sm mb-3 text-[color:var(--ink)]">
              Visit Us
            </h4>
            <p className="text-sm text-[color:var(--muted)]">
              📍 Mate Chowk, Nagpur
            </p>
            <p className="text-sm text-[color:var(--muted)] mt-1">
              🕒 8:00 AM – 10:00 PM
            </p>

            <a
              href="https://wa.me/918308670846"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-sm font-medium text-black underline"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/5 mt-8 pt-4 text-center">
          <p className="text-xs text-[color:var(--muted)]">
            © {new Date().getFullYear()} Cup Of Caffeine · All rights reserved
          </p>
          <p className="text-xs text-[color:var(--muted)] mt-1">
            Pickup only · No home delivery
          </p>
        </div>

      </div>
    </footer>
  );
}