import type { ReactNode } from "react";

type Bubble = { from: "them" | "you"; text: ReactNode; meta?: string };

function YourCo() {
  return <span className="rounded bg-primary/15 px-1 font-medium text-primary">Your Company</span>;
}

function Phone({ label, caption, bubbles, float = "" }: { label: string; caption: string; bubbles: Bubble[]; float?: string }) {
  return (
    <figure className={"flex flex-col items-center " + float}>
      <div className="w-full max-w-[300px] rounded-[2.25rem] border border-border bg-card p-3 shadow-[0_40px_100px_-30px_rgba(20,99,255,0.55)]">
        <div className="rounded-[1.75rem] bg-[#f6f7f9] text-[#111318] overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-semibold">
            <span>9:41</span>
            <span className="h-4 w-16 rounded-full bg-[#111318]" />
            <span>5G</span>
          </div>
          <div className="border-b border-black/5 px-5 pb-3 text-center">
            <div className="mx-auto mb-1 grid h-9 w-9 place-items-center rounded-full bg-[#d7dbe3] text-sm font-semibold text-[#4a5160]">
              YC
            </div>
            <div className="text-[13px] font-semibold">{label}</div>
          </div>
          <div className="bubble-seq space-y-2 px-3 py-4 min-h-[300px]">
            {bubbles.map((b, i) => (
              <div key={i} className={b.from === "you" ? "flex justify-end" : "flex justify-start"}>
                <div className="max-w-[82%]">
                  {b.meta && <div className="mb-1 text-center text-[10px] text-[#8a909c]">{b.meta}</div>}
                  <div
                    className={
                      "rounded-2xl px-3 py-2 text-[13px] leading-snug " +
                      (b.from === "you" ? "bg-[#1463ff] text-white rounded-br-md" : "bg-white text-[#111318] rounded-bl-md shadow-sm")
                    }
                  >
                    {b.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-5 max-w-[300px] text-center text-sm text-muted-foreground leading-relaxed">{caption}</figcaption>
    </figure>
  );
}

export function CustomerViewPhones() {
  return (
    <div className="grid gap-12 md:grid-cols-2 lg:gap-20 justify-items-center">
      <Phone
        float="float-slow"
        label="(816) 555-0142"
        caption="Missed call at 6:52pm. The caller pressed 1 and got this text in seconds, instead of calling the next company on the list."
        bubbles={[
          {
            from: "them",
            meta: "Today 6:52 PM",
            text: (
              <>
                Hi, this is <YourCo />. Sorry we missed your call! How can we help with your request? Reply STOP to opt out.
              </>
            ),
          },
          { from: "you", text: "Hail damage on my roof, need someone to look at it this week" },
          {
            from: "them",
            text: (
              <>
                Got it. We have Thursday 10am or Friday 2pm open for a free inspection. Which works better?
              </>
            ),
          },
          { from: "you", text: "Thursday works" },
        ]}
      />
      <Phone
        float="float-slow-2"
        label="(816) 555-0142"
        caption="Job finished. The customer gets one friendly text with your Google review link, and one reminder if they don't get to it."
        bubbles={[
          {
            from: "them",
            meta: "Yesterday 4:15 PM",
            text: (
              <>
                Thanks for choosing <YourCo />, Karen! If we did a good job, would you leave us a quick Google review? It really helps a local business. g.page/r/your-link
              </>
            ),
          },
          { from: "you", text: "Done! Crew was great, thank you" },
          { from: "them", text: "That means a lot. Thank you, Karen!" },
        ]}
      />
    </div>
  );
}
