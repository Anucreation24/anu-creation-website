"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

import SquareImage from "@/components/ui/SquareImage";

// Masonry-style gallery items with varying heights
export default function GalleryGlimpse({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  // Filter for valid items with images only
  const displayItems = data.filter((item: any) => item && item.imageUrl).slice(0, 6);

  if (displayItems.length === 0) return null;

  
  const gradients = [
    "from-[#1c1710] to-[#0d0d0d]",
    "from-[#141414] to-[#0a0a0a]",
    "from-[#181411] to-[#0d0d0d]",
    "from-[#111111] to-[#080808]",
    "from-[#191609] to-[#0d0d0d]",
    "from-[#151515] to-[#0a0a0a]",
  ];

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="Our Masterpieces"
            title="Gallery"
            titleGold="Glimpse"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A64B] hover:text-[#D8BA67] transition-colors duration-300"
            >
              Full Gallery <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Uniform Square Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {displayItems.map((item: any, i: number) => {
            const gradient = gradients[i % gradients.length];
            const isVideo = item.mediaType === "video";

            return (
              <motion.div
                key={item._id || i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <SquareImage 
                  src={item.imageUrl} 
                  alt={item.title} 
                  containerClassName={`bg-gradient-to-br ${gradient}`}
                  fallbackText="Gallery Piece"
                >
                  {/* Video Play Indicator */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                    <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.25em] uppercase text-[#C9A64B] mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#F5F2EA]">
                      {item.title}
                    </h4>
                  </div>
                </SquareImage>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
