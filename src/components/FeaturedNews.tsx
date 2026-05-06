"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredPosts = [
  {
    id: 1,
    category: "Featured post",
    categoryColor: "#2F5E9E",
    title: "National Life Group's IUL Premium Payment Policy",
    excerpt:
      "Indexed Universal Life (IUL) insurance is increasingly attracting the interest of the Vietnamese community in the US due to its unique combination of financial protection and attractive cash value growth.",
    date: "01/05/2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/chinh-sach-dong-phi-bao-hiem-iul-national-life-group-iul-premium-payment-policy-thumbnails-768x512.jpg",
  },
  {
    id: 2,
    category: "Customer stories",
    categoryColor: "#4CAF50",
    title: "IUL Insurance Returns: High or Low?",
    excerpt:
      "Indexed Universal Life (IUL) is a unique type of permanent life insurance available on the market. Beyond providing a death benefit, an IUL policy also integrates the potential for rapid and tax-free cash growth.",
    date: "25/04/2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/loi-nhuan-bao-hiem-iul-insurance-returns-thumbnail-768x512.jpg",
  },
  {
    id: 3,
    category: "Health – Life",
    categoryColor: "#FF9800",
    title:
      '"Decoding" the US Single Tax and How Singles Can Optimize Their Taxes',
    excerpt:
      'What is the "single tax"? Does it exist in the US tax system? This article will clarify the concept of the "US single tax," explain how the tax system treats single filers.',
    date: "22/04/2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/bao-hiem-lien-ket-don-vi-la-gi-what-is-universal-life-insurance-vul-vs-iul-768x512.jpg",
  },
  {
    id: 4,
    category: "Featured post",
    categoryColor: "#2F5E9E",
    title:
      "How much does life insurance cost in the US? A 2025 cost guide for Vietnamese families",
    excerpt:
      "For the Vietnamese community in the US, understanding life insurance is not just about protecting your family financially – it's also a vital part of future planning.",
    date: "20/04/2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/bao-hiem-nhan-tho-bao-nhieu-tien-tai-my-how-much-does-life-insurance-cost-in-the-us-thumbnail-768x512.jpg",
  },
  {
    id: 5,
    category: "Insurance Knowledge",
    categoryColor: "#2196F3",
    title: "S&P 500 Index: Growth, Volatility, and Investment Insights",
    excerpt:
      "The S&P 500 Index is a key benchmark that reflects the overall health and trends of the U.S. stock market. Its movements are closely watched by global investors.",
    date: "17/04/2025",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/05/chi-so-s-p-500-index-thumbnail-768x512.jpg",
  },
  {
    id: 6,
    category: "Featured post",
    categoryColor: "#2F5E9E",
    title: "Is National Life Group Legit? An Honest Review for 2026",
    excerpt:
      "If you're researching life insurance in the United States — particularly IUL products — the name National Life Group (NLG) has likely already appeared on your radar.",
    date: "16/04/2026",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2026/04/National-Life-Group-Co-Uy-Tin-Khong-768x460.png",
  },
];

export default function FeaturedNews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured News
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 border border-[#2F5E9E] text-[#2F5E9E] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2F5E9E] hover:text-white transition-all"
          >
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="h-40 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className="absolute bottom-2 left-2 text-xs font-bold px-2 py-1 rounded text-white"
                    style={{ background: post.categoryColor + "cc" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-[#2F5E9E] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
