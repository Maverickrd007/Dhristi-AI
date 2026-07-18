# Drishti AI

Drishti AI is an AI-first business operations copilot for Assam retailers and wholesalers. It focuses on what the owner should do next, not just what data exists already.

## Product plan

### Positioning

Drishti AI acts as a "business brief" and action engine for inventory, dues, staff, and daily decisions. The interface is intentionally built around recommendations, exception handling, and approval flows rather than CRUD-heavy tables.

### System shape

1. Transactional core
   Stores products, stock movements, clients, dues, staff, attendance, sales, and payments.
2. Realtime event layer
   Every stock or business event becomes activity that can drive live feeds, alerts, and downstream AI reasoning.
3. AI orchestration layer
   Generates plain-language summaries, reorder suggestions, payment reminder drafts, and anomaly detection with explainable reasons.
4. Approval boundary
   AI can draft and recommend, but business-changing actions remain human-approved.

## What is included in this build

- Next.js 15 + TypeScript + Tailwind foundation
- Distinct SaaS-style UI for the Today, Inventory, Clients, Staff, Analytics, and Copilot views
- Seeded demo dataset tailored to an Assam business context
- AI insight generation utilities and action cards
- API routes for dashboard brief and AI actions
- Future-ready Prisma schema for PostgreSQL
- Demo auth posture with owner role highlighted in the shell

## Demo phases delivered

### Phase 1: Foundation

- App Router scaffold
- global design system
- shell navigation
- role-aware framing for owner access

### Phase 2: Operational core

- inventory control screen
- client khata screen
- staff overview screen
- analytics view
- realtime activity feed experience

### Phase 3: AI layer

- business brief summary
- AI action cards
- natural-language answer panel
- recommendation reasoning and impact copy

## Assumptions

- This build is optimized for a compelling internship demo and architecture clarity.
- Data is currently seeded in code for reliability and speed of setup.
- Authentication is represented in the UX and schema, but production login wiring is a next step.
- Realtime behavior is modeled through live-style feeds and API boundaries; production sockets can be added without redesigning the app.

## Local setup

1. Install dependencies:

```bash
npm install
```

On Windows PowerShell with execution policy restrictions, use:

```bash
npm.cmd install
```

2. Start the app:

```bash
npm run dev
```

Or on PowerShell:

```bash
npm.cmd run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Suggested next production steps

1. Wire Auth.js with credential and magic-link flows.
2. Back the seeded models with PostgreSQL + Prisma client.
3. Add WebSocket or Supabase Realtime event streaming for stock updates.
4. Move AI utilities behind a provider abstraction with OpenAI or Gemini.
5. Add OCR ingestion for purchase bills and invoice digitization.
6. Implement full audit trails, notification delivery, and per-role permission enforcement.
