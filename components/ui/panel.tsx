import { cn } from "@/lib/utils";

export function Panel({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-panel backdrop-blur",
        className
      )}
    >
      {children}
    </section>
  );
}
