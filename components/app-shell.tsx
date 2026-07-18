"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Boxes, BrainCircuit, ChartNoAxesCombined, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems: { href: Route; label: string; icon: typeof Bell }[] = [
  { href: "/", label: "Today", icon: Bell },
  { href: "/inventory", label: "Inventory", icon: Boxes },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/staff", label: "Staff", icon: ShieldCheck },
  { href: "/analytics", label: "Analytics", icon: ChartNoAxesCombined },
  { href: "/copilot", label: "Copilot", icon: BrainCircuit }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-4 py-5 lg:px-6">
        <aside className="grain hidden w-72 shrink-0 rounded-[28px] border border-white/60 bg-white/65 p-5 shadow-panel backdrop-blur lg:block">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-slate">Business Copilot</p>
            <h1 className="mt-2 font-display text-3xl text-leaf">Drishti AI</h1>
            <p className="mt-3 text-sm text-slate">
              Calm control for stock, staff, dues, and the next decision.
            </p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
                    pathname === item.href
                      ? "bg-leaf text-white shadow-soft"
                      : "text-slate hover:bg-[#f0eadc]"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-10 rounded-3xl bg-ink p-4 text-sm text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Role</p>
            <p className="mt-2 text-lg font-medium">Owner view active</p>
            <p className="mt-2 text-white/70">
              Demo auth is pinned to business owner access with approval-first actions.
            </p>
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
