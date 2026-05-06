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
              A Decade of Support
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              Building value
              <br />
              for living fully
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              The trusted choice of over 20,000 Vietnamese families across 50
              U.S. States
            </p>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 bg-white text-[#2F5E9E] font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 text-base tracking-wider shadow-lg"
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
            <div className="relative w-full max-w-xl">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://thinksmartinsurance.com/wp-content/uploads/2025/04/banner-1.webp"
                  alt="ThinkSmart Insurance team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tag: 20,000+ families */}
              <div className="absolute -left-6 bottom-10 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-[#2F5E9E] font-extrabold text-2xl leading-none">
                  20,000+
                </p>
                <p className="text-gray-500 text-sm mt-1">Families Protected</p>
              </div>

              {/* Floating tag: 50 States */}
              <div className="absolute -right-6 top-10 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-[#2F5E9E] font-extrabold text-2xl leading-none">
                  50
                </p>
                <p className="text-gray-500 text-sm mt-1">U.S. States</p>
              </div>

              {/* Floating tag: 10+ Years */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-[#2F5E9E] font-extrabold text-2xl leading-none">
                  10+
                </p>
                <p className="text-gray-500 text-sm mt-1">Years Trusted</p>
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
