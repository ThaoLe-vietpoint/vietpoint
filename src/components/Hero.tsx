"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #d94f3b 0%, #c23b29 50%, #a82e1e 100%)",
      }}
      className="relative min-h-screen pt-16 overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-5" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-white opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <p className="italic text-2xl md:text-3xl font-light mb-2 opacity-90">
              A Decade of Support
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Building value
              <br />
              for living fully
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-10 max-w-md leading-relaxed">
              The trusted choice of over 20,000 Vietnamese families across 50
              U.S. States
            </p>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 bg-white text-[#C41E3A] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300 text-sm tracking-wider shadow-lg"
            >
              PLAY VIDEO
              <Play size={18} fill="currentColor" />
            </button>
          </motion.div>

          {/* Right: Photo cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main photo card */}
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://thinksmartinsurance.com/wp-content/uploads/2025/04/banner-1.webp"
                  alt="ThinkSmart Insurance team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tag: 20,000+ families */}
              <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-xl px-4 py-3">
                <p className="text-[#C41E3A] font-extrabold text-xl leading-none">
                  20,000+
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Families Protected
                </p>
              </div>

              {/* Floating tag: 50 States */}
              <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-xl px-4 py-3">
                <p className="text-[#C41E3A] font-extrabold text-xl leading-none">
                  50
                </p>
                <p className="text-gray-500 text-xs mt-0.5">U.S. States</p>
              </div>

              {/* Floating tag: 10+ Years */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 bg-white rounded-xl shadow-xl px-4 py-3">
                <p className="text-[#C41E3A] font-extrabold text-xl leading-none">
                  10+
                </p>
                <p className="text-gray-500 text-xs mt-0.5">Years Trusted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-100 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors"
            >
              <X size={20} />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
