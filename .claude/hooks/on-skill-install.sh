#!/usr/bin/env bash
# PostToolUse hook: fires after every Bash call. If the command was a skill
# install, inject a governance reminder into the next turn so Claude must
# audit the inventory before proceeding.

set -euo pipefail

input=$(cat)
cmd=$(echo "$input" | jq -r '.tool_input.command // empty')

# Trigger patterns — keep narrow to avoid noise.
if echo "$cmd" | grep -qE '(npx[[:space:]]+skills[[:space:]]+add|claude-code-templates.*--skill|claude[[:space:]]+plugin[[:space:]]+install)'; then
  cat <<'EOF'
SKILL_INSTALL_DETECTED

A new skill or plugin was just installed. Before continuing with the user's
next request, perform the skill-governance audit defined in CLAUDE.md
(section: "Skill governance"). At minimum:

  1. List the current skill inventory in .agents/skills/ and .claude/skills/.
  2. Identify any redundancy with the newly installed skill.
  3. Identify any skill that the new one now replaces or obsoletes.
  4. Verify the "Installed skills" table in CLAUDE.md is still accurate;
     if not, propose the diff.
  5. Report findings to the user, then proceed with their next request.

Do not skip this audit. The user installed the hook specifically to enforce it.
EOF
fi
