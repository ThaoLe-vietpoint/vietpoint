import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

export const metadata: Metadata = {
  title: "Priority Program - VietPoint Insurance & Tax",
};

export default async function PriorityProgramPage() {
  const lang = await getLang();
  const T = {
    en: {
      hero_by: "Customer Care",
      hero_h: "Priority Program",
      hero_desc:
        "Exclusive benefits and dedicated support for VietPoint Priority Members. Because you deserve the best.",
      benefits_h: "Priority Member Benefits",
      qualify_h: "How to Qualify",
      qualify_desc:
        "Priority membership is available to all active VietPoint policyholders. Contact your agent to learn how to enroll or ask about exclusive upgrade options.",
      cta_agent: "Contact Agent",
    },
    vi: {
      hero_by: "Chăm Sóc Khách Hàng",
      hero_h: "Chương Trình Ưu Tiên",
      hero_desc:
        "Quyền lợi độc quyền và hỗ trợ tận tâm cho Thành viên Ưu tiên VietPoint. Vì bạn xứng đáng với những điều tốt nhất.",
      benefits_h: "Quyền Lợi Thành Viên Ưu Tiên",
      qualify_h: "Cách Đăng Ký",
      qualify_desc:
        "Tư cách thành viên ưu tiên dành cho tất cả người tham gia bảo hiểm VietPoint đang hoạt động. Liên hệ chuyên viên để biết cách đăng ký hoặc hỏi về các tùy chọn nâng cấp.",
      cta_agent: "Liên Hệ Chuyên Viên",
    },
  };
  const t = T[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const txt = (row: any, field: string): string =>
    row[`${field}_${lang}`] || row[`${field}_en`] || row[field] || "";
  const supabase = await createClient();
  const [{ data: perks }, contact] = await Promise.all([
    supabase
      .from("priority_perks")
      .select("*")
      .eq("active", true)
      .order("sort_order", { ascending: true }),
    getGlobalContact(lang),
  ]);

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
            {t.hero_by}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">{t.hero_h}</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            {t.hero_desc}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            {t.benefits_h}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(perks ?? []).map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {txt(p, "label")}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {txt(p, "description")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.qualify_h}
          </h2>
          <p className="text-gray-500 mb-8">{t.qualify_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contact.phoneTel}
              className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#2F5E9E" }}
            >
              📞 {contact.phone}
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-gray-300 text-gray-700 font-bold px-8 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors"
            >
              {t.cta_agent}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
