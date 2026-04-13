"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

/* ── Partner brand placeholders ─────────────────────────────────────────── */
export default function PartnersGrid({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  // Filter for valid items only
  const displayPartners = data.filter((p: any) => p && p.name);

  if (displayPartners.length === 0) return null;

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 text-center flex flex-col items-center">
          <SectionHeader
            eyebrow="Trusted Partners"
            title="Brands We've"
            titleGold="Elevated"
            centered={true}
            subtitle="A selection of prestige clients and creative businesses who trust ANU CREATION with their brand identity."
          />
        </div>

        {/* Adaptive flex grid that reflows from the absolute center */}
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {displayPartners.map((partner: any, i: number) => (
            <motion.div
              key={partner._id || partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-[#0A0A0A] border border-[#1E1E1E] hover:border-[#C9A64B]/30 p-8 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 relative overflow-hidden w-full sm:flex-1 sm:min-w-[280px] max-w-[340px]"
            >
              {/* Hover top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Logo / Placeholder */}
              <div className="w-14 h-14 border border-[#2A2A2A] group-hover:border-[#C9A64B]/30 flex items-center justify-center transition-colors duration-300 mb-2 relative overflow-hidden">
                {partner.logoUrl ? (
                  <NextImage
                    src={normalizeImageUrl(partner.logoUrl)}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#C9A64B]/60 group-hover:text-[#C9A64B] transition-colors duration-300">
                    {partner.name.charAt(0)}
                  </span>
                )}
              </div>

              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300">
                {partner.name}
              </h3>
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6560]">
                {partner.industry}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
