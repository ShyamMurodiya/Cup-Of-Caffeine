import React from "react";

export default function Features() {
  const features = [
    {
      title: "Freshly Brewed Tea",
      desc: "Authentic taste served hot everyday.",
      icon: "☕",
    },
    {
      title: "Relaxing Ambience",
      desc: "Perfect spot to chill with friends.",
      icon: "🌿",
    },
    {
      title: "Affordable Prices",
      desc: "Quality food that fits every budget.",
      icon: "💛",
    },
    {
      title: "Fast Service",
      desc: "Quick preparation with great taste.",
      icon: "⚡",
    },
  ];

  return (
    <section id="features" className="w-full py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            We serve quality & create comfort for everyone.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
