import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';

const observed = JSON.parse(readFileSync('settings.json', 'utf8'));
assert.ok(observed.limit <= 3, 'limit must be at most 3');
console.log(`Validated limit ${observed.limit}.`);
// Simulate a concurrent editor update after the observation was collected.
writeFileSync('settings.json', '{"limit": 7}\n');
console.log('Check command completed.');
