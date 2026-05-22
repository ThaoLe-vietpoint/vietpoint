import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";

export const metadata: Metadata = {
  title: "Careers - VietPoint Insurance & Tax",
};

const DEFAULT_POSITIONS = [
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

const DEFAULT_BENEFITS = [
  "Uncapped commission income",
  "Flexible work schedule",
  "Full training & licensing sponsorship",
  "Supportive team environment",
  "Leadership advancement opportunities",
  "Serving a meaningful mission for our community",
];

export default async function RecruitmentPage() {
  const supabase = await createClient();
  const lang = await getLang();
  const { data } = await supabase
    .from("page_content")
    .select("section, field, value_en, value_vi")
    .eq("page", "recruitment");
  const rows = data ?? [];

  const g = (
    section: string,
    field: string,
    fallbackEn = "",
    fallbackVi?: string,
  ) => {
    const row = rows.find((r) => r.section === section && r.field === field);
    if (lang === "vi")
      return row?.value_vi || row?.value_en || fallbackVi || fallbackEn;
    return row?.value_en ?? fallbackEn;
  };

  const t = {
    breadcrumb: lang === "vi" ? "V\u1ec1 VietPoint" : "About VietPoint",
    why_h:
      lang === "vi"
        ? "T\u1ea1i Sao Gia Nh\u1eadp VietPoint?"
        : "Why Join VietPoint?",
    positions_h:
      lang === "vi"
        ? "V\u1ecb Tr\u00ed \u0110ang Tuy\u1ec3n"
        : "Open Positions",
    apply: lang === "vi" ? "\u1ee8ng Tuy\u1ec3n" : "Apply",
    send_resume: lang === "vi" ? "G\u1eedi H\u1ed3 S\u01a1" : "Send Resume",
    contact_us: lang === "vi" ? "Li\u00ean H\u1ec7" : "Contact Us",
  };

  const heroTitle = g(
    "hero",
    "title",
    "Join Our Team",
    "Gia Nh\u1eadp \u0110\u1ed9i Ng\u0169 C\u1ee7a Ch\u00fang T\u00f4i",
  );
  const heroSubtitle = g(
    "hero",
    "subtitle",
    "Build a meaningful career helping Vietnamese-American families protect their health and financial future.",
    "X\u00e2y d\u1ef1ng s\u1ef1 nghi\u1ec7p \u00fd ngh\u0129a gi\u00fap c\u00e1c gia \u0111\u00ecnh ng\u01b0\u1eddi Vi\u1ec7t b\u1ea3o v\u1ec7 s\u1ee9c kh\u1ecfe v\u00e0 t\u01b0\u01a1ng lai t\u00e0i ch\u00ednh c\u1ee7a h\u1ecd.",
  );
  const ctaTitle = g(
    "cta",
    "title",
    "Ready to Make a Difference?",
    "S\u1eb5n S\u00e0ng T\u1ea1o S\u1ef1 Kh\u00e1c Bi\u1ec7t?",
  );
  const ctaSubtitle = g(
    "cta",
    "subtitle",
    "Send your resume and a brief message about why you want to join our team.",
    "G\u1eedi h\u1ed3 s\u01a1 v\u00e0 l\u00fd do b\u1ea1n mu\u1ed1n gia nh\u1eadp \u0111\u1ed9i ng\u0169 c\u1ee7a ch\u00fang t\u00f4i.",
  );

  let positions = DEFAULT_POSITIONS;
  const positionsRaw = g("positions", "data", "");
  if (positionsRaw) {
    try {
      positions = JSON.parse(positionsRaw);
    } catch {
      /* use default */
    }
  }

  let benefits = DEFAULT_BENEFITS;
  const benefitsRaw = g("benefits", "data", "");
  if (benefitsRaw) {
    try {
      benefits = JSON.parse(benefitsRaw);
    } catch {
      /* use default */
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-90 flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            {t.breadcrumb}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">{heroTitle}</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            {t.why_h}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#2F5E9E" }}
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
            {t.positions_h}
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
                    style={{ background: "#2F5E9E" }}
                  >
                    {t.apply}
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
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">{ctaTitle}</h2>
        <p className="text-white/80 mb-8">{ctaSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:support@VietPointinsurance.com"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gray-50 transition-colors"
            style={{ color: "#2F5E9E" }}
          >
            ✉️ {t.send_resume}
          </a>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            {t.contact_us}
          </Link>
        </div>
      </section>
    </main>
  );
}
