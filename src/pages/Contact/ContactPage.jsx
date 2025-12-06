import React from "react";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <p className="text-sm text-[color:var(--muted)] mb-6">
        Reach us on WhatsApp: <a href="https://wa.me/918308670846" className="underline">8308670846</a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="space-y-3">
          <input className="w-full px-3 py-2 border rounded-md" placeholder="Your name" />
          <input className="w-full px-3 py-2 border rounded-md" placeholder="Phone or email" />
          <textarea className="w-full px-3 py-2 border rounded-md" rows="4" placeholder="Message"></textarea>
          <button type="button" className="px-4 py-2 rounded bg-[color:var(--accent)] text-black font-medium">Send (opens WhatsApp)</button>
        </form>

        <div className="card p-4 bg-[color:var(--card)]">
          <h3 className="font-medium">Location</h3>
          <p className="text-sm text-[color:var(--muted)] mt-2">Mate Chauk, Nagpur</p>
          <div className="mt-4">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Nagpur&output=embed"
              className="w-full h-48 rounded"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}