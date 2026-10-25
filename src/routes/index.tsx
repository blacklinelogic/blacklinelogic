import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Eyebrow, CONTACT_EMAIL } from "@/components/site/site-chrome";
import { RequestForm, intakeFields } from "@/components/site/request-form";
import { AiAnswerMock, VisibilitySteps } from "@/components/site/visibility";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BlackLine Logic",
  legalName: "BlackLine Logic LLC",
  url: "https://blacklinelogic.com",
  logo: "https://blacklinelogic.com/blacklinelogic_logo.png",
  email: "info@blacklinelogic.com",
  telephone: "+1-816-315-7562",
  description:
    "Kansas City AI automation studio for home-service contractors: missed-call text-back, automated Google review requests, AI search visibility (ChatGPT, Gemini, Google AI Mode), and custom workflow automation.",
  address: { "@type": "PostalAddress", addressLocality: "Kansas City", addressRegion: "MO", addressCountry: "US" },
  areaServed: [
    "Kansas City, MO", "Kansas City, KS", "Overland Park, KS", "Olathe, KS", "Lee's Summit, MO",
    "Independence, MO", "Lenexa, KS", "Shawnee, KS", "Blue Springs, MO", "Liberty, MO",
  ].map((name) => ({ "@type": "City", name })),
  knowsAbout: [
    "Missed-call text-back", "Google review automation", "AI search visibility", "Generative engine optimization",
    "n8n workflow automation", "Twilio SMS automation", "AI agents for contractors",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Packages",
    itemListElement: [
      ["AI Visibility Audit", "197", "One-time audit of whether ChatGPT, Gemini, Perplexity and Google AI Mode recommend your business."],
      ["Fix & Monitor", "297", "Monthly fixes and re-testing to get your business named by AI assistants."],
      ["Lead Catcher", "497", "Missed-call text-back and lead follow-up for contractors. $497 setup plus $197 per month."],
      ["Review Engine", "297", "Automatic Google review requests after every job. $297 setup plus $97 per month."],
    ].map(([name, price, description]) => ({
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      itemOffered: { "@type": "Service", name, description },
    })),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlackLine Logic — AI Automation for Kansas City Contractors" },
      {
        name: "description",
        content:
          "Kansas City AI automation for home-service contractors: missed-call text-back, automatic Google review requests, and getting recommended by ChatGPT and Google AI. Fixed prices.",
      },
      { property: "og:title", content: "BlackLine Logic — AI Automation for Kansas City Contractors" },
      {
        property: "og:description",
        content: "Missed-call text-back, Google review automation, and AI search visibility for Kansas City home-service contractors.",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(businessSchema) }],
  }),
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
  { k: "Build", v: "We build and test it: packages run on our systems, custom builds in accounts you own. Then we walk you through setup step by step by email." },
  { k: "Go live", v: "We run live test leads with you watching, switch it on, and stay on to measure and refine." },
];

