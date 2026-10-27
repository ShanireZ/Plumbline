# Pagination fixture

The fix should return no pages for empty input. Ordinary grouping and invalid
page-size rejection must continue working. `before/pagination.mjs` is the supplied
pre-fix version. Verify only; do not edit source or tests.

- Current: `node check.mjs`
- Before: `node check.mjs --before`

Checks create `check-runs.txt` as an ordinary execution record.
