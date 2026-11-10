import Link from "next/link";
import type { Metadata } from "next";
import { getLang } from "@/utils/getLang";
import ComplaintForm from "./ComplaintForm";

export const metadata: Metadata = {
  title: "Complaints & Issue Resolution - VietPoint Insurance",
  description: "Assistance with billing errors, denied claims, and insurer reviews.",
};

export default async function ComplaintsPage() {
  const lang = await getLang();
  const isVi = lang === "vi";

  return (
    <main className="min-h-screen bg-slate-50">
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
            {isVi ? "Khiếu Nại & Giải Quyết Vấn Đề" : "Complaints & Issue Resolution"}
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {isVi
              ? "VietPoint luôn bảo vệ quyền lợi tối đa của bạn khi xảy ra sai sót trên hóa đơn, từ chối quyền lợi hoặc cần khiếu nại trực tiếp với hãng bảo hiểm."
              : "We advocate for you when billing errors occur, benefits are denied, or insurance appeals are needed."}
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Information & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-5">
              <h2 className="text-xl font-bold text-gray-900">
                {isVi ? "Chúng tôi hỗ trợ bạn giải quyết:" : "We assist you in resolving:"}
              </h2>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    !
                  </span>
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5">
                      {isVi ? "Hóa đơn y tế có sai sót" : "Medical billing errors"}
                    </strong>
                    <span className="text-gray-500 text-xs leading-relaxed">
                      {isVi
                        ? "Bị tính phí cho dịch vụ không sử dụng, tính sai mã bảo hiểm hoặc không áp dụng mức chiết khấu của hãng."
                        : "Charged for services not received, incorrect billing codes, or missing network discounts."}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5">
                      {isVi ? "Quyền lợi bảo hiểm bị từ chối" : "Denied insurance claims"}
                    </strong>
                    <span className="text-gray-500 text-xs leading-relaxed">
                      {isVi
                        ? "Hãng từ chối bồi thường dịch vụ cấp cứu, thủ thuật cần thiết hoặc từ chối chi trả đơn thuốc."
                        : "Insurer denied emergency services, necessary procedures, or prescription medications."}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ⚖️
                  </span>
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5">
                      {isVi ? "Yêu cầu xem xét lại (Appeal / Grievance)" : "Appeals & Grievances"}
                    </strong>
                    <span className="text-gray-500 text-xs leading-relaxed">
                      {isVi
                        ? "Soạn hồ sơ khiếu nại chính thức kèm ý kiến bác sĩ để yêu cầu hãng bảo hiểm xét duyệt lại."
                        : "Preparing formal appeal documentation with physician letters for insurer re-evaluation."}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hotline Box */}
            <div className="bg-gradient-to-br from-[#2F5E9E] to-[#1a3d6e] text-white rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-md">
              <span className="text-3xl">📞</span>
              <h3 className="text-xl font-extrabold">
                {isVi ? "Cần hỗ trợ khẩn cấp?" : "Need Urgent Assistance?"}
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                {isVi
                  ? "Hãy gọi trực tiếp cho chúng tôi để được tư vấn xử lý hồ sơ nhanh nhất."
                  : "Call our direct hotline for immediate assistance with urgent claims."}
              </p>
              <a
                href="tel:14074211531"
                className="inline-block bg-white text-[#2F5E9E] font-bold px-8 py-3.5 rounded-full text-sm hover:bg-slate-100 transition-colors shadow-sm"
              >
                📞 (+1) (407)-421-1531
              </a>
            </div>
          </div>

          {/* Right Column: Complaint Form */}
          <div className="lg:col-span-7">
            <ComplaintForm lang={lang} />
          </div>
        </div>
      </section>
    </main>
  );
}