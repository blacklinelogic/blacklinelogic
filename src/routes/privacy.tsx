import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/blacklinelogic_logo.png";
import { policy, type PolicyBlock } from "@/content/privacy-policy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BlackLine Logic" },
      {
        name: "description",
        content:
          "How BlackLine Logic collects, uses, discloses, retains, and protects personal information across our website, automations, and AI services.",
      },
      { property: "og:title", content: "Privacy Policy — BlackLine Logic" },
      {
        property: "og:description",
        content:
          "BlackLine Logic's privacy practices for our website, AI automations, telephone services, and client integrations.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
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

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="BlackLine Logic"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-mono text-[13px] tracking-[0.2em] uppercase hidden sm:inline">
              BlackLine<span className="text-primary">.</span>Logic
            </span>
          </Link>
          <Link
            to="/"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-6">
          Legal
        </div>
        <h1 className="font-display text-5xl md:text-6xl leading-[1] mb-6">Privacy Policy</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border pb-8 mb-10">
          <span>Effective: September 1, 2026</span>
          <span>Last updated: September 1, 2026</span>
        </div>

        <div className="space-y-4">
          <Blocks blocks={policy.intro} />
        </div>

        <div className="mt-14 space-y-14">
          {policy.sections.map((s) => (
            <section key={s.num} id={`section-${s.num}`}>
              <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-3">
                § {s.num.padStart(2, "0")}
              </div>
              <h2 className="font-display text-3xl mb-5">{s.title}</h2>
              <div className="space-y-4">
                <Blocks blocks={s.blocks} />
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono tracking-wider">
          <span>© {new Date().getFullYear()} BLACKLINE LOGIC</span>
          <Link to="/" className="hover:text-foreground transition-colors">
            HOME
          </Link>
        </div>
      </footer>
    </div>
  );
}
