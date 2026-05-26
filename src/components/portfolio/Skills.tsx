import { Section } from "./Section";

const groups: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"] },
  { title: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"] },
  { title: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { title: "AI / ML", items: ["Python", "PyTorch", "scikit-learn", "CNN", "ML Pipelines"] },
  { title: "Tools & Platforms", items: ["Docker", "Git / GitHub", "Linux", "Postman", "Vercel"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I build with."
      description="Pragmatic stack choices across the full engineering surface — from UI to data layer to ML."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-card/60 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                {g.items.length.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-foreground/90 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
