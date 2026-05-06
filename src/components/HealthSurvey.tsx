"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  { id: "exercise", label: "Do you exercise daily?" },
  { id: "smoke", label: "Do you smoke?" },
  { id: "checkup", label: "Do you get regular health checkups?" },
];

export default function HealthSurvey() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Make Sure You&apos;re Healthy</h2>
          <p className="text-gray-500 text-sm mb-8">Answer a few quick questions to get started</p>

          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#2F5E9E]/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l6 6L23 8" stroke="#2F5E9E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Thank you!</h3>
              <p className="text-gray-500 text-sm">We will send you free health checkup information shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {questions.map((q) => (
                <div key={q.id}>
                  <p className="text-sm font-medium text-gray-800 mb-3">{q.label}</p>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 border-2 rounded-xl cursor-pointer text-sm font-medium transition-all ${
                          answers[q.id] === opt
                            ? "border-[#2F5E9E] bg-[#2F5E9E]/5 text-[#2F5E9E]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={opt}
                          className="sr-only"
                          onChange={() => setAnswers({ ...answers, [q.id]: opt })}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#2F5E9E] text-white font-bold rounded-xl hover:bg-[#1a3d6e] transition-colors text-sm"
              >
                Get Free Health Checkup Information!
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
