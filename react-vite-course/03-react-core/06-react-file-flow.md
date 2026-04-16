# React File Flow

## Typical entry flow

```text
index.html
  ↓
main.jsx
  ↓
App.jsx
  ↓
components/pages
```

## What each does

### `index.html`
Contains the root element:
```html
<div id="root"></div>
```

### `main.jsx`
Connects the React app to the root.

### `App.jsx`
Usually your top-level component.

## Example
```jsx
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```
