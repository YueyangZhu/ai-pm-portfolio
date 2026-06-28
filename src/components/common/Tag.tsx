import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tone = "neutral" | "brand" | "accent" | "cs" | "contract" | "data" | "success" | "dark";

const tones: Record<Tone, string> = {
  neutral: "bg-brand-50 text-brand-700 border-brand-100",
  brand: "bg-brand-50 text-brand-700 border-brand-100",
  accent: "bg-accent-50 text-accent-700 border-accent-100",
  cs: "bg-emerald-50 text-emerald-700 border-emerald-100",
  contract: "bg-amber-50 text-amber-700 border-amber-100",
  data: "bg-violet-50 text-violet-700 border-violet-100",
  success: "bg-accent-50 text-accent-700 border-accent-100",
  dark: "bg-dark-card text-accent border-dark-border",
};

interface TagProps {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

export function Tag({ tone = "neutral", className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
