import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import logoAsset from "@/assets/blacklinelogic_logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Workflow Automation",
    body: "Replace repetitive back-office tasks — data entry, routing, approvals, reporting — with tailored agents that fit your existing tools.",
  },
  {
    n: "02",
    title: "Custom AI Agents",
    body: "Purpose-built assistants trained on your operations. From customer intake to internal knowledge, they work the way your team already does.",
  },
  {
    n: "03",
    title: "Systems Integration",
    body: "We wire your CRM, inbox, spreadsheets, and databases into a single automated pipeline. No brittle plugins, no vendor lock.",
  },
  {
    n: "04",
    title: "Ongoing Optimization",
    body: "Automation is not a one-time install. We monitor, tune, and extend your systems as your business grows.",
  },
];

const process = [
  { k: "Discover", v: "We map your day-to-day operations and find the friction that costs you hours." },
  { k: "Design", v: "A blueprint tailored to your workflow — not a template, not a SaaS retrofit." },
  { k: "Deploy", v: "We build, integrate, and roll it out with your team. Quiet, precise, reversible." },
  { k: "Refine", v: "We stay on to measure results and evolve the system as your business changes." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img src={logoAsset} alt="BlackLine Logic" width={32} height={32} className="w-8 h-8 object-contain" />
            <span className="font-mono text-[13px] tracking-[0.2em] uppercase hidden sm:inline">BlackLine<span className="text-primary">.</span>Logic</span>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#principles" className="hover:text-foreground transition-colors">Principles</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="text-[13px] font-medium px-4 py-2 rounded-md border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Book a call
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1200} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              <span className="w-8 h-px bg-primary" />
              <span>AI Automation Studio</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
              The line between
              <br />
              <span className="italic text-gradient-amber">effort</span> and
              <br />
              output.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              BlackLine Logic builds custom AI automation systems tailored to the day-to-day operations of your business. Less busywork. More leverage. Fully yours.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:shadow-[var(--shadow-glow)] transition-all">
                Start with a discovery call
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#services" className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                What we build
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 max-w-7xl mx-auto px-6 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <span>Est. Systems for Modern Operators</span>
          <span className="hidden md:inline">Scroll ↓</span>
        </div>
      </section>

      <section className="relative border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["40+", "Hours reclaimed / week"],
            ["100%", "Custom-built systems"],
            ["<30d", "Typical deployment"],
            ["24/7", "Automation uptime"],
          ].map(([n, l]) => (
            <div key={l} className="py-10 px-6 first:pl-0">
              <div className="font-display text-4xl md:text-5xl text-primary">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-6">§ 01 — Services</div>
              <h2 className="font-display text-5xl md:text-6xl leading-[1]">
                Automation, <span className="italic">shaped</span> to your business.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We don't sell shelfware. Every engagement begins with your workflow — the specifics, the exceptions, the corners cut by people who know the job. Then we build the system around it.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((s) => (
              <div key={s.n} className="bg-background p-10 md:p-12 group hover:bg-card transition-colors">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">{s.n}</span>
                  <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-3xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-3xl">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-6">§ 02 — Process</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1]">
              Four steps. <span className="italic">No theater.</span>
            </h2>
          </div>

          <div className="space-y-px bg-border">
            {process.map((p, i) => (
              <div key={p.k} className="bg-background grid md:grid-cols-12 gap-6 items-baseline py-8 px-6 md:px-10 hover:bg-card transition-colors group">
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <div className="md:col-span-3 font-display text-3xl group-hover:text-primary transition-colors">{p.k}</div>
                <div className="md:col-span-8 text-muted-foreground text-lg leading-relaxed">{p.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="relative py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 md:sticky md:top-24 self-start">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-6">§ 03 — Principles</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1] mb-8">
              How we <span className="italic">think</span> about your systems.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Automation should be quiet infrastructure — reliable, understandable, and yours to keep. We build to that standard.
            </p>
          </div>
          <div className="md:col-span-7 space-y-10">
            {[
              ["Tailored, never templated.", "Your business isn't a use case. Every system we deliver is designed against your actual operations, tools, and edge cases."],
              ["Human in the loop.", "AI is a tool, not a replacement. We design workflows where your team stays in control of the decisions that matter."],
              ["Owned, not rented.", "You own the system, the logic, and the data. No black boxes, no vendor traps."],
              ["Measured in hours saved.", "The number we care about is the one on your team's calendar. Everything else is decoration."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-primary/40 pl-6 py-1">
                <h3 className="font-display text-2xl mb-2">{t}</h3>
                <p className="text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-8">§ 04 — Start</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
            Let's find your
            <br />
            <span className="italic text-gradient-amber">black line.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            A 30-minute discovery call. We map where automation would actually move the needle for your business — free, no pitch deck.
          </p>
          <a
            href="mailto:blacklinelogic@outlook.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:shadow-[var(--shadow-glow)] transition-all group"
          >
            blacklinelogic@outlook.com
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-left border-t border-border pt-10">
            {[
              ["Response", "Within 24h"],
              ["First call", "30 min, free"],
              ["Location", "Remote / Global"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{k}</div>
                <div className="text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono tracking-wider">
          <div className="flex items-center gap-2.5">
            <img src={logoAsset} alt="" width={20} height={20} className="w-5 h-5 object-contain" />
            <span>© {new Date().getFullYear()} BLACKLINE LOGIC</span>
          </div>
          <div className="flex items-center gap-5">
            <span>CUSTOM AI AUTOMATION · BUILT TO OPERATE</span>
            <Link to="/privacy" className="text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors">
              PRIVACY
            </Link>
          </div>

        </div>
      </footer>
    </div>
  );
}
