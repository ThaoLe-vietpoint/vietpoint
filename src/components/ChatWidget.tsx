"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", question: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.question ? `Question: ${form.question}` : undefined,
          source: "chat_widget",
        }),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        @keyframes wiggle-chat {
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
      `}</style>

      {/* Floating button - bottom right */}
      <button
        onClick={() => {
          setOpen(true);
          setSubmitted(false);
        }}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl active:scale-95"
        style={{ background: "linear-gradient(145deg, #3a6fbf, #1a3d6e)" }}
        aria-label="Contact us"
      >
        <div
          style={{
            animationName: "wiggle-chat",
            animationDuration: "2.8s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: "1.8s",
            transformOrigin: "center center",
            display: "inline-flex",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 11H7v-2h10v2zm0-3H7V8h10v2z" />
          </svg>
        </div>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-end justify-end sm:justify-end p-4 sm:p-6"
          onClick={() => setOpen(false)}
        >
          {/* Modal card */}
          <div
            className="w-full sm:w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{ marginBottom: "80px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: "linear-gradient(90deg, #3a6fbf, #2F5E9E)" }}
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-vietpoint.png"
                  alt="VietPoint"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white font-semibold text-sm flex-1">
                VietPoint Insurance &amp; Tax
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-xl leading-none font-bold w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="bg-white px-5 py-5">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="font-semibold text-gray-800 text-sm">
                    Thank you for reaching out!
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    We will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setForm({ name: "", phone: "", question: "" });
                    }}
                    className="mt-4 px-5 py-2 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ background: "#e53935" }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Question
                    </label>
                    <textarea
                      value={form.question}
                      onChange={(e) =>
                        setForm({ ...form, question: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      rows={3}
                      placeholder="I'd like to know more about..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90 mt-1 disabled:opacity-60"
                    style={{ background: "#2F5E9E" }}
                  >
                    {loading ? "Sending..." : "Get started"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
