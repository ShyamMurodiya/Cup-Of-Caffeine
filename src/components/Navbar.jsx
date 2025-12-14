import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[color:var(--accent)] shadow transition-transform duration-500 group-hover:scale-110">
              <span className="text-black font-bold">COC</span>
            </div>
            <div>
              <div className="text-base font-semibold text-[color:var(--ink)]">
                Cup Of Caffeine
              </div>
              <div className="text-xs text-[color:var(--muted)]">
                Taste · Relax · Enjoy
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative group pb-1 text-sm text-[color:var(--ink)] hover:text-black transition"
                >
                  <span className={active ? "font-semibold" : "font-medium"}>
                    {l.label}
                  </span>
                  <span
                    className={`
                      absolute left-0 bottom-0 h-[2px] w-full bg-[color:var(--accent)]
                      transition-transform duration-300 origin-left
                      ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Desktop prebook */}
            <Link
              to="/prebook"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[color:var(--accent)] text-black font-medium shadow hover:scale-105 transition"
            >
              Prebook
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md border border-gray-300 bg-white/80"
              aria-expanded={open}
            >
              {open ? <span className="text-xl">✖</span> : <span className="text-xl">☰</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="mx-4 p-4 bg-white/95 backdrop-blur-md border rounded-xl shadow-lg">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded-md text-[color:var(--ink)] hover:bg-[color:var(--soft)] transition
                ${pathname === l.to ? "font-semibold bg-[color:var(--soft)]" : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile prebook */}
            <Link
              to="/prebook"
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-[color:var(--accent)] text-black font-medium"
            >
              Prebook Pickup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}