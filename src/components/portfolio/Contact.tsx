import { useState } from "react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type Status = "idle" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="Open to full-time roles, internships, and engineering collaborations."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-3">
          <a href="mailto:rishitjena725@gmail.com" className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 hover:border-primary/40 transition-colors">
            <Mail className="size-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm">rishitjena725@gmail.com</div>
            </div>
          </a>
          <a href="https://github.com/rishit725-ai" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 hover:border-primary/40 transition-colors">
            <Github className="size-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">GitHub</div>
              <div className="text-sm">github.com/rishit725-ai</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rishit-jena-008948313" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 hover:border-primary/40 transition-colors">
            <Linkedin className="size-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">LinkedIn</div>
              <div className="text-sm">linkedin.com/in/rishit-jena-008948313</div>
            </div>
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card/60 p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={100}
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={255}
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the role or project..."
              rows={5}
              maxLength={1000}
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Send /> Send message
            </Button>
            {status === "success" && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="size-4" /> Message sent successfully
              </span>
            )}
            {status === "error" && (
              <span className="flex items-center gap-1.5 text-xs text-destructive">
                <AlertCircle className="size-4" /> Please fix the errors above
              </span>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
