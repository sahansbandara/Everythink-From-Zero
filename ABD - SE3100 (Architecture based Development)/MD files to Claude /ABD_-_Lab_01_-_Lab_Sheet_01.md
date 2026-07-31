# SE3100 - Architecture Based Development
## Lab Sheet 01 - Identifying and Reasoning About Quality Attributes

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Degree | BSc (Hons) in IT specializing in Software Engineering |
| Module code | SE3100 |
| Module name | Architecture Based Development |
| Academic period | Year 3 Semester 1 - 2026 |
| Lab sheet | Lab Sheet 01 |
| Lab title | Identifying and Reasoning About Quality Attributes |
| Total PDF pages | 3 |

> **Source note:** This Markdown file follows the uploaded PDF page by page. All original instructions, case-study details, tables, examples, measurements, and guidelines are preserved. Added explanations are separated from the original lab content and are intended only to clarify the activity.

---

# Table of Contents

- [Page 01 - Objective, Background, and SmartClinic Case Study](#page-01---objective-background-and-smartclinic-case-study)
  - [Objective](#objective)
  - [Activity Instructions](#activity-instructions)
  - [Before You Begin](#before-you-begin)
  - [Case Study: SmartClinic](#case-study-smartclinic)
- [Page 02 - Case Study Continuation and Lab Tasks](#page-02---case-study-continuation-and-lab-tasks)
  - [Task 1 - Identify Quality Attributes](#task-1---identify-quality-attributes)
  - [Task 2 - Quality Attribute Scenarios](#task-2---quality-attribute-scenarios)
  - [Quality Attribute Scenario Structure](#quality-attribute-scenario-structure)
  - [Availability Scenario Example - Part 1](#availability-scenario-example---part-1)
- [Page 03 - Availability Scenario Completion and Guidelines](#page-03---availability-scenario-completion-and-guidelines)
  - [Availability Scenario Example - Part 2](#availability-scenario-example---part-2)
  - [Some Guidelines](#some-guidelines)
- [Concept Explanations](#concept-explanations)
- [Case Study Requirement Map](#case-study-requirement-map)
- [Quality Attribute Scenario Template](#quality-attribute-scenario-template)
- [Reasoning About Architectural Significance](#reasoning-about-architectural-significance)
- [Trade-Off Reasoning Guide](#trade-off-reasoning-guide)
- [Likely Viva and Exam Questions](#likely-viva-and-exam-questions)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Full Lab Summary](#full-lab-summary)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Key Terms](#key-terms)
- [Final Self-Check Checklist](#final-self-check-checklist)
- [Verification](#verification)

---

# Page-by-Page Lab Notes

## Page 01 - Objective, Background, and SmartClinic Case Study

### Original Page Content

**BSc (Hons) in IT specializing in Software Engineering**

**SE3100 : Architecture based Development**

**Year 3 Semester 1 - 2026**

### Lab Sheet 01 - Identifying and Reasoning About Quality Attributes

### Objective

The objective of this practical is to help students recognize quality attributes as the primary drivers of architectural decisions.

By the end of this activity, students should be able to:

- Identify architecturally significant quality attributes for a given system.
- Express them as clear and testable scenarios.
- Reason about trade-offs between competing attributes.

### Activity Instructions

- This is a self-guided activity.
- Students may attempt this as a pair. Discussions are encouraged.
- Students may consult the lab instructors at any time, but they are expected to carry out the steps on their own, as a pair.
- Students are free to refer to any material online or offline.

### Before You Begin

Most architectural decisions are driven not only by functionality but by quality attributes, also called architecture characteristics.

Examples include:

- Availability.
- Performance.
- Security.
- Modifiability.

These attributes determine **how well a system behaves under real operating conditions**.

Functional requirements state **what a system should do**.

Example:

> Patients can book appointments.

Quality attributes state **how well the system should perform those functions**.

Example:

> The system remains responsive during peak booking periods, such as responding to a `GET` request within 500 ms under a peak load of 1,000 concurrent users.

Quality attributes matter to architects because:

- They are difficult to add later.
- They often trade off against one another.
- They can strongly shape the architecture.

While reading the case study, students should identify statements that describe conditions or expectations that genuinely shape the architecture.

Not every sentence carries architectural significance. Some details may be purely functional or incidental.

### Task

### Case Study: SmartClinic

**SmartClinic - Multi-Branch Patient Appointment and Records Platform**

A healthcare technology company is building a platform to manage patient appointments and medical records for a network of clinics operating across several cities.

Patients should be able to:

- Book appointments.
- View past visit history.
- Receive reminders.

Clinic staff need to:

- Manage schedules.
- Update patient records during and after consultations.
- Generate visit summaries.

Staff have varying levels of familiarity with digital systems:

- Some have used similar software before.
- Others are using a system like this for the first time.

Therefore, staff need to:

- Learn the platform quickly.
- Correct mistakes without complicated recovery steps.

Examples of mistakes include:

- Accidental cancellation.
- Incorrect data entry.

The platform stores sensitive medical information and must comply with healthcare data-protection regulations.

Usage is uneven throughout the day:

- There are sharp spikes in the morning when patients book same-day appointments.
- There are occasional surges during seasonal illness outbreaks.

The page ends while describing how the system should behave during these peak periods. The sentence continues on Page 02.

### Visual Explanation

The page contains:

- SLIIT and Faculty of Computing branding.
- Module, degree, and semester information.
- A clear hierarchy of headings:
  - Lab title.
  - Objective.
  - Before You Begin.
  - Task.
- A long case-study description.
- Bold emphasis on the distinction between:
  - **What a system should do.**
  - **How well it should do it.**

The main conceptual relationship is:

```text
Business and User Needs
        |
        +--> Functional Requirements
        |       "What must the system do?"
        |
        +--> Quality Attributes
                "How well must it do it?"
                        |
                        v
              Architectural Decisions
```

### Explanation

The lab is not asking students to redesign the whole SmartClinic system. It asks them to identify the non-functional qualities that are important enough to influence architectural structure and decisions.

The case study deliberately contains a mixture of:

- Functional requirements.
- Quality expectations.
- Operating conditions.
- Stakeholder differences.
- Future-change expectations.

Students must separate these categories before choosing architecturally significant quality attributes.

### Definition

**Quality attribute:** A measurable characteristic that describes how well a software system performs or behaves.

**Simple meaning:** A property such as speed, security, availability, usability, or modifiability.

### Definition

**Functional requirement:** A statement describing a service, action, or behaviour that a system must provide.

**Simple meaning:** What the system must do.

### Definition

**Architecturally significant requirement:** A requirement that has a strong influence on the architecture because it affects major structures, mechanisms, deployment decisions, or trade-offs.

**Simple meaning:** A requirement important enough to change how the system must be designed.

### Exam Tip

A strong answer distinguishes:

| Functional Requirement | Quality Attribute |
|---|---|
| Patients can book appointments | Booking remains responsive under peak load |
| Staff can update medical records | Record access is protected and auditable |
| The system sends reminders | Reminder processing remains reliable at scale |

### Common Mistake

Do not label every case-study statement as a quality attribute. For example, "patients can view past visit history" is mainly functional unless a measurable quality condition is added.

### Likely Exam Questions

**Question 1:** What is the difference between a functional requirement and a quality attribute?

**Expected answer:** A functional requirement states what the system should do, while a quality attribute states how well the system must perform or behave under specified conditions.

**Question 2:** Why are quality attributes architecturally important?

**Expected answer:** They influence major architectural decisions, are difficult to add later, and often create trade-offs with other qualities.

---

## Page 02 - Case Study Continuation and Lab Tasks

### Original Page Content

### Case Study Continuation

During peak periods, the system must continue processing booking and check-in requests without noticeable delay, even as the number of simultaneous requests rises well above a normal day's traffic.

Clinics operate in different regions and occasionally experience network interruptions.

The system must remain usable at a branch even when connectivity to the central system is temporarily unavailable.

The company plans to expand to new clinics regularly.

The system is expected to remain in operation for many years, with periodic upgrades to accommodate:

- New regulations.
- New clinic workflows.
- Growing numbers of patients.
- Growing numbers of staff.

---

### Task 1 - Identify Quality Attributes

Identify at least four quality attributes that are architecturally significant for this system.

For each attribute:

- Briefly justify why it matters.
- Base the justification on the case-study description.
- Use one or two sentences per attribute.

#### Example

> **Do not reuse this exact attribute.**

- **Availability** - clinics must stay usable during network interruptions with the central system.

---

### Task 2 - Quality Attribute Scenarios

Choose two quality attributes identified in Task 1.

For each attribute, write a quality attribute scenario using the structure below.

### Quality Attribute Scenario Structure

| Element | Description |
|---|---|
| Source | Who or what originates the event - a user or another system |
| Stimulus | The action or external event that arrives at the system |
| Environment | The external circumstances under which the requirement must be met |
| Artifact | The part of the system the requirement applies to |
| Response | How the system reacts to the stimulus |
| Response Measure | A metric that quantifies and tests the response |

### Example

> **For format only - do not reuse this exact scenario.**

### Availability Scenario Example - Part 1

| Element | Description - Availability |
|---|---|
| Source | External to the system - loss of network connectivity between a branch clinic and the central system |
| Stimulus | Fault: connection to the central system is lost, an omission fault |
| Environment | Normal operating hours at a branch clinic |
| Artifact | Appointment booking and patient check-in module |

The example continues on Page 03.

### Visual Explanation

This page contains:

1. The end of the SmartClinic case study.
2. Two numbered tasks.
3. A six-row quality-attribute scenario table.
4. The first part of a worked availability scenario.

The scenario structure can be visualized as:

```text
Source
  |
  v
Stimulus
  |
  v
Environment
  |
  v
Artifact
  |
  v
Response
  |
  v
Response Measure
```

A more accurate relationship is:

```text
[Source] produces [Stimulus]
        |
        v
under an [Environment]
        |
        v
affecting an [Artifact]
        |
        v
the system provides a [Response]
        |
        v
verified by a [Response Measure]
```

### Explanation

A quality attribute name by itself is vague.

For example:

> The system should be fast.

This is not directly testable.

A quality attribute scenario turns that vague expectation into a structured requirement by specifying:

- What triggers the requirement.
- When it applies.
- Which part of the system is affected.
- What response is expected.
- How the response will be measured.

### Definition

**Quality attribute scenario:** A structured and measurable description of how a system should respond to a stimulus under specified conditions.

**Simple meaning:** A testable version of a quality requirement.

### Definition

**Source:** The person, system, device, or event origin that produces the stimulus.

**Simple meaning:** Where the event comes from.

### Definition

**Stimulus:** The event, request, action, or fault that reaches the system.

**Simple meaning:** What happens to the system.

### Definition

**Environment:** The operating condition under which the stimulus occurs.

**Simple meaning:** The situation in which the event happens.

### Definition

**Artifact:** The system, subsystem, component, process, data store, or interface affected by the stimulus.

**Simple meaning:** The part of the system being considered.

### Definition

**Response:** The behaviour performed by the system after receiving the stimulus.

**Simple meaning:** What the system does.

### Definition

**Response measure:** A measurable criterion used to determine whether the response is acceptable.

**Simple meaning:** The number or condition used to test success.

### Exam Tip

The **response measure** is the most important part for testability. Good measures may include:

- Time.
- Percentage.
- Maximum number of users.
- Recovery duration.
- Error rate.
- Data-loss limit.
- Number of steps.
- Frequency.
- Capacity.

### Common Mistake

Do not put the desired system behaviour inside the **stimulus** row. The stimulus is the incoming event; the system behaviour belongs in the **response** row.

### Likely Exam Questions

**Question 1:** List the six elements of a quality attribute scenario.

**Expected answer:** Source, stimulus, environment, artifact, response, and response measure.

**Question 2:** Why is a response measure required?

**Expected answer:** It turns the quality expectation into a measurable and testable requirement.

---

## Page 03 - Availability Scenario Completion and Guidelines

### Original Page Content

### Availability Scenario Example - Part 2

| Element | Description - Availability |
|---|---|
| Response | The system detects the loss of connectivity, notifies staff that it is running in degraded offline mode, and continues accepting bookings and check-ins locally. |
| Response Measure | The system must be available during clinic operating hours, 7:00 AM to 8:00 PM, seven days a week. It can operate in degraded offline mode for up to four hours during an outage. All locally captured records must synchronize with the central system within ten minutes of reconnection, which is the repair time. |

### Reconstructed Full Example Table

The original example is divided across Pages 02 and 03. Combined in the original order:

| Element | Description - Availability |
|---|---|
| Source | External to the system - loss of network connectivity between a branch clinic and the central system |
| Stimulus | Fault: connection to the central system is lost, an omission fault |
| Environment | Normal operating hours at a branch clinic |
| Artifact | Appointment booking and patient check-in module |
| Response | The system detects the loss of connectivity, notifies staff that it is running in degraded offline mode, and continues accepting bookings and check-ins locally. |
| Response Measure | The system must be available during clinic operating hours, 7:00 AM to 8:00 PM, seven days a week. It can operate in degraded offline mode for up to four hours during an outage. All locally captured records must synchronize with the central system within ten minutes of reconnection, which is the repair time. |

### Some Guidelines

- Do not mention specific technologies, frameworks, or programming languages.
- Focus on measurable, testable qualities rather than vague terms such as:
  - "Should be fast."
  - "Should be secure."
- Not every requirement is architecturally significant. Select only those that genuinely shape the architecture.
- Keep answers clear, concise, and well-reasoned.
- Diagrams are not required for this activity.
- Do the thinking on your own and use AI or LLM tools only to organize your thoughts.
- Do not blindly depend on LLMs.

### Visual Explanation

The top of the page completes the availability scenario table. The remaining part of the page is a bold **Some Guidelines** section with six bullet points.

The example response measure contains three separate measurable constraints:

```text
Operating-Hour Availability
7:00 AM - 8:00 PM, 7 days a week

Offline Operating Duration
Up to 4 hours

Synchronization / Repair Time
Within 10 minutes after reconnection
```

### Explanation

The example demonstrates that a single quality attribute scenario may use more than one metric.

The metrics cover:

- Expected service window.
- Maximum degraded-mode duration.
- Maximum recovery or synchronization time.

The guidelines also prevent implementation bias. Students should describe **required qualities**, not prematurely select products or frameworks.

### Definition

**Degraded mode:** A reduced operating state in which the system continues essential functions while some normal capabilities are unavailable.

**Simple meaning:** The system still works, but with limited functionality.

### Definition

**Repair time:** The time required to restore normal service or recover after a fault.

**Simple meaning:** How long recovery takes.

### Definition

**Omission fault:** A fault in which an expected response, message, or service is absent.

**Simple meaning:** Something expected does not arrive or happen.

### Exam Tip

A quality attribute scenario should be:

- Specific.
- Measurable.
- Testable.
- Technology-neutral.
- Connected to a genuine case-study need.

### Common Mistake

Do not write a response measure such as "quickly," "securely," "highly available," or "easy to use." These terms have no measurable threshold.

### Likely Exam Questions

**Question 1:** Why should quality attribute scenarios avoid naming technologies?

**Expected answer:** The scenario should state the required quality and measurable behaviour without prematurely constraining the architectural solution.

**Question 2:** Identify the measurable parts of the availability example.

**Expected answer:** Availability from 7:00 AM to 8:00 PM every day, up to four hours of offline operation, and synchronization within ten minutes of reconnection.

---

# Concept Explanations

## Functional Requirements vs Quality Attributes

| Aspect | Functional Requirement | Quality Attribute |
|---|---|---|
| Main question | What should the system do? | How well should it do it? |
| Example | Patients can book appointments | Booking responds within a defined time under peak load |
| Typical form | Service, action, or business behaviour | Measurable condition, constraint, or operational expectation |
| Architectural impact | May or may not be architecturally significant | Often strongly shapes architecture |
| Testability | Test whether a function exists and behaves correctly | Test measured performance, reliability, security, usability, or changeability |

## Architecturally Significant vs Incidental Detail

```text
Requirement Statement
        |
        v
Does it affect major structure, deployment, data handling,
integration, recovery, scaling, or future change?
        |
     +--+--+
     |     |
    Yes    No
     |     |
Architecturally   Functional or
Significant       Incidental Detail
```

## Common Quality Attribute Categories

The following are standard categories useful for interpreting the case study. The lab requires students to select only those supported by the SmartClinic description.

| Quality Attribute | Main Concern |
|---|---|
| Availability | Continued access to required services |
| Performance | Response time, throughput, and resource use |
| Scalability | Handling growth in users, workload, or locations |
| Security | Protection from unauthorized access or disclosure |
| Privacy | Proper handling of personal and sensitive information |
| Usability | Ease of learning, operation, and recovery from mistakes |
| Modifiability | Ease and cost of making changes |
| Reliability | Correct and consistent operation over time |
| Recoverability | Restoration after interruption or failure |
| Interoperability | Correct exchange of information with other systems |
| Auditability | Ability to trace actions and changes |
| Maintainability | Ease of correcting and improving the system |

> **Important:** This table is explanatory. The final lab response should be justified directly from the SmartClinic case study rather than copied as a generic list.

---

# Case Study Requirement Map

This map separates statements from the case study without completing the student's final task.

| Case-Study Statement | Requirement Type | Architectural Question Raised |
|---|---|---|
| Patients can book appointments | Functional | What booking service must exist? |
| Patients can view past visit history | Functional | What historical-data access must exist? |
| Patients receive reminders | Functional | What reminder service must exist? |
| Staff manage schedules | Functional | What scheduling functions are required? |
| Staff update records | Functional | How are medical records created and changed? |
| Staff generate visit summaries | Functional | What reporting or summary function is required? |
| Staff have different levels of digital experience | Quality-related condition | How easy must the system be to learn and operate? |
| Staff must correct accidental cancellations or incorrect entries | Quality-related expectation | How quickly and safely can users recover from mistakes? |
| Medical data is sensitive | Quality-related condition | How must data be protected? |
| Healthcare regulations must be followed | Constraint / quality driver | What compliance, privacy, and audit expectations shape the architecture? |
| Morning traffic spikes occur | Quality-related environment | What load must the system handle? |
| Seasonal illness creates surges | Quality-related environment | Can the system handle exceptional workload growth? |
| Branch connectivity can fail | Quality-related environment | What services must continue locally? |
| New clinics are added regularly | Quality-related growth condition | How easily can capacity and deployment expand? |
| Regulations and workflows will change | Quality-related evolution condition | How easily can the system be modified? |
| The system will operate for many years | Lifecycle condition | How maintainable and evolvable must it be? |

---

# Quality Attribute Scenario Template

Use one copy of this table for each selected attribute.

## Scenario Title: `[Quality Attribute Name]`

| Element | Student Response |
|---|---|
| Source |  |
| Stimulus |  |
| Environment |  |
| Artifact |  |
| Response |  |
| Response Measure |  |

## Scenario Quality Checklist

- Is the source clear?
- Is the stimulus an actual event, request, or fault?
- Is the environment specific?
- Is the affected artifact named?
- Does the response describe system behaviour?
- Is the response measure numerical or objectively testable?
- Is the scenario based on the SmartClinic case study?
- Is the wording technology-neutral?

---

# Reasoning About Architectural Significance

A requirement is more likely to be architecturally significant when it affects one or more of the following:

| Architectural Area | Example Question |
|---|---|
| Deployment | Must each clinic continue working when disconnected? |
| Data architecture | How is sensitive medical data protected and synchronized? |
| Scalability | How will the platform handle many clinics and traffic spikes? |
| Integration | Must information move between branch and central systems? |
| Recovery | What happens after network service returns? |
| User interaction | How quickly can inexperienced staff learn and recover from errors? |
| Change management | How easily can regulations and workflows be updated? |
| Operational monitoring | How will failures, delays, or unauthorized actions be detected? |

A concise reasoning pattern is:

```text
Case-Study Evidence
        |
        v
Quality Concern
        |
        v
Why It Shapes Architecture
        |
        v
Measurable Scenario
```

---

# Trade-Off Reasoning Guide

The lab objective includes reasoning about competing quality attributes.

A trade-off occurs when improving one quality can make another harder, slower, more expensive, or more complex.

## General Trade-Off Template

| Attribute A | Desired Improvement | Possible Effect on Attribute B |
|---|---|---|
| `[Attribute A]` | `[What should improve?]` | `[What may become harder or more costly?]` |

## Case-Study-Oriented Trade-Off Questions

These questions are provided as a thinking guide, not as completed lab answers.

- Could stronger access controls make emergency use slower or more difficult?
- Could offline branch operation make later synchronization more complex?
- Could extensive audit logging affect performance or storage use?
- Could faster expansion to new clinics increase operational complexity?
- Could highly configurable workflows make the system harder to learn?
- Could stronger consistency requirements reduce availability during network interruptions?

## Trade-Off Reasoning Flow

```text
Improve Attribute A
        |
        v
Identify Architectural Mechanism
        |
        v
Check Cost, Complexity, and Effect on Other Attributes
        |
        v
Choose an Acceptable Balance
```

### Exam Tip

A trade-off answer should name:

1. The two competing qualities.
2. Why they conflict.
3. The situation in which the conflict matters.
4. The balance or priority required by stakeholders.

### Common Mistake

Do not claim that every quality attribute can be maximized simultaneously without cost.

---

# Likely Viva and Exam Questions

## Question 1

What is a quality attribute?

**Expected answer:** A quality attribute is a measurable characteristic describing how well a system behaves, such as availability, performance, security, usability, or modifiability.

## Question 2

What makes a quality attribute architecturally significant?

**Expected answer:** It is architecturally significant when satisfying it requires major structural, deployment, data, integration, scaling, recovery, or change-related decisions.

## Question 3

Why is "the system should be fast" a weak requirement?

**Expected answer:** It is vague and not testable because it does not define the workload, environment, affected function, expected response, or measurable response time.

## Question 4

List the six parts of a quality attribute scenario.

**Expected answer:** Source, stimulus, environment, artifact, response, and response measure.

## Question 5

What is the difference between response and response measure?

**Expected answer:** The response describes what the system does, while the response measure defines the objective metric used to determine whether that behaviour is acceptable.

## Question 6

Why should technologies not be named in the quality scenario?

**Expected answer:** A quality scenario should describe required outcomes without prematurely restricting the architectural solution.

## Question 7

Why do quality attributes create trade-offs?

**Expected answer:** Architectural mechanisms that improve one quality can increase cost, complexity, resource use, or reduce another quality.

## Question 8

How can a functional requirement become architecturally significant?

**Expected answer:** It becomes architecturally significant when its scale, risk, distribution, data sensitivity, integration, or operational conditions require major architectural decisions.

## Question 9

What is degraded mode?

**Expected answer:** A reduced operating state in which essential functions continue while some normal services are unavailable.

## Question 10

What makes a response measure testable?

**Expected answer:** It uses objective thresholds such as time, capacity, percentage, maximum failures, recovery time, or error rate.

---

# Common Mistakes to Avoid

- Copying the availability attribute or scenario that the sheet explicitly says not to reuse.
- Listing only functional requirements.
- Naming quality attributes without case-study justification.
- Writing vague statements such as "fast," "secure," or "user-friendly."
- Omitting the operating environment.
- Confusing the source with the stimulus.
- Putting the system response in the stimulus row.
- Naming the entire platform as the artifact when a specific subsystem is more relevant.
- Giving a response without a measurable response measure.
- Naming frameworks, programming languages, databases, or cloud products.
- Selecting requirements that do not meaningfully shape architecture.
- Ignoring trade-offs between quality attributes.
- Inventing metrics without considering whether they fit the case study.
- Producing long generic answers instead of concise evidence-based reasoning.
- Blindly copying AI-generated answers without checking case-study alignment.

---

# Full Lab Summary

This lab introduces quality attributes as primary drivers of software architecture.

Functional requirements describe what a system must do. Quality attributes describe how well it must operate under real conditions. Because quality attributes affect major structures, deployment, data handling, scaling, failure recovery, and future change, they are often difficult to add after implementation.

The SmartClinic case study describes a multi-branch healthcare platform with:

- Appointment and medical-record functions.
- Users with different levels of digital experience.
- Sensitive medical data and regulatory obligations.
- Sharp peak workloads.
- Temporary branch network interruptions.
- Regular expansion to new clinics.
- Long-term regulatory and workflow changes.

Students must first identify at least four architecturally significant quality attributes and justify each using evidence from the case study.

They must then select two attributes and express each as a quality attribute scenario containing:

1. Source.
2. Stimulus.
3. Environment.
4. Artifact.
5. Response.
6. Response measure.

The lab's worked availability example demonstrates measurable operating hours, offline duration, and synchronization time.

Answers should remain technology-neutral, concise, measurable, testable, and clearly connected to architectural significance.

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Architecture characteristic | Another term for quality attribute | A property that affects how the architecture must behave |
| Quality attribute | Measurable characteristic describing how well a system behaves | Speed, security, availability, usability, and similar qualities |
| Functional requirement | Statement of a service or behaviour the system must provide | What the system does |
| Architecturally significant requirement | Requirement that strongly influences architecture | A requirement that changes major design decisions |
| Quality attribute scenario | Structured, measurable description of quality behaviour | A testable quality requirement |
| Source | Origin of the event or request | Who or what causes it |
| Stimulus | Event, request, action, or fault | What happens |
| Environment | Operating condition for the scenario | When or under what situation |
| Artifact | System part affected | Where the requirement applies |
| Response | System behaviour after the stimulus | What the system does |
| Response measure | Objective success criterion | How success is tested |
| Trade-off | Balance between competing quality goals | Improving one quality may affect another |
| Availability | Degree to which a system is operational when needed | Whether users can access the service |
| Degraded mode | Limited operating state that preserves essential functions | The system continues with reduced capability |
| Omission fault | Missing expected response or service | Something expected does not occur |
| Repair time | Time needed to restore normal operation | Recovery duration |
| Scalability | Ability to handle growth | Support more load, users, or locations |
| Modifiability | Ease of making changes | How easily the system can be updated |
| Usability | Ease of learning, operating, and recovering from mistakes | How easy the system is for users |
| Security | Protection against unauthorized access or change | Keep data and actions protected |

---

# Quick Revision Table

| Topic | Must Remember | PDF Page |
|---|---|---:|
| Lab objective | Identify, scenario-model, and reason about quality attributes | 1 |
| Functional requirement | What the system should do | 1 |
| Quality attribute | How well the system should do it | 1 |
| Architectural significance | Requirement genuinely shapes architecture | 1 |
| SmartClinic users | Patients and clinic staff | 1 |
| SmartClinic data | Sensitive medical information | 1 |
| Workload condition | Morning and seasonal traffic spikes | 1-2 |
| Connectivity condition | Branch network interruptions | 2 |
| Long-term growth | More clinics, patients, and staff | 2 |
| Future change | New regulations and workflows | 2 |
| Task 1 | Identify at least four attributes and justify each | 2 |
| Task 2 | Select two and write structured scenarios | 2 |
| Scenario elements | Source, stimulus, environment, artifact, response, measure | 2 |
| Example operating hours | 7:00 AM-8:00 PM, 7 days a week | 3 |
| Example offline duration | Up to 4 hours | 3 |
| Example sync time | Within 10 minutes of reconnection | 3 |
| Technology neutrality | Do not name technologies or frameworks | 3 |
| Testability | Avoid vague words; provide metrics | 3 |

---

# Key Terms

- Architecture Based Development
- Quality Attribute
- Architecture Characteristic
- Functional Requirement
- Architecturally Significant Requirement
- Quality Attribute Scenario
- Source
- Stimulus
- Environment
- Artifact
- Response
- Response Measure
- Availability
- Performance
- Security
- Privacy
- Usability
- Scalability
- Modifiability
- Reliability
- Recoverability
- Degraded Mode
- Offline Operation
- Omission Fault
- Repair Time
- Peak Load
- Concurrent Users
- Synchronization
- Trade-Off
- Healthcare Data Protection
- Multi-Branch System
- Technology-Neutral Requirement

---

# Final Self-Check Checklist

## Task 1

- [ ] At least four quality attributes are identified.
- [ ] Each attribute is supported by case-study evidence.
- [ ] Each justification is one or two concise sentences.
- [ ] The provided availability example has not been reused.
- [ ] Functional requirements are not incorrectly presented as quality attributes.
- [ ] Each chosen attribute genuinely shapes the architecture.

## Task 2

- [ ] Two attributes from Task 1 are selected.
- [ ] Each scenario includes a source.
- [ ] Each scenario includes a stimulus.
- [ ] Each scenario includes an environment.
- [ ] Each scenario includes an artifact.
- [ ] Each scenario includes a response.
- [ ] Each scenario includes a measurable response measure.
- [ ] Metrics are objective and testable.
- [ ] No technologies, frameworks, or programming languages are named.
- [ ] The scenario wording is clear and concise.
- [ ] Any trade-offs are reasoned about rather than ignored.

---

# Verification

PDF pages: 3 / MD page sections: 3 ✅
