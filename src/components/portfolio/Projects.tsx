import { ArrowUpRight, ExternalLink, Github, Trophy } from "lucide-react";
import { Reveal, Spotlight } from "@/components/motion";
import { projects, profile, type Project } from "@/data/portfolio";
import { buttonClass, cn } from "@/lib/utils";
import { Accent, Section } from "./Section";

const hues: Record<Project["hue"], { glow: string; text: string; ring: string }> = {
  emerald: { glow: "bg-emerald/30", text: "text-emerald", ring: "from-emerald/40" },
  blue: { glow: "bg-primary/30", text: "text-primary", ring: "from-primary/40" },
  violet: { glow: "bg-violet/30", text: "text-violet", ring: "from-violet/40" },
};

function Visual({ project }: { project: Project }) {
  const hue = hues[project.hue];
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    );
  }
  return (
    <div className="relative grid size-full place-items-center overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <div
        className={cn(
          "absolute size-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125",
          hue.glow,
        )}
      />
      <div className="relative px-6 text-center transition-transform duration-500 group-hover:-translate-y-1">
        {project.award && <Trophy className={cn("mx-auto mb-4 size-9", hue.text)} />}
        <div className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">{project.stat.value}</div>
        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.stat.label}</div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title={
        <>
          Selected <Accent>work.</Accent>
        </>
      }
      description="Applied ML and full-stack systems, each built around a real problem."
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={60}>
            <Spotlight
              as="article"
              className="group overflow-hidden rounded-3xl border border-border bg-card/40 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className={cn("grid lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
                <div
                  className={cn(
                    "relative h-60 border-b border-border bg-gradient-to-br to-transparent sm:h-72 lg:h-auto lg:min-h-[380px] lg:border-b-0",
                    hues[p.hue].ring,
                    i % 2 === 1 ? "lg:border-l" : "lg:border-r",
                  )}
                >
                  <Visual project={p} />
                  {p.award && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                      <Trophy className="size-3.5 text-emerald" /> {p.award}
                    </span>
                  )}
                </div>

                <div className="flex flex-col p-7 sm:p-10">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        {p.title}
                        <ArrowUpRight className="ml-1.5 inline size-5 align-[-0.1em] text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.summary}</p>

                  <ul className="mt-6 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span className={cn("mt-2 size-1 shrink-0 rounded-full bg-current", hues[p.hue].text)} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2 pt-8">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className={buttonClass("outline", "sm")}>
                        <Github /> Source
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className={buttonClass("outline", "sm")}>
                        <ExternalLink /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a href={profile.github} target="_blank" rel="noreferrer" className={buttonClass("ghost", "md")}>
          More on GitHub <ArrowUpRight />
        </a>
      </Reveal>
    </Section>
  );
}
