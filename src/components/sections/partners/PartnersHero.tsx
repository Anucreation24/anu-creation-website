"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

/**
 * Refined Partners Hero — prestigious and collaborative focus.
 * Introduces high-contrast atmospheric watermarks and a left-aligned 
 * glass seal to balance the partnership narrative.
 */
export default function PartnersHero() {
  const logoUrl = "/images/logo.png";

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-[100px] pb-24">
      {/* ── BACKGROUND LAYERS ──────────────────────────────────────── */}
      
      {/* 1. Base Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_40%_20%,rgba(201,166,75,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* 2. Brand Watermark (Global Pulse) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden text-[#C9A64B]">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[140vh] h-[140vh] grayscale brightness-125 contrast-125 blur-[45px]"
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
          
          {/* Left: The Collaborative Seal (Visual Anchor) */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative"
             >
                {/* Rotating Outer Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 border border-[#C9A64B]/10 rounded-full border-dashed" 
                />
                
                {/* Main Glass Seal */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 backdrop-blur-3xl bg-white/[0.02] border border-[#C9A64B]/15 rounded-full flex flex-col items-center justify-center p-12 overflow-hidden">
                   <div className="relative w-full h-full grayscale brightness-150 contrast-125 opacity-40">
                      <NextImage
                        src={normalizeImageUrl(logoUrl)}
                        alt=""
                        fill
                        className="object-contain p-4"
                      />
                   </div>
                   
                   {/* Bottom Text Pill */}
                   <div className="absolute bottom-10 px-4 py-1.5 bg-[#C9A64B]/10 border border-[#C9A64B]/20 rounded-full backdrop-blur-md">
                      <span className="font-[family-name:var(--font-inter)] text-[8px] tracking-[0.3em] uppercase text-[#C9A64B] font-bold whitespace-nowrap">
                         Global Synergy
                      </span>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Right: Partner Narrative */}
          <div className="order-1 lg:order-2 space-y-6 lg:text-right">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 lg:justify-end"
            >
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#C9A64B]">
                Trusted Excellence
              </span>
              <div className="w-8 h-px bg-[#C9A64B]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,7vw,6.5rem)] font-light text-[#F5F2EA] leading-[0.9] mb-5"
            >
              Our
              <br />
              <span className="gold-text font-semibold italic uppercase">Partners</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm md:text-base max-w-sm ml-auto leading-relaxed"
            >
              Brands that trust our craft to elevate their identity and amplify
              their voice in the global market.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
