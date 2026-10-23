import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import IULQuoteForm from "./IULQuoteForm";
import IULFaqAccordion from "./IULFaqAccordion";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

export const metadata: Metadata = {
  title: "Medicare - VietPoint Insurance & Tax",
  description:
    "Understand your Medicare options with Vietnamese-language guidance from VietPoint Insurance & Tax.",
};

export default async function IULPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_sub: "MEDICARE",
      hero_h1: "UNDERSTAND YOUR",
      hero_h2: "MEDICARE OPTIONS",
      hero_cta: "GET MEDICARE HELP",
      reasons_h1: "WHY CHOOSE VIETPOINT",
      diseases_h1: "MEDICARE BENEFITS & SUPPORT",
      diseases_sub: "Learn about Medicare coverage and how VietPoint helps you",
      quote_h1: "GET PERSONALIZED",
      quote_h2: "MEDICARE GUIDANCE",
      quote_or: "Or call us directly",
      steps_h1: "3 SIMPLE STEPS TO GET STARTED",
      faq_h1: "MEDICARE FAQs",
      cta_h1: "Get Help Understanding Your Medicare Options",
    },
    vi: {
      hero_sub: "MEDICARE",
      hero_h1: "TÌM HIỂU CÁC LỰA CHỌN",
      hero_h2: "BẢO HIỂM MEDICARE",
      hero_cta: "NHẬN HỖ TRỢ MEDICARE",
      reasons_h1: "TÌM HIỂU VỀ MEDICARE",
      diseases_h1: "QUYỀN LỢI & HỖ TRỢ MEDICARE",
      diseases_sub: "Tìm hiểu quyền lợi bảo hiểm Medicare cùng VietPoint",
      quote_h1: "NHẬN HƯỚNG DẪN",
      quote_h2: "MEDICARE THEO NHU CẦU",
      quote_or: "Hoặc gọi trực tiếp cho chúng tôi",
      steps_h1: "QUY TRÌNH LÀM VIỆC VỚI VIETPOINT",
      faq_h1: "CÂU HỎI THƯỜNG GẶP VỀ MEDICARE",
      cta_h1: "Nhận Hỗ Trợ Tìm Hiểu Các Lựa Chọn Medicare Của Bạn",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
  const formatStepLabel = (raw: string | null | undefined): string => {
    const clean = String(raw ?? "").replace(/:\s*$/, "").trim();
    if (lang === "vi") {
      return clean.replace(/^STEP\s*/i, "Bước ");
    }
    return clean.replace(/^BƯỚC\s*/i, "STEP ");
  };
  const supabase = await createClient();
  const [
    { data: reasonsData },
    { data: stepsData },
    { data: faqsData },
    { data: contentRows },
    contact,
  ] = await Promise.all([
    supabase
      .from("iul_reasons")
      .select("*")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("iul_steps")
      .select("*")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("iul_faqs")
      .select("*")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("page_content")
      .select("section, field, value_en, value_vi")
      .eq("page", "insurance_iul"),
    getGlobalContact(lang),
  ]);

  const g = (sec: string, fld: string, fallback: string) => {
    const r = contentRows?.find((x) => x.section === sec && x.field === fld);
    return (lang === "vi" ? r?.value_vi || r?.value_en : r?.value_en) || fallback;
  };

  const heroSub = g("hero", "sub", t.hero_sub);
  const heroH1 = g("hero", "h1", t.hero_h1);
  const heroH2 = g("hero", "h2", t.hero_h2);
  const heroCta = g("hero", "cta", t.hero_cta);
  const reasonsH1 = g("sections", "reasons_h1", t.reasons_h1);
  const diseasesH1 = g("sections", "diseases_h1", t.diseases_h1);
  const diseasesSub = g("sections", "diseases_sub", t.diseases_sub);
  const quoteH1 = g("quote", "h1", t.quote_h1);
  const quoteH2 = g("quote", "h2", t.quote_h2);
  const quoteOr = g("quote", "or", t.quote_or);
  const stepsH1 = g("sections", "steps_h1", t.steps_h1);
  const faqH1 = g("sections", "faq_h1", t.faq_h1);
  const ctaH1 = g("cta", "h1", t.cta_h1);

  const reasons = reasonsData ?? [];
  const steps = stepsData ?? [];
  const faqs = faqsData ?? [];
  const processedFaqs = faqs.map((f) => ({
    question: txt(f, "question"),
    answer: txt(f, "answer"),
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-95 flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-2"
            style={{ color: "#e94560" }}
          >
            {heroSub}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {heroH1}
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-yellow-400">
            {heroH2}
          </h2>
          <a
            href="/contact?product=medicare"
            className="inline-block font-bold px-8 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            {heroCta}
          </a>
        </div>
      </section>

      {/* Tìm Hiểu Về Medicare */}
      {reasons.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2">
              {reasonsH1}
            </h2>
            <h3
              className="text-2xl font-extrabold text-center mb-10"
              style={{ color: "#2F5E9E" }}
            >
              {diseasesH1}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((r) => (
                <div
                  key={r.id ?? r.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="text-3xl mb-3">{r.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {txt(r, "title")}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {txt(r, "description")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote form */}
      <section
        id="quote"
        className="py-16 px-6"
        style={{ background: "#1a1a2e" }}
      >
        <div className="max-w-2xl mx-auto text-white text-center">
          <h2 className="text-2xl font-extrabold mb-2">{quoteH1}</h2>
          <h3 className="text-3xl font-extrabold text-yellow-400 mb-8">
            {quoteH2}
          </h3>
          <IULQuoteForm lang={lang} />
          <div className="mt-6">
            <p className="text-white/60 text-sm mb-2">{quoteOr}</p>
            <a
              href={contact.phoneTel}
              className="text-2xl font-bold text-yellow-400 hover:text-yellow-300"
            >
              {contact.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Quy trình làm việc với VietPoint */}
      {steps.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-2">
              {stepsH1}
            </h2>
            <h3
              className="text-2xl font-extrabold text-center mb-10"
              style={{ color: "#2F5E9E" }}
            >
              {heroSub}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.id ?? s.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xs tracking-wide"
                    style={{ background: "#2F5E9E" }}
                  >
                    {formatStepLabel(s.step_label)}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {txt(s, "title")}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {txt(s, "description")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {processedFaqs.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
              {faqH1}
            </h2>
            <IULFaqAccordion faqs={processedFaqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-12 px-6 text-center"
        style={{ background: "#2F5E9E" }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">{ctaH1}</h2>
        <a
          href={contact.phoneTel}
          className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
          style={{ color: "#2F5E9E" }}
        >
          📞 HOTLINE {contact.phone}
        </a>
      </section>
    </main>
  );
}
