import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/site/site-chrome";

export const Route = createFileRoute("/sms-terms")({
  head: () => ({
    meta: [
      { title: "SMS Terms and Conditions — BlackLine Logic" },
      {
        name: "description",
        content:
          "Terms for the BlackLine Logic Customer Care text messaging program: how to opt in, message frequency, rates, STOP and HELP, and privacy.",
      },
      { property: "og:title", content: "SMS Terms and Conditions — BlackLine Logic" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: SmsTermsPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl mb-4">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader nav={[{ href: "/", label: "Home" }]} cta={{ href: "/#scan", label: "Free AI scan" }} />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary mb-5">Legal</div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">SMS Terms and Conditions</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted-foreground border-b border-border pb-8 mb-10">
          <span>Program: BlackLine Logic Customer Care</span>
          <span>Operated by BlackLine Logic LLC, Kansas City, Missouri</span>
          <span>Last updated: October 28, 2026</span>
        </div>

        <div className="space-y-10">
          <Section title="1. Program description">
            <p>
              BlackLine Logic Customer Care is a text messaging program operated by BlackLine Logic LLC. We send conversational
              customer-care text messages to people who called our business phone number, 816-315-7562, could not be
              answered, and agreed to receive texts. Messages are about the caller's own request, such as a quote,
              scheduling, or a service question. We do not send marketing or promotional text messages in this program.
            </p>
          </Section>

          <Section title="2. How you opt in">
            <p>
              When a call to 816-315-7562 is not answered, an automated voice message identifies BlackLine Logic, explains
              the texts you would receive, and reads these terms in short form (message type, frequency, message and data
              rates, STOP and HELP). You agree to receive texts only by pressing 1 on your keypad. If you press any other
              key or hang up, no text is sent. Your consent is given to BlackLine Logic LLC only. Consent is not a condition
              of any purchase. Full details of the opt-in process are on our{" "}
              <Link to="/sms-consent" className="text-foreground underline underline-offset-4">
                SMS opt-in page
              </Link>
              .
            </p>
          </Section>

          <Section title="3. Message frequency">
            <p>
              Message frequency varies. You will receive up to 3 messages per missed call: one message right after you
              opt in, and up to two follow-ups at least 24 hours apart, sent between 9am and 7pm Central, if you have not
              replied. If you reply, we continue the conversation one-to-one about your request.
            </p>
          </Section>

          <Section title="4. Cost">
            <p>Message and data rates may apply. BlackLine Logic does not charge you for these messages.</p>
          </Section>

          <Section title="5. How to opt out">
            <p>
              You can cancel at any time. Reply <strong className="text-foreground">STOP</strong> to any message. You can also
              reply END, CANCEL, UNSUBSCRIBE, QUIT or STOPALL. After you opt out, you will receive one message confirming
              that you have been unsubscribed, and no further messages. To start receiving messages again, reply{" "}
              <strong className="text-foreground">START</strong>.
            </p>
          </Section>

          <Section title="6. How to get help">
            <p>
              Reply <strong className="text-foreground">HELP</strong> to any message for help. You can also email
              info@blacklinelogic.com or call 816-315-7562.
            </p>
          </Section>

          <Section title="7. Carriers">
            <p>Carriers are not liable for delayed or undelivered messages.</p>
          </Section>

          <Section title="8. Privacy">
            <p>
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
              Text messaging originator opt-in data and consent will not be shared with any third parties.
            </p>
            <p>
              We use your phone number, your consent record (date, time and the number you called from) and the messages you
              send us only to respond to your request and to honor opt-out requests. See our{" "}
              <Link to="/privacy" className="text-foreground underline underline-offset-4">
                Privacy Policy
              </Link>{" "}
              for more.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              BlackLine Logic LLC, 215 W Pershing Rd, Ste 403 PMB 1081, Kansas City, MO 64108. Email info@blacklinelogic.com
              or call 816-315-7562.
            </p>
          </Section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
