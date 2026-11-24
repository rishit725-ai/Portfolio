import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

const buttonVariants = {
  primary:
    "shine bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_0_1px_oklch(1_0_0/0.1),0_8px_30px_-8px_oklch(0.72_0.16_245/0.6)]",
  outline: "border border-border bg-white/[0.03] text-foreground hover:bg-white/[0.07] hover:border-white/20",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-white/[0.05]",
};

const buttonSizes = {
  sm: "h-8 px-3.5 text-xs",
  md: "h-10 px-5",
  lg: "h-12 px-6",
};

export function buttonClass(
  variant: keyof typeof buttonVariants = "primary",
  size: keyof typeof buttonSizes = "md",
  className?: string,
) {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);
}
