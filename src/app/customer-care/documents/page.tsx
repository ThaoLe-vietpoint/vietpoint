import Link from "next/link";
import type { Metadata } from "next";
import { getLang } from "@/utils/getLang";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Document Assistance - VietPoint Insurance",
  description: "Guide to understanding insurance notices, Medical Bills, EOBs, and Verification Notices.",
};

const SECTIONS_VI = [
  {
    icon: "🪪",
    title: "1. Các loại giấy tờ cần lưu ý khi tham gia bảo hiểm",
    desc: "Để hồ sơ bảo hiểm được duyệt nhanh chóng và đúng quy định, bạn nên chuẩn bị sẵn sàng:",
    items: [
      "Giấy tờ tùy thân: Driver's License hoặc State ID còn hạn.",
      "Tình trạng cư trú: Thẻ xanh (Green Card), Hộ chiếu Mỹ, hoặc giấy tờ cư trú hợp pháp.",
      "Số an sinh xã hội (SSN): Cho tất cả thành viên trong gia đình cần bảo hiểm.",
      "Chứng minh thu nhập: Form W-2, 1099, 1040 của năm gần nhất hoặc Paystubs 4 tuần gần nhất.",
      "Giấy khai sinh / Giấy tờ hợp pháp: Đối với trẻ em hoặc người phụ thuộc.",
    ],
  },
  {
    icon: "✉️",
    title: "2. Cách đọc thư thông báo từ hãng bảo hiểm",
    desc: "Hãng bảo hiểm thường gửi các loại thư thông báo quan trọng qua đường bưu điện hoặc email:",
    items: [
      "Notice of Coverage / Member ID Card: Thẻ bảo hiểm và xác nhận hiệu lực bảo hiểm.",
      "Premium Billing Notice: Thông báo đóng phí hàng tháng, ngày đến hạn và số tiền cần đóng.",
      "Policy Renewal Notice: Thông báo gia hạn vào cuối năm, nêu rõ các thay đổi về quyền lợi và biểu phí năm mới.",
      "Notice of Action: Thư thông báo thay đổi trạng thái hồ sơ hoặc cảnh báo nguy cơ hủy hợp đồng nếu trễ phí.",
    ],
  },
  {
    icon: "🏥",
    title: "3. Giải thích hóa đơn y tế (Medical Bill)",
    desc: "Khi khám bệnh, bệnh viện hoặc phòng khám sẽ gửi hóa đơn về nhà. Hãy lưu ý các nguyên tắc quan trọng:",
    items: [
      "Đừng vội thanh toán ngay: Luôn chờ nhận được giấy EOB từ hãng bảo hiểm trước khi trả tiền hóa đơn bệnh viện.",
      "Đối chiếu mã dịch vụ: Kiểm tra ngày khám, tên bác sĩ và dịch vụ đã làm xem có trùng khớp với buổi khám thực tế hay không.",
      "Phân biệt Bill thật và Statement: Có những tờ giấy chỉ là bản tóm tắt chi phí chưa trừ bảo hiểm.",
      "Nếu nghi ngờ sai sót: Mang giấy tờ đến văn phòng VietPoint để chuyên viên đối chiếu và khiếu nại giúp bạn.",
    ],
  },
  {
    icon: "📊",
    title: "4. Giải thích giấy thông báo chi phí (EOB - Explanation of Benefits)",
    desc: "EOB không phải là hóa đơn đòi tiền (This is NOT a bill), mà là bảng giải trình quyền lợi bảo hiểm:",
    items: [
      "Amount Billed: Số tiền cơ sở y tế yêu cầu thanh toán ban đầu.",
      "Allowed Amount / Plan Discount: Mức giá giảm theo hợp đồng giữa hãng bảo hiểm và nhà cung cấp dịch vụ.",
      "Paid by Insurer: Số tiền hãng bảo hiểm đã chi trả cho bệnh viện/phòng khám.",
      "Your Responsibility (You Owe): Số tiền thực tế bạn có nghĩa vụ phải thanh toán (bao gồm Copay, Deductible, Coinsurance).",
    ],
  },
  {
    icon: "⏳",
    title: "5. Cách bổ sung giấy tờ khi có yêu cầu (Verification Notice)",
    desc: "Thị trường bảo hiểm (Marketplace / HealthCare.gov) có thể gửi yêu cầu xác minh thông tin:",
    items: [
      "Thời hạn quy định: Thường là 90 ngày kể từ ngày thông báo. Nếu quá hạn, trợ cấp thuế có thể bị cắt hoặc hợp đồng bị hủy.",
      "Loại tài liệu thường yêu cầu: Xác minh thu nhập hàng năm (Proof of Income), Tình trạng cư trú (Immigration Status).",
      "Cách gửi giấy tờ: Tải lên trực tuyến qua tài khoản Marketplace hoặc gửi qua chuyên viên đại diện VietPoint.",
      "Xác nhận hoàn tất: VietPoint luôn theo dõi sát sao đến khi hệ thống chính thức chấp thuận giấy tờ của bạn.",
    ],
  },
];

