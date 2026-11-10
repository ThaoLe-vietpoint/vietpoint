import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Stats from "@/components/Stats";

type ContentRow = {
  section: string;
  field: string;
  value_en: string;
  value_vi: string;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const supabase = await createClient();
  const lang = await getLang();
  const { data } = await supabase
    .from("page_content")
    .select("section, field, value_en, value_vi")
    .eq("page", "home");
  const rows: ContentRow[] = data ?? [];

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

  // Hero props
  const heroProps = {
    tagline: g(
      "hero",
      "tagline",
      "A Decade of Support",
      "Một Thập Kỷ Đồng Hành",
    ),
    title: g(
      "hero",
      "title",
      "Building value for living fully",
      "Xây Dựng Giá Trị Để Sống Trọn Vẹn",
    ),
    description: g(
      "hero",
      "description",
      "The trusted choice of over 20,000 Vietnamese families across 50 U.S. States",
      "Lựa chọn tin cậy của hơn 20.000 gia đình người Việt trên 50 tiểu bang Hoa Kỳ",
    ),
    image: g(
      "hero",
      "image",
      "https://thinksmartinsurance.com/wp-content/uploads/2025/04/banner-1.webp",
    ),
    videoUrl: g(
      "hero",
      "video_url",
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ),
    stat1: {
      value: g("hero", "stat1_value", "20,000+"),
      label: g(
        "hero",
        "stat1_label",
        "Families Protected",
        "Gia Đình Được Bảo Vệ",
      ),
    },
    stat2: {
      value: g("hero", "stat2_value", "50"),
      label: g("hero", "stat2_label", "U.S. States", "Tiểu Bang Hoa Kỳ"),
    },
    stat3: {
      value: g("hero", "stat3_value", "10+"),
      label: g("hero", "stat3_label", "Years Trusted", "Năm Kinh Nghiệm"),
    },
  };

  // Products props
  const productsRaw = g("products", "data", "");
  let initialProducts = undefined;
  if (productsRaw) {
    try {
      initialProducts = JSON.parse(productsRaw);
    } catch {}
  }

  // Stats props
  const statsTitle = g(
    "stats",
    "title",
    "Why choose VietPoint Insurance & Tax?",
    "Tại Sao Chọn VietPoint Insurance & Tax?",
  );
  const statDefaults = [
    { value: "10", suffix: "+", label: "ESTABLISH", labelVi: "NĂM THÀNH LẬP" },
    { value: "20", suffix: "K+", label: "CLIENT", labelVi: "KHÁCH HÀNG" },
    { value: "50", suffix: "", label: "STATE LICENSED", labelVi: "TIỂU BANG" },
    { value: "24", suffix: "/7", label: "SUPPORT", labelVi: "HỖ TRỢ" },
  ];
  const statsItems = statDefaults.map((d, i) => ({
    value:
      parseInt(g("stats", `stat${i + 1}_value`, d.value)) || parseInt(d.value),
    suffix: g("stats", `stat${i + 1}_suffix`, d.suffix),
    label: g("stats", `stat${i + 1}_label`, d.label, d.labelVi),
  }));

  // Process props
  const processTitle = g(
    "process",
    "title",
    "Insurance participation process",
    "Quy Trình Tham Gia Bảo Hiểm",
  );
  const processCtaText = g(
    "process",
    "cta_text",
    "Get Free Quote",
    "Nhận Báo Giá Miễn Phí",
  );
  const processRaw = g("process", "data", "");
  let processSteps = undefined;
  if (processRaw) {
    try {
      processSteps = JSON.parse(processRaw);
    } catch {}
  }

  // Testimonials props
  const testimonialsTitle = g(
    "testimonials",
    "title",
    "What our clients say about us",
    "Khách Hàng Nói Gì Về Chúng Tôi",
  );
  const { data: testimonialData } = await supabase
    .from("testimonials")
    .select("id, name, avatar, content_en, content_vi, rating")
    .eq("active", true)
    .order("created_at");
  const testimonialItems = testimonialData?.length
    ? testimonialData.map((t) => ({
        id: t.id,
        name: t.name,
        avatar: t.avatar,
        quote: lang === "vi" ? t.content_vi || t.content_en : t.content_en,
        rating: t.rating,
      }))
    : undefined;

  return (
    <main className="min-h-screen bg-white">
      <Hero {...heroProps} lang={lang} />
      <Products initialProducts={initialProducts} lang={lang} />
      <Process
        title={processTitle}
        ctaText={processCtaText}
        steps={processSteps}
        lang={lang}
      />
      <Stats title={statsTitle} items={statsItems} />
    </main>
  );
}
