import { createClient } from "@/utils/supabase/server";
import MaxFundedAccordion from "./MaxFundedAccordion";
import { getLang } from "@/utils/getLang";

const fallbackReasons = [
  {
    num: "1",
    title: "Index Lock Function",
    description:
      "The ONLY investment program integrated with insurance that allows you to lock in the highest interest rate each year (9–15%), protecting your gains even if the market crashes.",
  },
  {
    num: "2",
    title: "Retirement Income",
    description:
      "Receive an average of $50,000 per year, tax-free, for up to 20 consecutive years at retirement age.",
  },
  {
    num: "3",
    title: "Tax-Free Interest",
    description:
      "Withdrawals or loans taken from the program are tax-free as long as the program is active.",
  },
  {
    num: "4",
    title: "Inherited Property",
    description:
      "This will be a source of tax-free inheritance for children, helping them to build a better financial future.",
  },
  {
    num: "5",
    title: "Stable Interest Rates",
    description:
      "Enjoy stable interest rates of 6–10% through investments in the S&P 500 with CAP 15% and FLOOR 1% protection.",
  },
  {
    num: "6",
    title: "Living Benefits",
    description:
      "The policy provides a cash payout if you face serious health issues such as heart attack, stroke, cancer, or disability.",
  },
  {
    num: "7",
    title: "Death Benefits",
    description:
      "The policy provides a cash amount equivalent to the insurance value to your family in the event of death.",
  },
  {
    num: "8",
    title: "Protection Until Age 120",
    description:
      "Our insurance program offers comprehensive financial protection until the age of 120.",
  },
  {
    num: "9",
    title: "Shortened Payment Period",
    description:
      "Unlike current insurance programs, Max-Funded IUL Secrets only requires payments for a limited term, after which you enjoy lifelong benefits.",
  },
];

