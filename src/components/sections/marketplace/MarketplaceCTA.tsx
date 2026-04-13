"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Rocket } from "lucide-react";
import Link from "next/link";

/**
 * MarketplaceCTA — Premium call-to-action for businesses to join the platform.
 * Placed at the bottom of the marketplace directory.
 */
export default function MarketplaceCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[#C9A64B]/[0.02] border-y border-white/[0.05]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A64B]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A64B]/10 border border-[#C9A64B]/20"
            >
              <Star className="w-3 h-3 text-[#C9A64B]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A64B] font-bold">Partner With Us</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl text-[#F5F2EA] leading-tight"
            >
              Does your business <br />
              <span className="gold-text italic">deserve a stage?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-base leading-relaxed max-w-md"
            >
              Join the ANU CREATION marketplace. Showcase your services, display your products, 
              and connect with a high-end audience through our curated digital ecosystem.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A64B] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest hover:bg-[#E2C37A] transition-all duration-300 shadow-xl shadow-[#C9A64B]/10 group"
              >
                Apply to be Listed
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-[#F5F2EA] font-medium text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
             <div className="space-y-4 pt-12">
                <FeatureCard 
                  icon={<Globe className="w-5 h-5" />} 
                  title="Global Presence" 
                  desc="Reach customers beyond your local area."
                />
                <FeatureCard 
                  icon={<Rocket className="w-5 h-5" />} 
                  title="Zero Setup" 
                  desc="Focus on your craft, we handle the tech."
                />
             </div>
             <div className="space-y-4">
                <FeatureCard 
                  icon={<Star className="w-5 h-5" />} 
                  title="Premium Branding" 
                  desc="Elevated presentation by ANU CREATION."
                />
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all">
                   <div className="w-16 h-16 relative">
                      <NextImage src="/images/logo.png" alt="" fill className="object-contain opacity-20" />
                   </div>
                   <span className="text-[10px] mt-4 uppercase tracking-widest">Digital Spotlight</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C9A64B]/20 transition-all duration-500 group">
      <div className="w-10 h-10 rounded-xl bg-[#C9A64B]/10 flex items-center justify-center text-[#C9A64B] mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F5F2EA] mb-2">{title}</h4>
      <p className="font-[family-name:var(--font-inter)] text-xs text-[#B7B1A3] leading-relaxed opacity-60 group-hover:opacity-90 transition-opacity">
        {desc}
      </p>
    </div>
  );
}

import NextImage from "next/image";
