import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const text = readFileSync('README.md', 'utf8');
const targets = [...text.matchAll(/\]\(([^)]+)\)/g)].map(match => match[1]);
assert.ok(targets.length > 0, 'README contains links');
for (const target of targets) assert.ok(existsSync(target), `Missing target: ${target}`);
console.log(`Checked ${targets.length} README link; all targets exist.`);
