import Link from "next/link";
import type { Metadata } from "next";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

export const metadata: Metadata = {
  title: "Customer Care - VietPoint Insurance & Tax",
};

const T = {
  en: {
    hero_title: "Customer Care",
    hero_desc:
      "We are always here for you — before, during, and after your insurance journey. Our dedicated team is here to help.",
    help_title: "How Can We Help?",
    reach_title: "Reach Out Directly",
    email_label: "✉️ Email Us",
    hours: "Office hours: Sun–Thu 9AM–7PM EST | Fri–Sat Closed",
    learn_more: "Learn more →",
    services: [
      {
        icon: "📋",
        title: "Resolve Insurance Claims",
        desc: "We guide you step by step through the insurance claims process. Our agents are with you every step of the way.",
        href: "/customer-care/claims",
      },
      {
        icon: "🧮",
        title: "Calculate Insurance Fees",
        desc: "Get an instant estimate for your insurance premium. Free, no obligation — just enter your details.",
        href: "/customer-care/calculate-fees",
      },
      {
        icon: "💬",
        title: "My Story, My Family",
        desc: "Real stories from our clients whose lives were transformed by the right insurance coverage.",
        href: "/customer-care/stories",
      },
      {
        icon: "📚",
        title: "User Manual",
        desc: "Everything you need to know to manage your insurance policy effectively.",
        href: "/customer-care/user-manual",
      },
      {
        icon: "🏆",
        title: "Priority Program",
        desc: "Exclusive benefits and dedicated support for VietPoint Priority Members.",
        href: "/customer-care/priority-program",
      },
    ],
  },
  vi: {
    hero_title: "Chăm Sóc Khách Hàng",
    hero_desc:
      "Chúng tôi luôn ở đây vì bạn — trước, trong và sau hành trình bảo hiểm của bạn. Đội ngũ tận tâm của chúng tôi sẵn sàng hỗ trợ.",
    help_title: "Chúng Tôi Có Thể Giúp Gì?",
    reach_title: "Liên Hệ Trực Tiếp",
    email_label: "✉️ Gửi Email",
    hours:
      "Giờ làm việc: Chủ nhật – Thứ năm 9SA–7CH EST | Thứ sáu – Thứ bảy Đóng cửa",
    learn_more: "Xem thêm →",
    services: [
      {
        icon: "📋",
        title: "Giải Quyết Khiếu Nại Bảo Hiểm",
        desc: "Chúng tôi hướng dẫn bạn từng bước trong quy trình khiếu nại bảo hiểm. Chuyên viên của chúng tôi đồng hành cùng bạn.",
        href: "/customer-care/claims",
      },
      {
        icon: "🧮",
        title: "Tính Phí Bảo Hiểm",
        desc: "Nhận ước tính phí bảo hiểm ngay lập tức. Miễn phí, không ràng buộc — chỉ cần nhập thông tin của bạn.",
        href: "/customer-care/calculate-fees",
      },
      {
        icon: "💬",
        title: "Câu Chuyện Của Tôi, Gia Đình Tôi",
        desc: "Những câu chuyện thật từ khách hàng có cuộc sống thay đổi nhờ có bảo hiểm phù hợp.",
        href: "/customer-care/stories",
      },
      {
        icon: "📚",
        title: "Hướng Dẫn Sử Dụng",
        desc: "Mọi thông tin bạn cần để quản lý hợp đồng bảo hiểm hiệu quả.",
        href: "/customer-care/user-manual",
      },
      {
        icon: "🏆",
        title: "Chương Trình Ưu Tiên",
        desc: "Quyền lợi độc quyền và hỗ trợ chuyên biệt dành cho thành viên VietPoint Priority.",
        href: "/customer-care/priority-program",
      },
    ],
  },
};

export default async function CustomerCarePage() {
  const lang = await getLang();
  const contact = await getGlobalContact(lang);
  const t = T[lang];
  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-80 flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <h1 className="text-4xl font-extrabold mb-3">{t.hero_title}</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            {t.hero_desc}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            {t.help_title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group block"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2F5E9E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <span
                  className="inline-block mt-3 text-xs font-semibold"
                  style={{ color: "#2F5E9E" }}
                >
                  {t.learn_more}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center bg-gray-50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {t.reach_title}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href={contact.phoneTel}
            className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            📞 {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block border-2 border-gray-300 text-gray-700 font-bold px-8 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors"
          >
            {t.email_label}
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">{t.hours}</p>
      </section>
    </main>
  );
}
