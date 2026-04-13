"use client";

import NextImage from "next/image";
import { normalizeImageUrl } from "@/lib/utils";

interface SquareImageProps {
  src?: string | null;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackText?: string;
  showHoverZoom?: boolean;
  children?: React.ReactNode;
}

/**
 * SquareImage — A standardized 300x300 square image component.
 * Ensures all collection images (Products, Gallery, Marketplace) follow
 * the same cinematic aspect ratio and quality standards.
 */
export default function SquareImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackText = "A N U  C R E A T I O N",
  showHoverZoom = true,
  children,
}: SquareImageProps) {
  const normUrl = src ? normalizeImageUrl(src) : null;

  return (
    <div
      className={`relative aspect-square w-full max-w-[300px] mx-auto overflow-hidden bg-[#0F0F0F] border border-[#1A1A1A] group-hover:border-[#C9A64B]/30 transition-all duration-500 rounded-lg ${containerClassName}`}
    >
      {normUrl ? (
        <NextImage
          src={normUrl}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-700 ${
            showHoverZoom ? "group-hover:scale-110" : ""
          } ${className}`}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F0F0F] p-4 text-center">
          <div className="w-8 h-[1px] bg-[#C9A64B]/30 mb-4" />
          <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#6B6560] italic leading-relaxed">
            {fallbackText}
          </span>
          <div className="w-8 h-[1px] bg-[#C9A64B]/30 mt-4" />
        </div>
      )}
      {children}
    </div>
  );
}
