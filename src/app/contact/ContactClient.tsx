"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type SiteSettings = {
  phone: string;
  phone_e164: string;
  email: string;
  address: string;
  hours_weekday: string;
  hours_closed: string;
};

const DEFAULT_SETTINGS: SiteSettings = {
  phone: "(678) 825 3737",
  phone_e164: "+16788253737",
  email: "support@VietPointinsurance.com",
  address: "1424 N Brown Rd #450, Lawrenceville, GA 30043",
  hours_weekday: "9 AM – 7 PM",
  hours_closed: "Closed",
};

// Pre-fill messages per product
const PREFILL: Record<string, { en: string; vi: string }> = {
  iul: {
    en: "I'd like to get a free quote for IUL (Indexed Universal Life) insurance.",
    vi: "Tôi muốn nhận báo giá miễn phí cho bảo hiểm IUL (Indexed Universal Life).",
  },
  termlife: {
    en: "I'd like to get a free quote for Term Life insurance.",
    vi: "Tôi muốn nhận báo giá miễn phí cho bảo hiểm nhân thọ kỳ hạn (Term Life).",
  },
  "kid-iul": {
    en: "I'd like to get a free quote for IUL For Kids (EBTP).",
    vi: "Tôi muốn nhận báo giá miễn phí cho bảo hiểm IUL cho trẻ em (EBTP).",
  },
  "max-iul": {
    en: "I'd like to get a free quote for Max Funded IUL.",
    vi: "Tôi muốn nhận báo giá miễn phí cho Max Funded IUL.",
  },
};

