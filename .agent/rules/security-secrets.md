# SECRET SECURITY SOP
TRIGGER: Any shell command requiring environment variables (Database, Keys, Auth).

## 1. INLINE SECRET SCAN
- **Pattern Match:** Does command look like `DATABASE_URL=... cmd`?
- **Verdict:**
  - IF YES -> **DENY**. Security Violation.
  - IF NO -> Proceed to Step 2.

## 2. WRAPPER ENFORCEMENT
- **Requirement:** Must use `dotenv-cli` or `npm run` scripts.
- **Valid Patterns:**
  - `npm run db:studio`
  - `npx dotenv -e .env.local -- npx tsx ...`
  - `npm run secure:exec ...`

## 3. LOG AUDIT
- **Constraint:** NEVER verify a secret by printing it to stdout.
- **Safe Check:** `grep -q DATABASE_URL .env.local && echo "Exists"`