# Forms and Controlled Inputs

## Why forms matter
Most real apps use forms:
- login
- register
- search
- booking
- checkout
- settings

## Controlled input
The input value is controlled by React state.

Example:
```jsx
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}
```

## Benefits
- validation is easier
- state is predictable
- data submission is cleaner

## Common mistake
Forgetting to update state on `onChange`, causing the input to feel broken.
