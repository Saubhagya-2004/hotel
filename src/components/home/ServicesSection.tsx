"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { ACCOMMODATIONS } from "@/constants";
import { cn, formatPrice } from "@/lib/utils";

const animationCss = `
@keyframes rr-in {
  0% {
    opacity: 0;
    transform: translateX(110px) scale(0.95);
  }
  55% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes rr-pop {
  0% {
    opacity: 0;
    transform: translateY(12px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.rr-card-idle {
  opacity: 0;
  transform: translateX(110px) scale(0.95);
}
.rr-card-active {
  opacity: 0;
  animation: rr-in 1.15s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  will-change: transform, opacity;
}
.rr-pop-idle {
  opacity: 0;
  transform: translateY(12px);
}
.rr-pop-active {
  opacity: 0;
  animation: rr-pop 0.7s ease-out forwards;
}
@media (prefers-reduced-motion: reduce) {
  .rr-card-idle,
  .rr-card-active,
  .rr-pop-idle,
  .rr-pop-active {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
`;

/**
 * Rooms & Suites 3-card showcase matching the Ocean Haven design with staggered right-side scroll reveal
 * and left-to-right cover-fill hover buttons.
 */
export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="overflow-hidden bg-[#f3efe7]/75 py-20"
    >
      <style>{animationCss}</style>

      <Container>
        <SectionHeading
          eyebrow="Stay In Style"
          title="Rooms & Suites Designed for You"
          subtitle="Thoughtfully appointed coastal accommodations framed by floor-to-ceiling ocean vistas and private terraces."
        />

        <div className="mt-12 flex flex-row flex-nowrap items-stretch justify-center gap-4 max-md:snap-x max-md:snap-mandatory max-md:justify-start max-md:overflow-x-auto max-md:pb-4 lg:gap-6">
          {ACCOMMODATIONS.map((room, i) => {
            const cardDelay = 0.1 + i * 0.45;

            return (
              <article
                key={room.id}
                style={inView ? { animationDelay: `${cardDelay}s` } : undefined}
                className={cn(
                  "group relative flex min-w-0 max-w-[380px] flex-1 basis-0 flex-col overflow-hidden rounded-2xl border border-[#e6dfd3] bg-white shadow-[0_14px_35px_-18px_rgba(27,39,36,0.22)] transition-[transform,box-shadow] duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_24px_50px_-18px_rgba(27,39,36,0.3)] max-md:flex-none max-md:basis-[82%] max-md:snap-center sm:max-md:basis-[60%]",
                  inView ? "rr-card-active" : "rr-card-idle"
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 82vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c2e2a]/35 via-transparent to-transparent" />
                  {room.badge && (
                    <span
                      style={
                        inView
                          ? { animationDelay: `${cardDelay + 0.35}s` }
                          : undefined
                      }
                      className={cn(
                        "absolute top-3.5 left-3.5 rounded-full border border-white/30 bg-[#1c2e2a]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e2c9a6] backdrop-blur-md",
                        inView ? "rr-pop-active" : "rr-pop-idle"
                      )}
                    >
                      {room.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 text-center">
                  <h3
                    style={
                      inView
                        ? { animationDelay: `${cardDelay + 0.45}s` }
                        : undefined
                    }
                    className={cn(
                      "font-serif text-2xl font-semibold text-[#1b2724]",
                      inView ? "rr-pop-active" : "rr-pop-idle"
                    )}
                  >
                    {room.title}
                  </h3>
                  <p
                    style={
                      inView
                        ? { animationDelay: `${cardDelay + 0.55}s` }
                        : undefined
                    }
                    className={cn(
                      "mt-2 flex-1 text-sm leading-relaxed text-[#5a6562]",
                      inView ? "rr-pop-active" : "rr-pop-idle"
                    )}
                  >
                    {room.description}
                  </p>

                  <div className="mt-5 border-t border-[#e6dfd3] pt-4">
                    <p
                      style={
                        inView
                          ? { animationDelay: `${cardDelay + 0.65}s` }
                          : undefined
                      }
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.16em] text-[#5a6562]",
                        inView ? "rr-pop-active" : "rr-pop-idle"
                      )}
                    >
                      From{" "}
                      <span className="font-serif text-2xl font-bold text-[#1b2724]">
                        {formatPrice(room.pricePerNight)}
                      </span>{" "}
                      / Night
                    </p>

                    <div
                      style={
                        inView
                          ? { animationDelay: `${cardDelay + 0.78}s` }
                          : undefined
                      }
                      className={cn(
                        "mt-4 flex justify-center",
                        inView ? "rr-pop-active" : "rr-pop-idle"
                      )}
                    >
                      <Link
                        href="/pricing"
                        className="group/btn relative isolate inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#e6dfd3] bg-[#FFF3E2] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#12363D] shadow-sm transition-colors duration-300 hover:border-[#F26B4F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26B4F]"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-[#F26B4F] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:scale-x-100"
                        />
                        <span className="relative z-10 inline-flex items-center gap-2 transition-all duration-300 group-hover/btn:gap-3">
                          View Details
                          <svg
                            viewBox="0 0 20 20"
                            className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M4 10h12M11 5l5 5-5 5" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div
          style={inView ? { animationDelay: "1.65s" } : undefined}
          className={cn(
            "mt-10 text-center",
            inView ? "rr-pop-active" : "rr-pop-idle"
          )}
        >
          <Button href="/services" variant="outline" size="md">
            View All Accommodations
          </Button>
        </div>
      </Container>
    </section>
  );
}
