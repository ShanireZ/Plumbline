---
type: convention
title: Issue tracker
description: Defines GitHub Issues as the public engineering tracker without granting execution authority.
tags: [agents, issue-tracker, github]
status: stable
sources:
  - id: plan
    resource: ../../PLAN.md
    title: Product decisions and delivery boundaries
  - id: contribution
    resource: ../../CONTRIBUTING.md
    title: Contribution and review rules
---

# Issue tracker

Use [GitHub Issues](https://github.com/ShanireZ/Plumbline/issues) for public
features, defects and design proposals. Each issue should describe one
reviewable outcome, its acceptance criteria and relevant source/decision links.[^contribution]

Product decisions and current delivery state stay in
[`PLAN.md`](../../PLAN.md). An issue does not override those decisions or authorize
external writes.[^plan]

Verify a supplied issue URL or number before acting. Repository replacement does
not preserve issue identities. Do not invent issues or create a parallel tracker.
Use [the triage mapping](triage-labels.md); role names do not automatically become
published labels.

Follow [SECURITY.md](../../SECURITY.md) for suspected vulnerabilities. Public
contact requests must contain no vulnerability details.

[^plan]: Product decisions and delivery boundaries.
[^contribution]: Focused changes, acceptance and review rules.
