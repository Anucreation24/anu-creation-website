import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { galleryItemsQuery } from "@/sanity/lib/queries";

import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import GalleryCTA from "@/components/sections/gallery/GalleryCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A curated visual anthology of bespoke craftsmanship — frames, fabric art, clocks, and design work by ANU CREATION.",
};

export default async function GalleryPage() {
  const galleryItems = await client.fetch(galleryItemsQuery).catch(() => []);

  return (
    <>
      <GalleryHero />
      <GalleryGrid data={galleryItems} />
      <GalleryCTA />
    </>
  );
}
