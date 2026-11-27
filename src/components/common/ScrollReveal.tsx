"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared scroll-intersection hook that triggers once when an element enters the viewport.
 */
export function useScrollVisible(threshold = 0.14) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

interface SandTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  baseDelayMs?: number;
  wordStepMs?: number;
  immediate?: boolean;
}

/**
 * Slowly materializes text word-by-word with a soft warm-sand blur drift when scrolled into view.
 */
export function SandText({
  text,
  as: Tag = "p",
  className,
  baseDelayMs = 80,
  wordStepMs = 95,
  immediate = false,
}: SandTextProps) {
  const { ref, visible } = useScrollVisible(0.15);
  const active = immediate || visible;
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={
            active
              ? { animationDelay: `${baseDelayMs + index * wordStepMs}ms` }
              : undefined
          }
          className={cn(
            "inline-block",
            active ? "sand-word-active" : "sand-word-idle"
          )}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

interface RevealCardProps {
  children: ReactNode;
  index?: number;
  stepMs?: number;
  baseDelayMs?: number;
  direction?: "up" | "right";
  className?: string;
  immediate?: boolean;
}

/**
 * Scroll-triggered wrapper for revealing cards smoothly one after another.
 */
export function RevealCard({
  children,
  index = 0,
  stepMs = 220,
  baseDelayMs = 80,
  direction = "up",
  className,
  immediate = false,
}: RevealCardProps) {
  const { ref, visible } = useScrollVisible(0.12);
  const active = immediate || visible;
  const delayMs = baseDelayMs + index * stepMs;

  const idleClass =
    direction === "right" ? "sand-card-idle-right" : "sand-card-idle-up";
  const activeClass =
    direction === "right" ? "sand-card-active-right" : "sand-card-active-up";

  return (
    <div
      ref={ref}
      style={active ? { animationDelay: `${delayMs}ms` } : undefined}
      className={cn(active ? activeClass : idleClass, className)}
    >
      {children}
    </div>
  );
}
