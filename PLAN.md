# Plumbline Plan

> Authority for product scope, acceptance, delivery state and owner decisions.
> The portable skill is shared across coding tools. Codex and Claude Code have
> native marketplace wrappers.

## 1. Product contract

Plumbline helps coding agents verify concrete software changes against the target
project's requirements with traceable evidence. It uses existing project tools
and adds no mandatory runtime, configuration, service, policy engine or upload.

The workflow establishes scope and authority, maps acceptance to checks, executes
authorized checks, confirms evidence applies to the actual inputs, and reports
results and gaps. Planning-only requests do not execute checks. Verification
alone does not authorize repair, installation, deployment or publication.

Project requirements, user scope and host permissions remain authoritative.
Preserve unrelated work. Derive commands from project sources, inspect material
side effects, reproduce bugs when possible, and use disposable copies for
source-changing negative controls.

## 2. Skill and evidence

The canonical instructions are
[`plugins/plumbline/skills/plumbline/SKILL.md`](plugins/plumbline/skills/plumbline/SKILL.md).
Keep them within 250 lines. Load the two references selectively and use the
report template when helpful. The accompanying `LICENSE.txt` stays with standalone
installations.

Per-item assessments are Verified, Failed, Unverified, Approval needed and Not
applicable. Required gaps prevent an all-complete claim. Zero or skipped tests,
stale or misbound evidence, and unexplained contradictory reruns do not establish
behavior. Reports state the checked inputs, commands, observations and limits.

These assessments are not a sandbox, signed attestation or machine-enforced
verdict. Reports remain in the conversation by default; saved evidence follows
the target project's conventions. There is no automatic repair or upload.

## 3. Package and installation

The native wrapper is `plugins/plumbline/`. Both catalogs point there:

- `.agents/plugins/marketplace.json` for Codex.
- `.claude-plugin/marketplace.json` for Claude Code.

The marketplace is `plumbline-marketplace`; the plugin is `plumbline`.
Both hosts expose `plumbline:plumbline`. Standalone Codex installation exposes
`$plumbline`; use one installation method per host.
[`INSTALL.md`](INSTALL.md) owns installation, discovery, update and removal steps.

The package version is **0.1.4**, with matching host manifests and thirteen payload
files. It preserves **GPL-3.0-only** while separating the project grant from
standard GPL text for provider detection. The preceding verified public delivery
was **0.1.3**; D088 records this correction and its delivery scope.

On 2026-10-27, Codex CLI 0.162.1 help confirmed the documented native plugin
command syntax. Claude instructions and metadata were checked statically against
official documentation. Neither check established end-to-end installation.

The approved square icon is unchanged, with SHA-256
`fcd8a77ed79c122bb89317ca8f48bb41458efcdeb03b2685a4229da6fb4506f3`.
The skill's instructions, license metadata, references, report template and
invocation policy are unchanged in this package.

## 4. Validation and acceptance

| Change | Required evidence |
| --- | --- |
| Skill metadata | Available skill creator's `scripts/quick_validate.py` on the nested skill. |
| Package, license or host metadata | `node --test tests/distribution/package.test.mjs`, including negative controls. |
| Skill behavior | Isolated cases in [behavior validation](tests/skill/README.md), with actual actions and observations. |
| Contribution history | `bash tests/governance/check-dco.sh` on complete, non-shallow history. |
| Documentation | Parse OKF frontmatter, inspect authority and navigation, check links and examples, and review the rendered README. |
| Any candidate | Check whitespace and the actual changed bytes; preserve unrelated work. |

Every reachable commit needs its own `Signed-off-by` trailer matching the author
email under ASCII case-insensitive comparison. Display names may differ.
`Co-Authored-By` adds no sign-off requirement. There are no historical exceptions.

Codex is the active host for execution testing. The owner excludes future Claude
CLI testing; check its metadata statically. Packaging, synthetic behavior,
installation/discovery, real-project use and public availability are distinct
claims. Native installation of this package and general automatic selection
remain unverified.

## 5. Delivery and privacy

