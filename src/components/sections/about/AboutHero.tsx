"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";

export default function AboutHero({ data }: { data: any }) {
  const eyebrow = data?.eyebrow || "Our Story";
  const titleMain = data?.titleMain || "About";
  const titleGold = data?.titleGold || "Us";
  const logoUrl = "/images/logo.png";

  return (
    <section className="relative min-h-[85svh] md:min-h-[75vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-[100px] md:pt-[120px] pb-24">
      {/* Background warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_20%,rgba(201,166,75,0.06)_0%,transparent_65%)]" />

      {/* Brand Monogram Watermark */}
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
          className="relative w-[60vh] h-[60vh] md:w-[120vh] md:h-[120vh] grayscale brightness-150 contrast-125 blur-[10px] md:blur-[30px]"
        >
          <NextImage
            src={normalizeImageUrl(logoUrl)}
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0A0A0A_95%)] opacity-40 md:opacity-80" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-[#C9A64B]" />
              <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase text-[#C9A64B]">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,10vw,8rem)] font-light text-[#F5F2EA] leading-[0.9] -ml-1"
            >
              {titleMain}
              <br />
              <span className="gold-text font-medium italic">{titleGold}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] max-w-md leading-relaxed tracking-wide uppercase opacity-70"
            >
              Excellence defined by precision. Legacy built on trust. Discovery of the ANU CREATION standard.
            </motion.p>
          </div>

          {/* Right Content - Brand Mark */}
          <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Floating Frame */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 p-10 bg-gradient-to-br from-[#121212] to-[#080808] border border-[#1E1E1E] group-hover:border-[#C9A64B]/30 flex items-center justify-center transition-colors duration-500 shadow-2xl backdrop-blur-sm"
              >
                {/* Architectural Decor */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C9A64B]/40" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C9A64B]/40" />
                
                {/* Logo */}
                <div className="relative w-full h-full grayscale brightness-125 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700">
                  <NextImage
                    src={normalizeImageUrl(logoUrl)}
                    alt="ANU CREATION Logo"
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(201,166,75,0.05), transparent) opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>

              {/* Decorative text */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-8 right-0 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.5em] uppercase text-[#F5F2EA] hidden md:block"
              >
                Est. MMXXI
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
