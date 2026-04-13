"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleGold?: string;        // optional second line in gold
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

/**
 * Reusable section header with optional gold eyebrow label,
 * mixed serif heading, and muted subtitle.
 */
export default function SectionHeader({
  eyebrow,
  title,
  titleGold,
  subtitle,
  centered = false,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "space-y-4",
        centered && "text-center flex flex-col items-center",
        className
      )}
    >
      {/* Eyebrow label */}
      {eyebrow && (
        <div className="flex items-center gap-3">
          {centered && <div className="w-6 h-px bg-[#C9A64B]" />}
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A64B] font-semibold">
            {eyebrow}
          </span>
          {centered && <div className="w-6 h-px bg-[#C9A64B]" />}
          {!centered && <div className="flex-1 h-px bg-gradient-to-r from-[#C9A64B]/40 to-transparent max-w-[80px]" />}
        </div>
      )}

      {/* Main heading */}
      <h2
        className={cn(
          "font-[family-name:var(--font-cormorant)] leading-[1.1] text-[#F5F2EA]",
          "text-3xl sm:text-5xl lg:text-6xl font-light",
          titleClassName
        )}
      >
        {title}
        {titleGold && (
          <>
            <br />
            <span className="gold-text font-medium">{titleGold}</span>
          </>
        )}
      </h2>

      {/* Subtle divider */}
      <div className={cn("w-10 h-px bg-[#C9A64B]/60", centered && "mx-auto")} />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "font-[family-name:var(--font-inter)] text-[#B7B1A3] leading-relaxed text-base max-w-xl",
            centered && "mx-auto text-center"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
