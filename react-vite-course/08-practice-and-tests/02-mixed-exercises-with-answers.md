# Mixed Exercises with Answers

## Exercise 1: classify each item
Items:
- React
- Vite
- HTML
- CSS
- JavaScript
- Node.js
- npm

Correct:
- React → library
- Vite → tool
- HTML → markup language
- CSS → style language
- JavaScript → programming language
- Node.js → runtime
- npm → package manager

## Exercise 2: identify props vs state
1. Name passed from parent to child → props
2. Current count inside counter component → state
3. Current email input value → state
4. Theme value passed from App to child → props
5. Auth value shared globally by provider → context/shared state

## Exercise 3: fix the JSX issue
Wrong:
```jsx
<div class="box">Hello</div>
```

Correct:
```jsx
<div className="box">Hello</div>
```

## Exercise 4: fix list rendering
Bad:
```jsx
items.map((item) => <li>{item}</li>)
```

Better:
```jsx
items.map((item) => <li key={item}>{item}</li>)
```

## Exercise 5: create the correct command order
Correct:
```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```
