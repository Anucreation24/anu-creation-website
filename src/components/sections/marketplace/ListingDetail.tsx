"use client";

import { MarketplaceListing } from "@/types/marketplace";
import { normalizeImageUrl } from "@/lib/utils";
import NextImage from "next/image";
import { motion } from "framer-motion";
import SquareImage from "@/components/ui/SquareImage";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  ChevronRight,
  ExternalLink 
} from "lucide-react";

interface ListingDetailProps {
  listing: MarketplaceListing;
}

/**
 * ListingDetail — A high-end profile view for a marketplace business.
 * Displays brand visuals, narrative, services, and products with CTA actions.
 */
export default function ListingDetail({ listing }: ListingDetailProps) {
  const logoUrl = "/images/logo.png";

  return (
    <article className="min-h-screen bg-[#0A0A0A] pb-24">
      {/* ── HEADER VISUALS ────────────────────────────────────────── */}
      <section className="relative h-[45vh] lg:h-[60vh] overflow-hidden">
        {/* Cover Image */}
        {listing.coverImageUrl ? (
          <div className="absolute inset-0">
            <NextImage
              src={normalizeImageUrl(listing.coverImageUrl)}
              alt=""
              fill
              className="object-cover opacity-40 brightness-75 transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#111111] grid-bg opacity-20" />
        )}

        {/* Brand Overlay (Atmosphere) */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 lg:p-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-end lg:items-center gap-6 lg:gap-10 translate-y-12 lg:translate-y-16">
          {/* Logo Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl p-6 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] rotate-12 blur-[10px] md:blur-[30px]">
               <NextImage src="/images/logo.png" alt="" fill className="object-contain scale-100 md:scale-150" />
            </div>
            {listing.logoUrl && (
              <div className="relative w-full h-full grayscale brightness-125">
                 <NextImage
                   src={normalizeImageUrl(listing.logoUrl)}
                   alt={listing.businessName}
                   fill
                   className="object-contain"
                 />
              </div>
            )}
          </motion.div>

          <div className="flex-1 text-right lg:text-left space-y-2 pb-6 lg:pb-0">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase text-[#C9A64B] font-bold"
             >
               {listing.category}
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-6xl font-light text-[#F5F2EA]"
             >
               {listing.businessName}
             </motion.h1>
             {listing.location && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex items-center justify-end lg:justify-start gap-2 text-[#B7B1A3] text-sm"
               >
                 <MapPin className="w-3.5 h-3.5 text-[#C9A64B]" />
                 <span>{listing.location}</span>
               </motion.div>
             )}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="mt-24 lg:mt-32 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Col: Narrative & Offerings (8 cols) */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F2EA] flex items-center gap-4">
               About the Business
               <div className="flex-1 h-px bg-white/5" />
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#B7B1A3] leading-relaxed text-base lg:text-lg whitespace-pre-wrap opacity-90">
              {listing.fullDescription || listing.shortDescription}
            </p>
          </div>

          {/* Services Section */}
          {listing.services && listing.services.length > 0 && (
            <div className="space-y-10">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F2EA] flex items-center gap-4">
                 Services Offered
                 <div className="flex-1 h-px bg-white/5" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {listing.services.map((service, idx) => (
                   <div key={idx} className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#C9A64B]/20 transition-all duration-500 group">
                      <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F5F2EA] mb-3 group-hover:text-[#C9A64B] transition-colors">
                        {service.title}
                      </h4>
                      {service.category && (
                        <span className="text-[10px] uppercase text-[#C9A64B] tracking-widest block mb-4">{service.category}</span>
                      )}
                      <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] leading-relaxed opacity-80">
                        {service.description}
                      </p>
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* Products Section */}
          {listing.products && listing.products.length > 0 && (
            <div className="space-y-10">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F2EA] flex items-center gap-4">
                 Product Showcase
                 <div className="flex-1 h-px bg-white/5" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {listing.products.map((product, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-700">
                  <SquareImage 
                    src={product.imageUrl} 
                    alt={product.title}
                    fallbackText="Product Craft"
                  >
                    {product.price && (
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-lg text-[#C9A64B] font-bold text-xs z-10">
                         {product.price}
                      </div>
                    )}
                  </SquareImage>
                  <div className="p-6">
                    <span className="text-[9px] uppercase tracking-widest text-[#C9A64B] block mb-2">{product.category}</span>
                    <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F5F2EA] mb-2">{product.title}</h4>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#B7B1A3] leading-relaxed opacity-70">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Contact Sideboard (4 cols) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
           {(listing.contact?.whatsapp || listing.contact?.email || listing.contact?.phone || listing.contact?.websiteUrl) && (
             <div className="p-8 rounded-2xl bg-[#C9A64B]/5 border border-[#C9A64B]/20 backdrop-blur-sm space-y-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#F5F2EA]">Direct Contact</h3>
                
                <div className="space-y-4">
                   {listing.contact?.whatsapp && (
                      <a 
                        href={`https://wa.me/${listing.contact.whatsapp.replace(/\+/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A]/40 border border-white/5 hover:border-[#C9A64B]/30 hover:bg-[#C9A64B]/10 transition-all duration-300 group"
                      >
                         <div className="flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 text-[#C9A64B]" />
                            <span className="text-sm text-[#F5F2EA]">WhatsApp</span>
                         </div>
                         <ChevronRight className="w-4 h-4 text-[#C9A64B]/40 group-hover:text-[#C9A64B] transition-colors" />
                      </a>
                   )}
                   {listing.contact?.email && (
                      <a 
                        href={`mailto:${listing.contact.email}`}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A]/40 border border-white/5 hover:border-[#C9A64B]/30 hover:bg-[#C9A64B]/10 transition-all duration-300 group"
                      >
                         <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#C9A64B]" />
                            <span className="text-sm text-[#F5F2EA]">Email</span>
                         </div>
                         <ChevronRight className="w-4 h-4 text-[#C9A64B]/40 group-hover:text-[#C9A64B] transition-colors" />
                      </a>
                   )}
                   {listing.contact?.phone && (
                      <a 
                        href={`tel:${listing.contact.phone}`}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A]/40 border border-white/5 hover:border-[#C9A64B]/30 hover:bg-[#C9A64B]/10 transition-all duration-300 group"
                      >
                         <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[#C9A64B]" />
                            <span className="text-sm text-[#F5F2EA]">Phone</span>
                         </div>
                         <ChevronRight className="w-4 h-4 text-[#C9A64B]/40 group-hover:text-[#C9A64B] transition-colors" />
                      </a>
                   )}
                   {listing.contact?.websiteUrl && (
                      <a 
                        href={listing.contact.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A]/40 border border-white/5 hover:border-[#C9A64B]/30 hover:bg-[#C9A64B]/10 transition-all duration-300 group"
                      >
                         <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-[#C9A64B]" />
                            <span className="text-sm text-[#F5F2EA]">Website</span>
                         </div>
                         <ExternalLink className="w-4 h-4 text-[#C9A64B]/40 group-hover:text-[#C9A64B] transition-colors" />
                      </a>
                   )}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-center uppercase tracking-[0.2em] text-[#B7B1A3]/60">
                    Verified Partner
                  </p>
                </div>
             </div>
           )}

           {/* Branded Watermark in Sidebar */}
           <div className="relative h-48 rounded-2xl bg-white/[0.01] border border-white/[0.03] flex items-center justify-center p-12 overflow-hidden grayscale brightness-125 opacity-20 hidden lg:flex">
              <NextImage src="/images/logo.png" alt="" fill className="object-contain p-8 scale-150 rotate-[-15deg]" />
           </div>
        </aside>
      </section>
    </article>
  );
}
