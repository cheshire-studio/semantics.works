---
trigger: always_on
---

# GIT WORKFLOW SOP

TRIGGER: User asks to "commit", "push", "save", or "merge".

## 1. THE "NO REGRETS" GATE (Quality)

- **Action:** Before staging files, run the "Health Check":
  1. **Types:** `npx tsc --noEmit` (Must pass. No broken types.)
  2. **Lint:** `npm run lint` (Must pass.)
  3. **Tests:** `npm run test` (Must pass in `MOCK_AI_MODE=true`.)
- **Constraint:** IF any fail -> **STOP**. Fix the error. Do not force commit.

## 2. THE "NO SECRETS" GATE (Security)

- **Scan:** Check staged files (`git diff --cached --name-only`).
  - **Block:** `.env`, `.env.local`, `.env.production`.
  - **Block:** `*_key`, `password`, `secret` (case insensitive text search).
- **Verify:** Ensure no hardcoded credentials were added to source files.

## 3. THE "MEMORY" GATE (Documentation)

- **Question:** "Did this work change how the system behaves?"
- **If YES:**
  - [ ] Have you updated `artifacts/architecture/lessons_learned.md`?
  - [ ] Have you updated the relevant `artifacts/plans/` status?
  - [ ] If architecture changed, is there a new ADR in `artifacts/decisions/`?
- **Question:** "Did we learn something?"
- **If YES:**
  - [ ] Have you updated `artifacts/architecture/lessons_learned.md`?
  - [ ] Execute `.agent/skills/crystallize-workflow/SKILL.md` if it wasn't already executed within the last 5 commands.
- **Constraint:** Code and Documentation must be committed _together_.

## 4. THE SEMANTIC COMMIT (Format)

- **Format:** `type(scope): description`
- **Types:**
  - `feat:` New feature (correlates with a Plan).
  - `fix:` Bug fix.
  - `docs:` Documentation only.
  - `refactor:` Code change that neither fixes a bug nor adds a feature.
  - `chore:` Build process, deps, auxiliary tools.
- **Example:** `feat(ai-pipeline): implement retry logic for suno api`
