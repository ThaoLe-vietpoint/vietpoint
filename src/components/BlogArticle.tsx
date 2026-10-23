"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, Images } from "lucide-react";

type Props = {
  contentHtml: string;
  title: string;
  lang: string;
  images?: string[];
};

export default function BlogArticle({
  contentHtml,
  title,
  lang,
  images = [],
}: Props) {
  const [tocOpen, setTocOpen] = useState(true);
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [headings, setHeadings] = useState<string[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const validImages = images.filter(Boolean);
  // Show top cover/gallery if there are multiple images OR if the single cover image isn't already embedded in contentHtml
  const showGallery =
    validImages.length > 1 ||
    (validImages.length === 1 && !contentHtml.includes(validImages[0]));

  useEffect(() => {
    setShareUrl(window.location.href);
    // Extract h2/h3 headings from content HTML ([\s\S]*? handles multiline)
    const matches =
      contentHtml.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi) ?? [];
    setHeadings(
      matches.map((h) => h.replace(/<[^>]+>/g, "").trim()).filter(Boolean),
    );
  }, [contentHtml]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <>
      {/* Share row — right-aligned */}
      <div className="flex items-center justify-end gap-2 mb-6 flex-wrap">
        <span className="text-sm text-gray-600 font-semibold mr-1">
          {lang === "vi" ? "Chia sẻ:" : "Share:"}
        </span>
        <a
          href={`https://www.linkedin.com/shareArticle?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
          style={{ background: "#0077b5" }}
          title="Share on LinkedIn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
          style={{ background: "#1877f2" }}
          title="Share on Facebook"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
          style={{ background: "#000" }}
          title="Share on X"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <button
          onClick={handleCopy}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
          style={{ background: copied ? "#16a34a" : "#2F5E9E" }}
          title="Copy link"
        >
          {copied ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}
        </button>
      </div>

      {/* TOC collapsible — only shown when headings exist */}
      {headings.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-[#f5f5f5] mb-8 overflow-hidden">
          <button
            onClick={() => setTocOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 font-bold text-gray-800 text-base"
          >
            <span className="flex items-center gap-2">
              {/* List/menu icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              {lang === "vi" ? "Nội dung thu gọn" : "Table of Contents"}
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-200"
              style={{ transform: tocOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          {tocOpen && headings.length > 0 && (
            <div className="px-5 pb-4">
              {headings.map((h, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="shrink-0"
                    style={{ color: "#2F5E9E" }}
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="text-sm text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Cover Image / Multi-Image Gallery */}
      {showGallery && validImages.length > 0 && (
        <div className="mb-8 space-y-3">
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={validImages[activeSlide] ?? validImages[0]}
              alt={`${title} - ${activeSlide + 1}`}
              onClick={() =>
                setLightboxUrl(validImages[activeSlide] ?? validImages[0])
              }
              className="w-full max-h-[520px] object-cover cursor-zoom-in transition-transform duration-300"
            />

            {/* Zoom button */}
            <button
              type="button"
              onClick={() =>
                setLightboxUrl(validImages[activeSlide] ?? validImages[0])
              }
              className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-xs transition-colors"
            >
              <ZoomIn size={14} />
              {lang === "vi" ? "Phóng to" : "Zoom"}
            </button>

            {validImages.length > 1 && (
              <>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-xs">
                  <Images size={13} />
                  {activeSlide + 1} / {validImages.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) =>
                      prev === 0 ? validImages.length - 1 : prev - 1,
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg flex items-center justify-center transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) =>
                      prev === validImages.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg flex items-center justify-center transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip for multiple images */}
          {validImages.length > 1 && (
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
              {validImages.map((imgUrl, idx) => (
                <button
                  key={`${imgUrl}-${idx}`}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    activeSlide === idx
                      ? "border-[#2F5E9E] ring-2 ring-[#2F5E9E]/30 scale-[1.03]"
                      : "border-transparent opacity-65 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Article — always visible */}
      <article
        className="article-content"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === "IMG") {
            const src = (target as HTMLImageElement).src;
            if (src) setLightboxUrl(src);
          }
        }}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Fullscreen Lightbox Modal */}
      {lightboxUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxUrl(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxUrl(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxUrl}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </>
  );
}
