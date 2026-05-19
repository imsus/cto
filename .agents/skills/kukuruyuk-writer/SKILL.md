---
name: kukuruyuk-writer
description: Generate a concise daily all-hands standup update (kukuruyuk) from impact-log entries and your current context. Use when it's time to write your daily kukuruyuk update or you say "kukuruyuk", "daily standup", "write my kukuruyuk".
---

# Kukuruyuk Writer

Drafts your kukuruyuk (daily all-hands standup) update. Audience is the whole company (CEO, COO, sales, ops, hr, etc.) — not just engineering.

## Format

Keep it tight — all-hands audience, non-technical:

> **Thank you**
> [Shoutout to someone who helped or did something noteworthy]
>
> **Progress and issue**
> [1-2 lines: what moved forward, what's blocked]

## Workflow

1. Read `report/impact-log.md` for entries under today's `## YYYY-MM-DD` header
2. Read the last 2-3 kukuruyuk entries from `report/kukuruyuk-recaps/` (avoid repeating)
3. Ask what you're working on today if not obvious from context
4. Translate engineering work into business impact — don't say "refactored API client", say "reduced checkout errors"
5. Output the draft for Slack
6. After user confirms, write a copy to `report/kukuruyuk-recaps/<YYYY-MM-DD>.md`

## Translation Table

| Engineering language | Kukuruyuk language |
|---|---|
| Refactored X module | Reduced error rate on X |
| Deployed Y service | Shipped Y — [benefit] |
| Reviewed PRs | Unblocked [name] on [feature] |
| Debugged production issue | Fixed [problem] — customers can now [do thing] |

## Prerequisites

- `impact-journal` skill — impact-log should be current

## Related Skills

- `monday-checkin-writer` — next step in the pipeline
