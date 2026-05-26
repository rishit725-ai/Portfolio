import { Section } from "./Section";
import { Award, Trophy, IndianRupee } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Silver Medal — NPTEL Deep Learning",
    org: "IIT Ropar",
    desc: "Top performer in nationwide Deep Learning certification.",
  },
  {
    icon: Trophy,
    title: "1st Place — Terrathon 4.0",
    org: "Hackathon Winner",
    desc: "AI-powered smart agriculture platform won the flagship hackathon.",
  },
  {
    icon: IndianRupee,
    title: "₹25,000 Cash Prize",
    org: "Terrathon 4.0",
    desc: "Awarded for the winning project at Terrathon 4.0.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Recognition."
      description="A few highlights from coursework, competitions, and certifications."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((a) => (
          <div
            key={a.title}
            className="rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40"
          >
            <div className="grid place-items-center size-11 rounded-lg bg-primary/10 text-primary">
              <a.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-semibold">{a.title}</h3>
            <p className="text-xs text-primary mt-0.5">{a.org}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
