import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { InsightAction } from "@/lib/types";

export function ActionCard({ action }: { action: InsightAction }) {
  const tone =
    action.type === "reorder"
      ? "warning"
      : action.type === "reminder"
        ? "danger"
        : action.type === "staff"
          ? "default"
          : "success";

  return (
    <Panel className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3">
          <Badge tone={tone}>{action.type}</Badge>
          <Sparkles className="h-4 w-4 text-gold" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink">{action.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate">{action.reason}</p>
        <div className="mt-4 rounded-2xl bg-[#f5f0e5] p-4">
          <p className="text-sm font-medium text-ink">{action.recommendation}</p>
          <p className="mt-2 text-sm text-slate">{action.impact}</p>
        </div>
      </div>
      <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-leaf">
        {action.approvalLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </Panel>
  );
}
