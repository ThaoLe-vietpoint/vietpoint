import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Careers - Thinksmart Insurance" };

const positions = [
  {
    title: "Licensed Insurance Agent",
    type: "Full-time / Part-time",
    location: "Remote (Georgia preferred)",
    desc: "Join our team of elite agents serving the Vietnamese-American community. We provide full training, licensing support, and an established client pipeline.",
  },
  {
    title: "Insurance Consultant (Vietnamese Speaker)",
    type: "Full-time",
    location: "Lawrenceville, GA",
    desc: "Work directly with Vietnamese clients to assess their insurance needs, present suitable policies, and build long-term financial relationships.",
  },
  {
    title: "Client Success Associate",
    type: "Part-time",
    location: "Remote",
    desc: "Support existing policyholders with claims, policy questions, renewals, and ongoing communication. Bilingual (Vietnamese/English) required.",
  },
];

const benefits = [
  "Uncapped commission income",
  "Flexible work schedule",
  "Full training & licensing sponsorship",
  "Supportive team environment",
  "Leadership advancement opportunities",
  "Serving a meaningful mission for our community",
];

export default function RecruitmentPage() {
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
            About Thinksmart
          </p>
          <h1 className="text-4xl font-extrabold mb-3">Join Our Team</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Build a meaningful career helping Vietnamese-American families
            protect their health and financial future.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Why Join Thinksmart?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#C41E3A" }}
                />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Open Positions
          </h2>
          <div className="space-y-6">
            {positions.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                  <Link
                    href="/contact"
                    className="shrink-0 text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                    style={{ background: "#C41E3A" }}
                  >
                    Apply
                  </Link>
                </div>
                <div className="flex gap-4 mb-3 text-xs text-gray-500">
                  <span>🕐 {p.type}</span>
                  <span>📍 {p.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-12 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-white/80 mb-8">
          Send your resume and a brief message about why you want to join our
          team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:support@Thinksmartinsurance.com"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gray-50 transition-colors"
            style={{ color: "#C41E3A" }}
          >
            ✉️ Send Resume
          </a>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