const stats: [string, string][] = [
  ["52%", "Of callers to home-service businesses reach a person"],
  ["45%", "Of consumers used AI to find a local business last year"],
  ["1 day", "From intake form to fixed quote"],
  ["$0", "Extra software or texting fees on packages"],
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

      <section id="top" className="pt-16">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
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
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8">
              The line between effort and <span className="text-accent">output.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              BlackLine Logic builds custom AI automation systems tailored to the day-to-day operations of your business. Less busywork. More leverage. Fully yours. Built for home-service contractors who'd rather be on the job than at a desk.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#start" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all">
                Get a fixed quote in one business day
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#packages" className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                See packages and prices
              </a>
            </div>
          </div>
        </div>

      </section>

      <section className="relative border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map(([n, l]) => (
            <div key={l} className="py-10 px-6 first:pl-0">
              <div className="font-display text-4xl md:text-5xl text-accent">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">{l}</div>
            </div>
          ))}
        </div>
        <p className="max-w-7xl mx-auto px-6 pb-6 text-[11px] text-muted-foreground/60">
          Sources: Invoca Home Services Benchmarks 2026; BrightLocal Local Consumer Review Survey 2026.
        </p>
      </section>

      <section id="services" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <Eyebrow>§ 01 — Services</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
                Automation, shaped to your business.
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
                <h3 className="font-display text-2xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
            <div className="md:col-span-2 bg-primary/5 p-10 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">05</span>
                  <span className="rounded-full bg-primary text-primary-foreground font-mono text-[10px] tracking-[0.15em] px-2 py-0.5">NEW</span>
                </div>
                <h3 className="font-display text-2xl mb-4">AI Search Visibility</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  Homeowners now ask ChatGPT and Google's AI who to hire. We test those answers for your trade and town, show you who gets named instead, and fix why.
                </p>
              </div>
              <a href="#visibility" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all whitespace-nowrap">
                See how it works →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-6">
              <Eyebrow>§ 02 — Packages</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
                Fixed prices. No surprises.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Packages run on our systems, so software and texting costs are included in the monthly price. The only extra is a one-time carrier registration fee (about $20) for Lead Catcher and Review Engine. Cancel anytime and we export your data to you.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {packages.map((p) => (
              <div key={p.name} className="bg-background p-10 flex flex-col">
                <h3 className="font-display text-2xl mb-6">{p.name}</h3>
                <div className="mb-6">
                  <span className="font-display text-4xl">{p.setup}</span>
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
          <div id="try-it" className="mt-px border border-t-0 border-border bg-primary/5 p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">Try it yourself</div>
              <h3 className="font-display text-2xl mb-3">See what your customers would get.</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Call <a href="tel:+18163272628" className="text-foreground underline underline-offset-4">816-327-2628</a> and press 1 when asked. You'll get the missed-call text a caller would. Or fill in our sample quote form and watch the reply land on your phone in under a minute.
              </p>
              <p className="text-[11px] text-muted-foreground/70 mt-4">
                Demo texts come from BlackLine Logic. Up to 3 msgs. Msg &amp; data rates may apply. Reply STOP to opt out.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+18163272628" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all whitespace-nowrap">
                Call the demo line
              </a>
              <a href="https://blacklinelogic.app.n8n.cloud/form/bll-quote?k=bll-demo" target="_blank" rel="noopener" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-primary/40 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap">
                Try the quote form →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="visibility" className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Eyebrow>§ 03 — AI Search Visibility</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8">
                Homeowners are asking AI who to call. <span className="text-accent">Does it say your name?</span>
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
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Get your free AI scan →
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-3xl">
            <Eyebrow>§ 04 — Process</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Four steps. No theater.
            </h2>
          </div>

          <div className="space-y-px bg-border">
            {process.map((p, i) => (
              <div key={p.k} className="bg-background grid md:grid-cols-12 gap-6 items-baseline py-8 px-6 md:px-10 hover:bg-card transition-colors group">
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <div className="md:col-span-3 font-display text-2xl group-hover:text-primary transition-colors">{p.k}</div>
                <div className="md:col-span-8 text-muted-foreground text-lg leading-relaxed">{p.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 md:sticky md:top-24 self-start">
            <Eyebrow>§ 05 — Principles</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8">
              How we think about your systems.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Automation should be quiet infrastructure — reliable, understandable, and yours to keep. We build to that standard.
            </p>
          </div>
          <div className="md:col-span-7 space-y-10">
            {[
              ["Tailored, never templated.", "Your business isn't a use case. Every system we deliver is designed against your actual operations, tools, and edge cases."],
              ["Human in the loop.", "AI is a tool, not a replacement. We design workflows where your team stays in control of the decisions that matter."],
              ["Your data stays yours.", "Your leads, reviews, and customer records belong to you. Cancel anytime and we hand everything over. Custom builds live in accounts you own."],
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

      <section id="start" className="relative py-24 border-t border-border overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>§ 06 — Start</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mb-8">
              Let's find your <span className="text-accent">black line.</span>
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
