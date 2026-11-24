import { useEffect, useState } from "react";
import { Code2, Cpu, MapPin, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Reveal, Spotlight } from "@/components/motion";
import { focusAreas, profile } from "@/data/portfolio";
import { Accent, Section } from "./Section";

const icons = { cpu: Cpu, shield: ShieldCheck, code: Code2, workflow: Workflow };

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-IN", { timeZone, hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

const card = "h-full rounded-2xl border border-border bg-card/50 p-6";

export function About() {
  const time = useLocalTime("Asia/Kolkata");

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Where machine learning meets <Accent>real operations.</Accent>
        </>
      }
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <Reveal className="md:col-span-2 lg:row-span-2">
          <Spotlight className={`${card} flex flex-col justify-between gap-8 p-8`}>
            <p className="text-xl leading-relaxed text-foreground/90 text-pretty">
              I like problems where a model alone isn't the answer. The interesting part is everything around it: the
              data feeding it, the product people actually touch, and the{" "}
              <span className="text-primary">guardrails</span> that keep it safe in production.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              That's shaped my work so far — from mapping an electronics manufacturer's workflows end to end, to winning a
              hackathon with a five-model agriculture assistant, to building guardrail tooling for enterprise AI.
            </p>
          </Spotlight>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-2">
          <Spotlight className={`${card} flex items-center justify-between gap-4`}>
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" /> Based in
              </div>
              <div className="mt-1 text-2xl font-semibold tracking-tight">{profile.location}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Local time</div>
              <div className="mt-1 font-mono text-2xl tabular-nums">{time ?? "--:--"}</div>
            </div>
          </Spotlight>
        </Reveal>

        <Reveal delay={160} className="lg:col-span-2">
          <Spotlight className={card}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-violet" /> Right now
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between gap-4">
                <span>Final year, B.Tech Computer Science</span>
                <span className="text-muted-foreground">PES University</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Most recently AI/ML Intern</span>
                <span className="text-muted-foreground">Sify Technologies</span>
              </li>
            </ul>
          </Spotlight>
        </Reveal>

        {focusAreas.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <Reveal key={f.title} delay={i * 80}>
              <Spotlight className={`${card} group`}>
                <div className="grid size-11 place-items-center rounded-xl border border-border bg-white/[0.03] text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </Spotlight>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
