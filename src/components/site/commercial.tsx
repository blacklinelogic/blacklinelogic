import { useEffect, useRef } from "react";

/**
 * The 30-second BlackLine commercial. Muted, looping, loaded only when it nears the
 * screen, and paused when scrolled away. Phones get the vertical cut, larger screens
 * the widescreen cut. Visitors with reduced-motion settings get controls instead of autoplay.
 */
function AutoVideo({ src, poster, className, label }: { src: string; poster: string; className: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.controls = true;
      return;
    }
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.preload === "none") v.preload = "auto";
          v.play().catch(() => {
            v.controls = true;
          });
        } else {
          v.pause();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      onClick={(e) => {
        const v = e.currentTarget;
        if (v.paused) v.play().catch(() => {});
        else v.pause();
      }}
    />
  );
}

const LABEL =
  "30-second BlackLine Logic commercial: a contractor misses a call, the homeowner calls a competitor or asks ChatGPT, which doesn't name them; BlackLine texts back every missed call and gets the job booked.";

export function Commercial({ compact = false }: { compact?: boolean }) {
  const frame =
    "w-full rounded-xl border border-border bg-card shadow-[0_40px_120px_-40px_rgba(20,99,255,0.7)] cursor-pointer";
  return (
    <div className={compact ? "" : "mx-auto max-w-5xl"}>
      <AutoVideo
        src="/video/commercial-vertical.mp4"
        poster="/video/commercial-vertical.jpg"
        className={frame + " md:hidden mx-auto max-w-[360px] aspect-[9/16]"}
        label={LABEL}
      />
      <AutoVideo
        src="/video/commercial-widescreen.mp4"
        poster="/video/commercial-widescreen.jpg"
        className={frame + " hidden md:block aspect-video"}
        label={LABEL}
      />
    </div>
  );
}
