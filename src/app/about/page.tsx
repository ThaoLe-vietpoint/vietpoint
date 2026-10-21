import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";

export const metadata: Metadata = {
  title: "About Us - VietPoint Insurance & Tax",
  description:
    "VietPoint Insurance & Tax was founded in 2013 with a clear mission: to become the most trusted Financial Doctor for every Vietnamese family in the US.",
};

const DEFAULT_CORE_VALUES: {
  title: string;
  desc: string;
  title_vi?: string;
  desc_vi?: string;
}[] = [
  {
    title: "Conscientious",
    title_vi: "Tận tâm",
    desc: "Always put customer interests first.",
    desc_vi: "Luôn đặt lợi ích của khách hàng lên hàng đầu.",
  },
  {
    title: "Responsibility",
    title_vi: "Trách nhiệm",
    desc: "Committed to doing what was promised.",
    desc_vi: "Cam kết thực hiện đúng những gì đã hứa.",
  },
  {
    title: "Transparent",
    title_vi: "Minh bạch",
    desc: "Provide clear and honest information.",
    desc_vi: "Cung cấp thông tin rõ ràng và trung thực.",
  },
  {
    title: "Reputation",
    title_vi: "Uy tín",
    desc: "Building trust through quality service.",
    desc_vi: "Xây dựng niềm tin qua chất lượng dịch vụ.",
  },
  {
    title: "Follow",
    title_vi: "Tuân thủ",
    desc: "Ensure all activities comply with the law.",
    desc_vi: "Đảm bảo mọi hoạt động tuân thủ pháp luật.",
  },
];

const DEFAULT_AGENTS = [
  "HUNG HUYNH",
  "CELINE NGUYEN",
  "GINA DANG",
  "VICKY TRIEU",
  "TY TRIEU",
  "HA NGUYEN",
];
const DEFAULT_AMBASSADORS = [
  "KHANH THI LE LA",
  "CHIEU ANH NU TRAN",
  "THU THI NGUYEN",
];

const DEFAULT_WHY_US: {
  title: string;
  desc: string;
  title_vi?: string;
  desc_vi?: string;
}[] = [
  {
    title: "Trusted Partner",
    title_vi: "Đối Tác Tin Cậy",
    desc: "We represent leading insurance companies in the US, ensuring the highest quality and most reliable products.",
    desc_vi: "Chúng tôi đại diện cho các công ty bảo hiểm hàng đầu tại Hoa Kỳ, đảm bảo sản phẩm chất lượng và đáng tin cậy nhất.",
  },
  {
    title: "Excellent Customer Service",
    title_vi: "Dịch Vụ Khách Hàng Xuất Sắc",
    desc: "We are committed to providing the best service experience, with a knowledgeable, reliable, and responsive support team available online or in person, in both English and Vietnamese.",
    desc_vi: "Cam kết mang đến trải nghiệm dịch vụ tốt nhất với đội ngũ hỗ trợ am hiểu, tận tình bằng cả tiếng Anh và tiếng Việt.",
  },
  {
    title: "Experienced Consulting Team",
    title_vi: "Đội Ngũ Tư Vấn Giàu Kinh Nghiệm",
    desc: 'Our consultants are experienced, well-trained Vietnamese experts with extensive knowledge of insurance products and always put "heart" first.',
    desc_vi: 'Chuyên viên tư vấn người Việt giàu kinh nghiệm, được đào tạo bài bản và luôn đặt chữ "Tâm" lên hàng đầu.',
  },
  {
    title: "Reliable & Quality Products",
    title_vi: "Sản Phẩm Uy Tín & Chất Lượng",
    desc: "We partner with leading US insurance companies to provide the most trusted life insurance products, using cutting-edge technology to make the process quick and easy.",
    desc_vi: "Hợp tác với các tập đoàn bảo hiểm hàng đầu Hoa Kỳ, ứng dụng công nghệ hiện đại giúp quy trình nhanh chóng và dễ dàng.",
  },
  {
    title: "Personalized Solutions",
    title_vi: "Giải Pháp Cá Nhân Hóa",
    desc: "We understand that each customer has a unique situation and needs. Therefore, we always strive to provide insurance solutions tailored to each individual's financial goals.",
    desc_vi: "Mỗi khách hàng có hoàn cảnh và nhu cầu riêng, chúng tôi luôn thiết kế giải pháp phù hợp nhất với mục tiêu tài chính của từng gia đình.",
  },
  {
    title: "Modern Technology",
    title_vi: "Công Nghệ Hiện Đại",
    desc: "We apply the latest technological advances to provide a fast, convenient and easy service experience.",
    desc_vi: "Ứng dụng công nghệ tiên tiến mang lại trải nghiệm dịch vụ nhanh chóng, thuận tiện và dễ dàng.",
  },
];

