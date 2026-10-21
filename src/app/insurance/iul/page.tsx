import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import IULQuoteForm from "./IULQuoteForm";
import IULFaqAccordion from "./IULFaqAccordion";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

const diseases = [
  "Coronary artery disease",
  "Severe burns",
  "Stroke",
  "Traumatic brain injury",
  "Cancer",
  "Disability accident",
  "Organ transplantation",
  "Kidney failure",
  "Blindness",
  "Sudden cardiac arrest",
  "Amyotrophic lateral sclerosis",
  "Aplastic anemia",
  "Paralysis",
  "Fibrosis",
  "Coma",
  "Heart transplantation",
  "Motor neuron disease",
  "Coronary artery bypass surgery",
];

const diseasesVi: Record<string, string> = {
  "Coronary artery disease": "Bệnh động mạch vành",
  "Severe burns": "Bỏng nặng",
  "Stroke": "Đột quỵ",
  "Traumatic brain injury": "Chấn thương sọ não",
  "Cancer": "Ung thư",
  "Disability accident": "Tai nạn gây tàn tật",
  "Organ transplantation": "Ghép tạng",
  "Kidney failure": "Suy thận",
  "Blindness": "Mù lòa",
  "Sudden cardiac arrest": "Ngừng tim đột ngột",
  "Amyotrophic lateral sclerosis": "Xơ cứng teo cơ một bên (ALS)",
  "Aplastic anemia": "Thiếu máu bất sản",
  "Paralysis": "Liệt",
  "Fibrosis": "Xơ hóa",
  "Coma": "Hôn mê",
  "Heart transplantation": "Ghép tim",
  "Motor neuron disease": "Bệnh thần kinh vận động",
  "Coronary artery bypass surgery": "Phẫu thuật bắc cầu động mạch vành",
};

const fallbackReasons = [
  {
    icon: "❤️‍🩹",
    title: "Living Benefit",
    description:
      "Unlike other insurances where compensation is only paid upon death, you will be compensated if you experience critical illnesses, accidents, or disabilities with 16 different diseases.",
  },
  {
    icon: "🏖️",
    title: "Retirement Income",
    description:
      "Retirement age can bring you hundreds or millions of dollars for traveling and doing whatever you like without relying on your children.",
  },
  {
    icon: "🛡️",
    title: "Death Benefit",
    description:
      "Your family and children will be compensated in the event of unfortunate risks.",
  },
  {
    icon: "🔒",
    title: "Protection",
    description:
      "You will be protected against health issues, diseases, accidents, and risks until the age of 120.",
  },
  {
    icon: "📈",
    title: "Stable Interest Rate",
    description:
      "Enjoy stable returns when the market goes up, with the highest rate reaching 12.5% per year, higher than bank interest rates, especially without losing money when the market goes down.",
  },
  {
    icon: "💵",
    title: "Tax-Free Returns",
    description:
      "Withdrawals or loans do not require tax payment as long as the program is still active.",
  },
];

const fallbackSteps = [
  {
    step_label: "STEP 1",
    title: "Schedule a consultation",
    description:
      "Call the hotline 678 722 3447 or schedule an appointment with an agent. Agent will give you a call to investigate your needs and provide you with the most suitable quote.",
  },
  {
    step_label: "STEP 2",
    title: "Complete your application",
    description:
      "Agent will assist you in completing the application. You will provide the necessary information in just 10 minutes. After that, your application will be reviewed within 5–7 days.",
  },
  {
    step_label: "STEP 3",
    title: "Sign the contract",
    description:
      "Once your application is successfully approved, it will be sent to you within 5 days. After reviewing the application, you can sign to join the program.",
  },
];

const fallbackFaqs = [
  {
    question:
      "What if I don't have enough money to pay my monthly bills in 3–5 or 10 years?",
    answer:
      "There are 3 cases: (1) Use the cash value to continue the program for 1–2 years; (2) Request to reduce the payment fee to the minimum; (3) Cancel the program and withdraw all money. Note: if you join for less than 10 years, you may have to pay a surrender charge.",
  },
  {
    question:
      "What happens to your money if the insurance company goes bankrupt? Are you still protected?",
    answer:
      "Your money is protected by state insurance guarantee associations, which protect policyholders even if an insurance company fails. National Life Group, AIG, and Allianz are all highly rated financially stable companies.",
  },
  {
    question:
      "Does this program have a guarantee? Are you sure I don't lose money?",
    answer:
      "Yes. IUL Secrets has a 0% floor guarantee, meaning you cannot lose money due to market downturns. Your principal is always protected.",
  },
  {
    question: "Does joining IUL Secrets affect SSI, Medicare, Medicaid?",
    answer:
      "Properly structured IUL policies typically do not affect SSI, Medicare, or Medicaid eligibility. Consult with our agents for personalized advice based on your situation.",
  },
];

export default async function IULPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_sub: "IUL SECRETS",
      hero_h1: "THE KEY TO YOUR",
      hero_h2: "FINANCIAL FUTURE",
      hero_cta: "DISCOVER MORE",
      reasons_h1: "6 REASONS TO JOIN",
      diseases_h1: "Over 16 Types of Diseases and Injuries Covered",
      diseases_sub: "in the program's policy",
      quote_h1: "HOW TO GET",
      quote_h2: "$1,000,000 RIGHT NOW",
      quote_or: "Or call us directly",
      steps_h1: "3 SIMPLE STEPS TO JOIN",
      faq_h1: "FAQ – Some Questions You Are Wondering",
      cta_h1: "Get a Free Consultation Today",
      cta_btn: "📞 HOTLINE (678) 722-3447",
    },
    vi: {
      hero_sub: "IUL SECRETS",
      hero_h1: "CHÌA KHÓA CHO",
      hero_h2: "TƯƠNG LAI TÀI CHÍNH CỦA BẠN",
      hero_cta: "KHÁM PHÁ NGAY",
      reasons_h1: "6 LÝ DO NÊN THAM GIA",
      diseases_h1: "Hơn 16 Loại Bệnh và Chấn Thương Được Bảo Hiểm",
      diseases_sub: "trong chính sách của chương trình",
      quote_h1: "CÁCH NHẬN",
      quote_h2: "$1,000,000 NGAY BÂY GIỜ",
      quote_or: "Hoặc gọi trực tiếp cho chúng tôi",
      steps_h1: "3 BƯỚC ĐƠN GIẢN ĐỂ THAM GIA",
      faq_h1: "FAQ – Những Câu Hỏi Bạn Đang Thắc Mắc",
      cta_h1: "Nhận Tư Vấn Miễn Phí Ngay Hôm Nay",
      cta_btn: "📞 HOTLINE (678) 722-3447",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
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
            href="/contact?product=iul"
            className="inline-block font-bold px-8 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            {heroCta}
          </a>
        </div>
      </section>

      {/* 6 Reasons */}
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
              IUL SECRETS
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

      {/* Diseases covered */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-extrabold text-center text-gray-900 mb-2 uppercase tracking-wide">
            {diseasesH1}
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            {diseasesSub}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {diseases.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#2F5E9E" }}
                />
                <span className="text-sm text-gray-700">
                  {lang === "vi" ? (diseasesVi[d] ?? d) : d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      {/* 3 Steps */}
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
              IUL SECRETS
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.id ?? s.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xs tracking-wide"
                    style={{ background: "#2F5E9E" }}
                  >
                    {lang === "vi"
                      ? String(s.step_label ?? "").replace(/^STEP\b/i, "BƯỚC")
                      : s.step_label}
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
