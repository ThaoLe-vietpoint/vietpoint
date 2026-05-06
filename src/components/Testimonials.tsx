"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mrs. Nhung",
    location: "Chicago",
    quote: "If I get sick and can't work anymore, the company will compensate me. This makes me feel more secure because I am responsible for my two children.",
  },
  {
    id: 2,
    name: "Pastor. Joseph",
    location: "Texas",
    quote: "If you want to have a comfortable retirement, start saving today. The money you save will not be lost but is an investment in your future.",
  },
  {
    id: 3,
    name: "Mrs. Tuyet",
    location: "Hawaii",
    quote: "I feel secure knowing that I have prepared enough for the future without bothering my children. That is the gift I want to give to my family.",
  },
  {
    id: 4,
    name: "Mrs. Michelle",
    location: "Georgia",
    quote: "I decided to cancel my two old insurance contracts and switch to IUL Secrets for my family because the previous programs only provided benefits upon death.",
  },
  {
    id: 5,
    name: "Mrs. Thao",
    location: "Virginia",
    quote: "Working nails in the U.S, I cannot leave a large fortune, but at least I can ensure my children have some money when I am no longer here.",
  },
  {
    id: 6,
    name: "Mr. Chau",
    location: "Virginia",
    quote: "I don't know how long or short my life will be, I don't want to be a burden to my children when I am old. It's great to prepare now.",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          What our clients say about us
        </motion.h2>

        {/* Desktop: 3-column */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <Quote size={28} className="text-[#2F5E9E] mb-4 opacity-60" />
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2F5E9E] text-white flex items-center justify-center font-bold text-sm">
                  {t.name.split(" ").pop()?.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card carousel */}
        <div className="md:hidden">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <Quote size={28} className="text-[#2F5E9E] mb-4 opacity-60" />
            <p className="text-gray-700 leading-relaxed mb-6 italic">&quot;{testimonials[page].quote}&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2F5E9E] text-white flex items-center justify-center font-bold">
                {testimonials[page].name.split(" ").pop()?.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{testimonials[page].name}</p>
                <p className="text-gray-400 text-xs">{testimonials[page].location}</p>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:border-[#2F5E9E] hover:text-[#2F5E9E] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-gray-500">{page + 1} / {testimonials.length}</span>
            <button
              onClick={() => setPage((p) => Math.min(testimonials.length - 1, p + 1))}
              disabled={page === testimonials.length - 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:border-[#2F5E9E] hover:text-[#2F5E9E] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop pagination dots */}
        <div className="hidden md:flex justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:border-[#2F5E9E] hover:text-[#2F5E9E] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2 items-center">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === page ? "bg-[#2F5E9E] w-6" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:border-[#2F5E9E] hover:text-[#2F5E9E] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
