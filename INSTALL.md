# Install Plumbline

Use the host's native marketplace installer. Plumbline needs no separate runtime,
package-manager package, custom installer, service, hook or project configuration.
The plugin contains one [portable skill](plugins/plumbline/skills/plumbline/SKILL.md).
See [PLAN.md section 8](PLAN.md#8-dual-host-marketplace-distribution) for the
current delivery state and the exact hosts actually tested.

## From a local checkout

Use an absolute path to the checkout containing both marketplace catalogs.
Replace the example path below with the absolute path on your machine.

Codex CLI:

```powershell
codex plugin marketplace add "/absolute/path/to/Plumbline"
codex plugin add plumbline@plumbline-marketplace
codex plugin list --marketplace plumbline-marketplace --json
```

Claude Code CLI:

```powershell
claude plugin marketplace add "/absolute/path/to/Plumbline"
claude plugin install plumbline@plumbline-marketplace --scope user
claude plugin details plumbline@plumbline-marketplace
```

These commands install into the current user's host configuration. A local source
must remain available for marketplace refreshes. To test without changing that
configuration, launch the CLI with an absolute disposable `CODEX_HOME` (Codex) or
`CLAUDE_CONFIG_DIR` (Claude Code); do not copy account credentials into test profiles.

## From GitHub

For users with access to the GitHub repository, use its source instead of a local
path. The tested revision and installation evidence are recorded in
[PLAN.md section 8](PLAN.md#8-dual-host-marketplace-distribution):

```shell
codex plugin marketplace add ShanireZ/Plumbline
codex plugin add plumbline@plumbline-marketplace
```

```shell
claude plugin marketplace add ShanireZ/Plumbline
claude plugin install plumbline@plumbline-marketplace --scope user
```

Private repositories require access through the host's existing Git authentication.
No token belongs in these commands or the plugin. A local installation test does
not establish remote availability or listing in either host's official directory.

## In the host application

In Codex, open `/plugins`, add/select the marketplace source, then install
`plumbline`. If the current surface has no source-management UI, use the Codex CLI
commands above. Local marketplace availability can differ between host surfaces.

Inside Claude Code, use the same native actions:

```text
/plugin marketplace add ShanireZ/Plumbline
/plugin install plumbline@plumbline-marketplace
```

For a local checkout, replace `ShanireZ/Plumbline` with its absolute path. Start a
fresh session after installation. Invoke the namespaced skill in the target project:

| Host | Request |
| --- | --- |
| Codex | `Use $plumbline:plumbline to verify this change against the project requirements.` |
| Claude Code | `/plumbline:plumbline Verify this change against the project requirements.` |

For planning only, ask to plan verification without executing checks. Skill
discovery and successful installation do not prove model behavior or automatic
selection for every request. Host permissions and target-project requirements apply.

### Claude Desktop account marketplace

Claude also supports account-based installation through **Customize → Plugins**.
Open **Discover**, select an available plugin and choose **Add**. To add a repository
marketplace, use **Add → Add marketplace** and enter its repository URL or GitHub
`owner/repo`. Available sources depend on account access. These account actions are
separate from the CLI's local-checkout registration above.

Account plugins sync to Claude Code when it starts with the same Claude account
on supported versions. After installation, start a fresh session and explicitly
invoke `/plumbline:plumbline`; confirm that the intended skill loads. Account sync
alone does not prove that the loaded files match this checkout. The observed
Plumbline installation and behavior evidence are recorded
in [PLAN.md section 8](PLAN.md#8-dual-host-marketplace-distribution); availability in
an account marketplace does not establish an official-directory listing.

See Anthropic's [account plugin installation and sync instructions](https://support.claude.com/en/articles/13837440-use-plugins-in-claude).

## Existing standalone installations

Standalone hosts may still install the complete
`plugins/plumbline/skills/plumbline/` directory, including `LICENSE.txt`, using
their normal skill installer. For Codex's bundled skill installer, the repository
path is `plugins/plumbline/skills/plumbline`; standalone invocation is `$plumbline`.
Choose one method per host. If a standalone copy already exists, remove it through
that host's normal skill management before switching to the plugin to avoid two
copies being discovered. This repository never removes it automatically.

## Update or remove

Use the host's native plugin manager to update. After a source/version update,
open a fresh session and confirm its loaded version and skill. Do not infer that a
changed local source has replaced an already installed cache.

To remove the plugin and then its source:

```shell
codex plugin remove plumbline@plumbline-marketplace
codex plugin marketplace remove plumbline-marketplace
```

```shell
claude plugin uninstall plumbline@plumbline-marketplace --scope user
claude plugin marketplace remove plumbline-marketplace
```

These commands remove the plugin and marketplace registrations through the host's
supported interface. Cache retention follows host behavior. The source checkout
and target-project files remain available.

## Format references

- [OpenAI plugin packaging and marketplaces](https://developers.openai.com/plugins/build/plugins)
- [Claude Code marketplace format](https://code.claude.com/docs/en/plugins/marketplace-reference)
- [Claude Code plugin commands](https://code.claude.com/docs/en/plugins/cli-reference)
