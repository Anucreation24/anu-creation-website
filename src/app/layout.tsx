import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── Premium Serif for Headings ───────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ─── Clean Sans-Serif for Body ────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(settingsQuery).catch(() => null);

  const titleTemplate = settings?.companyName ? `%s | ${settings.companyName}` : "%s | ANU CREATION";
  const defaultTitle = settings?.seo?.metaTitle || "ANU CREATION — The Cinematic Curator";
  const description = settings?.seo?.metaDescription || "ANU CREATION is a premium creative studio crafting cinematic identities through bespoke artistry, graphic design, video editing, and architectural design logic.";

  return {
    title: {
      default: defaultTitle,
      template: titleTemplate,
    },
    description,
    keywords: [
      "ANU CREATION",
      "creative studio",
      "graphic design",
      "video editing",
      "social media marketing",
      "voice overs",
      "luxury brand",
    ],
    authors: [{ name: settings?.companyName || "ANU CREATION" }],
    openGraph: {
      title: defaultTitle,
      description,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch settings for global components (Navbar/Footer)
  const settings = await client.fetch(settingsQuery).catch(() => null);

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="bg-[#0A0A0A] text-[#F5F2EA] antialiased">
        <div className="flex flex-col min-h-screen">
          {/* Global sticky navigation */}
          <Navbar settings={settings} />

          {/* Page content */}
          <main className="flex-1">{children}</main>

          {/* Global footer */}
          <Footer settings={settings} />
        </div>
      </body>
    </html>
  );
}
