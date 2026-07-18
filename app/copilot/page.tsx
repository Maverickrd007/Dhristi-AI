import { ActionCard } from "@/components/action-card";
import { AssistantPanel } from "@/components/assistant-panel";
import { Panel } from "@/components/ui/panel";
import { actions } from "@/lib/demo-data";

export default function CopilotPage() {
  return (
    <div className="space-y-6 pb-8">
      <Panel className="bg-ink text-white">
        <p className="text-sm uppercase tracking-[0.24em] text-white/60">Copilot</p>
        <h1 className="mt-2 font-display text-4xl text-white">Detect. Recommend. Draft. Approve.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/74">
          The AI layer is attached to operations, not floating beside them. Suggestions explain why,
          estimate impact, and stop at the approval boundary for trust.
        </p>
      </Panel>
      <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <AssistantPanel />
        <div className="grid gap-4 md:grid-cols-2">
          {actions.map((action) => (
            <ActionCard key={action.id} action={action} />
          ))}
        </div>
      </div>
    </div>
  );
}
