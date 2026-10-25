import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site/site-chrome";
import { RequestForm, scanFields } from "@/components/site/request-form";

export type Trade = {
  slug: string;
  trade: string; // "roofers"
  tradeTitle: string; // "Roofers"
  job: string; // "a roofer"
  questions: string[];
  missedCallMoment: string;
  reviewMoment: string;
};

export function tradeHead(t: Trade) {
  const title = `AI Visibility, Missed-Call Text-Back and Reviews for ${t.tradeTitle} in Kansas City — BlackLine Logic`;
  const description = `Kansas City ${t.trade}: get recommended by ChatGPT and Google AI, text back every missed call, and collect Google reviews after every job. Fixed prices.`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `AI search visibility and lead automation for ${t.trade}`,
          provider: { "@type": "ProfessionalService", name: "BlackLine Logic", url: "https://blacklinelogic.com", telephone: "+1-816-315-7562" },
          areaServed: { "@type": "City", name: "Kansas City" },
          audience: { "@type": "BusinessAudience", audienceType: t.tradeTitle },
        }),
      },
    ],
  };
}

export function TradePage({ t }: { t: Trade }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        nav={[
          { href: "/#packages", label: "Packages" },
          { href: "/#visibility", label: "AI Visibility" },
          { href: "/#faq", label: "FAQ" },
        ]}
        cta={{ href: "#scan", label: "Free AI scan" }}
      />

      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              <span className="w-8 h-px bg-primary" />
              <span>For Kansas City {t.trade}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.04] mb-8">
              When a homeowner asks AI for {t.job}, <span className="text-accent">is it your name they hear?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              ChatGPT, Gemini and Google AI Mode now answer “who should I call?” with two or three local names. We check whether you're one of them, fix why you're not, text back every caller you miss, and ask every finished customer for a Google review.
            </p>
            <a href="/#packages" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all">
              See packages and prices →
            </a>
          </div>
          <div id="scan" className="bg-card/80 border border-border rounded-lg p-6 md:p-8">
            <h2 className="font-display text-2xl mb-2">Free AI scan for {t.trade}</h2>
            <p className="text-sm text-muted-foreground mb-6">We run the questions below for your town and email you who gets named. Free, no sales call.</p>
            <RequestForm
              id={`scan-${t.slug}`}
              subject={`Free AI scan request (${t.tradeTitle})`}
              fields={scanFields}
              submitLabel="Get my free scan"
              successText="We'll run your scan and email the results within two business days."
            />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Eyebrow>What homeowners ask AI</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.05]">The questions we test for {t.trade}.</h2>
          </div>
          <ul className="md:col-span-7 divide-y divide-border border-y border-border">
            {t.questions.map((q) => (
              <li key={q} className="py-4 font-mono text-[15px]">“{q}”</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            ["Get named by AI", "We run those questions on ChatGPT, Gemini, Perplexity and Google AI Mode, three times each, and fix what's keeping you out: website text, schema markup, Google Business Profile, listings and reviews.", "$197 audit · $297/mo Fix & Monitor"],
            ["Catch missed calls", t.missedCallMoment, "Lead Catcher · $497 setup + $197/mo"],
            ["Collect reviews", t.reviewMoment, "Review Engine · $297 setup + $97/mo"],
          ].map(([h, b, p]) => (
            <div key={h} className="bg-background p-10 flex flex-col">
              <h3 className="font-display text-2xl mb-4">{h}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{b}</p>
              <div className="mt-6 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{p}</div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted-foreground">All three together: <span className="text-foreground font-medium">Contractor Growth Plan, $497/mo, no setup fee.</span></p>
          <Link to="/" hash="packages" className="text-sm font-medium text-primary hover:underline underline-offset-4">Compare packages →</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
