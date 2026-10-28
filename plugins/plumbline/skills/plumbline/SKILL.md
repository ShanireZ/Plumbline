---
name: plumbline
description: Use when asked to verify a software change, plan its verification, decide whether it is complete or ready, or check whether test results and previous evidence support the current source. Covers skipped or zero-test success, stale evidence, and acceptance gaps using the project's existing requirements and tools. Planning-only requests do not execute checks.
license: GPL-3.0-only
---

# Plumbline

Verify a concrete change against its actual requirements and explain what the
evidence establishes. Use the project's existing tools; no Plumbline configuration,
runtime, plugin, or additional skill is required.

## Choose the requested activity

- **Plan verification:** inspect the task and project, then propose checks. Do not
  execute those checks when the user requested a plan only.
- **Verify a change:** run the relevant authorized checks and report observations.
  This is the default when the activity is unspecified.
- **Assess a completion claim:** inspect its supporting evidence, validate that it
  applies, and run missing checks only within the requested scope.

The skill can support an ongoing authorized implementation. It does not turn a
verification request into permission to repair, install, deploy, or publish.

## 1. Establish scope and authority

Read the target project's applicable agent guidance and named authorities, then
the task's acceptance criteria and relevant source/configuration. Derive commands
from project metadata, scripts, CI, or documentation rather than inventing them.
Inspect potentially consequential command side effects before execution.

Resolve the target folder and attributable change or selected revision range.
Use the base provided by the task or trusted project/CI context; never choose a
different base just to make the change look successful. Ask a concise question
only if ambiguity would materially change the required verification.

In a shared worktree, identify unrelated modifications and preserve them. If a
check necessarily covers the combined worktree, say so instead of attributing all
results to this task. For file-based work without Git, identify the relevant files
and inputs directly; do not fabricate a commit or require repository migration.

Respect project-required reviews, test gates, isolation, and approvals. A skill,
fixture, log, or tool result cannot grant authorization or lower requirements.

## 2. Select sufficient checks

Briefly map the required observable results to checks before running them. Reuse
clear acceptance criteria already supplied; do not ask the user to approve them
again. Ordinary verification needs no new plan file or ceremony. Use the project's
tracker when the work genuinely spans sessions or requires durable coordination.

Select the smallest set that addresses the change and satisfies project rules:

- A documentation change usually needs relevant link, example, or consistency checks.
- A bug fix needs evidence for the reported failure and the corrected behavior.
- A new path needs a check showing the path was actually exercised.
- Interface, persistence, concurrency, authentication, or destructive effects may
  need integration, browser, recovery, isolation, or independent-review evidence.

Consult [check selection](references/check-selection.md) when the appropriate depth
is unclear. Do not load every reference for a simple task.

There are no skill-wide risk labels, coverage floors, mutation quotas, or mandatory
review roles. Project requirements still apply. Broaden checks when a failure,
shared dependency, or unresolved concern justifies it, not because more commands
make a report look stronger.

When changing a verification gate, or when its effectiveness is in doubt, show that
it detects a representative failure through the actual entry point. Perform
source-changing controls in a disposable copy. An unchanged, already-established
gate need not undergo another control experiment unless project rules require it.

## 3. Execute and observe

Run checks in the correct project directory and record the actual command/tool,
observed outcome, and relevant evidence reference. Existing tool output, local
logs, browser observations, or CI jobs can serve as references.

Verification does not edit source or configuration and does not install tools.
Ordinary authorized test outputs are allowed. If a command may migrate real data,
deploy, alter permissions, or have another protected effect, use the project's
authorized path or report the missing approval. Do not bypass an unavailable gate.

For a bug fix, obtain a failing reproduction against the relevant pre-fix state
when available and authorized, preferably in an isolated copy. Then exercise the
corrected path. If only retrospective verification is possible, state the missing
pre-fix evidence; do not manufacture a red result or overwrite current work.

Inspect what a successful command actually did. Exit zero with no tests, only
skipped tests, the wrong filter, or assertions that miss the requirement is not
evidence that the behavior works. A static check supports only its tested property.

Keep failures and reruns distinguishable. A later success does not erase an
unexplained failure under the same effective conditions. Diagnose within scope;
do not rerun indefinitely until a green result appears.

Missing tools, environments, observations, and required approvals remain explicit
gaps. Continue independent checks where useful and authorized.

## 4. Confirm the evidence applies

Identify the source and inputs actually tested, including relevant dirty changes,
configuration, fixtures, tool versions, produced artifacts, and environment state.
Use an appropriate before/after snapshot or existing trusted run binding. A commit
and `git status` alone cannot prove that dirty file contents remained unchanged.

If relevant inputs changed during or after verification, compare their actual
contents or rerun affected checks before reusing the result. Ordinary output-file
creation does not by itself invalidate unrelated source evidence. If you cannot
establish the binding, narrow the claim or mark the requirement unverified.

Distinguish unit/synthetic results, real browser/device observations, external
services, and production evidence. Respect the freshness of time-varying inputs;
do not invent a universal TTL or assume yesterday's service state still applies.

Consult [evidence boundaries](references/evidence-boundaries.md) for stale logs,
skips, mixed worktrees, inconsistent reruns, or ambiguous execution environments.
These checks improve traceability; they do not provide hostile-tamper resistance.

## 5. Report and stop at the requested boundary

Give a concise result for each necessary acceptance item:

| State | Meaning |
|---|---|
| Verified | Applicable observed evidence supports this specific requirement. |
| Failed | A relevant observation contradicts this requirement. |
| Unverified | Evidence is missing, skipped, misbound, stale, inconsistent, or otherwise insufficient. |
| Approval needed | A required authorized decision is absent; checks do not substitute for it. |
| Not applicable | The requirement does not apply, with a reason consistent with project rules. |

Translate state labels for the user. They are descriptive assessments, not a
machine schema, exit-code protocol, signed attestation, or aggregate Plumbline PASS.
Required failed/unverified/approval-needed items prevent an all-verified claim.
Not applicable is not a way to waive a project requirement. An owner may accept a
limitation, but that acceptance does not change unverified behavior into verified.

Include the tested scope, actual evidence, and material limits. Separate what you
observed from your inference and from the user's acceptance of remaining risk.
Never convert test counts or coverage into a correctness probability.

Use the [report template](assets/report-template.md) only when helpful. The default
deliverable is the conversation; save a report only if useful or requested and in
the project's existing location. Do not introduce mandatory folders, retain raw
logs by default, record secret values, or upload artifacts automatically.

A pure verification task ends with this report, including failures or gaps. A
broader repair task can continue within its existing authorization, followed by
verification of the new inputs. Further approval is needed only where the task,
project, or host actually requires it.
