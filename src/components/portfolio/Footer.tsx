export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="font-mono">
          <span className="text-primary">&gt;</span> built with React, TypeScript & Tailwind
        </div>
        <div>© {new Date().getFullYear()} — All rights reserved</div>
      </div>
    </footer>
  );
}
