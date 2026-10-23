import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

export const metadata: Metadata = {
  title: "ACA Marketplace Health Insurance - VietPoint Insurance & Tax",
  description:
    "Explore ACA Marketplace health insurance options with Vietnamese-language support from VietPoint Insurance & Tax.",
};

export default async function KidIULPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_by: "VietPoint Insurance & Tax",
      hero_title: "ACA Marketplace Health Insurance",
      hero_desc:
        "Explore ACA Marketplace health insurance options with Vietnamese-language support. VietPoint helps you understand coverage, estimated costs, and available financial assistance based on your circumstances.",
      hero_cta: "Get Free Quote",
      how_h: "How It Works",
      how_desc:
        "VietPoint guides you through the ACA Marketplace enrollment process, from understanding your needs and reviewing available plans to completing your application and receiving enrollment confirmation.",
      steps: [
        {
          step: "01",
          title: "Free Consultation",
          desc: "Contact VietPoint and tell us about your household, healthcare needs, and estimated income.",
        },
        {
          step: "02",
          title: "Review Your Options",
          desc: "Review available plans, estimated premiums, deductibles, provider networks, and potential financial assistance.",
        },
        {
          step: "03",
          title: "Complete Your Application",
          desc: "Provide the required information and complete your Marketplace application with guidance from your agent.",
        },
        {
          step: "04",
          title: "Enrollment Confirmation",
          desc: "Review your enrollment confirmation and follow any instructions provided by the insurance company, including premium payment if required.",
        },
        {
          step: "05",
          title: "Ongoing Support",
          desc: "Contact VietPoint if you have questions about your coverage, premium payments, medical bills, or updating your Marketplace information.",
        },
      ],
      cta_h: "Get Help Finding the Right Coverage",
      cta_sub:
        "Contact VietPoint today for free consultation in Vietnamese.",
      cta_msg: "Send a Message",
    },
    vi: {
      hero_by: "VietPoint Bảo Hiểm & Thuế",
      hero_title: "Bảo Hiểm Sức Khỏe ACA Marketplace",
      hero_desc:
        "Tìm hiểu các lựa chọn bảo hiểm sức khỏe ACA Marketplace với sự hỗ trợ bằng tiếng Việt. VietPoint giúp bạn hiểu rõ quyền lợi, chi phí dự kiến và khả năng đủ điều kiện nhận hỗ trợ tài chính tùy theo hoàn cảnh.",
      hero_cta: "Nhận Tư Vấn Miễn Phí",
      how_h: "Quy Trình Hỗ Trợ",
      how_desc:
        "VietPoint đồng hành cùng bạn trong quá trình đăng ký ACA Marketplace, từ tìm hiểu nhu cầu, xem xét các chương trình hiện có đến hoàn tất hồ sơ và nhận xác nhận đăng ký.",
      steps: [
        {
          step: "01",
          title: "Tư vấn miễn phí",
          desc: "Liên hệ VietPoint và chia sẻ thông tin hộ gia đình, nhu cầu chăm sóc sức khỏe và thu nhập dự kiến.",
        },
        {
          step: "02",
          title: "Xem xét các lựa chọn",
          desc: "Xem xét các chương trình hiện có, phí bảo hiểm dự kiến, khoản khấu trừ, mạng lưới bác sĩ và khả năng nhận hỗ trợ tài chính.",
        },
        {
          step: "03",
          title: "Hoàn tất hồ sơ đăng ký",
          desc: "Cung cấp thông tin cần thiết và hoàn tất hồ sơ Marketplace với sự hướng dẫn của tư vấn viên.",
        },
        {
          step: "04",
          title: "Xác nhận đăng ký",
          desc: "Kiểm tra xác nhận đăng ký và thực hiện các hướng dẫn từ công ty bảo hiểm, bao gồm thanh toán phí nếu được yêu cầu.",
        },
        {
          step: "05",
          title: "Hỗ trợ sau đăng ký",
          desc: "Liên hệ VietPoint nếu bạn có thắc mắc về quyền lợi bảo hiểm, thanh toán phí, hóa đơn y tế hoặc cập nhật thông tin Marketplace.",
        },
      ],
      cta_h: "Nhận Hỗ Trợ Tìm Bảo Hiểm Phù Hợp",
      cta_sub:
        "Liên hệ VietPoint ngay hôm nay để được tư vấn hoàn toàn miễn phí bằng tiếng Việt.",
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
      .from("kid_iul_benefits")
      .select("*")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("page_content")
      .select("section, field, value_en, value_vi")
      .eq("page", "insurance_kid_iul"),
    getGlobalContact(lang),
  ]);

  const g = (sec: string, fld: string, fallback: string) => {
    const r = contentRows?.find((x) => x.section === sec && x.field === fld);
    return (lang === "vi" ? r?.value_vi || r?.value_en : r?.value_en) || fallback;
  };

  const heroTitle = g("hero", "title", t.hero_title);
  const heroDesc = g("hero", "desc", t.hero_desc);
  const heroCta = g("hero", "cta", t.hero_cta);
  const howH = g("how", "h", t.how_h);
  const howDesc = g("how", "desc", t.how_desc);
  const howSteps = [
    {
      step: "01",
      title: g("how", "step1_title", t.steps[0].title),
      desc: g("how", "step1_desc", t.steps[0].desc),
    },
    {
      step: "02",
      title: g("how", "step2_title", t.steps[1].title),
      desc: g("how", "step2_desc", t.steps[1].desc),
    },
    {
      step: "03",
      title: g("how", "step3_title", t.steps[2].title),
      desc: g("how", "step3_desc", t.steps[2].desc),
    },
    {
      step: "04",
      title: g("how", "step4_title", t.steps[3].title),
      desc: g("how", "step4_desc", t.steps[3].desc),
    },
    {
      step: "05",
      title: g("how", "step5_title", t.steps[4].title),
      desc: g("how", "step5_desc", t.steps[4].desc),
    },
  ];
  const ctaH = g("cta", "h", t.cta_h);
  const ctaSub = g("cta", "sub", t.cta_sub);

  const benefits = dbBenefits ?? [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-95 flex items-center"
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            {t.hero_by}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            {heroTitle}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-6">
            {heroDesc}
          </p>
          <a
            href="/contact?product=aca-marketplace"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-green-50 transition-colors"
            style={{ color: "#16a34a" }}
          >
            {heroCta}
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{howH}</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{howDesc}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {howSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <p className="text-4xl font-extrabold text-green-200 mb-2">
                  {s.step}
                </p>
                <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits (không hiển thị tiêu đề mục quyền lợi & bỏ cảm nhận khách hàng theo yêu cầu) */}
      {benefits.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.id ?? b.title} className="bg-gray-50 rounded-2xl p-6">
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

      {/* CTA */}
      <section
        id="get-quote"
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">{ctaH}</h2>
        <p className="text-white/80 mb-8">{ctaSub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contact.phoneTel}
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-green-50 transition-colors"
            style={{ color: "#16a34a" }}
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
