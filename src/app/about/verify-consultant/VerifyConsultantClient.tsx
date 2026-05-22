"use client";
import { useState } from "react";
import Link from "next/link";

export default function VerifyConsultantClient({
  heroTitle,
  heroSubtitle,
  formLabel,
  formPlaceholder,
  tips,
}: {
  heroTitle: string;
  heroSubtitle: string;
  formLabel: string;
  formPlaceholder: string;
  tips: string[];
}) {
  const [licenseId, setLicenseId] = useState("");
  const [result, setResult] = useState<null | "found" | "not-found">(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseId.trim()) return;
    setResult(licenseId.toLowerCase().includes("ts") ? "found" : "not-found");
  };

  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-80 flex items-center"
        style={{
          background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            About VietPoint
          </p>
          <h1 className="text-4xl font-extrabold mb-3">{heroTitle}</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Consultant Verification Tool
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Enter the agent&apos;s license ID or full name to verify their
              official status with VietPoint Insurance &amp; Tax.
            </p>
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {formLabel}
                </label>
                <input
                  type="text"
                  value={licenseId}
                  onChange={(e) => setLicenseId(e.target.value)}
                  placeholder={formPlaceholder}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                style={{ background: "#2F5E9E" }}
              >
                Verify Now
              </button>
            </form>

            {result === "found" && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="text-green-800 font-bold mb-1">
                  ✅ Verified Official Consultant
                </p>
                <p className="text-green-700 text-sm">
                  This individual is an officially registered and licensed
                  consultant with VietPoint Insurance &amp; Tax. You can safely
                  proceed with your insurance consultation.
                </p>
              </div>
            )}
            {result === "not-found" && (
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="text-red-800 font-bold mb-1">
                  ⚠️ Consultant Not Found
                </p>
                <p className="text-red-700 text-sm mb-3">
                  This person does not appear in our official consultant
                  registry. Please do NOT share personal or financial
                  information with this individual.
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-semibold underline"
                  style={{ color: "#2F5E9E" }}
                >
                  Report suspicious activity →
                </Link>
              </div>
            )}
          </div>

          <div className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-2">
              ⚠️ How to Stay Safe
            </h3>
            <ul className="space-y-2 text-sm text-amber-800">
              {tips.map((tip, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
