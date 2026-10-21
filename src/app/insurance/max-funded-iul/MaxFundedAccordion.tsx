"use client";
import { useState } from "react";

interface Reason {
  id?: string;
  num: string;
  title: string;
  description: string;
}

export default function MaxFundedAccordion({ reasons }: { reasons: Reason[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {reasons.map((r, i) => (
        <div
          key={r.id ?? `${r.num}-${i}`}
          className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-4 flex items-center gap-4 hover:bg-gray-50"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ background: "#1e3a5f" }}
            >
              {r.num}
            </span>
            <span className="font-semibold text-gray-800">{r.title}</span>
            <span className="ml-auto text-xl text-gray-400">
              {openIdx === i ? "−" : "+"}
            </span>
          </button>
          {openIdx === i && (
            <div className="px-6 pb-5 pl-20">
              <p className="text-gray-600 text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
