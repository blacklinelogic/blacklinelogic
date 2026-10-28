import { useEffect, useRef, useState } from "react";
import { useInView } from "@/components/site/fx";

const QUESTION = "Who's the best roofer in Overland Park, KS for storm damage?";
const NAMED: [string, string][] = [
  ["Example Roofing Co.", "4.9 stars, 300+ reviews, insurance claim help"],
  ["Sample Exteriors", "Family-owned, free inspections"],
  ["Placeholder Roof & Gutter", "Fast emergency tarping"],
];

/** An AI answer that types itself out when it scrolls into view, ending with "your company: not named". */
export function AiAnswerMock() {
  // phase: 0 waiting, 1 typing, 2 thinking, 3+ answers shown (3..5), 6 verdict
  const [phase, setPhase] = useState(6);
  const [typed, setTyped] = useState(QUESTION.length);
  const ref = useRef<HTMLDivElement>(null);
  const animate = useRef(false);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    animate.current = true;
    setPhase(0);
    setTyped(0);
  }, []);

  useInView(ref, () => {
    if (!animate.current) return;
    setPhase(1);
    let i = 0;
    const typer = window.setInterval(() => {
      i += 1;
      setTyped(i);
      if (i >= QUESTION.length) {
        window.clearInterval(typer);
        setPhase(2);
        const steps = [3, 4, 5, 6];
        steps.forEach((p, k) => window.setTimeout(() => setPhase(p), 1100 + k * 550));
      }
    }, 32);
  });

  const shown = phase >= 3 ? Math.min(NAMED.length, phase - 2) : 0;
  return (
    <div ref={ref}>
      <div className="spotlight bg-card border border-border rounded-lg overflow-hidden text-[15px] shadow-[0_40px_100px_-40px_rgba(20,99,255,0.6)]" aria-label="Example of an AI assistant answer">
        <div className="flex gap-4 px-5 py-4 border-b border-border">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground pt-1 w-10 shrink-0">Ask</span>
          <p className={"font-mono text-sm min-h-[1.5em] " + (phase === 1 ? "caret" : "")}>{QUESTION.slice(0, typed)}</p>
        </div>
        <div className="px-5 py-4 min-h-[210px]">
          {phase === 2 && (
            <div className="dots py-2" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}
          {shown > 0 && <p className="text-muted-foreground mb-3">Here are three well-reviewed options:</p>}
          <ol className="grid gap-3">
            {NAMED.slice(0, shown).map(([n, d], i) => (
              <li key={n} className="grid grid-cols-[28px_1fr] items-baseline animate-in fade-in slide-in-from-bottom-1 duration-500">
                <span className="font-mono text-xs text-primary">{i + 1}</span>
                <span>
                  <strong className="font-semibold">{n}</strong>
                  <span className="block text-sm text-muted-foreground">{d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div
          className={
            "flex flex-wrap justify-between gap-3 px-5 py-3.5 border-t border-border bg-destructive/10 transition-opacity duration-500 " +
            (phase >= 6 ? "opacity-100" : "opacity-0") +
            (phase >= 6 && animate.current ? " flash-red" : "")
          }
        >
          <span className="font-semibold">Your company</span>
          <span className="font-mono text-[13px] text-destructive">● not named in 3 of 3 runs</span>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Illustration of what a scan shows. Business names are placeholders.</p>
    </div>
  );
}

function Trace({ variant }: { variant: 0 | 1 | 2 }) {
  const d = ["M0 30H40L56 14H100", "M0 30H48L64 14H100", "M0 22H100"][variant];
  const cy = variant === 2 ? 22 : 14;
  return (
    <svg viewBox="0 0 120 44" className="w-[120px] h-[44px] hidden md:block text-primary" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="108" cy={cy} r="7" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export const visibilitySteps = [
  {
    title: "Free AI scan",
    body: "We run 10 questions homeowners in your area actually ask, like “emergency AC repair Lee's Summit.” You get a one-page result showing where you appear and which competitors are named instead.",
    price: "$0",
    unit: "",
  },
  {
    title: "Full visibility audit",
    body: "40+ questions across ChatGPT, Gemini, Perplexity and Google AI Mode, each run three times because answers vary. A side-by-side with your top competitors and a ranked list of what to fix first. Delivered in about two days.",
    price: "$197",
    unit: "one time",
  },
  {
    title: "Fix & Monitor",
    body: "Every month we fix your website copy, schema markup, Google Business Profile, listings and review gap, then re-test your questions so you see what moved. Cancel anytime.",
    price: "$297",
    unit: "per month",
  },
];

export function VisibilitySteps() {
  return (
    <div className="border-t border-border">
      {visibilitySteps.map((s, i) => (
        <div key={s.title} className="grid md:grid-cols-[120px_1fr_auto] gap-4 md:gap-8 items-start py-8 border-b border-border">
          <Trace variant={i as 0 | 1 | 2} />
          <div className="min-w-0">
            <h3 className="font-display text-2xl mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.body}</p>
          </div>
          <div className="md:text-right">
            <div className="font-display text-3xl">{s.price}</div>
            {s.unit && <div className="text-sm text-muted-foreground">{s.unit}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export const fixes = [
  ["Website", "Plain-text services and service areas", "Your trades, towns and prices written where AI can read them, not buried in images or PDFs."],
  ["Website", "Schema markup", "Structured data that tells machines your business name, address, services and hours exactly."],
  ["Content", "Answers to real questions", "FAQ and service pages built from the questions homeowners ask AI about your trade."],
  ["Google", "Business Profile", "Complete categories, services and weekly posts. Gemini and Google AI Mode lean on it heavily."],
  ["Listings", "One consistent identity", "The same name, address and phone across directories, so AI sees one business, not three."],
  ["Reviews", "Review gap plan", "Your rating and review count against the contractors AI names, and a steady plan to close it."],
];

export function FixesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
      {fixes.map(([tag, t, d]) => (
        <div key={t} className="bg-background p-8">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">{tag}</span>
          <h3 className="font-display text-xl mt-3 mb-2">{t}</h3>
          <p className="text-muted-foreground leading-relaxed text-[15px]">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function VisibilityStats() {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <div className="font-display text-5xl text-accent">45%</div>
        <p className="mt-2 text-muted-foreground">
          of consumers used an AI tool to find a local business in the past year, up from 6% the year before.
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">BrightLocal, Local Consumer Review Survey 2026</p>
      </div>
      <div>
        <div className="font-display text-5xl text-accent">1.2%</div>
        <p className="mt-2 text-muted-foreground">of local businesses get recommended by ChatGPT.</p>
        <p className="mt-1 text-xs text-muted-foreground/70">SOCi, Local Visibility Index 2026</p>
      </div>
    </div>
  );
}
