import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/ui/panel";

export function MetricCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Panel className="grain">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-ink">{value}</p>
        </div>
        <div className="rounded-2xl bg-[#edf4ef] p-2 text-leaf">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate">{detail}</p>
    </Panel>
  );
}
