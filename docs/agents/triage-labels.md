---
type: convention
title: Agent skill triage labels
description: Maps engineering triage roles to the labels published by this project.
tags: [agents, triage]
status: stable
---

# Triage labels

| Role | Published label | Meaning |
| --- | --- | --- |
| `needs-triage` | None | Maintainer needs to evaluate the issue. |
| `needs-info` | None | More information is needed. |
| `ready-for-agent` | None | Fully specified work suitable for an agent. |
| `ready-for-human` | None | Human implementation is required. |
| `wontfix` | `wontfix` | The issue will not be actioned. |

Write unpublished triage judgments and their reasons in the issue text. Do not
create a label solely because a skill mentions it. A separately authorized label
change must update this mapping and verify the actual tracker labels.
