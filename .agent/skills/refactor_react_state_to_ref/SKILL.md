---
name: refactor_react_state_to_ref
description: Safely refactor React `useState` to `useRef` to improve performance or remove dependency loops.
---

# Refactor React State to Ref

Use this workflow when you want to convert a state variable to a ref. This is common for:

- Tracking values that don't need to trigger re-renders (e.g., timers, previous values, scroll positions).
- Breaking `useEffect` dependency loops.
- Improving performance by avoiding unnecessary renders.

## ⚠️ Critical Warning

**Refs do NOT trigger re-renders.**
If the variable is used in the JSX (e.g., `<div>{count}</div>`), you CANNOT straightforwardly replace it with a ref. The UI will not update when the ref changes.

## Steps

1.  **Declaration**: Replace `useState` with `useRef`.

    ```tsx
    // Before
    const [value, setValue] = useState(initial);

    // After
    const value = useRef(initial);
    ```

2.  **Initialization Check**: Ensure `useRef` is imported from 'react'.

3.  **Find & Replace Reads**:
    - Search for usages of the state variable `value`.
    - Replace with `value.current`.

4.  **Find & Replace Writes**:
    - Search for usages of `setValue`.
    - **Direct Update**: `setValue(5)` → `value.current = 5`
    - **Functional Update**: `setValue(prev => prev + 1)` → `value.current += 1`

5.  **Clean Dependencies**:
    - Remove the variable from all `useEffect` dependency arrays.
    - _Reason_: Refs are stable and mutable; they don't change identity, so they shouldn't be dependencies.

6.  **Verification (The "Crash" Check)**:
    - **Did you delete `setValue`?** Ensure no stray calls remain.
    - **Did you initialize the ref?** Ensure `const value = useRef(...)` is in the component body.
    - **Is it used in JSX?** If yes, confirm you are okay with it being stale until the next render.

## Examples

### ❌ BAD Implementation

```tsx
const MyComponent = () => {
  // Refactor: "I'll just change useState to useRef"
  // ERROR 1: Forgot to initialize or import useRef
  // ERROR 2: Left the setter in the destructuring
  const [count, setCount] = useRef(0);

  useEffect(() => {
    // ERROR 3: Still a dependency? (Not a crash, but useless)
    console.log(count);
  }, [count]);

  const handleClick = () => {
    // ERROR 4: Calling a setter that doesn't exist
    setCount(5);
  };

  return <button onClick={handleClick}>Click</button>;
};
```

### ✅ GOOD Implementation

```tsx
import { useRef, useEffect } from 'react';

const MyComponent = () => {
  // Correct declaration
  const count = useRef(0);

  useEffect(() => {
    // Correct: Access via .current
    console.log(count.current);
    // Correct: Removed from dependency array
  }, []);

  const handleClick = () => {
    // Correct: Direct mutation
    count.current = 5;
  };

  return <button onClick={handleClick}>Click</button>;
};
```
