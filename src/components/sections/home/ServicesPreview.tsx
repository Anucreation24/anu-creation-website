"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceIcon from "@/components/ui/ServiceIcon";

export default function ServicesPreview({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  // Filter for valid items only
  const displayServices = data.filter((s: any) => s && s.title).slice(0, 3);

  if (displayServices.length === 0) return null;

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Premium Solutions"
            title="What We"
            titleGold="Create"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A64B] hover:text-[#D8BA67] transition-colors duration-300 link-underline"
            >
              All Services <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Improved grid logic for natural reflow - 1 column on mobile for luxury clarity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:items-stretch lg:justify-center gap-6">
          {displayServices.map((svc: any, i: number) => {
            return (
              <motion.div
                key={svc._id || i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="w-full lg:flex-1 lg:min-w-[300px] max-w-[400px] mx-auto"
              >
                <Link
                  href={svc.href || `/services#${svc.slug || ""}`}
                  className="group bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#C9A64B]/30 p-8 lg:p-10 flex flex-col gap-5 h-full transition-all duration-300 relative overflow-hidden block"
                >
                  {/* Top border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="w-10 h-10 flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#C9A64B]/40 transition-colors duration-300">
                    <ServiceIcon name={svc.iconName} size={18} className="text-[#C9A64B]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#C9A64B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowUpRight size={12} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
