import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Thinksmart Insurance",
  description:
    "Thinksmart Insurance was founded in 2013 with a clear mission: to become the most trusted Financial Doctor for every Vietnamese family in the US.",
};

const coreValues = [
  { title: "Conscientious", desc: "Always put customer interests first." },
  { title: "Responsibility", desc: "Committed to doing what was promised." },
  { title: "Transparent", desc: "Provide clear and honest information." },
  { title: "Reputation", desc: "Building trust through quality service." },
  { title: "Follow", desc: "Ensure all activities comply with the law." },
];

const whyUs = [
  {
    title: "Trusted Partner",
    desc: "We represent leading insurance companies in the US, ensuring the highest quality and most reliable products.",
  },
  {
    title: "Excellent Customer Service",
    desc: "We are committed to providing the best service experience, with a knowledgeable, reliable, and responsive support team available online or in person, in both English and Vietnamese.",
  },
  {
    title: "Experienced Consulting Team",
    desc: 'Our consultants are experienced, well-trained Vietnamese experts with extensive knowledge of insurance products and always put "heart" first.',
  },
  {
    title: "Reliable & Quality Products",
    desc: "We partner with leading US insurance companies to provide the most trusted life insurance products, using cutting-edge technology to make the process quick and easy.",
  },
  {
    title: "Personalized Solutions",
    desc: "We understand that each customer has a unique situation and needs. Therefore, we always strive to provide insurance solutions tailored to each individual's financial goals.",
  },
  {
    title: "Modern Technology",
    desc: "We apply the latest technological advances to provide a fast, convenient and easy service experience.",
  },
];

const agents = [
  "HUNG HUYNH",
  "CELINE NGUYEN",
  "GINA DANG",
  "VICKY TRIEU",
  "TY TRIEU",
  "HA NGUYEN",
];
const ambassadors = ["KHANH THI LE LA", "CHIEU ANH NU TRAN", "THU THI NGUYEN"];

const products = [
  {
    title: "IUL For Kids (EBTP)",
    desc: "Protect your children and build a financial fund for them to enter university, giving them wings to fly far and higher at the age of 18.",
    href: "/insurance/kid-iul-secrets",
    color: "#16a34a",
  },
  {
    title: "Max Funded IUL",
    desc: "Full retirement thanks to the ability to generate 8–15% profit per year, absolute safety thanks to the NO LOSS policy.",
    href: "/insurance/max-funded-iul",
    color: "#2563eb",
  },
  {
    title: "IUL Secrets",
    desc: "Compensation for more than 16 types of diseases. Accumulate TAX-FREE retirement funds with high interest rates of 6–12%/year.",
    href: "/insurance/iul",
    color: "#C41E3A",
  },
  {
    title: "Term Life",
    desc: "CHEAP PRICE, suitable for all. Compensation for more than 16 types of diseases and death with a contract term of up to 30 years.",
    href: "/insurance/termlife",
    color: "#ea580c",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-[420px] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #d94f3b 0%, #c23b29 50%, #a82e1e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <p className="text-sm font-semibold tracking-widest uppercase opacity-80 mb-3">
            Welcome to
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest mb-4">
            THINKSMART INSURANCE
          </h1>
          <p className="text-xl md:text-2xl italic font-light opacity-90">
            Smart Planning, Secure Living!
          </p>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Thinksmart Insurance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to Thinksmart Insurance, a trusted financial partner
            dedicated to serving the Vietnamese community in the United States.
            We are a reputable financial services company, operating as an
            independent agency, working closely with leading insurance
            corporations in the U.S. such as National Life Group, AIG, and
            Allianz. Our ultimate goal is to provide the most optimal and
            suitable life insurance solutions, helping you and your family
            confidently build a solid financial future.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-10">
            Brand Story
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Thinksmart Insurance was founded in 2013 with a clear mission: to
            become the most trusted &quot;Financial Doctor&quot; for every
            Vietnamese family in the US. We believe that everyone deserves a
            solid financial plan to protect, save and invest for the future.
            Life insurance is not only a financial guarantee after losses, but
            also a powerful tool to protect against serious health risks and
            ensure a stable source of income for retirement. With dedication and
            a deep understanding of the needs of the Vietnamese community, we
            constantly strive to bring the most suitable and effective insurance
            solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Mission &amp; Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "#C41E3A" }}
              >
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing comprehensive financial protection, ensuring stable
                income during retirement and bringing peace of mind to
                households in the United States, especially the Asian community
                in the US.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "#1d4ed8" }}
              >
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Become the leading financial-insurance company in the US, the
                first choice of Vietnamese people when looking for the best
                insurance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="bg-gray-50 rounded-2xl p-5 text-center"
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "#C41E3A" }}
                >
                  <span className="text-white font-bold text-sm">
                    {v.title[0]}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {v.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            What We Do?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Thinksmart Insurance provides diverse life insurance programs
            designed to meet all your needs. We focus on three main benefits:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Death benefits",
                desc: "Protect your loved ones financially in case the unfortunate happens.",
              },
              {
                icon: "🏥",
                title: "Right to life",
                desc: "Financial support when you face serious health risks.",
              },
              {
                icon: "💰",
                title: "Retirement savings",
                desc: "Provides a stable and secure source of income with attractive interest rates (from 6–15%), tax-deferred and tax-free withdrawal at retirement age.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
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
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-center text-gray-500 mb-10">
            We offer a diverse portfolio of life insurance plans, flexibly
            designed to meet your various financial needs and goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-2" style={{ background: p.color }} />
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    {p.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                  <Link
                    href={p.href}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: p.color }}
                  >
                    Learn more →
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
            Why Choose Thinksmart Insurance?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm"
                  style={{ background: "#C41E3A" }}
                >
                  {i + 1}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
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
          background: "linear-gradient(135deg, #a01020 0%, #8b1020 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "ESTABLISH" },
              { value: "20K+", label: "CLIENT" },
              { value: "50", label: "STATE LICENSED" },
              { value: "24/7", label: "SUPPORT" },
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
            Elite Agents
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {agents.map((name) => (
              <div key={name} className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "#C41E3A" }}
                >
                  {name[0]}
                </div>
                <h4 className="font-bold text-gray-900 text-xs">{name}</h4>
                <p className="text-gray-500 text-xs">AGENT</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ambassadors */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Brand Ambassadors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {ambassadors.map((name) => (
              <div key={name} className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg bg-gray-400">
                  {name[0]}
                </div>
                <h4 className="font-bold text-gray-900 text-xs">{name}</h4>
                <p className="text-gray-500 text-xs">Brand Ambassador</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to secure your family&apos;s future?
        </h2>
        <p className="text-gray-600 mb-8">
          Contact us today for a free consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block text-white font-bold px-10 py-4 rounded-full text-sm hover:opacity-90 transition-opacity"
          style={{ background: "#C41E3A" }}
        >
          Contact Us Now
        </Link>
      </section>
    </main>
  );
}
