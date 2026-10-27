# Plumbline Plan

> Authority: this file owns product scope, acceptance, delivery boundaries and
> owner decisions. Plumbline is a portable verification skill with native Codex
> and Claude Code custom-marketplace packaging. The package version is 0.1.2.

## 1. Product charter

Plumbline helps coding agents plan or perform evidence-based verification of
concrete software changes using the target project's requirements and tools.
It adds no mandatory runtime, project configuration, adapter, database, service,
policy engine, automatic repair loop or automatic evidence upload.

Delivery consists of the GitHub repository page, custom marketplace installation
in Codex and Claude Code, and native CLI installation. Official OpenAI/Claude
directory uploads, submissions and publication are outside scope. No separate
website or GitHub Pages deployment is required. The GPL-3.0-or-later license and
owner-approved icon remain in place.

## 2. Approved skill contract

The canonical skill is `plugins/plumbline/skills/plumbline/`. Its five operational
files are `SKILL.md`, `agents/openai.yaml`, the two selective references under
`references/`, and `assets/report-template.md`. `LICENSE.txt` accompanies standalone
installation. The native wrapper adds `plugin.json`, the Claude compatibility
manifest, README, LICENSE and `assets/plumbline.png`.

The workflow resolves scope and authorities, maps acceptance to sufficient checks,
executes authorized project tools, confirms evidence applicability to actual
source/inputs, and reports observations and limits. Planning-only requests do not
execute checks. Verification alone does not authorize repair or installation.
An ongoing implementation may use the skill within its existing authorization.

Project requirements, host permissions and actual user scope remain authoritative.
Preserve unrelated changes; derive commands from project sources; inspect material
side effects. Choose proportionate checks without global risk tiers or metric
floors. Reproduce bugs when possible, exercise new paths, and use disposable copies
for source-changing negative controls. Commit/status alone cannot bind dirty bytes.

Per-item states are Verified, Failed, Unverified, Approval needed and Not applicable.
Required gaps prevent an all-complete claim. Exit zero with zero/skipped tests,
stale or misbound evidence, and unexplained contradictory reruns do not establish
behavior. Explain applicability, evidence, tested inputs and environment limits.
These are reviewable assessments, not a sandbox, signed attestation, correctness
score, machine-enforced verdict or the retired framework's `PASS`.

Keep the main instructions within 250 lines and load references selectively.
Reports stay in the conversation by default; existing project conventions govern
saved artifacts. The skill has no required scripts, plugins, other skills or
installation/configuration migration in target projects.

## 3. Acceptance and validation

- Validate skill frontmatter and metadata with the available skill creator's
  `scripts/quick_validate.py plugins/plumbline/skills/plumbline`.
- Run `node --test tests/distribution/package.test.mjs` for package changes.
  The real entry point must catch bad metadata, escaping paths, missing/changed
  licenses, bad references, unexpected payload and missing/damaged/nonsquare icons.
- Use `tests/skill/README.md` for behavior changes. Inspect actual agent actions,
  checker observations and reports; text or catalog presence is not behavior proof.
- Check relevant Markdown links, source targets and anchors; run whitespace checks
  against the complete candidate, not only its dirty worktree.
- Run `bash tests/governance/check-dco.sh` for contribution-history validation.
- Bind results to actual source, tools and inputs. Distinguish local packaging,
  synthetic behavior, native installation, remote availability and production use.

Codex is the active execution-testing host. The owner excludes all future Claude
CLI testing and validation. Keep Claude metadata synchronized statically; dated
earlier results do not establish current execution. No Rust build is needed.

## 4. Retired framework boundary

D081 replaced the former framework with the portable skill. The Rust prototype,
universal protocol/configuration, signed evidence ledger, policy engine, isolation
broker, numerical floors, runtime/adapter and binary roadmap are retired.
They are not required by the skill or queued for revival.

D084 removes obsolete source, records, caches and Docker material. D085 replaces
the prior development ancestry with one fresh skill-only root, so historical DCO
exceptions and certificate machinery are also removed from the active repository.
Offline recovery material remains private and is never pushed as a backup ref.

## 5. Delivery definition and evidence boundaries

The 0.1.2 wrapper contains eleven files. Both host manifest versions match.
The approved square PNG is used for the listing and composer with SHA-256
`fcd8a77ed79c122bb89317ca8f48bb41458efcdeb03b2685a4229da6fb4506f3`.
Its bytes are unchanged from the owner-approved preview. Local browser observations
at 48, 64, 128 and 256 CSS pixels on light/dark backgrounds support legibility;
native host icon masking was not tested.

Portable skill instructions, references, template and invocation policy remain
unchanged from 0.1.1. Earlier behavior samples are bounded observations, not a
general reliability rate. Native installation of the 0.1.2 wrapper remains
unverified. Existing user installations were not modified by this work.

The fresh history starts with one DCO-signed initial contribution. Its exact object ID,
frozen file hashes, local validation outputs, lease value and remote read-back
belong to the private delivery receipt, avoiding a self-referential commit hash in
this tree. Verify actual Git refs when accepting or resuming delivery.

Official-submission ZIPs, portal/policy drafts and duplicate run/preview copies are
obsolete. No official archive was uploaded, cloud draft created or skill scan
started. Portal identity checks, attestations, listing URLs, country targeting and
commerce fields are not requirements for the chosen repository/marketplace route.

## 6. D085 authorized delivery and conditional visibility

