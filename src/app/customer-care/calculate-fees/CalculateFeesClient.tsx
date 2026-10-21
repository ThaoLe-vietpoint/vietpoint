"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

export default function CalculateFeesClient({ initialLang }: { initialLang: "en" | "vi" }) {
  const [lang, setLang] = useState<"en" | "vi">(initialLang);
  useEffect(() => {
    const c = document.cookie
      .split(";")
      .find((x) => x.trim().startsWith("lang="));
    if (c?.includes("vi")) setLang("vi");
  }, []);
  const T = {
    en: {
      hero_by: "Customer Care",
      hero_h: "Calculate Insurance Fees",
      hero_desc:
        "Get an instant estimate for your insurance premium. Free, no obligation, just enter your details below.",
      form_h: "Get Your Free Quote",
      age: "Age",
      age_ph: "Select age",
      gender: "Gender",
      gender_ph: "Select",
      male: "Male",
      female: "Female",
      health: "Health Status",
      health_ph: "Select",
      excellent: "Excellent",
      good: "Good",
      average: "Average",
      poor: "Below Average",
      coverage: "Coverage Amount",
      coverage_ph: "Select coverage",
      coverage_more: "More than $1,000,000",
      term: "Insurance Type & Term",
      term_ph: "Select type",
      term10: "Term Life — 10 years",
      term20: "Term Life — 20 years",
      term30: "Term Life — 30 years",
      state: "State of Residence",
      state_ph: "Select state",
      submit: "Get My Free Quote",
      note: "For an accurate quote, our agent will call you within 24 hours to discuss your specific situation.",
    },
    vi: {
      hero_by: "Chăm Sóc Khách Hàng",
      hero_h: "Tính Phí Bảo Hiểm",
      hero_desc:
        "Nhận báo giá phí bảo hiểm ngay lập tức. Miễn phí, không ràng buộc, chỉ cần nhập thông tin bên dưới.",
      form_h: "Nhận Báo Giá Miễn Phí",
      age: "Tuổi",
      age_ph: "Chọn tuổi",
      gender: "Giới Tính",
      gender_ph: "Chọn",
      male: "Nam",
      female: "Nữ",
      health: "Tình Trạng Sức Khỏe",
      health_ph: "Chọn",
      excellent: "Rất tốt",
      good: "Tốt",
      average: "Trung bình",
      poor: "Dưới trung bình",
      coverage: "Mức Bảo Hiểm",
      coverage_ph: "Chọn mức bảo hiểm",
      coverage_more: "Hơn $1,000,000",
      term: "Loại & Kỳ Hạn Bảo Hiểm",
      term_ph: "Chọn loại",
      term10: "Bảo Hiểm Kỳ Hạn — 10 năm",
      term20: "Bảo Hiểm Kỳ Hạn — 20 năm",
      term30: "Bảo Hiểm Kỳ Hạn — 30 năm",
      state: "Tiểu Bang Cư Trú",
      state_ph: "Chọn tiểu bang",
      submit: "Nhận Báo Giá Của Tôi",
      note: "Dề có báo giá chính xác, chuyên viên sẽ gọi điện cho bạn trong vòng 24 giờ để thảo luận tình huống cụ thể.",
    },
  };
  const t = T[lang];
  const router = useRouter();
  const [form, setForm] = useState({
    age: "",
    gender: "",
    health: "",
    coverage: "",
    term: "",
    state: "",
  });

  const termToProduct: Record<string, string> = {
    term10: "termlife",
    term20: "termlife",
    term30: "termlife",
    iul: "iul",
    maxfunded: "max-iul",
  };

  const termLabels: Record<string, string> = {
    term10: t.term10,
    term20: t.term20,
    term30: t.term30,
    iul: "IUL Secrets — Lifetime",
    maxfunded: "Max Funded IUL",
  };

  const healthLabels: Record<string, string> = {
    excellent: t.excellent,
    good: t.good,
    average: t.average,
    poor: t.poor,
  };

  function handleSubmit() {
    const p = new URLSearchParams();
    p.set("product", termToProduct[form.term] ?? "general");
    if (form.gender) p.set("gender", form.gender);
    if (form.state) p.set("state", form.state);
    const parts: string[] = [];
    if (form.age)
      parts.push(lang === "vi" ? `Tuổi: ${form.age}` : `Age: ${form.age}`);
    if (form.gender)
      parts.push(
        lang === "vi"
          ? `Giới tính: ${form.gender === "male" ? "Nam" : "Nữ"}`
          : `Gender: ${form.gender === "male" ? "Male" : "Female"}`,
      );
    if (form.health)
      parts.push(
        lang === "vi"
          ? `Sức khỏe: ${healthLabels[form.health]}`
          : `Health: ${healthLabels[form.health]}`,
      );
    if (form.coverage)
      parts.push(
        lang === "vi"
          ? `Mức bảo hiểm: ${form.coverage === "more" ? ">$1,000,000" : form.coverage}`
          : `Coverage: ${form.coverage === "more" ? ">$1,000,000" : form.coverage}`,
      );
    if (form.term)
      parts.push(
        lang === "vi"
          ? `Loại: ${termLabels[form.term]}`
          : `Type: ${termLabels[form.term]}`,
      );
    if (form.state)
      parts.push(
        lang === "vi" ? `Tiểu bang: ${form.state}` : `State: ${form.state}`,
      );
    if (parts.length > 0) {
      const intro =
        lang === "vi"
          ? "Tôi muốn nhận báo giá miễn phí. Thông tin: "
          : "I'd like to get a free insurance quote. Details: ";
      p.set("question", intro + parts.join(", ") + ".");
    }
    router.push(`/contact?${p.toString()}`);
  }

  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-80 flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            {t.hero_by}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">{t.hero_h}</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            {t.hero_desc}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.form_h}</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.age}
                  </label>
                  <select
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  >
                    <option value="">{t.age_ph}</option>
                    {Array.from({ length: 70 }, (_, i) => i + 18).map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.gender}
                  </label>
                  <select
                    value={form.gender}
                    onChange={(e) =>
                      setForm({ ...form, gender: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                  >
                    <option value="">{t.gender_ph}</option>
                    <option value="male">{t.male}</option>
                    <option value="female">{t.female}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.health}
                </label>
                <select
                  value={form.health}
                  onChange={(e) => setForm({ ...form, health: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">{t.health_ph}</option>
                  <option value="excellent">{t.excellent}</option>
                  <option value="good">{t.good}</option>
                  <option value="average">{t.average}</option>
                  <option value="poor">{t.poor}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.coverage}
                </label>
                <select
                  value={form.coverage}
                  onChange={(e) =>
                    setForm({ ...form, coverage: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">{t.coverage_ph}</option>
                  {[
                    "$100,000",
                    "$200,000",
                    "$300,000",
                    "$500,000",
                    "$750,000",
                    "$1,000,000",
                  ].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="more">{t.coverage_more}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.term}
                </label>
                <select
                  value={form.term}
                  onChange={(e) => setForm({ ...form, term: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">{t.term_ph}</option>
                  <option value="term10">{t.term10}</option>
                  <option value="term20">{t.term20}</option>
                  <option value="term30">{t.term30}</option>
                  <option value="iul">IUL Secrets — Lifetime</option>
                  <option value="maxfunded">Max Funded IUL</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.state}
                </label>
                <select
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                >
                  <option value="">{t.state_ph}</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleSubmit}
                className="block w-full text-center text-white font-bold py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                style={{ background: "#2F5E9E" }}
              >
                {t.submit}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">{t.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
