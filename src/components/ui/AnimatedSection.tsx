"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

/**
 * Wrapper that fades + slides child content into view on scroll.
 * Use this for every major page section.
 */
export default function AnimatedSection({
  children,
  delay = 0,
  className,
  id,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
