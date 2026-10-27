---
type: convention
title: Agent skill issue tracker
description: Defines GitHub Issues as Plumbline's public engineering issue authority.
tags: [agents, issue-tracker, github]
status: stable
---

# Issue tracker: GitHub Issues

Public features, defects, implementation work, and design-change proposals for Plumbline live in GitHub Issues at `ShanireZ/Plumbline` after the repository is published.

## Publication boundary

While the repository is private, its issue tracker is limited to users with access. Do not claim a public issue exists or create a parallel tracker. Approved product decisions and current publication status live only in [`../../PLAN.md`](../../PLAN.md). Public issue work starts after the owner-authorized visibility change.

## Conventions

- One issue owns one independently reviewable outcome.
- Link the applicable `PLAN.md` decision IDs and relevant skill instruction or scenario.
- Record acceptance criteria in the issue body; do not hide them in comments.
- Use the canonical labels from [`triage-labels.md`](triage-labels.md).
- Security vulnerabilities never use public Issues; follow [`../../SECURITY.md`](../../SECURITY.md).
- A GitHub issue may plan work but cannot override an approved decision or grant execution/publication authority.

## When a skill publishes or fetches work

After publication, use the GitHub issue URL or number supplied by the user. Before publication, report that the configured tracker is not yet available and keep any temporary task state outside durable project documentation.
