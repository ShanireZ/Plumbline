# Contributing to Plumbline

Use [GitHub Issues](https://github.com/ShanireZ/Plumbline/issues) for features,
defects and proposals. Read [the project guide](AGENTS.md) and the relevant
[product contract](PLAN.md) before changing the shared skill or package.
Report suspected vulnerabilities through [the security policy](SECURITY.md).

## Scope and review

Keep changes focused and explain the requirement they address. Product decisions
belong in `PLAN.md`; documentation indexes provide navigation. Do not silently
restore retired framework obligations or weaken a target project's permissions.

Preserve unrelated work. Never commit credentials, private evidence, sensitive
logs or internal operating records. See the
[documentation convention](docs/governance/documentation.md) for the OKF bundle.

## Checks

From the repository root:

```shell
node --test tests/distribution/package.test.mjs
bash tests/governance/check-dco.sh
git diff --check
git diff --cached --check
```

The package gate needs Node.js. The DCO gate needs Bash and Git, and checks a
complete, non-shallow history with negative controls. Check whitespace in both
the worktree and staged candidate; clean worktree output alone does not inspect
a staged change.

For skill metadata, run the available skill creator's `scripts/quick_validate.py`
on `plugins/plumbline/skills/plumbline` if that developer tool is installed.
For behavior changes, follow [the isolated scenarios](tests/skill/README.md).
A packaging check does not establish agent behavior or native installation.
Check changed documentation links, YAML, examples and rendered layout.
Use Codex for execution testing and static review for Claude compatibility.

## Developer Certificate of Origin

Each commit must have a `Signed-off-by` trailer matching its author email under
ASCII case-insensitive comparison. Display names may differ. Add it with
`git commit -s`:

```text
Signed-off-by: Your Name <your.email@example.com>
```

Signing off certifies the [Developer Certificate of Origin 1.1](https://developercertificate.org/):
you have the right to submit the contribution under the project license.
Every reachable commit needs its own sign-off; there are no retrospective
exceptions. `Co-Authored-By` does not require an additional sign-off.

## License and delivery

Current contributions use [GNU GPL version 3 only](LICENSE)
(`GPL-3.0-only`). Preserve the project grant in [NOTICE](NOTICE), the unmodified
standard GPL text in LICENSE, and both files in every packaged copy.

Commit, push, PR, mirror synchronization, release and installation require the
owner's applicable explicit authorization under [the project guide](AGENTS.md).
A request to review or fix documents grants no new external-write permission.
