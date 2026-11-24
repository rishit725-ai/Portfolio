import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown, FileDown, Github, Linkedin } from "lucide-react";
import { CountUp, Reveal, Spotlight } from "@/components/motion";
import { marquee, profile, stats } from "@/data/portfolio";
import { buttonClass } from "@/lib/utils";
import { Accent } from "./Section";

function useTypewriter(words: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    const current = words[idx];
    const typedOut = !deleting && text === current;
    const delay = typedOut ? 1600 : deleting ? 35 : 75;
    const timeout = setTimeout(
      () => {
        if (typedOut) return setDeleting(true);
        if (!deleting) return setText(current.slice(0, text.length + 1));
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
        }
      },
      idx === 0 && deleting && text === current ? 2200 : delay,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return text;
}

const k = (s: ReactNode) => <span className="text-violet">{s}</span>;
const str = (s: ReactNode) => <span className="text-emerald">{s}</span>;
const fn = (s: ReactNode) => <span className="text-primary">{s}</span>;
const dim = (s: ReactNode) => <span className="text-muted-foreground/60">{s}</span>;

const codeLines: ReactNode[] = [
  <>
    {k("class")} {fn("RishitJena")}({fn("Engineer")}):
  </>,
  <>
    {"    "}university = {str('"PES University · CS \'27"')}
  </>,
  <>
    {"    "}focus = [{str('"Applied ML"')}, {str('"Guardrails"')}, {str('"Full Stack"')}]
  </>,
  <>
    {"    "}recently = {str('"AI/ML Intern @ Sify"')}
  </>,
  <>
    {"    "}hackathons = {"{"}
    {str('"Terrathon 4.0"')}: {str('"1st place"')}
    {"}"}
  </>,
  <>&nbsp;</>,
  <>
    {"    "}
    {k("def")} {fn("build")}(self, problem):
  </>,
  <>
    {"        "}
    {dim("# models that ship, with guardrails")}
  </>,
  <>
    {"        "}
    {k("return")} {fn("product")}({fn("model")}(problem))
  </>,
];

function CodeCard() {
  return (
    <Spotlight className="glass relative overflow-hidden rounded-2xl border border-border shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">rishit.py</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-foreground/90">
        {codeLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="mr-5 w-4 shrink-0 select-none text-right text-muted-foreground/40">{i + 1}</span>
            <code className="whitespace-pre">{line}</code>
          </div>
        ))}
      </pre>
    </Spotlight>
  );
}

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="aurora -top-40 left-[10%] size-[520px] bg-primary/40" />
        <div className="aurora top-10 right-[-10%] size-[480px] bg-violet/30 [animation-delay:-6s]" />
        <div className="aurora top-[420px] left-[35%] size-[380px] bg-emerald/15 [animation-delay:-12s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal immediate className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-white/[0.03] py-1.5 pl-2.5 pr-4 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald [animation:ping-soft_1.8s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald" />
            </span>
            {profile.status}
          </Reveal>

          <Reveal immediate as="h1" delay={80} className="text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-7xl lg:text-6xl xl:text-7xl">
            Hi, I'm {profile.firstName}.
            <br />I build AI that's <Accent>useful.</Accent>
          </Reveal>

          <Reveal immediate delay={160} className="mt-6 h-7 font-mono text-base text-muted-foreground sm:text-lg" aria-hidden>
            <span className="text-primary">~/</span> {role}
            <span className="ml-0.5 inline-block h-5 w-2 translate-y-0.5 bg-primary [animation:blink_1s_steps(1)_infinite]" />
          </Reveal>
          <span className="sr-only">{profile.roles.join(", ")}</span>

          <Reveal immediate as="p" delay={240} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.intro}
          </Reveal>

          <Reveal immediate delay={320} className="mt-9 flex flex-wrap items-center gap-3">
            <a href={profile.resume} download className={buttonClass("primary", "lg")}>
              <FileDown /> Download resume
            </a>
            <a href="#projects" className={buttonClass("outline", "lg")}>
              View projects <ArrowDown />
            </a>
            <div className="flex items-center gap-1 pl-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={buttonClass("ghost", "md", "size-11 px-0")}>
                <Github className="!size-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={buttonClass("ghost", "md", "size-11 px-0")}>
                <Linkedin className="!size-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={300} className="relative max-lg:hidden">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-violet/10 to-transparent blur-2xl" />
          <CodeCard />
        </Reveal>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-3 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <Spotlight className="h-full rounded-2xl border border-border bg-card/50 p-5">
              <div className="text-4xl font-semibold tracking-tight">
                {s.prefix}
                <CountUp value={s.value} />
                <span className="text-primary">{s.suffix}</span>
              </div>
              <div className="mt-1.5 text-sm text-muted-foreground">{s.label}</div>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      <div className="marquee fade-x mt-16 overflow-hidden border-y border-border py-5">
        <div className="marquee-track gap-10 pr-10">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm uppercase tracking-widest text-muted-foreground/70">
              {t}
              <span className="text-primary/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
