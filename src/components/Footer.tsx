"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4">
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
          { label: "Hotline", icon: "📞", href: "tel:+16788253737" },
          {
            label: "Messenger",
            icon: "💬",
            href: "https://m.me/thinksmartinsurance",
          },
          {
            label: "Email",
            icon: "✉️",
            href: "mailto:info@thinksmartinsurance.com",
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-gray-50 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs text-gray-500 font-medium">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