const SECTIONS_EN = [
  {
    icon: "🪪",
    title: "1. Key Documents Needed for Insurance",
    desc: "To ensure your insurance enrollment is processed smoothly, keep these documents handy:",
    items: [
      "Government Photo ID: Valid Driver's License or State ID.",
      "Immigration Status: Green Card, U.S. Passport, Work Authorization, or legal status documents.",
      "Social Security Numbers (SSN): For all household members enrolling in coverage.",
      "Proof of Income: Latest W-2, 1099, Form 1040 tax return, or last 4 weeks of paystubs.",
      "Birth Certificates: For children or dependents included in your coverage.",
    ],
  },
  {
    icon: "✉️",
    title: "2. Understanding Insurance Notices & Letters",
    desc: "Insurance carriers regularly mail important notifications that require your attention:",
    items: [
      "Notice of Coverage / Member ID Card: Validates your active coverage and policy details.",
      "Premium Billing Notice: Monthly payment invoice, due date, and payment instructions.",
      "Annual Renewal Notice: Details upcoming changes to premiums, benefits, and networks for the next plan year.",
      "Notice of Action: Alerts regarding coverage status changes, missing documents, or delinquency warnings.",
    ],
  },
  {
    icon: "🏥",
    title: "3. Demystifying Medical Bills",
    desc: "Receiving bills from clinics or hospitals can be confusing. Follow these vital rules:",
    items: [
      "Do NOT pay immediately: Always wait for the Explanation of Benefits (EOB) from your insurance before paying any provider bill.",
      "Verify services: Match the date of service, provider name, and procedures with your actual visit.",
      "Recognize bill types: Ensure you are looking at the final patient responsibility balance, not the pre-insurance charge.",
      "Have questions? Bring your bill to VietPoint, and our specialists will verify charges on your behalf.",
    ],
  },
  {
    icon: "📊",
    title: "4. Understanding the EOB (Explanation of Benefits)",
    desc: "Remember: The EOB is NOT a bill. It is an explanation of how your insurance processed your claim:",
    items: [
      "Amount Billed: The total fee the doctor or facility submitted.",
      "Allowed Amount / Network Discount: The contracted discounted rate negotiated by your insurer.",
      "Paid by Insurer: The portion covered and paid directly by your insurance plan.",
      "Your Responsibility: The actual amount you owe the provider (Deductible, Copay, Coinsurance).",
    ],
  },
  {
    icon: "⏳",
    title: "5. Handling Verification Notices (Document Requests)",
    desc: "Marketplace / HealthCare.gov may request proof to confirm your eligibility:",
    items: [
      "Strict Deadline: You usually have 90 days from the notice date. Missing this can result in losing subsidies or coverage.",
      "Common Requests: Proof of household income, U.S. citizenship, or lawful presence status.",
      "Submission: Documents can be uploaded securely to your official Marketplace account or through VietPoint.",
      "Tracking: VietPoint tracks your submission until Marketplace confirms full verification.",
    ],
  },
];

type DbDocSection = {
  id: string;
  icon: string;
  title_vi: string;
  title_en: string;
  desc_vi: string;
  desc_en: string;
  items_vi: string[];
  items_en: string[];
};

export default async function DocumentsPage() {
  const lang = await getLang();
  const isVi = lang === "vi";

  let sections = isVi ? SECTIONS_VI : SECTIONS_EN;

  try {
    const supabase = await createClient();
    const { data: row } = await supabase
      .from("page_content")
      .select("value_vi, value_en")
      .eq("page", "customer_care")
      .eq("section", "documents")
      .eq("field", "data")
      .maybeSingle();

    if (row?.value_vi) {
      const parsed: DbDocSection[] = JSON.parse(row.value_vi);
      if (Array.isArray(parsed) && parsed.length > 0) {
        sections = parsed.map((s) => ({
          icon: s.icon || "📄",
          title: isVi ? s.title_vi : s.title_en || s.title_vi,
          desc: isVi ? s.desc_vi : s.desc_en || s.desc_vi,
          items: isVi ? s.items_vi : s.items_en || s.items_vi,
        }));
      }
    }
  } catch (e) {
    console.warn("Could not load customer_care/documents/data:", e);
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
            {isVi ? "Hướng Dẫn Giấy Tờ Bảo Hiểm" : "Insurance Document Assistance"}
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {isVi
              ? "Cẩm nang hướng dẫn chuẩn bị giấy tờ, đọc thư từ bảo hiểm, giải thích hóa đơn y tế (Medical Bill) và giấy thông báo chi phí (EOB)."
              : "A comprehensive guide to preparing documents, reading insurer notices, and decoding Medical Bills & EOBs."}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-10">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs hover:border-blue-200 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl p-3 bg-blue-50 rounded-2xl shrink-0">{sec.icon}</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">{sec.title}</h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              {sec.desc}
            </p>
            <ul className="space-y-3">
              {sec.items.map((it, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <span className="text-[#2F5E9E] font-bold text-lg leading-none shrink-0 mt-0.5">✓</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Support hotline footer banner */}
      <section className="py-14 px-6 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {isVi ? "Bạn nhận được giấy tờ khó hiểu?" : "Received a confusing notice?"}
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            {isVi
              ? "Chụp ảnh hoặc mang giấy tờ trực tiếp đến văn phòng VietPoint. Chúng tôi luôn sẵn sàng đọc, giải thích và hỗ trợ xử lý kịp thời."
              : "Bring or email your documents to VietPoint. Our bilingual specialists will review and explain everything clearly."}
          </p>
          <a
            href="tel:14074211531"
            className="inline-block text-white font-bold px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity shadow-md"
            style={{ background: "#2F5E9E" }}
          >
            📞 {isVi ? "Hotline hỗ trợ: (+1) (407)-421-1531" : "Support Hotline: (+1) (407)-421-1531"}
          </a>
        </div>
      </section>
    </main>
  );
}
