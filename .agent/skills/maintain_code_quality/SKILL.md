---
name: maintain_code_quality
description: Systematically enforces type safety, linting rules, and build integrity to pass the "No Regrets" gate.
---

# Code Quality Maintenance Standard Operating Procedure

## 1. Type Safety Audit

**Goal:** Eliminate loose typing that hides bugs.

1.  **Search for `any`**: Run `grep -r "any" src/ | grep -v "eslint-disable"` to find explicit usage of `any`.
2.  **Replacement Strategy**:
    - **Data Models**: Define an Interface matching the DB schema or API response.
    - **Props**: Define a strict Props interface.
    - **Generics**: Use `Record<string, unknown>` instead of `any` / `object` if the structure is truly dynamic, then cast narrowly when using.

## 2. React Health Check

**Goal:** Ensure stability and performance.

1.  **Lint Scan**: Run `npm run lint`. Focus on:
    - `react-hooks/exhaustive-deps`: Do NOT suppress this. Fix it by wrapping functions in `useCallback` or using `ref` for stable values.
    - `impure-render`: Ensure no `Math.random()` or side-effects in the component body. Use `useMemo` or `useEffect`.
2.  **Effect Sanitation**:
    - Check for `setState` calls inside `useEffect`. Can this be derived state? Can it be an initial value?

## 3. Content Integrity

**Goal:** Prevent build-time syntax errors.

1.  **Entity Search**: Check for unescaped characters in JSX text nodes.
    - Replace `'` with `&apos;`
    - Replace `"` with `&quot;` (inside text like `p`, `span`, etc)

## 4. Verification (The "No Regrets" Gate)

**Goal:** Prove it works.

1.  **Type Check**: `npx tsc --noEmit` (Must be silent)
2.  **Lint Check**: `npm run lint` (Must be clean or warnings only)
3.  **Test**: `MOCK_AI_MODE=true npm run test`
