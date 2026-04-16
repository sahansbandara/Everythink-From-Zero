# Async/Await and Fetch

## Why this matters
React apps often request data from APIs.

## Promise idea
A Promise represents a value you will get later.

## Async/Await
Used to write asynchronous code more cleanly.

Example:
```javascript
async function getUsers() {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
}
```

## Basic fetch flow

```text
Call API
  ↓
Wait for response
  ↓
Convert response data
  ↓
Use result
```

## Error handling
```javascript
async function loadData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed:", error);
  }
}
```

## Common mistake
Using `await` outside an async function in normal contexts.
