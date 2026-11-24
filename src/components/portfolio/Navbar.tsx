import { useEffect, useState } from "react";
import { FileDown, Menu, X } from "lucide-react";
import { navSections, profile } from "@/data/portfolio";
import { buttonClass, cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const s of [{ id: "home" }, ...navSections]) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border px-2 py-1.5 transition-all duration-500",
          scrolled || open ? "glass border-border shadow-[0_10px_40px_-12px_rgb(0_0_0/0.6)]" : "border-transparent",
        )}
      >
        <a href="#home" className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-violet font-mono text-xs font-bold text-background">
            RJ
          </span>
          <span className="text-sm font-medium tracking-tight max-sm:hidden">{profile.name}</span>
        </a>

        <ul className="hidden items-center md:flex">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === s.id ? "bg-white/[0.07] text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a href={profile.resume} download className={buttonClass("primary", "sm", "max-md:hidden")}>
            <FileDown /> Resume
          </a>
          <button
            className="grid size-9 place-items-center rounded-full text-foreground hover:bg-white/[0.06] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass absolute inset-x-4 top-[4.75rem] rounded-3xl border border-border bg-background/90 p-2 md:hidden">
          <ul className="flex flex-col">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base",
                    active === s.id ? "bg-white/[0.06] text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="p-2">
              <a href={profile.resume} download className={buttonClass("primary", "md", "w-full")}>
                <FileDown /> Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
