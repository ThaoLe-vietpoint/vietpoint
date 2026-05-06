"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

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
      { label: "Termlife", href: "/insurance/termlife" },
      { label: "IUL", href: "/insurance/iul" },
      { label: "Kid IUL Secrets", href: "/insurance/kid-iul-secrets" },
      { label: "Max Funded IUL Secrets", href: "/insurance/max-funded-iul" },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
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
            {/* VI Language button */}
            <button className="hidden sm:flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-[#2F5E9E] transition-colors">
              VI
              <span className="text-base">🇻🇳</span>
            </button>

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
            className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto lg:hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  <button
                    className="flex items-center justify-between w-full py-3 text-base font-semibold text-gray-800"
                    onClick={() =>
                      setActiveMobileMenu(
                        activeMobileMenu === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${activeMobileMenu === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
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
              <div className="pt-4">
                <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  VI <span>🇻🇳</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
