import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "default"
}: {
  children: React.ReactNode;
  tone?: "default" | "success" | "warning" | "danger";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tone === "success" && "bg-[#dff2eb] text-leaf",
        tone === "warning" && "bg-[#fff0d7] text-[#94621e]",
        tone === "danger" && "bg-[#fde1dc] text-coral",
        tone === "default" && "bg-[#ece8dd] text-slate"
      )}
    >
      {children}
    </span>
  );
}
