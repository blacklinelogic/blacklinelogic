import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site/site-chrome";

export const Route = createFileRoute("/sample-scan")({
  head: () => ({
    meta: [
      { title: "Sample Free AI Scan — BlackLine Logic" },
      {
        name: "description",
        content:
          "See exactly what the free AI scan looks like: 10 real homeowner questions, who ChatGPT names instead of you, and the top three fixes. Example for a fictional Kansas City roofer.",
      },
      { property: "og:title", content: "Sample Free AI Scan — BlackLine Logic" },
      { property: "og:description", content: "What the free AI scan shows a Kansas City contractor, using a fictional roofing company." },
    ],
  }),
  component: SampleScanPage,
});

type Row = { q: string; you: number | null; first: string };

const rows: Row[] = [
  { q: "Who's the best roofer in Overland Park, KS?", you: null, first: "Example Roofing Co." },
  { q: "Roofing company for hail damage near Overland Park", you: null, first: "Example Roofing Co." },
  { q: "Who should I call for a roof inspection after a storm in Johnson County?", you: 3, first: "Sample Exteriors" },
  { q: "Best roof replacement company in Olathe", you: null, first: "Placeholder Roof & Gutter" },
  { q: "Roofer that helps with insurance claims in Kansas City", you: null, first: "Example Roofing Co." },
  { q: "Affordable roof repair Leawood KS", you: 2, first: "Sample Exteriors" },
  { q: "Emergency roof tarp service Overland Park", you: null, first: "Placeholder Roof & Gutter" },
  { q: "Most trusted roofing contractor in south Kansas City", you: null, first: "Example Roofing Co." },
  { q: "Who installs metal roofs in Johnson County?", you: null, first: "Sample Exteriors" },
  { q: "Family-owned roofing company Overland Park", you: null, first: "Example Roofing Co." },
];

const competitors: [string, number][] = [
  ["Example Roofing Co.", 8],
  ["Sample Exteriors", 6],
  ["Placeholder Roof & Gutter", 5],
  ["Sample Roofing Co. (you)", 2],
];

const fixes: [string, string][] = [
  [
    "Get reviews that name your towns and jobs",
    "Your 61 Google reviews rarely mention a city or a job type. The companies AI names have reviews like \"replaced our roof in Olathe after the hail.\" Review requests that ask customers to mention the job fix this within a few months.",
  ],
  [
    "Add a service-area page and say \"insurance claims\" plainly",
    "Your site lists services but not towns, and never mentions insurance help, which 3 of the 10 questions asked about. One clear page per main town, plus an insurance-claim section, gives AI something to quote.",
  ],
  [
    "Fix your listing mismatches",
    "Your phone number differs between Google, Yelp and the BBB, and your Angi profile shows an old address. AI tools trust businesses whose details match everywhere.",
  ],
];

function SampleScanPage() {
  const named = rows.filter((r) => r.you !== null).length;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader nav={[{ href: "/", label: "Home" }, { href: "/ai-visibility", label: "AI Visibility" }]} cta={{ href: "/#scan", label: "Get my free scan" }} />

      <main className="pt-16">
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent">
            Example report for a fictional business. Yours uses your real company, towns and competitors.
          </div>
          <Eyebrow>Free AI scan · Sample</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.04] mb-6">Sample Roofing Co.</h1>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-6 text-sm">
            {[
              ["Trade", "Roofing"],
              ["Area", "Overland Park, KS"],
              ["Asked", "ChatGPT, 10 questions"],
              ["Run on", "Oct 27, 2026"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-8">
            <div className="text-sm text-muted-foreground mb-2">The headline</div>
            <div className="font-display text-6xl">
              {named}
              <span className="text-2xl text-muted-foreground"> of {rows.length}</span>
            </div>
            <p className="mt-3 leading-relaxed">
              answers named Sample Roofing Co. When homeowners asked who to hire, ChatGPT sent them somewhere else 8 times out of 10.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-5">Who got named instead</h2>
            <div className="space-y-4">
              {competitors.map(([n, c]) => (
                <div key={n}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className={n.includes("(you)") ? "font-semibold text-destructive" : "font-medium"}>{n}</span>
                    <span className="text-muted-foreground">
                      {c} of {rows.length}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className={"h-full rounded-full " + (n.includes("(you)") ? "bg-destructive" : "bg-primary")}
                      style={{ width: `${(c / rows.length) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="font-display text-2xl mb-5">The 10 questions</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-card text-left text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">What a homeowner asked</th>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">You</th>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">Named first</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.q}>
                    <td className="px-4 py-3">{r.q}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {r.you === null ? (
                        <span className="text-destructive">Not named</span>
                      ) : (
                        <span className="text-accent">Named #{r.you}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">{r.first}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20">
          <h2 className="font-display text-2xl mb-6">Your top 3 fixes</h2>
          <ol className="space-y-6">
            {fixes.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[40px_1fr] gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-semibold">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl mb-3">Want yours?</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Free, one page, emailed within two business days. No sales call. If the gaps are worth fixing, the $197 Visibility Audit covers 40+ questions across ChatGPT, Gemini, Perplexity and Google AI Mode.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/#scan" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all glow-btn">
                Get my free scan →
              </a>
              <Link to="/ai-visibility" className="inline-flex items-center px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                How it works
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
