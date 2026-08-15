# ABD - Lecture 03 - Architectural Thinking

## Lecture Metadata

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module Code | SE3100 |
| Module Name | Architecture Based Development |
| Lecture | Lecture 03 |
| Title | Architectural Thinking |
| Lecturer | Vishan Jayasinghearachchi |
| Lecturer Email | vishan.j@sliit.lk |
| Total PDF Pages | 43 |

> **Source note:** The PDF is the primary source of truth. Sections labelled **Original Page Content** preserve the lecture content. Sections labelled **Supplementary Explanation** are added only to improve understanding and exam revision.

---

<a id="table-of-contents"></a>
# Table of Contents

## PDF Pages

1. [Page 01 — Architectural Thinking](#page-01)
2. [Page 02 — Learning Outcomes](#page-02)
3. [Page 03 — Contents](#page-03)
4. [Page 04 — Complexity in Software Systems](#page-04)
5. [Page 05 — Modularity as an Organizing Principle](#page-05)
6. [Page 06 — Modularity as an Organizing Principle](#page-06)
7. [Page 07 — Cohesion, Coupling and Connascence](#page-07)
8. [Page 08 — Cohesion](#page-08)
9. [Page 09 — Coupling](#page-09)
10. [Page 10 — Connascence](#page-10)
11. [Page 11 — Static Connascence](#page-11)
12. [Page 12 — Dynamic Connascence](#page-12)
13. [Page 13 — Static vs. Dynamic Connascence](#page-13)
14. [Page 14 — Properties of Connascence](#page-14)
15. [Page 15 — Strength of Connascence](#page-15)
16. [Page 16 — Locality of Connascence](#page-16)
17. [Page 17 — Managing Degree of Connascence](#page-17)
18. [Page 18 — Creating Good Modules](#page-18)
19. [Page 19 — Architecture Partitioning](#page-19)
20. [Page 20 — Technical Partitioning](#page-20)
21. [Page 21 — Technical Partitioning: Advantages and Trade-off](#page-21)
22. [Page 22 — Domain Partitioning](#page-22)
23. [Page 23 — Domain Partitioning Diagram](#page-23)
24. [Page 24 — Domain vs. Technical Partitioning](#page-24)
25. [Page 25 — Scope of Quality Attributes](#page-25)
26. [Page 26 — Scope of Quality Attributes: Different Areas](#page-26)
27. [Page 27 — System-wide vs. Scoped Quality Attributes](#page-27)
28. [Page 28 — Architectural Quantum](#page-28)
29. [Page 29 — Architectural Quantum Characteristics](#page-29)
30. [Page 30 — Architectural Quantum and Dependencies](#page-30)
31. [Page 31 — Architectural Quantum and Cohesion](#page-31)
32. [Page 32 — Architectural Quantum and Static Coupling](#page-32)
33. [Page 33 — Architectural Quantum and Dynamic Coupling](#page-33)
34. [Page 34 — Determining Architectural Quanta](#page-34)
35. [Page 35 — Determining Architectural Quanta from Requirements](#page-35)
36. [Page 36 — Monolithic vs. Distributed Architecture](#page-36)
37. [Page 37 — Monolithic Architecture](#page-37)
38. [Page 38 — Distributed Architecture](#page-38)
39. [Page 39 — Fallacies of Distributed Computing](#page-39)
40. [Page 40 — Monolith vs. Distributed Architecture Decision](#page-40)
41. [Page 41 — Required Reading](#page-41)
42. [Page 42 — Summary](#page-42)
43. [Page 43 — References](#page-43)

## Revision Sections

- [Important Diagrams](#important-diagrams)
- [Key Definitions](#key-definitions)
- [Important Code Snippets / Formulas](#important-code)
- [Quick Revision Notes](#quick-revision)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms](#key-terms)
- [Full Lecture Summary](#full-lecture-summary)
- [Verification](#verification)

---

<a id="page-01"></a>
## Page 01 — ARCHITECTURAL THINKING

### Original Page Content

**ARCHITECTURAL THINKING**

**SE3100 - Architecture Based Development**

Vishan Jayasinghearachchi  
Lecturer - Department of Software Engineering,  
Faculty of Computing,  
Sri Lanka Institute of Information Technology.  
vishan.j@sliit.lk

### Visual Explanation

This is the lecture cover page. It presents the lecture title, module code and name, lecturer, department, faculty, institution, and lecturer email. No major conceptual diagram is present.

### Supplementary Explanation

This lecture focuses on how a software architect reasons about software structure: how to form modules, how to judge dependencies, how to partition a system, and how Quality Attribute requirements influence whether a system should remain monolithic or be distributed.

### Exam Tip

Remember the lecture's main progression:

```text
Complexity
   ↓
Modularity
   ↓
Cohesion / Coupling / Connascence
   ↓
Architecture Partitioning
   ↓
Quality Attribute Scope
   ↓
Architectural Quanta
   ↓
Monolithic vs. Distributed Decision
```

### Common Mistake

Do not treat the lecture as only a comparison between monoliths and microservices. The earlier concepts are used to reason toward that architectural decision.

### Likely Exam Questions

1. **What is the main subject of this lecture?**  
   **Expected answer:** Architectural thinking for organizing modules, managing dependencies, partitioning architectures, scoping Quality Attributes, identifying architectural quanta, and choosing between monolithic and distributed architectures.

---

<a id="page-02"></a>
## Page 02 — LEARNING OUTCOMES

### Original Page Content

After completing this lecture, you will be able to,

- Explain modularity, cohesion, coupling, and connascence.
- Compare technical and domain partitioning.
- Explain how Quality Attribute scope relates to architectural quanta.
- Relate architectural quanta to monolithic and distributed architectures.

### Visual Explanation

No major visual content. The page lists four learning outcomes.

### Supplementary Explanation

The outcomes show the expected exam-level progression: define the core modularity concepts, compare partitioning approaches, connect Quality Attributes to architectural boundaries, and then use those boundaries to reason about deployment style.

### Exam Tip

These four learning outcomes are strong candidates for short-answer or structured essay questions.

### Common Mistake

Do not memorize each concept independently. The lecture links them together as one reasoning chain.

### Likely Exam Questions

1. **List the four main learning outcomes of the lecture.**  
   **Expected answer:** Explain modularity/cohesion/coupling/connascence; compare technical/domain partitioning; explain QA scope and architectural quanta; relate quanta to monolithic/distributed architectures.

---

<a id="page-03"></a>
## Page 03 — CONTENTS

### Original Page Content

- Complexity in Software Systems
- Modularity as an organizing principle
- Cohesion, Coupling and Connascence
- Architecture Partitioning
- Scope of Quality Attributes
- Architectural Quanta
- Deciding between Monolithic vs. Distributed Architecture
- Summary

### Visual Explanation

No major visual content. This page gives the lecture sequence.

### Supplementary Explanation

The order matters because the lecture builds architectural decisions from smaller structural ideas. Complexity creates the need for modularity; modularity is evaluated through cohesion and coupling; partitioning creates architectural boundaries; Quality Attribute scope helps determine architectural quanta; quanta help determine deployment style.

### Exam Tip

Use this page as your revision checklist. If you can explain every item and the link between adjacent items, you understand the lecture structure.

### Common Mistake

Do not skip the concepts of Quality Attribute scope and architectural quanta; they are the bridge to the final monolithic-vs-distributed decision.

### Likely Exam Questions

1. **What are the major topics covered in Architectural Thinking?**  
   **Expected answer:** The eight topics listed above.

---

<a id="page-04"></a>
## Page 04 — COMPLEXITY IN SOFTWARE SYSTEMS

### Original Page Content

- Software systems become increasingly difficult to understand and change as they grow.
- Without deliberate structure,
  - Responsibilities become mixed together.
  - Dependencies spread across the system.
  - Changes produce unexpected side effects.
  - Reuse and replacement become difficult.
  - The system gradually loses structural clarity.
- Software does not remain well structured by accident.
- **Architecture must impose and preserve organization.**

### Visual Explanation

A small lightbulb character appears as a decorative visual emphasizing the idea or insight on the slide. It does not add technical information beyond the text.

### Supplementary Explanation

The central point is that growth naturally increases structural complexity. If responsibilities and dependencies are not deliberately organized, a change in one area may unexpectedly affect many others. Architecture is therefore an active discipline for creating and maintaining useful boundaries.

### Definition

**Definition:** Software complexity in this context is the increasing difficulty of understanding, changing, and controlling a growing system when structure and dependencies are not deliberately managed.

**Simple meaning:** As software gets bigger, it becomes harder to know what belongs where and what will break when something changes.

### Exam Tip

Important keywords: **mixed responsibilities**, **spread dependencies**, **unexpected side effects**, **reuse/replacement difficulty**, **structural clarity**, **architecture preserves organization**.

### Common Mistake

Do not say complexity is caused only by the number of lines of code. The page focuses on structure, responsibilities, dependencies, and side effects.

### Likely Exam Questions

1. **Why must architecture impose and preserve organization?**  
   **Expected answer:** Because growing systems become difficult to understand and change; without deliberate structure, responsibilities mix, dependencies spread, side effects increase, and structural clarity is lost.

2. **Give three effects of poor software structure.**  
   **Expected answer:** Any three from mixed responsibilities, spreading dependencies, unexpected side effects, difficult reuse/replacement, and loss of structural clarity.

---

<a id="page-05"></a>
## Page 05 — MODULARITY AS AN ORGANIZING PRINCIPLE

### Original Page Content

- Modularity provides a way to control the complexity of a software system, by providing a way of organizing the system.
- Instead of treating the system as one indivisible whole, it is considered to be composed of many parts which are called **modules**.
- Richards & Ford use **modularity** to describe a logical grouping of related code.
- A module may contain,
  - Classes
  - Functions
  - Other related implementation elements

### Visual Explanation

A lightbulb character is shown as a decorative visual. The conceptual content is in the bullet points.

### Supplementary Explanation

Modularity reduces the mental size of a system. Instead of reasoning about the entire codebase at once, architects and developers can reason about smaller logical groups that contain related implementation elements.

### Definition

**Definition:** Modularity is the logical grouping of related code into modules.

**Simple meaning:** Break a large system into meaningful parts that belong together.

**Example from the slide's wording:** A module may group related classes, functions, and other implementation elements.

### Exam Tip

A short-answer definition should contain the phrase **logical grouping of related code**.

### Common Mistake

Do not define a module only as a class or file. The slide says a module can contain classes, functions, and other related implementation elements.

### Likely Exam Questions

1. **Define modularity.**  
   **Expected answer:** A way of organizing a system by logically grouping related code into modules.

2. **What can a module contain?**  
   **Expected answer:** Classes, functions, and other related implementation elements.

---

<a id="page-06"></a>
## Page 06 — MODULARITY AS AN ORGANIZING PRINCIPLE

### Original Page Content

- Architects primarily reason at the level of components which are implemented modules.
- This allows architects to reason about,
  - What belongs together
  - What should be separated
  - How different parts depend on each other
  - Where changes should be contained

### Visual Explanation

The slide contains a pile of colored interlocking building blocks. The visual represents a software system constructed from many smaller pieces. Each piece can be understood as a module/component, while the way the pieces connect suggests dependency relationships.

```text
Software System
├── Module / Component A
├── Module / Component B
├── Module / Component C
└── ...

Architectural questions:
- Which parts belong together?
- Which parts should be separated?
- How do parts depend on one another?
- Where should change be contained?
```

### Supplementary Explanation

Architectural thinking occurs at a coarser level than individual statements. By treating implemented modules as components, the architect can reason about boundaries and dependency direction rather than every implementation detail.

### Exam Tip

The four questions on this page are a useful checklist for evaluating a proposed module boundary.

### Common Mistake

Do not interpret modularity as simply creating many small parts. The key is deciding meaningful grouping, separation, dependency, and change containment.

### Likely Exam Questions

1. **What questions does modularity allow architects to reason about?**  
   **Expected answer:** What belongs together, what should be separated, how parts depend on each other, and where changes should be contained.

---

<a id="page-07"></a>
## Page 07 — COHESION, COUPLING AND CONNASCENCE

### Original Page Content

- There are three important concepts for understanding modularity.
- **Cohesion**
  - How closely related the elements inside a module are.
- **Coupling**
  - How dependent software elements are on other software elements.
- **Connascence**
  - How changing one component require changing others for the correctness of the system.
  - It's a more precise way of describing different forms of coupling.

### Visual Explanation

A lightbulb character appears as a decorative element. The key conceptual visual is the three-part relationship between cohesion, coupling, and connascence.

| Concept | Focus |
|---|---|
| Cohesion | Relationships **inside** a module |
| Coupling | Dependencies **between** software elements |
| Connascence | Whether a change in one element requires another to change for correctness |

### Supplementary Explanation

These three concepts evaluate whether module boundaries are sensible. Strong internal relatedness is desirable, while uncontrolled dependencies across boundaries make change more difficult.

### Definitions

**Definition — Cohesion:** How closely related the elements inside a module are.  
**Simple meaning:** Do the things inside this module naturally belong together?

**Definition — Coupling:** How dependent software elements are on other software elements.  
**Simple meaning:** How much does one part depend on another?

**Definition — Connascence:** A condition where changing one component requires changing another to maintain overall system correctness.  
**Simple meaning:** If one changes, what else must change so the system still works correctly?

### Exam Tip

A common exam comparison is **cohesion vs. coupling**. State clearly: cohesion is internal relatedness; coupling is dependency between elements/modules. Connascence gives a more precise vocabulary for coupling.

### Common Mistake

Do not treat coupling and connascence as completely unrelated. The lecture explicitly presents connascence as a more precise way of describing different forms of coupling.

### Likely Exam Questions

1. **Differentiate cohesion, coupling, and connascence.**  
   **Expected answer:** Cohesion measures relatedness inside a module; coupling measures dependency between software elements; connascence describes cases where changing one element requires changing another for correctness.

---

<a id="page-08"></a>
## Page 08 — COHESION

### Original Page Content

- **Cohesion** refers to how closely the parts of a module belong together.
- A highly cohesive module,
  - Contains strongly related behaviour.
  - Represents a meaningful purpose.
  - Contains the elements necessary to perform that purpose.
- Dividing something that is naturally cohesive may introduce additional coupling between the resulting modules (**Modularity Versus Granularity**).
- The architectural goal is generally to create modules containing elements that meaningfully belong together.

### Visual Explanation

No major visual content.

### Supplementary Explanation

High cohesion means a module has a clear purpose and contains the behavior needed for that purpose. Splitting a naturally cohesive area too aggressively can be counterproductive because the new modules may then need many dependencies between them.

### Definition

**Definition:** Cohesion is how closely the parts of a module belong together.

**Simple meaning:** A cohesive module contains things that serve the same meaningful purpose.

### Exam Tip

Memorize the three properties of a highly cohesive module: **strongly related behaviour**, **meaningful purpose**, and **necessary elements for that purpose**.

### Common Mistake

Do not assume "more modules" always means "better modularity." The slide explicitly warns that dividing something naturally cohesive can create extra coupling.

### Likely Exam Questions

1. **What characterizes a highly cohesive module?**  
   **Expected answer:** It contains strongly related behaviour, represents a meaningful purpose, and contains the elements necessary to perform that purpose.

2. **Why can excessive splitting be harmful?**  
   **Expected answer:** Splitting naturally cohesive functionality may introduce additional coupling between the resulting modules.

---

<a id="page-09"></a>
## Page 09 — COUPLING

### Original Page Content

- **Coupling** concerns dependencies between software elements.
- **Afferent Coupling**
  - Incoming connections to a software artifact.
- **Efferent Coupling**
  - Outgoing connections from a software artifact.
- Coupling helps us understand how changes can propagate through a system.

### Visual Explanation

No major visual content. The incoming/outgoing distinction can be represented as follows:

```text
Other Elements ─────► [Software Artifact] ─────► Other Elements
          Afferent Coupling        Efferent Coupling
          (incoming)               (outgoing)
```

### Supplementary Explanation

Afferent coupling asks who depends on the artifact. Efferent coupling asks what the artifact itself depends on. Both help evaluate the possible propagation of change.

### Definitions

**Definition — Coupling:** Dependencies between software elements.  
**Simple meaning:** How connected and dependent different parts of software are.

**Definition — Afferent Coupling:** Incoming connections to a software artifact.  
**Simple meaning:** Other parts depend on this artifact.

**Definition — Efferent Coupling:** Outgoing connections from a software artifact.  
**Simple meaning:** This artifact depends on other parts.

### Exam Tip

Memory trick: **Afferent = Arrives**, **Efferent = Exits**.

### Common Mistake

Do not reverse afferent and efferent coupling.

### Likely Exam Questions

1. **Differentiate afferent and efferent coupling.**  
   **Expected answer:** Afferent coupling is incoming connections to an artifact; efferent coupling is outgoing connections from it.

2. **Why is coupling important?**  
   **Expected answer:** It helps us understand how changes can propagate through a system.

---

<a id="page-10"></a>
## Page 10 — CONNASCENCE

### Original Page Content

- Connascence provides a more precise vocabulary for describing coupling.
- Two components are connascent when,
  - **A change in one requires the other to be modified to maintain the overall correctness of the system.**
- Connascence can be divided into,
  - Static Connascence
  - Dynamic Connascence

### Visual Explanation

No major visual content. The relationship can be represented as:

```text
Component A changes
       │
       ▼
Component B must also change
       │
       ▼
Overall system remains correct
```

### Supplementary Explanation

Connascence is useful because not all dependencies are the same. It classifies the specific kind of agreement or runtime relationship that forces components to change together.

### Definition

**Definition:** Two components are connascent when a change in one requires the other to be modified to maintain overall system correctness.

**Simple meaning:** The components are linked strongly enough that one cannot change safely without considering the other.

### Exam Tip

The exact phrase **"a change in one requires the other to be modified"** is central to the definition.

### Common Mistake

Do not define connascence merely as "components communicate." Communication alone does not express the change requirement in the definition.

### Likely Exam Questions

1. **Define connascence and name its two categories.**  
   **Expected answer:** Connascence occurs when a change in one component requires another to change for overall correctness; categories are static and dynamic connascence.

---

<a id="page-11"></a>
## Page 11 — STATIC CONNASCENCE

### Original Page Content

- Static connascence represents coupling that can be identified from the source code.
- Static connascence types include,
  - Connascence of Name
  - Connascence of Type
  - Connascence of Meaning
  - Connascence of Position
  - Connascence of Algorithm
- These represent different things that software elements must agree upon.

### Visual Explanation

No major visual content.

### Supplementary Explanation

The distinguishing feature is detectability from code without needing runtime behavior. The listed types identify different agreements that source-code elements must share.

### Definition

**Definition:** Static connascence is coupling that can be identified from the source code.

**Simple meaning:** You can find the dependency by analyzing the code structure itself.

### Exam Tip

Memorize the five static types: **Name, Type, Meaning, Position, Algorithm**.

### Common Mistake

Do not include Execution, Timing, Values, or Identity in the static list; those are dynamic types on the next page.

### Likely Exam Questions

1. **List the types of static connascence.**  
   **Expected answer:** Name, Type, Meaning, Position, and Algorithm.

---

<a id="page-12"></a>
## Page 12 — DYNAMIC CONNASCENCE

### Original Page Content

- Dynamic connascence concerns coupling that occurs during execution.
- Dynamic connascence types include,
  - Connascence of Execution
  - Connascence of Timing
  - Connascence of Values
  - Connascence of Identity
- These dependencies arise from how software elements interact at runtime.

### Visual Explanation

No major visual content.

### Supplementary Explanation

Dynamic connascence cannot be fully understood only by looking at static source structure because the dependency comes from execution behavior and runtime interactions.

### Definition

**Definition:** Dynamic connascence is coupling that occurs during execution.

**Simple meaning:** The dependency becomes important because of how components behave and interact while the system is running.

### Exam Tip

Memorize the four dynamic types: **Execution, Timing, Values, Identity**.

### Common Mistake

Do not classify dynamic connascence by file or class structure; the slide explicitly ties it to runtime behavior.

### Likely Exam Questions

1. **List the types of dynamic connascence.**  
   **Expected answer:** Execution, Timing, Values, and Identity.

---

<a id="page-13"></a>
## Page 13 — STATIC VS. DYNAMIC CONNASCENCE

### Original Page Content

| Static Connascence | Dynamic Connascence |
|---|---|
| Source-code level | Runtime |
| Can be identified through code analysis | Depends on execution behaviour |
| Generally easier to detect and refactor | Generally harder to manage |
| Preferred over stronger dynamic forms | Can create significant runtime dependencies |

**Note:** where possible, weaker and more manageable forms of connascence are preferable.

### Visual Explanation

The slide is primarily a comparison table. It contrasts where the dependency appears, how it can be identified, how manageable it is, and the architectural preference.

### Supplementary Explanation

Static forms are generally more visible and easier to refactor because they can be identified in code. Dynamic forms depend on runtime behavior and can create stronger operational dependencies.

### Exam Tip

A comparison question is likely. Use four comparison dimensions: **level**, **detection**, **manageability**, and **preference/impact**.

### Common Mistake

Do not say every static form is always "good" or every dynamic form is always "bad." The slide says weaker and more manageable forms are preferable where possible.

### Likely Exam Questions

1. **Compare static and dynamic connascence.**  
   **Expected answer:** Static is source-code level, detectable through code analysis, generally easier to refactor, and preferred over stronger dynamic forms; dynamic occurs at runtime, depends on execution behavior, is harder to manage, and can create significant runtime dependencies.

---

<a id="page-14"></a>
## Page 14 — PROPERTIES OF CONNASCENCE

### Original Page Content

- **Strength**
  - How easy is the coupling is to refactor.
- **Locality**
  - How close the connascent elements are to each other.
- **Degree**
  - How many elements are affected by the dependency.
- These properties help determine whether coupling is acceptable within a particular architectural boundary.

### Visual Explanation

No major visual content.

### Supplementary Explanation

The three properties provide a way to judge a dependency rather than treating all connascence equally. A dependency's acceptability changes depending on its strength, how far it crosses boundaries, and how many elements participate in it.

### Definitions

**Definition — Strength:** How easy the coupling is to refactor.  
**Simple meaning:** How difficult it is to replace the dependency with a weaker form.

**Definition — Locality:** How close connascent elements are to each other.  
**Simple meaning:** Are the dependent elements nearby or spread across modules/systems?

**Definition — Degree:** How many elements are affected by the dependency.  
**Simple meaning:** How many things must participate in or be affected by the coupling?

### Exam Tip

Memorize the trio **Strength - Locality - Degree** and the question each one answers.

### Common Mistake

Do not confuse **strength** with **degree**. Strength concerns how hard the coupling is to refactor; degree concerns how many elements are involved.

### Likely Exam Questions

1. **Name and explain the three properties of connascence.**  
   **Expected answer:** Strength = ease of refactoring; Locality = closeness of connascent elements; Degree = number of elements affected.

---

<a id="page-15"></a>
## Page 15 — STRENGTH OF CONNASCENCE

### Original Page Content

**Convert strong forms of connascence into weaker forms of connascence.**

### Visual Explanation

The diagram orders forms of connascence along a refactoring direction. The arrow points from stronger forms toward weaker/more manageable forms.

```text
Refactor this direction
(stronger)                         (weaker)

Identity
   ↑
Value
   ↑
Timing
   ↑
Execution
   ↑
Position
   ↑
Algorithm
   ↑
Meaning
   ↑
Type
   ↑
Name
```

The figure groups the forms as follows:

- **Static:** Name, Type, Meaning, Algorithm, Position
- **Dynamic:** Execution, Timing, Value, Identity

The caption states that connascence strength can be a good refactoring guide.

### Supplementary Explanation

The architectural lesson is to improve maintainability by converting stronger dependency forms into weaker ones when possible.

### Exam Tip

The most important sentence is: **Convert strong forms of connascence into weaker forms of connascence.**

### Common Mistake

Do not read the diagram as a list of "best to worst" without noticing the arrow direction. The key message is the **refactoring direction toward weaker forms**.

### Likely Exam Questions

1. **How should connascence strength guide refactoring?**  
   **Expected answer:** Strong forms of connascence should be converted into weaker forms where possible.

---

<a id="page-16"></a>
## Page 16 — LOCALITY OF CONNASCENCE

### Original Page Content

- Strong coupling is less problematic when the coupled elements are close together.
  - Within the same module
    - Strong coupling may be acceptable.
  - Across separate modules or systems
    - The same coupling becomes more problematic.
- As the distance between software elements increases, weaker forms of connascence should be preferred.

### Visual Explanation

No major visual content. The locality idea can be represented as:

```text
Same module
[ A ⇄ B ]
Strong coupling may be acceptable

Across boundaries
[ A ] ⇄ [ B ]
Same strong coupling is more problematic

Greater distance/boundary separation
        ⇒ prefer weaker connascence
```

### Supplementary Explanation

Locality changes the risk of coupling. Strong relationships contained inside one boundary are easier to control than equally strong relationships crossing multiple boundaries or systems.

### Definition

**Definition:** Locality measures how close connascent elements are to each other.

**Simple meaning:** Strong dependencies are safer when kept nearby and contained.

### Exam Tip

Key rule: **As distance increases, prefer weaker connascence.**

### Common Mistake

Do not say strong coupling is always unacceptable. The page says it may be acceptable within the same module.

### Likely Exam Questions

1. **How does locality affect the acceptability of strong coupling?**  
   **Expected answer:** Strong coupling is less problematic when elements are close, such as within the same module; across modules/systems the same coupling is more problematic, so weaker connascence should be preferred.

---

<a id="page-17"></a>
## Page 17 — MANAGING DEGREE OF CONNASCENCE

### Original Page Content

- Meilir Page-Jones, who put forward the concept of connascence, provides three guidelines,
  - Minimize overall connascence by creating encapsulated elements.
  - Minimize connascence that crosses encapsulation boundaries.
  - Maximize connascence within encapsulation boundaries.
- Therefore, inside a boundary
  - High cohesion and stronger internal relationships can be acceptable.
- Across boundaries
  - Coupling should be minimized.

### Visual Explanation

No major visual content. The boundary principle can be represented as:

```text
┌───────────────────────────────┐
│ Encapsulation Boundary        │
│                               │
│  A ⇄ B ⇄ C                    │
│  High cohesion / stronger     │
│  internal relationships may  │
│  be acceptable                │
└───────────────────────────────┘
            │
            │  Minimize this coupling
            ▼
┌───────────────────────────────┐
│ Another Boundary              │
└───────────────────────────────┘
```

### Supplementary Explanation

The three guidelines favor concentrating relationships inside well-defined boundaries rather than allowing many dependencies to cross them.

### Exam Tip

Remember the pattern: **minimize overall**, **minimize across boundaries**, **maximize within boundaries**.

### Common Mistake

"Maximize connascence within boundaries" does not mean create arbitrary dependencies. It appears together with high cohesion and encapsulation: related internal relationships are acceptable when appropriately contained.

### Likely Exam Questions

1. **State Meilir Page-Jones's three guidelines for managing connascence.**  
   **Expected answer:** Minimize overall connascence using encapsulation, minimize connascence across encapsulation boundaries, and maximize connascence within encapsulation boundaries.

---

<a id="page-18"></a>
## Page 18 — CREATING GOOD MODULES

### Original Page Content

- A good architectural boundary should therefore attempt to,
  - Keep related behaviour together (**High cohesion**)
  - Keep strongly dependent elements together (**Localize coupling**)
  - Reduce dependencies crossing the boundary (**Low external coupling**)
- This idea becomes important when deciding how the architecture should be partitioned.

### Visual Explanation

A decorative lightbulb character appears on the page. The main conceptual relationship is:

```text
Good Module / Architectural Boundary
├── Related behaviour together      → High cohesion
├── Strong dependencies together    → Localized coupling
└── Few dependencies cross boundary → Low external coupling
```

### Supplementary Explanation

This page combines the previous ideas into one design rule. A good module is not only cohesive internally; it also contains strong dependencies so that fewer dependencies leak across its boundary.

### Exam Tip

This three-part rule is highly exam-friendly. Use exactly these ideas when asked what makes a good architectural boundary.

### Common Mistake

Do not focus only on high cohesion. The boundary must also localize strong coupling and minimize external coupling.

### Likely Exam Questions

1. **What should a good architectural boundary attempt to achieve?**  
   **Expected answer:** High cohesion, localized coupling, and low external coupling.

---

<a id="page-19"></a>
## Page 19 — ARCHITECTURE PARTITIONING

### Original Page Content

- Components can be organized in many different ways.
- One particularly important architectural decision is how the components should be arranged at the top level.
  - How should the major parts of the architecture be organized?
- There are two major approaches
  - Technical Partitioning
  - Domain Partitioning

### Visual Explanation

A lightbulb character is used as a decorative visual. The core choice is:

```text
Top-level Architecture Partitioning
                 │
        ┌────────┴────────┐
        ▼                 ▼
Technical Partitioning  Domain Partitioning
```

### Supplementary Explanation

Partitioning defines the major top-level boundaries of the system. The lecture now moves from evaluating individual module boundaries to deciding the overall organizing principle for the architecture.

### Definition

**Definition:** Architecture partitioning is the decision about how the major components of an architecture are arranged and grouped at the top level.

**Simple meaning:** What is the main way we divide the whole system?

### Exam Tip

The two required approaches are **technical partitioning** and **domain partitioning**.

### Common Mistake

Do not confuse architectural partitioning with deployment style. Partitioning is about organization; later pages discuss deployment as monolithic or distributed.

### Likely Exam Questions

1. **What are the two major approaches to architecture partitioning?**  
   **Expected answer:** Technical partitioning and domain partitioning.

---

<a id="page-20"></a>
## Page 20 — TECHNICAL PARTITIONING

### Original Page Content

- Technical partitioning organizes top-level components around **technical capabilities**.

### Visual Explanation

The diagram shows a system partitioned into technical layers/capabilities:

```text
        Technical Partitioning
┌──────────────────────────────┐
│ Presentation                 │
├──────────────────────────────┤
│ Business rules               │
├──────────────────────────────┤
│ Service                      │
├──────────────────────────────┤
│ Persistence                  │
└──────────────────────────────┘
              ⇅
          ┌──────────┐
          │ Database │
          └──────────┘
```

A shopping-cart icon appears within each technical layer and in the database, showing that one business concern can cut through multiple technical partitions.

### Supplementary Explanation

In technical partitioning, the top-level boundary is based on the type of technical work performed, such as presentation, business rules, service logic, and persistence.

### Definition

**Definition:** Technical partitioning organizes top-level components around technical capabilities.

**Simple meaning:** Group components by *what technical job they perform*.

### Exam Tip

Typical examples from the diagram: **Presentation, Business rules, Service, Persistence**.

### Common Mistake

Do not define technical partitioning by business feature names such as inventory or purchasing; those are examples of domain partitioning.

### Likely Exam Questions

1. **Define technical partitioning and give examples.**  
   **Expected answer:** It organizes top-level components around technical capabilities, such as presentation, business rules, service, and persistence.

---

<a id="page-21"></a>
## Page 21 — TECHNICAL PARTITIONING: ADVANTAGES AND TRADE-OFF

### Original Page Content

- Technical partitioning organizes top-level components around **technical capabilities**.
- Each partition contains a particular type of technical responsibility.

| Advantages | Trade-off |
|---|---|
| Clear separation of technical concerns. | Most business workflows cut across several technical capabilities. |
| Related technical code is easy to locate. | Therefore, a single workflow may be spread across several partitions. |
| Aligns naturally with layered architectures. |  |

### Visual Explanation

The slide uses a two-column table to show that the strengths of technical partitioning come with a workflow trade-off. Technical responsibilities are easy to organize, but a business workflow may have pieces scattered across several layers.

### Supplementary Explanation

The approach is clean from a technical responsibility perspective. However, if a developer changes one business workflow, the change may require updates in presentation, business, service, and persistence partitions.

### Exam Tip

For an advantages/disadvantages question, write **technical clarity and easy code location** as advantages, then **workflow spread across partitions** as the main trade-off.

### Common Mistake

Do not list "business workflow stays together" as an advantage of technical partitioning. The slide says the opposite.

### Likely Exam Questions

1. **Give two advantages and one trade-off of technical partitioning.**  
   **Expected answer:** Advantages: clear separation of technical concerns; related technical code is easy to locate; aligns with layered architecture. Trade-off: business workflows cut across several technical capabilities and may be spread across partitions.

---

<a id="page-22"></a>
## Page 22 — DOMAIN PARTITIONING

### Original Page Content

- Domain partitioning organizes top-level components around,
  - Business domains
  - Business capabilities
  - Workflows
- Each domain can internally contain its own technical components or layers.
- The top-level boundary, however, remains the domain.

### Visual Explanation

No major visual content on this page.

### Supplementary Explanation

Domain partitioning uses the business purpose as the primary grouping. Technical layers can still exist inside each domain, but they are secondary to the domain boundary.

### Definition

**Definition:** Domain partitioning organizes top-level components around business domains, business capabilities, or workflows.

**Simple meaning:** Group the system by *what business purpose it serves*.

### Exam Tip

The phrase **"top-level boundary remains the domain"** is important. Domain partitioning does not mean technical layers disappear; they may exist inside each domain.

### Common Mistake

Do not claim that domain-partitioned systems cannot have presentation, service, or persistence layers. The page explicitly says each domain can internally contain its own technical components or layers.

### Likely Exam Questions

1. **Define domain partitioning.**  
   **Expected answer:** It organizes top-level components around business domains, capabilities, or workflows, while each domain may internally contain technical components/layers.

---

<a id="page-23"></a>
## Page 23 — DOMAIN PARTITIONING DIAGRAM

### Original Page Content

**DOMAIN PARTITIONING**

### Visual Explanation

The diagram shows top-level components grouped by business/domain capabilities rather than by technical layer:

```text
             Domain Partitioning
┌──────────────────────────────────────┐
│ CatalogCheckout   │ UpdateInventory │
├───────────────────┼─────────────────┤
│ ShipToCustomer    │ Reporting       │
├───────────────────┼─────────────────┤
│ Analytics         │ UpdateAccounts  │
└──────────────────────────────────────┘
                    ⇅
                ┌──────────┐
                │ Database │
                └──────────┘
```

The labels are business-oriented functions/workflows: **CatalogCheckout**, **UpdateInventory**, **ShipToCustomer**, **Reporting**, **Analytics**, and **UpdateAccounts**.

### Supplementary Explanation

Compared with the technical partitioning diagram on Page 20, the top-level boxes here represent business capabilities. This helps keep much of a business workflow inside a domain boundary.

### Exam Tip

When identifying a diagram in an exam, check the labels. **Presentation / persistence** suggests technical partitioning; **CatalogCheckout / UpdateInventory / ShipToCustomer** suggests domain partitioning.

### Common Mistake

Do not assume the shared database means this diagram is distributed. This page demonstrates domain organization, not deployment style.

### Likely Exam Questions

1. **How can you identify domain partitioning from the diagram?**  
   **Expected answer:** The top-level components are named by business capabilities/workflows rather than technical responsibilities.

---

<a id="page-24"></a>
## Page 24 — DOMAIN VS. TECHNICAL PARTITIONING

### Original Page Content

| Technical Partitioning | Domain Partitioning |
|---|---|
| Organized by technical capability | Organized by domain/workflow |
| E.g. Presentation, business, persistence | E.g. Purchasing, inventory, delivery |
| Workflow crosses partitions | Workflow tends to remain within a domain |
| Aligns closely with layered architecture | Aligns closely with modular monolith and distributed architectures such as microservices |

### Visual Explanation

The slide is a direct comparison table. It contrasts the organizing principle, examples, workflow location, and architectural alignment.

### Supplementary Explanation

The most important difference is the **top-level grouping criterion**. Technical partitioning prioritizes technical responsibility; domain partitioning prioritizes business capability/workflow.

### Exam Tip

This table is a high-probability comparison question. Memorize all four rows.

### Common Mistake

Do not say domain partitioning automatically means microservices. The slide says it **aligns closely** with modular monoliths and distributed architectures such as microservices; it does not say it requires distribution.

### Likely Exam Questions

1. **Compare technical and domain partitioning.**  
   **Expected answer:** Technical is organized by technical capability, examples are presentation/business/persistence, workflows cross partitions, and it aligns with layered architecture. Domain is organized by domain/workflow, examples are purchasing/inventory/delivery, workflows tend to remain in a domain, and it aligns with modular monolith and distributed architectures such as microservices.

---

<a id="page-25"></a>
## Page 25 — SCOPE OF QUALITY ATTRIBUTES

### Original Page Content

- A common assumption is that the same set of Quality Attributes applies to the entire system.
- This may be true for some systems.
- However, modern systems may contain different parts with different Quality Attribute requirements.
- The important architectural question becomes what is the **scope** of each set of Quality Attributes?

### Visual Explanation

No major visual content.

### Supplementary Explanation

The page introduces a shift from asking "What Quality Attributes does the system need?" to asking "Where in the system does each set of Quality Attributes apply?" Different parts may have different priorities.

### Definition

**Definition:** Quality Attribute scope is the part of the system over which a particular set of Quality Attribute requirements applies.

**Simple meaning:** Which area of the system needs which quality characteristics?

### Exam Tip

The keyword is **scope**. The architectural question is not only *which* Quality Attributes are needed, but *where* each set applies.

### Common Mistake

Do not assume every Quality Attribute must be satisfied uniformly across the entire system.

### Likely Exam Questions

1. **Why is Quality Attribute scope important?**  
   **Expected answer:** Because different parts of a modern system may require different Quality Attributes, so architects must determine where each set applies.

---

<a id="page-26"></a>
## Page 26 — SCOPE OF QUALITY ATTRIBUTES: DIFFERENT AREAS

### Original Page Content

- Consider a system containing three main areas.
  - **Public-facing functions**
    - Required Quality Attributes: **Scalability, Availability, Agility**
  - **Back-office functions**
    - Required Quality Attributes: **Security, Data Integrity, Auditability**
  - **Frequently changing functions**
    - Required Quality Attributes: **Maintainability, Deployability, Testability**
- Trying to satisfy every Quality Attribute uniformly across the whole system may create unnecessary and complex trade-offs.
- Different clusters can indicate different architectural boundaries.

### Visual Explanation

The slide presents three conceptual clusters of functionality and their different Quality Attribute needs:

| System Area | Required Quality Attributes |
|---|---|
| Public-facing functions | Scalability, Availability, Agility |
| Back-office functions | Security, Data Integrity, Auditability |
| Frequently changing functions | Maintainability, Deployability, Testability |

### Supplementary Explanation

If these different areas have materially different Quality Attribute priorities, forcing one architectural solution across all of them can create unnecessary trade-offs. Their distinct QA clusters may suggest useful architectural boundaries.

### Exam Tip

This is a good scenario question. Given different areas and QA requirements, explain that the clusters may imply different architectural boundaries rather than one uniform architecture.

### Common Mistake

Do not treat the three QA lists as universal rules for every public-facing, back-office, or frequently changing system. They are the example provided by this lecture slide.

### Likely Exam Questions

1. **Why can applying all Quality Attributes uniformly be problematic?**  
   **Expected answer:** It may create unnecessary and complex trade-offs because different system areas can require different combinations of Quality Attributes.

2. **What can different Quality Attribute clusters indicate?**  
   **Expected answer:** Different architectural boundaries.

---

<a id="page-27"></a>
## Page 27 — SYSTEM-WIDE VS. SCOPED QUALITY ATTRIBUTES

### Original Page Content

- **System-wide Quality Attributes**
  - One set of Quality Attributes applies across the system.
- **Scoped Quality Attributes**
  - Different parts of the system require different combinations or levels of Quality Attributes.
- The scope may therefore differ across the problem domain.
- Where does each set of Quality Attributes apply?
- Where should architectural boundaries exist?
- The concept of **Architecture Quantum** represents this scope.

### Visual Explanation

No major visual content. The conceptual relationship can be represented as:

```text
Quality Attribute Requirements
          │
          ├── One set across whole system
          │       → System-wide QA scope
          │
          └── Different sets in different areas
                  → Scoped QA requirements
                  → Possible architectural boundaries
                  → Architecture Quantum
```

### Supplementary Explanation

Architectural quantum is introduced as a way to represent the boundary or scope within which a coherent set of architectural characteristics applies.

### Definitions

**Definition — System-wide Quality Attributes:** One set of Quality Attributes applies across the system.  
**Simple meaning:** The whole system shares the same QA scope.

**Definition — Scoped Quality Attributes:** Different parts require different combinations or levels of Quality Attributes.  
**Simple meaning:** Different areas have different QA needs.

### Exam Tip

Important connection: **QA scope → architectural boundaries → architectural quantum**.

### Common Mistake

Do not define architectural quantum merely as a Quality Attribute. It represents the architectural scope for a set of characteristics.

### Likely Exam Questions

1. **Differentiate system-wide and scoped Quality Attributes.**  
   **Expected answer:** System-wide means one QA set applies across the system; scoped means different parts require different combinations or levels of QAs.

2. **What concept represents the scope of Quality Attributes?**  
   **Expected answer:** Architecture Quantum.

---

<a id="page-28"></a>
## Page 28 — ARCHITECTURAL QUANTUM

### Original Page Content

- An architectural quantum establishes the scope for a set of architectural characteristics.
- Or more simply,
  - **The smallest part of a system that can be deployed and run independently.**

### Visual Explanation

A lightbulb character appears as a decorative visual. The conceptual definition is the main content.

### Supplementary Explanation

The page gives two compatible views: the quantum is a scope for architectural characteristics, and operationally it is the smallest independently deployable and runnable part of the system.

### Definition

**Definition:** An architectural quantum establishes the scope for a set of architectural characteristics.

**Simple meaning:** The smallest part of a system that can be deployed and run independently.

### Exam Tip

For a definition question, include both ideas if space allows: **scope of architectural characteristics** + **smallest independently deployable/runnable part**.

### Common Mistake

Do not say "smallest module" without the independent deployment and runtime condition. A module is not automatically an architectural quantum.

### Likely Exam Questions

1. **Define architectural quantum.**  
   **Expected answer:** It establishes the scope for a set of architectural characteristics; more simply, it is the smallest part of a system that can be deployed and run independently.

---

<a id="page-29"></a>
## Page 29 — ARCHITECTURAL QUANTUM CHARACTERISTICS

### Original Page Content

- An architectural quantum establishes a scope for a set of Quality Attributes.
- An architectural quantum has,
  - Independent deployment
  - High functional cohesion
  - Low external implementation static coupling
- The nature of communication between quanta requires careful evaluation.
  - Synchronous communication introduces dynamic coupling.
  - It can cause the operational Quality Attributes of one quantum to affect another and may therefore influence the effective quantum boundaries.

### Visual Explanation

No major visual content. The three defining properties can be represented as:

```text
Architectural Quantum
├── Independent deployment
├── High functional cohesion
└── Low external implementation static coupling

Between quanta:
Synchronous communication
        ↓
Dynamic coupling
        ↓
One quantum's operational QAs can affect another
```

### Supplementary Explanation

A quantum is not just a deployment package. It must be functionally meaningful and minimize implementation coupling outside its boundary. Communication style matters because synchronous calls can create runtime dependence between otherwise separate quanta.

### Exam Tip

Memorize the three properties exactly: **Independent deployment**, **High functional cohesion**, **Low external implementation static coupling**.

### Common Mistake

Do not assume independent deployment means zero communication. Separate quanta may communicate, but the communication can introduce dynamic coupling.

### Likely Exam Questions

1. **What are the three main characteristics of an architectural quantum?**  
   **Expected answer:** Independent deployment, high functional cohesion, and low external implementation static coupling.

2. **Why can synchronous communication affect quantum boundaries?**  
   **Expected answer:** It introduces dynamic coupling and can cause one quantum's operational Quality Attributes to affect another.

---

<a id="page-30"></a>
## Page 30 — ARCHITECTURAL QUANTUM AND DEPENDENCIES

### Original Page Content

- An architectural quantum contains the components necessary to function independently.
- Dependencies required for operation belong to the quantum.
- For example:
  - If an application depends on a database to operate, **the database forms part of that quantum**.
- A shared dependency can therefore affect where quantum boundaries exist.

### Visual Explanation

No major visual content. The example can be represented as:

```text
Architectural Quantum
┌──────────────────────────────┐
│ Application                  │
│      │                       │
│      ▼                       │
│ Database required to operate │
└──────────────────────────────┘

Because the database is required for operation,
it belongs to the same quantum.
```

### Supplementary Explanation

The boundary of a quantum must include operational dependencies necessary for independent function. This is why a shared database can prevent apparently separate services from being truly separate quanta.

### Exam Tip

Key scenario: **application + required database = same quantum** according to the lecture example.

### Common Mistake

Do not draw the quantum boundary only around application code while ignoring an essential database dependency.

### Likely Exam Questions

1. **If an application requires a database to operate, where does the database belong?**  
   **Expected answer:** The database forms part of the same architectural quantum.

2. **How can shared dependencies affect quanta?**  
   **Expected answer:** They can change where quantum boundaries exist because required dependencies belong within the quantum.

---

<a id="page-31"></a>
## Page 31 — ARCHITECTURAL QUANTUM AND COHESION

### Original Page Content

- An architectural quantum should perform a meaningful purpose.
- This connects directly to cohesion.
- Within the quantum related functionality should remain together.
- A quantum therefore represents more than an arbitrary deployment boundary.
- It should exhibit **high functional cohesion**.

### Visual Explanation

No major visual content.

### Supplementary Explanation

Independent deployment alone is insufficient. The functionality inside the quantum should naturally belong together and serve a meaningful purpose.

### Definition

**Definition:** High functional cohesion in a quantum means the related functionality inside the quantum stays together to perform a meaningful purpose.

**Simple meaning:** A quantum should be a meaningful functional unit, not a random set of deployable components.

### Exam Tip

When explaining architectural quantum, do not omit **high functional cohesion**.

### Common Mistake

Do not equate "deployable separately" with "good quantum." The slide explicitly says a quantum is more than an arbitrary deployment boundary.

### Likely Exam Questions

1. **Why must an architectural quantum have high functional cohesion?**  
   **Expected answer:** Because it should perform a meaningful purpose and keep related functionality together rather than being an arbitrary deployment boundary.

---

<a id="page-32"></a>
## Page 32 — ARCHITECTURAL QUANTUM AND STATIC COUPLING

### Original Page Content

- Static coupling represents the structural dependencies between parts of the architecture.
- If two services depend on the same coupling point, such as a shared database or shared component, they belong to the **same architectural quantum**.
- Therefore, separate quanta should have low external implementation coupling.
- The broader the scope, the looser the coupling should be.

| Within a Quantum | Between Quanta |
|---|---|
| High cohesion | Low implementation coupling |
| Higher coupling may be acceptable | Loose coupling is preferred |

### Visual Explanation

The comparison table contrasts what is acceptable inside a quantum with what is preferred across quantum boundaries.

```text
Within one Quantum
┌──────────────────────────────┐
│ High cohesion                │
│ Higher coupling may be okay  │
└──────────────────────────────┘

Between Quanta
┌────────────┐    loose    ┌────────────┐
│ Quantum A  │ ◄─────────► │ Quantum B  │
└────────────┘  coupling   └────────────┘
```

### Supplementary Explanation

The same principle from modularity is applied at a larger architectural scale: strong relationships are safer when localized, while external coupling across larger scopes should be loose.

### Exam Tip

Remember: **Within quantum = high cohesion / higher coupling may be acceptable. Between quanta = low implementation coupling / loose coupling preferred.**

### Common Mistake

Do not assume two separately named services are automatically separate quanta. The slide says a shared database or shared component can place them in the same quantum.

### Likely Exam Questions

1. **What does a shared database imply for two services' quantum boundary?**  
   **Expected answer:** If both depend on the same coupling point such as a shared database, they belong to the same architectural quantum.

2. **How should coupling differ within and between quanta?**  
   **Expected answer:** Higher coupling may be acceptable within a cohesive quantum; between quanta, low implementation/loose coupling is preferred.

---

<a id="page-33"></a>
## Page 33 — ARCHITECTURAL QUANTUM AND DYNAMIC COUPLING

### Original Page Content

- Separate quanta still need to collaborate.
- This creates dynamic coupling.
- Communication may occur,
  - Synchronously
  - Asynchronously
- Synchronous communication can cause the operational characteristics of one quantum to affect another.
- Therefore, communication choices can influence quantum boundaries.
- The quantum provides a useful architectural boundary for applying operational Quality Attributes.

### Visual Explanation

No major visual content. The communication choice can be represented as:

```text
Quantum A ───── communication ───── Quantum B
              │
              ├── Synchronous
              └── Asynchronous

Synchronous communication
        ↓
Operational characteristics of A can affect B
        ↓
Effective quantum boundaries may be influenced
```

### Supplementary Explanation

Static independence does not eliminate runtime relationships. The communication mechanism itself can create operational dependency, especially when one quantum must wait for another synchronously.

### Exam Tip

Key chain: **collaboration → dynamic coupling → synchronous communication can propagate operational characteristics → boundary implications**.

### Common Mistake

Do not discuss only static coupling when identifying quanta. The lecture explicitly says communication and dynamic coupling also require evaluation.

### Likely Exam Questions

1. **How can communication influence architectural quantum boundaries?**  
   **Expected answer:** Communication creates dynamic coupling; synchronous communication can make one quantum's operational characteristics affect another, influencing effective boundaries.

---

<a id="page-34"></a>
## Page 34 — DETERMINING ARCHITECTURAL QUANTA

### Original Page Content

- **Quality Attribute Scope**
  - Do different parts require different Quality Attributes?
- **Domain Boundaries**
  - Which functionality naturally belongs together?
- **Static Coupling**
  - Which elements share structural dependencies?
- **Shared Dependencies**
  - Do components depend on common infrastructure or data?
- These factors help determine possible quantum boundaries.

### Visual Explanation

No major visual content. The decision checklist can be represented as:

```text
Determine Architectural Quanta
        │
        ├── Quality Attribute Scope
        │     └── Different QA needs?
        ├── Domain Boundaries
        │     └── What naturally belongs together?
        ├── Static Coupling
        │     └── Shared structural dependencies?
        └── Shared Dependencies
              └── Common infrastructure or data?
```

### Supplementary Explanation

Quantum boundaries emerge from several kinds of evidence. Architects should not decide them only by feature names or deployment preference.

### Exam Tip

Memorize the four factors: **QA Scope, Domain Boundaries, Static Coupling, Shared Dependencies**.

### Common Mistake

Do not determine quanta only from Quality Attributes. The slide gives four factors, including domain and dependency structure.

### Likely Exam Questions

1. **What factors help determine architectural quantum boundaries?**  
   **Expected answer:** Quality Attribute scope, domain boundaries, static coupling, and shared dependencies.

---

<a id="page-35"></a>
## Page 35 — DETERMINING ARCHITECTURAL QUANTA FROM REQUIREMENTS

### Original Page Content

- **One coherent set of Quality Attributes**
  - The system may be able to operate within a single architectural scope.
  - One architectural quantum.
  - A monolithic architecture becomes a viable choice.
- **Multiple distinct sets of Quality Attributes**
  - Separate scopes may be required.
  - Identify appropriate architectural quanta.
  - Multiple independently deployable quanta may imply a distributed architecture.
- **The architecture begins to emerge from its requirements rather than from being chosen for being a fashionable.**

### Visual Explanation

The logic can be represented as a decision flow:

```text
Start with Quality Attribute requirements
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
One coherent QA set     Multiple distinct QA sets
        │                   │
One architectural       Separate scopes may be needed
scope / one quantum          │
        │               Identify appropriate quanta
        ▼                   │
Monolithic architecture      ▼
becomes viable          Multiple independently
                       deployable quanta may imply
                       distributed architecture
```

### Supplementary Explanation

The architectural style should be a consequence of requirements and boundaries, not a fashion-first choice. The slide deliberately uses cautious language: **may**, **viable**, and **may imply**.

### Exam Tip

Important conclusion: **requirements first, architecture style second**.

### Common Mistake

Do not rewrite the slide as "one QA set always means monolith" or "multiple QA sets always mean distributed." The lecture uses **may** and **viable**, not absolute rules.

### Likely Exam Questions

1. **How do Quality Attribute scopes influence monolithic vs. distributed architecture?**  
   **Expected answer:** One coherent QA set may fit one architectural quantum and make a monolith viable; multiple distinct QA sets may require separate quanta, and multiple independently deployable quanta may imply a distributed architecture.

---

<a id="page-36"></a>
## Page 36 — MONOLITHIC VS. DISTRIBUTED ARCHITECTURE

### Original Page Content

- **Monolithic Architecture**
  - A **single deployment unit** containing all application code.
- **Distributed Architecture**
  - **Multiple deployment units** connected through remote access protocols.

### Visual Explanation

The slide shows two icons:

```text
MONOLITHIC                    DISTRIBUTED
┌──────────────┐             ┌─────────┐
│ Single unit  │             │ Unit A  │
│              │             └────┬────┘
└──────────────┘                  │
                           ┌──────┼──────┐
                           ▼      ▼      ▼
                        Unit B  Unit C  Unit D
```

The visual emphasizes **one deployment unit** versus **multiple connected deployment units**.

### Definitions

**Definition — Monolithic Architecture:** A single deployment unit containing all application code.  
**Simple meaning:** The application is deployed as one unit.

**Definition — Distributed Architecture:** Multiple deployment units connected through remote access protocols.  
**Simple meaning:** The application is split into separately deployed units that communicate remotely.

### Exam Tip

The defining distinction on this page is **deployment units**, not whether code is modular internally.

### Common Mistake

Do not say a monolith has no modules. Page 37 explicitly corrects that misconception.

### Likely Exam Questions

1. **Differentiate monolithic and distributed architecture.**  
   **Expected answer:** Monolithic = one deployment unit containing all application code; distributed = multiple deployment units connected through remote access protocols.

---

<a id="page-37"></a>
## Page 37 — MONOLITHIC ARCHITECTURE

### Original Page Content

- A monolithic system may still contain,
  - Multiple modules
  - Multiple components
  - Strong internal boundaries
  - Domain partitioning and/or Technical partitioning
- The defining characteristic of monolithic architecture is that the application is **deployed as a single unit**.

### Visual Explanation

No major visual content.

### Supplementary Explanation

The page separates **internal architecture** from **deployment architecture**. A monolith can be well modularized and strongly partitioned internally while still being deployed as a single unit.

### Exam Tip

This is a common trick question: **monolith does not mean unmodularized**. The defining characteristic is a **single deployment unit**.

### Common Mistake

Do not define monolith as "one module," "one component," or "no boundaries." None of those are required by the slide.

### Likely Exam Questions

1. **Can a monolithic system contain multiple modules and strong internal boundaries? Explain.**  
   **Expected answer:** Yes. A monolith may contain multiple modules/components, strong internal boundaries, and domain/technical partitioning; it is defined by deployment as a single unit.

---

<a id="page-38"></a>
## Page 38 — DISTRIBUTED ARCHITECTURE

### Original Page Content

- A distributed architecture contains,
  - Multiple deployment units
  - that communicate through remote access protocols.
  - This introduces physical separation between parts of the system.
- Distributed architectures can provide strong support for Quality Attributes such as **Performance, Scalability, Availability**.
- However, they introduce **significant additional trade-offs**.

### Visual Explanation

No major visual content.

### Supplementary Explanation

Distribution creates physical separation and remote communication. The slide highlights potential support for Performance, Scalability, and Availability, while explicitly warning that distribution brings additional trade-offs.

### Exam Tip

For a balanced answer, mention both sides: support for **Performance/Scalability/Availability** and **significant additional trade-offs**.

### Common Mistake

Do not present distributed architecture as automatically superior. The page explicitly emphasizes additional trade-offs.

### Likely Exam Questions

1. **What defines a distributed architecture, and what Quality Attributes can it strongly support?**  
   **Expected answer:** Multiple deployment units communicate through remote access protocols, introducing physical separation; it can support Performance, Scalability, and Availability.

2. **What warning does the lecture give about distributed architecture?**  
   **Expected answer:** It introduces significant additional trade-offs.

---

<a id="page-39"></a>
## Page 39 — FALLACIES OF DISTRIBUTED COMPUTING

### Original Page Content

1. The network is reliable.
2. Latency is zero.
3. Bandwidth is infinite.
4. The network is secure.
5. The topology never changes.
6. There is only one administrator.
7. Transport cost is zero.
8. The network is homogeneous.

Read more [here](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing).

### Visual Explanation

No major visual content. The page is an enumerated list of eight assumptions that should not be taken for granted in distributed computing.

### Supplementary Explanation

Within the lecture's argument, this page supports the warning that distribution introduces extra trade-offs. Remote communication operates under real network constraints and changing environments.

### Exam Tip

Memorize the eight fallacies in order if the module commonly asks direct-list questions. At minimum, know the themes: **reliability, latency, bandwidth, security, topology, administration, transport cost, heterogeneity/homogeneity**.

### Common Mistake

Do not write these statements as facts. They are labelled **fallacies**, meaning assumptions that architects should not blindly make.

### Likely Exam Questions

1. **List four fallacies of distributed computing.**  
   **Expected answer:** Any four of the eight listed above.

2. **Why are the fallacies relevant to distributed architecture?**  
   **Expected answer:** They highlight unrealistic network assumptions and help explain why distributed systems introduce additional architectural trade-offs.

---

<a id="page-40"></a>
## Page 40 — MONOLITH VS. DISTRIBUTED ARCHITECTURE DECISION

### Original Page Content

| One Quality Attribute Scope | Multiple Independent Quality Attribute Scopes |
|---|---|
| May require one architectural quantum | May require multiple architectural quanta |
| Monolithic architecture is viable | Distributed architecture may be required |

**The decision begins with architectural requirements rather than with an architecture style.**

### Visual Explanation

The comparison table links Quality Attribute scope to possible quantum count and then to viable deployment style.

```text
Architectural Requirements
          │
          ▼
Quality Attribute Scope
     ┌────┴────┐
     ▼         ▼
One scope   Multiple independent scopes
     │         │
One quantum Multiple quanta may be needed
     │         │
Monolith    Distributed architecture
viable      may be required
```

### Supplementary Explanation

The slide does not prescribe a style first. It tells architects to begin with requirements, determine relevant scopes and quanta, and then evaluate the deployment architecture.

### Exam Tip

The concluding sentence is likely useful in essay answers: **The decision begins with architectural requirements rather than with an architecture style.**

### Common Mistake

Do not reverse the reasoning by choosing microservices/monolith first and then forcing requirements to fit.

### Likely Exam Questions

1. **How should an architect decide between monolithic and distributed architecture according to this lecture?**  
   **Expected answer:** Start from architectural requirements and QA scopes; one scope may lead to one quantum and make a monolith viable, while multiple independent scopes may require multiple quanta and possibly distributed architecture.

---

<a id="page-41"></a>
## Page 41 — REQUIRED READING

### Original Page Content

- Please read the Chapters **03, 07, 09** in M. Richards and N. Ford, *Fundamentals of Software Architecture: A Modern Engineering Approach,* 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.

### Visual Explanation

No major visual content.

### Supplementary Explanation

The lecture identifies Chapters 03, 07, and 09 of the referenced textbook as required reading.

### Exam Tip

If studying beyond the slides, prioritize Chapters **03, 07, and 09** because the lecturer explicitly marks them as required reading.

### Common Mistake

Do not invent additional required chapters; only 03, 07, and 09 are listed on this page.

### Likely Exam Questions

1. **Which textbook chapters are required reading for this lecture?**  
   **Expected answer:** Chapters 03, 07, and 09.

---

<a id="page-42"></a>
## Page 42 — SUMMARY

### Original Page Content

- Modularity organizes software into meaningful logical units.
- Cohesion, coupling and connascence help evaluate module boundaries.
- Architecture may be partitioned technically or by domain.
- Quality Attribute scope helps identify architectural quanta.
- Architectural quanta define independently parts of the system.
- One QA scope may allow a monolithic architecture; multiple independent scopes may require a distributed architecture.
- Distribution introduces additional architectural trade-offs.

### Visual Explanation

No major visual content. The page summarizes the lecture as a chain of architectural reasoning.

### Supplementary Explanation

A compact way to understand the entire lecture is:

```text
Organize code meaningfully
        ↓
Evaluate module relationships
        ↓
Choose top-level partitioning
        ↓
Determine Quality Attribute scope
        ↓
Identify architectural quanta
        ↓
Choose viable deployment style
        ↓
Account for distribution trade-offs
```

### Exam Tip

This page is the best source for building a final 5-7 sentence essay conclusion.

### Common Mistake

Do not omit the trade-off statement when discussing distribution.

### Likely Exam Questions

1. **Summarize the relationship among modularity, partitioning, QA scope, quanta, and deployment architecture.**  
   **Expected answer:** Modularity organizes software; cohesion/coupling/connascence evaluate boundaries; architecture can be partitioned technically or by domain; QA scope helps identify quanta; one scope may allow monolith, multiple independent scopes may require distribution; distribution adds trade-offs.

---

<a id="page-43"></a>
## Page 43 — REFERENCES

### Original Page Content

- M. Richards and N. Ford, *Fundamentals of Software Architecture: A Modern Engineering Approach,* 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.

### Visual Explanation

No major visual content. This is the reference page.

### Supplementary Explanation

This textbook is the cited source for the lecture and is also referenced on Page 41 for required reading.

### Exam Tip

Use the lecture slides as the primary revision structure and the cited book chapters for deeper clarification if required by the module.

### Common Mistake

No major common mistake.

### Likely Exam Questions

1. **What is the main reference used in this lecture?**  
   **Expected answer:** Richards and Ford, *Fundamentals of Software Architecture: A Modern Engineering Approach,* 2nd edition, 2025.

---

<a id="important-diagrams"></a>
# Important Diagrams

## 1. Modularity Reasoning — Page 06

```text
Software System
├── What belongs together?
├── What should be separated?
├── How do parts depend on each other?
└── Where should changes be contained?
```

## 2. Coupling Direction — Page 09

```text
Other Elements ─────► [Artifact] ─────► Other Elements
          Afferent              Efferent
          incoming              outgoing
```

## 3. Connascence Refactoring Direction — Page 15

```text
Stronger forms
Identity
  ↑
Value
  ↑
Timing
  ↑
Execution
  ↑
Position
  ↑
Algorithm
  ↑
Meaning
  ↑
Type
  ↑
Name
Weaker forms

Refactor strong forms toward weaker forms.
```

## 4. Technical Partitioning — Page 20

```text
        Technical Partitioning
┌──────────────────────────────┐
│ Presentation                 │
├──────────────────────────────┤
│ Business rules               │
├──────────────────────────────┤
│ Service                      │
├──────────────────────────────┤
│ Persistence                  │
└──────────────────────────────┘
              ⇅
          ┌──────────┐
          │ Database │
          └──────────┘
```

## 5. Domain Partitioning — Page 23

```text
             Domain Partitioning
┌──────────────────────────────────────┐
│ CatalogCheckout   │ UpdateInventory │
├───────────────────┼─────────────────┤
│ ShipToCustomer    │ Reporting       │
├───────────────────┼─────────────────┤
│ Analytics         │ UpdateAccounts  │
└──────────────────────────────────────┘
                    ⇅
                ┌──────────┐
                │ Database │
                └──────────┘
```

## 6. Quality Attribute Scope to Architectural Style — Pages 35 and 40

```text
Architectural Requirements
          │
          ▼
Quality Attribute Scope
          │
     ┌────┴────┐
     ▼         ▼
One coherent   Multiple independent
QA scope       QA scopes
     │         │
One quantum    Multiple quanta may be needed
     │         │
Monolith       Distributed architecture
is viable      may be required
```

---

<a id="key-definitions"></a>
# Key Definitions

| Term | Definition from / consistent with the lecture | Simple Meaning |
|---|---|---|
| Modularity | Logical grouping of related code into modules. | Organize a big system into meaningful parts. |
| Module | A logical part that may contain classes, functions, and other related implementation elements. | A related group of implementation elements. |
| Cohesion | How closely the parts/elements of a module belong together. | Do things inside a module naturally belong together? |
| Coupling | Dependencies between software elements. | How much does one part depend on another? |
| Afferent Coupling | Incoming connections to a software artifact. | Other elements depend on this artifact. |
| Efferent Coupling | Outgoing connections from a software artifact. | This artifact depends on other elements. |
| Connascence | A change in one component requires another to be modified to maintain overall correctness. | If one changes, another must also change. |
| Static Connascence | Coupling identifiable from source code. | Dependency visible through code analysis. |
| Dynamic Connascence | Coupling that occurs during execution. | Dependency caused by runtime behavior. |
| Strength | How easy the coupling is to refactor. | How hard is the dependency to weaken? |
| Locality | How close connascent elements are to one another. | Are dependent elements close or far apart? |
| Degree | How many elements are affected by the dependency. | How many elements participate in the dependency? |
| Technical Partitioning | Top-level organization around technical capabilities. | Group by technical responsibility. |
| Domain Partitioning | Top-level organization around business domains, capabilities, or workflows. | Group by business purpose. |
| System-wide QA Scope | One set of Quality Attributes applies across the system. | Same QA requirements across the whole system. |
| Scoped Quality Attributes | Different parts require different combinations or levels of Quality Attributes. | Different areas have different QA needs. |
| Architectural Quantum | Scope for architectural characteristics; more simply, the smallest part that can be deployed and run independently. | Smallest independently deployable/runnable architectural scope. |
| Monolithic Architecture | A single deployment unit containing all application code. | Deploy the application as one unit. |
| Distributed Architecture | Multiple deployment units connected through remote access protocols. | Deploy multiple units that communicate remotely. |

---

<a id="important-code"></a>
# Important Code Snippets / Formulas

The source lecture contains **no programming code snippets and no mathematical formulas**.

The most important structured rules instead are:

```text
Good architectural boundary:
1. High cohesion
2. Localize strong coupling
3. Low external coupling
```

```text
Architectural quantum:
1. Independent deployment
2. High functional cohesion
3. Low external implementation static coupling
```

```text
Determine possible quanta using:
1. Quality Attribute Scope
2. Domain Boundaries
3. Static Coupling
4. Shared Dependencies
```

---

<a id="quick-revision"></a>
# Quick Revision Notes

| Topic | Must Remember | Exam Focus |
|---|---|---|
| Complexity | Growth without deliberate structure mixes responsibilities and spreads dependencies. | Why architecture must preserve organization. |
| Modularity | Logical grouping of related code. | Definition + what belongs together/separate. |
| Cohesion | Related elements belong together; high cohesion is desirable. | Characteristics of highly cohesive modules. |
| Coupling | Dependencies between elements. | Afferent vs. efferent; change propagation. |
| Connascence | One component's change requires another's change for correctness. | Static vs. dynamic; strength/locality/degree. |
| Static Connascence | Name, Type, Meaning, Position, Algorithm. | List + source-code detection. |
| Dynamic Connascence | Execution, Timing, Values, Identity. | List + runtime behavior. |
| Good Modules | High cohesion + localize coupling + low external coupling. | Boundary design. |
| Technical Partitioning | Organize by technical capability. | Advantages/trade-off; layered architecture. |
| Domain Partitioning | Organize by business domain/capability/workflow. | Compare with technical partitioning. |
| QA Scope | Different areas may require different QAs. | System-wide vs. scoped; boundary implications. |
| Architectural Quantum | Smallest independently deployable/runnable scope. | 3 characteristics; dependencies and coupling. |
| Determine Quanta | QA scope, domain boundaries, static coupling, shared dependencies. | Scenario-based boundary reasoning. |
| Monolith | One deployment unit; can still have multiple modules/components. | Definition + misconception correction. |
| Distributed | Multiple deployment units communicating remotely. | Benefits and extra trade-offs. |
| Final Decision | Start with requirements, QA scopes, and quanta. | Do not choose architecture style because it is fashionable. |

---

<a id="likely-exam-questions"></a>
# Likely Exam Questions

## Short Answer

1. **Define modularity.**  
   **Expected answer:** A way of organizing a system through logical groupings of related code called modules.

2. **Differentiate cohesion and coupling.**  
   **Expected answer:** Cohesion concerns how closely elements within a module belong together; coupling concerns dependencies between software elements.

3. **Define connascence.**  
   **Expected answer:** Two components are connascent when a change in one requires the other to be modified to maintain overall system correctness.

4. **List static connascence types.**  
   **Expected answer:** Name, Type, Meaning, Position, Algorithm.

5. **List dynamic connascence types.**  
   **Expected answer:** Execution, Timing, Values, Identity.

6. **What are the three properties of connascence?**  
   **Expected answer:** Strength, Locality, Degree.

7. **What should a good architectural boundary achieve?**  
   **Expected answer:** High cohesion, localized strong coupling, and low external coupling.

8. **Define technical partitioning.**  
   **Expected answer:** Organizing top-level components around technical capabilities.

9. **Define domain partitioning.**  
   **Expected answer:** Organizing top-level components around business domains, capabilities, or workflows.

10. **Define architectural quantum.**  
    **Expected answer:** A scope for architectural characteristics; more simply, the smallest part of a system that can be deployed and run independently.

11. **State the three key characteristics of an architectural quantum.**  
    **Expected answer:** Independent deployment, high functional cohesion, low external implementation static coupling.

12. **Define monolithic architecture.**  
    **Expected answer:** A single deployment unit containing all application code.

13. **Define distributed architecture.**  
    **Expected answer:** Multiple deployment units connected through remote access protocols.

## Comparison Questions

### 1. Static vs. Dynamic Connascence

| Static | Dynamic |
|---|---|
| Source-code level | Runtime |
| Identified through code analysis | Depends on execution behaviour |
| Easier to detect/refactor | Harder to manage |
| Preferred over stronger dynamic forms | Can create significant runtime dependencies |

### 2. Technical vs. Domain Partitioning

| Technical Partitioning | Domain Partitioning |
|---|---|
| Organized by technical capability | Organized by domain/workflow |
| Presentation, business, persistence | Purchasing, inventory, delivery |
| Workflow crosses partitions | Workflow tends to remain within a domain |
| Aligns with layered architecture | Aligns with modular monolith and distributed architectures such as microservices |

### 3. Monolithic vs. Distributed Architecture

| Monolithic | Distributed |
|---|---|
| Single deployment unit | Multiple deployment units |
| All application code deployed together | Units communicate through remote access protocols |
| May still have modules/components/internal boundaries | Introduces physical separation |
| Viable when one coherent QA scope/quantum is sufficient | May be required when multiple independent QA scopes/quanta exist |

## Scenario Questions

1. **A public-facing area requires Scalability and Availability, while a back-office area requires Security and Auditability. What architectural idea should be considered?**  
   **Expected answer:** Different QA scopes may exist. These clusters can indicate different architectural boundaries and potentially different architectural quanta.

2. **Two services are deployed separately but share one database required for both to operate. Are they necessarily separate architectural quanta?**  
   **Expected answer:** No. According to the lecture, if they depend on the same coupling point such as a shared database, they belong to the same architectural quantum.

3. **A system has one coherent Quality Attribute scope. What architecture may be viable?**  
   **Expected answer:** It may fit one architectural quantum, making a monolithic architecture viable.

4. **A system has multiple independent QA scopes and independently deployable quanta. What architecture may be implied?**  
   **Expected answer:** A distributed architecture may be implied/required.

5. **Why can synchronous communication between quanta be architecturally important?**  
   **Expected answer:** It introduces dynamic coupling and can cause one quantum's operational Quality Attributes to affect another, influencing effective quantum boundaries.

---

<a id="key-terms"></a>
# Key Terms

- Architecture
- Complexity
- Modularity
- Module
- Component
- Cohesion
- Coupling
- Afferent Coupling
- Efferent Coupling
- Connascence
- Static Connascence
- Dynamic Connascence
- Connascence of Name
- Connascence of Type
- Connascence of Meaning
- Connascence of Position
- Connascence of Algorithm
- Connascence of Execution
- Connascence of Timing
- Connascence of Values
- Connascence of Identity
- Strength
- Locality
- Degree
- Encapsulation Boundary
- High Cohesion
- Low External Coupling
- Technical Partitioning
- Domain Partitioning
- Quality Attributes
- Quality Attribute Scope
- System-wide Quality Attributes
- Scoped Quality Attributes
- Architectural Quantum
- Independent Deployment
- Functional Cohesion
- Static Coupling
- Dynamic Coupling
- Shared Dependency
- Synchronous Communication
- Asynchronous Communication
- Monolithic Architecture
- Distributed Architecture
- Remote Access Protocols
- Fallacies of Distributed Computing

---

<a id="full-lecture-summary"></a>
# Full Lecture Summary

Software systems become harder to understand and change as they grow. Without deliberate structure, responsibilities mix together, dependencies spread, side effects increase, reuse and replacement become difficult, and structural clarity is lost. Architecture therefore has to impose and preserve organization.

**Modularity** is the organizing principle used to control this complexity. A system is treated as a collection of modules rather than one indivisible whole. A module is a logical grouping of related code and may contain classes, functions, and other implementation elements. Architects reason about modules/components to determine what belongs together, what should be separated, how different parts depend on one another, and where change should be contained.

Module quality is evaluated through **cohesion, coupling, and connascence**. Cohesion measures how closely elements inside a module belong together. A highly cohesive module contains strongly related behaviour, represents a meaningful purpose, and includes the elements necessary for that purpose. Excessively splitting naturally cohesive functionality can introduce more coupling.

Coupling concerns dependencies between software elements. **Afferent coupling** is incoming connections to an artifact, while **efferent coupling** is outgoing connections from it. Coupling helps architects reason about how change can propagate through a system.

**Connascence** gives a more precise vocabulary for coupling. Two components are connascent when a change in one requires another to be modified to preserve overall system correctness. Static connascence is visible in source code and includes Name, Type, Meaning, Position, and Algorithm. Dynamic connascence occurs at runtime and includes Execution, Timing, Values, and Identity. Static forms are generally easier to detect and refactor, while dynamic forms can create significant runtime dependencies. Where possible, weaker and more manageable forms are preferred.

Connascence is judged using **strength, locality, and degree**. Strength concerns how easy the coupling is to refactor. Locality concerns how close the dependent elements are. Degree concerns how many elements are affected. Strong coupling is less problematic when it is localized within a boundary; as distance and boundary separation increase, weaker forms are preferred. Page-Jones's guidance is to minimize overall connascence, minimize connascence that crosses encapsulation boundaries, and maximize connascence within encapsulation boundaries. Therefore, good modules keep related behaviour together, localize strong dependencies, and reduce dependencies crossing the boundary.

At the architecture level, components can be partitioned in two major ways. **Technical partitioning** organizes top-level components around technical capabilities such as presentation, business rules, service, and persistence. Its advantages include clear separation of technical concerns, easy location of related technical code, and natural alignment with layered architecture. Its trade-off is that a single business workflow may be spread across several technical partitions.

**Domain partitioning** organizes top-level components around business domains, capabilities, or workflows. Each domain can contain its own technical components internally, but the domain remains the top-level boundary. Compared with technical partitioning, workflows tend to remain within the domain. Domain partitioning aligns closely with modular monoliths and distributed architectures such as microservices.

The lecture then introduces **Quality Attribute scope**. It is not always correct to apply the same QA set uniformly across the whole system. Public-facing, back-office, and frequently changing areas may have different QA needs. Applying every QA everywhere can create unnecessary and complex trade-offs. These different clusters may indicate different architectural boundaries. A system may have one system-wide QA scope or multiple scoped QA requirements.

The concept of an **architectural quantum** represents this scope. A quantum establishes the scope for a set of architectural characteristics and, more simply, is the smallest part of the system that can be deployed and run independently. A quantum has independent deployment, high functional cohesion, and low external implementation static coupling. Dependencies required for operation belong to the quantum; therefore, an application and the database it requires may belong to the same quantum. Likewise, two services sharing the same coupling point may belong to the same quantum.

Within a quantum, high cohesion and higher internal coupling may be acceptable. Between quanta, low implementation coupling and loose coupling are preferred. Separate quanta still collaborate, creating dynamic coupling. Communication may be synchronous or asynchronous. Synchronous communication can allow the operational characteristics of one quantum to affect another, so communication choices can influence effective quantum boundaries.

Possible quanta are identified by examining **Quality Attribute scope, domain boundaries, static coupling, and shared dependencies**. If one coherent QA set can operate within one architectural scope, a single quantum may be sufficient and a monolithic architecture becomes viable. If multiple distinct QA scopes require independently deployable quanta, a distributed architecture may be implied. The architecture should therefore emerge from requirements rather than be selected because a particular style is fashionable.

A **monolithic architecture** is defined by a single deployment unit containing all application code. It may still contain multiple modules, multiple components, strong internal boundaries, and either domain or technical partitioning. A **distributed architecture** contains multiple deployment units connected through remote access protocols, creating physical separation. It can strongly support Quality Attributes such as Performance, Scalability, and Availability, but it introduces significant additional trade-offs. The fallacies of distributed computing illustrate problematic assumptions such as assuming the network is reliable, latency is zero, bandwidth is infinite, the network is secure, topology never changes, there is one administrator, transport cost is zero, and the network is homogeneous.

The final architectural decision begins with **requirements**, especially Quality Attribute scopes and resulting architectural quanta. One QA scope may allow one quantum and make monolithic architecture viable. Multiple independent QA scopes may require multiple quanta and possibly a distributed architecture. Distribution is not a default goal; it is a trade-off-bearing architectural response to requirements.

---

<a id="verification"></a>
# Verification

- PDF inspected page by page in original order.
- Total PDF pages counted before writing: **43**.
- Markdown contains one main section for every PDF page: **43**.
- Tables from Pages 13, 21, 24, 32, and 40 were recreated in Markdown.
- Major diagrams/visuals from Pages 06, 15, 20, 23, and 36 were explained/recreated in text or ASCII form.
- Decorative lightbulb visuals were noted where present.
- No source code exists in this lecture, so no code blocks were omitted.
- The Page 39 "Read more here" hyperlink was preserved.
- Supplementary explanations were separated from original slide content.

PDF pages: 43 / MD page sections: 43 ✅
