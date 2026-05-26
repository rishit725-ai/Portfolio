import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full Stack Developer",
  "Workflow Intelligence Engineer",
  "AI-Assisted Systems Builder",
  "Backend & API Architect",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Rishit Jena — Available for full-time opportunities
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
          Hi, I'm Rishit. Building intelligent
          <br />
          <span className="text-gradient">full-stack systems.</span>
        </h1>

        <div className="mt-6 font-mono text-base sm:text-lg text-muted-foreground h-7">
          <span className="text-primary">&gt;</span> {text}
          <span className="inline-block w-2 h-5 bg-primary ml-0.5 align-middle animate-pulse" />
        </div>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Computer Science undergraduate passionate about building intelligent full-stack
          applications that combine clean software engineering with real-world problem solving.
          I enjoy developing scalable systems, workflow-driven platforms, and AI-assisted
          applications with a strong focus on usability, architecture, and practical impact.
        </p>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Experienced across frontend, backend, databases, and lightweight ML integration
          through academic projects, hackathons, and industry exposure in EMS manufacturing
          environments. I'm particularly interested in building systems that improve
          operational visibility, automate workflows, and transform complex processes into
          intuitive user experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/RishitJena_Resume (1).pdf" download>
              <FileDown /> Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/rishit725-ai" target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://www.linkedin.com/in/rishit-jena-008948313" target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#contact">
              <Mail /> Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
