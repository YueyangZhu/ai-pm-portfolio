import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-btn transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-800 to-brand-700 text-white shadow-md hover:shadow-glow hover:from-brand-700 hover:to-brand-600 border border-white/10",
  secondary:
    "bg-surface-card text-brand border border-brand-200 hover:border-accent-400 hover:bg-accent-50/50 hover:text-brand-700",
  outline:
    "bg-transparent text-brand border border-brand-300 hover:border-accent hover:bg-accent-50/30",
  ghost:
    "bg-transparent text-ink hover:bg-brand-50 hover:text-brand",
  accent:
    "bg-gradient-to-r from-accent to-accent-400 text-brand-900 shadow-md hover:shadow-glow hover:from-accent-400 hover:to-accent-300",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { as?: "button" };
type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { as: "a"; href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
