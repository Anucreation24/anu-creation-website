"use client";

import { motion } from "framer-motion";
import { Shield, Gem, Zap, Eye, Clock, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    desc: "Every promise made is a promise kept. We operate with radical transparency and unwavering commitment.",
  },
  {
    icon: Gem,
    title: "No Compromise",
    desc: "We refuse mediocrity. Every pixel, every frame, every word is crafted to the highest standard.",
  },
  {
    icon: Zap,
    title: "Bold Execution",
    desc: "Ideas without execution are dreams. We turn creative vision into tangible, impactful results.",
  },
  {
    icon: Eye,
    title: "Aesthetic Precision",
    desc: "The eye is unforgiving. We obsess over details others overlook to create experiences that resonate.",
  },
  {
    icon: Clock,
    title: "Timeless Design",
    desc: "Trends fade; craft endures. We design work that remains relevant, powerful, and beautiful.",
  },
  {
    icon: Award,
    title: "Prestige Standard",
    desc: "Our bar is set by the world's finest creative studios. We are measured only against the best.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeader
            eyebrow="Our Principles"
            title="The Standard of"
            titleGold="Distinction"
            centered
            subtitle="Six pillars that define how we think, create, and deliver — without exception."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group bg-[#0A0A0A] border border-[#1E1E1E] hover:border-[#C9A64B]/30 p-8 lg:p-10 flex flex-col gap-5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-9 h-9 border border-[#2A2A2A] group-hover:border-[#C9A64B]/40 flex items-center justify-center transition-colors duration-300">
                  <Icon size={16} className="text-[#C9A64B]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#F5F2EA]">
                    {val.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                {/* Index */}
                <span className="absolute bottom-6 right-6 font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#C9A64B]/10 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
