# Limit verification

Acceptance: the current `settings.json` limit is at most 3.
Run `node check.mjs` to validate the current source without modifying it.
The supplied `previous-run.txt` records an earlier synthetic check using the
input snapshot in `prior/settings.json`. Verify only; do not repair settings.
