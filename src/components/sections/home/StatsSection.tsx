"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "6+", label: "Years of Craft" },
  { value: "200+", label: "Happy Clients" },
  { value: "4", label: "Core Services" },
];

export default function StatsSection({ data }: { data: any }) {
  // Filter for valid items only
  const displayStats = data && data.length > 0 ? data.filter((s: any) => s && s.label) : [
    { value: "500+", label: "Projects Delivered" },
    { value: "6+", label: "Years of Craft" },
    { value: "200+", label: "Happy Clients" },
    { value: "4", label: "Core Services" },
  ];

  if (displayStats.length === 0) return null;

  return (
    <section className="py-20 bg-[#0D0D0D] border-y border-[#1E1E1E] relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(201,166,75,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-y-12 md:divide-y-0 md:flex-nowrap md:divide-x divide-[#1E1E1E]">
          {displayStats.map((stat: any, i: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex-1 min-w-[160px] flex flex-col items-center justify-center py-4 px-4 text-center"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-5xl lg:text-6xl font-light gold-text leading-none mb-2">
                {stat.value}
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6560]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
