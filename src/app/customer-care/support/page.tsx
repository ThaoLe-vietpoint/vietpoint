import Link from "next/link";
import type { Metadata } from "next";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Customer Support - VietPoint Insurance",
  description: "VietPoint Customer Support - contact channels, office hours, and assistance topics.",
};

const T = {
  en: {
    badge: "Customer Care",
    title: "Customer Support",
    subtitle: "We are always ready to listen, explain, and accompany you through every step of your insurance journey.",
    channels_title: "Direct Contact Channels",
    consulting_title: "Consultation Hotline",
    support_title: "Customer Care Hotline",
    email_title: "Email Support",
    office_title: "Office Address",
    hours_title: "Support Hours (EST Time)",
    hours_detail: "Monday – Friday: 9:00 AM – 5:00 PM | Saturday & Sunday: Closed",
    topics_title: "Key Support Topics",
    topics: [
      {
        icon: "🩺",
        title: "Health & Medicare Consultation",
        desc: "Personalized advice to select the right health insurance plan, Medicare Advantage, or Supplement coverage.",
      },
      {
        icon: "🏥",
        title: "Find Doctors & In-Network Facilities",
        desc: "Assistance with finding primary care physicians, specialists, and hospitals within your insurer network.",
      },
      {
        icon: "💳",
        title: "Premium Payments & Benefits Explanation",
        desc: "Clear explanations of deductibles, copays, out-of-pocket maximums, and setting up automatic payments.",
      },
      {
        icon: "📝",
        title: "Policy Updates & Renewal",
        desc: "Support for updating household information, income changes, address updates, and annual policy renewal.",
      },
    ],
    cta_box_title: "Need immediate assistance?",
    cta_box_desc: "Call our consultant hotline or leave us a message. We will respond within 24 hours.",
    call_btn: "Call Now",
    contact_btn: "Send a Message",
  },
  vi: {
    badge: "Chăm sóc khách hàng",
    title: "Hỗ Trợ Khách Hàng",
    subtitle: "VietPoint luôn sẵn sàng lắng nghe, giải đáp thắc mắc và đồng hành cùng bạn trên từng bước của hành trình bảo hiểm.",
    channels_title: "Các Kênh Liên Hệ Trực Tiếp",
    consulting_title: "Hotline Tư Vấn",
    support_title: "Hotline CSKH",
    email_title: "Email Hỗ Trợ",
    office_title: "Địa Chỉ Văn Phòng",
    hours_title: "Thời Gian Hỗ Trợ (Giờ EST)",
    hours_detail: "Thứ Hai – Thứ Sáu: 9:00 SA – 5:00 CH | Thứ Bảy & Chủ Nhật: Đóng cửa",
    topics_title: "Các Chủ Đề Hỗ Trợ Phổ Biến",
    topics: [
      {
        icon: "🩺",
        title: "Tư Vấn Chọn Gói Bảo Hiểm",
        desc: "Tư vấn chi tiết các chương trình Bảo hiểm sức khỏe ACA Marketplace, Medicare và Bảo hiểm xe hơi phù hợp tài chính gia đình.",
      },
      {
        icon: "🏥",
        title: "Tìm Bác Sĩ & Cơ Sở Trong Mạng Lưới",
        desc: "Hỗ trợ chọn hoặc đổi bác sĩ gia đình (PCP), tìm phòng khám, bệnh viện và nhà thuốc nằm trong mạng lưới bảo hiểm.",
      },
      {
        icon: "💳",
        title: "Quyền Lợi & Đóng Phí Bảo Hiểm",
        desc: "Giải thích cặn kẽ về mức khấu trừ (Deductible), Copay, Coinsurance và hướng dẫn thiết lập thanh toán phí hàng tháng.",
      },
      {
        icon: "📝",
        title: "Cập Nhật Hồ Sơ & Tái Tục Hàng Năm",
        desc: "Hỗ trợ bổ sung thông tin khi có thay đổi về thu nhập, nơi cư trú hoặc thành viên gia đình, cùng quy trình gia hạn bảo hiểm.",
      },
    ],
    cta_box_title: "Bạn cần hỗ trợ ngay?",
    cta_box_desc: "Gọi trực tiếp đến hotline tư vấn hoặc để lại thông tin để chuyên viên VietPoint liên hệ lại với bạn trong vòng 24 giờ.",
    call_btn: "Gọi ngay",
    contact_btn: "Gửi yêu cầu hỗ trợ",
  },
};

