#!/usr/bin/env python3
"""Analyze Jira CSV export for contributor analysis.

Usage:
    python3 analyze-jira.py <csv-file> [--person <name>] [--format text|json|html]

Outputs a structured breakdown of tickets, story points, and features per contributor.
"""

import csv
import json
import sys
import argparse
from collections import defaultdict
from pathlib import Path


def parse_jira_csv(filepath: str) -> list[dict]:
    """Parse Jira CSV export into a list of ticket dicts."""
    with open(filepath, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    tickets = []
    for r in rows:
        sp_raw = r.get("Custom field (Story Points)", "") or r.get("Custom field (Story Point)", "") or "0"
        try:
            sp = float(sp_raw)
        except (ValueError, TypeError):
            sp = 0.0

        tickets.append({
            "key": r.get("Issue key", "").strip(),
            "summary": r.get("Summary", "").strip(),
            "type": r.get("Issue Type", "").strip(),
            "status": r.get("Status", "").strip(),
            "priority": r.get("Priority", "").strip(),
            "assignee": r.get("Assignee", "").strip(),
            "assignee_id": r.get("Assignee Id", "").strip(),
            "reporter": r.get("Reporter", "").strip(),
            "creator": r.get("Creator", "").strip(),
            "epic": r.get("Parent summary", "").strip() or "(Standalone)",
            "epic_key": r.get("Parent key", "").strip(),
            "sp": sp,
            "created": r.get("Created", "").strip()[:10],
            "resolved": (r.get("Resolved", "") or "").strip()[:10],
            "labels": [l.strip() for l in [r.get("Labels", ""), r.get("Labels.1", ""), r.get("Labels.2", "")] if l.strip()],
            "description": r.get("Description", "").strip(),
            "comment": r.get("Comment", "").strip(),
            "sprint": r.get("Sprint", "").strip(),
            "has_pr": "pullrequest" in (r.get("Custom field (Development)", "") or "").lower(),
        })
    return tickets


def analyze(tickets: list[dict]) -> dict:
    """Produce full contributor analysis."""

    # --- per-person stats ---
    persons = defaultdict(lambda: {
        "tickets": [],
        "sp": 0.0,
        "by_type": defaultdict(int),
        "by_epic": defaultdict(list),
        "by_status": defaultdict(int),
    })

    for t in tickets:
        name = t["assignee"] or "(Unassigned)"
        p = persons[name]
        p["tickets"].append(t)
        p["sp"] += t["sp"]
        p["by_type"][t["type"]] += 1
        p["by_epic"][t["epic"]].append(t)
        p["by_status"][t["status"]] += 1

    total_sp = sum(t["sp"] for t in tickets)

    # --- build structured output ---
    result = {
        "total_tickets": len(tickets),
        "total_sp": total_sp,
        "contributors": {},
    }

    for name, data in sorted(persons.items(), key=lambda x: -x[1]["sp"]):
        epic_list = []
        for epic, epic_tickets in sorted(data["by_epic"].items(), key=lambda x: -sum(t["sp"] for t in x[1])):
            epic_list.append({
                "epic": epic,
                "ticket_count": len(epic_tickets),
                "sp": sum(t["sp"] for t in epic_tickets),
                "tickets": [
                    {
                        "key": t["key"],
                        "type": t["type"],
                        "summary": t["summary"],
                        "sp": t["sp"],
                        "status": t["status"],
                    }
                    for t in epic_tickets
                ],
            })

        result["contributors"][name] = {
            "ticket_count": len(data["tickets"]),
            "sp": data["sp"],
            "sp_pct": round(data["sp"] / total_sp * 100, 1) if total_sp else 0,
            "by_type": dict(data["by_type"]),
            "by_status": dict(data["by_status"]),
            "epics": epic_list,
        }

    return result


def render_text(analysis: dict, person_filter: str | None = None) -> str:
    """Render analysis as readable text."""
    lines = []
    lines.append(f"Total: {analysis['total_tickets']} tickets · {analysis['total_sp']} SP")
    lines.append("")

    for name, data in analysis["contributors"].items():
        if person_filter and person_filter.lower() not in name.lower():
            continue

        lines.append(f"{'='*70}")
        lines.append(f"  {name}")
        lines.append(f"  {data['ticket_count']} tickets · {data['sp']} SP · {data['sp_pct']}% of total")
        lines.append(f"  Types: {data['by_type']}")
        lines.append(f"  Status: {data['by_status']}")
        lines.append(f"{'='*70}")

        for epic in data["epics"]:
            lines.append(f"\n  {epic['epic']} ({epic['ticket_count']} tickets, {epic['sp']} SP)")
            for t in epic["tickets"]:
                sp_str = f"{t['sp']:.0f}" if t['sp'] == int(t['sp']) else f"{t['sp']:.1f}"
                lines.append(f"    {t['key']} [{t['type']}] ({sp_str} SP) {t['summary']}")
                lines.append(f"      Status: {t['status']}")

        lines.append("")

    return "\n".join(lines)


def render_json(analysis: dict) -> str:
    """Render analysis as JSON."""
    return json.dumps(analysis, indent=2, ensure_ascii=False)


def main():
    parser = argparse.ArgumentParser(description="Analyze Jira CSV for contributor breakdown")
    parser.add_argument("csv_file", help="Path to Jira CSV export")
    parser.add_argument("--person", help="Filter to a specific person (substring match)", default=None)
    parser.add_argument("--format", choices=["text", "json"], default="text", help="Output format")
    args = parser.parse_args()

    if not Path(args.csv_file).exists():
        print(f"Error: File not found: {args.csv_file}", file=sys.stderr)
        sys.exit(1)

    tickets = parse_jira_csv(args.csv_file)
    analysis = analyze(tickets)

    if args.format == "json":
        print(render_json(analysis))
    else:
        print(render_text(analysis, args.person))


if __name__ == "__main__":
    main()