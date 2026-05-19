---
name: impact-journal
description: Transform raw thoughts, meeting notes, or journal entries into structured impact-log.md entries. Also helps you extract impact from answers to guiding questions. Use when you have raw notes, stream of consciousness, or want to log an achievement but don't know the format.
---

# Impact Journal

Transforms raw unfiltered input into curated `report/impact-log.md` entries.

## Data Flow

```
_private/scratchpad.md (raw dump, no format)
  ↓
impact-journal skill (YOU select signal)
  ↓
report/impact-log.md (curated, evidence-backed)
  ↓
rest of pipeline
```

## Input Sources

Accepts any of:
- `_private/scratchpad.md` — read automatically if it exists (prompt user to confirm which entries to promote)
- Raw bullet points ("shipped dashboard api, got it working, dewos pr reviewed")
- Meeting takeaways
- Answers to questions (the skill asks guiding questions if no input given)
- Slack screenshots described by you

## Output Format

Each entry follows this structure when written to `report/impact-log.md`:

```markdown
## YYYY-MM-DD
- Shipped <thing> → <outcome>
- <decision> — <rationale>
- <evidence available>
```

## Workflow

1. Check `_private/scratchpad.md` for raw entries — ask user which to promote, skip noise
2. Read `report/impact-log.md` if it exists (don't duplicate entries)
3. Ask clarifying questions if input is too vague to produce a concrete entry
4. Append formatted entries to `report/impact-log.md`
5. If screenshots are relevant, remind user to save them to `_media/` and reference the filename
6. Optionally clear processed entries from `_private/scratchpad.md`

## Guiding Questions (use when user has no raw notes)

- What did you ship or finish today?
- Did you make any decision that saved time/money or prevented a problem?
- Did you unblock anyone today?
- Did you learn something that changes how you work?

## Related Skills

- `kukuruyuk-writer` — next step in the pipeline
