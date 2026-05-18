---
name: shimekai-builder
description: Distill a quarter's worth of monday checkin entries into townhall slide content. Use when preparing for Shimekai (quarterly townhall), or you say "shimekai", "townhall", "quarterly slides", "prepare shimekai".
---

# Shimekai Builder

Compresses a quarter of weekly reports into a 3-5 slide narrative for all-hands townhall.

## Output Structure

```
### Slide 1: Headline
- Single sentence: what engineering delivered this quarter

### Slide 2: By the numbers (if relevant)
- Metric 1: before → after
- Metric 2: before → after
- (Only include if the data exists)

### Slide 3: What we shipped
- [Feature 1] — what it means for the business
- [Feature 2] — what it means for the business

### Slide 4: Health & team
- Dewo: growth highlight
- Tech debt / infra: what we improved

### Slide 5: Next quarter
- Top 2-3 priorities
```

## Workflow

1. Read all files in `report/monday-checkins/` for the current quarter
2. Read `report/impact-log.md` for the quarter
3. Group by theme, extract headline metrics
4. Draft as slide content (not slide deck — user builds the actual slides)
5. After user confirms, save slide content to `report/shimekai/<YYYY-Q#>.md`
6. Flag any claims that should be backed by a screenshot from `_media/`

## Principles

- **One headline per quarter.** What's the single story? ("We shipped the partner dashboard and reduced infra cost 8%")
- **Lead with business outcome**, not engineering activity
- **Keep it short.** Townhall slides are spoken, not read
- **Give Dewo a mention** — shows team development

## Prerequisites

- Monday checkin entries for the full quarter
- `impact-journal` updates throughout the quarter

## Related Skills

- `monday-checkin-writer` — previous step (feeds into this)
- `executive-report-builder` — for CEO-facing version (more depth)
