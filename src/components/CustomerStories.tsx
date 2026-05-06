"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Ha Nguyen",
    title: "Leaving a Stable Job to Reinvent Herself in the Insurance Industry",
    excerpt: "Have you ever felt stuck in a stable yet monotonous job? Do you yearn for a change, an opportunity to grow and make a real difference?",
    bgColor: "#C41E3A",
    earnings: "$8,500/month",
  },
  {
    id: 2,
    name: "Jaclyn",
    title: "From the Pressures of the Nail Industry to a Top Insurance Agent",
    excerpt: "There are turning points in life where only those who experience them can fully understand the anxieties and hopes that come with making a change.",
    bgColor: "#8B1A2A",
    earnings: "$10,000/month",
  },
  {
    id: 3,
    name: "Ty Trieu",
    title: "Hanging up nail file, reaching a Six-figure Income in 2 years",
    excerpt: "Can you believe that an ordinary nail technician could undergo a spectacular transformation, reaching a six-figure income within just 2 years?",
    bgColor: "#A01828",
    earnings: "$12,000/month",
  },
];

export default function CustomerStories() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? stories.length - 1 : i - 1));
  const next = () => setActive((i) => (i === stories.length - 1 ? 0 : i + 1));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          My story, my family
        </motion.h2>

        {/* Desktop: show all 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              {/* Video thumbnail */}
              <div
                className="aspect-video flex items-center justify-center relative cursor-pointer"
                style={{ background: story.bgColor }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} fill="white" className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-bold text-lg">{story.earnings}</span>
                  <span className="text-white/70 text-xs block">Monthly Income</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[#C41E3A] text-xs font-semibold mb-1">{story.name}</p>
                <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">{story.title}</h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-4">{story.excerpt}</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-[#C41E3A] text-sm font-medium hover:gap-2 transition-all"
                >
                  View more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden shadow border border-gray-100"
          >
            <div
              className="aspect-video flex items-center justify-center relative"
              style={{ background: stories[active].bgColor }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                <Play size={24} fill="white" className="text-white ml-1" />
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-xl">{stories[active].earnings}</span>
                <span className="text-white/70 text-xs block">Monthly Income</span>
              </div>
            </div>
            <div className="p-5 bg-white">
              <p className="text-[#C41E3A] text-xs font-semibold mb-1">{stories[active].name}</p>
              <h3 className="font-bold text-gray-900 mb-2">{stories[active].title}</h3>
              <p className="text-gray-500 text-sm mb-4">{stories[active].excerpt}</p>
              <a href="#" className="flex items-center gap-1 text-[#C41E3A] text-sm font-medium">
                View more <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-[#C41E3A] w-5" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
