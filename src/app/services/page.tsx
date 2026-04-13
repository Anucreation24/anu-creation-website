import type { Metadata } from "next";
export const revalidate = 60;
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "@/sanity/lib/queries";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceCards from "@/components/sections/services/ServiceCards";
import WorkflowSection from "@/components/sections/services/WorkflowSection";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Graphic design, video editing, voice overs, and social media marketing — delivered with cinematic precision by ANU CREATION.",
};

export default async function ServicesPage() {
  const services = await client.fetch(servicesQuery).catch(() => []);

  return (
    <>
      <ServicesHero />
      <ServiceCards data={services} />
      <WorkflowSection />
      <ServicesCTA />
    </>
  );
}
