# SE3090 - Software Engineering Frameworks
## Lab Practical 02 - Advanced React Frontend Development

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Practical number | Lab Practical 02 |
| Practical title | Advanced React Frontend Development |
| Related lecture | Lecture 02 - Advanced React Frontend Development |
| Duration | 2 hours (in-lab) |
| Mode | Individual coding; Word document and project ZIP submitted to CourseWeb within the session |
| Total PDF pages | 15 |

> **Source note:** This Markdown file follows the uploaded PDF page by page. All code, commands, tables, questions, expected outputs, submission rules, and marking criteria are preserved in the same order. Explanations and exam notes are added only to make the practical easier to understand.

---

# Table of Contents

- [Page 01 - Lab Overview, Introduction, Objectives, and Tools](#page-01---lab-overview-introduction-objectives-and-tools)
- [Page 02 - Required Tools and Lab Time Plan](#page-02---required-tools-and-lab-time-plan)
- [Page 03 - CampusEats Mini Project Scenario](#page-03---campuseats-mini-project-scenario)
- [Page 04 - Task 01: Scaffold the React App](#page-04---task-01-scaffold-the-react-app)
- [Page 05 - Task 02: Reusable Components and List Rendering](#page-05---task-02-reusable-components-and-list-rendering)
- [Page 06 - Task 03: State, useDebounce, and Events](#page-06---task-03-state-usedebounce-and-events)
- [Page 07 - Task 04: Data Fetching and Request States](#page-07---task-04-data-fetching-and-request-states)
- [Page 08 - Task 04 Expected Output and Optional Enhancement](#page-08---task-04-expected-output-and-optional-enhancement)
- [Page 09 - Task 05: Routing and Dish Details](#page-09---task-05-routing-and-dish-details)
- [Page 10 - Task 05: Validated Form and State Choices](#page-10---task-05-validated-form-and-state-choices)
- [Page 11 - Task 05 Expected Output](#page-11---task-05-expected-output)
- [Page 12 - Quick Test](#page-12---quick-test)
- [Page 13 - Quick Test Submission Reminder](#page-13---quick-test-submission-reminder)
- [Page 14 - Submission Instructions and Marking Guide](#page-14---submission-instructions-and-marking-guide)
- [Page 15 - Final Marking Guide](#page-15---final-marking-guide)
- [Full Practical Summary](#full-practical-summary)
- [Important Definitions](#important-definitions)
- [Important Code Snippets](#important-code-snippets)
- [Architecture and Process Diagrams](#architecture-and-process-diagrams)
- [Quick Revision Table](#quick-revision-table)
- [Quick Test Answers](#quick-test-answers)
- [Likely Exam and Viva Questions](#likely-exam-and-viva-questions)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Key Terms](#key-terms)
- [Final Revision Notes](#final-revision-notes)
- [Verification](#verification)

---

# Page-by-Page Notes

## Page 01 - Lab Overview, Introduction, Objectives, and Tools

### Original Page Content

**SE3090 - Software Engineering Frameworks**

**Lab Practical 02**

**Advanced React Frontend Development**

| Item | Details |
|---|---|
| Lab Practical Number | Lab 02 |
| Lab Title | Advanced React Frontend Development |
| Related Lecture | Lecture 02 - Advanced React Frontend Development |
| Duration | 2 Hours (in-lab) |
| Learning Outcomes | LO2 - Apply frameworks and tools; LO3 - Best practices for quality; LO4 - Select and justify approaches |
| Mode | Individual coding; Word document and project ZIP submitted to CourseWeb within the session |

### Introduction

This lab converts the concepts from Lecture 02 into working React code. The lecture covers:

- Production-grade React.
- Component-based architecture.
- Feature-based folder structure.
- Reusable components.
- Custom hooks.
- Controlled forms with validation.
- Client state versus server state.
- Data fetching with loading and error handling.
- React Router navigation.

During the two-hour session, students build a small but realistic single-page application using those concepts.

The implementation and explanations must be based on:

- Lecture 02 content.
- The worked LankaMart case study.
- Class examples such as:
  - `useDebounce`
  - `useFetch`
  - Controlled inputs
  - The three request states
  - Nested and lazy routes

Small original examples are allowed, but they must remain within the scope of Lecture 02.

### Lab Objectives

By the end of the lab, students should be able to:

- Scaffold a React application.
- Organize the project using a feature-based folder structure.
- Separate user interface, hooks, and services clearly.
- Build reusable and composable components.
- Pass data through props.
- Render dynamic lists with unique keys.
- Use conditional rendering.
- Manage state using `useState` and `useEffect`.
- Apply a reusable `useDebounce` hook.
- Fetch data through a reusable `useFetch` hook.
- Handle loading, success, and error states.
- Add routing and navigation with React Router.
- Build a validated controlled form with per-field errors.
- Select and justify state-management tools.

### Required Tools / Software

The page begins the tools section, which continues on Page 02.

### Visual Explanation

The page uses:

- A dark-blue title band.
- A metadata table.
- Separate sections for introduction, objectives, and tools.
- Bullet lists to connect each practical task to the lecture learning outcomes.

The learning flow is:

```text
Lecture Concepts
      |
      v
React Project Structure
      |
      v
Reusable Components
      |
      v
State and Custom Hooks
      |
      v
Data Fetching
      |
      v
Routing and Validated Forms
      |
      v
State-Management Justification
```

### Explanation

The practical is not just a coding exercise. It also tests architecture, code quality, separation of concerns, and the ability to justify technical choices.

### Definition

**Single-Page Application (SPA):** A web application that updates the displayed content dynamically without reloading a completely new HTML page for every navigation action.

**Simple meaning:** React changes the page content inside one running web application.

### Exam Tip

Remember the relationship between the learning outcomes:

- **LO2:** Correct use of frameworks and tools.
- **LO3:** Quality and best practices.
- **LO4:** Selection and justification of approaches.

### Common Mistake

Do not build all code in one component. The practical explicitly expects feature-based organization and clear separation between components, hooks, services, pages, and routes.

---

## Page 02 - Required Tools and Lab Time Plan

### Original Page Content

### Required Tools / Software

- **Node.js (LTS) and npm**
  - Verify using `node -v` and `npm -v`.
- **Visual Studio Code**
  - Any suitable editor may be used.
- **Modern browser**
  - Chrome or Firefox.
  - React DevTools / Profiler extension is recommended.
- **Vite**
  - Used to scaffold the React application.
- **react-router-dom**
  - Required for Task 05.
- Optional:
  - `axios`
  - `react-hook-form`
  - `zod`

### Technical Note

The practical uses JavaScript (`.jsx`) so it can be completed within two hours.

The production recommendation from the lecture is:

```text
Vite + React + TypeScript
```

TypeScript is allowed but is not required for marks.

### Lab Time Plan - 120 Minutes

| Time | Activity | Output |
|---|---|---|
| 0:00-0:10 | Briefing and Lecture 02 recap: architecture, hooks, state, routing | Ready to code |
| 0:10-0:25 | Task 01 - Scaffold the app and create feature-based folders | Running app and structure |
| 0:25-0:45 | Task 02 - Reusable components, props, list rendering, and conditional rendering | Menu grid renders |
| 0:45-1:05 | Task 03 - State, `useDebounce`, and events | Working search filter |
| 1:05-1:30 | Task 04 - Data fetching with loading, success, and error states | Data loads from JSON |
| 1:30-1:50 | Task 05 - Routing, navigation, validated form, and LO4 justification | Multi-page app and form |
| 1:50-2:00 | Quick test, finalization, screenshots, ZIP, and submission | Submitted `.docx` and `.zip` |

### How to Use This Plan

The times are guidelines.

Students should:

- Complete Tasks 01 and 02 quickly.
- Protect enough time for Tasks 04 and 05 because they carry more marks.
- If behind, prioritize:
  1. Running application.
  2. Menu listing.
  3. Search.
  4. Data fetching.
  5. Routing.

### Visual Explanation

The timetable shows a dependency-based practical workflow:

```text
Project Setup
    |
    v
Components
    |
    v
State and Search
    |
    v
Data Fetching
    |
    v
Routing and Forms
    |
    v
Testing and Submission
```

Later tasks depend on the earlier tasks. Routing and form validation are difficult to complete correctly if the project structure and base components are not already working.

### Exam Tip

Know the purpose of each tool:

| Tool | Purpose |
|---|---|
| Node.js | JavaScript runtime and development environment |
| npm | Package management |
| Vite | Project scaffolding and development server |
| React DevTools | Component and performance inspection |
| `react-router-dom` | Client-side routing |
| React Hook Form | Form management |
| Zod | Declarative schema validation |

### Common Mistake

Do not include the `node_modules` directory in the final ZIP. It is large and can be restored later using `npm install`.

---

## Page 03 - CampusEats Mini Project Scenario

### Original Page Content

### Mini Project Scenario

**CampusEats - Menu and Orders Dashboard**

The application is a frontend for a campus food-ordering service.

Students should be able to:

- Browse a menu of dishes.
- Search for a dish.
- Open a dish and view its details.
- Place an order through a validated form.

In production, the React app would communicate with the ASP.NET Core REST API introduced in Lectures 03 and 04. For this lab, data is loaded from a local JSON file.

### What You Will Build

- A `MenuPage`.
- Reusable `DishCard` components.
- A debounced search box.
- Menu data loaded from `/menu.json`.
- Loading, error, and success states.
- A menu route.
- A dish details route: `/dish/:id`.
- An order route: `/order`.
- A validated order form.
- Per-field validation errors.
- A success message.

### Target Feature-Based Structure

```text
src/
├── components/          # shared reusable UI: Button, Spinner
├── features/
│   └── menu/
│       ├── components/  # DishCard, MenuList, SearchBar
│       ├── hooks/       # useDebounce, useFetch
│       ├── services/    # menuApi
│       └── pages/       # MenuPage, DishDetailPage, OrderPage
├── routes/              # AppRoutes
├── App.jsx
└── main.jsx

public/
└── menu.json
```

### Visual Explanation

The folder tree separates code by feature and responsibility.

```text
Application
├── Shared components
├── Menu feature
│   ├── UI components
│   ├── Reusable hooks
│   ├── Data services
│   └── Pages
└── Routes
```

**Why this matters:** A growing application remains easier to maintain when related files are stored together by feature rather than separating every file only by technical type.

### Definition

**Feature-based folder structure:** A project organization method that groups files according to a business feature or domain.

**Simple meaning:** All files related to the menu stay inside the menu feature.

### Exam Tip

The key architecture rule is:

> Group by domain or feature, not only by file type.

### Common Mistake

A global folder structure such as `components/`, `pages/`, `hooks/`, and `services/` for the entire application can become difficult to navigate as the application grows. Shared items may remain global, but feature-specific files should remain inside the feature.

---

## Page 04 - Task 01: Scaffold the React App

### Original Page Content

**Task 01 - 15 minutes - LO2, LO3**

### Scaffold the React App and Feature-Based Structure

Create a fresh React app using Vite. Organize it by domain rather than file type.

### Step 1 - Terminal Commands

```bash
npm create vite@latest campuseats-dashboard -- --template react
cd campuseats-dashboard
npm install
npm run dev
```

### Step 2

Open the URL printed by Vite:

```text
http://localhost:5173
```

Confirm that the application runs.

### Step 3

Inside `src/`, create the feature-based folders shown on Page 03.

### Step 4

Inside `/public`, create:

```text
menu.json
```

This file is used in Task 04.

### Step 5

Clean the default `App.jsx` and render a simple heading:

```jsx
<h1>CampusEats Dashboard</h1>
```

### Expected Output

- Vite development server runs.
- Browser displays the CampusEats heading.
- A screenshot shows the running app.
- A screenshot or tree shows the feature-based structure.

### Visual Explanation

The task has two outputs:

```text
Terminal commands
      |
      v
Running Vite application

Folder creation
      |
      v
Feature-based project structure
```

### Explanation

Vite creates the project, installs the React development dependencies, and runs a local development server with fast refresh.

### Definition

**Scaffolding:** Automatically generating the initial project structure and configuration.

**Simple meaning:** Creating the starting React project using a tool instead of writing every setup file manually.

### Exam Tip

Know what each command does:

| Command | Meaning |
|---|---|
| `npm create vite@latest ...` | Creates a new Vite React project |
| `cd campuseats-dashboard` | Opens the project directory |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts the development server |

### Common Mistake

Do not run `npm install` or `npm run dev` from the wrong directory. First enter `campuseats-dashboard`.

---

## Page 05 - Task 02: Reusable Components and List Rendering

### Original Page Content

**Task 02 - 20 minutes - LO2, LO3**

### Reusable Components, Props, and List Rendering

Build:

- `DishCard` as a presentational component.
- `MenuList` to map dishes into cards.
- Conditional rendering for a sold-out dish.
- An empty-state message.

### Sample Data

**File:** `src/features/menu/pages/MenuPage.jsx`

```jsx
const SAMPLE = [
  { id: 1, name: "Kottu Roti", price: 750, category: "Mains", available: true },
  { id: 2, name: "Fried Rice", price: 850, category: "Mains", available: true },
  { id: 3, name: "Veg Sub", price: 600, category: "Snacks", available: false },
  { id: 4, name: "Watalappan", price: 350, category: "Dessert", available: true },
  { id: 5, name: "Iced Milo", price: 300, category: "Drinks", available: true },
];
```

### `DishCard.jsx`

**File:** `src/features/menu/components/DishCard.jsx`

```jsx
function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <h3>{dish.name}</h3>
      <p>Rs. {dish.price.toFixed(2)}</p>
      <small>{dish.category}</small>
      {!dish.available && <span> - Sold out</span>}
    </div>
  );
}

export default DishCard;
```

### `MenuList.jsx`

**File:** `src/features/menu/components/MenuList.jsx`

```jsx
import DishCard from "./DishCard";

function MenuList({ dishes }) {
  if (!dishes.length) return <p>No dishes match your search.</p>;

  return (
    <div className="menu-grid">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default MenuList;
```

### Render the List

Render the following from `MenuPage`:

```jsx
<MenuList dishes={SAMPLE} />
```

### Expected Output

- Five dish cards.
- Data passes through props.
- `Veg Sub` displays **Sold out**.
- No missing-key warning appears in the console.
- The empty state works when the array contains no matching dishes.

### Visual Explanation

The component data flow is:

```text
MenuPage
   |
   | dishes={SAMPLE}
   v
MenuList
   |
   | map each dish
   v
DishCard
   |
   v
Rendered dish information
```

### Definition

**Props:** Read-only values passed from a parent component to a child component.

**Simple meaning:** The parent sends data to the child.

### Definition

**Conditional rendering:** Displaying different user interface output depending on a condition.

**Simple meaning:** Show the “Sold out” text only when `available` is false.

### Exam Tip

For React lists, remember:

- Use `.map()`.
- Return one component per item.
- Supply a stable and unique `key`.
- Prefer a database ID rather than the array index.

### Common Mistake

Do not place the `key` inside `DishCard`. The key must be assigned where the array is mapped:

```jsx
<DishCard key={dish.id} dish={dish} />
```

---

## Page 06 - Task 03: State, useDebounce, and Events

### Original Page Content

**Task 03 - 20 minutes - LO2, LO3**

### State, the `useDebounce` Hook, and Event Handling

The task adds:

- A controlled search input.
- React state as the single source of truth.
- A custom `useDebounce` hook.
- Filtering that waits until the user pauses typing.

### `useDebounce.js`

**File:** `src/features/menu/hooks/useDebounce.js`

```javascript
import { useState, useEffect } from "react";

export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(id); // cleanup
  }, [value, delay]);

  return debounced;
}
```

### `MenuPage.jsx`

**File:** `src/features/menu/pages/MenuPage.jsx`

```jsx
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import MenuList from "../components/MenuList";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);

  const filtered = SAMPLE.filter((d) =>
    d.name.toLowerCase().includes(debounced.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dishes..."
      />

      <MenuList dishes={filtered} />
    </div>
  );
}

export default MenuPage;
```

### Expected Output

- The input displays the state value.
- Typing updates `query`.
- Search waits approximately 400 milliseconds.
- The menu filters after typing stops.

### Visual Explanation

```text
User types
    |
    v
query state updates immediately
    |
    v
useDebounce waits 400 ms
    |
    v
debounced value updates
    |
    v
SAMPLE array is filtered
    |
    v
MenuList re-renders
```

### Definition

**Controlled input:** A form element whose displayed value is controlled by React state.

**Simple meaning:** React state is the official value of the input.

### Definition

**Debouncing:** Delaying an operation until a period of inactivity has passed.

**Simple meaning:** Wait until the user stops typing before performing the search.

### Why Cleanup Matters

```javascript
return () => clearTimeout(id);
```

The cleanup cancels the earlier timer when the value changes before the delay finishes. This prevents outdated timers from updating the state.

### Exam Tip

A controlled input usually requires both:

```jsx
value={query}
onChange={(e) => setQuery(e.target.value)}
```

### Common Mistake

Do not filter using `query` if the practical requires debouncing. Filtering should use `debounced`.

---

## Page 07 - Task 04: Data Fetching and Request States

### Original Page Content

**Task 04 - 25 minutes - LO2, LO3**

### Data Fetching with Loading, Success, and Error States

The hard-coded array must be replaced with data loaded from `/menu.json`.

### Step 1 - JSON Data

Place the Task 02 array in:

```text
/public/menu.json
```

The file is served through:

```text
/menu.json
```

### Step 2 - `useFetch.js`

**File:** `src/features/menu/hooks/useFetch.js`

```javascript
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    setIsLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then((json) => {
        if (active) setData(json);
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    }; // cleanup
  }, [url]);

  return { data, isLoading, error };
}
```

### Step 3 - Render Three Request States

**File:** `src/features/menu/pages/MenuPage.jsx`

```jsx
const { data: dishes, isLoading, error } = useFetch("/menu.json");

if (isLoading) return <p>Loading menu...</p>; // 1. loading

if (error) {
  return <p>Could not load menu: {error}</p>; // 2. error
}

// 3. success:
// render the search input and <MenuList dishes={...} />
```

### Step 4 - Test the Error State

Temporarily change the URL to:

```javascript
useFetch("/wrong.json");
```

Confirm that an error message appears. Then change the URL back to `/menu.json`.

### Every Fetch Has Three States

The lecture rule is to design the user interface for:

1. Loading.
2. Success.
3. Error.

A blank screen while loading or a silent failure is treated as a bug.

### Visual Explanation

```text
fetch("/menu.json")
       |
       +--> Loading --> Show loading UI
       |
       +--> Success --> Store data and show menu
       |
       +--> Error ----> Show friendly error message
```

### Definition

**Server state:** Data that originates outside the current frontend application and must be fetched, synchronized, cached, or refreshed.

**Simple meaning:** Data controlled by a server or external source.

### Exam Tip

A reusable data hook should return the minimum values required by the UI:

```javascript
{ data, isLoading, error }
```

### Common Mistake

Do not show only the success result. Every network request can be delayed or fail.

---

## Page 08 - Task 04 Expected Output and Optional Enhancement

### Original Page Content

### Expected Output

- The menu loads from `/menu.json`.
- A loading message may appear briefly.
- The dish list appears on success.
- A friendly message appears if the URL is wrong.
- Search from Task 03 continues to work with fetched data.

### Lecture-Aligned Enhancement - Optional

The lecture recommends **TanStack Query** for server state in production.

It provides:

- Caching.
- Refetching.
- Request deduplication.
- Built-in loading and error handling.

Students who finish early may investigate `useQuery` and explain why a query library scales better than a handwritten `useFetch`.

### Visual Explanation

Comparison:

| Handwritten `useFetch` | TanStack Query |
|---|---|
| Good for learning the request lifecycle | Better for production server state |
| State and request logic written manually | Built-in request state management |
| No automatic cache | Built-in cache |
| Manual refetch logic | Built-in refetch options |
| Manual deduplication | Request deduplication support |
| Suitable for small examples | Suitable for larger applications |

### Exam Tip

Use the right state tool:

- Local UI state: `useState`.
- Shared simple app state: Context.
- Complex shared client state: Zustand or Redux Toolkit.
- Server state: TanStack Query.

### Common Mistake

Do not automatically use Redux for API data. Server state has different requirements such as caching, refetching, staleness, and synchronization.

---

## Page 09 - Task 05: Routing and Dish Details

### Original Page Content

**Task 05 - 20 minutes - LO2, LO3, LO4**

### Routing, Navigation, and a Validated Form

### Part A - Routing and Navigation

Install React Router:

```bash
npm install react-router-dom
```

Wrap the application with `BrowserRouter` in `main.jsx`.

### `App.jsx`

```jsx
import { Routes, Route, NavLink } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Menu</NavLink> |
        <NavLink to="/order">Place Order</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/dish/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<p>404 - Page not found</p>} />
      </Routes>
    </div>
  );
}
```

### `DishDetailPage.jsx`

```jsx
import { useParams, Link } from "react-router-dom";

function DishDetailPage() {
  const { id } = useParams(); // from /dish/:id

  return (
    <div>
      <p>Showing details for dish #{id}</p>
      <Link to="/">← Back to menu</Link>
    </div>
  );
}

export default DishDetailPage;
```

### Visual Explanation

```text
BrowserRouter
     |
     v
App
├── Navigation
│   ├── /        -> Menu
│   └── /order   -> Place Order
└── Routes
    ├── /          -> MenuPage
    ├── /dish/:id  -> DishDetailPage
    ├── /order     -> OrderPage
    └── *          -> 404
```

### Definition

**Route parameter:** A dynamic segment inside a route path.

**Simple meaning:** The `:id` part changes depending on the selected dish.

Example:

```text
/dish/3
```

Here, `id` is `3`.

### Exam Tip

Remember the responsibilities:

| React Router Feature | Purpose |
|---|---|
| `BrowserRouter` | Enables browser-based routing |
| `Routes` | Contains route definitions |
| `Route` | Maps a path to an element |
| `NavLink` | Creates navigation and supports active-state styling |
| `Link` | Navigates without a full page reload |
| `useParams` | Reads dynamic route parameters |
| `path="*"` | Handles unknown routes |

### Common Mistake

Do not protect sensitive data using frontend routing alone. The backend API must enforce authorization.

---

## Page 10 - Task 05: Validated Form and State Choices

### Original Page Content

### Part B - A Validated Order Form

### `OrderPage.jsx`

```jsx
import { useState } from "react";

function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    qty: 1,
  });

  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};

    if (v.name.trim().length < 2) {
      e.name = "Name too short";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) {
      e.email = "Enter a valid email";
    }

    if (Number(v.qty) < 1) {
      e.qty = "Qty must be ≥ 1";
    }

    return e;
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const found = validate(form);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      setDone(true);
    }
  }

  if (done) {
    return <p>Thanks, {form.name}! Order received.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <span> {errors.name}</span>}

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <span> {errors.email}</span>}

      <input
        name="qty"
        type="number"
        value={form.qty}
        onChange={handleChange}
      />
      {errors.qty && <span> {errors.qty}</span>}

      <button type="submit">Place order</button>
    </form>
  );
}

export default OrderPage;
```

### Optional Production Enhancement

Install:

```bash
npm install react-hook-form zod @hookform/resolvers
```

Use:

- React Hook Form.
- A Zod schema.
- `zodResolver`.

The lecture states that this can provide:

- Fewer re-renders.
- Declarative validation.
- Cross-field validation.

### Part C - Justify State Choices

Complete this table:

| Piece of State | Tool You Would Use | Why |
|---|---|---|
| Search box text |  |  |
| Menu data from the API |  |  |
| Logged-in user shared app-wide |  |  |
| Cart of selected dishes |  |  |

### Suggested Lecture-Aligned Answers

| Piece of State | Suitable Tool | Reason |
|---|---|---|
| Search box text | `useState` | Local UI state used by one page or component |
| Menu data from the API | TanStack Query | Server state requiring loading, error, cache, and refetch handling |
| Logged-in user shared app-wide | Context API | Simple global data needed by many components |
| Cart of selected dishes | Context, Zustand, or Redux Toolkit | Shared client state updated by several parts of the app |

### Visual Explanation

Form flow:

```text
User changes a field
       |
       v
handleChange
       |
       v
form state updates

User submits
       |
       v
handleSubmit prevents reload
       |
       v
validate(form)
       |
       +--> errors exist --> show per-field messages
       |
       +--> no errors ----> show success message
```

### Definition

**Form validation:** Checking user input against required rules before accepting it.

**Simple meaning:** Confirming the entered data is valid.

### Exam Tip

The dynamic update pattern:

```javascript
[e.target.name]: e.target.value
```

allows one handler to update multiple form fields.

### Common Mistake

HTML `type="number"` still provides a string through `e.target.value`. The code converts quantity using:

```javascript
Number(v.qty)
```

---

## Page 11 - Task 05 Expected Output

### Original Page Content

### Expected Output

- Working navigation between:
  - Menu page.
  - Dish detail page.
  - Order form.
- Dish details page reads the `:id` route parameter.
- Unknown paths display a 404 message.
- Invalid form submission is blocked.
- Per-field errors are displayed.
- Valid submission displays a confirmation message.
- The state-management justification table is completed.

### Visual Explanation

The completed application workflow is:

```text
Menu
├── Search dishes
├── View cards
└── Open /dish/:id
        |
        v
Dish Details
        |
        +--> Back to menu

Navigation
└── /order
       |
       v
Validated Order Form
       |
       +--> Invalid -> field errors
       |
       +--> Valid -> success message
```

### Exam Tip

When demonstrating the application, show all important states:

- Menu success state.
- Search result.
- Dish details route.
- Form error state.
- Form success state.
- 404 state.

### Common Mistake

A route existing in the code does not prove it works. Test the route manually in the browser and capture the required screenshots.

---

## Page 12 - Quick Test

### Original Page Content

**Quick Test - 10 minutes**

Answer all questions in the Word document.

- Q1-Q5: Multiple choice.
- Q6: Short answer.
- Q7: Code-based.
- Q8: Scenario-based.

### Multiple Choice

**Q1.** Data fetched from your REST API is which kind of state?

- (a) local UI state
- (b) server state
- (c) form state
- (d) route state

**Q2.** Best default tool for caching API data with loading and error states built in:

- (a) Redux
- (b) Context API
- (c) TanStack Query
- (d) `useState`

**Q3.** A child wrapped in `React.memo` still re-renders. The most likely cause is:

- (a) a React bug
- (b) an unstable, newly created prop
- (c) too much CSS
- (d) a missing key

**Q4.** Which hook gives a stable function reference between renders?

- (a) `useMemo`
- (b) `useEffect`
- (c) `useCallback`
- (d) `useRef`

**Q5.** A frontend route guard hides `/admin` from the menu. Is the data secure?

- (a) yes, always
- (b) only if the API enforces authorization
- (c) yes, if the route is lazy-loaded
- (d) yes, if Context is used

### Short Answer

**Q6.** In a feature-based folder structure, what is the rule for grouping files, and which anti-pattern does it avoid?

### Code-Based Question

**Q7.** Complete this controlled input:

```jsx
const [query, setQuery] = useState("");

<input ______ onChange={(e) => setQuery(______)} />
```

### Scenario-Based Question

**Q8.** For each state item, name the correct tool and provide a one-line reason:

1. Whether a modal is open.
2. Product list returned by the API.
3. Logged-in user shared across the whole app.

### Visual Explanation

The test evaluates four topic groups:

```text
State Classification
      +
Server-State Tools
      +
Performance and Stable References
      +
Security
      +
Architecture
      +
Controlled Inputs
      +
State-Tool Selection
```

### Exam Tip

Do not memorize only the multiple-choice letters. Understand why each option is correct.

### Common Mistake

A frontend route guard improves user experience but does not enforce security. Authorization must be checked by the backend API.

---

## Page 13 - Quick Test Submission Reminder

### Original Page Content

> Submit the quick-test answers inside the same Word document.

Place the answers in a clearly labelled:

```text
Quick Test
```

section after the answers for Tasks 01-05.

### Visual Explanation

This page contains a highlighted instruction box only. It does not introduce a new React concept.

### Exam Tip

Use clear headings in the submitted document so the lecturer can find each task and the Quick Test quickly.

### Common Mistake

Do not upload the Quick Test as a separate file unless the lecturer specifically requests it.

---

## Page 14 - Submission Instructions and Marking Guide

### Original Page Content

### Submission Instructions

Prepare:

1. One Microsoft Word document containing all lab work.
2. A project ZIP if requested by the lecturer.

### Word Document Requirements

- Student name.
- IT number.
- Lab Practical number: Lab 02.
- Screenshots of:
  - Menu.
  - Search.
  - Dish detail page.
  - Form error state.
  - Form success state.
- Important code snippets:
  - `DishCard`
  - `MenuList`
  - `useDebounce`
  - `useFetch`
  - Form
  - Routes
- Brief explanation for each task: 2-3 sentences.
- Quick Test answers: Q1-Q8.

### Project ZIP

If required:

- ZIP the project directory.
- Exclude `node_modules`.

### File Naming

```text
ITXXXXXXXX_Lab02.docx
```

Example:

```text
IT22123456_Lab02.docx
```

Project ZIP:

```text
ITXXXXXXXX_Lab02_Project.zip
```

### Upload Rules

- Submit to CourseWeb.
- Submit before the end of the two-hour session.
- Late submissions are not accepted without prior lecturer approval.

### Student Instruction

Students must refer to Lecture 02 when completing the work. The code and explanations must be based on:

- Lecture content.
- Class explanations.
- Practical examples discussed during the lecture.

### Evaluation Criteria - First Section

| Component | Marks | Requirements for Full Marks |
|---|---:|---|
| Task 01 - Scaffold and structure | 3 | App runs with Vite; correct feature-based folders grouped by domain rather than file type |
| Task 02 - Components, props, and list | 4 | Reusable `DishCard`; `MenuList` maps with keys; props correct; conditional sold-out and empty states |
| Task 03 - State, hooks, and events | 4 | Controlled input; correct `useDebounce` with cleanup; filters using debounced value |

### Visual Explanation

Submission package:

```text
Submission
├── ITXXXXXXXX_Lab02.docx
│   ├── Student details
│   ├── Task explanations
│   ├── Screenshots
│   ├── Code snippets
│   └── Quick Test answers
└── ITXXXXXXXX_Lab02_Project.zip
    └── React project without node_modules
```

### Exam Tip

The marking guide tells students exactly where marks are earned. Use it as a completion checklist before submitting.

### Common Mistake

Do not submit screenshots without explanations or code snippets. The Word document must contain all required evidence.

---

## Page 15 - Final Marking Guide

### Original Page Content

| Component | Marks | Requirements for Full Marks |
|---|---:|---|
| Task 04 - Data fetching | 4 | `useFetch` returns `{ data, isLoading, error }`; all three states rendered; data loads from `/menu.json` |
| Task 05 - Routing and form | 3 | Working routes including `/dish/:id` with `useParams`; 404; validated controlled form with per-field errors; sensible LO4 table |
| Quick Test Q1-Q8 | 2 | Q1-Q5 correct: `(b, c, b, c, b)`; Q6-Q8 demonstrate correct understanding |
| **Total** | **20** |  |

### Visual Explanation

Mark distribution:

```text
Task 01  3 marks
Task 02  4 marks
Task 03  4 marks
Task 04  4 marks
Task 05  3 marks
Quick Test 2 marks
--------------------
Total    20 marks
```

### Mark Weight Comparison

| Area | Marks | Percentage of Lab |
|---|---:|---:|
| Setup and architecture | 3 | 15% |
| Components and rendering | 4 | 20% |
| State and custom hooks | 4 | 20% |
| Data fetching | 4 | 20% |
| Routing and form | 3 | 15% |
| Quick Test | 2 | 10% |

### Exam Tip

Tasks 02, 03, and 04 carry the highest individual weights. Correct component design, hook implementation, and request-state handling are especially important.

### Common Mistake

A visually attractive interface cannot compensate for missing React patterns such as stable keys, controlled inputs, cleanup functions, and explicit request states.

---

# Full Practical Summary

This practical creates a React single-page application named **CampusEats Dashboard**.

The project begins with Vite and follows a feature-based structure. The menu feature contains its own components, hooks, services, and pages. Reusable components receive data through props, and lists are rendered with `.map()` and unique keys.

A controlled search input stores text in React state. The `useDebounce` hook delays filtering until the user stops typing. Its cleanup function cancels outdated timers.

Menu information is then moved from a hard-coded array to `/public/menu.json`. The `useFetch` hook loads the file and returns `data`, `isLoading`, and `error`. The interface explicitly handles loading, success, and error states.

React Router creates routes for the menu, dish details, and order form. `useParams` reads the dynamic dish ID. A wildcard route displays a 404 page.

The order form is fully controlled. A validation function creates per-field error messages for short names, invalid email addresses, and quantities below one. Valid input displays a success message.

The final state-management decision is based on the type of state:

- Local UI state: `useState`.
- Server state: TanStack Query.
- Simple app-wide state: Context.
- More complex shared client state: Zustand or Redux Toolkit.

---

# Important Definitions

| Term | Definition | Simple Meaning |
|---|---|---|
| Component | Reusable unit of React user interface | A reusable UI building block |
| Props | Read-only data passed from parent to child | Data sent into a component |
| State | Data managed by a component that can trigger rendering | Values React remembers and updates |
| Controlled input | Input whose value is controlled by React state | State is the official input value |
| Hook | Function that uses React features such as state or effects | Reusable React logic |
| Custom hook | User-defined hook that combines reusable logic | A reusable function beginning with `use` |
| Debounce | Delay execution until input activity stops | Wait before searching |
| Effect cleanup | Function used to cancel or release effect resources | Prevent old work from continuing |
| Server state | External data fetched from a server | API-controlled data |
| Local UI state | Data needed by a limited part of the UI | Example: modal open or search text |
| Conditional rendering | Showing UI only when a condition is true | Show sold-out text when unavailable |
| Route | Mapping between a URL path and a component | Page selected by URL |
| Route parameter | Dynamic part of a path such as `:id` | Value read from the URL |
| Validation | Checking input before accepting it | Confirming form values are correct |
| Feature-based structure | Grouping related code by business domain | Keep menu files together |

---

# Important Code Snippets

## Vite Setup - Page 04

```bash
npm create vite@latest campuseats-dashboard -- --template react
cd campuseats-dashboard
npm install
npm run dev
```

## Reusable Card - Page 05

```jsx
function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <h3>{dish.name}</h3>
      <p>Rs. {dish.price.toFixed(2)}</p>
      <small>{dish.category}</small>
      {!dish.available && <span> - Sold out</span>}
    </div>
  );
}
```

## List Rendering - Page 05

```jsx
{dishes.map((dish) => (
  <DishCard key={dish.id} dish={dish} />
))}
```

## Controlled Input - Page 06

```jsx
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
```

## Debounce Cleanup - Page 06

```javascript
return () => clearTimeout(id);
```

## Request States - Page 07

```jsx
if (isLoading) return <p>Loading menu...</p>;
if (error) return <p>Could not load menu: {error}</p>;
```

## Dynamic Route - Page 09

```jsx
<Route path="/dish/:id" element={<DishDetailPage />} />
```

## Read Route Parameter - Page 09

```javascript
const { id } = useParams();
```

## Dynamic Form Field Update - Page 10

```javascript
setForm({
  ...form,
  [e.target.name]: e.target.value,
});
```

## Validation Success Test - Page 10

```javascript
if (Object.keys(found).length === 0) {
  setDone(true);
}
```

---

# Architecture and Process Diagrams

## Application Structure

```text
React App
├── Shared Components
├── Menu Feature
│   ├── Components
│   ├── Hooks
│   ├── Services
│   └── Pages
└── Routes
```

## Data Flow

```text
MenuPage
   |
   v
MenuList
   |
   v
DishCard
```

## Search Flow

```text
Input -> query -> useDebounce -> filtered dishes -> MenuList
```

## Fetch Flow

```text
useFetch
├── Loading
├── Success
└── Error
```

## Router Flow

```text
/
├── /dish/:id
├── /order
└── * -> 404
```

## Form Flow

```text
Input Change -> Form State -> Submit -> Validate
                                  |
                    +-------------+-------------+
                    |                           |
                  Errors                      Valid
                    |                           |
             Show field messages        Show success message
```

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Architecture | Group by feature/domain | 3 |
| Vite | Scaffold and run React application | 4 |
| Props | Parent-to-child data | 5 |
| Lists | `.map()` and stable `key` | 5 |
| Conditional UI | Sold-out and empty states | 5 |
| Controlled input | `value` and `onChange` | 6 |
| Debounce | Wait 400 ms; cleanup timeout | 6 |
| Data fetching | Handle loading, success, and error | 7 |
| Server state | Prefer TanStack Query at scale | 8 |
| Routing | `BrowserRouter`, `Routes`, `Route`, `NavLink` | 9 |
| Dynamic route | `/dish/:id` and `useParams` | 9 |
| Validation | Return per-field errors | 10 |
| Local state | `useState` | 10 |
| Shared state | Context, Zustand, Redux Toolkit | 10 |
| Security | Backend must enforce authorization | 12 |
| Submission | Word document and optional project ZIP | 14 |
| Total marks | 20 | 15 |

---

# Quick Test Answers

## Q1

**Answer:** **(b) server state**

Data fetched from an API is controlled externally and must be synchronized with the frontend.

## Q2

**Answer:** **(c) TanStack Query**

It provides caching, loading and error states, refetching, and request deduplication.

## Q3

**Answer:** **(b) an unstable, newly created prop**

A new object, array, or function reference can cause a memoized child to re-render.

## Q4

**Answer:** **(c) `useCallback`**

`useCallback` memoizes a function reference between renders when its dependencies do not change.

## Q5

**Answer:** **(b) only if the API enforces authorization**

Frontend route protection does not secure backend data.

## Q6

**Answer:**

Group files by business feature or domain. This avoids the anti-pattern of placing all components, hooks, services, and pages into large global folders that become difficult to maintain.

## Q7

```jsx
const [query, setQuery] = useState("");

<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
```

## Q8

| State | Tool | Reason |
|---|---|---|
| Modal open/closed | `useState` | Local UI state |
| Product list from API | TanStack Query | Server state requiring cache and request-state handling |
| Logged-in user shared app-wide | Context API | Simple shared application state |

---

# Likely Exam and Viva Questions

### Question 1

Why is a feature-based folder structure preferred for larger React applications?

**Expected answer:** It groups related components, hooks, services, and pages by business domain, improving maintainability, discoverability, and separation of concerns.

### Question 2

What makes an input controlled?

**Expected answer:** Its displayed value comes from React state, and `onChange` updates that state.

### Question 3

Why does `useDebounce` need a cleanup function?

**Expected answer:** Cleanup cancels the previous timer so outdated values do not update the debounced state.

### Question 4

Name the three request states that every fetch interface should support.

**Expected answer:** Loading, success, and error.

### Question 5

Why is TanStack Query better than a handwritten fetch hook for large applications?

**Expected answer:** It provides caching, refetching, deduplication, stale-data management, retries, and request-state handling.

### Question 6

What is the purpose of a stable key in list rendering?

**Expected answer:** It helps React identify each item correctly between renders and update the list efficiently.

### Question 7

What is the difference between props and state?

**Expected answer:** Props are passed into a component and are read-only; state is managed by a component and changes over time.

### Question 8

Why is a frontend route guard not sufficient security?

**Expected answer:** Users can still call the API directly. The backend must authenticate and authorize every protected request.

---

# Common Mistakes to Avoid

- Grouping the entire project only by file type.
- Keeping all logic inside `App.jsx`.
- Mutating props.
- Using array index as a key when a stable ID exists.
- Omitting the empty-list state.
- Creating an uncontrolled search input.
- Filtering with the immediate query instead of the debounced value.
- Omitting timeout cleanup.
- Rendering only a successful fetch.
- Ignoring failed HTTP status codes.
- Using frontend route guards as security.
- Forgetting the wildcard 404 route.
- Failing to call `preventDefault()` during form submission.
- Displaying only one general error instead of per-field errors.
- Choosing Redux automatically for every type of state.
- Including `node_modules` in the ZIP.
- Omitting screenshots of form error and success states.
- Missing the Quick Test section in the Word document.

---

# Key Terms

- React
- Vite
- Component
- Props
- State
- `useState`
- `useEffect`
- `useDebounce`
- `useFetch`
- Cleanup
- Controlled Input
- Conditional Rendering
- List Rendering
- Stable Key
- Feature-Based Architecture
- Separation of Concerns
- Server State
- Client State
- TanStack Query
- React Router
- `BrowserRouter`
- `Routes`
- `Route`
- `NavLink`
- `Link`
- `useParams`
- Dynamic Route
- 404 Route
- Form Validation
- Per-Field Error
- Context API
- Zustand
- Redux Toolkit
- React Hook Form
- Zod
- CourseWeb

---

# Final Revision Notes

```text
Task 01
Vite setup + feature-based structure

Task 02
Reusable components + props + map + key + conditional UI

Task 03
Controlled input + useState + useDebounce + cleanup

Task 04
useFetch + loading + success + error

Task 05
React Router + /dish/:id + useParams + validated form

State Selection
Local UI       -> useState
Server Data    -> TanStack Query
Simple Global  -> Context
Complex Global -> Zustand / Redux Toolkit
```

## Mark Distribution

| Component | Marks |
|---|---:|
| Task 01 | 3 |
| Task 02 | 4 |
| Task 03 | 4 |
| Task 04 | 4 |
| Task 05 | 3 |
| Quick Test | 2 |
| **Total** | **20** |

---

# Verification

PDF pages: 15 / MD page sections: 15 ✅
