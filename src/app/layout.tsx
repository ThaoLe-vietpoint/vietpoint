import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import ChatWidget from "@/components/ChatWidget";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getLang } from "@/utils/getLang";
import { getGlobalContact } from "@/utils/getGlobalContact";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  const lang = await getLang();
  const contact = await getGlobalContact(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header initialLang={lang} />
        {/* translate="no" protects server-rendered DB content from Google Translate.
            Components outside this div (ChatWidget, ContactFloat) are still translated by GT. */}
        <div className="pb-24 sm:pb-0" translate="no">
          {children}
          <Footer {...contact} lang={lang} />
        </div>
        <ContactFloat
          phoneTel={contact.phoneTel}
          email={contact.email}
          address={contact.address}
        />
        <ChatWidget lang={lang} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
