import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { partnersQuery, testimonialsQuery } from "@/sanity/lib/queries";

import PartnersHero from "@/components/sections/partners/PartnersHero";
import PartnersGrid from "@/components/sections/partners/PartnersGrid";
import TestimonialsSection from "@/components/sections/partners/TestimonialsSection";
import PartnersInquiry from "@/components/sections/partners/PartnersInquiry";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Trusted by prestige brands and creative businesses — discover our partners and what they say about working with ANU CREATION.",
};

export default async function PartnersPage() {
  const [partners, testimonials] = await Promise.all([
    client.fetch(partnersQuery).catch(() => []),
    client.fetch(testimonialsQuery).catch(() => []),
  ]);

  return (
    <>
      <PartnersHero />
      <PartnersGrid data={partners} />
      <TestimonialsSection data={testimonials} />
      <PartnersInquiry />
    </>
  );
}
