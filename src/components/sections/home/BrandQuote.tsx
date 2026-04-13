"use client";

import { motion } from "framer-motion";

export default function BrandQuote({ data }: { data: any }) {
  const quoteTextPart1 = data?.quoteTextPart1 || "We do not create content.";
  const quoteTextGold = data?.quoteTextGold || "We craft legacies.";
  const attribution = data?.attribution || "ANU CREATION";

  return (
    <section className="relative py-32 overflow-hidden bg-[#080808]">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,166,75,0.06)_0%,transparent_70%)]" />

      {/* Top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A64B]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A64B]/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-left md:text-center">
        {/* Opening mark */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-cormorant)] text-8xl text-[#C9A64B]/30 leading-none mb-4 select-none"
          aria-hidden="true"
        >
          "
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F2EA] leading-[1.3] italic mb-8"
        >
          {quoteTextPart1}
          <br />
          <span className="gold-text font-medium not-italic">
            {quoteTextGold}
          </span>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-start md:justify-center gap-4"
        >
          <div className="w-10 h-px bg-[#C9A64B]/40" />
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#6B6560]">
            {attribution}
          </span>
          <div className="w-10 h-px bg-[#C9A64B]/40" />
        </motion.div>
      </div>
    </section>
  );
}
