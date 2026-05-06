import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VietPoint Insurance & Tax | Life, IUL & Retirement Planning",
  description:
    "The trusted choice of over 20,000 Vietnamese families across 50 U.S. States. Specializing in IUL, Term Life, and Retirement Planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ContactFloat />
        <ChatWidget />
      </body>
    </html>
  );
}
