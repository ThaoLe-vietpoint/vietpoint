"use client";
import { useState } from "react";

const T = {
  en: {
    age: "Age",
    savings: "Savings/mo",
    protect: "Protect amount",
    select: "Select",
    fullName: "Full name",
    phone: "Phone",
    email: "Email",
    submit: "Get Quote and Request Direct Consulting Support",
    sending: "Sending...",
  },
  vi: {
    age: "Tuổi",
    savings: "Tiết kiệm/tháng",
    protect: "Số tiền bảo vệ",
    select: "Chọn",
    fullName: "Họ và tên",
    phone: "Điện thoại",
    email: "Email",
    submit: "Nhận báo giá và tư vấn trực tiếp",
    sending: "Đang gửi...",
  },
};

export default function IULQuoteForm({ lang = "en" }: { lang?: "en" | "vi" }) {
  const t = T[lang];
  const [quoteForm, setQuoteForm] = useState({
    age: "",
    savings: "",
    protect: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    if (!quoteForm.name.trim() || !quoteForm.phone.trim()) {
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
      if (quoteForm.age) parts.push(`Age: ${quoteForm.age}`);
      if (quoteForm.savings) parts.push(`Savings/mo: ${quoteForm.savings}`);
      if (quoteForm.protect) parts.push(`Protect: ${quoteForm.protect}`);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quoteForm.name,
          phone: quoteForm.phone,
          email: quoteForm.email,
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

  const FIELDS: [string, string, string[]][] = [
    [t.age, "age", ["<18", "19-24", "25-34", "35-44", "45-54", "55+"]],
    [
      t.savings,
      "savings",
      ["$1-5k", "$5-10k", "$10-15k", "$15-20k", "$20-25k", "$25k+"],
    ],
    [t.protect, "protect", ["$100K", "$200K", "$300K", "$500K", "$1M", ">$1M"]],
  ];

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
    <div className="bg-white/10 rounded-2xl p-8 text-left space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {FIELDS.map(([label, key, opts]) => (
          <div key={key}>
            <p className="text-xs text-white/70 mb-1">{label}</p>
            <select
              value={quoteForm[key as keyof typeof quoteForm]}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, [key]: e.target.value })
              }
              className="w-full bg-white/20 border border-white/30 rounded-lg px-2 py-2 text-white text-sm focus:outline-none"
            >
              <option value="">{t.select}</option>
              {opts.map((o) => (
                <option key={o} value={o} className="text-gray-900">
                  {o}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder={t.fullName}
        value={quoteForm.name}
        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
      />
      <input
        type="tel"
        placeholder={t.phone}
        value={quoteForm.phone}
        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
      />
      <input
        type="email"
        placeholder={t.email}
        value={quoteForm.email}
        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none"
      />
      {errorMsg && (
        <p className="text-xs text-red-300 bg-red-500/20 border border-red-400/30 rounded-lg px-3 py-2">
          {errorMsg}
        </p>
      )}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3.5 font-bold rounded-xl text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
        style={{ background: "#2F5E9E" }}
      >
        {loading ? t.sending : t.submit}
      </button>
    </div>
  );
}
