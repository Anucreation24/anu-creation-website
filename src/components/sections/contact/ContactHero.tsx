"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

/**
 * Refined Contact Hero — uses a glassmorphic "Brand Seal" composition
 * to fill space elegantly without duplicating the About page's solid frames.
 */
export default function ContactHero({ data }: { data: any }) {
  const eyebrow = data?.eyebrow || "Get in Touch";
  const titleMain = data?.titleMain || "Let's Build";
  const titleGold = data?.titleGold || "Impact";
  const description = data?.description || "A premium creative studio crafting cinematic identities through bespoke artistry and digital storytelling.";
  const logoUrl = "/images/logo.png";

  return (
    <section 
      className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-[100px] pb-24"
      aria-label="Contact Hero"
    >
      {/* ── BACKGROUND LAYERS ──────────────────────────────────────── */}
      
      {/* 1. Base Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_40%_30%,rgba(201,166,75,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* 2. Brand Watermark (Synchronized with site-wide identity) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.12, 0.18, 0.12]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[120vh] h-[120vh] grayscale brightness-150 contrast-125 blur-[30px]"
        >
          <NextImage
            src={normalizeImageUrl(logoUrl)}
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0A0A0A_95%)] opacity-80" />
      </div>

      {/* 3. Architectural Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#C9A64B 1px, transparent 1px), linear-gradient(90deg, #C9A64B 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      
      {/* ── CONTENT LAYER ─────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Communication */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-[#C9A64B]" />
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#C9A64B]">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,6.5rem)] font-light text-[#F5F2EA] leading-[0.95]"
            >
              {titleMain}
              <br />
              <span className="gold-text font-semibold italic">{titleGold}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm md:text-base max-w-sm leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          {/* Right: The Glass Seal (Contact Visual) */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Floating Glass Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-8 overflow-hidden group"
              >
                {/* Internal Decorative Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#C9A64B] opacity-[0.03] blur-[60px] group-hover:opacity-[0.06] transition-opacity duration-700" />
                
                {/* The Logo "Seal" */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 grayscale brightness-125 contrast-125 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                  <NextImage
                    src={normalizeImageUrl(logoUrl)}
                    alt="ANU CREATION Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Info Text */}
                <div className="text-center space-y-3 z-10">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#C9A64B]/80 font-medium">
                    Studio Availability
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F2EA] opacity-60">
                    Response Within 24 Hours
                  </p>
                </div>

                {/* Architectural Accent Line */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-px bg-[#C9A64B]/20" />
              </motion.div>

              {/* Outside Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-10 right-0 lg:right-4 flex flex-col items-end gap-1"
              >
                <span className="font-[family-name:var(--font-inter)] text-[8px] tracking-[0.5em] uppercase text-[#F5F2EA]"> let's build something </span>
                <span className="font-[family-name:var(--font-inter)] text-[8px] tracking-[0.5em] uppercase text-[#C9A64B] font-bold"> Distinct </span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
