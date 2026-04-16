# useEffect for Beginners

## What `useEffect` does
It runs code after rendering when side effects are needed.

## Example
```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

## Dependency array basics

### `[]`
Run once after first render.

### `[value]`
Run when `value` changes.

### no dependency array
Run after every render.

## Common use cases
- fetch data
- save to localStorage
- set interval
- listen for resize
- cleanup subscriptions

## Cleanup example
```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

## Common mistake
Triggering an infinite loop by updating state in an effect without proper dependencies.
