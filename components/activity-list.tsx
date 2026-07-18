import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { ActivityEvent } from "@/lib/types";
import { formatRelativeHours } from "@/lib/utils";

export function ActivityList({ events }: { events: (ActivityEvent & { freshness?: string })[] }) {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate">Realtime pulse</p>
          <h2 className="mt-1 text-xl font-semibold text-ink">What changed on the floor</h2>
        </div>
        <Badge tone="success">Live updates</Badge>
      </div>
      <div className="mt-5 space-y-4">
        {events.map((event) => {
          const tone =
            event.tone === "warning" ? "warning" : event.tone === "positive" ? "success" : "default";

          return (
            <div key={event.id} className="rounded-2xl border border-[#ece6d7] bg-[#fcfaf5] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-ink">
                  {event.actor} {event.verb} {event.target}
                </p>
                <Badge tone={tone}>{event.delta ?? event.freshness ?? "Tracked"}</Badge>
              </div>
              <p className="mt-2 text-sm text-slate">
                {formatRelativeHours(
                  (Date.now() - new Date(event.timestamp).getTime()) / (1000 * 60 * 60)
                )}
              </p>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
