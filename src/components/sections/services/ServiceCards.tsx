"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";

export default function ServiceCards({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  // Filter for valid items only
  const displayServices = data.filter((s: any) => s && s.title);

  if (displayServices.length === 0) return null;

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-4">
          {displayServices.map((svc: any, i: number) => {
            return (
              <motion.article
                key={svc._id || i}
                id={svc.slug || svc._id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="group bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#C9A64B]/30 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-12 items-start transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                {/* Left — icon + title */}
                <div className="flex flex-row lg:flex-col gap-4 items-start">
                  <div className="w-12 h-12 border border-[#2A2A2A] group-hover:border-[#C9A64B]/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <ServiceIcon name={svc.iconName} size={20} className="text-[#C9A64B]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-medium text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300">
                      {svc.title}
                    </h2>
                    <p className="font-[family-name:var(--font-inter)] text-xs italic text-[#6B6560] mt-1">
                      {svc.tagline}
                    </p>
                  </div>
                </div>

                {/* Center — description */}
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] leading-[1.9] mb-6">
                    {svc.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A64B] hover:text-[#D8BA67] transition-colors duration-300"
                  >
                    Get a Quote <ArrowUpRight size={12} />
                  </a>
                </div>

                {/* Right — deliverables */}
                <div className="space-y-2">
                  <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#6B6560] block mb-3">
                    Includes
                  </span>
                  {svc.deliverables?.map((d: string, idx: number) => (
                    <div key={`${i}-deliv-${idx}`} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#C9A64B]/50" />
                      <span className="font-[family-name:var(--font-inter)] text-xs text-[#B7B1A3]">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ghost number */}
                <span className="absolute bottom-6 right-8 font-[family-name:var(--font-cormorant)] text-6xl font-light text-[#C9A64B]/05 select-none pointer-events-none lg:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
