import { StaffBoard } from "@/components/staff-board";
import { Panel } from "@/components/ui/panel";

export default function StaffPage() {
  return (
    <div className="space-y-6 pb-8">
      <Panel className="bg-[#f8f2ea]">
        <p className="text-sm uppercase tracking-[0.24em] text-slate">Staff</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Trust the team, verify the exceptions</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate">
          The staff layer prioritizes anomalies, attendance health, and accountability instead of raw
          logs the owner will never read.
        </p>
      </Panel>
      <StaffBoard />
    </div>
  );
}
