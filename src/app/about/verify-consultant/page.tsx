"use client";
import { useState } from "react";
import Link from "next/link";

export default function VerifyConsultantPage() {
  const [licenseId, setLicenseId] = useState("");
  const [result, setResult] = useState<null | "found" | "not-found">(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseId.trim()) return;
    // For demo purposes, simulate a lookup
    setResult(licenseId.toLowerCase().includes("ts") ? "found" : "not-found");
  };

  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-[320px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            About Thinksmart
          </p>
          <h1 className="text-4xl font-extrabold mb-3">
            Verify Official Consultant
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Protect yourself from fraud. Verify that your agent is an officially
            licensed Thinksmart Insurance consultant before sharing any personal
            information.
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
              official status with Thinksmart Insurance.
            </p>
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent License ID or Full Name
                </label>
                <input
                  type="text"
                  value={licenseId}
                  onChange={(e) => setLicenseId(e.target.value)}
                  placeholder="e.g. TS-12345 or Hung Huynh"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                style={{ background: "#C41E3A" }}
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
                  consultant with Thinksmart Insurance. You can safely proceed
                  with your insurance consultation.
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
                  style={{ color: "#C41E3A" }}
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
              <li className="flex gap-2">
                <span>•</span> Always verify your agent through this official
                tool before providing personal information
              </li>
              <li className="flex gap-2">
                <span>•</span> Official Thinksmart agents will never ask for
                Social Security Numbers via text or unencrypted email
              </li>
              <li className="flex gap-2">
                <span>•</span> All official consultants have a Thinksmart-issued
                license ID starting with &quot;TS-&quot;
              </li>
              <li className="flex gap-2">
                <span>•</span> If in doubt, call our office directly:{" "}
                <a href="tel:+16788253737" className="font-semibold underline">
                  (678) 825-3737
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
