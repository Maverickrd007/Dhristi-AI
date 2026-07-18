import { NextResponse } from "next/server";
import { getActionStats, getBusinessBrief, getRealtimePulse } from "@/lib/ai";

export async function GET() {
  return NextResponse.json({
    brief: getBusinessBrief(),
    stats: getActionStats(),
    pulse: getRealtimePulse()
  });
}
