"use client";
import { useState } from "react";

export type FaqItem = {
  category?: string;
  question: string;
  answer: string;
};

export default function FaqAccordion({
  items,
  categories,
}: {
  items: FaqItem[];
  categories?: string[];
}) {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered =
    !selectedCat || selectedCat === "All"
      ? items
      : items.filter((it) => it.category === selectedCat);

  return (
    <div className="space-y-6">
      {categories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center pb-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#2F5E9E] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {filtered.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left px-6 py-4.5 font-bold text-gray-800 hover:bg-slate-50 flex items-center justify-between text-sm md:text-base cursor-pointer"
              >
                <span className="pr-4">{faq.question}</span>
                <span className="shrink-0 text-xl font-light text-[#2F5E9E] w-6 text-center">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
