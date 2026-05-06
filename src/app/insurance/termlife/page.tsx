import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term Life Insurance - VietPoint Insurance & Tax",
  description:
    "Affordable term life insurance with compensation for over 16 types of diseases, disabilities and death. Contract term up to 30 years.",
};

const benefits = [
  {
    icon: "💰",
    title: "Affordable Price",
    desc: "CHEAP PRICE, suitable for all participants regardless of income level.",
  },
  {
    icon: "🏥",
    title: "16+ Diseases Covered",
    desc: "Compensation for more than 16 types of critical illnesses and disabilities.",
  },
  {
    icon: "🛡️",
    title: "Death Benefit",
    desc: "Full death benefit paid to your family in case of unfortunate events.",
  },
  {
    icon: "📅",
    title: "Flexible Terms",
    desc: "Contract term of up to 30 years — choose the term that fits your needs.",
  },
  {
    icon: "✅",
    title: "Easy to Qualify",
    desc: "Simplified underwriting process — most healthy adults qualify quickly.",
  },
  {
    icon: "🔄",
    title: "Renewable",
    desc: "Option to renew or convert your term policy at the end of the term period.",
  },
];

export default function TermLifePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-[360px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            VietPoint Insurance & Tax
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            TERM LIFE INSURANCE
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Affordable protection for you and your family — covering over 16
            critical illnesses with terms up to 30 years.
          </p>
          <a
            href="#get-quote"
            className="mt-8 inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-orange-50 transition-colors"
            style={{ color: "#ea580c" }}
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Why Choose Term Life?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{b.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Term Life vs. IUL — Which is Right for You?
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
                {[
                  ["Premium Cost", "Low", "Higher"],
                  ["Coverage Term", "10–30 years", "Lifetime (to 120)"],
                  ["Cash Value", "None", "✓ Builds over time"],
                  ["Retirement Income", "None", "✓ Tax-free income"],
                  [
                    "Critical Illness Benefit",
                    "✓ 16+ diseases",
                    "✓ 16+ diseases",
                  ],
                  ["Death Benefit", "✓", "✓"],
                  ["Tax-Free Withdrawals", "None", "✓"],
                  [
                    "Suitable for",
                    "Budget-focused families",
                    "Long-term wealth builders",
                  ],
                ].map(([feature, term, iul]) => (
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
        <h2 className="text-2xl font-bold text-white mb-4">
          Get Your Free Term Life Quote
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Our agents are ready to find the most suitable Term Life plan for your
          family. Contact us today — consultation is completely free.
        </p>
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
            Send a Message
          </Link>
        </div>
      </section>
    </main>
  );
}
