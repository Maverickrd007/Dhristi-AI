import { InventoryTable } from "@/components/inventory-table";
import { Panel } from "@/components/ui/panel";

export default function InventoryPage() {
  return (
    <div className="space-y-6 pb-8">
      <Panel className="bg-[#f4eedf]">
        <p className="text-sm uppercase tracking-[0.24em] text-slate">Inventory</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Live stock, not stale counts</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate">
          Every movement is designed to become an event the copilot can reason about, so low stock,
          sudden edits, and reorder timing are surfaced before they hurt the day.
        </p>
      </Panel>
      <InventoryTable />
    </div>
  );
}
