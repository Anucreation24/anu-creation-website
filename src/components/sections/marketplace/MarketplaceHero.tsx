"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

/**
 * Marketplace Hero — Professional, inviting, and branded.
 * Highlighting the "Digital Showcase" for local businesses.
 */
export default function MarketplaceHero() {
  const logoUrl = "/images/logo.png";

  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-[120px] pb-24">
      {/* ── BACKGROUND ATMOSPHERE ──────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Base Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,166,75,0.08)_0%,transparent_60%)]" />

        {/* 2. Brand Pulsing Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden text-[#C9A64B]">
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.05, 0.10, 0.05]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[60vh] h-[60vh] md:w-[120vh] md:h-[120vh] grayscale brightness-125 contrast-125 blur-[15px] md:blur-[45px]"
          >
            <NextImage
              src={normalizeImageUrl(logoUrl)}
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* 3. Architectural Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#C9A64B 1px, transparent 1px), linear-gradient(90deg, #C9A64B 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── CONTENT ────────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-1 rounded-full border border-[#C9A64B]/20 bg-[#C9A64B]/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A64B] animate-pulse" />
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#C9A64B] font-bold">
            The Digital Showcase
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,8vw,5.5rem)] font-light text-[#F5F2EA] leading-[1] mb-8"
        >
          Elevating <span className="gold-text italic font-medium">Market Crafts</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Discover a curated ecosystem of local businesses and artisans. We provide a premium digital showcase 
          for partners without a standalone website, connecting local excellence with a global audience.
        </motion.p>
      </div>
    </section>
  );
}
