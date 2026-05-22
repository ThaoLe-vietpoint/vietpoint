import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";

export const metadata: Metadata = {
  title: "Resolve Insurance Claims - VietPoint Insurance & Tax",
};

export default async function ClaimsPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_by: "Customer Care",
      hero_h: "Resolve Insurance Claims",
      hero_desc:
        "We guide you step by step through the insurance claims process. Our agents are with you every step of the way.",
      steps_h: "Claims Process",
      steps_unit: "Steps",
      cta_h: "Need Help with Your Claim?",
      cta_desc:
        "Contact us immediately — our specialists handle claims for all major insurance providers.",
      cta_msg: "Send a Message",
    },
    vi: {
      hero_by: "Chăm Sóc Khách Hàng",
      hero_h: "Giải Quyết Bồi Thường Bảo Hiểm",
      hero_desc:
        "Chúng tôi hướng dẫn bạn từng bước trong quy trình bồi thường bảo hiểm. Chuyên viên luôn đồng hành cùng bạn.",
      steps_h: "Quy Trình Bồi Thường",
      steps_unit: "Bước",
      cta_h: "Cần Hỗ Trợ Bồi Thường?",
      cta_desc:
        "Liên hệ ngay — chuyên gia của chúng tôi xử lý bồi thường cho tất cả các nhà bảo hiểm lớn.",
      cta_msg: "Gửi Tin Nhắn",
    },
  };
  const t = T[lang];
  // Helper: pick the lang field, fall back to _en then legacy single field
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";

  const supabase = await createClient();
  const { data: steps } = await supabase
    .from("claims_steps")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true });

  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-80 flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            {t.hero_by}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">{t.hero_h}</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            {t.hero_desc}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            {t.steps_h} — {(steps ?? []).length} {t.steps_unit}
          </h2>
          <div className="space-y-6">
            {(steps ?? []).map((s) => (
              <div key={s.id} className="flex gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: "#2F5E9E" }}
                >
                  {s.num}
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {txt(s, "title")}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {txt(s, "description")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t.cta_h}</h2>
          <p className="text-gray-500 mb-8">{t.cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16788253737"
              className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#2F5E9E" }}
            >
              📞 (678) 825-3737
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-gray-300 text-gray-700 font-bold px-8 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors"
            >
              {t.cta_msg}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
