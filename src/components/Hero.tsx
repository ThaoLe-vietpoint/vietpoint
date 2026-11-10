"use client";
import { motion } from "framer-motion";

type HeroProps = {
  tagline?: string;
  title?: string;
  description?: string;
  image?: string;
  videoUrl?: string;
  stat1?: { value: string; label: string };
  stat2?: { value: string; label: string };
  stat3?: { value: string; label: string };
  lang?: "en" | "vi";
};

export default function Hero({
  tagline = "A Decade of Support",
  title = "Building value for living fully",
  description = "The trusted choice of over 20,000 Vietnamese families across 50 U.S. States",
  image = "https://thinksmartinsurance.com/wp-content/uploads/2025/04/banner-1.webp",
  stat1 = { value: "20,000+", label: "Families Protected" },
  stat2 = { value: "50", label: "U.S. States" },
  stat3 = { value: "10+", label: "Years Trusted" },
}: HeroProps) {

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #3a6fbf 0%, #2F5E9E 50%, #1a3d6e 100%)",
      }}
      className="relative min-h-screen pt-24 overflow-hidden flex items-center"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-5" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-white opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto pl-24 pr-8 md:px-12 py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <p className="italic text-3xl md:text-4xl font-light mb-3 opacity-90">
              {tagline}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              {title.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              {description}
            </p>

          </motion.div>

          {/* Right: Photo cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main photo card */}
            <div className="relative w-full max-w-xl">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt="VietPoint banner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tag: stat1 */}
              <div className="absolute -left-6 bottom-10 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-[#2F5E9E] font-extrabold text-2xl leading-none">
                  {stat1.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat1.label}</p>
              </div>

              {/* Floating tag: stat2 */}
              <div className="absolute -right-6 top-10 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-[#2F5E9E] font-extrabold text-2xl leading-none">
                  {stat2.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat2.label}</p>
              </div>

              {/* Floating tag: stat3 */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-[#2F5E9E] font-extrabold text-2xl leading-none">
                  {stat3.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat3.label}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
