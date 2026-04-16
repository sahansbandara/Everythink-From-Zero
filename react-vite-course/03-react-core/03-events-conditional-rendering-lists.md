# Events, Conditional Rendering, and Lists

## Events
React handles user actions with event props.

Examples:
- `onClick`
- `onChange`
- `onSubmit`

Example:
```jsx
<button onClick={handleClick}>Click</button>
```

## Conditional rendering
Show different UI depending on a condition.

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

## List rendering
Render items from an array.

```jsx
const items = ["React", "Vite", "Node"];

<ul>
  {items.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>
```

## Why `key` matters
React uses `key` to track items efficiently in lists.

## Common mistake
Using array index as key in unstable lists when items can move/change.
