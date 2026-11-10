import { createClient } from "@/utils/supabase/server";

export type GlobalContact = {
  phone: string;
  phoneTel: string;
  hotlineConsulting: string;
  hotlineConsultingTel: string;
  hotlineSupport: string;
  supportPhones: string[];
  fax: string;
  email: string;
  address: string;
  hoursWeekdays: string;
  hoursWeekend: string;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
};

export function toTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length >= 10) return `tel:+1${digits.slice(-10)}`;
  return `tel:${phone}`;
}

export async function getGlobalContact(
  lang: "en" | "vi" = "en",
): Promise<GlobalContact> {
  const supabase = await createClient();
  const { data: rows } = await supabase
    .from("page_content")
    .select("section, field, value_en, value_vi")
    .eq("page", "global");

  const g = (section: string, field: string, fallback: string) => {
    const row = rows?.find((r) => r.section === section && r.field === field);
    const val = lang === "vi" ? row?.value_vi || row?.value_en : row?.value_en;
    return val && val.trim() ? val.trim() : fallback;
  };

  const consultingPhone = "(+1) (407)-421-1531";
  const supportPhonesList = [
    "(+1) (407)-576-6689",
    "(+1) (407)-714-4691",
    "(+1) (689)-307-7129",
  ];
  const hotlineSupportStr = supportPhonesList.join(" | ");

  const rawWeekdaysEn =
    rows?.find((r) => r.section === "hours" && r.field === "weekdays")?.value_en?.trim() ||
    "Monday – Friday: 9AM-6PM";
  const rawWeekdaysVi =
    rows?.find((r) => r.section === "hours" && r.field === "weekdays")?.value_vi?.trim();

  const rawWeekendEn =
    rows?.find((r) => r.section === "hours" && r.field === "weekend")?.value_en?.trim() ||
    "Saturday & Sunday: CLOSED";
  const rawWeekendVi =
    rows?.find((r) => r.section === "hours" && r.field === "weekend")?.value_vi?.trim();

  const toViWeekdays = (en: string, vi?: string) => {
    if (vi && !vi.includes("Chủ Nhật")) {
      return vi.replace(/(\d+\s*SA)\s*[-–]?\s*(\d+\s*CH)/i, "$1 – $2");
    }
    return en
      .replace(/Monday\s*[-–]\s*Friday/i, "Thứ Hai – Thứ Sáu")
      .replace(/Sunday\s*[-–]\s*Thursday/i, "Chủ Nhật – Thứ Năm")
      .replace(/(\d+)\s*AM/gi, "$1 SA")
      .replace(/(\d+)\s*PM/gi, "$1 CH")
      .replace(/(\d+\s*SA)\s*[-–]?\s*(\d+\s*CH)/i, "$1 – $2")
      .replace(/CLOSED/gi, "Đóng cửa")
      .replace(/Closed/gi, "Đóng cửa")
      .trim();
  };

  const toEnWeekdays = (en: string) => {
    return en
      .replace(/Monday\s*[-–]\s*Friday/i, "Monday – Friday")
      .replace(/Sunday\s*[-–]\s*Thursday/i, "Sunday – Thursday")
      .replace(/(\d+)\s*AM/gi, "$1 AM")
      .replace(/(\d+)\s*PM/gi, "$1 PM")
      .replace(/(\d+\s*AM)\s*[-–]?\s*(\d+\s*PM)/i, "$1 – $2")
      .trim();
  };

  const toViWeekend = (en: string, vi?: string) => {
    if (vi && !vi.includes("Thứ Sáu")) return vi;
    return en
      .replace(/Saturday\s*&\s*Sunday/i, "Thứ Bảy & Chủ Nhật")
      .replace(/Friday\s*&\s*Saturday/i, "Thứ Sáu & Thứ Bảy")
      .replace(/CLOSED/gi, "Đóng cửa")
      .replace(/Closed/gi, "Đóng cửa")
      .replace(/(\d+)\s*AM/gi, "$1 SA")
      .replace(/(\d+)\s*PM/gi, "$1 CH")
      .replace(/[-–]/, "–")
      .trim();
  };

  const toEnWeekend = (en: string) => {
    return en
      .replace(/Saturday\s*&\s*Sunday/i, "Saturday – Sunday")
      .replace(/CLOSED/gi, "Closed")
      .replace(/[-–]/, "–")
      .trim();
  };

  const hoursWeekdays =
    lang === "vi" ? toViWeekdays(rawWeekdaysEn, rawWeekdaysVi) : toEnWeekdays(rawWeekdaysEn);
  const hoursWeekend =
    lang === "vi" ? toViWeekend(rawWeekendEn, rawWeekendVi) : toEnWeekend(rawWeekendEn);

  return {
    phone: consultingPhone,
    phoneTel: "tel:14074211531",
    hotlineConsulting: consultingPhone,
    hotlineConsultingTel: "tel:14074211531",
    hotlineSupport: hotlineSupportStr,
    supportPhones: supportPhonesList,
    fax: g("contact", "fax", ""),
    email: g("contact", "email", "servicing@vietpointservices.com"),
    address: g(
      "contact",
      "address",
      "1805 W Colonial Dr Suite B2 Orlando, FL 32804",
    ),
    hoursWeekdays,
    hoursWeekend,
    facebook: g(
      "social",
      "facebook",
      "https://www.facebook.com/profile.php?id=61592099226405",
    ),
    instagram: g(
      "social",
      "instagram",
      "https://www.instagram.com/vietpoint.services/",
    ),
    twitter: g("social", "twitter", "#"),
    youtube: g("social", "youtube", "#"),
  };
}
