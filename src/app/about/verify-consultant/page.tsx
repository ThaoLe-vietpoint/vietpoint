import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";
import VerifyConsultantClient from "./VerifyConsultantClient";

const DEFAULT_TIPS_EN = [
  "Always verify your agent through this official tool before providing personal information",
  "Official VietPoint agents will never ask for Social Security Numbers via text or unencrypted email",
  'All official consultants have a VietPoint-issued license ID starting with "TS-"',
  "If in doubt, call our office directly: (678) 825-3737",
];

const DEFAULT_TIPS_VI = [
  "Luôn xác minh đại lý của bạn qua công cụ chính thức này trước khi cung cấp thông tin cá nhân",
  "Đại lý VietPoint chính thức sẽ không bao giờ yêu cầu số An Sinh Xã Hội qua tin nhắn hoặc email không mã hóa",
  'Tất cả tư vấn viên chính thức đều có mã giấy phép do VietPoint cấp bắt đầu bằng "TS-"',
  "Nếu nghi ngờ, hãy gọi trực tiếp văn phòng chúng tôi: (678) 825-3737",
];

export default async function VerifyConsultantPage() {
  const supabase = await createClient();
  const lang = await getLang();
  const { data } = await supabase
    .from("page_content")
    .select("section, field, value_en, value_vi")
    .eq("page", "verify_consultant");
  const rows = data ?? [];

  const g = (
    section: string,
    field: string,
    fallbackEn = "",
    fallbackVi?: string,
  ) => {
    const row = rows.find((r) => r.section === section && r.field === field);
    if (lang === "vi")
      return row?.value_vi || row?.value_en || fallbackVi || fallbackEn;
    return row?.value_en ?? fallbackEn;
  };

  const heroTitle = g(
    "hero",
    "title",
    "Verify Official Consultant",
    "Xác Minh Tư Vấn Viên Chính Thức",
  );
  const heroSubtitle = g(
    "hero",
    "subtitle",
    "Protect yourself from fraud. Verify that your agent is an officially licensed VietPoint Insurance & Tax consultant before sharing any personal information.",
    "Bảo vệ bản thân khỏi gian lận. Xác minh rằng đại lý của bạn là tư vấn viên được VietPoint cấp phép chính thức trước khi chia sẻ thông tin cá nhân.",
  );
  const formLabel = g(
    "hero",
    "form_label",
    "Agent License ID or Full Name",
    "Mã Giấy Phép hoặc Họ Tên Đầy Đủ",
  );
  const formPlaceholder = g(
    "hero",
    "form_placeholder",
    "e.g. TS-12345 or Hung Huynh",
  );

  let tips = lang === "vi" ? DEFAULT_TIPS_VI : DEFAULT_TIPS_EN;
  const tipsRaw = g("tips", "data", "");
  if (tipsRaw) {
    try {
      tips = JSON.parse(tipsRaw);
    } catch {
      /* use default */
    }
  }

  return (
    <VerifyConsultantClient
      heroTitle={heroTitle}
      heroSubtitle={heroSubtitle}
      formLabel={formLabel}
      formPlaceholder={formPlaceholder}
      tips={tips}
    />
  );
}
