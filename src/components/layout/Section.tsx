import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** 背景变体 */
  tone?: "page" | "card" | "tint" | "brand" | "dark";
  /** 是否添加科技感网格 */
  grid?: boolean;
}

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  page: "bg-surface-page",
  card: "bg-surface-card",
  tint: "bg-gradient-to-b from-brand-50/60 to-surface-page",
  brand: "bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white",
  dark: "bg-brand text-white",
};

export function Section({ id, className, children, tone = "page", grid = false }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-24", toneClass[tone], className)}>
      {grid && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-0 opacity-60",
            tone === "dark" || tone === "brand" ? "bg-tech-grid-dark" : "bg-tech-grid"
          )}
          aria-hidden
        />
      )}
      <div className="relative z-10 mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
