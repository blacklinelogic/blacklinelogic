import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logoAsset from "@/assets/blacklinelogic_logo.png";

export const Route = createFileRoute("/sms-consent")({
  head: () => ({
    meta: [
      { title: "SMS Opt-In and Messaging Terms — BlackLine Logic" },
      {
        name: "description",
        content:
          "How callers opt in to text messages from BlackLine Logic LLC, what messages they receive, and how to opt out.",
      },
      { property: "og:title", content: "SMS Opt-In and Messaging Terms — BlackLine Logic" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SmsConsentPage,
});

const steps: { label: string; body: string }[] = [
  {
    label: "1. The caller contacts us",
    body: "A person calls BlackLine Logic LLC at our business phone number, 816-315-7562, listed on this website. Calling us is the only way this text conversation starts.",
  },
  {
    label: "2. The caller is told a text is coming",
    body: "If we cannot answer, an automated voice message plays before the call ends.",
  },
  {
    label: "3. One text continues the conversation",
    body: "The caller receives a single text message from the number they called, identifying our business and including opt-out instructions.",
  },
  {
    label: "4. Limited follow-up",
    body: "If the caller does not reply, we may send up to two follow-up texts, at least 24 hours apart, only between 9am and 7pm Central. Any reply goes directly to our team. Replying STOP ends all messages immediately.",
  },
];

const samples = [
  "Hi, this is BlackLine Logic. Sorry we missed your call! How can we help? Reply STOP to opt out.",
  "Hi, just following up from BlackLine Logic. Still need a hand? Reply here and we'll get right back to you. Reply STOP to opt out.",
  "BlackLine Logic: You have been unsubscribed and will receive no further messages. Reply START to resubscribe.",
  "BlackLine Logic: For help, email info@blacklinelogic.com or call 816-315-7562. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out.",
];

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-3xl mb-5">{children}</h2>;
}

function SmsConsentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="BlackLine Logic"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-mono text-[13px] tracking-[0.2em] uppercase hidden sm:inline">
              BlackLine<span className="text-primary">.</span>Logic
            </span>
          </Link>
          <Link
            to="/"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-6">
          Legal
        </div>
        <h1 className="font-display text-5xl md:text-6xl leading-[1] mb-6">
          SMS Opt-In and Messaging Terms
        </h1>
        <div className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-border pb-8 mb-10">
          <span>BlackLine Logic LLC</span>
          <span>Last updated: October 25, 2026</span>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          BlackLine Logic LLC sends conversational customer-care text messages only to people who
          have called our business phone number and could not be answered. We do not send marketing
          or promotional texts, and we never buy, rent, or share phone numbers.
        </p>

        <div className="mt-14 space-y-14">
          <section>
            <Heading>How callers opt in</Heading>
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[12px] tracking-[0.15em] uppercase text-foreground mb-2">
                    {s.label}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading>Voice message the caller hears</Heading>
            <blockquote className="border-l-2 border-primary pl-5 text-foreground leading-relaxed">
              “Sorry we missed your call. We are sending you a text message right now so we can
              help.”
            </blockquote>
          </section>

          <section>
            <Heading>Messages you may receive</Heading>
            <div className="space-y-3">
              {samples.map((m) => (
                <div
                  key={m}
                  className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm leading-relaxed"
                >
                  {m}
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading>Program details</Heading>
            <ul className="space-y-1.5 pl-1">
              {[
                "Program: BlackLine Logic missed-call customer care",
                "Message frequency varies; at most one reply and two follow-ups per missed call unless you continue the conversation.",
                "Message and data rates may apply.",
                "Reply STOP to opt out at any time. Reply HELP for help.",
                "Support: info@blacklinelogic.com or 816-315-7562.",
                "Carriers are not liable for delayed or undelivered messages.",
                "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent will not be shared with any third parties.",
              ].map((it) => (
                <li key={it} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              See our{" "}
              <Link to="/privacy" className="text-foreground underline underline-offset-4">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms" className="text-foreground underline underline-offset-4">
                Terms and Conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono tracking-wider">
          <span>© {new Date().getFullYear()} BLACKLINE LOGIC</span>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              PRIVACY
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              TERMS
            </Link>
            <Link to="/" className="hover:text-foreground transition-colors">
              HOME
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
