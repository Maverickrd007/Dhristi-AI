import { SalesTrend } from "@/components/charts/sales-trend";
import { Panel } from "@/components/ui/panel";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 pb-8">
      <Panel className="bg-[#f2f6ef]">
        <p className="text-sm uppercase tracking-[0.24em] text-slate">Analytics</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Insights that move inventory and money</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate">
          Analytics stays explainable: short summaries, forecast-ready events, and clear action
          opportunities instead of decorative dashboards.
        </p>
      </Panel>
      <SalesTrend />
    </div>
  );
}
