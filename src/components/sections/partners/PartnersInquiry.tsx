"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnersInquiry() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0A0A0A]">
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-16 h-px bg-[#C9A64B]/60" />
      <div className="absolute top-0 left-0 w-px h-16 bg-[#C9A64B]/60" />
      <div className="absolute bottom-0 right-0 w-16 h-px bg-[#C9A64B]/60" />
      <div className="absolute bottom-0 right-0 w-px h-16 bg-[#C9A64B]/60" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,166,75,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A64B] block mb-6"
        >
          Become a Partner
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light text-[#F5F2EA] leading-[1.05] mb-5"
        >
          Let&apos;s Create
          <br />
          <span className="gold-text font-medium italic">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm leading-relaxed max-w-md mx-auto mb-10"
        >
          Interested in a long-term creative partnership? We work with select
          brands who value excellence above all else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            id="partners-inquiry-btn"
            className="group inline-flex items-center gap-2 px-9 py-4 bg-[#C9A64B] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D8BA67] active:scale-[0.98] transition-all duration-300"
          >
            Partner With Us
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="https://wa.me/94753103536"
            id="partners-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 border border-[#2A2A2A] text-[#F5F2EA] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C9A64B] hover:text-[#C9A64B] active:scale-[0.98] transition-all duration-300"
          >
            WhatsApp Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
