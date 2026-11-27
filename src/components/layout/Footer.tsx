"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { FOOTER_LINKS, RESORT_HOURS, SITE_CONFIG } from "@/constants";

/**
 * Global 5-column resort footer matching the Ocean Haven Resort & Spa design.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-[#182925] text-[#faf8f4]">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand + Description + Social Icons */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e2c9a6]/45 bg-[#14221f] text-[#e2c9a6]">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="16" cy="11" r="3.2" opacity="0.85" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 24V13m0 0c-2.8-3.4-6.8-3.6-8.8-1.6M16 13c2.8-3.4 6.8-3.6 8.8-1.6M16 14c-3.4-.2-6.2 1.5-7.4 4M16 14c3.4-.2 6.2 1.5 7.4 4M7 25.5c2.2-1.2 4.4-1.2 6.6 0s4.4 1.2 6.6 0 4.4-1.2 4.8-.9"
                  />
                </svg>
              </span>
              <div className="leading-none">
                <p className="font-serif text-lg font-semibold tracking-[0.14em] uppercase">
                  {SITE_CONFIG.name}
                </p>
                <p className="mt-0.5 text-[9.5px] font-semibold tracking-[0.24em] text-[#e2c9a6] uppercase">
                  {SITE_CONFIG.subtitle}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-[8.5px] tracking-[0.2em] text-[#faf8f4]/70 uppercase">
                  <span className="h-px w-2.5 bg-[#e2c9a6]/60" />
                  {SITE_CONFIG.location}
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#faf8f4]/70">
              Oceanfront luxury resort in Key West, FL. Where every moment is made for unforgettable memories.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {[
                {
                  label: "Facebook",
                  href: "/contact",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8Z"
                    />
                  ),
                },
                {
                  label: "Instagram",
                  href: "/contact",
                  icon: (
                    <>
                      <rect x="5" y="5" width="14" height="14" rx="4" />
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="16.2" cy="7.8" r="0.7" fill="currentColor" stroke="none" />
                    </>
                  ),
                },
                {
                  label: "TripAdvisor",
                  href: "/contact",
                  icon: (
                    <>
                      <circle cx="9.2" cy="13" r="2.3" />
                      <circle cx="14.8" cy="13" r="2.3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.5c2-.9 4-1.3 6-1.3s4 .4 6 1.3M12 15.5v1.5" />
                    </>
                  ),
                },
                {
                  label: "YouTube",
                  href: "/contact",
                  icon: (
                    <>
                      <rect x="4" y="6.5" width="16" height="11" rx="3" />
                      <path fill="currentColor" stroke="none" d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" />
                    </>
                  ),
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-[#faf8f4]/80 transition-colors hover:border-[#e2c9a6] hover:bg-[#e2c9a6]/15 hover:text-[#e2c9a6]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#faf8f4]/80 transition-colors hover:text-[#e2c9a6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resort Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]">
              Resort
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-[#faf8f4]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e2c9a6]" />
                <span>
                  500 Ocean Haven Drive
                  <br />
                  Key West, FL 33040
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#e2c9a6]" />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#e2c9a6]" />
                <span className="break-all">{SITE_CONFIG.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]">
              Hours
            </h3>
            <ul className="mt-4 space-y-3 text-xs">
              {RESORT_HOURS.map((item) => (
                <li key={item.label}>
                  <p className="font-medium text-[#faf8f4]/90">{item.label}</p>
                  <p className="mt-0.5 text-[#faf8f4]/65">{item.hours}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Stay Connected */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]">
              Stay Connected
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-[#faf8f4]/75">
              Subscribe to get exclusive offers &amp; resort updates.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-2.5">
              <label htmlFor="footer-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (subscribed) setSubscribed(false);
                }}
                placeholder="Your email address"
                className="w-full rounded-sm border border-white/20 bg-[#12201c] px-3.5 py-2.5 text-xs text-[#faf8f4] placeholder:text-[#faf8f4]/45 focus:border-[#e2c9a6] focus:outline-none"
              />
              <Button type="submit" variant="secondary" size="md" className="w-full rounded-sm">
                Subscribe
              </Button>
              {subscribed && (
                <p className="text-xs text-[#e2c9a6]" role="status">
                  Thank you for subscribing to Ocean Haven updates.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-[#faf8f4]/60 sm:flex-row">
          <p>
            &copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name} {SITE_CONFIG.subtitle}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="transition-colors hover:text-[#e2c9a6]">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <Link href="/pricing" className="transition-colors hover:text-[#e2c9a6]">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
