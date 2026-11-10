import Link from "next/link";
import type { Metadata } from "next";
import { getLang } from "@/utils/getLang";
import { createClient } from "@/utils/supabase/server";
import FaqAccordion, { FaqItem } from "./FaqAccordion";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "FAQs - VietPoint Insurance",
  description: "Frequently asked questions about Health Insurance, Medicare, Medicaid, Auto Insurance, and application process.",
};

const FAQS_VI: FaqItem[] = [
  {
    category: "Bảo hiểm sức khỏe (ACA)",
    question: "Bảo hiểm sức khỏe ACA Marketplace là gì và ai đủ điều kiện tham gia?",
    answer:
      "ACA Marketplace (Obamacare) là chương trình bảo hiểm sức khỏe được chính phủ Hoa Kỳ trợ cấp dựa trên thu nhập và quy mô hộ gia đình. Bất kỳ công dân Mỹ, thường trú nhân (thẻ xanh), hoặc người có tình trạng cư trú hợp pháp tại Mỹ đều có thể nộp đơn tham gia trong kỳ Open Enrollment hoặc khi có biến cố đặc biệt (Special Enrollment Period).",
  },
  {
    category: "Bảo hiểm sức khỏe (ACA)",
    question: "Tôi có thể nhận được mức hỗ trợ phí bảo hiểm $0/tháng không?",
    answer:
      "Có! Rất nhiều khách hàng của VietPoint được hưởng mức phí bảo hiểm $0/tháng hoặc phí rất thấp nhờ vào các khoản trợ cấp thuế (Premium Tax Credit) khi thu nhập nằm trong khung quy định của bang.",
  },
  {
    category: "Medicare & Medicaid",
    question: "Khi nào tôi nên bắt đầu đăng ký Medicare Phần A & B?",
    answer:
      "Thời điểm đăng ký ban đầu (Initial Enrollment Period) là khoảng thời gian 7 tháng: 3 tháng trước tháng bạn tròn 65 tuổi, tháng sinh nhật 65, và 3 tháng sau đó. Đăng ký đúng hạn giúp bạn tránh bị phạt trễ hạn trọn đời đối với Part B và Part D.",
  },
  {
    category: "Medicare & Medicaid",
    question: "Sự khác biệt giữa Medicare Advantage (Part C) và Medicare Supplement (Medigap) là gì?",
    answer:
      "Medicare Advantage (Part C) thay thế Medicare nguyên thủy, thường kết hợp quyền lợi thuốc theo toa (Part D) cùng nha khoa, mắt, tai với chi phí thấp hoặc $0 phí hàng tháng. Medicare Supplement bù đắp các chi phí tự trả (Copay, Deductible) của Part A & B nhưng thường có phí tháng riêng biệt.",
  },
  {
    category: "Bảo hiểm xe hơi",
    question: "Bảo hiểm xe hơi bao gồm những loại quyền lợi cơ bản nào?",
    answer:
      "Bảo hiểm xe hơi thường bao gồm:\n- Liability (Trách nhiệm pháp lý đối với thương tật và thiệt hại tài sản cho người khác)\n- Comprehensive (Va chạm ngoài giao thông: mất cắp, cháy nổ, thời tiết)\n- Collision (Va chạm khi lái xe)\n- Uninsured Motorist (Bảo vệ khi va chạm với xe không có bảo hiểm hoặc bỏ trốn).",
  },
  {
    category: "Quy trình hồ sơ",
    question: "Tôi cần chuẩn bị những giấy tờ gì khi nộp hồ sơ bảo hiểm?",
    answer:
      "Các giấy tờ cơ bản gồm: ID/Bằng lái xe, Số an sinh xã hội (SSN), Thẻ xanh hoặc Quốc tịch, Giấy tờ chứng minh thu nhập gần nhất (W-2, Form 1040, hoặc Paystubs), và thông tin của các thành viên gia đình nộp cùng hồ sơ.",
  },
  {
    category: "Quy trình hồ sơ",
    question: "Nếu tôi bị yêu cầu bổ sung giấy tờ (Verification Notice) thì phải làm sao?",
    answer:
      "Bạn đừng quá lo lắng! Marketplace thường cho bạn thời hạn 90 ngày để nộp giấy tờ xác minh thu nhập hoặc tình trạng cư trú. Hãy liên hệ ngay cho chuyên viên VietPoint, chúng tôi sẽ hỗ trợ bạn kiểm tra và tải giấy tờ lên hệ thống chính thức.",
  },
];

