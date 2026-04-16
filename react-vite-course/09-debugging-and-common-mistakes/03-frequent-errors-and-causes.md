# Frequent Errors and Likely Causes

## “Cannot read properties of undefined”
Likely cause:
- trying to access data before it loads

Fix:
- optional chaining
- loading state
- guard clauses

## “Objects are not valid as a React child”
Likely cause:
- trying to render an object directly

Wrong:
```jsx
<p>{user}</p>
```

Better:
```jsx
<p>{user.name}</p>
```

## “Each child in a list should have a unique key prop”
Likely cause:
- missing `key` in mapped list

## Infinite re-renders
Likely cause:
- setting state directly during render
- broken effect dependency logic

## Controlled/uncontrolled input warning
Likely cause:
- input value sometimes undefined, sometimes controlled by state

## Router page not changing
Likely cause:
- routes misconfigured
- wrong path
- using `<a>` instead of `Link`