On 2026-10-27 the owner explicitly authorized a fresh init from the cleaned current
version, a signed-off commit and `force-with-lease` replacement of GitHub main,
while preserving the existing repository and address. This supersedes the earlier
choice to retain its development commits. Only `refs/heads/main` is replaced;
refuse a lease mismatch or any concurrent source change. No unrelated ref, remote
repository deletion or CNB synchronization is included.

Preserve a verified full Git bundle and current working-tree snapshot outside the
repository first. Freeze and validate the exact candidate, create a parentless
initial commit using the owner's configured identity, validate its actual DCO,
then compare and push against the freshly observed remote head. Read GitHub main
back independently. Install the same clean Git metadata locally with rollback
available; retain the existing remote URLs.

The owner also explicitly authorizes a scheduled agent to make
`ShanireZ/Plumbline` public after the existing cleanup requests are completed and
known old objects are confirmed unreadable. The job must verify the intended new
main, authenticated current-main control, old commits and retained PR refs first.
Keep private on ambiguous responses or missing access. A 404 caused by missing
authentication is not erasure evidence. CNB visibility remains unchanged.

The follow-up stays quiet while unchanged/non-actionable and reports meaningful
progress, completion, failure or required user action. It performs no commit/push,
mirror synchronization, new support communication, official-directory action or
legal attestation. Public visibility remains a separate outcome from root-history
delivery; creating the new root does not waive provider cleanup.

## 7. Ordinary DCO contribution history

Every reachable commit must have its own `Signed-off-by` trailer matching the
actual author email under ASCII case-insensitive comparison. Display names may
differ. `Co-Authored-By` does not create another sign-off requirement.

The no-argument `tests/governance/check-dco.sh` checks complete, non-shallow
history and exercises positive, unsigned, wrong-email and shallow controls in
disposable repositories. There are no retrospective exceptions, fixed historical
pair arrays, certificate pins, runtime approval flags or policy bypasses.
Old certification records are preserved only in private offline recovery.

## 8. Dual-host marketplace distribution

The catalogs `.agents/plugins/marketplace.json` and `.claude-plugin/marketplace.json`
point at `./plugins/plumbline`. The marketplace is `plumbline-marketplace`; the
plugin is `plumbline`. Native managers install, update and remove it.
Both hosts load one skill using the `plumbline:plumbline` namespace.
Standalone `$plumbline` remains supported; use one method per host.

`INSTALL.md` documents GitHub and local sources, CLI/in-session installation,
invocation and removal. Private access uses existing host Git authentication.
Changing source does not prove an installed cache was replaced. Installation and
discovery do not establish automatic selection or correctness of every report.

The 2026-10-27 prepublication review adds explicit prerequisites, installed-plugin
checks, native refresh/update/removal commands, standalone installation and recovery
from a cached pre-rewrite marketplace. Codex CLI command syntax is checked against
the installed 0.162.1 help; Claude instructions and metadata are checked against
official documentation and the static package gate, without invoking Claude CLI.
This review does not establish a new end-to-end native installation result.

The owner explicitly authorized this batch's signed-off commit, normal GitHub
push and scoped CNB synchronization on 2026-10-27, with both repositories staying
private. Conditional GitHub public visibility waits for verified delivery as well
as the provider-cleanup conditions below. Private receipts bind the reviewed main
and its retained fresh initial root. Product skill, icon, manifests and package
version remain unchanged.

## 9. Cleanup and recovery

The retired Rust/Docker source, dependencies/toolchain, historical architecture,
research, old decision/roadmap navigation, dated log, obsolete policy drafts and
twenty-one scratch directories have been removed from the active tree.
Docker inventory found no Plumbline/NxtStrict containers, named images or volumes;
shared resources and other projects remain untouched. There is no global prune.

Preserve one verified private recovery snapshot for removed files and the separate
pre-reinit Git bundle/working snapshot. These are outside the repository and are
not dependencies or status authorities. Restore selected paths in a separate copy
before applying rollback. Keep minimal active provider receipts while their work
is pending; never upload private recovery material or expose it through a Git ref.

## 10. Privacy cleanup before public visibility

The existing GitHub and CNB requests concern retained private history, not official
plugin-directory publication. Keep both open: a new initial commit changes branch
ancestry but does not erase provider-held PR refs, unreachable commits or caches.
Support record IDs, original private hashes and correspondence remain outside Git.

On 2026-10-27 the owner separately authorized synchronization of the new main to
the existing private CNB mirror and supplements to both original support requests.
The synchronization and supplements were delivered and read back. GitHub remained
Open with two owner comments; the CNB thread contained two owner-sent messages.
No provider completion reply was observed, and neither request was withdrawn.

The old private object/ref identifiers remain cleanup targets. Authenticated
checks still found a retained GitHub commit/PR ref and the superseded CNB main
readable, even though the original CNB probe had changed to not found. Exact
identifiers and results stay in private receipts. Owner follow-ups are not provider
approval. Require formal completion, authenticated old-object inaccessibility and
verified delivery of the pending prepublication content before the scheduled
visibility change. GitHub and CNB remain private while those conditions are unmet.

## 11. Active decisions

| Decision | Current responsibility |
| --- | --- |
| D081 | Portable evidence-verification skill; framework obligations stay retired. |
| D083 | One shared skill with thin native Codex/Claude Code marketplace metadata. |
| D084 | GitHub/native installation only; cancel official-directory work and remove obsolete material. |
| D085 | One fresh signed-off root, exact leased GitHub main replacement, private recovery, ordinary DCO and explicitly authorized conditional scheduled public visibility. |
