"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type ProductItem = {
  id?: number;
  title: string;
  title_vi?: string;
  tag: string;
  tag_vi?: string;
  tagColor: string;
  quoteParam?: string;
  image: string;
  description: string;
  description_vi?: string;
  features: string[];
  features_vi?: string[];
};

const DEFAULT_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Medicare",
    title_vi: "Bảo Hiểm Medicare",
    tag: "Health Insurance",
    tag_vi: "Bảo Hiểm Sức Khỏe",
    tagColor: "#2F5E9E",
    quoteParam: "medicare",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/IUL-1024x683.webp",
    description:
      "Federal health insurance primarily for people age 65 or older. Get Vietnamese-language guidance on hospital, medical, and prescription drug coverage.",
    description_vi:
      "Chương trình bảo hiểm sức khỏe liên bang dành cho người từ 65 tuổi trở lên. Tư vấn bằng tiếng Việt về quyền lợi bệnh viện, y tế và thuốc kê toa.",
    features: [
      "Hospital & medical coverage",
      "Prescription drug support",
      "Additional benefits",
      "Vietnamese-language guidance",
    ],
  },
  {
    id: 2,
    title: "ACA Marketplace",
    title_vi: "Bảo Hiểm Sức Khỏe ACA Marketplace",
    tag: "Individual & Family",
    tag_vi: "Cá Nhân & Gia Đình",
    tagColor: "#4CAF50",
    quoteParam: "aca-marketplace",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/EBTP-1024x683.webp",
    description:
      "Explore ACA Marketplace health insurance options with Vietnamese-language support. Understand coverage, estimated costs, and available financial assistance.",
    description_vi:
      "Tìm hiểu các lựa chọn bảo hiểm sức khỏe ACA Marketplace với sự hỗ trợ bằng tiếng Việt. Hiểu rõ quyền lợi, chi phí dự kiến và khả năng nhận hỗ trợ tài chính.",
    features: [
      "Essential health benefits",
      "Individual & family plans",
      "Preventive care services",
      "Enrollment & renewal help",
    ],
  },
  {
    id: 3,
    title: "Auto Insurance",
    title_vi: "Bảo Hiểm Xe Hơi",
    tag: "Vehicle Protection",
    tag_vi: "Bảo Hiểm Xe",
    tagColor: "#FF9800",
    quoteParam: "auto-insurance",
    image:
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/Term-Life-1024x683.webp",
    description:
      "Explore auto insurance coverage options, understand policy details, and find coverage that fits your needs and budget with our Vietnamese-speaking team.",
    description_vi:
      "Tìm hiểu các lựa chọn bảo hiểm xe hơi, giải thích điều khoản hợp đồng và tìm gói bảo hiểm phù hợp với nhu cầu và ngân sách cùng đội ngũ tiếng Việt.",
    features: [
      "Liability coverage",
      "Collision & comprehensive",
      "Budget-friendly options",
      "Personalized quote help",
    ],
  },
];

export default function Products({
  initialProducts,
  lang = "en",
}: {
  initialProducts?: ProductItem[];
  lang?: "en" | "vi";
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
            {lang === "vi"
              ? "Chúng tôi cung cấp dịch vụ bảo hiểm"
              : "We provide insurance services"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {lang === "vi"
              ? "Các Sản Phẩm Bảo Hiểm Của Chúng Tôi"
              : "Our Insurance Products"}
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
              {lang === "vi" ? product.title_vi || product.title : product.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              {lang === "vi"
                ? product.description_vi || product.description
                : product.description}
            </p>
            <a
              href={`/contact?product=${product.quoteParam ?? "general"}`}
              style={{ background: "#2F5E9E" }}
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              {lang === "vi" ? "Nhận báo giá miễn phí" : "Get a free quote"}{" "}
              <ArrowRight size={16} />
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
