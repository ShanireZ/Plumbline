---
type: convention
title: Agent skill issue tracker
description: Defines GitHub Issues as Plumbline's public engineering issue authority.
tags: [agents, issue-tracker, github]
status: stable
---

# Issue tracker: GitHub Issues

Public features, defects, implementation work, and design-change proposals for Plumbline live in GitHub Issues at `ShanireZ/Plumbline` after the repository is published.

## Current pre-publication limitation

The GitHub repository exists privately with bootstrap history, but its public issue tracker does not exist yet. Before public publication, do not create a parallel `.scratch/` tracker or claim that an issue number exists. Approved product decisions live only in [`../../PLAN.md`](../../PLAN.md). Start publishing issues only after the owner makes the GitHub authority public.

## Conventions

- One issue owns one independently reviewable outcome.
- Link the applicable `PLAN.md` decision IDs and relevant skill instruction or scenario.
- Record acceptance criteria in the issue body; do not hide them in comments.
- Use the canonical labels from [`triage-labels.md`](triage-labels.md).
- Security vulnerabilities never use public Issues; follow [`../../SECURITY.md`](../../SECURITY.md).
- A GitHub issue may plan work but cannot override an approved decision or grant execution/publication authority.

## When a skill publishes or fetches work

After publication, use the GitHub issue URL or number supplied by the user. Before publication, report that the configured tracker is not yet available and keep any temporary task state outside durable project documentation.
