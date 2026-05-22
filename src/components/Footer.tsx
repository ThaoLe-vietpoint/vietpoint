"use client";
import { useState } from "react";

type FooterProps = {
  phone?: string;
  fax?: string;
  address?: string;
  hoursWeekdays?: string;
  hoursWeekend?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  lang?: "en" | "vi";
};

const T = {
  en: {
    about: "About",
    products: "Products",
    contact: "Contact",
    phone: "Phone",
    fax: "Fax",
    address: "Address",
    hours: "Office Hours (ET – GA)",
    emailPlaceholder: "Email",
    submit: "Submit",
    thankYou: "Thank you for subscribing!",
    copyright:
      "Copyright © 2026 VietPoint Insurance & Tax LLC. All rights reserved.",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    disclaimer: "Disclaimer",
    aboutLink: "About VietPoint Insurance & Tax",
    careers: "Careers",
    iul: "IUL Secrets",
    maxIul: "Max Funded IUL",
    termLife: "Term Life",
    kidIul: "IUL For Kids (EBTP)",
  },
  vi: {
    about: "Về chúng tôi",
    products: "Sản phẩm",
    contact: "Liên hệ",
    phone: "Điện thoại",
    fax: "Fax",
    address: "Địa chỉ",
    hours: "Giờ làm việc (ET – GA)",
    emailPlaceholder: "Email của bạn",
    submit: "Gửi",
    thankYou: "Cảm ơn bạn đã đăng ký!",
    copyright:
      "Bản quyền © 2026 VietPoint Insurance & Tax LLC. Bảo lưu mọi quyền.",
    terms: "Điều khoản sử dụng",
    privacy: "Chính sách bảo mật",
    cookie: "Chính sách Cookie",
    disclaimer: "Tuyên bố miễn trách",
    aboutLink: "Về VietPoint Insurance & Tax",
    careers: "Tuyển dụng",
    iul: "IUL Secrets",
    maxIul: "Max Funded IUL",
    termLife: "Term Life",
    kidIul: "IUL Cho Trẻ Em",
  },
};

export default function Footer({
  phone = "(678) 825 3737",
  fax = "(678) 825 3737",
  address = "1424 N Brown Rd #450,\nLawrenceville, GA 30043",
  hoursWeekdays = "Sunday \u2013 Thursday: 9 AM \u2013 7 PM",
  hoursWeekend = "Friday & Saturday: Closed",
  facebook = "#",
  instagram = "#",
  twitter = "#",
  youtube = "#",
  lang = "en",
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const t = T[lang];

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8 notranslate" translate="no">
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo in footer */}
          <div className="mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-vietpoint.png"
              alt="VietPoint Insurance &amp; Tax"
              className="h-14 w-auto"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">
                {t.about}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    {t.aboutLink}
                  </a>
                </li>
                <li>
                  <a
                    href="/about/recruitment"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    {t.careers}
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">
                {t.products}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/insurance/iul"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    {t.iul}
                  </a>
                </li>
                <li>
                  <a
                    href="/insurance/max-funded-iul"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    {t.maxIul}
                  </a>
                </li>
                <li>
                  <a
                    href="/insurance/termlife"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    {t.termLife}
                  </a>
                </li>
                <li>
                  <a
                    href="/insurance/kid-iul-secrets"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    {t.kidIul}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">
                {t.contact}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <span className="font-medium">{t.phone}:</span> {phone}
                </li>
                <li>
                  <span className="font-medium">{t.fax}:</span> {fax}
                </li>
                <li className="leading-relaxed">
                  <span className="font-medium">{t.address}:</span>
                  <br />
                  {address.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < address.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </li>
              </ul>
            </div>

            {/* Hours + Email */}
            <div>
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">
                {t.hours}
              </h4>
              <p className="text-sm text-gray-600 mb-1">{hoursWeekdays}</p>
              <p className="text-sm text-gray-600 mb-6">{hoursWeekend}</p>

              {/* Email subscribe */}
              {emailSent ? (
                <p className="text-sm text-green-600 font-medium">
                  {t.thankYou}
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEmailSent(true);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2F5E9E]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#2F5E9E] text-white text-sm font-semibold rounded-lg hover:bg-[#1a3d6e] transition-colors"
                  >
                    {t.submit}
                  </button>
                </form>
              )}

              {/* Social icons */}
              <div className="flex gap-3 mt-6">
                {[
                  { label: "f", href: facebook, title: "Facebook" },
                  { label: "in", href: instagram, title: "Instagram" },
                  { label: "X", href: twitter, title: "Twitter/X" },
                  { label: "▶", href: youtube, title: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    title={s.title}
                    className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-xs font-bold hover:bg-[#2F5E9E] hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">{t.copyright}</p>
            <div className="flex gap-4">
              {[t.terms, t.privacy, t.cookie, t.disclaimer].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 text-xs hover:text-[#2F5E9E] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed bottom mobile contact bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex sm:hidden">
        {[
          {
            label: "Hotline",
            href: `tel:+1${phone.replace(/\D/g, "")}`,
            bg: "linear-gradient(145deg, #f44336, #c62828)",
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
            ),
          },
          {
            label: "Messenger",
            href: "https://m.me/vietpointinsurance",
            bg: "linear-gradient(145deg, #c026d3, #7c3aed, #2563eb)",
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.815 1.3 5.331 3.35 7.043V21l3.044-1.678A11.2 11.2 0 0 0 12 19.516c5.523 0 10-4.145 10-9.257S17.523 2 12 2zm1.05 12.472-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.92-2.72-5.48 5.82z" />
              </svg>
            ),
          },
          {
            label: "Email",
            href: "mailto:info@vietpointinsurance.com",
            bg: "#ffffff",
            icon: (
              <svg width="22" height="17" viewBox="0 0 52 39" fill="none">
                <path d="M2 35V4.5L12 12v23H2z" fill="#4285F4" />
                <path d="M50 35V4.5L40 12v23h10z" fill="#34A853" />
                <path d="M12 12L2 4.5 26 22 12 12z" fill="#EA4335" />
                <path d="M40 12L50 4.5 26 22 40 12z" fill="#FBBC05" />
                <path
                  d="M12 12v23l14-9.5L40 35V12L26 22 12 12z"
                  fill="#EA4335"
                />
              </svg>
            ),
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1.5 hover:bg-gray-50 transition-colors"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
              style={{
                background: item.bg,
                border: item.bg === "#ffffff" ? "1px solid #e5e7eb" : "none",
              }}
            >
              {item.icon}
            </div>
            <span className="text-xs text-gray-600 font-semibold">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
