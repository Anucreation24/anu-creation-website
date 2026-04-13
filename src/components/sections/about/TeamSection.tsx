"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

const pillars = ["Vision", "Craft", "Prestige", "Precision"];

export default function TeamSection({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  // Filter for valid items only
  const displayTeam = data.filter((m: any) => m && m.name);

  if (displayTeam.length === 0) return null;

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <SectionHeader
            eyebrow="The Curators"
            title="Meet the"
            titleGold="Team"
            subtitle="The minds and hands behind every project we craft."
          />
        </div>

        {/* Adaptive team cards - reflow naturally using flex wrap */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 mb-20">
          {displayTeam.map((member: any, i: number) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex-1 min-w-[280px] max-w-[360px] group bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#C9A64B]/25 p-8 flex flex-col items-center text-center gap-5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              {/* Avatar placeholder / Image */}
              <div className="w-20 h-20 rounded-full border-2 border-[#2A2A2A] group-hover:border-[#C9A64B]/40 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center transition-colors duration-300 relative overflow-hidden">
                {member.imageUrl ? (
                  <NextImage
                    src={normalizeImageUrl(member.imageUrl)}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl font-medium gold-text">
                    {member.initials || member.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#F5F2EA]">
                  {member.name}
                </h3>
                <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A64B] block">
                  {member.role}
                </span>
              </div>

              <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand pillars marquee-style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-b border-[#1A1A1A] py-8 overflow-hidden"
        >
          <div className="flex items-center justify-around gap-4 flex-wrap">
            {pillars.map((pillar, i) => (
              <span
                key={pillar}
                className={`font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl font-light tracking-[0.12em] uppercase ${
                  i % 2 === 0 ? "text-[#F5F2EA]" : "gold-text font-medium"
                }`}
              >
                {pillar}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
