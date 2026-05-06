"use client";
import { useState } from "react";
import Link from "next/link";

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

const reasons = [
  {
    icon: "❤️‍🩹",
    title: "Living Benefit",
    desc: "Unlike other insurances where compensation is only paid upon death, you will be compensated if you experience critical illnesses, accidents, or disabilities with 16 different diseases.",
  },
  {
    icon: "🏖️",
    title: "Retirement Income",
    desc: "Retirement age can bring you hundreds or millions of dollars for traveling and doing whatever you like without relying on your children.",
  },
  {
    icon: "🛡️",
    title: "Death Benefit",
    desc: "Your family and children will be compensated in the event of unfortunate risks.",
  },
  {
    icon: "🔒",
    title: "Protection",
    desc: "You will be protected against health issues, diseases, accidents, and risks until the age of 120.",
  },
  {
    icon: "📈",
    title: "Stable Interest Rate",
    desc: "Enjoy stable returns when the market goes up, with the highest rate reaching 12.5% per year, higher than bank interest rates, especially without losing money when the market goes down.",
  },
  {
    icon: "💵",
    title: "Tax-Free Returns",
    desc: "Withdrawals or loans do not require tax payment as long as the program is still active.",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "Schedule a consultation",
    desc: "Call the hotline 678 722 3447 or schedule an appointment with an agent. Agent will give you a call to investigate your needs and provide you with the most suitable quote.",
  },
  {
    step: "STEP 2",
    title: "Complete your application",
    desc: "Agent will assist you in completing the application. You will provide the necessary information in just 10 minutes. After that, your application will be reviewed within 5–7 days.",
  },
  {
    step: "STEP 3",
    title: "Sign the contract",
    desc: "Once your application is successfully approved, it will be sent to you within 5 days. After reviewing the application, you can sign to join the program.",
  },
];

const faqs = [
  {
    q: "What if I don't have enough money to pay my monthly bills in 3–5 or 10 years?",
    a: "There are 3 cases: (1) Use the cash value to continue the program for 1–2 years; (2) Request to reduce the payment fee to the minimum; (3) Cancel the program and withdraw all money. Note: if you join for less than 10 years, you may have to pay a surrender charge.",
  },
  {
    q: "What happens to your money if the insurance company goes bankrupt? Are you still protected?",
    a: "Your money is protected by state insurance guarantee associations, which protect policyholders even if an insurance company fails. National Life Group, AIG, and Allianz are all highly rated financially stable companies.",
  },
  {
    q: "Does this program have a guarantee? Are you sure I don't lose money?",
    a: "Yes. IUL Secrets has a 0% floor guarantee, meaning you cannot lose money due to market downturns. Your principal is always protected.",
  },
  {
    q: "Does joining IUL Secrets affect SSI, Medicare, Medicaid?",
    a: "Properly structured IUL policies typically do not affect SSI, Medicare, or Medicaid eligibility. Consult with our agents for personalized advice based on your situation.",
  },
];

export default function IULPage() {
  const [quoteForm, setQuoteForm] = useState({
    age: "",
    savings: "",
    protect: "",
    name: "",
    phone: "",
    email: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-16 min-h-[380px] flex items-center"
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
            IUL SECRETS
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            THE KEY TO YOUR
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-yellow-400">
            FINANCIAL FUTURE
          </h2>
          <a
            href="#quote"
            className="inline-block font-bold px-8 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#C41E3A" }}
          >
            DISCOVER MORE
          </a>
        </div>
      </section>

      {/* 6 Reasons */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2">
            6 REASONS TO JOIN
          </h2>
          <h3
            className="text-2xl font-extrabold text-center mb-10"
            style={{ color: "#C41E3A" }}
          >
            IUL SECRETS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{r.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diseases covered */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-extrabold text-center text-gray-900 mb-2 uppercase tracking-wide">
            Over 16 Types of Diseases and Injuries Covered
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            in the program&apos;s policy
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {diseases.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#C41E3A" }}
                />
                <span className="text-sm text-gray-700">{d}</span>
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
          <h2 className="text-2xl font-extrabold mb-2">HOW TO GET</h2>
          <h3 className="text-3xl font-extrabold text-yellow-400 mb-8">
            $1,000,000 RIGHT NOW
          </h3>
          <div className="bg-white/10 rounded-2xl p-8 text-left space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                [
                  "Age",
                  "age",
                  ["<18", "19-24", "25-34", "35-44", "45-54", "55+"],
                ],
                [
                  "Savings/mo",
                  "savings",
                  ["$1-5k", "$5-10k", "$10-15k", "$15-20k", "$20-25k", "$25k+"],
                ],
                [
                  "Protect amount",
                  "protect",
                  ["$100K", "$200K", "$300K", "$500K", "$1M", ">$1M"],
                ],
              ].map(([label, key, opts]) => (
                <div key={key as string}>
                  <p className="text-xs text-white/70 mb-1">
                    {label as string}
                  </p>
                  <select
                    value={quoteForm[key as keyof typeof quoteForm]}
                    onChange={(e) =>
                      setQuoteForm({
                        ...quoteForm,
                        [key as string]: e.target.value,
                      })
                    }
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-2 py-2 text-white text-sm focus:outline-none"
                  >
                    <option value="">Select</option>
                    {(opts as string[]).map((o) => (
                      <option key={o} value={o} className="text-gray-900">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Full name"
              value={quoteForm.name}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, name: e.target.value })
              }
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={quoteForm.phone}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, phone: e.target.value })
              }
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={quoteForm.email}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, email: e.target.value })
              }
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
            />
            <button
              className="w-full py-3.5 font-bold rounded-xl text-sm text-white hover:opacity-90 transition-opacity"
              style={{ background: "#C41E3A" }}
            >
              Get Quote and Request Direct Consulting Support
            </button>
          </div>
          <div className="mt-6">
            <p className="text-white/60 text-sm mb-2">Or call us directly</p>
            <a
              href="tel:+16787223447"
              className="text-2xl font-bold text-yellow-400 hover:text-yellow-300"
            >
              (678) 722 - 3447
            </a>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-2">
            3 SIMPLE STEPS TO JOIN
          </h2>
          <h3
            className="text-2xl font-extrabold text-center mb-10"
            style={{ color: "#C41E3A" }}
          >
            IUL SECRETS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xs tracking-wide"
                  style={{ background: "#C41E3A" }}
                >
                  {s.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            FAQ – Some Questions You Are Wondering
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50 flex items-center justify-between text-sm"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className="ml-4 shrink-0 text-xl font-light">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 px-6 text-center"
        style={{ background: "#C41E3A" }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Get a Free Consultation Today
        </h2>
        <a
          href="tel:+16787223447"
          className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
          style={{ color: "#C41E3A" }}
        >
          📞 HOTLINE (678) 722-3447
        </a>
      </section>
    </main>
  );
}
