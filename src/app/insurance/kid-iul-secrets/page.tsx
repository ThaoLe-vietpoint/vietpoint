import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IUL For Kids (EBTP) - VietPoint Insurance & Tax",
  description:
    "Protect your children and build a financial fund for them to enter university. IUL For Kids (EBTP) gives your children wings to fly far at the age of 18.",
};

const benefits = [
  {
    icon: "🎓",
    title: "College Fund",
    desc: "Build a tax-free financial fund for your children to enter university at age 18 — fully funded and ready when they need it most.",
  },
  {
    icon: "🛡️",
    title: "Life Protection",
    desc: "Your child is protected with a life insurance death benefit, providing financial support to your family in case of tragedy.",
  },
  {
    icon: "💰",
    title: "Tax-Free Growth",
    desc: "The cash value grows tax-deferred, and withdrawals at age 18 are completely tax-free under IRS rules.",
  },
  {
    icon: "📈",
    title: "Indexed Returns",
    desc: "Funds grow linked to the S&P 500 index with a floor of 0% — never lose money, yet benefit from market gains.",
  },
  {
    icon: "🏥",
    title: "Health Protection",
    desc: "Living benefits provide coverage if your child faces a critical illness before age 18.",
  },
  {
    icon: "🔒",
    title: "Long-Term Security",
    desc: "Lock in low child rates now. Starting early means more growth time and lower monthly premiums.",
  },
];

export default function KidIULPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-[380px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            VietPoint Insurance & Tax
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            IUL For Kids (EBTP)
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-6">
            Protect your children and build a financial fund for them to enter
            university, giving them <em>wings to fly far and higher</em> at the
            age of 18.
          </p>
          <a
            href="#get-quote"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-green-50 transition-colors"
            style={{ color: "#16a34a" }}
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            IUL For Kids (EBTP — Educational Benefits Trust Program) is a
            specially designed Indexed Universal Life insurance policy for
            children. Parents start the policy early, premiums grow with the
            market, and by age 18 your child has a tax-free fund ready for
            college or life expenses.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                step: "01",
                title: "Start Early",
                desc: "Enroll your child as young as 2 weeks old. The earlier you start, the lower the premiums and the more time the fund has to grow.",
              },
              {
                step: "02",
                title: "Grow Tax-Free",
                desc: "Premiums are invested in the S&P 500 index with a 0% floor guarantee. Cash value grows every year — good markets or bad.",
              },
              {
                step: "03",
                title: "Collect at 18",
                desc: "At age 18, your child can withdraw the accumulated fund completely tax-free for college, a car, a business, or any life goal.",
              },
            ].map((s) => (
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

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6">
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

      {/* Testimonial */}
      <section className="py-12 px-6 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl mb-4">💬</p>
          <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-4">
            &quot;I started IUL For Kids for my daughter when she was 3. By the
            time she turned 18, she had over $80,000 in tax-free funds ready for
            college. Best financial decision I ever made for her.&quot;
          </blockquote>
          <p className="font-semibold text-gray-900">
            — Ha Nguyen, VietPoint Client
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="get-quote"
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Give Your Child the Gift of Financial Security
        </h2>
        <p className="text-white/80 mb-8">
          Start your child&apos;s IUL policy today. Consultation is free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16788253737"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-green-50 transition-colors"
            style={{ color: "#16a34a" }}
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
