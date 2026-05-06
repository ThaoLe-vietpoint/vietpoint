import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Manual - VietPoint Insurance & Tax",
};

const guides = [
  {
    title: "National Life Group's IUL Premium Payment Policy",
    date: "May 1, 2025",
    desc: "Indexed Universal Life (IUL) insurance is increasingly attracting the interest of the Vietnamese community. Understanding the payment policy and how flexible premiums work is crucial for managing your policy effectively.",
    tag: "IUL",
  },
  {
    title: "How to Read Your Insurance Policy Statement",
    date: "Mar 15, 2025",
    desc: "A step-by-step guide to understanding your annual policy statement — including cash value, death benefit, and premium history.",
    tag: "Policy",
  },
  {
    title: "How to Update Your Beneficiaries",
    date: "Feb 20, 2025",
    desc: "Life changes — and your policy should too. Learn how to update your beneficiaries online or through your agent in just 10 minutes.",
    tag: "Account",
  },
  {
    title: "How to Make a Premium Payment Online",
    date: "Jan 10, 2025",
    desc: "Step-by-step instructions for making your monthly premium payment through the National Life Group or Allianz online portals.",
    tag: "Payment",
  },
  {
    title: "What to Do When Your Policy Lapses",
    date: "Dec 5, 2024",
    desc: "Missed a payment? Don't panic. Here's what to do within the grace period to reinstate your policy and avoid losing your coverage.",
    tag: "Emergency",
  },
];

export default function UserManualPage() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-[300px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            Customer Care
          </p>
          <h1 className="text-4xl font-extrabold mb-3">User Manual</h1>
          <p className="text-white/85 text-lg">
            Everything you need to know to manage your insurance policy.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {guides.map((g) => (
              <article
                key={g.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-bold text-white px-2 py-0.5 rounded"
                        style={{ background: "#2F5E9E" }}
                      >
                        {g.tag}
                      </span>
                      <span className="text-xs text-gray-400">{g.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{g.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 text-sm font-semibold hover:underline mt-1"
                    style={{ color: "#2F5E9E" }}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Keep in Touch!
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Leave your email to receive the latest guides, tips, and insurance
            news delivered directly to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            SUBSCRIBE NOW
          </Link>
        </div>
      </section>
    </main>
  );
}
