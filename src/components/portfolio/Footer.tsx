import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const link = "inline-flex items-center gap-1 transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          © {new Date().getFullYear()} {profile.name}. Built with React, TanStack Start &amp; Tailwind.
        </div>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className={link}>
            GitHub <ArrowUpRight className="size-3.5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={link}>
            LinkedIn <ArrowUpRight className="size-3.5" />
          </a>
          <a href="#home" className={link}>
            Back to top ↑
          </a>
        </div>
      </div>
      <div
        aria-hidden
        className="mt-10 select-none bg-gradient-to-b from-white/[0.12] to-transparent bg-clip-text text-center text-[19vw] leading-[0.8] font-semibold tracking-tighter text-transparent"
      >
        {profile.firstName.toLowerCase()}
      </div>
    </footer>
  );
}
