"use client";

import { SandText, useScrollVisible } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

/**
 * Editorial section title with slow sand-drift text reveal and animated divider.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const { ref, visible } = useScrollVisible(0.16);

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-2xl",
        isCentered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          style={visible ? { animationDelay: "40ms" } : undefined}
          className={cn(
            "mb-2 text-[11px] font-semibold uppercase tracking-[0.26em]",
            light ? "text-[#e2c9a6]" : "text-[#7a6b54]",
            visible ? "sand-block-active" : "sand-block-idle"
          )}
        >
          {eyebrow}
        </p>
      )}
      <SandText
        as="h2"
        text={title}
        baseDelayMs={120}
        wordStepMs={95}
        className={cn(
          "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
          light ? "text-[#faf8f4]" : "text-[#1b2724]"
        )}
      />
      <div
        className={cn(
          "mt-3 flex items-center gap-3",
          isCentered ? "justify-center" : "justify-start"
        )}
      >
        <span
          style={visible ? { animationDelay: "360ms" } : undefined}
          className={cn(
            "h-px w-10 origin-right",
            light ? "bg-[#e2c9a6]/40" : "bg-[#c9a77a]/55",
            visible ? "sand-line-active" : "sand-line-idle"
          )}
        />
        <span
          aria-hidden="true"
          style={visible ? { animationDelay: "420ms" } : undefined}
          className={cn(
            "text-xs",
            light ? "text-[#e2c9a6]" : "text-[#9c7e54]",
            visible ? "sand-block-active" : "sand-block-idle"
          )}
        >
          ✦
        </span>
        <span
          style={visible ? { animationDelay: "360ms" } : undefined}
          className={cn(
            "h-px w-10 origin-left",
            light ? "bg-[#e2c9a6]/40" : "bg-[#c9a77a]/55",
            visible ? "sand-line-active" : "sand-line-idle"
          )}
        />
      </div>
      {subtitle && (
        <p
          style={visible ? { animationDelay: "480ms" } : undefined}
          className={cn(
            "mt-4 text-sm leading-relaxed sm:text-base",
            light ? "text-[#faf8f4]/80" : "text-[#5a6562]",
            visible ? "sand-block-active" : "sand-block-idle"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
