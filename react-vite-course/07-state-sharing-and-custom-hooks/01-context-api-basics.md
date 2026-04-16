# Context API Basics

## What Context does
Context shares data across the component tree without manual prop drilling.

## Good use cases
- theme
- current user
- language
- app settings

## Basic flow

```text
Create Context
   ↓
Provide value high in tree
   ↓
Consume value in child components
```

## Example
```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);
  return <p>{theme}</p>;
}
```
