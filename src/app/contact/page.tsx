import type { Metadata } from "next";
export const revalidate = 60;
import { client } from "@/sanity/lib/client";
import { contactPageQuery, settingsQuery } from "@/sanity/lib/queries";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactLayout from "@/components/sections/contact/ContactLayout";
import SocialLinks from "@/components/sections/contact/SocialLinks";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(contactPageQuery).catch(() => null);

  return {
    title: data?.seo?.metaTitle || "Contact",
    description: data?.seo?.metaDescription || "Get in touch with ANU CREATION — start a project, request a quote, or simply say hello.",
  };
}

export default async function ContactPage() {
  const [contactData, settings] = await Promise.all([
    client.fetch(contactPageQuery).catch(() => null),
    client.fetch(settingsQuery).catch(() => null),
  ]);

  return (
    <>
      <ContactHero data={contactData?.hero} />
      <ContactLayout data={contactData} settings={settings} />
      <SocialLinks data={settings?.socialLinks} />
    </>
  );
}
