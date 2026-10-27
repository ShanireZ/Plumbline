#!/usr/bin/env bash
set -euo pipefail

if (($# != 0)); then
  echo 'usage: tests/governance/check-dco.sh' >&2
  exit 2
fi

dco_test_root=''
dco_test_parent=''

cleanup() {
  if [[ -n "$dco_test_root" && -d "$dco_test_root" && ! -L "$dco_test_root" &&
        "$dco_test_root" == "$dco_test_parent"/plumbline-dco.* &&
        "$(cd "$dco_test_root" && pwd -P)" == "$dco_test_root" ]]; then
    rm -rf -- "$dco_test_root"
  fi
}
trap cleanup EXIT

ascii_lower() {
  LC_ALL=C tr 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 'abcdefghijklmnopqrstuvwxyz'
}

has_matching_signoff() {
  local repository="$1"
  local commit="$2"
  local author_email="$3"
  local author_email_folded line token value trailer_email

  author_email_folded="$(printf '%s' "$author_email" | ascii_lower)"
  while IFS= read -r line; do
    token="${line%%:*}"
    if [[ "$(printf '%s' "$token" | ascii_lower)" != 'signed-off-by' ]]; then
      continue
    fi

    value="${line#*:}"
    value="${value# }"
    if [[ "$value" =~ \<([^\<\>]+)\>[[:space:]]*$ ]]; then
      trailer_email="${BASH_REMATCH[1]}"
      if [[ "$(printf '%s' "$trailer_email" | ascii_lower)" == "$author_email_folded" ]]; then
        return 0
      fi
    fi
  done < <(git -C "$repository" show --no-patch --format=%B "$commit" | git -C "$repository" interpret-trailers --parse)

  return 1
}

validate_repository() {
  local repository="$1"
  local commit author_email commits shallow
  local ordinary=0
  local -a violations=()

  shallow="$(git -C "$repository" rev-parse --is-shallow-repository)" || return 1
  if [[ "$shallow" != false ]]; then
    echo 'DCO validation refused: repository history is shallow.' >&2
    return 1
  fi

  commits="$(git -C "$repository" rev-list --reverse --topo-order HEAD)" || return 1
  while IFS= read -r commit; do
    author_email="$(git -C "$repository" show --no-patch --format=%ae "$commit")" || return 1
    if has_matching_signoff "$repository" "$commit" "$author_email"; then
      ordinary=$((ordinary + 1))
    else
      violations+=("$commit|$author_email")
    fi
  done <<<"$commits"

  printf 'DCO coverage counts: author-signoffs=%s\n' "$ordinary"
  if ((${#violations[@]} > 0)); then
    echo 'DCO validation failed; commits without an author-email-matching Signed-off-by trailer:' >&2
    local violation
    for violation in "${violations[@]}"; do
      printf '%s author-email=%s\n' "${violation%%|*}" "${violation#*|}" >&2
    done
    return 1
  fi
}

expect_commit_failure() {
  local repository="$1"
  local expected_commit="$2"
  local output_file="$3"

  if validate_repository "$repository" >"$output_file" 2>&1; then
    echo "DCO negative control unexpectedly passed: $expected_commit" >&2
    return 1
  fi
  if ! grep -Fq "$expected_commit" "$output_file"; then
    echo "DCO negative control did not report the expected full commit ID: $expected_commit" >&2
    return 1
  fi
}

run_negative_controls() {
  local fixture_repository shallow_repository unsigned_commit wrong_email_commit shallow_head

  dco_test_parent="$(cd "${TMPDIR:-/tmp}" && pwd -P)"
  dco_test_root="$(mktemp -d "$dco_test_parent/plumbline-dco.XXXXXX")"
  fixture_repository="$dco_test_root/history"
  shallow_repository="$dco_test_root/shallow"

  git init --quiet --initial-branch=main "$fixture_repository"
  git -C "$fixture_repository" config user.name 'DCO Fixture Author'
  git -C "$fixture_repository" config user.email 'fixture.author@example.com'

  printf 'signed\n' >"$fixture_repository/fixture.txt"
  git -C "$fixture_repository" add fixture.txt
  git -C "$fixture_repository" commit --quiet --signoff --message 'test: signed control'
  validate_repository "$fixture_repository"

  printf 'unsigned\n' >>"$fixture_repository/fixture.txt"
  git -C "$fixture_repository" add fixture.txt
  git -C "$fixture_repository" commit --quiet --message 'test: unsigned control'
  unsigned_commit="$(git -C "$fixture_repository" rev-parse HEAD)"
  expect_commit_failure "$fixture_repository" "$unsigned_commit" "$dco_test_root/unsigned.log"

  git -C "$fixture_repository" commit --quiet --amend --message $'test: wrong-email control\n\nSigned-off-by: Other Person <other@example.com>'
  wrong_email_commit="$(git -C "$fixture_repository" rev-parse HEAD)"
  expect_commit_failure "$fixture_repository" "$wrong_email_commit" "$dco_test_root/wrong-email.log"

  git -C "$fixture_repository" commit --quiet --amend --message $'test: restored signed control\n\nSigned-off-by: Display Name May Differ <FIXTURE.AUTHOR@example.com>'
  validate_repository "$fixture_repository"

  git init --quiet --initial-branch=main "$shallow_repository"
  git -C "$shallow_repository" config user.name 'DCO Fixture Author'
  git -C "$shallow_repository" config user.email 'fixture.author@example.com'
  printf 'shallow\n' >"$shallow_repository/fixture.txt"
  git -C "$shallow_repository" add fixture.txt
  git -C "$shallow_repository" commit --quiet --signoff --message 'test: shallow control'
  shallow_head="$(git -C "$shallow_repository" rev-parse HEAD)"
  printf '%s\n' "$shallow_head" >"$shallow_repository/.git/shallow"
  if validate_repository "$shallow_repository" >"$dco_test_root/shallow.log" 2>&1; then
    echo 'DCO shallow-history negative control unexpectedly passed.' >&2
    return 1
  fi
  if ! grep -Fq 'DCO validation refused: repository history is shallow.' "$dco_test_root/shallow.log"; then
    echo 'DCO shallow-history negative control did not report the expected refusal.' >&2
    return 1
  fi

  echo 'DCO negative controls passed: unsigned, wrong-email, and shallow histories were rejected.'
}

readonly REPOSITORY_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
run_negative_controls
validate_repository "$REPOSITORY_ROOT"
echo 'DCO history validation passed for every commit reachable from HEAD.'
