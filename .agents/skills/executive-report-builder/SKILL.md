---
name: executive-report-builder
description: Compile all career lifecycle data into a CEO report or PA (Performance Appraisal) evidence package. Use when you need to prepare for a CEO 1:1, write a PA self-assessment, justify comp, or say "CEO report", "PA prep", "performance review", "comp case", "appraisal".
---

# Executive Report Builder

Pulls together evidence from every domain into a single document for review time.

## Output Types

### Type 1: PA Self-Assessment (every 6 months)
Structured for the 1:1-style appraisal with CEO:

```
### KPI impact (from strategy/kpis.md)
- [KPI] — [movement] — [your role]

### IC delivery (from report/impact-log.md)
- [Thing shipped] → [outcome]

### Team (from people/dewo/)
- Dewo: [growth summary]
- Health: [one sentence]

### Misses / growth areas
- [1-2 honest misses with lessons]

### Ask
- [Comp / title / scope change]
```

### Type 2: CEO Snapshot (anytime)
For impromptu "how's engineering going?" conversations:

```
### Status
- [Green/Yellow/Red] — one sentence

### This month's signal
- [Biggest win or risk]

### Needs from you
- [Decision or support needed]
```

## Workflow

1. Read all relevant files:
   - `strategy/kpis.md`
   - `report/impact-log.md`
   - `report/executive-reports/` (previous report, if exists)
   - `report/ceo-1on1/` (recent syncs for context)
   - `_private/comp.md` (if exists)
   - `_private/360-feedback/` (if exists)
   - `people/dewo/growth.md`
   - `ic-work/pm-streams.md`
   - `ic-work/unowned.md`
2. Ask which output type (PA vs snapshot)
3. Include a **board section** at the end — 3-5 bullets the CEO can use verbatim
4. Draft the document — link every claim to a source file line
5. Highlight gaps: "You have no KPI data for X — here's what you need before PA"
6. After user confirms, save to `report/executive-reports/<YYYY-H#>.md`

## The Cardinal Rule

Every claim must trace to a source file. If you can't find evidence, flag it as a gap. The whole point of this folder is to not fabricate at review time.

## Prerequisites

- `report/impact-log.md` must be current
- `strategy/kpis.md` should be current
- The more complete the folder, the stronger the report

## Related Skills

- `impact-journal` — start here if impact-log is stale
- `shimekai-builder` — lighter version for quarterly townhall
