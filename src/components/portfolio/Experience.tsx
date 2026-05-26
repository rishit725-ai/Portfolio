import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "EMS Manufacturing Intern",
    company: "Electronics Manufacturing Services",
    period: "2024 — 2025",
    points: [
      "Worked on EMS manufacturing workflows involving PCB assembly, smart switch production, and operational process tracking.",
      "Gained hands-on exposure to RFQ, procurement, IQC, SMT assembly, QA testing, and dispatch lifecycle stages.",
      "Contributed to smart switch development discussions including PCB-level understanding, relay integration, and workflow coordination.",
      "Observed real-world production monitoring, inventory dependency handling, and quality assurance processes in manufacturing environments.",
      "Documented operational workflows and analyzed opportunities for workflow visibility and process optimization.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked."
      description="Hands-on engineering in manufacturing intelligence and embedded systems."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.role} className="relative pl-12 sm:pl-16">
              <div className="absolute left-0 top-1 grid place-items-center size-9 sm:size-10 rounded-full border border-border bg-card text-primary">
                <Briefcase className="size-4" />
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="text-sm text-primary mt-0.5">{e.company}</p>
                <ul className="mt-3 space-y-1.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 rounded-full bg-primary/70 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
