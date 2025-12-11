import React from "react";
import ReviewsSummary from "../../components/ReviewsSummary";

export default function ReviewsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-semibold mb-4">Customer Reviews</h1>
      <ReviewsSummary/>

      <div className="grid gap-4">
        <div className="card p-4">
          <div className="font-medium">Rahul · <span className="text-sm text-[color:var(--muted)]">5.0</span></div>
          <p className="text-sm text-[color:var(--muted)] mt-2">Great tea and friendly staff. Good place to relax.</p>
        </div>

        <div className="card p-4">
          <div className="font-medium">Priya · <span className="text-sm text-[color:var(--muted)]">4.5</span></div>
          <p className="text-sm text-[color:var(--muted)] mt-2">Tasty snacks and quick service.</p>
        </div>
      </div>
    </section>
  );
}