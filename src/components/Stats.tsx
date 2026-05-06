"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "ESTABLISH" },
  { value: 20, suffix: "K+", label: "CLIENT" },
  { value: 50, suffix: "", label: "STATE LICENSED" },
  { value: 24, suffix: "/7", label: "SUPPORT" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-white">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      style={{ background: "linear-gradient(135deg, #2F5E9E 0%, #0d2a52 100%)" }}
      className="py-4"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-6"
        >
          Why choose VietPoint Insurance & Tax?
        </motion.h2>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/20 p-6 text-center"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-white/70 text-xs font-semibold tracking-widest mt-2 uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
