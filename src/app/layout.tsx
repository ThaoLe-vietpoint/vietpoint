import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import ChatWidget from "@/components/ChatWidget";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/utils/getLang";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VietPoint Insurance & Tax | Life, IUL & Retirement Planning",
  description:
    "The trusted choice of over 20,000 Vietnamese families across 50 U.S. States. Specializing in IUL, Term Life, and Retirement Planning.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const lang = await getLang();
  const { data: rows } = await supabase
    .from("page_content")
    .select("section, field, value_en, value_vi")
    .eq("page", "global");

  const g = (section: string, field: string, fallback: string) => {
    const row = rows?.find((r) => r.section === section && r.field === field);
    return (
      (lang === "vi" ? row?.value_vi || row?.value_en : row?.value_en) ??
      fallback
    );
  };

  const footerProps = {
    phone: g("contact", "phone", "(678) 825 3737"),
    fax: g("contact", "fax", "(678) 825 3737"),
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

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header initialLang={lang} />
        <div className="pb-24 sm:pb-0">
          {children}
          <Footer {...footerProps} lang={lang} />
        </div>
        <ContactFloat />
        <ChatWidget />
      </body>
    </html>
  );
}
