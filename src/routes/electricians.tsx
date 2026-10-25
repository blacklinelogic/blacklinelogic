import { createFileRoute } from "@tanstack/react-router";
import { TradePage, tradeHead, type Trade } from "@/components/site/trade-page";

const t: Trade = {
  slug: "electricians",
  trade: "electricians",
  tradeTitle: "Electricians",
  job: "an electrician",
  questions: ["best electrician in Kansas City", "panel upgrade cost Overland Park", "EV charger installation Lee's Summit", "emergency electrician near me Olathe", "licensed electrician Independence MO"],
  missedCallMoment: "You're on a ladder or in an attic when the phone rings. Missed callers get an instant text, and their reply goes straight to your cell.",
  reviewMoment: "Every finished job triggers a review request text with one reminder, so your Google rating keeps pace with the electricians AI is naming.",
};

export const Route = createFileRoute("/electricians")({
  head: () => tradeHead(t),
  component: TradeRoute,
});

function TradeRoute() {
  return <TradePage t={t} />;
}
