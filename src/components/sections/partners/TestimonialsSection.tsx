"use client";

import { motion } from "framer-motion";
import { Quote, ExternalLink, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { normalizeImageUrl } from "@/lib/utils";

interface TestimonialsSectionProps {
  data: any[]; // Sanity testimonials
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  if (!data || data.length === 0) return null;

  // Filter for valid items only
  const displayTestimonials = data.filter((t: any) => t && t.quote && t.author);

  if (displayTestimonials.length === 0) return null;

  // Business link for global CTA
  const GOOGLE_BUSINESS_LINK = "https://share.google/mCu7D1fnH55iGwy6e";

  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 text-center">
          <SectionHeader
            eyebrow="Client Stories"
            title="What They"
            titleGold="Say"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayTestimonials.map((t: any, i: number) => (
            <motion.div
              key={t._id || t.author || i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              onClick={() => t.reviewUrl && window.open(t.reviewUrl, "_blank")}
              className={`group bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#C9A64B]/25 p-8 flex flex-col gap-6 transition-all duration-300 relative overflow-hidden ${t.reviewUrl ? "cursor-pointer" : ""}`}
            >
              {/* Hover top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon corner fallback for external links */}
              {t.reviewUrl && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                  <ExternalLink size={14} className="text-[#C9A64B]" />
                </div>
              )}

              {/* Header with Avatar and Quote Icon */}
              <div className="flex items-start justify-between">
                {t.profileImageUrl ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C9A64B]/30 mb-2">
                    <img 
                      src={normalizeImageUrl(t.profileImageUrl)} 
                      alt={t.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <Quote size={22} className="text-[#C9A64B]/40" />
                )}
                {t.profileImageUrl && <Quote size={18} className="text-[#C9A64B]/20" />}
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating || 5 }).map((_, si) => (
                  <span key={si} className="text-[#C9A64B] text-xs">★</span>
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#F5F2EA] leading-[1.6] italic flex-1 line-clamp-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-[#1A1A1A] pt-5 space-y-1">
                <span className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#F5F2EA] block group-hover:text-[#C9A64B] transition-colors duration-300">
                  {t.author}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[11px] text-[#6B6560]">
                  {t.role}{t.companyName ? ` @ ${t.companyName}` : ''}
                </span>
                {t.reviewSource && (
                  <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-widest uppercase text-[#C9A64B]/60 block mt-1">
                    via {t.reviewSource}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href={GOOGLE_BUSINESS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A64B] hover:text-[#D8BA67] transition-all duration-300"
          >
            <span className="border-b border-transparent group-hover:border-[#C9A64B] pb-1">
              View all reviews on Google
            </span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
