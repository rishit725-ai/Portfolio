import { Reveal, Spotlight } from "@/components/motion";
import { experience } from "@/data/portfolio";
import { Accent, Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title={
        <>
          Where I've <Accent>worked.</Accent>
        </>
      }
    >
      <ol className="group/list space-y-3">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.company} delay={i * 100}>
            <Spotlight className="grid gap-4 rounded-2xl border border-border bg-card/40 p-6 transition-opacity duration-300 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-8 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground sm:pt-1.5">
                {e.period}
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  {e.role} <span className="text-muted-foreground">·</span>{" "}
                  <span className="text-primary">{e.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{e.location}</p>
                <ul className="mt-4 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
