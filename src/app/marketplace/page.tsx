import MarketplaceHero from "@/components/sections/marketplace/MarketplaceHero";
import MarketplaceGrid from "@/components/sections/marketplace/MarketplaceGrid";
import MarketplaceCTA from "@/components/sections/marketplace/MarketplaceCTA";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { marketplaceListingsQuery } from "@/sanity/lib/queries";
import { MarketplaceListing } from "@/types/marketplace";

export const metadata: Metadata = {
  title: "Marketplace | ANU CREATION",
  description: "Discover a curated ecosystem of local businesses and artisans showcased through the ANU CREATION platform.",
};

/**
 * Marketplace Page — The landing for external business listings.
 * Server component for optimal SEO and performance.
 */
export default async function MarketplacePage() {
  const listings: MarketplaceListing[] = await client.fetch(marketplaceListingsQuery);

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <MarketplaceHero />
      <MarketplaceGrid initialListings={listings} />
      <MarketplaceCTA />
    </main>
  );
}
