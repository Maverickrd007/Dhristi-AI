import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { staff } from "@/lib/demo-data";

export function StaffBoard() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate">Team health</p>
          <h2 className="mt-1 text-xl font-semibold text-ink">Staff performance snapshot</h2>
        </div>
        <button className="rounded-full border border-[#d8ccb6] px-4 py-2 text-sm font-medium text-ink">
          View logs
        </button>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {staff.map((member) => (
          <div key={member.id} className="rounded-3xl bg-[#f7f2e7] p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium text-ink">{member.name}</p>
              <Badge tone={member.anomaly ? "warning" : "success"}>
                {member.attendanceRate}% present
              </Badge>
            </div>
            <p className="mt-2 text-sm text-slate">{member.role}</p>
            <p className="mt-1 text-sm text-slate">{member.shift}</p>
            <p className="mt-4 text-sm text-ink">
              {member.anomaly ?? "Attendance and stock activity are within expected patterns."}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
