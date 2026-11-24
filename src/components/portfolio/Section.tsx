import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, index, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">{index}</span>
            <span className="h-px w-8 bg-border" />
            {eyebrow}
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
          {description && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal italic tracking-normal text-gradient">{children}</span>;
}