type DbSupportTopic = {
  id: string;
  icon: string;
  title_vi: string;
  title_en: string;
  desc_vi: string;
  desc_en: string;
};

type DbSupportData = {
  consultingPhone?: string;
  supportPhone?: string;
  email?: string;
  hours_vi?: string;
  hours_en?: string;
  topics?: DbSupportTopic[];
};

export default async function SupportPage() {
  const lang = await getLang();
  const contact = await getGlobalContact(lang);
  const t = T[lang];

  // Load dynamic data from DB
  let dbData: DbSupportData | null = null;
  try {
    const supabase = await createClient();
    const { data: row } = await supabase
      .from("page_content")
      .select("value_vi, value_en")
      .eq("page", "customer_care")
      .eq("section", "support")
      .eq("field", "data")
      .maybeSingle();

    if (row?.value_vi) {
      dbData = JSON.parse(row.value_vi);
    }
  } catch (e) {
    console.warn("Could not load customer_care/support/data:", e);
  }

  const consultingPhone = dbData?.consultingPhone || contact.phone || "(+1) (407)-421-1531";
  const consultingPhoneTel = `tel:${consultingPhone.replace(/\D/g, "")}`;
  const supportPhoneRaw = dbData?.supportPhone || contact.hotlineSupport || "(+1) (407)-576-6689 | (+1) (407)-714-4691 | (+1) (689)-307-7129";
  const supportPhonesList = supportPhoneRaw.split("|").map((s) => s.trim()).filter(Boolean);
  const email = dbData?.email || contact.email || "servicing@vietpointservices.com";

  const hoursDetail =
    (lang === "vi" ? dbData?.hours_vi : dbData?.hours_en) ||
    `${contact.hoursWeekdays} | ${contact.hoursWeekend}` ||
    t.hours_detail;

  const topics =
    dbData?.topics && Array.isArray(dbData.topics) && dbData.topics.length > 0
      ? dbData.topics.map((tp) => ({
          icon: tp.icon || "📌",
          title: lang === "vi" ? tp.title_vi : tp.title_en || tp.title_vi,
          desc: lang === "vi" ? tp.desc_vi : tp.desc_en || tp.desc_vi,
        }))
      : t.topics;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-24 pb-16 px-6"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <Link
            href="/customer-care"
            className="inline-block text-white/70 hover:text-white text-xs font-semibold tracking-wider uppercase mb-3 transition-colors"
          >
            ← {t.badge}
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t.title}</h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          {t.channels_title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl mx-auto mb-4">
              📞
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">{t.consulting_title}</h3>
            <a
              href={consultingPhoneTel}
              className="text-base font-extrabold text-[#2F5E9E] hover:underline block mt-2"
            >
              {consultingPhone}
            </a>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl mx-auto mb-4">
              🎧
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">{t.support_title}</h3>
            <div className="space-y-1 text-xs font-semibold text-gray-700 mt-2">
              {supportPhonesList.map((p, idx) => (
                <a
                  key={idx}
                  href={`tel:${p.replace(/\D/g, "")}`}
                  className="hover:text-[#2F5E9E] block"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl mx-auto mb-4">
              ✉️
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">{t.email_title}</h3>
            <a
              href={`mailto:${email}`}
              className="text-xs font-semibold text-gray-700 hover:text-[#2F5E9E] block mt-2 break-all"
            >
              {email}
            </a>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl mx-auto mb-4">
              📍
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">{t.office_title}</h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              {contact.address}
            </p>
          </div>
        </div>

        {/* Hours bar */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
          <p className="text-xs font-bold text-[#2F5E9E] uppercase tracking-wider mb-1">
            {t.hours_title}
          </p>
          <p className="text-sm font-medium text-gray-800">{hoursDetail}</p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            {t.topics_title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((tp) => (
              <div
                key={tp.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start"
              >
                <div className="text-3xl shrink-0 p-2 bg-slate-50 rounded-xl">{tp.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{tp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.cta_box_title}</h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">{t.cta_box_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={consultingPhoneTel}
              className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#2F5E9E" }}
            >
              📞 {t.call_btn} {consultingPhone}
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-800 border border-gray-300 font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gray-50 transition-colors"
            >
              {t.contact_btn}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
