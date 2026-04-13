import { marketplaceListingBySlugQuery, marketplaceListingsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import ListingDetail from "@/components/sections/marketplace/ListingDetail";
import { MarketplaceListing } from "@/types/marketplace";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Generate Metadata for the business profile page.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing: MarketplaceListing = await client.fetch(marketplaceListingBySlugQuery, { slug });

  if (!listing) return { title: "Business Profile | ANU CREATION" };

  return {
    title: `${listing.businessName} | Marketplace | ANU CREATION`,
    description: listing.shortDescription || `View services and products offered by ${listing.businessName} on the ANU CREATION Marketplace.`,
  };
}

/**
 * Generate Static Params for all visible listings.
 */
export async function generateStaticParams() {
  const listings: MarketplaceListing[] = await client.fetch(marketplaceListingsQuery);
  return listings.map((l) => ({ slug: l.slug }));
}

/**
 * Marketplace Detail Page (Slug Route)
 */
export default async function MarketplaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const listing: MarketplaceListing = await client.fetch(marketplaceListingBySlugQuery, { slug });

  if (!listing) {
    notFound();
  }

  return <ListingDetail listing={listing} />;
}
