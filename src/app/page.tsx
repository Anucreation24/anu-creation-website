import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  homePageQuery,
  productsQuery,
  servicesQuery,
  galleryItemsQuery,
} from "@/sanity/lib/queries";

import HeroSection from "@/components/sections/home/HeroSection";
import StatsSection from "@/components/sections/home/StatsSection";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import ProductsPreview from "@/components/sections/home/ProductsPreview";
import GalleryGlimpse from "@/components/sections/home/GalleryGlimpse";
import BrandQuote from "@/components/sections/home/BrandQuote";
import CTABanner from "@/components/sections/home/CTABanner";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(homePageQuery).catch(() => null);

  return {
    title: data?.seo?.metaTitle || "ANU CREATION — The Cinematic Curator",
    description: data?.seo?.metaDescription || "ANU CREATION is a premium creative studio delivering graphic design, video editing, voice overs, and social media marketing with cinematic precision.",
  };
}

/**
 * Home page — assembles all home sections in editorial order.
 */
export default async function HomePage() {
  // Fetch everything in parallel
  const [homeData, products, services, galleryItems] = await Promise.all([
    client.fetch(homePageQuery).catch(() => null),
    client.fetch(productsQuery).catch(() => []),
    client.fetch(servicesQuery).catch(() => []),
    client.fetch(galleryItemsQuery).catch(() => []),
  ]);

  return (
    <>
      <HeroSection data={homeData?.hero} />
      <StatsSection data={homeData?.stats} />
      <ServicesPreview data={services} />
      <ProductsPreview data={products} />
      <GalleryGlimpse data={galleryItems} />
      <BrandQuote data={homeData?.brandQuote} />
      <CTABanner data={homeData?.ctaBanner} />
    </>
  );
}
