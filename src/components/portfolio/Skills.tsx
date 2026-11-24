import { Reveal, Spotlight } from "@/components/motion";
import { skillGroups } from "@/data/portfolio";
import { Accent, Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title={
        <>
          What I <Accent>work with.</Accent>
        </>
      }
      description="From ML models and data to the web apps that put them in people's hands."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 80}>
            <Spotlight className="h-full rounded-2xl border border-border bg-card/40 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-medium">{g.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
