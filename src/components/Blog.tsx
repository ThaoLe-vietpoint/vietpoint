"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Insurance",
    title: "S&P 500 Index: Growth, Volatility, and Investment Insights",
    excerpt:
      "The S&P 500 Index (Standard & Poor's 500) is a key benchmark that reflects the overall health and trends of the U.S. stock market.",
    date: "April 17, 2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/chi-so-s-p-500-index-thumbnail-768x512.jpg",
  },
  {
    id: 2,
    category: "Insurance",
    title: "Allianz Insurance Company: Is It Truly Trustworthy?",
    excerpt:
      "As a global financial powerhouse, Allianz boasts a strong brand and long history. But is Allianz right for Vietnamese families in the U.S.?",
    date: "April 10, 2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/cong-ty-bao-hiem-allianz-co-uy-tin-khong-is-allianz-reputable-thumbnail-1-768x512.jpg",
  },
  {
    id: 3,
    category: "Insurance",
    title: "AIG Term Life Insurance Program for Vietnamese in the U.S.",
    excerpt:
      "AIG Term Life is a life insurance program that has been trusted by many Vietnamese families living in the United States.",
    date: "April 07, 2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/term-life-cua-aig-term-life-of-aig-thumbnail-768x512.jpg",
  },
  {
    id: 4,
    category: "Investment",
    title:
      "Is AIG Reputable? Which Insurance Should Vietnamese in the U.S. Buy?",
    excerpt:
      "Choosing a reliable insurance company is a critically important process if you want to secure your family's financial future.",
    date: "April 05, 2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/aig-co-uy-tin-khong-is-aig-reputable-thumbnail-768x512.jpg",
  },
  {
    id: 5,
    category: "Investment",
    title: "What is Universal Life Insurance? Should You Choose VUL or IUL?",
    excerpt:
      "Universal life insurance, with its two main product lines – Variable Universal Life (VUL) and Indexed Universal Life (IUL).",
    date: "March 31, 2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/bao-hiem-lien-ket-don-vi-la-gi-what-is-universal-life-insurance-vul-vs-iul-768x512.jpg",
  },
  {
    id: 6,
    category: "Featured",
    title: "Is National Life Group Legit? An Honest Review for 2026",
    excerpt:
      "If you're researching life insurance in the United States — particularly IUL products — the name National Life Group has likely appeared.",
    date: "April 16, 2026",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2026/04/National-Life-Group-Co-Uy-Tin-Khong-768x460.png",
  },
];

export default function Blog() {
  const [index, setIndex] = useState(0);
  const visible = 1; // 1 card visible at a time for mobile

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(blogPosts.length - 1, i + 1));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Understand insurance correctly
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[#2F5E9E] font-bold text-lg">
                Latest News
              </span>
              <div className="w-10 h-0.5 bg-[#2F5E9E]" />
            </div>
            <a
              href="/blog"
              className="flex items-center gap-1 text-[#2F5E9E] font-medium text-sm hover:gap-2 transition-all"
            >
              View more <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 6).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* Real thumbnail image */}
              <div className="h-40 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 text-xs font-bold text-white bg-[#2F5E9E]/90 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-[#2F5E9E] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <span className="text-gray-400 text-xs">{post.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl overflow-hidden shadow border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={blogPosts[index].image}
                  alt={blogPosts[index].title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs font-bold text-white bg-[#2F5E9E]/90 px-2 py-1 rounded">
                  {blogPosts[index].category}
                </span>
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-bold text-gray-900 mb-2">
                  {blogPosts[index].title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {blogPosts[index].excerpt}
                </p>
                <span className="text-gray-400 text-xs">
                  {blogPosts[index].date}
                </span>
              </div>
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:border-[#2F5E9E] hover:text-[#2F5E9E] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-gray-500">
              {index + 1} / {blogPosts.length}
            </span>
            <button
              onClick={next}
              disabled={index === blogPosts.length - 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:border-[#2F5E9E] hover:text-[#2F5E9E] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
