import { useState } from "react";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="font-display text-2xl">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#1463ff] h-2 cursor-pointer"
      />
    </label>
  );
}

export function MissedCallCalculator() {
  const [calls, setCalls] = useState(6);
  const [job, setJob] = useState(1500);
  const [rate, setRate] = useState(30);

  const jobsLost = (calls * 52) / 12 * (rate / 100);
  const monthly = jobsLost * job;
  const breakEven = Math.max(1, Math.ceil(497 / job));

  return (
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-px bg-border border border-border rounded-lg overflow-hidden">
      <div className="bg-background p-8 md:p-10 space-y-8">
        <Slider label="Missed calls a week" value={calls} display={String(calls)} min={1} max={40} step={1} onChange={setCalls} />
        <Slider label="Average job value" value={job} display={money(job)} min={150} max={20000} step={50} onChange={setJob} />
        <Slider
          label="Missed callers who would have booked"
          value={rate}
          display={`${rate}%`}
          min={5}
          max={80}
          step={5}
          onChange={setRate}
        />
      </div>
      <div className="bg-card p-8 md:p-10 flex flex-col justify-center">
        <div className="text-sm text-muted-foreground mb-2">Work going to someone else, every month</div>
        <div className="font-display text-5xl md:text-6xl text-accent">{money(monthly)}</div>
        <div className="mt-2 text-sm text-muted-foreground">
          About {jobsLost < 10 ? jobsLost.toFixed(1) : Math.round(jobsLost)} jobs a month
        </div>
        <div className="mt-8 border-t border-border pt-6 leading-relaxed">
          The Growth Plan is <strong>$497 a month</strong>. It pays for itself if it saves{" "}
          <strong>
            {breakEven} {breakEven === 1 ? "job" : "jobs"}
          </strong>{" "}
          a month.
        </div>
        <p className="mt-4 text-xs text-muted-foreground/80">Estimate only, based on the numbers you enter. Results vary by business.</p>
      </div>
    </div>
  );
}
