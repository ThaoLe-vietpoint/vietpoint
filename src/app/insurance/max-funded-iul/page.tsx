"use client";
import { useState } from "react";

const reasons = [
  {
    num: "1",
    title: "Index Lock Function",
    desc: "The ONLY investment program integrated with insurance that allows you to lock in the highest interest rate each year (9–15%), protecting your gains even if the market crashes.",
  },
  {
    num: "2",
    title: "Retirement Income",
    desc: "Receive an average of $50,000 per year, tax-free, for up to 20 consecutive years at retirement age.",
  },
  {
    num: "3",
    title: "Tax-Free Interest",
    desc: "Withdrawals or loans taken from the program are tax-free as long as the program is active.",
  },
  {
    num: "4",
    title: "Inherited Property",
    desc: "This will be a source of tax-free inheritance for children, helping them to build a better financial future.",
  },
  {
    num: "5",
    title: "Stable Interest Rates",
    desc: "Enjoy stable interest rates of 6–10% through investments in the S&P 500 with CAP 15% and FLOOR 1% protection.",
  },
  {
    num: "6",
    title: "Living Benefits",
    desc: "The policy provides a cash payout if you face serious health issues such as heart attack, stroke, cancer, or disability.",
  },
  {
    num: "7",
    title: "Death Benefits",
    desc: "The policy provides a cash amount equivalent to the insurance value to your family in the event of death.",
  },
  {
    num: "8",
    title: "Protection Until Age 120",
    desc: "Our insurance program offers comprehensive financial protection until the age of 120.",
  },
  {
    num: "9",
    title: "Shortened Payment Period",
    desc: "Unlike current insurance programs, Max-Funded IUL Secrets only requires payments for a limited term, after which you enjoy lifelong benefits.",
  },
];

export default function MaxFundedIULPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-[400px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            WHAT IS MAX FUNDED IUL SECRETS?
          </h1>
          <p className="text-xl text-white/85 mb-6 max-w-3xl mx-auto leading-relaxed">
            Max-Funded IUL Secrets is a powerful, safe investment program —
            integrated with life insurance. With the aim of helping participants
            receive an average of{" "}
            <strong className="text-yellow-400">$50,000 per year</strong>,
            received continuously for 20 consecutive years, tax-free.
          </p>
          <a
            href="#contact-form"
            className="inline-block font-bold px-8 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            REGISTER NOW
          </a>
        </div>
      </section>

      {/* 9 Reasons */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-2">
            9 REASONS WHY YOU SHOULD JOIN
          </h2>
          <h3 className="text-2xl font-extrabold text-center mb-10 text-blue-800">
            MAX FUNDED IUL
          </h3>
          <div className="space-y-3">
            {reasons.map((r, i) => (
              <div
                key={r.num}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-center gap-4 hover:bg-gray-50"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: "#1e3a5f" }}
                  >
                    {r.num}
                  </span>
                  <span className="font-semibold text-gray-800">{r.title}</span>
                  <span className="ml-auto text-xl text-gray-400">
                    {openIdx === i ? "−" : "+"}
                  </span>
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-5 pl-20">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Index Lock Feature */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Exclusive Feature — Index Lock
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Index Lock</strong> allows participants to lock in the
                highest interest rate each year, ranging from{" "}
                <strong>9–15%</strong>. Once the Index Lock is activated, even
                if the market crashes, participants will still receive the
                highest interest rate locked in.
              </p>
              <div className="space-y-3 mt-6">
                {[
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
                ].map((f) => (
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
                Guaranteed by Allianz Corporation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Allianz is a renowned corporation specializing in investment
                products, with over 100 years of experience. Insurance programs
                under Allianz&apos;s management consistently deliver
                significantly higher returns compared to other companies.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-sm text-gray-700">
                {[
                  "A subsidiary of Allianz Group",
                  "Over 100 years of history",
                  "Present in more than 70 countries",
                  "Total assets exceeding $1 trillion USD",
                  "First to offer the Index Lock option",
                ].map((item) => (
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
            IRS Standard Tax Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((item) => (
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
            Financial Advice
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-bold text-blue-800 mb-3">
                Diversify Your Investments
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you only invest in businesses, stocks, or other high-risk
                assets that are vulnerable to market fluctuations, your
                financial stability could be at high risk of collapse.
                Diversifying your investments and participating in safer options
                that are immune to market volatility is crucial.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="font-bold text-green-800 mb-3">
                Always Have an Emergency Fund
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                A standard emergency fund should cover 3–6 months of living
                expenses. Max Funded IUL&apos;s high liquidity features allow
                you to access your funds without penalties after 5 years, and
                withdrawals are completely tax-free.
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
        <h2 className="text-2xl font-bold text-white mb-2">
          Ready to Secure Your Retirement?
        </h2>
        <p className="text-white/80 mb-8">
          Get a free consultation with our expert agents today.
        </p>
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
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
