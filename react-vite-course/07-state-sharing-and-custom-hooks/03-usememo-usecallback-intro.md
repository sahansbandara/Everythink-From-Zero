# useMemo and useCallback Intro

## What they are
Optimization hooks.

### `useMemo`
Memoizes a calculated value.

### `useCallback`
Memoizes a function reference.

## Important beginner rule
Do not use these everywhere just because you saw them in a tutorial.
Unnecessary optimization often makes code worse.

## Use them when:
- expensive calculations are repeated
- child components re-render unnecessarily due to changing function references
