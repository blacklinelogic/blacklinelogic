import { useEffect } from "react";

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
