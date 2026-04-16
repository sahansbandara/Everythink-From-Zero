# Form Validation Basics

## Validation means
Checking whether user input is acceptable.

## Examples
- required fields
- email format
- password length
- number range
- confirm password match

## Simple example
```jsx
if (!email.includes("@")) {
  setError("Invalid email");
}
```

## Validation layers
### Frontend validation
Immediate user feedback.

### Backend validation
Final protection and enforcement.

## Important
Frontend validation improves UX.
Backend validation protects data integrity.
You need both in real apps.
