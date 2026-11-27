"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { RevealCard, useScrollVisible } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { EXPERIENCES } from "@/constants";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

function ExperienceBadge({ icon }: { icon: ExperienceItem["icon"] }) {
  const shared = "h-5 w-5 text-[#9c7e54]";
  switch (icon) {
    case "waves":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M3 15c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
        </svg>
      );
    case "dining":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16M6 17a6 6 0 0 1 12 0M12 8v3" />
        </svg>
      );
    case "spa":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={shared} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19c4 0 7-2.5 7.5-6-2.2 0-4 .9-5 2.2 0-3.8-1-6.5-2.5-8.7-1.5 2.2-2.5 4.9-2.5 8.7-1-1.3-2.8-2.2-5-2.2.5 3.5 3.5 6 7.5 6Z" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={shared} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.8 9.2-1.7 4.9-4.9 1.7 1.7-4.9 4.9-1.7Z" />
        </svg>
      );
  }
}

/**
 * Curated resort experiences grid with one-by-one staggered scroll card entrances.
 */
export default function FeaturesSection() {
  const { ref: ctaRef, visible: ctaVisible } = useScrollVisible(0.15);

  return (
    <section id="experiences" className="bg-[#faf8f4] py-20">
      <Container>
        <SectionHeading
          eyebrow="Unforgettable Moments"
          title="Experiences to Inspire"
          subtitle="From sunlit reef excursions to candlelit oceanfront tastings, curate every hour of your Key West stay."
        />

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCES.map((experience, idx) => (
            <RevealCard
              key={experience.id}
              index={idx}
              stepMs={220}
              baseDelayMs={140}
              className="flex"
            >
              <article className="group flex w-full flex-col overflow-hidden rounded-xl border border-[#e6dfd3] bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative flex flex-1 flex-col items-center px-5 pt-9 pb-6 text-center">
                  <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#e6dfd3] bg-white shadow-sm">
                    <ExperienceBadge icon={experience.icon} />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1b2724]">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5a6562]">
                    {experience.description}
                  </p>
                </div>
              </article>
            </RevealCard>
          ))}
        </div>

        <div
          ref={ctaRef}
          style={ctaVisible ? { animationDelay: "700ms" } : undefined}
          className={cn(
            "mt-10 text-center",
            ctaVisible ? "sand-block-active" : "sand-block-idle"
          )}
        >
          <Button href="/services" variant="outline" size="md">
            View All Experiences
          </Button>
        </div>
      </Container>
    </section>
  );
}
