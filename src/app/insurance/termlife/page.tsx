import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";

export const metadata: Metadata = {
  title: "Term Life Insurance - VietPoint Insurance & Tax",
  description:
    "Affordable term life insurance with compensation for over 16 types of diseases, disabilities and death. Contract term up to 30 years.",
};

const fallbackBenefits = [
  {
    icon: "💰",
    title: "Affordable Price",
    description:
      "CHEAP PRICE, suitable for all participants regardless of income level.",
  },
  {
    icon: "🏥",
    title: "16+ Diseases Covered",
    description:
      "Compensation for more than 16 types of critical illnesses and disabilities.",
  },
  {
    icon: "🛡️",
    title: "Death Benefit",
    description:
      "Full death benefit paid to your family in case of unfortunate events.",
  },
  {
    icon: "📅",
    title: "Flexible Terms",
    description:
      "Contract term of up to 30 years — choose the term that fits your needs.",
  },
  {
    icon: "✅",
    title: "Easy to Qualify",
    description:
      "Simplified underwriting process — most healthy adults qualify quickly.",
  },
  {
    icon: "🔄",
    title: "Renewable",
    description:
      "Option to renew or convert your term policy at the end of the term period.",
  },
];

export default async function TermLifePage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_by: "VietPoint Insurance & Tax",
      hero_desc:
        "Affordable protection for you and your family — covering over 16 critical illnesses with terms up to 30 years.",
      hero_cta: "Get Free Quote",
      benefits_h: "Why Choose Term Life?",
      compare_h: "Term Life vs. IUL — Which is Right for You?",
      compare_rows: [
        ["Premium Cost", "Low", "Higher"],
        ["Coverage Term", "10–30 years", "Lifetime (to 120)"],
        ["Cash Value", "None", "✓ Builds over time"],
        ["Retirement Income", "None", "✓ Tax-free income"],
        ["Critical Illness Benefit", "✓ 16+ diseases", "✓ 16+ diseases"],
        ["Death Benefit", "✓", "✓"],
        ["Tax-Free Withdrawals", "None", "✓"],
        [
          "Suitable for",
          "Budget-focused families",
          "Long-term wealth builders",
        ],
      ],
      cta_h: "Get Your Free Term Life Quote",
      cta_sub:
        "Our agents are ready to find the most suitable Term Life plan for your family. Contact us today — consultation is completely free.",
      cta_msg: "Send a Message",
    },
    vi: {
      hero_by: "VietPoint Bảo Hiểm & Thuế",
      hero_desc:
        "Bảo vệ giá cả phải chăng cho bạn và gia đình — bao gồm hơn 16 bệnh nguy kịch với thời hạn lên đến 30 năm.",
      hero_cta: "Nhận Báo Giá Miễn Phí",
      benefits_h: "Tại Sao Chọn Bảo Hiểm Kỳ Hạn?",
      compare_h: "Term Life vs. IUL — Loại Nào Phù Hợp Với Bạn?",
      compare_rows: [
        ["Phí Bảo Hiểm", "Thấp", "Cao hơn"],
        ["Thời Hạn Bảo Hiểm", "10–30 năm", "Suốt đời (đến 120 tuổi)"],
        ["Giá Trị Tiền Mặt", "Không có", "✓ Tích lũy theo thời gian"],
        ["Thu Nhập Hưu Trí", "Không có", "✓ Thu nhập miễn thuế"],
        ["Bảo Hiểm Bệnh Nguy Kịch", "✓ 16+ bệnh", "✓ 16+ bệnh"],
        ["Quyền Lợi Tử Vong", "✓", "✓"],
        ["Rút Tiền Miễn Thuế", "Không có", "✓"],
        [
          "Phù Hợp Với",
          "Gia đình tiết kiệm chi phí",
          "Người xây dựng tài sản dài hạn",
        ],
      ],
      cta_h: "Nhận Báo Giá Bảo Hiểm Kỳ Hạn Miễn Phí",
      cta_sub:
        "Chuyên viên của chúng tôi sẵn sàng tìm gói Term Life phù hợp nhất cho gia đình bạn. Liên hệ ngay — tư vấn hoàn toàn miễn phí.",
      cta_msg: "Gửi Tin Nhắn",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
  const supabase = await createClient();
  const [{ data: dbBenefits }, { data: contentRows }] = await Promise.all([
    supabase
      .from("termlife_benefits")
      .select("*")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("page_content")
      .select("section, field, value_en, value_vi")
      .eq("page", "insurance_termlife"),
  ]);

  const g = (sec: string, fld: string, fallback: string) => {
    const r = contentRows?.find((x) => x.section === sec && x.field === fld);
    return (lang === "vi" ? r?.value_vi || r?.value_en : r?.value_en) || fallback;
  };

  const heroTitle = g(
    "hero",
    "title",
    lang === "vi" ? "BẢO HIỂM KỲ HẠN (TERM LIFE)" : "TERM LIFE INSURANCE",
  );
  const heroDesc = g("hero", "desc", t.hero_desc);
  const heroCta = g("hero", "cta", t.hero_cta);
  const benefitsH = g("sections", "benefits_h", t.benefits_h);
  const compareH = g("sections", "compare_h", t.compare_h);
  const ctaH = g("cta", "h", t.cta_h);
  const ctaSub = g("cta", "sub", t.cta_sub);

  const benefits = dbBenefits ?? [];
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-90 flex items-center"
        style={{
          background: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            {t.hero_by}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {heroTitle}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{heroDesc}</p>
          <a
            href="/contact?product=termlife"
            className="mt-8 inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-orange-50 transition-colors"
            style={{ color: "#ea580c" }}
          >
            {heroCta}
          </a>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              {benefitsH}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.id ?? b.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {txt(b, "title")}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {txt(b, "description")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            {compareH}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-50 font-semibold text-gray-700 rounded-tl-lg border border-gray-200">
                    Feature
                  </th>
                  <th
                    className="p-4 bg-orange-50 font-semibold border border-gray-200"
                    style={{ color: "#ea580c" }}
                  >
                    Term Life
                  </th>
                  <th
                    className="p-4 bg-red-50 font-semibold border border-gray-200 rounded-tr-lg"
                    style={{ color: "#2F5E9E" }}
                  >
                    IUL Secrets
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.compare_rows.map(([feature, term, iul]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-700 border border-gray-200">
                      {feature}
                    </td>
                    <td className="p-4 text-center text-gray-600 border border-gray-200 bg-orange-50/30">
                      {term}
                    </td>
                    <td className="p-4 text-center text-gray-600 border border-gray-200 bg-red-50/30">
                      {iul}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section
        id="get-quote"
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">{ctaH}</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">{ctaSub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16788253737"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-orange-50 transition-colors"
            style={{ color: "#ea580c" }}
          >
            📞 (678) 825-3737
          </a>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            {t.cta_msg}
          </Link>
        </div>
      </section>
    </main>
  );
}
