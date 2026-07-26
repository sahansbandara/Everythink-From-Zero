# SE3090 — Software Engineering Frameworks
## Lecture 01 — Software Engineering Framework Fundamentals, Selection and Emerging Trends

| Item | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Lecture | Lecture 01 |
| Lecture title | Software Engineering Framework Fundamentals, Selection and Emerging Trends |
| Lecturer | Eishan Weerasinghe |
| Lecturer email | `eishan.w@sliit.lk` |
| Course web | `courseweb.sliit.lk` |
| Academic level | Year 3 — Semester 1 |
| Credits | 4 |
| Total PDF pages | 47 |

> **Source note:** These notes follow the PDF page order exactly. Tables, workflows, comparisons, architecture diagrams, and process visuals are reconstructed in Markdown/ASCII. Any lecture-number references that differ between slides are preserved as written in the source.

---

# Table of Contents

## Module Introduction and Lecture Opening
- [Page 01 — Lecture Title](#page-01--lecture-title)
- [Page 02 — Module Delivery Team](#page-02--module-delivery-team)
- [Page 03 — Teaching & Lab Delivery Team](#page-03--teaching--lab-delivery-team)
- [Page 04 — About This Module](#page-04--about-this-module)
- [Page 05 — How You Will Be Assessed](#page-05--how-you-will-be-assessed)
- [Page 06 — The Module Journey — 11 Lectures](#page-06--the-module-journey--11-lectures)
- [Page 07 — Learning Outcomes for This Lecture](#page-07--learning-outcomes-for-this-lecture)
- [Page 08 — Why Frameworks Matter in Real Software Engineering](#page-08--why-frameworks-matter-in-real-software-engineering)
- [Page 09 — Today's Roadmap — 3 Hours](#page-09--todays-roadmap--3-hours)

## Part 1 — Framework Fundamentals
- [Page 10 — Framework Fundamentals](#page-10--framework-fundamentals)
- [Page 11 — What Is a Software Engineering Framework?](#page-11--what-is-a-software-engineering-framework)
- [Page 12 — The Problems Frameworks Solve](#page-12--the-problems-frameworks-solve)
- [Page 13 — Inversion of Control](#page-13--inversion-of-control--dont-call-us-well-call-you)
- [Page 14 — Benefits of Using Frameworks](#page-14--benefits-of-using-frameworks)
- [Page 15 — The Costs Nobody Advertises](#page-15--the-costs-nobody-advertises)
- [Page 16 — Frameworks vs Libraries](#page-16--frameworks-vs-libraries)
- [Page 17 — The Grey Zone](#page-17--the-grey-zone--where-do-these-belong)
- [Page 18 — Checkpoint 1](#page-18--checkpoint-1--quick-thinking)

## Part 2 — Types of Frameworks and Industry Use
- [Page 19 — Types of Frameworks & Industry Use](#page-19--types-of-frameworks--industry-use)
- [Page 20 — The Framework and Tool Landscape](#page-20--the-framework-and-tool-landscape)
- [Page 21 — Frontend Frameworks](#page-21--frontend-frameworks--building-modern-uis)
- [Page 22 — Backend Frameworks](#page-22--backend-frameworks--apis-and-business-logic)
- [Page 23 — Mobile Frameworks](#page-23--mobile-frameworks--one-codebase-or-two)
- [Page 24 — Testing & Quality Frameworks](#page-24--testing--quality-frameworks)
- [Page 25 — Full-Stack Architecture](#page-25--how-it-all-fits--full-stack-architecture)
- [Page 26 — Frameworks in Industry](#page-26--frameworks-in-industry--who-uses-what)
- [Page 27 — Checkpoint 2](#page-27--checkpoint-2--spot-the-stack)

## Part 3 — Framework Selection
- [Page 28 — Framework Selection](#page-28--framework-selection)
- [Page 29 — Framework Selection Criteria](#page-29--framework-selection-criteria)
- [Page 30 — Repeatable Selection Workflow](#page-30--a-repeatable-selection-workflow)
- [Page 31 — Weighted Decision Matrix](#page-31--scoring-candidates--weighted-decision-matrix)
- [Page 32 — When Framework Choices Go Wrong](#page-32--when-framework-choices-go-wrong)
- [Page 33 — CampusEats Case Study](#page-33--case-study--campuseats-food-delivery-startup)
- [Page 34 — Group Activity](#page-34--group-activity--you-are-the-tech-lead)

## Part 4 — Emerging Trends
- [Page 35 — Emerging Trends in Frameworks](#page-35--emerging-trends-in-frameworks)
- [Page 36 — How Application Architecture Evolved](#page-36--how-application-architecture-evolved)
- [Page 37 — Microservices Frameworks](#page-37--trend-1--microservices-frameworks)
- [Page 38 — Serverless Computing](#page-38--trend-2--serverless-computing)
- [Page 39 — Cloud-Native & DevOps Automation](#page-39--trend-3--cloud-native--devops-automation)
- [Page 40 — AI-Assisted & Agentic Development](#page-40--trend-4--ai-assisted--agentic-development)
- [Page 41 — What Trends Mean for Framework Choices](#page-41--what-these-trends-mean-for-your-choices)

## Knowledge Check and Closing
- [Page 42 — Quick Quiz](#page-42--quick-quiz--test-yourself)
- [Page 43 — Quiz Answers](#page-43--quiz-answers--why)
- [Page 44 — Discussion](#page-44--discussion--take-a-position)
- [Page 45 — Summary](#page-45--summary--what-you-should-remember)
- [Page 46 — Next Week & Preparation](#page-46--next-week--how-to-prepare)
- [Page 47 — Learning Outcome Mapping & References](#page-47--learning-outcome-mapping--references)

## End-of-Lecture Revision
- [Full Lecture Summary](#full-lecture-summary)
- [Important Formulas and Decision Methods](#important-formulas-and-decision-methods)
- [Important Code and Commands](#important-code-and-commands)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions with Short Answers](#likely-exam-questions-with-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Key Terms](#key-terms)

---

# Page-by-Page Lecture Notes

## Page 01 — Lecture Title

### Original Slide Content

**SE3090 — Software Engineering Frameworks**  
**Lecture 01**  
**Software Engineering Framework Fundamentals, Selection and Emerging Trends**

- Year 3
- Semester 1
- 4 Credits
- Lecturer: Eishan Weerasinghe
- Email: `eishan.w@sliit.lk`
- Course web: `courseweb.sliit.lk`

### Visual Explanation

The title slide uses SLIIT Faculty of Computing branding and identifies the module, lecture number, topic, credit value, lecturer, and official contact channels. Its visual hierarchy places the lecture title as the central focus.

### Explanation

This lecture establishes the foundation for evaluating and selecting software engineering frameworks. It also introduces emerging architectural and AI-assisted development trends.

### Exam Tip

Remember the lecture's three central themes: **framework fundamentals**, **framework selection**, and **emerging trends**.

### Common Mistake

Do not treat a framework as merely a programming language or a collection of utility functions.

---

## Page 02 — Module Delivery Team

### Original Slide Content

Use the correct contact point for module coordination, lecture content, lab support, assessments, and special lecture areas.

| Role | Name | Email |
|---|---|---|
| Lecture-in-Charge (LIC) | Eishan Weerasinghe | `eishan.w@sliit.lk` |
| Visiting Lecturer (VL) | Mr. Lasal Hettiarachchi | `lasal.h.visiting@sliit.lk` |

**Official channels**

- Course Web for announcements and submissions
- Email for individual clarification

### Visual Explanation

The slide presents two staff profile cards: one for the Lecture-in-Charge and one for the Visiting Lecturer. A bottom banner separates official communication channels from personal contact details.

### Explanation

CourseWeb should be used for formal announcements and submissions, while email is intended for individual clarification.

### Exam Tip

This is administrative information rather than examinable framework theory, but it is important for correct module communication.

### Common Mistake

Do not submit assessed work through personal email unless explicitly instructed.

---

## Page 03 — Teaching & Lab Delivery Team

### Original Slide Content

Centre lecture conductors and module lab conductors for SE3090.

### Centre Lecture Conductors

| Centre / Group | Lecture Conductor | Email |
|---|---|---|
| KANDY UNI (WD/WE) | Ms. Kaushalya Premarathne | `kaushalya.pr@kandyuni.lk` |
| NORTHERN UNI (WE) | Ms. A. Sangeetha | `sangeetha.b@northernuni.lk` |

### Module Lab Conductors

| Lab Conductor 1 | Lab Conductor 2 | Lab Conductor 3 |
|---|---|---|
| Ms. Madusha Sulakshi Weerasooriya | Mr. Janidu Illesinghe | Mr. Manuka Rashen |
| Ms. Piumi Navoda | Ms. Shehani Dehipola | Ms. Hansi De Silva |

**Lab delivery:** Lab conductors support practical completion, environment setup, and CourseWeb submission guidance.

### Visual Explanation

The slide uses two tables. The first maps study centres to lecture conductors and emails. The second lists six lab conductors in a 2×3 grid. A note underneath explains their practical support responsibilities.

### Explanation

Lecture conductors primarily support lecture delivery at specific centres, while lab conductors help students complete practical tasks and prepare correct development environments.

### Exam Tip

Administrative slide; not normally assessed directly.

### Common Mistake

Do not confuse lecture content support with laboratory submission support.

---

## Page 04 — About This Module

### Original Slide Content

- **Aim:** understand modern frameworks used to build, integrate, deploy, and maintain software systems
- **Hands-on focus:** full-stack web + mobile apps, DevOps and cloud deployment, quality and security
- **Responsible use of agentic AI tools** in real development workflows

| Delivery | Hours | What happens there |
|---|---:|---|
| Lectures | 3 h / week | Concepts, demos, case studies, framework decisions |
| Laboratories | 2 h / week | Guided practicals: React, ASP.NET Core, Flutter, CI/CD, AI tools |
| Independent study | ~80 h / semester | Reading, practice, assignment work |

### Visual Explanation

The slide combines three module-focus bullets with a delivery table. It visually separates theory, practical learning, and independent study.

### Explanation

The module is not limited to learning framework syntax. It expects students to understand **why** a framework is selected, how frameworks integrate into a complete software product, and how quality, delivery, security, and AI assistance affect engineering work.

### Exam Tip

Expect scenario questions requiring you to justify a framework rather than simply name one.

### Common Mistake

Memorizing framework names without understanding their role in the software lifecycle will not satisfy evaluation or selection questions.

---

## Page 05 — How You Will Be Assessed

### Original Slide Content

| Assessment | Weight | Description |
|---|---:|---|
| Lab Submission | 10% | Continuous lab tasks — starts this week |
| Mini Hackathon | 15% | Participation + Evaluation |
| Main Assignment | 25% | Full-stack application with agentic AI integration |
| Final Exam | 50% | Covers all lectures (LO1–LO4) |

- **Pass requirement:** 45% in continuous assessments **AND** 45% in the final examination
- The main assignment is the opportunity to apply every framework taught in this module to one product.

### Visual Explanation

Four large cards display the assessment percentages. Continuous assessments total 50%, and the final exam contributes the remaining 50%.

### Explanation

The pass rule has two separate thresholds. A strong continuous-assessment result cannot compensate for failing the final-exam threshold, and vice versa.

### Exam Tip

The final exam covers all lectures and learning outcomes LO1–LO4.

### Common Mistake

Do not assume that an overall average above 45% automatically means a pass; both stated components require at least 45%.

---

## Page 06 — The Module Journey — 11 Lectures

### Original Slide Content

| Area | Lectures and topics |
|---|---|
| Foundations | L01 — Framework fundamentals, selection & trends |
| Web Frameworks | L02 — Advanced React frontend; L03 — C#, .NET & ASP.NET Core REST APIs; L04 — Databases, auth & integration |
| Agentic AI | L05–L07 — Agentic software development 1–3 |
| Mobile Frameworks | L08 — Flutter & mobile app development; L09 — Flutter UI, device features, data |
| Quality & Delivery | L10 — Git, CI/CD, security, code quality; L11 — DevOps & cloud hosting |

**Today:** the map of the whole territory — every later lecture zooms into one region.

### Visual Explanation

The module is shown as five vertical columns, each representing a knowledge region. Lecture 01 is positioned as the broad map before later lectures examine each area in depth.

### Explanation

The journey moves from fundamentals to web, AI, mobile, and delivery. This order reflects the lifecycle of modern software: choose architecture, build clients and services, use tools responsibly, test, automate, and deploy.

### Exam Tip

Know the six broad framework/tool families discussed later: frontend, backend, mobile, testing, DevOps/cloud, and AI-assisted/agentic.

### Common Mistake

Do not assume each family works independently; real systems combine several families.

---

## Page 07 — Learning Outcomes for This Lecture

### Original Slide Content

**LO1 — Evaluate frameworks**  
Evaluate different types of software engineering frameworks used in web, mobile, cloud, and AI-assisted software development.

**LO4 — Select and justify**  
Select and justify appropriate frameworks, tools, and agentic AI-assisted approaches to meet specific project and industry requirements.

By the end of the lecture, students should be able to:

- Define what a framework is
- Distinguish frameworks from libraries
- Classify common framework types
- Apply selection criteria to a project scenario
- Describe major emerging trends

### Visual Explanation

Two highlighted learning-outcome cards emphasize evaluation and justified selection. A final sentence converts those formal outcomes into practical abilities.

### Explanation

LO1 focuses on analysis and comparison. LO4 requires making a decision and defending it with evidence, constraints, and trade-offs.

### Exam Tip

Use phrases such as **project requirements**, **constraints**, **trade-offs**, **evidence**, and **justification** in framework-selection answers.

### Common Mistake

A list of popular frameworks is not an evaluation. Evaluation must compare strengths, limitations, and fit.

---

## Page 08 — Why Frameworks Matter in Real Software Engineering

### Original Slide Content

| Reason | Explanation |
|---|---|
| Speed to market | Instagram's first version shipped in ~8 weeks on Django. Frameworks remove months of plumbing work. |
| Built-in quality & security | Mature frameworks ship tested solutions for authentication, validation, and security, reducing DIY vulnerabilities. |
| Team scalability | Shared conventions let new developers contribute quickly. Industry hires by framework skill: React, .NET, Flutter. |
| Career reality | Almost every job advertisement names frameworks, not only languages. This module builds that profile. |

### Visual Explanation

Four benefit cards connect framework adoption to product delivery, security, team growth, and employability.

### Explanation

Frameworks reduce repeated engineering effort and provide a common mental model. They also influence hiring because organizations need developers who can work inside established ecosystems.

### Exam Tip

When asked why frameworks are important, connect technical benefits to business outcomes: faster delivery, fewer vulnerabilities, easier team onboarding, and maintainability.

### Common Mistake

Do not claim frameworks eliminate all bugs or security risks. They reduce common risks but still require correct use and updates.

---

## Page 09 — Today's Roadmap — 3 Hours

### Original Slide Content

| Hour | Topic | Coverage |
|---:|---|---|
| Hour 1 | Framework fundamentals | Definitions; why frameworks exist; benefits & costs; frameworks vs libraries; checkpoint |
| Hour 2 | Types, industry use & selection | Framework landscape; frontend/backend/mobile/testing; industry examples; selection criteria & workflow |
| Hour 3 | Trends, case study & wrap-up | Microservices; serverless; cloud-native; DevOps; AI-assisted development; case study; group activity; quiz; summary |

- Short breaks after each hour
- Questions welcome at any point

### Visual Explanation

The lecture is divided into three timed blocks. The progression moves from definitions, to application and selection, then to future trends and revision.

### Explanation

This structure mirrors the reasoning process students should use: first understand frameworks, then compare options, then evaluate modern architectural trends.

### Exam Tip

The three-hour structure is a useful revision map for the entire lecture.

### Common Mistake

Do not study the trends section without first understanding framework fundamentals and selection criteria.

---

## Page 10 — Framework Fundamentals

### Original Slide Content

**Part 1 of 4 — Framework Fundamentals**

- What a software engineering framework is
- The problems frameworks solve
- Benefits — and the costs nobody advertises
- Frameworks vs libraries — a classic exam question

### Visual Explanation

A section-divider slide uses a framework/block icon to introduce Part 1.

### Explanation

This section establishes the core definition, the value proposition, the trade-offs, and the decisive distinction between a framework and a library.

### Exam Tip

Framework vs library is explicitly identified as a classic exam question.

### Common Mistake

Do not define a framework only by its size or number of features. Control flow and application structure are more important.

---

## Page 11 — What Is a Software Engineering Framework?

### Original Slide Content

**Definition:** A reusable, semi-complete software platform that provides a standard structure, common services, and extension points on which developers build applications.

- It provides the **skeleton of an application**: architecture, plumbing, and conventions are already in place.
- Developers write the parts that make **their application unique**; the framework runs those parts.
- Ready-made services may include:
  - Routing
  - Data access
  - UI rendering
  - Security
  - Configuration
- Examples:
  - React — UI
  - ASP.NET Core — backend
  - Flutter — mobile
  - Spring Boot — Java backend
- Analogy: a framework is the building's steel frame and utilities; developers design the rooms.

### Visual Explanation

The slide emphasizes the formal definition in a highlighted box and then expands it using a building-frame analogy.

### Explanation

A framework is “semi-complete” because it provides a reusable structure but still requires application-specific code. Extension points allow developers to insert controllers, components, services, screens, and business rules.

### Definition

**Framework:** A reusable platform that provides application structure, services, conventions, and extension points.

**Simple meaning:** The framework supplies the common skeleton; the developer fills in the unique business features.

### Exam Tip

A strong definition should include **reusable**, **semi-complete**, **standard structure**, **common services**, and **extension points**.

### Common Mistake

Do not describe a framework as a complete application. It is a foundation on which an application is built.

### Likely Exam Questions

1. **Define a software engineering framework.**  
   **Expected answer:** A reusable, semi-complete platform that provides structure, common services, conventions, and extension points for application development.
2. **Give two framework examples and state their roles.**  
   **Expected answer:** ASP.NET Core for backend APIs and Flutter for cross-platform mobile applications.

---

## Page 12 — The Problems Frameworks Solve

### Original Slide Content

| Without a framework | With a framework |
|---|---|
| Re-implement routing, authentication, validation, and data access for every project | Common concerns are solved once by experts and battle-tested |
| Every developer invents a different structure, causing chaos at handover | One shared structure and naming convention for the whole team |
| Security is written from scratch, making it untested and vulnerable | Security patches arrive as framework updates |
| Slow starts: weeks of plumbing before the first feature | Day-1 productivity: scaffold an app in minutes and focus on features |

> “Don't reinvent the wheel — and definitely don't reinvent the security wheel.”

### Visual Explanation

The slide is a side-by-side comparison. The left column uses failure markers, while the right column uses success markers.

### Explanation

Frameworks centralize recurring technical concerns. This reduces duplicated work and creates consistency across teams and projects.

### Exam Tip

Use a comparison table when explaining the impact of frameworks on productivity, handover, security, and project setup.

### Common Mistake

Do not say frameworks remove the need for architecture. They provide a starting architecture that still requires good design decisions.

---

## Page 13 — Inversion of Control — “Don't Call Us, We'll Call You”

### Original Slide Content

**Library: YOUR code is in control**

```text
Your code ─────► Library function
```

You decide when to call lodash, axios, math utilities, and similar libraries.

**Framework: the FRAMEWORK is in control**

```text
Framework runtime ─────► Your component
```

- ASP.NET Core receives the request and then calls your controller.
- React decides when your component re-renders.

**The Hollywood Principle:** You plug your code into the framework's extension points; the framework's main loop decides when it runs.

This idea is the cleanest test for “framework or library?”

### Visual Explanation

The visual contrasts two arrow directions:

```text
LIBRARY
Your program controls execution
Your code ──calls──> Library

FRAMEWORK
Framework runtime controls execution
Framework ──calls──> Your code
```

### Explanation

**Inversion of Control (IoC)** reverses normal control. Instead of the application calling every operation directly, the framework controls the lifecycle and invokes application code at defined extension points.

### Definition

**Inversion of Control:** A design principle where the framework controls the main execution flow and invokes developer-provided code when needed.

**Simple meaning:** Your code waits to be called by the framework.

### Exam Tip

The shortest reliable answer is: **A library is called by your code; a framework calls your code.**

### Common Mistake

Dependency Injection is one form related to IoC, but IoC is the broader principle. Do not treat the two terms as always identical.

### Likely Exam Questions

1. **What is Inversion of Control?**  
   **Expected answer:** It is the reversal of control where the framework manages execution and calls application code through extension points.
2. **Give an IoC example.**  
   **Expected answer:** ASP.NET Core receives an HTTP request and calls the appropriate controller action.

---

## Page 14 — Benefits of Using Frameworks

### Original Slide Content

| Benefit | Meaning |
|---|---|
| Productivity | Scaffolding, generators, and hot reload help features ship faster |
| Reliability | Battle-tested code paths are used by millions of applications |
| Security | Vetted authentication, validation, and patching are provided out of the box |
| Maintainability | Conventions make code predictable and refactorable |
| Community & talent | Documentation, tutorials, Stack Overflow, and hireable skills |
| Best practices built in | MVC, components, and Dependency Injection support good architecture by default |

### Visual Explanation

Six cards present the benefits in a 2×3 grid, making the framework value proposition easy to scan.

### Explanation

Framework benefits operate at multiple levels: individual developer speed, software quality, team coordination, hiring, and long-term maintenance.

### Exam Tip

For a “discuss benefits” question, state the benefit and explain its practical effect rather than only listing names.

### Common Mistake

“Best practices built in” does not mean developers automatically produce good architecture. Conventions must still be understood and applied correctly.

---

## Page 15 — The Costs Nobody Advertises

### Original Slide Content

- **Learning curve:** Angular or Spring can take weeks before a team is productive.
- **Lock-in:** Switching frameworks later usually means a rewrite, not a refactor.
- **Overhead:** Abstraction layers can cost performance and bundle size.
- **“Magic”:** Hidden behaviour makes debugging harder when conventions are misunderstood.
- **Upgrade churn:** Major versions can break code, such as Angular 1→2 or Python 2→3 style migrations.
- **Over-engineering risk:** A full framework for a tiny script is wasted complexity.

**Engineering judgement:** A framework is an investment. Pay the learning and lock-in cost only when the benefits outweigh it.

### Visual Explanation

A plain list emphasizes hidden adoption costs, followed by a highlighted engineering-judgement statement.

### Explanation

Framework adoption creates technical and organizational commitments. The team must learn conventions, maintain upgrades, accept ecosystem constraints, and sometimes tolerate runtime or bundle overhead.

### Exam Tip

A balanced evaluation must include both benefits and costs.

### Common Mistake

Do not select a framework only because it is powerful. Power can become unnecessary complexity for a small problem.

### Likely Exam Questions

1. **State three costs of framework adoption.**  
   **Expected answer:** Learning curve, vendor/ecosystem lock-in, upgrade churn, abstraction overhead, hidden behaviour, or over-engineering.
2. **Why can framework lock-in be expensive?**  
   **Expected answer:** The application depends on framework conventions and lifecycle, so switching often requires a major rewrite.

---

## Page 16 — Frameworks vs Libraries

### Original Slide Content

| Aspect | Library | Framework |
|---|---|---|
| Control flow | Your code calls the library | Framework calls your code — IoC |
| Scope | One focused task: HTTP, dates, charts | Whole application structure |
| Architecture | You design it | Provided through conventions and structure |
| Flexibility | Mix and match freely | Commit to its rules and ecosystem |
| Replacement cost | Usually easy to swap | Expensive; often a rewrite |
| Examples | lodash, axios, NumPy, jQuery | ASP.NET Core, Angular, Flutter, Spring Boot |

**Decisive test:** Who is in control of the program's flow?

### Visual Explanation

A three-column comparison table shows that control flow is the primary distinction, while scope, architecture, flexibility, and replacement cost reinforce it.

### Explanation

Libraries are tools used by an application. Frameworks provide the environment in which the application runs.

### Exam Tip

Begin with **control flow / IoC**, then add scope and architecture as supporting differences.

### Common Mistake

Size is not the decisive difference. A small framework may still control the request or rendering lifecycle.

### Likely Exam Questions

1. **Differentiate a framework from a library.**  
   **Expected answer:** In a library, application code controls execution and calls library functions. In a framework, the framework controls the lifecycle and calls developer code.
2. **Why is axios a library?**  
   **Expected answer:** The developer decides when to invoke axios; it does not control the application's main execution flow.

---

## Page 17 — The Grey Zone — Where Do These Belong?

### Original Slide Content

| Technology | Classification and reason |
|---|---|
| React | Calls itself a UI library, but its lifecycle controls components. React + Router + state libraries form a de-facto framework. |
| jQuery | Pure library: developers call `$()` whenever they choose; it never controls them. |
| Express.js | Minimal web framework: it owns the request loop and calls route handlers, even though it feels “library-light.” |
| Next.js / Angular / Flutter | Full frameworks: routing, build system, conventions, and lifecycle; the platform is in charge. |

**Checkpoint:** Is the .NET Base Class Library a framework or a library? Defend the answer.

### Visual Explanation

Four horizontal cards show a spectrum from clear library to full framework. React and Express demonstrate that classification is sometimes contextual.

### Explanation

The framework/library distinction is not always based on product labels. Behaviour matters more than marketing terminology. The .NET Base Class Library is generally a library collection because applications call its classes; the .NET runtime/platform is broader than the library itself.

### Exam Tip

Defend classifications using **control flow**, **lifecycle**, **routing/build conventions**, and **scope**.

### Common Mistake

Do not classify React only by its official label. Explain how its lifecycle and ecosystem create framework-like behaviour.

---

## Page 18 — Checkpoint 1 — Quick Thinking

### Original Slide Content

1. In one sentence, what does Inversion of Control mean? Give one example from a tool you have used.
2. Your friend says: “I imported axios into my project, so I'm using a framework.” Correct or not? Why?
3. Name two benefits **and** two costs of adopting a large framework like Angular for a three-month student project.

**Activity:** Pair up for three minutes and discuss answers.

### Visual Explanation

Three large question cards create a short formative assessment after Part 1.

### Explanation and Expected Answers

1. **IoC:** The framework manages the lifecycle and calls developer code; for example, React calls a component during rendering.
2. **Axios claim:** Incorrect. Axios is a library because the application calls it when an HTTP request is needed.
3. **Possible benefits:** productivity, structure, built-in tooling, maintainability. **Possible costs:** learning curve, overhead, lock-in, upgrade complexity, over-engineering.

### Exam Tip

These questions closely match likely short-answer exam questions.

### Common Mistake

Do not give only examples without first explaining the underlying principle.

---

## Page 19 — Types of Frameworks & Industry Use

### Original Slide Content

**Part 2 of 4 — Types of Frameworks & Industry Use**

- The framework landscape — six major families
- Frontend, backend, mobile, and testing frameworks
- How a full-stack architecture fits together
- Who uses what in industry — real examples

### Visual Explanation

A section-divider slide uses an architecture/network icon to introduce the framework landscape.

### Explanation

The section expands the idea of a framework from one technology to the complete set of frameworks and tools used across a software product.

### Exam Tip

Be able to classify a named technology by its role in a stack.

### Common Mistake

Do not place Docker or GitHub Actions in the frontend/backend category; they belong to delivery and DevOps tooling.

---

## Page 20 — The Framework and Tool Landscape

### Original Slide Content

| Family | Examples |
|---|---|
| Frontend — Web UI | React, Angular, Vue, Next.js |
| Backend / Server-side | ASP.NET Core, Spring Boot, Express, Django |
| Mobile | Flutter, React Native, SwiftUI, Jetpack Compose |
| Testing & Quality | xUnit, JUnit, Jest, Selenium, Playwright |
| DevOps / CI-CD / Cloud | GitHub Actions, Docker, Kubernetes, Terraform |
| AI-assisted & Agentic | GitHub Copilot, Claude Code, LangChain, agents |

### Visual Explanation

Six cards form a 2×3 landscape map. Each card represents one family and lists representative technologies.

### Explanation

Modern products combine multiple families. For example, React can provide the web interface, ASP.NET Core the API, PostgreSQL the data store, Playwright testing, GitHub Actions delivery, and AI tools development assistance.

### Definition

**Framework family:** A category of frameworks or tools that performs a similar role in the software lifecycle.

**Simple meaning:** A group of technologies used for the same layer or engineering purpose.

### Exam Tip

Memorize the six families and at least two examples for each.

### Common Mistake

Not every item listed is a traditional runtime framework. The slide intentionally presents a broader framework-and-tool landscape.

### Likely Exam Questions

1. **Name six major framework/tool families.**  
   **Expected answer:** Frontend, backend, mobile, testing/quality, DevOps/cloud, and AI-assisted/agentic.
2. **Classify Flutter and Playwright.**  
   **Expected answer:** Flutter is a mobile/cross-platform UI framework; Playwright is an end-to-end testing tool/framework.

---

## Page 21 — Frontend Frameworks — Building Modern UIs

### Original Slide Content

Shared ideas:

- Components
- Declarative UI
- State management
- Client-side routing
- Virtual/reactive rendering

| Aspect | React | Angular | Vue |
|---|---|---|---|
| Type | UI library + ecosystem | Full framework — batteries included | Progressive framework |
| Language | JavaScript / TypeScript — JSX | TypeScript | JavaScript / TypeScript |
| Best fit | Flexible SPAs, huge talent pool | Large enterprise apps, strict structure | Gentle learning curve, lightweight apps |
| Used by | Meta, Netflix, Airbnb | Google, Microsoft Office web | Alibaba, GitLab |

**This module:** React — Lecture 02 — the most demanded frontend skill in the job market.

### Visual Explanation

A comparison table contrasts React, Angular, and Vue by type, language, best fit, and industry adoption.

### Explanation

Frontend frameworks structure interactive web interfaces. React prioritizes flexibility and ecosystem composition, Angular provides an integrated enterprise structure, and Vue emphasizes progressive adoption and a gentler learning curve.

### Exam Tip

Compare frameworks against a project context instead of declaring one universally best.

### Common Mistake

Do not say React and Angular are identical types: the slide classifies React as a UI library plus ecosystem and Angular as a full framework.

---

## Page 22 — Backend Frameworks — APIs and Business Logic

### Original Slide Content

**Backend role:** expose REST APIs, execute business rules, communicate with databases, and enforce security.

| Framework | Language | Strengths | Typical adopters |
|---|---|---|---|
| ASP.NET Core | C# | High performance, Dependency Injection built in, enterprise tooling, cross-platform | Stack Overflow, banks, Microsoft |
| Spring Boot | Java | Mature ecosystem, microservices support | Netflix backend, enterprises |
| Express.js / NestJS | JavaScript / TypeScript | Minimal and fast to start; same language as frontend | Uber, PayPal — Node |
| Django / FastAPI | Python | Rapid development; FastAPI popular for AI/ML APIs | Instagram — Django |

**This module:** C# + ASP.NET Core — Lectures 03–04 — controllers, services, REST APIs, authentication, and database integration.

### Visual Explanation

A four-column table links each backend framework to its language, strengths, and adopters.

### Explanation

Backend frameworks provide server-side infrastructure and conventions. Selection depends on team language skills, performance, ecosystem, security needs, and deployment environment.

### Exam Tip

Use the phrase **REST API, business logic, database access, and security** when defining backend framework responsibilities.

### Common Mistake

Do not choose a backend only because it uses the same language as the frontend; evaluate maturity, performance, and project requirements too.

---

## Page 23 — Mobile Frameworks — One Codebase or Two?

### Original Slide Content

### Native

- SwiftUI — iOS
- Jetpack Compose — Android
- Best performance and full device API access
- Two codebases, creating approximately double the team and cost

### Cross-platform

- Flutter — Dart
- React Native — JavaScript / TypeScript
- One codebase for iOS + Android, and potentially web/desktop
- Flutter renders its own UI for a consistent look and near-native speed

**Industry examples:** Google Pay and BMW apps use Flutter; Instagram and Shopify use React Native. Cross-platform now dominates startup and SME development.

**This module:** Flutter — Lectures 05–06, as written on this slide.

### Visual Explanation

The slide uses a side-by-side native versus cross-platform comparison.

```text
Native development
├── iOS codebase: SwiftUI
└── Android codebase: Jetpack Compose

Cross-platform development
└── Shared codebase
    ├── iOS
    ├── Android
    ├── Web (possible)
    └── Desktop (possible)
```

### Explanation

Native development maximizes platform-specific control. Cross-platform development reduces duplicated work and is attractive for small teams, startups, and products with tight deadlines.

### Exam Tip

State both the advantage and trade-off: cross-platform reduces development effort but may require compromises for highly platform-specific features.

### Common Mistake

“One codebase” does not always mean zero platform-specific code.

---

## Page 24 — Testing & Quality Frameworks

### Original Slide Content

| Level | Purpose | Frameworks / tools |
|---|---|---|
| Unit testing | Test one class or function in isolation | xUnit & NUnit — .NET; JUnit — Java; Jest — JavaScript |
| Integration / API | Test components working together | Postman/Newman, REST-assured, Supertest |
| End-to-end — UI | Test complete user journeys in a browser or app | Selenium, Playwright, Cypress, Flutter integration tests |
| Static quality | Analyse code without running it | SonarQube, ESLint, Roslyn analyzers |

**Why they are frameworks:** the test runner discovers and calls **your** test methods — Inversion of Control again.

These tools plug into CI/CD pipelines, stated on this slide as Lecture 07, so every commit is verified automatically.

### Visual Explanation

A testing-pyramid-like progression is represented as a table from isolated tests to complete user journeys and static analysis.

### Explanation

Testing frameworks use IoC because developers define test methods, while the test runner controls discovery, setup, execution, reporting, and teardown.

### Exam Tip

Be able to match a testing level with its purpose and one tool.

### Common Mistake

Static analysis is not runtime testing; it examines source or compiled code without executing the program.

---

## Page 25 — How It All Fits — Full-Stack Architecture

### Original Slide Content

- React Web App — Frontend
- Flutter Mobile App — iOS + Android
- ASP.NET Core REST API
- Database — SQL Server or PostgreSQL
- Client-to-API communication: HTTPS / REST + JSON
- API-to-database communication: EF Core / ORM
- Delivery layer: Git + GitHub → GitHub Actions CI/CD → Docker → Cloud hosting — Azure / AWS / Vercel
- AI-assisted tools such as Copilot and Claude Code accelerate every box in the diagram — Lectures 09–11, as written on the slide.

### Visual Explanation

```text
React Web App ───────────────┐
(Frontend)                   │
                             │ HTTPS / REST + JSON
Flutter Mobile App ──────────┼──────────────► ASP.NET Core REST API
(iOS + Android)              │                         │
                             │                         │ EF Core / ORM
                             └─────────────────────────┘
                                                       ▼
                                              SQL Server / PostgreSQL

Delivery pipeline:
Git + GitHub
      ↓
GitHub Actions CI/CD
      ↓
Docker
      ↓
Cloud hosting: Azure / AWS / Vercel
```

### Explanation

Both client applications share one backend API. This centralizes business rules, authentication, and database access. The delivery pipeline automates testing, packaging, and hosting.

### Exam Tip

In an architecture question, label each layer and the communication method between layers.

### Common Mistake

The frontend should not connect directly to the database in this architecture. It communicates through the backend API.

### Likely Exam Questions

1. **Draw a simple full-stack architecture using React, Flutter, ASP.NET Core, and a database.**  
   **Expected answer:** Both clients call the REST API over HTTPS/JSON; the API accesses the database through an ORM.
2. **What is the role of EF Core?**  
   **Expected answer:** It acts as an Object-Relational Mapper between ASP.NET Core application objects and the relational database.

---

## Page 26 — Frameworks in Industry — Who Uses What

### Original Slide Content

| Company / Product | Frameworks in production | Why it works for them |
|---|---|---|
| Netflix | React UI + Spring Boot microservices | Independent teams ship services on their own schedules |
| Stack Overflow | ASP.NET Core + SQL Server | Massive traffic on a famously small server footprint |
| Google Pay, BMW, Toyota | Flutter | One team, one codebase, consistent UX on both platforms |
| Airbnb, Meta | React, with React Native history | Reusable components across a very large product surface |
| Instagram | Django — Python | Rapid iteration from startup to billions of users |

**Pattern:** Companies choose frameworks that match scale, team structure, and speed of change — not the newest or trendiest option.

### Visual Explanation

The table connects technology choices to organizational and product requirements rather than presenting adoption as popularity alone.

### Explanation

Industry examples are evidence, not automatic recommendations. A framework suitable for Netflix may be unnecessary for a small student project.

### Exam Tip

Use industry examples to support a criterion-based argument, not as the sole reason for selection.

### Common Mistake

“Used by a famous company” is weak justification unless the project has similar needs.

---

## Page 27 — Checkpoint 2 — Spot the Stack

### Original Slide Content

- Think of an application used today: PickMe, WhatsApp, a bank app, Daraz, etc.
- In pairs, for four minutes, sketch its likely architecture:
  - Which frontend framework family: web, mobile, or both?
  - What must the backend do, and which framework family fits?
  - Where is data stored?
  - Are payments or maps frameworks or libraries?
- Two pairs present their guesses for class critique.

**Goal:** Practise seeing every product as a set of framework decisions.

### Visual Explanation

The slide is a guided architecture-discovery exercise rather than a fixed diagram.

### Explanation

A product can be decomposed into layers: interface, services, data, integrations, testing, delivery, and operations. Each layer creates separate framework or library decisions.

### Exam Tip

For scenario questions, identify layers before naming technologies.

### Common Mistake

Do not treat third-party payment or mapping SDKs as the complete application framework.

---

## Page 28 — Framework Selection

### Original Slide Content

**Part 3 of 4 — Framework Selection**

- Selection criteria that professionals actually use
- A repeatable selection workflow
- Scoring candidates objectively
- Case study and group selection activity

### Visual Explanation

A section-divider slide introduces objective framework decision-making.

### Explanation

Selection is presented as an engineering process, not personal preference.

### Exam Tip

Use a structured workflow and decision matrix in long-answer questions.

### Common Mistake

Do not start with a favourite framework and invent justification afterward.

---

## Page 29 — Framework Selection Criteria

### Original Slide Content

| Criterion | Question / meaning |
|---|---|
| Project fit | Does it solve this problem class well: real-time, CRUD, mobile, etc.? |
| Team skills | Current expertise can matter more than theoretical superiority |
| Community & ecosystem | Documentation, packages, Stack Overflow answers, hiring pool |
| Performance & scalability | Benchmarks under the expected load, not marketing claims |
| Maturity & longevity | Release history, corporate backing, Long-Term Support versions |
| Security & compliance | Patch cadence, CVE history, audit requirements |
| Cost & licensing | Open-source licence terms, hosting cost, paid tiers |
| Integration | Compatibility with other frameworks, databases, and cloud platforms |

### Visual Explanation

Eight criterion cards form a practical selection checklist.

### Explanation

Criteria should be weighted according to project context. A hospital may prioritize security and compliance; a startup MVP may prioritize team skills and time to market.

### Definition

**Framework selection criteria:** Evidence-based factors used to evaluate how well a framework fits a specific project and organization.

**Simple meaning:** The checklist used to decide whether a framework is suitable.

### Exam Tip

State the criterion and explain how the scenario changes its importance.

### Common Mistake

Do not use generic performance benchmarks without considering the project's expected workload and deployment environment.

### Likely Exam Questions

1. **List five framework selection criteria.**  
   **Expected answer:** Project fit, team skills, ecosystem, performance/scalability, maturity, security, cost/licensing, and integration.
2. **Why is team skill an important criterion?**  
   **Expected answer:** Existing expertise reduces learning time, defects, and delivery risk, often outweighing small theoretical advantages of another framework.

---

## Page 30 — A Repeatable Selection Workflow

### Original Slide Content

1. **Requirements** — Functional and non-functional requirements, such as load, security, and offline support
2. **Constraints** — Team skills, budget, deadline, existing systems
3. **Shortlist** — Two or three candidates per layer that fit the constraints
4. **Prototype** — Build a small spike or proof-of-concept in each
5. **Decide & record** — Score, choose, and document the rationale in an ADR

**Architecture Decision Record — ADR:** A one-page note capturing context, options considered, decision, and consequences. Future maintainers and markers benefit from it. Students will write one for the main assignment.

### Visual Explanation

```text
Requirements
    ↓
Constraints
    ↓
Shortlist
    ↓
Prototype
    ↓
Decide & record
    ↓
Architecture Decision Record (ADR)
```

### Explanation

The workflow prevents premature decisions. Prototypes reduce uncertainty, while an ADR preserves the reasoning behind the final choice.

### Definition

**Architecture Decision Record (ADR):** A concise document recording the decision context, alternatives, selected option, justification, and consequences.

**Simple meaning:** A written record of why an architectural choice was made.

### Exam Tip

Memorize the five steps in order.

### Common Mistake

Do not skip constraints or prototype work. A framework may look suitable in documentation but fail under real integration or deadline conditions.

### Likely Exam Questions

1. **Describe a repeatable framework-selection workflow.**  
   **Expected answer:** Requirements → constraints → shortlist → prototype → decide and record using an ADR.
2. **Why is an ADR useful?**  
   **Expected answer:** It preserves context and trade-offs for maintainers and demonstrates that the choice was evidence-based.

---

## Page 31 — Scoring Candidates — Weighted Decision Matrix

### Original Slide Content

Example: choosing a frontend framework for a startup MVP, with scores from 1 to 5.

| Criterion | Weight | React | Angular | Vue |
|---|---:|---:|---:|---:|
| Team familiarity | 30% | 4 | 2 | 3 |
| Time to MVP | 25% | 4 | 3 | 5 |
| Hiring pool — LK + remote | 20% | 5 | 3 | 3 |
| Ecosystem for features | 15% | 5 | 4 | 4 |
| Long-term maintainability | 10% | 4 | 5 | 4 |
| **Weighted total** | **100%** | **4.35 ✓** | **3.05** | **3.85** |

**Key statement:** Weights encode the project's context. A bank might give security and maintainability greater weight, changing the result.

### Visual Explanation

The decision matrix makes assumptions visible. Each score is multiplied by its weight, and the weighted values are summed.

```text
Weighted total = Σ (criterion weight × candidate score)
```

Example for React:

```text
(0.30×4) + (0.25×4) + (0.20×5) + (0.15×5) + (0.10×4)
= 1.20 + 1.00 + 1.00 + 0.75 + 0.40
= 4.35
```

### Explanation

A weighted matrix does not remove judgement; it makes judgement explicit and auditable. The criterion weights should be agreed before scoring candidates.

### Exam Tip

Show the formula and at least one candidate calculation if asked to use a weighted decision matrix.

### Common Mistake

Do not compare raw scores while ignoring weights. A high score on a low-priority criterion may matter less than a moderate score on a critical criterion.

---

## Page 32 — When Framework Choices Go Wrong

### Original Slide Content

| Failure | Example and consequence |
|---|---|
| Hype-driven choice | Adopting the newest framework for a critical system leads to an immature ecosystem and frequent breaking changes |
| Ignoring team skills | A Java team forced onto a Node stack experiences six months of slow, buggy delivery while learning on the job |
| Longevity blindness | Building on AngularJS near end-of-life, with support ending in 2022, causes a forced rewrite with no new features |
| Over-engineering | Kubernetes and microservices for an app with 200 users causes the team to maintain infrastructure instead of features |

**Conclusion:** Every failure traces back to skipping a step in the selection workflow.

### Visual Explanation

Four warning cards connect a poor decision pattern to a concrete project consequence.

### Explanation

Wrong selections often come from optimizing for novelty rather than project fit. The repeatable workflow is designed to detect these risks early.

### Exam Tip

In a failure-analysis question, identify the skipped criterion or workflow step.

### Common Mistake

Do not assume a technologically advanced architecture is automatically appropriate.

---

## Page 33 — Case Study — “CampusEats” Food Delivery Startup

### Original Slide Content

**Brief:** Three developers, four months, limited budget. Needs include a student-facing mobile app, restaurant web dashboard, orders, payments, live tracking, and the ability to scale if successful.

| Layer | Choice | Justification — criteria applied |
|---|---|---|
| Mobile app | Flutter | One codebase for iOS + Android; a three-person team cannot staff two native tracks |
| Web dashboard | React | Large ecosystem for tables and charts; largest hiring pool when the team grows |
| Backend API | ASP.NET Core | One shared REST API for both clients; performance headroom; built-in authentication and DI |
| Database | PostgreSQL / SQL Server | Relational fit for orders and payments; managed cloud hosting available |
| Delivery | GitHub Actions + Docker + Azure | Free-tier CI/CD; containers keep development and production consistent |

**Notice:** Every choice cites a criterion, not a preference. This is the standard required for the assignment ADR.

### Visual Explanation

The case-study table maps each architectural layer to a technology and a scenario-specific justification.

```text
Flutter mobile app ─┐
                    ├──► ASP.NET Core API ──► PostgreSQL / SQL Server
React dashboard ────┘

Delivery: GitHub Actions ──► Docker ──► Azure
```

### Explanation

The stack fits the small team and deadline while preserving growth options. The key is not that these are universally best technologies; the choices match the stated constraints.

### Exam Tip

Use the pattern **layer → choice → criterion-based justification**.

### Common Mistake

Do not write “React because it is popular.” State why its ecosystem or hiring pool matters to this project.

### Likely Exam Questions

1. **Justify Flutter for CampusEats.**  
   **Expected answer:** It provides one codebase for iOS and Android, reducing team and schedule demands for a three-developer project.
2. **Why use one shared backend API?**  
   **Expected answer:** Both mobile and web clients reuse the same business rules, authentication, and data access services.

---

## Page 34 — Group Activity — You Are the Tech Lead

### Original Slide Content

- Form groups of four for 12 minutes.
- Pick one scenario:
  - **A:** Hospital appointment system for a private hospital chain — security and compliance heavy
  - **B:** Real-time exam-hall seat finder for SLIIT — three-week deadline, web only
  - **C:** E-commerce app for a clothing brand — mobile-first, must scale for sales seasons
- Deliverable:
  - Stack choice for frontend, mobile, backend, database, and hosting
  - Top three weighted criteria and why
- Two groups present for two minutes each.
- The class challenges one decision per group.

### Visual Explanation

The activity forces teams to compare very different contexts, showing that criterion weights change with the scenario.

### Explanation

Possible priorities:

| Scenario | Likely high-weight criteria |
|---|---|
| Hospital | Security, compliance, reliability, auditability, maturity |
| Exam-hall finder | Time to delivery, web fit, team skills, simplicity |
| E-commerce | Mobile UX, scalability, payment integration, availability |

### Exam Tip

Scenario-specific weighting is more important than choosing a single “best” framework.

### Common Mistake

Do not include a mobile framework for a web-only requirement unless you justify a future or parallel mobile need.

---

## Page 35 — Emerging Trends in Frameworks

### Original Slide Content

**Part 4 of 4 — Emerging Trends in Frameworks**

- From monoliths to microservices and serverless
- Cloud-native development and DevOps automation
- AI-assisted and agentic software development
- What these trends mean for framework choices

### Visual Explanation

A section-divider slide uses an AI/brain icon to introduce architecture and development trends.

### Explanation

The section focuses on new options and how they affect selection criteria, delivery, and engineering responsibility.

### Exam Tip

Trends change available options, but they do not remove the need for systematic evaluation.

### Common Mistake

Do not interpret “emerging” as “always preferable.”

---

## Page 36 — How Application Architecture Evolved

### Original Slide Content

| Era / Option | Description |
|---|---|
| Monolith | One deployable unit; simple to start, harder to scale teams |
| Microservices | Many small services; independent deployments, operational complexity |
| Serverless | Functions on demand; no servers to manage, pay per execution |
| AI-assisted / Agentic | AI generates, tests, and reviews code with human oversight |

**Key insight:** Newer does not mean better for every project. Each era added options, not replacements. Monoliths still power excellent products such as Stack Overflow.

### Visual Explanation

```text
Monolith
   ↓
Microservices
   ↓
Serverless
   ↓
AI-assisted / Agentic development
```

The arrows represent historical expansion of options, not a mandatory migration path.

### Explanation

Architecture evolution responds to new scaling, deployment, and productivity needs. Each approach introduces benefits and new complexity.

### Exam Tip

Compare options using deployment unit, operational complexity, scaling model, and team needs.

### Common Mistake

AI-assisted development is not an application deployment architecture in the same sense as monolith or microservices; the slide presents it as the next development-era option.

---

## Page 37 — Trend 1 — Microservices Frameworks

### Original Slide Content

- **Idea:** Split the application into small, independently deployable services, each owning its data.
- Frameworks and tools:
  - Spring Boot + Spring Cloud
  - ASP.NET Core microservices
  - Docker
  - Kubernetes for orchestration
- Supporting patterns:
  - API gateway
  - Service discovery
  - Message queues — RabbitMQ, Kafka
- Wins:
  - Team autonomy
  - Independent scaling
  - Fault isolation
  - Polyglot freedom
- Costs:
  - Distributed-system complexity
  - Network failures
  - Monitoring overhead
  - Harder local development
- Use when:
  - Large teams
  - Different scaling needs per component
  - Examples: Netflix, Amazon, Uber

**Rule of thumb:** Do not adopt microservices until a well-built monolith actually hurts.

### Visual Explanation

```text
Client
  │
  ▼
API Gateway
  ├──► User Service ──► User DB
  ├──► Order Service ─► Order DB
  └──► Payment Service ► Payment DB

Services may communicate through HTTP or message queues.
```

### Explanation

Microservices allow independent ownership and deployment but move complexity from the codebase into networking, operations, monitoring, and data consistency.

### Definition

**Microservice:** A small, independently deployable service that owns a focused business capability and often its own data.

**Simple meaning:** One large application is split into several smaller services.

### Exam Tip

Always discuss both wins and operational costs.

### Common Mistake

Do not split a small application into microservices merely to appear modern.

### Likely Exam Questions

1. **State two benefits and two costs of microservices.**  
   **Expected answer:** Benefits include independent scaling and team autonomy; costs include network complexity and monitoring overhead.
2. **When should microservices be considered?**  
   **Expected answer:** When a large team or components with different scaling/deployment needs make a monolith a real bottleneck.

---

## Page 38 — Trend 2 — Serverless Computing

### Original Slide Content

- **Idea:** Deploy functions, not servers. The cloud runs, scales, and bills them per execution.
- Platforms:
  - AWS Lambda
  - Azure Functions
  - Google Cloud Functions
  - Cloudflare Workers
- Frameworks:
  - Serverless Framework
  - AWS SAM / Amplify
  - Functions and triggers are defined as code
- Great for:
  - Event-driven jobs such as image resizing and notifications
  - APIs with spiky traffic
  - Scheduled tasks
- Watch out for:
  - Cold starts
  - Execution-time limits
  - Vendor lock-in
  - Difficult local testing
- Example: A CampusEats “send order confirmation email” function runs only when orders occur and costs cents.

**Key statement:** Serverless complements, not replaces, the main API. Most real systems are hybrids.

### Visual Explanation

```text
Order created event
        ↓
Cloud function triggered
        ↓
Generate confirmation message
        ↓
Send email
        ↓
Function stops; billing ends
```

### Explanation

Serverless removes direct server management for suitable workloads. It is particularly useful when work occurs intermittently or in response to events.

### Definition

**Serverless computing:** A cloud execution model where developers deploy functions or services and the provider manages infrastructure, scaling, and execution-based billing.

**Simple meaning:** Run code when needed without managing the server directly.

### Exam Tip

Mention both platform advantages and limitations such as cold starts and lock-in.

### Common Mistake

“Serverless” does not mean that no servers exist; the cloud provider manages them.

---

## Page 39 — Trend 3 — Cloud-Native & DevOps Automation

### Original Slide Content

- **Cloud-native:** Applications designed for the cloud using containers, declarative configuration, resilience, and observability.
- Containers and orchestration:
  - Docker packages the application and environment.
  - Kubernetes runs containers at scale.
- Infrastructure as Code:
  - Terraform / Bicep
  - Servers and infrastructure are version-controlled text.
- **DevOps:** Culture and automation joining development and operations.
- CI/CD frameworks:
  - GitHub Actions
  - GitLab CI
  - Jenkins
  - Azure DevOps

### Visual Explanation

```text
Commit
  ↓
Build
  ↓
Test
  ↓
Package — Docker
  ↓
Deploy
  ↓
Monitor
```

A push to GitHub can reach production in minutes and is automatically tested at every step. The slide references Lectures 07–08.

### Explanation

Cloud-native design considers deployment and operations from the beginning. DevOps automation makes software delivery repeatable, traceable, and faster.

### Definition

**CI/CD:** Continuous Integration and Continuous Delivery/Deployment — automated processes for building, testing, packaging, and releasing software.

**Simple meaning:** Every code change is automatically checked and prepared for release.

### Exam Tip

Be able to draw the pipeline in order and explain each stage.

### Common Mistake

Docker packages applications; Kubernetes orchestrates containers. They are not interchangeable.

### Likely Exam Questions

1. **Draw a basic CI/CD pipeline.**  
   **Expected answer:** Commit → build → test → package → deploy → monitor.
2. **Differentiate Docker and Kubernetes.**  
   **Expected answer:** Docker builds/runs containers; Kubernetes coordinates and scales containerized workloads.

---

## Page 40 — Trend 4 — AI-Assisted & Agentic Development

### Original Slide Content

### AI-assisted coding

- Copilots suggest code, tests, and documentation inside the IDE.
- The developer remains the author.
- Tools include GitHub Copilot, Claude, and IDE assistants.

### Agentic development

- AI agents plan multi-step tasks.
- They can read the codebase, edit files, run tests, and open pull requests.
- Tools include Claude Code and Copilot agents.
- Frameworks such as LangChain can build custom agents.

**Human-in-the-loop is non-negotiable:** Engineers must review, test, and take responsibility for AI-generated code.

Risks:

- Subtle bugs
- Security flaws
- Licence issues
- Over-reliance

The engineer's value shifts toward requirements, architecture, and evaluation, directly supporting LO1 and LO4.

### Visual Explanation

The slide compares two cards:

| AI-assisted | Agentic |
|---|---|
| Suggests work inside an existing developer workflow | Executes and coordinates multiple development steps |
| Developer directs each task | Agent can plan a task sequence |
| Human remains author | Human remains accountable reviewer and decision-maker |

### Explanation

Agentic tools increase automation depth, but responsibility does not transfer to the tool. Human review is necessary for correctness, security, licensing, and requirement alignment.

### Definition

**Agentic development:** A workflow where AI agents plan and execute multiple software-engineering actions under human oversight.

**Simple meaning:** The AI does a sequence of development tasks, while the engineer supervises and approves the result.

### Exam Tip

Use the phrase **human-in-the-loop review and accountability are non-negotiable**.

### Common Mistake

Do not assume generated code is correct, secure, or legally safe because tests pass.

### Likely Exam Questions

1. **Differentiate AI-assisted coding and agentic development.**  
   **Expected answer:** AI-assisted tools suggest code within developer-directed tasks; agents can plan and execute multi-step workflows such as edits, tests, and pull requests.
2. **Why is human oversight essential?**  
   **Expected answer:** Humans must validate requirements, security, licences, tests, and accept accountability for the software.

---

## Page 41 — What These Trends Mean for Your Choices

### Original Slide Content

- Frameworks now compete on cloud and AI readiness:
  - Containers
  - Serverless targets
  - AI tooling support
- Deployment is part of the stack decision. A framework without a good CI/CD and hosting story creates later cost.
- Prefer frameworks with strong conventions because AI tools generate better code for well-documented, conventional frameworks.
- Architecture flexibility matters: choose stacks that can start as a monolith and split into services later.
- **Evergreen skill:** The evaluation method survives every trend — criteria, trade-offs, evidence, and decision records.

> Frameworks will change every five years. Your selection method should not.

### Visual Explanation

The slide is a strategic checklist connecting trends back to the framework selection process.

### Explanation

Technology names change quickly, so professional value comes from a repeatable evaluation method rather than loyalty to one ecosystem.

### Exam Tip

A high-quality conclusion should state that trends change the option set, while systematic evaluation remains stable.

### Common Mistake

Do not select a framework based only on current AI-tool support; security, maturity, integration, and project fit remain necessary.

---

## Page 42 — Quick Quiz — Test Yourself

### Original Slide Content

**Q1.** The defining difference between a framework and a library is:

- (a) Size
- (b) Language
- (c) Who controls the flow of execution
- (d) Licence

**Q2.** “Don't call us, we'll call you” describes:

- (a) REST
- (b) Inversion of Control
- (c) CI/CD
- (d) Serverless

**Q3.** A three-person startup needs iOS + Android apps in four months. The strongest first candidate is:

- (a) Two native apps
- (b) Flutter
- (c) Desktop app
- (d) Static website

**Q4.** Which is the best reason to pick framework X?

- (a) Trending on social media
- (b) Used by Google
- (c) Highest weighted score on the project's criteria
- (d) Newest release

**Q5.** In agentic AI development, the human's essential role is:

- (a) Typing faster
- (b) Reviewing, testing, and taking responsibility
- (c) Avoiding documentation
- (d) None

**Instruction:** Answer individually first, then vote by show of hands.

### Visual Explanation

Five MCQs test the lecture's central ideas: IoC, cross-platform selection, weighted evaluation, and human responsibility.

### Exam Tip

These questions indicate the concepts most likely to appear as MCQs.

### Common Mistake

Do not choose a framework based on company adoption or novelty without applying project-specific criteria.

---

## Page 43 — Quiz Answers & Why

### Original Slide Content

| Q | Answer | Why |
|---:|:---:|---|
| 1 | (c) | Control flow defines the relationship; IoC is the framework's signature |
| 2 | (b) | The Hollywood Principle is the classic phrasing of Inversion of Control |
| 3 | (b) | One codebase fits the team size and deadline; native doubles the work |
| 4 | (c) | Selection must trace to weighted project criteria, not popularity or novelty |
| 5 | (b) | Human-in-the-loop review and accountability are non-negotiable |

- Score 4–5: Today's outcomes have been met.
- Score below 3: Revisit Parts 1 and 3 before next week.

### Visual Explanation

The answer table pairs each correct option with its reasoning, reinforcing justification rather than memorization.

### Explanation

The quiz covers the lecture's core conceptual chain:

```text
IoC defines frameworks
        ↓
Project constraints guide framework choice
        ↓
Weighted criteria justify the decision
        ↓
Humans remain responsible when AI is involved
```

### Exam Tip

Memorize the reasons, not only the answer letters.

### Common Mistake

Do not state Flutter is always best. It is the strongest first candidate in the specific small-team, dual-platform, short-deadline scenario.

---

## Page 44 — Discussion — Take a Position

### Original Slide Content

1. “In five years, AI agents will choose our frameworks for us.” Agree or disagree. What part of selection is hardest to automate?
2. Should a university teach the most popular frameworks or the best-designed ones? Are they the same thing?
3. A company's eight-year-old framework is stable but unfashionable, and junior developers do not want to learn it. Rewrite, wrap, or stay? Defend the answer with criteria.

> No marks, no wrong answers — only undefended ones.

### Visual Explanation

Three discussion cards encourage evidence-based positions and trade-off reasoning.

### Explanation

The purpose is not to produce one fixed answer. Students should identify requirements, stakeholder concerns, migration cost, security, talent availability, longevity, and business risk.

### Exam Tip

For essay questions, make a position, state criteria, analyze alternatives, and acknowledge consequences.

### Common Mistake

Do not write an opinion without evidence or project context.

---

## Page 45 — Summary — What You Should Remember

### Original Slide Content

- A framework is a semi-complete application: it provides structure and calls **your** code through Inversion of Control.
- Frameworks trade learning curve and lock-in for productivity, quality, security, and team scalability.
- Library vs framework: determine who controls the flow of execution.
- Six framework families:
  - Frontend
  - Backend
  - Mobile
  - Testing
  - DevOps / cloud
  - AI-assisted
- Real systems combine families.
- Selection is a method:
  - Requirements
  - Constraints
  - Shortlist
  - Prototype
  - Decide and record using an ADR and weighted matrix
- Trends such as microservices, serverless, cloud-native, and agentic AI change the options, not the method.

### Visual Explanation

The slide consolidates the entire lecture into six high-value revision bullets.

### Explanation

The central message is that framework expertise includes both technical knowledge and decision-making discipline.

### Exam Tip

Use this page as the minimum one-page revision outline.

### Common Mistake

Do not memorize only the technology examples; the evaluation method is the lecture's durable skill.

---

## Page 46 — Next Week & How to Prepare

### Original Slide Content

**Lecture 02 — Advanced React Frontend Development**

Topics:

- Components
- Props and state
- Hooks
- Events
- Forms and validation
- Routing

### Before next week

- Install Node.js — LTS — and VS Code.
- Verify the installation using:

```bash
node -v
npm -v
```

- Refresh JavaScript ES6:
  - Arrow functions
  - Destructuring
  - `map` / `filter`
  - Modules
- Skim Banks & Porcello, *Modern Patterns for Developing React Apps*, Chapters 1–2.

### Lab connection

- Lab 01 this week: environment setup, scaffold, and explore the first React app.
- The lab counts toward the 10% lab submission.

### Visual Explanation

A highlighted topic banner is followed by a preparation checklist and lab connection.

### Explanation

The commands print the installed Node.js and npm versions. The ES6 topics are essential because React components frequently use modern JavaScript syntax.

### Exam Tip

The commands are practical preparation rather than core Lecture 01 theory, but they should be preserved exactly.

### Common Mistake

Do not install an unsupported Node.js version when the lecture specifically requests the LTS release.

---

## Page 47 — Learning Outcome Mapping & References

### Original Slide Content

### Learning Outcome Mapping

| Lecture section | LO1 — Evaluate | LO4 — Select & justify |
|---|:---:|:---:|
| Fundamentals, benefits & costs, frameworks vs libraries | ● |  |
| Framework types, architecture & industry use | ● | ○ |
| Selection criteria, workflow, matrix, case study & activity | ○ | ● |
| Emerging trends — microservices, serverless, cloud-native, agentic AI | ● | ● |

### References

- Banks, A. & Porcello, E. (2020). *Modern Patterns for Developing React Apps*. 2nd ed. O'Reilly.
- Rose, R. (2022). *Flutter and Dart Cookbook*. O'Reilly.
- Ford, N., Richards, M., Sadalage, P. & Dehghani, Z. (2021). *Software Architecture: The Hard Parts*. O'Reilly.
- Biswas, A. & Talukdar, W. (2025). *Building Agentic AI Systems*. Packt.
- Official documentation:
  - `react.dev`
  - `learn.microsoft.com/aspnet/core`
  - `docs.flutter.dev`
  - `docs.github.com/actions`

### Visual Explanation

The page combines an LO mapping table with a reference list. Filled and open circles show the relative emphasis of LO1 and LO4 across lecture sections.

### Explanation

The mapping confirms that fundamentals and trends support evaluation, while the selection section strongly targets justified decision-making.

### Exam Tip

Use official documentation and the listed references when expanding assignment arguments.

### Common Mistake

Do not copy framework claims from informal sources without checking official documentation or credible references.

---

# Full Lecture Summary

A software engineering framework is a reusable, semi-complete platform that supplies application structure, conventions, common services, and extension points. Its defining behaviour is **Inversion of Control**: the framework controls the application lifecycle and calls developer-written code. A library behaves differently because the application remains in control and calls the library when required.

Frameworks solve repeated engineering problems such as routing, authentication, validation, data access, rendering, configuration, testing, and delivery. Their main benefits are productivity, reliability, security, maintainability, community support, talent availability, and built-in architectural practices. Their costs include learning curve, lock-in, performance or bundle overhead, hidden framework “magic,” upgrade churn, and over-engineering.

The lecture identifies six broad framework/tool families:

1. Frontend web UI
2. Backend/server-side
3. Mobile
4. Testing and quality
5. DevOps, CI/CD, and cloud
6. AI-assisted and agentic development

A modern full-stack system may use React for a web interface, Flutter for a mobile application, ASP.NET Core for a shared REST API, a relational database accessed through an ORM, testing tools at several levels, and a delivery pipeline using GitHub Actions, Docker, and cloud hosting.

Framework selection must follow a method rather than personal preference. First identify functional and non-functional requirements. Then identify constraints such as skills, budget, deadline, and existing systems. Shortlist candidates, build prototypes, score the candidates using weighted criteria, choose the option, and record the decision in an Architecture Decision Record.

Selection criteria include project fit, team skills, ecosystem, performance and scalability, maturity and longevity, security and compliance, cost and licensing, and integration. Different scenarios require different weights. A startup may value time to MVP and team familiarity; a bank or hospital may prioritize security, compliance, reliability, and long-term maintenance.

Emerging options include microservices, serverless computing, cloud-native delivery, DevOps automation, and AI-assisted or agentic development. These trends expand the design space but do not replace engineering judgement. Human review, testing, and accountability remain mandatory when AI-generated code is used.

---

# Important Formulas and Decision Methods

## Weighted Decision Matrix

```text
Weighted total = Σ (criterion weight × candidate score)
```

Rules:

1. Weights must total 100% or 1.00.
2. Weights should represent project priorities.
3. Score every candidate consistently, commonly from 1 to 5.
4. Multiply each score by the criterion weight.
5. Sum the weighted values.
6. Record assumptions and consequences in an ADR.

## Selection Workflow

```text
Requirements
    ↓
Constraints
    ↓
Shortlist
    ↓
Prototype
    ↓
Decide and record
    ↓
ADR
```

## Framework or Library Test

```text
Does your code call the tool?
    └── Usually a library

Does the tool control the lifecycle and call your code?
    └── Usually a framework — Inversion of Control
```

---

# Important Code and Commands

The lecture contains no application source-code example. The following terminal commands appear on Page 46 and are preserved exactly:

```bash
node -v
npm -v
```

**Purpose:** Display the installed Node.js and npm versions to verify the development environment.

---

# Key Definitions Table

| Term | Definition | Simple meaning |
|---|---|---|
| Software engineering framework | A reusable, semi-complete platform providing structure, common services, conventions, and extension points | An application skeleton that calls your custom code |
| Library | Reusable code called directly by an application for focused tasks | A tool your program chooses to use |
| Inversion of Control | The framework controls execution and invokes developer code | “Don't call us; we'll call you” |
| Frontend framework | A framework/ecosystem for interactive user interfaces | Builds the web UI |
| Backend framework | A server-side framework for APIs, business rules, security, and data access | Runs application logic on the server |
| Cross-platform mobile framework | A framework that targets multiple platforms from one primary codebase | One project for iOS and Android |
| Testing framework | A runner and structure that discovers and executes tests | Calls your test methods automatically |
| Architecture Decision Record | A concise record of context, options, decision, rationale, and consequences | A written reason for an architecture choice |
| Weighted decision matrix | A scoring method using project-specific criterion weights | A structured comparison of candidates |
| Microservices | Independently deployable services focused on separate capabilities | Split one large application into smaller services |
| Serverless computing | Cloud execution where the provider manages infrastructure and bills by usage | Run functions without directly managing servers |
| Cloud-native | Designing applications specifically for cloud deployment, resilience, and observability | Build for cloud operation from the start |
| CI/CD | Automated build, test, package, deployment, and delivery processes | Automatically check and release changes |
| AI-assisted development | AI suggestions inside developer-controlled work | AI helps the developer write code |
| Agentic development | AI agents plan and perform multi-step engineering tasks under oversight | AI executes a workflow while humans supervise |

---

# Quick Revision Table

| Topic | Must remember | Page(s) |
|---|---|---:|
| Framework definition | Reusable, semi-complete platform with structure, services, conventions, extension points | 11 |
| IoC | Framework controls lifecycle and calls developer code | 13 |
| Framework vs library | Decisive test: who controls execution flow? | 16–17 |
| Framework benefits | Productivity, reliability, security, maintainability, community, built-in practices | 14 |
| Framework costs | Learning curve, lock-in, overhead, magic, upgrades, over-engineering | 15 |
| Six families | Frontend, backend, mobile, testing, DevOps/cloud, AI-assisted | 20 |
| Full-stack architecture | Clients → REST API → database; delivery via CI/CD, Docker, cloud | 25 |
| Selection criteria | Fit, skills, ecosystem, performance, maturity, security, cost, integration | 29 |
| Selection workflow | Requirements → constraints → shortlist → prototype → decide/record | 30 |
| Weighted matrix | Weight × score, then sum | 31 |
| Microservices | Independent services; scalability and autonomy versus operational complexity | 37 |
| Serverless | Functions on demand; useful for events, but cold starts and lock-in matter | 38 |
| DevOps | Commit → build → test → package → deploy → monitor | 39 |
| Agentic AI | Multi-step AI workflows require human review and accountability | 40 |

---

# Important Diagrams Summary

| Page | Visual / Diagram | Meaning |
|---:|---|---|
| 06 | Module journey columns | Organizes 11 lectures into foundations, web, agentic AI, mobile, and delivery |
| 12 | Without vs with framework | Shows reduced duplication, stronger consistency, security updates, and faster starts |
| 13 | IoC arrow comparison | Library is called by app; framework calls app code |
| 20 | Six-family landscape | Maps technologies to frontend, backend, mobile, testing, DevOps/cloud, and AI |
| 23 | Native vs cross-platform | Contrasts performance/platform access with one-codebase efficiency |
| 25 | Full-stack architecture | React and Flutter clients share an ASP.NET Core API and relational database |
| 30 | Selection workflow | Requirements → constraints → shortlist → prototype → decide/record |
| 31 | Weighted matrix | Uses criterion weights to rank candidates objectively |
| 36 | Architecture evolution | Monolith → microservices → serverless → AI-assisted/agentic options |
| 39 | CI/CD pipeline | Commit → build → test → Docker package → deploy → monitor |
| 40 | AI-assisted vs agentic | Contrasts suggestions with autonomous multi-step task execution |

---

# Likely Exam Questions with Short Answers

### Question 1

**Define a software engineering framework.**

**Expected answer:** A reusable, semi-complete software platform that provides standard structure, common services, conventions, and extension points on which developers build applications.

### Question 2

**Differentiate a framework and a library.**

**Expected answer:** Application code calls a library and controls execution. A framework controls the lifecycle and invokes application code through Inversion of Control.

### Question 3

**What is the Hollywood Principle?**

**Expected answer:** “Don't call us, we'll call you.” It describes Inversion of Control, where the framework calls developer code.

### Question 4

**State four benefits and four costs of frameworks.**

**Expected answer:** Benefits include productivity, reliability, security, maintainability, community, and built-in best practices. Costs include learning curve, lock-in, overhead, hidden behaviour, upgrade churn, and over-engineering.

### Question 5

**List the six major framework/tool families.**

**Expected answer:** Frontend, backend, mobile, testing/quality, DevOps/cloud, and AI-assisted/agentic.

### Question 6

**Explain a repeatable framework-selection workflow.**

**Expected answer:** Identify requirements, determine constraints, shortlist candidates, prototype them, then score, decide, and document the rationale in an ADR.

### Question 7

**What is an ADR?**

**Expected answer:** An Architecture Decision Record is a short document that records decision context, options, selected choice, rationale, and consequences.

### Question 8

**Why use a weighted decision matrix?**

**Expected answer:** It makes project priorities explicit, applies consistent scores, and provides evidence for selecting the candidate with the best contextual fit.

### Question 9

**Compare native and cross-platform mobile development.**

**Expected answer:** Native development offers maximum performance and platform access but requires separate codebases. Cross-platform frameworks use one shared codebase, reducing cost and time, with possible platform-specific limitations.

### Question 10

**State two benefits and two costs of microservices.**

**Expected answer:** Benefits: independent scaling and team autonomy. Costs: distributed-system complexity and monitoring/network overhead.

### Question 11

**What is serverless computing?**

**Expected answer:** A cloud model where functions run on demand and the provider handles infrastructure, scaling, and execution-based billing.

### Question 12

**Draw a basic CI/CD pipeline.**

**Expected answer:** Commit → build → test → package → deploy → monitor.

### Question 13

**Differentiate AI-assisted coding and agentic development.**

**Expected answer:** AI-assisted tools suggest code in developer-directed tasks. Agentic tools can plan and perform multi-step tasks such as editing files, running tests, and opening pull requests.

### Question 14

**Why is human-in-the-loop oversight non-negotiable?**

**Expected answer:** Engineers must validate requirements, correctness, security, licences, and test results and remain accountable for deployed code.

---

# Common Mistakes to Avoid

- Defining a framework only as “a collection of libraries.”
- Using framework size as the main framework/library distinction.
- Forgetting Inversion of Control.
- Claiming that importing axios means a project uses a framework.
- Listing only framework benefits and ignoring learning, lock-in, and upgrade costs.
- Choosing a framework because a famous company uses it.
- Treating popularity or novelty as evidence of project fit.
- Ignoring team skills, deadline, budget, or existing systems.
- Skipping a prototype before making a high-risk decision.
- Using unweighted scores when criterion importance differs.
- Assuming microservices are automatically better than a monolith.
- Saying serverless means no servers exist.
- Confusing Docker packaging with Kubernetes orchestration.
- Treating AI-generated code as automatically correct, secure, or licence-safe.
- Forgetting that real systems combine multiple framework and tool families.

---

# Key Terms

Framework; library; semi-complete platform; application skeleton; conventions; extension points; routing; authentication; validation; data access; UI rendering; configuration; Inversion of Control; Hollywood Principle; lifecycle; scaffolding; hot reload; lock-in; framework ecosystem; frontend; backend; mobile; cross-platform; native development; unit testing; integration testing; end-to-end testing; static analysis; REST API; JSON; ORM; EF Core; CI/CD; Docker; Kubernetes; Architecture Decision Record; weighted decision matrix; project fit; team skills; maturity; longevity; compliance; microservices; API gateway; service discovery; message queue; serverless; cloud-native; Infrastructure as Code; observability; AI-assisted coding; agentic development; human-in-the-loop.

---

PDF pages: 47 / MD page sections: 47 ✅
