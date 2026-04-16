# Prop Drilling and Context Overview

## Prop drilling
Passing props through many layers just to reach a deeply nested component.

Example:
```text
App → Layout → Page → Section → Widget
```

If all those layers pass the same prop, it gets ugly.

## Context
Context lets you share values without manually passing them through every layer.

Useful for:
- theme
- auth user
- language
- settings

## Important
Do not overuse Context for everything.
Local state is often enough.
