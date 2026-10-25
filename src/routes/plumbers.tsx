import { createFileRoute } from "@tanstack/react-router";
import { TradePage, tradeHead, type Trade } from "@/components/site/trade-page";

const t: Trade = {
  slug: "plumbers",
  trade: "plumbers",
  tradeTitle: "Plumbers",
  job: "a plumber",
  questions: ["emergency plumber Kansas City", "best plumber near me Overland Park", "water heater replacement Lee's Summit", "who fixes burst pipes in Olathe", "drain cleaning service Independence MO"],
  missedCallMoment: "A burst pipe means the homeowner calls until someone answers. Every missed call gets a text back in seconds so they stop dialing and wait for you.",
  reviewMoment: "After each job, the customer gets your Google review link by text and one reminder. Reviews feed the AI answers homeowners read before they call.",
};

export const Route = createFileRoute("/plumbers")({
  head: () => tradeHead(t),
  component: TradeRoute,
});

function TradeRoute() {
  return <TradePage t={t} />;
}
