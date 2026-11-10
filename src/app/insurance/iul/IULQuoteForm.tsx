"use client";
import { useState } from "react";

const T = {
  en: {
    fullName: "Full name",
    phone: "Phone number",
    state: "State",
    statePlaceholder: "e.g. GA, CA, TX...",
    supportRequest: "Support request / Notes",
    submit: "Get Quote and Request Direct Consulting Support",
    sending: "Sending...",
  },
  vi: {
    fullName: "Họ và tên",
    phone: "Số điện thoại",
    state: "Tiểu bang",
    statePlaceholder: "Ví dụ: GA, CA, TX...",
    supportRequest: "Yêu cầu hỗ trợ",
    submit: "Nhận báo giá và tư vấn trực tiếp",
    sending: "Đang gửi...",
  },
};

export default function IULQuoteForm({ lang = "en" }: { lang?: "en" | "vi" }) {
  const t = T[lang];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [supportRequest, setSupportRequest] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    if (!name.trim() || !phone.trim()) {
      setErrorMsg(
        lang === "vi"
          ? "Vui lòng nhập họ tên và số điện thoại."
          : "Please enter your full name and phone number.",
      );
      return;
    }
    setLoading(true);
    try {
      const parts: string[] = [];
      if (state.trim()) parts.push(`Tiểu bang / State: ${state.trim()}`);
      if (supportRequest.trim()) parts.push(`Yêu cầu hỗ trợ: ${supportRequest.trim()}`);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: parts.join(" | "),
          source: "medicare_quote_form",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data?.error ||
            (lang === "vi"
              ? "Không thể gửi yêu cầu. Vui lòng kiểm tra lại số điện thoại."
              : "Could not send request. Please check your phone number."),
        );
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setErrorMsg(
        lang === "vi"
          ? "Lỗi kết nối. Vui lòng thử lại."
          : "Network error. Please try again.",
      );
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-white/10 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-white font-bold text-lg">
          {lang === "vi" ? "Cảm ơn bạn!" : "Thank you!"}
        </p>
        <p className="text-white/70 text-sm mt-1">
          {lang === "vi"
            ? "Chúng tôi sẽ liên hệ bạn trong vòng 24 giờ."
            : "Our agent will contact you within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 rounded-2xl p-8 text-left space-y-4">
      <div>
        <label className="block text-xs font-semibold text-white/80 mb-1">
          {t.fullName} <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder={t.fullName}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/80 mb-1">
          {t.phone} <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          placeholder={t.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/80 mb-1">
          {t.state}
        </label>
        <input
          type="text"
          placeholder={t.statePlaceholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/80 mb-1">
          {t.supportRequest}
        </label>
        <textarea
          rows={3}
          placeholder={t.supportRequest}
          value={supportRequest}
          onChange={(e) => setSupportRequest(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50 resize-none"
        />
      </div>

      {errorMsg && (
        <p className="text-xs text-red-300 bg-red-500/20 border border-red-400/30 rounded-lg px-3 py-2">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 font-bold rounded-xl text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
        style={{ background: "#2F5E9E" }}
      >
        {loading ? t.sending : t.submit}
      </button>
    </form>
  );
}
