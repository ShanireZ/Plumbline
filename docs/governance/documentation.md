---
type: convention
title: Documentation convention
description: Defines the OKF bundle boundary, metadata and review checks for Plumbline.
tags: [documentation, okf]
status: stable
sources:
  - id: okf
    resource: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/0b87c52c6ef999286c745e19998fdfcd03d5dbee/SPEC.md
    title: Open Knowledge Format v0.2 specification
  - id: plan
    resource: ../../PLAN.md
    title: Product and decision authority
---

# Documentation convention

The OKF bundle is this repository's `docs/` directory. README files,
`PLAN.md`, `CONTRIBUTING.md`, `SECURITY.md`, developer fixtures and the distributed
skill have their own formats; they are linked authorities outside this bundle.

Use UTF-8 Markdown. Each concept needs parseable YAML frontmatter and a nonempty
`type`. Indexes list their immediate contents with brief descriptions; only the
root index declares `okf_version: "0.2"`. Optional log entries use ISO dates.[^okf]

Use `title`, `description`, `tags` and `sources` when useful. A source entry needs
a `resource`; use stable source IDs for footnote attribution. Relative links
preserve ordinary GitHub and CNB navigation. Keep public product scope and decisions
in [`PLAN.md`](../../PLAN.md). Use English consistently in public documents and
examples. Internal operating history belongs outside Git.[^plan]

Use `draft`, `stable` or `deprecated` for lifecycle status. Do not invent
`generated`, `verified` or freshness timestamps. No verification metadata is
required, and a structural check does not imply human review or behavior proof.

## Review checks

1. Parse the concept frontmatter and inspect reserved index/log structure.
2. Check sources, local links, path casing, heading anchors and navigation.
3. Compare claims and examples with the owning source and actual commands.
4. Inspect rendered README layout and review the resulting diff.

Follow [the contribution checks](../../CONTRIBUTING.md#checks). Validate the public
repository on its own; local workspace tools are optional and are not dependencies
for contributors.

[^okf]: OKF v0.2, sections 3–6, 8–9 and 11–12.
[^plan]: Public product scope, acceptance and decisions remain in PLAN.md.
