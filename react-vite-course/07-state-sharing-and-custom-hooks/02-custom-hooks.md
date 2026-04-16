# Custom Hooks

## What a custom hook is
A reusable function that contains React hook logic.

## Why use custom hooks
To avoid repeating logic across multiple components.

## Example
```jsx
import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```

## Naming rule
Custom hooks usually start with `use`.
