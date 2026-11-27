import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "cream";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1c2e2a] text-[#faf8f4] border border-[#1c2e2a] hover:border-[#F26B4F] hover:text-white shadow-sm",
  secondary:
    "bg-[#e2c9a6] text-[#1c2e2a] border border-[#e2c9a6] hover:border-[#F26B4F] hover:text-white shadow-sm",
  outline:
    "bg-transparent text-[#1c2e2a] border border-[#1c2e2a]/35 hover:border-[#1c2e2a] hover:text-[#faf8f4]",
  ghost:
    "bg-white/85 backdrop-blur-sm text-[#1c2e2a] border border-[#1c2e2a]/20 hover:border-[#F26B4F] hover:text-white",
  cream:
    "bg-[#FFF3E2] text-[#12363D] border border-[#e6dfd3] hover:border-[#F26B4F] hover:text-white shadow-sm",
};

const fillOverlayStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#F26B4F]",
  secondary: "bg-[#F26B4F]",
  outline: "bg-[#1c2e2a]",
  ghost: "bg-[#F26B4F]",
  cream: "bg-[#F26B4F]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs tracking-[0.14em]",
  md: "px-6 py-3 text-xs tracking-[0.16em]",
  lg: "px-8 py-3.5 text-xs tracking-[0.18em]",
};

/**
 * Reusable pill action button with a smooth left-to-right fill sweep on hover.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26B4F] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
          fillOverlayStyles[variant]
        )}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
