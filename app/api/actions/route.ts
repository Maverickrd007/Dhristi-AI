import { NextResponse } from "next/server";
import { actions } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ actions });
}
