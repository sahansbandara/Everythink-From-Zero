# SE2020 – Web Technologies and Mobile — Lecture 09
## ReactJS Part 02

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Module code | SE2020 |
| Module name | Web Technologies and Mobile |
| Lecture number | Lecture 09 |
| Lecture title | ReactJS Part 02 |
| Main focus | Advanced React state management, Redux Toolkit, React 18 features, Suspense, SSR, CSR |
| Total PDF pages/slides | 50 |

---

# Table of Contents

- [Page 01 — Title Page](#page-01-title-page)
- [Page 02 — Why Do We Need Advanced State Management?](#page-02-why-do-we-need-advanced-state-management)
- [Page 03 — Why Do We Need Advanced State Management?](#page-03-why-do-we-need-advanced-state-management)
- [Page 04 — What is the Context API?](#page-04-what-is-the-context-api)
- [Page 05 — What is the Context API?](#page-05-what-is-the-context-api)
- [Page 06 — Why Do We Need the Context API?](#page-06-why-do-we-need-the-context-api)
- [Page 07 — Why Do We Need the Context API?](#page-07-why-do-we-need-the-context-api)
- [Page 08 — How Does the Context API Work?](#page-08-how-does-the-context-api-work)
- [Page 09 — Creating a Context (Step-by-Step Example)](#page-09-creating-a-context-step-by-step-example)
- [Page 10 — Creating a Context (Step-by-Step Example)](#page-10-creating-a-context-step-by-step-example)
- [Page 11 — Creating a Context (Step-by-Step Example)](#page-11-creating-a-context-step-by-step-example)
- [Page 12 — Consuming Context Using useContext()](#page-12-consuming-context-using-usecontext)
- [Page 13 — Consuming Context Using useContext()](#page-13-consuming-context-using-usecontext)
- [Page 14 — When Should You Use the Context API?](#page-14-when-should-you-use-the-context-api)
- [Page 15 — When Should You Use the Context API?](#page-15-when-should-you-use-the-context-api)
- [Page 16 — Limitations of the Context API](#page-16-limitations-of-the-context-api)
- [Page 17 — Limitations of the Context API](#page-17-limitations-of-the-context-api)
- [Page 18 — Introduction to Redux](#page-18-introduction-to-redux)
- [Page 19 — Introduction to Redux](#page-19-introduction-to-redux)
- [Page 20 — Introduction to Redux](#page-20-introduction-to-redux)
- [Page 21 — Why Use React Redux?](#page-21-why-use-react-redux)
- [Page 22 — Why Use React Redux?](#page-22-why-use-react-redux)
- [Page 23 — Redux Toolkit: The Modern Way to Use Redux](#page-23-redux-toolkit-the-modern-way-to-use-redux)
- [Page 24 — Redux Toolkit: The Modern Way to Use Redux](#page-24-redux-toolkit-the-modern-way-to-use-redux)
- [Page 25 — Installing Redux Toolkit & React Redux](#page-25-installing-redux-toolkit-react-redux)
- [Page 26 — Using Redux State Inside React Components](#page-26-using-redux-state-inside-react-components)
- [Page 27 — Using Redux State Inside React Components](#page-27-using-redux-state-inside-react-components)
- [Page 28 — Using Redux State Inside React Components](#page-28-using-redux-state-inside-react-components)
- [Page 29 — Context API vs Redux Toolkit](#page-29-context-api-vs-redux-toolkit)
- [Page 30 — Context API vs Redux Toolkit](#page-30-context-api-vs-redux-toolkit)
- [Page 31 — Advance React](#page-31-advance-react)
- [Page 32 — Concurrent Rendering](#page-32-concurrent-rendering)
- [Page 33 — Concurrent Rendering](#page-33-concurrent-rendering)
- [Page 34 — useTransition: Prioritizing UI Updates (React 18)](#page-34-usetransition-prioritizing-ui-updates-react-18)
- [Page 35 — useTransition: Prioritizing UI Updates (React 18)](#page-35-usetransition-prioritizing-ui-updates-react-18)
- [Page 36 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios](#page-36-usedeferredvalue-avoid-lag-in-fast-typing-scenarios)
- [Page 37 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios](#page-37-usedeferredvalue-avoid-lag-in-fast-typing-scenarios)
- [Page 38 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios](#page-38-usedeferredvalue-avoid-lag-in-fast-typing-scenarios)
- [Page 39 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios](#page-39-usedeferredvalue-avoid-lag-in-fast-typing-scenarios)
- [Page 40 — React Suspense](#page-40-react-suspense)
- [Page 41 — React Suspense](#page-41-react-suspense)
- [Page 42 — React Suspense](#page-42-react-suspense)
- [Page 43 — Server-Side Rendering (SSR) in React](#page-43-server-side-rendering-ssr-in-react)
- [Page 44 — Server-Side Rendering (SSR) in React](#page-44-server-side-rendering-ssr-in-react)
- [Page 45 — Server-Side Rendering (SSR) in React](#page-45-server-side-rendering-ssr-in-react)
- [Page 46 — Server-Side Rendering (SSR) in React](#page-46-server-side-rendering-ssr-in-react)
- [Page 47 — Client-Side Rendering (CSR) in React](#page-47-client-side-rendering-csr-in-react)
- [Page 48 — Client-Side Rendering (CSR) in React](#page-48-client-side-rendering-csr-in-react)
- [Page 49 — Client-Side Rendering (CSR) in React](#page-49-client-side-rendering-csr-in-react)
- [Page 50 — Thank You](#page-50-thank-you)
- [Full Lecture Summary](#full-lecture-summary)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Important Code Snippets](#important-code-snippets)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Lecture Weight / Exam Importance Table

| Pages | Topic | Exam Importance | Reason |
|---|---|---|---|
| 01 | Lecture title | Low | Metadata only. |
| 02–03 | Why advanced state management is needed | High | Foundation for Context API and Redux questions. |
| 04–17 | Context API | Very High | Core React topic; likely short-answer, code, and comparison questions. |
| 18–30 | Redux, React Redux, Redux Toolkit | Very High | Large part of lecture; key comparison and practical state-management theory. |
| 31–39 | Concurrent Rendering, useTransition, useDeferredValue | High | React 18 theory and performance-focused questions. |
| 40–42 | Suspense | High | Important modern React loading and lazy-loading concept. |
| 43–46 | SSR | High | Likely comparison with CSR and SEO/performance questions. |
| 47–49 | CSR | High | Likely comparison with SSR and rendering-strategy questions. |
| 50 | Thank You | Low | End slide only. |

---

# Page-by-Page Lecture Notes

## Page 01 — Title Page

### Original Slide Content

SE2020 – Web Technologies and Mobile
              Lecture 09

          ReactJS Part 02

### Visual Explanation

Title slide with SLIIT and Faculty of Computing branding. It identifies the module as SE2020 – Web Technologies and Mobile, Lecture 09, ReactJS Part 02.

### Explanation

This page introduces the module, lecture number, and lecture title.

### Exam Tip

Low exam priority. Use this page only to identify lecture metadata.

### Common Mistake

No major common mistake.

---

## Page 02 — Why Do We Need Advanced State Management?

### Original Slide Content

Why Do We Need Advanced State Management?
 The Problem with Scaling React Apps
     ▪ As applications grow, state becomes more complex and harder to manage.
     ▪ Components begin to:
          •   Share state across many levels
          •   Pass too many props (prop-drilling)
          •   Re-render unnecessarily
     ▪ Local state (useState) becomes insufficient when:
          •   Multiple components depend on the same data
          •   Data updates frequently (API calls, authentication, UI themes, cart items)
          •   Global configuration is needed (language, dark mode, user role)

### Visual Explanation

The visual on the right shows a top component distributing state through many lower components. It represents scaling problems in React apps, especially prop drilling and many components depending on shared data.

### Explanation

React local state works well for small, isolated components. As the app grows, the same data may be required by distant components. Passing props through every intermediate component becomes messy, repeated, and slow. Advanced state management solves this by making shared state easier to access, update, debug, and scale.

### Visual/Text Diagram

```text
Component tree with shared state problem:

App State
   ↓
Parent
   ↓ props
Child
   ↓ props
Grandchild
   ↓ props
Target Component
```

### Exam Tip

Likely exam angle: explain why useState becomes insufficient in large React apps and define prop drilling, inconsistent state, repeated logic, and unnecessary re-rendering.

### Common Mistake

Thinking useState is bad. It is not bad; it is insufficient only when state must be shared widely or managed at scale.

---

## Page 03 — Why Do We Need Advanced State Management?

### Original Slide Content

Why Do We Need Advanced State Management?
 Key Challenges
     ▪ Prop Drilling — Passing data through many nested components.
     ▪ Inconsistent State — Hard to synchronize changes across components.
     ▪ Repeated Logic — Same state handling code duplicated in many places.
     ▪ Performance Issues — Too many re-renders.

 What We Introduce in Part 2
        Context API — Avoids prop drilling & provides simple global state.
        Redux Toolkit — Scalable, predictable state container for large apps.
        React 18 Features — Concurrent rendering, transitions.
        Suspense — Better async UI handling.

### Visual Explanation

The slide visually separates challenges from tools introduced in Part 2: Context API, Redux Toolkit, React 18 features, and Suspense.

### Explanation

React local state works well for small, isolated components. As the app grows, the same data may be required by distant components. Passing props through every intermediate component becomes messy, repeated, and slow. Advanced state management solves this by making shared state easier to access, update, debug, and scale.

### Exam Tip

Likely exam angle: explain why useState becomes insufficient in large React apps and define prop drilling, inconsistent state, repeated logic, and unnecessary re-rendering.

### Common Mistake

Confusing Context API with Redux Toolkit. Context is simpler; Redux Toolkit is more scalable and structured.

---

## Page 04 — What is the Context API?

### Original Slide Content

What is the Context API?
 A Built-in Solution for Global State
      •   The Context API allows React components to share data without passing props manually at every level.
      •   Helps solve the problem of prop drilling, especially in deeply nested component trees.

 How It Works (Conceptually)
 1.Create Context
       ▪ A context acts like a “shared storage bucket”.
 2.Provide Context
       ▪ A Provider component makes the data available to all child components.
 3.Consume Context
       ▪ Components access the shared data using:
            •   useContext() (Functional components)
            •   Context.Consumer (Legacy)

### Visual Explanation

The React logo is shown as a decorative/branding visual. The main conceptual visual is the three-step Context API workflow: create context, provide context, consume context.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Visual/Text Diagram

```text
Context API flow:

createContext()
      ↓
<Context.Provider value={...}>
      ↓
useContext(Context)
```

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Thinking createContext stores data. It only creates the context object; Provider supplies the actual value.

---

## Page 05 — What is the Context API?

### Original Slide Content

What is the Context API?
 When to Use the Context API

 Use it when the data is:
      ▪ Needed by many components
      ▪ Not expected to change extremely frequently

 ❖ Example scenarios:
      •   User authentication data (User object)
      •   Theme settings (Dark/Light mode)
      •   Language/Localization
      •   App-wide configs

### Visual Explanation

No major diagram. The slide lists common Context API use cases such as authentication, themes, language, and app-wide configuration.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Using Context for very fast-changing values like every keystroke in a search input. That can cause excessive re-renders.

---

## Page 06 — Why Do We Need the Context API?

### Original Slide Content

Why Do We Need the Context API?
 X Problem: Prop Drilling

     ▪ In React, data normally flows top → down using props.
     ▪ When many components need the same data, props must be passed through multiple layers—even if intermediate components
        don’t use it.

 ❑ This creates:
     ➢ Unnecessary re-renders
     ➢ Hard-to-maintain component trees
     ➢ Complicated refactoring
     ➢ Increased risk of bugs

### Visual Explanation

No major diagram. The slide explains prop drilling as a top-down data flow problem.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Passing props through many components that do not use the value. That is exactly the prop-drilling problem.

---

## Page 07 — Why Do We Need the Context API?

### Original Slide Content

Why Do We Need the Context API?
 How Context Solves It
        •   Context provides a global shared storage.
        •   Any component in the tree can access the data directly, without passing props through parents.
        •   Reduces UI wiring and simplifies complex component hierarchies.

 Example Comparison

    Without Context (Prop Drilling)                                         With Context

 App → Layout → Sidebar → UserMenu → UserAvatar                           <App> <UserContext.Provider> ... entire app ... </UserContext.Provider> </App>

 UserAvatar needs the username, but every parent must pass it as props.   UserAvatar can access username directly using useContext().

### Visual Explanation

The slide compares two flows: without Context, data travels through App → Layout → Sidebar → UserMenu → UserAvatar; with Context, UserAvatar reads username directly using useContext().

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Visual/Text Diagram

```text
Without Context:
App → Layout → Sidebar → UserMenu → UserAvatar

With Context:
Provider → any nested component can read shared value directly
```

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Assuming Context removes all state problems. It solves access/sharing, not complex updates, caching, or debugging.

---

## Page 08 — How Does the Context API Work?

### Original Slide Content

How Does the Context API Work?
  Context API Workflow (3 Steps)

 1. Create a Context                                                           2. Consume Data Using useContext()
     A context object defines the shared “global space”.                            Any component can now read the data without props.

     This does not store data yet—just creates the structure.

 3. Wrap Your App With a Provider

     The Provider makes values available to all nested components.
                                                                               Key Outcome
                                                                               •   Context allows global reading & updating of shared state
                                                                                   without prop drilling.
       •   value contains the shared data.
       •   Any component inside <Provider> can access it.

### Visual Explanation

The slide contains code screenshots for creating a context, wrapping with a Provider, and consuming using useContext(). It visually shows the full Context API flow from setup to usage.

### Code from Slide

Code reconstructed from slide visual — Create a Context

```javascript
import { createContext } from "react";

export const ThemeContext = createContext();
```

### Code Explanation

Creates the context object. It defines the shared context structure but does not store actual data yet.

### Code from Slide

Code reconstructed from slide visual — Provider wrapper

```jsx
<ThemeContext.Provider value={{ theme, setTheme }}>
  <App />
</ThemeContext.Provider>
```

### Code Explanation

Wraps the app with the Provider and passes shared values through the `value` prop.

### Code from Slide

Code reconstructed from slide visual — Consume Context

```javascript
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const { theme, setTheme } = useContext(ThemeContext);
```

### Code Explanation

Reads shared context values inside a functional component without receiving them as props.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Visual/Text Diagram

```text
Context API workflow:
1. Create context object
2. Wrap app with Provider
3. Consume values using useContext()
```

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Forgetting to wrap components with the Provider before calling useContext.

---

## Page 09 — Creating a Context (Step-by-Step Example)

### Original Slide Content

Creating a Context (Step-by-Step Example)
 Step 1: Create the Context File
    It’s best practice to keep each context in its own file for clarity and reuse.

              This defines the type of context,
              but does not store any data yet.

### Visual Explanation

Code screenshot shows a separate ThemeContext.js file. This visual emphasizes that the context object defines a shared space but does not store actual data yet.

### Code from Slide

Code reconstructed from slide visual — ThemeContext.js

```javascript
// ThemeContext.js
import { createContext } from "react";

// Create the context object
export const ThemeContext = createContext();
```

### Code Explanation

This file defines and exports the ThemeContext object for reuse in provider and consumer components.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Putting the actual state in the context file. The context file usually defines the shared context object only.

---

## Page 10 — Creating a Context (Step-by-Step Example)

### Original Slide Content

Creating a Context (Step-by-Step Example)
 Step 2: Create a Provider Component
       Providers wrap your app and supply the global value.

                                                                        What This Does
                                                                             •   Creates state (theme, setTheme)
                                                                             •   Shares it with the entire application using Provider
                                                                             •   Any person can read or update the theme

### Visual Explanation

Code screenshot shows ThemeProvider.js. It creates theme state with useState and shares `{ theme, setTheme }` through ThemeContext.Provider.

### Code from Slide

Code reconstructed from slide visual — ThemeProvider.js

```jsx
// ThemeProvider.js
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Code Explanation

Creates `theme` state and provides both the value and setter to all child components.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Forgetting to pass both value and updater function when child components must update global state.

---

## Page 11 — Creating a Context (Step-by-Step Example)

### Original Slide Content

Creating a Context (Step-by-Step Example)
 Step 3: Wrap the Root App

      In index.js (or main.jsx in Vite):

                                                                         Key Idea
                                                                              You can create multiple providers:
                                                                                    •   AuthProvider
                                                                                    •   LanguageProvider
                                                                                    •   SettingsProvider
                                                                              Each one handles a separate global state.

### Visual Explanation

Code screenshot shows wrapping the root app with ThemeProvider inside index.js or main.jsx. It also lists possible providers such as AuthProvider, LanguageProvider, and SettingsProvider.

### Code from Slide

Code reconstructed from slide visual — Wrap Root App

```jsx
import { ThemeProvider } from "./ThemeProvider";

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

### Code Explanation

Wraps the root application with ThemeProvider so all nested components can access the shared theme context.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Nesting too many providers without structure. This can become Provider Hell.

---

## Page 12 — Consuming Context Using useContext()

### Original Slide Content

Consuming Context Using useContext()
 Once the Provider is set, any component can access the shared data using useContext()
       This avoids passing props from parent → child → grandchild.

 Example: Reading Context Values

                                                                                           No props needed
                                                                                           Cleaner and less repetitive
                                                                                           Component automatically updates when context value
                                                                                         changes

### Visual Explanation

Code screenshot shows a Navbar component reading `theme` from ThemeContext using useContext(). The navbar class changes based on light/dark theme.

### Code from Slide

Code reconstructed from slide visual — Reading Context Values

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={theme === "light" ? "light-nav" : "dark-nav"}>
      Navbar - Current theme: {theme}
    </nav>
  );
}
```

### Code Explanation

The Navbar reads the current theme from Context and changes its CSS class based on that value.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Calling useContext outside a React component or outside the matching Provider.

---

## Page 13 — Consuming Context Using useContext()

### Original Slide Content

Consuming Context Using useContext()
 Example: Updating Context Values

                                                                                   What happens?
                                                                                       ▪   The button updates global theme
                                                                                       ▪   All components using this context
                                                                                           automatically re-render
                                                                                       ▪   No prop drilling required

  Best Practice Reminder

      Only use useContext() inside components wrapped by the Provider:

      Outside the Provider → useContext() will return undefined.

### Visual Explanation

Code screenshot shows a ThemeToggleButton component updating context state. A small provider diagram reminds that components must be inside the Provider.

### Code from Slide

Code reconstructed from slide visual — Updating Context Values

```jsx
function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch Theme
    </button>
  );
}
```

### Code Explanation

The button updates the global theme by calling `setTheme`. Components that consume this context update automatically.

### Code from Slide

Code reconstructed from slide visual — Provider boundary

```jsx
<ThemeProvider>
  <App />  // works
</ThemeProvider>
```

### Code Explanation

Components inside the provider can safely use `useContext(ThemeContext)`. Outside the Provider, the returned value may be undefined.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Expecting only one component to update. All components consuming changed context may re-render.

---

## Page 14 — When Should You Use the Context API?

### Original Slide Content

When Should You Use the Context API?
 Best Use Cases for Context API
     Use Context when the data is:

     ▪   Needed by many components across the app                              ▪   Rarely-updated global data

           Examples:                                                                 Examples:

                 •     User profile                                                        •     App version

                 •     Authentication status                                               •     Language (i18n)
 .                                                                                         •     Currency
                 •     App settings
     ▪   UI-related global state                                                           •     Role-based UI configuration

           Examples:
                 •     Dark / Light theme
                 •     Font size settings
                 •     Layout mode (grid/list)
                 •     Toggle values (sidebar open/closed)

### Visual Explanation

No major diagram. The slide groups Context use cases into many-component data, UI-related global state, and rarely updated global data.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

No major common mistake.

---

## Page 15 — When Should You Use the Context API?

### Original Slide Content

When Should You Use the Context API?
 ❑ Ideal Scenarios
      Context is perfect when:
             ▪   The state is simple
             ▪   The state does not change frequently
             ▪   The data is consumed by multiple sibling components
             ▪   You want to eliminate prop drilling
             ▪   You want to avoid external dependencies (simple apps)

 ❑ When NOT to Use Context                                                      ❑ Guiding Rule
       Avoid Context when:                                                          Context API = good for simple global state.
             ▪   The state updates very frequently (e.g., typing text)
                                                                                    Redux Toolkit = good for complex, scalable state.
             ▪   You need complex state transitions
             ▪   Multiple contexts begin to nest deeply
             ▪   You need strong debugging tools
             ▪   You are working on a large-scale app with many global states
    In these situations, Redux Toolkit or Zustand is more suitable.

### Visual Explanation

No major diagram. The slide contrasts ideal and non-ideal Context API usage and gives the guiding rule: Context for simple global state, Redux Toolkit for complex scalable state.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Using Context for complex scalable app state when Redux Toolkit would be cleaner.

---

## Page 16 — Limitations of the Context API

### Original Slide Content

Limitations of the Context API
  ➢ Although Context helps eliminate prop drilling, it’s not suitable for every situation.
  ➢ Understanding its limitations ensures you choose the right state management tool.

  1. Re-renders Can Become Expensive
          • When the context value changes, all components that consume it re-render.
          • Even components that use only part of the data will re-render.
          • This can hurt performance in large applications.
       Example:
        If a UserContext updates frequently → entire UI may re-render.

  2.    Not Designed for Highly Dynamic or Complex State
          Context is poor at handling:
                  •   Rapidly changing values (ex: search input, counters, animation states)
                  •   Complex business logic
                  •   Multi-level async workflows
                  •   Cached data from APIs
          Redux Toolkit or Zustand is better suited.

### Visual Explanation

No major diagram. The slide lists Context API limitations: expensive re-renders and poor fit for highly dynamic or complex state.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Ignoring Context re-render cost in large apps.

---

## Page 17 — Limitations of the Context API

### Original Slide Content

Limitations of the Context API
 3. No Built-in Debugging or DevTools
       Context lacks:
 .
             • Time-travel debugging
             • Action logging
             • State change tracing
       Large applications need robust debugging → Redux DevTools provides this.

 4. Multiple Contexts → Harder to Manage                                          5. Not Ideal for State That Requires Sharing Across Many Features
       If your app grows:
                                                                                        Context is not built for:
             • AuthContext
                                                                                        Large forms , API caching , Pagination , Global filters
             • ThemeContext
                                                                                        Notifications handling , Real-time updates
             • LanguageContext
             • CartContext
             • SettingsContext
       You end up with Provider Hell, This becomes difficult to read and
       maintain.

### Visual Explanation

No major diagram. The slide explains advanced limitations: no DevTools, provider hell, and poor fit for large feature-shared state such as API caching or real-time updates.

### Explanation

Context API is React’s built-in way to share data globally inside a component tree. It is best for simple shared values such as theme, language, logged-in user, and app settings. It reduces prop drilling, but it is not the best choice for frequently changing or highly complex state.

### Exam Tip

Likely exam angle: describe createContext, Provider, and useContext; explain how Context avoids prop drilling and when it should/should not be used.

### Common Mistake

Expecting Context to provide Redux DevTools-like debugging. It does not.

---

## Page 18 — Introduction to Redux

### Original Slide Content

Introduction to Redux
 Redux is a predictable global state management library designed for large and complex React applications.

     What Problem Does Redux Solve?
          When your app grows:
          •   Many components need access to the same data
          •   State updates become hard to track
          •   Direct component-to-component communication becomes messy
          •   Debugging becomes difficult
          •   Redux centralizes state into one single store for the entire app.

### Visual Explanation

Redux logo is shown. It supports the idea that Redux is a recognizable centralized global state management library.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Visual/Text Diagram

```text
Redux state flow:
Component → dispatch(action) → reducer(state, action) → store updates → UI re-renders
```

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

Thinking Redux is component-to-component communication. Redux uses a centralized store instead.

---

## Page 19 — Introduction to Redux

### Original Slide Content

Introduction to Redux
  Core Principles of Redux                                           Why Redux is Popular

  ❖ Single Source of Truth                                           ❖ Great for medium to large-scale apps
       •   One global store holds the entire application state.      ❖ Works consistently across all parts of your UI
       •   Easy to debug, log, and reason about.                     ❖ Predictable state transitions
  ❖ State is Read-Only                                               ❖ Excellent debugging tools (Redux DevTools)
       •   Components cannot directly modify state.                  ❖ Perfect for handling:
       •   Updates happen through actions only.                           ▪ API calls
  ❖ Changes Are Made With Pure Reducers                                   ▪ Complex workflows
       •   Reducers are pure functions:                                   ▪ Real-time updates
           (state, action) → newState                                     ▪ Multi-feature state data
       •   Ensures predictable behavior every time.

### Visual Explanation

The slide is laid out as two comparison columns: Redux core principles on the left and why Redux is popular on the right.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Visual/Text Diagram

```text
Redux rule:
State is read-only → send action → pure reducer returns new state
```

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

Mutating Redux state directly in classic Redux. In Redux Toolkit, apparent mutation is safe because Immer handles immutability.

---

## Page 20 — Introduction to Redux

### Original Slide Content

Introduction to Redux
 When to Use Redux

 Use Redux when your application:
      •   Has lots of shared/global state
      •   Requires complex state logic
      •   Needs to scale over time
      •   Needs strong debugging tools
      •   Must handle frequent state updates efficiently

### Visual Explanation

No major diagram. The slide lists when Redux is appropriate: shared state, complex logic, scaling, debugging, and frequent updates.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 21 — Why Use React Redux?

### Original Slide Content

Why Use React Redux?
 React Redux is the official library that connects Redux with React.
 It provides the most efficient way for React components to interact with the Redux store.

 1. Automatic Performance Optimization
    React Redux uses an optimized subscription system:
       ▪   Components re-render only when the specific state they use changes.
       ▪   Prevents unnecessary rendering.
       ▪   More efficient than manually subscribing to Redux.

 2. Simple and Modern API Using Hooks
       React Redux provides built-in hooks:
             ▪   useSelector()
                    ✓ Reads/selects specific state values from the store.
                    ✓ Automatically subscribes the component and triggers re-renders only when needed.
             ▪   useDispatch()
                    ✓ Allows the component to dispatch actions that update the Redux store.
                    ✓ These replace older methods like connect().

### Visual Explanation

No major diagram. The slide explains React Redux hooks: useSelector for reading and useDispatch for updating the store.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

Mixing useSelector and useDispatch: useSelector reads, useDispatch sends actions.

---

## Page 22 — Why Use React Redux?

### Original Slide Content

Why Use React Redux?
 3. Great Developer Experience                                            5. Works Perfectly with Redux Toolkit
      React Redux integrates seamlessly with:                                  Redux + Redux Toolkit is the official recommended setup:
            •   Redux DevTools                                                      •   Less boilerplate
            •   Action logging                                                      •   Cleaner reducer logic
            •   Time-travel debugging                                               •   Built-in async support
            •   State inspection                                                    •   Better maintainability
      This makes debugging much easier in large applications.

 4. Encourages Predictable UI Behavior
       Because state comes from the centralized store:
            •   Components behave consistently
            •   Bugs are easier to track
            •   UI stays in sync across the app

### Visual Explanation

No major diagram. The slide groups React Redux benefits: DevTools, predictable UI behavior, and compatibility with Redux Toolkit.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 23 — Redux Toolkit: The Modern Way to Use Redux

### Original Slide Content

Redux Toolkit: The Modern Way to Use Redux
  Redux Toolkit (RTK) is the official, recommended approach for writing Redux logic.
  It solves the biggest issues developers faced with classic Redux.

  ➢ Why Redux Toolkit? (Key Improvements)

   ▪   Eliminates Boilerplate Code
                                                                        ▪   Built-In Immutability with Immer
         Traditional Redux required:
                                                                               •   You can “mutate” state inside reducers.
                •   Action types
                                                                               •   Immer converts it into an immutable update.
                •   Action creators
                                                                               •   This makes reducer logic simple & beginner-friendly.
                •   Switch-case reducers
                                                                             Example:
                •   Manual immutability
                                                                                       state.value++
         RTK removes all of that.
                                                                            Previously this was not allowed in Redux — RTK makes it safe.

### Visual Explanation

No major diagram. The slide explains Redux Toolkit improvements, especially less boilerplate and Immer-based immutable updates.

### Code from Slide

Code shown in slide — Immer-style update example

```javascript
state.value++
```

### Code Explanation

Redux Toolkit allows this apparent mutation inside reducers because Immer converts it into a safe immutable update.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

Thinking Redux Toolkit is a different replacement for Redux. It is the modern recommended way to write Redux logic.

---

## Page 24 — Redux Toolkit: The Modern Way to Use Redux

### Original Slide Content

Redux Toolkit: The Modern Way to Use Redux
 ▪ Built-In DevTools & Middleware                                       ▪ Slices Combine Logic Together
      RTK automatically configures:                                          A “slice” includes:

           •   Redux DevTools                                                     •   Initial state
           •   Thunk middleware (for async calls)                                 •   Reducers
           •   Better default settings                                            •   Actions

      No extra setup needed .                                                     •   Case reducers
                                                                             All in one file → cleaner architecture.
 ▪ Great for Async (API) Logic
      RTK provides:
           •   createAsyncThunk() for async operations
           •   RTK Query for API caching, fetching, invalidation
      This is much easier than classic Redux async patterns.

### Visual Explanation

No major diagram. The slide explains Redux Toolkit slices, middleware, DevTools, async logic, createAsyncThunk, and RTK Query.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 25 — Installing Redux Toolkit & React Redux

### Original Slide Content

Installing Redux Toolkit & React Redux
To start using Redux Toolkit in a React project, you need two packages:

  Redux Toolkit                                                 React Redux

    Provides:                                                   The official binding between React and Redux:
        •   configureStore                                            •   Provider
        •   createSlice                                               •   useSelector
        •   createAsyncThunk                                          •   useDispatch
        •   Built-in middleware
        •   Immer for immutability
        •   DevTools support

### Visual Explanation

No major diagram. The slide separates the two required packages: Redux Toolkit and React Redux, plus what each package provides.

### Code from Slide

Command to install Redux Toolkit and React Redux

```bash
npm install @reduxjs/toolkit react-redux
```

### Code Explanation

Installs Redux Toolkit and React Redux packages required for Redux state management in React.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Visual/Text Diagram

```text
Package responsibilities:
@reduxjs/toolkit → store/slices/reducers/async
react-redux → Provider/useSelector/useDispatch
```

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

Installing only @reduxjs/toolkit and forgetting react-redux hooks/provider integration.

---

## Page 26 — Using Redux State Inside React Components

### Original Slide Content

Using Redux State Inside React Components
 Once the store and slices are set up, you can interact with Redux from any component using:
       •   useSelector() → Read state
       •   useDispatch() → Update state
 These hooks are provided by React Redux.

 Reading State with useSelector()
    useSelector() lets a component subscribe to specific parts of the Redux state.

                                                  Automatically re-renders when that part of the state changes
                                                  Efficient — only re-renders when necessary

### Visual Explanation

Code/example area indicates reading Redux state with useSelector(). The visual emphasizes subscription to specific store values.

### Code from Slide

Example syntax — Reading Redux state with useSelector()

```jsx
import { useSelector } from "react-redux";

const count = useSelector((state) => state.counter.value);
```

### Code Explanation

Reads a specific value from the Redux store and subscribes the component to updates for that value.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 27 — Using Redux State Inside React Components

### Original Slide Content

Using Redux State Inside React Components
Dispatching Actions with useDispatch()
 useDispatch() returns the dispatch function, used to trigger state updates.

                                                    Updates state predictably
                                                    Uses slice actions created automatically by Redux Toolkit

### Visual Explanation

Code/example area indicates dispatching actions using useDispatch(). The visual emphasizes predictable state updates through slice actions.

### Code from Slide

Example syntax — Dispatching actions with useDispatch()

```jsx
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

const dispatch = useDispatch();

dispatch(increment());
```

### Code Explanation

Uses the dispatch function to send an action to the Redux store. The reducer handles the action and updates state predictably.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 28 — Using Redux State Inside React Components

### Original Slide Content

Using Redux State Inside React Components
 Combined Example

### Visual Explanation

Combined example slide. It visually represents a component that reads Redux state and dispatches actions in one place.

### Code from Slide

Reconstructed combined Redux component example

```jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

### Code Explanation

A component can read Redux state with `useSelector` and update it with `useDispatch` in the same component.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 29 — Context API vs Redux Toolkit

### Original Slide Content

Context API vs Redux Toolkit
  Choosing the right state management tool depends on your application's size, complexity, and performance needs.

 When to Use Context API
 Best for simple, UI-related global state.
      Ideal Scenarios:                                                  Limitations:
            •   Theme switching (Light/Dark)                                 •   Re-renders all consumers when value changes
            •   User authentication info (current user)                      •   Not suitable for complex logic
            •   Language / Locale settings                                   •   No built-in debugging tools
            •   Layout preferences (sidebar open, grid/list view)            •   Hard to scale across many features
            •   Configuration settings that rarely change
      Strengths:
            •   Simple & built into React
            •   No extra dependencies
            •   Great for small-to-medium apps
            •   Easy to understand and implement

### Visual Explanation

Two-column comparison slide for Context API strengths and limitations.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Visual/Text Diagram

```text
Decision rule:
Simple global UI state → Context API
Complex scalable feature state → Redux Toolkit
```

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 30 — Context API vs Redux Toolkit

### Original Slide Content

Context API vs Redux Toolkit
 When to Use Redux Toolkit (RTK)

 Best for large, multi-feature, complex applications.

 Ideal Scenarios:                                                Strengths:
                                                                      •   Scalable & structured architecture
      •   Multiple components depend on shared global data
                                                                      •   Built-in tools for async logic (createAsyncThunk)
      •   Data updated frequently (API responses, pagination)
                                                                      •   Built-in DevTools → action history & time-travel debugging
      •   Complex logic: derived state, multiple reducers
                                                                      •   Performance-optimized subscription model
      •   Real-time updates (chat, dashboards)
                                                                      •   Centralized store improves consistency
      •   Apps requiring robust debugging (DevTools)
      •   Predictable state transitions needed
                                                                 Limitations:
                                                                      •   Slightly more setup than Context
                                                                      •   Might be overkill for small app

### Visual Explanation

Two-column comparison slide for Redux Toolkit ideal scenarios, strengths, and limitations.

### Explanation

Redux centralizes application state in one store. React Redux connects React components to that store using hooks. Redux Toolkit is the modern recommended way to write Redux logic with less boilerplate, simpler reducers, built-in middleware, DevTools support, and better async handling.

### Exam Tip

Likely exam angle: compare Context API and Redux Toolkit; define store, action, reducer, slice, useSelector, and useDispatch.

### Common Mistake

No major common mistake.

---

## Page 31 — Advance React

### Original Slide Content

Advance React

    ❖Concurrent Rendering

    ❖React Suspense

    ❖Server-Side Rendering (SSR)

### Visual Explanation

Agenda-style slide listing advanced React topics: Concurrent Rendering, Suspense, and SSR.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

Writing “Advance React” in answers. Use the correct phrase “Advanced React”.

---

## Page 32 — Concurrent Rendering

### Original Slide Content

Concurrent Rendering
 React 18 introduced a new rendering system called Concurrent Rendering.
 It improves performance, responsiveness, and user experience — especially in large apps.

    What is Concurrent Rendering?
        Concurrent Rendering allows React to:
         ✓ Interrupt rendering work
               React can pause a long update if something more urgent (like a user typing) happens.
         ✓ Work in the background
               React prepares UI updates behind the scenes without blocking the main thread.
         ✓ Prioritize updates
               Urgent updates (like typing) happen first.
               Non-urgent updates (like filtering big lists) run as background tasks.
         ✓ Avoid UI freezing
               Heavy renders no longer lock the UI.

### Visual Explanation

No major diagram. The slide explains concurrent rendering as interruptible, background, prioritized rendering that avoids UI freezing.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Visual/Text Diagram

```text
Concurrent rendering idea:
Urgent update first → background rendering continues → UI stays responsive
```

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

Thinking concurrent rendering means React always renders faster. More accurately, it keeps the UI responsive by scheduling and prioritizing work.

---

## Page 33 — Concurrent Rendering

### Original Slide Content

Concurrent Rendering
Why Was This Needed?                                                         How to Use It?
    Before React 18 (legacy rendering):                                       Concurrent features are opt-in, meaning:
          •   UI could freeze while React processed updates                       •   You enable them when needed
          •   Large state updates = slow interactions                             •   Normal rendering still works the same
          •   Browsers felt unresponsive in heavy apps                        Enabled through hooks like:
    Concurrent Rendering solves all of these.                                     •   useTransition()
                                                                                  •   useDeferredValue()
Benefits for Developers
                                                                                  •   Suspense
     •   Smoother UX
                                                                              React automatically handles scheduling and prioritizing.
     •   Faster perceived performance
     •   Great for search bars, long lists, filtering, sorting
     •   Better on low-end devices
     •   Makes heavy UI workloads feel lightweight

### Visual Explanation

No major diagram. The slide compares legacy rendering problems with concurrent rendering benefits and names hooks that enable concurrent features.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

No major common mistake.

---

## Page 34 — useTransition: Prioritizing UI Updates (React 18)

### Original Slide Content

useTransition: Prioritizing UI Updates (React 18)
 useTransition allows you to separate urgent updates from non-urgent updates, making your UI feel smoother and more responsive.

 Why useTransition?                                                                     How useTransition Works

       In large apps, certain operations are heavy:                                     It returns two values:
              •   Filtering long lists                                                        const [isPending, startTransition] = useTransition();
              •   Rendering large tables
              •   Searching through big datasets                                              ✓ startTransition(callback)
              •   Loading large UI components                                                 Tells React to run the update as non-urgent.
       These can cause:
              •   UI lag                                                                      ✓ isPending
              •   Input delay                                                                 A boolean that indicates if the transition is ongoing
              •   Frozen screens                                                              (useful for showing loading indicators).

       useTransition fixes this by running heavy updates in the background.

### Visual Explanation

No major diagram. The slide shows the key `useTransition` syntax and explains `isPending` and `startTransition`.

### Code from Slide

Code shown in slide — useTransition syntax

```javascript
const [isPending, startTransition] = useTransition();
```

### Code Explanation

`isPending` shows whether the transition is still running; `startTransition` marks heavy work as non-urgent.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Visual/Text Diagram

```text
useTransition flow:
User types → urgent input state updates immediately
          → heavy list filtering runs inside startTransition()
```

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

Using useTransition for every state update. Use it for non-urgent heavy updates only.

---

## Page 35 — useTransition: Prioritizing UI Updates (React 18)

### Original Slide Content

useTransition: Prioritizing UI Updates (React 18)
 Example: Filtering a Large List Smoothly

                                                              ❖ This ensures the input box stays responsive, heavy filtering runs in the
                                                                background, the UI doesn’t freeze, and users still receive immediate
                                                                responses for urgent actions.

                                                              ❖ The key idea is that urgent UI interactions and non-urgent heavy
                                                                computations run smoothly without blocking each other, thanks to
                                                                useTransition.

### Visual Explanation

Code screenshot shows a large-list filtering example using useTransition. The visual explains urgent input updates and non-urgent filtering work.

### Code from Slide

Reconstructed from slide idea — Filtering a large list smoothly

```jsx
import { useState, useTransition } from "react";

function SearchList({ items }) {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value); // urgent update: keep input responsive

    startTransition(() => {
      setFilteredItems(
        items.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      );
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Code Explanation

Typing updates immediately, while expensive filtering is treated as non-urgent background work.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

No major common mistake.

---

## Page 36 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios

### Original Slide Content

useDeferredValue: Avoid Lag in Fast-Typing Scenarios
 useDeferredValue allows you to delay updating a non-urgent value, improving UI responsiveness when the user is typing or
 interacting quickly.
 It is very similar to useTransition, but easier to use for input-based UI updates.

 Why useDeferredValue?
      In large applications:
            •   When users type into search boxes,
            •   When filtering large datasets,
            •   When typing triggers heavy recalculations,
      You might see:
            •   Input lag
            •   Delayed keystrokes
            •   UI freezing
      useDeferredValue prevents this by deferring heavy updates.

### Visual Explanation

No major diagram. The slide explains useDeferredValue for delaying non-urgent values during fast typing.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Visual/Text Diagram

```text
useDeferredValue flow:
query updates now → deferredQuery updates later → heavy UI uses deferredQuery
```

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

Confusing useDeferredValue with debouncing. It defers rendering priority but is not the same as a timer-based debounce.

---

## Page 37 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios

### Original Slide Content

useDeferredValue: Avoid Lag in Fast-Typing Scenarios
 How It Works
 You give React a value, and React returns a deferred version:

 const deferredQuery = useDeferredValue(query);

     ✓ query
          Updates instantly → responsive typing
     ✓ deferredQuery
          Updates later → used for heavy calculations
          (e.g., filtering, sorting, rendering big lists)

### Visual Explanation

The slide shows the essential syntax `const deferredQuery = useDeferredValue(query);` and explains immediate vs deferred values.

### Code from Slide

Code shown in slide — useDeferredValue syntax

```javascript
const deferredQuery = useDeferredValue(query);
```

### Code Explanation

`query` updates instantly for typing. `deferredQuery` updates later and can be used for heavier filtering/rendering.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

No major common mistake.

---

## Page 38 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios

### Original Slide Content

useDeferredValue: Avoid Lag in Fast-Typing Scenarios
Example: Smooth Search (with Heavy List Rendering)

### Visual Explanation

Code screenshot shows a smooth search example with heavy list rendering using useDeferredValue.

### Code from Slide

Reconstructed from slide idea — Smooth Search with useDeferredValue

```jsx
import { useState, useDeferredValue } from "react";

function SearchResults({ items }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Code Explanation

The input remains responsive because heavy list rendering follows the deferred version of the query.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

No major common mistake.

---

## Page 39 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios

### Original Slide Content

useDeferredValue: Avoid Lag in Fast-Typing Scenarios
 What This Achieves
      ✓ Immediate response to user typing
      ✓ Heavy list filtering happens AFTER the user finishes typing
      ✓ UI does not freeze
      ✓ Great for search bars, dropdown filters, dashboards

 When to Use useDeferredValue
    Use it for situations like:
      •   Search filters
      •   Auto-suggestions
      •   Live data display
      •   Pagination UI
      •   Large tables or lists
      •   Any component with heavy updates triggered by typing

### Visual Explanation

No major diagram. The slide lists results and use cases of useDeferredValue.

### Explanation

React 18 introduced concurrent rendering features that help React keep the UI responsive while heavy updates happen. Hooks such as useTransition and useDeferredValue separate urgent work from non-urgent work, which prevents typing lag and UI freezing in large interfaces.

### Exam Tip

Likely exam angle: explain concurrent rendering and distinguish useTransition from useDeferredValue using examples such as search boxes and large lists.

### Common Mistake

No major common mistake.

---

## Page 40 — React Suspense

### Original Slide Content

React Suspense
 ❖ Suspense is a React feature that lets you pause rendering while waiting for something (like data or code) and show a fallback UI in the
    meantime.
 ❖ It makes loading states clean, declarative, and automatic.

  What Suspense Does
       Instead of manually managing loading states like:
       if (loading) return <Spinner />;
       Suspense allows you to wrap components and let React:
             •   Wait for async resources
             •   Show a fallback loader
             •   Resume rendering when ready

### Visual Explanation

No major diagram. The slide explains Suspense as a cleaner alternative to manual loading checks.

### Code from Slide

Code shown in slide — Manual loading example

```jsx
if (loading) return <Spinner />;
```

### Code Explanation

This is the manual loading style that Suspense can replace with declarative fallback handling.

### Explanation

Suspense lets React pause rendering while waiting for something and show a fallback UI. It is useful for lazy-loaded components, async rendering, and framework-supported data loading. It makes loading logic cleaner and more declarative.

### Visual/Text Diagram

```text
Suspense flow:
Component not ready → show fallback UI → async resource ready → render real component
```

### Exam Tip

Likely exam angle: define Suspense, fallback UI, lazy loading, and why Suspense improves loading-state handling.

### Common Mistake

Thinking Suspense is only for data fetching. It is also used for lazy loading components and server rendering patterns.

---

## Page 41 — React Suspense

### Original Slide Content

React Suspense
 Key Use Cases of Suspense

 1. Lazy Loading Components
      Load components only when needed → improves performance.
 2. Server Components & Streaming (React 18 / Next.js 13+)
      Suspense works with async server rendering.
 3. Data Fetching (with frameworks/libraries)
      Suspense integrates with:
           •   React Server Components (RSC)
           •   React Query (experimental)
           •   Relay
           •   Next.js App Router
 4. Graceful fallback UI
      Loading screens, skeletons, spinners, placeholders.

### Visual Explanation

No major diagram. The slide lists Suspense use cases: lazy components, server components/streaming, data fetching with frameworks/libraries, and fallback UI.

### Explanation

Suspense lets React pause rendering while waiting for something and show a fallback UI. It is useful for lazy-loaded components, async rendering, and framework-supported data loading. It makes loading logic cleaner and more declarative.

### Exam Tip

Likely exam angle: define Suspense, fallback UI, lazy loading, and why Suspense improves loading-state handling.

### Common Mistake

No major common mistake.

---

## Page 42 — React Suspense

### Original Slide Content

React Suspense
 Lazy Loading Example Using Suspense
                                                                     Why Suspense is Important
                                                                          •    Cleaner loading logic
                                                                          •    Consistent UX across the app
                                                                          •    Helps split your app into smaller chunks (code-splitting)
                                                                          •    Makes the UI more responsive
                                                                          •    Integrates deeply with server-side rendering

                                                                     Summary
                                                                     Suspense = declarative loading handling that improves
     lazy() loads the component only when needed                     performance and user experience.

     Suspense shows fallback UI until it loads

### Visual Explanation

Code screenshot shows lazy loading using React.lazy and Suspense with a fallback UI.

### Code from Slide

Code reconstructed from slide visual — Lazy Loading with Suspense

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
```

### Code Explanation

`lazy()` loads the component only when needed. `Suspense` displays fallback UI until the component is ready.

### Explanation

Suspense lets React pause rendering while waiting for something and show a fallback UI. It is useful for lazy-loaded components, async rendering, and framework-supported data loading. It makes loading logic cleaner and more declarative.

### Exam Tip

Likely exam angle: define Suspense, fallback UI, lazy loading, and why Suspense improves loading-state handling.

### Common Mistake

No major common mistake.

---

## Page 43 — Server-Side Rendering (SSR) in React

### Original Slide Content

Server-Side Rendering (SSR) in React
 ❑ Server-Side Rendering (SSR) means rendering React components on the server instead of the browser.
 ❑ The server sends fully rendered HTML to the client, improving performance and SEO.

  ❖ How SSR Works (Step-by-Step)
       1. User requests a page (URL)
            The browser sends a request to the server.
       2. Server runs React components
            React executes on the server, fetches data, and generates HTML.
       3. Server sends pre-rendered HTML to the browser
            The browser instantly displays meaningful content — fast first paint.
       4. JavaScript loads and hydrates the page
            This attaches event listeners and makes the page interactive.

### Visual Explanation

Step-by-step SSR flow: browser request → server runs React/fetches data → server sends HTML → JavaScript hydrates the page.

### Explanation

SSR renders React on the server and sends ready-made HTML to the browser. This improves SEO and first load speed because users and search engines receive meaningful HTML before JavaScript fully loads.

### Visual/Text Diagram

```text
SSR flow:
Browser requests URL
      ↓
Server renders React + fetches data
      ↓
Server sends full HTML
      ↓
Browser hydrates with JavaScript
```

### Exam Tip

Likely exam angle: write SSR steps and explain why SSR improves SEO and first load performance.

### Common Mistake

Confusing SSR and hydration. SSR creates HTML on the server; hydration attaches interactivity on the client.

---

## Page 44 — Server-Side Rendering (SSR) in React

### Original Slide Content

Server-Side Rendering (SSR) in React
 Why SSR Is Useful?

      •   Better SEO
            Search engines can fully index rendered HTML.
            Ideal for blogs, e-commerce, landing pages.
      •   Faster First Load
            Users see the UI immediately instead of waiting for JavaScript to load.
      •   Better Performance on Slow Devices
            Heavy computations run on the server, not the user's device.
      •   Great for Dynamic Content
            Data-driven pages load faster when rendered on the server.

### Visual Explanation

No major diagram. The slide explains SSR benefits: SEO, faster first load, better slow-device performance, and dynamic content handling.

### Explanation

SSR renders React on the server and sends ready-made HTML to the browser. This improves SEO and first load speed because users and search engines receive meaningful HTML before JavaScript fully loads.

### Exam Tip

Likely exam angle: write SSR steps and explain why SSR improves SEO and first load performance.

### Common Mistake

No major common mistake.

---

## Page 45 — Server-Side Rendering (SSR) in React

### Original Slide Content

Server-Side Rendering (SSR) in React
  Where Is SSR Used in React?

       ❖ SSR is NOT done using plain React.
       ❖ Instead, frameworks like Next.js provide SSR support out of the box.
       ❖ Next.js Features for SSR:
            •   getServerSideProps()
            •   Dynamic server-side rendering
            •   Streaming SSR
            •   Server Components (React 18)

       Next.js is currently the officially recommended React framework.

### Visual Explanation

No major diagram. The slide explains that SSR is usually provided by frameworks such as Next.js, not plain React alone.

### Explanation

SSR renders React on the server and sends ready-made HTML to the browser. This improves SEO and first load speed because users and search engines receive meaningful HTML before JavaScript fully loads.

### Exam Tip

Likely exam angle: write SSR steps and explain why SSR improves SEO and first load performance.

### Common Mistake

No major common mistake.

---

## Page 46 — Server-Side Rendering (SSR) in React

### Original Slide Content

Server-Side Rendering (SSR) in React
When Should You Use SSR?
  Use SSR when your app needs:
    •   Search engine visibility
    •   Dynamic content with fast initial load
    •   Public-facing pages
    •   Strong performance on low-power devices
    •   Improved perceived performance
          Examples:
                •   E-commerce product pages                     Summary :- SSR = faster first load + better SEO + server-powered rendering →
                •   Blogs & news websites                        recommended for content-heavy and public-facing sites.

                •   Marketing landing pages
                •   Portfolio websites

### Visual Explanation

No major diagram. The slide lists practical SSR use cases and examples such as e-commerce, blogs, landing pages, and portfolios.

### Explanation

SSR renders React on the server and sends ready-made HTML to the browser. This improves SEO and first load speed because users and search engines receive meaningful HTML before JavaScript fully loads.

### Exam Tip

Likely exam angle: write SSR steps and explain why SSR improves SEO and first load performance.

### Common Mistake

No major common mistake.

---

## Page 47 — Client-Side Rendering (CSR) in React

### Original Slide Content

Client-Side Rendering (CSR) in React
 ✓ Client-Side Rendering (CSR) means the browser is responsible for rendering the UI after downloading JavaScript.
 ✓ This is the most common rendering strategy used by React apps created with Vite, CRA, or Next.js (client components).

       How CSR Works (Step-by-Step)

            •   Browser loads a minimal HTML file
                  Usually contains just:
                    <div id="root"></div>
            •   JavaScript bundle downloads
                  React code is loaded into the browser.
            •   React builds the UI on the client
                  All components render using browser CPU.
            •   Data is fetched from APIs (client-side)
                  The UI appears only after data + JS loading.

### Visual Explanation

Step-by-step CSR flow: browser loads minimal HTML → JavaScript bundle downloads → React builds UI in browser → data is fetched client-side.

### Code from Slide

Code shown in slide — Minimal CSR root HTML

```html
<div id="root"></div>
```

### Code Explanation

CSR apps often start with a minimal HTML root element. React downloads and renders the UI inside this root.

### Explanation

CSR renders the UI in the browser after JavaScript loads. It is highly interactive and good for dashboards, SaaS apps, and private systems, but it usually has weaker SEO and slower initial page rendering than SSR.

### Visual/Text Diagram

```text
CSR flow:
Browser loads minimal HTML
      ↓
Downloads JavaScript bundle
      ↓
React renders UI in browser
      ↓
Client fetches API data
```

### Exam Tip

Likely exam angle: compare CSR vs SSR and identify where CSR is more suitable.

### Common Mistake

Thinking CSR means no server exists. CSR still may use APIs/backends; only UI rendering mainly happens in the browser.

---

## Page 48 — Client-Side Rendering (CSR) in React

### Original Slide Content

Client-Side Rendering (CSR) in React
 Advantages of CSR                                                       Disadvantages of CSR

 ✓ Excellent Interactivity                                               X   Slow First Page Load
       Perfect for apps with dynamic UI states, frequent updates, and          The browser must download + parse + execute JS before showing
       complex user workflows.                                                 the UI.
 ✓ Faster navigation between pages                                       X   Poor SEO
       Once loaded, the app behaves like a desktop application.                Search engines struggle to index pages rendered purely in JS.
 ✓ Simpler architecture                                                  X   Heavy on low-power devices
       No need for server-based rendering logic.                               Phones/laptops with weak CPU will struggle to hydrate large
 ✓ Lower server load                                                           apps.
       Backend serves static files → minimal processing cost.            X   Not ideal for content-focused websites
 ✓ Works offline (with Service Workers)                                        Blogs, news sites, and landing pages suffer in CSR.
       CSR apps can be turned into PWAs.

### Visual Explanation

Two-column comparison of CSR advantages and disadvantages.

### Explanation

CSR renders the UI in the browser after JavaScript loads. It is highly interactive and good for dashboards, SaaS apps, and private systems, but it usually has weaker SEO and slower initial page rendering than SSR.

### Exam Tip

Likely exam angle: compare CSR vs SSR and identify where CSR is more suitable.

### Common Mistake

Claiming CSR is always worse. CSR is excellent for highly interactive private apps.

---

## Page 49 — Client-Side Rendering (CSR) in React

### Original Slide Content

Client-Side Rendering (CSR) in React
Where CSR is Ideal                                                   Common Tools for CSR

                                                                          •   React + Vite (recommended for modern projects)
✓ Dashboards
                                                                          •   Create React App (deprecated)
     Analytics dashboards, admin panels.
                                                                          •   Next.js Client Components
✓ Social Media & Messaging Apps
                                                                          •   Parcel / Webpack apps
     Facebook Web, Twitter, Instagram, Slack, Discord.
✓ SaaS Tools
     Notion-like apps, project management tools, code editors.
✓ Internal or Auth-Gated Applications
     SEO is irrelevant inside private systems.                            Summary :- CSR = interactive, dynamic, fast-after-load, but weak for SEO
                                                                          and slow initial rendering. Best for apps, not content pages.

### Visual Explanation

Two-column slide showing where CSR is ideal and common tools used for CSR.

### Explanation

CSR renders the UI in the browser after JavaScript loads. It is highly interactive and good for dashboards, SaaS apps, and private systems, but it usually has weaker SEO and slower initial page rendering than SSR.

### Exam Tip

Likely exam angle: compare CSR vs SSR and identify where CSR is more suitable.

### Common Mistake

No major common mistake.

---

## Page 50 — Thank You

### Original Slide Content

Thank You

### Visual Explanation

Final thank-you slide. No technical content beyond lecture closure.

### Explanation

This page closes the lecture.

### Exam Tip

No exam theory. It marks the end of the lecture.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

Lecture 09, ReactJS Part 02, explains why advanced state management becomes necessary when React applications grow. It begins with scaling problems such as prop drilling, inconsistent state, repeated logic, and unnecessary re-renders. It then introduces the Context API as React’s built-in solution for simple global state and explains the workflow: create a context, provide values using a Provider, and consume values using useContext().

The lecture then explains when Context API is useful and when it becomes weak. Context is suitable for user data, themes, language, and rarely updated configuration. It is not ideal for frequently changing state, complex logic, large forms, API caching, pagination, real-time updates, or applications requiring strong debugging tools.

Redux is introduced as a predictable global state management library for large and complex React applications. Redux uses a single store, read-only state, actions, and pure reducers. React Redux connects Redux to React using Provider, useSelector(), and useDispatch(). Redux Toolkit is presented as the modern recommended Redux approach because it removes boilerplate, supports Immer-based immutable updates, includes middleware and DevTools, and provides tools such as createSlice, configureStore, createAsyncThunk, and RTK Query.

The final part of the lecture covers advanced React rendering. React 18 concurrent rendering improves responsiveness by allowing React to interrupt, prioritize, and schedule rendering work. useTransition separates urgent and non-urgent updates, while useDeferredValue delays non-urgent values to reduce typing lag. Suspense provides declarative loading behavior and supports lazy loading and framework-based async rendering. SSR renders React on the server for better SEO and faster first load, while CSR renders in the browser and is best for interactive apps, dashboards, SaaS tools, and private authenticated systems.

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| Advanced state management | A method of managing shared or complex state beyond local component state. | Context API, Redux Toolkit |
| Prop drilling | Passing props through many nested components even when intermediate components do not use them. | App → Layout → Sidebar → UserMenu → UserAvatar |
| Context API | React built-in feature for sharing data across a component tree without manual prop passing. | ThemeContext |
| Provider | A component that makes context values available to nested child components. | <ThemeContext.Provider value={...}> |
| useContext() | React hook used to consume context values in functional components. | useContext(ThemeContext) |
| Provider Hell | A situation where many nested providers make app structure hard to read and maintain. | <AuthProvider><ThemeProvider><CartProvider>... |
| Redux | A predictable global state management library for large and complex applications. | One store for app state |
| Store | Central place where Redux application state is kept. | configureStore({...}) |
| Action | A plain instruction describing what happened and what update is requested. | increment() |
| Reducer | A pure function that takes state and action and returns new state. | (state, action) => newState |
| Redux Toolkit | Modern recommended way to write Redux logic with less boilerplate. | createSlice, configureStore |
| Immer | Library used by Redux Toolkit to convert apparent mutation into immutable updates. | state.value++ |
| React Redux | Official binding library that connects Redux with React. | Provider, useSelector, useDispatch |
| useSelector() | React Redux hook used to read/select values from the Redux store. | useSelector(state => state.counter.value) |
| useDispatch() | React Redux hook used to dispatch actions to the Redux store. | dispatch(increment()) |
| Concurrent Rendering | React 18 rendering system that can interrupt, prioritize, and schedule UI work. | Typing stays responsive while filtering runs |
| useTransition() | React hook that marks heavy updates as non-urgent. | startTransition(() => setList(...)) |
| isPending | Boolean returned by useTransition to show a transition is still running. | Show Loading... while pending |
| useDeferredValue() | React hook that returns a deferred version of a value for non-urgent rendering. | deferredQuery |
| Suspense | React feature that shows fallback UI while waiting for lazy code or async resources. | <Suspense fallback={...}> |
| Lazy loading | Loading code/components only when needed. | lazy(() => import("./Dashboard")) |
| SSR | Server-Side Rendering; React components render on the server and HTML is sent to browser. | Next.js server-rendered product page |
| Hydration | Client-side JavaScript attaches interactivity to server-rendered HTML. | Button event listeners become active |
| CSR | Client-Side Rendering; browser downloads JavaScript and renders UI in the client. | React + Vite dashboard |

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| Why advanced state management? | Large apps need shared state, less prop drilling, fewer repeated patterns, and better performance. | 02–03 |
| Context API workflow | Create context → wrap Provider → consume using useContext. | 04, 08–13 |
| Best Context use cases | Theme, auth user, language, settings, rarely updated global data. | 05, 14–15 |
| Context limitations | Re-renders, no DevTools, provider hell, poor for complex/frequent updates. | 16–17 |
| Redux purpose | Centralized predictable state for large apps. | 18–20 |
| Redux principles | Single source of truth, read-only state, pure reducers. | 19 |
| React Redux hooks | useSelector reads; useDispatch updates. | 21, 26–28 |
| Redux Toolkit | Modern Redux: less boilerplate, Immer, slices, DevTools, middleware, async support. | 23–25 |
| Context vs Redux Toolkit | Context for simple UI state; RTK for scalable complex global state. | 29–30 |
| Concurrent rendering | React can interrupt, prioritize, and schedule rendering work. | 32–33 |
| useTransition | Separates urgent updates from heavy non-urgent work. | 34–35 |
| useDeferredValue | Keeps typing responsive by deferring heavy value updates. | 36–39 |
| Suspense | Declarative fallback UI while waiting for lazy code/async resources. | 40–42 |
| SSR | Server renders HTML first; better SEO and faster first load. | 43–46 |
| CSR | Browser renders UI after JS loads; great for interactive private apps. | 47–49 |

# Important Code Snippets

## Page 08 — How Does the Context API Work?

Code reconstructed from slide visual — Create a Context

```javascript
import { createContext } from "react";

export const ThemeContext = createContext();
```

**Explanation:** Creates the context object. It defines the shared context structure but does not store actual data yet.

## Page 08 — How Does the Context API Work?

Code reconstructed from slide visual — Provider wrapper

```jsx
<ThemeContext.Provider value={{ theme, setTheme }}>
  <App />
</ThemeContext.Provider>
```

**Explanation:** Wraps the app with the Provider and passes shared values through the `value` prop.

## Page 08 — How Does the Context API Work?

Code reconstructed from slide visual — Consume Context

```javascript
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const { theme, setTheme } = useContext(ThemeContext);
```

**Explanation:** Reads shared context values inside a functional component without receiving them as props.

## Page 09 — Creating a Context (Step-by-Step Example)

Code reconstructed from slide visual — ThemeContext.js

```javascript
// ThemeContext.js
import { createContext } from "react";

// Create the context object
export const ThemeContext = createContext();
```

**Explanation:** This file defines and exports the ThemeContext object for reuse in provider and consumer components.

## Page 10 — Creating a Context (Step-by-Step Example)

Code reconstructed from slide visual — ThemeProvider.js

```jsx
// ThemeProvider.js
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

**Explanation:** Creates `theme` state and provides both the value and setter to all child components.

## Page 11 — Creating a Context (Step-by-Step Example)

Code reconstructed from slide visual — Wrap Root App

```jsx
import { ThemeProvider } from "./ThemeProvider";

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

**Explanation:** Wraps the root application with ThemeProvider so all nested components can access the shared theme context.

## Page 12 — Consuming Context Using useContext()

Code reconstructed from slide visual — Reading Context Values

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={theme === "light" ? "light-nav" : "dark-nav"}>
      Navbar - Current theme: {theme}
    </nav>
  );
}
```

**Explanation:** The Navbar reads the current theme from Context and changes its CSS class based on that value.

## Page 13 — Consuming Context Using useContext()

Code reconstructed from slide visual — Updating Context Values

```jsx
function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch Theme
    </button>
  );
}
```

**Explanation:** The button updates the global theme by calling `setTheme`. Components that consume this context update automatically.

## Page 13 — Consuming Context Using useContext()

Code reconstructed from slide visual — Provider boundary

```jsx
<ThemeProvider>
  <App />  // works
</ThemeProvider>
```

**Explanation:** Components inside the provider can safely use `useContext(ThemeContext)`. Outside the Provider, the returned value may be undefined.

## Page 23 — Redux Toolkit: The Modern Way to Use Redux

Code shown in slide — Immer-style update example

```javascript
state.value++
```

**Explanation:** Redux Toolkit allows this apparent mutation inside reducers because Immer converts it into a safe immutable update.

## Page 25 — Installing Redux Toolkit & React Redux

Command to install Redux Toolkit and React Redux

```bash
npm install @reduxjs/toolkit react-redux
```

**Explanation:** Installs Redux Toolkit and React Redux packages required for Redux state management in React.

## Page 26 — Using Redux State Inside React Components

Example syntax — Reading Redux state with useSelector()

```jsx
import { useSelector } from "react-redux";

const count = useSelector((state) => state.counter.value);
```

**Explanation:** Reads a specific value from the Redux store and subscribes the component to updates for that value.

## Page 27 — Using Redux State Inside React Components

Example syntax — Dispatching actions with useDispatch()

```jsx
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

const dispatch = useDispatch();

dispatch(increment());
```

**Explanation:** Uses the dispatch function to send an action to the Redux store. The reducer handles the action and updates state predictably.

## Page 28 — Using Redux State Inside React Components

Reconstructed combined Redux component example

```jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

**Explanation:** A component can read Redux state with `useSelector` and update it with `useDispatch` in the same component.

## Page 34 — useTransition: Prioritizing UI Updates (React 18)

Code shown in slide — useTransition syntax

```javascript
const [isPending, startTransition] = useTransition();
```

**Explanation:** `isPending` shows whether the transition is still running; `startTransition` marks heavy work as non-urgent.

## Page 35 — useTransition: Prioritizing UI Updates (React 18)

Reconstructed from slide idea — Filtering a large list smoothly

```jsx
import { useState, useTransition } from "react";

function SearchList({ items }) {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value); // urgent update: keep input responsive

    startTransition(() => {
      setFilteredItems(
        items.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      );
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Explanation:** Typing updates immediately, while expensive filtering is treated as non-urgent background work.

## Page 37 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios

Code shown in slide — useDeferredValue syntax

```javascript
const deferredQuery = useDeferredValue(query);
```

**Explanation:** `query` updates instantly for typing. `deferredQuery` updates later and can be used for heavier filtering/rendering.

## Page 38 — useDeferredValue: Avoid Lag in Fast-Typing Scenarios

Reconstructed from slide idea — Smooth Search with useDeferredValue

```jsx
import { useState, useDeferredValue } from "react";

function SearchResults({ items }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Explanation:** The input remains responsive because heavy list rendering follows the deferred version of the query.

## Page 40 — React Suspense

Code shown in slide — Manual loading example

```jsx
if (loading) return <Spinner />;
```

**Explanation:** This is the manual loading style that Suspense can replace with declarative fallback handling.

## Page 42 — React Suspense

Code reconstructed from slide visual — Lazy Loading with Suspense

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
```

**Explanation:** `lazy()` loads the component only when needed. `Suspense` displays fallback UI until the component is ready.

## Page 47 — Client-Side Rendering (CSR) in React

Code shown in slide — Minimal CSR root HTML

```html
<div id="root"></div>
```

**Explanation:** CSR apps often start with a minimal HTML root element. React downloads and renders the UI inside this root.

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 01 | Title Page | Title slide with SLIIT and Faculty of Computing branding. It identifies the module as SE2020 – Web Technologies and Mobile, Lecture 09, ReactJS Part 02. |
| 02 | Why Do We Need Advanced State Management? | The visual on the right shows a top component distributing state through many lower components. It represents scaling problems in React apps, especially prop drilling and many components depending on shared data. |
| 03 | Why Do We Need Advanced State Management? | The slide visually separates challenges from tools introduced in Part 2: Context API, Redux Toolkit, React 18 features, and Suspense. |
| 04 | What is the Context API? | The React logo is shown as a decorative/branding visual. The main conceptual visual is the three-step Context API workflow: create context, provide context, consume context. |
| 05 | What is the Context API? | No major diagram. The slide lists common Context API use cases such as authentication, themes, language, and app-wide configuration. |
| 06 | Why Do We Need the Context API? | No major diagram. The slide explains prop drilling as a top-down data flow problem. |
| 07 | Why Do We Need the Context API? | The slide compares two flows: without Context, data travels through App → Layout → Sidebar → UserMenu → UserAvatar; with Context, UserAvatar reads username directly using useContext(). |
| 08 | How Does the Context API Work? | The slide contains code screenshots for creating a context, wrapping with a Provider, and consuming using useContext(). It visually shows the full Context API flow from setup to usage. |
| 09 | Creating a Context (Step-by-Step Example) | Code screenshot shows a separate ThemeContext.js file. This visual emphasizes that the context object defines a shared space but does not store actual data yet. |
| 10 | Creating a Context (Step-by-Step Example) | Code screenshot shows ThemeProvider.js. It creates theme state with useState and shares `{ theme, setTheme }` through ThemeContext.Provider. |
| 11 | Creating a Context (Step-by-Step Example) | Code screenshot shows wrapping the root app with ThemeProvider inside index.js or main.jsx. It also lists possible providers such as AuthProvider, LanguageProvider, and SettingsProvider. |
| 12 | Consuming Context Using useContext() | Code screenshot shows a Navbar component reading `theme` from ThemeContext using useContext(). The navbar class changes based on light/dark theme. |
| 13 | Consuming Context Using useContext() | Code screenshot shows a ThemeToggleButton component updating context state. A small provider diagram reminds that components must be inside the Provider. |
| 14 | When Should You Use the Context API? | No major diagram. The slide groups Context use cases into many-component data, UI-related global state, and rarely updated global data. |
| 15 | When Should You Use the Context API? | No major diagram. The slide contrasts ideal and non-ideal Context API usage and gives the guiding rule: Context for simple global state, Redux Toolkit for complex scalable state. |
| 16 | Limitations of the Context API | No major diagram. The slide lists Context API limitations: expensive re-renders and poor fit for highly dynamic or complex state. |
| 17 | Limitations of the Context API | No major diagram. The slide explains advanced limitations: no DevTools, provider hell, and poor fit for large feature-shared state such as API caching or real-time updates. |
| 18 | Introduction to Redux | Redux logo is shown. It supports the idea that Redux is a recognizable centralized global state management library. |
| 19 | Introduction to Redux | The slide is laid out as two comparison columns: Redux core principles on the left and why Redux is popular on the right. |
| 20 | Introduction to Redux | No major diagram. The slide lists when Redux is appropriate: shared state, complex logic, scaling, debugging, and frequent updates. |
| 21 | Why Use React Redux? | No major diagram. The slide explains React Redux hooks: useSelector for reading and useDispatch for updating the store. |
| 22 | Why Use React Redux? | No major diagram. The slide groups React Redux benefits: DevTools, predictable UI behavior, and compatibility with Redux Toolkit. |
| 23 | Redux Toolkit: The Modern Way to Use Redux | No major diagram. The slide explains Redux Toolkit improvements, especially less boilerplate and Immer-based immutable updates. |
| 24 | Redux Toolkit: The Modern Way to Use Redux | No major diagram. The slide explains Redux Toolkit slices, middleware, DevTools, async logic, createAsyncThunk, and RTK Query. |
| 25 | Installing Redux Toolkit & React Redux | No major diagram. The slide separates the two required packages: Redux Toolkit and React Redux, plus what each package provides. |
| 26 | Using Redux State Inside React Components | Code/example area indicates reading Redux state with useSelector(). The visual emphasizes subscription to specific store values. |
| 27 | Using Redux State Inside React Components | Code/example area indicates dispatching actions using useDispatch(). The visual emphasizes predictable state updates through slice actions. |
| 28 | Using Redux State Inside React Components | Combined example slide. It visually represents a component that reads Redux state and dispatches actions in one place. |
| 29 | Context API vs Redux Toolkit | Two-column comparison slide for Context API strengths and limitations. |
| 30 | Context API vs Redux Toolkit | Two-column comparison slide for Redux Toolkit ideal scenarios, strengths, and limitations. |
| 31 | Advance React | Agenda-style slide listing advanced React topics: Concurrent Rendering, Suspense, and SSR. |
| 32 | Concurrent Rendering | No major diagram. The slide explains concurrent rendering as interruptible, background, prioritized rendering that avoids UI freezing. |
| 33 | Concurrent Rendering | No major diagram. The slide compares legacy rendering problems with concurrent rendering benefits and names hooks that enable concurrent features. |
| 34 | useTransition: Prioritizing UI Updates (React 18) | No major diagram. The slide shows the key `useTransition` syntax and explains `isPending` and `startTransition`. |
| 35 | useTransition: Prioritizing UI Updates (React 18) | Code screenshot shows a large-list filtering example using useTransition. The visual explains urgent input updates and non-urgent filtering work. |
| 36 | useDeferredValue: Avoid Lag in Fast-Typing Scenarios | No major diagram. The slide explains useDeferredValue for delaying non-urgent values during fast typing. |
| 37 | useDeferredValue: Avoid Lag in Fast-Typing Scenarios | The slide shows the essential syntax `const deferredQuery = useDeferredValue(query);` and explains immediate vs deferred values. |
| 38 | useDeferredValue: Avoid Lag in Fast-Typing Scenarios | Code screenshot shows a smooth search example with heavy list rendering using useDeferredValue. |
| 39 | useDeferredValue: Avoid Lag in Fast-Typing Scenarios | No major diagram. The slide lists results and use cases of useDeferredValue. |
| 40 | React Suspense | No major diagram. The slide explains Suspense as a cleaner alternative to manual loading checks. |
| 41 | React Suspense | No major diagram. The slide lists Suspense use cases: lazy components, server components/streaming, data fetching with frameworks/libraries, and fallback UI. |
| 42 | React Suspense | Code screenshot shows lazy loading using React.lazy and Suspense with a fallback UI. |
| 43 | Server-Side Rendering (SSR) in React | Step-by-step SSR flow: browser request → server runs React/fetches data → server sends HTML → JavaScript hydrates the page. |
| 44 | Server-Side Rendering (SSR) in React | No major diagram. The slide explains SSR benefits: SEO, faster first load, better slow-device performance, and dynamic content handling. |
| 45 | Server-Side Rendering (SSR) in React | No major diagram. The slide explains that SSR is usually provided by frameworks such as Next.js, not plain React alone. |
| 46 | Server-Side Rendering (SSR) in React | No major diagram. The slide lists practical SSR use cases and examples such as e-commerce, blogs, landing pages, and portfolios. |
| 47 | Client-Side Rendering (CSR) in React | Step-by-step CSR flow: browser loads minimal HTML → JavaScript bundle downloads → React builds UI in browser → data is fetched client-side. |
| 48 | Client-Side Rendering (CSR) in React | Two-column comparison of CSR advantages and disadvantages. |
| 49 | Client-Side Rendering (CSR) in React | Two-column slide showing where CSR is ideal and common tools used for CSR. |
| 50 | Thank You | Final thank-you slide. No technical content beyond lecture closure. |

# Likely Exam Questions and Short Answers

## Question 1
Why do large React apps need advanced state management?

**Expected Answer:** Because state becomes complex, many components need the same data, prop drilling increases, logic is repeated, and unnecessary re-renders can hurt performance.

## Question 2
What is prop drilling?

**Expected Answer:** Prop drilling is passing data through many nested components even when intermediate components do not need that data.

## Question 3
What is the Context API?

**Expected Answer:** The Context API is a built-in React feature that lets components share data without manually passing props at every level.

## Question 4
Explain the three steps of Context API.

**Expected Answer:** Create a context using createContext(), provide values using a Provider, and consume the values using useContext() or Context.Consumer.

## Question 5
When should Context API be used?

**Expected Answer:** Use it for simple global state needed by many components, such as theme, auth user, language, layout preferences, and app settings.

## Question 6
When should Context API not be used?

**Expected Answer:** Avoid it for frequently changing state, complex business logic, many nested providers, large app-wide state, API caching, real-time updates, and cases needing strong debugging tools.

## Question 7
What is Redux?

**Expected Answer:** Redux is a predictable global state management library that centralizes application state in a single store.

## Question 8
State the three core Redux principles.

**Expected Answer:** Single source of truth, state is read-only, and changes are made with pure reducers.

## Question 9
What is Redux Toolkit?

**Expected Answer:** Redux Toolkit is the official recommended way to write Redux logic with less boilerplate, built-in Immer, middleware, DevTools, slices, and async support.

## Question 10
What is React Redux?

**Expected Answer:** React Redux is the official library that connects Redux with React and provides Provider, useSelector(), and useDispatch().

## Question 11
What is useSelector()?

**Expected Answer:** useSelector() reads a selected part of Redux state and re-renders the component only when that selected value changes.

## Question 12
What is useDispatch()?

**Expected Answer:** useDispatch() returns the dispatch function, which sends actions to the Redux store.

## Question 13
Compare Context API and Redux Toolkit.

**Expected Answer:** Context API is best for simple, rarely changing global UI state. Redux Toolkit is best for large, complex, frequently updated, multi-feature state with debugging needs.

## Question 14
What is concurrent rendering?

**Expected Answer:** Concurrent rendering is a React 18 system that lets React interrupt, prioritize, and schedule rendering work to keep the UI responsive.

## Question 15
What does useTransition() do?

**Expected Answer:** useTransition() separates urgent updates from non-urgent heavy updates, allowing heavy work to run in the background.

## Question 16
What does useDeferredValue() do?

**Expected Answer:** useDeferredValue() returns a delayed version of a value so heavy rendering can wait while urgent interactions like typing stay responsive.

## Question 17
What is React Suspense?

**Expected Answer:** Suspense lets React pause rendering while waiting for lazy code or async resources and show fallback UI until ready.

## Question 18
What is SSR?

**Expected Answer:** Server-Side Rendering renders React components on the server and sends complete HTML to the browser, improving SEO and first load speed.

## Question 19
What is hydration?

**Expected Answer:** Hydration is the process where client-side JavaScript attaches event handlers and interactivity to server-rendered HTML.

## Question 20
What is CSR?

**Expected Answer:** Client-Side Rendering means the browser downloads JavaScript and renders the React UI on the client side.

## Question 21
Give two advantages and two disadvantages of CSR.

**Expected Answer:** Advantages: excellent interactivity and fast navigation after loading. Disadvantages: slow first page load and poor SEO for content-heavy pages.

## Question 22
When is SSR better than CSR?

**Expected Answer:** SSR is better for public, content-heavy, SEO-sensitive pages such as blogs, e-commerce product pages, landing pages, and portfolios.

# Common Mistakes to Avoid

- **Page 02:** Thinking useState is bad. It is not bad; it is insufficient only when state must be shared widely or managed at scale.
- **Page 03:** Confusing Context API with Redux Toolkit. Context is simpler; Redux Toolkit is more scalable and structured.
- **Page 04:** Thinking createContext stores data. It only creates the context object; Provider supplies the actual value.
- **Page 05:** Using Context for very fast-changing values like every keystroke in a search input. That can cause excessive re-renders.
- **Page 06:** Passing props through many components that do not use the value. That is exactly the prop-drilling problem.
- **Page 07:** Assuming Context removes all state problems. It solves access/sharing, not complex updates, caching, or debugging.
- **Page 08:** Forgetting to wrap components with the Provider before calling useContext.
- **Page 09:** Putting the actual state in the context file. The context file usually defines the shared context object only.
- **Page 10:** Forgetting to pass both value and updater function when child components must update global state.
- **Page 11:** Nesting too many providers without structure. This can become Provider Hell.
- **Page 12:** Calling useContext outside a React component or outside the matching Provider.
- **Page 13:** Expecting only one component to update. All components consuming changed context may re-render.
- **Page 15:** Using Context for complex scalable app state when Redux Toolkit would be cleaner.
- **Page 16:** Ignoring Context re-render cost in large apps.
- **Page 17:** Expecting Context to provide Redux DevTools-like debugging. It does not.
- **Page 18:** Thinking Redux is component-to-component communication. Redux uses a centralized store instead.
- **Page 19:** Mutating Redux state directly in classic Redux. In Redux Toolkit, apparent mutation is safe because Immer handles immutability.
- **Page 21:** Mixing useSelector and useDispatch: useSelector reads, useDispatch sends actions.
- **Page 23:** Thinking Redux Toolkit is a different replacement for Redux. It is the modern recommended way to write Redux logic.
- **Page 25:** Installing only @reduxjs/toolkit and forgetting react-redux hooks/provider integration.
- **Page 31:** Writing “Advance React” in answers. Use the correct phrase “Advanced React”.
- **Page 32:** Thinking concurrent rendering means React always renders faster. More accurately, it keeps the UI responsive by scheduling and prioritizing work.
- **Page 34:** Using useTransition for every state update. Use it for non-urgent heavy updates only.
- **Page 36:** Confusing useDeferredValue with debouncing. It defers rendering priority but is not the same as a timer-based debounce.
- **Page 40:** Thinking Suspense is only for data fetching. It is also used for lazy loading components and server rendering patterns.
- **Page 43:** Confusing SSR and hydration. SSR creates HTML on the server; hydration attaches interactivity on the client.
- **Page 47:** Thinking CSR means no server exists. CSR still may use APIs/backends; only UI rendering mainly happens in the browser.
- **Page 48:** Claiming CSR is always worse. CSR is excellent for highly interactive private apps.
- Do not say Context API and Redux Toolkit are the same. They solve related problems at different scales.
- Do not write that Redux directly mutates component state. Redux state updates go through actions and reducers.
- Do not confuse SSR with CSR: SSR renders HTML on the server; CSR renders UI in the browser.
- Do not confuse Suspense with a normal spinner. Suspense is a declarative mechanism for fallback rendering while waiting.

# Final One-Page Revision Notes

## Core Memory Hooks

- **Context API = simple shared state**: theme, auth user, language, settings.
- **Redux Toolkit = complex scalable state**: API data, real-time updates, multiple features, strong debugging.
- **useSelector = read Redux state**.
- **useDispatch = update Redux state by dispatching actions**.
- **useTransition = mark heavy updates as non-urgent**.
- **useDeferredValue = delay heavy value updates while keeping typing responsive**.
- **Suspense = fallback UI while waiting for code/data/resource**.
- **SSR = server renders HTML first; better SEO and first load**.
- **CSR = browser renders UI after JS loads; best for interactive apps**.

## Must-Know Flow Diagrams

```text
Context API: createContext → Provider value → useContext
Redux: component → dispatch(action) → reducer → store → UI update
SSR: request → server renders HTML → browser displays → hydration
CSR: minimal HTML → JS downloads → React renders in browser → API data loads
```

## Context API vs Redux Toolkit

| Feature | Context API | Redux Toolkit |
|---|---|---|
| Best for | Simple global UI state | Complex scalable app state |
| Built into React | Yes | No |
| Debugging tools | Limited | Strong DevTools |
| Frequent updates | Not ideal | Better suited |
| Boilerplate | Low | Moderate but reduced by RTK |
| Examples | Theme, auth, language | Cart, API data, dashboards, real-time data |

## SSR vs CSR

| Feature | SSR | CSR |
|---|---|---|
| Rendering place | Server | Browser |
| First load | Faster meaningful content | Slower initial display |
| SEO | Strong | Weak if purely JS-rendered |
| Interactivity | Needs hydration | Strong after JS loads |
| Best for | Public content pages | Dashboards, SaaS, private apps |

## Execution Checklist

- [x] Read the uploaded PDF.
- [x] Read the uploaded TXT file.
- [x] Compared PDF and TXT through extracted slide text and rendered slide visuals.
- [x] Followed original PDF page order exactly.
- [x] Added page numbers for every slide/page.
- [x] Included every text point available from the lecture extraction.
- [x] Preserved and reconstructed visible code examples in Markdown code blocks.
- [x] Did not render HTML/JSX tags as actual HTML.
- [x] Described images, diagrams, screenshots, and visual meanings.
- [x] Added simple explanations for difficult points.
- [x] Added useful text diagrams.
- [x] Added comparison tables where useful.
- [x] Added definitions and simple meanings.
- [x] Added exam tips.
- [x] Added common mistakes.
- [x] Added full lecture summary.
- [x] Added key definitions table.
- [x] Added quick revision table.
- [x] Added important code snippets section.
- [x] Added important diagrams summary.
- [x] Added likely exam questions with expected answers.
- [x] Added final one-page revision notes.
- [x] Created only one downloadable `.md` file.
- [x] Did not create a PDF.