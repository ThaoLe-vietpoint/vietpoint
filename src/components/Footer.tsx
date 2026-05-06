"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8">
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
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    About VietPoint Insurance &amp; Tax
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    IUL Secrets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    Max Funded IUL
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    Term Life
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#2F5E9E] transition-colors"
                  >
                    IUL For Kids (EBTP)
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <span className="font-medium">Phone:</span> (678) 825 3737
                </li>
                <li>
                  <span className="font-medium">Fax:</span> (678) 825 3737
                </li>
                <li className="leading-relaxed">
                  <span className="font-medium">Address:</span>
                  <br />
                  1424 N Brown Rd #450,
                  <br />
                  Lawrenceville, GA 30043
                </li>
              </ul>
            </div>

            {/* Hours + Email */}
            <div>
              <h4 className="font-bold text-[#2F5E9E] text-base mb-4">
                Office Hours (ET – GA)
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                Sunday – Thursday: 9 AM – 7 PM
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Friday & Saturday: Closed
              </p>

              {/* Email subscribe */}
              {emailSent ? (
                <p className="text-sm text-green-600 font-medium">
                  Thank you for subscribing!
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
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2F5E9E]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#2F5E9E] text-white text-sm font-semibold rounded-lg hover:bg-[#1a3d6e] transition-colors"
                  >
                    Submit
                  </button>
                </form>
              )}

              {/* Social icons */}
              <div className="flex gap-3 mt-6">
                {[
                  { label: "f", href: "#", title: "Facebook" },
                  { label: "in", href: "#", title: "Instagram" },
                  { label: "X", href: "#", title: "Twitter/X" },
                  { label: "▶", href: "#", title: "YouTube" },
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
            <p className="text-gray-500 text-xs">
              Copyright © 2024 VietPoint Insurance &amp; Tax LLC. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              {[
                "Terms of Use",
                "Privacy Policy",
                "Cookie Policy",
                "Disclaimer",
              ].map((link) => (
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
            href: "tel:+16788253737",
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
