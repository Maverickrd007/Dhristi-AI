import { business, users } from "@/lib/demo-data";
import { Panel } from "@/components/ui/panel";

export function BriefHeader({
  headline,
  summary,
  bullets
}: {
  headline: string;
  summary: string;
  bullets: string[];
}) {
  return (
    <Panel className="grain overflow-hidden bg-hero-radial">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">Today at a glance</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-leaf lg:text-5xl">{headline}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate">{summary}</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl bg-white/65 px-4 py-3 text-sm text-ink">
                {bullet}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-soft">
          <p className="text-sm text-slate">{business.location}</p>
          <p className="mt-2 text-2xl font-semibold text-ink">{users[0].name}</p>
          <p className="mt-1 text-sm text-slate">Owner account with action approvals enabled</p>
          <p className="mt-5 text-sm text-leaf">
            Mixed-language ready: {business.languageHint}
          </p>
        </div>
      </div>
    </Panel>
  );
}
