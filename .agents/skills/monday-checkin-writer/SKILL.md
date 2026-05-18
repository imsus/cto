---
name: monday-checkin-writer
description: Wrap recent kukuruyuk updates into a weekly written progress report with narrative and insight. Use when it's Monday and you need to write the weekly company checkin, or you say "monday checkin", "weekly report", "write my monday checkin".
---

# Monday Checkin Writer

Drafts your Monday checkin (weekly written update for the whole company).

## Format

Three sections:

```
### Last week
- [Key outcome] — [impact]
- [Key outcome] — [impact]
- [Key outcome] — [impact]

### Next week
- [Priority 1]
- [Priority 2]

### Blockers / Notes
- [None or specific ask]
```

## Workflow

1. Read `report/kukuruyuk-recaps/` for the past week's entries
2. Read `report/impact-log.md` for the past week
3. Read `ic-work/pm-streams.md` for any PM-sync changes
4. Group kukuruyuk entries into themes, drop operational noise
5. Add a "Signal" line at the top — one sentence insight the CEO or PM should know
6. Output draft for the company checkin tool
7. After user confirms, write a copy to `report/monday-checkins/<YYYY-W##>.md`

## Signal Line Examples

- "Dashboard v2 is on track for June 1 — API layer shipped ahead of schedule"
- "Infra cost trending down 5% — found $200/mo orphaned resources"
- "Dewo took ownership of [feature] — first time shipping end-to-end"

## Prerequisites

- kukuruyuk entries for the past week
- `impact-journal` skill — impact-log should be current
- This works best right after your Friday impact-log update

## Related Skills

- `shimekai-builder` — next step in the pipeline (quarterly aggregation)
- `kukuruyuk-writer` — previous step
