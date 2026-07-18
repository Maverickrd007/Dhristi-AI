import { Panel } from "@/components/ui/panel";
import { getAssistantReplies } from "@/lib/ai";

export function AssistantPanel() {
  const replies = getAssistantReplies();

  return (
    <Panel className="bg-ink text-white">
      <p className="text-sm uppercase tracking-[0.24em] text-white/60">AI action center</p>
      <h2 className="mt-2 text-2xl font-semibold">Ask in plain language. Approve with one tap.</h2>
      <div className="mt-5 space-y-4">
        {replies.map((reply) => (
          <div key={reply.prompt} className="rounded-3xl bg-white/8 p-4">
            <p className="text-sm text-white/65">{reply.prompt}</p>
            <p className="mt-2 text-sm leading-6 text-white">{reply.answer}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
