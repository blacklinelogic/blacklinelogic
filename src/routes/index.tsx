import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { SiteHeader, SiteFooter, Eyebrow, CONTACT_EMAIL } from "@/components/site/site-chrome";
import { RequestForm, intakeFields } from "@/components/site/request-form";
import { AiAnswerMock, VisibilitySteps } from "@/components/site/visibility";

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

const packages = [
  {
    name: "Lead Catcher",
    setup: "$497",
    monthly: "$197",
    unit: "setup + per month",
    body: "Missed calls get an instant text back. Web-form leads get a reply within a minute. Leads who go quiet get two follow-ups. You see every one in one place.",
  },
  {
    name: "Review Engine",
    setup: "$297",
    monthly: "$97",
    unit: "setup + per month",
    body: "A review request texted after every finished job, with a reminder if they don't respond. More reviews, steadily, without anyone remembering to ask.",
  },
  {
    name: "Custom Build",
    setup: "From $1,500",
    monthly: "",
    unit: "fixed quote",
    body: "Quote follow-ups, job scheduling, CRM and invoice syncing, or whatever eats your week. Scoped in writing, priced up front, one round of changes included.",
  },
];

const process = [
  { k: "Intake", v: "You describe the problem in a short written form: your tools, the task, what it costs you when it slips." },
  { k: "Quote", v: "Within one business day you get a one-page scope: what we'll build, what it won't do, and a fixed price." },
  { k: "Build", v: "We build and test it in accounts in your name, then walk you through setup step by step by email." },
  { k: "Go live", v: "We run live test leads with you watching, switch it on, and stay on to measure and refine." },
];

const stats: [string, string][] = [
  ["52%", "Of callers to home-service businesses reach a person"],
  ["45%", "Of consumers used AI to find a local business last year"],
  ["1 day", "From intake form to fixed quote"],
  ["100%", "Custom-built, in accounts you own"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        nav={[
          { href: "#services", label: "Services" },
          { href: "#packages", label: "Packages" },
          { href: "#visibility", label: "AI Visibility" },
          { href: "#process", label: "Process" },
        ]}
        cta={{ href: "#start", label: "Get a quote" }}
      />

      <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1200} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl">
            <a
              href="#visibility"
              className="inline-flex items-center gap-3 mb-8 rounded-full border border-border bg-card/70 pl-1.5 pr-4 py-1.5 text-sm hover:border-primary transition-colors"
            >
              <span className="rounded-full bg-primary text-primary-foreground font-mono text-[10px] tracking-[0.15em] px-2 py-0.5">NEW</span>
              Does ChatGPT recommend your business? Free AI scan →
            </a>
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              <span className="w-8 h-px bg-primary" />
              <span>AI Automation Studio · Kansas City</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
              The line between
              <br />
              <span className="italic text-gradient-amber">effort</span> and
              <br />
              output.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              BlackLine Logic builds custom AI automation systems tailored to the day-to-day operations of your business. Less busywork. More leverage. Fully yours. Built for home-service contractors who'd rather be on the job than at a desk.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#start" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:shadow-[var(--shadow-glow)] transition-all">
                Get a fixed quote in one business day
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#packages" className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                See packages and prices
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
          {stats.map(([n, l]) => (
            <div key={l} className="py-10 px-6 first:pl-0">
              <div className="font-display text-4xl md:text-5xl text-primary">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">{l}</div>
            </div>
          ))}
        </div>
        <p className="max-w-7xl mx-auto px-6 pb-6 text-[11px] text-muted-foreground/60">
          Sources: Invoca Home Services Benchmarks 2026; BrightLocal Local Consumer Review Survey 2026.
        </p>
      </section>

      <section id="services" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <Eyebrow>§ 01 — Services</Eyebrow>
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
            <div className="md:col-span-2 bg-primary/5 p-10 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">05</span>
                  <span className="rounded-full bg-primary text-primary-foreground font-mono text-[10px] tracking-[0.15em] px-2 py-0.5">NEW</span>
                </div>
                <h3 className="font-display text-3xl mb-4">AI Search Visibility</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  Homeowners now ask ChatGPT and Google's AI who to hire. We test those answers for your trade and town, show you who gets named instead, and fix why.
                </p>
              </div>
              <a href="#visibility" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:shadow-[var(--shadow-glow)] transition-all whitespace-nowrap">
                See how it works →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="relative py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-6">
              <Eyebrow>§ 02 — Packages</Eyebrow>
              <h2 className="font-display text-5xl md:text-6xl leading-[1]">
                Fixed prices. <span className="italic">No surprises.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every automation runs in accounts in your name. Tool costs (usually $25–40 a month) are billed to you directly, and you keep everything if you ever leave.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {packages.map((p) => (
              <div key={p.name} className="bg-background p-10 flex flex-col">
                <h3 className="font-display text-3xl mb-6">{p.name}</h3>
                <div className="mb-6">
                  <span className="font-display text-5xl">{p.setup}</span>
                  {p.monthly && <span className="text-muted-foreground"> + {p.monthly}/mo</span>}
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-2">{p.unit}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">{p.body}</p>
                <a href="#start" className="mt-8 text-sm font-medium text-primary hover:underline underline-offset-4">
                  Request a quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visibility" className="relative py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Eyebrow>§ 03 — AI Search Visibility</Eyebrow>
              <h2 className="font-display text-5xl md:text-6xl leading-[1] mb-8">
                Homeowners are asking AI who to call. <span className="italic text-gradient-amber">Does it say your name?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We ask ChatGPT, Gemini, Perplexity and Google AI Mode the questions your customers ask, show you which contractors get named instead, and fix the reasons you're left out.
              </p>
            </div>
            <AiAnswerMock />
          </div>
          <VisibilitySteps />
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground max-w-2xl">
              Nobody outside the AI companies controls these answers, so we never guarantee placement. We report real counts, like "named in 2 of 3 runs," with every answer saved.
            </p>
            <Link
              to="/ai-visibility"
              hash="scan"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:shadow-[var(--shadow-glow)] transition-all"
            >
              Get your free AI scan →
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="relative py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-3xl">
            <Eyebrow>§ 04 — Process</Eyebrow>
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
            <Eyebrow>§ 05 — Principles</Eyebrow>
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

      <section id="start" className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>§ 06 — Start</Eyebrow>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
              Let's find your
              <br />
              <span className="italic text-gradient-amber">black line.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Tell us what eats your week. You'll get a written scope and a fixed price within one business day — no call, no pitch deck.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
              {[
                ["Response", "1 business day"],
                ["Quote", "Fixed, in writing"],
                ["Location", "Kansas City / Remote"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{k}</div>
                  <div className="text-sm">{v}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Prefer email? <span className="font-mono text-foreground select-all">{CONTACT_EMAIL}</span>
            </p>
          </div>
          <div className="bg-card/80 border border-border rounded-lg p-6 md:p-8">
            <RequestForm
              id="intake"
              subject="Quote request"
              fields={intakeFields}
              submitLabel="Get my fixed quote"
              successText="We'll email you a written scope and fixed price within one business day."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
