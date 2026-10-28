# Plumbline Plan

> Public authority for product scope, acceptance and approved product decisions.
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

Host manifests own the package version and must agree. Keep the shared skill,
approved icon and host wrappers together. The project grant is **GPL-3.0-only**
in `NOTICE`; `LICENSE` contains the unmodified standard GPL v3 text. Both accompany
the plugin and standalone skill.

The package has no browser runtime, hosted service or project-owned website.

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

Use Codex for execution testing and review Claude compatibility statically.
Packaging, synthetic behavior, installation/discovery, real-project use and
public availability are distinct claims. Native installation of this package
and general automatic selection
remain unverified.

## 5. Delivery and privacy

GitHub is authoritative at [ShanireZ/Plumbline](https://github.com/ShanireZ/Plumbline);
[Round1/Plumbline on CNB](https://cnb.cool/Round1/Plumbline) is its public mirror.
Delivery uses repository pages and native custom marketplaces/CLIs. Official
OpenAI/Claude directory submission and a separate website remain outside scope.

Public documents contain reusable product and contribution rules. Keep operating
logs, publication approvals, recovery material and provider correspondence in the
maintainer's workspace, outside Git. They are not required to use or contribute
to the skill. Follow [the project guide](AGENTS.md) for action authorization.

## 6. Product decisions

| Decision | Disposition |
| --- | --- |
| D081 | Adopt the portable verification skill; retire the former Rust framework, universal protocol, policy engine, ledger, numerical floors and runtime roadmap. |
| D083 | Keep one shared skill with thin native Codex/Claude Code metadata. |
| D084 | Remove retired framework material and official-directory work; keep the approved icon, license and DCO for every reachable commit. |
| D087 | Use GPL version 3 only and OKF v0.2 for the documentation bundle. |
| D088 | Keep unmodified standard GPL v3 text in LICENSE and the version-3-only project grant in NOTICE at repository, plugin and standalone-skill boundaries. |
| D089 | Use English for public documentation and host UI text. Keep reusable contracts in Git and internal operating records in the workspace. |
