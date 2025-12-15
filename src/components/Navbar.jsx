import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Visit Us" },
  ];

  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      bg-[#faf7ef]/30 backdrop-blur-md
      border-b border-black/5
      shadow-sm
      transition-all
    ">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="
              w-10 h-10 rounded-full flex items-center justify-center
              bg-[color:var(--accent)]
              shadow-md
              transition-transform duration-300
              group-hover:scale-110
            ">
              <span className="text-black font-bold">COC</span>
            </div>

            <div className="leading-tight">
              <div className="text-base font-semibold text-[color:var(--ink)]">
                Cup Of Caffeine
              </div>
              <div className="text-xs text-[color:var(--muted)]">
                Taste · Relax · Enjoy
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="
                    relative pb-1 text-sm
                    text-[color:var(--ink)]
                    hover:text-black
                    transition
                  "
                >
                  <span className={active ? "font-semibold" : "font-medium"}>
                    {l.label}
                  </span>

                  <span
                    className={`
                      absolute left-0 bottom-0 h-[2px] w-full
                      bg-[color:var(--accent)]
                      transition-transform duration-300 origin-left
                      ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden p-2 rounded-md
              border border-black/10
              bg-white/70
            "
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-16 z-40
          transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="
          mx-4 p-4
          bg-[#faf7ef]
          border border-black/5
          rounded-xl
          shadow-lg
        ">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`
                  px-3 py-2 rounded-md text-sm
                  text-[color:var(--ink)]
                  hover:bg-[color:var(--soft)]
                  transition
                  ${pathname === l.to ? "font-semibold bg-[color:var(--soft)]" : ""}
                `}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}