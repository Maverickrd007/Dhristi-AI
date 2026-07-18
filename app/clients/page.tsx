import { ClientLedger } from "@/components/client-ledger";
import { Panel } from "@/components/ui/panel";

export default function ClientsPage() {
  return (
    <div className="space-y-6 pb-8">
      <Panel className="bg-[#eef3ee]">
        <p className="text-sm uppercase tracking-[0.24em] text-slate">Clients</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Cash flow needs follow-through, not memory</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate">
          Khata tracking, risk detection, and draft reminders live together so the owner can recover
          dues without opening five different tools.
        </p>
      </Panel>
      <ClientLedger />
    </div>
  );
}
