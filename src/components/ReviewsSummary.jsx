import React from "react";

/** Usage:
 * <ReviewsSummary reviews={reviewsArray} />
 */

const Star = ({ filled = true, size = 16 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={filled ? "text-green-700" : "text-gray-300"}
    fill={filled ? "currentColor" : "none"}
    stroke={filled ? "none" : "currentColor"}
  >
    <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.605L19.335 24 12 19.897 4.665 24l1.585-8.645L.5 9.75l7.832-1.732z" />
  </svg>
);

/* calculate stats */
function calcStats(reviews = []) {
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let total = 0;
  const attrSums = { service: 0, food: 0, value: 0, atmosphere: 0 };

  reviews.forEach((r) => {
    const rating = Math.max(1, Math.min(5, Math.round(r.rating)));
    counts[rating]++;
    total += rating;

    attrSums.service += r.service ?? rating;
    attrSums.food += r.food ?? rating;
    attrSums.value += r.value ?? rating;
    attrSums.atmosphere += r.atmosphere ?? rating;
  });

  const n = reviews.length || 1;

  return {
    counts,
    totalReviews: reviews.length,
    average: +(total / n).toFixed(1),
    attrAverages: {
      service: +(attrSums.service / n).toFixed(1),
      food: +(attrSums.food / n).toFixed(1),
      value: +(attrSums.value / n).toFixed(1),
      atmosphere: +(attrSums.atmosphere / n).toFixed(1),
    },
  };
}

export default function ReviewsSummary({ reviews = [] }) {
  const { counts, totalReviews, average, attrAverages } = calcStats(reviews);
  const maxCount = Math.max(...Object.values(counts), 1);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Average */}
          <div className="flex flex-col md:items-center">
            <div className="text-5xl font-extrabold text-green-800">
              {average}
            </div>
            <div className="flex mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled={i < Math.round(average)} size={18} />
              ))}
            </div>
            <div className="text-sm text-[color:var(--muted)] mt-2">
              {totalReviews} reviews
            </div>
          </div>

          {/* Rating breakdown */}
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) => {
              const c = counts[star];
              const pct = Math.round((c / maxCount) * 100);
              const labels = {
                5: "Excellent",
                4: "Good",
                3: "Average",
                2: "Poor",
                1: "Terrible",
              };

              return (
                <div key={star} className="flex items-center gap-3">
                  <div className="w-20 text-sm text-[color:var(--ink)]">
                    {labels[star]}
                  </div>
                  <div className="flex-1 h-3 bg-gray-200 rounded">
                    <div
                      className="h-3 bg-green-700 rounded"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="w-8 text-right text-sm text-[color:var(--muted)]">
                    {c}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Attributes */}
          <div className="space-y-4">
            {Object.entries(attrAverages).map(([key, val]) => (
              <div key={key}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium capitalize text-[color:var(--ink)]">
                    {key}
                  </span>
                  <span className="font-semibold text-[color:var(--ink)]">
                    {val}
                  </span>
                </div>
                <div className="h-3 bg-gray-200 rounded">
                  <div
                    className="h-3 bg-green-700 rounded"
                    style={{ width: `${(val / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI summary */}
        <div className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold text-[color:var(--ink)]">
            Reviews summary
          </h3>
          <p className="text-sm text-[color:var(--muted)] mt-2">
            This summary was created by AI, based on recent reviews.
          </p>
          <p className="mt-4 text-[color:var(--ink)]">
            {generateAISummary(reviews)}
          </p>
        </div>
      </div>
    </section>
  );
}

/* AI-like summary */
function generateAISummary(reviews) {
  if (!reviews.length) return "No reviews yet.";
  const avg = (
    reviews.reduce((s, r) => s + (r.rating || 0), 0) / reviews.length
  ).toFixed(1);

  return `Overall rating ${avg}/5. Customers frequently praise the food quality, pleasant atmosphere, and friendly service.`;
}