import React from "react";

export default function WhyUs() {
  return (
    <section className="py-16 bg-[color:var(--page-bg)] text-[color:var(--ink)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why People Love Us
          </h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">
            Simple reasons, great experience
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">☕</div>
            <h3 className="font-semibold mb-1 text-[color:var(--ink)]">
              Freshly Brewed
            </h3>
            <p className="text-sm text-[color:var(--muted)]">
              Made fresh every time
            </p>
          </div>

          {/* Item 2 */}
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">🪑</div>
            <h3 className="font-semibold mb-1 text-[color:var(--ink)]">
              Cozy Ambience
            </h3>
            <p className="text-sm text-[color:var(--muted)]">
              Calm & comfortable seating
            </p>
          </div>

          {/* Item 3 */}
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-1 text-[color:var(--ink)]">
              Quick Service
            </h3>
            <p className="text-sm text-[color:var(--muted)]">
              Fast order & friendly staff
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}