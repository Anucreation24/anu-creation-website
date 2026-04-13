import type { Metadata } from "next";
export const revalidate = 60;
import { client } from "@/sanity/lib/client";
import { aboutPageQuery, teamMembersQuery } from "@/sanity/lib/queries";

import AboutHero from "@/components/sections/about/AboutHero";
import BrandStory from "@/components/sections/about/BrandStory";
import ValuesGrid from "@/components/sections/about/ValuesGrid";
import TeamSection from "@/components/sections/about/TeamSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(aboutPageQuery).catch(() => null);

  return {
    title: data?.seo?.metaTitle || "About",
    description: data?.seo?.metaDescription || "Discover the story of ANU CREATION — a premium creative studio built on precision, artistry, and an unwavering commitment to cinematic excellence.",
  };
}

export default async function AboutPage() {
  const [aboutData, teamMembers] = await Promise.all([
    client.fetch(aboutPageQuery).catch(() => null),
    client.fetch(teamMembersQuery).catch(() => []),
  ]);

  return (
    <>
      <AboutHero data={aboutData?.hero} />
      <BrandStory data={aboutData?.story} />
      <ValuesGrid />
      <TeamSection data={teamMembers} />
      <AboutCTA />
    </>
  );
}
