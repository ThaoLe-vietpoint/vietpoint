"use client";
import { useState } from "react";

const wiggleKeyframes = `
@keyframes wiggle {
  0%   { transform: rotate(0deg); }
  10%  { transform: rotate(-16deg); }
  20%  { transform: rotate(16deg); }
  30%  { transform: rotate(-12deg); }
  40%  { transform: rotate(12deg); }
  50%  { transform: rotate(-6deg); }
  60%  { transform: rotate(6deg); }
  70%  { transform: rotate(-2deg); }
  80%  { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(12px) scale(0.85); }
  to   { opacity: 1; transform: translateY(0)   scale(1);    }
}
`;

const contacts = [
  {
    label: "Hotline",
    href: "tel:+16788253737",
    delay: "0s",
    icon: (
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
        style={{ background: "linear-gradient(145deg, #f44336, #c62828)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
        </svg>
      </div>
    ),
  },
  {
    label: "Messenger",
    href: "https://m.me/vietpointinsurance",
    delay: "1.2s",
    icon: (
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
        style={{
          background:
            "linear-gradient(145deg, #c026d3, #7c3aed, #2563eb, #06b6d4)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.815 1.3 5.331 3.35 7.043V21l3.044-1.678A11.2 11.2 0 0 0 12 19.516c5.523 0 10-4.145 10-9.257S17.523 2 12 2zm1.05 12.472-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.92-2.72-5.48 5.82z" />
        </svg>
      </div>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589138322277",
    delay: "2.4s",
    icon: (
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
        style={{ background: "linear-gradient(145deg, #1877f2, #0d5bbf)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </div>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vietpointinsurance",
    delay: "3.6s",
    icon: (
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
        style={{
          background:
            "linear-gradient(145deg, #f58529, #dd2a7b, #8134af, #515bd4)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
        </svg>
      </div>
    ),
  },
  {
    label: "Google Maps",
    href: "https://maps.google.com/?q=1805+W+Colonial+Dr+Suite+B2+Orlando+FL+32804",
    delay: "4.8s",
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-white border border-gray-100">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
            fill="#EA4335"
          />
          <circle cx="12" cy="9" r="2.5" fill="white" />
        </svg>
      </div>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@vietpointinsurance.com",
    delay: "6.0s",
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-white border border-gray-100">
        {/* Gmail M logo */}
        <svg width="24" height="18" viewBox="0 0 52 39" fill="none">
          <path
            d="M4 0h44a4 4 0 0 1 4 4v31a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            fill="white"
          />
          <path
            d="M2 4.5 26 22 50 4.5"
            stroke="#FBBC05"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M2 4.5V35h10V16.5L26 28l14-11.5V35h10V4.5L50 4.5 26 22 2 4.5z"
            fill="none"
          />
          <path d="M2 35V4.5L12 12v23H2z" fill="#4285F4" />
          <path d="M50 35V4.5L40 12v23h10z" fill="#34A853" />
          <path d="M12 12L2 4.5 26 22 12 12z" fill="#EA4335" />
          <path d="M40 12L50 4.5 26 22 40 12z" fill="#FBBC05" />
          <path d="M12 12v23l14-9.5L40 35V12L26 22 12 12z" fill="#EA4335" />
        </svg>
      </div>
    ),
  },
];

export default function ContactFloat({
  phoneTel = "tel:+16788253737",
  email = "servicing@vietpointservices.com",
  address = "1424 N Brown Rd #450, Lawrenceville, GA 30043",
}: {
  phoneTel?: string;
  email?: string;
  address?: string;
} = {}) {
  const [open, setOpen] = useState(false);

  const items = contacts.map((c) => {
    if (c.label === "Hotline") return { ...c, href: phoneTel };
    if (c.label === "Email") return { ...c, href: `mailto:${email}` };
    if (c.label === "Google Maps")
      return {
        ...c,
        href: `https://maps.google.com/?q=${encodeURIComponent(address.replace(/\s*\n\s*/g, ", "))}`,
      };
    return c;
  });

  return (
    <>
      <style>{wiggleKeyframes}</style>

      {/* Desktop: collapsible panel on the left */}
      <div className="fixed left-3 bottom-16 z-50 hidden sm:flex flex-col items-center gap-2">
        {/* Expanded panel */}
        {open && (
          <div
            className="bg-white rounded-2xl shadow-xl px-2 py-3 flex flex-col items-center gap-3 mb-1"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
              animation: "fadeSlideUp 0.2s ease both",
            }}
          >
            {items.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group"
                title={c.label}
                onClick={() => setOpen(false)}
              >
                <div
                  style={{
                    animationName: "wiggle",
                    animationDuration: "2.8s",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: c.delay,
                    transformOrigin: "center center",
                    display: "inline-block",
                  }}
                  className="group-hover:[animation-play-state:paused] transition-transform"
                >
                  {c.icon}
                </div>
                <span className="text-[11px] font-semibold text-gray-600 leading-none">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-transform active:scale-95"
          style={{
            background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
          }}
          aria-label={open ? "Close contacts" : "Open contacts"}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile: collapsible FAB — bottom-LEFT (ChatWidget stays bottom-right) */}
      <div className="fixed bottom-20 left-4 z-50 flex sm:hidden flex-col items-start gap-3">
        {/* Contact options — slide up when open */}
        {open && (
          <div className="flex flex-col items-start gap-2 max-h-[70vh] overflow-y-auto pr-1">
            {items.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                style={{
                  animation: `fadeSlideUp 0.22s ease both`,
                  animationDelay: `${i * 0.04}s`,
                }}
                onClick={() => setOpen(false)}
              >
                <div className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <span className="bg-white text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow border border-gray-100 whitespace-nowrap">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        )}

        {/* FAB toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform active:scale-95"
          style={{
            background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
          }}
          aria-label={open ? "Close contacts" : "Open contacts"}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
