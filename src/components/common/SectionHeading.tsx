import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  children,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider",
            align === "center" && "justify-center",
            light ? "text-accent" : "text-accent-700"
          )}
        >
          <span className="inline-block h-1.5 w-7 rounded-full bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-2xl font-bold sm:text-3xl lg:text-4xl",
          light ? "text-white" : "text-brand"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-ink-soft"
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
