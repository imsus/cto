# Strategy

CTO-hat documents: what the CEO sees.

## Files

| File | Purpose | When |
|------|---------|------|
| `kpis.md` | Map company profit goals → your engineering KPIs → current status | Update when targets change |
| `roadmap.md` | Department plans, timelines, delivery status, capacity | Update per planning cycle |
| `budget.md` | Headcount, tooling, infra costs, variance | Update monthly |
| `leadership-notes.md` | Leadership team meeting prep & notes | Before/after each leadership meeting |

---

## Example: `kpis.md`

```markdown
# KPIs — 2026

## Company Goal: Reduce infra cost 15% (profit lever)

| KPI | Target | Current | Status |
|-----|--------|---------|--------|
| Monthly infra spend | $4,250 | $4,100 | ✅ |
| Cost per transaction | $0.12 | $0.09 | ✅ |

## Company Goal: Ship Partner Dashboard (revenue enabler)

| KPI | Target | Current | Status |
|-----|--------|---------|--------|
| Dashboard launch | June 1 | On track | 🟢 |

Notes:
```

## Example: `roadmap.md`

```markdown
# Roadmap — H1 2026

## Current Quarter (Q2)

### Partner Dashboard — PM: [name]
- Target: June 1 launch
- Status: On track — API integration done, UI in review
- Blockers: None

### Infra Migration
- Target: May 15
- Status: Delayed — waiting on DevOps contractor
- Blockers: Hiring

## Next Up (Q3)
- [not decided yet]

## Capacity
- Team: 2 engineers (including myself)
- IC allocation: 60% dashboard, 20% infra, 20% unowned
```

## Example: `budget.md`

```markdown
# Budget — 2026

## Headcount
| Role | Status | Cost/mo |
|------|--------|---------|
| Dewo (engineer) | Filled | $X,000 |
| Me (CTO) | Filled | $X,000 |
| [open req] | Hiring | $X,000 |

## Tooling & Infra
| Item | Monthly | Annual |
|------|---------|--------|
| AWS | $3,200 | $38,400 |
| GitHub | $80 | $960 |
| Linear | $40 | $480 |

## Variance
- Current spend vs budget: -2% (under)
- YTD forecast: on track
```

## Example: `leadership-notes.md`

```markdown
# Leadership Team Notes

## 2026-05-18 — Weekly Sync

### Engineering update (5 min)
- Dashboard: UI review this week, still on track for June 1
- Infra migration: blocked on contractor — need COO help to expedite

### Cross-functional
- Sales wants custom reporting on dashboard — pushed to v2
- Ops raising ticket volume on order errors — investigating root cause

### Actions
- [ ] Share dashboard demo link with team by Wed
- [ ] Follow up with COO on contractor SLA
```
