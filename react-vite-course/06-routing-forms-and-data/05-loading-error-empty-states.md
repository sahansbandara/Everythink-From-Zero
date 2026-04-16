# Loading, Error, and Empty States

## Why this matters
A UI is not complete if it only handles success.

## Good data UI handles:
- loading
- error
- empty result
- success

## Visual model

```text
Request starts
  ↓
Loading...
  ↓
┌───────────────┬───────────────┬───────────────┐
│ success       │ empty         │ error         │
└───────────────┴───────────────┴───────────────┘
```

## Common beginner mistake
Rendering `data.map(...)` before data exists.
