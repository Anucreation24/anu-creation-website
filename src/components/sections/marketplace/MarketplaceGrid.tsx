"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { marketplaceListingsQuery } from "@/sanity/lib/queries";
import { MarketplaceListing } from "@/types/marketplace";
import SquareImage from "@/components/ui/SquareImage";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface MarketplaceGridProps {
  initialListings: MarketplaceListing[];
}

/**
 * MarketplaceGrid — A premium grid system for business listings.
 */
export default function MarketplaceGrid({ initialListings }: MarketplaceGridProps) {
  const [listings] = useState<MarketplaceListing[]>(initialListings);
  const [loading] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <div className="w-8 h-8 border-t-2 border-[#C9A64B] rounded-full animate-spin" />
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="text-center py-24 opacity-60">
        <p className="font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest text-[#B7B1A3]">
          No listings available in the market yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {listings.map((listing: any, index: number) => (
            <motion.div
              key={listing._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Featured Badge */}
              {listing.featured && (
                <div className="absolute -top-3 left-4 z-30 px-3 py-1 bg-[#C9A64B] text-[#0A0A0A] text-[9px] font-bold tracking-[0.2em] uppercase rounded-full shadow-lg">
                  Featured
                </div>
              )}

              <Link href={`/marketplace/${listing.slug}`} className="block">
                <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-[#0F0F0F] border border-white/[0.05] rounded-2xl transition-all duration-700 hover:border-[#C9A64B]/40 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                  {/* Premium Texture Background (Alternative to brand watermark) */}
                  <div className="absolute inset-0 z-0 opacity-[0.05]" 
                    style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201,166,75,0.15) 1px, transparent 0)`, backgroundSize: '24px 24px' }} 
                  />

                  {/* Top: Info hierarchy */}
                  <div className="relative z-10 p-7 flex flex-col h-full">
                    <div className="mb-4">
                       <span className="font-[family-name:var(--font-inter)] text-[8px] tracking-[0.4em] uppercase text-[#B7B1A3] font-bold block mb-2 opacity-60 group-hover:text-[#C9A64B] group-hover:opacity-100 transition-colors duration-500">
                        {listing.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#F5F2EA] leading-tight group-hover:text-white transition-colors duration-500">
                        {listing.businessName}
                      </h3>
                    </div>

                    {/* Refined Logo Presentation Section — controlled height */}
                    <div className="flex-1 min-h-0 flex items-center justify-center p-4">
                      <SquareImage 
                        src={listing.logoUrl} 
                        alt={listing.businessName}
                        fallbackText="Brand Identity"
                        containerClassName="max-w-[130px] rounded-2xl group-hover:shadow-[0_0_30px_rgba(201,166,75,0.08)] bg-transparent border-white/5"
                        className="p-5 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        showHoverZoom={false}
                      />
                    </div>

                    {/* Bottom Info — Ensured spacing */}
                    <div className="mt-3 space-y-5">
                      <p className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-[11px] leading-relaxed line-clamp-2 opacity-60 group-hover:opacity-90 transition-opacity duration-500">
                        {listing.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                        <div className="flex items-center gap-2 group/cta">
                           <span className="text-[10px] text-[#C9A64B] font-bold tracking-[0.2em] uppercase transition-all group-hover:tracking-[0.25em]">Explore Profile</span>
                           <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A64B] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                        {listing.contact?.whatsapp && (
                           <div 
                             onClick={(e) => {
                               e.preventDefault();
                               window.open(`https://wa.me/${listing.contact?.whatsapp?.replace(/\+/g, '')}`, '_blank');
                             }}
                             className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 text-[#B7B1A3] hover:text-[#C9A64B] hover:border-[#C9A64B]/30 transition-all duration-300 cursor-pointer"
                           >
                              <MessageCircle className="w-4 h-4" />
                           </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
