import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priority Program - Thinksmart Insurance",
};

const perks = [
  {
    icon: "⚡",
    label: "Priority Support",
    desc: "Dedicated agent assigned to your account. Direct line for faster response — no wait queues.",
  },
  {
    icon: "📋",
    label: "Annual Review",
    desc: "Free annual policy review to ensure your coverage evolves with your life changes and goals.",
  },
  {
    icon: "🎯",
    label: "Exclusive Rates",
    desc: "Access to priority pricing on additional policies or coverage upgrades for existing members.",
  },
  {
    icon: "📚",
    label: "Financial Workshops",
    desc: "Invitations to exclusive webinars and in-person events on retirement planning, tax strategy, and wealth building.",
  },
  {
    icon: "🏆",
    label: "Referral Rewards",
    desc: "Earn rewards when you refer friends and family to Thinksmart Insurance programs.",
  },
  {
    icon: "💬",
    label: "Multilingual Support",
    desc: "Full support in Vietnamese and English — no language barriers for your most important financial decisions.",
  },
];

export default function PriorityProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-[360px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            Customer Care
          </p>
          <h1 className="text-4xl font-extrabold mb-3">Priority Program</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Exclusive benefits and dedicated support for Thinksmart Priority
            Members. Because you deserve the best.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Priority Member Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{p.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Qualify
          </h2>
          <p className="text-gray-500 mb-8">
            Priority membership is available to all active Thinksmart
            policyholders. Contact your agent to learn how to enroll or ask
            about exclusive upgrade options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16788253737"
              className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#C41E3A" }}
            >
              📞 (678) 825-3737
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-gray-300 text-gray-700 font-bold px-8 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors"
            >
              Contact Agent
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
