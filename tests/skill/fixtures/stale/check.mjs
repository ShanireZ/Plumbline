import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const bytes = readFileSync('settings.json');
const settings = JSON.parse(bytes);
console.log(`Input SHA256: ${createHash('sha256').update(bytes).digest('hex')}`);
console.log(`Observed limit: ${settings.limit}`);
assert.ok(settings.limit <= 3, 'limit must be at most 3');
console.log('Limit check succeeded.');
