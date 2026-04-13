"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

/**
 * Refined Gallery Hero — immersive and editorial focus.
 * Introduces high-contrast atmospheric watermarks and a 
 * right-aligned museum-inspired frame.
 */
export default function GalleryHero() {
  const logoUrl = "/images/logo.png";

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-[100px] pb-24">
      {/* ── BACKGROUND LAYERS ──────────────────────────────────────── */}
      
      {/* 1. Base Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(201,166,75,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* 2. Brand Watermark (Immersive Scale) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden text-[#C9A64B]">
        <motion.div
          animate={{ 
            scale: [1, 1.03, 1],
            opacity: [0.05, 0.10, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[60vh] h-[60vh] md:w-[150vh] md:h-[150vh] grayscale brightness-125 contrast-125 blur-[15px] md:blur-[40px]"
        >
          <NextImage
            src={normalizeImageUrl(logoUrl)}
            alt=""
            fill
            className="object-contain opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0A0A0A_95%)] opacity-40 md:opacity-80" />
      </div>

      {/* 3. Architectural Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#C9A64B 1px, transparent 1px), linear-gradient(90deg, #C9A64B 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* ── CONTENT LAYER ─────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Heading Area */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.5em] uppercase text-[#C9A64B] italic">
                The Visual Anthology
              </span>
              <div className="flex-1 h-px bg-[#C9A64B]/20" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,7vw,6.5rem)] font-light text-[#F5F2EA] leading-[0.9] mb-12"
            >
              Our
              <br />
              <span className="gold-text font-semibold italic">Masterpieces</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm md:text-base leading-relaxed max-w-sm border-l border-[#C9A64B]/30 pl-6"
            >
              A curated selection of bespoke craftsmanship, where art meets
              functionality in every frame and fabric.
            </motion.p>
          </div>

          {/* Right: The Editorial Seal / Canvas Frame */}
          <div className="relative flex justify-center lg:justify-end">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full max-w-sm aspect-square flex items-center justify-center"
             >
                {/* Visual Canvas Element */}
                <div className="absolute inset-0 border border-[#C9A64B]/20 rotate-45 transform translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border border-[#C9A64B]/10 -rotate-12" />
                
                {/* Centered Glass Seal */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 backdrop-blur-2xl bg-[#0A0A0A]/40 rounded-full border border-white/[0.05] shadow-2xl flex items-center justify-center p-12">
                   <div className="relative w-full h-full grayscale brightness-125 opacity-20">
                      <NextImage
                        src={normalizeImageUrl(logoUrl)}
                        alt=""
                        fill
                        className="object-contain"
                      />
                   </div>
                   
                   {/* Decorative Outer Rings */}
                   <div className="absolute inset-0 border border-[#C9A64B]/10 rounded-full scale-110" />
                   <div className="absolute inset-0 border border-[#C9A64B]/5 rounded-full scale-125 animate-pulse" />
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
