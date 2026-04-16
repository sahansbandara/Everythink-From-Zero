# Debugging Playbook

## When something breaks, ask:

### 1. Is the app running?
- Did `npm install` run?
- Did `npm run dev` start?
- Are there terminal errors?

### 2. Is the component rendering?
- Add `console.log("rendered")`
- Check route is correct
- Check imports/exports

### 3. Is the state correct?
- Log the state
- Check when it changes
- Check whether event handlers fire

### 4. Is the data shape correct?
- Log API response
- Confirm expected keys exist
- Do not assume structure

### 5. Is JSX valid?
- Correct closing tags?
- `className` not `class`?
- Proper parent wrapper?

### 6. Is the hook usage correct?
- Hooks only at top level
- Not inside conditions/loops
- Dependency array correct?

### 7. Is there async timing trouble?
- Data might not exist on first render
- Handle loading and null values

## Debug sequence

```text
Read error
 ↓
Reproduce
 ↓
Find file/line
 ↓
Check data/state
 ↓
Reduce problem
 ↓
Fix one thing at a time
```
