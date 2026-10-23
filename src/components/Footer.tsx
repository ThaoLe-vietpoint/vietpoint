"use client";
import { useState } from "react";

type FooterProps = {
  phone?: string;
  phoneTel?: string;
  fax?: string;
  email?: string;
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
    contact: "Contact Us",
    phone: "Phone",
    fax: "Fax",
    address: "Address",
    hours: "Office Hours",
    timezone: "Eastern Time (ET) · Georgia",
    emailPlaceholder: "Your email address",
    submit: "Subscribe",
    thankYou: "Thank you for subscribing!",
    newsletter: "Stay updated",
    newsletterDesc: "Get tips on insurance & tax savings delivered to your inbox.",
    copyright: "© 2026 VietPoint Insurance & Tax LLC. All rights reserved.",
    terms: "Terms",
    privacy: "Privacy",
    cookie: "Cookies",
    disclaimer: "Disclaimer",
    aboutLink: "About VietPoint",
    careers: "Careers",
    verifyConsultant: "Verify Consultant",
    iul: "Medicare",
    kidIul: "ACA Marketplace",
    termLife: "Auto Insurance",
    blog: "Blog & News",
    contact_page: "Contact",
    customerCare: "Customer Care",
  },
  vi: {
    about: "Về chúng tôi",
    products: "Sản phẩm",
    contact: "Liên hệ",
    phone: "Điện thoại",
    fax: "Fax",
    address: "Địa chỉ",
    hours: "Giờ làm việc",
    timezone: "Múi giờ ET · Georgia",
    emailPlaceholder: "Địa chỉ email của bạn",
    submit: "Đăng ký",
    thankYou: "Cảm ơn bạn đã đăng ký!",
    newsletter: "Nhận thông tin mới nhất",
    newsletterDesc: "Mẹo bảo hiểm & tiết kiệm thuế gửi thẳng đến hộp thư của bạn.",
    copyright: "© 2026 VietPoint Insurance & Tax LLC. Bảo lưu mọi quyền.",
    terms: "Điều khoản",
    privacy: "Bảo mật",
    cookie: "Cookie",
    disclaimer: "Miễn trách nhiệm",
    aboutLink: "Về VietPoint",
    careers: "Tuyển dụng",
    verifyConsultant: "Xác minh tư vấn viên",
    iul: "Medicare",
    kidIul: "ACA Marketplace",
    termLife: "Bảo Hiểm Xe Hơi",
    blog: "Blog & Tin tức",
    contact_page: "Liên hệ",
    customerCare: "Chăm sóc khách hàng",
  },
};

export default function Footer({
  phone = "(678) 825-3737",
  phoneTel,
  fax = "(678) 825-3737",
  email: contactEmail = "servicing@vietpointservices.com",
  address = "1424 N Brown Rd #450,\nLawrenceville, GA 30043",
  hoursWeekdays = "Sunday – Thursday: 9 AM – 7 PM",
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
  const telHref = phoneTel || `tel:+1${phone.replace(/\D/g, "").slice(-10)}`;

  return (
    <>
      <footer className="bg-[#0f1c2e] text-white pt-16 pb-8 notranslate" translate="no">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top section: logo + newsletter */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pb-12 border-b border-white/10 mb-12">
            {/* Brand */}
            <div className="lg:w-72 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-vietpoint.png" alt="VietPoint Insurance &amp; Tax" className="h-12 w-auto brightness-0 invert mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed">
                {lang === "vi"
                  ? "Chuyên gia bảo hiểm nhân thọ & tư vấn thuế cho cộng đồng người Việt tại Hoa Kỳ."
                  : "Life insurance & tax planning experts serving the Vietnamese-American community."}
              </p>
              {/* Social icons */}
              <div className="flex gap-2 mt-6">
                {[
                  { title: "Facebook", href: facebook, icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                  { title: "Instagram", href: instagram, icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
                  { title: "YouTube", href: youtube, icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    title={s.title}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#2F5E9E] flex items-center justify-center transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex-1 lg:max-w-sm">
              <p className="text-xs font-bold text-[#4a9eff] uppercase tracking-widest mb-2">{t.newsletter}</p>
              <h3 className="text-lg font-bold text-white mb-2">{t.newsletterDesc}</h3>
              {emailSent ? (
                <p className="text-sm text-emerald-400 font-medium mt-4">✓ {t.thankYou}</p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setEmailSent(true); }}
                  className="flex gap-2 mt-4"
                >
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:bg-white/15 transition"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-opacity hover:opacity-90"
                    style={{ background: "#2F5E9E" }}
                  >
                    {t.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t.about}</p>
              <ul className="space-y-2.5">
                {[
                  { label: t.aboutLink, href: "/about" },
                  { label: t.careers, href: "/about/recruitment" },
                  { label: t.verifyConsultant, href: "/about/verify-consultant" },
                  { label: t.blog, href: "/blog" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t.products}</p>
              <ul className="space-y-2.5">
                {[
                  { label: t.iul, href: "/insurance/iul" },
                  { label: t.kidIul, href: "/insurance/kid-iul-secrets" },
                  { label: t.termLife, href: "/insurance/termlife" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t.contact}</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5 text-[#4a9eff]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <div>
                    <a href={telHref} className="text-slate-300 text-sm hover:text-white transition-colors font-medium">{phone}</a>
                    {fax !== phone && <p className="text-slate-500 text-xs mt-0.5">{t.fax}: {fax}</p>}
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5 text-[#4a9eff]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <address className="text-slate-400 text-sm not-italic leading-relaxed">
                    {address.split("\n").map((line, i) => <span key={i}>{line}{i < address.split("\n").length - 1 && <br />}</span>)}
                  </address>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t.hours}</p>
              <p className="text-xs text-[#4a9eff] mb-3">{t.timezone}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                  <p className="text-slate-300 text-sm">{hoursWeekdays}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-500 shrink-0"></span>
                  <p className="text-slate-400 text-sm">{hoursWeekend}</p>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 text-sm font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
                style={{ background: "#2F5E9E" }}
              >
                {t.contact_page} →
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">{t.copyright}</p>
            <div className="flex gap-5">
              {[t.terms, t.privacy, t.cookie, t.disclaimer].map((link) => (
                <span key={link} className="text-slate-500 text-xs">
                  {link}
                </span>
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
            href: telHref,
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
            href: `mailto:${contactEmail}`,
            bg: "#ffffff",
            icon: (
              <svg width="22" height="17" viewBox="0 0 52 39" fill="none">
                <path d="M2 35V4.5L12 12v23H2z" fill="#4285F4" />
                <path d="M50 35V4.5L40 12v23h10z" fill="#34A853" />
                <path d="M12 12L2 4.5 26 22 12 12z" fill="#EA4335" />
                <path d="M40 12L50 4.5 26 22 40 12z" fill="#FBBC05" />
                <path d="M12 12v23l14-9.5L40 35V12L26 22 12 12z" fill="#EA4335" />
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
            <span className="text-xs text-gray-600 font-semibold">{item.label}</span>
          </a>
        ))}
      </div>
    </>
  );
}

