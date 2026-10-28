import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site/site-chrome";
import type { PolicyBlock } from "@/content/privacy-policy";
import { terms } from "@/content/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — BlackLine Logic" },
      {
        name: "description",
        content:
          "The terms governing use of BlackLine Logic's website, AI systems, workflow automations, integrations, and related business services.",
      },
      { property: "og:title", content: "Terms and Conditions — BlackLine Logic" },
      {
        property: "og:description",
        content:
          "Terms governing BlackLine Logic's website, AI automations, subscriptions, and client services.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function Blocks({ blocks }: { blocks: PolicyBlock[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {b.text}
          </p>
        ) : (
          <ul key={i} className="space-y-1.5 pl-1">
            {b.items.map((it) => (
              <li key={it} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader nav={[{ href: "/", label: "Home" }, { href: "/#packages", label: "Packages" }]} cta={{ href: "/#scan", label: "Free AI scan" }} />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary mb-5">
          Legal
        </div>
        <h1 className="font-display text-5xl md:text-6xl leading-[1] mb-6">
          Terms and Conditions
        </h1>
        <div className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border pb-8 mb-10">
          <span>Effective: September 1, 2026</span>
          <span>Last updated: October 28, 2026</span>
        </div>

        <div className="space-y-4">
          <Blocks blocks={terms.intro} />
        </div>

        <div className="mt-14 space-y-14">
          {terms.sections.map((s) => (
            <section key={s.num} id={`section-${s.num}`}>
              <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-3">
                Section {s.num}
              </div>
              <h2 className="font-display text-3xl mb-5">{s.title}</h2>
              <div className="space-y-4">
                <Blocks blocks={s.blocks} />
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
