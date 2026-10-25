import { createFileRoute } from "@tanstack/react-router";
import { TradePage, tradeHead, type Trade } from "@/components/site/trade-page";

const t: Trade = {
  slug: "hvac",
  trade: "HVAC companies",
  tradeTitle: "HVAC Companies",
  job: "an HVAC company",
  questions: ["emergency AC repair Lee's Summit", "best HVAC company in Kansas City", "furnace not working who to call Overland Park", "AC replacement cost Kansas City", "24 hour heating repair near me Olathe"],
  missedCallMoment: "When the first heat wave or cold snap hits, phones ring nonstop. Missed callers get an instant text so a no-heat call doesn't become your competitor's job.",
  reviewMoment: "Every tune-up and install ends with a review request by text, plus one reminder. More recent reviews help you show up when homeowners ask AI who to call.",
};

export const Route = createFileRoute("/hvac")({
  head: () => tradeHead(t),
  component: TradeRoute,
});

function TradeRoute() {
  return <TradePage t={t} />;
}
