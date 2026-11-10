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
    hours: "Office hours: Mon–Fri 9AM–5PM EST | Sat–Sun Closed",
    learn_more: "Learn more →",
    services: [
      {
        icon: "🎧",
        title: "Customer Support",
        desc: "Ways to contact us, support hours, assistance topics, and direct help from our team.",
        href: "/customer-care/support",
      },
      {
        icon: "❓",
        title: "FAQs",
        desc: "Frequently asked questions about Health Insurance, Medicare, Medicaid, Auto Insurance, and application procedures.",
        href: "/customer-care/faqs",
      },
      {
        icon: "📄",
        title: "Document Assistance",
        desc: "Guide to key documents, reading insurer notices, understanding Medical Bills, EOB, and Verification Notices.",
        href: "/customer-care/documents",
      },
      {
        icon: "⚖️",
        title: "Complaints & Issue Resolution",
        desc: "Support for billing errors, denied claims, and policy review requests with insurance carriers.",
        href: "/customer-care/complaints",
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
      "Giờ làm việc: Thứ Hai – Thứ Sáu 9SA–5CH EST | Thứ Bảy – Chủ Nhật Đóng cửa",
    learn_more: "Xem thêm →",
    services: [
      {
        icon: "🎧",
        title: "Hỗ Trợ Khách Hàng",
        desc: "Các cách liên hệ, thời gian hỗ trợ, các chủ đề hỗ trợ và gửi yêu cầu tư vấn trực tiếp.",
        href: "/customer-care/support",
      },
      {
        icon: "❓",
        title: "Câu Hỏi Thường Gặp",
        desc: "Thắc mắc thường gặp về Bảo hiểm sức khỏe, Medicare, Medicaid, Bảo hiểm xe hơi và quy trình nộp hồ sơ.",
        href: "/customer-care/faqs",
      },
      {
        icon: "📄",
        title: "Hướng Dẫn Giấy Tờ",
        desc: "Các loại giấy tờ cần lưu ý, cách đọc thư bảo hiểm, giải thích Medical Bill, EOB và Verification Notice.",
        href: "/customer-care/documents",
      },
      {
        icon: "⚖️",
        title: "Khiếu Nại & Giải Quyết Vấn Đề",
        desc: "Hỗ trợ khi hóa đơn có sai sót, quyền lợi bảo hiểm bị từ chối hoặc cần yêu cầu xem xét lại từ hãng bảo hiểm.",
        href: "/customer-care/complaints",
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
          <div className="grid md:grid-cols-2 gap-6">
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
