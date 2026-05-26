import { Section } from "./Section";
import { Github, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart EMS Workflow Intelligence Platform",
    description:
      "A full-stack workflow intelligence platform for Electronics Manufacturing Services that tracks RFQ-to-dispatch workflows, visualizes dependencies, and improves operational visibility.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "FastAPI"],
    highlights: [
      "Dependency-aware workflow tracking",
      "Inventory and QA monitoring",
      "Operational intelligence layer",
    ],
    tags: ["Full Stack", "Workflow", "Enterprise"],
    accent: "from-primary/30 to-transparent",
    github: "https://github.com/rishit725-ai/Smart-EMS-Main.git",
  },
  {
    title: "AI-Powered Smart Agriculture System",
    description:
      "Hackathon-winning AI-powered agriculture platform integrating ML models for crop health monitoring, irrigation assistance, and price forecasting.",
    stack: ["React", "Python", "FastAPI", "scikit-learn"],
    highlights: [
      "Winner — Terrathon 4.0",
      "Responsive React frontend",
      "ML-integrated architecture",
    ],
    tags: ["AI/ML", "Award", "Full Stack"],
    accent: "from-emerald-500/25 to-transparent",
    award: true,
    github: "",
  },
  {
    title: "Music Genre Classification System",
    description:
      "Deep learning and classical ML-based music genre classification system using CNN feature extraction with SVM and GDA classifiers.",
    stack: ["Python", "PyTorch", "scikit-learn", "NumPy"],
    highlights: [
      "CNN feature extraction",
      "Dimensionality reduction",
      "Hybrid ML pipeline",
    ],
    tags: ["Deep Learning", "Research"],
    accent: "from-violet-500/25 to-transparent",
    github: "https://github.com/rishit725-ai/Music-Classification-through-CNN-and-Classical-Algorithms.git",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="Production-grade systems and applied ML projects. Each one solves a real problem end-to-end."
    >
      <div className="grid gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors hover:border-primary/40"
          >
            <div className="grid lg:grid-cols-[1.1fr_1.4fr]">
              <div className={`relative h-48 lg:h-auto bg-gradient-to-br ${p.accent} border-b lg:border-b-0 lg:border-r border-border`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 grid place-items-center">
                  {p.award ? (
                    <Trophy className="size-12 text-primary/70" />
                  ) : (
                    <div className="font-mono text-5xl font-semibold text-foreground/15">
                      {String(projects.indexOf(p) + 1).padStart(2, "0")}
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-background/70 backdrop-blur px-2 py-0.5 text-[10px] font-medium text-foreground/80 border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <ul className="mt-5 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="mt-2 size-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono rounded-md border border-border bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.github && (
                  <div className="mt-6 flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github /> Code
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
