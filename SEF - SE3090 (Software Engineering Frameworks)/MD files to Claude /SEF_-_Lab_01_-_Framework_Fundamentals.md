# SE3090 — Software Engineering Frameworks
## Lab Practical 01 — Software Engineering Framework Fundamentals, Framework Selection & Emerging Trends

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Lab practical | Lab 01 |
| Related lecture | Lecture 01 |
| Duration | 2 Hours |
| Learning outcomes | LO1 and LO4 |
| PDF pages | 9 |

---

# Table of Contents
- [Page 01 — Lab Overview, Introduction, Objectives and Required Materials](#page-01-lab-overview-introduction-objectives-and-required-materials)
- [Page 02 — Required Tools and 120-Minute Lab Plan](#page-02-required-tools-and-120-minute-lab-plan)
- [Page 03 — Task 01 — Framework or Library? Classify and Justify](#page-03-task-01-framework-or-library-classify-and-justify)
- [Page 04 — Task 02 — Build a Framework Comparison Table](#page-04-task-02-build-a-framework-comparison-table)
- [Page 05 — Task 03 — Selection Workflow, Weighted Matrix and Stack Plan](#page-05-task-03-selection-workflow-weighted-matrix-and-stack-plan)
- [Page 06 — Task 03 Continued — Delivery, Expected Output and Assessor Hint](#page-06-task-03-continued-delivery-expected-output-and-assessor-hint)
- [Page 07 — Task 04 — Real-World Case and Emerging-Trends Reflection](#page-07-task-04-real-world-case-and-emerging-trends-reflection)
- [Page 08 — Quick Test — Knowledge Check](#page-08-quick-test-knowledge-check)
- [Page 09 — Submission Instructions and Marking Guide](#page-09-submission-instructions-and-marking-guide)
- [Major Topic Exam Sections](#major-topic-exam-sections)
- [Full Lab Summary](#full-lab-summary)
- [Important Formulas and Decision Calculations](#important-formulas-and-decision-calculations)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms List](#key-terms-list)

---

# Page-by-Page Notes

## Page 01 — Lab Overview, Introduction, Objectives and Required Materials

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 1 of 9
SE3090 – Software Engineering Frameworks
Lab Practical 01
Software Engineering Framework Fundamentals, Framework Selection & Emerging Trends

Lab Practical Number
Lab 01
Lab Title
Software Engineering Framework Fundamentals, Framework Selection &
Emerging Trends
Related Lecture
Lecture 01 – Software Engineering Framework Fundamentals, Selection and
Emerging Trends
Duration
2 Hours (in-lab)
Learning Outcomes
LO1 – Evaluate frameworks   •   LO4 – Select and justify frameworks, tools & AI-
assisted approaches
Mode
Individual work  •  Word document submitted to CourseWeb within the session
Introduction
This lab puts Lecture 01 into practice. In the lecture you learned what a software engineering framework
is, how a framework differs from a library, the main framework families used across web, mobile, cloud,
and AI-assisted development, and a repeatable method for selecting and justifying frameworks for a real
project. In this 2-hour session you will apply that knowledge to concrete classification, comparison,
selection, and trend-analysis tasks.
Everything you need is already in Lecture 01. Base your answers on the lecture content, the worked
CampusEats case study, and the class discussion. You may add suitable examples of your own, but stay
within the scope of Lecture 01 — do not introduce unrelated topics.
Lab Objectives
By the end of this lab, you should be able to:
• Distinguish frameworks from libraries using the control-of-flow (Inversion of Control) test, and justify
each classification.
• Compare frameworks within a family (frontend, backend, or mobile) against criteria such as
language, best fit, strengths, and industry adopters (LO1).
• Apply a selection workflow and a weighted decision matrix to choose a suitable framework for a
given project context (LO4).
• Plan a full-stack technology stack for a real-world scenario and justify every layer against an explicit
selection criterion (LO4).
• Analyse emerging trends — microservices, serverless, cloud-native/DevOps, and AI-assisted/agentic
development — and judge when each is appropriate (LO1, LO4).
Required Tools / Materials
• Lecture 01 slide deck — the primary reference for all tasks (definitions, comparison tables, selection
criteria, case study, trends).

### Recreated Table — Lab Information

| Item | Details |
|---|---|
| Lab Practical Number | Lab 01 |
| Lab Title | Software Engineering Framework Fundamentals, Framework Selection & Emerging Trends |
| Related Lecture | Lecture 01 – Software Engineering Framework Fundamentals, Selection and Emerging Trends |
| Duration | 2 Hours (in-lab) |
| Learning Outcomes | LO1 – Evaluate frameworks; LO4 – Select and justify frameworks, tools & AI-assisted approaches |
| Mode | Individual work; Word document submitted to CourseWeb within the session |

### Visual Explanation

The page uses a formal lab-sheet layout with a dark-blue title banner, orange section rules, and a metadata table. It visually connects Lecture 01 knowledge to classification, comparison, framework selection, stack planning, and trend analysis.

```text
Lecture 01 concepts
        ↓
Classification and comparison
        ↓
Selection and justification
        ↓
Full-stack planning
        ↓
Emerging-trend evaluation
```

### Student-Friendly Explanation

The lab tests professional judgment rather than coding. Strong answers classify tools using control of flow, compare candidates using evidence, and connect every selection to project requirements and constraints.

### Exam Tip

Use explicit selection criteria in every recommendation.

### Common Mistake

Do not treat this as a coding lab; the required skill is evaluation and justification.

---

## Page 02 — Required Tools and 120-Minute Lab Plan

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 2 of 9
• A word processor — Microsoft Word (or Google Docs / LibreOffice exported to .docx) to prepare the
submission.
• A web browser — for quick reference to official framework documentation (react.dev,
learn.microsoft.com/aspnet/core, docs.flutter.dev) — optional.
• This lab sheet — for task instructions and the quick test.
Note: no coding or installation is required for this lab. The focus is evaluation, comparison, selection, and
justification — the skills behind LO1 and LO4.
Lab Time Plan (120 minutes)
Time
Activity
Output
0:00 – 0:10
Briefing & recap of Lecture 01 key ideas (framework, IoC,
families, selection method)
Ready to start
0:10 – 0:30
Task 01 — Framework or Library? Classify and justify
Classification table
0:30 – 0:55
Task 02 — Build a framework comparison table for one family
Comparison table + verdict
0:55 – 1:25
Task 03 — Selection workflow, weighted matrix & stack plan
Matrix + stack + sketch
1:25 – 1:50
Task 04 — Real-world case selection + emerging-trends
reflection
Stack + trend analysis
1:50 – 2:00
Quick test + finalise and submit the Word document
Submitted .docx

HOW TO USE THIS PLAN
The times are a guide. Aim to keep Tasks 01–02 brisk so you have enough time for the selection and trends
work in Tasks 03–04, which carry the most marks.

### Recreated Table — Lab Time Plan

| Time | Activity | Output |
|---|---|---|
| 0:00–0:10 | Briefing and Lecture 01 recap | Ready to start |
| 0:10–0:30 | Task 01 — Framework or Library? | Classification table |
| 0:30–0:55 | Task 02 — Framework comparison | Comparison table + verdict |
| 0:55–1:25 | Task 03 — Selection workflow, matrix and stack plan | Matrix + stack + sketch |
| 1:25–1:50 | Task 04 — Case selection and trends reflection | Stack + trend analysis |
| 1:50–2:00 | Quick test, finalise and submit | Submitted `.docx` |

### Visual Explanation

The main visual is a three-column timetable that maps each time block to an activity and expected output.

```text
10 min recap → 20 min classification → 25 min comparison
→ 30 min matrix/stack → 25 min case/trends → 10 min test/submit
```

### Student-Friendly Explanation

Tasks 03 and 04 receive the most time because they require deeper reasoning. The lecture deck is the primary source; coding and installation are not required.

### Exam Tip

Reserve enough time for the weighted matrix, architecture sketch, and trend analysis.

### Common Mistake

Do not spend most of the session on optional web research.

---

## Page 03 — Task 01 — Framework or Library? Classify and Justify

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 3 of 9
T A S K  0 1   •   2 0  m i n u t e s   •   L O 1
Framework or Library? Classify and Justify
Recall the decisive test from the lecture: who controls the flow of execution?  If your code calls the tool
whenever you choose, it is a library. If the tool runs the main loop and calls your code at its extension
points (Inversion of Control — the “Hollywood Principle”), it is a framework.
Step-by-step instructions
1. Copy the table below into your Word document.
2. For each technology, write Framework or Library in the second column.
3. In the third column, give a one-line justification using the control-of-flow test (state who calls whom).
4. For the item marked with a star (★), explain why it sits in the “grey zone” discussed in the lecture and
defend whichever classification you choose.

Technology
Framework / Library
Justification (who controls the flow?)
lodash

ASP.NET Core

axios

Flutter

jQuery

Angular

Express.js

NumPy

React  ★

Spring Boot

EXPECTED OUTPUT
A completed 10-row table with a correct classification and a one-line, control-flow-based justification for
each technology, plus a short paragraph (2–3 sentences) defending your classification of React.

### Recreated Table — Task 01

| Technology | Framework / Library | Justification (who controls the flow?) |
|---|---|---|
| lodash |  |  |
| ASP.NET Core |  |  |
| axios |  |  |
| Flutter |  |  |
| jQuery |  |  |
| Angular |  |  |
| Express.js |  |  |
| NumPy |  |  |
| React ★ |  |  |
| Spring Boot |  |  |

### Visual Explanation

The blank ten-row table is designed to apply one decisive test consistently: who controls execution?

```text
Your code calls the tool → Library
Tool controls lifecycle and calls your code → Framework
```

### Student-Friendly Explanation

A framework normally controls lifecycle and calls application code at extension points. A library is called directly by application code. React is intentionally treated as a grey-zone case requiring a defended classification.

### Exam Tip

Use the phrase “who controls the flow of execution.”

### Common Mistake

Do not classify by size, language, licence, or popularity.

---

## Page 04 — Task 02 — Build a Framework Comparison Table

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 4 of 9
T A S K  0 2   •   2 5  m i n u t e s   •   L O 1
Build a Framework Comparison Table
In the lecture we surveyed six framework families. In this task you compare frameworks within one family
so you can evaluate options the way a professional does — on evidence, not popularity.
Step-by-step instructions
1. Choose one framework family from the list below.
Family
Frameworks to compare (pick from these)
Frontend (Web UI)
React  •  Angular  •  Vue
Backend / Server-side
ASP.NET Core  •  Spring Boot  •  Express.js / NestJS  •  Django / FastAPI
Mobile
Flutter  •  React Native  •  Native (SwiftUI / Jetpack Compose)
2. Compare at least two (ideally three) frameworks from that family by completing the comparison table
below.
3. Fill every cell using Lecture 01 content; you may add one fact of your own per framework if clearly
relevant.
4. Below the table, write a short verdict (3–4 sentences): for a 3-developer student startup building its
first product in 4 months, which framework in your family would you start with, and why?

Criterion
Framework A: ____
Framework B: ____
Framework C: ____
Type

Language

Best fit / strengths

Used by (industry)

Main trade-off / cost

EXPECTED OUTPUT
A completed comparison table for one framework family (2–3 frameworks across 5 criteria) plus a short,
justified verdict naming your recommended starting framework for the given startup context.

### Recreated Tables — Task 02

| Family | Frameworks to compare |
|---|---|
| Frontend (Web UI) | React; Angular; Vue |
| Backend / Server-side | ASP.NET Core; Spring Boot; Express.js / NestJS; Django / FastAPI |
| Mobile | Flutter; React Native; Native (SwiftUI / Jetpack Compose) |

| Criterion | Framework A | Framework B | Framework C |
|---|---|---|---|
| Type |  |  |  |
| Language |  |  |  |
| Best fit / strengths |  |  |  |
| Used by (industry) |  |  |  |
| Main trade-off / cost |  |  |  |

### Visual Explanation

The page first groups comparable technologies into frontend, backend, and mobile families, then provides a shared five-criterion comparison table. The structure prevents unfair cross-family comparisons.

### Student-Friendly Explanation

A fair comparison uses candidates from the same family and the same criteria. The verdict must suit a three-developer startup with a four-month deadline.

### Exam Tip

Keep criteria identical across all candidates and justify the final verdict against the startup context.

### Common Mistake

Do not compare technologies from unrelated framework families.

---

## Page 05 — Task 03 — Selection Workflow, Weighted Matrix and Stack Plan

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 5 of 9
T A S K  0 3   •   3 0  m i n u t e s   •   L O 4
Selection Workflow, Weighted Matrix & Stack Plan
Now apply the professional selection method from the lecture: Requirements → Constraints → Shortlist
→ Prototype → Decide & record.  You will score candidates objectively with a weighted decision matrix,
then plan a full stack — citing a criterion for every choice, exactly as in the CampusEats case study.
Scenario
“GREENCART” — CAMPUS GROCERY PICKUP
A team of 3 developers has 4 months and a small budget to build GreenCart: a service that lets students
order groceries from campus shops and collect them from a pickup point.
Requirements: a student-facing mobile app (iOS + Android), a shop-owner web dashboard, order
management and simple payments, and the system must be able to scale if it becomes popular across
faculties.
Step-by-step instructions
1. Part A — Weighted matrix. Pick one layer to evaluate in detail (frontend or mobile or backend).
Complete the matrix below: assign each criterion a weight (the weights must total 100%), score each
candidate 1–5, then compute the weighted total. State which candidate wins.
2. Part B — Stack plan. Decide a framework/technology for every layer of GreenCart and complete the
stack table. Each justification must cite one selection criterion from the lecture (e.g. project fit, team
skills, community & ecosystem, performance, maturity, security, cost, integration).
3. Part C — Architecture sketch. Draw a simple block diagram of your stack (mobile app + web
dashboard → backend API → database, with the delivery/hosting layer noted). Hand-draw and
photograph it, or build it with shapes/SmartArt in Word.
Part A — Weighted decision matrix
Criterion
Weight %
Candidate 1
Candidate 2
Candidate 3
Team familiarity

Time to first working version

Hiring pool (if team grows)

Ecosystem for our features

Long-term maintainability

Weighted total
100%

Winner of this layer: __________________   (the highest weighted total)
Part B — GreenCart technology stack plan
Layer
Your choice
Justification (cite one criterion)
Mobile app

Web dashboard

Backend API

Database

### Recreated Tables — Task 03

| Criterion | Weight % | Candidate 1 | Candidate 2 | Candidate 3 |
|---|---:|---:|---:|---:|
| Team familiarity |  |  |  |  |
| Time to first working version |  |  |  |  |
| Hiring pool (if team grows) |  |  |  |  |
| Ecosystem for our features |  |  |  |  |
| Long-term maintainability |  |  |  |  |
| **Weighted total** | **100%** |  |  |  |

| Layer | Your choice | Justification (cite one criterion) |
|---|---|---|
| Mobile app |  |  |
| Web dashboard |  |  |
| Backend API |  |  |
| Database |  |  |

### Visual Explanation

The page combines a five-stage selection workflow, a weighted matrix, a five-layer technology-stack plan, and an architecture-sketch requirement.

```text
Mobile app ──────┐
                 ├──→ Backend API ───→ Database
Web dashboard ───┘          │
                            └──→ Payments / external services

Delivery and hosting support the complete stack
```

### Student-Friendly Explanation

The matrix makes selection objective. Weights represent criterion importance, scores represent candidate performance, and the highest weighted total wins. The chosen technologies must also work together as one system.

### Exam Tip

Weights must total 100%, scores must be applied consistently, and the named winner must have the highest total.

### Common Mistake

Do not add raw scores without applying criterion weights.

---

## Page 06 — Task 03 Continued — Delivery, Expected Output and Assessor Hint

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 6 of 9
Layer
Your choice
Justification (cite one criterion)
Delivery & hosting

EXPECTED OUTPUT
(A) A completed weighted matrix for one layer with weights summing to 100%, scores, weighted totals, and
a named winner. (B) A five-layer stack table where every choice cites a selection criterion. (C) A simple
architecture sketch of the GreenCart system.

ASSESSOR HINT FOR YOU
Strong answers read like the CampusEats case study: every choice traces to a criterion, not a preference.
“Flutter, because one codebase covers iOS + Android and a 3-person team cannot staff two native tracks” is
a justification; “Flutter, because it’s popular” is not.

### Recreated Table — Stack Plan Continued

| Layer | Your choice | Justification (cite one criterion) |
|---|---|---|
| Delivery & hosting |  |  |

### Visual Explanation

The page highlights the required final GreenCart layer, three expected deliverables, and an assessor hint. The visual emphasis shows that explicit criterion-based justification is more important than popularity.

### Student-Friendly Explanation

A justification should state the technology, the relevant project constraint, and the named selection criterion. Popularity alone is not enough.

### Exam Tip

Use the structure: “We selected X because criterion Y is critical under constraint Z.”

### Common Mistake

Do not write “because it is popular” without connecting popularity to a relevant criterion such as hiring pool or ecosystem.

---

## Page 07 — Task 04 — Real-World Case and Emerging-Trends Reflection

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 7 of 9
T A S K  0 4   •   2 5  m i n u t e s   •   L O 1  &  L O 4
Real-World Case + Emerging-Trends Reflection
Frameworks change every few years; the selection method and an awareness of emerging trends are what
last. In this task you act as the tech lead for a fresh real-world system, choose a stack, then judge where
modern architectural trends do — and do not — fit.
Choose ONE case scenario
Option
Scenario
A
A private hospital chain wants a patient appointment-booking system. Security and compliance are
critical; staff use a web portal and patients use a mobile app.
B
A nationwide bus company wants a real-time seat-booking and live-tracking platform with heavy,
spiky traffic during holiday seasons.
C
A clothing brand wants a mobile-first e-commerce app that must scale sharply during seasonal sales
and promotions.
Part A — Select and justify a stack (LO4)
1. State which scenario you chose and list its two most important non-functional requirements (e.g.
security, scalability, time-to-market).
2. Choose a framework/technology for frontend (or mobile), backend, database, and hosting.
3. Name your top three selection criteria for this scenario and explain why each matters here. Your
stack choices must reflect those criteria.
Part B — Emerging-trends reflection (LO1)
For the same system, complete the table: for each trend, say whether you would apply it, give a one-line
justification, and name one risk or cost. “Not now” is a perfectly valid, well-reasoned answer (recall: newer
is not automatically better).
Trend
Apply? (Yes/No)
Where / why
One risk or cost
Microservices

Serverless functions

Cloud-native
&
DevOps
(CI/CD)

AI-assisted
/
agentic
development

EXPECTED OUTPUT
(A) A justified stack for your chosen scenario, led by your top three criteria. (B) A completed four-row trends
table with a reasoned Apply/Not-now decision and a stated risk for each trend. One sentence reflecting on
the lecture’s key insight: the options change, the method does not.

### Recreated Tables — Task 04

| Option | Scenario |
|---|---|
| A | Private hospital appointment-booking system; security and compliance are critical; staff use web, patients use mobile |
| B | Nationwide bus booking and live tracking; heavy, spiky holiday traffic |
| C | Mobile-first clothing e-commerce; sharp seasonal scaling |

| Trend | Apply? | Where / why | One risk or cost |
|---|---|---|---|
| Microservices |  |  |  |
| Serverless functions |  |  |  |
| Cloud-native & DevOps (CI/CD) |  |  |  |
| AI-assisted / agentic development |  |  |  |

### Visual Explanation

The page uses one table for choosing a scenario and another for evaluating emerging trends.

```text
Choose scenario → identify non-functional requirements
→ select criteria → choose stack → evaluate each trend
→ Apply / Not now + reason + risk
```

### Student-Friendly Explanation

Modern trends should be adopted only when they fit the system. A well-reasoned “Not now” answer is valid when cost, complexity, risk, or maturity outweighs the benefit.

### Exam Tip

For every trend include Apply/Not now, where/why, and one risk or cost.

### Common Mistake

Do not assume newer technology is automatically better.

---

## Page 08 — Quick Test — Knowledge Check

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 8 of 9
Q U I C K  T E S T   •   1 0  m i n u t e s
Knowledge Check
Answer all questions in your Word document. Write the question number and your answer. Questions 1–
5 are multiple choice; 6–7 are short answer; 8 is scenario-based.
Multiple choice (choose one)
Q1. The defining difference between a framework and a library is:
(a)  size
(b)  programming language
(c)  who controls the flow of execution
(d)  the licence
Q2. “Don’t call us, we’ll call you” (the Hollywood Principle) describes:
(a)  REST
(b)  Inversion of Control
(c)  CI/CD
(d)  serverless computing
Q3. A 3-person startup needs iOS + Android apps in 4 months. The strongest first candidate is:
(a)  two separate native apps
(b)  Flutter (cross-platform)
(c)  a desktop application
(d)  a static website
Q4. The best reason to choose framework X over framework Y is that X:
(a)  is trending on social media
(b)  is used by Google
(c)  has the highest weighted score against your project’s criteria
(d)  had the newest release this week
Q5. In agentic / AI-assisted development, the human engineer’s essential role is to:
(a)  type faster
(b)  review, test and take responsibility for the output
(c)  avoid writing documentation
(d)  remove all human oversight
Short answer (1–2 sentences each)
Q6. Give one benefit AND one cost of adopting a large framework for a short student project.
Q7. Name the five stages of the framework selection workflow taught in the lecture, in order.
Scenario-based
Q8. A classmate says: “I imported axios into my project, so now I’m using a framework.” Is this correct?
Justify your answer in one or two sentences using the control-of-flow test.
SUBMIT YOUR QUICK-TEST ANSWERS INSIDE THE SAME WORD DOCUMENT
Place your quick-test answers in a clearly labelled “Quick Test” section after your Task 01–04 answers.

### Visual Explanation

The page is a knowledge check divided into multiple choice, short answers, and a scenario question. It moves from concept recognition to explanation and application.

### Student-Friendly Explanation

The quick test checks the same core principles used in Tasks 01–04. The marking guide confirms the multiple-choice answers as c, b, b, c, b.

### Exam Tip

The correct multiple-choice sequence is Q1–Q5: c, b, b, c, b.

### Common Mistake

Do not justify axios using its size; apply the control-of-flow test.

---

## Page 09 — Submission Instructions and Marking Guide

### Original Page Content

SE3090 – Software Engineering Frameworks
Lab Practical 01
Page 9 of 9
Submission Instructions
Prepare a single Microsoft Word document containing all of your work for this lab.
Your Word document must include:
• Student name
• IT number
• Lab practical number (Lab 01)
• Your answers for Task 01, Task 02, Task 03 and Task 04
• Your Quick Test answers (Q1–Q8)
File naming and upload:
1. Rename the Word document using your IT number in this exact format: ITXXXXXXXX_Lab01.docx
2. Example: IT22123456_Lab01.docx
3. Upload the completed document to CourseWeb before the end of the 2-hour lab session.
4. Late submissions will not be accepted unless prior approval is given by the lecturer.
STUDENT INSTRUCTION
You must refer to the provided Lecture 01 material when answering the lab tasks. Your answers should be
based on the lecture content, class explanations, and the practical examples discussed in the lecture.
Evaluation Criteria (Marking Guide — 20 Marks)
For lecturer reference. Marks reward correct classification, evidence-based comparison, and — above all
— justification that traces to explicit criteria.
Component
Marks
What earns full marks
Task 01 — Framework vs Library
4
All 10 classified correctly; each justified by the
control-of-flow test; React grey-zone defended.
Task 02 — Comparison table
4
Table complete for 2–3 frameworks across all
criteria; verdict is justified for the given startup
context.
Task 03 — Selection, matrix & stack
5
Weighted matrix sums to 100% with computed
totals and a named winner; full stack with a
criterion cited per layer; architecture sketch
present.
Task 04 — Case + trends reflection
4
Stack led by top-3 criteria; trends table reasoned
with risks; sound “apply / not now” judgement.
Quick Test (Q1–Q8)
3
Q1–Q5 correct (c, b, b, c, b); Q6–Q8 show correct
understanding.
Total
20

### Recreated Table — Evaluation Criteria

| Component | Marks | What earns full marks |
|---|---:|---|
| Task 01 — Framework vs Library | 4 | All 10 correct, control-flow justification, React grey-zone defended |
| Task 02 — Comparison table | 4 | Complete comparison for 2–3 frameworks and justified startup verdict |
| Task 03 — Selection, matrix & stack | 5 | Weights total 100%, totals computed, winner named, full stack, criteria, architecture sketch |
| Task 04 — Case + trends reflection | 4 | Stack led by top three criteria; reasoned trends with risks |
| Quick Test (Q1–Q8) | 3 | Q1–Q5 correct (c, b, b, c, b); Q6–Q8 show understanding |
| **Total** | **20** |  |

### Visual Explanation

The page ends with a structured submission checklist and a 20-mark evaluation table. Task 03 has the largest allocation because it combines calculation, stack design, justification, and architecture.

### Student-Friendly Explanation

Use the marking guide as a final checklist. The submission must be one Word document with all tasks and the quick test, named using the exact IT-number pattern.

### Exam Tip

Task 03 is worth 5 marks; Tasks 01, 02, and 04 are worth 4 marks each; the Quick Test is worth 3 marks.

### Common Mistake

Do not submit separate files or use a filename different from the required IT-number format.

---

# Major Topic Exam Sections

## Framework vs Library

**Exam Tip:** Apply the control-of-flow test and state who calls whom.

**Common Mistake:** Size, language, popularity, and licence are not the decisive test.

**Likely question:** What does the Hollywood Principle mean?

**Expected answer:** “Don’t call us, we’ll call you”; a framework controls execution and invokes application code.

## Framework Comparison

**Exam Tip:** Compare candidates from the same family using identical criteria.

**Common Mistake:** Do not recommend a framework only because a famous company uses it.

**Likely question:** Why must the verdict consider the project context?

**Expected answer:** The best framework depends on team size, timeline, skills, ecosystem, cost, and maintainability.

## Selection Workflow and Weighted Matrix

**Exam Tip:** Memorize: Requirements → Constraints → Shortlist → Prototype → Decide & record.

**Common Mistake:** Do not skip weighting or name a winner that does not have the highest total.

**Likely question:** Why assign weights?

**Expected answer:** Weights represent the relative importance of criteria.

## Full-Stack Planning

**Exam Tip:** Justify mobile, web, API, database, and hosting choices with named criteria.

**Common Mistake:** Do not choose layers independently without considering integration.

**Likely question:** Why is an architecture sketch useful?

**Expected answer:** It shows how selected technologies connect as one system.

## Emerging Trends

**Exam Tip:** For each trend, include Apply/Not now, reason, location, and one risk or cost.

**Common Mistake:** Newer is not automatically better.

**Likely question:** What is the human engineer’s role in AI-assisted development?

**Expected answer:** Review, test, validate, and take responsibility for the output.

---

# Full Lab Summary

This lab applies Lecture 01 through four tasks and a quick test. Task 01 classifies frameworks and libraries using control of flow. Task 02 compares frameworks within one family and requires a context-specific verdict. Task 03 uses the professional selection workflow and a weighted matrix to select technologies and plan the GreenCart stack. Task 04 evaluates a real-world case and emerging trends. The marking guide rewards correct classification, evidence-based comparison, and criterion-based justification.

# Important Formulas and Decision Calculations

```text
Weighted criterion score = criterion weight × candidate score
```

```text
Weighted total = Σ (criterion weight × candidate score)
```

```text
Sum of criterion weights = 100%
```

```text
Requirements → Constraints → Shortlist → Prototype → Decide & record
```

# Key Definitions Table

| Term | Definition | Simple meaning |
|---|---|---|
| Framework | Structured environment that often controls lifecycle and calls application code | The tool controls the flow |
| Library | Reusable functionality called by application code | Your code calls the tool |
| Inversion of Control | Framework invokes application code at extension points | The framework calls you |
| Constraint | Fixed project limitation such as time, budget, skills, or compliance | A boundary the project must respect |
| Weighted decision matrix | Tool combining criterion importance and candidate scores | Objective selection table |
| Non-functional requirement | System quality such as security, scalability, or reliability | How well the system must operate |
| Microservices | System split into independently deployable services | Many smaller services |
| Serverless | Cloud execution with infrastructure management abstracted | Run functions without managing servers directly |
| CI/CD | Automated integration, testing, and release practices | Automate build, test, and delivery |
| Agentic development | AI-assisted multi-step development workflows | AI helps perform larger development tasks |

# Quick Revision Table

| Topic | Must remember | Page(s) |
|---|---|---:|
| Lab focus | Evaluation, comparison, selection, justification | 1–2 |
| Framework vs library | Who controls execution | 3 |
| Comparison | Same family, same criteria, justified verdict | 4 |
| Selection workflow | Five ordered stages | 5 |
| Matrix | Weights = 100%; highest total wins | 5–6 |
| GreenCart stack | Mobile, web, API, database, hosting | 5–6 |
| Trends | Apply/Not now + reason + risk | 7 |
| Quick Test | Q1–Q5 = c, b, b, c, b | 8–9 |
| Submission | One `.docx`, exact filename format | 9 |

# Likely Exam Questions

1. **What distinguishes a framework from a library?**  
   **Expected answer:** Who controls the flow of execution.
2. **State the five selection stages.**  
   **Expected answer:** Requirements, Constraints, Shortlist, Prototype, Decide & record.
3. **Why use a weighted matrix?**  
   **Expected answer:** To compare candidates against project-specific criteria while giving more important criteria greater influence.
4. **What must a trend evaluation include?**  
   **Expected answer:** Apply/Not now, where or why, and one risk or cost.
5. **Why is human oversight essential in AI-assisted development?**  
   **Expected answer:** Engineers remain responsible for correctness, testing, safety, and final output.

# Key Terms List

- Framework
- Library
- Inversion of Control
- Hollywood Principle
- Framework family
- Requirements
- Constraints
- Shortlist
- Prototype
- Selection criteria
- Weighted decision matrix
- Full-stack architecture
- Non-functional requirements
- Microservices
- Serverless
- Cloud-native
- DevOps
- CI/CD
- AI-assisted development
- Agentic development
- Human oversight

# Verification

- PDF page count checked directly: 9
- Markdown page sections checked: 9
- All pages preserved in order.
- All visible tables recreated in Markdown.
- Visual flows and architecture relationships represented with tagged `text` diagrams.
- No untagged fenced code blocks used.

PDF pages: 9 / MD page sections: 9 ✅
