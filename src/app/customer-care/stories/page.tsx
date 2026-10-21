import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

export const metadata: Metadata = {
  title: "My Story, My Family - VietPoint Insurance & Tax",
};

export default async function StoriesPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_by: "Customer Care",
      hero_h: "My Story, My Family",
      hero_desc:
        "Real stories from our clients whose lives were transformed by the right insurance coverage.",
      cta_h: "Your Story Starts Here",
      cta_desc:
        "Get the right coverage before you need it. Consult with our agents today.",
      cta_contact: "Contact Us",
    },
    vi: {
      hero_by: "Chăm Sóc Khách Hàng",
      hero_h: "Câu Chuyện Của Tôi, Gia Đình Của Tôi",
      hero_desc:
        "Câu chuyện thật từ khách hàng của chúng tôi — những người được bảo vệ đúng lúc nhờ bảo hiểm.",
      cta_h: "Câu Chuyện Của Bạn Bắt Đầu Tại Đây",
      cta_desc:
        "Hãy được bảo vệ trước khi bạn cần. Tư vấn với chuyên viên của chúng tôi ngay hôm nay.",
      cta_contact: "Liên Hệ Chúng Tôi",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
  const supabase = await createClient();
  const [{ data: stories }, contact] = await Promise.all([
    supabase
      .from("customer_stories")
      .select("*")
      .eq("active", true)
      .order("created_at", { ascending: false }),
    getGlobalContact(lang),
  ]);

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
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {(stories ?? []).map((s) => (
              <article
                key={s.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
                    style={{ background: s.tag_color ?? "#2F5E9E" }}
                  >
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{s.name}</h3>
                    <p className="text-sm text-gray-500">
                      {txt(s, "location")}
                    </p>
                    <span
                      className="inline-block text-xs font-semibold text-white px-3 py-0.5 rounded-full mt-1"
                      style={{ background: s.tag_color ?? "#2F5E9E" }}
                    >
                      {txt(s, "tag")}
                    </span>
                  </div>
                  <div className="ml-auto text-right">
                    <p
                      className="font-extrabold text-lg"
                      style={{ color: s.tag_color ?? "#2F5E9E" }}
                    >
                      {s.amount}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-600 leading-relaxed italic">
                  &quot;{txt(s, "story")}&quot;
                </blockquote>
              </article>
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
        <h2 className="text-2xl font-bold text-white mb-4">{t.cta_h}</h2>
        <p className="text-white/80 mb-8">{t.cta_desc}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contact.phoneTel}
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gray-50 transition-colors"
            style={{ color: "#2F5E9E" }}
          >
            📞 {contact.phone}
          </a>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            {t.cta_contact}
          </Link>
        </div>
      </section>
    </main>
  );
}
