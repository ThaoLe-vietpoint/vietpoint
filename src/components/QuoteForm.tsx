"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    fullName: "",
    childAge: "",
    gender: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const leads = JSON.parse(localStorage.getItem("thinksmart_leads") || "[]");
      leads.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem("thinksmart_leads", JSON.stringify(leads));
    } catch {}
    setSubmitted(true);
  };

  return (
    <section
      style={{ background: "linear-gradient(135deg, #1a3d6e 0%, #0d2a52 100%)" }}
      className="py-12"
    >
      <div className="max-w-xl mx-auto px-4">
        {submitted ? (
          <div className="text-center text-white py-8">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16l7 7 13-13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-white/80">Our agent will contact you within 24 hours for a free consultation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="number"
              placeholder="Child age"
              value={form.childAge}
              onChange={(e) => setForm({ ...form, childAge: e.target.value })}
              min="0"
              max="25"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            {/* Gender */}
            <div className="flex items-center gap-6 px-4 py-3 bg-white rounded-lg">
              <span className="text-gray-500 text-sm">Gender</span>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === "Male"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  className="accent-[#2F5E9E]"
                />
                Male
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === "Female"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  className="accent-[#2F5E9E]"
                />
                Female
              </label>
            </div>
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm tracking-wide"
            >
              Get Free Quote
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
