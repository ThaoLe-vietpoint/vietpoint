import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Care - VietPoint Insurance & Tax",
};

const services = [
  {
    icon: "📋",
    title: "Resolve Insurance Claims",
    desc: "We guide you step by step through the insurance claims process. Our agents are with you every step of the way.",
    href: "/customer-care/claims",
  },
  {
    icon: "🧮",
    title: "Calculate Insurance Fees",
    desc: "Get an instant estimate for your insurance premium. Free, no obligation — just enter your details.",
    href: "/customer-care/calculate-fees",
  },
  {
    icon: "💬",
    title: "My Story, My Family",
    desc: "Real stories from our clients whose lives were transformed by the right insurance coverage.",
    href: "/customer-care/stories",
  },
  {
    icon: "📚",
    title: "User Manual",
    desc: "Everything you need to know to manage your insurance policy effectively.",
    href: "/customer-care/user-manual",
  },
  {
    icon: "🏆",
    title: "Priority Program",
    desc: "Exclusive benefits and dedicated support for VietPoint Priority Members.",
    href: "/customer-care/priority-program",
  },
];

export default function CustomerCarePage() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-[320px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <h1 className="text-4xl font-extrabold mb-3">Customer Care</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            We are always here for you — before, during, and after your
            insurance journey. Our dedicated team is here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            How Can We Help?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group block"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2F5E9E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <span
                  className="inline-block mt-3 text-xs font-semibold"
                  style={{ color: "#2F5E9E" }}
                >
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center bg-gray-50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Reach Out Directly
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="tel:+16788253737"
            className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            📞 (678) 825-3737
          </a>
          <a
            href="mailto:support@VietPointinsurance.com"
            className="inline-block border-2 border-gray-300 text-gray-700 font-bold px-8 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors"
          >
            ✉️ Email Us
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Office hours: Sun–Thu 9AM–7PM EST | Fri–Sat Closed
        </p>
      </section>
    </main>
  );
}