const DEFAULT_WHAT_WE_DO: {
  icon: string;
  title: string;
  desc: string;
  title_vi?: string;
  desc_vi?: string;
}[] = [
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Death benefits",
    title_vi: "Quyền lợi tử vong",
    desc: "Protect your loved ones financially in case the unfortunate happens.",
    desc_vi: "Bảo vệ tài chính cho những người thân yêu nếu rủi ro không may xảy ra.",
  },
  {
    icon: "\uD83C\uDFE5",
    title: "Right to life",
    title_vi: "Quyền lợi sống",
    desc: "Financial support when you face serious health risks.",
    desc_vi: "Hỗ trợ tài chính kịp thời khi bạn đối mặt với các rủi ro sức khỏe nghiêm trọng.",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "Retirement savings",
    title_vi: "Tiết kiệm hưu trí",
    desc: "Provides a stable and secure source of income with attractive interest rates (from 6\u201315%), tax-deferred and tax-free withdrawal at retirement age.",
    desc_vi: "Cung cấp nguồn thu nhập ổn định và an toàn với lãi suất hấp dẫn (6–15%), hoãn thuế và rút tiền miễn thuế ở tuổi nghỉ hưu.",
  },
];

const products = [
  {
    title: "IUL For Kids (EBTP)",
    title_vi: "IUL Cho Trẻ Em (EBTP)",
    desc: "Protect your children and build a financial fund for them to enter university, giving them wings to fly far and higher at the age of 18.",
    desc_vi: "Bảo vệ con bạn và xây dựng quỹ tài chính để con bước vào đại học, chắp cánh cho con bay xa hơn ở tuổi 18.",
    href: "/insurance/kid-iul-secrets",
    color: "#16a34a",
  },
  {
    title: "Max Funded IUL",
    title_vi: "Max Funded IUL",
    desc: "Full retirement thanks to the ability to generate 8–15% profit per year, absolute safety thanks to the NO LOSS policy.",
    desc_vi: "Hưu trí trọn vẹn nhờ khả năng sinh lời 8–15%/năm, an toàn tuyệt đối nhờ chính sách KHÔNG MẤT VỐN.",
    href: "/insurance/max-funded-iul",
    color: "#2563eb",
  },
  {
    title: "IUL Secrets",
    title_vi: "IUL Secrets",
    desc: "Compensation for more than 16 types of diseases. Accumulate TAX-FREE retirement funds with high interest rates of 6–12%/year.",
    desc_vi: "Đền bù hơn 16 loại bệnh hiểm nghèo. Tích lũy quỹ hưu trí MIỄN THUẾ với lãi suất cao 6–12%/năm.",
    href: "/insurance/iul",
    color: "#2F5E9E",
  },
  {
    title: "Term Life",
    title_vi: "Bảo Hiểm Kỳ Hạn (Term Life)",
    desc: "CHEAP PRICE, suitable for all. Compensation for more than 16 types of diseases and death with a contract term of up to 30 years.",
    desc_vi: "CHI PHÍ THẤP, phù hợp với mọi người. Đền bù hơn 16 loại bệnh và tử vong với thời hạn hợp đồng lên đến 30 năm.",
    href: "/insurance/termlife",
    color: "#ea580c",
  },
];

