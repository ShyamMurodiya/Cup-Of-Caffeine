import React, { useEffect, useState } from "react";
import ReviewsSummary from "../../components/ReviewsSummary";

const STORAGE_KEY = "coc_reviews";

const DEFAULT_REVIEWS = [
  {
    name: "Rahul",
    rating: 5,
    service: 5,
    food: 5,
    value: 4,
    atmosphere: 5,
    text: "Great tea and friendly staff. Good place to relax.",
    date: Date.now(),
  },
  {
    name: "Priya",
    rating: 4.5,
    service: 4,
    food: 5,
    value: 4,
    atmosphere: 4,
    text: "Tasty snacks and quick service.",
    date: Date.now(),
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setReviews(JSON.parse(saved));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_REVIEWS));
      setReviews(DEFAULT_REVIEWS);
    }
  }, []);

  const saveReviews = (list) => {
    setReviews(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      alert("Please enter your name and review.");
      return;
    }

    const newReview = {
      name,
      rating,
      service: rating,
      food: rating,
      value: rating,
      atmosphere: rating,
      text,
      date: Date.now(),
    };

    saveReviews([newReview, ...reviews]);
    setName("");
    setRating(5);
    setText("");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-semibold mb-6">Customer Reviews</h1>

      {/* Summary */}
      <ReviewsSummary reviews={reviews} />

      {/* Write review */}
      <div className="mt-10 card p-6">
        <h3 className="text-lg font-semibold mb-3">Write a Review</h3>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="px-3 py-2 border rounded-md"
          />

          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="px-3 py-2 border rounded-md"
          >
            <option value={5}>★★★★★ Excellent</option>
            <option value={4}>★★★★ Good</option>
            <option value={3}>★★★ Average</option>
            <option value={2}>★★ Poor</option>
            <option value={1}>★ Terrible</option>
          </select>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your experience..."
            rows={3}
            className="px-3 py-2 border rounded-md"
          />

          <button
            type="submit"
            className="self-start px-4 py-2 rounded-md bg-[color:var(--accent)] text-black font-medium"
          >
            Submit Review
          </button>

          <p className="text-xs text-[color:var(--muted)]">
            Reviews are shown instantly after submission.
          </p>
        </form>
      </div>

      {/* Reviews list */}
      <div className="mt-8 grid gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="card p-4">
            <div className="font-medium">
              {r.name} ·{" "}
              <span className="text-sm text-[color:var(--muted)]">
                {r.rating} ★
              </span>
            </div>
            <p className="text-sm text-[color:var(--muted)] mt-2">
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}