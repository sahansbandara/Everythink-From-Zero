# SE3090 – Software Engineering Frameworks — Lecture 02
## Advanced React Frontend Development

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Lecture number | 02 |
| Lecturer | Eishan Weerasinghe |
| Academic period | Year 3 · Semester 1 |
| Credits | 4 |
| Total PDF pages | 52 |

---

# Table of Contents

- [Page 01 — Advanced React Frontend Development](#page-01--advanced-react-frontend-development)
- [Page 02 — Where This Lecture Fits in SE3090](#page-02--where-this-lecture-fits-in-se3090)
- [Page 03 — Lecture Learning Outcomes](#page-03--lecture-learning-outcomes)
- [Page 04 — Why Advanced React Development Matters](#page-04--why-advanced-react-development-matters)
- [Page 05 — Lecture Roadmap – 3 Hours](#page-05--lecture-roadmap-3-hours)
- [Page 06 — Part 1 — Modern React & Production-Level Architecture](#page-06--part-1-modern-react-production-level-architecture)
- [Page 07 — The Role of React in Modern Frontend Development](#page-07--the-role-of-react-in-modern-frontend-development)
- [Page 08 — Component-Based Architecture](#page-08--component-based-architecture)
- [Page 09 — React in Full-Stack Application Development](#page-09--react-in-full-stack-application-development)
- [Page 10 — The React Ecosystem & Industry Usage](#page-10--the-react-ecosystem-industry-usage)
- [Page 11 — Production Architecture: Feature-Based Structure](#page-11--production-architecture-feature-based-structure)
- [Page 12 — Separation of UI, Logic, Services & Hooks](#page-12--separation-of-ui-logic-services-hooks)
- [Page 13 — A Vocabulary of Components](#page-13--a-vocabulary-of-components)
- [Page 14 — Checkpoint 01 – Quick Questions](#page-14--checkpoint-01-quick-questions)
- [Page 15 — Part 2 — Component Patterns & Custom Hooks](#page-15--part-2-component-patterns-custom-hooks)
- [Page 16 — Composition over Configuration](#page-16--composition-over-configuration)
- [Page 17 — Compound Components — Shared Implicit State](#page-17--compound-components-shared-implicit-state)
- [Page 18 — Controlled vs Uncontrolled Components](#page-18--controlled-vs-uncontrolled-components)
- [Page 19 — Headless UI & a Reusable Component Library](#page-19--headless-ui-a-reusable-component-library)
- [Page 20 — Custom Hooks — Logic You Can Reuse](#page-20--custom-hooks-logic-you-can-reuse)
- [Page 21 — Essential Custom Hooks (1): Data & Input](#page-21--essential-custom-hooks-1-data-input)
- [Page 22 — Essential Custom Hooks (2): App Concerns](#page-22--essential-custom-hooks-2-app-concerns)
- [Page 23 — Custom Hook Design — Best Practices](#page-23--custom-hook-design-best-practices)
- [Page 24 — Checkpoint 02 – Discussion](#page-24--checkpoint-02-discussion)
- [Page 25 — Part 3 — Advanced Forms & Validation](#page-25--part-3-advanced-forms-validation)
- [Page 26 — Why Complex Forms Are Hard](#page-26--why-complex-forms-are-hard)
- [Page 27 — React Hook Form — Fast, Minimal Re-renders](#page-27--react-hook-form-fast-minimal-re-renders)
- [Page 28 — Schema Validation with Zod / Yup](#page-28--schema-validation-with-zod-yup)
- [Page 29 — Dynamic Fields & Error Handling](#page-29--dynamic-fields-error-handling)
- [Page 30 — Putting It Together: A Registration Form](#page-30--putting-it-together-a-registration-form)
- [Page 31 — Part 4 — API Integration, Server State & Routing](#page-31--part-4-api-integration-server-state-routing)
- [Page 32 — Axios / Fetch Best Practices & Request States](#page-32--axios-fetch-best-practices-request-states)
- [Page 33 — Client State vs Server State — The Key Distinction](#page-33--client-state-vs-server-state-the-key-distinction)
- [Page 34 — TanStack Query — Server State Done Right](#page-34--tanstack-query-server-state-done-right)
- [Page 35 — RTK Query — When You're Already on Redux Toolkit](#page-35--rtk-query-when-you-re-already-on-redux-toolkit)
- [Page 36 — Pagination, Filtering, Optimistic Updates & Caching](#page-36--pagination-filtering-optimistic-updates-caching)
- [Page 37 — Advanced Routing: Nested, Layout & Lazy Routes](#page-37--advanced-routing-nested-layout-lazy-routes)
- [Page 38 — Protected & Role-Based Routes (Route Guards)](#page-38--protected-role-based-routes-route-guards)
- [Page 39 — Error Pages & a Look at the Next.js App Router](#page-39--error-pages-a-look-at-the-next-js-app-router)
- [Page 40 — Checkpoint 03 – Discussion](#page-40--checkpoint-03-discussion)
- [Page 41 — Part 5 — Performance Optimization & State-Management Decisions](#page-41--part-5-performance-optimization-state-management-decisions)
- [Page 42 — Profiling & Unnecessary Re-Renders](#page-42--profiling-unnecessary-re-renders)
- [Page 43 — React.memo, useMemo & useCallback](#page-43--react-memo-usememo-usecallback)
- [Page 44 — Bundles, Lazy Loading & List Virtualization](#page-44--bundles-lazy-loading-list-virtualization)
- [Page 45 — State Management — Know Your Options](#page-45--state-management-know-your-options)
- [Page 46 — State Management Decision Table (LO4)](#page-46--state-management-decision-table-lo4)
- [Page 47 — Case Study: Designing the LankaMart Frontend](#page-47--case-study-designing-the-lankamart-frontend)
- [Page 48 — Group Activity: Choose the Architecture (20 min)](#page-48--group-activity-choose-the-architecture-20-min)
- [Page 49 — Quick Quiz — 6 Questions](#page-49--quick-quiz-6-questions)
- [Page 50 — Lecture Summary — Key Takeaways](#page-50--lecture-summary-key-takeaways)
- [Page 51 — Learning Outcomes, Next Lecture & Preparation](#page-51--learning-outcomes-next-lecture-preparation)
- [Page 52 — References & Further Reading](#page-52--references-further-reading)
- [Full Lecture Summary](#full-lecture-summary)
- [Important Code Snippets](#important-code-snippets)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Key Terms](#key-terms)
- [Verification](#verification)

---

# Page-by-Page Lecture Notes

## Page 01 — Advanced React Frontend Development

### Original Slide Content

- **Module code:** SE3090
- **Module:** Software Engineering Frameworks
- **Lecture:** Lecture 02
- **Lecture title:** Advanced React Frontend Development
- **Institution:** Sri Lanka Institute of Information Technology (SLIIT)
- **Faculty:** Faculty of Computing
- **Department:** Department of Software Engineering
- **Academic period:** Year 3 · Semester 1
- **Credits:** 4
- **Lecturer:** Eishan Weerasinghe
- **Email:** eishan.w@sliit.lk
- **Course web:** courseweb.sliit.lk

### Visual Explanation

Dark-blue title slide with the React atom logo and module metadata. It establishes the lecture identity and topic.

### Explanation

This lecture moves beyond basic JSX and state into architecture, reusable abstractions, data management, routing, validation and performance practices expected in production React applications.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Advanced React Frontend Development”?

**Expected answer:** This lecture moves beyond basic JSX and state into architecture, reusable abstractions, data management, routing, validation and performance practices expected in production React applications.

---

## Page 02 — Where This Lecture Fits in SE3090

### Original Slide Content

The lecture sequence is:

| Stage | Topic |
|---|---|
| L01 | Framework fundamentals & trends |
| **Today** | **Advanced React frontend** |
| L03 | C#, .NET & REST API backend |
| L04 | Database, AuthN/AuthZ & integration |
| Later | Agentic development & DevOps |

- Module content area: modern frontend frameworks, architecture and production practices.
- Builds on React basics from prior modules — today is the advanced, real-world layer.
- The frontend designed today will call the REST APIs built in Lectures 03 and 04.
- Directly assessed in labs, the mini hackathon and the Main Assignment's frontend through UI/UX and code quality.

### Visual Explanation

A five-stage horizontal sequence highlights TODAY between L01 and L03. It shows how this frontend lecture connects to later backend and database work.

### Explanation

The frontend is not isolated. Its component and data decisions must align with the API and database layers that follow. The assessment connection means architectural quality matters, not only whether the UI works.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Where This Lecture Fits in SE3090”?

**Expected answer:** The frontend is not isolated. Its component and data decisions must align with the API and database layers that follow. The assessment connection means architectural quality matters, not only whether the UI works.

---

## Page 03 — Lecture Learning Outcomes

### Original Slide Content

| Learning outcome | Expected capability |
|---|---|
| **LO1 — Understand modern framework concepts** | Explain component-based architecture, the React ecosystem and React's place in full-stack development. |
| **LO2 — Apply suitable frameworks & tools** | Build production-grade React using feature structure, reusable components, custom hooks, forms, routing and data fetching. |
| **LO3 — Use best practices for quality** | Apply separation of concerns, validation, server-state management, protected routes and performance optimization. |
| **LO4 — Select & justify approaches** | Choose between Context, Redux Toolkit, Zustand, TanStack Query and RTK Query based on requirements. |

### Visual Explanation

Four stacked cards represent LO1–LO4. The layout moves from understanding to application, quality and justified selection.

### Explanation

LO1–LO4 form a progression: understand the ecosystem, build with appropriate tools, apply quality practices and justify design choices. LO4 is especially important for scenario-based exam and assignment questions.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Lecture Learning Outcomes”?

**Expected answer:** LO1–LO4 form a progression: understand the ecosystem, build with appropriate tools, apply quality practices and justify design choices. LO4 is especially important for scenario-based exam and assignment questions.

---

## Page 04 — Why Advanced React Development Matters

### Original Slide Content

| Production problem | Why it matters |
|---|---|
| Basics do not scale | `useState` plus `fetch` in every component may work in a demo but becomes unmaintainable across 50 components and 5 developers |
| Server state is different | Treating remote data as ordinary local state causes stale data, race conditions and duplicate requests |
| Users feel performance | Unnecessary re-renders, large bundles and unoptimized lists make applications feel slow |
| Real applications need structure and security | Roles, protected routes, validation and clean architecture are industry and assignment expectations |

### Visual Explanation

Four cards compare the production problems addressed: scaling, server state, performance, structure and security.

### Explanation

Small demos tolerate duplicated fetching and local state. Production applications do not. Architecture and dedicated server-state tools prevent duplication, stale data and maintenance problems.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Why Advanced React Development Matters”?

**Expected answer:** Small demos tolerate duplicated fetching and local state. Production applications do not. Architecture and dedicated server-state tools prevent duplication, stale data and maintenance problems.

---

## Page 05 — Lecture Roadmap – 3 Hours

### Original Slide Content

| Part | Topic | Main coverage | Approx. time |
|---:|---|---|---:|
| 1 | Modern React & production architecture | Components, ecosystem, feature-based structure, separation of concerns | ~30 min |
| 2 | Component patterns & custom hooks | Composition, compound, controlled, headless, `useFetch`, `useDebounce`, `useAuth` | ~40 min |
| 3 | Advanced forms & validation | React Hook Form, Zod/Yup, dynamic fields, error handling | ~30 min |
| 4 | API integration, server state & routing | Axios, loading/error, TanStack & RTK Query, nested/protected/lazy routes | ~45 min |
| 5 | Performance & state-management decisions | Memoization, code splitting, virtualization, choosing the right tool | ~35 min |

### Visual Explanation

A five-row timeline presents the three-hour roadmap and approximate duration of each part.

### Explanation

The roadmap groups the lecture into architecture, reusable patterns, forms, API/routing and performance/state decisions. These parts are connected rather than independent.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Lecture Roadmap – 3 Hours”?

**Expected answer:** The roadmap groups the lecture into architecture, reusable patterns, forms, API/routing and performance/state decisions. These parts are connected rather than independent.

---

## Page 06 — Part 1 — Modern React & Production-Level Architecture

### Original Slide Content

**PART 1 — Modern React & Production-Level Architecture**

- Role of React & component-based architecture
- React in full-stack development & the ecosystem
- Feature-based folder structure
- Separation of UI, logic, services and hooks

### Visual Explanation

Section divider introducing Part 1 and its four subtopics.

### Explanation

Part 1 establishes the structural foundation that all later code relies on.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Part 1 — Modern React & Production-Level Architecture”?

**Expected answer:** Part 1 establishes the structural foundation that all later code relies on.

---

## Page 07 — The Role of React in Modern Frontend Development

### Original Slide Content

- React is a JavaScript library for building user interfaces from components.
- **Declarative:** describe **what** the UI should look like for a given state.
- React keeps the DOM synchronized with data through a virtual DOM diff.
- **Component-based:** build small pieces and compose them into screens.
- **Unidirectional data flow:** state flows down; events flow up.
- React has a large ecosystem covering routing, data, forms, UI kits and meta-frameworks such as Next.js.
- It is backed by Meta and a large community.

**Declarative relationship:** `UI = f(state)`

Changing state causes React to re-render the necessary parts; the developer does not manually update the DOM.

### Code from Slide

```jsx
function Greeting({ name }) {
  return <h1>Hi {name}!</h1>;
}

<Greeting name="Amal" />
```

The component receives `name` as a prop and renders a heading.

### Visual Explanation

The slide pairs conceptual bullets with the formula `UI = f(state)` and a small component example.

### Explanation

React is declarative: the UI is derived from state. Components form reusable units, and one-way data flow makes changes easier to reason about.

### Definition

**Definition:** **React** — A JavaScript library for building component-based user interfaces.

**Simple meaning:** a javascript library for building component-based user interfaces.

**Example:** A product page composed from reusable React components.

### Exam Tip

Expect definition, architecture-diagram or “justify the structure” questions. Use keywords such as declarative UI, component tree, unidirectional flow, feature-based structure and separation of concerns.

### Common Mistake

Thinking React manually edits the DOM. React derives the DOM updates from state and props.

### Likely Exam Question

**Question:** Define declarative UI in React.

**Expected answer:** The UI is described as a function of state; when state changes, React computes and applies the necessary DOM updates.

---

## Page 08 — Component-Based Architecture

### Original Slide Content

The component hierarchy shown is:

```text
<App />
├── <Navbar />
├── <ProductList />
│   └── <ProductCard />
├── <Cart />
│   └── <Badge />
└── <Footer />
```

- Break a UI into a tree of independent, reusable components.
- Each component owns its markup, styling and local behaviour.
- Compose small components such as `Badge` and `Card` into larger units such as a list or page.
- Reuse the same component with different props throughout the application.

### Visual Explanation

A component tree decomposes `<App />` into navigation, product list, cart and footer, with smaller child components below.

### Explanation

Component-based design improves reuse and testing. The tree also shows that page-level components should be composed from smaller purpose-specific parts.

### Definition

**Definition:** **Component-based architecture** — An architecture that decomposes a UI into independent, reusable components.

**Simple meaning:** an architecture that decomposes a ui into independent, reusable components.

**Example:** A `ProductList` composed from multiple `ProductCard` components.

### Exam Tip

Expect definition, architecture-diagram or “justify the structure” questions. Use keywords such as declarative UI, component tree, unidirectional flow, feature-based structure and separation of concerns.

### Common Mistake

Making every component global or excessively small. Components should reflect meaningful reusable responsibilities.

### Likely Exam Question

**Question:** Draw and explain a React component tree.

**Expected answer:** Show a parent such as App composed from reusable children and explain ownership, composition and props.

---

## Page 09 — React in Full-Stack Application Development

### Original Slide Content

| Tier | Technology in the slide | Responsibility |
|---|---|---|
| Frontend | React | Components, hooks, routing, client state and server-data handling |
| Backend | ASP.NET Core API | REST endpoints and business logic |
| Database | PostgreSQL | Tables and relationships |

```text
React frontend
     │
     │ HTTP requests / JSON responses
     ▼
ASP.NET Core REST API
     │
     │ Database queries / results
     ▼
PostgreSQL database
```

- React is the **client tier**: it renders the UI and communicates with the backend over HTTP.
- It sends requests such as GET and POST, receives JSON and updates the UI.
- React must not access the database directly; access always goes through the API.
- Lecture 02 covers the frontend; Lectures 03–04 cover the API and database.

### Visual Explanation

A three-tier flow connects React, ASP.NET Core and PostgreSQL using HTTP/JSON and API/database communication.

### Explanation

The browser should never contain database credentials or query the database. The API is the security and business-logic boundary.

### Exam Tip

Expect definition, architecture-diagram or “justify the structure” questions. Use keywords such as declarative UI, component tree, unidirectional flow, feature-based structure and separation of concerns.

### Common Mistake

Allowing React to connect directly to the database. The frontend must communicate through the backend API.

### Likely Exam Question

**Question:** What is the main idea of “React in Full-Stack Application Development”?

**Expected answer:** The browser should never contain database credentials or query the database. The API is the security and business-logic boundary.

---

## Page 10 — The React Ecosystem & Industry Usage

### Original Slide Content

| Concern | Tools shown |
|---|---|
| Routing | React Router, TanStack Router, Next.js App Router |
| Server state | TanStack Query, RTK Query, SWR |
| Client state | Context, Redux Toolkit, Zustand, Jotai |
| Forms | React Hook Form, Formik, Zod, Yup |
| UI components | MUI, shadcn/ui, Chakra, Ant Design |
| Meta-frameworks | Next.js, Remix — SSR, routing and full-stack capabilities |

### Visual Explanation

Six cards group the React ecosystem by concern: routing, server state, client state, forms, UI and meta-frameworks.

### Explanation

React itself focuses on UI. Production applications combine React with specialized libraries selected according to routing, state, forms and rendering requirements.

### Exam Tip

Expect definition, architecture-diagram or “justify the structure” questions. Use keywords such as declarative UI, component tree, unidirectional flow, feature-based structure and separation of concerns.

### Common Mistake

Using one state tool for every concern. Routing, forms, client state and server state are separate problems.

### Likely Exam Question

**Question:** What is the main idea of “The React Ecosystem & Industry Usage”?

**Expected answer:** React itself focuses on UI. Production applications combine React with specialized libraries selected according to routing, state, forms and rendering requirements.

---

## Page 11 — Production Architecture: Feature-Based Structure

### Original Slide Content

### Feature-Based `src/` Structure

```text
src/
├── components/                 // shared, reusable UI
│   ├── Button.jsx
│   ├── Modal.jsx
│   └── Table.jsx
├── layouts/                    // page shells
│   └── DashboardLayout.jsx
├── features/                   // group by DOMAIN
│   ├── products/
│   │   ├── components/
│   │   │   └── ProductCard.jsx
│   │   ├── hooks/
│   │   │   └── useProducts.js
│   │   ├── services/
│   │   │   └── productApi.js
│   │   └── pages/
│   │       └── ProductListPage.jsx
│   ├── auth/
│   ├── cart/
│   └── orders/
├── hooks/                      // global custom hooks
├── lib/
├── services/                   // API client, utilities
└── routes/                     // route configuration
```

- Group by **domain** such as products and authentication, not by file type.
- Everything for a feature lives together, making it easy to find or remove.
- Truly shared UI belongs in the top-level `components/` directory.
- Features remain independent as the team and codebase grow.
- Avoid the giant `components/` plus giant `pages/` anti-pattern.

### Visual Explanation

A code-style directory tree contrasts feature-based organization with file-type organization.

### Explanation

Feature-based structure optimizes locality: code that changes together lives together. This reduces cross-folder searching and supports parallel teamwork.

### Definition

**Definition:** **Feature-based structure** — A project organization method that groups files by business domain rather than technical file type.

**Simple meaning:** a project organization method that groups files by business domain rather than technical file type.

**Example:** All product pages, hooks and services live under `features/products/`.

### Exam Tip

Expect definition, architecture-diagram or “justify the structure” questions. Use keywords such as declarative UI, component tree, unidirectional flow, feature-based structure and separation of concerns.

### Common Mistake

Grouping every component together by file type instead of by business domain.

### Likely Exam Question

**Question:** Why is feature-based structure preferred in large React projects?

**Expected answer:** It keeps all code for a domain together, improves locality, supports independent teams and makes features easier to find or remove.

---

## Page 12 — Separation of UI, Logic, Services & Hooks

### Original Slide Content

| Layer | Responsibility |
|---|---|
| UI components | Pure presentation: receive props and render markup; no fetching and minimal logic |
| Custom hooks | Reusable logic and state such as `useProducts()` and `useForm()`; UI-free and testable |
| Services / API layer | All HTTP operations such as `productApi.getAll()`; one location for endpoint changes |
| Server / data | Backend and database, covered in Lectures 03–04 |

```text
UI components
      ↓
Custom hooks
      ↓
Services / API layer
      ↓
Server / database
```

**Why separate?**

- Test logic without rendering UI.
- Replace the API client without changing components.
- Reuse a hook across multiple components.
- Keep components small and readable.
- Give each layer one reason to change.

### Visual Explanation

A four-layer vertical flow shows UI → hooks → services/API → server/data.

### Explanation

Separation of concerns reduces coupling. UI renders, hooks coordinate logic, services communicate and the server owns data and business rules.

### Exam Tip

Expect definition, architecture-diagram or “justify the structure” questions. Use keywords such as declarative UI, component tree, unidirectional flow, feature-based structure and separation of concerns.

### Common Mistake

Placing HTTP calls directly inside presentation components.

### Likely Exam Question

**Question:** What is the main idea of “Separation of UI, Logic, Services & Hooks”?

**Expected answer:** Separation of concerns reduces coupling. UI renders, hooks coordinate logic, services communicate and the server owns data and business rules.

---

## Page 13 — A Vocabulary of Components

### Original Slide Content

| Component type | Responsibility | Examples |
|---|---|---|
| Page components | One per route; compose layout and features; own fetching and orchestration | `ProductsPage`, `CheckoutPage` |
| Layout components | Shared shell such as header, sidebar and footer; wrap pages through layout routes | `DashboardLayout`, `AuthLayout` |
| Feature components | Business-focused UI; may hold local state and call hooks | `ProductCard`, `CartSummary` |
| Reusable UI primitives | Generic, domain-free design-system building blocks | `Button`, `Modal`, `Table`, `Input` |

**Rule of thumb:** the lower the layer, the more reusable it should be and the less it should know about the application domain.

### Visual Explanation

Four horizontal layers define page, layout, feature and primitive components, ordered from domain-aware to reusable.

### Explanation

Different component layers have different responsibilities. A primitive such as `Button` must remain domain-free, while a page may coordinate data and features.

### Exam Tip

Expect definition, architecture-diagram or “justify the structure” questions. Use keywords such as declarative UI, component tree, unidirectional flow, feature-based structure and separation of concerns.

### Common Mistake

Making generic UI primitives depend on business models.

### Likely Exam Question

**Question:** What is the main idea of “A Vocabulary of Components”?

**Expected answer:** Different component layers have different responsibilities. A primitive such as `Button` must remain domain-free, while a page may coordinate data and features.

---

## Page 14 — Checkpoint 01 – Quick Questions

### Original Slide Content

Answer with a neighbour — 4 minutes.

1. In a feature-based structure, where do the files for the `orders` feature live, and what goes inside its folder?
2. A `Button` component imports the `Order` model and formats currency. What is wrong, and how should it be fixed?
3. Which layer should contain an Axios call: the component, a custom hook or a services/API module? Why?
4. Name one concrete benefit of moving data-fetching logic out of a component and into a custom hook.

### Visual Explanation

Four question cards are used as an in-class checkpoint.

### Explanation

These questions test whether the student can apply feature-based structure and separation of concerns, not merely define them.

### Exam Tip

Use these questions as practice. Answer each by naming the concept, selecting the tool and giving one requirement-based reason.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Checkpoint 01 – Quick Questions”?

**Expected answer:** These questions test whether the student can apply feature-based structure and separation of concerns, not merely define them.

---

## Page 15 — Part 2 — Component Patterns & Custom Hooks

### Original Slide Content

**PART 2 — Component Patterns & Custom Hooks**

- Composition, compound components & controlled inputs
- Headless UI and reusable component libraries
- Custom hooks: useFetch, useDebounce, useAuth, usePagination …
- Separating logic from UI; hook design best practices

### Visual Explanation

Section divider introducing Part 2 and its topics.

### Explanation

Part 2 shifts from folder structure to reusable component APIs and reusable logic.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Part 2 — Component Patterns & Custom Hooks”?

**Expected answer:** Part 2 shifts from folder structure to reusable component APIs and reusable logic.

---

## Page 16 — Composition over Configuration

### Original Slide Content

### Code from Slide

```jsx
// ❌ prop explosion — rigid
<Card
  title="..."
  subtitle="..."
  image="..."
  footerButton="Buy"
  badge="New"
  ...
/>

// ✅ composition with children & slots
<Card>
  <Card.Header>{title}</Card.Header>
  <Card.Body><ProductInfo p={p}/></Card.Body>
  <Card.Footer>
    <Button onClick={buy}>Buy</Button>
  </Card.Footer>
</Card>
```

**Why compose?**

- `children` is React's built-in slot.
- Callers control the content instead of being restricted by a rigid prop list.
- Avoids 15-prop “god components”.
- Each part remains small and replaceable.
- Provides the foundation for compound components.

**Heuristic:** if a component keeps gaining boolean or string props to support new cases, it probably needs composition.

### Visual Explanation

A before/after code comparison shows prop explosion versus component composition.

### Explanation

Composition is more flexible than adding props for every variation. It lets callers supply content while the component supplies structure.

### Definition

**Definition:** **Composition** — Building flexible components by nesting children or named component parts instead of adding many configuration props.

**Simple meaning:** building flexible components by nesting children or named component parts instead of adding many configuration props.

**Example:** `Card.Header`, `Card.Body` and `Card.Footer`.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Solving prop explosion by adding even more props instead of using composition.

### Likely Exam Question

**Question:** What problem does composition solve?

**Expected answer:** It replaces rigid prop-heavy APIs with flexible children/slots, keeping component parts small and replaceable.

---

## Page 17 — Compound Components — Shared Implicit State

### Original Slide Content

### Code from Slide

```jsx
// parts share state via context, set by <Tabs>
<Tabs defaultValue="details">
  <Tabs.List>
    <Tabs.Trigger value="details">Details</Tabs.Trigger>
    <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="details">...</Tabs.Panel>
  <Tabs.Panel value="reviews">...</Tabs.Panel>
</Tabs>

// internally: const Ctx = createContext();
// Tabs provides {active,setActive}; parts consume it
```

- The parent stores state in React Context.
- Child parts consume the state implicitly, avoiding prop drilling.
- The caller receives a clean and expressive API.
- Markup and ordering remain flexible.
- This pattern is used for Tabs, Accordion, Select and Menu.

Composition gives the structure. Compound components add shared state behind the scenes, allowing `Tabs.Trigger` and `Tabs.Panel` to coordinate automatically.

### Visual Explanation

A Tabs example visually demonstrates shared implicit state among compound components.

### Explanation

Compound components create a coordinated family of components with hidden shared state, producing expressive APIs without prop drilling.

### Definition

**Definition:** **Compound components** — A family of components that share implicit state through a parent, often using Context.

**Simple meaning:** a family of components that share implicit state through a parent, often using context.

**Example:** `Tabs`, `Tabs.Trigger` and `Tabs.Panel`.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Confusing compound components with simple nested JSX. Compound components share coordinated state.

### Likely Exam Question

**Question:** What is the main idea of “Compound Components — Shared Implicit State”?

**Expected answer:** Compound components create a coordinated family of components with hidden shared state, producing expressive APIs without prop drilling.

---

## Page 18 — Controlled vs Uncontrolled Components

### Original Slide Content

| Aspect | Controlled component | Uncontrolled component |
|---|---|---|
| Source of truth | React state | DOM element |
| Main bindings | `value` and `onChange` | `defaultValue` and `ref` |
| Strength | Instant validation, formatting and conditional UI | Fewer re-renders and less code |
| Cost | More re-renders and wiring | Harder to react to every keystroke |
| Best use | Live validation and dependent fields | Simple or large forms and file inputs |

### Code from Slide

```jsx
// controlled
const [q,setQ]=useState("");
<input
  value={q}
  onChange={e=>setQ(e.target.value)}
/>

// uncontrolled
const ref=useRef();
<input defaultValue="" ref={ref}/>
```


### Visual Explanation

Two side-by-side cards compare controlled and uncontrolled inputs, followed by code.

### Explanation

Controlled inputs give React immediate control; uncontrolled inputs reduce render overhead. The choice depends on validation and interaction needs.

### Definition

**Definition:** **Controlled component** — A form element whose current value is stored in React state.

**Simple meaning:** a form element whose current value is stored in react state.

**Example:** An input using `value={q}` and `onChange`.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Assuming controlled is always better. Large/simple forms may benefit from uncontrolled inputs.

### Likely Exam Question

**Question:** Compare controlled and uncontrolled inputs.

**Expected answer:** Controlled inputs use React state as the source of truth; uncontrolled inputs keep value in the DOM and are read through refs.

---

## Page 19 — Headless UI & a Reusable Component Library

### Original Slide Content

### Headless UI

- Supplies logic and accessibility with **zero styling**.
- The developer owns the appearance; the library handles behaviour such as focus, keyboard interaction and ARIA.
- Examples: Radix UI, React Aria, Headless UI and TanStack Table.
- Can be styled with Tailwind CSS or regular CSS.
- Accessibility by default is a major benefit.

### Shared Component Library

| Reusable primitive | Purpose |
|---|---|
| Modal | Accessible dialogs and overlays |
| Table | Consistent data display |
| Card | Reusable content container |
| Form fields | Standard labels, errors and help text |
| Inputs | Consistent data entry controls |
| Buttons | Consistent actions and states |

Build once and reuse everywhere. Combining headless behaviour with project styling creates accessible, on-brand and maintainable primitives.

### Visual Explanation

The left side explains headless behaviour; the right side shows a grid of reusable library primitives.

### Explanation

Headless UI avoids reimplementing difficult accessibility behaviour while still allowing a unique visual design.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Assuming headless means inaccessible or incomplete. Headless libraries often provide accessibility behaviour without styling.

### Likely Exam Question

**Question:** What is the main idea of “Headless UI & a Reusable Component Library”?

**Expected answer:** Headless UI avoids reimplementing difficult accessibility behaviour while still allowing a unique visual design.

---

## Page 20 — Custom Hooks — Logic You Can Reuse

### Original Slide Content

- A custom hook is a function whose name begins with `use` and which calls other hooks.
- It extracts stateful logic from components so that the logic can be reused and tested.
- Components become visually focused; hooks hold the behavioural logic.
- The same logic can be shared by multiple components.
- Hooks are composable: a hook may call another hook.
- Custom hooks are the idiomatic React mechanism for sharing non-visual logic.

### Code from Slide

```jsx
// before: logic trapped in the component
function ProductList() {
  const [data,setData]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(()=>{ /* fetch... */ },[]);
  ...
}

// after: logic in a reusable hook
function ProductList() {
  const {data,isLoading,error} =
    useFetch('/api/products');
}
```


### Visual Explanation

A before/after code example shows logic trapped in a component and then extracted into a custom hook.

### Explanation

Custom hooks are the main method for reusing stateful, non-visual logic in modern React.

### Definition

**Definition:** **Custom hook** — A reusable function beginning with `use` that encapsulates stateful React logic.

**Simple meaning:** a reusable function beginning with `use` that encapsulates stateful react logic.

**Example:** `useDebounce(search, 400)`.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Putting JSX inside a custom hook. Hooks should expose logic and data, not render UI.

### Likely Exam Question

**Question:** What is a custom hook?

**Expected answer:** A function beginning with use that calls other hooks and encapsulates reusable stateful, non-visual logic.

---

## Page 21 — Essential Custom Hooks (1): Data & Input

### Original Slide Content

| Hook | Purpose |
|---|---|
| `useFetch(url)` | Wraps Fetch/Axios and returns `{ data, isLoading, error }` |
| `useDebounce(value, ms)` | Delays a rapidly changing value so an API request is not made for every keystroke |
| `useLocalStorage(key, init)` | State that persists in `localStorage`, useful for themes, drafts and filters |

### Code from Slide — `useDebounce.js`

```javascript
// useDebounce — the classic
function useDebounce(value, delay=400){
  const [v,setV]=useState(value);
  useEffect(()=>{
    const id=setTimeout(
      ()=>setV(value), delay);
    return ()=>clearTimeout(id);
  },[value,delay]);
  return v;   // debounced value
}
```


### Visual Explanation

Three hook cards are paired with the `useDebounce` implementation.

### Explanation

Debouncing prevents excessive requests, while local-storage hooks provide persistence. These hooks isolate common behaviour behind simple contracts.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Debouncing without clearing the previous timer, which causes stale updates.

### Likely Exam Question

**Question:** What is the main idea of “Essential Custom Hooks (1): Data & Input”?

**Expected answer:** Debouncing prevents excessive requests, while local-storage hooks provide persistence. These hooks isolate common behaviour behind simple contracts.

---

## Page 22 — Essential Custom Hooks (2): App Concerns

### Original Slide Content

| Hook | Purpose |
|---|---|
| `useAuth()` | Exposes current user, login/logout and `isAuthenticated` from an authentication context; used by route guards |
| `usePagination(items)` | Stores page and page size, supplies next/previous helpers and returns the current slice |
| `useForm()` | Manages values, errors, touched state and submission handling |

### Code from Slide — `useAuth.js`

```javascript
// useAuth — consume an Auth context
const AuthCtx = createContext();
export function useAuth(){
  const ctx = useContext(AuthCtx);
  if(!ctx) throw new Error(
    'useAuth outside <AuthProvider>');
  return ctx; // {user,login,logout}
}
```


### Visual Explanation

Three application-level hook cards are paired with the `useAuth` implementation.

### Explanation

Authentication and pagination are cross-cutting concerns. A hook provides one consistent access point without passing props through every component.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Calling `useAuth` outside its provider without handling the missing context.

### Likely Exam Question

**Question:** What is the main idea of “Essential Custom Hooks (2): App Concerns”?

**Expected answer:** Authentication and pagination are cross-cutting concerns. A hook provides one consistent access point without passing props through every component.

---

## Page 23 — Custom Hook Design — Best Practices

### Original Slide Content

| Area | Best practices |
|---|---|
| Name and rules | Prefix with `use`; call hooks only at the top level; never inside conditions or loops; one responsibility per hook |
| Clear contract | Return a named object such as `{data,isLoading,error}` or a tuple for simple pairs; use stable function identities; document inputs and outputs |
| Side-effect hygiene | Clean up timers, subscriptions and listeners; use correct dependency arrays; avoid stale closures |
| Composability | Build large hooks from small hooks; keep hooks UI-free with no JSX; test them independently |

### Visual Explanation

A four-quadrant grid groups naming, contract, side-effect and composability rules.

### Explanation

A well-designed hook behaves like a small API: predictable name, clear return contract, safe effects and no UI dependency.

### Exam Tip

Be ready to identify the correct component pattern or custom hook for a scenario and explain why it improves reuse, accessibility or separation of logic.

### Common Mistake

Calling hooks conditionally or omitting effect cleanup.

### Likely Exam Question

**Question:** What is the main idea of “Custom Hook Design — Best Practices”?

**Expected answer:** A well-designed hook behaves like a small API: predictable name, clear return contract, safe effects and no UI dependency.

---

## Page 24 — Checkpoint 02 – Discussion

### Original Slide Content

Discuss in pairs — 5 minutes, then compare answers.

1. A `Card` component has grown to 14 props. Which pattern fixes it, and what does the refactored usage look like?
2. A teammate manually builds a `Dropdown` with focus trapping and arrow-key support. Explain why a headless library is safer.
3. A search box calls the API on every keystroke and overloads the server. Which two hooks solve this together, and how?
4. Where should authentication state live, and how can components read it without prop drilling?

### Visual Explanation

Four discussion cards test the patterns introduced in Part 2.

### Explanation

The discussion applies composition, accessibility, debouncing, fetching and Context to realistic problems.

### Exam Tip

Use these questions as practice. Answer each by naming the concept, selecting the tool and giving one requirement-based reason.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Checkpoint 02 – Discussion”?

**Expected answer:** The discussion applies composition, accessibility, debouncing, fetching and Context to realistic problems.

---

## Page 25 — Part 3 — Advanced Forms & Validation

### Original Slide Content

**PART 3 — Advanced Forms & Validation**

- Why complex forms are hard in plain React
- React Hook Form — performant, minimal re-renders
- Schema validation with Zod / Yup
- Dynamic fields, error handling & a real example

### Visual Explanation

Section divider introducing Part 3.

### Explanation

Part 3 focuses on maintainable form state and validation.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Part 3 — Advanced Forms & Validation”?

**Expected answer:** Part 3 focuses on maintainable form state and validation.

---

## Page 26 — Why Complex Forms Are Hard

### Original Slide Content

- Fully controlled forms re-render on every keystroke.
- Thirty fields with live state create sluggish behaviour and significant boilerplate.
- Validation includes cross-field rules, asynchronous checks and format checking—not only `required`.
- Error and touched state must be tracked for every field.
- Dynamic fields need rows to be added and removed.
- Submission must disable controls while sending, show server errors and reset appropriately.

### Code from Slide

```javascript
// the boilerplate trap (per field!)
const [email,setEmail]=useState('');
const [emailErr,setEmailErr]=useState('');
const [touched,setTouched]=useState(false);
// ...repeat ×30 fields...

function validate(){ /* big if-else */ }
// hard to read, easy to get wrong,
// re-renders the whole form constantly
```

React Hook Form plus a schema validator removes most of this repeated state and validation code.

### Visual Explanation

The slide combines a pain-point list with a code block showing repeated field state.

### Explanation

Manual form state scales badly because each field introduces values, errors, touched flags and validation branches.

### Exam Tip

Likely questions ask you to design a validated form or compare manual controlled forms with React Hook Form plus Zod. Mention both client and server validation.

### Common Mistake

Validating only “required” fields and ignoring cross-field and server-side rules.

### Likely Exam Question

**Question:** What is the main idea of “Why Complex Forms Are Hard”?

**Expected answer:** Manual form state scales badly because each field introduces values, errors, touched flags and validation branches.

---

## Page 27 — React Hook Form — Fast, Minimal Re-renders

### Original Slide Content

### Code from Slide

```jsx
import { useForm } from 'react-hook-form';

const { register, handleSubmit,
  formState:{ errors, isSubmitting }
} = useForm();

<form onSubmit={handleSubmit(onValid)}>
  <input {...register('email')} />
  {errors.email && <span>...</span>}
  <input {...register('password')} />
  <button disabled={isSubmitting}>
    Sign up
  </button>
</form>
```

**Why teams use React Hook Form:**

- Uses uncontrolled inputs internally, producing very few re-renders.
- `register()` connects an input in one line.
- `handleSubmit` performs validation and then calls the valid-submit callback.
- `formState` supplies errors, `isSubmitting`, `isDirty` and other states.
- It is small, fast and integrates with Zod and Yup.

### Visual Explanation

A React Hook Form code block is paired with reasons teams use it.

### Explanation

React Hook Form minimizes re-renders and centralizes submission state while keeping input registration concise.

### Exam Tip

Likely questions ask you to design a validated form or compare manual controlled forms with React Hook Form plus Zod. Mention both client and server validation.

### Common Mistake

Assuming React Hook Form removes the need for backend validation.

### Likely Exam Question

**Question:** What is the main idea of “React Hook Form — Fast, Minimal Re-renders”?

**Expected answer:** React Hook Form minimizes re-renders and centralizes submission state while keeping input registration concise.

---

## Page 28 — Schema Validation with Zod / Yup

### Original Slide Content

### Code from Slide

```javascript
import { z } from 'zod';
import { zodResolver } from
  '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  price: z.number().positive(),
  password: z.string().min(8),
  confirm: z.string()
}).refine(d => d.password===d.confirm,
  { message:'Passwords differ',
    path:['confirm'] });

useForm({ resolver: zodResolver(schema) });
```

- Rules are declared once in a schema.
- Cross-field validation is implemented with `.refine()`.
- Errors can be attached to individual fields.
- Invalid runtime data is rejected before use.
- The same schema can be reused elsewhere.
- Yup follows the same general idea and is the older alternative.

### Visual Explanation

A Zod schema code block is paired with the benefits of schema validation.

### Explanation

Schema validation separates rules from UI code and makes cross-field validation explicit and reusable.

### Definition

**Definition:** **Schema validation** — Validation in which the expected data shape and rules are declared in a reusable schema.

**Simple meaning:** validation in which the expected data shape and rules are declared in a reusable schema.

**Example:** A Zod object validating email and password fields.

### Exam Tip

Likely questions ask you to design a validated form or compare manual controlled forms with React Hook Form plus Zod. Mention both client and server validation.

### Common Mistake

Treating schema validation as TypeScript-only compile-time checking; it validates runtime data.

### Likely Exam Question

**Question:** How do React Hook Form and Zod work together?

**Expected answer:** RHF manages form registration and state; a Zod resolver executes the schema and maps validation errors to fields.

---

## Page 29 — Dynamic Fields & Error Handling

### Original Slide Content

### Code from Slide

```jsx
// add/remove rows with useFieldArray
const { fields, append, remove } =
  useFieldArray({ control, name:'items' });

{fields.map((f,i)=>(
  <div key={f.id}>
    <input {...register(`items.${i}.qty`)}/>
    <button onClick={()=>remove(i)}>x</button>
  </div>
))}

<button onClick={()=>append({qty:1})}>
  + Add item
</button>
```

### Good Error UX

- Show errors after blur or submit, not from the first keystroke.
- Place a specific message next to the field.
- Summarize errors on submit and focus the first invalid field.
- Map server errors back to the relevant fields.
- Keep the submit button state accurate.

There are two sources of errors: client-side schema errors and server-side errors such as HTTP `409` for an already registered email. Both must be handled.

### Visual Explanation

A `useFieldArray` example is paired with a checklist for good error UX.

### Explanation

Dynamic forms require stable field identifiers and clean error presentation. Server errors must be translated back into meaningful field feedback.

### Exam Tip

Likely questions ask you to design a validated form or compare manual controlled forms with React Hook Form plus Zod. Mention both client and server validation.

### Common Mistake

Using the array index as the only field identity after reordering; `useFieldArray` supplies stable IDs.

### Likely Exam Question

**Question:** What is the main idea of “Dynamic Fields & Error Handling”?

**Expected answer:** Dynamic forms require stable field identifiers and clean error presentation. Server errors must be translated back into meaningful field feedback.

---

## Page 30 — Putting It Together: A Registration Form

### Original Slide Content

1. **Define schema:** create a Zod object with field rules and `.refine()` for password confirmation.
2. **Wire React Hook Form:** call `useForm({ resolver: zodResolver(schema) })` and register each input.
3. **Validate:** `handleSubmit` runs the schema and errors are shown next to fields.
4. **Submit:** send a POST request to `/api/auth/register` and disable the button during submission.
5. **Handle result:** success causes redirect or login; HTTP `409` is mapped to the email field.

```text
Define schema
      ↓
Wire React Hook Form
      ↓
Validate on submit
      ↓
POST registration data
      ↓
Success → redirect/login
Conflict 409 → field error
```

**Reusable takeaways:** this pattern fits login, checkout and settings forms. Client validation improves UX; server validation provides real safety.

### Visual Explanation

A five-step vertical process shows schema → RHF → validation → submit → result handling.

### Explanation

The registration flow demonstrates layered validation: client checks improve usability, but server validation remains mandatory.

### Exam Tip

Likely questions ask you to design a validated form or compare manual controlled forms with React Hook Form plus Zod. Mention both client and server validation.

### Common Mistake

Trusting client validation for security. The server must validate again.

### Likely Exam Question

**Question:** What is the main idea of “Putting It Together: A Registration Form”?

**Expected answer:** The registration flow demonstrates layered validation: client checks improve usability, but server validation remains mandatory.

---

## Page 31 — Part 4 — API Integration, Server State & Routing

### Original Slide Content

**PART 4 — API Integration, Server State & Routing**

- Axios / Fetch best practices · loading, success & error states
- Client state vs server state — the key distinction
- TanStack Query & RTK Query
- Nested, protected, role-based and lazy routes

### Visual Explanation

Section divider introducing Part 4.

### Explanation

Part 4 introduces communication with the backend, dedicated server-state management and advanced routing.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Part 4 — API Integration, Server State & Routing”?

**Expected answer:** Part 4 introduces communication with the backend, dedicated server-state management and advanced routing.

---

## Page 32 — Axios / Fetch Best Practices & Request States

### Original Slide Content

### Code from Slide

```javascript
// one configured axios instance (services/api.js)
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// interceptor attaches the auth token
api.interceptors.request.use(cfg => {
  cfg.headers.Authorization =
    `Bearer ${getToken()}`;
  return cfg;
});

// callers just use endpoints
export const getProducts = () =>
  api.get('/products').then(r => r.data);
```

### Best Practices

- Use one configured Axios instance.
- Read `baseURL` from an environment variable.
- Use interceptors for authentication and common error handling.
- Centralize endpoints in a services layer.
- Never silently ignore errors.

| Request state | UI behaviour |
|---|---|
| Loading | Spinner or skeleton |
| Success | Render the returned data |
| Error | Show a message and retry action |

Every data request has loading, success and error states; design for all three.

### Visual Explanation

The slide combines an Axios service example, best-practice bullets and loading/success/error state cards.

### Explanation

Centralizing Axios configuration prevents duplicated base URLs and authorization code. A complete UI must represent every request state.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Creating a new Axios configuration in every component and omitting error UI.

### Likely Exam Question

**Question:** What is the main idea of “Axios / Fetch Best Practices & Request States”?

**Expected answer:** Centralizing Axios configuration prevents duplicated base URLs and authorization code. A complete UI must represent every request state.

---

## Page 33 — Client State vs Server State — The Key Distinction

### Original Slide Content

| Aspect | Client state | Server state |
|---|---|---|
| Ownership | Owned fully by the UI | Lives on the server; the client holds a temporary copy |
| Examples | Modal state, active tab, theme, form values, wizard step, unapplied filters | Products, orders and user profile from an API |
| Main risk | Excessive sharing or globalizing | Staleness, concurrent changes, duplicate requests |
| Needed behaviour | Local/shared updates | Caching, refetch, synchronization and deduplication |
| Tools | `useState`, Context, Redux, Zustand | TanStack Query, RTK Query |

Storing API data directly in Redux or `useState` forces the team to implement caching, loading, refetch and invalidation manually. Server-state libraries provide these behaviours.

### Visual Explanation

Two large comparison cards distinguish client state from server state.

### Explanation

Server data is not ordinary client state because it is asynchronous, shared and potentially stale. This distinction determines the correct tool.

### Definition

**Definition:** **Server state** — A client-side cached copy of remote data owned by a server and capable of becoming stale.

**Simple meaning:** a client-side cached copy of remote data owned by a server and capable of becoming stale.

**Example:** Products loaded from `/api/products`.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Putting server state in Redux or Context and manually recreating caching and invalidation.

### Likely Exam Question

**Question:** Differentiate client state and server state.

**Expected answer:** Client state is owned by the UI; server state is an asynchronous, cached copy of remote data that can become stale.

---

## Page 34 — TanStack Query — Server State Done Right

### Original Slide Content

### Code from Slide

```javascript
// read: caching, loading & error built in
const { data, isLoading, error } = useQuery({
  queryKey: ['products', { category }],
  queryFn: () => getProducts(category),
});

// write: mutate + invalidate to refetch
const qc = useQueryClient();
const add = useMutation({
  mutationFn: createProduct,
  onSuccess: () => qc.invalidateQueries(
    { queryKey:['products'] })
});
```

### Available Out of the Box

- Caching by `queryKey`.
- Automatic loading and error states.
- Background refetch and stale-while-revalidate.
- Request deduplication across components.
- Mutations and cache invalidation.
- Pagination and infinite-scroll helpers.

`queryKey` is the cache identity. The same key shares cached data. Changing a key part creates a separate cached variant. Invalidating a key triggers refetching.

### Visual Explanation

A TanStack Query read/write example is paired with a list of built-in capabilities.

### Explanation

TanStack Query treats a query key as a cache identity and connects mutations to invalidation, removing significant manual state code.

### Definition

**Definition:** **Query key** — The identity used by TanStack Query to cache and share a particular query result.

**Simple meaning:** the identity used by tanstack query to cache and share a particular query result.

**Example:** `["products", { category }]`.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Using an incomplete `queryKey` that omits filters or pagination values.

### Likely Exam Question

**Question:** What is a TanStack Query query key?

**Expected answer:** It is the cache identity for a query; equal keys share data, while changed key parts create or fetch another cached variant.

---

## Page 35 — RTK Query — When You're Already on Redux Toolkit

### Original Slide Content

### Code from Slide

```javascript
// define an API slice once
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl:'/api' }),
  endpoints: (b) => ({
    getProducts: b.query({ query:()=>'products' }),
    addProduct: b.mutation({
      query:(body)=>({
        url:'products',
        method:'POST',
        body
      })
    }),
  })
});

// auto-generated hooks!
const { data, isLoading } = useGetProductsQuery();
```

- RTK Query is built into Redux Toolkit.
- It automatically generates query and mutation hooks.
- It provides caching, request deduplication and invalidation.
- It supports tag-based cache invalidation.
- Choose it when Redux Toolkit already exists in the application.
- Otherwise TanStack Query is usually lighter for server state alone.

### Visual Explanation

An RTK Query API-slice example is paired with selection guidance.

### Explanation

RTK Query provides similar capabilities within Redux Toolkit. Its strongest justification is an existing Redux architecture.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Choosing RTK Query without Redux already being part of the app.

### Likely Exam Question

**Question:** What is the main idea of “RTK Query — When You're Already on Redux Toolkit”?

**Expected answer:** RTK Query provides similar capabilities within Redux Toolkit. Its strongest justification is an existing Redux architecture.

---

## Page 36 — Pagination, Filtering, Optimistic Updates & Caching

### Original Slide Content

| Concern | Recommended approach |
|---|---|
| Pagination | Put `page` and `pageSize` in the `queryKey`; keep previous data while the next page loads |
| Filtering | Put filters and search text in the key; debounce the search input |
| Optimistic updates | Update the cache immediately, confirm with the server and roll back on failure |
| Caching and staleness | Use `staleTime` to control refetching; show cached data while refreshing in the background |

### Visual Explanation

Four cards summarize pagination, filtering, optimistic updates and cache staleness.

### Explanation

Query keys should include every value that changes the result. Optimistic updates improve perceived speed but require rollback logic.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Applying optimistic updates without a rollback path.

### Likely Exam Question

**Question:** What is the main idea of “Pagination, Filtering, Optimistic Updates & Caching”?

**Expected answer:** Query keys should include every value that changes the result. Optimistic updates improve perceived speed but require rollback logic.

---

## Page 37 — Advanced Routing: Nested, Layout & Lazy Routes

### Original Slide Content

### Code from Slide

```jsx
// React Router — nested + layout + lazy
const Settings = lazy(()=>import('./Settings'));

<Routes>
  <Route element={<DashboardLayout/>}>
    <Route path='products' element={<Products/>}/>
    <Route
      path='products/:id'
      element={<ProductDetail/>}
    />
    <Route path='settings' element={<Settings/>}/>
  </Route>
  <Route path='*' element={<NotFound/>}/>
</Routes>
```

- A layout route renders the shared shell plus `<Outlet/>`.
- Nested routes inherit that layout.
- `:id` is a URL parameter read through `useParams`.
- `lazy()` with `Suspense` code-splits a route.
- `path='*'` creates the 404/error route.

```text
DashboardLayout
├── /products
├── /products/:id
└── /settings  [lazy-loaded]

* → NotFound
```


### Visual Explanation

A nested route code example is paired with routing concepts and route hierarchy.

### Explanation

Nested layout routes remove duplicated shells. Lazy route modules reduce the initial JavaScript bundle.

### Definition

**Definition:** **Lazy route** — A route whose component code is loaded only when required.

**Simple meaning:** a route whose component code is loaded only when required.

**Example:** Loading the Settings page with `lazy(() => import(...))`.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Using `lazy()` without a `Suspense` fallback in the application.

### Likely Exam Question

**Question:** What is the main idea of “Advanced Routing: Nested, Layout & Lazy Routes”?

**Expected answer:** Nested layout routes remove duplicated shells. Lazy route modules reduce the initial JavaScript bundle.

---

## Page 38 — Protected & Role-Based Routes (Route Guards)

### Original Slide Content

### Code from Slide

```jsx
// a guard component using useAuth()
function RequireAuth({ roles }) {
  const { user } = useAuth();
  const loc = useLocation();

  if (!user)
    return <Navigate
      to='/login'
      state={{from: loc}}
      replace
    />;

  if (roles && !roles.includes(user.role))
    return <Navigate to='/forbidden' replace/>;

  return <Outlet/>;   // allowed
}

<Route element={<RequireAuth roles={['Admin']}/>}>
  <Route path='admin' element={<AdminPanel/>}/>
</Route>
```

```text
Request protected route
        ↓
User logged in?
   ├── No → /login
   └── Yes
         ↓
     Required role?
       ├── Wrong role → /forbidden
       └── Allowed → <Outlet/>
```

Frontend route guards improve UX only. The API must enforce authentication and authorization for real security.

### Visual Explanation

A guard component code example is paired with the authentication/authorization decision flow.

### Explanation

A route guard controls navigation, not backend access. Real authorization must be repeated at the API endpoint.

### Definition

**Definition:** **Route guard** — A frontend component that permits or redirects navigation according to authentication or role state.

**Simple meaning:** a frontend component that permits or redirects navigation according to authentication or role state.

**Example:** `RequireAuth` redirects non-admin users.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Believing a hidden button or frontend redirect secures an API.

### Likely Exam Question

**Question:** Why is a frontend route guard not sufficient security?

**Expected answer:** It only controls client navigation and can be bypassed; the backend API must authenticate and authorize every protected request.

---

## Page 39 — Error Pages & a Look at the Next.js App Router

### Original Slide Content

| Robust client-side error handling | Next.js App Router overview |
|---|---|
| `path='*'` for unknown URLs | File-system routing: folders become routes |
| Error boundaries for render-time crashes | `layout.jsx`, `page.jsx`, `loading.jsx`, `error.jsx` |
| Friendly message and a route back | Server Components and server-side data fetching |
| Per-route loading and error UI | Built-in code splitting and image optimization |
| Error logging and monitoring | Strong SEO and performance through SSR/SSG |

React Router provides routing for a client-side SPA. Next.js is a full framework that adds server rendering, file-based routing and built-in optimizations.

### Visual Explanation

Two columns compare robust SPA error handling with Next.js App Router capabilities.

### Explanation

SPA routing and Next.js solve different levels of the problem. The correct selection depends on SSR, SEO and full-stack needs.

### Exam Tip

Focus on request states, client vs server state, cache identity, invalidation, route nesting and the difference between frontend guards and backend authorization.

### Common Mistake

Treating React Router and Next.js as identical alternatives.

### Likely Exam Question

**Question:** What is the main idea of “Error Pages & a Look at the Next.js App Router”?

**Expected answer:** SPA routing and Next.js solve different levels of the problem. The correct selection depends on SSR, SEO and full-stack needs.

---

## Page 40 — Checkpoint 03 – Discussion

### Original Slide Content

Discuss in pairs — 5 minutes, then compare.

1. Classify each as client or server state: theme toggle, product list, modal open, logged-in user's orders and current wizard step.
2. A teammate stores all API data in Redux and manually creates loading flags. What should replace this, and why?
3. Give one situation where TanStack Query is the better choice and one where RTK Query is the better choice.
4. A user disables JavaScript route guards and visits `/admin`. Is the data secure? What actually protects it?

### Visual Explanation

Four discussion cards test server state and route-security decisions.

### Explanation

The checkpoint tests whether the student can distinguish UI convenience from actual security.

### Exam Tip

Use these questions as practice. Answer each by naming the concept, selecting the tool and giving one requirement-based reason.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Checkpoint 03 – Discussion”?

**Expected answer:** The checkpoint tests whether the student can distinguish UI convenience from actual security.

---

## Page 41 — Part 5 — Performance Optimization & State-Management Decisions

### Original Slide Content

**PART 5 — Performance Optimization & State-Management Decisions**

- Profiling & detecting unnecessary re-renders
- React.memo · useMemo · useCallback
- Lazy loading, code splitting & list virtualization
- Choosing the right state tool — the decision table

### Visual Explanation

Section divider introducing Part 5.

### Explanation

Part 5 addresses measured optimization and tool selection.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Part 5 — Performance Optimization & State-Management Decisions”?

**Expected answer:** Part 5 addresses measured optimization and tool selection.

---

## Page 42 — Profiling & Unnecessary Re-Renders

### Original Slide Content

- Measure before optimizing; guesses are usually wrong.
- React DevTools Profiler records what rendered, why it rendered and how long it took.
- “Highlight updates” visually marks components as they re-render.
- A component re-renders when its state, props or context change.
- Its children also re-render by default, even when their props have not changed.
- Common causes include new objects, arrays and functions created inline, rapidly changing Context values and state lifted too high.

### Profiler Workflow

```text
1. Record an interaction
2. Read the flame graph — wider bars are slower
3. Inspect “why did this render?”
4. Fix the cause
5. Re-measure
```

### Code from Slide

```jsx
// ❌ new array every render → child re-renders
<List items={data.filter(x => x.active)} />

// ✅ memoize the derived value
const active = useMemo(
  () => data.filter(x => x.active),
  [data]
);
```


### Visual Explanation

The slide pairs profiling rules and workflow with a memoization example.

### Explanation

Performance work should begin with evidence from the Profiler. Memoization is a response to a measured cause, not a default coding style.

### Exam Tip

Scenario questions will require selecting an optimization or state tool and justifying it. State the measured problem before proposing memoization.

### Common Mistake

Optimizing before measuring or memoizing every value by default.

### Likely Exam Question

**Question:** What is the main idea of “Profiling & Unnecessary Re-Renders”?

**Expected answer:** Performance work should begin with evidence from the Profiler. Memoization is a response to a measured cause, not a default coding style.

---

## Page 43 — React.memo, useMemo & useCallback

### Original Slide Content

| Tool | What it memoizes | Use when |
|---|---|---|
| `React.memo` | A component's render output; skips rendering when props are equal | An expensive child re-renders with the same props |
| `useMemo` | A computed value between renders | A calculation is costly or a stable object/array reference is required |
| `useCallback` | A function reference between renders | Passing a callback to a memoized child or using it as a hook dependency |

### Code from Slide

```javascript
const Row = React.memo(({ item, onPick }) => ( ...  ));
// skips equal-props renders

const total = useMemo(() => heavy(items), [items]);
// recompute only if items change

const onPick = useCallback((id) => select(id), []);
// stable function → memo stays effective
```

Memoization has costs in memory and comparisons. Apply it only to measured hotspots. `useCallback` is usually pointless unless function identity matters, such as when the child is memoized.

### Visual Explanation

A three-row decision table compares `React.memo`, `useMemo` and `useCallback`.

### Explanation

The three memoization tools solve different identity problems. Misusing them can add overhead without improving rendering.

### Exam Tip

Scenario questions will require selecting an optimization or state tool and justifying it. State the measured problem before proposing memoization.

### Common Mistake

Using `useCallback` when no consumer depends on stable function identity.

### Likely Exam Question

**Question:** Differentiate React.memo, useMemo and useCallback.

**Expected answer:** React.memo memoizes component rendering, useMemo memoizes a value and useCallback memoizes a function reference.

---

## Page 44 — Bundles, Lazy Loading & List Virtualization

### Original Slide Content

| Technique | Key idea |
|---|---|
| Code splitting and lazy loading | Do not ship the entire app initially; use `React.lazy` and `<Suspense>` per route |
| Route-based splitting | Each page becomes a separate chunk; admin code is not downloaded by normal shoppers |
| List virtualization | Render only visible rows using `react-window` or TanStack Virtual; thousands of rows remain smooth |
| Image optimization | Use the correct dimensions and modern formats such as WebP; lazy-load images below the fold |

### Visual Explanation

Four cards summarize code splitting, route chunks, virtualization and image optimization.

### Explanation

Performance includes more than re-renders: bundle size, rendered row count and image payload often dominate real page speed.

### Definition

**Definition:** **List virtualization** — Rendering only the currently visible portion of a long list.

**Simple meaning:** rendering only the currently visible portion of a long list.

**Example:** Showing 20 visible rows from a 10,000-row dataset.

### Exam Tip

Scenario questions will require selecting an optimization or state tool and justifying it. State the measured problem before proposing memoization.

### Common Mistake

Rendering thousands of DOM rows and expecting memoization alone to solve scrolling.

### Likely Exam Question

**Question:** What is the main idea of “Bundles, Lazy Loading & List Virtualization”?

**Expected answer:** Performance includes more than re-renders: bundle size, rendered row count and image payload often dominate real page speed.

---

## Page 45 — State Management — Know Your Options

### Original Slide Content

- First classify the state; this decision determines the tool.
- Local UI state such as whether a modal is open belongs in local `useState`.
- Shared client state such as theme or current user belongs in Context or a store.
- Server state from an API belongs in a server-cache library.
- Most state-management pain comes from using a client-state tool for server data.

| Tool | Best fit |
|---|---|
| `useState` | Local UI state |
| Context API | Low-frequency shared state |
| Redux Toolkit | Large, complex client state |
| Zustand | Simple global client store |
| TanStack Query | Server state with any backend |
| RTK Query | Server state when Redux is already present |

Client state and server state are different problems. Server state is shared, asynchronous, cached and can become stale.

### Visual Explanation

A tool grid maps common state-management tools to their appropriate problem types.

### Explanation

The first state-management decision is classification. Most applications need several tools because each type of state has different behaviour.

### Exam Tip

Scenario questions will require selecting an optimization or state tool and justifying it. State the measured problem before proposing memoization.

### Common Mistake

Using a global store for state used by only one component.

### Likely Exam Question

**Question:** What is the main idea of “State Management — Know Your Options”?

**Expected answer:** The first state-management decision is classification. Most applications need several tools because each type of state has different behaviour.

---

## Page 46 — State Management Decision Table (LO4)

### Original Slide Content

| If you need… | Use | Why / notes |
|---|---|---|
| State used by one component | `useState` | Simplest option; do not reach for more until needed |
| A few components sharing rarely changing data | Context API | Suitable for theme, locale and current user; avoid fast-changing values |
| Large, complex, interconnected client state | Redux Toolkit | Predictable, debuggable and supported by DevTools, but with more setup |
| Simple global state with minimal boilerplate | Zustand | Small API, no providers and a useful middle ground |
| Data from an API with any technology stack | TanStack Query | Caching, loading/error, refetch and pagination are built in |
| API data when Redux is already used | RTK Query | Same server-state benefits integrated with Redux |

**Golden rule:** start local, lift only when sharing is necessary and keep server state out of client stores. Every choice must be justified against the requirement.

### Visual Explanation

A six-row decision table maps requirements to tools and justifications.

### Explanation

The decision table is an LO4 answer template: state the requirement, select the smallest suitable tool and justify the choice.

### Exam Tip

Scenario questions will require selecting an optimization or state tool and justifying it. State the measured problem before proposing memoization.

### Common Mistake

Choosing a tool by popularity rather than the state requirement.

### Likely Exam Question

**Question:** Select a state tool for local state, shared client state and API data.

**Expected answer:** Use useState for local state, Context/Zustand/Redux according to shared client complexity, and TanStack Query or RTK Query for server state.

---

## Page 47 — Case Study: Designing the LankaMart Frontend

### Original Slide Content

| Requirement | Design decision | Justification |
|---|---|---|
| Organize a growing codebase | Feature-based structure: `features/products`, `cart`, `auth` | Locality and team scaling; features are easy to find and remove |
| Browse and search products | TanStack Query plus `useDebounce` | Server data is cached; debouncing avoids a request per keystroke |
| Reusable UI throughout | Shared `Button`, `Modal`, `Table`; compound `<Table>` pattern | Consistency and reuse across features |
| Checkout form with validation | React Hook Form plus Zod schema | Performant, declarative validation with one shared schema |
| Admin-only dashboard | Protected, role-based, lazy-loaded route | Server-enforced security and a smaller shopper bundle |
| Fast product listing | List virtualization and image optimization | Smooth scrolling for large catalogues |
| Cart state while shopping | Zustand small global store | Simple synchronous global client state without Redux overhead |

### Visual Explanation

A case-study table maps LankaMart requirements to frontend decisions and reasons.

### Explanation

The LankaMart case study demonstrates that architecture is a set of requirement-driven decisions rather than one universal stack.

### Exam Tip

Scenario questions will require selecting an optimization or state tool and justifying it. State the measured problem before proposing memoization.

### Common Mistake

Using Redux for the synchronous cart merely because Redux is familiar.

### Likely Exam Question

**Question:** What is the main idea of “Case Study: Designing the LankaMart Frontend”?

**Expected answer:** The LankaMart case study demonstrates that architecture is a set of requirement-driven decisions rather than one universal stack.

---

## Page 48 — Group Activity: Choose the Architecture (20 min)

### Original Slide Content

**Groups:** 3–4 students · use a whiteboard or paper · present in 60 seconds.

**Scenario — Campus Event Portal:** Students browse and search events, register through a form and view “my tickets”. Organizers use an admin area to create events and view attendees.

1. Sketch a feature-based folder structure.
2. For search results, registration form, theme, logged-in user and ticket cart, choose a state tool and justify it.
3. Name two reusable components and one custom hook.
4. Identify protected, role-based and lazy-loaded routes.

### Marking Lens

- Feature-based rather than type-based structure.
- Server state handled by a query library, not Redux or Context.
- Local state remains local; the correct tool is used for each state.
- Reusable components are identified and behavioural logic is placed in hooks.
- Admin routes are protected, server-enforced and lazy-loaded.

### Visual Explanation

An activity card and marking-rubric card define a Campus Event Portal architecture task.

### Explanation

The activity asks students to synthesize the entire lecture into one frontend architecture.

### Exam Tip

Use these questions as practice. Answer each by naming the concept, selecting the tool and giving one requirement-based reason.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Group Activity: Choose the Architecture (20 min)”?

**Expected answer:** The activity asks students to synthesize the entire lecture into one frontend architecture.

---

## Page 49 — Quick Quiz — 6 Questions

### Original Slide Content

1. Data fetched from a REST API is which type of state?  
   A) Local UI · **B) Server state** · C) Form state
2. Best default tool for caching API data with loading/error built in?  
   A) Redux · B) Context · **C) TanStack Query**
3. `React.memo` on a child still re-renders. Most likely cause?  
   A) React bug · **B) An unstable prop** · C) Too much CSS
4. Which hook gives a stable function reference?  
   A) `useMemo` · B) `useEffect` · **C) `useCallback`**
5. A frontend route guard hides `/admin`. Is the data secure?  
   A) Yes · **B) Only if the API enforces authorization** · C) Yes, if the route is lazy
6. Two hundred product rows scroll slowly. Best fix?  
   A) Memoize all components · **B) List virtualization** · C) Remove images

### Visual Explanation

Six multiple-choice question cards form a rapid knowledge check.

### Explanation

The quiz answers reinforce the most examinable distinctions: server state, stable references, authorization and virtualization.

### Exam Tip

Use these questions as practice. Answer each by naming the concept, selecting the tool and giving one requirement-based reason.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Quick Quiz — 6 Questions”?

**Expected answer:** The quiz answers reinforce the most examinable distinctions: server state, stable references, authorization and virtualization.

---

## Page 50 — Lecture Summary — Key Takeaways

### Original Slide Content

| Key takeaway | Meaning |
|---|---|
| Architect for growth | Use feature-based structure and separate UI, hooks and services |
| Design reusable components | Apply composition, compound components, controlled inputs and headless UI |
| Extract logic into hooks | Use `useFetch`, `useDebounce`, `useAuth` and similar hooks so components stay thin |
| Treat server state specially | Use TanStack Query or RTK Query for caching, loading, errors and refetching—not ordinary Redux state |
| Route and optimize deliberately | Use protected and lazy routes; profile, memoize, virtualize and split bundles |
| Choose tools by requirement | Distinguish local, shared-client and server state and justify every tool choice |

### Visual Explanation

Six summary cards consolidate the main lecture takeaways.

### Explanation

The summary condenses the lecture into six production rules.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Lecture Summary — Key Takeaways”?

**Expected answer:** The summary condenses the lecture into six production rules.

---

## Page 51 — Learning Outcomes, Next Lecture & Preparation

### Original Slide Content

| LO | Covered by |
|---|---|
| LO1 | Component model, React ecosystem and the client-state vs server-state distinction |
| LO2 | Feature-based architecture, reusable components, custom hooks, forms, routing and data fetching |
| LO3 | Performance optimization, validation, error handling and separation of UI/logic/services |
| LO4 | State-management decision table and architecture case study/activity |

### Next Lecture

Lecture 03 — C#, .NET and REST APIs. It builds the backend this frontend calls, including C#/.NET fundamentals and ASP.NET Core GET/POST endpoints.

### Before the Lab / Next Week

- Scaffold a Vite + React JavaScript app and create the feature-based folders.
- Build one reusable component and one custom hook such as `useDebounce`.
- Read React's “Thinking in React” documentation and the TanStack Query overview.
- Sketch the component tree for the assignment frontend.

### Visual Explanation

An LO coverage table is followed by two preparation panels for the next lecture and lab.

### Explanation

The lecture prepares the frontend contract that the next backend lecture will implement.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “Learning Outcomes, Next Lecture & Preparation”?

**Expected answer:** The lecture prepares the frontend contract that the next backend lecture will implement.

---

## Page 52 — References & Further Reading

### Original Slide Content

### Official Documentation — Primary Sources

- React Documentation — react.dev: Learn React, “Thinking in React” and Hooks reference.
- TanStack Query and TanStack Virtual — tanstack.com.
- Redux Toolkit and RTK Query — redux-toolkit.js.org.
- React Router — reactrouter.com.
- Zustand — docs.pmnd.rs.
- React Hook Form — react-hook-form.com.
- Zod — zod.dev.

### Guides and Tooling

- Vite — vitejs.dev.
- React DevTools Profiler — Chrome/Firefox extension.
- web.dev — performance, Core Web Vitals and image optimization.

### Recommended Reading

- Banks, A. & Porcello, E. (2020). *Learning React*, 2nd ed. O'Reilly Media.
- Roldán, C. S. (2021). *React Design Patterns and Best Practices*. Packt.

### Visual Explanation

A structured reference list closes the lecture.

### Explanation

The references prioritize official documentation and established books for further study.

### Exam Tip

Use this slide to understand the lecture structure and connect each topic to LO1–LO4.

### Common Mistake

No major common mistake beyond omitting the slide’s key terms or failing to justify a design choice.

### Likely Exam Question

**Question:** What is the main idea of “References & Further Reading”?

**Expected answer:** The references prioritize official documentation and established books for further study.

---

# Full Lecture Summary

Advanced React development is mainly about controlling complexity. A production frontend should be divided into feature-oriented domains, with UI components, custom hooks and API services kept separate. Components should be composed from small reusable parts, and compound components can coordinate shared state without prop drilling. Custom hooks provide the standard mechanism for sharing non-visual stateful logic.

Forms become maintainable when React Hook Form manages registration and submission state while a Zod or Yup schema declares validation rules. Dynamic fields need stable identities and both client and server errors must be presented clearly. Client-side validation improves usability, but the backend remains responsible for security and authoritative validation.

Remote API data is server state, not ordinary client state. TanStack Query and RTK Query provide caching, loading/error states, deduplication, background refetching, mutations and invalidation. TanStack Query is the general default, while RTK Query is justified when Redux Toolkit is already used. Axios should be configured once in a services layer, and every request must have loading, success and error UI.

Routing should use shared layouts, nested routes, URL parameters, 404 handling and lazy loading. Frontend route guards improve navigation UX but cannot secure data; backend endpoints must enforce authentication and roles. Performance work starts with profiling. Memoization, code splitting, virtualization and image optimization should be applied to measured problems. State tools must be selected according to the state type: local `useState`, low-frequency Context, Redux Toolkit or Zustand for client state, and TanStack Query or RTK Query for server state.

# Important Code Snippets

## Code Reference — Page 07: The Role of React in Modern Frontend Development

```jsx
function Greeting({ name }) {
  return <h1>Hi {name}!</h1>;
}

<Greeting name="Amal" />
```

**Why it matters:** React is declarative: the UI is derived from state. Components form reusable units, and one-way data flow makes changes easier to reason about.

## Code Reference — Page 11: Production Architecture: Feature-Based Structure

```text
src/
├── components/                 // shared, reusable UI
│   ├── Button.jsx
│   ├── Modal.jsx
│   └── Table.jsx
├── layouts/                    // page shells
│   └── DashboardLayout.jsx
├── features/                   // group by DOMAIN
│   ├── products/
│   │   ├── components/
│   │   │   └── ProductCard.jsx
│   │   ├── hooks/
│   │   │   └── useProducts.js
│   │   ├── services/
│   │   │   └── productApi.js
│   │   └── pages/
│   │       └── ProductListPage.jsx
│   ├── auth/
│   ├── cart/
│   └── orders/
├── hooks/                      // global custom hooks
├── lib/
├── services/                   // API client, utilities
└── routes/                     // route configuration
```

**Why it matters:** Feature-based structure optimizes locality: code that changes together lives together. This reduces cross-folder searching and supports parallel teamwork.

## Code Reference — Page 16: Composition over Configuration

```jsx
// ❌ prop explosion — rigid
<Card
  title="..."
  subtitle="..."
  image="..."
  footerButton="Buy"
  badge="New"
  ...
/>

// ✅ composition with children & slots
<Card>
  <Card.Header>{title}</Card.Header>
  <Card.Body><ProductInfo p={p}/></Card.Body>
  <Card.Footer>
    <Button onClick={buy}>Buy</Button>
  </Card.Footer>
</Card>
```

**Why it matters:** Composition is more flexible than adding props for every variation. It lets callers supply content while the component supplies structure.

## Code Reference — Page 17: Compound Components — Shared Implicit State

```jsx
// parts share state via context, set by <Tabs>
<Tabs defaultValue="details">
  <Tabs.List>
    <Tabs.Trigger value="details">Details</Tabs.Trigger>
    <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="details">...</Tabs.Panel>
  <Tabs.Panel value="reviews">...</Tabs.Panel>
</Tabs>

// internally: const Ctx = createContext();
// Tabs provides {active,setActive}; parts consume it
```

**Why it matters:** Compound components create a coordinated family of components with hidden shared state, producing expressive APIs without prop drilling.

## Code Reference — Page 18: Controlled vs Uncontrolled Components

```jsx
// controlled
const [q,setQ]=useState("");
<input
  value={q}
  onChange={e=>setQ(e.target.value)}
/>

// uncontrolled
const ref=useRef();
<input defaultValue="" ref={ref}/>
```

**Why it matters:** Controlled inputs give React immediate control; uncontrolled inputs reduce render overhead. The choice depends on validation and interaction needs.

## Code Reference — Page 20: Custom Hooks — Logic You Can Reuse

```jsx
// before: logic trapped in the component
function ProductList() {
  const [data,setData]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(()=>{ /* fetch... */ },[]);
  ...
}

// after: logic in a reusable hook
function ProductList() {
  const {data,isLoading,error} =
    useFetch('/api/products');
}
```

**Why it matters:** Custom hooks are the main method for reusing stateful, non-visual logic in modern React.

## Code Reference — Page 21: Essential Custom Hooks (1): Data & Input

```javascript
// useDebounce — the classic
function useDebounce(value, delay=400){
  const [v,setV]=useState(value);
  useEffect(()=>{
    const id=setTimeout(
      ()=>setV(value), delay);
    return ()=>clearTimeout(id);
  },[value,delay]);
  return v;   // debounced value
}
```

**Why it matters:** Debouncing prevents excessive requests, while local-storage hooks provide persistence. These hooks isolate common behaviour behind simple contracts.

## Code Reference — Page 22: Essential Custom Hooks (2): App Concerns

```javascript
// useAuth — consume an Auth context
const AuthCtx = createContext();
export function useAuth(){
  const ctx = useContext(AuthCtx);
  if(!ctx) throw new Error(
    'useAuth outside <AuthProvider>');
  return ctx; // {user,login,logout}
}
```

**Why it matters:** Authentication and pagination are cross-cutting concerns. A hook provides one consistent access point without passing props through every component.

## Code Reference — Page 26: Why Complex Forms Are Hard

```javascript
// the boilerplate trap (per field!)
const [email,setEmail]=useState('');
const [emailErr,setEmailErr]=useState('');
const [touched,setTouched]=useState(false);
// ...repeat ×30 fields...

function validate(){ /* big if-else */ }
// hard to read, easy to get wrong,
// re-renders the whole form constantly
```

**Why it matters:** Manual form state scales badly because each field introduces values, errors, touched flags and validation branches.

## Code Reference — Page 27: React Hook Form — Fast, Minimal Re-renders

```jsx
import { useForm } from 'react-hook-form';

const { register, handleSubmit,
  formState:{ errors, isSubmitting }
} = useForm();

<form onSubmit={handleSubmit(onValid)}>
  <input {...register('email')} />
  {errors.email && <span>...</span>}
  <input {...register('password')} />
  <button disabled={isSubmitting}>
    Sign up
  </button>
</form>
```

**Why it matters:** React Hook Form minimizes re-renders and centralizes submission state while keeping input registration concise.

## Code Reference — Page 28: Schema Validation with Zod / Yup

```javascript
import { z } from 'zod';
import { zodResolver } from
  '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  price: z.number().positive(),
  password: z.string().min(8),
  confirm: z.string()
}).refine(d => d.password===d.confirm,
  { message:'Passwords differ',
    path:['confirm'] });

useForm({ resolver: zodResolver(schema) });
```

**Why it matters:** Schema validation separates rules from UI code and makes cross-field validation explicit and reusable.

## Code Reference — Page 29: Dynamic Fields & Error Handling

```jsx
// add/remove rows with useFieldArray
const { fields, append, remove } =
  useFieldArray({ control, name:'items' });

{fields.map((f,i)=>(
  <div key={f.id}>
    <input {...register(`items.${i}.qty`)}/>
    <button onClick={()=>remove(i)}>x</button>
  </div>
))}

<button onClick={()=>append({qty:1})}>
  + Add item
</button>
```

**Why it matters:** Dynamic forms require stable field identifiers and clean error presentation. Server errors must be translated back into meaningful field feedback.

## Code Reference — Page 32: Axios / Fetch Best Practices & Request States

```javascript
// one configured axios instance (services/api.js)
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// interceptor attaches the auth token
api.interceptors.request.use(cfg => {
  cfg.headers.Authorization =
    `Bearer ${getToken()}`;
  return cfg;
});

// callers just use endpoints
export const getProducts = () =>
  api.get('/products').then(r => r.data);
```

**Why it matters:** Centralizing Axios configuration prevents duplicated base URLs and authorization code. A complete UI must represent every request state.

## Code Reference — Page 34: TanStack Query — Server State Done Right

```javascript
// read: caching, loading & error built in
const { data, isLoading, error } = useQuery({
  queryKey: ['products', { category }],
  queryFn: () => getProducts(category),
});

// write: mutate + invalidate to refetch
const qc = useQueryClient();
const add = useMutation({
  mutationFn: createProduct,
  onSuccess: () => qc.invalidateQueries(
    { queryKey:['products'] })
});
```

**Why it matters:** TanStack Query treats a query key as a cache identity and connects mutations to invalidation, removing significant manual state code.

## Code Reference — Page 35: RTK Query — When You're Already on Redux Toolkit

```javascript
// define an API slice once
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl:'/api' }),
  endpoints: (b) => ({
    getProducts: b.query({ query:()=>'products' }),
    addProduct: b.mutation({
      query:(body)=>({
        url:'products',
        method:'POST',
        body
      })
    }),
  })
});

// auto-generated hooks!
const { data, isLoading } = useGetProductsQuery();
```

**Why it matters:** RTK Query provides similar capabilities within Redux Toolkit. Its strongest justification is an existing Redux architecture.

## Code Reference — Page 37: Advanced Routing: Nested, Layout & Lazy Routes

```jsx
// React Router — nested + layout + lazy
const Settings = lazy(()=>import('./Settings'));

<Routes>
  <Route element={<DashboardLayout/>}>
    <Route path='products' element={<Products/>}/>
    <Route
      path='products/:id'
      element={<ProductDetail/>}
    />
    <Route path='settings' element={<Settings/>}/>
  </Route>
  <Route path='*' element={<NotFound/>}/>
</Routes>
```

```text
DashboardLayout
├── /products
├── /products/:id
└── /settings  [lazy-loaded]

* → NotFound
```

**Why it matters:** Nested layout routes remove duplicated shells. Lazy route modules reduce the initial JavaScript bundle.

## Code Reference — Page 38: Protected & Role-Based Routes (Route Guards)

```jsx
// a guard component using useAuth()
function RequireAuth({ roles }) {
  const { user } = useAuth();
  const loc = useLocation();

  if (!user)
    return <Navigate
      to='/login'
      state={{from: loc}}
      replace
    />;

  if (roles && !roles.includes(user.role))
    return <Navigate to='/forbidden' replace/>;

  return <Outlet/>;   // allowed
}

<Route element={<RequireAuth roles={['Admin']}/>}>
  <Route path='admin' element={<AdminPanel/>}/>
</Route>
```

```text
Request protected route
        ↓
User logged in?
   ├── No → /login
   └── Yes
         ↓
     Required role?
       ├── Wrong role → /forbidden
       └── Allowed → <Outlet/>
```

**Why it matters:** A route guard controls navigation, not backend access. Real authorization must be repeated at the API endpoint.

## Code Reference — Page 42: Profiling & Unnecessary Re-Renders

```text
1. Record an interaction
2. Read the flame graph — wider bars are slower
3. Inspect “why did this render?”
4. Fix the cause
5. Re-measure
```

```jsx
// ❌ new array every render → child re-renders
<List items={data.filter(x => x.active)} />

// ✅ memoize the derived value
const active = useMemo(
  () => data.filter(x => x.active),
  [data]
);
```

**Why it matters:** Performance work should begin with evidence from the Profiler. Memoization is a response to a measured cause, not a default coding style.

## Code Reference — Page 43: React.memo, useMemo & useCallback

```javascript
const Row = React.memo(({ item, onPick }) => ( ...  ));
// skips equal-props renders

const total = useMemo(() => heavy(items), [items]);
// recompute only if items change

const onPick = useCallback((id) => select(id), []);
// stable function → memo stays effective
```

**Why it matters:** The three memoization tools solve different identity problems. Misusing them can add overhead without improving rendering.

# Key Definitions Table

| Term | Definition | Simple example |
|---|---|---|
| Declarative UI | The UI is described as a function of state. | Changing state updates the rendered interface. |
| Component | A reusable unit of UI and behaviour. | `ProductCard`. |
| Feature-based architecture | Grouping code by business domain. | `features/products/`. |
| Separation of concerns | Giving UI, logic, services and data distinct responsibilities. | Component → hook → API service. |
| Composition | Creating flexible components through children and slots. | `Card.Header` and `Card.Body`. |
| Compound component | Related components sharing parent-managed state. | Tabs and Tab panels. |
| Controlled input | Input value stored in React state. | `value` plus `onChange`. |
| Uncontrolled input | Input value stored in the DOM and read through a ref. | `defaultValue` plus `ref`. |
| Headless UI | Accessible behaviour without prescribed styling. | Radix UI primitives styled by the project. |
| Custom hook | Reusable stateful, non-visual React logic. | `useAuth()`. |
| Schema validation | Declarative rules for runtime data shape. | Zod registration schema. |
| Client state | State fully owned by the frontend UI. | Theme or modal state. |
| Server state | Cached remote data owned by a server. | Product list from an API. |
| Query key | Cache identity for a server-state query. | `["products", page]`. |
| Cache invalidation | Marking cached data stale so it refetches. | Invalidate products after adding one. |
| Layout route | Route that supplies a shared shell and renders children through `Outlet`. | Dashboard header/sidebar around nested pages. |
| Route guard | Frontend navigation check for login or role. | Admin route redirect. |
| Memoization | Reusing a prior result or reference to avoid unnecessary work. | `useMemo` for filtered data. |
| List virtualization | Rendering only visible rows. | TanStack Virtual for thousands of products. |
| Optimistic update | Updating UI/cache before the server confirms. | Immediately showing a newly added item, then rolling back on error. |

# Quick Revision Table

| Topic | Must remember | Pages |
|---|---|---|
| React role | Declarative, component-based, one-way data flow; browser client tier | 7–10 |
| Architecture | Feature-based folders and UI → hooks → services → server separation | 11–13 |
| Component patterns | Composition prevents prop explosion; compound components share implicit state | 16–19 |
| Custom hooks | Reusable UI-free logic; obey hook rules and clean effects | 20–23 |
| Forms | RHF minimizes re-renders; Zod/Yup schemas; handle client and server errors | 26–30 |
| API integration | One Axios instance; loading/success/error states | 32 |
| State distinction | Client state is UI-owned; server state is remote and stale-able | 33 |
| Server-state tools | TanStack Query general default; RTK Query for Redux apps | 34–36 |
| Routing | Nested layouts, lazy routes, 404, protected/role routes | 37–39 |
| Security | Frontend guards are UX; API authorization is mandatory | 38, 40 |
| Performance | Profile first; memoize measured hotspots; split, virtualize, optimize images | 42–44 |
| Tool selection | Start local; Context/Zustand/Redux for client state; query library for API data | 45–47 |

# Likely Exam Questions and Short Answers

## Question 1

Explain why feature-based architecture scales better than file-type architecture.

**Expected answer:** It keeps domain-related components, hooks, services and pages together, improving locality, team independence and feature removal.

## Question 2

Compare composition and compound components.

**Expected answer:** Composition supplies flexible structure through children/slots; compound components additionally coordinate shared parent-managed state, usually through Context.

## Question 3

Compare controlled and uncontrolled form inputs.

**Expected answer:** Controlled inputs use React state and support immediate reactions; uncontrolled inputs store values in the DOM and reduce render/wiring overhead.

## Question 4

Why use React Hook Form with Zod?

**Expected answer:** RHF efficiently manages form registration and submission state; Zod declares reusable runtime validation including cross-field rules.

## Question 5

Why must server state be handled differently from client state?

**Expected answer:** It is remote, asynchronous, shared and can become stale, so it needs caching, deduplication, refetching and invalidation.

## Question 6

TanStack Query or RTK Query?

**Expected answer:** Use TanStack Query for server state in any stack; choose RTK Query when Redux Toolkit is already central to the application.

## Question 7

Explain nested, layout and lazy routes.

**Expected answer:** Nested routes share a layout rendered through Outlet; lazy routes load route code on demand to reduce the initial bundle.

## Question 8

Can a React route guard secure an admin API?

**Expected answer:** No. It only controls frontend navigation. The API must authenticate and authorize the request.

## Question 9

Differentiate React.memo, useMemo and useCallback.

**Expected answer:** React.memo memoizes component rendering, useMemo memoizes computed values and useCallback memoizes function references.

## Question 10

Choose tools for theme, cart and products loaded from an API.

**Expected answer:** Theme: Context; cart: Zustand or suitable client store; products: TanStack Query or RTK Query as server state.

# Key Terms

`React`, `declarative UI`, `virtual DOM`, `component`, `props`, `unidirectional data flow`, `feature-based architecture`, `separation of concerns`, `composition`, `compound components`, `controlled input`, `uncontrolled input`, `headless UI`, `custom hook`, `useFetch`, `useDebounce`, `useAuth`, `React Hook Form`, `Zod`, `Yup`, `schema validation`, `Axios interceptor`, `client state`, `server state`, `TanStack Query`, `RTK Query`, `query key`, `mutation`, `cache invalidation`, `staleTime`, `optimistic update`, `nested route`, `layout route`, `Outlet`, `lazy loading`, `route guard`, `authentication`, `authorization`, `React DevTools Profiler`, `React.memo`, `useMemo`, `useCallback`, `code splitting`, `list virtualization`, `Context API`, `Redux Toolkit`, `Zustand`

# Verification

- All 52 PDF pages are represented in order.
- Every slide title and text point is included or reconstructed in readable Markdown.
- Visual tables, component trees, architectures and workflows are recreated as Markdown tables or tagged `text` diagrams.
- All lecture code is preserved in language-tagged fenced code blocks.

PDF pages: 52 / MD page sections: 52 ✅