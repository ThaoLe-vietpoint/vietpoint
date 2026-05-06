import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resolve Insurance Claims - Thinksmart Insurance",
};

const steps = [
  {
    num: "01",
    title: "Notify Your Agent",
    desc: "Contact your Thinksmart agent or call our support line as soon as the insured event occurs. Timely notification is critical for a smooth claim process.",
  },
  {
    num: "02",
    title: "Gather Documentation",
    desc: "Collect all required documents: medical reports, hospital records, police reports (if applicable), and your policy number.",
  },
  {
    num: "03",
    title: "Submit Your Claim",
    desc: "Your agent will assist you in completing and submitting the claim form to the insurance company on your behalf.",
  },
  {
    num: "04",
    title: "Claim Review",
    desc: "The insurance company reviews your claim typically within 5–15 business days. We will follow up on your behalf throughout this process.",
  },
  {
    num: "05",
    title: "Receive Payment",
    desc: "Once approved, payment is disbursed directly to you or your designated beneficiary. Your agent will confirm all details.",
  },
];

export default function ClaimsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-[320px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            Customer Care
          </p>
          <h1 className="text-4xl font-extrabold mb-3">
            Resolve Insurance Claims
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            We guide you step by step through the insurance claims process. Our
            agents are with you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Claims Process — 5 Steps
          </h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: "#C41E3A" }}
                >
                  {s.num}
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Need Help with Your Claim?
          </h2>
          <p className="text-gray-500 mb-8">
            Contact us immediately — our specialists handle claims for all major
            insurance providers.
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
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
