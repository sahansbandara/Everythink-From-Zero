# localStorage Basics

## What is localStorage?
A browser storage mechanism that stores small string-based data.

## Common uses
- theme preference
- saved form drafts
- simple persistence
- onboarding status

## Example save
```javascript
localStorage.setItem("theme", "dark");
```

## Example read
```javascript
const theme = localStorage.getItem("theme");
```

## In React
Often used with `useEffect`.

Example:
```jsx
useEffect(() => {
  localStorage.setItem("count", count);
}, [count]);
```

## Important
localStorage stores strings.
Convert objects using `JSON.stringify()` and `JSON.parse()`.
