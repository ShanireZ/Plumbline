---
type: governance
title: Workspace web-governance applicability
description: Records the browser and web-contract applicability of the non-web skill package.
tags: [governance, baseline, modern-web-guidance, sitemap, content-negotiation]
status: stable
sources:
  - id: plumbline-plan
    resource: ../../PLAN.md
    title: Plumbline product plan and decision register
---

# Workspace web-governance applicability

## Authority boundary

[`PLAN.md`](../../PLAN.md) owns product scope. This document records applicability;
it adds no browser runtime or publication requirement to the skill.

## Current classification

Plumbline is a Markdown-based Agent Skill with references, a report template, and optional host UI metadata. It has no HTML/CSS/client-side JavaScript runtime, project-owned public website, dashboard, hosted service, or HTTP content server.

| Capability | Current status | Reason |
| --- | --- | --- |
| Web Platform Baseline | `not-applicable` | `runtime: non-web`; there is no browser build or Web API compatibility contract. |
| Modern Web Guidance | `not-applicable` | There is no browser-facing implementation to audit. Optional host UI metadata does not create a browser runtime. |
| Sitemap | `not-applicable` | Plumbline has no stable project-owned canonical web origin or public indexable route set. |
| Markdown content negotiation | `not-applicable` | Repository Markdown files are source documents, not HTTP representations selected by `Accept`. |

The Baseline declaration fields therefore resolve as follows:

```yaml
runtime: non-web
featureTarget: not-applicable
buildTarget: not-applicable
downstream:
  enabled: false
  reason: No browser runtime or browser-distributed artifact exists.
criticalFallback: not-applicable
verification: Skill packaging and behavior checks defined by PLAN.md; no browser claim.
```

## Required current behavior

- Do not add Browserslist, a browser build target, Web polyfills, or browser compatibility gates solely to satisfy workspace uniformity.
- Do not publish an empty sitemap, placeholder `robots.txt`, invented canonical origin, Markdown HTTP route, or content-negotiation server.
- Continue maintaining the existing OKF Markdown bundle; OKF source documents and HTTP Markdown negotiation are separate concerns.
- Repository hosting does not create a project-owned HTTP content service. GitHub and CNB control their own routes and representations.
- Continue applying Modern Web Guidance if a future task actually introduces HTML, CSS, client-side JavaScript, a browser API, or web-performance behavior; this current N/A registration does not waive that task-level rule.

## Reopen conditions

Reassess the classification before implementation when any of these becomes true:

1. Plumbline adds a browser-facing dashboard, documentation site, control plane, extension, or other Web runtime.
2. Plumbline owns a stable public canonical origin with indexable routes.
3. Stable public body pages are intentionally served over HTTP and are candidates for same-URL `text/html` / `text/markdown` negotiation.
4. A browser-distributed artifact introduces an explicit browser-support contract.

At that point, record the real browser toolchain and compatibility contract,
then apply the relevant browser, privacy, security, testing and publication checks.
An expanded product surface requires an owner decision in `PLAN.md`.