const T = {
  en: {
    hero_title: "Contact VietPoint Insurance & Tax",
    hero_desc: "Please fill in all details, we will contact you within 24 hours.",
    enter_info: "Enter your information",
    full_name: "Full Name",
    phone: "Phone Number",
    dob: "Date of Birth",
    gender: "Gender",
    male: "Male",
    female: "Female",
    state_label: "State",
    select_state: "Select state",
    support_request: "Support Request",
    support_request_placeholder: "Please describe what you need assistance with...",
    submit: "Submit Request",
    sent_title: "Message Sent Successfully!",
    sent_desc: "VietPoint will contact you within 24 hours.",
    sidebar_support: "Direct Contact Information",
    consulting_hotline: "Consultation Hotline",
    support_hotline: "Customer Care Hotline",
    sidebar_hours: "Office Hours (EST Time)",
    sidebar_mon_fri: "Monday – Friday",
    sidebar_mon_fri_val: "9 AM – 6 PM",
    sidebar_sat_sun: "Saturday & Sunday",
    sidebar_closed: "Closed",
    sidebar_ready: "Our specialists are ready to listen, explain, and support you.",
    call_now: "📞 Call Now (+1) (407)-421-1531",
  },
  vi: {
    hero_title: "Liên Hệ VietPoint Insurance & Tax",
    hero_desc: "Vui lòng điền đầy đủ thông tin, chúng tôi sẽ liên hệ bạn trong vòng 24h",
    enter_info: "Nhập thông tin của bạn",
    full_name: "Họ và tên",
    phone: "Số điện thoại",
    dob: "Ngày sinh",
    gender: "Giới tính",
    male: "Nam",
    female: "Nữ",
    state_label: "Tiểu bang",
    select_state: "Chọn tiểu bang",
    support_request: "Yêu cầu hỗ trợ",
    support_request_placeholder: "Vui lòng cho biết vấn đề bạn cần tư vấn hoặc hỗ trợ...",
    submit: "Gửi thông tin",
    sent_title: "Đã gửi thành công!",
    sent_desc: "VietPoint sẽ liên hệ lại với bạn trong vòng 24 giờ.",
    sidebar_support: "Thông tin liên hệ trực tiếp",
    consulting_hotline: "Hotline tư vấn",
    support_hotline: "Hotline CSKH",
    sidebar_hours: "Giờ làm việc (EST Time)",
    sidebar_mon_fri: "Thứ Hai – Thứ Sáu",
    sidebar_mon_fri_val: "9 SA – 6 CH",
    sidebar_sat_sun: "Thứ Bảy & Chủ Nhật",
    sidebar_closed: "Đóng cửa",
    sidebar_ready: "Đội ngũ chuyên viên VietPoint luôn sẵn sàng lắng nghe và đồng hành cùng bạn.",
    call_now: "📞 Gọi ngay (+1) (407)-421-1531",
  },
};

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function ContactPageInner({ initialLang }: { initialLang: "en" | "vi" }) {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") ?? "";

  const [lang, setLang] = useState<"en" | "vi">(initialLang);
  useEffect(() => {
    const c = document.cookie
      .split(";")
      .find((x) => x.trim().startsWith("lang="));
    if (c?.includes("vi")) setLang("vi");
  }, []);
  const t = T[lang];

  const [weekdayHours, setWeekdayHours] = useState("");
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    fetch(
      `${url}/rest/v1/page_content?select=field,value_en,value_vi&page=eq.global&section=eq.hours&field=eq.weekdays`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } },
    )
      .then((r) => r.json())
      .then((rows) => {
        if (!Array.isArray(rows) || !rows[0]) return;
        const r = rows[0];
        const rawVi = (r.value_vi || "").trim();
        const rawEn = (r.value_en || "").trim();
        const val = (lang === "vi" ? (rawVi && !rawVi.includes("Chủ Nhật") ? rawVi : rawEn) : rawEn) || "";
        const m = val.match(/(\d+\s*(?:AM|SA)?\s*[-–]\s*\d+\s*(?:PM|CH)?)/i);
        if (m) {
          let formatted = m[1].trim();
          if (lang === "vi") {
            formatted = formatted
              .replace(/(\d+)\s*AM/gi, "$1 SA")
              .replace(/(\d+)\s*PM/gi, "$1 CH")
              .replace(/[-–]/, "–");
          } else {
            formatted = formatted
              .replace(/(\d+)\s*SA/gi, "$1 AM")
              .replace(/(\d+)\s*CH/gi, "$1 PM")
              .replace(/[-–]/, "–");
          }
          setWeekdayHours(formatted);
        }
      })
      .catch(() => {});
  }, [lang]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    state: "",
    supportRequest: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Pre-fill from URL product param
  useEffect(() => {
    if (!product) return;
    const msg = PREFILL[product];
    const genderParam = searchParams.get("gender");
    const stateParam = searchParams.get("state");
    const questionParam = searchParams.get("question");

    const genderVal = genderParam
      ? genderParam.charAt(0).toUpperCase() + genderParam.slice(1)
      : "";

    setForm((f) => ({
      ...f,
      gender: genderVal || f.gender,
      state: stateParam || f.state,
      supportRequest: questionParam
        ? questionParam
        : msg
          ? lang === "vi"
            ? msg.vi
            : msg.en
          : f.supportRequest,
    }));
  }, [product, lang, searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setSubmitError(
        lang === "vi"
          ? "Vui lòng nhập họ tên và số điện thoại."
          : "Please enter your name and phone number.",
      );
      return;
    }
    setSubmitting(true);
    setSubmitError("");

    const parts: string[] = [];
    if (product)
      parts.push(`${lang === "vi" ? "Sản phẩm" : "Product"}: ${product}`);
    if (form.dob)
      parts.push(`${lang === "vi" ? "Ngày sinh" : "DOB"}: ${form.dob}`);
    if (form.gender)
      parts.push(`${lang === "vi" ? "Giới tính" : "Gender"}: ${form.gender}`);
    if (form.state)
      parts.push(`${lang === "vi" ? "Tiểu bang" : "State"}: ${form.state}`);
    if (form.supportRequest)
      parts.push(`${lang === "vi" ? "Yêu cầu hỗ trợ" : "Support Request"}: ${form.supportRequest}`);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          message: parts.join(" | "),
          source: "contact_form",
        }),
      });

      if (!res.ok) {
        setSubmitError(
          lang === "vi"
            ? "Có lỗi xảy ra, vui lòng thử lại."
            : "Something went wrong. Please try again.",
        );
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitError(
        lang === "vi"
          ? "Lỗi kết nối. Vui lòng thử lại sau."
          : "Network error. Please try again later.",
      );
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      {/* Page header */}
      <section
        className="py-14 px-6 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #3a6fbf 0%, #1a3d6e 100%)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          {t.hero_title}
        </h1>
        <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto">{t.hero_desc}</p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          {submitted ? (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#2F5E9E" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8"
                  stroke="white"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t.sent_title}
              </h2>
              <p className="text-gray-500">{t.sent_desc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-bold text-gray-900 text-lg">
                {t.enter_info}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* 1. Họ và tên */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.full_name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={t.full_name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>

                {/* 2. Số điện thoại */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder={t.phone}
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>

                {/* 3. Ngày sinh */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.dob}
                  </label>
                  <input
                    type="date"
                    value={form.dob}
                    onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>

                {/* 4. Giới tính */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.gender}
                  </label>
                  <div className="flex gap-3">
                    {(["Male", "Female"] as const).map((g) => (
                      <label
                        key={g}
                        className={`flex-1 flex items-center justify-center gap-2 border rounded-xl py-3 cursor-pointer text-sm font-medium transition-all ${
                          form.gender === g
                            ? "border-[#2F5E9E] text-[#2F5E9E] bg-blue-50/60 font-semibold"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          className="sr-only"
                          onChange={() => setForm({ ...form, gender: g })}
                        />
                        {g === "Male" ? t.male : t.female}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 5. Tiểu bang */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.state_label} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  >
                    <option value="">{t.select_state}</option>
                    {states.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 6. Yêu cầu hỗ trợ */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t.support_request} <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={t.support_request_placeholder}
                  value={form.supportRequest}
                  onChange={(e) =>
                    setForm({ ...form, supportRequest: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2F5E9E] resize-none"
                />
              </div>

              {submitError && (
                <p className="text-red-500 text-sm text-center">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer shadow-md"
                style={{ background: "#2F5E9E" }}
              >
                {submitting
                  ? lang === "vi"
                    ? "Đang gửi..."
                    : "Sending..."
                  : t.submit}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Direct Contact Info */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h3 className="font-bold text-gray-900 text-base mb-2">
              {t.sidebar_support}
            </h3>

            {/* Consultation Hotline */}
            <div className="flex items-start gap-3 text-gray-700 pb-3 border-b border-gray-100">
              <span className="text-xl shrink-0 mt-0.5">📞</span>
              <div>
                <p className="text-xs font-semibold text-[#2F5E9E] uppercase tracking-wider">{t.consulting_hotline}</p>
                <a
                  href="tel:14074211531"
                  className="font-bold text-gray-900 text-base hover:text-[#2F5E9E] transition-colors"
                >
                  (+1) (407)-421-1531
                </a>
              </div>
            </div>

            {/* Customer Care Hotline */}
            <div className="flex items-start gap-3 text-gray-700 pb-3 border-b border-gray-100">
              <span className="text-xl shrink-0 mt-0.5">🎧</span>
              <div>
                <p className="text-xs font-semibold text-[#2F5E9E] uppercase tracking-wider">{t.support_hotline}</p>
                <div className="space-y-1 text-sm font-semibold text-gray-800 mt-1">
                  <a href="tel:14075766689" className="hover:text-[#2F5E9E] block">(+1) (407)-576-6689</a>
                  <a href="tel:14077144691" className="hover:text-[#2F5E9E] block">(+1) (407)-714-4691</a>
                  <a href="tel:16893077129" className="hover:text-[#2F5E9E] block">(+1) (689)-307-7129</a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 text-gray-700 pb-3 border-b border-gray-100">
              <span className="text-xl shrink-0 mt-0.5">✉️</span>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <a
                  href="mailto:servicing@vietpointservices.com"
                  className="font-semibold text-sm hover:text-[#2F5E9E] break-all"
                >
                  servicing@vietpointservices.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-gray-700">
              <span className="text-xl shrink-0 mt-0.5">📍</span>
              <div>
                <p className="text-xs text-gray-400">Address</p>
                <p className="font-semibold text-sm leading-relaxed">
                  1805 W Colonial Dr Suite B2 Orlando, FL 32804
                </p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">{t.sidebar_hours}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span>{t.sidebar_mon_fri}</span>
                <span className="font-semibold text-gray-900">{weekdayHours || t.sidebar_mon_fri_val}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>{t.sidebar_sat_sun}</span>
                <span className="font-semibold text-red-500">
                  {t.sidebar_closed}
                </span>
              </div>
            </div>
          </div>

          {/* Ready & Call Now */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              {t.sidebar_ready}
            </p>
            <a
              href="tel:14074211531"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity shadow-md"
              style={{ background: "#2F5E9E" }}
            >
              {t.call_now}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ContactClient({ initialLang }: { initialLang: "en" | "vi" }) {
  return (
    <Suspense fallback={null}>
      <ContactPageInner initialLang={initialLang} />
    </Suspense>
  );
}
