"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner({ data }: { data: any }) {
  const eyebrow = data?.eyebrow || "Ready to Elevate?";
  const titleMain = data?.titleMain || "Ready to Create";
  const titleGold = data?.titleGold || "Your Masterpiece?";
  const description = data?.description || "Join our roster of prestige clients and transform your creative vision into a digital legacy.";
  const primaryCta = data?.primaryCta || "Start a Project";
  const secondaryCta = data?.secondaryCta || "Our Services";

  return (
    <section className="relative py-28 overflow-hidden bg-[#0A0A0A]">
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-[#C9A64B] to-transparent" />
      <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-[#C9A64B] to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-[#C9A64B] to-transparent" />
      <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-[#C9A64B] to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_50%_50%,rgba(201,166,75,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A64B] mb-6"
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl lg:text-7xl font-light text-[#F5F2EA] leading-[1.05] mb-6"
        >
          {titleMain}
          <br />
          <span className="gold-text font-medium">{titleGold}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-base max-w-lg mx-auto leading-relaxed mb-10"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            id="cta-banner-primary"
            className="group inline-flex items-center gap-2 px-9 py-4 bg-[#C9A64B] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D8BA67] active:scale-[0.98] transition-all duration-300"
          >
            {primaryCta}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/services"
            id="cta-banner-secondary"
            className="inline-flex items-center gap-2 px-9 py-4 border border-[#2A2A2A] text-[#F5F2EA] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C9A64B] hover:text-[#C9A64B] active:scale-[0.98] transition-all duration-300"
          >
            {secondaryCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
