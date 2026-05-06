"use client";
import { useState } from "react";
import type { Metadata } from "next";

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

export default function ContactPage() {
  const [joined, setJoined] = useState<"yes" | "no" | null>(null);
  const [form, setForm] = useState({
    name: "",
    policy: "",
    phone: "",
    dob: "",
    email: "",
    gender: "",
    greenCard: "",
    state: "",
    request: "",
    question: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.agree) return;
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      {/* Page header */}
      <section
        className="py-14 px-6 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #3a6fbf 0%, #1a3d6e 100%)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Contact VietPoint Insurance & Tax
        </h1>
        <p className="text-white/85 text-lg max-w-xl mx-auto">
          Please leave your full information in the form below, we will contact
          you to support you as soon as possible.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {submitted ? (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#2F5E9E" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8"
                  stroke="white"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Message Sent!
              </h2>
              <p className="text-gray-500">
                We will contact you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Join status */}
              <div>
                <p className="font-semibold text-gray-800 mb-3">
                  Have you joined VietPoint Insurance & Tax yet?
                </p>
                <div className="flex gap-3">
                  {(["yes", "no"] as const).map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setJoined(val)}
                      className={`px-6 py-2.5 rounded-lg border font-medium text-sm transition-all ${joined === val ? "border-[#2F5E9E] text-[#2F5E9E] bg-red-50" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
                    >
                      {val === "yes" ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 text-lg border-t pt-4">
                Enter your information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Insurance Policy Number
                  </label>
                  <input
                    type="text"
                    value={form.policy}
                    onChange={(e) =>
                      setForm({ ...form, policy: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={form.dob}
                    onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <div className="flex gap-3 mt-1">
                    {["Male", "Female"].map((g) => (
                      <label
                        key={g}
                        className={`flex-1 flex items-center justify-center gap-2 border rounded-lg py-2.5 cursor-pointer text-sm transition-all ${form.gender === g ? "border-[#2F5E9E] text-[#2F5E9E] bg-red-50" : "border-gray-200 text-gray-600"}`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          className="sr-only"
                          onChange={() => setForm({ ...form, gender: g })}
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Green Card / State ID Number
                  </label>
                  <input
                    type="text"
                    value={form.greenCard}
                    onChange={(e) =>
                      setForm({ ...form, greenCard: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State of Residence <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  >
                    <option value="">Select state</option>
                    {states.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Support Request <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={form.request}
                  onChange={(e) =>
                    setForm({ ...form, request: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                >
                  <option value="">Select your request</option>
                  {[
                    "Insurance Product Consultation",
                    "Information Support",
                    "Billing Address Update",
                    "Feedback / Complaint",
                  ].map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Question
                </label>
                <textarea
                  rows={4}
                  value={form.question}
                  onChange={(e) =>
                    setForm({ ...form, question: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E] resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) =>
                    setForm({ ...form, agree: e.target.checked })
                  }
                  className="mt-1 accent-[#2F5E9E]"
                  required
                />
                <span className="text-sm text-gray-600">
                  I confirm that I have read and agree to VietPoint
                  Insurance&apos;s Terms of Use, Privacy Commitment, and
                  Personal Data Protection Policy.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3.5 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                style={{ background: "#2F5E9E" }}
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4">
              For support and advice
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+16788253737"
                className="flex items-center gap-3 text-gray-700 hover:text-[#2F5E9E] transition-colors"
              >
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="font-semibold">(678) 825 3737</p>
                </div>
              </a>
              <a
                href="mailto:support@VietPointinsurance.com"
                className="flex items-center gap-3 text-gray-700 hover:text-[#2F5E9E] transition-colors"
              >
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-semibold text-sm">
                    support@VietPointinsurance.com
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-gray-700">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="font-semibold text-sm">
                    1424 N Brown Rd #450, Lawrenceville, GA 30043
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">
              Office Hours (Eastern Time)
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Sunday – Thursday</span>
                <span className="font-semibold">9 AM – 7 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday &amp; Saturday</span>
                <span className="font-semibold text-red-500">Closed</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Follow the U.S. daylight saving time (DST) rules.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 font-medium">
              Ready to answer all customer questions and concerns.
            </p>
            <a
              href="tel:+16788253737"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#2F5E9E" }}
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
