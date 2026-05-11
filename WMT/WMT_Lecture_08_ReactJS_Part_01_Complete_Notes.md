# SE2020 - Web Technologies and Mobile - Lecture 08

## ReactJS Part 01

**Institution:** Sri Lanka Institute of Information Technology  
**Faculty:** Faculty of Computing  
**Module Code:** SE2020  
**Module Name:** Web Technologies and Mobile  
**Lecture Number:** 08  
**Lecture Title:** ReactJS Part 01  
**Lecturer:** Ms. Dilani Lunugalage  
**Degree/Program:** BSc (Hons) in Information Technology  
**Total PDF Pages/Slides:** 74

---

# Table of Contents

- [Page 01 - Title Page](#page-01---title-page)
- [Page 02 - Lecture 08 - ReactJS Part 01](#page-02---lecture-08-reactjs-part-01)
- [Page 03 - Agenda](#page-03---agenda)
- [Page 04 - What is Frontend Development?](#page-04---what-is-frontend-development)
- [Page 05 - Role of a Frontend Developer](#page-05---role-of-a-frontend-developer)
- [Page 06 - Why Frontend Development is Important](#page-06---why-frontend-development-is-important)
- [Page 07 - Frontend vs Backend](#page-07---frontend-vs-backend)
- [Page 08 - Frontend Has Two Broad Areas](#page-08---frontend-has-two-broad-areas)
- [Page 09 - The Frontend Technology Stack](#page-09---the-frontend-technology-stack)
- [Page 10 - Types of Frontend Applications](#page-10---types-of-frontend-applications)
- [Page 11 - The Need for Frameworks like React](#page-11---the-need-for-frameworks-like-react)
- [Page 12 - Web Foundations Overview](#page-12---web-foundations-overview)
- [Page 13 - HTML (Structure)](#page-13---html-structure)
- [Page 14 - CSS (Styling & Layout)](#page-14---css-styling-layout)
- [Page 15 - JavaScript (Interactivity & Logic)](#page-15---javascript-interactivity-logic)
- [Page 16 - What is the DOM? (Document Object Model)](#page-16---what-is-the-dom-document-object-model)
- [Page 17 - Why DOM Exists?](#page-17---why-dom-exists)
- [Page 18 - DOM Manipulation with JavaScript (Traditional Way)](#page-18---dom-manipulation-with-javascript-traditional-way)
- [Page 19 - What is the Virtual DOM? (React Secret Weapon)](#page-19---what-is-the-virtual-dom-react-secret-weapon)
- [Page 20 - DOM vs Virtual DOM](#page-20---dom-vs-virtual-dom)
- [Page 21 - Evolution of Frontend Development](#page-21---evolution-of-frontend-development)
- [Page 22 - ReactJS](#page-22---reactjs)
- [Page 23 - Introduction to React](#page-23---introduction-to-react)
- [Page 24 - Why React?](#page-24---why-react)
- [Page 25 - JSX (React Syntax)](#page-25---jsx-react-syntax)
- [Page 26 - JSX Rules and Render Flow](#page-26---jsx-rules-and-render-flow)
- [Page 27 - React File Structure](#page-27---react-file-structure)
- [Page 28 - React Components](#page-28---react-components)
- [Page 29 - Types of Components](#page-29---types-of-components)
- [Page 30 - What Are Props?](#page-30---what-are-props)
- [Page 31 - Props Example](#page-31---props-example)
- [Page 32 - What is State?](#page-32---what-is-state)
- [Page 33 - State Example](#page-33---state-example)
- [Page 34 - State Rules and Callback Pattern](#page-34---state-rules-and-callback-pattern)
- [Page 35 - Component Lifecycle](#page-35---component-lifecycle)
- [Page 36 - Mounting Phase (Class Components)](#page-36---mounting-phase-class-components)
- [Page 37 - Updating Phase (Class Components)](#page-37---updating-phase-class-components)
- [Page 38 - Unmounting Phase (Class Components)](#page-38---unmounting-phase-class-components)
- [Page 39 - Functional Components Lifecycle (using useEffect)](#page-39---functional-components-lifecycle-using-useeffect)
- [Page 40 - React Component Lifecycle Diagram](#page-40---react-component-lifecycle-diagram)
- [Page 41 - Mapping Class Methods to useEffect](#page-41---mapping-class-methods-to-useeffect)
- [Page 42 - What Are Event Handlers?](#page-42---what-are-event-handlers)
- [Page 43 - Event Handling Syntax in React](#page-43---event-handling-syntax-in-react)
- [Page 44 - Passing Arguments to Event Handlers](#page-44---passing-arguments-to-event-handlers)
- [Page 45 - Event Object and Common React Events](#page-45---event-object-and-common-react-events)
- [Page 46 - Form Submissions and Named Handlers](#page-46---form-submissions-and-named-handlers)
- [Page 47 - What Are React Hooks?](#page-47---what-are-react-hooks)
- [Page 48 - Rules of Hooks](#page-48---rules-of-hooks)
- [Page 49 - useState Hook](#page-49---usestate-hook)
- [Page 50 - useEffect Hook](#page-50---useeffect-hook)
- [Page 51 - useContext and useReducer](#page-51---usecontext-and-usereducer)
- [Page 52 - What Is State?](#page-52---what-is-state)
- [Page 53 - Managing State | Reacting to Inputs](#page-53---managing-state-reacting-to-inputs)
- [Page 54 - Managing State | State Structure](#page-54---managing-state-state-structure)
- [Page 55 - Managing State | State Sharing](#page-55---managing-state-state-sharing)
- [Page 56 - Managing State | Preserving & Resetting State](#page-56---managing-state-preserving-resetting-state)
- [Page 57 - Managing State | Using Reducer](#page-57---managing-state-using-reducer)
- [Page 58 - Managing State | With Context](#page-58---managing-state-with-context)
- [Page 59 - Build Tools in Modern Web Development](#page-59---build-tools-in-modern-web-development)
- [Page 60 - Babel](#page-60---babel)
- [Page 61 - Bundling](#page-61---bundling)
- [Page 62 - Bundling + Optimization Techniques](#page-62---bundling-optimization-techniques)
- [Page 63 - Webpack Overview](#page-63---webpack-overview)
- [Page 64 - Webpack Features and Importance](#page-64---webpack-features-and-importance)
- [Page 65 - Parcel Overview](#page-65---parcel-overview)
- [Page 66 - Parcel Features](#page-66---parcel-features)
- [Page 67 - Parcel Advanced Capabilities](#page-67---parcel-advanced-capabilities)
- [Page 68 - Vite Overview](#page-68---vite-overview)
- [Page 69 - Vite Features and How It Works](#page-69---vite-features-and-how-it-works)
- [Page 70 - Vite Benefits and When to Use](#page-70---vite-benefits-and-when-to-use)
- [Page 71 - Webpack vs Parcel vs Vite](#page-71---webpack-vs-parcel-vs-vite)
- [Page 72 - Setting Up React](#page-72---setting-up-react)
- [Page 73 - Popular Frameworks for React](#page-73---popular-frameworks-for-react)
- [Page 74 - Thank You](#page-74---thank-you)
- [Full Lecture Summary](#full-lecture-summary)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Important Code Snippets](#important-code-snippets)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---
# Page-by-Page Lecture Notes

## Page 01 - Title Page

### Original Slide Content

Sri Lanka Institute of Information Technology
               Faculty of Computing


       SE2020 - Web Technologies and Mobile

                 Ms. Dilani Lunugalage

### Visual Explanation

No major visual content.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 02 - Lecture 08 - ReactJS Part 01

### Original Slide Content

Lecture 08

ReactJS Part 01

### Visual Explanation

No major visual content.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 03 - Agenda

### Original Slide Content

Agenda
 1    Introduction to Frontend Development
 2    Web Foundations (HTML, CSS, JavaScript)
 3    DOM & Virtual DOM
 4    Introduction to React
 5    React Components & JSX
 6    Props and State
 7    React Component Lifecycle
 8    Event Handling in React
 9    React Hooks (useState, useEffect)
 10   State Management Basics
 11   Build Tools (Babel, Webpack, Vite)
 12   Setting Up a Modern React Project

### Visual Explanation

No major visual content.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 04 - What is Frontend Development?

### Original Slide Content

What is Frontend Development?

Frontend development is the process of creating the visual and
interactive layer of a web application that users directly interact with.

It involves:
    Designing how the application looks
    Making it interactive
    Ensuring it is responsive and accessible
    Creating a smooth user experience

Runs entirely on:
    Web browsers (Chrome, Firefox, Safari, Edge)

### Visual Explanation

Mostly text-based slide. It defines frontend as the visual and interactive layer that runs in browsers.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 05 - Role of a Frontend Developer

### Original Slide Content

Role of a Frontend Developer

A frontend developer focuses on:
✓ Building user interfaces
✓ Ensuring mobile responsiveness   Example tasks:
✓ Implementing animations &          ▷ Creating navigation menus
  transitions                        ▷ Building forms & input
✓ Integrating with backend APIs        validations
✓ Managing browser compatibility     ▷ Rendering data from backend
✓ Optimizing performance             ▷ Building SPA components
                                       (React, Angular, Vue)
✓ Enhancing accessibility (WCAG
  standards)

### Visual Explanation

Two-column layout: left side lists responsibilities; right side lists example tasks. The visual structure separates daily work from overall responsibilities.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 06 - Why Frontend Development is Important

### Original Slide Content

Why Frontend Development is Important
Frontend is the first impression of any application.

Key reasons:
    Determines usability & user satisfaction
    Impacts user engagement
    Influences conversion rate for business applications
    Affects brand identity & visual communication

Technical benefits:
    Efficient UI → Less server load
    Enhances app responsiveness
    Enables dynamic, real-time updates
    Modern applications like Facebook, Gmail, YouTube rely heavily on
    powerful frontend engineering.

### Visual Explanation

No major visual content.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 07 - Frontend vs Backend

### Original Slide Content

Frontend vs Backend

Frontend (Client-Side)
Runs inside the browser            Backend (Server-Side)
Handles UI, animations, events,    Runs on servers
forms                              Handles:
Focus on:                               Business logic
    Layout design                       Data processing
    Responsiveness                      Authentication
    User interaction                    APIs & databases
    Accessibility

Example in real world:
Frontend = what you see on YouTube (videos, buttons, search box)
Backend = storing videos, user accounts, recommendations

### Visual Explanation

Two-column comparison layout showing frontend/client-side vs backend/server-side responsibilities.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Visual/Text Diagram

```text
User Browser (Frontend) <---- API Request/Response ----> Server + Database (Backend)
```

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

Do not say frontend and backend are the same. Frontend runs in browser; backend runs on server.

---

## Page 08 - Frontend Has Two Broad Areas

### Original Slide Content

Frontend Has Two Broad Areas
1. UI/UX Design
Focus on:
    Visual layout                2. Frontend Engineering
                                 Focus on:
    Color theory
                                     HTML, CSS, JavaScript
    Typography
                                     Frameworks (React, Angular,
    User navigation                  Vue)
    Accessibility (A11Y)             Optimization & performance
    Human–Computer Interaction       Build tools (Vite, Webpack)
    principles
                                     Testing tools (Jest, React
Tools used:                          Testing Library)
    Figma                            DevOps (CI/CD for frontend)
    Adobe XD
    Canva

### Visual Explanation

Two-column layout separating UI/UX design from frontend engineering.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 09 - The Frontend Technology Stack

### Original Slide Content

The Frontend Technology Stack
1. Core Languages
    HTML5
    CSS3
    JavaScript (ES6+)       4. Build Tools
2. Frameworks & Libraries       Vite
    React                       Webpack
    Angular                     Parcel
    Vue                     5. Version Control
3. Styling Tools                Git
    Tailwind CSS                GitHub / GitLab / Bitbucket
    Bootstrap
    Material UI
    Sass / Less

### Visual Explanation

Technology stack list grouped into languages, libraries/frameworks, styling tools, build tools, and version control.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 10 - Types of Frontend Applications

### Original Slide Content

Types of Frontend Applications

1. Static Websites
                                    3. Single Page Applications
    HTML + CSS
                                    (SPA)
    No dynamic content
                                        Entire application loads once
    Examples: Personal portfolio,
                                        New content rendered using
    company introduction page
                                        JavaScript
2. Dynamic Websites                     Fast, app-like experience
    JS-based interactivity              Tools: React, Vue, Angular
    Form submissions                    Examples:
    Displaying dynamic data                 Facebook
                                            Gmail
    Examples: News websites, blog           Twitter Web App
    systems

### Visual Explanation

Three application types are visually separated: static websites, dynamic websites, and SPAs.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 11 - The Need for Frameworks like React

### Original Slide Content

The Need for Frameworks like React
Traditional frontend development had challenges:
    Hard to manage complex UIs
    DOM updates are slow
    Code becomes difficult to maintain
    No structured component system
    Reusability is limited

React solves these problems with:
 ✓ Components
 ✓ Virtual DOM
 ✓ State management
 ✓ Hooks
 ✓ Declarative programming

### Visual Explanation

Text slide showing traditional frontend problems and React solutions.

### Explanation

This section builds the base idea of frontend development: it is the part of the application users see and use. The key exam angle is understanding responsibilities, tools, and why frameworks became necessary.

### Exam Tip

Define frontend, compare frontend/backend, and explain why frameworks like React are needed.

### Common Mistake

No major common mistake.

---

## Page 12 - Web Foundations Overview

### Original Slide Content

Web Foundations Overview
To build any frontend application (including React), you need three core
technologies:

HTML → Structure
    Defines the layout and elements of the web page
    (Headings, paragraphs, forms, images, buttons)
CSS → Styling
    Controls the appearance
    (Colors, fonts, spacing, layout, responsiveness)
JavaScript → Behavior
    Makes the website interactive
    (Events, logic, API calls, dynamic updates)

### Visual Explanation

Illustration with HTML/CSS/JS icons. Meaning: every frontend app needs structure, styling, and behavior.

### Explanation

HTML, CSS, and JavaScript form the minimum foundation for web interfaces. HTML creates the elements, CSS controls presentation, and JavaScript makes the page respond to user actions.

### Visual/Text Diagram

```text
HTML = Structure
CSS  = Styling
JS   = Behavior
```

### Exam Tip

Remember the formula: HTML = structure, CSS = style, JavaScript = behavior.

### Common Mistake

No major common mistake.

---

## Page 13 - HTML (Structure)

### Original Slide Content

HTML (Structure)


HTML provides the skeleton of a webpage.

Key points:
    Uses tags to organize content
    Creates headings, paragraphs, images, lists
    Semantic HTML improves SEO and accessibility

Example:
<h1>Welcome</h1> <p>This is my website</p>
    In React, you will write HTML-like syntax using JSX.

### Code from Slide

```html
<h1>Welcome</h1> <p>This is my website</p>
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Developer illustration beside HTML points. Code example is visible and preserved as code.

### Explanation

HTML, CSS, and JavaScript form the minimum foundation for web interfaces. HTML creates the elements, CSS controls presentation, and JavaScript makes the page respond to user actions.

### Exam Tip

Remember the formula: HTML = structure, CSS = style, JavaScript = behavior.

### Common Mistake

No major common mistake.

---

## Page 14 - CSS (Styling & Layout)

### Original Slide Content

CSS (Styling & Layout)
CSS controls how HTML elements look and adjust on different screen
sizes.

What CSS does:
  ▷ Colors, fonts, spacing
  ▷ Layout using Flexbox & Grid
  ▷ Animations & transitions
  ▷ Responsive design for mobile/tablets

Example:
button background: blue; color: white;
React integrates well with CSS frameworks like Tailwind, MUI,
Bootstrap.

### Code from Slide

```css
button background: blue; color: white;
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Developer illustration beside CSS points. CSS example is visible and preserved as code-like CSS.

### Explanation

HTML, CSS, and JavaScript form the minimum foundation for web interfaces. HTML creates the elements, CSS controls presentation, and JavaScript makes the page respond to user actions.

### Exam Tip

Remember the formula: HTML = structure, CSS = style, JavaScript = behavior.

### Common Mistake

No major common mistake.

---

## Page 15 - JavaScript (Interactivity & Logic)

### Original Slide Content

JavaScript (Interactivity & Logic)
JavaScript brings the page to life.

What JS enables:
 ▷ Click events & user interactions
 ▷ Form validation
 ▷ API calls (fetching data from backend)
 ▷ Changing the DOM dynamically
 ▷ Running logic inside the browser

Example:
 document.getElementById("btn").onclick = () =>
alert("Clicked!");
  ▷ React is built on JavaScript and makes UI updates easier and faster
    using components & Virtual DOM.

### Code from Slide

```javascript
document.getElementById("btn").onclick = () =>
  alert("Clicked!");
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Developer illustration beside JavaScript points. JS event handler example is visible and preserved.

### Explanation

HTML, CSS, and JavaScript form the minimum foundation for web interfaces. HTML creates the elements, CSS controls presentation, and JavaScript makes the page respond to user actions.

### Exam Tip

Remember the formula: HTML = structure, CSS = style, JavaScript = behavior.

### Common Mistake

No major common mistake.

---

## Page 16 - What is the DOM? (Document Object Model)

### Original Slide Content

What is the DOM? (Document Object Model)

The DOM is the browser’s internal
representation of your webpage.

Key characteristics:
  ⋄ Represents HTML as a tree
    structure
  ⋄ Each element = a node
  ⋄ Allows JavaScript to read,
    modify, create, or delete
    elements
  ⋄ React ultimately interacts with
    the DOM through JSX               Source: https://en.wikipedia.org/
                                      wiki/Document_Object_Model

### Visual Explanation

DOM tree diagram: document -> html -> head/body -> title/h1/a nodes. It shows that every HTML element becomes a node in a tree.

### Explanation

The browser converts HTML into the DOM tree. Direct DOM manipulation can be slow in complex UIs. React uses the Virtual DOM to calculate efficient updates before changing the real DOM.

### Visual/Text Diagram

```text
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── a
```

### Exam Tip

Expect DOM vs Virtual DOM comparison questions. Use keywords: tree, node, lightweight copy, efficient updates.

### Common Mistake

Do not say React directly updates the whole real DOM every time. React compares Virtual DOM first.

---

## Page 17 - Why DOM Exists?

### Original Slide Content

Why DOM Exists?



The browser converts HTML → DOM so it can:

 ✓ Render content visually
 ✓ Process styling (CSS)
 ✓ Handle events (click, scroll, input)
 ✓ Update content when JS modifies it

This makes DOM essential for dynamic pages.

### Visual Explanation

No major visual content.

### Explanation

The browser converts HTML into the DOM tree. Direct DOM manipulation can be slow in complex UIs. React uses the Virtual DOM to calculate efficient updates before changing the real DOM.

### Exam Tip

Expect DOM vs Virtual DOM comparison questions. Use keywords: tree, node, lightweight copy, efficient updates.

### Common Mistake

Do not say React directly updates the whole real DOM every time. React compares Virtual DOM first.

---

## Page 18 - DOM Manipulation with JavaScript (Traditional Way)

### Original Slide Content

DOM Manipulation with JavaScript (Traditional Way)

JavaScript directly modifies the DOM:

Example:
 document.getElementById("title").innerText = "Updated
Title";

Problems in complex UIs:
    Repeated DOM access is slow
    Browser has to re-calculate layout
    UI gets janky in large applications
    Hard to maintain when UI grows
    Risk of inconsistent UI state

### Code from Slide

```javascript
document.getElementById("title").innerText = "Updated Title";
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

No major visual content.

### Explanation

The browser converts HTML into the DOM tree. Direct DOM manipulation can be slow in complex UIs. React uses the Virtual DOM to calculate efficient updates before changing the real DOM.

### Exam Tip

Expect DOM vs Virtual DOM comparison questions. Use keywords: tree, node, lightweight copy, efficient updates.

### Common Mistake

Do not say React directly updates the whole real DOM every time. React compares Virtual DOM first.

---

## Page 19 - What is the Virtual DOM? (React Secret Weapon)

### Original Slide Content

What is the Virtual DOM? (React’s Secret Weapon)


The Virtual DOM (VDOM) is a lightweight JavaScript
representation of the actual DOM.

Key Points:
    React keeps a copy of the UI in memory
    Updating the Virtual DOM is faster than updating the real DOM
    React uses this to decide when and what to update

Diagram:
Actual DOM (slow) → Virtual DOM (lightweight copy) → React
Components (JSX)

### Visual Explanation

No major visual content.

### Explanation

The browser converts HTML into the DOM tree. Direct DOM manipulation can be slow in complex UIs. React uses the Virtual DOM to calculate efficient updates before changing the real DOM.

### Visual/Text Diagram

```text
Component returns JSX
        ↓
React creates Virtual DOM
        ↓
React compares old vs new VDOM
        ↓
Only changed real DOM nodes update
```

### Exam Tip

Expect DOM vs Virtual DOM comparison questions. Use keywords: tree, node, lightweight copy, efficient updates.

### Common Mistake

Do not say React directly updates the whole real DOM every time. React compares Virtual DOM first.

---

## Page 20 - DOM vs Virtual DOM

### Original Slide Content

DOM vs Virtual DOM

| Feature | DOM | Virtual DOM |
|---|---|---|
| Nature | Real browser structure | JS object representation |
| Update Speed | Slow | Fast |
| Re-render | Whole page or large sections | Only changed nodes |
| Efficiency | Low for large UIs | Very high |
| Used By | Browser | React |

### Visual Explanation

Comparison table between real DOM and Virtual DOM. The table is recreated in Markdown under Original Slide Content.

### Explanation

The browser converts HTML into the DOM tree. Direct DOM manipulation can be slow in complex UIs. React uses the Virtual DOM to calculate efficient updates before changing the real DOM.

### Exam Tip

Expect DOM vs Virtual DOM comparison questions. Use keywords: tree, node, lightweight copy, efficient updates.

### Common Mistake

Do not say React directly updates the whole real DOM every time. React compares Virtual DOM first.

---

## Page 21 - Evolution of Frontend Development

### Original Slide Content

Evolution of Frontend Development




Source: https:
//www.epineda.net/the-evolution-of-front-end-development/amp/

### Visual Explanation

Evolution diagram: frontend moved from direct JavaScript/DOM manipulation to jQuery and then to modern libraries/frameworks.

### Explanation

The browser converts HTML into the DOM tree. Direct DOM manipulation can be slow in complex UIs. React uses the Virtual DOM to calculate efficient updates before changing the real DOM.

### Exam Tip

Expect DOM vs Virtual DOM comparison questions. Use keywords: tree, node, lightweight copy, efficient updates.

### Common Mistake

Do not say React directly updates the whole real DOM every time. React compares Virtual DOM first.

---

## Page 22 - ReactJS

### Original Slide Content

ReactJS

### Visual Explanation

React logo slide. It introduces the ReactJS section.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

No major common mistake.

---

## Page 23 - Introduction to React

### Original Slide Content

Introduction to React
React is a JavaScript library used to build modern, interactive user
interfaces.
Key characteristics:
 ⋄ Developed and maintained by Meta (Facebook).
 ⋄ Used for building Single Page Applications (SPAs).
 ⋄ Represents the View layer in the MVC architecture.
 ⋄ Ideal for large applications that update content without reloading
    the entire page.
 ⋄ Supports multiple platforms:
         ReactJS for web
         React Native for mobile (Android/iOS)
         React 360 / React VR for VR/AR
  ⋄ Focuses on speed, simplicity, and scalability.
  ⋄ Examples: Facebook, Instagram, WhatsApp Web, Netflix UI
React is widely adopted in industry due to its simplicity and performance.

### Visual Explanation

No major visual content.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

No major common mistake.

---

## Page 24 - Why React?

### Original Slide Content

Why React?
React solves modern UI challenges through:
 ✓ Fast Rendering (Virtual DOM)
   Only updates changed parts of UI → very efficient.
 ✓ Component-Based Architecture
   Build UI like LEGO blocks → reusable, maintainable.
 ✓ Declarative UI
   You describe what UI should look like, React handles how to update
   it.
 ✓ One-Way Data Flow
   Predictable behavior, easy debugging.
 ✓ Cross-platform
   React.js → Web      —   React Native → Mobile            +     React VR →
   VR environments

### Visual Explanation

No major visual content.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

No major common mistake.

---

## Page 25 - JSX (React Syntax)

### Original Slide Content

JSX (React Syntax)
JSX = JavaScript XML
Features:
    Allows writing HTML-like syntax in JavaScript.
    Easy to read and write.
    Understands dynamic JavaScript expressions.
    Compiled by Babel into pure JavaScript.
    Prevents XSS
    Supports expressions inside {}
    Easier maintenance
Example:
const element = <h1>Welcome to React</h1>;
JSX is the foundation of building React UI.

### Code from Slide

```jsx
const element = <h1>Welcome to React</h1>;
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

No major visual content.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

Do not write JSX exactly like plain HTML. React uses className, one parent element, and closed tags.

---

## Page 26 - JSX Rules and Render Flow

### Original Slide Content

JSX (React Syntax)
JSX Rules
  ⋄ Must return only one parent element
     return ( <div> <h1>Hello</h1> </div> )
  ⋄ Use className instead of class
  ⋄ JS expressions inside {}
  ⋄ Must close all tags
  ⋄ No “if” inside JSX → use ternary
How React Components Render
  1 Component returns JSX

  2 Babel converts JSX → JavaScript

  3 React creates Virtual DOM

  4 React compares VDOM with old VDOM

  5 Only the changed UI updates in real DOM

### Code from Slide

```jsx
return (
  <div>
    <h1>Hello</h1>
  </div>
);
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

No major visual content.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

Do not write JSX exactly like plain HTML. React uses className, one parent element, and closed tags.

---

## Page 27 - React File Structure

### Original Slide Content

React File Structure




    /src → main development files
    /components → reusable UI pieces
    App.jsx → main app
    index.jsx → mounts app to DOM

### Visual Explanation

No major visual content.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Visual/Text Diagram

```text
src/
├── components/
├── App.jsx
└── index.jsx
```

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

No major common mistake.

---

## Page 28 - React Components

### Original Slide Content

React Components
Components are the building blocks of every React UI.

Why Components?
   Make UI modular and reusable
   Each component has its own structure, logic, and styling
   Simplifies large application development

Types of Components:
    Functional Components (modern standard)
    Class Components (older React)

Example UI Breakdown:
Everything you see on screen can be broken into components.

### Visual Explanation

Component tree: App contains Navbar, Sidebar, Dashboard, Card, Chart, SummaryBox, and Footer. It shows UI decomposition.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Visual/Text Diagram

```text
App
├── Navbar
├── Sidebar
├── Dashboard
│   ├── Card
│   ├── Chart
│   └── SummaryBox
└── Footer
```

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

No major common mistake.

---

## Page 29 - Types of Components

### Original Slide Content

Types of Components
                               2. Class Components (Older
1. Functional Components       React)
(Modern React, Recommended)
                                   Uses class syntax
    Simple JS functions
                                   Has lifecycle methods
    Use Hooks like useState,
                                   Still important for legacy
    useEffect
                                   projects
    Easy to read & maintain
                               Example:
Example:

### Code from Slide

```jsx
function Hello() {
  return <h1>Hello React!</h1>;
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Two code screenshots comparing functional and class components. Code is reconstructed and preserved.

### Explanation

React builds interfaces using reusable components and JSX. Modern React mainly uses functional components because they are simple and work with Hooks.

### Exam Tip

Be ready to define React, JSX, components, and functional vs class components.

### Common Mistake

No major common mistake.

---

## Page 30 - What Are Props?

### Original Slide Content

What Are Props?
Props = “properties”

They allow you to pass data from parent → child components.

Key Characteristics
    Read-only (immutable)
    Cannot be changed by the child
    Make components reusable
    Passed similar to HTML attributes

Example Use Cases
   Displaying dynamic content
   Customizing components
   Passing callback functions

### Visual Explanation

No major visual content.

### Explanation

Props and state are core React concepts. Props configure a child component from the parent. State belongs inside a component and stores values that change over time.

### Exam Tip

Props vs state is highly exam-friendly. Props are read-only; state changes and causes re-render.

### Common Mistake

Do not change props inside the child component. Props are immutable/read-only.

---

## Page 31 - Props Example

### Original Slide Content

Props

Example




Output: Hello, WMT

Why Props Are Important
 ⋄ Props help you build configurable components, e.g.:
   <Button text="Save" color="green" />
   <Button text="Cancel" color="red" />
 ⋄ Same component, different behavior → reusable UI.

### Code from Slide

```jsx
<App>
  <Welcome name="WMT" />
</App>
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```text
Output: Hello, WMT
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```jsx
<Button text="Save" color="green" />
<Button text="Cancel" color="red" />
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Parent and child component props example. Parent passes name="WMT" and child renders Hello, WMT.

### Explanation

Props and state are core React concepts. Props configure a child component from the parent. State belongs inside a component and stores values that change over time.

### Exam Tip

Props vs state is highly exam-friendly. Props are read-only; state changes and causes re-render.

### Common Mistake

Do not change props inside the child component. Props are immutable/read-only.

---

## Page 32 - What is State?

### Original Slide Content

What is State?
State = data that changes over time inside a component.

React updates UI whenever the state changes.

✓ Examples of state:
 □ Toggle button
 □ Dropdown open/close
 □ Logged-in user
 □ Counter value
 □ API response data
 □ Form inputs

State allows React components to be interactive.

### Visual Explanation

No major visual content.

### Explanation

Props and state are core React concepts. Props configure a child component from the parent. State belongs inside a component and stores values that change over time.

### Exam Tip

Props vs state is highly exam-friendly. Props are read-only; state changes and causes re-render.

### Common Mistake

Do not update state directly. Use the setter function such as setCount().

---

## Page 33 - State Example

### Original Slide Content

State
Example




  ⋄ useState(0) initializes
  ⋄ setCount updates
  ⋄ UI re-renders automatically

### Code from Slide

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Counter component code screenshot using useState. Shows count state and Increase button.

### Explanation

Props and state are core React concepts. Props configure a child component from the parent. State belongs inside a component and stores values that change over time.

### Exam Tip

Props vs state is highly exam-friendly. Props are read-only; state changes and causes re-render.

### Common Mistake

Do not update state directly. Use the setter function such as setCount().

---

## Page 34 - State Rules and Callback Pattern

### Original Slide Content

State

Important Rules of State
 ✓ Rule 1: Never modify state         Passing Functions as Props
   directly                           (Callback Pattern)
     × count = count + 1              Child → Parent communication is
     ✓ setCount(count + 1)            done by passing functions as props.
 ✓ Rule 2: State updates are
   asynchronous
 ✓ Rule 3: Every state change
   triggers a re-render
 ✓ Rule 4: Put minimal required
   data in state
   Avoid storing values that can be
   calculated.

### Code from Slide

```javascript
// Incorrect
count = count + 1

// Correct
setCount(count + 1)
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```jsx
function Parent() {
  function handleClick() {
    alert("Child clicked!");
  }

  return <Child onButtonClick={handleClick} />;
}

function Child(props) {
  return <button onClick={props.onButtonClick}>Click</button>;
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Left side shows state rules; right side shows callback pattern for child-to-parent communication.

### Explanation

Props and state are core React concepts. Props configure a child component from the parent. State belongs inside a component and stores values that change over time.

### Exam Tip

Props vs state is highly exam-friendly. Props are read-only; state changes and causes re-render.

### Common Mistake

Do not update state directly. Use the setter function such as setCount().

---

## Page 35 - Component Lifecycle

### Original Slide Content

Component Lifecycle

React components go through 3 main phases:

  ⋄ Mounting
      ⋄ Component is created & inserted into the DOM.

  ⋄ Updating
      ⋄ Triggered when state or props change.

  ⋄ Unmounting
      ⋄ Component is removed from the DOM.

React provides lifecycle methods (Class Components) and hooks
(Functional Components) to run code during these stages.

### Visual Explanation

No major visual content.

### Explanation

React components move through lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components usually use useEffect and other Hooks.

### Visual/Text Diagram

```text
Mounting -> Updating -> Unmounting
Created   State/props   Removed
inserted  changes       cleanup
```

### Exam Tip

Memorize lifecycle phases and the mapping from class methods to hooks.

### Common Mistake

No major common mistake.

---

## Page 36 - Mounting Phase (Class Components)

### Original Slide Content

Mounting Phase (Class Components)

These methods run when the component FIRST appears onscreen.
                                 3. componentDidMount()
1. constructor(props)                 Runs AFTER component is
    Initialize state                  added to DOM
    Bind event handlers               Good for:
                                          Fetching API data
    Runs before component renders         Subscribing to events
2. render()                               Initializing timers
    Returns JSX
    Must be pure, no side effects

### Visual Explanation

No major visual content.

### Explanation

React components move through lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components usually use useEffect and other Hooks.

### Exam Tip

Memorize lifecycle phases and the mapping from class methods to hooks.

### Common Mistake

No major common mistake.

---

## Page 37 - Updating Phase (Class Components)

### Original Slide Content

Updating Phase (Class Components)
Triggered when props or state change.
  1 shouldComponentUpdate(nextProps, nextState)

         Controls re-rendering
         Return false to avoid unnecessary UI updates (performance
         optimization)
 2   render() - Re-renders UI with updated state/props
 3    getSnapshotBeforeUpdate(prevProps, prevState)
         Captures information from DOM before update
         Useful for scroll position, animation, etc.
         Returned value goes into componentDidUpdate()
 4   componentDidUpdate(prevProps, prevState, snapshot)
         Runs after component updates
         Good for:
              Updating DOM
              Making API calls based on new data
              Acting on the snapshot

### Visual Explanation

No major visual content.

### Explanation

React components move through lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components usually use useEffect and other Hooks.

### Exam Tip

Memorize lifecycle phases and the mapping from class methods to hooks.

### Common Mistake

No major common mistake.

---

## Page 38 - Unmounting Phase (Class Components)

### Original Slide Content

Unmounting Phase (Class Components)

When component is about to be removed from the DOM:

componentWillUnmount()
Used for cleanup:
    Remove event listeners
    Stop timers
    Cancel network requests
    Clean up subscriptions

### Code from Slide

```javascript
componentWillUnmount() {
  clearInterval(this.timer);
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Cleanup code screenshot for componentWillUnmount using clearInterval(this.timer).

### Explanation

React components move through lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components usually use useEffect and other Hooks.

### Exam Tip

Memorize lifecycle phases and the mapping from class methods to hooks.

### Common Mistake

No major common mistake.

---

## Page 39 - Functional Components Lifecycle (using useEffect)

### Original Slide Content

Functional Components Lifecycle (using useEffect)

Functional components replace lifecycle methods with useEffect:
 ✓ Mount + Update
   useEffect(() => console.log("Runs on every render"); );
 ✓ Mount Only
   useEffect(() =>    console.log("Runs once on mount");,[]);
 ✓ Unmount (Cleanup)
   useEffect (() => return () =>         console.log("Component
   unmounted");;,[]);
 ✓ Update Only (watch specific state)
   useEffect(() => console.log("Runs when count
   changes");,[count]);

### Code from Slide

```javascript
useEffect(() => console.log("Runs on every render"));
useEffect(() => console.log("Runs once on mount"), []);
useEffect(() => {
  return () => console.log("Component unmounted");
}, []);
useEffect(() => console.log("Runs when count changes"), [count]);
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

No major visual content.

### Explanation

React components move through lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components usually use useEffect and other Hooks.

### Exam Tip

Memorize lifecycle phases and the mapping from class methods to hooks.

### Common Mistake

Do not forget the dependency array in useEffect; it controls when the effect runs.

---

## Page 40 - React Component Lifecycle Diagram

### Original Slide Content

React Component Lifecycle

Lifecycle methods shown in the visual:
- componentDidMount()
- componentWillUnmount()
- shouldComponentUpdate(nextProps, nextState)
- getDerivedStateFromProps(props, state)
- getSnapshotBeforeUpdate(prevProps, prevState)
- componentDidUpdate(prevProps, prevState, snapshot)

The slide also states that all the above can be represented from the useEffect() hook in React Functional Components.

### Visual Explanation

Lifecycle method diagram. Methods are listed and explained as class component lifecycle points.

### Explanation

React components move through lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components usually use useEffect and other Hooks.

### Exam Tip

Memorize lifecycle phases and the mapping from class methods to hooks.

### Common Mistake

No major common mistake.

---

## Page 41 - Mapping Class Methods to useEffect

### Original Slide Content

Mapping Class Methods to useEffect

| Class Method | Functional Equivalent (Hooks) |
|---|---|
| constructor() | useState() |
| componentDidMount() | useEffect(() => {}, []) |
| shouldComponentUpdate() | React.memo(), useMemo, useCallback |
| render() | return() in function component |
| getSnapshotBeforeUpdate() | useLayoutEffect() |
| componentDidUpdate() | useEffect(() => {}, [dependencies]) |
| componentWillUnmount() | cleanup function in useEffect() |

### Visual Explanation

Class method to hook mapping table. Recreated as Markdown table.

### Explanation

React components move through lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components usually use useEffect and other Hooks.

### Exam Tip

Memorize lifecycle phases and the mapping from class methods to hooks.

### Common Mistake

No major common mistake.

---

## Page 42 - What Are Event Handlers?

### Original Slide Content

What Are Event Handlers?

Event handlers are functions that run when the user interacts with the UI.

React responds to events such as:
    Clicking a button
    Typing in an input
    Submitting a form
    Moving the mouse
    Pressing a key

React uses a Synthetic Event System which:
 ✓ Normalizes events across browsers
 ✓ Improves performance with event delegation

### Visual Explanation

No major visual content.

### Explanation

React handles user interaction using event handlers. The syntax is different from plain HTML: React uses camelCase event names and JavaScript functions.

### Exam Tip

Write event syntax accurately: onClick, onChange, onSubmit, e.preventDefault().

### Common Mistake

No major common mistake.

---

## Page 43 - Event Handling Syntax in React

### Original Slide Content

Event Handling in React
                                      Writing an Event Handler
                                      Function


Event Handling Syntax in React
React uses:
    camelCase event names
    JS functions instead of strings   Important:
Example:                                  Handler can have any name
                                          You can define it inside the
                                          component
                                          React binds events
                                          automatically (no
                                          addEventListener)

### Code from Slide

```jsx
<button onClick={handleClick}>Click Me</button>
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click</button>;
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Event handler code screenshots showing onClick and named handler function.

### Explanation

React handles user interaction using event handlers. The syntax is different from plain HTML: React uses camelCase event names and JavaScript functions.

### Exam Tip

Write event syntax accurately: onClick, onChange, onSubmit, e.preventDefault().

### Common Mistake

Do not use lowercase onclick like plain HTML. React uses onClick.

---

## Page 44 - Passing Arguments to Event Handlers

### Original Slide Content

Event Handling in React

Passing Arguments to Event Handlers
Use an arrow function when passing parameters:


Handler:




Useful for:
     Updating specific items
     Passing IDs
     Dynamic actions

### Code from Slide

```jsx
<button onClick={() => handleClick(5)}>Increase by 5</button>
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```javascript
function handleClick(amount) {
  setCount(count + amount);
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Code screenshot showing arrow function for passing an argument to an event handler.

### Explanation

React handles user interaction using event handlers. The syntax is different from plain HTML: React uses camelCase event names and JavaScript functions.

### Exam Tip

Write event syntax accurately: onClick, onChange, onSubmit, e.preventDefault().

### Common Mistake

Do not use lowercase onclick like plain HTML. React uses onClick.

---

## Page 45 - Event Object and Common React Events

### Original Slide Content

Event Handling in React
Event Object
React event handlers receive an
                                    Common React Events
event object (SyntheticEvent).




The event object contains:
    e.target → element
    e.target.value → typed text
    e.clientX / e.clientY → mouse
    position
    e.key → key pressed

### Code from Slide

```jsx
function handleInput(e) {
  console.log(e.target.value);
}

<input type="text" onChange={handleInput} />
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Event object section, likely with common event examples. Key event fields are listed in slide text.

### Explanation

React handles user interaction using event handlers. The syntax is different from plain HTML: React uses camelCase event names and JavaScript functions.

### Exam Tip

Write event syntax accurately: onClick, onChange, onSubmit, e.preventDefault().

### Common Mistake

Do not use lowercase onclick like plain HTML. React uses onClick.

---

## Page 46 - Form Submissions and Named Handlers

### Original Slide Content

Event Handling in React

Handling Form Submissions
React prevents page reload (default
                                      Inline Event Handlers vs Named
form behavior):
                                      Functions
                                      Named handler (recommended):


                                      Inline function:

                                      Best practice:
                                      Use named handlers for clarity and
                                      performance.
e.preventDefault() is essential in
React forms.

### Code from Slide

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log("Form submitted");
}

<form onSubmit={handleSubmit}>
  <input />
  <button type="submit">Submit</button>
</form>
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```jsx
// Named handler
<button onClick={handleClick}>Save</button>

// Inline function
<button onClick={() => alert("Saved")}>Save</button>
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Form submission section with preventDefault plus named handler vs inline handler examples.

### Explanation

React handles user interaction using event handlers. The syntax is different from plain HTML: React uses camelCase event names and JavaScript functions.

### Exam Tip

Write event syntax accurately: onClick, onChange, onSubmit, e.preventDefault().

### Common Mistake

Do not use lowercase onclick like plain HTML. React uses onClick.

---

## Page 47 - What Are React Hooks?

### Original Slide Content

What Are React Hooks?

Hooks are special functions that let functional components use
React features.
WHY Hooks?                          WHAT Hooks Replace:
   Functional components couldn’t      this.state → useState
   use state or lifecycle before
                                       componentDidMount /
   Hooks
                                       Update / Unmount →
   Easier than class components        useEffect
   Cleaner & more reusable logic       Context Consumer →
   No need for this keyword            useContext
   Encourages functional               Redux-like reducers →
   programming                         useReducer

### Visual Explanation

No major visual content.

### Explanation

Hooks let functional components use state, lifecycle-like behavior, context, and reducer-based state logic without class components.

### Exam Tip

State the two rules of hooks and explain useState/useEffect/useContext/useReducer.

### Common Mistake

Do not call hooks inside conditions, loops, or nested functions.

---

## Page 48 - Rules of Hooks

### Original Slide Content

React Hooks
Rule of Hooks

Hooks work only if you follow 2 strict
rules:

1. Call Hooks at the TOP level           The most common Hooks are
    Always call at the top of the
    component                              ⋄ useState
                                           ⋄ useEffect
2. Call Hooks only inside React
Components or Custom Hooks                 ⋄ useContext
    Inside functional components           ⋄ useReducer
    Inside custom hooks

Reason: React needs to track hook
order.

### Visual Explanation

No major visual content.

### Explanation

Hooks let functional components use state, lifecycle-like behavior, context, and reducer-based state logic without class components.

### Exam Tip

State the two rules of hooks and explain useState/useEffect/useContext/useReducer.

### Common Mistake

Do not call hooks inside conditions, loops, or nested functions.

---

## Page 49 - useState Hook

### Original Slide Content

React Hooks

useState Hook

useState allows components to store & update values.

Syntax:
const [value, setValue] = useState(initialValue);

Example:
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

Key Points:
- Updating state re-renders component
- Use functional updates when state depends on previous value

setCount(prev => prev + 1);

### Code from Slide

```jsx
const [value, setValue] = useState(initialValue);

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

setCount(prev => prev + 1);
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

useState syntax and counter example. Reconstructed from slide visual.

### Explanation

Hooks let functional components use state, lifecycle-like behavior, context, and reducer-based state logic without class components.

### Exam Tip

State the two rules of hooks and explain useState/useEffect/useContext/useReducer.

### Common Mistake

Do not update state directly. Use the setter function such as setCount().

---

## Page 50 - useEffect Hook

### Original Slide Content

React Hooks

useEffect Hook

useEffect runs side effects - tasks that happen outside the normal rendering of the UI.

Examples of Side Effects:
- Fetching API data
- Subscribing to events
- Timers
- Manipulating DOM
- Saving to localStorage

Syntax Variants:
- Run on every render: useEffect(() => {});
- Run only on mount: useEffect(() => {}, []);
- Run when dependencies change: useEffect(() => {}, [count]);
- Cleanup on unmount: useEffect(() => { return () => console.log("cleanup"); }, []);

### Code from Slide

```javascript
useEffect(() => {});
useEffect(() => {}, []);
useEffect(() => {}, [count]);
useEffect(() => {
  return () => console.log("cleanup");
}, []);
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

useEffect hook slide. Visual content contains side-effect examples and dependency-array variants.

### Explanation

Hooks let functional components use state, lifecycle-like behavior, context, and reducer-based state logic without class components.

### Exam Tip

State the two rules of hooks and explain useState/useEffect/useContext/useReducer.

### Common Mistake

Do not forget the dependency array in useEffect; it controls when the effect runs.

---

## Page 51 - useContext and useReducer

### Original Slide Content

React Hooks

useContext - Avoids props drilling
Without context: App -> Dashboard -> Sidebar -> UserProfile

With context, pass data directly to any child, no matter how deep.

Example:
const value = useContext(MyContext);

Used for:
- Theme
- User session
- Cart

useReducer - Complex state logic
Used instead of multiple useState updates.

Example:
function reducer(state, action) {
  switch(action.type) {
    case "add": return state + 1;
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, 0);

useReducer is predictable, scalable, and similar to Redux.

### Code from Slide

```javascript
const value = useContext(MyContext);
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

```javascript
function reducer(state, action) {
  switch(action.type) {
    case "add": return state + 1;
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, 0);
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Hook examples for useContext and useReducer, including props-drilling and reducer logic.

### Explanation

Hooks let functional components use state, lifecycle-like behavior, context, and reducer-based state logic without class components.

### Exam Tip

State the two rules of hooks and explain useState/useEffect/useContext/useReducer.

### Common Mistake

No major common mistake.

---

## Page 52 - What Is State?

### Original Slide Content

What Is State?

State = component’s current data, which determines how the UI looks.

Examples:
    Text inside an input
    Whether a modal is open
    Selected list item
    API data (users, products)
    Logged-in user info

Why State Matters:
Without state, your UI would be static and never change.

### Visual Explanation

No major visual content.

### Explanation

Good state management reduces bugs. Avoid duplicate, redundant, contradictory, and deeply nested state. Share state by lifting it to a common parent or using context when appropriate.

### Exam Tip

Explain why poor state structure creates bugs and how lifting state up solves shared-state problems.

### Common Mistake

No major common mistake.

---

## Page 53 - Managing State | Reacting to Inputs

### Original Slide Content

Managing State | Reacting to Inputs

Why React State Matters
    As your app grows, you must carefully organize where state lives
    and how it flows between components.
    Redundant or duplicate state often leads to bugs and inconsistent UI.
    React encourages a declarative mindset:
         Instead of updating individual DOM elements manually
         You describe states your component can be in
         React updates UI when state changes


Designer-Like Thinking
Think about UI as a set of states and transitions based on user input
(clicks, typing, selections).

### Visual Explanation

No major visual content.

### Explanation

Good state management reduces bugs. Avoid duplicate, redundant, contradictory, and deeply nested state. Share state by lifting it to a common parent or using context when appropriate.

### Exam Tip

Explain why poor state structure creates bugs and how lifting state up solves shared-state problems.

### Common Mistake

No major common mistake.

---

## Page 54 - Managing State | State Structure

### Original Slide Content

Managing State | State Structure
Structuring state well can make a difference between a component that is
pleasant to modify and debug, and one that is a constant source of bugs.

Key Principles:
 ⋄ Group related state. If you always update two or more state variables at
    the same time, consider merging them into a single state variable.
  ⋄ Avoid contradictions in state. When the state is structured in a way that
    several pieces of state may contradict and “disagree” with each other, you
    leave room for mistakes. Try to avoid this.
  ⋄ Avoid redundant state. If you can calculate some information from the
    component’s props or its existing state variables during rendering, you
    should not put that information into that component’s state.
  ⋄ Avoid duplication in state. When the same data is duplicated between
    multiple state variables, or within nested objects, it is difficult to keep them
    in sync. Reduce duplication when you can.
  ⋄ Avoid deeply nested state. Deeply hierarchical state is not very
    convenient to update. When possible, prefer to structure state in a flat way.

### Visual Explanation

No major visual content.

### Explanation

Good state management reduces bugs. Avoid duplicate, redundant, contradictory, and deeply nested state. Share state by lifting it to a common parent or using context when appropriate.

### Exam Tip

Explain why poor state structure creates bugs and how lifting state up solves shared-state problems.

### Common Mistake

No major common mistake.

---

## Page 55 - Managing State | State Sharing

### Original Slide Content

Managing State | State Sharing

Sometimes two or more components need to share the same state.

How to Handle This:
1. Move the shared state to the closest parent component.
2. Pass the state down via props.
3. Pass update functions down via props.

This Technique is Called: Lifting State Up

When to Lift State?
- Two components must be synchronized
- Parent must coordinate data
- A change in one component should update another

Example:
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <InputBox value={value} onChange={setValue} />
      <PreviewBox text={value} />
    </>
  );
}

Input and preview are synced, controlled through parent, with no duplicate state.

### Code from Slide

```jsx
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <InputBox value={value} onChange={setValue} />
      <PreviewBox text={value} />
    </>
  );
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

State sharing slide. The core idea is lifting state to a closest common parent.

### Explanation

Good state management reduces bugs. Avoid duplicate, redundant, contradictory, and deeply nested state. Share state by lifting it to a common parent or using context when appropriate.

### Visual/Text Diagram

```text
Parent holds shared state
├── Child A receives value + setter
└── Child B receives same value
```

### Exam Tip

Explain why poor state structure creates bugs and how lifting state up solves shared-state problems.

### Common Mistake

No major common mistake.

---

## Page 56 - Managing State | Preserving & Resetting State

### Original Slide Content

Managing State | Preserving & Resetting State

React decides whether to preserve or reset component state based on its position in the UI tree.

State is Preserved When:
- Component stays in the same position
- The component key does not change

State is Reset When:
- Component is conditionally removed from DOM
- Its key changes
- Its position changes in the component tree

Example:
{isLoggedIn ? <Dashboard /> : <Login />}

Switching components resets the state of whichever component is unmounted.

### Code from Slide

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

Preserving and resetting state slide. Main idea: React tracks state by component position and key.

### Explanation

Good state management reduces bugs. Avoid duplicate, redundant, contradictory, and deeply nested state. Share state by lifting it to a common parent or using context when appropriate.

### Exam Tip

Explain why poor state structure creates bugs and how lifting state up solves shared-state problems.

### Common Mistake

No major common mistake.

---

## Page 57 - Managing State | Using Reducer

### Original Slide Content

Managing State | Using Reducer

When state updates become complicated:
- Multiple state variables
- Many corresponding event handlers
- Logic spread across multiple places

Solution: useReducer

A reducer:
- Centralizes all state update logic
- Makes updates predictable
- Similar concept to Redux

Reducer Example:
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

### Code from Slide

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
```

**Code Explanation:** This snippet is preserved/reconstructed from the lecture slide and shows the practical syntax for the topic on this page.

### Visual Explanation

useReducer slide. Shows state update logic moved into a reducer function.

### Explanation

Good state management reduces bugs. Avoid duplicate, redundant, contradictory, and deeply nested state. Share state by lifting it to a common parent or using context when appropriate.

### Exam Tip

Explain why poor state structure creates bugs and how lifting state up solves shared-state problems.

### Common Mistake

No major common mistake.

---

## Page 58 - Managing State | With Context

### Original Slide Content

Managing State | With Context

- Usually, you pass information from a parent component to a child component via props.
- Passing props can become verbose and inconvenient if many components need the same information.
- Context lets the parent component make information available to any component in the tree below it.

Context Solves This:
- Provides global values
- Makes values accessible anywhere in the component tree
- Removes the need to pass props manually through every intermediate component

Great for:
- Authentication
- Theme and language selection
- Cart state
- Global app settings

Be careful: overusing context can cause unnecessary re-renders.

### Visual Explanation

Context slide. Shows parent making information available to deeper child components without prop drilling.

### Explanation

Good state management reduces bugs. Avoid duplicate, redundant, contradictory, and deeply nested state. Share state by lifting it to a common parent or using context when appropriate.

### Exam Tip

Explain why poor state structure creates bugs and how lifting state up solves shared-state problems.

### Common Mistake

No major common mistake.

---

## Page 59 - Build Tools in Modern Web Development

### Original Slide Content

Build Tools in Modern Web Development
Why We Need Build Tools
                                   Build tools help developers by:
Modern web applications rely on:       Transpiling code →
                                       browser-compatible
    JSX                                Bundling files → fewer HTTP
    ES6+ features (let/const,          requests
    classes, async/await)              Optimizing output → smaller &
    Modules (import/export)            faster apps
    TypeScript                         Running dev servers with hot
                                       reload
    CSS preprocessors
                                       Improving developer
    Images, fonts, assets
                                       experience
    Large component-based
    architectures                  Without them: React/Vue/Svelte apps
                                   would not run reliably in all browsers.

### Visual Explanation

Two-column slide: why build tools are needed and what they do.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Visual/Text Diagram

```text
Source Code: JSX + ES6 + Assets
        ↓
Build Tools
        ↓
Browser-ready optimized files
```

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 60 - Babel

### Original Slide Content

Babel
  ▷ Babel is a JavaScript compiler that allows you to write modern JavaScript
    code and transform it into code that can run in older browsers or
    environments.
  ▷ Babel can transform modern JavaScript features like arrow functions,
    template literals, and de-structuring into equivalent code that is compatible
    with older browsers.
  ▷ Babel uses plugins to transform specific features of JavaScript. There are
    many plugins available for Babel, and you can choose which ones to use
    based on your needs.
  ▷ Babel can also transform code written in other languages that compile to
    JavaScript, like TypeScript and JSX.
  ▷ Babel is open-source software and is maintained by a community of
    developers. It is a widely used tool in the JavaScript ecosystem and is
    supported by many popular libraries and frameworks.
  ▷ Babel supports many advanced features of JavaScript, such as async/await,
    class properties, and decorators, allowing you to use the latest language
    features even in older environments.

### Visual Explanation

No major visual content.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 61 - Bundling

### Original Slide Content

Bundling
Bundling is the process of combining multiple files and modules into a
single optimized file that can be loaded by the browser efficiently.

Why Bundling Is Needed
   Modern applications use many JavaScript modules, components,
   images, and styles.
   Browsers handle fewer, larger files better than many small files.
   Bundling reduces the number of HTTP requests, improving
   performance.
   Ensures all dependencies are loaded in the correct order.

What Bundlers Do
Bundling tools analyze the dependency graph:
Then they merge everything into one or few production files (e.g.,
bundle.js).

### Visual Explanation

No major visual content.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Visual/Text Diagram

```text
Many modules/assets
        ↓
Bundler builds dependency graph
        ↓
Optimized bundle.js / assets
```

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 62 - Bundling + Optimization Techniques

### Original Slide Content

Bundling

Bundling + Optimization
Techniques
                                  Why It Matters
Most bundlers also apply:
    Minification → removes        Bundling:
    spaces, comments, shortens        Improves performance
    variable names                    Reduces latency
    Tree Shaking → removes            Ensures compatibility
    unused code
                                      Allows modular code
    Code Splitting → loads code       structure while shipping
    only when necessary               optimized output
    Caching → faster reloads on
    subsequent page visits

### Visual Explanation

No major visual content.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 63 - Webpack Overview

### Original Slide Content

Webpack

Webpack is a module bundler used in modern JavaScript development.

What Webpack Does:
- Bundles JavaScript modules into one or more optimized files
- Processes assets like CSS, images, fonts, JSON, and more
- Builds a dependency graph
- Generates a final production-ready bundle

How Webpack Works:
1. Starts from an entry file
2. Analyzes imports and builds a dependency graph
3. Processes files using loaders
4. Uses plugins to optimize the bundle
5. Stores output in the distribution folder, commonly dist/

### Visual Explanation

Webpack slide. Visual introduces bundling/dependency graph concept.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 64 - Webpack Features and Importance

### Original Slide Content

Webpack

Key Features:
- Loaders: Convert non-JS files into modules
- Plugins: Optimize output
- Code Splitting
- Tree Shaking
- Hot Module Replacement
- Dev Server

Why Webpack Is Important:
- Works with React, Angular, and Vue
- Highly customizable for enterprise apps
- Mature plugin ecosystem
- Handles SCSS, TypeScript, and image optimization

Official Website: https://webpack.js.org/

### Visual Explanation

Webpack slide. Visual likely continues features/loaders/plugins concept.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 65 - Parcel Overview

### Original Slide Content

Parcel

Parcel
Parcel is a zero-configuration web application bundler that aims to provide an
extremely fast, simple, and developer-friendly build experience.

Why Parcel Is Popular
    Zero Configuration: Works out of the box—no Webpack-style config files
    required
    Fast Build Times: Uses multi-core processing to bundle assets in parallel
    Simple Setup: Perfect for small/medium applications and beginners
    Automatic Transformations: Detects file types and applies the right
    transformations automatically

### Visual Explanation

Parcel overview slide explaining zero-configuration bundling.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 66 - Parcel Features

### Original Slide Content

Parcel
Parcel Features
    Bundles JavaScript, CSS, HTML, images, fonts, JSON, and more
    Automatically transpiles JS (via Babel) & TypeScript without extra setup
    Built-in support for JSX, React, and modern JavaScript features
    Built-in development server with hot reloading
    Intelligent caching system → faster rebuilds
    Built-in optimizations for production:
      ✓ Minification
      ✓ Tree shaking
      ✓ Image compression
      ✓ Code splitting

### Visual Explanation

Parcel features slide listing supported assets and optimizations.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 67 - Parcel Advanced Capabilities

### Original Slide Content

Parcel
Advanced Capabilities
    Supports multiple entry When to Use Parcel
    points (useful for
                             Use Parcel when:
    multi-page apps)
                                 You want a fast and simple tool
    Friendly error messages
    & diagnostic overlays        You don’t want to maintain a long
                                 Webpack config
    Integrates easily with
    frameworks like React,       You’re building a small or medium-sized
    Vue, Svelte                  project
    Automatically detects        You want bundling + dev server +
    installed dependencies &     JSX/TS support out of the box
    adjusts pipeline
Official Website https://parceljs.org/

### Visual Explanation

Two-column slide: advanced Parcel capabilities and when to use Parcel.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 68 - Vite Overview

### Original Slide Content

Vite

Vite
Vite is a next-generation build tool and development server designed
for modern JavaScript frameworks like React, Vue, and Svelte.

Why Vite Was Created
Traditional bundlers (Webpack, Parcel) become slow because:
       They must bundle the entire project before serving it
       Rebuilding on file change is expensive

Vite solves this using native ES modules and an ultra-fast dev server.

### Visual Explanation

Vite overview slide explaining why Vite was created.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 69 - Vite Features and How It Works

### Original Slide Content

Vite

Key Features of Vite:
- Super Fast Startup
- Native ES Module Support
- Lightning-Fast HMR
- Optimized Production Build
- Minimal Configuration

How Vite Works:
Development:
- Browser loads modules directly
- No full bundling is needed before the app starts
- This gives near-instant startup

Production:
- Vite internally uses Rollup to bundle, tree-shake, minify, and code-split.

### Visual Explanation

Vite features and workflow slide. Reconstructed from visual.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 70 - Vite Benefits and When to Use

### Original Slide Content

Vite

Benefits:
- 10x-20x faster development experience
- Built-in support for JSX, TypeScript, CSS/PostCSS, JSON, images, and assets
- Plugin system compatible with Rollup plugins
- Great choice for modern frameworks

When to Use Vite:
- Modern React or Vue app
- Fastest dev server
- Minimal configuration
- Fast HMR and smooth development flow

Vite is now a recommended tool for starting a new React project.

Official Website: https://vitejs.dev/

### Visual Explanation

Vite benefits and usage slide. Reconstructed from visual.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 71 - Webpack vs Parcel vs Vite

### Original Slide Content

Webpack vs Parcel vs Vite

| Feature | Webpack | Parcel | Vite |
|---|---|---|---|
| Developer Experience | Moderate - requires config | Easy - minimal setup | Very easy - instant setup |
| Configuration | Highly configurable but complex | Zero/low configuration | Minimal configuration |
| Build Time (Development) | Slow for large apps | Fast for small/medium apps | Extremely fast |
| Build Time (Production) | Fast but depends on config | Fast | Very fast |
| HMR | Built-in but slower | Very fast | Super fast |
| Tree Shaking | Yes | Yes | Yes |
| Code Splitting | Highly customizable | Yes | Rollup-powered |
| Plugin Ecosystem | Largest and mature | Growing but smaller | Large via Rollup |
| Learning Curve | Steep | Beginner-friendly | Very beginner-friendly |
| Best Use Case | Large enterprise apps | Small/medium projects | Modern React/Vue speed-focused apps |

### Visual Explanation

Comparison table: Webpack vs Parcel vs Vite. Recreated as Markdown table.

### Explanation

Modern React apps need tools that transpile, bundle, optimize, and serve code. Babel, Webpack, Parcel, and Vite solve different parts of this build process.

### Exam Tip

Compare Babel, bundling, Webpack, Parcel, and Vite clearly.

### Common Mistake

Do not confuse Babel with a bundler. Babel transpiles; bundlers combine and optimize files.

---

## Page 72 - Setting Up React

### Original Slide Content

Setting Up React
React Official Recommendation
The official React documentation now recommends using a framework
instead of manually setting up React with bundlers like Webpack or even
Create React App.

Why?
   Frameworks solve many real-world problems automatically:
         Routing
         Data fetching
         Server-side rendering (SSR)
         Code splitting
         SEO
         File-based routing
         Optimized production builds

Frameworks give you a complete environment from day one.

### Visual Explanation

React official recommendation slide. Frameworks solve routing, data fetching, SSR, code splitting, SEO, file-based routing, and production builds.

### Explanation

Modern React setup often uses frameworks because they provide routing, data fetching, rendering strategies, SEO support, and production optimization from the beginning.

### Exam Tip

Explain why React frameworks are recommended for real production apps.

### Common Mistake

No major common mistake.

---

## Page 73 - Popular Frameworks for React

### Original Slide Content

Setting Up React
Popular Frameworks for React
1. Next.js (Most Popular & Officially
                                           3. Gatsby
Recommended)
                                               Static site generator
    Full-stack React framework
                                               Ideal for blogs, documentation,
    File-based routing
                                               marketing sites
    SSR, SSG, API routes
                                               Plugin ecosystem and
    Excellent performance & SEO                blazing-fast static builds
    Ideal for production-grade apps        4. Expo (for React Native apps)
2. Remix                                       Build mobile apps using React
    Focused on web fundamentals                Uses a single JavaScript
                                               codebase for Android + iOS
    Optimized data loading & routing
                                               Comes with built-in tools,
    Great for building fast, interactive
                                               camera, notifications, assets
    applications

### Visual Explanation

Two-column list of popular React frameworks: Next.js, Remix, Gatsby, Expo.

### Explanation

Modern React setup often uses frameworks because they provide routing, data fetching, rendering strategies, SEO support, and production optimization from the beginning.

### Exam Tip

Explain why React frameworks are recommended for real production apps.

### Common Mistake

No major common mistake.

---

## Page 74 - Thank You

### Original Slide Content

Thank You!

### Visual Explanation

Thank-you slide. It marks the end of the lecture.

### Explanation

This slide preserves lecture flow and context.

### Exam Tip

Remember the slide purpose and its place in the lecture sequence.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

Lecture 08 introduces ReactJS by building from frontend fundamentals to modern React tooling. Frontend development creates the visible and interactive browser-side layer of a web application. The lecture explains frontend roles, frontend/backend differences, UI/UX design, frontend engineering, core tools, and application types such as static websites, dynamic websites, and Single Page Applications.

The foundation technologies are HTML, CSS, and JavaScript. HTML provides structure, CSS controls styling and layout, and JavaScript adds behavior. The DOM is the browser internal tree representation of HTML. Traditional JavaScript directly changes the DOM, but this becomes slow and hard to maintain in large applications. React improves this with the Virtual DOM, where React compares lightweight UI representations and updates only changed real DOM nodes.

React is a JavaScript library for building modern interactive user interfaces. It uses components, JSX, props, state, hooks, declarative UI, and one-way data flow. Components are reusable UI blocks. Props pass read-only data from parent to child. State stores changing data and triggers re-rendering. JSX is HTML-like syntax inside JavaScript and is compiled by Babel.

The lecture covers lifecycle phases: mounting, updating, and unmounting. Class components use lifecycle methods, while functional components use hooks such as useEffect. Event handling uses camelCase event names, JavaScript functions, SyntheticEvent objects, argument passing with arrow functions, and e.preventDefault() for forms.

React Hooks let functional components use React features. useState stores changing values, useEffect handles side effects, useContext avoids props drilling, and useReducer centralizes complex state logic. State management principles include avoiding duplicate, redundant, contradictory, and deeply nested state. Shared state should be lifted up to the closest common parent.

The final section explains build tools. Babel transpiles modern JavaScript and JSX. Bundling combines files into optimized output. Webpack is powerful and configurable, Parcel is simple and zero-configuration, and Vite is fast and modern. React setup now commonly uses frameworks/tools such as Next.js, Remix, Gatsby, Expo, and Vite depending on project type.

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| Frontend | Browser-side visual and interactive layer | Buttons, forms, layouts |
| Backend | Server-side logic, APIs, database, authentication | Node/Express API |
| HTML | Markup for page structure | `<h1>Welcome</h1>` |
| CSS | Styles and layout | `color: white;` |
| JavaScript | Browser logic and interactivity | Click event handler |
| DOM | Browser tree representation of HTML | document -> html -> body |
| Virtual DOM | Lightweight JS representation used by React | Only changed nodes update |
| React | JavaScript library for building UI | SPA dashboard |
| JSX | HTML-like syntax inside JavaScript | `<h1>Hello</h1>` |
| Component | Reusable UI block | Navbar, Card |
| Props | Read-only parent-to-child data | `name="WMT"` |
| State | Changing component data | counter value |
| Hook | Function that gives functional components React features | useState |
| useEffect | Hook for side effects | API call after render |
| Context | Shared data without prop drilling | theme/user/cart |
| Reducer | Centralized state update function | cart actions |
| Babel | Compiler for JSX/modern JS | JSX -> JS |
| Bundler | Combines modules/assets | bundle.js |
| Webpack | Configurable bundler | enterprise app |
| Parcel | Zero-config bundler | small project |
| Vite | Fast modern dev server/build tool | React app startup |
| Next.js | React framework | SSR/SEO/routing |

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| Frontend basics | UI, responsiveness, accessibility, browser | 04-11 |
| Web foundations | HTML structure, CSS styling, JS behavior | 12-15 |
| DOM/VDOM | Real DOM slow; VDOM optimizes changed nodes | 16-21 |
| React/JSX/components | Reusable declarative UI | 22-29 |
| Props/state | Props read-only; state changes UI | 30-34 |
| Lifecycle | Mount/update/unmount | 35-41 |
| Events | onClick, SyntheticEvent, preventDefault | 42-46 |
| Hooks | useState, useEffect, useContext, useReducer | 47-51 |
| State management | Lift state, reducer, context | 52-58 |
| Build tools | Babel, bundling, Webpack, Parcel, Vite | 59-71 |
| Setup | Frameworks solve production problems | 72-73 |

# Important Code Snippets

## Page 13 - HTML (Structure)

```html
<h1>Welcome</h1> <p>This is my website</p>
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 14 - CSS (Styling & Layout)

```css
button background: blue; color: white;
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 15 - JavaScript (Interactivity & Logic)

```javascript
document.getElementById("btn").onclick = () =>
  alert("Clicked!");
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 18 - DOM Manipulation with JavaScript (Traditional Way)

```javascript
document.getElementById("title").innerText = "Updated Title";
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 25 - JSX (React Syntax)

```jsx
const element = <h1>Welcome to React</h1>;
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 26 - JSX Rules and Render Flow

```jsx
return (
  <div>
    <h1>Hello</h1>
  </div>
);
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 29 - Types of Components

```jsx
function Hello() {
  return <h1>Hello React!</h1>;
}
```

**Short explanation:** This is the key syntax/example from the slide.

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 31 - Props Example

```jsx
<App>
  <Welcome name="WMT" />
</App>
```

**Short explanation:** This is the key syntax/example from the slide.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Short explanation:** This is the key syntax/example from the slide.

```text
Output: Hello, WMT
```

**Short explanation:** This is the key syntax/example from the slide.

```jsx
<Button text="Save" color="green" />
<Button text="Cancel" color="red" />
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 33 - State Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 34 - State Rules and Callback Pattern

```javascript
// Incorrect
count = count + 1

// Correct
setCount(count + 1)
```

**Short explanation:** This is the key syntax/example from the slide.

```jsx
function Parent() {
  function handleClick() {
    alert("Child clicked!");
  }

  return <Child onButtonClick={handleClick} />;
}

function Child(props) {
  return <button onClick={props.onButtonClick}>Click</button>;
}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 38 - Unmounting Phase (Class Components)

```javascript
componentWillUnmount() {
  clearInterval(this.timer);
}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 39 - Functional Components Lifecycle (using useEffect)

```javascript
useEffect(() => console.log("Runs on every render"));
useEffect(() => console.log("Runs once on mount"), []);
useEffect(() => {
  return () => console.log("Component unmounted");
}, []);
useEffect(() => console.log("Runs when count changes"), [count]);
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 43 - Event Handling Syntax in React

```jsx
<button onClick={handleClick}>Click Me</button>
```

**Short explanation:** This is the key syntax/example from the slide.

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click</button>;
}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 44 - Passing Arguments to Event Handlers

```jsx
<button onClick={() => handleClick(5)}>Increase by 5</button>
```

**Short explanation:** This is the key syntax/example from the slide.

```javascript
function handleClick(amount) {
  setCount(count + amount);
}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 45 - Event Object and Common React Events

```jsx
function handleInput(e) {
  console.log(e.target.value);
}

<input type="text" onChange={handleInput} />
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 46 - Form Submissions and Named Handlers

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log("Form submitted");
}

<form onSubmit={handleSubmit}>
  <input />
  <button type="submit">Submit</button>
</form>
```

**Short explanation:** This is the key syntax/example from the slide.

```jsx
// Named handler
<button onClick={handleClick}>Save</button>

// Inline function
<button onClick={() => alert("Saved")}>Save</button>
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 49 - useState Hook

```jsx
const [value, setValue] = useState(initialValue);

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

setCount(prev => prev + 1);
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 50 - useEffect Hook

```javascript
useEffect(() => {});
useEffect(() => {}, []);
useEffect(() => {}, [count]);
useEffect(() => {
  return () => console.log("cleanup");
}, []);
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 51 - useContext and useReducer

```javascript
const value = useContext(MyContext);
```

**Short explanation:** This is the key syntax/example from the slide.

```javascript
function reducer(state, action) {
  switch(action.type) {
    case "add": return state + 1;
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, 0);
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 55 - Managing State | State Sharing

```jsx
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <InputBox value={value} onChange={setValue} />
      <PreviewBox text={value} />
    </>
  );
}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 56 - Managing State | Preserving & Resetting State

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

**Short explanation:** This is the key syntax/example from the slide.

## Page 57 - Managing State | Using Reducer

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
```

**Short explanation:** This is the key syntax/example from the slide.

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 04 | What is Frontend Development? | Mostly text-based slide. It defines frontend as the visual and interactive layer that runs in browsers. |
| 05 | Role of a Frontend Developer | Two-column layout: left side lists responsibilities; right side lists example tasks. The visual structure separates daily work from overall responsibilities. |
| 07 | Frontend vs Backend | Two-column comparison layout showing frontend/client-side vs backend/server-side responsibilities. |
| 08 | Frontend Has Two Broad Areas | Two-column layout separating UI/UX design from frontend engineering. |
| 09 | The Frontend Technology Stack | Technology stack list grouped into languages, libraries/frameworks, styling tools, build tools, and version control. |
| 10 | Types of Frontend Applications | Three application types are visually separated: static websites, dynamic websites, and SPAs. |
| 11 | The Need for Frameworks like React | Text slide showing traditional frontend problems and React solutions. |
| 12 | Web Foundations Overview | Illustration with HTML/CSS/JS icons. Meaning: every frontend app needs structure, styling, and behavior. |
| 13 | HTML (Structure) | Developer illustration beside HTML points. Code example is visible and preserved as code. |
| 14 | CSS (Styling & Layout) | Developer illustration beside CSS points. CSS example is visible and preserved as code-like CSS. |
| 15 | JavaScript (Interactivity & Logic) | Developer illustration beside JavaScript points. JS event handler example is visible and preserved. |
| 16 | What is the DOM? (Document Object Model) | DOM tree diagram: document -> html -> head/body -> title/h1/a nodes. It shows that every HTML element becomes a node in a tree. |
| 20 | DOM vs Virtual DOM | Comparison table between real DOM and Virtual DOM. The table is recreated in Markdown under Original Slide Content. |
| 21 | Evolution of Frontend Development | Evolution diagram: frontend moved from direct JavaScript/DOM manipulation to jQuery and then to modern libraries/frameworks. |
| 22 | ReactJS | React logo slide. It introduces the ReactJS section. |
| 28 | React Components | Component tree: App contains Navbar, Sidebar, Dashboard, Card, Chart, SummaryBox, and Footer. It shows UI decomposition. |
| 29 | Types of Components | Two code screenshots comparing functional and class components. Code is reconstructed and preserved. |
| 31 | Props Example | Parent and child component props example. Parent passes name="WMT" and child renders Hello, WMT. |
| 33 | State Example | Counter component code screenshot using useState. Shows count state and Increase button. |
| 34 | State Rules and Callback Pattern | Left side shows state rules; right side shows callback pattern for child-to-parent communication. |
| 38 | Unmounting Phase (Class Components) | Cleanup code screenshot for componentWillUnmount using clearInterval(this.timer). |
| 40 | React Component Lifecycle Diagram | Lifecycle method diagram. Methods are listed and explained as class component lifecycle points. |
| 41 | Mapping Class Methods to useEffect | Class method to hook mapping table. Recreated as Markdown table. |
| 43 | Event Handling Syntax in React | Event handler code screenshots showing onClick and named handler function. |
| 44 | Passing Arguments to Event Handlers | Code screenshot showing arrow function for passing an argument to an event handler. |
| 45 | Event Object and Common React Events | Event object section, likely with common event examples. Key event fields are listed in slide text. |
| 46 | Form Submissions and Named Handlers | Form submission section with preventDefault plus named handler vs inline handler examples. |
| 49 | useState Hook | useState syntax and counter example. Reconstructed from slide visual. |
| 50 | useEffect Hook | useEffect hook slide. Visual content contains side-effect examples and dependency-array variants. |
| 51 | useContext and useReducer | Hook examples for useContext and useReducer, including props-drilling and reducer logic. |
| 55 | Managing State | State Sharing | State sharing slide. The core idea is lifting state to a closest common parent. |
| 56 | Managing State | Preserving & Resetting State | Preserving and resetting state slide. Main idea: React tracks state by component position and key. |
| 57 | Managing State | Using Reducer | useReducer slide. Shows state update logic moved into a reducer function. |
| 58 | Managing State | With Context | Context slide. Shows parent making information available to deeper child components without prop drilling. |
| 59 | Build Tools in Modern Web Development | Two-column slide: why build tools are needed and what they do. |
| 63 | Webpack Overview | Webpack slide. Visual introduces bundling/dependency graph concept. |
| 64 | Webpack Features and Importance | Webpack slide. Visual likely continues features/loaders/plugins concept. |
| 65 | Parcel Overview | Parcel overview slide explaining zero-configuration bundling. |
| 66 | Parcel Features | Parcel features slide listing supported assets and optimizations. |
| 67 | Parcel Advanced Capabilities | Two-column slide: advanced Parcel capabilities and when to use Parcel. |
| 68 | Vite Overview | Vite overview slide explaining why Vite was created. |
| 69 | Vite Features and How It Works | Vite features and workflow slide. Reconstructed from visual. |
| 70 | Vite Benefits and When to Use | Vite benefits and usage slide. Reconstructed from visual. |
| 71 | Webpack vs Parcel vs Vite | Comparison table: Webpack vs Parcel vs Vite. Recreated as Markdown table. |
| 72 | Setting Up React | React official recommendation slide. Frameworks solve routing, data fetching, SSR, code splitting, SEO, file-based routing, and production builds. |
| 73 | Popular Frameworks for React | Two-column list of popular React frameworks: Next.js, Remix, Gatsby, Expo. |
| 74 | Thank You | Thank-you slide. It marks the end of the lecture. |

# Likely Exam Questions and Short Answers

## Question 1
Define frontend development.

**Expected Answer:** Frontend development creates the visual and interactive browser-side layer users directly interact with.

## Question 2
Differentiate frontend and backend.

**Expected Answer:** Frontend runs in the browser and handles UI/interactions; backend runs on servers and handles logic, APIs, authentication, and databases.

## Question 3
What are HTML, CSS, and JavaScript used for?

**Expected Answer:** HTML structures content, CSS styles/layouts it, and JavaScript adds behavior and interactivity.

## Question 4
What is the DOM?

**Expected Answer:** The DOM is the browser internal tree representation of an HTML page where each element is treated as a node.

## Question 5
What is the Virtual DOM?

**Expected Answer:** A lightweight JavaScript representation of the real DOM used by React to calculate and apply only necessary UI updates.

## Question 6
Why use React?

**Expected Answer:** React provides reusable components, Virtual DOM, JSX, declarative UI, one-way data flow, hooks, and scalable UI structure.

## Question 7
What is JSX?

**Expected Answer:** JSX is JavaScript XML, an HTML-like syntax written in JavaScript and compiled by Babel.

## Question 8
State the main JSX rules.

**Expected Answer:** Return one parent element, use className instead of class, write JS expressions inside {}, close all tags, and use ternary instead of if directly inside JSX.

## Question 9
Props vs state?

**Expected Answer:** Props are read-only data passed from parent to child. State is changing data inside a component that triggers re-rendering.

## Question 10
What are lifecycle phases?

**Expected Answer:** Mounting, updating, and unmounting.

## Question 11
What is useEffect used for?

**Expected Answer:** useEffect runs side effects such as API calls, timers, subscriptions, DOM work, and cleanup.

## Question 12
State the rules of Hooks.

**Expected Answer:** Call hooks only at the top level, and call hooks only inside React function components or custom hooks.

## Question 13
What are state management principles?

**Expected Answer:** Group related state; avoid contradictions, redundant state, duplication, and deeply nested state.

## Question 14
What is lifting state up?

**Expected Answer:** Moving shared state to the closest common parent and passing state/update functions down as props.

## Question 15
Why use e.preventDefault()?

**Expected Answer:** It stops default form reload so React can handle the submission logic.

## Question 16
Babel vs bundler?

**Expected Answer:** Babel transpiles modern JavaScript/JSX; bundlers combine and optimize modules/assets.

## Question 17
Webpack vs Parcel vs Vite?

**Expected Answer:** Webpack is powerful/config-heavy, Parcel is simple/zero-config, and Vite is fastest for modern React development.

## Question 18
Why use React frameworks like Next.js?

**Expected Answer:** Frameworks solve routing, data fetching, SSR/SSG, SEO, code splitting, and optimized production builds.

# Common Mistakes to Avoid

- Confusing frontend with backend.
- Saying React updates the whole DOM every time.
- Treating JSX exactly like plain HTML.
- Using class instead of className in JSX.
- Forgetting JSX must return one parent element.
- Changing props inside child components.
- Changing state directly instead of using setter functions.
- Calling hooks inside conditions or loops.
- Forgetting useEffect dependency arrays.
- Using onclick instead of onClick in React.
- Forgetting e.preventDefault() in React forms.
- Confusing Babel with bundlers.
- Choosing Webpack for a simple React app when Vite is more efficient.
- Overusing context for local state.

# Final One-Page Revision Notes

```text
Frontend = HTML structure + CSS styling + JavaScript behavior
React = Components + JSX + Props + State + Hooks + Virtual DOM
Render Flow = JSX -> Babel -> Virtual DOM -> Diff -> Real DOM update
Lifecycle = Mounting -> Updating -> Unmounting
Hooks = useState + useEffect + useContext + useReducer
Build Tools = Babel transpiles, bundlers combine, Vite serves/builds fast
```

## Must-Remember
- Props are read-only and flow parent -> child.
- State changes over time and triggers re-render.
- Never modify state directly.
- useEffect handles side effects and cleanup.
- Hooks must be called at the top level.
- Context avoids prop drilling but overuse can cause re-renders.
- useReducer is best for complex state logic.
- Vite is preferred for fast modern React development.
- Next.js is best for production-grade React apps needing routing, SEO, SSR/SSG.

## Execution Checklist
- [x] Read the uploaded PDF and TXT text.
- [x] Preserve page order from Page 01 to Page 74.
- [x] Include original slide content from the TXT/PDF extraction.
- [x] Reconstruct important code examples.
- [x] Recreate visual tables and diagrams where visible.
- [x] Add visual explanations, exam tips, and common mistakes.
- [x] Add summary, definition table, revision table, code snippets, diagram summary, exam questions, and final revision notes.