export default async function AboutPage() {
  const supabase = await createClient();
  const lang = await getLang();
  const { data } = await supabase
    .from("page_content")
    .select("section, field, value_en, value_vi")
    .eq("page", "about");
  const rows = data ?? [];

  const g = (
    section: string,
    field: string,
    fallbackEn = "",
    fallbackVi?: string,
  ) => {
    const row = rows.find((r) => r.section === section && r.field === field);
    if (lang === "vi")
      return row?.value_vi || row?.value_en || fallbackVi || fallbackEn;
    return row?.value_en ?? fallbackEn;
  };

  const T = {
    en: {
      hero_welcome: "Welcome to",
      hero_tagline: "Smart Planning, Secure Living!",
      about_h: "About VietPoint Insurance & Tax",
      brand_h: "Brand Story",
      mission_h: "Mission & Vision",
      mission_label: "Mission",
      vision_label: "Vision",
      core_h: "Core Values",
      wwd_h: "What We Do?",
      solutions_h: "Comprehensive Insurance Solutions",
      solutions_sub:
        "We offer a diverse portfolio of life insurance plans, flexibly designed to meet your various financial needs and goals.",
      learn_more: "Learn more \u2192",
      why_h: "Why Choose VietPoint Insurance & Tax?",
      stats: ["ESTABLISH", "CLIENT", "STATE LICENSED", "SUPPORT"],
      agents_h: "Elite Agents",
      agent_label: "AGENT",
      ambassadors_h: "Brand Ambassadors",
      ambassador_label: "AMBASSADOR",
    },
    vi: {
      hero_welcome: "Ch\u00e0o M\u1eebng \u0110\u1ebfn V\u1edbi",
      hero_tagline:
        "Ho\u1ea1ch \u0110\u1ecbnh Th\u00f4ng Minh, S\u1ed1ng An L\u00e0nh!",
      about_h: "V\u1ec1 VietPoint Insurance & Tax",
      brand_h: "C\u00e2u Chuy\u1ec7n Th\u01b0\u01a1ng Hi\u1ec7u",
      mission_h: "S\u1ee9 M\u1ec7nh & T\u1ea7m Nh\u00ecn",
      mission_label: "S\u1ee9 M\u1ec7nh",
      vision_label: "T\u1ea7m Nh\u00ecn",
      core_h: "Gi\u00e1 Tr\u1ecb C\u1ed1t L\u00f5i",
      wwd_h: "Ch\u00fang T\u00f4i L\u00e0m G\u00ec?",
      solutions_h: "Gi\u1ea3i Ph\u00e1p B\u1ea3o Hi\u1ec3m To\u00e0n Di\u1ec7n",
      solutions_sub:
        "Ch\u00fang t\u00f4i cung c\u1ea5p danh m\u1ee5c b\u1ea3o hi\u1ec3m nh\u00e2n th\u1ecd \u0111a d\u1ea1ng, \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf linh ho\u1ea1t \u0111\u1ec3 \u0111\u00e1p \u1ee9ng c\u00e1c m\u1ee5c ti\u00eau t\u00e0i ch\u00ednh kh\u00e1c nhau c\u1ee7a b\u1ea1n.",
      learn_more: "T\u00ecm hi\u1ec3u th\u00eam \u2192",
      why_h: "T\u1ea1i Sao Ch\u1ecdn VietPoint Insurance & Tax?",
      stats: [
        "N\u0102M TH\u00c0NH L\u1eacP",
        "KH\u00c1CH H\u00c0NG",
        "TI\u1ec2U BANG",
        "H\u1ed6 TR\u1ee2",
      ],
      agents_h: "\u0110\u1ed9i Ng\u0169 Chuy\u00ean Vi\u00ean",
      agent_label: "CHU\u00daEN VI\u00caN",
      ambassadors_h: "\u0110\u1ea1i S\u1ee9 Th\u01b0\u01a1ng Hi\u1ec7u",
      ambassador_label: "\u0110\u1ea0I S\u1ee8",
    },
  };
  const t = T[lang];

  // Core values
  let coreValues = DEFAULT_CORE_VALUES;
  const coreValuesRaw = g("core_values", "data", "");
  if (coreValuesRaw) {
    try {
      coreValues = JSON.parse(coreValuesRaw);
    } catch {}
  }

  // What We Do
  let whatWeDo = DEFAULT_WHAT_WE_DO;
  const whatWeDoRaw = g("what_we_do", "data", "");
  if (whatWeDoRaw) {
    try {
      whatWeDo = JSON.parse(whatWeDoRaw);
    } catch {}
  }
  const whatWeDoSubtitle = g(
    "what_we_do",
    "subtitle",
    "VietPoint Insurance & Tax provides diverse life insurance programs designed to meet all your needs. We focus on three main benefits:",
    "VietPoint Insurance & Tax cung c\u1ea5p c\u00e1c ch\u01b0\u01a1ng tr\u00ecnh b\u1ea3o hi\u1ec3m nh\u00e2n th\u1ecd \u0111a d\u1ea1ng \u0111\u00e1p \u1ee9ng m\u1ecdi nhu c\u1ea7u c\u1ee7a b\u1ea1n. Ch\u00fang t\u00f4i t\u1eadp trung v\u00e0o ba quy\u1ec1n l\u1ee3i ch\u00ednh:",
  );

  // Why Us
  let whyUs = DEFAULT_WHY_US;
  const whyUsRaw = g("why_us", "data", "");
  if (whyUsRaw) {
    try {
      whyUs = JSON.parse(whyUsRaw);
    } catch {}
  }

  // CTA
  const ctaTitle = g(
    "cta",
    "title",
    "Ready to secure your family\u2019s future?",
    "S\u1eb5n S\u00e0ng B\u1ea3o V\u1ec7 T\u01b0\u01a1ng Lai Gia \u0110\u00ecnh B\u1ea1n?",
  );
  const ctaDescription = g(
    "cta",
    "description",
    "Contact us today for a free consultation.",
    "Li\u00ean h\u1ec7 ch\u00fang t\u00f4i ngay h\u00f4m nay \u0111\u1ec3 \u0111\u01b0\u1ee3c t\u01b0 v\u1ea5n mi\u1ec5n ph\u00ed.",
  );
  const ctaButton = g(
    "cta",
    "button_text",
    "Contact Us Now",
    "Li\u00ean H\u1ec7 Ngay",
  );

  // Team
  const agentsRaw = g("team", "agents", "");
  const agents = agentsRaw
    ? agentsRaw.split("\n").filter(Boolean)
    : DEFAULT_AGENTS;
  const ambassadorsRaw = g("team", "ambassadors", "");
  const ambassadors = ambassadorsRaw
    ? ambassadorsRaw.split("\n").filter(Boolean)
    : DEFAULT_AMBASSADORS;

  // Text fields
  const introText = g(
    "story",
    "intro_text",
    "Welcome to VietPoint Insurance & Tax, a trusted financial partner dedicated to serving the Vietnamese community in the United States.",
    "Ch\u00e0o m\u1eebng \u0111\u1ebfn v\u1edbi VietPoint Insurance & Tax, \u0111\u1ed1i t\u00e1c t\u00e0i ch\u00ednh uy t\u00edn chuy\u00ean ph\u1ee5c v\u1ee5 c\u1ed9ng \u0111\u1ed3ng ng\u01b0\u1eddi Vi\u1ec7t t\u1ea1i Hoa K\u1ef3.",
  );
  const brandText = g(
    "story",
    "brand_text",
    "VietPoint Insurance & Tax was founded in 2013 with a clear mission: to become the most trusted Financial Doctor for every Vietnamese family in the US.",
    "VietPoint Insurance & Tax \u0111\u01b0\u1ee3c th\u00e0nh l\u1eadp n\u0103m 2013 v\u1edbi s\u1ee9 m\u1ec7nh r\u00f5 r\u00e0ng: tr\u1edf th\u00e0nh \u2018B\u00e1c S\u0129 T\u00e0i Ch\u00ednh\u2019 \u0111\u00e1ng tin c\u1eady nh\u1ea5t cho m\u1ecdi gia \u0111\u00ecnh ng\u01b0\u1eddi Vi\u1ec7t t\u1ea1i M\u1ef9.",
  );
  const missionText = g(
    "mission",
    "mission",
    "Providing comprehensive financial protection, ensuring stable income during retirement and bringing peace of mind to households in the United States, especially the Asian community in the US.",
    "Cung c\u1ea5p b\u1ea3o v\u1ec7 t\u00e0i ch\u00ednh to\u00e0n di\u1ec7n, \u0111\u1ea3m b\u1ea3o thu nh\u1eadp \u1ed5n \u0111\u1ecbnh khi h\u01b0u tr\u00ed v\u00e0 mang l\u1ea1i s\u1ef1 an t\u00e2m cho c\u00e1c h\u1ed9 gia \u0111\u00ecnh t\u1ea1i Hoa K\u1ef3.",
  );
  const visionText = g(
    "mission",
    "vision",
    "Become the leading financial-insurance company in the US, the first choice of Vietnamese people when looking for the best insurance programs.",
    "Tr\u1edf th\u00e0nh c\u00f4ng ty b\u1ea3o hi\u1ec3m-t\u00e0i ch\u00ednh h\u00e0ng \u0111\u1ea7u t\u1ea1i Hoa K\u1ef3, l\u00e0 l\u1ef1a ch\u1ecdn \u0111\u1ea7u ti\u00ean c\u1ee7a ng\u01b0\u1eddi Vi\u1ec7t khi t\u00ecm ki\u1ebfm ch\u01b0\u01a1ng tr\u00ecnh b\u1ea3o hi\u1ec3m t\u1ed1t nh\u1ea5t.",
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-[420px] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #3a6fbf 0%, #2F5E9E 50%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <p className="text-sm font-semibold tracking-widest uppercase opacity-80 mb-3">
            {t.hero_welcome}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest mb-4">
            VIETPOINT INSURANCE
          </h1>
          <p className="text-xl md:text-2xl italic font-light opacity-90">
            {t.hero_tagline}
          </p>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about_h}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{introText}</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-10">
            {t.brand_h}
          </h3>
          <p className="text-gray-600 leading-relaxed">{brandText}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {t.mission_h}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "#2F5E9E" }}
              >
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.mission_label}
              </h3>
              <p className="text-gray-600 leading-relaxed">{missionText}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "#1d4ed8" }}
              >
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.vision_label}
              </h3>
              <p className="text-gray-600 leading-relaxed">{visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {t.core_h}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((v) => {
              const vTitle = lang === "vi" ? v.title_vi || v.title : v.title;
              const vDesc = lang === "vi" ? v.desc_vi || v.desc : v.desc;
              return (
                <div
                  key={v.title}
                  className="bg-gray-50 rounded-2xl p-5 text-center"
                >
                  <div
                    className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ background: "#2F5E9E" }}
                  >
                    <span className="text-white font-bold text-sm">
                      {vTitle[0]}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {vTitle}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {vDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {t.wwd_h}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            {whatWeDoSubtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {lang === "vi" ? item.title_vi || item.title : item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {lang === "vi" ? item.desc_vi || item.desc : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            {t.solutions_h}
          </h2>
          <p className="text-center text-gray-500 mb-10">{t.solutions_sub}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-2" style={{ background: p.color }} />
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    {lang === "vi" ? p.title_vi || p.title : p.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {lang === "vi" ? p.desc_vi || p.desc : p.desc}
                  </p>
                  <Link
                    href={p.href}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: p.color }}
                  >
                    {t.learn_more}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {t.why_h}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm"
                  style={{ background: "#2F5E9E" }}
                >
                  {i + 1}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {lang === "vi" ? item.title_vi || item.title : item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {lang === "vi" ? item.desc_vi || item.desc : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 px-6"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #0d2a52 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: t.stats[0] },
              { value: "20K+", label: t.stats[1] },
              { value: "50", label: t.stats[2] },
              { value: "24/7", label: t.stats[3] },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/20 p-6 text-center"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <p className="text-4xl font-extrabold text-white mb-1">
                  {s.value}
                </p>
                <p className="text-white/70 text-xs font-semibold tracking-widest uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Agents */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {t.agents_h}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {agents.map((name: string) => (
              <div key={name} className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "#2F5E9E" }}
                >
                  {name[0]}
                </div>
                <h4 className="font-bold text-gray-900 text-xs">{name}</h4>
                <p className="text-gray-500 text-xs">{t.agent_label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ambassadors */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t.ambassadors_h}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {ambassadors.map((name: string) => (
              <div key={name} className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg bg-gray-400">
                  {name[0]}
                </div>
                <h4 className="font-bold text-gray-900 text-xs">{name}</h4>
                <p className="text-gray-500 text-xs">{t.ambassador_label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{ctaTitle}</h2>
        <p className="text-gray-600 mb-8">{ctaDescription}</p>
        <Link
          href="/contact"
          className="inline-block text-white font-bold px-10 py-4 rounded-full text-sm hover:opacity-90 transition-opacity"
          style={{ background: "#2F5E9E" }}
        >
          {ctaButton}
        </Link>
      </section>
    </main>
  );
}
