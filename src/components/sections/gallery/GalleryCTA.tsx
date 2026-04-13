"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GalleryCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,166,75,0.07)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A64B]/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EA] leading-[1.05] mb-4"
        >
          Want Something
          <br />
          <span className="gold-text font-medium italic">Like This?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm leading-relaxed max-w-sm mx-auto mb-9 italic"
        >
          Let&apos;s create together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          <Link
            href="/contact"
            id="gallery-cta-btn"
            className="group inline-flex items-center gap-2 px-9 py-4 border border-[#C9A64B] text-[#C9A64B] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C9A64B] hover:text-[#0A0A0A] active:scale-[0.98] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
