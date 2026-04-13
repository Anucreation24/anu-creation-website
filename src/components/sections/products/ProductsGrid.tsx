"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SquareImage from "@/components/ui/SquareImage";

export default function ProductsGrid({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  // Filter for valid items only
  const displayProducts = data.filter((p: any) => p && p.title);

  if (displayProducts.length === 0) return null;

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-32">
        {displayProducts.map((product: any, idx: number) => (
          <div key={product._id} id={product.slug || product._id} className="space-y-12">
            {/* Product header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <SectionHeader
                eyebrow={product.category}
                title={product.title}
              />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-[family-name:var(--font-cormorant)] text-2xl text-[#C9A64B]"
              >
                {product.priceLabel}
              </motion.span>
            </div>

            {/* Two-column layout: description + featured image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Description */}
              <div className="space-y-6">
                <p className="font-[family-name:var(--font-inter)] text-[#B7B1A3] text-[15px] leading-[1.9]">
                  {product.description}
                </p>

                {/* Features list */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-3 border-t border-[#1A1A1A] pt-6">
                    {product.features.map((item: any) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-3 border-b border-[#141414] group/item"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-[#C9A64B]/50" />
                          <span className="font-[family-name:var(--font-inter)] text-sm text-[#F5F2EA] group-hover/item:text-[#C9A64B] transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-right">
                          <span className="font-[family-name:var(--font-inter)] text-[11px] text-[#6B6560]">
                            {item.size}
                          </span>
                          <span className="font-[family-name:var(--font-inter)] text-[11px] text-[#C9A64B]/60">
                            {item.finish}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A64B] hover:text-[#D8BA67] transition-colors duration-300"
                >
                  Get a Quote <ArrowUpRight size={13} />
                </Link>
              </div>

              {/* Product Image Standardized */}
              <SquareImage 
                src={product.mainImageUrl} 
                alt={product.title} 
                fallbackText="Portrait of Craft"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
