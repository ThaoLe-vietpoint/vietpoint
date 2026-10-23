import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

export const metadata: Metadata = {
  title: "Auto Insurance - VietPoint Insurance & Tax",
  description:
    "Explore auto insurance options, understand policy details, and find coverage that fits your needs and budget with VietPoint Insurance & Tax.",
};

export default async function TermLifePage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_by: "VietPoint Insurance & Tax",
      hero_title: "AUTO INSURANCE",
      hero_desc:
        "Looking for auto insurance? VietPoint helps you explore coverage options, understand policy details, and find coverage that fits your needs and budget. Our Vietnamese-speaking team is here to make the process easier.",
      hero_cta: "GET A FREE QUOTE",
      benefits_h: "Why Choose Auto Insurance?",
      compare_h: "Understanding Your Auto Coverage Options",
      col1: "Coverage Type",
      col2: "What It Covers",
      col3: "Commonly Used For",
      compare_rows: [
        [
          "Liability Coverage",
          "Bodily injury & property damage to others when you are at fault",
          "Required in most states",
        ],
        [
          "Collision Coverage",
          "Damage to your vehicle from a collision with another car or object",
          "Financed / leased or newer vehicles",
        ],
        [
          "Comprehensive Coverage",
          "Non-collision losses (theft, vandalism, hail, falling objects)",
          "Protecting vehicle value",
        ],
        [
          "Uninsured / Underinsured Motorist",
          "Helps cover costs if hit by a driver with little or no insurance",
          "Extra peace of mind",
        ],
        [
          "Medical Payments / PIP",
          "Eligible medical expenses for you and your passengers",
          "Health & injury protection",
        ],
        [
          "Roadside & Rental Reimbursement",
          "Towing, battery jump, flat tire, or rental car during covered repairs",
          "Everyday convenience",
        ],
      ],
      cta_h: "Get Your Free Auto Insurance Quote",
      cta_sub:
        "Our team is ready to help you explore auto insurance options and understand your coverage. Contact VietPoint today for a free quote.",
      cta_msg: "Send a Message",
    },
    vi: {
      hero_by: "VietPoint Bảo Hiểm & Thuế",
      hero_title: "BẢO HIỂM XE HƠI",
      hero_desc:
        "Bạn đang tìm bảo hiểm xe hơi? VietPoint hỗ trợ bạn tìm hiểu các lựa chọn bảo hiểm, giải thích điều khoản hợp đồng và tìm gói bảo hiểm phù hợp với nhu cầu và ngân sách. Đội ngũ hỗ trợ bằng tiếng Việt luôn sẵn sàng giúp bạn thực hiện quy trình dễ dàng hơn.",
      hero_cta: "NHẬN BÁO GIÁ MIỄN PHÍ",
      benefits_h: "Vì Sao Nên Có Bảo Hiểm Xe Hơi?",
      compare_h: "Tìm Hiểu Các Quyền Lợi Bảo Hiểm Xe",
      col1: "Loại Quyền Lợi",
      col2: "Phạm Vi Bảo Vệ",
      col3: "Mục Đích Phổ Biến",
      compare_rows: [
        [
          "Bảo hiểm trách nhiệm (Liability)",
          "Thương tích hoặc thiệt hại tài sản cho người khác khi bạn có lỗi",
          "Bắt buộc tại hầu hết tiểu bang",
        ],
        [
          "Bảo hiểm va chạm (Collision)",
          "Thiệt hại xe của bạn khi va chạm với xe khác hoặc vật thể",
          "Xe trả góp / thuê hoặc xe mới",
        ],
        [
          "Bảo hiểm toàn diện (Comprehensive)",
          "Thiệt hại ngoài va chạm (trộm cắp, phá hoại, mưa đá, vật rơi)",
          "Bảo vệ giá trị xe",
        ],
        [
          "Người lái không có / thiếu bảo hiểm",
          "Hỗ trợ chi phí khi bị đụng bởi tài xế không có hoặc thiếu bảo hiểm",
          "An tâm hơn khi lưu thông",
        ],
        [
          "Chi phí y tế (MedPay / PIP)",
          "Chi phí y tế đủ điều kiện cho bạn và hành khách trên xe",
          "Bảo vệ sức khỏe & thương tích",
        ],
        [
          "Cứu hộ & Thuê xe thay thế",
          "Kéo xe, kích bình, thay lốp hoặc chi phí thuê xe khi đang sửa chữa",
          "Tiện lợi khi gặp sự cố",
        ],
      ],
      cta_h: "Nhận Báo Giá Bảo Hiểm Xe Miễn Phí",
      cta_sub:
        "Đội ngũ VietPoint sẵn sàng hỗ trợ bạn tìm hiểu các lựa chọn bảo hiểm xe và quyền lợi bảo hiểm. Liên hệ với chúng tôi ngay hôm nay để nhận báo giá miễn phí.",
      cta_msg: "Gửi Tin Nhắn",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
  const supabase = await createClient();
  const [{ data: dbBenefits }, { data: contentRows }, contact] = await Promise.all([
    supabase
      .from("termlife_benefits")
      .select("*")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("page_content")
      .select("section, field, value_en, value_vi")
      .eq("page", "insurance_termlife"),
    getGlobalContact(lang),
  ]);

  const g = (sec: string, fld: string, fallback: string) => {
    const r = contentRows?.find((x) => x.section === sec && x.field === fld);
    return (lang === "vi" ? r?.value_vi || r?.value_en : r?.value_en) || fallback;
  };

  const heroTitle = g("hero", "title", t.hero_title);
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
            href="/contact?product=auto-insurance"
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
                    {t.col1}
                  </th>
                  <th
                    className="p-4 bg-orange-50 font-semibold border border-gray-200"
                    style={{ color: "#ea580c" }}
                  >
                    {t.col2}
                  </th>
                  <th
                    className="p-4 bg-red-50 font-semibold border border-gray-200 rounded-tr-lg"
                    style={{ color: "#2F5E9E" }}
                  >
                    {t.col3}
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
            href={contact.phoneTel}
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-orange-50 transition-colors"
            style={{ color: "#ea580c" }}
          >
            📞 {contact.phone}
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
