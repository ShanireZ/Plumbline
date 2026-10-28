---
type: convention
title: Agent skill issue tracker
description: Defines GitHub Issues as Plumbline's public engineering issue authority.
tags: [agents, issue-tracker, github]
status: stable
---

# Issue tracker: GitHub Issues

Public features, defects, implementation work, and design-change proposals for Plumbline live in [GitHub Issues at `ShanireZ/Plumbline`](https://github.com/ShanireZ/Plumbline/issues).

## Publication boundary

Approved product decisions and current publication status live only in [`../../PLAN.md`](../../PLAN.md). Do not claim an issue exists without checking its actual URL, and do not create a parallel tracker.

## Conventions

- One issue owns one independently reviewable outcome.
- Link the applicable `PLAN.md` decision IDs and relevant skill instruction or scenario.
- Record acceptance criteria in the issue body; do not hide them in comments.
- Use the canonical labels from [`triage-labels.md`](triage-labels.md).
- Security vulnerabilities never use public Issues; follow [`../../SECURITY.md`](../../SECURITY.md).
- A GitHub issue may plan work but cannot override an approved decision or grant execution/publication authority.

## When a skill publishes or fetches work

Use the GitHub issue URL or number supplied by the user. Repository replacement does not preserve issue numbers; verify that a referenced issue belongs to the current repository before acting on it.
