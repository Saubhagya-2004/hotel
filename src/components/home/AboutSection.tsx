"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { RevealCard, useScrollVisible } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { RESORT_FEATURES, RESORT_IMAGES } from "@/constants";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types";

function FeatureIcon({ icon }: { icon: FeatureItem["icon"] }) {
  const shared = "h-7 w-7 text-[#9c7e54]";
  switch (icon) {
    case "palm":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-9m0 0c-2-3-5.5-3.5-8-1.5M12 11c2-3 5.5-3.5 8-1.5M12 11c-2.5-1-5 .5-6 3M12 11c2.5-1 5 .5 6 3M5 20h14" />
        </svg>
      );
    case "bed":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 15h18M6 11V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
        </svg>
      );
    case "utensils":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v7a2 2 0 0 0 4 0V4M9 11v9M16 4v16m0-16c2 1.5 2.5 4.5 1.5 7H16" />
        </svg>
      );
    case "lotus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19c4.5 0 7.5-2.5 8-6.5-2.5 0-4.5 1-5.5 2.5 0-4-1-7-2.5-9.5C10.5 8 9.5 11 9.5 15 8.5 13.5 6.5 12.5 4 12.5c.5 4 3.5 6.5 8 6.5Z" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 17h14M6 17a6 6 0 0 1 12 0M12 8v3m-1.5-3h3" />
        </svg>
      );
  }
}

/**
 * Resort pillars highlight bar (animated one by one) and editorial sanctuary overview.
 */
export default function AboutSection() {
  const { ref: copyRef, visible: copyVisible } = useScrollVisible(0.16);

  return (
    <section className="border-b border-[#e6dfd3] bg-[#faf8f4]">
      <div className="border-b border-[#e6dfd3] bg-white/80">
        <Container className="py-10">
          <div className="grid grid-cols-2 divide-[#e6dfd3] sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {RESORT_FEATURES.map((feature, idx) => (
              <RevealCard
                key={feature.id}
                index={idx}
                stepMs={160}
                className="flex flex-col items-center px-4 py-3 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3efe7]">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#5a6562]">
                  {feature.description}
                </p>
              </RevealCard>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <RevealCard index={0} stepMs={200} className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#e6dfd3] shadow-lg">
              <Image
                src={RESORT_IMAGES.poolsideSuite}
                alt="Sunlit coastal suite overlooking the Atlantic Ocean at Ocean Haven"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 rounded-xl border border-[#e6dfd3] bg-[#f3efe7] p-5 sm:absolute sm:-right-6 sm:-bottom-6 sm:mt-0 sm:max-w-xs sm:shadow-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7a6b54]">
                Since 1998
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-[#1b2724]">
                Boutique Oceanfront Sanctuary
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#5a6562]">
                42 private suites &amp; villas steps from turquoise Atlantic waters.
              </p>
            </div>
          </RevealCard>

          <div ref={copyRef} className="lg:col-span-6 lg:pl-6">
            <SectionHeading
              eyebrow="Our Sanctuary"
              title="Where Coastal Calm Meets Timeless Hospitality"
              subtitle="Tucked along a secluded stretch of Key West shoreline, Ocean Haven pairs unhurried island architecture with warm, intuitive service."
              align="left"
            />
            <p
              style={copyVisible ? { animationDelay: "580ms" } : undefined}
              className={cn(
                "mt-5 text-sm leading-relaxed text-[#5a6562] sm:text-base",
                copyVisible ? "sand-block-active" : "sand-block-idle"
              )}
            >
              Wake to gentle sea breezes, dine beneath swaying palms at golden hour, and restore in our botanical spa pavilion. Every detail—from Belgian linen bedding to curated reef excursions—is shaped around effortless rest.
            </p>
            <div
              style={copyVisible ? { animationDelay: "740ms" } : undefined}
              className={cn(
                "mt-8 flex flex-wrap items-center gap-4",
                copyVisible ? "sand-block-active" : "sand-block-idle"
              )}
            >
              <Button href="/about" variant="primary" size="md">
                Discover Our Story
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Speak With Concierge
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
