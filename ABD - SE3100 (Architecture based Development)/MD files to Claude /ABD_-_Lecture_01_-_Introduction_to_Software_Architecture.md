# SE3100 — Architecture Based Development
## Lecture 01 — Introduction to Software Architecture

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3100 |
| Module name | Architecture Based Development |
| Lecture number | Lecture 01 |
| Lecture title | Introduction to Software Architecture |
| Lecturer | Vishan Jayasinghearachchi |
| Lecturer email | vishan.j@sliit.lk |
| Total PDF pages/slides | 35 |

---

# Table of Contents

- [Pages 01–03 — Introduction, Outcomes and Contents](#pages-0103--introduction-outcomes-and-contents)
- [Pages 04–08 — Software, Complexity and the Need for Architecture](#pages-0408--software-complexity-and-the-need-for-architecture)
- [Pages 09–14 — Definition and Four Dimensions](#pages-0914--definition-and-four-dimensions)
- [Pages 15–17 — Architecture, Design, Context and Trade-Offs](#pages-1517--architecture-design-context-and-trade-offs)
- [Pages 18–21 — Intentional and Accidental Architecture](#pages-1821--intentional-and-accidental-architecture)
- [Pages 22–26 — Plan-Driven and Agile Intentional Architecture](#pages-2226--plan-driven-and-agile-intentional-architecture)
- [Pages 27–29 — Architecture Drivers and Business Drivers](#pages-2729--architecture-drivers-and-business-drivers)
- [Pages 30–33 — Architecture Business Cycle](#pages-3033--architecture-business-cycle)
- [Pages 34–35 — Summary and References](#pages-3435--summary-and-references)
- [Major Topic Exam Sections](#major-topic-exam-sections)
- [Full Lecture Summary](#full-lecture-summary)
- [Important Formulas and Code Snippets](#important-formulas-and-code-snippets)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms List](#key-terms-list)

## Page Index
- [Page 01 — Introduction to Software Architecture](#page-01-introduction-to-software-architecture)
- [Page 02 — Learning Outcomes](#page-02-learning-outcomes)
- [Page 03 — Contents](#page-03-contents)
- [Page 04 — What Is Software?](#page-04-what-is-software)
- [Page 05 — Software Is More Than Source Code](#page-05-software-is-more-than-source-code)
- [Page 06 — Why Does Software Become Complex?](#page-06-why-does-software-become-complex)
- [Page 07 — Complexity Must Be Managed](#page-07-complexity-must-be-managed)
- [Page 08 — The Need for Software Architecture](#page-08-the-need-for-software-architecture)
- [Page 09 — What Is Software Architecture?](#page-09-what-is-software-architecture)
- [Page 10 — Defining Software Architecture: Four Dimensions](#page-10-defining-software-architecture-four-dimensions)
- [Page 11 — Four Dimensions of Software Architecture](#page-11-four-dimensions-of-software-architecture)
- [Page 12 — Defining Software Architecture: Four Dimensions — Visual Model](#page-12-defining-software-architecture-four-dimensions-visual-model)
- [Page 13 — Four Dimensions of Software Architecture — How They Connect](#page-13-four-dimensions-of-software-architecture-how-they-connect)
- [Page 14 — A Relatable Example](#page-14-a-relatable-example)
- [Page 15 — Architecture vs. Design](#page-15-architecture-vs-design)
- [Page 16 — Architecture Depends on Context](#page-16-architecture-depends-on-context)
- [Page 17 — Architecture Is Based on Trade-Offs](#page-17-architecture-is-based-on-trade-offs)
- [Page 18 — Does All Software Have an Architecture?](#page-18-does-all-software-have-an-architecture)
- [Page 19 — Intentional Architecture](#page-19-intentional-architecture)
- [Page 20 — Accidental Architecture](#page-20-accidental-architecture)
- [Page 21 — Intentional vs Accidental Architecture](#page-21-intentional-vs-accidental-architecture)
- [Page 22 — Two Approaches to Intentional Architecture — Visual Comparison](#page-22-two-approaches-to-intentional-architecture-visual-comparison)
- [Page 23 — Two Approaches to Intentional Architecture](#page-23-two-approaches-to-intentional-architecture)
- [Page 24 — Plan-Driven Intentional Architecture](#page-24-plan-driven-intentional-architecture)
- [Page 25 — Agile Intentional Architecture](#page-25-agile-intentional-architecture)
- [Page 26 — Agile Intentional Architecture — Continued](#page-26-agile-intentional-architecture-continued)
- [Page 27 — What Drives Architecture?](#page-27-what-drives-architecture)
- [Page 28 — Business Drivers](#page-28-business-drivers)
- [Page 29 — Business Drivers to Quality Attributes](#page-29-business-drivers-to-quality-attributes)
- [Page 30 — The Architecture Business Cycle — Influences](#page-30-the-architecture-business-cycle-influences)
- [Page 31 — The Architecture Business Cycle — Stakeholder Concerns](#page-31-the-architecture-business-cycle-stakeholder-concerns)
- [Page 32 — The Architecture Business Cycle — Explanation](#page-32-the-architecture-business-cycle-explanation)
- [Page 33 — The Architecture Business Cycle — Feedback Model](#page-33-the-architecture-business-cycle-feedback-model)
- [Page 34 — Summary](#page-34-summary)
- [Page 35 — References](#page-35-references)

---

# Page-by-Page Lecture Notes

## Page 01 — Introduction to Software Architecture

### Original Slide Content

**INTRODUCTION TO SOFTWARE**
**ARCHITECTURE**
Vishan Jayasinghearachchi Lecturer - Department of Software Engineering, Faculty of Computing, Sri Lanka Institute of Information Technology. vishan.j@sliit.lk SE3100 - Architecture Based Development

**Original slide number:** 1

### Visual Explanation

A minimal title slide. It identifies the lecture, lecturer, department, faculty, institution, email address, and module. The horizontal rules create a formal academic presentation style.

### Student-Friendly Explanation

This lecture introduces architecture as a way of managing system complexity through structure, qualities, components, styles, decisions, and context.

### Exam Tip

Know the module name, lecturer, and lecture topic only for context.

### Common Mistake

Do not treat architecture as only diagrams or only technology selection.

---

## Page 02 — Learning Outcomes

### Original Slide Content

**LEARNING OUTCOMES**
After completing this lecture, you will be able to,
- Define software architecture.
- Distinguish between intentional and accidental architecture, recognizing that every software system has an architecture.
- Explain how software architecture is developed and evolved under plan-driven and Agile development approaches.
- Identify the factors that influence software architecture.

**Original slide number:** 2

### Visual Explanation

No major technical visual. The page is a learning-outcomes list that frames the knowledge expected after the lecture.

### Student-Friendly Explanation

The outcomes focus on definition, the fact that every system has architecture, intentional versus accidental architecture, plan-driven versus Agile development, and architectural influences.

### Exam Tip

Use the learning outcomes as a checklist for revision.

### Common Mistake

Do not ignore the learning outcome about every system having architecture.

---

## Page 03 — Contents

### Original Slide Content

**CONTENTS**
- What is software?
- Why does software become complex?
- Managing complexity through software architecture
- What is software architecture?
- Does all software have an architecture?
- Developing architecture up front or incrementally
- Business drivers
- Architecture Business Cycle
- Summary

**Original slide number:** 3

### Visual Explanation

No major technical visual. The ordered topic list shows the lecture progression from basic software concepts to architecture, architecture development approaches, business drivers, and the Architecture Business Cycle.

### Student-Friendly Explanation

The topic order builds the argument gradually: understand software, observe complexity, introduce architecture, examine how architecture develops, and then connect it to business and organizational forces.

### Exam Tip

The contents page reveals the likely essay structure of the lecture.

### Common Mistake

Do not study business drivers separately from quality attributes.

---

## Page 04 — What Is Software?

### Original Slide Content

**WHAT IS SOFTWARE?**
- Software enables a computer or computing system to perform a required task.
- It is developed to solve a problem or support a human or business activity.
- It receives inputs, processes information, maintains data and produces outputs.
- Software may operate independently or as part of a larger system.

**Original slide number:** 4

### Visual Explanation

A decorative question-mark icon reinforces that the slide introduces a foundational definition. No technical diagram is present.

### Student-Friendly Explanation

Software receives inputs, processes information, manages data, and produces outputs to support a task or activity. It may be a standalone product or part of a larger system.

### Exam Tip

Define software using task, problem/activity, input-process-data-output, and system context.

### Common Mistake

Do not define software as only a program or source-code file.

---

## Page 05 — Software Is More Than Source Code

### Original Slide Content

**SOFTWARE IS MORE THAN SOURCE CODE**
- A software system may include,
  - Source code and executable programs
  - Data and databases
  - Configurations, Libraries and frameworks
  - External services
  - Interfaces to other systems
  - Deployment and runtime environments
- These parts must work together as one system.

**Original slide number:** 5

### Visual Explanation

The illustration shows many elements connected around software development: code, websites, cloud services, devices, files, databases, and supporting tools. It demonstrates that software is an integrated system rather than only source code.

```text
Software System
├── Source code and executables
├── Data and databases
├── Configuration
├── Libraries and frameworks
├── External services
├── Interfaces
└── Deployment/runtime environment
        ↓
All parts must operate together
```

### Student-Friendly Explanation

Architecture must consider the full operational system. Code can be correct while the overall system fails because configuration, data, infrastructure, integrations, or external services are poorly designed.

### Exam Tip

For “software is more than code,” list at least four non-code elements.

### Common Mistake

Do not omit deployment, configuration, data, and external services.

---

## Page 06 — Why Does Software Become Complex?

### Original Slide Content

**WHY DOES SOFTWARE BECOME COMPLEX?**
- Software becomes complex because of,
  - Increasing functionality
  - More users and stakeholders
  - More modules, components and services
  - Relationships and dependencies among system elements
  - Integration with external systems
  - Quality expectations
  - Changing requirements and technologies
- The difficulty comes not only from the number of elements, but also from how they interact.

**Original slide number:** 6

### Visual Explanation

No major diagram. The text emphasizes that complexity is caused both by the number of elements and by their interactions and dependencies.

### Student-Friendly Explanation

Complexity grows with functionality, stakeholders, modules, integrations, quality demands, and change. Interactions between elements create much of the difficulty.

### Exam Tip

State that interaction and dependency complexity matter, not only element count.

### Common Mistake

Do not say complexity is caused only by the number of modules.

---

## Page 07 — Complexity Must Be Managed

### Original Slide Content

**COMPLEXITY MUST BE MANAGED**
- Complexity must be managed by,
  - Dividing the system into meaningful parts
  - Assigning clear responsibilities to each part
  - Establishing boundaries for the parts
  - Controlling dependencies among parts
  - Defining how the parts communicate
  - Applying consistent rules across the system

**Original slide number:** 7

### Visual Explanation

A decorative lightbulb icon indicates a solution-oriented slide. The important visual meaning is the structured list of techniques for dividing and controlling a complex system.

### Student-Friendly Explanation

Complexity is managed by decomposition, clear responsibilities, boundaries, controlled dependencies, defined communication, and consistent rules.

### Exam Tip

Use the six management actions: divide, assign, bound, control dependencies, define communication, apply rules.

### Common Mistake

Do not divide the system without controlling dependencies and communication.

---

## Page 08 — The Need for Software Architecture

### Original Slide Content

**THE NEED FOR SOFTWARE ARCHITECTURE**
- Software architecture provides the high-level structure required to manage a complex system.
- It helps development teams determine,
  - What the major parts of the system are
  - What each part is responsible for
  - How the parts are connected and which dependencies are allowed
  - Which qualities the system must support
  - Which decisions must remain consistent
- Architecture does not remove complexity.
- It organizes complexity so that the system can be understood, developed and changed.

**Original slide number:** 8

### Visual Explanation

No standalone diagram, but the bullet hierarchy forms a conceptual architecture model:

```text
Complex System
   ↓ architecture identifies
Major parts + responsibilities + connections
   ↓ architecture controls
Dependencies + quality goals + consistent decisions
   ↓ result
A system that can be understood, developed, and changed
```

### Student-Friendly Explanation

Architecture does not eliminate complexity. It organizes complexity so teams can reason about the system and change it safely.

### Exam Tip

A strong answer says architecture organizes rather than removes complexity.

### Common Mistake

Do not claim architecture removes complexity.

---

## Page 09 — What Is Software Architecture?

### Original Slide Content

**WHAT IS SOFTWARE ARCHITECTURE?**
- Software architecture describes the fundamental structure and important decisions of a software system.
- Richards and Ford define software architecture through four dimensions.
- Quality Attributes (Architectural Characteristics)
- Logical components
- Architectural style
- Architectural decisions
- These dimensions are applicable throughout the system.

**Original slide number:** 9

### Visual Explanation

No major diagram. The slide introduces the four dimensions as the conceptual definition of software architecture.

### Student-Friendly Explanation

The lecture adopts Richards and Ford's four-dimensional view: qualities, logical components, style, and decisions.

### Exam Tip

Memorize the four dimensions exactly.

### Common Mistake

Do not define architecture as architectural style alone.

---

## Page 10 — Defining Software Architecture: Four Dimensions

### Original Slide Content

**DEFINING SOFTWARE ARCHITECTURE: FOUR**
**DIMENSIONS**
- Quality Attributes (Architectural Characteristics)
- The capabilities and qualities required for the system to succeed.
- Logical components
- The major elements that implement the behaviour of the system.
- Architectural style
- The overall structural arrangement used by the system.
- Architectural decisions
- The rules and constraints that guide construction of the system.

**Original slide number:** 10

### Visual Explanation

A decorative lightbulb icon supports the explanatory content. The four dimensions are listed with a brief meaning for each.

### Student-Friendly Explanation

Each dimension answers a different question: what qualities matter, what parts exist, how they are arranged, and what rules constrain implementation.

### Exam Tip

Be able to define every dimension in one sentence.

### Common Mistake

Do not merge logical components with architectural style.

---

## Page 11 — Four Dimensions of Software Architecture

### Original Slide Content

**FOUR DIMENSIONS OF SOFTWARE**
**ARCHITECTURE**
Architectural Dimension Purpose Examples Quality Attributes (Architectural Characteristics) Describe what the system must be capable of supporting and the conditions for success. Performance, Scalability, Security, Availability Logical Components Divide system behaviour into meaningful parts and show where responsibilities belong. Domains, Services, Workflows, Business capabilities Architectural Style Defines the general structural approach used to implement the system. Layered, Modular monolith, Event-driven, Microservices Architectural Decisions Establish rules and constraints that guide system construction. Data ownership, Communication mechanisms, Access rules, Security rules and regulations etc.

**Original slide number:** 11

### Visual Explanation

The slide contains a three-column comparison table. It maps each architectural dimension to its purpose and examples.

| Architectural dimension | Purpose | Examples |
|---|---|---|
| Quality Attributes (Architectural Characteristics) | Describe what the system must support and the conditions for success | Performance, scalability, security, availability |
| Logical Components | Divide behaviour into meaningful parts and assign responsibilities | Domains, services, workflows, business capabilities |
| Architectural Style | Define the general structural approach | Layered, modular monolith, event-driven, microservices |
| Architectural Decisions | Establish rules and constraints | Data ownership, communication mechanisms, access rules, security rules and regulations |

### Student-Friendly Explanation

The table shows that architecture is broader than a style label such as microservices. It also includes system qualities, responsibility allocation, and rules.

### Exam Tip

Use examples for each dimension in comparison questions.

### Common Mistake

Do not treat examples as definitions.

---

## Page 12 — Defining Software Architecture: Four Dimensions — Visual Model

### Original Slide Content

**DEFINING SOFTWARE ARCHITECTURE: FOUR**
**DIMENSIONS**

**Original slide number:** 12

### Visual Explanation

The diagram represents architecture as a structure bounded by four dimensions:

```text
                  Quality Attributes
          ←────────────────────────────→
          ┌────────────────────────────┐
Decisions │ [components across system] │ Architectural
    ↑     │ [components across system] │ Style
    │     │ [components across system] │     ↑
    ↓     │ [components across system] │     ↓
          └────────────────────────────┘
          ←────────────────────────────→
                Logical Components
```

The repeated component icons show that all four dimensions apply across the complete system, not to only one module.

### Student-Friendly Explanation

The model emphasizes that each dimension spans the entire architecture. A decision such as data ownership can affect many components and qualities.

### Exam Tip

Explain that the dimensions apply throughout the system.

### Common Mistake

Do not assume each dimension applies to only one part of the system.

---

## Page 13 — Four Dimensions of Software Architecture — How They Connect

### Original Slide Content

**FOUR DIMENSIONS OF SOFTWARE**
**ARCHITECTURE**
- How do the dimensions connect to produce a software architecture?
  - Understand the problem domain.
  - Identify the important Quality Attributes (Architectural Characteristics).
  - Identify the logical components required to implement system behaviour.
  - Select an architectural style that supports the required structure and qualities.
  - Establish architectural decisions that guide implementation.
- A style alone does not represent the complete architecture.

**Original slide number:** 13

### Visual Explanation

The page presents a step sequence showing how the four dimensions combine:

```text
Understand problem domain
        ↓
Identify important quality attributes
        ↓
Identify logical components
        ↓
Select an architectural style
        ↓
Establish architectural decisions
        ↓
Complete architecture
```

The lightbulb icon is decorative. The key message is that an architectural style alone is incomplete.

### Student-Friendly Explanation

Architecture begins with the problem and required qualities. Components, style, and decisions should follow from that understanding.

### Exam Tip

Remember the order from domain understanding to decisions.

### Common Mistake

Do not select style before understanding domain and qualities.

---

## Page 14 — A Relatable Example

### Original Slide Content

**A RELATABLE EXAMPLE**

**Original slide number:** 14

### Visual Explanation

The visual compares two two-storey houses: a well-built permanent house and a weak temporary structure. Both use the same broad architectural style, but their quality and decisions differ. Floor plans represent logical components; wiring and plumbing plans represent architectural decisions; safety and material quality represent quality attributes.

| House analogy | Software architecture equivalent |
|---|---|
| Two-storey house form | Architectural style |
| Rooms and spaces | Logical components |
| Safety, strength, flood resistance | Quality attributes |
| Wiring, plumbing, materials, construction rules | Architectural decisions |

**Why this matters:** Two systems can use the same style yet have very different quality, maintainability, safety, and suitability.

### Student-Friendly Explanation

The house analogy demonstrates why “we use microservices” or “we use layered architecture” is not a complete architecture description.

### Exam Tip

Use the house analogy to prove that architectural style alone is insufficient.

### Common Mistake

Same architectural style does not imply same quality.

---

## Page 15 — Architecture vs. Design

### Original Slide Content

**ARCHITECTURE VS. DESIGN**
- Architecture and design are not completely separate activities; they exist on a continuum.
- A decision becomes more architectural when it is,
  - Strategic rather than tactical
  - Difficult or expensive to change
  - Long-lasting
  - Relevant to several parts of the system
  - Associated with significant trade-offs
- Changing the Data Storage mechanism generally can be considered closer to an architectural decision.
- Detailed classes, algorithms and screen layouts are generally closer to design.

**Original slide number:** 15

### Visual Explanation

No diagram. The bullet list visually places architecture and design on a continuum and identifies the characteristics that make a decision more architectural.

### Student-Friendly Explanation

Architecture and design differ by degree rather than a strict boundary. Broad, strategic, expensive-to-change decisions are more architectural.

### Exam Tip

Keywords for architectural decisions: strategic, expensive to change, long-lasting, cross-cutting, trade-offs.

### Common Mistake

Do not claim every design decision is architectural.

---

## Page 16 — Architecture Depends on Context

### Original Slide Content

**ARCHITECTURE DEPENDS ON CONTEXT**
- Architectural decisions depend on many factors.
  - Business needs
  - Available technologies
  - Cost
  - Time
  - Development skills
  - Operational environment
  - Existing systems
  - Organizational constraints
- An architecture that is suitable for one system may be unsuitable for another.

**Original slide number:** 16

### Visual Explanation

A decorative lightbulb icon supports the key idea that architecture must fit context. The factors list acts as a context checklist.

### Student-Friendly Explanation

A good architecture is context-specific. A solution that succeeds in one organization may fail under different budget, skills, technology, or operational constraints.

### Exam Tip

Give at least four context factors and state that suitability is system-specific.

### Common Mistake

Do not copy architecture from another system without checking context.

---

## Page 17 — Architecture Is Based on Trade-Offs

### Original Slide Content

**ARCHITECTURE IS BASED ON TRADE-OFFS**
- Everything in software architecture is a trade-off.
- For example,
  - Greater security may reduce usability.
  - Greater consistency may reduce availability.
  - Greater flexibility may increase complexity.
  - Greater isolation may increase communication overhead.
  - Faster delivery may increase technical debt.
- There is no single best architecture for every system.
- Usually, what we end up with is the Least-worst architecture.

**Original slide number:** 17

### Visual Explanation

A decorative lightbulb accompanies a list of trade-offs. The slide's core visual relationship is:

```text
Improve one quality
       ↓
May weaken another quality or increase cost/complexity
       ↓
Select the least-worst balance for this system
```

### Student-Friendly Explanation

Architects balance competing qualities. The goal is not perfection but the most acceptable compromise for the system.

### Exam Tip

Include examples of trade-offs and the phrase “least-worst architecture.”

### Common Mistake

Do not promise maximization of every quality simultaneously.

---

## Page 18 — Does All Software Have an Architecture?

### Original Slide Content

**DOES ALL SOFTWARE HAVE AN ARCHITECTURE?**
- Yes!
- Any software system has,
  - Some form of structure
  - Elements with responsibilities
  - Relationships among those elements
  - Dependencies
  - Data flows
  - Rules, whether explicit or implicit
- The real question is whether the architecture has been consciously understood and managed.

**Original slide number:** 18

### Visual Explanation

A decorative question-mark icon reinforces the question. The page answers it with a list showing that every system has structure, elements, relationships, dependencies, data flows, and rules.

### Student-Friendly Explanation

Every implemented system necessarily has an architecture. The important distinction is whether that architecture is understood and managed.

### Exam Tip

Answer “Yes” first, then explain implicit or explicit structure.

### Common Mistake

Do not say unplanned software has no architecture.

---

## Page 19 — Intentional Architecture

### Original Slide Content

**INTENTIONAL ARCHITECTURE**
- Intentional architecture results from deliberate decisions.
  - Important Quality Attributes (Architectural Characteristics) are identified.
  - Responsibilities are assigned clearly.
  - Dependencies are controlled.
  - An appropriate structural approach is selected.
  - Important decisions are communicated.
  - The architecture is reviewed as the system changes.
- Note: Intentional architecture does not mean that every decision must be made at the beginning.

**Original slide number:** 19

### Visual Explanation

No major visual. The bullet list describes intentional architecture as continuous deliberate reasoning rather than one large up-front decision.

### Student-Friendly Explanation

Intentional architecture means significant decisions are made consciously, justified, communicated, and reviewed. It can still evolve incrementally.

### Exam Tip

Intentional architecture does not require every decision at the beginning.

### Common Mistake

Do not equate intentional architecture with complete Big Design Up Front.

---

## Page 20 — Accidental Architecture

### Original Slide Content

**ACCIDENTAL ARCHITECTURE**
- Accidental architecture emerges without sufficient architectural reasoning.
- It may result when teams,
- Begin coding without considering the overall structure
- Make isolated local decisions
- Add dependencies whenever they appear convenient
- Allow frameworks to determine the system structure
- Copy existing solutions without considering the context
- Delay important decisions until change becomes expensive
- Not planning the architecture does not produce a system without architecture.
- It produces an architecture that was not deliberately selected.

**Original slide number:** 20

### Visual Explanation

No major visual. The nested list shows how unrelated local decisions and uncontrolled dependencies produce accidental architecture.

### Student-Friendly Explanation

Accidental architecture develops when local convenience repeatedly overrides system-wide reasoning. The result may work initially but become hard to change.

### Exam Tip

Explain causes and consequences of accidental architecture.

### Common Mistake

Do not let frameworks automatically determine the architecture.

---

## Page 21 — Intentional vs Accidental Architecture

### Original Slide Content

**INTENTIONAL VS ACCIDENTAL ARCHITECTURE**
Approach How It Develops Key Characteristics Intentional Architecture Structure is considered deliberately.
-  Decisions are justified
-  Dependencies and boundaries are controlled
-  The architecture is reviewed as the system changes. Accidental Architecture Structure results from unrelated local decisions.
-  Dependencies grow without control
-  Decisions may not be documented or understood
-  Problems become visible only when the system is difficult to change.

**Original slide number:** 21

### Visual Explanation

The slide contains a two-row comparison table.

| Approach | How it develops | Key characteristics |
|---|---|---|
| Intentional Architecture | Structure is considered deliberately | Decisions justified; boundaries/dependencies controlled; architecture reviewed as system changes |
| Accidental Architecture | Structure results from unrelated local decisions | Dependencies grow without control; decisions may be undocumented; problems appear when change becomes difficult |

### Student-Friendly Explanation

The comparison focuses on control and understanding. Intentional architecture actively manages boundaries and decisions; accidental architecture allows them to emerge without coordination.

### Exam Tip

This comparison table is highly exam-relevant.

### Common Mistake

Do not compare intentional/accidental with plan-driven/Agile as if they are the same axis.

---

## Page 22 — Two Approaches to Intentional Architecture — Visual Comparison

### Original Slide Content

**TWO APPROACHES TO INTENTIONAL**
**ARCHITECTURE**
22 Source: https://www.excellisit.com/differentiating-plan-driven-development-vs-agile-development/

**Original slide number:** 22

### Visual Explanation

The image contrasts two development flows:

```text
Plan-Driven
Plan → Build → Test → Deploy
(mainly sequential)

Agile
Plan → Design → Develop → Test → Deploy → Review
                  ↖ iterative feedback ↙
```

The image is a process comparison, not a claim that only one approach can produce intentional architecture.

### Student-Friendly Explanation

Plan-driven and Agile approaches organize work differently, but both can produce intentional architecture when decisions are deliberate.

### Exam Tip

Do not equate Agile with no architecture.

### Common Mistake

Do not interpret the image as ‘plan-driven good, Agile bad’ or vice versa.

---

## Page 23 — Two Approaches to Intentional Architecture

### Original Slide Content

**TWO APPROACHES TO INTENTIONAL**
**ARCHITECTURE**
- Plan-driven approach
  - Most major architectural planning is performed up front.
  - E.g. Waterfall Methodology
- Agile approach
  - Initial architecture is established, and further planning is performed incrementally.
  - E.g. SCRUM
- Both approaches involve deliberate architectural decisions.

**Original slide number:** 23

### Visual Explanation

No additional diagram. The text explicitly states that both plan-driven and Agile approaches can involve deliberate architectural decisions.

### Student-Friendly Explanation

Up-front versus incremental planning is not the same as intentional versus accidental architecture.

### Exam Tip

Both approaches involve deliberate decisions.

### Common Mistake

Do not state that Agile decisions are accidental.

---

## Page 24 — Plan-Driven Intentional Architecture

### Original Slide Content

**TWO APPROACHES TO INTENTIONAL**
**ARCHITECTURE**
- In a Plan-driven approach,
  - Plan most of the architecture before implementation.
  - Requirements are studied early.
  - The overall structure is planned before most implementation begins.
  - Major components and interfaces are identified early.
  - Development follows the planned architecture.
  - Significant changes may require the architecture to be revised.
- Architecture is treated as an early foundation for development.

**Original slide number:** 24

### Visual Explanation

The bullet sequence describes architecture as an early foundation:

```text
Study requirements early
        ↓
Plan overall structure
        ↓
Identify components and interfaces
        ↓
Implement according to plan
        ↓
Revise architecture when major change occurs
```

### Student-Friendly Explanation

Plan-driven development invests heavily in early analysis and structure. This can improve predictability when requirements are stable but makes major change expensive.

### Exam Tip

Plan-driven architecture is an early foundation.

### Common Mistake

Do not assume the original plan never changes.

---

## Page 25 — Agile Intentional Architecture

### Original Slide Content

**TWO APPROACHES TO INTENTIONAL**
**ARCHITECTURE**
- In an Agile approach,
  - Establish enough architecture to begin and continue planning as the system develops.
  - Additional decisions are made as the system grows.
  - The architecture evolves through implementation and feedback.
  - Refactoring is used to improve the structure.
  - The development team participates in architectural decisions.
  - Important decisions are made when sufficient information becomes available.

**Original slide number:** 25

### Visual Explanation

The bullet sequence describes incremental architectural evolution:

```text
Establish enough architecture to begin
        ↓
Implement and obtain feedback
        ↓
Make additional decisions
        ↓
Refactor and improve structure
        ↓
Repeat as the system grows
```

### Student-Friendly Explanation

Agile architecture establishes a sufficient foundation, then learns through implementation and feedback. Refactoring is essential to prevent structural decay.

### Exam Tip

Agile architecture evolves through feedback and refactoring.

### Common Mistake

Do not postpone all architectural decisions until coding.

---

## Page 26 — Agile Intentional Architecture — Continued

### Original Slide Content

**TWO APPROACHES TO INTENTIONAL**
**ARCHITECTURE**
(Continued from Agile approach)
- Architecture is treated as a continuing activity.
  - An Agile architecture may emerge incrementally.
- However, this does not mean that it emerges without direction.
- Architecturally significant decisions must still be made deliberately.

**Original slide number:** 26

### Visual Explanation

No major visual. This continuation slide corrects a common misunderstanding: incremental emergence still requires direction and deliberate architecturally significant decisions.

### Student-Friendly Explanation

Agile emergence is guided. Significant decisions still require explicit reasoning rather than being left to chance.

### Exam Tip

Use the phrase “emerges incrementally but not without direction.”

### Common Mistake

Do not confuse emergence with lack of direction.

---

## Page 27 — What Drives Architecture?

### Original Slide Content

**WHAT DRIVES ARCHITECTURE?**
- Architecture does not begin with selecting an architectural style.
- It begins by understanding important queries such as,
  - What the organization is trying to achieve?
  - What the system must do?
  - Which constraints cannot be ignored?
  - Which trade-offs are acceptable?
- The architecture must be justified by the needs of the system and its environment.

**Original slide number:** 27

### Visual Explanation

The questions form an architecture-discovery flow:

```text
Business goal?
System behaviour?
Non-negotiable constraints?
Acceptable trade-offs?
        ↓
Justified architectural decisions
```

### Student-Friendly Explanation

Selecting a style too early is weak architecture practice. The architect must first understand goals, behaviour, constraints, and trade-offs.

### Exam Tip

Architecture begins with questions and drivers, not style selection.

### Common Mistake

Do not start with ‘choose microservices’ before understanding requirements.

---

## Page 28 — Business Drivers

### Original Slide Content

**BUSINESS DRIVERS**
- Business drivers are the business goals, pressures and constraints that determine the success of the system.
- Examples include:
  - Reducing time to market
  - Improving user satisfaction
  - Gaining a competitive advantage
  - Meeting a fixed deadline
  - Remaining within a limited budget
- Business drivers are normally expressed in business language.

**Original slide number:** 28

### Visual Explanation

No major visual. The examples are expressed in business language to contrast them with technical quality attributes.

### Student-Friendly Explanation

Business drivers describe why the organization is investing in the system and what outcomes define success.

### Exam Tip

Business drivers are written in business language.

### Common Mistake

Do not write technical qualities as business drivers without showing translation.

---

## Page 29 — Business Drivers to Quality Attributes

### Original Slide Content

**BUSINESS DRIVERS**
- Architects must translate business concerns into Quality Attributes (Architectural Characteristics).
- For example, “the company expects rapid growth” could mean Scalability, Elasticity, Availability, Deployability should be prioritized quality attributes.
- The architect must understand what the business wants and identify the technical qualities needed to support it.
- It is not practical to treat every Quality Attribute as equally important.
- Prioritizing Quality Attributes and identifying trade-offs are necessary.

**Original slide number:** 29

### Visual Explanation

The slide shows a translation from business concern to technical priorities:

```text
Business expectation: rapid growth
        ↓
Quality Attributes:
Scalability + Elasticity + Availability + Deployability
        ↓
Architecture choices and trade-offs
```

### Student-Friendly Explanation

Architects translate business language into measurable or testable technical qualities and then prioritize them.

### Exam Tip

Be able to translate a business driver into quality attributes.

### Common Mistake

Do not prioritize every quality equally.

---

## Page 30 — The Architecture Business Cycle — Influences

### Original Slide Content

**THE ARCHITECTURE BUSINESS CYCLE**
- Business drivers explain what the organization wants the system to achieve.
- However, architecture is also influenced by many factors including,
  - Stakeholders
  - The developing organization
  - Existing systems and assets
  - The architect’s experience
  - Available technologies and resources
  - Industry practices
  - Schedule and budget
- The Architecture Business Cycle provides a broader view of these influences.

**Original slide number:** 30

### Visual Explanation

No standalone diagram. The page broadens the influences beyond business drivers to stakeholders, organization, existing assets, architect experience, technologies, industry practices, schedule, and budget.

### Student-Friendly Explanation

Architecture is shaped by a network of technical, organizational, financial, historical, and human influences.

### Exam Tip

List influences beyond stakeholders: organization, assets, experience, technology, practices, schedule, budget.

### Common Mistake

Do not reduce the Architecture Business Cycle to business goals only.

---

## Page 31 — The Architecture Business Cycle — Stakeholder Concerns

### Original Slide Content

**THE ARCHITECTURE BUSINESS CYCLE**
Source: https://people.ece.ubc.ca/~matei/EECE417/BASS/ch01lev1sec1.html

**Original slide number:** 31

### Visual Explanation

The diagram places the architect below several stakeholders, each expressing different concerns:

- Developing organization management: low cost and keeping people employed.
- Marketing stakeholder: new features, short time to market, low cost, parity with competitors.
- End-user stakeholder: behaviour, performance, security, reliability, usability.
- Maintenance organization stakeholder: modifiability.
- Customer stakeholder: low cost, timely delivery, and not changing often.

The architect must reconcile conflicting concerns. The “Ohhhhh...” bubble illustrates the pressure created by competing stakeholder priorities.

### Student-Friendly Explanation

Different stakeholders define success differently. Architecture work includes negotiation and prioritization, not only technical design.

### Exam Tip

Explain how stakeholder concerns can conflict.

### Common Mistake

Do not assume stakeholders share the same priorities.

---

## Page 32 — The Architecture Business Cycle — Explanation

### Original Slide Content

**THE ARCHITECTURE BUSINESS CYCLE**
- The Architecture Business Cycle describes the relationship between architecture and its environment and how architecture itself influences that environment in return.
- Software architecture is influenced by factors such as,
  - Stakeholder concerns
  - Developing Organization
  - Technical Environment
  - Architect's Experience
- The resulting architecture and system then influence those environments in return.
- Further Reading: Refer this link.

**Original slide number:** 32

### Visual Explanation

The slide explains the feedback relationship:

```text
Environment influences architecture
Stakeholders + Organization + Technology + Architect experience
        ↓
Architecture and system
        ↓
Architecture/system influence the environment in return
```

### Student-Friendly Explanation

The Architecture Business Cycle treats architecture as part of an ongoing relationship with its environment.

### Exam Tip

The key word is reciprocal influence.

### Common Mistake

Do not describe influence as one-way.

---

## Page 33 — The Architecture Business Cycle — Feedback Model

### Original Slide Content

**THE ARCHITECTURE BUSINESS CYCLE**
Source: https://people.ece.ubc.ca/~matei/EECE417/BASS/ch01lev1sec1.html

**Original slide number:** 33

### Visual Explanation

The feedback-cycle diagram shows:

```text
Stakeholders ─┐
Organization ─┼─→ Requirements / Qualities
Technology ───┤             ↓
Experience ───┘          Architect
                              ↓
                         Architecture
                              ↓
                            System
                              ↓
          Feedback to stakeholders, organization,
             technical environment and experience
```

The curved arrows make the cycle explicit: architecture is both influenced by and influential upon its environment.

### Student-Friendly Explanation

The system changes the organization and future requirements, creating feedback that influences later architectural decisions.

### Exam Tip

Draw the feedback cycle if asked to explain the Architecture Business Cycle.

### Common Mistake

Do not omit feedback from architecture/system to environment.

---

## Page 34 — Summary

### Original Slide Content

**SUMMARY**
- Software becomes complex as functionality, elements, dependencies and quality expectations increase.
- Complexity must be managed through structure, boundaries, responsibilities and decisions.
- Software architecture consists of Quality Attributes (Architectural Characteristics), logical components, architectural style and architectural decisions.
- Every software system has an architecture.
- Architecture may be intentional or accidental.
- Intentional architecture may be developed largely up front or incrementally.
- Agile development does not remove the need for architecture.
- Business drivers are translated into Quality Attributes (Architectural Characteristics).
- The Architecture Business Cycle explains the wider influences to and from architecture.

**Original slide number:** 34

### Visual Explanation

No major visual. The page consolidates the lecture into nine summary bullets.

### Student-Friendly Explanation

The summary unifies the lecture: complexity creates the need for architecture; architecture has four dimensions; every system has architecture; deliberate evolution and business context matter.

### Exam Tip

Use this page as the final revision checklist.

### Common Mistake

Do not memorize isolated bullets without understanding the argument.

---

## Page 35 — References

### Original Slide Content

**REFERENCES**
- M. Richards and N. Ford, “Fundamentals of Software Architecture: A Modern Engineering Approach,” 2nd ed. Sebastopol, CA: O’Reilly Media, 2025.
- L. Bass, P. C. Clements, and R. Kazman, “Software Architecture in Practice,” 3rd ed. Boston, MA: Addison-Wesley Professional, 2012.

**Original slide number:** 35

### Visual Explanation

No major visual. The page lists the two principal academic references used by the lecture.

### Student-Friendly Explanation

The references provide the theoretical basis for the four-dimensional definition and the Architecture Business Cycle.

### Exam Tip

Reference names may be useful in theory-based answers: Richards & Ford; Bass, Clements & Kazman.

### Common Mistake

Do not cite sources that are not used or understood.

---

# Major Topic Exam Sections

## Major Topic 1 — Software, Complexity and the Need for Architecture

**Definition:** Software is a collection of programs, data, configuration, libraries, services, interfaces, and runtime elements that work together to support required tasks or activities.

**Simple meaning:** Software is the complete working system, not only its source code.

**Exam Tip:** Link complexity to increasing functionality, stakeholders, elements, dependencies, integrations, quality expectations, and change.

**Common Mistake:** Architecture organizes complexity; it does not eliminate it.

**Likely Question 1:** Why does software become complex?  
**Expected answer:** Because functionality, users, modules, services, dependencies, integrations, quality expectations, requirements, and technologies increase, and their interactions become difficult to manage.

**Likely Question 2:** How does architecture manage complexity?  
**Expected answer:** By defining parts, responsibilities, boundaries, dependencies, communication, qualities, and consistent rules.

## Major Topic 2 — Definition and Four Dimensions of Software Architecture

**Definition:** Software architecture describes the fundamental structure and important decisions of a software system through quality attributes, logical components, architectural style, and architectural decisions.

**Simple meaning:** Architecture explains what the main parts are, how they are organized, what qualities matter, and what rules guide construction.

**Exam Tip:** Name all four dimensions and provide an example for each.

**Common Mistake:** An architectural style such as microservices is only one dimension, not the complete architecture.

**Likely Question 1:** Explain the four dimensions of software architecture.  
**Expected answer:** Quality attributes define success qualities; logical components allocate behaviour and responsibilities; style defines the overall arrangement; decisions establish rules and constraints.

**Likely Question 2:** How do the dimensions connect?  
**Expected answer:** Understand the domain, identify qualities, identify components, select a supporting style, and establish implementation-guiding decisions.

## Major Topic 3 — Architecture, Design, Context and Trade-Offs

**Definition:** An architectural decision is a strategic, long-lasting, cross-cutting decision that is difficult or expensive to change and involves significant trade-offs.

**Simple meaning:** A major system decision with wide and lasting consequences.

**Exam Tip:** Use the “least-worst architecture” idea to explain that no architecture maximizes every quality.

**Common Mistake:** Detailed classes and screen layouts are usually design decisions, while data-storage mechanisms and system-wide dependency rules are closer to architecture.

**Likely Question 1:** Distinguish architecture from design.  
**Expected answer:** They form a continuum; architecture is more strategic, long-lasting, cross-cutting, costly to change, and trade-off heavy, while design is usually more local and tactical.

**Likely Question 2:** Why does architecture depend on context?  
**Expected answer:** Because business needs, technologies, cost, time, skills, operational environment, existing systems, and organizational constraints differ.

## Major Topic 4 — Intentional and Accidental Architecture

**Definition:** Intentional architecture results from deliberate, justified, communicated, and reviewed decisions.

**Simple meaning:** The structure is chosen and managed consciously.

**Definition:** Accidental architecture emerges from unrelated local decisions without sufficient architectural reasoning.

**Simple meaning:** The structure happens by convenience instead of deliberate selection.

**Exam Tip:** Every system has architecture; the real issue is whether it is understood and managed.

**Common Mistake:** Not planning architecture does not create an architecture-free system.

**Likely Question 1:** Compare intentional and accidental architecture.  
**Expected answer:** Intentional architecture controls decisions, boundaries, and dependencies and is reviewed; accidental architecture develops through disconnected local decisions and uncontrolled dependencies.

**Likely Question 2:** Does intentional architecture require every decision up front?  
**Expected answer:** No. Important decisions can be made incrementally as long as they are deliberate and guided.

## Major Topic 5 — Plan-Driven and Agile Intentional Architecture

**Definition:** Plan-driven architecture performs most major architectural planning before implementation.

**Simple meaning:** Plan the foundation early.

**Definition:** Agile architecture establishes enough initial structure and evolves it through implementation, feedback, refactoring, and deliberate later decisions.

**Simple meaning:** Start with a sufficient foundation and improve it continuously.

**Exam Tip:** Both approaches can be intentional.

**Common Mistake:** Agile does not mean no architecture or accidental architecture.

**Likely Question 1:** Compare plan-driven and Agile architecture.  
**Expected answer:** Plan-driven plans most structure early; Agile establishes enough architecture to start and evolves it through feedback and refactoring.

**Likely Question 2:** How does Agile architecture avoid accidental structure?  
**Expected answer:** Through deliberate significant decisions, team participation, continuous review, feedback, and refactoring.

## Major Topic 6 — Business Drivers and Quality Attributes

**Definition:** Business drivers are business goals, pressures, and constraints that determine system success.

**Simple meaning:** The organization's reasons and limits for building the system.

**Exam Tip:** Show translation from business language to technical quality attributes.

**Common Mistake:** Do not prioritize every quality equally.

**Likely Question 1:** Translate “the company expects rapid growth” into quality attributes.  
**Expected answer:** Prioritize scalability, elasticity, availability, and deployability.

**Likely Question 2:** Why are trade-offs required when prioritizing quality attributes?  
**Expected answer:** Qualities compete for cost, time, complexity, and operational resources, so not all can be maximized.

## Major Topic 7 — Architecture Business Cycle

**Definition:** The Architecture Business Cycle describes how architecture is influenced by stakeholders, the developing organization, the technical environment, and architect experience, and how the resulting architecture and system influence those environments in return.

**Simple meaning:** Architecture and its environment continuously affect each other.

**Exam Tip:** Draw a feedback loop, not a one-way process.

**Common Mistake:** Do not reduce the cycle to stakeholders giving requirements to an architect.

**Likely Question 1:** What factors influence architecture in the Architecture Business Cycle?  
**Expected answer:** Stakeholder concerns, developing organization, technical environment, architect experience, existing assets, technologies, resources, industry practice, schedule, and budget.

**Likely Question 2:** Why is it a cycle?  
**Expected answer:** The environment shapes architecture, while the implemented architecture and system change stakeholders, organization, technology, and future experience.

---

# Full Lecture Summary

Software enables computing systems to perform tasks, but a software system is broader than source code. It includes data, configuration, frameworks, external services, interfaces, and deployment environments. As functionality, stakeholders, components, dependencies, integrations, quality expectations, and change increase, software becomes complex. Architecture manages that complexity by defining meaningful parts, responsibilities, boundaries, dependencies, communication, qualities, and consistent decisions.

The lecture defines software architecture through four dimensions from Richards and Ford: Quality Attributes or Architectural Characteristics, Logical Components, Architectural Style, and Architectural Decisions. These dimensions apply across the system. Architecture begins with the problem domain and important qualities, then identifies components, selects a suitable style, and establishes rules and constraints. Architectural style alone is not a complete architecture.

Architecture and design exist on a continuum. Decisions become more architectural when they are strategic, long-lasting, difficult or expensive to change, relevant across the system, and associated with significant trade-offs. Architecture is context-dependent, and every quality improvement may introduce a cost or weaken another quality. Therefore, architects normally seek the least-worst balance rather than a universally perfect architecture.

Every software system has an architecture. Intentional architecture results from deliberate reasoning, controlled dependencies, communication, and review. Accidental architecture emerges from disconnected local decisions and uncontrolled dependencies. Intentional architecture can be developed through a plan-driven approach with substantial early planning or through an Agile approach with an initial foundation and incremental evolution. Agile does not remove the need for deliberate architectural decisions.

Architecture starts from business goals, system behaviour, constraints, and acceptable trade-offs rather than style selection. Business drivers such as time to market, user satisfaction, competitive advantage, deadlines, and budget must be translated into prioritized Quality Attributes. The Architecture Business Cycle broadens this view by showing that stakeholders, organization, technical environment, architect experience, resources, and existing assets influence architecture, while the resulting architecture and system influence those environments in return.

# Important Formulas and Code Snippets

No programming code or mathematical formulas appear in this lecture.

## Important Conceptual Flows

```text
Problem Domain → Quality Attributes → Logical Components
→ Architectural Style → Architectural Decisions
```

```text
Business Drivers → Prioritized Quality Attributes
→ Architectural Trade-Offs → Architecture
```

```text
Environment → Architect → Architecture → System
      ↑                                  ↓
      └────────────── Feedback ──────────┘
```

# Key Definitions Table

| Term | Definition | Simple meaning |
|---|---|---|
| Software | Programs, data, configuration, services, interfaces, and runtime elements working as a system | More than source code |
| Software architecture | Fundamental structure and important decisions of a software system | The system's high-level structure and rules |
| Quality Attribute | A capability or quality required for system success | How well the system must work |
| Logical Component | A meaningful part that implements system behaviour and owns responsibilities | A major responsibility area |
| Architectural Style | General structural arrangement of the system | The broad organization pattern |
| Architectural Decision | Rule or constraint guiding construction | A major implementation rule |
| Architectural Trade-Off | A balance where improving one concern may weaken another or increase cost | No quality improvement is free |
| Intentional Architecture | Deliberately selected and managed architecture | Planned with reasoning |
| Accidental Architecture | Architecture emerging without sufficient system-wide reasoning | Structure created by convenience |
| Plan-Driven Architecture | Architecture mostly planned before implementation | Design the foundation early |
| Agile Architecture | Architecture evolved incrementally through feedback and refactoring | Build and improve deliberately |
| Business Driver | Business goal, pressure, or constraint defining success | Why the organization needs the system |
| Architecture Business Cycle | Reciprocal influence between architecture and its environment | Architecture and context affect each other |

# Quick Revision Table

| Topic | Must Remember | Pages | Exam Importance |
|---|---|---:|---|
| Software beyond code | Code, data, config, frameworks, services, interfaces, runtime | 4–5 | Medium |
| Complexity | Elements plus interactions/dependencies | 6–8 | High |
| Four dimensions | Qualities, components, style, decisions | 9–13 | Very High |
| House analogy | Same style can have different quality and decisions | 14 | High |
| Architecture vs design | Strategic, costly, cross-cutting, long-lasting | 15 | High |
| Context and trade-offs | No universal best; least-worst balance | 16–17 | Very High |
| Every system has architecture | Intentional or accidental | 18–21 | Very High |
| Plan-driven vs Agile | Both can be intentional | 22–26 | Very High |
| Drivers | Start with goals, constraints, trade-offs | 27–29 | High |
| Architecture Business Cycle | Reciprocal environment-architecture influence | 30–33 | Very High |

# Likely Exam Questions

1. **Define software architecture using the four dimensions.**  
   **Expected answer:** Software architecture describes the system's fundamental structure and important decisions through quality attributes, logical components, architectural style, and architectural decisions.
2. **Why does software architecture not remove complexity?**  
   **Expected answer:** Complexity remains, but architecture organizes it through parts, responsibilities, boundaries, dependency controls, communication, and consistent rules.
3. **Explain the house analogy.**  
   **Expected answer:** The same high-level style can produce systems with different qualities, components, and decisions; therefore style alone is incomplete.
4. **Differentiate intentional and accidental architecture.**  
   **Expected answer:** Intentional architecture is deliberate, justified, controlled, documented, and reviewed; accidental architecture arises from disconnected local decisions and uncontrolled dependencies.
5. **Compare plan-driven and Agile intentional architecture.**  
   **Expected answer:** Plan-driven performs most planning up front; Agile creates enough foundation to start and evolves architecture incrementally using feedback and refactoring.
6. **What is meant by least-worst architecture?**  
   **Expected answer:** The most acceptable balance of competing qualities and constraints for a particular system, because no architecture is best in every dimension.
7. **How are business drivers connected to quality attributes?**  
   **Expected answer:** Architects translate business goals and pressures into prioritized technical qualities that guide architectural decisions.
8. **Explain the Architecture Business Cycle.**  
   **Expected answer:** Stakeholders, organization, technology, and architect experience influence architecture, while the resulting architecture and system feed back and influence those environments.

# Key Terms List

- Software system
- Software complexity
- Decomposition
- Responsibility
- Boundary
- Dependency
- Software architecture
- Architectural characteristic
- Quality attribute
- Logical component
- Architectural style
- Architectural decision
- Layered architecture
- Modular monolith
- Event-driven architecture
- Microservices
- Architecture vs design
- Context
- Trade-off
- Least-worst architecture
- Intentional architecture
- Accidental architecture
- Plan-driven development
- Waterfall
- Agile development
- Scrum
- Incremental architecture
- Refactoring
- Architecturally significant decision
- Business driver
- Scalability
- Elasticity
- Availability
- Deployability
- Stakeholder concern
- Developing organization
- Technical environment
- Architect experience
- Architecture Business Cycle

# Verification

- PDF page count checked directly: 35
- Markdown page sections checked: 35
- Exact slide order preserved from Page 01 through Page 35.
- Source text captured from every page.
- Visual pages reconstructed with Markdown tables, flows, or tagged ASCII diagrams.
- All PDF tables recreated in Markdown.
- No untagged fenced code blocks used.

PDF pages: 35 / MD page sections: 35 ✅
