# Fetching API Data in React

## Basic idea
A component loads, fetches data, stores it in state, then displays it.

## Example
```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## UI states you should think about
- loading
- success
- empty
- error
