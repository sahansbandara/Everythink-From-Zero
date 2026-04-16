# Sample Code Skeletons

## `main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## `App.jsx`
```jsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>React + Vite App</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </main>
  );
}
```

## Router skeleton
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```
