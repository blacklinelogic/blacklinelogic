import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site/site-chrome";
import { TextMeBackForm } from "@/components/site/text-me-back";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BlackLine Logic — Request a Callback or Text" },
      {
        name: "description",
        content:
          "Tell BlackLine Logic what you need and we'll get back to you by text, phone or email. Kansas City, 816-315-7562.",
      },
      { property: "og:title", content: "Contact BlackLine Logic" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader nav={[{ href: "/", label: "Home" }, { href: "/#packages", label: "Packages" }]} cta={{ href: "/#scan", label: "Free AI scan" }} />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] mb-4">Request a callback or a text</h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Tell us what you need. We'll reply by text if you check the box below, otherwise by phone or email. Prefer to
          talk now? Call 816-315-7562 or email info@blacklinelogic.com.
        </p>
        <TextMeBackForm />
      </main>
      <SiteFooter />
    </div>
  );
}
