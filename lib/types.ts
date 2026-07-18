export type Role = "owner" | "manager" | "staff";

export type StockStatus = "healthy" | "low" | "critical";

export interface Business {
  id: string;
  name: string;
  location: string;
  languageHint: string;
}

export interface User {
  id: string;
  name: string;
  role: Role;
  shift: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  unit: string;
  sku: string;
  supplier: string;
  stock: number;
  reorderPoint: number;
  dailyRunRate: number;
  margin: number;
  status: StockStatus;
}

export interface Client {
  id: string;
  name: string;
  segment: string;
  area: string;
  balance: number;
  overdueDays: number;
  trustScore: number;
  lastContact: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  shift: string;
  attendanceRate: number;
  anomaly?: string;
}

export interface ActivityEvent {
  id: string;
  actor: string;
  verb: string;
  target: string;
  timestamp: string;
  delta?: string;
  tone: "neutral" | "positive" | "warning";
}

export interface InsightAction {
  id: string;
  type: "reorder" | "reminder" | "staff" | "risk";
  title: string;
  reason: string;
  recommendation: string;
  impact: string;
  approvalLabel: string;
}
