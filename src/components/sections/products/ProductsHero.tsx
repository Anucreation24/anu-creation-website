"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

/**
 * Refined Products Hero — replaces the ghost letter with a balanced 
 * atmospheric branding and a right-aligned precision glass card.
 */
export default function ProductsHero() {
  const logoUrl = "/images/logo.png";

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-[100px] pb-24">
      {/* ── BACKGROUND LAYERS ──────────────────────────────────────── */}
      
      {/* 1. Base Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_40%_30%,rgba(201,166,75,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* 2. Brand Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden text-[#C9A64B]">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.10, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[60vh] h-[60vh] md:w-[130vh] md:h-[130vh] grayscale brightness-150 contrast-125 blur-[15px] md:blur-[35px]"
        >
          <NextImage
            src={normalizeImageUrl(logoUrl)}
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0A0A0A_95%)] opacity-40 md:opacity-80" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Product Messaging */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#C9A64B] block"
            >
              Curated Collection
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] font-light text-[#F5F2EA] leading-[0.95]"
            >
              Our
              <br />
              <span className="gold-text font-semibold italic">Products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm md:text-base italic max-w-xs leading-relaxed"
            >
              Where craftsmanship meets artistic precision in every thread and frame.
            </motion.p>
          </div>

          {/* Right: The Showcase Card */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#C9A64B]/10 group"
            >
              {/* Glass Background */}
              <div className="absolute inset-0 backdrop-blur-3xl bg-white/[0.01]" />
              
              {/* Content within Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="relative w-48 h-48 mb-8 opacity-20 grayscale transition-all duration-700 group-hover:opacity-60 group-hover:grayscale-0">
                   <NextImage
                    src={normalizeImageUrl(logoUrl)}
                    alt=""
                    fill
                    className="object-contain p-4"
                  />
                </div>
                
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#F5F2EA] mb-2">Excellence Defined</h3>
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A64B]/60">Bespoke Production</p>
                
                {/* Architectural Corner Element */}
                <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#C9A64B]/30" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#C9A64B]/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
