"use client";
import { useState } from "react";

export default function IULQuoteForm() {
  const [quoteForm, setQuoteForm] = useState({
    age: "",
    savings: "",
    protect: "",
    name: "",
    phone: "",
    email: "",
  });

  return (
    <div className="bg-white/10 rounded-2xl p-8 text-left space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Age", "age", ["<18", "19-24", "25-34", "35-44", "45-54", "55+"]],
          [
            "Savings/mo",
            "savings",
            ["$1-5k", "$5-10k", "$10-15k", "$15-20k", "$20-25k", "$25k+"],
          ],
          [
            "Protect amount",
            "protect",
            ["$100K", "$200K", "$300K", "$500K", "$1M", ">$1M"],
          ],
        ].map(([label, key, opts]) => (
          <div key={key as string}>
            <p className="text-xs text-white/70 mb-1">{label as string}</p>
            <select
              value={quoteForm[key as keyof typeof quoteForm]}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, [key as string]: e.target.value })
              }
              className="w-full bg-white/20 border border-white/30 rounded-lg px-2 py-2 text-white text-sm focus:outline-none"
            >
              <option value="">Select</option>
              {(opts as string[]).map((o) => (
                <option key={o} value={o} className="text-gray-900">
                  {o}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Full name"
        value={quoteForm.name}
        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={quoteForm.phone}
        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        value={quoteForm.email}
        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
      />
      <button
        className="w-full py-3.5 font-bold rounded-xl text-sm text-white hover:opacity-90 transition-opacity"
        style={{ background: "#2F5E9E" }}
      >
        Get Quote and Request Direct Consulting Support
      </button>
    </div>
  );
}
