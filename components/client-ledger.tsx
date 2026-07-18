import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { clients } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export function ClientLedger() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate">Client credit</p>
          <h2 className="mt-1 text-xl font-semibold text-ink">Khata and follow-ups</h2>
        </div>
        <button className="rounded-full border border-[#d8ccb6] px-4 py-2 text-sm font-medium text-ink">
          Draft reminders
        </button>
      </div>
      <div className="mt-5 space-y-3">
        {clients.map((client) => (
          <div key={client.id} className="rounded-2xl border border-[#ece6d7] bg-[#fcfaf5] p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-ink">{client.name}</p>
                <p className="text-sm text-slate">
                  {client.segment} · {client.area}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge tone={client.overdueDays > 14 ? "danger" : "warning"}>
                  {client.overdueDays} days overdue
                </Badge>
                <p className="font-medium text-ink">{formatCurrency(client.balance)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
