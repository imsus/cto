# Report

All reporting artifacts, escalating from daily to semi-annual. Each step feeds the next — no data loss.

## Structure

| Folder/File          | Cadence                | Audience              | Persistence               |
| -------------------- | ---------------------- | --------------------- | ------------------------- |
| `impact-log.md`      | Anytime (default: now) | Self                  | Root file, append-only    |
| `ceo-1on1/`          | Per sync               | CEO + Me              | Dated notes               |
| `kukuruyuk-recaps/`  | Daily                  | All employees         | Dated files after posting |
| `monday-checkins/`   | Weekly                 | All employees         | Dated files after posting |
| `shimekai/`          | Quarterly              | All employees         | Slides + notes            |
| `executive-reports/` | Semi-annual            | CEO (+ board section) | Full reports              |

## Pipeline

```
impact-log (raw, anytime)
    → kukuruyuk (daily, posted + saved)
    → monday checkin (weekly, posted + saved)
    → shimekai (quarterly, slides)
    → executive report (semi-annual, CEO)
```

Everything traces back to `impact-log.md`. Keep it current.
