"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SquareImage from "@/components/ui/SquareImage";

export default function ProductsPreview({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  // Filter for valid items only
  const displayProducts = data.filter((p: any) => p && p.title).slice(0, 3);

  if (displayProducts.length === 0) return null;

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="Our Signature"
            title="Featured"
            titleGold="Products"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A64B] hover:text-[#D8BA67] transition-colors duration-300"
            >
              Browse All <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Adaptive flex grid that reflows naturally */}
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {displayProducts.map((product: any, i: number) => {
            return (
              <motion.div
                key={product._id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 min-w-[280px] max-w-[380px]"
              >
                <Link
                  href={`/products#${product.slug || product._id}`}
                  className="group block space-y-5"
                >
                  <SquareImage 
                    src={product.mainImageUrl} 
                    alt={product.title}
                    fallbackText="Product Craft"
                  >
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#C9A64B]">
                        View Details
                      </span>
                    </div>
                  </SquareImage>

                  <div className="space-y-1">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6560]">
                        {product.category}
                      </span>
                      <span className="font-[family-name:var(--font-cormorant)] text-sm text-[#C9A64B]">
                        {product.priceLabel}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
