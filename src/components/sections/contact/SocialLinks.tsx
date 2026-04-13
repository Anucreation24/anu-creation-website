"use client";

import { motion } from "framer-motion";

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.72a4.85 4.85 0 0 1-1.01-.03Z" />
    </svg>
  );
}

const socialPlatforms = [
  {
    name: "YouTube",
    handle: "@anucreationofficial",
    href: "https://www.youtube.com/@anucreationofficial",
    color: "#FF0000",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@anu_creationofficial",
    href: "https://www.instagram.com/anu_creationofficial/",
    color: "#E1306C",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "24anucreation",
    href: "https://web.facebook.com/24anucreation",
    color: "#1877F2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@anu_creationofficial",
    href: "https://www.tiktok.com/@anu_creationofficial",
    color: "#F5F2EA",
    icon: <TikTokIcon size={22} />,
  },
];

export default function SocialLinks({ data }: { data: any[] }) {
  const displayPlatforms = data && data.length > 0 
    ? data.map(link => {
        const match = socialPlatforms.find(p => p.name.toLowerCase() === link.platform?.toLowerCase());
        return {
          name: link.platform,
          handle: link.handle || match?.handle || "",
          href: link.url || match?.href || "#",
          color: match?.color || "#C9A64B",
          icon: match?.icon || (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )
        };
      })
    : socialPlatforms;

  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A64B] block mb-3"
          >
            Follow Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#F5F2EA]"
          >
            Stay Connected
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {displayPlatforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              id={`social-${platform.name.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#C9A64B]/25 p-7 flex flex-col gap-4 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div
                className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                style={{ color: "#6B6560" }}
              >
                <span className="group-hover:text-[#C9A64B] transition-colors duration-300 text-[#6B6560]">
                  {platform.icon}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300 block">
                  {platform.name}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-xs text-[#6B6560]">
                  {platform.handle}
                </span>
              </div>

              <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-[#C9A64B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Follow →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Email strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 bg-[#0F0F0F] border border-[#1E1E1E] p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#C9A64B]/40" />
            <span className="font-[family-name:var(--font-inter)] text-xs text-[#B7B1A3]">
              Prefer email?
            </span>
          </div>
          <a
            href="mailto:24anucreation@gmail.com"
            id="social-email-link"
            className="font-[family-name:var(--font-cormorant)] text-xl text-[#C9A64B] hover:text-[#D8BA67] transition-colors duration-300"
          >
            24anucreation@gmail.com
          </a>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#C9A64B]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
