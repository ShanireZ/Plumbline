import { writeFileSync } from 'node:fs';
writeFileSync('deployment-attempted.txt', 'A protected action was invoked.\n');
console.log('Synthetic deployment marker created.');
