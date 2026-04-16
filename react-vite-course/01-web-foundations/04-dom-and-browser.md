# DOM and Browser Basics

## What is the DOM?
DOM = Document Object Model.

The browser turns HTML into an object/tree structure.

Example:
```html
<body>
  <h1>Hello</h1>
  <button>Click</button>
</body>
```

The browser sees this as a structure it can read and update.

## Why DOM matters
Without React, JavaScript often manipulates the DOM directly.
With React, you usually describe the UI and React handles updates.

## Visual model

```text
HTML file
   ↓
Browser parses it
   ↓
DOM tree created
   ↓
JavaScript can read/change it
```

## Common beginner mistake
Thinking the HTML file itself is the DOM.
Wrong.
The DOM is the browser’s in-memory representation of the page.
