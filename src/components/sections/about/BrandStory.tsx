"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function BrandStory({ data }: { data: any }) {
  const titleNormal = data?.titleNormal || "A Studio Born";
  const titleGold = data?.titleGold || "From Passion";
  const establishedYear = data?.establishedYear || "2018";
  const paragraphs = data?.paragraphs && data.paragraphs.length > 0
    ? data.paragraphs
    : [
        "ANU CREATION was born from a singular belief: that design is not merely decoration — it is the language through which brands speak their most powerful truths. Founded with a vision to merge artistry with strategy, we have grown into a full-spectrum creative studio serving clients across the globe.",
        "Every project we undertake is treated as a work of art. From the initial brief to the final delivery, we obsess over detail, precision, and the emotional resonance that separates the good from the truly unforgettable.",
      ];

  const mission = data?.mission || "Elevate every brand through cinematic precision.";
  const vision = data?.vision || "Be the world's most trusted creative partner.";

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — story text */}
          <div className="space-y-8">
            <SectionHeader
              eyebrow="The Cinematic Vision"
              title={titleNormal}
              titleGold={titleGold}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              {paragraphs.map((p: string, i: number) => (
                <p key={i} className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-[15px] leading-[1.9]">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Right — decorative panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-[#151515] to-[#0d0d0d] border border-[#2A2A2A] relative overflow-hidden">
              {/* Inner decorative elements */}
              <div className="absolute inset-6 border border-[#C9A64B]/10" />
              <div className="absolute inset-12 border border-[#C9A64B]/5" />

              {/* Center emblem */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 border border-[#C9A64B]/30 rotate-45 flex items-center justify-center">
                  <div className="w-8 h-8 border border-[#C9A64B]/50 rotate-0" />
                </div>
                <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#C9A64B]/50">
                  Est. {establishedYear}
                </span>
              </div>

              {/* Corner marks */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos) => (
                <div key={pos} className={`absolute ${pos} w-4 h-4`}>
                  <div className="absolute top-0 left-0 w-full h-px bg-[#C9A64B]/40" />
                  <div className="absolute top-0 left-0 w-px h-full bg-[#C9A64B]/40" />
                </div>
              ))}
            </div>

            {/* Mission / Vision callouts */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { label: "Mission", text: mission },
                { label: "Vision", text: vision },
              ].map((item) => (
                <div key={item.label} className="bg-[#111111] border border-[#1E1E1E] p-5">
                  <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#C9A64B] block mb-2">
                    {item.label}
                  </span>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#B7B1A3] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
