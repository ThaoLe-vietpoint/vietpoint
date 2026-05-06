"use client";
import { motion } from "framer-motion";

const steps = [
  {
    step: "STEP 1",
    text: "Sign up, leave your information",
    icon: "👤",
  },
  {
    step: "STEP 2",
    text: "Agent will contact you for consultation and free quote within 24 hours.",
    icon: "📞",
  },
  {
    step: "STEP 3",
    text: "Receive the contract proposal, and only agree to enroll in the insurance once you have fully understood the program.",
    icon: "📋",
  },
  {
    step: "STEP 4",
    text: "Document review, medical examination (if any), wait for results in 5–14 days.",
    icon: "🔍",
  },
  {
    step: "STEP 5",
    text: "Get full insurance contract, complete information.",
    icon: "📄",
  },
  {
    step: "STEP 6",
    text: "Issue contract and pay fees. Contract takes effect immediately upon completion of fees.",
    icon: "✅",
  },
  {
    step: "STEP 7",
    text: "Customer care department receives documents. All customer questions and problems will be consulted and resolved free of charge 24/7, continuously and permanently.",
    icon: "🤝",
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Insurance participation process
        </motion.h2>

        {/* Steps horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex lg:grid lg:grid-cols-4 gap-4 min-w-max lg:min-w-0">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-64 lg:w-auto flex-shrink-0 lg:flex-shrink"
              >
                {/* Step badge */}
                <div className="inline-flex items-center gap-1 bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded mb-4">
                  {s.step}
                </div>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-4 h-0.5 bg-[#4CAF50] z-10" />
                )}
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#quote"
            className="inline-block bg-[#2F5E9E] text-white font-bold px-10 py-3.5 rounded-full hover:bg-[#1a3d6e] transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
