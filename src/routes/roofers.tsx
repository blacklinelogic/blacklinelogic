import { createFileRoute } from "@tanstack/react-router";
import { TradePage, tradeHead, type Trade } from "@/components/site/trade-page";

const t: Trade = {
  slug: "roofers",
  trade: "roofers",
  tradeTitle: "Roofers",
  job: "a roofer",
  questions: ["best roofer in Kansas City", "who should I call for hail damage roof repair in Overland Park", "roof replacement cost in Lee's Summit", "emergency roof leak repair near me Kansas City", "top rated roofing company in Olathe"],
  missedCallMoment: "Storm weeks bring more calls than any crew can answer. Every caller you miss gets a text within seconds, and the conversation lands on your cell before they call the next roofer.",
  reviewMoment: "After every finished roof, the homeowner gets a text with your Google review link and one reminder two days later. Steady reviews are one of the things AI looks at when choosing who to name.",
};

export const Route = createFileRoute("/roofers")({
  head: () => tradeHead(t),
  component: TradeRoute,
});

function TradeRoute() {
  return <TradePage t={t} />;
}
