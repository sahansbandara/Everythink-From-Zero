# SE3100 - Architecture Based Development
## Lecture 04 - Monolithic Architectural Styles

## Title Section

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3100 |
| Module name | Architecture Based Development |
| Lecture number | Lecture 04 |
| Lecture title | Monolithic Architectural Styles |
| Lecturer | Vishan Jayasinghearachchi |
| Lecturer title | Lecturer - Department of Software Engineering |
| Lecturer email | vishan.j@sliit.lk |
| Total PDF pages | 45 |

---

# Table of Contents

- [Pages 01-10 — Architectural Styles and Monolith Fundamentals](#page-01--monolithic-architectural-styles)
- [Pages 11-21 — Layered Architecture](#page-11--layered-architecture--structure)
- [Pages 22-32 — Modular Monolith Architecture](#page-22--modular-monolith-architecture-style)
- [Pages 33-42 — Microkernel Architecture and Style Comparison](#page-33--microkernel-architecture--core-and-plug-ins)
- [Pages 43-45 — Reading, Summary and References](#page-43--required-reading)
- [Full Lecture Summary](#full-lecture-summary)
- [Key Definitions Table](#key-definitions-table)
- [Important Diagrams](#important-diagrams)
- [Architecture Style Comparison](#architecture-style-comparison)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms List](#key-terms-list)
- [Verification](#verification)

## Page Index
- [Page 01 — Monolithic Architectural Styles](#page-01-monolithic-architectural-styles)
- [Page 02 — Learning Outcomes](#page-02-learning-outcomes)
- [Page 03 — Contents](#page-03-contents)
- [Page 04 — What Is an Architectural Style?](#page-04-what-is-an-architectural-style)
- [Page 05 — Architectural Style — Core Aspects and Concerns](#page-05-architectural-style-core-aspects-and-concerns)
- [Page 06 — Architectural Style vs. Pattern](#page-06-architectural-style-vs-pattern)
- [Page 07 — Quality Attributes and Style Selection](#page-07-quality-attributes-and-style-selection)
- [Page 08 — Monolithic vs. Distributed Architectures](#page-08-monolithic-vs-distributed-architectures)
- [Page 09 — Monolithic Architecture Styles](#page-09-monolithic-architecture-styles)
- [Page 10 — Why Use a Monolith?](#page-10-why-use-a-monolith)
- [Page 11 — Layered Architecture — Structure](#page-11-layered-architecture-structure)
- [Page 12 — Layered Architecture — Layer Responsibilities](#page-12-layered-architecture-layer-responsibilities)
- [Page 13 — Layered Architecture — Deployment Variants](#page-13-layered-architecture-deployment-variants)
- [Page 14 — Layered Architecture — Closed Layers](#page-14-layered-architecture-closed-layers)
- [Page 15 — Layered Architecture — Layers of Isolation](#page-15-layered-architecture-layers-of-isolation)
- [Page 16 — Layered Architecture — Open Layers](#page-16-layered-architecture-open-layers)
- [Page 17 — Layered Architecture — Shared Components](#page-17-layered-architecture-shared-components)
- [Page 18 — Layered Architecture — Adding an Open Services Layer](#page-18-layered-architecture-adding-an-open-services-layer)
- [Page 19 — Layered Architecture — Architecture Sinkhole Antipattern](#page-19-layered-architecture-architecture-sinkhole-antipattern)
- [Page 20 — Layered Architecture — Architectural Characteristics](#page-20-layered-architecture-architectural-characteristics)
- [Page 21 — When to Use Layered Architecture](#page-21-when-to-use-layered-architecture)
- [Page 22 — Modular Monolith Architecture Style](#page-22-modular-monolith-architecture-style)
- [Page 23 — Modular Monolith — Domain Modules](#page-23-modular-monolith-domain-modules)
- [Page 24 — Modular Monolith — Monolithic vs. Modular Internal Structure](#page-24-modular-monolith-monolithic-vs-modular-internal-structure)
- [Page 25 — Modular Monolith — Structure Options Illustrated](#page-25-modular-monolith-structure-options-illustrated)
- [Page 26 — Modular Monolith — Structure Comparison](#page-26-modular-monolith-structure-comparison)
- [Page 27 — Modular Monolith — Data Topology](#page-27-modular-monolith-data-topology)
- [Page 28 — Modular Monolith — Shared vs. Module-Owned Databases](#page-28-modular-monolith-shared-vs-module-owned-databases)
- [Page 29 — Modular Monolith — Restaurant Ordering Example](#page-29-modular-monolith-restaurant-ordering-example)
- [Page 30 — Modular Monolith — Architectural Characteristics](#page-30-modular-monolith-architectural-characteristics)
- [Page 31 — When to Use Modular Monolith](#page-31-when-to-use-modular-monolith)
- [Page 32 — When Not to Use Modular Monolith](#page-32-when-not-to-use-modular-monolith)
- [Page 33 — Microkernel Architecture — Core and Plug-ins](#page-33-microkernel-architecture-core-and-plug-ins)
- [Page 34 — Microkernel Architecture — Basic Components](#page-34-microkernel-architecture-basic-components)
- [Page 35 — Microkernel Architecture — Stable Core and Variable Plug-ins](#page-35-microkernel-architecture-stable-core-and-variable-plug-ins)
- [Page 36 — Microkernel Architecture — Core Structure Variations](#page-36-microkernel-architecture-core-structure-variations)
- [Page 37 — Microkernel Architecture — Plug-in Independence and Communication](#page-37-microkernel-architecture-plug-in-independence-and-communication)
- [Page 38 — Microkernel Architecture — Plug-in Registry and Contracts](#page-38-microkernel-architecture-plug-in-registry-and-contracts)
- [Page 39 — Microkernel Architecture — Plug-in-Owned Data Stores](#page-39-microkernel-architecture-plug-in-owned-data-stores)
- [Page 40 — Microkernel Architecture — Architectural Characteristics](#page-40-microkernel-architecture-architectural-characteristics)
- [Page 41 — When to Use Microkernel Architecture](#page-41-when-to-use-microkernel-architecture)
- [Page 42 — Comparison of Layered, Modular Monolith, and Microkernel](#page-42-comparison-of-layered-modular-monolith-and-microkernel)
- [Page 43 — Required Reading](#page-43-required-reading)
- [Page 44 — Summary](#page-44-summary)
- [Page 45 — References](#page-45-references)

---

# Page-by-Page Lecture Notes

## Page 01 — Monolithic Architectural Styles

### Original Page Content

MONOLITHIC ARCHITECTURAL
STYLES
Vishan Jayasinghearachchi
Lecturer - Department of Software Engineering,
Faculty of Computing,
Sri Lanka Institute of Information Technology.
vishan.j@sliit.lk
SE3100 - Architecture Based Development

### Visual Explanation

Title slide. It identifies the lecture as **Monolithic Architectural Styles**, gives the lecturer's name/contact, department/faculty/institution, and module **SE3100 - Architecture Based Development**. No technical diagram is present.

### Explanation

This lecture studies three monolithic architecture styles. All three are typically deployed as one application unit, but they organize internal structure very differently.

### Exam Tip

Expect scenario questions asking you to choose among Layered, Modular Monolith, and Microkernel.

### Common Mistake

Do not assume 'monolithic' means 'badly structured'.

---

## Page 02 — Learning Outcomes

### Original Page Content

LEARNING OUTCOMES
After completing this lecture, you will be able to,
- Explain what an architectural style represents.
- Differentiate architectural styles from architectural patterns.
- Describe the structure of Layered, Modular Monolith, and Microkernel
architectures.
- Evaluate their strengths, weaknesses, Quality Attribute implications, and
suitable use cases.

### Visual Explanation

A text-only learning-outcomes slide listing the five capabilities expected after the lecture.

### Explanation

The learning outcomes signal the exam focus: definition, comparison, internal structure, Quality Attribute trade-offs, and choosing a style for a scenario.

### Exam Tip

Focus on verbs in the outcomes: explain, differentiate, describe, evaluate, select.

### Common Mistake

Do not study only definitions; the outcomes explicitly include evaluation and use-case selection.

---

## Page 03 — Contents

### Original Page Content

CONTENTS
- Architectural styles and patterns
- Quality Attributes and style selection
- Monolithic vs. distributed architectural styles
- Layered Architecture
- Modular Monolith Architecture
- Microkernel Architecture
- Comparison of styles
- Summary

### Visual Explanation

A text-only contents slide outlining the progression from architectural styles/patterns to Layered, Modular Monolith, Microkernel, comparison, and summary.

### Explanation

The lecture first establishes style-selection concepts, then goes deeply into Layered Architecture, Modular Monolith, and Microkernel, and finally compares them.

### Exam Tip

Use the contents as your revision map.

### Common Mistake

Do not skip the comparison/summary pages; they contain the selection logic.

---

## Page 04 — What Is an Architectural Style?

### Original Page Content

WHAT IS AN ARCHITECTURAL STYLE?
- An architectural style describes important structural characteristics of an architecture.
- It describes aspects such as,
  - How components are organized
  - Physical architecture
  - Deployment
  - Communication
  - Data organization
- A style therefore describes the overall shape and default characteristics of an
architecture.

### Visual Explanation

No major visual diagram. The slide lists the structural concerns that an architectural style describes.

### Explanation

An architectural style is broader than a single design trick. It defines the default overall shape of the system: how parts are grouped, deployed, connected, and how data is organized.

### Definition

**Definition: Architectural Style** — A description of important structural characteristics and default overall shape of an architecture.

**Simple meaning:** How the whole system is generally organized, deployed, connected, and stores data.

### Exam Tip

Definition keywords: **overall structural characteristics**, organization, deployment, communication, data organization.

### Common Mistake

Do not define architectural style as only code organization; deployment, communication, and data topology are also included.

### Likely Exam Question

**Question:** What does an architectural style describe?

**Expected answer:** The overall structural characteristics/default shape of the architecture, including organization, deployment, communication, and data organization.

---

## Page 05 — Architectural Style — Core Aspects and Concerns

### Original Page Content

WHAT IS AN ARCHITECTURAL STYLE?
Aspect
Concern
Component topology
How components and dependencies are
organized
Physical architecture
Monolithic or distributed structure
Deployment
How the system is deployed
Communication style
How components communicate
Data topology
How application data is organized

### Recreated Table

| Aspect | Concern |
|---|---|
| Component topology | How components and dependencies are organized |
| Physical architecture | Monolithic or distributed structure |
| Deployment | How the system is deployed |
| Communication style | How components communicate |
| Data topology | How application data is organized |

### Visual Explanation

A two-column table maps architectural-style aspects to their concerns: component topology, physical architecture, deployment, communication style, and data topology.

### Explanation

These five concerns provide a checklist for describing any architectural style. Two systems using the same programming language can still have different architectural styles because their topology/deployment/communication/data differ.

### Exam Tip

Memorize the five style aspects: component topology, physical architecture, deployment, communication style, data topology.

### Common Mistake

Do not omit data topology or physical architecture when describing a style.

---

## Page 06 — Architectural Style vs. Pattern

### Original Page Content

ARCHITECTURAL STYLE VS. PATTERN
- Architectural Style
  - Describes the overall architectural structure
  - Describes topology and assumed/default characteristics
  - E.g. Microservices
- Architectural Pattern
  - Captures a contextualized solution
  - Addresses a particular architectural problem or context
  - Applied within an architectural style
  - E.g. CQRS

### Visual Explanation

A two-part comparison separates **Architectural Style** from **Architectural Pattern**, with Microservices as the style example and CQRS as the pattern example.

### Explanation

A style sets the overall structural approach; a pattern solves a more specific contextual problem inside that structure.

### Definition

**Definition: Architectural Pattern** — A contextualized solution that addresses a particular architectural problem or context and can be applied within an architectural style.

**Simple meaning:** A reusable solution to a specific architecture problem.

### Exam Tip

Style = overall topology/default characteristics; Pattern = contextual solution to a specific problem.

### Common Mistake

Do not use 'architectural style' and 'architectural pattern' as synonyms.

### Likely Exam Question

**Question:** Differentiate architectural style and architectural pattern.

**Expected answer:** A style describes overall topology/default characteristics; a pattern is a contextualized solution to a particular architectural problem.

---

## Page 07 — Quality Attributes and Style Selection

### Original Page Content

QUALITY ATTRIBUTES AND STYLE SELECTION
- Different architectural styles support different sets of Quality Attributes.
- Each architectural style has Quality Attributes which it supports well, and
Attributes which are traded off.
- Required Quality Attributes influence Choice of Architectural Style.
- There is no universally best architectural style.

### Visual Explanation

No major diagram. The slide emphasizes trade-offs: styles support some Quality Attributes better than others, and no universally best style exists.

### Explanation

Architecture selection is a trade-off exercise. Required Quality Attributes such as scalability, deployability, maintainability, and simplicity should drive the choice rather than personal preference.

### Definition

**Definition: Quality Attribute** — A measurable or observable property of a system such as scalability, maintainability, deployability, responsiveness, or fault tolerance.

**Simple meaning:** A non-functional quality the architecture should support.

### Exam Tip

Use the phrase **Quality Attribute trade-offs**. There is no universally best style.

### Common Mistake

Do not choose a style because it is popular. Match it to required Quality Attributes.

### Likely Exam Question

**Question:** Why is there no universally best architectural style?

**Expected answer:** Because each style supports some Quality Attributes well and trades off others; selection depends on required attributes and constraints.

---

## Page 08 — Monolithic vs. Distributed Architectures

### Original Page Content

MONOLITHIC VS. DISTRIBUTED ARCHITECTURES
- Architectural Styles can be broadly categorized into two types based on
deployment.
  - Monolithic
    - A single deployment unit of application code (and databases, configurations etc.)
  - Distributed
    - Multiple deployment units connected through networks.

### Visual Explanation

A text-only classification based on deployment: **Monolithic = one deployment unit**, **Distributed = multiple network-connected deployment units**.

### Explanation

The deployment boundary is the key distinction here: monolithic systems normally have one deployment unit; distributed systems have several units communicating over a network.

### Definition

**Definition: Monolithic Architecture** — An application architecture typically deployed as a single deployment unit.

**Simple meaning:** One application deployment boundary.

**Definition: Distributed Architecture** — An architecture made of multiple deployment units connected through networks.

**Simple meaning:** Several deployed parts that communicate remotely.

### Exam Tip

Monolithic = one deployment unit; Distributed = multiple network-connected deployment units.

### Common Mistake

Do not classify a system as distributed just because it has many internal modules.

### Likely Exam Question

**Question:** Differentiate monolithic and distributed architectures.

**Expected answer:** Monolithic uses a single deployment unit; distributed uses multiple network-connected deployment units.

---

## Page 09 — Monolithic Architecture Styles

### Original Page Content

MONOLITHIC ARCHITECTURE STYLES
- A monolithic architecture can still contain many components, classes, logical
layers and modules.
- A monolith can still have strong internal modularity.
- The important point is that these elements normally belong to a single
application deployment boundary (i.e. one Architecture Quantum).
- In this lecture, the following monolithic architectural styles will be discussed:
  - Layered Architecture
  - Modular Monolith
  - Microkernel Architecture

### Visual Explanation

No major diagram. The slide clarifies that a monolith can still have many components, classes, layers, and modules while remaining inside one application deployment boundary / Architecture Quantum.

### Explanation

Monolithic does **not** mean unstructured. Internal modularity can be strong. The key is that the internal elements normally share one application deployment boundary.

### Definition

**Definition: Architecture Quantum** — The application deployment boundary referred to in the lecture when describing monolithic styles.

**Simple meaning:** The unit that is deployed together.

### Exam Tip

A monolith can still be modular. Deployment boundary is the deciding idea.

### Common Mistake

Do not confuse internal modularity with multiple deployment units.

---

## Page 10 — Why Use a Monolith?

### Original Page Content

WHY USE A MONOLITH?
- Monolithic architectures avoid many of the challenges introduced by
distributed communication.
- Compared with distributed architectures, they generally involve,
  - Fewer deployment units
  - No required remote communication between internal application components
  - Lower infrastructure and network complexity
  - Lower overall cost
- Local calls also avoid the problems introduced by remote communication
(Refer - Fallacies of Distributed Computing from the previous lecture).

### Visual Explanation

No major diagram. The slide contrasts monoliths with distributed systems using deployment count, remote communication, infrastructure/network complexity, and cost.

### Explanation

Monoliths gain simplicity by avoiding network calls between internal components. This reduces operational cost and avoids many distributed-computing failure modes.

### Exam Tip

Main monolith benefits: fewer deployment units, local calls, lower infra/network complexity, lower cost.

### Common Mistake

Do not ignore the cost/complexity introduced by remote communication in distributed systems.

---

## Page 11 — Layered Architecture — Structure

### Original Page Content

LAYERED ARCHITECTURE
- The Layered Architecture Style organizes components into logical horizontal
layers.
- Architecture is Technically Partitioned.
- A common structure can contain the following layers:
  - Presentation
  - Business
  - Persistence
  - Database

### Visual Explanation

A four-layer stack diagram shows **Presentation → Business → Persistence → Database** inside one logical layered structure.

### Explanation

Layered Architecture partitions by **technical responsibility** rather than business domain. A request typically flows downward through technical layers.

### Definition

**Definition: Layered Architecture** — An architectural style that organizes components into logical horizontal technical layers.

**Simple meaning:** Separate Presentation, Business, Persistence, and Database concerns.

### Exam Tip

Layered = **technical partitioning**. Remember Presentation → Business → Persistence → Database.

### Common Mistake

Do not call Layered Architecture domain-partitioned; this lecture classifies it as technically partitioned.

### Likely Exam Question

**Question:** What are the four common layers in Layered Architecture?

**Expected answer:** Presentation, Business, Persistence, Database.

---

## Page 12 — Layered Architecture — Layer Responsibilities

### Original Page Content

LAYERED ARCHITECTURE
Layer
Responsibilities
Presentation Layer
User Interface, User Interaction, Presentation logic
Business Layer
Business rules, Business processing
Persistence Layer
Data access, Persistence logic
Database Layer
Data Storage

### Recreated Layer Responsibilities Table

| Layer | Responsibilities |
|---|---|
| Presentation Layer | User Interface, User Interaction, Presentation logic |
| Business Layer | Business rules, Business processing |
| Persistence Layer | Data access, Persistence logic |
| Database Layer | Data Storage |

### Visual Explanation

A two-column table maps each layer to its responsibilities.

### Explanation

Each layer owns a different concern. Keeping business rules out of Presentation and data-access logic out of Business is what creates separation of concerns.

### Exam Tip

Memorize each layer's responsibility table.

### Common Mistake

Do not place business rules in Presentation or persistence concerns in Business.

---

## Page 13 — Layered Architecture — Deployment Variants

### Original Page Content

LAYERED ARCHITECTURE

### Recreated Deployment Variants

```text
Variant A
[Presentation + Business + Persistence]
                |
                v
           [Database]

Variant B
      [Presentation]
            |
            v
 [Business + Persistence]
            |
            v
        [Database]

Variant C
[Presentation + Business + Persistence + Database]
```

The source uses these figures to show that **logical layers do not require a single fixed physical deployment topology**.

### Visual Explanation

A figure shows three **physical topology/deployment variants** for a layered system: (1) application layers grouped with database separate, (2) presentation separated from business/persistence with database separate, and (3) all layers including database shown together.

### Explanation

Logical layering does not force one physical deployment layout. Layers can be packaged into different physical units while preserving the logical Layered Architecture model.

### Exam Tip

Logical architecture and physical deployment topology are related but not identical.

### Common Mistake

Do not assume every logical layer must be deployed as its own physical unit.

---

## Page 14 — Layered Architecture — Closed Layers

### Original Page Content

LAYERED ARCHITECTURE
- Each layer in a Layered architecture can be Closed or Open.
- If a layer is closed, a request moves sequentially from the top layer down to the
bottom layer and cannot skip any layers.

### Recreated Closed-Layer Flow

```text
Request
  |
  v
Presentation  [Closed]
  |
  v
Business      [Closed]
  |
  v
Persistence   [Closed]
  |
  v
Database      [Closed]
```

No layer may be skipped.

### Visual Explanation

A closed-layer diagram shows a request flowing sequentially down Presentation → Business → Persistence → Database. Every layer is labeled **Closed**, so skipping is not allowed.

### Explanation

Closed layers enforce strict dependency flow. This improves isolation because upper layers rely only on the contract of the next layer instead of reaching deep into implementation details.

### Exam Tip

Closed layer = cannot skip it.

### Common Mistake

Closed layers cannot be bypassed.

### Likely Exam Question

**Question:** What is a closed layer?

**Expected answer:** A layer that cannot be skipped; requests move sequentially through it.

---

## Page 15 — Layered Architecture — Layers of Isolation

### Original Page Content

LAYERED ARCHITECTURE
- An important concept in Layered Architecture is Layers of Isolation.
- Layers of Isolation concept means that changes within one layer generally do
not affect other layers, as long as the contracts between layers remain
unchanged.
- Each layer is independent of the other layers, with little or no knowledge of
their inner workings.
- This concept is enabled by Closed Layers.

### Visual Explanation

No separate diagram. The key visual idea is conceptual isolation: layers can change internally without affecting others if inter-layer contracts remain stable.

### Explanation

Layers of Isolation are a major Layered Architecture benefit: internal implementation can change while contracts stay stable.

### Definition

**Definition: Layers of Isolation** — The principle that changes within one layer generally do not affect other layers while inter-layer contracts remain unchanged.

**Simple meaning:** Change one layer without breaking the others.

### Exam Tip

Layers of Isolation depend on stable contracts between layers.

### Common Mistake

Isolation is preserved only while inter-layer contracts remain unchanged.

### Likely Exam Question

**Question:** What are Layers of Isolation?

**Expected answer:** Changes within one layer generally do not affect other layers while contracts remain unchanged.

---

## Page 16 — Layered Architecture — Open Layers

### Original Page Content

LAYERED ARCHITECTURE
- However, it makes sense to keep a layer open sometimes. An open layer may be
bypassed.
- This may avoid unnecessary processing when a layer does not need to
participate in every request.
- More bypassing would lead to higher coupling between layers which would
lead to less isolation.
- Therefore, whether a layer should be open or closed is an architectural decision.

### Visual Explanation

No separate diagram. The page explains that an **Open** layer may be bypassed to avoid unnecessary processing, but more bypassing increases coupling and reduces isolation.

### Explanation

Open layers trade isolation for efficiency. Skipping unnecessary layers may improve performance, but creates more direct knowledge/coupling between non-adjacent layers.

### Exam Tip

Open layer = may be bypassed; trade-off is more coupling / less isolation.

### Common Mistake

Opening many layers can destroy isolation through direct coupling.

### Likely Exam Question

**Question:** Why would a layer be left open?

**Expected answer:** To allow bypass when that layer does not need to participate, avoiding unnecessary processing.

---

## Page 17 — Layered Architecture — Shared Components

### Original Page Content

LAYERED ARCHITECTURE
Shared Components Only
Business Layer Components
should have access to.

### Recreated Shared-Component Rule

```text
Presentation Component
        |
        v
+---------------- Business Layer ----------------+
| Business Component ---> Shared Component       |
| Business Component ---> Shared Component       |
| Business Component ---> Shared Component       |
+------------------------------------------------+
        |
        v
Persistence
        |
        v
Database
```

**Source annotation:** Shared components should be accessed only by Business-layer components.

### Visual Explanation

The figure places **Shared components** inside the Business layer. Business components can use them, while the presentation component is shown as not directly accessing those shared components.

### Explanation

Shared components should live at the lowest layer that legitimately owns them. In the figure, shared business functionality is available to business components, not directly to Presentation.

### Exam Tip

Shared components should be accessible only from the layer that owns them.

### Common Mistake

Do not allow Presentation to directly access shared Business-layer components shown as internal to Business.

---

## Page 18 — Layered Architecture — Adding an Open Services Layer

### Original Page Content

LAYERED ARCHITECTURE

### Recreated Open Services Layer

```text
Presentation [Closed]
      |
      v
Business     [Closed]
      |       |  \ bypass allowed
      v   v
Services     Persistence
[Open]       [Closed]
      \       |
       \      v
        +--> Database [Closed]
```

The open Services layer can be skipped for requests that do not need it.

### Visual Explanation

The figure adds an **Open Services layer** between Business and Persistence. Requests that need services can use it; requests that do not need it may bypass it because the Services layer is open. The diagram also prevents Presentation from directly reaching the shared service component.

### Explanation

An open Services layer is useful when only some requests need service/shared functionality. The open designation lets unrelated requests continue to Persistence without artificial pass-through processing.

### Exam Tip

An open Services layer avoids forcing every request through service logic.

### Common Mistake

Do not create a Services layer and then force every request through it if the layer is intended to be open.

---

## Page 19 — Layered Architecture — Architecture Sinkhole Antipattern

### Original Page Content

LAYERED ARCHITECTURE
- Architecture Sinkhole Antipattern - This antipattern occurs when requests are
simply passed through from layer to layer, with no business logic performed.
- Results in unnecessary object instantiation and processing, draining both
memory consumption and performance.
- e.g.:
  - Presentation layer requests for basic customer information (e.g. Address).
  - The request gets passed to each layer below until the database layer.
  - Database responds with the data, which is sent upwards by layer. Each layer does
no additional processing.
- Note - Every layered architecture will have some scenarios that can be considered as
Architecture Sinkhole.

### Visual Explanation

No major diagram. The page explains the **Architecture Sinkhole Antipattern** using a request for simple customer data passing through every layer without any layer adding logic.

### Explanation

The sinkhole antipattern appears when layers exist structurally but add no value for many requests. Too much pass-through adds processing and object creation without improving separation.

### Definition

**Definition: Architecture Sinkhole Antipattern** — A situation where requests pass through multiple layers without those layers performing meaningful business logic.

**Simple meaning:** Layers forward the request but add no value.

### Exam Tip

Architecture Sinkhole = pass-through layers with no meaningful logic.

### Common Mistake

Do not treat every pass-through as automatically fatal; the lecture notes every layered architecture will have some sinkhole-like scenarios.

### Likely Exam Question

**Question:** What is the Architecture Sinkhole Antipattern?

**Expected answer:** Requests pass through layers that add no business logic, causing unnecessary processing/object creation.

---

## Page 20 — Layered Architecture — Architectural Characteristics

### Original Page Content

LAYERED ARCHITECTURE

### Recreated Layered Architecture Ratings

| Architectural characteristic | Source value |
|---|---|
| Overall cost | `$` |
| Partitioning type | Technical |
| Number of quanta | 1 |
| Simplicity | ★★★★★ |
| Modularity | ★ |
| Maintainability | ★ |
| Testability | ★★ |
| Deployability | ★ |
| Evolvability | ★ |
| Responsiveness | ★★★ |
| Scalability | ★ |
| Elasticity | ★ |
| Fault tolerance | ★ |

### Visual Explanation

A star-rating table evaluates Layered Architecture: very high simplicity, but low modularity, deployability, evolvability, scalability, elasticity, and fault tolerance; responsiveness is moderate.

### Explanation

Layered Architecture's strongest characteristic here is simplicity. Its single deployment and technical partitioning make it cheap and easy to understand, but reduce independent deployability/scaling and system-wide fault isolation.

### Exam Tip

Layered ratings: simplicity 5★; responsiveness 3★; testability 2★; most other listed attributes 1★.

### Common Mistake

Do not read star ratings as universal absolute truth; they express the lecture/textbook's comparative characteristics.

---

## Page 21 — When to Use Layered Architecture

### Original Page Content

WHEN TO USE LAYERED ARCHITECTURE
- Suitable for:
  - Small, Simple applications
  - Websites
  - Projects with tight budgets and tight development schedules
- It is also useful when development must begin before the long-term
architectural direction is clear.
- Less suitable for large systems that require high levels of scalability, agility,
deployability etc.

### Visual Explanation

No major diagram. The page lists suitable and unsuitable contexts for Layered Architecture.

### Explanation

Layered Architecture fits smaller, simpler, budget-constrained applications and situations where the long-term architecture is not yet known. It is weaker when demanding operational attributes dominate.

### Exam Tip

Best fit: small/simple/budget/time constrained. Poor fit: high scalability/agility/deployability needs.

### Common Mistake

Do not select Layered for large systems requiring high scalability/agility/deployability without acknowledging the trade-offs.

### Likely Exam Question

**Question:** When is Layered Architecture suitable?

**Expected answer:** Small/simple applications, websites, tight budget/schedule, or when long-term architecture is unclear.

---

## Page 22 — Modular Monolith Architecture Style

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE
- A Modular Monolith is one deployment unit internally organized around
business domains.
- It is therefore primarily domain partitioned. Layers may still exist inside
individual domain modules.
- Example for modules on an e-commerce platform:
  - Order Placement
  - Inventory Management
  - Payment Processing
  - Notification
  - Shipping

### Visual Explanation

No major diagram. The page defines Modular Monolith as one deployment unit organized around business domains and gives e-commerce module examples.

### Explanation

Modular Monolith keeps one deployment boundary but partitions functionality by **business domain** instead of purely technical layers.

### Definition

**Definition: Modular Monolith** — One deployment unit internally organized around business domains or subdomains.

**Simple meaning:** One deployable app, but split internally by business modules.

### Exam Tip

Modular Monolith = one deployment + domain partitioning.

### Common Mistake

Do not describe Modular Monolith as multiple independently deployed services.

### Likely Exam Question

**Question:** What is a Modular Monolith?

**Expected answer:** A single deployment unit internally organized around business domains/modules.

---

## Page 23 — Modular Monolith — Domain Modules

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE

### Recreated Domain-Module Topology

```text
+--------------------------------------+
|             One Deployment           |
|                                      |
| [Module] [Module] [Module]           |
| [Module] [Module] [Module]           |
| [Module] [Module] [Module]           |
|                                      |
+--------------------------------------+
```

Functionality is grouped by **domain area**.

### Visual Explanation

A large container holds many separate **Module** boxes. The figure caption states that functionality is grouped by **domain area**.

### Explanation

Domain grouping keeps closely related business behavior together. This can improve conceptual modularity compared with spreading one domain across many horizontal technical layers.

### Exam Tip

Key phrase: functionality grouped by **domain area**.

### Common Mistake

Domain module does not mean separate deployment.

---

## Page 24 — Modular Monolith — Monolithic vs. Modular Internal Structure

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE
- Modules inside a Modular Monolithic Architecture can be organized in two
ways.
  - Monolithic Structure
    - 
All the modules representing the system are contained in a single source-code repository.
    - 
Each module is represented by a separate high-level directory containing the components and
any subdomains that make up that module.
    - 
Deployed as a single unit.
o
Modular Structure
    - 
Modules are represented as self-contained artifacts (such as JAR and DLL files).
    - 
They are put together into a single deployment unit during deployment.

### Visual Explanation

No diagram. The slide defines two internal organization options: **Monolithic Structure** (all modules in one repository/directories) and **Modular Structure** (self-contained artifacts such as JAR/DLL combined into one deployment unit).

### Explanation

Both internal structures still deploy as one application. The difference is how strongly module boundaries are represented in source/artifact structure.

### Exam Tip

Monolithic Structure = directories in one source repo. Modular Structure = separate JAR/DLL artifacts assembled into one deployment.

### Common Mistake

Separate JAR/DLL modules can still be assembled into one monolithic deployment unit.

### Likely Exam Question

**Question:** Differentiate Monolithic Structure and Modular Structure inside a Modular Monolith.

**Expected answer:** Monolithic Structure keeps modules together in one source structure; Modular Structure packages them as separate artifacts assembled into one deployment.

---

## Page 25 — Modular Monolith — Structure Options Illustrated

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE

### Recreated Internal Structure Options

```text
Monolithic Structure Option
One source-code structure
+------------------------------------------------+
| Order placement | Inventory | Order fulfillment|
| Payment         | Customer notification | Ship |
+------------------------------------------------+

Modular Structure Option
Self-contained artifacts assembled together
+------------------------------------------------+
| JAR | JAR | JAR | JAR | JAR                   |
| JAR | JAR | JAR | JAR | JAR                   |
+------------------------------------------------+

Example artifacts:
order_placement.jar
payment.jar
shipping.jar
```

Both options still become **one deployment unit**.

### Visual Explanation

Two diagrams compare the options. The upper-left figure shows domain modules such as Order Placement, Inventory Management, Payment Processing, Customer Notification, Shipping, etc. inside one code structure. The lower-right figure shows those modules packaged as separate JAR artifacts but assembled into one deployment unit.

### Explanation

Packaging modules into separate artifacts makes boundaries more explicit. Keeping everything in one code structure is simpler but needs governance to stop accidental cross-module coupling.

### Exam Tip

Separate artifacts strengthen boundaries but do not make the system distributed if deployment is still one unit.

### Common Mistake

Stronger artifact boundaries do not eliminate communication/coupling concerns.

---

## Page 26 — Modular Monolith — Structure Comparison

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE
Aspect
Monolithic Structure
Modular Structure
Source code
All modules kept together
Each module kept separately
Main advantage
Simple to maintain, test, and
deploy
Stronger module boundaries and separation
of concerns
Code reuse
Higher risk of excessive reuse
across modules
Less tendency for excessive cross-module
reuse
Module communication
Easier when modules
frequently interact
Best when modules are largely independent
Governance
Requires strict governance to
preserve boundaries
Boundaries are easier to maintain
structurally
Best suited for
Systems with interdependent
modules
Larger systems with independent modules or
specialized teams
Main risk
Can degrade into a Big Ball of
Mud
Less effective when dependent modules
require frequent communication

### Recreated Comparison Table

| Aspect | Monolithic Structure | Modular Structure |
|---|---|---|
| Source code | All modules kept together | Each module kept separately |
| Main advantage | Simple to maintain, test, and deploy | Stronger module boundaries and separation of concerns |
| Code reuse | Higher risk of excessive reuse across modules | Less tendency for excessive cross-module reuse |
| Module communication | Easier when modules frequently interact | Best when modules are largely independent |
| Governance | Requires strict governance to preserve boundaries | Boundaries are easier to maintain structurally |
| Best suited for | Systems with interdependent modules | Larger systems with independent modules or specialized teams |
| Main risk | Can degrade into a Big Ball of Mud | Less effective when dependent modules require frequent communication |

### Visual Explanation

A three-column table compares Monolithic Structure vs. Modular Structure across source code, main advantage, code reuse, module communication, governance, best fit, and main risk.

### Explanation

The table captures the central trade-off: monolithic internal structure favors convenience and frequent interaction, while modular artifact structure favors stronger boundaries and team/module independence.

### Exam Tip

Know the risk: Monolithic Structure can degrade into a **Big Ball of Mud**.

### Common Mistake

Code reuse across modules can become harmful if it breaks boundaries.

---

## Page 27 — Modular Monolith — Data Topology

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE
- A modular monolith is usually deployed as a single unit. It typically uses a
single monolithic database.
  - A shared database can reduce communication between modules because data is
directly shared.
- However, independent modules may have their own databases containing
module-specific contextual data. Therefore, a modular monolith can use either:
  - One shared database
  - Separate databases for individual modules
- The application remains monolithic even when multiple databases are used.

### Visual Explanation

No diagram. The slide explains that a Modular Monolith usually has a shared monolithic database, but independent modules may own separate contextual databases without changing the application's monolithic deployment classification.

### Explanation

Data topology does not alone decide whether the application is monolithic. The lecture's key point is that the application remains a monolith because deployment is still one application unit.

### Exam Tip

Multiple databases do not automatically make the application distributed.

### Common Mistake

Do not claim that separate module databases automatically convert a Modular Monolith into Microservices.

### Likely Exam Question

**Question:** Can a Modular Monolith use multiple databases?

**Expected answer:** Yes. Module-specific databases are possible while the application remains one monolithic deployment.

---

## Page 28 — Modular Monolith — Shared vs. Module-Owned Databases

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE

### Recreated Data Topology Options

```text
Option 1: Shared database
+-------------------------------+
| Module  Module  Module        |
| Module  Module  Module        |
+-------------------------------+
              |
              v
        [Shared Database]


Option 2: Module-owned databases
+-------------------------------+
| Module  Module  Module        |----> [DB]
| Module  Module  Module        |----> [DB]
| Module  Module  Module        |----> [DB]
+-------------------------------+
```

In both cases, the **application deployment remains monolithic**.

### Visual Explanation

A side-by-side data-topology figure shows (left) many modules using **one shared database** and (right) modules connecting to **separate databases**. Both remain inside a monolithic application deployment.

### Explanation

A shared database makes cross-module data access easy but increases coupling through data. Separate module databases strengthen ownership/context boundaries while still allowing one application deployment.

### Exam Tip

Data can be shared or module-owned while deployment remains monolithic.

### Common Mistake

Deployment topology and data topology are different dimensions.

---

## Page 29 — Modular Monolith — Restaurant Ordering Example

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE

### Recreated Restaurant Modular Monolith

```text
HTTP client (customer)        HTTP client (restaurant staff)
          |                               |
          v                               v
+-----------------------------------------------------------+
|                 One Modular Monolith                      |
|                                                           |
| Customer/order domain          Restaurant operations      |
| +----------------------+       +-----------------------+   |
| | Place order          | ----> | Prepare order         |   |
| | Payment processing   |       | Recipes               |   |
| +----------------------+       | Delivery              |   |
|                                | Ingredients inventory |   |
|                                +-----------------------+   |
+-----------------------------------------------------------+
                          |
                          v
                      [Database]
```

### Visual Explanation

A restaurant example shows two HTTP clients: customer and restaurant staff. Customer-facing modules include **Place order** and **Payment processing**; staff/operations modules include **Prepare order**, **Recipes**, **Delivery**, and **Ingredients inventory**. The modules share one database.

### Explanation

The restaurant example demonstrates domain partitioning in a realistic system: customer ordering/payment and restaurant operations are separate functional modules inside one application.

### Exam Tip

Use the restaurant example to explain domain modules in a real scenario.

### Common Mistake

Do not reorganize this example into horizontal technical layers; the figure demonstrates domain-oriented modules.

---

## Page 30 — Modular Monolith — Architectural Characteristics

### Original Page Content

MODULAR MONOLITH ARCHITECTURE STYLE

### Recreated Modular Monolith Ratings

| Architectural characteristic | Source value |
|---|---|
| Overall cost | `$` |
| Partitioning type | Domain |
| Number of quanta | 1 |
| Simplicity | ★★★★★ |
| Modularity | ★★ |
| Maintainability | ★★ |
| Testability | ★★ |
| Deployability | ★★ |
| Evolvability | ★★ |
| Responsiveness | ★★★ |
| Scalability | ★ |
| Elasticity | ★ |
| Fault tolerance | ★ |

### Visual Explanation

A star-rating table evaluates Modular Monolith: high simplicity, improved modularity/maintainability/testability/deployability/evolvability compared with Layered, moderate responsiveness, but still low scalability, elasticity, and fault tolerance.

### Explanation

Compared with classic Layered Architecture, Modular Monolith gains better modularity and engineering characteristics while preserving low cost and single deployment. Operational scaling/fault-isolation limits remain.

### Exam Tip

Modular Monolith ratings: simplicity 5★, responsiveness 3★, engineering attributes mostly 2★, operational scaling attributes 1★.

### Common Mistake

Do not expect high scalability/fault tolerance from one deployment quantum.

---

## Page 31 — When to Use Modular Monolith

### Original Page Content

WHEN  TO USE MODULAR MONOLITH
ARCHITECTURE STYLE
- Suitable when there are tight budget or time constraints.
- A good choice for starting a new system and when the system’s future
architectural direction is still uncertain.
- Allows the system to start simple and evolve later into distributed styles such as
Service-based architecture and Microservices.
- Allows teams to own a module end to end with minimal coordination
- Naturally supports Domain-Driven Design (DDD) because it uses domain
partitioning.

### Visual Explanation

No diagram. The page lists when Modular Monolith is suitable: tight budget/time, uncertain future architecture, evolution path to distributed styles, end-to-end module ownership, and Domain-Driven Design.

### Explanation

Modular Monolith is a strong starting architecture when you want simplicity now but clearer domain boundaries that could later evolve toward services or microservices.

### Exam Tip

Good stepping stone toward Service-based Architecture or Microservices.

### Common Mistake

Do not assume evolution to microservices is automatic; clear module boundaries make it easier, not guaranteed.

### Likely Exam Question

**Question:** Why is Modular Monolith a useful starting architecture?

**Expected answer:** It stays simple/low-cost while giving domain boundaries that can later support evolution toward distributed styles.

---

## Page 32 — When Not to Use Modular Monolith

### Original Page Content

WHEN NOT  TO USE MODULAR MONOLITH
ARCHITECTURE STYLE
- Not suitable when the system requires high
levels of Scalability, Availability, Responsiveness, Performance etc.
- Avoid when most changes are technically oriented, such as frequently
replacing User interface technology, Database technology etc.
  - Because it is domain partitioned, technical changes may affect many or all
modules.
  - Such changes can require significant coordination between domain teams.
  - In these situations, a layered architecture may be a better choice.

### Visual Explanation

No diagram. The page lists conditions where Modular Monolith is a poor fit, especially high scalability/availability/responsiveness/performance needs and systems dominated by frequent cross-cutting technical changes.

### Explanation

Because domain partitioning repeats technical concerns inside modules, a system that constantly changes UI/database technology across the whole product may require coordinated edits in many modules.

### Exam Tip

If changes are mostly cross-cutting technical changes, Layered may fit better than domain-partitioned Modular Monolith.

### Common Mistake

Do not use Modular Monolith when frequent technical platform changes dominate without considering coordination cost.

### Likely Exam Question

**Question:** When may Layered Architecture be preferable to Modular Monolith?

**Expected answer:** When changes are mostly technical/cross-cutting, such as frequent UI or database technology replacement.

---

## Page 33 — Microkernel Architecture — Core and Plug-ins

### Original Page Content

MICROKERNEL ARCHITECTURE
- Also known as the Plug-in Architecture.
- A long-established architecture style that is still widely used.
- A natural fit for product-based applications.
  - Particularly useful when the application requires customization or extensibility.
  - Also suitable for custom business applications with varying domain rules.
- Application logic is divided between the core and independent plug-ins.
  - Core system - The core contains the basic functionality of the system.
  - Plug-ins - Plug-ins provide specific application features or processing logic.

### Visual Explanation

No diagram. The slide introduces Microkernel as **Plug-in Architecture** and divides application logic between a stable core and independent plug-ins.

### Explanation

Microkernel isolates stable behavior in a core and variable/customizable behavior in plug-ins. This is why it is common in extensible products and tooling ecosystems.

### Definition

**Definition: Microkernel Architecture** — Also called Plug-in Architecture; it separates a stable core from independent plug-ins that provide specialized or variable functionality.

**Simple meaning:** Stable core + extendable plug-ins.

### Exam Tip

Microkernel = **Plug-in Architecture** = stable core + independent plug-ins.

### Common Mistake

Do not put all variable/custom behavior into the core.

### Likely Exam Question

**Question:** What are the two main parts of Microkernel Architecture?

**Expected answer:** Core system and plug-ins.

---

## Page 34 — Microkernel Architecture — Basic Components

### Original Page Content

MICROKERNEL ARCHITECTURE

### Recreated Microkernel Topology

```text
[Plug-in]     [Plug-in]
     \         /
      \       /
      +----------------+
      |  Core System   |
      +----------------+
      /       \
     /         \
[Plug-in]     [Plug-in]
```

The core contains base functionality; plug-ins add specialized features.

### Visual Explanation

A large **Core system** sits in the center with multiple **Plug-in component** boxes connected on both sides.

### Explanation

The topology is hub-and-spoke: the core coordinates, while plug-ins add capabilities around it.

### Exam Tip

Draw a central core with plug-ins around it.

### Common Mistake

Do not let plug-ins become tightly interdependent if you want true extensibility.

---

## Page 35 — Microkernel Architecture — Stable Core and Variable Plug-ins

### Original Page Content

MICROKERNEL ARCHITECTURE
- Core is the minimum functionality required to run the system
- The core should remain relatively stable.
- Plug-In Components contain functionality that is,
  - Specialized
  - Variable
  - Customizable
  - More likely to change
- This moves complexity and variation away from the core.
- The core itself may internally use another structure such as,
  - Layered Architecture
  - Modular Monolith

### Visual Explanation

No separate diagram. The page classifies the core as minimum, stable functionality and plug-ins as specialized, variable, customizable, more frequently changing functionality.

### Explanation

The design goal is to keep the core small and stable. Variation is deliberately pushed outward so changing one specialized feature does not force repeated modification of the core.

### Exam Tip

Core = minimum stable functionality; plug-ins = specialized/variable/customizable/change-prone.

### Common Mistake

A large unstable core defeats the purpose of Microkernel.

### Likely Exam Question

**Question:** What belongs in the Microkernel core vs. plug-ins?

**Expected answer:** Core contains minimum stable functionality; plug-ins contain specialized, variable, customizable, change-prone functionality.

---

## Page 36 — Microkernel Architecture — Core Structure Variations

### Original Page Content

MICROKERNEL ARCHITECTURE

### Recreated Core Variations

```text
Option A — Layered Core (technical partitioning)

Plug-ins -> +----------------------+
            | Presentation Layer   |
            | Business Layer       |
            | Persistence Layer    |
            +----------------------+
                                      <- Plug-ins


Option B — Modular Core (domain partitioning)

Plug-ins -> +----------------------+
            | Domain | Domain      |
            | Domain | Domain      |
            | Domain | Domain      |
            +----------------------+
                                      <- Plug-ins
```

### Visual Explanation

Two diagrams show that the Microkernel core itself can be a **Layered core system (technically partitioned)** or a **Modular core system (domain partitioned)**, while plug-ins remain around the core.

### Explanation

Microkernel does not dictate the internal design of the core. The core may itself be technically layered or domain modular.

### Exam Tip

Core can internally be Layered or Modular Monolith.

### Common Mistake

Do not assume Microkernel core must be Layered; the lecture explicitly shows a modular core alternative.

---

## Page 37 — Microkernel Architecture — Plug-in Independence and Communication

### Original Page Content

MICROKERNEL ARCHITECTURE
- Plug-ins should ideally be,
  - Self-contained
  - Independent of other plug-ins
  - Connected primarily to the core
- Typical communication is from Core to Plugins using a method or function call.
- Plug-ins may be,
  - Compile-Based - Adding or changing a plug-in requires redeploying the application.
  - Runtime-Based - Plug-ins can be added or removed while the system is running.
- Remote plug-ins may also use,
  - REST
  - Messaging
  - Note - This introduces distributed-system complexity.

### Visual Explanation

No separate diagram. The slide describes plug-ins as self-contained and independent, primarily communicating with the core using method/function calls; compile-based, runtime-based, REST, and messaging options are listed.

### Explanation

Local compile/runtime plug-ins keep communication simple. Remote plug-ins can use REST or messaging, but then the architecture starts inheriting distributed-system complexity.

### Exam Tip

Ideal plug-ins: self-contained, independent, primarily connected to core.

### Common Mistake

Remote plug-ins introduce distributed-system complexity such as network failure/latency.

### Likely Exam Question

**Question:** How should plug-ins ideally relate to each other?

**Expected answer:** They should be self-contained, independent of other plug-ins, and connected primarily to the core.

---

## Page 38 — Microkernel Architecture — Plug-in Registry and Contracts

### Original Page Content

MICROKERNEL ARCHITECTURE
- The core needs to know which plug-ins exist and how to access them.
- This is commonly handled through a Plug-In Registry.
- The registry may contain information such as
  - Plug-in name
  - Location or reference
  - Contract information
- Contracts define how the core and plug-ins interact, including:
  - Expected behaviour
  - Input data
  - Output data
- Contracts allow plug-ins to vary without requiring specialized core logic for each one.

### Visual Explanation

No diagram. The page explains a **Plug-In Registry** that records plug-in name, location/reference, and contract information. Contracts define behavior, input, and output.

### Explanation

The registry and contracts decouple the core from plug-in-specific implementation. The core can invoke plug-ins through a common contract rather than hard-code special logic for each one.

### Definition

**Definition: Plug-In Registry** — A mechanism that records which plug-ins exist and how the core can access them.

**Simple meaning:** A directory of available plug-ins.

**Definition: Plug-In Contract** — The defined behavior and input/output rules used for core–plug-in interaction.

**Simple meaning:** The interface/rules a plug-in must follow.

### Exam Tip

Registry knows what plug-ins exist; contracts define behavior/input/output.

### Common Mistake

Do not hard-code special core logic for each plug-in when a common contract can be used.

### Likely Exam Question

**Question:** What is the purpose of a Plug-In Registry?

**Expected answer:** To tell the core which plug-ins exist and how to access them.

---

## Page 39 — Microkernel Architecture — Plug-in-Owned Data Stores

### Original Page Content

MICROKERNEL ARCHITECTURE

### Recreated Data Ownership

```text
 [Plugin] ---> [Plugin Data Store]
     |
     v
+-------------+
| Core System | ---> [Core Database]
+-------------+
     ^
     |
 [Plugin] ---> [Plugin Data Store]
```

The source explicitly shows that a plug-in component can own its own data store.

### Visual Explanation

The central core uses its own database while individual plug-in components are shown connected to their own independent data stores. This demonstrates that plug-ins can own data.

### Explanation

Allowing plug-ins to own data can improve independence, but data ownership and consistency boundaries must be designed explicitly.

### Exam Tip

Plug-ins may own their own data stores.

### Common Mistake

Separate plugin data stores improve independence but can increase data-management complexity.

---

## Page 40 — Microkernel Architecture — Architectural Characteristics

### Original Page Content

MICROKERNEL ARCHITECTURE

### Recreated Microkernel Ratings

| Architectural characteristic | Source value |
|---|---|
| Overall cost | `$` |
| Partitioning type | Domain and technical |
| Number of quanta | 1 |
| Simplicity | ★★★★ |
| Modularity | ★★★ |
| Maintainability | ★★★ |
| Testability | ★★★ |
| Deployability | ★★★ |
| Evolvability | ★★★ |
| Responsiveness | ★★★ |
| Scalability | ★ |
| Elasticity | ★ |
| Fault tolerance | ★ |

### Visual Explanation

A star-rating table evaluates Microkernel: high simplicity, modularity, maintainability, testability, deployability, and evolvability; moderate responsiveness; low scalability, elasticity, and fault tolerance.

### Explanation

Microkernel scores strongly for extensibility-related engineering characteristics. Like the other monolithic styles, it remains weak for independent scalability, elasticity, and fault tolerance.

### Exam Tip

Microkernel ratings: simplicity 4★, modularity/maintainability/testability/deployability/evolvability/responsiveness 3★, scale/elasticity/fault tolerance 1★.

### Common Mistake

Do not choose Microkernel for scalability alone; scalability is rated low here.

---

## Page 41 — When to Use Microkernel Architecture

### Original Page Content

WHEN  TO USE MICROKERNEL ARCHITECTURE
- Commonly used in software development tools, such as,
  - Eclipse IDE
  - Jira
  - Jenkins
- Also used in web browsers, where plug-ins or extensions add capabilities to the core
browser.
- Isolates custom or variable behavior from stable core functionality.
- Supports easy addition, removal, and modification of features.
- Reduces the risk of complex customization logic becoming a Big Ball of Mud.
- Particularly suitable for domains where customization and variation are common.

### Visual Explanation

No major diagram. The page gives real-world uses such as Eclipse IDE, Jira, Jenkins, web browser extensions, and domains requiring customization/variation.

### Explanation

Use Microkernel when product variation and extension are central requirements: IDEs, issue trackers, CI tools, browsers, or business products that need customer-specific features.

### Exam Tip

Best fit = customizable/extensible products such as Eclipse, Jira, Jenkins, browsers.

### Common Mistake

Microkernel is best when customization/variation is common, not simply because plug-ins sound flexible.

### Likely Exam Question

**Question:** When is Microkernel a good fit?

**Expected answer:** When customization/extensibility/variation are central, such as IDEs, Jira, Jenkins, browsers, and customizable products.

---

## Page 42 — Comparison of Layered, Modular Monolith, and Microkernel

### Original Page Content

WHEN  TO USE MICROKERNEL ARCHITECTURE
Architectural Style
Layered
Modular Monolith
Microkernel
Primary structure
Technical layers
Domain modules
Core + plug-ins
Partitioning
Technical
Domain
Technical and/or
domain
Typical deployment
Monolithic
Monolithic
Monolithic
Main structural benefit
Separation of technical
concerns
Domain modularity
Extensibility
Best fit
Simple technical
structure
Domain-oriented
systems
Customizable systems

### Recreated Style Comparison

| Architectural Style | Layered | Modular Monolith | Microkernel |
|---|---|---|---|
| Primary structure | Technical layers | Domain modules | Core + plug-ins |
| Partitioning | Technical | Domain | Technical and/or domain |
| Typical deployment | Monolithic | Monolithic | Monolithic |
| Main structural benefit | Separation of technical concerns | Domain modularity | Extensibility |
| Best fit | Simple technical structure | Domain-oriented systems | Customizable systems |

### Visual Explanation

A comparison table places **Layered**, **Modular Monolith**, and **Microkernel** side by side by primary structure, partitioning, typical deployment, main structural benefit, and best fit.

### Explanation

The comparison page is the fastest decision guide: Layered = technical separation, Modular Monolith = domain modularity, Microkernel = extensibility/customization.

### Exam Tip

Fast comparison: Layered → technical; Modular Monolith → domain; Microkernel → core + plug-ins.

### Common Mistake

Do not choose based only on 'monolithic' deployment; internal partitioning and main structural benefit differ significantly.

### Likely Exam Question

**Question:** Match each style to its main structural benefit.

**Expected answer:** Layered → separation of technical concerns; Modular Monolith → domain modularity; Microkernel → extensibility.

---

## Page 43 — Required Reading

### Original Page Content

REQUIRED READING
- Please read the Chapters 10, 11, 13 in M. Richards and N. Ford, “Fundamentals
of  Software Architecture: A Modern Engineering Approach,” 2nd ed. Sebastopol, CA:
O’Reilly Media, 2025.

### Visual Explanation

Text-only required-reading slide citing Chapters 10, 11, and 13 of Richards and Ford.

### Explanation

The required reading maps directly to the three styles: Chapter 10 Layered, Chapter 11 Modular Monolith, Chapter 13 Microkernel.

### Exam Tip

Required reading: Chapters 10, 11, 13.

### Common Mistake

No major common mistake.

---

## Page 44 — Summary

### Original Page Content

SUMMARY
- An architectural style describes the overall topology and assumed/default
characteristics of an architecture.
- Layered Architecture organizes components around technical responsibilities.
- Modular Monolith organizes a single deployment around domains or subdomains.
- Microkernel Architecture separates a stable core from specialized and variable plug-in
functionality.
- Different styles provide different Quality Attribute trade-offs.
- The appropriate style depends on the problem, required Quality Attributes, and real-
world constraints.

### Visual Explanation

Text-only summary slide restating the defining structure and trade-offs of the three monolithic styles.

### Explanation

The lecture's final message is that there is no universally best style. Choose based on problem structure, required Quality Attributes, and real constraints.

### Exam Tip

Final selection rule: problem + required Quality Attributes + real-world constraints.

### Common Mistake

Do not search for one 'best architecture' independent of context.

### Likely Exam Question

**Question:** What determines the appropriate architectural style?

**Expected answer:** The problem, required Quality Attributes, and real-world constraints.

---

## Page 45 — References

### Original Page Content

REFERENCES
- M. Richards and N. Ford, “Fundamentals of Software Architecture: A Modern
Engineering Approach,” 2nd ed. Sebastopol, CA: O’Reilly Media, 2025.

### Visual Explanation

Text-only references slide containing the Richards and Ford textbook citation.

### Explanation

The reference is the primary textbook source for the architectural figures, characteristics, and style discussions used in the lecture.

### Exam Tip

Know the textbook reference if citations are required in coursework.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

An **architectural style** describes the overall topology and default structural characteristics of a software architecture: how components are organized, the physical architecture, deployment, communication style, and data topology. An **architectural pattern** is narrower: it is a contextualized solution to a specific architectural problem and may be used within a style.

Architectural style selection is driven by **Quality Attribute trade-offs**. There is no universally best style. A style that maximizes simplicity and cost efficiency may sacrifice independent deployability, scalability, elasticity, or fault tolerance.

The lecture classifies architectures broadly as **monolithic** or **distributed** based on deployment. A monolithic architecture normally has one application deployment unit / Architecture Quantum. It may still contain many well-structured layers, modules, and components. Monoliths avoid required remote communication between internal components, so they usually have fewer deployment units, lower infrastructure/network complexity, lower cost, and fewer distributed-computing failure modes.

## Layered Architecture Summary

Layered Architecture is **technically partitioned**. A common organization is Presentation → Business → Persistence → Database. Presentation owns UI/interactions, Business owns business rules, Persistence owns data access, and Database owns storage. Logical layers can have different physical deployment topologies.

Layers may be **Closed** or **Open**. Closed layers cannot be skipped, creating **Layers of Isolation**: one layer can change internally while neighboring contracts remain stable. Open layers may be bypassed to avoid unnecessary processing, but bypassing increases coupling and reduces isolation. A common problem is the **Architecture Sinkhole Antipattern**, where requests simply pass through layers that add no meaningful logic.

The lecture rates Layered Architecture extremely high for simplicity but low for modularity, maintainability, independent deployability/evolvability, scalability, elasticity, and fault tolerance. It is suitable for small/simple applications, websites, tight budgets/schedules, and projects where long-term direction is unclear.

## Modular Monolith Summary

A **Modular Monolith** is still one deployment unit, but it is primarily **domain partitioned**. Business functionality is grouped into modules such as Order Placement, Inventory Management, Payment Processing, Notification, and Shipping. Individual modules may still have internal layers.

Two internal organization options are shown. **Monolithic Structure** keeps all modules together in one source-code repository/high-level directory structure. **Modular Structure** packages modules as self-contained artifacts such as JAR or DLL files and assembles them into one deployment unit. The first favors simplicity and frequent interaction; the second strengthens boundaries and separation of concerns.

Data may be shared through one database or owned separately by individual modules. Multiple databases do **not** automatically make the application distributed: the application remains monolithic if deployment is still one application unit.

Modular Monolith is a good fit under budget/time constraints, for new systems with uncertain future direction, for Domain-Driven Design, and when teams can own modules end to end. Clear boundaries can support later evolution to Service-based Architecture or Microservices. It is less suitable when strong scalability/availability/performance requirements dominate or when most changes are cross-cutting technical platform changes.

## Microkernel Summary

**Microkernel Architecture**, also called **Plug-in Architecture**, separates a relatively stable **core system** from independent **plug-ins** that contain specialized, variable, customizable, and frequently changing functionality. The core should contain only the minimum functionality needed to run the system.

The core may internally use another style such as Layered Architecture or Modular Monolith. Plug-ins should ideally be self-contained, independent from one another, and connected mainly to the core. They may be compile-based, runtime-based, or even remote through REST/messaging, although remote plug-ins introduce distributed-system complexity.

A **Plug-In Registry** tells the core what plug-ins exist and how to access them. **Contracts** define expected behavior and input/output, allowing plug-ins to vary without adding specialized core logic. Plug-ins may also own their own data stores.

Microkernel is especially suitable for extensible/customizable products such as Eclipse IDE, Jira, Jenkins, web browsers, and business applications with varying rules. It improves modularity, maintainability, testability, deployability, and evolvability relative to simpler monoliths, but still has low scalability, elasticity, and fault-tolerance ratings because it normally remains one deployment quantum.

# Key Definitions Table

| Term | Definition | Simple meaning |
|---|---|---|
| Architectural Style | Overall structural characteristics/default shape of an architecture | How the whole system is organized and deployed |
| Architectural Pattern | Contextualized solution to a specific architectural problem | Reusable solution inside a broader style |
| Quality Attribute | Non-functional property such as scalability, maintainability, responsiveness, etc. | A quality the system architecture should support |
| Monolithic Architecture | Application typically deployed as one unit | One deployment boundary |
| Distributed Architecture | Multiple deployment units connected through networks | Several remotely communicating deployed parts |
| Architecture Quantum | Deployment boundary/unit referred to in the lecture | What is deployed together |
| Layered Architecture | Technically partitioned horizontal layers | Presentation → Business → Persistence → Database |
| Closed Layer | Layer that cannot be bypassed | Must pass through it |
| Open Layer | Layer that may be bypassed | Can skip it when unnecessary |
| Layers of Isolation | Changes in one layer do not affect others while contracts stay stable | Layer independence |
| Architecture Sinkhole | Pass-through layers add no meaningful logic | Layers exist but do nothing useful for the request |
| Modular Monolith | One deployment unit organized around business domains/modules | One app, domain-based internals |
| Domain Partitioning | Organizing by business capability/domain | Group related business behavior together |
| Big Ball of Mud | Poorly structured system with weak boundaries/coupling everywhere | Architecture has degraded into tangled code |
| Microkernel Architecture | Stable core plus independent plug-ins | Plug-in architecture |
| Core System | Minimum stable functionality needed to run the application | Stable center |
| Plug-in | Specialized/variable/customizable feature component | Extension around the core |
| Plug-In Registry | Records available plug-ins and how to access them | Directory of plug-ins |
| Plug-In Contract | Defines expected behavior/input/output between core and plug-in | Rules/interface for integration |

# Important Diagrams

## Layered Architecture

```text
Presentation
    |
    v
Business
    |
    v
Persistence
    |
    v
Database
```

## Modular Monolith

```text
+---------------------------------------+
| One Deployment Unit                   |
|                                       |
| [Orders] [Inventory] [Payments]       |
| [Notify] [Shipping] [Other Domains]   |
+---------------------------------------+
                 |
                 v
             Database(s)
```

## Microkernel

```text
 [Plugin]        [Plugin]
     \            /
      \          /
       +--------+
       |  Core  |
       +--------+
      /          \
 [Plugin]        [Plugin]
```

# Architecture Style Comparison

| Dimension | Layered | Modular Monolith | Microkernel |
|---|---|---|---|
| Primary structure | Technical layers | Domain modules | Core + plug-ins |
| Partitioning | Technical | Domain | Technical and/or domain |
| Typical deployment | Monolithic | Monolithic | Monolithic |
| Main benefit | Separation of technical concerns | Domain modularity | Extensibility/customization |
| Strongest lecture rating | Simplicity | Simplicity | Simplicity + engineering characteristics |
| Key risk | Sinkhole / low modularity | Big Ball of Mud / boundary erosion | Overgrown core / plugin coupling |
| Best fit | Small/simple technical systems | Domain-oriented systems | Customizable/extensible products |
| Scalability / elasticity / fault tolerance | Low | Low | Low |

# Quick Revision Table

| Topic | Must remember | Pages | Exam importance |
|---|---|---:|---|
| Architectural style | Overall topology/default characteristics | 4-5 | Very High |
| Style vs pattern | Overall structure vs contextual solution | 6 | Very High |
| Quality Attributes | Style choice is a trade-off | 7 | Very High |
| Monolithic vs distributed | One deployment vs multiple networked deployments | 8-10 | Very High |
| Layered structure | Technical partitioning; P→B→P→DB | 11-12 | Very High |
| Closed/Open layers | Closed cannot skip; Open can bypass | 14-16 | Very High |
| Layers of Isolation | Stable contracts isolate changes | 15 | High |
| Sinkhole antipattern | Pass-through layers with no logic | 19 | Very High |
| Layered fit | Small/simple/tight budget; weak for high scale/deployability | 20-21 | High |
| Modular Monolith | One deployment + domain partitioning | 22-23 | Very High |
| Internal structures | One source structure vs JAR/DLL modules | 24-26 | High |
| Data topology | Shared DB or module-owned DBs | 27-28 | High |
| Modular Monolith fit | Good starting point, DDD, evolvable to services | 31-32 | Very High |
| Microkernel | Stable core + variable plug-ins | 33-35 | Very High |
| Core variants | Layered core or modular core | 36 | High |
| Plug-in communication | Local/compile/runtime; remote REST/messaging adds distributed complexity | 37 | High |
| Registry/contracts | Registry locates plug-ins; contracts standardize interaction | 38 | Very High |
| Plug-in data | Plug-ins may own data stores | 39 | Medium |
| Style comparison | Layered technical, Modular Monolith domain, Microkernel extensible | 42 | Very High |

# Likely Exam Questions

1. **Define an architectural style and list the five concerns it describes.**  
   **Expected answer:** Overall structural/default characteristics; component topology, physical architecture, deployment, communication style, data topology.
2. **Differentiate architectural style and architectural pattern.**  
   **Expected answer:** Style defines overall topology/default characteristics; pattern solves a specific contextual architecture problem within a style.
3. **Why is there no universally best architecture style?**  
   **Expected answer:** Different styles support different Quality Attributes and involve trade-offs; selection depends on requirements and constraints.
4. **Differentiate monolithic and distributed architecture by deployment.**  
   **Expected answer:** Monolithic has one application deployment unit; distributed has multiple network-connected deployment units.
5. **Explain Layered Architecture and its four common layers.**  
   **Expected answer:** A technically partitioned style with Presentation, Business, Persistence, and Database layers, each owning a technical responsibility.
6. **Differentiate Closed and Open layers.**  
   **Expected answer:** Closed cannot be bypassed; Open may be skipped to avoid unnecessary processing, trading isolation for coupling/performance.
7. **What are Layers of Isolation?**  
   **Expected answer:** Changes inside one layer generally do not affect others as long as the contracts between layers remain unchanged.
8. **Explain the Architecture Sinkhole Antipattern.**  
   **Expected answer:** Requests pass through layers that add no business logic, causing unnecessary object creation/processing and performance/memory cost.
9. **When should Layered Architecture be used?**  
   **Expected answer:** Small/simple applications, websites, tight budgets/schedules, or uncertain long-term direction; less suited to large systems requiring strong scalability/agility/deployability.
10. **Define Modular Monolith Architecture.**  
    **Expected answer:** One deployment unit internally organized around business domains/subdomains.
11. **Compare the Monolithic Structure and Modular Structure options inside a Modular Monolith.**  
    **Expected answer:** Monolithic Structure keeps modules together in one source structure; Modular Structure packages modules separately as artifacts such as JAR/DLL and assembles them into one deployment.
12. **Can a Modular Monolith have multiple databases? Explain.**  
    **Expected answer:** Yes. Modules may own contextual databases while the application remains monolithic because the application deployment is still one unit.
13. **When is Modular Monolith a good choice?**  
    **Expected answer:** Tight budget/time, new systems with uncertain future, DDD/domain ownership, and systems that may later evolve toward services/microservices.
14. **When may Modular Monolith be a poor choice?**  
    **Expected answer:** When high scalability/availability/responsiveness/performance are required or most changes are cross-cutting technical changes.
15. **Define Microkernel Architecture and identify its two main parts.**  
    **Expected answer:** Plug-in Architecture consisting of a stable core system plus independent plug-in components.
16. **What belongs in the core and what belongs in plug-ins?**  
    **Expected answer:** Core = minimum stable functionality; plug-ins = specialized, variable, customizable, change-prone functionality.
17. **What is a Plug-In Registry and why is it needed?**  
    **Expected answer:** It records which plug-ins exist and how to access them, allowing the core to discover/invoke plug-ins.
18. **Why are contracts important in Microkernel?**  
    **Expected answer:** They standardize expected behavior/input/output so plug-ins can vary without specialized core logic.
19. **Give examples of systems suited to Microkernel Architecture.**  
    **Expected answer:** Eclipse IDE, Jira, Jenkins, web browsers, and customizable product/business applications.
20. **Compare Layered, Modular Monolith, and Microkernel by partitioning and best fit.**  
    **Expected answer:** Layered = technical partitioning/simple technical systems; Modular Monolith = domain partitioning/domain-oriented systems; Microkernel = core + plug-ins/customizable systems.

# Key Terms List

- Architectural Style
- Architectural Pattern
- Component topology
- Physical architecture
- Deployment
- Communication style
- Data topology
- Quality Attribute
- Trade-off
- Monolithic Architecture
- Distributed Architecture
- Architecture Quantum
- Layered Architecture
- Technical partitioning
- Presentation Layer
- Business Layer
- Persistence Layer
- Database Layer
- Closed Layer
- Open Layer
- Layers of Isolation
- Shared Component
- Services Layer
- Architecture Sinkhole Antipattern
- Modular Monolith
- Domain partitioning
- Domain module
- Monolithic Structure
- Modular Structure
- JAR
- DLL
- Governance
- Big Ball of Mud
- Shared database
- Module-owned database
- Domain-Driven Design (DDD)
- Service-based Architecture
- Microservices
- Microkernel Architecture
- Plug-in Architecture
- Core system
- Plug-in component
- Compile-Based Plug-in
- Runtime-Based Plug-in
- REST
- Messaging
- Plug-In Registry
- Contract
- Extensibility
- Customization
- Simplicity
- Modularity
- Maintainability
- Testability
- Deployability
- Evolvability
- Responsiveness
- Scalability
- Elasticity
- Fault tolerance

# Verification

- PDF page count checked directly: 45
- Markdown page sections checked: 45
- Exact PDF page order preserved from Page 01 through Page 45
- All source pages represented, including reading, summary, and references pages
- Source tables recreated in Markdown where visible
- Image-only architecture diagrams recreated as ASCII/text diagrams where useful
- Star-rating tables from Layered, Modular Monolith, and Microkernel pages preserved
- No code was invented because the lecture contains no programming code

PDF pages: 45 / MD page sections: 45 ✅
