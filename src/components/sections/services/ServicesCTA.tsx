"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,166,75,0.07)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A64B]/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl lg:text-7xl font-light text-[#F5F2EA] leading-[1.05] mb-5"
        >
          Ready to Elevate
          <br />
          <span className="gold-text font-medium">Your Brand?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-sm leading-relaxed max-w-md mx-auto mb-10"
        >
          Join our roster of prestige clients and transform your creative
          vision into a digital legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          <Link
            href="/contact"
            id="services-cta-btn"
            className="group inline-flex items-center gap-2 px-9 py-4 bg-[#C9A64B] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D8BA67] active:scale-[0.98] transition-all duration-300"
          >
            Start a Project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
