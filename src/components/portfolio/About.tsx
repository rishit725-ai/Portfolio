import { Section } from "./Section";
import { Code2, Cpu, Workflow, Database } from "lucide-react";

const focus = [
  { icon: Code2, title: "Full Stack Development", desc: "End-to-end React + Node.js apps with typed APIs and clean architecture." },
  { icon: Workflow, title: "Workflow Intelligence", desc: "Dependency-aware tracking, operational visibility, and process automation." },
  { icon: Cpu, title: "AI-Integrated Systems", desc: "Embedding ML models and AI workflows into production-ready platforms." },
  { icon: Database, title: "Scalable Backends", desc: "PostgreSQL, FastAPI, REST design, and robust auth for real workloads." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer first. Generalist by design."
      description="I build production-grade web platforms where software architecture, data, and AI come together. My focus is shipping systems that are reliable, observable, and useful."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {focus.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-10 rounded-lg bg-primary/10 text-primary">
                <f.icon className="size-5" />
              </div>
              <h3 className="font-medium">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
