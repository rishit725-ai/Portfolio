import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-28 scroll-mt-20", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // {eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
