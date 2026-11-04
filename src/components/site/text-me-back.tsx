import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";

const ENDPOINT = "https://blacklinelogic.app.n8n.cloud/webhook/bll-lead-catcher/web-lead?k=bll-demo";

export const WEB_CONSENT_TEXT =
  "I agree to receive customer care text messages from BlackLine Logic LLC about my request at the mobile number above. Up to 3 msgs per request; msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase.";

export function TextMeBackForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = new URLSearchParams({
      name: String(f.get("name") ?? ""),
      phone: String(f.get("phone") ?? ""),
      email: String(f.get("email") ?? ""),
      message: String(f.get("message") ?? ""),
      sms_consent: f.get("sms_consent") ? "true" : "false",
    });
    setState("sending");
    try {
      await fetch(ENDPOINT, { method: "POST", mode: "no-cors", body });
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-lg border border-primary/40 bg-primary/5 p-6">
        <div className="font-display text-2xl mb-2">Got it. Thanks!</div>
        <p className="text-muted-foreground leading-relaxed">
          We received your request and will get back to you shortly, by text if you checked the box, otherwise by phone or
          email.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Your name</span>
          <input name="name" required maxLength={60} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Mobile number</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="816-555-0123" className={field} />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">
          Email <span className="text-muted-foreground font-normal">(optional)</span>
        </span>
        <input name="email" type="email" autoComplete="email" className={field} />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">How can we help?</span>
        <textarea name="message" required maxLength={300} rows={3} className={field} />
      </label>

      <label className="flex gap-3 items-start rounded-md border border-border bg-muted/30 p-3.5 text-[13px] leading-relaxed text-muted-foreground">
        <input name="sms_consent" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-primary" />
        <span>
          {WEB_CONSENT_TEXT} See our{" "}
          <Link to="/sms-terms" className="text-foreground underline underline-offset-4">
            SMS Terms
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-foreground underline underline-offset-4">
            Privacy Policy
          </Link>
          . <span className="text-foreground/80">(Optional. Leave unchecked and we'll call or email instead.)</span>
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all glow-btn disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send request →"}
        </button>
        {state === "error" && (
          <span className="text-sm text-destructive">Something went wrong. Please call or email us instead.</span>
        )}
      </div>
    </form>
  );
}
