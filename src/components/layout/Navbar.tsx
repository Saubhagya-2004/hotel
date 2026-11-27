"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * Primary top navigation bar matching the Ocean Haven Resort & Spa design header.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6dfd3] bg-[#faf8f4]/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c2e2a]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c9a77a]/70 bg-[#faf8f4] text-[#8d6e43] shadow-xs transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.45"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <circle cx="16" cy="11" r="3" opacity="0.85" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 24V13m0 0c-2.8-3.4-6.8-3.6-8.8-1.6M16 13c2.8-3.4 6.8-3.6 8.8-1.6M16 14c-3.4-.2-6.2 1.5-7.4 4M16 14c3.4-.2 6.2 1.5 7.4 4M7 25.5c2.2-1.2 4.4-1.2 6.6 0s4.4 1.2 6.6 0 4.4-1.2 4.8-.9"
                />
              </svg>
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold tracking-[0.14em] text-[#1b2724] uppercase sm:text-xl">
                {SITE_CONFIG.name}
              </span>
              <span className="mt-0.5 text-[10px] font-semibold tracking-[0.26em] text-[#6d5b43] uppercase">
                {SITE_CONFIG.subtitle}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-[8.5px] font-medium tracking-[0.22em] text-[#8b7a62] uppercase">
                <span className="h-px w-3 bg-[#c9a77a]/75" />
                {SITE_CONFIG.location}
              </span>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isHashLink = link.href.includes("#");
              const isActive =
                !isHashLink &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative whitespace-nowrap py-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "text-[#1c2e2a]"
                      : "text-[#5a6562] hover:text-[#1c2e2a]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#c9a77a]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Button href="/contact" variant="primary" size="sm">
              Book Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e6dfd3] text-[#1c2e2a] transition-colors hover:bg-[#f3efe7] lg:hidden"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#e6dfd3] py-4 lg:hidden">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const isHashLink = link.href.includes("#");
                const isActive =
                  !isHashLink &&
                  (link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                      isActive
                        ? "bg-[#1c2e2a] text-[#faf8f4]"
                        : "text-[#5a6562] hover:bg-[#f3efe7] hover:text-[#1c2e2a]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
