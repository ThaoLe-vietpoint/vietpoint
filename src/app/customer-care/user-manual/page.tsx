import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";

export const metadata: Metadata = {
  title: "User Manual - VietPoint Insurance & Tax",
};

export default async function UserManualPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_by: "Customer Care",
      hero_h: "User Manual",
      hero_desc: "Everything you need to know to manage your insurance policy.",
      read: "Read →",
      newsletter_h: "Keep in Touch!",
      newsletter_desc:
        "Leave your email to receive the latest guides, tips, and insurance news delivered directly to your inbox.",
      subscribe: "SUBSCRIBE NOW",
    },
    vi: {
      hero_by: "Chăm Sóc Khách Hàng",
      hero_h: "Hướng Dẫn Sử Dụng",
      hero_desc: "Mọi thứ bạn cần biết để quản lý hợp đồng bảo hiểm của mình.",
      read: "Đọc →",
      newsletter_h: "Liên Hệ Với Chúng Tôi!",
      newsletter_desc:
        "Để lại email để nhận hướng dẫn, mẹo và tin tức bảo hiểm mới nhất trực tiếp vào hộp thư.",
      subscribe: "ĐĂNG KÝ NGAY",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
  const supabase = await createClient();
  const { data: guides } = await supabase
    .from("manual_guides")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-75 flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            {t.hero_by}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">{t.hero_h}</h1>
          <p className="text-white/85 text-lg">{t.hero_desc}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {(guides ?? []).map((g) => (
              <article
                key={g.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-bold text-white px-2 py-0.5 rounded"
                        style={{ background: "#2F5E9E" }}
                      >
                        {txt(g, "tag")}
                      </span>
                      <span className="text-xs text-gray-400">
                        {g.date_label}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {txt(g, "title")}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {txt(g, "description")}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 text-sm font-semibold hover:underline mt-1"
                    style={{ color: "#2F5E9E" }}
                  >
                    {t.read}
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
            {t.newsletter_h}
          </h2>
          <p className="text-gray-500 text-sm mb-6">{t.newsletter_desc}</p>
          <Link
            href="/contact"
            className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            {t.subscribe}
          </Link>
        </div>
      </section>
    </main>
  );
}
