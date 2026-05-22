"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    title: "IUL For Kids (EBTP)",
    tag: "Children Protection",
    tagColor: "#4CAF50",
    quoteParam: "kid-iul",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/EBTP-1024x683.webp",
    description:
      "Protect your children and build a financial fund for them to enter university, giving them wings to fly far and higher at the age of 18.",
    features: [
      "Education fund",
      "Life protection",
      "Builds cash value",
      "Flexible premiums",
    ],
  },
  {
    id: 2,
    title: "Max Funded IUL",
    tag: "Retirement Planning",
    tagColor: "#2196F3",
    quoteParam: "max-iul",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/Maxfund-1024x683.webp",
    description:
      "Full retirement thanks to the ability to generate 8–15% profit per year, absolute safety thanks to the NO LOSS policy. Protect you and your family in case of illness, disability and death.",
    features: [
      "8–15% profit/year",
      "NO LOSS policy",
      "Illness protection",
      "Death benefit",
    ],
  },
  {
    id: 3,
    title: "IUL Secrets",
    tag: "Premium IUL",
    tagColor: "#2F5E9E",
    quoteParam: "iul",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/IUL-1024x683.webp",
    description:
      "Compensation for more than 16 types of diseases and disabilities. Compensation upon death. Accumulate TAX-FREE retirement funds with high interest rates of 6–12%/year and flexible contract terms.",
    features: [
      "16+ disease types",
      "TAX-FREE retirement",
      "6–12%/year returns",
      "Death benefit",
    ],
  },
  {
    id: 4,
    title: "Term Life",
    tag: "Term Insurance",
    tagColor: "#FF9800",
    quoteParam: "termlife",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/Term-Life-1024x683.webp",
    description:
      "CHEAP PRICE, suitable for all participants. Compensation for more than 16 types of diseases, disabilities and death with a contract term of up to 30 years.",
    features: [
      "Affordable premiums",
      "16+ disease types",
      "Up to 30 years",
      "Disability coverage",
    ],
  },
];

export default function Products({
  initialProducts,
}: {
  initialProducts?: typeof DEFAULT_PRODUCTS;
}) {
  const products = initialProducts ?? DEFAULT_PRODUCTS;
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? products.length - 1 : a - 1));
  const next = () => setActive((a) => (a === products.length - 1 ? 0 : a + 1));

  const product = products[active];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#2F5E9E] text-sm font-semibold tracking-widest uppercase mb-2">
            We provide insurance services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Insurance Products
          </h2>
        </motion.div>

        {/* Product Card - Full width image carousel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Full-width image with arrows overlaid */}
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="w-full h-90 md:h-120 bg-cover bg-center"
              style={{ backgroundImage: `url("${product.image}")` }}
            />
            {/* Prev Arrow */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            {/* Next Arrow */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Title + Description below image */}
          <div className="mt-5 px-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {product.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              {product.description}
            </p>
            <a
              href={`/contact?product=${product.quoteParam ?? "general"}`}
              style={{ background: "#2F5E9E" }}
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get a free quote <ArrowRight size={16} />
            </a>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#2F5E9E]" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
