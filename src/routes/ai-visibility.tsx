import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site/site-chrome";
import { RequestForm, scanFields } from "@/components/site/request-form";
import { AiAnswerMock, VisibilitySteps, FixesGrid, VisibilityStats } from "@/components/site/visibility";

const TITLE = "AI Search Visibility for Contractors — BlackLine Logic";
const DESCRIPTION =
  "Find out if ChatGPT, Gemini, Perplexity and Google AI Mode name your roofing or HVAC company when Kansas City homeowners ask who to hire. Free AI scan.";

export const Route = createFileRoute("/ai-visibility")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AiVisibilityPage,
});

function AiVisibilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        nav={[
          { href: "#how", label: "How it works" },
          { href: "#fixes", label: "What we fix" },
          { href: "/", label: "Automation" },
        ]}
        cta={{ href: "#scan", label: "Free AI scan" }}
      />

      <section id="top" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              <span className="w-8 h-px bg-primary" />
              <span>AI Search Visibility · Kansas City roofing and HVAC</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
              Homeowners are asking AI who to call. <span className="italic text-gradient-amber">Does it say your name?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              We ask ChatGPT, Gemini, Perplexity and Google AI Mode the questions your customers ask, show you which contractors get named instead, and fix the reasons you're left out.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#scan" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:shadow-[var(--shadow-glow)] transition-all">
                Get your free AI scan
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <span className="text-sm text-muted-foreground">10 real questions · results in 2 business days · no call</span>
            </div>
          </div>
          <AiAnswerMock />
        </div>
      </section>

      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <VisibilityStats />
        </div>
      </section>

      <section id="how" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl leading-[1] mb-6">
              Start free. <span className="italic">Pay only once you've seen the gap.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every engagement starts with evidence: the exact questions, the exact answers, and who AI named instead of you.
            </p>
          </div>
          <VisibilitySteps />
        </div>
      </section>

      <section id="fixes" className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <Eyebrow>What we fix</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl leading-[1]">
              The signals AI reads <span className="italic">before it names a contractor.</span>
            </h2>
          </div>
          <FixesGrid />
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Eyebrow>Straight talk</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-[1]">Nobody can promise AI will name you.</h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            {[
              ["No guarantees on placement.", "AI answers change from run to run and no one outside the AI companies controls them. Anyone promising the top spot is guessing."],
              ["Real counts, not made-up scores.", "We report results like “named in 2 of 3 runs” for each question, with the full answers saved."],
              ["Month to month.", "No contracts. If the work isn't moving your numbers, cancel."],
              ["Getting named is half of it.", "If AI sends a homeowner your way and the call goes to voicemail, the job goes to the next name. Our Lead Catcher package texts back every missed call."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-primary/40 pl-6 py-1">
                <h3 className="font-display text-2xl mb-2">{t}</h3>
                <p className="text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scan" className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Free AI scan</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl leading-[1] mb-6">
              See who AI names <span className="italic text-gradient-amber">when your customers ask.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Tell us where you work and what you do. We'll run the scan and email you the results within two business days. No sales call.
            </p>
          </div>
          <div className="bg-card/80 border border-border rounded-lg p-6 md:p-8">
            <RequestForm
              id="scan-form"
              subject="Free AI scan request"
              fields={scanFields}
              submitLabel="Request my free scan"
              successText="We'll run your scan and email the results within two business days."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
