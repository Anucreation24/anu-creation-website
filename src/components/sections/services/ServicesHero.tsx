"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

/**
 * Refined Services Hero — capability-driven composition.
 * Replaces the triangle accent with technical architectural hairlines
 * and a centered brand pulse.
 */
export default function ServicesHero() {
  const logoUrl = "/images/logo.png";

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-[100px] pb-24">
      {/* ── BACKGROUND LAYERS ──────────────────────────────────────── */}
      
      {/* 1. Base Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_30%,rgba(201,166,75,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* 2. Brand Watermark (Centered Capability Focus) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden text-[#C9A64B]">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.10, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[60vh] h-[60vh] md:w-[140vh] md:h-[140vh] grayscale brightness-150 contrast-125 blur-[20px] md:blur-[50px]"
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

      {/* 3. Architectural Pattern & Hairlines */}
      <div
        className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#C9A64B 1px, transparent 1px), linear-gradient(90deg, #C9A64B 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      
      {/* Vertical hairlines suggestive of blueprints/structure */}
      <div className="absolute top-0 bottom-0 left-[20%] w-px bg-[#1A1A1A] hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-[21%] w-px bg-[#1A1A1A]/30 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-[20%] w-px bg-[#1A1A1A] hidden lg:block" />

      {/* ── CONTENT LAYER ─────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-8 flex justify-center"
        >
          <span className="px-4 py-1 border border-[#C9A64B]/20 rounded-full font-[family-name:var(--font-inter)] text-[9px] tracking-[0.4em] uppercase text-[#C9A64B] backdrop-blur-sm">
            Bespoke Capabilities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7.5rem)] font-light text-[#F5F2EA] leading-[0.9] mb-8"
        >
          Our
          <br />
          <span className="gold-text font-semibold italic uppercase tracking-tight">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm md:text-base max-w-lg mx-auto leading-relaxed border-t border-[#C9A64B]/10 pt-8"
        >
          &quot;Powering Your Brand from Vision to Execution with unrivaled precision and artistic mastery.&quot;
        </motion.p>
      </div>
    </section>
  );
}
