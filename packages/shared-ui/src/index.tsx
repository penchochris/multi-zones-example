import type { ReactNode } from "react";

// NOTE: Links that cross zones (appA <-> appB) must be plain <a> tags, not
// next/link, so the browser does a hard navigation and the other zone's
// Next.js app is loaded. See https://nextjs.org/docs/app/guides/multi-zones
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/appB", label: "App B" },
];

export function Nav({ zone }: { zone: string }) {
  return (
    <header className="mz-nav">
      <strong>Multi-Zones Example</strong>
      <nav>
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <span className="mz-zone">served by {zone}</span>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mz-footer">
      © {new Date().getFullYear()} Multi-Zones Example — shared footer
    </footer>
  );
}

export function Shell({ zone, children }: { zone: string; children: ReactNode }) {
  return (
    <div className="mz-shell">
      <Nav zone={zone} />
      <main className="mz-main">{children}</main>
      <Footer />
    </div>
  );
}
