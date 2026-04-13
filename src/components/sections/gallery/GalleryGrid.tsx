"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import SquareImage from "@/components/ui/SquareImage";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";

const gradients = [
  "from-[#151210] to-[#090908]",
  "from-[#111111] to-[#080808]",
  "from-[#141209] to-[#0a0a0a]",
  "from-[#131313] to-[#080808]",
  "from-[#111010] to-[#090909]",
  "from-[#161412] to-[#0a0909]",
  "from-[#181608] to-[#0d0c09]",
  "from-[#0e1210] to-[#080a09]",
  "from-[#111111] to-[#090909]",
  "from-[#0f0e07] to-[#090808]",
  "from-[#141411] to-[#090909]",
  "from-[#151210] to-[#0a0908]",
];

export default function GalleryGrid({ data }: { data: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  if (!data || data.length === 0) return null;

  // Filter for valid items
  const displayItems = data.filter((item: any) => item && item.imageUrl);
  if (displayItems.length === 0) return null;

  const categories = ["All", ...Array.from(new Set(displayItems.map((item: any) => item.category)))];
  const mediaTypes = ["All", "Image", "Video"];

  const filtered = displayItems.filter((item: any) => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const typeMatch = activeType === "All" || 
                     (activeType === "Image" && item.mediaType === "image") || 
                     (activeType === "Video" && item.mediaType === "video");
    return categoryMatch && typeMatch;
  });

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* ── Type filter ─────────────────────────────────────────── */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-[#6B6560] mr-2">Type:</span>
            {mediaTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeType === type
                    ? "border-[#C9A64B] text-[#C9A64B] bg-[#C9A64B]/5"
                    : "border-[#1E1E1E] text-[#6B6560] hover:border-[#2A2A2A] hover:text-[#B7B1A3]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* ── Category filter ─────────────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="hidden sm:inline font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-[#6B6560] mr-2">Category:</span>
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-[#C9A64B]/50 text-[#C9A64B] bg-[#C9A64B]/5"
                    : "border-transparent text-[#6B6560] hover:text-[#B7B1A3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Uniform Square Grid ─────────────────────────────────────────── */}
        <motion.div
           layout
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item: any, i: number) => {
              const gradient = gradients[i % gradients.length];
              const isVideo = item.mediaType === "video";

              return (
                <motion.article
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer"
                  onClick={() => isVideo && setSelectedVideo({ url: item.videoUrl, title: item.title })}
                >
                  <SquareImage 
                    src={item.imageUrl} 
                    alt={item.title} 
                    containerClassName={`bg-gradient-to-br ${gradient}`}
                    fallbackText="Gallery Piece"
                  >
                    {/* Video Play Indicator */}
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5 z-20">
                      <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#C9A64B] mb-1.5">
                        {item.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#F5F2EA]">
                        {item.title}
                      </h3>
                      {item.description && (
                         <p className="mt-2 text-[10px] text-[#B7B1A3] leading-relaxed line-clamp-2 font-[family-name:var(--font-inter)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 italic">
                            {item.description}
                         </p>
                      )}
                    </div>
                  </SquareImage>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#6B6560] italic">
              No pieces found in this selection.
            </p>
          </div>
        )}

        {/* Item count */}
        <motion.p
          layout
          className="mt-12 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#6B6560] text-center"
        >
          Showing {filtered.length} of {displayItems.length} curated works
        </motion.p>
      </div>

      {/* Video Modal */}
      <VideoPlayerModal 
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
    </section>
  );
}
