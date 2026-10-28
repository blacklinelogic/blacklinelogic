import { useEffect, useRef, useState, type RefObject } from "react";

const traces = [
  "M1440 110 H1210 L1160 160 H1010",
  "M1440 190 H1270 L1230 230 H1120 L1085 265 H960",
  "M1440 300 H1320 L1280 340 H1180",
  "M1440 720 H1290 L1240 670 H1120",
  "M0 760 H130 L170 720 H300",
  "M0 120 H70 L110 80 H220",
];
const nodes: [number, number][] = [
  [1010, 160], [960, 265], [1180, 340], [1120, 670], [300, 720], [220, 80],
];

/** Glowing circuit traces that echo the logo, with light pulses running along them. */
export function CircuitBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg className={"circuit " + className} viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {traces.map((d) => (
        <path key={"b" + d} className="base" d={d} />
      ))}
      {traces.map((d) => (
        <path key={"p" + d} className="pulse" pathLength={1000} d={d} />
      ))}
      {nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} className="node" cx={cx} cy={cy} r={7} />
      ))}
    </svg>
  );
}

/** Backdrop layers for a hero: soft blue glow, faint grid, circuit traces. */
export function HeroBackdrop() {
  return (
    <>
      <div className="hero-aurora" />
      <div className="grid-fade" />
      <CircuitBackdrop className="hidden md:block" />
    </>
  );
}

/** Fades in every `.reveal` element as it scrolls into view. Re-runs on page change. */
export function useScrollReveal(key: string) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Runs once when the element first scrolls into view. */
export function useInView<T extends HTMLElement>(ref: RefObject<T | null>, onEnter: () => void) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      onEnter();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          onEnter();
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/** Counts a stat like "52%", "$0" or "1 day" up from zero when it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const target = m ? Number(m[2]) : 0;
  const [n, setN] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  useInView(ref, () => {
    if (!m || target === 0 || reducedMotion()) return;
    const start = performance.now();
    const dur = 1400;
    setN(0);
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  if (!m) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {m[1]}
      {n}
      {m[3]}
    </span>
  );
}

/** Lights up a radial glow under the cursor on any element with the `spotlight` class. */
export function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(".spotlight") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}

const trades = [
  "Roofers", "HVAC", "Plumbers", "Electricians", "Painters", "Flooring", "Concrete", "Fencing",
  "Lawn & landscape", "Windows & doors", "Remodelers", "Pest control", "Garage doors", "Gutters",
];

/** Endless ticker of the trades we work with. */
export function TradeTicker() {
  const row = trades.map((t) => (
    <span key={t} className="flex items-center gap-6 pr-6 text-sm md:text-base text-muted-foreground whitespace-nowrap">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(20,99,255,0.8)]" />
      {t}
    </span>
  ));
  return (
    <div className="marquee py-5" aria-label="Trades we work with: Kansas City home-service contractors">
      <div className="marquee-track" aria-hidden="true">
        {row}
        {row.map((r, i) => (
          <span key={"d" + i} className="contents">
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}
