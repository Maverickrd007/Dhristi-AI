import { ActionCard } from "@/components/action-card";
import { ActivityList } from "@/components/activity-list";
import { AssistantPanel } from "@/components/assistant-panel";
import { BriefHeader } from "@/components/brief-header";
import { MetricCard } from "@/components/metric-card";
import { SalesTrend } from "@/components/charts/sales-trend";
import { actions } from "@/lib/demo-data";
import { getActionStats, getBusinessBrief, getRealtimePulse } from "@/lib/ai";
import { formatCurrency } from "@/lib/utils";

export default function HomePage() {
  const brief = getBusinessBrief();
  const stats = getActionStats();

  return (
    <div className="space-y-6 pb-8">
      <BriefHeader headline={brief.headline} summary={brief.summary} bullets={brief.bullets} />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Open AI actions"
          value={String(stats.openActions)}
          detail="High-confidence recommendations waiting for owner approval."
        />
        <MetricCard
          label="Low stock SKUs"
          value={String(stats.lowStockCount)}
          detail="Includes critical items that may stock out before the next delivery run."
        />
        <MetricCard
          label="Cash at risk"
          value={formatCurrency(159000)}
          detail="Client dues likely to affect Monday replenishment capacity."
        />
        <MetricCard
          label="Active staff today"
          value={String(stats.activeStaff)}
          detail="Attendance sync is stable, with one anomaly worth checking."
        />
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-6">
          <SalesTrend />
          <div className="grid gap-4 lg:grid-cols-3">
            {actions.map((action) => (
              <ActionCard key={action.id} action={action} />
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          <AssistantPanel />
          <ActivityList events={getRealtimePulse()} />
        </div>
      </section>
    </div>
  );
}