GitHub is authoritative at [ShanireZ/Plumbline](https://github.com/ShanireZ/Plumbline);
[Round1/Plumbline on CNB](https://cnb.cool/Round1/Plumbline) is its public mirror.
The 2026-10-28 D086 delivery replaced the old GitHub repository with independent
public repository ID `1436506201`. Scoped sync and anonymous clones verified the
same reviewed main and 66 tracked files on both providers for that delivery.

Exact revisions, file hashes and provider read-backs stay in private receipts.
Each external write needs the owner's applicable explicit scope. D088 records
the authorization for the current license-format correction; older permissions
do not carry forward automatically.
CNB Git synchronization uses the workspace's `sync-github-cnb.ps1 -Project Plumbline`.

Earlier checks still read a superseded CNB object. Current-main fixes and branch
synchronization do not establish provider-side erasure. Keep existing cleanup
requests and private recovery material. Do not publish historical identifiers,
correspondence or credentials, or send support messages without authorization.

Recovery material remains outside Git. Restore selected paths in a separate copy
before considering a rollback; Git backups do not restore deleted provider
settings or issue metadata. Source rollback and remote writes need their own scope.

Delivery uses repository pages and native custom marketplaces/CLIs. Official
OpenAI/Claude directory submission and a separate website remain outside scope.

## 6. Owner decisions

| Decision | Disposition |
| --- | --- |
| D081 | Adopt the portable verification skill; retire the former Rust framework, universal protocol, policy engine, ledger, numerical floors and runtime roadmap. |
| D083 | Keep one shared skill with thin native Codex/Claude Code metadata. |
| D084 | Remove retired framework material and official-directory work; keep approved icon, license and ordinary DCO. |
| D085 | Completed fresh signed-off root and exact leased GitHub main replacement, with private recovery. Its preserve-repository and conditional-visibility route was superseded by D086. |
| D086 | Completed owner-authorized GitHub deletion/recreation, public delivery and scoped sync to the existing public CNB mirror. Old-object cleanup remains separate. |
| D087 | Correct current licensing to GPL version 3 only; move the four-language menu below the logo with ASCII parentheses; audit and refactor current documentation against official OKF v0.2, then obtain review. Prepare 0.1.3; the owner subsequently authorized one reviewed GitHub publication batch and CNB metadata updates/synchronization for Plumbline, Fulcrum and Aptinery. |
| D088 | Preserve GPL-3.0-only; keep LICENSE copies as unmodified standard GPL v3 and move the explicit project grant into matching NOTICE copies. Fix provider classification, add regression controls, publish GitHub and synchronize CNB under the owner's 2026-10-28 request. |

D087 follows the owner's 2026-10-28 instruction “GPL-3.0 没有 or later” and the
requested README/documentation review. Display labels use `GPL-3.0`; machine
metadata uses SPDX `GPL-3.0-only`. D088 supersedes the initial placement of the
explicit grant before the standard GPL text; the grant now lives in NOTICE.
Earlier published bytes and notices remain historical.

This correction affects license copies, manifests, skill frontmatter, package
checks and contributor-facing documents. It changes no operational skill
behavior. Recovery is a reviewable reversal of this batch's selected changes,
preserving other work.

The owner subsequently instructed “改造全部完成后，统一发布github，cnb修改与同步”.
This authorizes signed-off commits, normal GitHub pushes, repository About edits
and scoped CNB synchronization for the three named repositories after their
changes and reviews are complete. It overrides Fulcrum's default owner-only push
restriction for this batch. No unrelated source or dependency change is included.

D088 follows the owner's instruction “修复 Plumbline 在 CNB 被识别为 Other license 的问题，保持 GPL-3.0-only，完成后发布 GitHub 并同步 CNB。”
Both providers reported NOASSERTION for the prefixed 0.1.3 license. The correction
keeps the exact standard GPL v3 bytes in all three license files and carries the
unchanged version-3-only project grant in NOTICE at repository, plugin and
standalone-skill boundaries. Standard GPL appendix examples do not extend it.
This is a packaging correction, with no operational skill or asset changes.
Recovery is a reviewable reversal of this selected change; external rollback or
further publication needs applicable owner authorization. Provider classification
must be read back after the authorized normal push and scoped workspace sync.

The owner also approved “同意加入社群連結並一起發佈” for a brief LINUX DO
community link in all four README languages. The community's open-source
promotion rules require that link and screenshot publication of AI-written
introductions. The draft and screenshots stay outside the distribution; the
owner will select the forum tag, confirm the declaration and submit the post.
