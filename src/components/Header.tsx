"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: Record<"en" | "vi", NavItem[]> = {
  en: [
    {
      label: "About us",
      href: "/about",
      children: [
        { label: "About VietPoint Insurance & Tax", href: "/about" },
        { label: "Recruitment", href: "/about/recruitment" },
        {
          label: "Official Consultant Verification",
          href: "/about/verify-consultant",
        },
      ],
    },
    {
      label: "Insurance",
      href: "/insurance/iul",
      children: [
        { label: "Medicare", href: "/insurance/iul" },
        { label: "ACA Marketplace", href: "/insurance/kid-iul-secrets" },
        { label: "Auto Insurance", href: "/insurance/termlife" },
      ],
    },
    {
      label: "Customer care",
      href: "/customer-care",
      children: [
        { label: "Resolve insurance claims", href: "/customer-care/claims" },
        {
          label: "Calculate insurance fees",
          href: "/customer-care/calculate-fees",
        },
        { label: "My story, my family", href: "/customer-care/stories" },
        { label: "User manual", href: "/customer-care/user-manual" },
        { label: "Priority program", href: "/customer-care/priority-program" },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      children: [
        { label: "Featured post", href: "/blog?cat=featured" },
        { label: "Insurance", href: "/blog?cat=insurance" },
        { label: "User manual", href: "/blog?cat=user-manual" },
        { label: "Investment, Saving & Retire", href: "/blog?cat=investing" },
        { label: "Health – Life", href: "/blog?cat=health" },
        { label: "Event", href: "/blog?cat=event" },
        { label: "My story, my family", href: "/blog?cat=stories" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  vi: [
    {
      label: "Về chúng tôi",
      href: "/about",
      children: [
        { label: "Về VietPoint Insurance & Tax", href: "/about" },
        { label: "Tuyển dụng", href: "/about/recruitment" },
        { label: "Xác minh tư vấn viên", href: "/about/verify-consultant" },
      ],
    },
    {
      label: "Bảo hiểm",
      href: "/insurance/iul",
      children: [
        { label: "Medicare", href: "/insurance/iul" },
        { label: "ACA Marketplace", href: "/insurance/kid-iul-secrets" },
        { label: "Bảo Hiểm Xe Hơi", href: "/insurance/termlife" },
      ],
    },
    {
      label: "Chăm sóc khách hàng",
      href: "/customer-care",
      children: [
        { label: "Giải quyết bồi thường", href: "/customer-care/claims" },
        { label: "Tính phí bảo hiểm", href: "/customer-care/calculate-fees" },
        { label: "Câu chuyện của tôi", href: "/customer-care/stories" },
        { label: "Hướng dẫn sử dụng", href: "/customer-care/user-manual" },
        {
          label: "Chương trình ưu tiên",
          href: "/customer-care/priority-program",
        },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      children: [
        { label: "Bài nổi bật", href: "/blog?cat=featured" },
        { label: "Bảo hiểm", href: "/blog?cat=insurance" },
        { label: "Hướng dẫn", href: "/blog?cat=user-manual" },
        { label: "Đầu tư & Hưu trí", href: "/blog?cat=investing" },
        { label: "Sức khỏe – Cuộc sống", href: "/blog?cat=health" },
        { label: "Sự kiện", href: "/blog?cat=event" },
        { label: "Câu chuyện của tôi", href: "/blog?cat=stories" },
      ],
    },
    { label: "Liên hệ", href: "/contact" },
  ],
};

// legacy — kept so old references don't break until router.refresh() replaces them
const navItems = [
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "About VietPoint Insurance & Tax", href: "/about" },
      { label: "Recruitment", href: "/about/recruitment" },
      {
        label: "Official Consultant Verification",
        href: "/about/verify-consultant",
      },
    ],
  },
  {
    label: "Insurance",
    href: "/insurance/iul",
    children: [
      { label: "Medicare", href: "/insurance/iul" },
      { label: "ACA Marketplace", href: "/insurance/kid-iul-secrets" },
      { label: "Auto Insurance", href: "/insurance/termlife" },
    ],
  },
  {
    label: "Customer care",
    href: "/customer-care",
    children: [
      { label: "Resolve insurance claims", href: "/customer-care/claims" },
      {
        label: "Calculate insurance fees",
        href: "/customer-care/calculate-fees",
      },
      { label: "My story, my family", href: "/customer-care/stories" },
      { label: "User manual", href: "/customer-care/user-manual" },
      { label: "Priority program", href: "/customer-care/priority-program" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Featured post", href: "/blog?cat=featured" },
      { label: "Insurance", href: "/blog?cat=insurance" },
      { label: "User manual", href: "/blog?cat=user-manual" },
      { label: "Investment, Saving & Retire", href: "/blog?cat=investing" },
      { label: "Health – Life", href: "/blog?cat=health" },
      { label: "Event", href: "/blog?cat=event" },
      { label: "My story, my family", href: "/blog?cat=stories" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header({
  initialLang = "en",
}: {
  initialLang?: "en" | "vi";
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "vi">(initialLang);
  const pathname = usePathname();
  const router = useRouter();

  // Sync lang state with cookie (middleware always sets it, so this is a safety net)
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
    if (match?.[1] === "vi" || match?.[1] === "en")
      setLang(match[1] as "en" | "vi");
  }, []);

  // Google Translate: apply when lang=vi (for content not covered by DB bilingual)
  // Elements with translate="no" (server-rendered DB content) are skipped by GT
  useEffect(() => {
    const target = lang === "vi" ? "vi" : "";

    // Inject CSS to hide GT toolbar
    if (!document.getElementById("gt-hide-style")) {
      const s = document.createElement("style");
      s.id = "gt-hide-style";
      s.innerHTML = `
        .goog-te-banner-frame.skiptranslate,
        .skiptranslate { display: none !important; }
        body { top: 0 !important; position: static !important; }
      `;
      document.head.appendChild(s);
    }

    // Create hidden GT mount point
    if (!document.getElementById("google_translate_element")) {
      const el = document.createElement("div");
      el.id = "google_translate_element";
      el.style.display = "none";
      document.body.appendChild(el);
    }

    const applyTranslation = (attempts = 0) => {
      const select =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (!select) {
        if (attempts < 30)
          setTimeout(() => applyTranslation(attempts + 1), 300);
        return;
      }
      select.value = target;
      select.dispatchEvent(new Event("change"));
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).googleTranslateElementInit = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const GT = (window as any).google?.translate?.TranslateElement;
        if (GT) {
          new GT(
            {
              pageLanguage: "en",
              includedLanguages: "en,vi",
              autoDisplay: false,
            },
            "google_translate_element",
          );
          if (target) applyTranslation();
        }
      };
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      applyTranslation();
    }
  }, [lang]);

  const toggleLang = (next: "en" | "vi") => {
    document.cookie = `lang=${next}; path=/; max-age=31536000; SameSite=Lax`;
    setLang(next);
    router.refresh();
  };

  const navItems = NAV[lang];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[70] bg-white shadow-sm notranslate"
        translate="no"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-vietpoint.png"
              alt="VietPoint Insurance & Tax"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-lg font-semibold transition-colors py-2 ${pathname.startsWith(item.href) && item.href !== "/" ? "text-[#2F5E9E]" : "text-gray-700 hover:text-[#2F5E9E]"}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 bg-white rounded-lg shadow-xl border border-gray-100 min-w-56 py-2 z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2F5E9E] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle — desktop only */}
            <div className="hidden lg:flex items-center gap-0.5 border border-gray-200 rounded-full p-0.5 bg-gray-50">
              <button
                onClick={() => toggleLang("en")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  lang === "en"
                    ? "bg-white text-[#2F5E9E] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-base">🇺🇸</span> EN
              </button>
              <button
                onClick={() => toggleLang("vi")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  lang === "vi"
                    ? "bg-white text-[#2F5E9E] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-base">🇻🇳</span> VI
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-full bg-[#2F5E9E] text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white pt-24 overflow-y-auto lg:hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  {item.children ? (
                    <button
                      className="flex items-center justify-between w-full py-3 text-base font-semibold text-gray-800"
                      onClick={() =>
                        setActiveMobileMenu(
                          activeMobileMenu === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${activeMobileMenu === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between w-full py-3 text-base font-semibold text-gray-800 hover:text-[#2F5E9E]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && activeMobileMenu === item.label && (
                    <div className="pl-4 pb-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-sm text-gray-600 hover:text-[#2F5E9E] py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex items-center gap-2">
                <button
                  onClick={() => toggleLang("en")}
                  className={`flex items-center gap-1 border rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    lang === "en"
                      ? "border-[#2F5E9E] text-[#2F5E9E] bg-blue-50"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  <span>🇺🇸</span> EN
                </button>
                <button
                  onClick={() => toggleLang("vi")}
                  className={`flex items-center gap-1 border rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    lang === "vi"
                      ? "border-[#2F5E9E] text-[#2F5E9E] bg-blue-50"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  <span>🇻🇳</span> VI
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
