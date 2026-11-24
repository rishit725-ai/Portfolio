import { Award, GraduationCap, Trophy } from "lucide-react";
import { Reveal, Spotlight } from "@/components/motion";
import { achievements, education } from "@/data/portfolio";
import { Accent, Section } from "./Section";

const icons = { trophy: Trophy, award: Award };

export function Recognition() {
  return (
    <Section
      id="recognition"
      index="05"
      eyebrow="Recognition & Education"
      title={
        <>
          Wins and <Accent>foundations.</Accent>
        </>
      }
    >
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon];
            return (
              <Reveal key={a.title} delay={i * 100}>
                <Spotlight className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-7">
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 size-44 rounded-full bg-primary/15 blur-3xl transition-transform duration-700 group-hover:scale-150"
                  />
                  <div className="relative grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-violet text-background">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="relative mt-6 text-lg font-semibold tracking-tight">{a.title}</h3>
                  <p className="relative mt-1 text-sm text-primary">{a.meta}</p>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <Spotlight className="h-full rounded-2xl border border-border bg-card/40 p-7">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="size-4 text-primary" /> Education
            </div>
            <ol className="relative mt-6 space-y-6 border-l border-border pl-6">
              {education.map((e, i) => (
                <li key={e.school} className="relative">
                  <span
                    className={
                      "absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 ring-background " +
                      (i === 0 ? "bg-primary" : "bg-muted-foreground/40")
                    }
                  />
                  <div className="font-medium">{e.school}</div>
                  <div className="mt-0.5 flex flex-wrap justify-between gap-x-4 text-sm text-muted-foreground">
                    <span>{e.degree}</span>
                    <span className="font-mono text-xs">{e.period}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Spotlight>
        </Reveal>
      </div>
    </Section>
  );
}