export default async function MaxFundedIULPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_h: "WHAT IS MAX FUNDED IUL SECRETS?",
      hero_desc:
        "Max-Funded IUL Secrets is a powerful, safe investment program — integrated with life insurance. With the aim of helping participants receive an average of",
      hero_amount: "$50,000 per year",
      hero_desc2: ", received continuously for 20 consecutive years, tax-free.",
      hero_cta: "REGISTER NOW",
      reasons_h1: "9 REASONS WHY YOU SHOULD JOIN",
      lock_h: "Exclusive Feature — Index Lock",
      lock_desc:
        "Index Lock allows participants to lock in the highest interest rate each year, ranging from 9–15%. Once the Index Lock is activated, even if the market crashes, participants will still receive the highest interest rate locked in.",
      lock_features: [
        {
          label: "CAP: 15%",
          desc: "Maximum annual return cap — benefits from market upswing",
        },
        {
          label: "FLOOR: 1%",
          desc: "Minimum guaranteed return — never lose money in a downturn",
        },
        {
          label: "Index Lock",
          desc: "Lock in the best rate mid-year — even if market drops later",
        },
      ],
      allianz_h: "Guaranteed by Allianz Corporation",
      allianz_desc:
        "Allianz is a renowned corporation specializing in investment products, with over 100 years of experience. Insurance programs under Allianz's management consistently deliver significantly higher returns compared to other companies.",
      allianz_items: [
        "A subsidiary of Allianz Group",
        "Over 100 years of history",
        "Present in more than 70 countries",
        "Total assets exceeding $1 trillion USD",
        "First to offer the Index Lock option",
      ],
      tax_h: "IRS Standard Tax Benefits",
      tax_items: [
        {
          icon: "💼",
          label: "Investment Capital",
          desc: "Investment capital for retirement is completely tax-free",
        },
        {
          icon: "🏦",
          label: "Retirement Withdrawals",
          desc: "Withdrawals at retirement age are completely tax-free",
        },
        {
          icon: "💳",
          label: "Early Withdrawals",
          desc: "Withdrawals at any time before retirement age are also tax-free",
        },
      ],
      advice_h: "Financial Advice",
      advice1_h: "Diversify Your Investments",
      advice1_desc:
        "If you only invest in businesses, stocks, or other high-risk assets that are vulnerable to market fluctuations, your financial stability could be at high risk of collapse. Diversifying your investments and participating in safer options that are immune to market volatility is crucial.",
      advice2_h: "Always Have an Emergency Fund",
      advice2_desc:
        "A standard emergency fund should cover 3–6 months of living expenses. Max Funded IUL's high liquidity features allow you to access your funds without penalties after 5 years, and withdrawals are completely tax-free.",
      cta_h: "Ready to Secure Your Retirement?",
      cta_sub: "Get a free consultation with our expert agents today.",
      cta_contact: "Contact Us",
    },
    vi: {
      hero_h: "MAX FUNDED IUL SECRETS LÀ GÌ?",
      hero_desc:
        "Max-Funded IUL Secrets là chương trình đầu tư mạnh mẽ, an toàn — tích hợp với bảo hiểm nhân thọ. Với mục tiêu giúp người tham gia nhận trung bình",
      hero_amount: "$50,000 mỗi năm",
      hero_desc2:
        ", nhận liên tục trong 20 năm liên tiếp, hoàn toàn miễn thuế.",
      hero_cta: "ĐĂNG KÝ NGAY",
      reasons_h1: "9 LÝ DO TẠI SAO BẠN NÊN THAM GIA",
      lock_h: "Tính Năng Độc Quyền — Index Lock",
      lock_desc:
        "Index Lock cho phép người tham gia khóa lãi suất cao nhất mỗi năm, dao động từ 9–15%. Khi Index Lock được kích hoạt, dù thị trường sụp đổ, người tham gia vẫn nhận được lãi suất cao nhất đã khóa.",
      lock_features: [
        {
          label: "CAP: 15%",
          desc: "Trần lợi nhuận hàng năm tối đa — hưởng lợi từ thị trường tăng",
        },
        {
          label: "FLOOR: 1%",
          desc: "Lợi nhuận tối thiểu được đảm bảo — không bao giờ mất tiền khi thị trường giảm",
        },
        {
          label: "Index Lock",
          desc: "Khóa mức lãi suất tốt nhất giữa năm — dù thị trường giảm sau đó",
        },
      ],
      allianz_h: "Được Bảo Đảm Bởi Tập Đoàn Allianz",
      allianz_desc:
        "Allianz là tập đoàn nổi tiếng chuyên về sản phẩm đầu tư, với hơn 100 năm kinh nghiệm. Các chương trình bảo hiểm do Allianz quản lý luôn mang lại lợi nhuận cao hơn đáng kể so với các công ty khác.",
      allianz_items: [
        "Công ty con của Tập đoàn Allianz",
        "Hơn 100 năm lịch sử",
        "Hiện diện tại hơn 70 quốc gia",
        "Tổng tài sản vượt 1 nghìn tỷ USD",
        "Đầu tiên cung cấp tùy chọn Index Lock",
      ],
      tax_h: "Lợi Ích Thuế Tiêu Chuẩn IRS",
      tax_items: [
        {
          icon: "💼",
          label: "Vốn Đầu Tư",
          desc: "Vốn đầu tư cho hưu trí hoàn toàn miễn thuế",
        },
        {
          icon: "🏦",
          label: "Rút Tiền Hưu Trí",
          desc: "Rút tiền ở tuổi hưu trí hoàn toàn miễn thuế",
        },
        {
          icon: "💳",
          label: "Rút Tiền Sớm",
          desc: "Rút tiền bất kỳ lúc nào trước tuổi hưu trí cũng miễn thuế",
        },
      ],
      advice_h: "Lời Khuyên Tài Chính",
      advice1_h: "Đa Dạng Hóa Đầu Tư",
      advice1_desc:
        "Nếu bạn chỉ đầu tư vào kinh doanh, cổ phiếu hoặc tài sản rủi ro cao dễ bị biến động thị trường, sự ổn định tài chính của bạn có thể gặp rủi ro cao. Đa dạng hóa đầu tư và tham gia các lựa chọn an toàn hơn không bị ảnh hưởng bởi biến động thị trường là điều quan trọng.",
      advice2_h: "Luôn Có Quỹ Khẩn Cấp",
      advice2_desc:
        "Quỹ khẩn cấp tiêu chuẩn nên bao gồm 3–6 tháng chi phí sinh hoạt. Tính thanh khoản cao của Max Funded IUL cho phép bạn rút tiền mà không bị phạt sau 5 năm và hoàn toàn miễn thuế.",
      cta_h: "Sẵn Sàng Bảo Vệ Hưu Trí Của Bạn?",
      cta_sub: "Nhận tư vấn miễn phí từ chuyên gia của chúng tôi ngay hôm nay.",
      cta_contact: "Liên Hệ Chúng Tôi",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
  const supabase = await createClient();
  const [{ data: dbReasons }, { data: contentRows }] = await Promise.all([
    supabase
      .from("max_iul_reasons")
      .select("*")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("page_content")
      .select("section, field, value_en, value_vi")
      .eq("page", "insurance_max_iul"),
  ]);

  const g = (sec: string, fld: string, fallback: string) => {
    const r = contentRows?.find((x) => x.section === sec && x.field === fld);
    return (lang === "vi" ? r?.value_vi || r?.value_en : r?.value_en) || fallback;
  };

  const heroH = g("hero", "h", t.hero_h);
  const heroDesc = g("hero", "desc", t.hero_desc);
  const heroAmount = g("hero", "amount", t.hero_amount);
  const heroDesc2 = g("hero", "desc2", t.hero_desc2);
  const heroCta = g("hero", "cta", t.hero_cta);
  const reasonsH1 = g("sections", "reasons_h1", t.reasons_h1);
  const ctaH = g("cta", "h", t.cta_h);
  const ctaSub = g("cta", "sub", t.cta_sub);

  const reasons = dbReasons ?? [];
  const processedReasons = reasons.map((r) => ({
    ...r,
    title: txt(r, "title"),
    description: txt(r, "description"),
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-100 flex items-center"
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {heroH}
          </h1>
          <p className="text-xl text-white/85 mb-6 max-w-3xl mx-auto leading-relaxed">
            {heroDesc}{" "}
            <strong className="text-yellow-400">{heroAmount}</strong>
            {heroDesc2}
          </p>
          <a
            href="/contact?product=max-iul"
            className="inline-block font-bold px-8 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            {heroCta}
          </a>
        </div>
      </section>

      {/* 9 Reasons */}
      {processedReasons.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-2">
              {reasonsH1}
            </h2>
            <h3 className="text-2xl font-extrabold text-center mb-10 text-blue-800">
              MAX FUNDED IUL
            </h3>
            <MaxFundedAccordion reasons={processedReasons} />
          </div>
        </section>
      )}

      {/* Index Lock Feature */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.lock_h}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.lock_desc}
              </p>
              <div className="space-y-3 mt-6">
                {t.lock_features.map((f) => (
                  <div
                    key={f.label}
                    className="flex gap-3 bg-blue-50 rounded-xl p-4"
                  >
                    <span className="text-sm font-bold text-blue-800 shrink-0 w-24">
                      {f.label}
                    </span>
                    <span className="text-sm text-gray-600">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.allianz_h}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.allianz_desc}
              </p>
              <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-sm text-gray-700">
                {t.allianz_items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IRS Tax Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            {t.tax_h}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.tax_items.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Advice */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            {t.advice_h}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-bold text-blue-800 mb-3">{t.advice1_h}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.advice1_desc}
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="font-bold text-green-800 mb-3">{t.advice2_h}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.advice2_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact-form"
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-2">{ctaH}</h2>
        <p className="text-white/80 mb-8">{ctaSub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16787223447"
            className="inline-block font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E", color: "white" }}
          >
            📞 (678) 722-3447
          </a>
          <a
            href="/contact"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#1e3a5f" }}
          >
            {t.cta_contact}
          </a>
        </div>
      </section>
    </main>
  );
}
