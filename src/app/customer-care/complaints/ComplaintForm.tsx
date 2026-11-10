"use client";
import { useState } from "react";

export default function ComplaintForm({ lang = "vi" }: { lang?: "en" | "vi" }) {
  const isVi = lang === "vi";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    if (!name.trim() || !phone.trim() || !issue.trim()) {
      setErrorMsg(
        isVi
          ? "Vui lòng điền đầy đủ họ tên, số điện thoại và mô tả vấn đề gặp phải."
          : "Please fill out your name, phone number, and issue details.",
      );
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: `[KHIẾU NẠI & GIẢI QUYẾT VẤN ĐỀ] ${issue.trim()}`,
          source: "complaint_resolution_form",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data?.error ||
            (isVi
              ? "Không thể gửi yêu cầu. Vui lòng kiểm tra lại số điện thoại."
              : "Could not send request. Please check your phone number."),
        );
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setErrorMsg(
        isVi
          ? "Lỗi kết nối. Vui lòng thử lại sau."
          : "Network error. Please try again later.",
      );
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
          ✓
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          {isVi ? "Yêu cầu đã được gửi thành công!" : "Request Sent Successfully!"}
        </h3>
        <p className="text-emerald-800 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          {isVi
            ? "VietPoint sẽ sớm liên hệ lại để hỗ trợ bạn. Đội ngũ chuyên viên luôn sẵn sàng lắng nghe, giải đáp thắc mắc và đồng hành cùng bạn trên từng bước."
            : "VietPoint will contact you shortly to assist you. Our dedicated team is always ready to listen, resolve your concerns, and support you every step of the way."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div>
        <label className="block text-sm font-bold text-gray-800 mb-1.5">
          {isVi ? "Họ và tên" : "Full Name"} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder={isVi ? "Nhập họ và tên của bạn" : "Enter your full name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2F5E9E] focus:ring-2 focus:ring-[#2F5E9E]/20 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-800 mb-1.5">
          {isVi ? "Số điện thoại" : "Phone Number"} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          placeholder={isVi ? "Nhập số điện thoại liên hệ" : "Enter your phone number"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2F5E9E] focus:ring-2 focus:ring-[#2F5E9E]/20 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-800 mb-1.5">
          {isVi ? "Vấn đề gặp phải" : "Issue Encountered"}{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder={
            isVi
              ? "Mô tả chi tiết sai sót trên hóa đơn, yêu cầu bồi thường bị từ chối hoặc thắc mắc cần xem xét lại..."
              : "Describe billing errors, denied claims, or matters requiring review by your insurer..."
          }
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2F5E9E] focus:ring-2 focus:ring-[#2F5E9E]/20 transition resize-none"
        />
      </div>

      {errorMsg && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
          {errorMsg}
        </p>
      )}

      {/* Cam kết của VietPoint */}
      <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 text-xs md:text-sm text-gray-700 leading-relaxed italic">
        {isVi
          ? "“VietPoint sẽ sớm liên hệ lại để hỗ trợ bạn. Đội ngũ chuyên viên luôn sẵn sàng lắng nghe, giải đáp thắc mắc và đồng hành cùng bạn trên từng bước.”"
          : "“VietPoint will contact you shortly to assist you. Our dedicated team is always ready to listen, resolve your concerns, and support you every step of the way.”"}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 text-white font-bold rounded-xl text-sm transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer shadow-md"
        style={{ background: "#2F5E9E" }}
      >
        {loading
          ? isVi
            ? "Đang gửi yêu cầu..."
            : "Sending..."
          : isVi
            ? "Gửi yêu cầu giải quyết"
            : "Submit Resolution Request"}
      </button>
    </form>
  );
}
