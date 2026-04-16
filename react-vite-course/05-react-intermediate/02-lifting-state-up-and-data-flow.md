# Lifting State Up and Data Flow

## Problem
Two sibling components need the same data.

## Solution
Move state to their closest common parent.

## Visual model

```text
Parent
 ├─ Child A
 └─ Child B

Shared data lives in Parent
Props flow down to Child A and Child B
```

## Why this matters
This is how React data flow stays predictable.

## Rule
In basic React, data usually flows **down** from parent to child.
