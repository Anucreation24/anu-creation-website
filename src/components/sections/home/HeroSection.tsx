"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

import { useState, useEffect } from "react";
 
/**
 * Cinematic hero section — full viewport height with atmospheric logo watermark,
 * radial vignette, and architectural grid pattern.
 */
export default function HeroSection({ data }: { data: any }) {
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);
  const eyebrow = data?.eyebrow || "The Visual Anthology";
  const titleFirst = data?.titleFirst || "Where Ideas";
  const titleGold = data?.titleGold || "Become";
  const titleLast = data?.titleLast || "Resonance.";
  const subtitle = data?.subtitle || "A premium creative studio crafting cinematic identities through bespoke artistry, design, and storytelling.";
  const primaryCta = data?.primaryCta || "Start a Project";
  const secondaryCta = data?.secondaryCta || "View Products";
  const logoUrl = "/images/logo.png";

  return (
    <section
      className="relative min-h-[85svh] md:min-h-screen flex items-center justify-center md:justify-center overflow-hidden bg-[#0A0A0A]"
      aria-label="Hero"
    >
      {/* ── BACKGROUND LAYERS ──────────────────────────────────────── */}
      
      {/* 1. Base Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,166,75,0.08)_0%,transparent_65%)] pointer-events-none" />

      {/* 2. Atmospheric Brand Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.10, 0.05]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-[60vh] h-[60vh] md:w-[140vh] md:h-[140vh] grayscale brightness-150 contrast-125 blur-[10px] md:blur-[30px]"
        >
          <NextImage
            src={normalizeImageUrl(logoUrl)}
            alt=""
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        
        {/* Cinematic Vignette Overlay to create depth on top of watermark */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0A0A0A_95%)] opacity-40 md:opacity-80" />
      </div>

      {/* 3. Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C9A64B 1px, transparent 1px), linear-gradient(90deg, #C9A64B 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 4. Bottom Fade Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      {/* ── CONTENT LAYER ─────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-[#C9A64B]" />
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#C9A64B]">
            {eyebrow}
          </span>
          <div className="w-8 h-px bg-[#C9A64B]" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,10vw,8rem)] leading-[0.92] font-light text-[#F5F2EA] mb-6"
        >
          {titleFirst}
          <br />
          <span className="gold-text font-semibold italic">{titleGold}</span>
          <br />
          {titleLast}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-base sm:text-lg max-w-lg mx-0 md:mx-auto text-left md:text-center leading-relaxed mb-12 shadow-sm"
        >
          {subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            id="hero-cta-primary"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-[#C9A64B] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D8BA67] active:scale-[0.98] transition-all duration-300 shadow-xl"
          >
            {primaryCta}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/products"
            id="hero-cta-secondary"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto border border-[#2A2A2A] text-[#F5F2EA] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C9A64B] hover:text-[#C9A64B] active:scale-[0.98] transition-all duration-300"
          >
            {secondaryCta}
          </Link>
        </motion.div>

        {/* Scroll indicator - Repositioned for mobile to avoid text clutter */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 right-10 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#6B6560]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-[#C9A64B]/60 to-transparent"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
