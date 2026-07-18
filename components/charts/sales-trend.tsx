"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Panel } from "@/components/ui/panel";
import { formatCurrency } from "@/lib/utils";

const data = [
  { day: "Mon", sales: 72000 },
  { day: "Tue", sales: 68000 },
  { day: "Wed", sales: 76000 },
  { day: "Thu", sales: 81000 },
  { day: "Fri", sales: 79000 },
  { day: "Sat", sales: 84000 }
];

export function SalesTrend() {
  return (
    <Panel>
      <p className="text-sm text-slate">Weekly signal</p>
      <h2 className="mt-1 text-xl font-semibold text-ink">Revenue is improving, but cash collection lags</h2>
      <div className="mt-5 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#184d47" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#184d47" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#e9e1cf" vertical={false} />
            <XAxis dataKey="day" stroke="#6f827d" tickLine={false} axisLine={false} />
            <Tooltip formatter={(value: number) => formatCurrency(value)} />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#184d47"
              strokeWidth={3}
              fill="url(#salesFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}
