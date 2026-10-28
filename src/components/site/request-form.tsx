import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "./site-chrome";

/**
 * Sends a request to the form service set in VITE_FORM_ENDPOINT
 * (for example Formspree, or Web3Forms with VITE_FORM_ACCESS_KEY).
 * If sending fails, it falls back to a ready-to-send email
 * the visitor copies or opens in their mail app.
 */

export type Field =
  | { name: string; label: string; type?: "text" | "email" | "url"; placeholder?: string; required?: boolean; full?: boolean }
  | { name: string; label: string; type: "select"; options: string[]; full?: boolean }
  | { name: string; label: string; type: "textarea"; placeholder?: string; required?: boolean; full?: boolean };

// Formspree form "Website requests" → info@blacklinelogic.com. VITE_FORM_ENDPOINT overrides it.
const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || "https://formspree.io/f/xoejonjo";
const ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY as string | undefined;

const inputClass =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors";

export function RequestForm({
  id,
  subject,
  fields,
  submitLabel,
  successText,
}: {
  id: string;
  subject: string;
  fields: Field[];
  submitLabel: string;
  successText: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback" | "error">("idle");
  const [error, setError] = useState("");
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const missing = fields
      .filter((f) => f.type !== "select" && "required" in f && f.required && !String(data[f.name] ?? "").trim())
      .map((f) => f.label.toLowerCase());
    const email = String(data.email ?? "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) missing.push("a valid email");
    if (missing.length) {
      setError(`Add ${missing.join(", ")} to send your request.`);
      return;
    }
    setError("");
    const title = `${subject}: ${data.business || data.name || "new request"}`;
    const body = [subject, "", ...fields.map((f) => `${f.label}: ${String(data[f.name] ?? "").trim() || "(none)"}`)].join("\n");
    setSummary(body);

    if (!ENDPOINT) {
      setStatus("fallback");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, subject: title, _subject: title, ...(ACCESS_KEY ? { access_key: ACCESS_KEY } : {}) }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied("Copied.");
    } catch {
      setCopied("Select the text above and copy it.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-primary/50 bg-primary/5 rounded-lg p-8" role="status">
        <div className="font-display text-2xl mb-3">Request received.</div>
        <p className="text-muted-foreground leading-relaxed">{successText}</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-4">
      {fields.map((f) => (
        <div key={f.name} className={`grid gap-2 ${f.full ? "sm:col-span-2" : ""}`}>
          <label htmlFor={`${id}-${f.name}`} className="text-sm font-medium">
            {f.label}
          </label>
          {f.type === "select" ? (
            <select id={`${id}-${f.name}`} name={f.name} className={inputClass}>
              {f.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          ) : f.type === "textarea" ? (
            <textarea id={`${id}-${f.name}`} name={f.name} rows={4} placeholder={f.placeholder} className={inputClass} />
          ) : (
            <input id={`${id}-${f.name}`} name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} className={inputClass} />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={status === "sending"}
        className="sm:col-span-2 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-60 glow-btn"
      >
        {status === "sending" ? "Sending…" : submitLabel}
        <span>→</span>
      </button>
      {error && (
        <p role="alert" className="sm:col-span-2 text-sm text-destructive">
          {error}
        </p>
      )}
      {(status === "fallback" || status === "error") && (
        <div className="sm:col-span-2 border border-primary/50 bg-primary/5 rounded-lg p-6 grid gap-4">
          <p className="text-sm">
            {status === "error" ? "That didn't go through. " : "Last step: "}
            email this request to <span className="font-mono select-all">{CONTACT_EMAIL}</span>.
          </p>
          <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed bg-background border border-border rounded-md p-4 overflow-x-auto">
            {summary}
          </pre>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={copy} className="text-[13px] font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground">
              Copy request
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`}
              className="text-[13px] font-medium px-4 py-2 rounded-md border border-border hover:bg-card"
            >
              Open in email
            </a>
            <span className="text-sm text-muted-foreground" role="status">
              {copied}
            </span>
          </div>
        </div>
      )}
    </form>
  );
}

export const scanFields: Field[] = [
  { name: "business", label: "Business name", required: true, full: true, placeholder: "Your company name" },
  { name: "trade", label: "Trade", type: "select", options: ["Roofing", "HVAC", "Plumbing", "Electrical", "Other home service"] },
  { name: "town", label: "Main town you serve", required: true, placeholder: "e.g. Overland Park" },
  { name: "website", label: "Website", full: true, placeholder: "yourcompany.com" },
  { name: "email", label: "Your email", type: "email", required: true, full: true, placeholder: "you@yourcompany.com" },
];

export const intakeFields: Field[] = [
  { name: "business", label: "Business name", required: true, placeholder: "Your company name" },
  { name: "email", label: "Your email", type: "email", required: true, placeholder: "you@yourcompany.com" },
  {
    name: "interest",
    label: "What you're interested in",
    type: "select",
    full: true,
    options: ["Contractor Growth Plan", "Lead Catcher", "Review Engine", "AI Search Visibility", "Custom Build", "Not sure yet"],
  },
  { name: "tools", label: "Tools you use now", full: true, placeholder: "e.g. Jobber, Google Sheets, Gmail, QuickBooks" },
  {
    name: "problem",
    label: "What eats your week?",
    type: "textarea",
    required: true,
    full: true,
    placeholder: "Describe the task, how often it happens, and what it costs you when it slips.",
  },
];
