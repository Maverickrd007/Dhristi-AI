import {
  ActivityEvent,
  Business,
  Category,
  Client,
  InsightAction,
  Product,
  StaffMember,
  User
} from "@/lib/types";

export const business: Business = {
  id: "biz-1",
  name: "Drishti AI",
  location: "Fancy Bazaar, Guwahati, Assam",
  languageHint: "English-first, Hindi/Assamese-friendly"
};

export const users: User[] = [
  { id: "u1", name: "Rina Das", role: "owner", shift: "Full day" },
  { id: "u2", name: "Tapan Kalita", role: "manager", shift: "Morning" },
  { id: "u3", name: "Bikram Ali", role: "staff", shift: "Evening" }
];

export const categories: Category[] = [
  { id: "c1", name: "Staples" },
  { id: "c2", name: "Beverages" },
  { id: "c3", name: "Home Care" }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Arihan Mustard Oil 1L",
    categoryId: "c1",
    unit: "bottle",
    sku: "AO-1L",
    supplier: "Brahmaputra Foods",
    stock: 28,
    reorderPoint: 36,
    dailyRunRate: 5.2,
    margin: 14,
    status: "low"
  },
  {
    id: "p2",
    name: "Premium Rice 25kg",
    categoryId: "c1",
    unit: "bag",
    sku: "PR-25",
    supplier: "North East Grain Co.",
    stock: 14,
    reorderPoint: 18,
    dailyRunRate: 2.1,
    margin: 11,
    status: "low"
  },
  {
    id: "p3",
    name: "Masala Cola 750ml",
    categoryId: "c2",
    unit: "crate",
    sku: "MC-750",
    supplier: "Hills Beverage Supply",
    stock: 42,
    reorderPoint: 22,
    dailyRunRate: 6.7,
    margin: 18,
    status: "healthy"
  },
  {
    id: "p4",
    name: "Detergent Pack 1kg",
    categoryId: "c3",
    unit: "pack",
    sku: "DP-1",
    supplier: "Assam Household Hub",
    stock: 9,
    reorderPoint: 16,
    dailyRunRate: 1.9,
    margin: 16,
    status: "critical"
  }
];

export const clients: Client[] = [
  {
    id: "cl1",
    name: "Bora Traders",
    segment: "Wholesale",
    area: "Paltan Bazaar",
    balance: 68000,
    overdueDays: 19,
    trustScore: 71,
    lastContact: "2026-07-16"
  },
  {
    id: "cl2",
    name: "Mitali Store",
    segment: "Retail",
    area: "Beltola",
    balance: 26000,
    overdueDays: 6,
    trustScore: 84,
    lastContact: "2026-07-17"
  },
  {
    id: "cl3",
    name: "Rupam Agency",
    segment: "Distributor",
    area: "Nagaon",
    balance: 91000,
    overdueDays: 28,
    trustScore: 58,
    lastContact: "2026-07-12"
  }
];

export const staff: StaffMember[] = [
  {
    id: "s1",
    name: "Juri Nath",
    role: "Counter Lead",
    shift: "08:00 - 16:00",
    attendanceRate: 97
  },
  {
    id: "s2",
    name: "Rafique Hussain",
    role: "Inventory Runner",
    shift: "10:00 - 18:00",
    attendanceRate: 89,
    anomaly: "3 unusually large stock edits this week"
  },
  {
    id: "s3",
    name: "Monalisa Deka",
    role: "Billing Assistant",
    shift: "12:00 - 20:00",
    attendanceRate: 95
  }
];

export const activityFeed: ActivityEvent[] = [
  {
    id: "a1",
    actor: "Bikram Ali",
    verb: "stocked in",
    target: "18 crates of Masala Cola",
    timestamp: "2026-07-18T10:10:00+05:30",
    delta: "+18",
    tone: "positive"
  },
  {
    id: "a2",
    actor: "System",
    verb: "flagged",
    target: "Detergent Pack 1kg as critical",
    timestamp: "2026-07-18T09:36:00+05:30",
    tone: "warning"
  },
  {
    id: "a3",
    actor: "Rina Das",
    verb: "recorded payment",
    target: "Rs 12,000 from Mitali Store",
    timestamp: "2026-07-18T08:52:00+05:30",
    tone: "positive"
  },
  {
    id: "a4",
    actor: "Tapan Kalita",
    verb: "edited stock",
    target: "Premium Rice 25kg",
    timestamp: "2026-07-18T08:04:00+05:30",
    delta: "-4",
    tone: "neutral"
  }
];

export const actions: InsightAction[] = [
  {
    id: "i1",
    type: "reorder",
    title: "Reorder detergent by tonight",
    reason: "Only 9 packs remain and run-rate suggests a stockout in under 5 days.",
    recommendation: "Draft a 24-pack reorder with Assam Household Hub.",
    impact: "Avoid ~Rs 18k in likely lost sales next week.",
    approvalLabel: "Approve PO draft"
  },
  {
    id: "i2",
    type: "reminder",
    title: "Follow up with Rupam Agency",
    reason: "Rs 91k is overdue by 28 days and trust score has fallen to 58.",
    recommendation: "Send a firm but friendly payment reminder in Assamese-leaning English.",
    impact: "Improves cash recovery before Monday purchase cycle.",
    approvalLabel: "Review reminder"
  },
  {
    id: "i3",
    type: "staff",
    title: "Check unusual stock edits",
    reason: "Rafique logged 3 large stock corrections outside usual receiving hours.",
    recommendation: "Ask the manager to verify receipts and reconcile two item batches.",
    impact: "Reduces shrinkage risk before the weekend close.",
    approvalLabel: "Assign verification"
  }
];
