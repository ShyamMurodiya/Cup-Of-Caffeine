import React from "react";

/** Example usage:
 * <ReviewsSummary reviews={reviewsArray} />
 * reviewsArray = [{rating:5, service:5, food:5, value:5, atmosphere:5, text:"..."}, ...]
 */

const Star = ({ filled = true, size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={filled ? "text-green-700" : "text-gray-300"} fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "currentColor"}>
    <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.605L19.335 24 12 19.897 4.665 24l1.585-8.645L.5 9.75l7.832-1.732z"/>
  </svg>
);

function calcStats(reviews = []) {
  const counts = { 5:0,4:0,3:0,2:0,1:0 };
  let total = 0;
  const attrSums = { service:0, food:0, value:0, atmosphere:0 };
  reviews.forEach(r => {
    const rRating = Math.max(1, Math.min(5, Math.round(r.rating)));
    counts[rRating] = (counts[rRating] || 0) + 1;
    total += rRating;
    attrSums.service += r.service ?? rRating;
    attrSums.food += r.food ?? rRating;
    attrSums.value += r.value ?? rRating;
    attrSums.atmosphere += r.atmosphere ?? rRating;
  });
  const n = reviews.length || 1;
  const average = +(total / (reviews.length || 1)).toFixed(1);
  return { counts, totalReviews: reviews.length, average, attrAverages: {
    service: +(attrSums.service / n).toFixed(1),
    food: +(attrSums.food / n).toFixed(1),
    value: +(attrSums.value / n).toFixed(1),
    atmosphere: +(attrSums.atmosphere / n).toFixed(1),
  }};
}

export default function ReviewsSummary({ reviews = sampleReviews }) {
  const { counts, totalReviews, average, attrAverages } = calcStats(reviews);
  const maxCount = Math.max(...Object.values(counts), 1);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left: average */}
          <div className="flex flex-col items-start md:items-center md:col-span-1">
            <div className="text-5xl font-extrabold text-green-800">{average}</div>
            <div className="flex items-center mt-2">
              {Array.from({length:5}).map((_,i) => (
                <Star key={i} filled={i < Math.round(average)} size={18} />
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-2">{totalReviews.toLocaleString()} reviews</div>
          </div>

          {/* Middle: breakdown */}
          <div className="md:col-span-1">
            <div className="space-y-3">
              {[5,4,3,2,1].map(star => {
                const c = counts[star] || 0;
                const pct = Math.round((c / maxCount) * 100);
                return (
                  <div key={star} className="flex items-center gap-3">
                    <div className="w-10 text-sm text-gray-700">{star === 5 ? 'Excellent' : star === 4 ? 'Good' : star === 3 ? 'Average' : star === 2 ? 'Poor' : 'Terrible'}</div>
                    <div className="flex-1 h-3 bg-gray-200 rounded overflow-hidden">
                      <div className="h-3 bg-green-700" style={{width: `${pct}%`}} />
                    </div>
                    <div className="w-10 text-right text-sm text-gray-700">{c}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: attributes */}
          <div className="md:col-span-1 space-y-4">
            {[
              ["Service", attrAverages.service],
              ["Food", attrAverages.food],
              ["Value", attrAverages.value],
              ["Atmosphere", attrAverages.atmosphere]
            ].map(([label, score]) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-gray-700">{label}</div>
                  <div className="text-sm font-semibold text-gray-700">{score}</div>
                </div>
                <div className="h-3 bg-gray-200 rounded overflow-hidden">
                  <div className="h-3 bg-green-700" style={{width: `${(score/5)*100}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI summary card */}
        <div className="mt-6 border-t pt-6">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 items-start">
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold text-gray-800">Reviews summary</h3>
              <p className="text-sm text-gray-600 mt-2">
                This summary was created by AI, based on recent reviews.
              </p>
              <p className="mt-4 text-gray-700">
                {generateAISummary(reviews)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <FeatureBox title="Food" subtitle="Delicious" />
              <FeatureBox title="Atmosphere" subtitle="Memorable" />
              <FeatureBox title="Location" subtitle="Scenic" />
              <FeatureBox title="Service" subtitle="Attentive" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* small helpers */
const FeatureBox = ({title, subtitle}) => (
  <div className="border rounded-lg p-3 text-sm">
    <div className="font-medium text-gray-700">{title}</div>
    <div className="text-xs text-gray-500">{subtitle}</div>
  </div>
);

function generateAISummary(reviews) {
  // Simple deterministic summary generator (replace with real AI API if you want)
  if (!reviews || reviews.length === 0) return "No reviews yet.";
  const avg = ((reviews.reduce((s,r) => s + (r.rating||0), 0) / reviews.length) || 0).toFixed(1);
  const positives = [
    "great vegetarian options",
    "lovely riverside views",
    "friendly staff",
    "authentic local dishes",
    "calm & pleasant atmosphere"
  ];
  const pick = positives.slice(0, Math.min(3, positives.length)).join(", ");
  return `Overall rating ${avg}/5. Guests frequently mention ${pick}. Many reviewers praise the food and atmosphere; service and value are also commonly highlighted.`;
}

/* sample data for preview */
const sampleReviews = [
  {rating:5, service:5, food:5, value:4, atmosphere:5, text:"Amazing!"},
  {rating:5, service:4, food:5, value:5, atmosphere:5, text:"Lovely place"},
  {rating:4, service:5, food:4, value:4, atmosphere:4, text:"Very good"},
  {rating:5, service:5, food:5, value:5, atmosphere:5, text:"Excellent experience"},
  {rating:3, service:3, food:3, value:3, atmosphere:2, text:"Okay"}
];