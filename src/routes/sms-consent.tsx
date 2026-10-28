import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/site/site-chrome";

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

const CONSENT_SCRIPT =
  "Thanks for calling BlackLine Logic. Sorry we missed your call. Press 1 to agree to receive text messages from BlackLine Logic about your call, so we can help with your request, such as a quote or scheduling. These are customer care messages, up to 3 per missed call. Message and data rates may apply. Reply STOP at any time to opt out, or HELP for help. Our SMS terms and privacy policy are at blacklinelogic dot com slash S M S dash terms. If you do not want a text, just hang up.";

const steps: { label: string; body: string }[] = [
  {
    label: "1. The caller contacts us",
    body: "A person calls BlackLine Logic LLC at our business phone number, 816-315-7562, shown in the header and footer of every page of this website.",
  },
  {
    label: "2. The caller hears the full SMS disclosure",
    body: "If we cannot answer, an automated voice message identifies BlackLine Logic, explains what texts they would receive, and reads the required disclosures (message type, frequency, message and data rates, STOP and HELP). The exact script is below.",
  },
  {
    label: "3. The caller agrees by pressing 1",
    body: "Consent is given only when the caller presses 1 on their keypad. If the caller presses any other key or hangs up, no text message is sent. Each consent is logged with the caller's number and the date and time as our record of consent.",
  },
  {
    label: "4. Confirmation and conversation",
    body: "After pressing 1, the caller hears “Thank you. We are texting you now.” and receives one customer care text from our texting number, 816-327-2628, that repeats the disclosures. If they do not reply, we may send up to two follow-ups, at least 24 hours apart, between 9am and 7pm Central. Replying STOP ends all messages immediately.",
  },
];

const samples = [
  "Hi, this is BlackLine Logic. Sorry we missed your call! How can we help with your request?\n\nBlackLine Logic customer care: up to 3 msgs about your call. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
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
      <SiteHeader nav={[{ href: "/", label: "Home" }, { href: "/#packages", label: "Packages" }]} cta={{ href: "/#scan", label: "Free AI scan" }} />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary mb-5">
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
          BlackLine Logic LLC sends customer care text messages only to people who call our business
          phone number, cannot be answered, and agree to receive texts by pressing 1 after hearing the
          disclosure below. We do not send marketing or promotional texts, and we never buy, rent, or
          share phone numbers.
        </p>

        <div className="mt-10 rounded-lg border border-primary/40 bg-primary/5 px-5 py-5">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary mb-3">
            Consent statement
          </div>
          <p className="text-foreground leading-relaxed">
            By pressing 1 after calling 816-315-7562, you agree to receive customer care text messages
            from BlackLine Logic LLC about your call and request (such as quotes, scheduling, and
            service questions). Texts are sent from 816-327-2628. Up to 3 messages per missed call; message frequency varies. Msg &amp;
            data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. Consent is
            not a condition of any purchase.
          </p>
        </div>

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
            <Heading>Exact voice script the caller hears</Heading>
            <blockquote className="border-l-2 border-primary pl-5 text-foreground leading-relaxed">
              “{CONSENT_SCRIPT}”
            </blockquote>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Pressing 1 plays: “Thank you. We are texting you now. Goodbye.” Any other key or no
              response plays: “We will not text you. Goodbye.” and no message is sent.
            </p>
          </section>

          <section>
            <Heading>Messages you may receive</Heading>
            <div className="space-y-3">
              {samples.map((m) => (
                <div
                  key={m}
                  className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm leading-relaxed whitespace-pre-line"
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
                "Message type: conversational customer care about the caller's request (quotes, scheduling, service questions). No marketing.",
                "Message frequency varies; up to 3 messages per missed call unless you continue the conversation.",
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
              , and the full{" "}
              <Link to="/sms-terms" className="text-foreground underline underline-offset-4">
                SMS Terms and Conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
