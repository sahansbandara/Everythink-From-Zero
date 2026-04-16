# Components, JSX, Props, and State

## Components
A component is a reusable UI piece.

Example:
```jsx
function Button() {
  return <button>Save</button>;
}
```

## JSX
JSX is HTML-like syntax inside JavaScript.

Example:
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

### Important
JSX is not HTML.
It gets transformed into JavaScript.

## Props
Props are inputs passed into a component.

Example:
```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Usage:
```jsx
<Welcome name="Sahan" />
```

## State
State is internal data that changes over time.

Example:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Visual model

```text
Props = data given to component
State = data managed inside component
```
