import { actions, activityFeed, business, clients, products, staff } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export function getBusinessBrief() {
  const criticalProducts = products.filter((product) => product.status === "critical");
  const lowProducts = products.filter((product) => product.status !== "healthy");
  const overdueClients = clients.filter((client) => client.overdueDays >= 14);
  const totalDues = clients.reduce((sum, client) => sum + client.balance, 0);

  return {
    headline: `Good afternoon. ${business.name} is stable, but ${criticalProducts.length} item needs immediate attention.`,
    summary:
      "Sales velocity is healthy in beverages, but cash recovery and two staple SKUs need action before tomorrow's order window.",
    bullets: [
      `${lowProducts.length} SKUs are below safe stock cover.`,
      `${overdueClients.length} clients need payment follow-up today.`,
      `${staff.filter((member) => member.anomaly).length} staff anomaly requires manager review.`,
      `Outstanding client dues stand at ${formatCurrency(totalDues)}.`
    ]
  };
}

export function getAssistantReplies() {
  return [
    {
      prompt: "What should I do first today?",
      answer:
        "Approve the detergent reorder, then send the Rupam Agency reminder. Those two actions protect both revenue and cash flow fastest."
    },
    {
      prompt: "Why is mustard oil marked low?",
      answer:
        "Current stock is 28 bottles against a reorder point of 36, while average daily movement is 5.2 bottles. At the present pace, you have roughly 5 days of cover."
    },
    {
      prompt: "Draft a polite payment follow-up",
      answer:
        "Namaskar, a quick reminder that Rs 91,000 on your account is pending from the last billing cycle. Please let us know your expected payment date so we can keep supply planning smooth."
    }
  ];
}

export function getRealtimePulse() {
  return activityFeed.slice(0, 3).map((event, index) => ({
    ...event,
    freshness: index === 0 ? "Live now" : index === 1 ? "2 min delay" : "Synced"
  }));
}

export function getActionStats() {
  return {
    openActions: actions.length,
    lowStockCount: products.filter((product) => product.status !== "healthy").length,
    duesAtRisk: clients.filter((client) => client.overdueDays > 14).length,
    activeStaff: staff.length
  };
}
