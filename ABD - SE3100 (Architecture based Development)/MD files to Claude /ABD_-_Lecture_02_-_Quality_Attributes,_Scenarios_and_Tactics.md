# ABD - Lecture 02 - Quality Attributes, Scenarios and Tactics

## Title and Source Metadata

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3100 |
| Module name | Architecture Based Development |
| Material type | Lecture 02 |
| Lecture title | Quality Attributes, Scenarios and Tactics |
| Lecturer | Vishan Jayasinghearachchi |
| Lecturer email | vishan.j@sliit.lk |
| Academic year / semester | Not stated in the PDF |
| Total PDF pages | 36 |

> **Source note:** The uploaded PDF is the primary source. Text and visual meaning are preserved in original page order. Sections labelled **Explanation (Supplementary)** clarify the source without replacing it.

<a id="table-of-contents"></a>
## Table of Contents

- [Title and Source Metadata](#title-and-source-metadata)
- [Learning Map](#learning-map)
- [Page 01 - Quality Attributes, Scenarios and Tactics](#page-01)
- [Page 02 - Learning Outcomes](#page-02)
- [Page 03 - Contents](#page-03)
- [Page 04 - What Are Quality Attributes?](#page-04)
- [Page 05 - What Are Quality Attributes? - Examination System Example](#page-05)
- [Page 06 - Defining Quality Attributes (Architectural Characteristics)](#page-06)
- [Page 07 - Defining Quality Attributes (Architectural Characteristics) - Three Features](#page-07)
- [Page 08 - Functionality vs. Quality Attributes](#page-08)
- [Page 09 - Functionality vs. Quality Attributes - Both Are Necessary](#page-09)
- [Page 10 - Some Common Quality Attributes](#page-10)
- [Page 11 - Why Are Quality Attributes Important in Architecture? - Functionality](#page-11)
- [Page 12 - Why Are Quality Attributes Important in Architecture? - Different Structures](#page-12)
- [Page 13 - Why Are Quality Attributes Important in Architecture? - Start from Concerns](#page-13)
- [Page 14 - Why Are Quality Attributes Important in Architecture? - Architectural Responses](#page-14)
- [Page 15 - Trade-offs in Quality Attributes](#page-15)
- [Page 16 - Architecturally Significant Quality Attributes](#page-16)
- [Page 17 - Architecturally Significant Quality Attributes - Prioritisation](#page-17)
- [Page 18 - Quality Attribute Scenarios - Why Vague Statements Fail](#page-18)
- [Page 19 - Quality Attribute Scenarios - Operational and Testable Form](#page-19)
- [Page 20 - Quality Attribute Scenarios - Six Elements](#page-20)
- [Page 21 - Quality Attribute Scenarios - Generic Flow Diagram](#page-21)
- [Page 22 - Quality Attribute Scenarios - General Availability Scenario](#page-22)
- [Page 23 - Quality Attribute Scenarios - Concrete Availability Scenario](#page-23)
- [Page 24 - Quality Attribute Scenarios - Availability Diagram Example](#page-24)
- [Page 25 - Quality Attribute Scenarios - General Performance Scenario](#page-25)
- [Page 26 - Quality Attribute Scenarios - Concrete Performance Scenario](#page-26)
- [Page 27 - Quality Attribute Scenarios - Concrete Security Scenario](#page-27)
- [Page 28 - Quality Attribute Scenarios - Concrete Modifiability Scenario](#page-28)
- [Page 29 - Quality Attribute Tactics - Definition and Purpose](#page-29)
- [Page 30 - Quality Attribute Tactics - Availability Tactics](#page-30)
- [Page 31 - Quality Attribute Tactics - Performance Tactics](#page-31)
- [Page 32 - Quality Attribute Tactics - Security Tactics](#page-32)
- [Page 33 - Quality Attribute Tactics - Modifiability Tactics](#page-33)
- [Page 34 - Required Reading](#page-34)
- [Page 35 - Summary](#page-35)
- [Page 36 - References](#page-36)
- [Complete Lecture Summary](#complete-lecture-summary)
- [Key Definitions](#key-definitions)
- [Important Formulas and Code Snippets](#important-formulas-and-code-snippets)
- [Important Diagrams and Tables](#important-diagrams-and-tables)
- [Quick Revision Notes](#quick-revision-notes)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms](#key-terms)
- [Verification](#verification)

<a id="learning-map"></a>
## Learning Map

```text
Functional Requirements: what the system does
                    +
Quality Attributes: measurable qualities while it works
                    |
                    v
Identify the attributes that require structural decisions
                    |
                    v
Write measurable Quality Attribute Scenarios
                    |
                    v
Choose tactics that control the required response
                    |
                    v
Analyze trade-offs among qualities, cost, and complexity
```

---

<a id="page-01"></a>
## Page 01 - Quality Attributes, Scenarios and Tactics

### Original Page Content

- **Title:** Quality Attributes, Scenarios and Tactics
- **Module:** SE3100 - Architecture Based Development
- **Lecturer:** Vishan Jayasinghearachchi
- **Position:** Lecturer - Department of Software Engineering
- **Faculty:** Faculty of Computing
- **Institution:** Sri Lanka Institute of Information Technology
- **Email:** vishan.j@sliit.lk

### Visual Explanation

The page is a cover slide. It uses a large lecture title, followed by module and lecturer information. No technical diagram is present.

### Explanation (Supplementary)

This lecture introduces the quality-related requirements that influence software architecture, the scenario format used to make them measurable, and the tactics architects use to achieve them.

### Exam Tip

Remember the lecture title and module context. The three central terms are **Quality Attributes**, **Quality Attribute Scenarios**, and **Quality Attribute Tactics**.

### Common Mistake

No major common mistake.

### Likely Exam Questions

1. **Question:** What are the three main concepts introduced by this lecture?
   - **Expected answer:** Quality Attributes, Quality Attribute Scenarios, and Quality Attribute Tactics.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-02"></a>
## Page 02 - Learning Outcomes

### Original Page Content

After completing this lecture, you will be able to:

- Define Quality Attributes and distinguish them from functional requirements.
- Explain why Quality Attributes influence software architecture.
- Identify Architecturally Significant Quality Attributes.
- Develop measurable Quality Attribute Scenarios.
- Explain how architectural tactics support specific Quality Attributes.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

The outcomes establish the expected progression of learning: first understand what Quality Attributes are, then identify which ones matter architecturally, express them in measurable scenarios, and finally connect them to architectural tactics.

### Exam Tip

Use the learning outcomes as an exam checklist. You should be able to define, compare, identify, construct, and explain.

### Common Mistake

No major common mistake.

### Likely Exam Questions

1. **Question:** What should a student be able to develop after this lecture?
   - **Expected answer:** A measurable Quality Attribute Scenario.
2. **Question:** What is the final learning outcome?
   - **Expected answer:** Explain how architectural tactics support specific Quality Attributes.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-03"></a>
## Page 03 - Contents

### Original Page Content

- What are Quality Attributes?
- Formal definition of Quality Attributes
- Why are Quality Attributes important in architecture?
- Architecturally significant Quality Attributes
- Quality Attribute Scenarios
- Quality Attribute Tactics
- Summary

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

The lecture moves from definition to architectural importance, prioritisation, measurable specification, and tactics. This order mirrors how architects reason from stakeholder concerns to design decisions.

### Exam Tip

The most exam-heavy sections are usually the distinction between functionality and Quality Attributes, the six scenario elements, and the tactic categories.

### Common Mistake

No major common mistake.

### Likely Exam Questions

1. **Question:** What topic follows Architecturally Significant Quality Attributes?
   - **Expected answer:** Quality Attribute Scenarios.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-04"></a>
## Page 04 - What Are Quality Attributes?

### Original Page Content

A software system must:

- Perform the required **domain functions**.
- Provide those functions with **acceptable qualities**.

### Visual Explanation

A decorative question-mark icon appears in the lower-right corner. It does not add technical meaning; it visually introduces the question being discussed.

### Explanation (Supplementary)

A successful system needs both correct functionality and acceptable quality. A system may perform the required task but still fail in practice if it is too slow, unavailable, insecure, or difficult to change.

### Definitions

**Definition - Domain function:** A function that represents the main behaviour required in the application domain.

**Simple meaning:** The actual task the system is built to perform.

**Example:** Recording marks in an examination system.

**Definition - Acceptable quality:** A required level of a system quality while the system provides its functions.

**Simple meaning:** How well the system must perform its work.

**Example:** Returning results within an acceptable time.

### Exam Tip

Do not define a Quality Attribute as a function. The core distinction is **what the system does** versus **how well or under what quality it does it**.

### Common Mistake

Treating acceptable quality as optional. The slide states that both domain functions and acceptable qualities are required.

### Likely Exam Questions

1. **Question:** What two things must a software system provide?
   - **Expected answer:** Required domain functions and those functions with acceptable qualities.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-05"></a>
## Page 05 - What Are Quality Attributes? - Examination System Example

### Original Page Content

For example, an examination system must:

- Allow authorized users to enter marks.
- Protect marks from unauthorized modification.
- Remain accessible during result publication.
- Return results within an acceptable time.
- Support changes to grading policies.

Managing marks and results represents the system's **domain functionality**.

**Security, availability, performance, and modifiability** describe required **qualities** of the system.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

The example separates one functional area from four quality concerns:

| Requirement | Classification |
|---|---|
| Enter and manage marks/results | Domain functionality |
| Prevent unauthorized modification | Security |
| Stay accessible during publication | Availability |
| Return results within acceptable time | Performance |
| Support grading-policy changes | Modifiability |

### Definitions

**Definition - Quality Attribute:** A measurable quality or capability that the system must support while providing its functionality.

**Simple meaning:** A required property describing how well the system must operate.

**Example:** Availability during result publication.

### Exam Tip

In a scenario question, identify the verb that describes the domain action first, then identify the quality attached to that action.

### Common Mistake

Calling “enter marks” a Security requirement. Entering marks is functionality; restricting who may do it is Security.

### Likely Exam Questions

1. **Question:** Which Quality Attribute is represented by protecting marks from unauthorized modification?
   - **Expected answer:** Security.
2. **Question:** Which Quality Attribute supports changes to grading policies?
   - **Expected answer:** Modifiability.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-06"></a>
## Page 06 - Defining Quality Attributes (Architectural Characteristics)

### Original Page Content

The slide presents the differentiating features of architectural characteristics through a triangular model.

### Visual Explanation

The triangle contains three differentiating features:

```text
                         Design
                           /\\
                          /  \\
                         /    \\
      Explicit:         /      \\        Implicit:
      specifies a      /        \\       influences some
      non-domain      /          \\      structural aspect
      design          /            \\     of the design
      consideration  /              \\
                    /________________\\
               Architecture Characteristics
          Critical or important to application success
```

- **Left side:** An architectural characteristic explicitly specifies a non-domain design consideration.
- **Right side:** It implicitly influences a structural aspect of the design.
- **Base:** It is critical or important to application success.
- **Top label:** These characteristics influence the design.

### Explanation (Supplementary)

The visual shows that a Quality Attribute is not merely a desirable word such as “fast” or “secure.” It must concern something beyond domain behaviour, influence structure, and matter to success.

### Definitions

**Definition - Architectural characteristic:** A non-domain design consideration that influences a structural aspect of the design and is critical or important to application success.

**Simple meaning:** A system quality important enough to shape the architecture.

**Example:** Availability requiring redundancy and recovery structures.

### Exam Tip

Memorize the three differentiating features: **non-domain**, **structural influence**, and **important to success**.

### Common Mistake

Assuming every non-functional statement is architecturally significant. It must also influence structure and be important to success.

### Likely Exam Questions

1. **Question:** What are the three differentiating features of an architectural characteristic?
   - **Expected answer:** It is a non-domain design consideration, influences a structural aspect, and is critical or important to application success.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-07"></a>
## Page 07 - Defining Quality Attributes (Architectural Characteristics) - Three Features

### Original Page Content

- **Nondomain design consideration**
  - It concerns a capability or design consideration beyond the main domain behaviour.
- **Influences a structural aspect of the design**
  - Supporting it affects system organisation, boundaries, dependencies, or interactions.
- **Important to the success of the system**
  - Failure to support it may prevent the application from achieving its intended purpose.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

These three conditions explain when a quality becomes architectural rather than merely local. If supporting a quality changes components, boundaries, dependencies, interactions, or system organisation, it can drive architecture.

### Exam Tip

Use the exact keywords **organisation, boundaries, dependencies, interactions** when explaining structural influence.

### Common Mistake

Describing a domain capability such as “calculate grades” as a nondomain consideration.

### Likely Exam Questions

1. **Question:** How can a Quality Attribute influence structure?
   - **Expected answer:** It can affect organisation, boundaries, dependencies, or interactions.
2. **Question:** Why must a Quality Attribute be important to system success?
   - **Expected answer:** Failure to support it may prevent the application from achieving its intended purpose.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-08"></a>
## Page 08 - Functionality vs. Quality Attributes

### Original Page Content

| Functionality (Functional Requirements) | Quality Attributes |
|---|---|
| Describes what the system does. | Describes the measurable qualities and capabilities the system must support while providing its functionality. |
| Represents the domain behaviour the system must provide. | Represents the qualities the system must support. |
| Commonly represented through features or use cases. | Commonly represented through measurable scenarios. |
| Examples: Register a student, record marks, calculate grades, publish results, generate reports. | Examples: Performance, availability, security, modifiability, scalability. |

### Visual Explanation

The visual is a two-column comparison table. The left column focuses on domain behaviour and use cases; the right column focuses on measurable qualities and scenarios. The table makes the conceptual distinction explicit.

### Explanation (Supplementary)

A functional requirement identifies an action or service. A Quality Attribute specifies the measurable quality level expected while that action or service is delivered.

### Definitions

**Definition - Functional requirement:** A requirement describing what the system does and the domain behaviour it must provide.

**Simple meaning:** A feature or action the system must perform.

**Example:** Calculate grades.

**Definition - Quality Attribute requirement:** A requirement describing a measurable quality or capability the system must support while providing functionality.

**Simple meaning:** A measurable condition describing how the feature must work.

**Example:** Display results within two seconds.

### Exam Tip

A common comparison question expects four contrasts: **what vs. quality**, **domain behaviour vs. supported quality**, **use case vs. measurable scenario**, and examples.

### Common Mistake

Using “the system must be fast” as a complete Quality Attribute requirement. It names a quality but is not measurable.

### Likely Exam Questions

1. **Question:** How are functional requirements commonly represented?
   - **Expected answer:** Through features or use cases.
2. **Question:** How are Quality Attributes commonly represented?
   - **Expected answer:** Through measurable scenarios.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-09"></a>
## Page 09 - Functionality vs. Quality Attributes - Both Are Necessary

### Original Page Content

- Quality Attributes are also called:
  - Architectural characteristics
  - Quality requirements
  - Non-functional requirements
- Both Functional Requirements and Quality Attributes are necessary for a system's success.
  - A function may exist but still be provided too slowly, unreliably, or insecurely, making the system unacceptable for its intended purpose.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

Different sources may use different labels for the same general concept. The lecture emphasizes that implementing a function is insufficient when its quality is unacceptable.

### Exam Tip

Recognize the alternative terms. In this lecture, **Quality Attributes**, **architectural characteristics**, **quality requirements**, and **non-functional requirements** are used as related names.

### Common Mistake

Assuming that passing functional tests alone proves that the system is acceptable.

### Likely Exam Questions

1. **Question:** Give two alternative names for Quality Attributes.
   - **Expected answer:** Architectural characteristics and non-functional requirements. “Quality requirements” is also used.
2. **Question:** Why can a functionally correct system still be unacceptable?
   - **Expected answer:** The functions may be too slow, unreliable, or insecure.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-10"></a>
## Page 10 - Some Common Quality Attributes

### Original Page Content

| Quality Attribute | Main Concern |
|---|---|
| Performance | How quickly the system responds |
| Availability | Whether the system is operational when required |
| Security | Protection against unauthorised access and modification |
| Modifiability | Ease of making changes |
| Scalability | Ability to support increasing demand |
| Testability | Ease of demonstrating correct behaviour |
| Usability | Effectiveness of user interaction |
| Interoperability | Ability to exchange and use information with other systems |

### Visual Explanation

The page is a reference table mapping eight common Quality Attributes to their primary concern. It should be read as a concise identification guide, not as a complete universal list.

### Explanation (Supplementary)

The table helps classify stakeholder concerns. For example, “system must remain operational” maps to Availability, while “system must exchange data with another platform” maps to Interoperability.

### Definitions

**Definition - Performance:** How quickly the system responds.

**Simple meaning:** The speed of system response.

**Example:** Results load within two seconds.

**Definition - Availability:** Whether the system is operational when required.

**Simple meaning:** The system is usable when needed.

**Example:** Results service remains available during publication.

**Definition - Security:** Protection against unauthorised access and modification.

**Simple meaning:** Preventing improper access or changes.

**Example:** Only authorised staff can modify marks.

**Definition - Modifiability:** Ease of making changes.

**Simple meaning:** How easily the system can be updated.

**Example:** Changing grading policies.

**Definition - Scalability:** Ability to support increasing demand.

**Simple meaning:** Handling more users or work.

**Example:** Supporting a larger result-release load.

**Definition - Testability:** Ease of demonstrating correct behaviour.

**Simple meaning:** How easily correctness can be verified.

**Example:** Testing grade calculation reliably.

**Definition - Usability:** Effectiveness of user interaction.

**Simple meaning:** How effectively users can use the system.

**Example:** Students can find results easily.

**Definition - Interoperability:** Ability to exchange and use information with other systems.

**Simple meaning:** Working and sharing data with other systems.

**Example:** Exchanging student data with another platform.

### Exam Tip

Memorize the attribute-to-concern mapping. MCQs often provide a stakeholder statement and ask you to identify the Quality Attribute.

### Common Mistake

Confusing scalability with performance. Performance concerns response behaviour; scalability concerns supporting increasing demand.

### Likely Exam Questions

1. **Question:** Which Quality Attribute concerns increasing demand?
   - **Expected answer:** Scalability.
2. **Question:** Which Quality Attribute concerns exchanging and using information with other systems?
   - **Expected answer:** Interoperability.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-11"></a>
## Page 11 - Why Are Quality Attributes Important in Architecture? - Functionality

### Original Page Content

Consider an examination system that must:

- Manage students
- Record marks
- Calculate grades
- Publish results

### Visual Explanation

A decorative lightbulb icon appears in the lower-right corner. It emphasizes an idea but contains no additional technical information.

### Explanation (Supplementary)

These requirements identify the examination system's functionality. They do not yet determine a unique architecture because different structures can provide the same functions.

### Exam Tip

When given a system description, first extract the core functionality before discussing architectural options.

### Common Mistake

Jumping directly from a function list to a specific architecture without identifying the required qualities and constraints.

### Likely Exam Questions

1. **Question:** List the four example functions of the examination system.
   - **Expected answer:** Manage students, record marks, calculate grades, and publish results.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-12"></a>
## Page 12 - Why Are Quality Attributes Important in Architecture? - Different Structures

### Original Page Content

The same functionality could be implemented using, for example:

- A single application with a shared database
- A set of independently deployed services
- An event-driven architecture

Additional points:

- The same functionality can be achieved through different structures.
- The required Quality Attributes help determine which structure is appropriate.
- The relevant Quality Attributes depend on the system and its context.
  - There is no single list that is appropriate for every system.

### Visual Explanation

A decorative lightbulb icon appears in the lower-right corner. The key visual meaning is provided by the list of three structural alternatives.

```text
Same Examination Functionality
        |
        +--> Single application + shared database
        |
        +--> Independently deployed services
        |
        +--> Event-driven architecture

Choice depends on required Quality Attributes and context.
```

### Explanation (Supplementary)

Functionality alone does not select the architecture. The required levels of performance, availability, security, modifiability, scalability, and other qualities help determine which structure is appropriate.

### Exam Tip

The expected argument is: **same functionality -> multiple possible structures -> Quality Attributes help select the structure**.

### Common Mistake

Claiming that one architectural style is universally best for examination systems.

### Likely Exam Questions

1. **Question:** Why can the same functionality lead to different architectures?
   - **Expected answer:** Because different structures can implement the same functions, and the required Quality Attributes and context determine which is appropriate.
2. **Question:** Is there one universal list of relevant Quality Attributes?
   - **Expected answer:** No. Relevant Quality Attributes depend on the system and its context.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-13"></a>
## Page 13 - Why Are Quality Attributes Important in Architecture? - Start from Concerns

### Original Page Content

- Architecture should not begin by selecting a fashionable architectural style.
- It should begin by understanding:
  - What functionality the system must achieve
  - Which qualities are essential
  - Which constraints must be respected
  - Which failures are unacceptable
  - Which changes are expected
  - Which trade-offs are acceptable
- Quality Attributes help translate business and stakeholder concerns into technical concerns that can influence the architecture.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

The architectural process should be concern-driven rather than trend-driven. Stakeholder priorities, constraints, unacceptable failures, expected changes, and acceptable trade-offs provide the basis for structural decisions.

### Exam Tip

For a short-answer question, list all six concerns before stating that Quality Attributes translate stakeholder concerns into technical architectural concerns.

### Common Mistake

Selecting microservices, event-driven architecture, or another style merely because it is popular.

### Likely Exam Questions

1. **Question:** What should architecture begin by understanding?
   - **Expected answer:** Functionality, essential qualities, constraints, unacceptable failures, expected changes, and acceptable trade-offs.
2. **Question:** What role do Quality Attributes play between stakeholders and architecture?
   - **Expected answer:** They translate business and stakeholder concerns into technical concerns that influence architecture.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-14"></a>
## Page 14 - Why Are Quality Attributes Important in Architecture? - Architectural Responses

### Original Page Content

| Quality Attribute | Possible Architectural Responses |
|---|---|
| Performance | Caching, concurrency, communication mechanisms |
| Availability | Redundancy, monitoring, recovery mechanisms |
| Security | Security boundaries, authentication, access control |
| Modifiability | Modularisation, interfaces, dependency control |
| Scalability | Distribution, replication, resource allocation |
| Interoperability | Protocols, interfaces, data formats |

### Visual Explanation

The page uses a two-column table to connect each Quality Attribute to possible architectural responses. It demonstrates that qualities influence concrete structural and design decisions.

### Explanation (Supplementary)

The responses are examples, not automatic solutions. Architects select and combine them based on context and trade-offs.

### Exam Tip

Know at least two architectural responses for each major Quality Attribute. Scenario questions may ask you to recommend a response and justify the related attribute.

### Common Mistake

Treating the listed response as the Quality Attribute itself. For example, caching is a design response that may support Performance; it is not Performance.

### Likely Exam Questions

1. **Question:** Give three possible architectural responses for Availability.
   - **Expected answer:** Redundancy, monitoring, and recovery mechanisms.
2. **Question:** Which responses can support Modifiability?
   - **Expected answer:** Modularisation, interfaces, and dependency control.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-15"></a>
## Page 15 - Trade-offs in Quality Attributes

### Original Page Content

- Quality Attributes cannot normally be considered in isolation.
- Achieving one Quality Attribute may positively or negatively affect others.
- Examples:
  - Redundancy may improve availability but increase cost and complexity.
  - Caching may improve performance but complicate consistency.
  - Additional abstraction may improve modifiability but introduce overhead.
  - Strong security controls may reduce usability.
- Architecture therefore involves trade-off analysis rather than the independent optimisation of each quality.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

Each tactic or structural choice can create benefits and costs across multiple qualities. Architecture is therefore a balancing activity rather than a process of maximizing every attribute independently.

| Decision | Intended Benefit | Possible Cost |
|---|---|---|
| Redundancy | Availability | Cost and complexity |
| Caching | Performance | Consistency complexity |
| Additional abstraction | Modifiability | Runtime or design overhead |
| Strong security controls | Security | Reduced usability |

### Definitions

**Definition - Quality Attribute trade-off:** A situation in which improving one quality positively or negatively affects another quality or another system concern.

**Simple meaning:** A design gain in one area creates a cost or change in another.

**Example:** Caching improves performance but complicates consistency.

### Exam Tip

Trade-off questions require both sides: state the improved quality and the negatively affected concern.

### Common Mistake

Writing only the benefit of a tactic without discussing its cost or impact on other attributes.

### Likely Exam Questions

1. **Question:** Why can Quality Attributes not normally be considered in isolation?
   - **Expected answer:** Improving one may positively or negatively affect others.
2. **Question:** How can caching create a trade-off?
   - **Expected answer:** It may improve performance but complicate consistency.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-16"></a>
## Page 16 - Architecturally Significant Quality Attributes

### Original Page Content

- A Quality Attribute is architecturally significant when supporting it requires important structural decisions.
  - It is not practical to treat every desirable quality as equally important.
- Supporting more Quality Attributes may introduce substantial additional complexity.
- Questions to consider when identifying the most significant Quality Attributes:
  - Which qualities are essential for system success?
  - Which failures would be unacceptable?
  - Which qualities require early structural decisions?
  - Which qualities would be difficult to add later?

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

Architecturally Significant Quality Attributes are the qualities that truly drive the architecture. They deserve early attention because they require important structural choices or are difficult to retrofit later.

### Definitions

**Definition - Architecturally Significant Quality Attribute:** A Quality Attribute whose support requires important structural decisions.

**Simple meaning:** A quality important enough to shape the architecture early.

**Example:** Availability that requires redundant databases and failover.

### Exam Tip

Use the phrase **requires important structural decisions** in the definition. The four identification questions are also likely short-answer material.

### Common Mistake

Treating every desirable quality as an equal architectural driver.

### Likely Exam Questions

1. **Question:** When is a Quality Attribute architecturally significant?
   - **Expected answer:** When supporting it requires important structural decisions.
2. **Question:** Why should the list of significant qualities be limited?
   - **Expected answer:** Supporting more qualities can introduce substantial additional complexity.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-17"></a>
## Page 17 - Architecturally Significant Quality Attributes - Prioritisation

### Original Page Content

- Richards and Ford recommend keeping the final list of driving Architectural Characteristics (Quality Attributes) as short as reasonably possible.
- Their recommendation:
  - Identify a short list of candidate Quality Attributes.
  - Ask stakeholders to select the three highest-priority Quality Attributes.
  - Use these as the primary architectural drivers for design and trade-off analysis.
  - This is a prioritisation technique, not a universal numerical rule.

### Visual Explanation

A decorative lightbulb icon appears in the lower-right corner. The page's main structure is a four-step prioritisation process.

```text
Candidate Quality Attributes
            |
            v
Stakeholders select three highest-priority attributes
            |
            v
Use them as primary architectural drivers
            |
            v
Perform design and trade-off analysis
```

### Explanation (Supplementary)

The recommendation reduces focus to the qualities that matter most. The number three is a prioritisation device, not a law that applies to every project.

### Exam Tip

Do not state “every architecture must have exactly three Quality Attributes.” The slide explicitly says this is not a universal numerical rule.

### Common Mistake

Applying the number three mechanically without stakeholder prioritisation or context.

### Likely Exam Questions

1. **Question:** What do Richards and Ford recommend stakeholders select?
   - **Expected answer:** The three highest-priority Quality Attributes from a short candidate list.
2. **Question:** Is three a universal rule?
   - **Expected answer:** No. It is a prioritisation technique.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-18"></a>
## Page 18 - Quality Attribute Scenarios - Why Vague Statements Fail

### Original Page Content

- A Quality Attribute requirement should be unambiguous and testable.
- Statements such as the following are too vague:
  - The system must be fast.
  - The system must be secure.
  - The system must be highly available.
- They do not state:
  - What event occurs
  - Under which conditions it occurs
  - Which part of the system is affected
  - What the system must do
  - How success will be measured
- A Quality Attribute name alone does not provide a concrete operational requirement.

### Visual Explanation

A decorative lightbulb icon appears near the lower-right corner. It emphasizes the need to make vague expectations concrete.

### Explanation (Supplementary)

Words such as “fast,” “secure,” and “highly available” cannot be tested until the triggering event, context, affected artifact, response, and measurable success criterion are specified.

### Exam Tip

When criticizing a vague requirement, list the five missing details and conclude that it is not operational or testable.

### Common Mistake

Adding an adjective such as “very” or “highly” and assuming the requirement has become measurable.

### Likely Exam Questions

1. **Question:** Why is “the system must be fast” inadequate?
   - **Expected answer:** It does not define the event, conditions, affected artifact, required response, or measurable success criterion.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-19"></a>
## Page 19 - Quality Attribute Scenarios - Operational and Testable Form

### Original Page Content

- Bass, Clements, and Kazman use Quality Attribute Scenarios to express Quality Attribute requirements in an operational and testable form.
- A scenario identifies:
  - An event or condition
  - The context in which it occurs
  - The affected part of the system
  - The required system response
  - A measurable level of success
- A scenario converts a vague quality expectation into a concrete requirement which is unambiguous and testable.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

A Quality Attribute Scenario turns a quality name into a complete operational statement. It connects what happens, where and when it happens, what the system does, and how the result is judged.

### Definitions

**Definition - Quality Attribute Scenario:** An operational and testable expression of a Quality Attribute requirement that identifies an event or condition, context, affected artifact, required response, and measurable success level.

**Simple meaning:** A structured, measurable description of how the system must react to a quality-related event.

**Example:** During peak load, a results request is completed within two seconds for 95% of requests.

### Exam Tip

The expected keywords are **operational**, **unambiguous**, **testable**, and **measurable**.

### Common Mistake

Writing a scenario without a response measure. Without a measurable criterion, success cannot be tested.

### Likely Exam Questions

1. **Question:** What does a Quality Attribute Scenario convert?
   - **Expected answer:** A vague quality expectation into a concrete, unambiguous, and testable requirement.
2. **Question:** What measurable item must a scenario include?
   - **Expected answer:** A measurable level of success, represented by the response measure.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-20"></a>
## Page 20 - Quality Attribute Scenarios - Six Elements

### Original Page Content

| Element | Purpose |
|---|---|
| Source of stimulus | Some entity (a human, a computer system, or any other actuator) that generates the stimulus. |
| Stimulus | Event or condition requiring a response. |
| Environment | The conditions in which the stimulus occurs. The system may be in an overload condition, normal operation, or another relevant state. |
| Artifact | Part(s) of the system affected. |
| Response | Activity undertaken by the system in response to the stimulus. |
| Response measure | Measurable criterion used to evaluate the response. |

### Visual Explanation

The page presents the six scenario elements in a two-column table. Each row identifies one required part and its purpose.

```text
Source of Stimulus
        |
        v
     Stimulus
        |
        v
Environment + Artifact
        |
        v
     Response
        |
        v
Response Measure
```

### Explanation (Supplementary)

All six elements are needed to make a scenario complete. The **source** causes the **stimulus**; it occurs in an **environment** and affects an **artifact**; the system produces a **response**, which is judged using a **response measure**.

### Definitions

**Definition - Source of stimulus:** The entity that generates the stimulus.

**Simple meaning:** Who or what causes the event.

**Example:** A registered student.

**Definition - Stimulus:** The event or condition requiring a response.

**Simple meaning:** What happens.

**Example:** A request for the examination results page.

**Definition - Environment:** The conditions in which the stimulus occurs.

**Simple meaning:** The system state or operating condition.

**Example:** Peak-load operation.

**Definition - Artifact:** The part or parts of the system affected.

**Simple meaning:** Where the event applies.

**Example:** The results service.

**Definition - Response:** The activity undertaken by the system in response to the stimulus.

**Simple meaning:** What the system does.

**Example:** Retrieve and display results.

**Definition - Response measure:** The measurable criterion used to evaluate the response.

**Simple meaning:** How success is tested.

**Example:** 95% of requests complete within two seconds.

### Exam Tip

Memorize the six elements in order: **Source, Stimulus, Environment, Artifact, Response, Response Measure**.

### Common Mistake

Confusing source and stimulus. The source is the entity; the stimulus is the event or condition generated by that entity.

### Likely Exam Questions

1. **Question:** Name the six elements of a Quality Attribute Scenario.
   - **Expected answer:** Source of stimulus, stimulus, environment, artifact, response, and response measure.
2. **Question:** What is the difference between response and response measure?
   - **Expected answer:** Response is what the system does; response measure is the measurable criterion used to evaluate it.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-21"></a>
## Page 21 - Quality Attribute Scenarios - Generic Flow Diagram

### Original Page Content

The slide shows the generic elements of a Quality Attribute Scenario.

### Visual Explanation

```text
[Source of Stimulus]
          |
          | generates
          v
      [Stimulus]
          |
          v
      [Artifact]
     (Environment)
          |
          | system produces
          v
       [Response]
          |
          v
 [Response Measure]
```

The person icon represents the source. The arrow labelled **Stimulus** enters the **Artifact** under a stated **Environment**. The system produces a **Response**, which is evaluated using a **Response Measure**.

### Explanation (Supplementary)

The diagram provides a memory model for scenario construction. It shows cause, affected system part, reaction, and measurable evaluation as one continuous flow.

### Exam Tip

Recreate this flow in an answer when asked to explain the structure of a Quality Attribute Scenario.

### Common Mistake

Placing the environment as a separate event. It is the condition under which the stimulus occurs and the artifact responds.

### Likely Exam Questions

1. **Question:** Where does the environment fit in the generic scenario model?
   - **Expected answer:** It describes the conditions surrounding the artifact when the stimulus occurs.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-22"></a>
## Page 22 - Quality Attribute Scenarios - General Availability Scenario

### Original Page Content

**A General Quality Attribute Scenario for Availability**

| Element | Possible values shown in the diagram |
|---|---|
| Source of stimulus | Internal or external: people, hardware, software, physical infrastructure, physical environment |
| Stimulus | Fault: omission, crash, incorrect timing, incorrect response |
| Artifact | Processors, communication channels, persistent storage, processes |
| Environment | Normal operation, startup, shutdown, repair mode, degraded operation, overloaded operation |
| Response | Prevent fault from becoming failure; detect fault, log and notify; recover from fault by disabling the event source, being unavailable, fixing/masking, or using degraded mode |
| Response measure | Time or time interval the system must be available; availability percentage; time in degraded mode; time to detect fault; repair time; proportion of faults the system handles |

### Visual Explanation

The diagram expands the six-element scenario model specifically for Availability. It maps possible sources and faults to affected system artifacts, operational environments, responses, and measurable availability outcomes.

```text
Internal/External Source
          |
          v
Fault: omission / crash / timing / incorrect response
          |
          v
Processors / channels / storage / processes
   under a stated operating environment
          |
          v
Prevent failure -> Detect and notify -> Recover or degrade
          |
          v
Measure availability, detection time, repair time, and handled faults
```

### Explanation (Supplementary)

Availability scenarios focus on faults and the system's ability to prevent, detect, and recover from them. The response measure converts “high availability” into measurable time, percentage, or fault-handling criteria.

### Definitions

**Definition - Availability scenario:** A Quality Attribute Scenario that specifies a fault-related stimulus, affected artifact, operating environment, system response, and measurable availability result.

**Simple meaning:** A measurable description of how the system handles a fault and remains or becomes operational.

**Example:** Recover from a database crash within 60 seconds.

### Exam Tip

For Availability, common response measures include availability percentage, time to detect, repair time, and time spent in degraded mode.

### Common Mistake

Using only “the system recovers” without specifying recovery time, loss tolerance, or another measurable result.

### Likely Exam Questions

1. **Question:** What types of stimuli appear in a general Availability scenario?
   - **Expected answer:** Faults such as omission, crash, incorrect timing, or incorrect response.
2. **Question:** Give two possible Availability response measures.
   - **Expected answer:** Availability percentage and time to detect a fault. Repair time is another valid answer.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-23"></a>
## Page 23 - Quality Attribute Scenarios - Concrete Availability Scenario

### Original Page Content

**Example: A Concrete Quality Attribute Scenario for Availability**

| Element | Scenario |
|---|---|
| Source of stimulus | Internal to the system |
| Stimulus | The primary database crashes |
| Environment | During result publication (Normal Operation) |
| Artifact | Primary database and results platform |
| Response | Detects the fault and restores the service (e.g. using standby database) |
| Response measure | Service is restored within 60 seconds without losing committed results |

### Visual Explanation

The table applies all six scenario elements to an examination-results platform. Its strongest feature is the measurable outcome: **within 60 seconds** and **without losing committed results**.

```text
Internal failure
      |
      v
Primary database crashes during result publication
      |
      v
Primary database + results platform
      |
      v
Detect fault -> restore service using standby database
      |
      v
Restore within 60 seconds; lose no committed results
```

### Explanation (Supplementary)

This example replaces the vague statement “the results system must be highly available” with a testable requirement. A test can simulate a database crash and verify recovery time and data preservation.

### Exam Tip

In an exam, explicitly label all six elements. The response measure should include a number or otherwise testable condition.

### Common Mistake

Putting “standby database” in the stimulus. It is an example mechanism used in the response.

### Likely Exam Questions

1. **Question:** What is the response measure in the database-crash scenario?
   - **Expected answer:** Service is restored within 60 seconds without losing committed results.
2. **Question:** What is the environment?
   - **Expected answer:** During result publication in normal operation.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-24"></a>
## Page 24 - Quality Attribute Scenarios - Availability Diagram Example

### Original Page Content

**Example: A Concrete Quality Attribute Scenario for Availability**

- **Source:** Heartbeat Monitor
- **Stimulus:** Server Unresponsive
- **Artifact:** Process
- **Environment:** Normal Operation
- **Response:** Inform Operator; Continue to Operate
- **Response Measure:** No Downtime

### Visual Explanation

```text
Heartbeat Monitor
       |
       v
Server becomes unresponsive
       |
       v
Affected process during normal operation
       |
       v
Inform operator + continue operating
       |
       v
No downtime
```

The visual follows the same source-to-measure sequence used in the generic scenario diagram.

### Explanation (Supplementary)

This example emphasizes fault detection by a heartbeat monitor and continued operation after the fault is identified. The measurable goal is zero downtime.

### Exam Tip

Do not omit the source. In this example, the source is the monitoring mechanism, not the failed server.

### Common Mistake

Confusing “server unresponsive” with the response. It is the stimulus; informing the operator and continuing operation are responses.

### Likely Exam Questions

1. **Question:** What is the source of stimulus in this scenario?
   - **Expected answer:** The heartbeat monitor.
2. **Question:** What measurable result is required?
   - **Expected answer:** No downtime.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-25"></a>
## Page 25 - Quality Attribute Scenarios - General Performance Scenario

### Original Page Content

**A General Quality Attribute Scenario for Performance**

| Portion of Scenario | Possible Values |
|---|---|
| Source | Internal or external to the system |
| Stimulus | Arrival of a periodic, sporadic, or stochastic event |
| Artifact | System or one or more components in the system |
| Environment | Operational mode: normal, emergency, peak load, overload |
| Response | Process events, change level of service |
| Response Measure | Latency, deadline, throughput, jitter, miss rate |

### Visual Explanation

The visual is a general-scenario table specialized for Performance. It shows that performance requirements depend on event arrival patterns, operating conditions, affected components, system processing behaviour, and measurable timing or capacity results.

### Explanation (Supplementary)

Performance scenarios make speed and capacity claims testable. They specify what event arrives, under what load, which system component handles it, and whether success is measured by latency, throughput, deadlines, jitter, or miss rate.

### Definitions

**Definition - Latency:** A response measure representing the time between an event or request and the system response.

**Simple meaning:** How long a response takes.

**Example:** A request completes within two seconds.

**Definition - Throughput:** A response measure representing how much work the system completes in a period.

**Simple meaning:** How many requests or operations the system handles over time.

**Example:** Requests completed per second.

### Exam Tip

For Performance scenarios, the environment is often normal, peak-load, overload, or emergency operation. The response measure must be quantitative.

### Common Mistake

Writing “fast response” instead of specifying latency, deadline, throughput, jitter, or miss rate.

### Likely Exam Questions

1. **Question:** Name three possible Performance response measures.
   - **Expected answer:** Latency, throughput, and deadline. Jitter and miss rate are also listed.
2. **Question:** What event patterns may be used as Performance stimuli?
   - **Expected answer:** Periodic, sporadic, or stochastic event arrivals.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-26"></a>
## Page 26 - Quality Attribute Scenarios - Concrete Performance Scenario

### Original Page Content

**Example: A Concrete Quality Attribute Scenario for Performance**

| Element | Scenario |
|---|---|
| Source of stimulus | Registered student |
| Stimulus | Requests the examination results page |
| Environment | Peak result-release period (Peak-Load Operation) |
| Artifact | Results service |
| Response | Retrieves and displays the student's results |
| Response measure | 95% of requests are completed within two seconds |

### Visual Explanation

The table presents a complete Performance scenario. The response measure combines a percentile-like success proportion (**95% of requests**) with a latency target (**within two seconds**).

```text
Registered student
       |
       v
Requests results page during peak release period
       |
       v
Results service retrieves and displays results
       |
       v
95% complete within 2 seconds
```

### Explanation (Supplementary)

This scenario is testable under peak-load conditions. A performance test can generate result-page requests and verify the percentage that meet the two-second limit.

### Exam Tip

A strong Performance response measure often combines workload conditions with a numeric time or throughput target.

### Common Mistake

Using average response time only when the source scenario explicitly requires 95% of requests within the target.

### Likely Exam Questions

1. **Question:** What makes this scenario a Performance scenario?
   - **Expected answer:** Its response measure specifies that 95% of requests complete within two seconds during peak load.
2. **Question:** What is the artifact?
   - **Expected answer:** The results service.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-27"></a>
## Page 27 - Quality Attribute Scenarios - Concrete Security Scenario

### Original Page Content

**Example: A Concrete Quality Attribute Scenario for Security**

- **Source:** Disgruntled Employee from Remote Location
- **Stimulus:** Attempts to Modify Pay Rate
- **Artifact:** Data within the System
- **Environment:** Normal Operations
- **Response:** System Maintains Audit Trail
- **Response Measure:** Correct Data Is Restored within a Day and Source of Tampering Identified

### Visual Explanation

```text
Disgruntled employee at remote location
             |
             v
Attempts to modify pay-rate data
             |
             v
Data within the system during normal operations
             |
             v
System maintains an audit trail
             |
             v
Restore correct data within one day
and identify the source of tampering
```

The visual demonstrates that Security scenarios may include detection, accountability, restoration, and source identification.

### Explanation (Supplementary)

The scenario does not describe Security only as blocking access. It also requires an audit trail, restoration of correct data, and identification of the tampering source.

### Exam Tip

Security response measures can include recovery and accountability, not only prevention.

### Common Mistake

Writing “deny access” as the only possible Security response. The provided example uses audit and recovery after tampering.

### Likely Exam Questions

1. **Question:** What is the required Security response?
   - **Expected answer:** The system maintains an audit trail.
2. **Question:** What two outcomes are measured?
   - **Expected answer:** Correct data is restored within one day, and the source of tampering is identified.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-28"></a>
## Page 28 - Quality Attribute Scenarios - Concrete Modifiability Scenario

### Original Page Content

**Example: A Concrete Quality Attribute Scenario for Modifiability**

- **Source:** Developer
- **Stimulus:** Wishes to Change the UI
- **Artifact:** Code
- **Environment:** Design Time
- **Response:** Change Made and Unit Tested
- **Response Measure:** In Three Hours

### Visual Explanation

```text
Developer
   |
   v
Requests a UI change at design time
   |
   v
Code is affected
   |
   v
Change is implemented and unit tested
   |
   v
Completed in three hours
```

The visual shows that Modifiability is measured through the effort or time required to make and verify a change.

### Explanation (Supplementary)

The scenario makes “easy to modify” measurable by defining a specific change, affected artifact, development environment, required verification, and completion time.

### Exam Tip

A Modifiability response measure commonly uses time, effort, cost, or scope of affected components. In this slide, the measure is three hours.

### Common Mistake

Leaving testing outside the response. The source explicitly requires the change to be made **and unit tested**.

### Likely Exam Questions

1. **Question:** What is the response in the Modifiability scenario?
   - **Expected answer:** The change is made and unit tested.
2. **Question:** What is the response measure?
   - **Expected answer:** Completion in three hours.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-29"></a>
## Page 29 - Quality Attribute Tactics - Definition and Purpose

### Original Page Content

- Tactics are design techniques an architect can use to help achieve required Quality Attribute responses.
- A tactic is a design decision that influences the achievement of a Quality Attribute response; tactics directly affect the system's response to some stimulus.

### Visual Explanation

The diagram shows a stimulus entering a control point labelled **Tactics to Control Response**, followed by the resulting response.

```text
Stimulus
   |
   v
[Tactics to Control Response]
   |
   v
Response
```

The tactic sits between the stimulus and response because it is the design decision used to shape how the system reacts.

### Explanation (Supplementary)

A scenario states the required response and measure. A tactic is a design technique selected to help produce that required response.

### Definitions

**Definition - Architectural tactic:** A design decision or technique that directly influences the system response to a stimulus in order to help achieve a Quality Attribute response.

**Simple meaning:** A focused design move used to improve a required quality response.

**Example:** Using heartbeat monitoring to detect faults.

### Exam Tip

Do not confuse a **scenario** with a **tactic**. The scenario specifies the required behaviour; the tactic is a design decision used to achieve it.

### Common Mistake

Naming a Quality Attribute such as “Availability” as a tactic. Availability is the goal; monitoring or redundancy are tactics.

### Likely Exam Questions

1. **Question:** What is an architectural tactic?
   - **Expected answer:** A design decision that directly influences the system response to a stimulus to help achieve a Quality Attribute response.
2. **Question:** Where does a tactic act in the stimulus-response model?
   - **Expected answer:** Between the stimulus and the response, controlling or influencing the response.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-30"></a>
## Page 30 - Quality Attribute Tactics - Availability Tactics

### Original Page Content

**Availability Tactics**

The diagram groups tactics into **Detect Faults**, **Recover from Faults**, and **Prevent Faults**.

### Detect Faults

- Ping / Echo
- Monitor
- Heartbeat
- Timestamp
- Sanity Checking
- Condition Monitoring
- Voting
- Exception Detection
- Self-Test

### Recover from Faults

#### Preparation and Repair

- Active Redundancy
- Passive Redundancy
- Spare
- Exception Handling
- Rollback
- Software Upgrade
- Retry
- Ignore Faulty Behavior
- Degradation
- Reconfiguration

#### Reintroduction

- Shadow
- State Resynchronization
- Escalating Restart
- Non-Stop Forwarding

### Prevent Faults

- Removal from Service
- Transactions
- Predictive Model
- Exception Prevention
- Increase Competence Set

### Visual Explanation

```text
Fault
  |
  v
Availability Tactics
  +-- Detect Faults
  |     +-- Ping/Echo, Monitor, Heartbeat, Timestamp
  |     +-- Sanity Checking, Condition Monitoring, Voting
  |     +-- Exception Detection, Self-Test
  |
  +-- Recover from Faults
  |     +-- Preparation and Repair
  |     |     +-- Redundancy, Spare, Exception Handling, Rollback
  |     |     +-- Upgrade, Retry, Ignore Faulty Behavior
  |     |     +-- Degradation, Reconfiguration
  |     +-- Reintroduction
  |           +-- Shadow, State Resynchronization
  |           +-- Escalating Restart, Non-Stop Forwarding
  |
  +-- Prevent Faults
        +-- Removal from Service, Transactions, Predictive Model
        +-- Exception Prevention, Increase Competence Set
  |
  v
Fault Masked or Repair Made
```

### Explanation (Supplementary)

Availability tactics manage the fault lifecycle. Detection tactics discover faults; recovery tactics repair, mask, or reintroduce service; prevention tactics reduce the chance that faults occur or become failures.

### Exam Tip

The highest-level classification is critical: **detect**, **recover**, and **prevent** faults. Then provide examples under each.

### Common Mistake

Placing Heartbeat under recovery. In the diagram, Heartbeat is a fault-detection tactic.

### Likely Exam Questions

1. **Question:** What are the three main groups of Availability tactics?
   - **Expected answer:** Detect faults, recover from faults, and prevent faults.
2. **Question:** Give two reintroduction tactics.
   - **Expected answer:** Shadow and state resynchronization. Escalating restart and non-stop forwarding are also listed.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-31"></a>
## Page 31 - Quality Attribute Tactics - Performance Tactics

### Original Page Content

**Performance Tactics**

The diagram groups tactics into **Control Resource Demand** and **Manage Resources**.

### Control Resource Demand

- Manage Sampling Rate
- Limit Event Response
- Prioritize Events
- Reduce Overhead
- Bound Execution Times
- Increase Resource Efficiency

### Manage Resources

- Increase Resources
- Introduce Concurrency
- Maintain Multiple Copies of Computations
- Maintain Multiple Copies of Data
- Bound Queue Sizes
- Schedule Resources

### Visual Explanation

```text
Event Arrives
      |
      v
Performance Tactics
  +-- Control Resource Demand
  |     +-- Manage sampling rate
  |     +-- Limit event response
  |     +-- Prioritize events
  |     +-- Reduce overhead
  |     +-- Bound execution times
  |     +-- Increase resource efficiency
  |
  +-- Manage Resources
        +-- Increase resources
        +-- Introduce concurrency
        +-- Maintain copies of computations/data
        +-- Bound queue sizes
        +-- Schedule resources
      |
      v
Response Generated within Time Constraints
```

### Explanation (Supplementary)

Performance can be improved by reducing or controlling the work demanded from the system, by increasing or organizing available resources, or by combining both approaches.

### Exam Tip

Remember the two top-level strategies: **control demand** and **manage resources**. Examples should be placed under the correct branch.

### Common Mistake

Assuming “increase resources” is the only Performance tactic. The diagram includes demand-control tactics that can improve performance without simply adding resources.

### Likely Exam Questions

1. **Question:** What are the two main categories of Performance tactics?
   - **Expected answer:** Control resource demand and manage resources.
2. **Question:** Give three tactics for managing resources.
   - **Expected answer:** Increase resources, introduce concurrency, and schedule resources. Other listed examples are also valid.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-32"></a>
## Page 32 - Quality Attribute Tactics - Security Tactics

### Original Page Content

**Security Tactics**

The diagram groups tactics into **Detect Attacks**, **Resist Attacks**, **React to Attacks**, and **Recover from Attacks**.

### Detect Attacks

- Detect Intrusion
- Detect Service Denial
- Verify Message Integrity
- Detect Message Delay

### Resist Attacks

- Identify Actors
- Authenticate Actors
- Authorize Actors
- Limit Access
- Limit Exposure
- Encrypt Data
- Separate Entities
- Change Default Settings

### React to Attacks

- Revoke Access
- Lock Computer
- Inform Actors

### Recover from Attacks

- Maintain Audit Trail
- Restore
  - See Availability

### Visual Explanation

```text
Attack
  |
  v
Security Tactics
  +-- Detect Attacks
  |     +-- Intrusion, service denial, message integrity, delay
  +-- Resist Attacks
  |     +-- Identify, authenticate, authorize
  |     +-- Limit access/exposure, encrypt, separate, change defaults
  +-- React to Attacks
  |     +-- Revoke access, lock computer, inform actors
  +-- Recover from Attacks
        +-- Maintain audit trail, restore (linked to Availability)
  |
  v
System Detects, Resists, Reacts, or Recovers
```

### Explanation (Supplementary)

Security tactics cover the complete attack lifecycle. A secure architecture may need mechanisms to notice an attack, resist it, react while it is occurring, and restore correct operation afterward.

### Exam Tip

The four top-level categories are likely exam material. Authentication and authorization belong under **Resist Attacks**, not Detect Attacks.

### Common Mistake

Confusing authentication and authorization. In the diagram both resist attacks, but authentication verifies actors while authorization controls what identified actors may do.

### Likely Exam Questions

1. **Question:** What are the four groups of Security tactics?
   - **Expected answer:** Detect attacks, resist attacks, react to attacks, and recover from attacks.
2. **Question:** Which Security tactic category includes maintaining an audit trail?
   - **Expected answer:** Recover from attacks.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-33"></a>
## Page 33 - Quality Attribute Tactics - Modifiability Tactics

### Original Page Content

**Modifiability Tactics**

The diagram groups tactics into **Reduce Size of a Module**, **Increase Cohesion**, **Reduce Coupling**, and **Defer Binding**.

### Reduce Size of a Module

- Split Module

### Increase Cohesion

- Increase Semantic Coherence

### Reduce Coupling

- Encapsulate
- Use an Intermediary
- Restrict Dependencies
- Refactor
- Abstract Common Services

### Defer Binding

- The diagram names the category but does not list a specific sub-tactic on this slide.

### Visual Explanation

```text
Change Arrives
      |
      v
Modifiability Tactics
  +-- Reduce Size of a Module
  |     +-- Split Module
  +-- Increase Cohesion
  |     +-- Increase Semantic Coherence
  +-- Reduce Coupling
  |     +-- Encapsulate
  |     +-- Use an Intermediary
  |     +-- Restrict Dependencies
  |     +-- Refactor
  |     +-- Abstract Common Services
  +-- Defer Binding
      |
      v
Change Made within Time and Budget
```

### Explanation (Supplementary)

Modifiability tactics aim to limit the scope and cost of change. Smaller modules, stronger cohesion, lower coupling, and delayed binding can reduce the number of affected elements and make changes easier to implement.

### Exam Tip

The core design ideas are **smaller modules**, **higher cohesion**, **lower coupling**, and **deferred binding**.

### Common Mistake

Claiming that “reduce coupling” means removing all dependencies. The slide focuses on controlling them through encapsulation, intermediaries, restrictions, refactoring, and shared abstractions.

### Likely Exam Questions

1. **Question:** What are the four categories of Modifiability tactics?
   - **Expected answer:** Reduce size of a module, increase cohesion, reduce coupling, and defer binding.
2. **Question:** Give three tactics for reducing coupling.
   - **Expected answer:** Encapsulate, use an intermediary, and restrict dependencies. Refactor and abstract common services are also listed.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-34"></a>
## Page 34 - Required Reading

### Original Page Content

Please read:

- Chapter 04 - **Understanding Quality Attributes**, and each chapter on relevant Quality Attributes in:
  - L. Bass, P. C. Clements, and R. Kazman, *Software Architecture in Practice*, 3rd ed. Boston, MA: Addison-Wesley Professional, 2012.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

The required reading expands the lecture's scenario and tactic concepts. The slide specifically identifies Chapter 04 and the chapters for individual Quality Attributes.

### Exam Tip

Use the lecture slides as the exam structure and the required reading for deeper examples and tactic details.

### Common Mistake

No major common mistake.

### Likely Exam Questions

1. **Question:** Which chapter is specifically required?
   - **Expected answer:** Chapter 04 - Understanding Quality Attributes.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-35"></a>
## Page 35 - Summary

### Original Page Content

- Functional requirements describe **what the system must do**.
- Quality Attributes describe the **qualities and capabilities the system must support** while providing its functionality.
- Quality Attributes influence important structural and architectural decisions.
- Only the Quality Attributes that significantly influence the architecture should be treated as **Architecturally Significant Quality Attributes**.
- Quality Attribute requirements must be expressed clearly and measurably using **Quality Attribute Scenarios**.
- Architectural tactics are design decisions used to control Quality Attribute responses.
- Tactics may improve one Quality Attribute while negatively affecting another.
- Architecture therefore requires prioritisation, judgment, and trade-off analysis.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

The summary links the complete reasoning chain:

```text
Functionality + Required Qualities
              |
              v
Identify Architecturally Significant Quality Attributes
              |
              v
Express them as measurable Quality Attribute Scenarios
              |
              v
Select architectural tactics
              |
              v
Analyze trade-offs and make structural decisions
```

### Exam Tip

This page can be used as a model for a full-lecture essay answer. Expand each bullet with one example.

### Common Mistake

Explaining tactics without mentioning trade-offs. The summary explicitly states that a tactic can help one quality while harming another.

### Likely Exam Questions

1. **Question:** Why are only some Quality Attributes treated as architecturally significant?
   - **Expected answer:** Because only those that significantly influence architecture require primary structural attention.
2. **Question:** Why does architecture require trade-off analysis?
   - **Expected answer:** Tactics and decisions can improve one Quality Attribute while negatively affecting another.

[Back to Table of Contents](#table-of-contents)

---

<a id="page-36"></a>
## Page 36 - References

### Original Page Content

- M. Richards and N. Ford, *Fundamentals of Software Architecture: A Modern Engineering Approach*, 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.
- L. Bass, P. C. Clements, and R. Kazman, *Software Architecture in Practice*, 3rd ed. Boston, MA: Addison-Wesley Professional, 2012.

### Visual Explanation

No major visual content.

### Explanation (Supplementary)

The references identify the two main sources used in the lecture: one for architectural characteristics and prioritisation, and one for Quality Attribute Scenarios and tactics.

### Exam Tip

When attribution is requested, associate Richards and Ford with prioritising architectural characteristics, and Bass, Clements, and Kazman with Quality Attribute Scenarios and tactics.

### Common Mistake

No major common mistake.

### Likely Exam Questions

1. **Question:** Which reference is associated with Quality Attribute Scenarios in this lecture?
   - **Expected answer:** Bass, Clements, and Kazman, Software Architecture in Practice.

[Back to Table of Contents](#table-of-contents)

---

<a id="complete-lecture-summary"></a>
## Complete Lecture Summary

### 1. Functional Requirements and Quality Attributes

- Functional requirements state **what the system must do** and represent domain behaviour.
- Quality Attributes state the measurable qualities and capabilities required while that functionality is delivered.
- A system can be functionally correct but still unacceptable when it is slow, unavailable, insecure, difficult to change, or otherwise below the required quality level.

### 2. Architectural Importance

- The same functionality can be implemented through multiple structures, such as a single shared-database application, independently deployed services, or an event-driven architecture.
- Quality Attributes, constraints, unacceptable failures, expected changes, and acceptable trade-offs help determine the appropriate structure.
- Architecture should begin from stakeholder and business concerns, not from a fashionable architectural style.

### 3. Architecturally Significant Quality Attributes

- A Quality Attribute is architecturally significant when supporting it requires important structural decisions.
- Not every desirable quality should be treated as an equal driver because additional drivers create complexity.
- Important selection questions concern system success, unacceptable failures, early structural decisions, and qualities that are difficult to add later.
- Richards and Ford recommend identifying a short candidate list, asking stakeholders to select three highest-priority qualities, and using them as primary drivers. The number three is a prioritisation technique, not a universal rule.

### 4. Quality Attribute Scenarios

- Vague statements such as “fast,” “secure,” and “highly available” are not operational or testable.
- A complete scenario contains six elements:
  1. Source of stimulus
  2. Stimulus
  3. Environment
  4. Artifact
  5. Response
  6. Response measure
- The response measure makes success measurable.

### 5. Architectural Tactics

- A tactic is a design decision that directly influences the system response to a stimulus.
- Availability tactics detect, recover from, and prevent faults.
- Performance tactics control resource demand and manage resources.
- Security tactics detect, resist, react to, and recover from attacks.
- Modifiability tactics reduce module size, increase cohesion, reduce coupling, and defer binding.

### 6. Trade-offs

- Redundancy may improve Availability while increasing cost and complexity.
- Caching may improve Performance while complicating consistency.
- Abstraction may improve Modifiability while adding overhead.
- Strong Security controls may reduce Usability.
- Architecture therefore requires prioritisation, judgment, and trade-off analysis rather than independent maximisation of every quality.

<a id="key-definitions"></a>
## Key Definitions

| Term | Definition | Simple Meaning |
|---|---|---|
| Functional requirement | A requirement describing what the system does and the domain behaviour it provides. | The feature or action. |
| Quality Attribute | A measurable quality or capability required while the system provides its functionality. | How well the system works. |
| Architectural characteristic | A non-domain design consideration that influences structure and is important to system success. | A quality that shapes architecture. |
| Architecturally Significant Quality Attribute | A Quality Attribute whose support requires important structural decisions. | A primary architectural driver. |
| Quality Attribute Scenario | An operational and testable expression of a quality requirement. | A complete measurable quality statement. |
| Source of stimulus | The entity that generates the event or condition. | Who or what causes it. |
| Stimulus | The event or condition requiring a response. | What happens. |
| Environment | The conditions in which the stimulus occurs. | The operating state. |
| Artifact | The affected part of the system. | Where it happens. |
| Response | The activity undertaken by the system. | What the system does. |
| Response measure | The measurable criterion used to evaluate the response. | How success is tested. |
| Architectural tactic | A design decision that directly influences the response to a stimulus. | A design move used to achieve a quality response. |
| Trade-off | A positive or negative effect on another quality or concern when improving one quality. | A gain in one area with a cost elsewhere. |

<a id="important-formulas-and-code-snippets"></a>
## Important Formulas and Code Snippets

- **Formulas:** No mathematical formulas are presented in this lecture.
- **Code snippets:** No programming code is presented in this lecture.
- The most important structured pattern is the six-element scenario sequence:

```text
Source of Stimulus -> Stimulus -> Environment/Artifact -> Response -> Response Measure
```

<a id="important-diagrams-and-tables"></a>
## Important Diagrams and Tables

### Architectural Characteristic Model - Page 06

```text
Non-domain design consideration
             +
Influences a structural aspect
             +
Critical or important to application success
             =
Architectural Characteristic
```

### Quality Attribute Scenario Model - Pages 20-21

```text
[Source] --stimulus--> [Artifact under Environment] --response--> [Response Measure]
```

### Tactic Control Model - Page 29

```text
Stimulus -> Tactic that Controls Response -> Response
```

### Tactic Families - Pages 30-33

| Quality Attribute | Main Tactic Families |
|---|---|
| Availability | Detect faults; recover from faults; prevent faults |
| Performance | Control resource demand; manage resources |
| Security | Detect attacks; resist attacks; react to attacks; recover from attacks |
| Modifiability | Reduce module size; increase cohesion; reduce coupling; defer binding |

<a id="quick-revision-notes"></a>
## Quick Revision Notes

| Topic | One-line revision point | Exam importance |
|---|---|---|
| Functionality | Describes what the system does. | High |
| Quality Attributes | Describe measurable qualities while functionality is provided. | High |
| Architectural significance | A quality is significant when it requires important structural decisions. | High |
| Scenario elements | Source, stimulus, environment, artifact, response, response measure. | Very high |
| Availability scenario | Focuses on faults, operational continuity, detection, recovery, and measurable downtime or repair. | High |
| Performance scenario | Focuses on event arrival, load conditions, processing, latency, throughput, or deadlines. | High |
| Security scenario | May require prevention, detection, audit, reaction, recovery, and accountability. | High |
| Modifiability scenario | Measures the time, effort, or cost of implementing and verifying a change. | High |
| Tactic | A design decision that directly influences the system response to a stimulus. | Very high |
| Trade-off | Improving one quality may harm another quality or increase cost/complexity. | Very high |

### Thirty-Second Recall

```text
WHAT?        Functional requirement
HOW WELL?    Quality Attribute
WHICH ONES?  Architecturally significant attributes
HOW STATED?  Six-element measurable scenarios
HOW ACHIEVED? Architectural tactics
WHAT RISK?   Trade-offs among qualities, cost, and complexity
```

<a id="likely-exam-questions"></a>
## Likely Exam Questions

1. **Differentiate Functional Requirements and Quality Attributes.**
   - Functional Requirements describe what the system does and are commonly represented by features or use cases. Quality Attributes describe measurable qualities and capabilities while the functionality is provided and are commonly represented by measurable scenarios.
2. **Define an Architecturally Significant Quality Attribute.**
   - It is a Quality Attribute whose support requires important structural decisions.
3. **Explain why architecture should not begin with a fashionable style.**
   - The architecture must be driven by required functionality, essential qualities, constraints, unacceptable failures, expected changes, and acceptable trade-offs.
4. **List and explain the six elements of a Quality Attribute Scenario.**
   - Source of stimulus, stimulus, environment, artifact, response, and response measure.
5. **Convert “the system must be fast” into a measurable scenario.**
   - Example based on the lecture: A registered student requests the examination results page during peak result release; the results service retrieves and displays the results; 95% of requests complete within two seconds.
6. **Write the concrete Availability scenario for the database failure example.**
   - Internal source; primary database crashes; during result publication; primary database and results platform affected; detect and restore using a standby database; restore within 60 seconds without losing committed results.
7. **Define an architectural tactic and distinguish it from a scenario.**
   - A scenario specifies the required measurable quality response. A tactic is a design decision used to influence the system response and help achieve the scenario.
8. **Classify Availability tactics and give examples.**
   - Detect faults, recover from faults, and prevent faults. Examples include heartbeat, redundancy, rollback, state resynchronization, transactions, and removal from service.
9. **Classify Security tactics.**
   - Detect attacks, resist attacks, react to attacks, and recover from attacks.
10. **Explain two Quality Attribute trade-offs.**
    - Redundancy improves Availability but increases cost and complexity. Caching improves Performance but complicates consistency.

<a id="key-terms"></a>
## Key Terms

- Functional requirement
- Domain functionality
- Quality Attribute
- Architectural characteristic
- Non-functional requirement
- Performance
- Availability
- Security
- Modifiability
- Scalability
- Testability
- Usability
- Interoperability
- Architecturally Significant Quality Attribute
- Architectural driver
- Quality Attribute Scenario
- Source of stimulus
- Stimulus
- Environment
- Artifact
- Response
- Response measure
- Architectural tactic
- Fault detection
- Fault recovery
- Fault prevention
- Resource demand
- Resource management
- Attack detection
- Attack resistance
- Attack reaction
- Attack recovery
- Cohesion
- Coupling
- Binding
- Trade-off analysis

<a id="verification"></a>
## Verification

- Source PDF page count checked: **36**.
- Markdown page sections counted: **36**.
- Page order preserved from Page 01 through Page 36.
- Cover, contents, text-only, table, diagram, summary, required-reading, and references pages included.
- All meaningful visuals recreated as Markdown tables, flows, or ASCII diagrams.
- No code was present in the source PDF.

PDF pages: 36 / MD page sections: 36 ✅