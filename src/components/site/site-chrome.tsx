import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/blacklinelogic_logo.png";

export const CONTACT_EMAIL = "info@blacklinelogic.com";

type NavItem = { href: string; label: string };

export function SiteHeader({
  nav,
  cta,
}: {
  nav: NavItem[];
  cta: NavItem;
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoAsset} alt="BlackLine Logic" width={32} height={32} className="w-9 h-9 object-contain" />
          <span className="font-display text-[17px] tracking-[0.02em] uppercase hidden sm:inline" style={{ fontStretch: "125%" }}>
            Blackline<span className="text-accent">Logic</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={cta.href}
          className="text-[13px] font-medium px-4 py-2 rounded-md border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap"
        >
          {cta.label}
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono tracking-wider">
        <div className="flex items-center gap-2.5">
          <img src={logoAsset} alt="" width={20} height={20} className="w-5 h-5 object-contain" />
          <span>© {new Date().getFullYear()} BLACKLINE LOGIC · KANSAS CITY, MO</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <span>{CONTACT_EMAIL}</span>
          <Link to="/ai-visibility" className="text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors">
            AI VISIBILITY
          </Link>
          <Link to="/privacy" className="text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors">
            PRIVACY
          </Link>
          <Link to="/terms" className="text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors">
            TERMS
          </Link>
          <Link to="/sms-consent" className="text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors">
            SMS
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-6">{children}</div>
  );
}
