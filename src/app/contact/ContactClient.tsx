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
    hero_desc:
      "Please leave your full information in the form below, we will contact you to support you as soon as possible.",
    have_joined: "Have you joined VietPoint Insurance & Tax yet?",
    yes: "Yes",
    no: "No",
    enter_info: "Enter your information",
    full_name: "Full Name",
    policy: "Your Insurance Policy Number",
    phone: "Phone Number",
    dob: "Date of Birth",
    email: "Email",
    gender: "Gender",
    male: "Male",
    female: "Female",
    green_card: "Green Card / State ID Number",
    state_label: "State of Residence",
    select_state: "Select state",
    support_request: "Support Request",
    select_request: "Select your request",
    requests: [
      "Insurance Product Consultation",
      "Information Support",
      "Billing Address Update",
      "Feedback / Complaint",
    ],
    question: "Your Question",
    agree_text:
      "I confirm that I have read and agree to VietPoint Insurance's Terms of Use, Privacy Commitment, and Personal Data Protection Policy.",
    submit: "Submit",
    sent_title: "Message Sent!",
    sent_desc: "We will contact you as soon as possible.",
    sidebar_support: "For support and advice",
    sidebar_hours: "Office Hours (Eastern Time)",
    sidebar_sun_thu: "Sunday – Thursday",
    sidebar_fri_sat: "Friday & Saturday",
    sidebar_closed: "Closed",
    sidebar_dst: "Follow the U.S. daylight saving time (DST) rules.",
    sidebar_ready: "Ready to answer all customer questions and concerns.",
    call_now: "📞 Call Now",
  },
  vi: {
    hero_title: "Liên Hệ VietPoint Insurance & Tax",
    hero_desc:
      "Vui lòng điền đầy đủ thông tin vào biểu mẫu bên dưới, chúng tôi sẽ liên hệ hỗ trợ bạn sớm nhất có thể.",
    have_joined: "Bạn đã tham gia VietPoint Insurance & Tax chưa?",
    yes: "Rồi",
    no: "Chưa",
    enter_info: "Nhập thông tin của bạn",
    full_name: "Họ và tên",
    policy: "Số hợp đồng bảo hiểm của bạn",
    phone: "Số điện thoại",
    dob: "Ngày sinh",
    email: "Email",
    gender: "Giới tính",
    male: "Nam",
    female: "Nữ",
    green_card: "Số Green Card / State ID",
    state_label: "Tiểu bang cư trú",
    select_state: "Chọn tiểu bang",
    support_request: "Yêu cầu hỗ trợ",
    select_request: "Chọn yêu cầu của bạn",
    requests: [
      "Tư vấn sản phẩm bảo hiểm",
      "Hỗ trợ thông tin",
      "Cập nhật địa chỉ thanh toán",
      "Phản hồi / Khiếu nại",
    ],
    question: "Câu hỏi của bạn",
    agree_text:
      "Tôi xác nhận đã đọc và đồng ý với Điều khoản sử dụng, Cam kết bảo mật và Chính sách bảo vệ dữ liệu cá nhân của VietPoint Insurance.",
    submit: "Gửi",
    sent_title: "Đã gửi thành công!",
    sent_desc: "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
    sidebar_support: "Để được hỗ trợ và tư vấn",
    sidebar_hours: "Giờ làm việc (Giờ Đông Mỹ)",
    sidebar_sun_thu: "Chủ nhật – Thứ năm",
    sidebar_fri_sat: "Thứ sáu & Thứ bảy",
    sidebar_closed: "Đóng cửa",
    sidebar_dst: "Theo quy định giờ mùa hè của Hoa Kỳ (DST).",
    sidebar_ready: "Sẵn sàng giải đáp mọi thắc mắc và câu hỏi của khách hàng.",
    call_now: "📞 Gọi ngay",
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

  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    fetch(`${url}/rest/v1/site_settings?select=key,value`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
    })
      .then((r) => r.json())
      .then((data: { key: string; value: string }[]) => {
        if (!Array.isArray(data)) return;
        // phone/email/address come from page_content (see effect below)
        const skip = ["phone", "phone_e164", "email", "address"];
        const map = Object.fromEntries(
          data.filter((r) => !skip.includes(r.key)).map((r) => [r.key, r.value]),
        );
        setSettings((prev) => ({ ...prev, ...map }));
      })
      .catch(() => {});
  }, []);

  // Phone / email / address: single source of truth = admin "Liên hệ & Footer"
  // (page_content: global/contact) — same data the footer uses.
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    fetch(
      `${url}/rest/v1/page_content?select=field,value_en,value_vi&page=eq.global&section=eq.contact&field=in.(phone,email,address)`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } },
    )
      .then((r) => r.json())
      .then((rows: { field: string; value_en: string; value_vi: string }[]) => {
        if (!Array.isArray(rows)) return;
        const next: Partial<SiteSettings> = {};
        for (const r of rows) {
          const v = ((lang === "vi" ? r.value_vi || r.value_en : r.value_en) ?? "")
            .replace(/\s*\n\s*/g, ", ")
            .trim();
          if (!v) continue;
          if (r.field === "phone") {
            next.phone = v;
            const digits = v.replace(/\D/g, "");
            if (digits.length >= 10) next.phone_e164 = `+1${digits.slice(-10)}`;
          } else if (r.field === "email") next.email = v;
          else if (r.field === "address") next.address = v;
        }
        setSettings((prev) => ({ ...prev, ...next }));
      })
      .catch(() => {});
  }, [lang]);
  const [joined, setJoined] = useState<"yes" | "no" | null>(null);
  const [form, setForm] = useState({
    name: "",
    policy: "",
    phone: "",
    dob: "",
    email: "",
    gender: "",
    greenCard: "",
    state: "",
    request: "",
    question: "",
    agree: false,
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

    // Capitalize gender: "male" → "Male"
    const genderVal = genderParam
      ? genderParam.charAt(0).toUpperCase() + genderParam.slice(1)
      : "";

    setJoined("no");
    setForm((f) => ({
      ...f,
      gender: genderVal || f.gender,
      state: stateParam || f.state,
      request: t.requests[0],
      question: questionParam
        ? questionParam
        : msg
          ? lang === "vi"
            ? msg.vi
            : msg.en
          : f.question,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, lang]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.agree) return;
    setSubmitting(true);
    setSubmitError("");

    // Build a rich message string from all form fields
    const parts: string[] = [];
    if (joined)
      parts.push(
        `${lang === "vi" ? "Đã tham gia" : "Joined"}: ${joined === "yes" ? (lang === "vi" ? "Rồi" : "Yes") : lang === "vi" ? "Chưa" : "No"}`,
      );
    if (form.request)
      parts.push(`${lang === "vi" ? "Yêu cầu" : "Request"}: ${form.request}`);
    if (form.question)
      parts.push(`${lang === "vi" ? "Câu hỏi" : "Question"}: ${form.question}`);
    if (form.dob)
      parts.push(`${lang === "vi" ? "Ngày sinh" : "DOB"}: ${form.dob}`);
    if (form.gender)
      parts.push(`${lang === "vi" ? "Giới tính" : "Gender"}: ${form.gender}`);
    if (form.state)
      parts.push(`${lang === "vi" ? "Tiểu bang" : "State"}: ${form.state}`);
    if (form.policy)
      parts.push(`${lang === "vi" ? "Hợp đồng" : "Policy"}: ${form.policy}`);
    if (form.greenCard) parts.push(`Green Card: ${form.greenCard}`);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
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
        <p className="text-white/85 text-lg max-w-xl mx-auto">{t.hero_desc}</p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Join status */}
              <div>
                <p className="font-semibold text-gray-800 mb-3">
                  {t.have_joined}
                </p>
                <div className="flex gap-3">
                  {(["yes", "no"] as const).map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setJoined(val)}
                      className={`px-6 py-2.5 rounded-lg border font-medium text-sm transition-all ${joined === val ? "border-[#2F5E9E] text-[#2F5E9E] bg-red-50" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
                    >
                      {val === "yes" ? t.yes : t.no}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 text-lg border-t pt-4">
                {t.enter_info}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.full_name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.policy}
                  </label>
                  <input
                    type="text"
                    value={form.policy}
                    onChange={(e) =>
                      setForm({ ...form, policy: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.dob}
                  </label>
                  <input
                    type="date"
                    value={form.dob}
                    onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.gender}
                  </label>
                  <div className="flex gap-3 mt-1">
                    {(["Male", "Female"] as const).map((g) => (
                      <label
                        key={g}
                        className={`flex-1 flex items-center justify-center gap-2 border rounded-lg py-2.5 cursor-pointer text-sm transition-all ${form.gender === g ? "border-[#2F5E9E] text-[#2F5E9E] bg-red-50" : "border-gray-200 text-gray-600"}`}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.green_card}
                  </label>
                  <input
                    type="text"
                    value={form.greenCard}
                    onChange={(e) =>
                      setForm({ ...form, greenCard: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.state_label} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.support_request} <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={form.request}
                  onChange={(e) =>
                    setForm({ ...form, request: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E]"
                >
                  <option value="">{t.select_request}</option>
                  {t.requests.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.question}
                </label>
                <textarea
                  rows={4}
                  value={form.question}
                  onChange={(e) =>
                    setForm({ ...form, question: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2F5E9E] resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) =>
                    setForm({ ...form, agree: e.target.checked })
                  }
                  className="mt-1 accent-[#2F5E9E]"
                  required
                />
                <span className="text-sm text-gray-600">{t.agree_text}</span>
              </label>

              {submitError && (
                <p className="text-red-500 text-sm text-center">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4">
              {t.sidebar_support}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${settings.phone_e164}`}
                className="flex items-center gap-3 text-gray-700 hover:text-[#2F5E9E] transition-colors"
              >
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="font-semibold">{settings.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${settings.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-[#2F5E9E] transition-colors"
              >
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-semibold text-sm">{settings.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-gray-700">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="font-semibold text-sm">{settings.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-3">{t.sidebar_hours}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>{t.sidebar_sun_thu}</span>
                <span className="font-semibold">{settings.hours_weekday}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.sidebar_fri_sat}</span>
                <span className="font-semibold text-red-500">
                  {settings.hours_closed === "Closed"
                    ? t.sidebar_closed
                    : settings.hours_closed}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">{t.sidebar_dst}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 font-medium">
              {t.sidebar_ready}
            </p>
            <a
              href={`tel:${settings.phone_e164}`}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
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
