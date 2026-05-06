"use client";
import { useState } from "react";
import Link from "next/link";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function CalculateFeesPage() {
  const [form, setForm] = useState({
    age: "",
    gender: "",
    health: "",
    coverage: "",
    term: "",
    state: "",
  });

  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-[320px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            Customer Care
          </p>
          <h1 className="text-4xl font-extrabold mb-3">
            Calculate Insurance Fees
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Get an instant estimate for your insurance premium. Free, no
            obligation, just enter your details below.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <select
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  >
                    <option value="">Select age</option>
                    {Array.from({ length: 70 }, (_, i) => i + 18).map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    value={form.gender}
                    onChange={(e) =>
                      setForm({ ...form, gender: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Health Status
                </label>
                <select
                  value={form.health}
                  onChange={(e) => setForm({ ...form, health: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">Select</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="average">Average</option>
                  <option value="poor">Below Average</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Coverage Amount
                </label>
                <select
                  value={form.coverage}
                  onChange={(e) =>
                    setForm({ ...form, coverage: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">Select coverage</option>
                  {[
                    "$100,000",
                    "$200,000",
                    "$300,000",
                    "$500,000",
                    "$750,000",
                    "$1,000,000",
                    "More than $1,000,000",
                  ].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Insurance Type & Term
                </label>
                <select
                  value={form.term}
                  onChange={(e) => setForm({ ...form, term: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">Select type</option>
                  <option value="term10">Term Life — 10 years</option>
                  <option value="term20">Term Life — 20 years</option>
                  <option value="term30">Term Life — 30 years</option>
                  <option value="iul">IUL Secrets — Lifetime</option>
                  <option value="maxfunded">Max Funded IUL</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State of Residence
                </label>
                <select
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">Select state</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center text-white font-bold py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                style={{ background: "#C41E3A" }}
              >
                Get My Free Quote
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              For an accurate quote, our agent will call you within 24 hours to
              discuss your specific situation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
