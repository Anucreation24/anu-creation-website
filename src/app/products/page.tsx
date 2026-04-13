import type { Metadata } from "next";
export const revalidate = 60;
import { client } from "@/sanity/lib/client";
import { productsQuery } from "@/sanity/lib/queries";

import ProductsHero from "@/components/sections/products/ProductsHero";
import ProductsGrid from "@/components/sections/products/ProductsGrid";
import ProductsCTA from "@/components/sections/products/ProductsCTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ANU CREATION's curated collection of bespoke frames, fabric art, timepiece clocks, key tags, and premium design work.",
};

export default async function ProductsPage() {
  const products = await client.fetch(productsQuery).catch(() => []);

  return (
    <>
      <ProductsHero />
      <ProductsGrid data={products} />
      <ProductsCTA />
    </>
  );
}
