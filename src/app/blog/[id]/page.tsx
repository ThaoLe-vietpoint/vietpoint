import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";
import { resolveBlogImages } from "@/utils/blogImages";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { STATIC_CONTENT } from "../staticContent";

// ── Hardcoded fallback posts (used before Supabase seed is run) ──────────────
const IMG = "https://thinksmartinsurance.com/wp-content/uploads";
const STATIC_POSTS = [
  {
    id: 1,
    title: "Is National Life Group Legit? An Honest Review for 2026",
    excerpt:
      "If you're researching life insurance in the United States — particularly IUL (Indexed Universal Life) — you've likely come across National Life Group.",
    date: "Apr 16, 2026",
    category: "Featured post",
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
    image: `${IMG}/2026/04/Top-5-Life-Insurance-Agencies-Empowering-the-Vietnamese-Community-in-the-USA-768x432.jpg`,
  },
  {
    id: 3,
    title: "NOTICE OF ADJUSTED DRAWING DATE",
    excerpt:
      'Program: "Win a Round-Trip U.S.–Vietnam Ticket for Lunar New Year 2027". Please read carefully for updated drawing date information.',
    date: "Oct 13, 2025",
    category: "Event",
    image: `${IMG}/2025/10/Thong-bao-dieu-chinh-768x636.jpg`,
  },
  {
    id: 4,
    title: "Real Case Study: Life Insurance Cancer Payout of $54,000",
    excerpt:
      "Real Case Study: How the Life Insurance Claim Process Worked (with IUL vs Term Life Insurance) — a complete guide for policyholders.",
    date: "Oct 13, 2025",
    category: "Customer stories",
    image: `${IMG}/2025/10/ANH-SON_THUMBNAIL-YOUTUBE-09-768x432.png`,
  },
  {
    id: 5,
    title:
      "Review VietPoint Insurance & Tax: Case Study Life Insurance Payout $323,195",
    excerpt:
      "From Karaoke Shortness of Breath to a Cancer Diagnosis — how IUL living benefits changed one family's life.",
    date: "Oct 13, 2025",
    category: "Customer stories",
    image: `${IMG}/2025/10/CHI-TIEN_THUMBNAIL-YOUTUBE-02-768x432.png`,
  },
  {
    id: 6,
    title: "National Life Group's IUL Premium Payment Policy",
    excerpt:
      "Indexed Universal Life (IUL) insurance is increasingly attracting the interest of the Vietnamese community. Understanding the payment policy is crucial.",
    date: "May 1, 2025",
    category: "Featured post",
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
    image: `${IMG}/2025/05/bao-hiem-nhan-tho-bao-nhieu-tien-tai-my-how-much-does-life-insurance-cost-in-the-us-thumbnail-768x512.jpg`,
  },
  {
    id: 8,
    title: "IUL Insurance Returns: High or Low?",
    excerpt:
      "Indexed Universal Life (IUL) is a unique type of permanent life insurance. Beyond protection, it offers a cash value investment component.",
    date: "Apr 25, 2025",
    category: "Customer stories",
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
    image: `${IMG}/2025/05/thue-doc-than-my-us-single-tax-thumbnail-768x512.jpg`,
  },
  {
    id: 10,
    title: "S&P 500 Index: Growth, Volatility, and Investment Insights",
    excerpt:
      "The S&P 500 Index is a key benchmark that reflects the overall health of the U.S. economy and its impact on IUL policies.",
    date: "Apr 17, 2025",
    category: "Insurance Knowledge",
    image: `${IMG}/2025/05/chi-so-s-p-500-index-thumbnail-768x512.jpg`,
  },
  {
    id: 11,
    title: "U.S. Estate Tax 2025: A Comprehensive Guide",
    excerpt:
      "Understanding the U.S. estate tax system is critically important for anyone, especially the Vietnamese community planning wealth transfer.",
    date: "Apr 14, 2025",
    category: "Investment, Saving & Retire",
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
    image: `${IMG}/2025/05/khai-thue-my-us-tax-filling-thumbnail-768x512.jpg`,
  },
  {
    id: 13,
    title: "Allianz Insurance Company: Is It Truly Trustworthy?",
    excerpt:
      "As a global financial powerhouse, Allianz boasts a strong brand and long history. But is Allianz reputable for Vietnamese-American policyholders?",
    date: "Apr 10, 2025",
    category: "Featured post",
    image: `${IMG}/2025/05/cong-ty-bao-hiem-allianz-co-uy-tin-khong-is-allianz-reputable-thumbnail-1-768x512.jpg`,
  },
  {
    id: 14,
    title: "AIG Term Life Insurance Review 2025",
    excerpt:
      "AIG is one of America's largest insurers. Is their Term Life product right for the Vietnamese community? An honest, detailed review.",
    date: "Apr 7, 2025",
    category: "Insurance Knowledge",
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
    image: `${IMG}/2025/04/president-donald-trump-abolish-the-internal-revenue-service-irs-and-federal-income-tax-768x512.jpg`,
  },
  {
    id: 16,
    title: "President Donald Trump Imposes a 46% Retaliatory Tariff on Vietnam",
    excerpt:
      "In a move that has shocked international trade circles, President Donald Trump has announced a decision to impose a 46% retaliatory tariff on Vietnam.",
    date: "Apr 2, 2025",
    category: "Health - Life",
    image: `${IMG}/2025/04/tong-thong-donald-trump-ap-thue-doi-ung-46-len-viet-nam-president-donald-trump-imposes-46-reciprocal-tax-on-vietnam-thumbnail-768x512.jpg`,
  },
  {
    id: 17,
    title: "ARV Treatment: How Long Can People Living with HIV Expect to Live?",
    excerpt:
      "Thanks to advances in modern medicine – especially the advent of antiretroviral therapy (ARV) – the life expectancy of people living with HIV has significantly improved.",
    date: "Mar 17, 2025",
    category: "Health - Life",
    image: `${IMG}/2025/03/dieu-tri-arv-treatment-thumbnail-768x512.jpg`,
  },
  {
    id: 18,
    title: "U.S. Immigration Requirements in 2025: A Comprehensive A-Z Guide",
    excerpt:
      "Are you nurturing the American dream and planning to settle in the United States by 2025? This article covers all immigration pathways and requirements.",
    date: "Mar 12, 2025",
    category: "Health - Life",
    image: `${IMG}/2025/03/dieu-kien-nhap-cu-my-2025-u-s-immigration-requirements-in-2025-thumbnail-768x512.jpg`,
  },
  {
    id: 19,
    title:
      "HOT: Win a Round-Trip Ticket from the U.S. to Vietnam — Lunar New Year 2027!",
    excerpt:
      "To express our gratitude for your trust and support, VietPoint Insurance & Tax is delighted to introduce the Round-Trip Ticket Giveaway Program for Lunar New Year 2027.",
    date: "Mar 10, 2025",
    category: "Event",
    image: `${IMG}/2025/03/Get-free-round-trip-tickets-us-vietnam-768x432.png`,
  },
  {
    id: 20,
    title:
      "Announcement of Results: Free Round-Trip Ticket Program USA - Vietnam 2025",
    excerpt:
      "VietPoint Insurance & Tax sincerely thanks our valued customers for their interest in the Free Round-Trip Ticket Program USA - Vietnam 2025.",
    date: "Jan 7, 2025",
    category: "Event",
    image: `${IMG}/2025/01/ket-qua-free-ve-khu-hoi-hoa-ky-viet-nam-results-of-free-round-trip-ticket-usa-vietnam-2025-thumbnail-768x512.jpg`,
  },
  {
    id: 21,
    title:
      "Program: Free Round-Trip Tickets USA - Vietnam for Customers of VietPoint Insurance & Tax",
    excerpt:
      "To serve the travel needs of Vietnamese people in the U.S. returning to Vietnam to visit family and celebrate the Lunar New Year.",
    date: "Aug 1, 2024",
    category: "Event",
    image: `${IMG}/2024/08/free-round-trip-ticket-usa-vn-thinksmart-insurance-thumbnail-1-768x512.jpg`,
  },
];

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Unified post shape used for rendering
type PostData = {
  id: string | number;
  slug?: string | null;
  title_en: string;
  title_vi: string;
  excerpt_en: string;
  excerpt_vi: string;
  content_en: string;
  content_vi: string;
  image: string | null;
  category: string | null;
  created_at: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const numId = Number(id);
  if (!isNaN(numId) && Number.isInteger(numId)) {
    const s = STATIC_POSTS.find((p) => p.id === numId);
    if (!s) return { title: "Blog - VietPoint" };
    return {
      title: `${s.title} - VietPoint Insurance & Tax`,
      description: s.excerpt,
    };
  }
  const supabase = await createClient();
  // Try UUID then slug lookup
  const query = UUID_RE.test(id)
    ? supabase
        .from("blog_posts")
        .select("title_en, title_vi, excerpt_en, excerpt_vi")
        .eq("id", id)
        .single()
    : supabase
        .from("blog_posts")
        .select("title_en, title_vi, excerpt_en, excerpt_vi")
        .eq("slug", id)
        .single();
  const { data: post } = await query;
  if (!post) return { title: "Blog - VietPoint" };
  return {
    title: `${post.title_vi || post.title_en} - VietPoint Insurance & Tax`,
    description: post.excerpt_vi || post.excerpt_en || undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lang = await getLang();

  let post: PostData | null = null;
  let related: {
    id: string | number;
    title_vi: string;
    title_en: string;
    image: string | null;
    category: string | null;
  }[] = [];
  let uuidNumericId: number | null = null;

  const numId = Number(id);
  const isNumeric = !isNaN(numId) && Number.isInteger(numId) && numId > 0;

  if (isNumeric) {
    // Try Supabase first (same DB as Vercel) — query by position (created_at DESC)
    const supabase = await createClient();
    const { data: dbPost } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .range(numId - 1, numId - 1)
      .single();

    if (dbPost) {
      post = dbPost as PostData;
      const { data: dbRelated } = await supabase
        .from("blog_posts")
        .select("id, title_vi, title_en, image, category, created_at")
        .eq("published", true)
        .neq("id", dbPost.id)
        .order("created_at", { ascending: false })
        .limit(3);
      related = (dbRelated ?? []) as typeof related;
    } else {
      // Fallback: hardcoded excerpt-only static list
      const s = STATIC_POSTS.find((p) => p.id === numId);
      if (!s) notFound();
      post = {
        id: s!.id,
        title_en: s!.title,
        title_vi: s!.title,
        excerpt_en: s!.excerpt,
        excerpt_vi: s!.excerpt,
        content_en: `<p>${s!.excerpt}</p>`,
        content_vi: `<p>${s!.excerpt}</p>`,
        image: s!.image,
        category: s!.category,
        created_at: new Date(s!.date).toISOString(),
      };
      related = STATIC_POSTS.filter((p) => p.id !== numId)
        .slice(0, 3)
        .map((p) => ({
          id: p.id,
          title_vi: p.title,
          title_en: p.title,
          image: p.image,
          category: p.category,
        }));
    }
  } else {
    // UUID or slug: query Supabase
    const supabase = await createClient();
    const { data: dbPost } = await supabase
      .from("blog_posts")
      .select("*")
      .eq(UUID_RE.test(id) ? "id" : "slug", id)
      .eq("published", true)
      .single();
    if (!dbPost) notFound();
    post = dbPost as PostData;

    // Find the numeric position of this post (kept for legacy compatibility)
    const { count: newerCount } = await supabase
      .from("blog_posts")
      .select("id", { count: "exact", head: true })
      .eq("published", true)
      .gt("created_at", dbPost.created_at);
    uuidNumericId = (newerCount ?? 0) + 1;

    const { data: dbRelated } = await supabase
      .from("blog_posts")
      .select("id, slug, title_vi, title_en, image, category, created_at")
      .eq("published", true)
      .neq("id", dbPost.id)
      .order("created_at", { ascending: false })
      .limit(3);
    related = (dbRelated ?? []) as typeof related;
  }

  // For UUID posts (created in admin): always use DB content — never override with static
  // For numeric posts (legacy IDs): use static content if DB only has a short excerpt
  const contentHtml = (() => {
    const vi = post!.content_vi;
    const en = post!.content_en;
    if (!isNumeric) {
      // UUID post — DB content is authoritative
      if (lang === "vi" && vi && vi.length > 100) return vi;
      if (en && en.length > 100) return en;
      return vi || en || "";
    }
    // Numeric (legacy) post — prefer static full HTML if available
    const staticContent = STATIC_CONTENT[numId] ?? "";
    if (staticContent && staticContent.length > 500) return staticContent;
    if (lang === "vi" && vi && vi.length > 500) return vi;
    return en || vi || "";
  })();
  const postTitle =
    (lang === "vi" ? post!.title_vi || post!.title_en : post!.title_en) || "";
  const postExcerpt =
    (lang === "vi" ? post!.excerpt_vi || post!.excerpt_en : post!.excerpt_en) ||
    "";

  const formattedDate = new Date(post!.created_at).toLocaleDateString(
    lang === "vi" ? "vi-VN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );
  const contact = await getGlobalContact(lang);
  const postImgMeta = resolveBlogImages(post!.image, lang);

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <h1
          className="text-[2.1rem] md:text-[2.7rem] font-extrabold text-gray-900 leading-tight mb-5"
          style={{ letterSpacing: "-0.01em" }}
        >
          {postTitle}
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{formattedDate}</span>
        </div>

        {postExcerpt && (
          <p
            className="text-lg text-gray-500 leading-relaxed border-l-4 pl-4 italic"
            style={{ borderColor: "#2F5E9E" }}
          >
            {postExcerpt}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
        <BlogArticle
          contentHtml={contentHtml}
          title={postTitle}
          lang={lang}
          images={postImgMeta.images}
        />

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              {lang === "vi" ? "Bài viết liên quan" : "Related Articles"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => {
                const relImg = resolveBlogImages(r.image, lang).cover;
                const relTitle =
                  lang === "vi"
                    ? r.title_vi || r.title_en
                    : r.title_en || r.title_vi;
                return (
                  <Link
                    key={r.id}
                    href={`/blog/${"slug" in r && r.slug ? r.slug : r.id}`}
                    className="group rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {relImg && (
                      <img
                        src={relImg}
                        alt={relTitle}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="p-3">
                      {r.category && (
                        <span
                          className="text-[10px] font-semibold"
                          style={{ color: "#2F5E9E" }}
                        >
                          {r.category}
                        </span>
                      )}
                      <p className="text-sm font-semibold mt-1 line-clamp-2 group-hover:text-[#2F5E9E] transition-colors text-gray-800">
                        {relTitle}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-10 rounded-2xl p-7 text-center"
          style={{
            background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
          }}
        >
          <p className="text-white/80 text-sm mb-1">
            {lang === "vi"
              ? "Cần tư vấn bảo hiểm nhân thọ?"
              : "Need guidance on life insurance?"}
          </p>
          <h3 className="font-extrabold text-white text-lg mb-3">
            {lang === "vi"
              ? "Liên hệ chuyên gia VietPoint — tư vấn miễn phí."
              : "Talk to a VietPoint Insurance & Tax expert — free consultation."}
          </h3>
          <a
            href={contact.phoneTel}
            className="inline-block bg-white font-bold px-7 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#2F5E9E" }}
          >
            📞 {contact.phone}
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold hover:underline"
            style={{ color: "#2F5E9E" }}
          >
            ← {lang === "vi" ? "Quay lại Blog" : "Back to Blog"}
          </Link>
        </div>
      </div>
    </main>
  );
}
