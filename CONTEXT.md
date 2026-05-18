# CTO Career Lifecycle

Domain language for company reporting and career protection.

## Language

**Company Goal**:
A top-level profit or revenue target set by the company.
_Avoid_: OKR, objective

**Department KPI**:
A measurable target derived from a company goal and owned by a department.
_Avoid_: Department goal

**Personal KPI**:
An individual measurable target derived from a department KPI.
_Avoid_: Personal goal, task

**KPI**:
A measurable target that tracks progress toward a goal.
_Avoid_: OKR, metric, goal

**PM Stream**:
Work planned and tracked with the PM through Jira.
_Avoid_: Official work, assigned work

**Unowned**:
Work done without a PM or Jira ticket. Fixes, tooling, exploration.
_Avoid_: Side work, ad-hoc

**Impact**:
A concrete outcome tied to a company goal or KPI.
_Avoid_: Activity, output

**PA (Performance Appraisal)**:
A 1:1 review between me and the CEO, every 6 months.
_Avoid_: Performance review, 360

**Staff of the Quarter**:
A nomination-based award presented during Shimekai.
_Avoid_: Employee of the month

**Kukuruyuk**:
Daily all-hands standup update.
_Avoid_: Standup, daily update

**Shimekai**:
Quarterly all-hands townhall.
_Avoid_: All-hands, QBR

**Monday Checkin**:
Weekly written progress update shared with all employees.
_Avoid_: Weekly report, status update

## Relationships

- A **Company Goal** produces one or more **Department KPIs**
- A **Department KPI** produces one or more **Personal KPIs**
- Work starts as **Unowned** or as a **PM Stream** (mutually exclusive)
- **Unowned** work may be promoted to a **PM Stream** when the PM discovers it and adds it to Jira
- An **Impact** is a claim that a piece of work moved a **KPI** or **Company Goal**

## Example dialogue

> **Dev asking:** "I fixed a prod bug this morning — is that **Unowned** or a **PM Stream**?"
> **You:** "Unowned — no Jira ticket yet. If the **PM** picks it up for tracking, it becomes a **PM Stream**."
>
> **Dev asking:** "I shipped a dashboard feature that saved the company $5k/mo in support costs. Is that **Impact**?"
> **You:** "If we can trace it to a **Company Goal** (like 'reduce support cost 20%'), yes. Otherwise it's output, not **Impact**."

## Departments

| Code      | Name                                                |
| --------- | --------------------------------------------------- |
| Dev       | Development (CTO here)                              |
| PP        | Project Planner (campaign-level project management) |
| KOL       | Key Opinion Leader (influencer campaigns)           |
| Inquiry   | KOL database, collector, nurture team               |
| Sales     | Sales                                               |
| HR        | Human Resources                                     |
| Finance   | Finance                                             |
| Executive | CEO / COO                                           |

## People

| Name  | Role                 | Context                                                    |
| ----- | -------------------- | ---------------------------------------------------------- |
| Dewo  | Direct report        | Full Stack Senior IC                                       |
| EL    | COO                  | Cross-functional peer, recently built first AI app         |
| Fifi  | PP (Project Planner) | Handles AJIPRO microsite kick-off and project coordination |
| Melin | KOL (staf)           | Also served as temporary Shimekai event staff (rolling)    |

## Flagged ambiguities

- "Goal" was used interchangeably with "KPI" — resolved: **Company Goals** are profit/revenue targets; **KPIs** are the measurable targets derived from them
- "OKR" was mentioned but rejected — the company uses **Company Goals → KPIs**, not OKRs
- "Standup" was used for both **Kukuruyuk** (all-hands) and the engineering daily with the **PM** — resolved: these are separate meetings with different audiences
