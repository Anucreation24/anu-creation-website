import Link from "next/link";
import { Mail, MessageCircle, ExternalLink } from "lucide-react";

// ─── Inline SVG social icons (lucide-react v3+ removed brand icons) ───────────
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.72a4.85 4.85 0 0 1-1.01-.03Z" />
    </svg>
  );
}

// ─── Footer columns ────────────────────────────────────────────────────────────
const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/anu_creationofficial/", external: true },
      { label: "Facebook", href: "https://web.facebook.com/24anucreation", external: true },
      { label: "WhatsApp", href: "https://wa.me/94753103536", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@anucreationofficial", external: true },
      { label: "TikTok", href: "https://www.tiktok.com/@anu_creationofficial", external: true },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Creative Hub, Arts Block", href: "#" },
      { label: "Available Worldwide", href: "#" },
      { label: "24anucreation@gmail.com", href: "mailto:24anucreation@gmail.com", external: true },
      { label: "+94 75 310 3536", href: "tel:+94753103536", external: true },
    ],
  },
];

// ─── Social icon buttons ───────────────────────────────────────────────────────
const socialLinks = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/anu_creationofficial/", label: "Instagram" },
  { Icon: FacebookIcon, href: "https://web.facebook.com/24anucreation", label: "Facebook" },
  { Icon: YoutubeIcon, href: "https://www.youtube.com/@anucreationofficial", label: "YouTube" },
  { Icon: TikTokIcon, href: "https://www.tiktok.com/@anu_creationofficial", label: "TikTok" },
  { Icon: Mail, href: "mailto:24anucreation@gmail.com", label: "Email" },
  { Icon: MessageCircle, href: "https://wa.me/94753103536", label: "WhatsApp" },
];

export default function Footer({ settings }: { settings: any }) {
  const year = new Date().getFullYear();
  const companyName = settings?.companyName || "ANU CREATION";
  const footerText = settings?.footerText || "Crafting cinematic experiences through bespoke artistry and architectural design logic.";
  const contact = settings?.contactInfo;

  // Map social links to icons
  const socialIcons: Record<string, any> = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    youtube: YoutubeIcon,
    tiktok: TikTokIcon,
    email: Mail,
    whatsapp: MessageCircle,
  };

  const socialLinks = settings?.socialLinks?.map((link: any) => ({
    Icon: socialIcons[link.platform] || ExternalLink,
    href: link.url,
    label: link.platform.charAt(0).toUpperCase() + link.platform.slice(1),
  })) || [
    { Icon: InstagramIcon, href: "https://www.instagram.com/anu_creationofficial/", label: "Instagram" },
    { Icon: FacebookIcon, href: "https://web.facebook.com/24anucreation", label: "Facebook" },
    { Icon: YoutubeIcon, href: "https://www.youtube.com/@anucreationofficial", label: "YouTube" },
    { Icon: TikTokIcon, href: "https://www.tiktok.com/@anu_creationofficial", label: "TikTok" },
    { Icon: Mail, href: "mailto:24anucreation@gmail.com", label: "Email" },
    { Icon: MessageCircle, href: "https://wa.me/94753103536", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1E1E1E]" role="contentinfo">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A64B]/60 to-transparent" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" aria-label={`${companyName} Home`}>
              <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold tracking-[0.22em] uppercase text-[#C9A64B]">
                {companyName}
              </span>
            </Link>
            <p className="text-[#B7B1A3] text-sm leading-relaxed font-[family-name:var(--font-inter)] max-w-[220px]">
              {footerText}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-2 flex-wrap">
              {socialLinks.map(({ Icon, href, label }: any) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-[#2A2A2A] text-[#6B6560] hover:text-[#C9A64B] hover:border-[#C9A64B]/50 transition-all duration-300 rounded-sm"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A64B] font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] hover:text-[#F5F2EA] transition-colors duration-300 link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-5">
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A64B] font-semibold">
              Connect
            </h3>
            <ul className="space-y-3" role="list">
              {socialLinks.slice(0, 5).map(({ label, href }: any) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] hover:text-[#F5F2EA] transition-colors duration-300 link-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio column */}
          <div className="space-y-5">
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A64B] font-semibold">
              Studio
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="https://maps.app.goo.gl/EDkwG2NYc7aCTjbm9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] hover:text-[#F5F2EA] transition-colors duration-300 link-underline"
                >
                  339/A Gonahena, Kadawatha
                </a>
              </li>
              <li>
                <span className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3]">
                  Available Worldwide
                </span>
              </li>
              <li>
                <a
                  href="mailto:24anucreation@gmail.com"
                  className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] hover:text-[#F5F2EA] transition-colors duration-300 link-underline"
                >
                  24anucreation@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94753103536?text=Hello%20I%20would%20like%20to%20inquire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] hover:text-[#F5F2EA] transition-colors duration-300 link-underline"
                >
                  +94 75 310 3536
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6560]">
              © {year} {companyName}. The Cinematic Curator.
            </p>
            <span className="hidden sm:inline text-[#2A2A2A]">|</span>
            <p className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.15em] uppercase text-[#4A4A4A]">
              <a 
                href="https://amfour.odoo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#C9A64B] transition-colors duration-300"
              >
                Developed by AM4 Solution
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            <div className="w-4 h-px bg-[#C9A64B]" />
            <p className="font-[family-name:var(--font-cormorant)] text-xs italic text-[#6B6560]">
              Where ideas become art.
            </p>
            <div className="w-4 h-px bg-[#C9A64B]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
