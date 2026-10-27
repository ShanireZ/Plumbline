// Run: node --test tests/distribution/package.test.mjs
// Native Codex evidence is separate: use the owner's authorized Desktop route.
// Fresh skills/list must return the enabled plumbline:plumbline from the intended
// cache with pluginId plumbline@plumbline-marketplace and verified payload bytes.
// Claude compatibility metadata is checked statically; do not invoke Claude CLI.
// These Node checks make no model calls and do not change user installations.
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, mkdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, isAbsolute, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const root = fileURLToPath(new URL('../..', import.meta.url));
const gate = fileURLToPath(new URL('./check-package.mjs', import.meta.url));
const run = (dir) => spawnSync(process.execPath, [gate, dir], { encoding: 'utf8', timeout: 15000 });

test('canonical catalogs and minimal payload pass the actual entry point', () => {
  const result = run(root);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), { plugin: 'plumbline', version: '0.1.2', files: 11 });
});

const editJson = (dir, path, edit) => {
  const file = join(dir, path);
  const value = JSON.parse(readFileSync(file, 'utf8'));
  edit(value);
  writeFileSync(file, JSON.stringify(value));
};
const controls = [
  ['version mismatch', (dir) => editJson(dir, 'plugins/plumbline/.claude-plugin/plugin.json', (v) => { v.version = '0.2.0'; }), /Host metadata differs: version/],
  ['catalog escape', (dir) => editJson(dir, '.agents/plugins/marketplace.json', (v) => { v.plugins[0].source.path = '../outside'; }), /Wrong catalog source/],
  ['missing standalone license', (dir) => rmSync(join(dir, 'plugins/plumbline/skills/plumbline/LICENSE.txt')), /Unexpected or missing plugin payload/],
  ['changed license', (dir) => writeFileSync(join(dir, 'plugins/plumbline/LICENSE'), 'not the license'), /License differs/],
  ['broken skill reference', (dir) => {
    const file = join(dir, 'plugins/plumbline/skills/plumbline/SKILL.md');
    writeFileSync(file, readFileSync(file, 'utf8').replace('references/check-selection.md', 'references/missing.md'));
  }, /ENOENT/],
  ['unexpected hook payload', (dir) => writeFileSync(join(dir, 'plugins/plumbline/hooks.json'), '{}'), /Unexpected or missing plugin payload/],
  ['missing icon', (dir) => rmSync(join(dir, 'plugins/plumbline/assets/plumbline.png')), /Unexpected or missing plugin payload/],
  ['escaping icon reference', (dir) => editJson(dir, 'plugins/plumbline/plugin.json', (v) => { v.extensions['com.openai'].interface.logo = '../outside.png'; }), /Wrong branding asset reference: logo/],
  ['damaged icon bytes', (dir) => {
    const file = join(dir, 'plugins/plumbline/assets/plumbline.png');
    const bytes = readFileSync(file);
    bytes[0] = 0;
    writeFileSync(file, bytes);
  }, /Invalid PNG signature/],
  ['nonsquare icon', (dir) => {
    const file = join(dir, 'plugins/plumbline/assets/plumbline.png');
    const bytes = readFileSync(file);
    bytes.writeUInt32BE(96, 20);
    writeFileSync(file, bytes);
  }, /Icon must be square/],
];
for (const [name, mutate, expected] of controls) {
  test(`rejects ${name} through the actual entry point in a disposable copy`, () => {
    const temporaryRoot = realpathSync(tmpdir());
    const dir = mkdtempSync(join(temporaryRoot, 'plumbline-distribution-'));
    try {
      for (const path of ['.agents/plugins', '.claude-plugin', 'plugins/plumbline', 'LICENSE']) {
        const dest = join(dir, path);
        mkdirSync(dirname(dest), { recursive: true });
        cpSync(join(root, path), dest, { recursive: true });
      }
      mutate(dir);
      const result = run(dir);
      assert.equal(result.status, 1, result.stdout + result.stderr);
      assert.match(result.stderr, expected);
    } finally {
      assert(isAbsolute(dir) && dirname(dir) === temporaryRoot && basename(dir).startsWith('plumbline-distribution-'));
      rmSync(dir, { recursive: true, force: true });
    }
  });
}
