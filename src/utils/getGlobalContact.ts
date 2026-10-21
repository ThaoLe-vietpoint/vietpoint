import { createClient } from "@/utils/supabase/server";

export type GlobalContact = {
  phone: string;
  phoneTel: string;
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

  const phone = g("contact", "phone", "(678) 825-3737");
  return {
    phone,
    phoneTel: toTelHref(phone),
    fax: g("contact", "fax", "(678) 825-3737"),
    email: g("contact", "email", "servicing@vietpointservices.com"),
    address: g(
      "contact",
      "address",
      "1424 N Brown Rd #450,\nLawrenceville, GA 30043",
    ),
    hoursWeekdays: g(
      "hours",
      "weekdays",
      "Sunday \u2013 Thursday: 9 AM \u2013 7 PM",
    ),
    hoursWeekend: g("hours", "weekend", "Friday & Saturday: Closed"),
    facebook: g("social", "facebook", "#"),
    instagram: g("social", "instagram", "#"),
    twitter: g("social", "twitter", "#"),
    youtube: g("social", "youtube", "#"),
  };
}
