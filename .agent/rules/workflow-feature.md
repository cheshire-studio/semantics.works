---
trigger: always_on
---

# FEATURE DEVELOPMENT SOP

TRIGGER: User asks to "implement", "create", or "build" a new feature.

## 1. SEARCH & RECALL

- **Check:** Does a plan already exist in `artifacts/plans/`?
- **Check:** Read `artifacts/architecture/core_architecture_v2.md` for existing patterns.

## 2. THE ARTIFACT GATE

- **Condition:** NO CODE is written until a Plan Artifact exists.
- **Action (If missing):**
  1. Create `artifacts/plans/implementation_plan_[feature].md`.
  2. Outline: Components, DB Changes, API Routes, Zod Schemas.
  3. **STOP** and ask for User Approval.

## 3. NEW GIT BRANCH

- **Action:** CREATE a new git branch and develop the FEATURE within the new branch.

## 4. IMPLEMENTATION LOOP

- **Step 1:** Define Zod Schemas (Type Safety First).
- **Step 2:** Write Unit Test (Red State).
- **Step 3:** Implement Logic (Server Actions/Libs).
- **Step 4:** Implement UI (Components).
- **Step 5:** Run Tests (Green State).

## 5. CLEANUP

- **Action:** Update `artifacts/architecture/lessons_learned.md` if new patterns were discovered.

## 6. GIT

- **Constraint:** Push to origin ONLY if explicitely said.
