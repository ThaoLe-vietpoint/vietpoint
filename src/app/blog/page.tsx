"use client";
import { useState } from "react";
import Link from "next/link";

const categories = [
  "All",
  "Featured post",
  "Insurance Knowledge",
  "Customer stories",
  "Health - Life",
  "Investment, Saving & Retire",
  "User manual",
  "Event",
];

const IMG = "https://thinksmartinsurance.com/wp-content/uploads";

const posts = [
  {
    id: 1,
    title: "Is National Life Group Legit? An Honest Review for 2026",
    excerpt:
      "If you're researching life insurance in the United States — particularly IUL (Indexed Universal Life) — you've likely come across National Life Group.",
    date: "Apr 16, 2026",
    category: "Featured post",
    categoryColor: "#C41E3A",
    image: `${IMG}/2026/04/National-Life-Group-Co-Uy-Tin-Khong-768x460.png`,
  },
  {
    id: 2,
    title:
      "Top 5 Life Insurance Agencies for Vietnamese in the USA [2026 Update]",
    excerpt:
      "When searching for a life insurance agency for the Vietnamese community in the U.S., the most critical factors are trust, language support, and experience.",
    date: "Apr 15, 2026",
    category: "Insurance Knowledge",
    categoryColor: "#2563eb",
    image: `${IMG}/2026/04/Top-5-Life-Insurance-Agencies-Empowering-the-Vietnamese-Community-in-the-USA-768x432.jpg`,
  },
  {
    id: 3,
    title: "NOTICE OF ADJUSTED DRAWING DATE",
    excerpt:
      'Program: "Win a Round-Trip U.S.–Vietnam Ticket for Lunar New Year 2027". Organizer: Thinksmart Insurance LLC. Please read carefully for updated drawing date information.',
    date: "Oct 13, 2025",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2025/10/Thong-bao-dieu-chinh-768x636.jpg`,
  },
  {
    id: 4,
    title: "Real Case Study: Life Insurance Cancer Payout of $54,000",
    excerpt:
      "Real Case Study: How the Life Insurance Claim Process Worked (with IUL vs Term Life Insurance) — a complete guide for policyholders.",
    date: "Oct 13, 2025",
    category: "Customer stories",
    categoryColor: "#16a34a",
    image: `${IMG}/2025/10/ANH-SON_THUMBNAIL-YOUTUBE-09-768x432.png`,
  },
  {
    id: 5,
    title:
      "Review Thinksmart Insurance: Case Study Life Insurance Payout $323,195",
    excerpt:
      "From Karaoke Shortness of Breath to a Cancer Diagnosis — Life insurance bồi thường and how IUL living benefits changed one family's life.",
    date: "Oct 13, 2025",
    category: "Customer stories",
    categoryColor: "#16a34a",
    image: `${IMG}/2025/10/CHI-TIEN_THUMBNAIL-YOUTUBE-02-768x432.png`,
  },
  {
    id: 6,
    title: "National Life Group's IUL Premium Payment Policy",
    excerpt:
      "Indexed Universal Life (IUL) insurance is increasingly attracting the interest of the Vietnamese community. Understanding the payment policy is crucial.",
    date: "May 1, 2025",
    category: "Featured post",
    categoryColor: "#C41E3A",
    image: `${IMG}/2025/05/chinh-sach-dong-phi-bao-hiem-iul-national-life-group-iul-premium-payment-policy-thumbnails-768x512.jpg`,
  },
  {
    id: 7,
    title:
      "How much does life insurance cost in the US? A 2025 guide for Vietnamese families",
    excerpt:
      "For the Vietnamese community in the US, understanding life insurance is not just about protecting your loved ones — it's about securing your future.",
    date: "Apr 20, 2025",
    category: "Featured post",
    categoryColor: "#C41E3A",
    image: `${IMG}/2025/05/bao-hiem-nhan-tho-bao-nhieu-tien-tai-my-how-much-does-life-insurance-cost-in-the-us-thumbnail-768x512.jpg`,
  },
  {
    id: 8,
    title: "IUL Insurance Returns: High or Low?",
    excerpt:
      "Indexed Universal Life (IUL) is a unique type of permanent life insurance. Beyond protection, it offers a cash value investment component.",
    date: "Apr 25, 2025",
    category: "Customer stories",
    categoryColor: "#16a34a",
    image: `${IMG}/2025/05/loi-nhuan-bao-hiem-iul-insurance-returns-thumbnail-768x512.jpg`,
  },
  {
    id: 9,
    title:
      '"Decoding" the US Single Tax and How Singles Can Optimize Their Taxes',
    excerpt:
      'What is the "single tax"? Does it exist in the US tax system? This article will clarify the concept and how to optimize for Vietnamese singles in America.',
    date: "Apr 22, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/05/thue-doc-than-my-us-single-tax-thumbnail-768x512.jpg`,
  },
  {
    id: 10,
    title: "S&P 500 Index: Growth, Volatility, and Investment Insights",
    excerpt:
      "The S&P 500 Index (Standard & Poor's 500) is a key benchmark that reflects the overall health of the U.S. economy and its impact on IUL policies.",
    date: "Apr 17, 2025",
    category: "Insurance Knowledge",
    categoryColor: "#2563eb",
    image: `${IMG}/2025/05/chi-so-s-p-500-index-thumbnail-768x512.jpg`,
  },
  {
    id: 11,
    title: "U.S. Estate Tax 2025: A Comprehensive Guide",
    excerpt:
      "Understanding the U.S. estate tax system is critically important for anyone, especially the Vietnamese community planning wealth transfer.",
    date: "Apr 14, 2025",
    category: "Investment, Saving & Retire",
    categoryColor: "#7c3aed",
    image: `${IMG}/2025/05/thue-thua-ke-my-us-estate-tax-2025-thumbnails-768x512.jpg`,
  },
  {
    id: 12,
    title:
      "US Tax Filing 2025: A Detailed and Accurate Guide for Vietnamese Individuals (F-1, H-1B, Green Card)",
    excerpt:
      "A comprehensive, step-by-step guide to filing US taxes for Vietnamese immigrants — covering F-1 students, H-1B workers, and Green Card holders.",
    date: "Apr 12, 2025",
    category: "Investment, Saving & Retire",
    categoryColor: "#7c3aed",
    image: `${IMG}/2025/05/khai-thue-my-us-tax-filling-thumbnail-768x512.jpg`,
  },
  {
    id: 13,
    title: "Allianz Insurance Company: Is It Truly Trustworthy?",
    excerpt:
      "As a global financial powerhouse, Allianz boasts a strong brand and long history. But is Allianz reputable for Vietnamese-American policyholders?",
    date: "Apr 10, 2025",
    category: "Featured post",
    categoryColor: "#C41E3A",
    image: `${IMG}/2025/05/cong-ty-bao-hiem-allianz-co-uy-tin-khong-is-allianz-reputable-thumbnail-1-768x512.jpg`,
  },
  {
    id: 14,
    title: "AIG Term Life Insurance Review 2025",
    excerpt:
      "AIG is one of America's largest insurers. Is their Term Life product right for the Vietnamese community? An honest, detailed review.",
    date: "Apr 7, 2025",
    category: "Insurance Knowledge",
    categoryColor: "#2563eb",
    image: `${IMG}/2025/04/banner-img.webp`,
  },
  {
    id: 15,
    title:
      "Will President Donald Trump Abolish the IRS and Federal Income Tax?",
    excerpt:
      "One of the hottest topics in recent tax reform discussions is the possibility that President Donald Trump may abolish the Internal Revenue Service (IRS).",
    date: "Mar 25, 2025",
    category: "Investment, Saving & Retire",
    categoryColor: "#7c3aed",
    image: `${IMG}/2025/04/president-donald-trump-abolish-the-internal-revenue-service-irs-and-federal-income-tax-768x512.jpg`,
  },
  {
    id: 16,
    title: "President Donald Trump Imposes a 46% Retaliatory Tariff on Vietnam",
    excerpt:
      "In a move that has shocked international trade circles, President Donald Trump has announced a decision to impose a 46% retaliatory tariff on Vietnam.",
    date: "Apr 2, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/04/tong-thong-donald-trump-ap-thue-doi-ung-46-len-viet-nam-president-donald-trump-imposes-46-reciprocal-tax-on-vietnam-thumbnail-768x512.jpg`,
  },
  {
    id: 17,
    title: "ARV Treatment: How Long Can People Living with HIV Expect to Live?",
    excerpt:
      "Thanks to advances in modern medicine – especially the advent of antiretroviral therapy (ARV) – the life expectancy of people living with HIV has significantly improved.",
    date: "Mar 17, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/03/dieu-tri-arv-treatment-thumbnail-768x512.jpg`,
  },
  {
    id: 18,
    title: "U.S. Immigration Requirements in 2025: A Comprehensive A-Z Guide",
    excerpt:
      "Are you nurturing the American dream and planning to settle in the United States by 2025? This article covers all immigration pathways and requirements.",
    date: "Mar 12, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/03/dieu-kien-nhap-cu-my-2025-u-s-immigration-requirements-in-2025-thumbnail-768x512.jpg`,
  },
  {
    id: 19,
    title:
      "HOT: Win a Round-Trip Ticket from the U.S. to Vietnam — Lunar New Year 2027!",
    excerpt:
      "To express our gratitude for your trust and support, Thinksmart Insurance is delighted to introduce the Round-Trip Ticket Giveaway Program for Lunar New Year 2027.",
    date: "Mar 10, 2025",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2025/03/Get-free-round-trip-tickets-us-vietnam-768x432.png`,
  },
  {
    id: 20,
    title:
      "Announcement of Results: Free Round-Trip Ticket Program USA - Vietnam 2025",
    excerpt:
      "Thinksmart Insurance sincerely thanks our valued customers for their interest in the Free Round-Trip Ticket Program USA - Vietnam 2025.",
    date: "Jan 7, 2025",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2025/01/ket-qua-free-ve-khu-hoi-hoa-ky-viet-nam-results-of-free-round-trip-ticket-usa-vietnam-2025-thumbnail-768x512.jpg`,
  },
  {
    id: 21,
    title:
      "Program: Free Round-Trip Tickets USA - Vietnam for Customers of Thinksmart Insurance",
    excerpt:
      "To serve the travel needs of Vietnamese people in the U.S. returning to Vietnam to visit family and celebrate the Lunar New Year.",
    date: "Aug 1, 2024",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2024/08/free-round-trip-ticket-usa-vn-thinksmart-insurance-thumbnail-1-768x512.jpg`,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Page header */}
      <section
        className="py-16 px-6 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #d94f3b 0%, #a82e1e 100%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Blog</h1>
        <p className="text-white/85 text-base">
          Stay informed with the latest insurance news and insights
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-10">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "text-white border-transparent"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
              style={
                activeCategory === cat
                  ? { background: "#C41E3A", borderColor: "#C41E3A" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts — single column large cards */}
        <div className="flex flex-col gap-0">
          {filtered.map((post, idx) => (
            <article
              key={post.id}
              className={`group bg-white ${idx < filtered.length - 1 ? "border-b border-gray-100" : ""} pb-10 mb-10`}
            >
              {/* Image */}
              <Link
                href={`/blog/${post.id}`}
                className="block relative overflow-hidden rounded-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ height: "clamp(220px, 45vw, 440px)" }}
                />
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: post.categoryColor }}
                >
                  {post.category}
                </span>
              </Link>

              {/* Content */}
              <div className="mt-5">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h2 className="font-extrabold text-gray-900 text-[1.35rem] leading-snug mb-3 group-hover:text-[#C41E3A] transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2 mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 text-sm font-bold transition-all hover:bg-[#C41E3A] hover:text-white"
                  style={{ borderColor: "#C41E3A", color: "#C41E3A" }}
                >
                  Read more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No posts found in this category.</p>
          </div>
        )}

        {/* Newsletter */}
        <div
          className="mt-4 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
          }}
        >
          <h3 className="text-xl font-extrabold text-white mb-2">
            Keep in Touch!
          </h3>
          <p className="text-white/80 text-sm mb-6">
            Leave your information to hold the secret to protecting your health
            and wealth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white font-bold px-8 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#C41E3A" }}
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </main>
  );
}
