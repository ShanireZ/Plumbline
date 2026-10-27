# Selecting checks

Start from the requirement, the changed behavior, and the project's mandatory
checks. This table is a set of examples, not a universal test matrix.

| Change or claim | Useful evidence | Common insufficiency |
|---|---|---|
| Documentation, links, examples | Relevant local link/consistency check; executable example if changed | Running an unrelated application suite while leaving the changed example unchecked |
| Logic or bug fix | Reproduction, boundary assertion, relevant regression tests | A green suite that never invokes the changed path |
| UI or browser behavior | Real browser interaction at relevant states/sizes, plus appropriate component tests | A screenshot alone for a claim about keyboard use or interaction |
| API or public interface | Consumer-visible success/error cases, compatibility checks | Testing only a private helper while skipping serialization/routing |
| Persistence or migration | Project-approved disposable data environment; state and recovery assertions | Treating a local fixture as evidence of production migration success |
| Concurrency, timing, performance | Repeated/property/stress or measurement checks tied to the claim | One lucky run or an incomparable baseline |
| Authentication, authorization, real effects | Existing protected project gates and required review/approval | A unit test treated as permission for a live action |
| Build/dependency/CI changes | The affected real entry point, dependency/config checks, negative control where appropriate | A synthetic check that never calls the changed pipeline |

## Scope and escalation

Read nearby tests and dependency relationships to determine affected scope. Include
mandatory project gates even if a narrower check looks sufficient. If uncertainty
about a shared component materially affects the result, inspect further or expand
to the relevant suite; do not invent a dependency graph or lower project thresholds.

Broaden after new failures or unresolved concerns. Once the appropriate checks
pass on unchanged inputs, additional repeats need a reason. Ordinary work does not
require mutation testing, fuzzing, a second agent, or a large QA process by default.

## Bug reproduction and new paths

Prefer a concrete observable counterexample. For a retrospective patch review,
use an available authorized pre-fix copy or revision without disturbing current
work. If unavailable, report that the current behavior was tested but the original
failure was not reproduced. A new branch needs an input and assertion that reach
it; total suite count or coverage alone does not establish that relationship.

## Gate controls

For a new/changed or suspect gate, run a representative known-good and known-bad
case through the same entry point. Verify that the bad case fails for the intended
reason, not a missing dependency or unrelated syntax error. Mutate only disposable
copies. Record limitations when the true gate needs a host or environment that is
unavailable. Reuse existing gate evidence only when applicable inputs remain valid.

## When no useful command exists

Inspect the project's declared workflow first. A source review can support a
static observation, but cannot become execution evidence. Report the missing
behavioral evidence and propose the smallest useful check; do not build a new test
framework, install a tool, or repair the project merely to finish verification.
