"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// ─── Navigation links ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Gallery", href: "/gallery" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ settings }: { settings: any }) {
  const companyName = settings?.companyName || "ANU CREATION";

  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
 
  // ─── Detect mount to prevent hydration mismatch ───────────────────────────
  useEffect(() => {
    setMounted(true);
  }, []);
 
  // ─── Detect scroll to add background blur ─────────────────────────────────
  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  // ─── Close mobile menu on route change ────────────────────────────────────
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ─── Prevent body scroll when menu is open ────────────────────────────────
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, mounted]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <nav className="flex items-center justify-between h-[70px]">

            {/* ── Brand logo ─────────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="ANU CREATION – Home"
            >
              <span
                className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl font-semibold tracking-wide sm:tracking-[0.2em] uppercase text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300"
              >
                {companyName}
              </span>
            </Link>

            {/* ── Desktop links ───────────────────────────────────────────── */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative text-xs tracking-[0.15em] uppercase font-[family-name:var(--font-inter)] font-medium transition-colors duration-300 link-underline pb-0.5 ${
                        isActive
                          ? "text-[#C9A64B]"
                          : "text-[#B7B1A3] hover:text-[#F5F2EA]"
                      }`}
                    >
                      {label}
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A64B]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── Desktop CTA ─────────────────────────────────────────────── */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                id="navbar-cta"
                className="group relative px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-[family-name:var(--font-inter)] font-semibold border border-[#C9A64B] text-[#C9A64B] overflow-hidden transition-all duration-300 hover:text-[#0A0A0A]"
              >
                <span className="absolute inset-0 bg-[#C9A64B] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Get a Quote</span>
              </Link>
            </div>

            {/* ── Mobile menu toggle ──────────────────────────────────────── */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden flex items-center justify-center w-10 h-10 text-[#F5F2EA] hover:text-[#C9A64B] transition-colors duration-300"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile fullscreen menu (Client Only to prevent hydration mismatches) ── */}
      {mounted && (
        <div
          className={`fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileOpen}
        >
          {/* Decorative gold line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A64B] to-transparent" />

          <ul className="flex flex-col items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }, i) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li
                  key={href}
                  style={{
                    transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                    opacity: mobileOpen ? 1 : 0,
                    transition: "transform 0.4s ease, opacity 0.4s ease",
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  <Link
                    href={href}
                    className={`font-[family-name:var(--font-cormorant)] text-4xl font-medium tracking-[0.08em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#C9A64B]"
                        : "text-[#F5F2EA] hover:text-[#C9A64B]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA */}
          <div
            className="mt-12"
            style={{
              transitionDelay: mobileOpen ? "480ms" : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transitionProperty: "transform, opacity",
              transitionDuration: "400ms",
              transitionTimingFunction: "ease",
            }}
          >
            <Link
              href="/contact"
              className="px-8 py-3 text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-semibold border border-[#C9A64B] text-[#C9A64B] hover:bg-[#C9A64B] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A64B] to-transparent" />
        </div>
      )}
    </>
  );
}
