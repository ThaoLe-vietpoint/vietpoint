"use client";
import { useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

export default function IULFaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50 flex items-center justify-between text-sm"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            {faq.question}
            <span className="ml-4 shrink-0 text-xl font-light">
              {openFaq === i ? "−" : "+"}
            </span>
          </button>
          {openFaq === i && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
