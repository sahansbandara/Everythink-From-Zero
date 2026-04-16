# Core JavaScript for React

## Variables
```javascript
const name = "Sahan";
let count = 0;
```

## Functions
```javascript
function greet(name) {
  return `Hello ${name}`;
}
```

## Arrow functions
```javascript
const greet = (name) => `Hello ${name}`;
```

## Arrays
```javascript
const items = ["React", "Vite", "Node"];
```

## Objects
```javascript
const user = { name: "Sahan", age: 23 };
```

## Conditions
```javascript
if (count > 0) {
  console.log("Positive");
}
```

## Loops / mapping
```javascript
items.map((item) => item.toUpperCase());
```

## Destructuring
```javascript
const { name, age } = user;
```

## Modules
```javascript
export default App;
import App from "./App";
```

## Why this matters in React
React code is full of:
- functions
- objects
- arrays
- `.map()`
- imports/exports
- destructuring
