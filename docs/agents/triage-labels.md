---
type: convention
title: Triage labels
description: Maps engineering triage judgments to the project's selected published labels.
tags: [agents, triage]
status: stable
sources:
  - id: labels
    resource: https://github.com/ShanireZ/Plumbline/labels
    title: Current GitHub tracker labels
---

# Triage labels

The table maps workflow judgments to selected tracker labels. Other GitHub
default labels may exist; they are not additional workflow roles.[^labels]

| Judgment | Mapped label | Meaning |
| --- | --- | --- |
| `needs-triage` | None | Maintainer evaluation is needed. |
| `needs-info` | None | More information is needed. |
| `ready-for-agent` | None | Acceptance and execution scope are clear. |
| `ready-for-human` | None | Human implementation is required. |
| `wontfix` | `wontfix` | The work will not be actioned. |

Write unmapped judgments and their reasons in the issue text. Do not create
labels solely because a skill mentions them. A separately authorized label change
must update this mapping and verify the actual tracker.

[^labels]: Check current labels before applying a mapped label.
