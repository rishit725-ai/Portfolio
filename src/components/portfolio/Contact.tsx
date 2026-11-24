import { useState, type FormEvent } from "react";
import { AlertCircle, Check, Copy, Github, Linkedin, Send } from "lucide-react";
import { Reveal, Spotlight } from "@/components/motion";
import { profile } from "@/data/portfolio";
import { buttonClass, cn } from "@/lib/utils";
import { Accent } from "./Section";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

function validate({ name, email, message }: Fields): Errors {
  const errors: Errors = {};
  if (name.length < 2) errors.name = "Name is too short";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email address";
  if (message.length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

const field =
  "w-full rounded-xl border border-input bg-white/[0.02] px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:bg-white/[0.04] focus:outline-none";

export function Contact() {
  const [form, setForm] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() };
    const next = validate(trimmed);
    setErrors(next);
    if (Object.keys(next).length) return;
    const { name, email, message } = trimmed;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setErrors({});
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const update = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora bottom-0 left-1/2 size-[600px] -translate-x-1/2 bg-primary/20" />
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">06</span> — Contact
          </div>
          <h2 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Let's build something <Accent>together.</Accent>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Graduating June 2027 and open to full-time AI/ML and software engineering roles, internships, and
            collaborations.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button onClick={copyEmail} className={buttonClass("primary", "lg")}>
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied!" : profile.email}
            </button>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={buttonClass("outline", "lg")}>
              <Linkedin /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={buttonClass("outline", "lg")}>
              <Github /> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-16 max-w-2xl">
          <Spotlight as="form" onSubmit={onSubmit} noValidate className="space-y-4 rounded-3xl border border-border bg-card/40 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Or send a message</h3>
              <span className="text-xs text-muted-foreground">Opens in your email app</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <input value={form.name} onChange={update("name")} placeholder="Your name" maxLength={100} className={field} />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" maxLength={255} className={field} />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about the role or project…"
                rows={5}
                maxLength={1000}
                className={cn(field, "resize-none")}
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground" aria-live="polite">
                {sent ? (
                  <span className="text-emerald">Opening your email app — just hit send.</span>
                ) : Object.keys(errors).length ? (
                  <span className="inline-flex items-center gap-1.5 text-destructive">
                    <AlertCircle className="size-3.5" /> Please fix the fields above
                  </span>
                ) : null}
              </span>
              <button type="submit" className={buttonClass("primary", "md")}>
                <Send /> Send message
              </button>
            </div>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  );
}