const FAQS_EN: FaqItem[] = [
  {
    category: "Health Insurance (ACA)",
    question: "What is ACA Marketplace insurance and who is eligible?",
    answer:
      "ACA Marketplace (Obamacare) is a health insurance program subsidized by the federal government based on household income and family size. U.S. citizens, permanent residents (green card holders), and lawfully present immigrants are eligible to apply during Open Enrollment or a Special Enrollment Period.",
  },
  {
    category: "Health Insurance (ACA)",
    question: "Can I qualify for $0/month health insurance premiums?",
    answer:
      "Yes! Many VietPoint clients qualify for $0/month or very low premium coverage thanks to advance premium tax credits (subsidies) when income falls within federal guidelines.",
  },
  {
    category: "Medicare & Medicaid",
    question: "When should I enroll in Medicare Part A & Part B?",
    answer:
      "Your Initial Enrollment Period is a 7-month window: 3 months before your 65th birthday month, the month you turn 65, and 3 months after. Enrolling on time prevents lifetime late enrollment penalties for Part B and Part D.",
  },
  {
    category: "Medicare & Medicaid",
    question: "What is the difference between Medicare Advantage and Medicare Supplement?",
    answer:
      "Medicare Advantage (Part C) bundles hospital, medical, and prescription drug coverage with extra benefits (dental, vision, hearing), often with $0 monthly premiums. Medicare Supplement (Medigap) covers out-of-pocket gaps of Original Medicare (Part A & B) with a separate monthly premium.",
  },
  {
    category: "Auto Insurance",
    question: "What basic coverages are included in auto insurance?",
    answer:
      "Auto insurance typically covers:\n- Liability (Bodily Injury & Property Damage liability to others)\n- Collision (damage from a crash)\n- Comprehensive (theft, vandalism, weather damage)\n- Uninsured/Underinsured Motorist coverage.",
  },
  {
    category: "Application Process",
    question: "What documents do I need to apply for insurance?",
    answer:
      "You will need a valid ID/Driver's License, Social Security Number (SSN), Green Card or Proof of Citizenship, latest income proof (W-2, Form 1040, or paystubs), and household member information.",
  },
  {
    category: "Application Process",
    question: "What should I do if I receive a Verification Notice asking for documents?",
    answer:
      "Don't worry! Marketplace typically gives you a 90-day grace period to submit proof of income or immigration status. Contact VietPoint immediately, and our team will upload and verify the documents for you.",
  },
];

export default async function FaqsPage() {
  const lang = await getLang();
  const isVi = lang === "vi";
  const supabase = await createClient();

  const { data: row } = await supabase
    .from("page_content")
    .select("value_en, value_vi")
    .eq("page", "customer_care")
    .eq("section", "faqs")
    .eq("field", "data")
    .single();

  let items: FaqItem[] = isVi ? FAQS_VI : FAQS_EN;
  let categories: string[] = isVi
    ? ["Bảo hiểm sức khỏe (ACA)", "Medicare & Medicaid", "Bảo hiểm xe hơi", "Quy trình hồ sơ"]
    : ["Health Insurance (ACA)", "Medicare & Medicaid", "Auto Insurance", "Application Process"];

  if (row?.value_en) {
    try {
      const parsed = JSON.parse(row.value_en);
      const rawFaqs = Array.isArray(parsed)
        ? parsed
        : Array.isArray(parsed?.faqs)
        ? parsed.faqs
        : [];

      if (rawFaqs.length > 0) {
        items = rawFaqs.map((item: any) => ({
          category: isVi
            ? item.category || item.category_en
            : item.category_en || item.category,
          question: isVi ? item.q_vi || item.q_en : item.q_en || item.q_vi,
          answer: isVi ? item.a_vi || item.a_en : item.a_en || item.a_vi,
        }));

        if (!Array.isArray(parsed) && Array.isArray(parsed?.categories) && parsed.categories.length > 0) {
          categories = parsed.categories.map((c: any) => (isVi ? c.vi : c.en || c.vi));
        } else {
          const catSet = new Set<string>();
          items.forEach((it) => {
            if (it.category) catSet.add(it.category);
          });
          categories = Array.from(catSet);
        }
      }
    } catch {
      // Use fallback
    }
  }

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
            ← {isVi ? "Chăm sóc khách hàng" : "Customer Care"}
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            {isVi ? "Câu Hỏi Thường Gặp" : "Frequently Asked Questions"}
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {isVi
              ? "Giải đáp mọi thắc mắc về Bảo hiểm sức khỏe, Medicare, Medicaid, Bảo hiểm xe hơi và quy trình tham gia."
              : "Clear answers to your questions about Health Insurance, Medicare, Medicaid, Auto Insurance, and applications."}
          </p>
        </div>
      </section>

      {/* Accordion list */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <FaqAccordion items={items} categories={categories} />
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 px-6 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {isVi ? "Bạn còn câu hỏi khác cần được tư vấn?" : "Still have questions?"}
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            {isVi
              ? "Đội ngũ chuyên viên VietPoint sẵn sàng hỗ trợ bạn hoàn toàn miễn phí bằng tiếng Việt."
              : "Our team is here to help you navigate your options at no cost."}
          </p>
          <a
            href="tel:14074211531"
            className="inline-block text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ background: "#2F5E9E" }}
          >
            📞 {isVi ? "Gọi ngay hotline (+1) (407)-421-1531" : "Call hotline (+1) (407)-421-1531"}
          </a>
        </div>
      </section>
    </main>
  );
}