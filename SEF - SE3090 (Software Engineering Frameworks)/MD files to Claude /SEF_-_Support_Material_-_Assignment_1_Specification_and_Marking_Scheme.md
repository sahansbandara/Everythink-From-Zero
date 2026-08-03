# SE3090 - Software Engineering Frameworks
## Assignment 1 - Integrated Full-Stack and Agentic AI Application Development

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Programmes | BSc (Hons) in Information Technology - Specializing in Software Engineering; BSc (Hons) in Information Technology - Specializing in Artificial Intelligence |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Academic level | Year 3, Semester 1 |
| Academic year | 2026 |
| Assessment | Assignment 1 |
| Assignment type | Group Full-Stack and Agentic AI Application Development Project |
| Assignment title | Integrated Full-Stack and Agentic AI Application Development |
| Weighting | 25% of the final module mark; with the Mini Hackathon (15%), this forms the 40% Assignments component |
| Standard group size | Normally 4 students; variations require written approval from the lecturer-in-charge |
| Duration | 9 weeks: 31 July-30 September 2026 |
| Mandatory technologies | ASP.NET Core Web API, PostgreSQL, React, Flutter, and Agentic AI |
| AI-use level | Level 4 - Full AI during permitted development tasks; Level 1 - No AI during the final demonstration and viva |
| Evaluation | One final evaluation: demonstration and viva; 100 marks total: 30 group + 70 individual |
| Release date | Friday, 31 July 2026 |
| Due date | Wednesday, 30 September 2026 at 11:50 PM |
| Total PDF pages | 17 |

> **Important:** Students must read the complete specification before selecting a domain or beginning implementation. Working software, traceable individual contribution, tests, documentation, deployment evidence, and viva understanding are all required.

> **Source note:** This Markdown file follows the uploaded PDF page by page. All assignment requirements, tables, rubric descriptors, dates, diagrams, AI-use rules, and checklists are preserved in the original order. Explanations and revision material are added only for clarity.

---

# Table of Contents

- [Page 01 - Assignment Cover and Key Information](#page-01---assignment-cover-and-key-information)
- [Page 02 - Assignment Overview, Objectives, Learning Outcomes, and Technology Stack](#page-02---assignment-overview-objectives-learning-outcomes-and-technology-stack)
- [Page 03 - Required Technology Stack and Group Structure](#page-03---required-technology-stack-and-group-structure)
- [Page 04 - Domain Scope and Secure ASP.NET Core Backend](#page-04---domain-scope-and-secure-aspnet-core-backend)
- [Page 05 - PostgreSQL, React, Flutter, and Agentic AI Parts](#page-05---postgresql-react-flutter-and-agentic-ai-parts)
- [Page 06 - Minimum Agentic AI Requirements](#page-06---minimum-agentic-ai-requirements)
- [Page 07 - Required Integrated Architecture](#page-07---required-integrated-architecture)
- [Page 08 - Third-Party Integration, Testing, Git, and CI/CD](#page-08---third-party-integration-testing-git-and-cicd)
- [Page 09 - Deployment, README, and Architecture Decision Records](#page-09---deployment-readme-and-architecture-decision-records)
- [Page 10 - Submission Guidelines](#page-10---submission-guidelines)
- [Page 11 - Final Evaluation Structure](#page-11---final-evaluation-structure)
- [Page 12 - Marking Rubric: Group Criteria and ASP.NET Core](#page-12---marking-rubric-group-criteria-and-aspnet-core)
- [Page 13 - Marking Rubric: Database, React, Flutter, and Agentic AI](#page-13---marking-rubric-database-react-flutter-and-agentic-ai)
- [Page 14 - Marking Rubric: Integration, Security, Testing, CI, and Git](#page-14---marking-rubric-integration-security-testing-ci-and-git)
- [Page 15 - Demonstration, Viva, and AI-Use Rules](#page-15---demonstration-viva-and-ai-use-rules)
- [Page 16 - Permitted and Prohibited AI Use, Disclosure, and Process Marks](#page-16---permitted-and-prohibited-ai-use-disclosure-and-process-marks)
- [Page 17 - Reflection, Academic Integrity, and Final Checklist](#page-17---reflection-academic-integrity-and-final-checklist)
- [Full Assignment Summary](#full-assignment-summary)
- [Architecture Summary](#architecture-summary)
- [Agentic AI Acceptance Workflow](#agentic-ai-acceptance-workflow)
- [Deliverables Checklist](#deliverables-checklist)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Viva and Written Questions](#likely-viva-and-written-questions)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Key Terms](#key-terms)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)
- [Verification](#verification)

---

# Page-by-Page Assignment Notes

## Page 01 - Assignment Cover and Key Information

### Original Page Content

**Integrated Full-Stack and Agentic AI Application Development**

**Assignment 1 - Group Assignment Specification**

| Item | Requirement |
|---|---|
| Programme | BSc (Hons) in Information Technology, specializing in SE/AI |
| Academic Level | Year 3, Semester 1 |
| Assignment Type | Group Full-Stack and Agentic AI Application Development Project |
| Weighting | 25% of the final module mark, marked out of 100 and scaled. Together with the Mini Hackathon (15%), this forms the 40% Assignments component of SE3090. |
| Group Size | Normally 4 students; variations require written approval from the lecturer-in-charge. |
| Duration | 9 weeks: 31 July-30 September 2026 |
| Mandatory Technologies | ASP.NET Core Web API, PostgreSQL, React, Flutter, and Agentic AI |
| AI Use Level | Level 4 - Full AI. Development AI use is allowed with disclosure. No external AI tools may be used during the final demonstration or viva; the submitted application's Agentic AI subsystem must be run. See Section 18. |
| Evaluation | One final evaluation: demonstration + viva; 100 marks: 30 group + 70 individual |
| Release Date | Friday, 31 July 2026 - published through the official Learning Management System, Course Web |
| Due Date | Wednesday, 30 September 2026 at 11:50 PM - one submission by the nominated group leader through Course Web |

### Visual Explanation

The cover page uses:

- SLIIT and Faculty of Computing branding.
- A large dark-blue title panel.
- A two-column information table.
- A highlighted warning box at the bottom.

The page communicates the assignment constraints before any technical details:

```text
Group Project
    |
    +--> 9-week duration
    +--> Mandatory full-stack technologies
    +--> Mandatory Agentic AI
    +--> 25% module weighting
    +--> Final demo and viva
    +--> Traceable individual contribution
```

### Explanation

This is not a set of disconnected prototypes. The assessment requires one coherent system and evaluates both:

- The completed group system.
- Each student's technical ownership and understanding.

### Exam / Viva Tip

Memorize the non-negotiable facts:

- Shared ASP.NET Core backend.
- Shared PostgreSQL database.
- React web app.
- Flutter mobile app.
- Meaningful Agentic AI workflow.
- One final demonstration and viva.
- No external AI assistance during evaluation.

### Common Mistake

Do not wait until the final week to merge independently built applications. Integration is a core assessment requirement, not a final cosmetic step.

---

## Page 02 - Assignment Overview, Objectives, Learning Outcomes, and Technology Stack

### Original Page Content

### 1. Assignment Overview

Each group must design, implement, integrate, test, and deploy one coherent software system combining:

- A web application.
- A mobile application.
- A RESTful backend.
- A relational database.
- A meaningful Agentic AI workflow.

The system must:

- Solve a credible real-world problem.
- Demonstrate how modern software engineering frameworks work together.

> **Integrated-system rule:** The React and Flutter applications must use the same ASP.NET Core Web API, PostgreSQL database, user identity, permissions, and business rules. Disconnected prototypes will not satisfy the assignment.

### 1.1 Assignment Objectives

- Apply ASP.NET Core, PostgreSQL, React, and Flutter to a realistic full-stack problem.
- Design secure REST APIs, relational data models, web interfaces, and mobile workflows.
- Implement a controlled Agentic AI workflow that plans, delegates, uses tools, validates results, and requests human approval when required.
- Use Git, GitHub, automated testing, code review, CI/CD, documentation, and deployment as part of professional software development.
- Justify framework and architecture decisions in writing through an Architecture Decision Record (ADR).
- Demonstrate individual technical ownership and the ability to explain, modify, and debug submitted work.

### 1.2 Learning Outcome Alignment

| Learning Outcome | Official Module Outline Wording |
|---|---|
| LO1 | Evaluate different types of software engineering frameworks used in web, mobile, cloud, and AI-assisted software development. |
| LO2 | Apply suitable frameworks and tools to build web, mobile, and full-stack software applications efficiently and effectively. |
| LO3 | Use best practices for integrating frameworks, managing collaborative development, applying CI/CD, ensuring code quality, and deploying software solutions. |
| LO4 | Select appropriate frameworks, tools, and agentic AI-assisted approaches to meet specific project and industry requirements. |

### 2. Required Technology Stack - First Row

| Area | Requirement |
|---|---|
| Backend | C# and ASP.NET Core Web API. This is the mandatory public backend. |

### Visual Explanation

The page contains:

- An integrated-system warning box.
- A numbered objectives list.
- A learning-outcome table.
- The first row of the technology-stack table.

```text
Real-World Problem
        |
        v
One Integrated System
├── React Web Application
├── Flutter Mobile Application
├── ASP.NET Core Web API
├── PostgreSQL
└── Controlled Agentic AI
        |
        v
Testing + Git + CI/CD + Deployment + Viva
```

### Definition

**Integrated system:** A system whose clients, backend, database, identity, permissions, business rules, and AI workflow operate as one coordinated application.

**Simple meaning:** Every part communicates and works together rather than acting as a separate demo.

### Exam / Viva Tip

LO4 is demonstrated through justified choices, especially the ADR. Do not merely name a framework; explain the context, alternatives, decision, and consequences.

### Common Mistake

Using separate authentication, data, or rules in React and Flutter violates the integrated-system rule.

---

## Page 03 - Required Technology Stack and Group Structure

### Original Page Content

### 2. Required Technology Stack - Continued

| Area | Requirement |
|---|---|
| Data Access | Entity Framework Core with the PostgreSQL provider |
| Database | PostgreSQL |
| Web Application | React using functional components, hooks, routing, and a justified state-management approach |
| Mobile Application | Flutter and Dart using a justified state-management approach |
| Agentic AI | Any suitable and justified framework, such as LangGraph, Microsoft Agent Framework, LlamaIndex agents, Google ADK, or a custom orchestration approach |
| Version Control | Git and GitHub from the beginning of the project, including a GitHub Actions CI workflow |
| Testing | Suitable tools for backend, React, Flutter, integration, performance, and Agentic AI evaluation |

> **Mandatory backend rule:** React and Flutter must communicate only with the ASP.NET Core Web API. If a Python Agentic AI service is used, it must operate as an internal service called by ASP.NET Core and must not be called directly by either client application.

### 3. Group Structure and Individual Contribution

The standard group size is four students.

Each student must:

- Take primary ownership of one business component.
- Contribute across backend, database, React, Flutter, testing, Git evidence, documentation, and Agentic AI.
- Have a distinct Agentic AI contribution.

If a different group size is approved:

- The number of primary components must equal the number of students.
- Example: five students = five components.
- Any proportional change to Agentic AI contributions and overall scope must be confirmed in writing by the lecturer-in-charge.

| Student | Primary Component | Required Individual Evidence |
|---|---|---|
| Student 1 | Component A | Backend, database, React, Flutter, tests, Git evidence, documentation, and a distinct Agentic AI contribution |
| Student 2 | Component B | Backend, database, React, Flutter, tests, Git evidence, documentation, and a distinct Agentic AI contribution |
| Student 3 | Component C | Backend, database, React, Flutter, tests, Git evidence, documentation, and a distinct Agentic AI contribution |
| Student 4 | Component D | Backend, database, React, Flutter, tests, Git evidence, documentation, and a distinct Agentic AI contribution |

- There must be no project-manager-only, testing-only, or documentation-only roles.

### Visual Explanation

The required communication boundary is:

```text
React --------\
               \
                v
          ASP.NET Core Web API
                |
                +--> PostgreSQL
                |
                +--> Internal Agentic AI Service
               /
Flutter ------/
```

The clients must not call PostgreSQL or a Python AI service directly.

The contribution rule is:

```text
One Student
    |
    +--> One Primary Business Component
    +--> Backend contribution
    +--> Database contribution
    +--> React contribution
    +--> Flutter contribution
    +--> Tests and Git evidence
    +--> Documentation
    +--> Distinct Agentic AI contribution
```

### Definition

**Primary component:** The major business area for which one student has identifiable technical ownership.

**Simple meaning:** The student's main end-to-end part of the project.

### Exam / Viva Tip

Each student should be ready to trace one workflow from UI to API, database, AI, testing, and Git history.

### Common Mistake

A student cannot earn full individual marks by contributing only documentation, project management, or testing.

---

## Page 04 - Domain Scope and Secure ASP.NET Core Backend

### Original Page Content

### Group Contribution Rules - Continued

- Every student must contribute technically across the required stack and must have an identifiable Agentic AI contribution.
- Individual marks may be adjusted using:
  - Git history.
  - Pull requests.
  - Issue ownership.
  - Test evidence.
  - Code ownership.
  - Viva and technical-question responses.
- Code or features that a student cannot explain, modify, or debug may receive reduced or zero individual marks.

### 4. Domain and Functional Scope

Each group must select a unique real-world domain.

Suggested domains include:

- Healthcare appointments.
- Event management.
- Travel planning.
- Inventory.
- Vehicle services.
- Education.
- Property rental.
- Food delivery.
- Recruitment.
- Agriculture.
- Tourism.
- Help-desk systems.
- Community services.

### 4.1 Minimum Domain Complexity

- At least three user roles with different responsibilities and permissions.
- For a standard four-student group, at least four major business components with relational data and business-specific operations.
- Approved group-size variations must follow one component per student.
- CRUD operations plus:
  - Status workflows.
  - Search.
  - Filtering.
  - Sorting.
  - Pagination.
  - Reporting or analytics.
- Meaningful and different purposes for React and Flutter.
- At least one third-party service integration.
- At least one complete cross-platform workflow involving React, Flutter, ASP.NET Core, PostgreSQL, and Agentic AI.

### 5. Part 1 - Secure ASP.NET Core RESTful API Backend

The ASP.NET Core backend is the authoritative application layer for:

- Public REST APIs.
- Authentication.
- Authorization.
- Validation.
- Business rules.
- Persistence.
- Agentic AI workflow initiation.
- Approval.
- Audit logging.

| Area | Minimum Requirement |
|---|---|
| Architecture | Controllers, DTOs, service/application layer, suitable data-access abstraction, and dependency injection |
| REST API | Correct routes, HTTP methods, status codes, request/response models, and asynchronous operations |
| Security | JWT authentication, role-based authorization, protected endpoints, password hashing, and secure configuration |
| Data Operations | CRUD, search, filtering, sorting, pagination, history, and business-specific operations |
| Quality | Server-side validation, global error handling, structured logging, CORS, and Swagger/OpenAPI |
| Agent Integration | Endpoints for starting workflows, reviewing status, human approval, and viewing execution summaries |

### Visual Explanation

The domain must be complex enough to justify architecture:

```text
3+ Roles
   +
1 Component per Student
   +
Relational Data
   +
CRUD + Business Workflows
   +
Search / Filter / Sort / Pagination
   +
Reporting or Analytics
   +
Third-Party Integration
   +
Cross-Platform Agentic Workflow
```

### Definition

**Authoritative application layer:** The backend layer that enforces the official business rules, identity, permissions, validation, and data changes.

**Simple meaning:** The backend is the source of truth.

### Exam / Viva Tip

Do not describe the API only as CRUD. Each student component needs a business-specific operation beyond basic CRUD.

### Common Mistake

Duplicating business rules in React and Flutter can create inconsistent behaviour. The authoritative rules belong in ASP.NET Core.

---

## Page 05 - PostgreSQL, React, Flutter, and Agentic AI Parts

### Original Page Content

> **Individual component minimum:** Each student-owned component must include at least four meaningful API endpoints and at least one business-specific operation beyond basic CRUD.

### 6. Part 2 - PostgreSQL Database

- Design a normalized relational database with:
  - An ER diagram.
  - A clear relational schema.
- Use:
  - Primary keys.
  - Foreign keys.
  - Appropriate relationships.
  - Constraints.
  - Indexes.
  - Suitable PostgreSQL data types.
- Use Entity Framework Core migrations and suitable seed data.
- Apply transactions where required.
- Maintain audit fields such as:
  - `CreatedAt`
  - `UpdatedAt`
- Persist only the Agentic AI workflow state and execution summaries required by the design.
- Do not store:
  - Hidden reasoning.
  - Passwords.
  - Tokens.
  - Unnecessary sensitive data.

### 7. Part 3 - React Web Application

The React application should primarily support:

- Administrative functions.
- Staff functions.
- Dashboards.
- Reporting.
- Business-data management.
- Agentic AI monitoring and approval.

Required features:

- Functional components.
- React Hooks.
- React Router.
- Reusable component design.
- A justified state-management approach, such as:
  - Context API.
  - Redux Toolkit.
  - Zustand.
  - Another justified option.
- Complete ASP.NET Core API integration.
- Protected routes.
- Role-based navigation.
- CRUD interfaces.
- Validation.
- Search.
- Filters.
- Sorting.
- Pagination.
- Dashboard views.
- Responsive and accessible UI.
- Loading, empty, success, and error states.
- Agent workflow monitoring.
- Execution summaries.
- Approve, reject, and revise controls where relevant.

### 8. Part 4 - Flutter Mobile Application

The Flutter application should primarily support:

- User-facing workflows.
- Operational workflows.

It must:

- Be a genuine mobile application.
- Consume the shared ASP.NET Core API.
- Use reusable widgets.
- Use navigation/routing.
- Use a justified state-management approach.
- Support registration, login, logout, secure token storage, and protected screens.
- Support forms, validation, search, filtering, main transactions, status tracking, and history.
- Provide responsive layouts with loading, empty, and error states.
- Support Agentic AI task submission, recommendation display, and workflow status where suitable.
- Include at least one meaningful device feature, such as:
  - Camera or image picker.
  - GPS or map.
  - QR scanning.
  - File upload.
  - Notifications.
  - Date/time selection.

### 9. Part 5 - Agentic AI Subsystem

The Agentic AI feature must:

- Solve a meaningful, domain-relevant, multi-step problem.
- Not be limited to:
  - A generic chatbot.
  - An FAQ interface.
  - A single-prompt workflow.
  - A simple text generator.

> **Minimum acceptance rule:** The group must demonstrate at least one complete assessed workflow satisfying every step in the "Minimum assessed workflow" requirement on Page 06.

### Visual Explanation

The five assignment parts are connected:

```text
Part 1: ASP.NET Core Backend
           |
           +--> Part 2: PostgreSQL
           +--> Part 3: React
           +--> Part 4: Flutter
           +--> Part 5: Agentic AI
```

Data-protection rule:

```text
Persist:
- Workflow ID
- Plan and state
- Tool results
- Validation results
- Approval status
- Final outcome

Never persist:
- Hidden chain-of-thought or reasoning
- Passwords
- Tokens
- Unnecessary sensitive data
```

### Definition

**Normalized database:** A relational database organized to reduce duplication and improve data integrity.

**Simple meaning:** Related information is separated into well-structured tables.

### Exam / Viva Tip

Be prepared to justify why React and Flutter have different primary purposes while still using the same API and rules.

### Common Mistake

A generic chatbot does not satisfy the Agentic AI requirement.

---

## Page 06 - Minimum Agentic AI Requirements

### Original Page Content

### 9.1 Minimum Agentic AI Requirements

| Requirement | Expected Behaviour |
|---|---|
| Minimum assessed workflow | At least one assessed workflow must receive a domain objective; create a structured multi-step plan; delegate steps to distinct agent roles; call allow-listed tools using validated inputs and structured outputs; persist workflow state; apply deterministic checks such as schema or business-rule validation; pause a defined high-impact action for approval by an authorized user; and produce either an auditable result or a safe, clearly recorded failure. |
| What counts as a distinct agent? | An agent counts as distinct only when it has an identifiable responsibility, a defined input and output contract, controlled tool permissions, and visible participation in the workflow. Renaming the same prompt or copying identical behaviour does not count as a separate agent. |
| Specialized agents | For the standard group, implement at least four distinct agents with clearly different responsibilities, such as planning or coordination, domain analysis, action or tool use, and validation or safety. Any approved adjustment must be confirmed in writing by the lecturer-in-charge. |
| Planning and delegation | The system analyses a user objective, creates a structured multi-step plan, and delegates each step to an appropriate agent. |
| Controlled tools | Agents may use only allow-listed tools. Validate every tool input, return structured outputs, handle errors, and apply least-privilege access. |
| Shared state | Persist the workflow ID, objective, plan, completed steps, tool results, validation results, errors, approval status, and final outcome in structured, durable storage. |
| Validation | Apply deterministic validation, such as schema checks and business rules, before accepting outputs or allowing high-impact actions. Unsupported or unsafe actions must be rejected or returned for revision. |
| Human approval | At least one clearly defined high-impact action must pause until an authorized user approves, rejects, or requests revision. |
| Observability | Store or display auditable execution summaries, tool calls, timings, validation results, errors, retries, approval decisions, and the final result or safe-failure outcome. |
| Security | Apply role-based access, prompt and tool-input validation, output validation, secret protection, timeouts, retry limits, and safe-failure behaviour. |

> **Implementation flexibility:** Students may use any suitable Agentic AI framework, model, and orchestration method. The selected approach must meet the minimum acceptance scenario, be justified in the ADR, run reliably during evaluation, be secured, and be integrated through ASP.NET Core.

### Visual Explanation

The assessed workflow is a controlled state machine, not an unrestricted chatbot:

```text
Domain Objective
      |
      v
Structured Multi-Step Plan
      |
      v
Delegation to Distinct Agents
      |
      v
Allow-Listed Tool Calls
      |
      v
Structured Shared State
      |
      v
Deterministic Validation
      |
      v
High-Impact Action?
   +--+--+
   |     |
  No    Yes
   |     |
   |   Pause for Authorized Approval
   |     |
   +-----+
      |
      v
Auditable Result
or Safe, Recorded Failure
```

### Definition

**Distinct agent:** An agent with a unique responsibility, defined input/output contract, controlled permissions, and visible participation.

**Simple meaning:** A genuinely different worker in the workflow, not the same prompt with another name.

### Definition

**Deterministic validation:** Validation based on fixed rules, schemas, or business logic rather than only an LLM's judgment.

**Simple meaning:** A repeatable check that should produce the same result for the same input.

### Exam / Viva Tip

You must be able to explain:

- Each agent's role.
- Inputs and outputs.
- Tool permissions.
- State transitions.
- Validation.
- Approval.
- Failure handling.

### Common Mistake

Using LLM output directly for a high-impact action without deterministic checks and authorized approval violates the specification.

---

## Page 07 - Required Integrated Architecture

### Original Page Content

### 10. Required Integrated Architecture

#### Figure 1 - SE3090 Reference Integration Architecture

The visual contains five main system areas.

##### React Web Application

Primary purposes:

- Administration.
- Staff workflows.
- Dashboards.
- Reports.
- Agent monitoring.
- Approval.

Communication:

- HTTPS / REST / JSON to ASP.NET Core.

##### Flutter Mobile Application

Primary purposes:

- User-facing workflows.
- Operational workflows.
- Device features.
- Status.

Communication:

- HTTPS / REST / JSON to ASP.NET Core.

##### ASP.NET Core Web API

The mandatory public backend contains:

- Controllers and DTOs.
- Application/service layer.
- Authentication and authorization.
- Business rules and validation.
- Audit logging and approval.
- Agent workflow endpoints.

##### PostgreSQL

Uses:

- Entity Framework Core.
- Migrations and constraints.
- Transactional business data.
- Agent execution summaries.

Connection:

- ASP.NET Core communicates through EF Core.

##### Controlled Agentic AI

Contains or supports:

- Coordinator/planner.
- Domain-analysis agent.
- Action/tool agent.
- Validation/safety agent.
- Structured shared state.
- Ollama local model.
- Allow-listed tools and traces.

Connection:

- Called internally by ASP.NET Core.

##### Third-Party Service

- A meaningful API or service.
- Integrated through controlled ASP.NET Core calls.

### Figure 1 as an ASCII Architecture Diagram

```text
+-------------------------+       HTTPS / REST / JSON
| React Web Application   | ------------------------------+
| - Admin and staff       |                               |
| - Dashboards and reports|                               v
| - Agent monitoring      |                    +---------------------------+
| - Approval              |                    | ASP.NET Core Web API      |
+-------------------------+                    | - Controllers and DTOs    |
                                               | - Service layer           |
+-------------------------+       HTTPS / REST | - Authentication / authz |
| Flutter Mobile App      | -----------------> | - Business rules          |
| - User workflows        |                    | - Validation              |
| - Operational tasks     |                    | - Audit and approval      |
| - Device features       |                    | - Agent endpoints         |
| - Status tracking       |                    +-----+-----------+---------+
+-------------------------+                          |           |
                                                    | EF Core   | Internal call
                                                    v           v
                                      +---------------------+  +----------------------+
                                      | PostgreSQL          |  | Controlled Agentic AI|
                                      | - Business data     |  | - Planner            |
                                      | - Constraints       |  | - Domain agent       |
                                      | - Transactions      |  | - Tool/action agent  |
                                      | - Agent summaries   |  | - Validator/safety   |
                                      +---------------------+  | - Shared state       |
                                                               | - Allowed tools      |
                                                               +----------------------+
                                                    |
                                                    | Controlled API
                                                    v
                                          +----------------------+
                                          | Third-Party Service  |
                                          +----------------------+
```

> **Figure 1 requirement:** Groups must adapt and justify this architecture for the selected domain.

#### Figure 2 - Required Cross-Platform Workflow Pattern

The visual contains six ordered stages:

1. **Flutter**
   - User submits a domain transaction.
2. **ASP.NET Core**
   - Authenticates, validates, and applies rules.
3. **PostgreSQL**
   - Stores business data and audit fields.
4. **Agentic AI**
   - Plans, uses tools, and creates a validated proposal.
5. **React**
   - Staff review evidence and approve, reject, or revise.
6. **Shared Status**
   - Backend updates the record; the mobile user receives status.

### Figure 2 as a Flow Diagram

```text
1. Flutter
User submits domain transaction
        |
        v
2. ASP.NET Core
Authenticates, validates, applies rules
        |
        v
3. PostgreSQL
Stores business data and audit fields
        |
        v
4. Agentic AI
Plans, uses tools, creates validated proposal
        |
        v
5. React
Staff reviews evidence and approves / rejects / revises
        |
        v
6. Shared Status
Backend updates record; initiating mobile user receives status
```

> Evidence must show consistent identities, permissions, business rules, data, and status across both applications.

> **End-to-end evidence:** At least one demonstrated workflow must begin in one client, pass through ASP.NET Core, PostgreSQL, and Agentic AI, require review or approval in the other client, and return an updated status to the initiating user.

### Exam / Viva Tip

Use one complete workflow to explain integration. Trace:

- Identity.
- Request.
- Validation.
- Database change.
- AI planning.
- Tool calls.
- Approval.
- Final status.

### Common Mistake

A workflow that starts and ends in one isolated client does not satisfy the required cross-platform pattern.

---

## Page 08 - Third-Party Integration, Testing, Git, and CI/CD

### Original Page Content

### 11. Third-Party Integration

Each system must integrate at least one meaningful third-party API or service, such as:

- Maps.
- Weather.
- Currency.
- Email/SMS.
- Payment sandbox.
- Calendar.
- Cloud storage.
- QR service.
- Notifications.

Requirements:

- Explain the business purpose and user benefit.
- Route external-service access through ASP.NET Core where appropriate.
- Protect credentials and environment variables.
- Handle:
  - Timeouts.
  - Invalid responses.
  - Service failures.
  - Rate limits.
- Validate and minimize personal or sensitive data shared with the service.

### 12. Testing Requirements

| Area | Required Evidence |
|---|---|
| Backend | Unit, service-layer, validation, authentication/authorization, controller, and API integration tests |
| Database | PostgreSQL integration tests, constraints, migrations, and transaction behaviour |
| React | Component, form-validation, protected-route, API-integration, and error-state tests |
| Flutter | Unit, widget, form-validation, navigation, and API-integration tests |
| End to End | At least one complete Flutter/React-ASP.NET Core-PostgreSQL-Agentic AI workflow |
| Performance | Concurrent requests, response time, success/failure rate, database response, and Agentic AI latency |
| Agent Evaluation | Evidence that at least one complete minimum-acceptance workflow passes a suitable golden case, including correct planning and delegation, agent and tool selection, structured outputs, deterministic validation, business-rule compliance, approval enforcement, prompt-injection resistance, failure recovery, and safe failure |

> **Agent evaluation rule:** LLM-as-a-judge may be used as supporting evidence, but it must not be the only evaluation method. Use rule-based assertions, schema validation, golden cases, deterministic validators, and human review where appropriate.

### 13. Git, CI/CD and Collaborative Development

- Create the GitHub repository at the beginning of the project.
- Use:
  - Meaningful commits.
  - Feature branches.
  - Issues.
  - Pull requests.
  - Reviews.
  - A project board.
- Configure at least one GitHub Actions CI workflow that:
  - Restores the backend.
  - Builds the backend.
  - Runs automated backend tests.
  - Runs on every push and pull request to the main branch.
- Additional pipelines are encouraged:
  - Frontend build.
  - Lint.
  - Flutter analyze.
  - Deployment.
- Maintain clear evidence of:
  - Task allocation.
  - Merge management.
  - Conflict resolution.
- Each student must show regular technical contribution across the project lifecycle.
- Artificial commit activity, final-day bulk uploads, or unexplained copied code will not be accepted as contribution evidence.

### Visual Explanation

Testing coverage should form a layered evidence model:

```text
Unit Tests
    |
Service / Validation Tests
    |
Controller and API Integration Tests
    |
Database Integration Tests
    |
React and Flutter Integration Tests
    |
Full Cross-Platform End-to-End Test
    |
Performance and Agent Evaluation
```

CI flow:

```text
Push or Pull Request to Main
        |
        v
GitHub Actions
├── Restore
├── Build
└── Run Automated Backend Tests
        |
        v
Passing or Failing CI Evidence
```

### Definition

**Golden case:** A carefully prepared test scenario with known expected behaviour used to evaluate the complete Agentic AI workflow.

**Simple meaning:** A trusted example used to verify the workflow.

### Definition

**LLM-as-a-judge:** Using a language model to assess another AI output.

**Simple meaning:** AI evaluates AI; it may support evaluation but cannot be the only method here.

### Exam / Viva Tip

Be ready to open a test and explain:

- What risk it covers.
- Why the assertion is correct.
- How failure is diagnosed.
- How it runs in CI.

### Common Mistake

Screenshots of tests are not enough if the student cannot explain the test logic or show that CI executed them.

---

## Page 09 - Deployment, README, and Architecture Decision Records

### Original Page Content

### 14. Deployment and Documentation

| Component | Deployment Requirement |
|---|---|
| ASP.NET Core API | Deploy to a suitable cloud platform and provide a working health URL and Swagger URL |
| PostgreSQL | Deploy securely with migrations, restricted credentials, and initialization instructions |
| React | Deploy and provide a working live URL configured to use the deployed API |
| Flutter | Submit complete source code and a runnable Android APK or approved equivalent |
| Agentic AI | Deploy or run locally as appropriate; provide complete setup, model/framework requirements, and startup order |

### Service Cost and Availability

- The assignment must be completable using institution-provided or no-cost services.
- Paid subscriptions are not required.
- Keep clear local setup instructions.
- If a required external service has a confirmed outage near submission or evaluation:
  - Inform the evaluator.
  - Provide evidence of the outage.
- The source text ends this note with the wording: **"When you doing the evolution."**

### 14.1 README and Technical Documentation

Include:

- Project overview.
- Business problem.
- User roles.
- Features.
- Technology justification.
- System architecture.
- Agentic AI architecture.
- Database design.
- Repository structure.
- Installation instructions.
- Environment variables.
- Database setup.
- Startup instructions for all components.
- API documentation.
- Test instructions.
- Deployment instructions.
- Live URLs.
- Test accounts.
- Individual contributions.
- Challenges.
- Security considerations.
- AI usage declaration.

### 14.2 Architecture Decision Record - ADR

Each group must submit ADRs.

An ADR is:

- A short document.
- Normally one page per decision.
- A record of:
  - Context.
  - Options considered.
  - Decision.
  - Consequences.

The ADR is:

- The primary written evidence for LO4.
- Referenced during the viva.

At minimum, record decisions for:

- React state-management approach.
- Flutter state-management approach.
- Agentic AI framework and orchestration method.
- Database-schema strategy for agent workflow state.
- Cloud deployment platform.

A typical healthy range is:

- Three to six decisions.

### Visual Explanation

Deployment evidence:

```text
ASP.NET Core -> Health URL + Swagger URL
PostgreSQL   -> Secure deployment + migrations
React        -> Live URL using deployed API
Flutter      -> Source + runnable APK
Agentic AI   -> Reliable hosted or local startup procedure
```

ADR structure:

```text
Context
   |
Options Considered
   |
Decision
   |
Consequences
```

### Definition

**Architecture Decision Record - ADR:** A concise document recording an important architectural decision, its context, alternatives, and consequences.

**Simple meaning:** Written proof of why the group chose a technical approach.

### Exam / Viva Tip

A strong ADR includes trade-offs. Do not write only the selected tool and its advantages.

### Common Mistake

A deployed React URL that still points to `localhost` does not provide a working integrated deployment.

---

## Page 10 - Submission Guidelines

### Original Page Content

### 15. Submission Guidelines

| Submission Item | What You Must Submit |
|---|---|
| Group leader and deadline | The group leader makes the only group submission through Course Web by 11:50 PM on Wednesday, 30 September 2026 |
| One consolidated report - PDF | Combine all written work into one clearly organized PDF. Do not upload group and individual reports as separate files |
| Group Report section | Project overview and scope; requirements and user roles; full-stack and Agentic AI architecture; database and ER diagram; API, React, and Flutter design; technical report; software testing report; Agentic AI evaluation report; performance report; deployment report; ADRs; security considerations; diagrams; references; consolidated group AI usage declaration |
| Individual Report sections | One clearly labelled section per student containing contribution statement; owned component and technical work; key commit, pull-request, and test evidence; challenges and learning; individual AI usage log; approximately one-page AI reflection; signed declaration |
| Repository and deployed system | Repository URL; React URL; ASP.NET Core API or health URL; Swagger URL; PostgreSQL deployment evidence; Agentic AI setup or access information; required environment-variable names; startup instructions |
| Flutter APK | Runnable Android APK or another format approved in writing, with installation instructions |
| Demonstration video | A working 10-minute demonstration-video link; anyone with the link must be able to view it without requesting access |
| Required access period | Repository, video, and deployed services must remain accessible until at least Wednesday, 21 October 2026 |

### Before Submitting

The group leader must:

- Open every submitted link in a private or incognito browser.
- Confirm evaluators can access it.
- Make only one group submission.

### Suggested Section Lengths

These are guidance only, not graded limits.

| Report Section | Suggested Length |
|---|---:|
| Technical report | 10-15 pages |
| Testing report | 6-10 pages |
| Agentic AI evaluation report | 5-8 pages |
| Performance report | 3-5 pages |
| Deployment report | 3-5 pages |
| ADRs | 3-6 pages |

Quality and relevance matter more than page count.

### Naming Convention

Use:

```text
SE3090_GroupNumber
```

Example:

```text
SE3090_G07
```

### Visual Explanation

Submission package:

```text
One Course Web Submission
├── One Consolidated PDF Report
│   ├── Group Report
│   ├── Individual Report - Student 1
│   ├── Individual Report - Student 2
│   ├── Individual Report - Student 3
│   └── Individual Report - Student 4
├── Repository and Deployment Links
├── Flutter APK
└── 10-Minute Demonstration Video
```

### Exam / Viva Tip

The report should make every claim traceable to:

- Code.
- Commit.
- Test.
- Screenshot.
- Deployment.
- AI-use log.

### Common Mistake

Do not submit separate group and individual PDFs. The specification requires one consolidated report.

---

## Page 11 - Final Evaluation Structure

### Original Page Content

### 16. Final Evaluation - Complete Integrated System

- Total: 100 marks.
- Group contribution: 30 marks.
- Individual contribution: 70 marks.
- The mark out of 100 is scaled to 25% of the final module mark.
- One final evaluation only.
- The group must deliver:
  - 10-minute demonstration.
  - 20-minute viva and technical-question session.
- Every student must be present.
- Any student may be asked to:
  - Explain.
  - Modify.
  - Test.
  - Debug.
  - Demonstrate individual contribution.

### Mark Distribution

| Contribution | Criterion | Marks |
|---|---|---:|
| Group | Component Design and Business Logic | 10 |
| Group | Integrated Architecture, Agent Orchestration and State Management | 10 |
| Group | Documentation and Deployment | 10 |
| Individual | ASP.NET Core RESTful API Development | 10 |
| Individual | PostgreSQL Integration and Data Modelling | 10 |
| Individual | React Web Application | 10 |
| Individual | Flutter Mobile Application | 10 |
| Individual | Individual Agentic AI Contribution | 12 |
| Individual | API Integration, Security and Cross-Platform Functionality | 10 |
| Individual | Testing, CI and Git Workflow | 8 |
|  | **Total** | **100** |

### AI Use During Evaluation

During the final demonstration and viva, students may not use:

- External AI assistants.
- Chatbots.
- IDE copilots.
- Agentic coding tools.

They may not use these tools to:

- Answer questions.
- Generate explanations.
- Modify the submitted work.

The submitted application's own Agentic AI subsystem must be executed during the demonstration.

### Visual Explanation

```text
Final Evaluation - 100 Marks
├── Group Marks - 30
│   ├── Component Design and Business Logic - 10
│   ├── Integrated Architecture and Agent Orchestration - 10
│   └── Documentation and Deployment - 10
└── Individual Marks - 70
    ├── ASP.NET Core - 10
    ├── PostgreSQL - 10
    ├── React - 10
    ├── Flutter - 10
    ├── Agentic AI Contribution - 12
    ├── Integration and Security - 10
    └── Testing, CI, and Git - 8
```

### Exam / Viva Tip

The largest single individual criterion is Agentic AI contribution at 12 marks, but the full individual score depends on all layers.

### Common Mistake

A strong group demo does not automatically protect a student who cannot explain or modify their own contribution.

---

## Page 12 - Marking Rubric: Group Criteria and ASP.NET Core

### Original Page Content

### 16.1 Marking Rubric - Final Evaluation

**Complete Integrated Full-Stack and Agentic AI System - Total: 100 Marks**

The original rubric is a wide table with performance bands:

- Excellent.
- Good.
- Satisfactory.
- Poor.
- Very Poor.

The same rubric content is recreated below as separate Markdown tables for readability.

### Group Contribution - 30 Marks

#### Component Design and Business Logic - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | All major components are clearly defined and fully functional. Business rules are correctly implemented through suitable services and support a complete end-to-end workflow. |
| Good | 8 | Main components and business rules work with only minor functional or architectural issues. |
| Satisfactory | 6 | Core components and main business rules function, and a basic end-to-end workflow is demonstrated; some secondary rules, edge cases, or integration remain incomplete. |
| Poor | 4 | Some components or business rules are implemented, but workflows are fragmented, unreliable, or substantially incomplete. |
| Very Poor | 2 | Components are poorly structured, mostly incomplete, or fail to implement the stated business requirements. |

#### Integrated Architecture, Agent Orchestration and State Management - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | Complete full-stack integration and one complete minimum Agentic AI acceptance workflow are demonstrated. Distinct agents, persisted state, allow-listed tools, deterministic validation, auditable logs, safe failure, and authorized human approval all work correctly. |
| Good | 8 | The integrated workflow meets the minimum acceptance scenario, with only minor issues in orchestration, state, logging, tool controls, validation, approval, or recovery. |
| Satisfactory | 6 | The core integrated workflow works and most acceptance elements are present, but one or more elements are only partly effective or supported by limited evidence. |
| Poor | 4 | Only a partial integrated workflow works; several mandatory acceptance elements are missing, unreliable, or weakly integrated. |
| Very Poor | 2 | No complete assessed workflow is demonstrated; agents are not distinct, state, tools, validation, or approval are absent, or the feature is only a chatbot or disconnected prototype. |

#### Documentation and Deployment - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | The consolidated report is complete, well organized, and contains all Group Report and Individual Report sections, ADRs, AI usage documents, evidence, and working links. Required systems are deployed, the APK works, evaluator access is clear, and setup is fully reproducible. |
| Good | 8 | The consolidated report, access information, and deployment are mostly complete, with only minor missing evidence, link, or setup issues. |
| Satisfactory | 6 | The main Group Report and Individual Report sections and core deployment instructions are provided, but several evidence items, links, AI documents, or setup details are incomplete. |
| Poor | 4 | The consolidated report is limited or poorly organized, and deployment or evaluator access is only partly working or difficult to reproduce. |
| Very Poor | 2 | The consolidated report, required group or individual sections, or access details are missing, and major components cannot be deployed or executed. |

### Individual Contribution - 70 Marks

#### ASP.NET Core RESTful API Development - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | The API component is complete and follows REST conventions with DTOs, validation, security, asynchronous operations, suitable architecture, exception handling, and correct status codes. The student accurately answers related viva questions and can explain, test, modify, or debug the contribution. |
| Good | 8 | Main API functionality works with minor REST, validation, security, or architecture issues. The student answers most related questions and can explain a suitable change. |
| Satisfactory | 6 | Core CRUD and API operations work, but notable gaps remain. The student answers routine questions or makes a simple change but has technical gaps. |
| Poor | 4 | Only limited API functionality works; major areas are incomplete or unreliable. The student struggles to answer questions or modify and debug the work. |
| Very Poor | 2 | The API contribution is missing or non-functional, or the student cannot explain or modify it. |

### Visual Explanation

The rubric increases expectations across three dimensions:

```text
Working Features
      +
Evidence and Integration
      +
Student Understanding and Ownership
      =
Criterion Mark
```

### Exam / Viva Tip

Full marks require both a working contribution and successful viva performance.

### Common Mistake

Do not assume a completed feature receives full marks if the owner cannot explain, test, modify, or debug it.

---

## Page 13 - Marking Rubric: Database, React, Flutter, and Agentic AI

### Original Page Content

### PostgreSQL Integration and Data Modelling - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | The contribution demonstrates suitable entities, relationships, constraints, normalization, migrations, indexing, and data integrity. The student accurately answers related viva questions and can explain, trace, modify, or debug the database contribution. |
| Good | 8 | The database is functional and suitably modelled, with minor design or integration issues. The student answers most questions and can explain or make a suitable database change. |
| Satisfactory | 6 | Basic database integration works, but notable gaps remain. The student answers routine questions but has difficulty explaining some relationships, constraints, or migrations. |
| Poor | 4 | Database integration is limited, incomplete, or inconsistent. The student provides weak answers and struggles to modify or debug it. |
| Very Poor | 2 | The database contribution is missing or non-functional, or the student cannot explain the schema and integration. |

### React Web Application - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | Uses reusable components, routing, suitable state management, protected routes, validation, responsive UI, loading and error states, and complete API integration. The student accurately answers related viva questions and can explain, modify, or debug the React contribution. |
| Good | 8 | Main React functionality works with minor issues in structure, state, UI, validation, or error handling. The student answers most questions and can complete and explain a suitable change. |
| Satisfactory | 6 | Core React screens and API operations work, but notable gaps remain. The student answers routine questions or completes a simple change with some difficulty. |
| Poor | 4 | Limited React functionality is demonstrated. The student struggles to answer questions or modify and debug the application. |
| Very Poor | 2 | The React contribution is missing or non-functional, or the student cannot explain or modify it. |

### Flutter Mobile Application - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | Contains reusable widgets, routing, state management, secure API integration, validation, responsive screens, loading and error states, and a meaningful device feature. The student accurately answers related viva questions and can explain, modify, or debug the Flutter contribution. |
| Good | 8 | Main Flutter functionality works with minor issues in architecture, state, UI, or API handling. The student answers most questions and can complete and explain a suitable change. |
| Satisfactory | 6 | Core Flutter screens and API communication work, but notable gaps remain. The student answers routine questions or completes a simple change with some difficulty. |
| Poor | 4 | Limited Flutter functionality is demonstrated. The student struggles to answer questions or modify and debug the application. |
| Very Poor | 2 | The Flutter contribution is missing or non-functional, or the student cannot explain or modify it. |

### Individual Agentic AI Contribution - 12 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 12 | A distinct, domain-relevant Agentic AI contribution is functional and integrated, with an identifiable responsibility, defined input and output contract, controlled tool permissions, validation, error handling, security, documentation, and tests. The student accurately explains the agent, tools, state, validation, and approval flow and can modify or debug the contribution. |
| Good | 10 | The distinct Agentic AI contribution is functional and relevant, with only minor issues in its contract, permissions, validation, security, testing, observability, or integration. The student answers most questions and can explain a suitable change. |
| Satisfactory | 7 | A basic but identifiable Agentic AI contribution participates in the workflow, but its contract, controls, tests, or integration are incomplete. The student answers routine questions but demonstrates notable gaps. |
| Poor | 5 | A limited Agentic AI prototype is shown, but its responsibility or participation is unclear. The student struggles to explain the agent's behaviour, tools, state, or controls. |
| Very Poor | 2 | The contribution is missing, non-functional, disconnected, or duplicates another agent, and the student cannot explain or modify it. |

### Visual Explanation

The individual rubric consistently evaluates:

```text
Technical Completeness
        |
        +--> Correct architecture
        +--> Integration
        +--> Validation and security
        +--> Tests and evidence
        +--> Viva explanation
        +--> Ability to modify or debug
```

### Exam / Viva Tip

Prepare one small live change for each owned layer before the evaluation.

### Common Mistake

A renamed copy of another agent does not count as a distinct Agentic AI contribution.

---

## Page 14 - Marking Rubric: Integration, Security, Testing, CI, and Git

### Original Page Content

### API Integration, Security and Cross-Platform Functionality - 10 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 10 | React and Flutter use the same API. Authentication, authorization, token handling, validation, shared data, Agentic AI approvals, and security controls work correctly. The student accurately answers related viva questions and can trace, modify, or debug the complete workflow. |
| Good | 8 | Most integration and security functions work with minor inconsistencies or incomplete edge cases. The student answers most questions and can explain the main cross-platform workflow. |
| Satisfactory | 6 | The shared API and core cross-platform workflow function, but notable gaps remain. The student answers routine questions but has difficulty explaining some security or integration decisions. |
| Poor | 4 | Only limited integration is demonstrated. The student provides weak answers and struggles to trace or debug the workflow. |
| Very Poor | 2 | Integration is absent or non-functional, or the student cannot explain the shared workflow and security controls. |

### Testing, CI and Git Workflow - 8 Marks

| Band | Marks | Descriptor |
|---|---:|---|
| Excellent | 8 | Comprehensive tests cover the required layers and Agentic AI. CI passes, and Git history shows regular reviewed contributions with clear ownership. The student accurately answers related viva questions, explains the tests, CI workflow, and Git evidence, and can diagnose a relevant failure. |
| Good | 6 | Suitable testing, CI, and Git practices are demonstrated with only minor missing evidence. The student answers most related questions correctly. |
| Satisfactory | 4 | Some relevant tests and basic Git and CI evidence are provided. The student answers routine questions but demonstrates limited understanding of coverage or workflow decisions. |
| Poor | 2 | Few meaningful tests are provided, CI is absent or unreliable, and Git evidence is weak. The student struggles to answer related questions. |
| Very Poor | 1 | Almost no meaningful testing, CI, or Git evidence is provided, and the student cannot explain the available evidence. |

### Final Evaluation Note

- Final evaluation total:
  - 30 group marks.
  - 70 individual marks.
  - 100 marks total.
- The 100 marks are scaled to 25% of the module mark.
- The listed performance levels are anchor bands.
- Evaluators may award intermediate marks.
- Full marks for an individual criterion require:
  - Required work.
  - Correct viva answers.
  - Ability to explain, test, modify, or debug when requested.
- If understanding or ownership cannot be demonstrated:
  - The mark is reduced.
- If no relevant evidence is provided:
  - Zero marks may be awarded.

### Visual Explanation

```text
Evidence Only                Understanding Only
      \                           /
       \                         /
        v                       v
          Full Criterion Performance
                  |
                  v
        Working + Explainable + Modifiable
```

### Exam / Viva Tip

Practice debugging a failed cross-platform workflow, not only demonstrating the happy path.

### Common Mistake

A passing CI badge with no meaningful tests does not satisfy the criterion.

---

## Page 15 - Demonstration, Viva, and AI-Use Rules

### Original Page Content

### 17. Demonstration and Viva Requirements

#### 17.1 Demonstration Checklist

- [ ] Log in using different roles and demonstrate protected operations.
- [ ] Demonstrate CRUD and a business-specific workflow.
- [ ] Show PostgreSQL data changes.
- [ ] Show Swagger documentation.
- [ ] Demonstrate React and Flutter using the same ASP.NET Core API.
- [ ] Run the application's Agentic AI subsystem.
- [ ] Demonstrate the complete minimum-acceptance workflow:
  - Domain objective.
  - Structured plan.
  - Distinct agent roles.
  - Allow-listed tool use.
  - Persisted state.
  - Deterministic validation.
  - Authorized approval.
  - Auditable result or safe failure.
- [ ] Demonstrate human approval.
- [ ] Demonstrate execution-history summaries.
- [ ] Show error handling.
- [ ] Show tests.
- [ ] Show the passing CI workflow.
- [ ] Show deployed applications.
- [ ] Show GitHub contribution history.

#### 17.2 Viva Scope

Students may be asked to:

- Explain a controller, service, DTO, database relationship, constraint, migration, or index.
- Explain authentication, authorization, state management, secure storage, and API integration.
- Explain an agent role, tool, orchestration decision, shared state, validation, security control, and human approval.
- Explain a test, Git contribution, CI workflow step, deployment decision, third-party integration, or an ADR decision.
- Modify a small feature, validation rule, or business rule.
- Debug a failed workflow.

### 18. Usage of AI

The assessment uses:

- The CLEAR Framework.
- The AI Assessment Scale by Perkins, Furze, Roe, and MacVaugh, 2024.

> **AI Use Level - Level 4, Full AI:** AI tools may be used extensively during permitted development tasks when all use is disclosed, verified, and understood.

> **Evaluation restriction - Level 1, No AI:** During the final demonstration and viva, no external AI assistant, chatbot, IDE copilot, or agentic coding tool may be used to answer questions, generate explanations, or modify the submitted work.

### 18.1 Where AI Tools May Be Used - First Rows

| Task / Section | Permitted Use of AI Tools |
|---|---|
| Domain and requirements - Section 4 | Brainstorm domains, roles, features, and user stories; research the domain. The final scope must be the group's own and defensible at the viva. |
| Architecture and ADR - Sections 10 and 14.2 | Explore options, compare frameworks, and draft the ADR. The decision and justification must be the group's own reasoning. |

### Visual Explanation

Evaluation flow:

```text
10-Minute Demonstration
        |
        v
20-Minute Viva and Technical Questions
        |
        +--> Explain
        +--> Trace
        +--> Modify
        +--> Test
        +--> Debug
```

AI rule:

```text
Development Phase
Level 4 - AI allowed with disclosure and verification

Final Demo and Viva
Level 1 - No external AI assistance
```

### Exam / Viva Tip

Rehearse the demo without any AI assistant open. Every group member should know the startup order and recovery steps.

### Common Mistake

The submitted Agentic AI subsystem must run during the demonstration even though external AI assistants are prohibited.

---

## Page 16 - Permitted and Prohibited AI Use, Disclosure, and Process Marks

### Original Page Content

### 18.1 Where AI Tools May Be Used - Continued

| Task / Section | Permitted Use of AI Tools |
|---|---|
| Backend and database - Sections 5 and 6 | Generate, refactor, and debug ASP.NET Core code; design schema, migrations, seed data, indexes, and the ER diagram. All output must be owner-reviewed and tested. |
| React and Flutter - Sections 7 and 8 | Scaffold components and widgets, state management, routing, validation, styling, secure storage, and device features. |
| Agentic AI subsystem - Section 9 | Agent design, prompt engineering, tool definitions, orchestration, validation, and safety controls. Prompt engineering and human-in-the-loop validation are examinable at the viva. |
| Testing, CI/CD, and deployment - Sections 12-14 | Generate and run tests and test data; write CI workflows; configure and troubleshoot deployment. Tests must be executed and understood, not only generated. |
| Reports, README, and diagrams - Sections 14.1 and 15 | Draft, structure, and proofread. All facts, figures, screenshots, test results, and evaluation findings must be the group's own. |

### 18.2 Where AI Tools May Not Be Used

- **Final demonstration and viva**
  - Conducted under Level 1 - No AI.
  - No external AI assistants or agentic coding tools may:
    - Answer questions.
    - Generate explanations.
    - Modify submitted work.
- **Work the student cannot explain**
  - Code, tests, diagrams, or documentation that cannot be explained, tested, or modified may receive reduced or zero marks.
- **Fabricated evidence**
  - No back-filled commit history.
  - No invented AI-log entries.
  - No invented test or evaluation results.
- **Confidential data and others' work**
  - Never share:
    - Credentials.
    - API keys.
    - Private data.
    - Institutional data.
  - Never commit such data to GitHub.
  - Presenting another party's work as one's own remains plagiarism.
  - Individual reflection must be the student's own writing.

### 18.3 Disclosure, Process Marks and Reflection

#### Disclosure

Each student must keep an individual AI usage log containing:

- Date.
- Tool and model.
- Task or section.
- What the tool produced.
- What was changed or rejected.
- How the result was verified.

The log must be included in that student's Individual Report section.

The Group Report must include one consolidated AI usage declaration confirming:

- All AI use has been disclosed.
- Every member can explain, test, and modify work submitted under their name.

#### Process Marks

Because Level 4 AI use is permitted, 30 marks assess the development process:

| Process Area | Marks |
|---|---:|
| Technical understanding and ownership through the viva and embedded individual criteria | 15 |
| Testing, CI, and Git Workflow core marks | 5 |
| Documentation and Deployment | 10 |
| **Total Process Marks** | **30** |

This meets the CLEAR minimum of 30% process marks for a Level 4 assessment.

#### Reflection - Marked

Each student must include:

- An approximately one-page individual reflection.
- In the Individual Report section of the consolidated report.
- Marked under Documentation and Deployment.
- Potentially discussed during the viva.

The required reflection questions continue on Page 17.

### Visual Explanation

AI-use evidence chain:

```text
AI Tool Used
      |
      v
Record Date + Tool + Model + Task
      |
      v
Record Output
      |
      v
Record Changes / Rejections
      |
      v
Record Verification
      |
      v
Include in Individual AI Usage Log
```

### Exam / Viva Tip

For every major AI-generated artifact, be ready to explain what was wrong, what was changed, and how it was verified.

### Common Mistake

A list of prompts without verification evidence is not a complete AI usage log.

---

## Page 17 - Reflection, Academic Integrity, and Final Checklist

### Original Page Content

### Individual Reflection Questions

Each student must address:

- Which AI tools, if any, were used, and at which stages?
- What did the AI tools do well, and what did they get wrong?
- What was changed, added, or rejected from the AI output, and why?
- What was learned about the student's own skills and understanding?

The AI rules:

- Were agreed with the SE3090 cohort.
- Are published on Course Web under:
  - SE3090.
  - Assignments.
  - Assignment 1.

A reflection that is:

- AI-generated, or
- Inconsistent with the student's Git history and AI usage log

will not receive credit.

### 19. Academic Integrity

AI use complying with Section 18 is permitted and expected.

All submitted work must follow these requirements:

- Do not submit code or features that cannot be explained, tested, or modified.
- Acknowledge:
  - External libraries.
  - APIs.
  - Tutorials.
  - Sample code.
  - AI assistance.
- Maintain the AI usage log.
- Submit the AI usage declaration.
- Do not expose:
  - Credentials.
  - Private data.
  - Protected institutional information.
- Copying another group's code, agent design, or reports is a serious academic offence.
- Commissioned work is a serious academic offence.
- Plagiarism is not permitted.
- Standard SLIIT academic-integrity and plagiarism procedures apply.

### 20. Final Student Checklist

- [ ] Required number of primary business components completed - one per student.
- [ ] ASP.NET Core API and PostgreSQL working.
- [ ] JWT authentication and role-based authorization completed.
- [ ] React and Flutter applications working through the shared API.
- [ ] At least four specialized agents with controlled tools and structured state.
- [ ] Validation, observability, and human approval implemented.
- [ ] Meaningful third-party integration completed.
- [ ] Traditional testing, Agentic AI evaluation, and performance testing completed.
- [ ] GitHub Actions CI workflow building and running tests.
- [ ] ADR completed with justified framework and architecture decisions.
- [ ] React, ASP.NET Core, and PostgreSQL deployed.
- [ ] Flutter APK generated.
- [ ] One consolidated report containing:
  - Group Report.
  - All Individual Reports.
  - Diagrams.
  - Required links.
- [ ] Git contribution visible for every member.
- [ ] AI usage declared.
- [ ] No secrets committed to GitHub.
- [ ] Demonstration and viva prepared with no external AI use.
- [ ] Contribution statements included.
- [ ] AI logs included.
- [ ] Group declaration included.
- [ ] Individual reflections included in the consolidated report.

### Visual Explanation

Final readiness model:

```text
Working Integrated System
        +
Testing and CI Evidence
        +
Deployment and Documentation
        +
Traceable Individual Contributions
        +
Controlled Agentic AI
        +
AI Disclosure and Academic Integrity
        +
Viva Readiness
        =
Submission Ready
```

### Exam / Viva Tip

Use this checklist as the final project board. Assign an owner and evidence link to every item.

### Common Mistake

Do not generate the individual reflection with AI. The specification explicitly states that an AI-generated reflection will not receive credit.

---

# Full Assignment Summary

The assignment requires one coherent, deployed, full-stack and Agentic AI application created by a group, normally containing four students.

The system must integrate:

- ASP.NET Core Web API.
- Entity Framework Core.
- PostgreSQL.
- React.
- Flutter.
- A controlled Agentic AI subsystem.
- At least one meaningful third-party service.
- Testing, Git, CI/CD, documentation, and deployment.

React and Flutter must use:

- The same backend.
- The same database.
- The same identity.
- The same permissions.
- The same business rules.

Each student must own one major business component and contribute across the entire stack. There are no non-technical-only roles.

The system requires:

- At least three user roles.
- One major business component per student.
- CRUD and business-specific operations.
- Status workflows.
- Search, filtering, sorting, pagination, and reporting or analytics.
- Different, meaningful React and Flutter purposes.
- One complete cross-platform workflow.

The Agentic AI subsystem must:

- Accept a domain objective.
- Plan multiple steps.
- Delegate to distinct agents.
- Use controlled tools.
- Persist structured state.
- Perform deterministic validation.
- Pause high-impact actions for authorized approval.
- Record observability evidence.
- Return an auditable result or safe failure.

The group must deploy the required components, submit one consolidated report, provide a Flutter APK and 10-minute demonstration video, maintain evaluator access, and preserve technical evidence.

The final evaluation is:

- 10-minute demonstration.
- 20-minute viva.
- 30 group marks.
- 70 individual marks.
- 100 marks scaled to 25% of the module.

AI is allowed at Level 4 during development with disclosure and verification. External AI is prohibited during the final demonstration and viva.

---

# Architecture Summary

```text
React Web Application
        |
        | HTTPS / REST / JSON
        v
ASP.NET Core Web API <------ Flutter Mobile Application
        |
        +--> PostgreSQL through Entity Framework Core
        |
        +--> Controlled Agentic AI as an internal service
        |
        +--> Third-Party Service through controlled calls
```

Core architectural rules:

| Rule | Meaning |
|---|---|
| One public backend | React and Flutter communicate only through ASP.NET Core |
| One source of truth | PostgreSQL stores authoritative business and workflow data |
| Internal AI integration | Python or other AI service is called by ASP.NET Core, not directly by clients |
| Shared identity and rules | Both applications use consistent users, roles, permissions, and business logic |
| Controlled external services | Third-party calls are protected, validated, and failure-aware |
| Auditable AI | Workflow state, tool calls, validation, approvals, and outcomes are observable |

---

# Agentic AI Acceptance Workflow

```text
1. Receive Domain Objective
        |
        v
2. Create Structured Plan
        |
        v
3. Delegate to Distinct Agents
        |
        v
4. Call Allow-Listed Tools
        |
        v
5. Validate Inputs and Structured Outputs
        |
        v
6. Persist Shared Workflow State
        |
        v
7. Apply Deterministic Validation
        |
        v
8. Pause High-Impact Action
        |
        v
9. Authorized User Approves / Rejects / Revises
        |
        v
10. Produce Auditable Result or Safe Failure
```

Minimum evidence:

- Workflow ID.
- Objective.
- Plan.
- Completed steps.
- Agent participation.
- Tool calls.
- Tool inputs and outputs.
- Validation results.
- Errors and retries.
- Approval status.
- Final outcome.
- Timing or execution summary.

---

# Deliverables Checklist

## Working Software

- [ ] ASP.NET Core backend.
- [ ] PostgreSQL database.
- [ ] React web application.
- [ ] Flutter mobile application.
- [ ] Agentic AI subsystem.
- [ ] Third-party integration.
- [ ] Authentication and authorization.
- [ ] Cross-platform workflow.
- [ ] Human approval.
- [ ] Audit and execution history.

## Testing and Engineering Process

- [ ] Backend tests.
- [ ] Database integration tests.
- [ ] React tests.
- [ ] Flutter tests.
- [ ] End-to-end test.
- [ ] Performance test.
- [ ] Agent golden-case evaluation.
- [ ] Prompt-injection and failure tests.
- [ ] GitHub repository.
- [ ] Issues and project board.
- [ ] Pull requests and reviews.
- [ ] Passing GitHub Actions CI workflow.

## Documentation and Deployment

- [ ] README.
- [ ] Architecture diagrams.
- [ ] Agent architecture.
- [ ] ER diagram and relational schema.
- [ ] Setup and environment-variable instructions.
- [ ] API documentation.
- [ ] Test instructions.
- [ ] Deployment instructions.
- [ ] ADRs.
- [ ] Security considerations.
- [ ] Live React URL.
- [ ] Live API or health URL.
- [ ] Swagger URL.
- [ ] PostgreSQL deployment evidence.
- [ ] Flutter APK.
- [ ] Agent startup instructions.
- [ ] Demonstration video.
- [ ] One consolidated report.

## Individual Evidence

- [ ] Contribution statement.
- [ ] Owned component explanation.
- [ ] Commit evidence.
- [ ] Pull-request evidence.
- [ ] Test evidence.
- [ ] Challenges and learning.
- [ ] AI usage log.
- [ ] Approximately one-page personal reflection.
- [ ] Signed declaration.
- [ ] Viva readiness.

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Agentic AI | An AI system that plans, delegates, uses tools, maintains state, validates results, and acts through controlled workflows | AI that performs structured multi-step work |
| Distinct agent | An agent with a unique role, contract, permissions, and visible workflow participation | A genuinely different AI worker |
| Allow-listed tool | A tool explicitly approved for agent use | Agents can use only permitted tools |
| Shared state | Persisted workflow information available across steps and agents | The workflow's durable memory |
| Deterministic validation | Fixed schema or business-rule checks | Repeatable non-LLM checking |
| Human-in-the-loop | A workflow requiring human review or approval | A person controls important decisions |
| Safe failure | A controlled failure that prevents unsafe action and records the reason | Fail without causing harm |
| Observability | Logs and summaries showing workflow behaviour | Evidence of what happened |
| DTO | Data Transfer Object used at an API boundary | Request or response data shape |
| JWT | Token format commonly used for authentication | A signed login token |
| Role-based authorization | Access control based on user roles | Different roles get different permissions |
| Normalization | Relational design reducing duplication and anomalies | Clean table structure |
| Migration | Version-controlled database-schema change | Reproducible schema update |
| CI/CD | Automated integration, testing, and delivery processes | Automated build and deployment workflow |
| ADR | Architecture Decision Record | Written explanation of a technical decision |
| Golden case | Known test scenario used to evaluate expected AI workflow behaviour | Trusted workflow test |
| LLM-as-a-judge | An LLM used to assess output quality | AI evaluates another AI result |
| Prompt injection | Input attempting to override or manipulate AI instructions | Malicious or unsafe prompt control |
| Cross-platform workflow | A workflow involving both client applications through the same backend and data | React and Flutter participate in one process |
| Audit trail | Recorded history of actions, decisions, and changes | Traceable system history |

---

# Quick Revision Table

| Topic | Must Remember | PDF Page |
|---|---|---:|
| Weighting | 25% of module mark | 1 |
| Duration | 31 July-30 September 2026 | 1 |
| Due date | 30 September 2026 at 11:50 PM | 1 |
| Standard group size | 4 | 1, 3 |
| Mandatory stack | ASP.NET Core, PostgreSQL, React, Flutter, Agentic AI | 1-3 |
| Integrated-system rule | Same API, database, identity, permissions, and business rules | 2 |
| Student ownership | One primary component per student | 3 |
| Domain complexity | 3+ roles; one component per student; workflows and analytics | 4 |
| API minimum | 4 meaningful endpoints + one business-specific operation per component | 5 |
| React purpose | Admin, staff, dashboards, reports, AI monitoring and approval | 5 |
| Flutter purpose | User-facing and operational mobile workflows | 5 |
| Agent count | At least four distinct agents for standard group | 6 |
| Agent requirement | Plan, delegate, tool use, state, validation, approval, audit | 6 |
| Cross-platform flow | Start in one client, approval in other client, status returns | 7 |
| Third-party integration | At least one meaningful service | 8 |
| CI | Build and run backend tests on push/PR to main | 8 |
| ADR count | Typically 3-6 | 9 |
| Consolidated report | One PDF, group + individual sections | 10 |
| Demo and viva | 10 minutes + 20 minutes | 11 |
| Group / individual marks | 30 / 70 | 11 |
| AI during development | Level 4 with disclosure and verification | 15-16 |
| AI during evaluation | Level 1, no external AI | 15-16 |
| AI reflection | Approximately one page, written personally | 16-17 |
| Access period | Until at least 21 October 2026 | 10 |

---

# Likely Viva and Written Questions

### Question 1

Why must React and Flutter use the same ASP.NET Core API?

**Expected Answer:** It creates one authoritative application layer, prevents duplicated business rules, and ensures consistent identity, permissions, validation, data, and workflow status across both clients.

### Question 2

What makes the required AI subsystem agentic rather than a chatbot?

**Expected Answer:** It receives an objective, creates a structured plan, delegates work to distinct agents, uses controlled tools, persists state, performs deterministic validation, pauses high-impact actions for approval, and records an auditable outcome or safe failure.

### Question 3

What counts as a distinct agent?

**Expected Answer:** A distinct agent has a unique responsibility, defined input/output contract, controlled tool permissions, and visible participation. Renaming the same prompt does not count.

### Question 4

Why is deterministic validation necessary?

**Expected Answer:** LLM output is probabilistic. Deterministic schema and business-rule checks provide repeatable safety and correctness gates before accepting results or performing high-impact actions.

### Question 5

Explain the required cross-platform workflow.

**Expected Answer:** A transaction begins in one client, passes through ASP.NET Core and PostgreSQL, invokes the Agentic AI workflow, requires approval or review in the other client, and returns updated status to the initiating user.

### Question 6

Why must third-party integrations be routed through ASP.NET Core?

**Expected Answer:** The backend can protect credentials, validate data, enforce permissions, handle timeouts and failures, minimize sensitive-data exposure, and provide consistent auditing.

### Question 7

Why are DTOs required?

**Expected Answer:** DTOs define stable request and response contracts, separate the API from internal entities, support validation, and reduce accidental exposure or over-posting.

### Question 8

What must the GitHub Actions workflow do at minimum?

**Expected Answer:** On every push and pull request to main, it must restore, build, and run automated backend tests.

### Question 9

What is the purpose of an ADR?

**Expected Answer:** It records the decision context, considered options, selected approach, and consequences, providing evidence for LO4 and supporting viva discussion.

### Question 10

How should Agentic AI be evaluated?

**Expected Answer:** Use golden cases, rule-based assertions, schema validation, deterministic validators, business-rule checks, human review, prompt-injection tests, failure-recovery tests, and safe-failure evidence. LLM-as-a-judge may support but not replace these methods.

### Question 11

What AI use is prohibited during evaluation?

**Expected Answer:** External AI assistants, chatbots, IDE copilots, and coding agents cannot answer questions, generate explanations, or modify submitted work during the demonstration and viva.

### Question 12

What evidence proves individual ownership?

**Expected Answer:** Regular commits, issues, pull requests, reviews, tests, component ownership, documentation, AI logs, and the ability to explain, modify, test, and debug the contribution.

---

# Common Mistakes to Avoid

- Building disconnected React, Flutter, backend, database, and AI prototypes.
- Letting React or Flutter call a Python AI service directly.
- Using separate identities or rules in web and mobile clients.
- Selecting a domain too small for four meaningful components.
- Creating project-manager-only, documentation-only, or testing-only roles.
- Giving one student ownership without end-to-end technical evidence.
- Implementing only CRUD with no business-specific operations.
- Storing passwords, tokens, unnecessary medical/personal data, or hidden AI reasoning.
- Treating a chatbot or single prompt as Agentic AI.
- Creating multiple agents that are merely renamed copies.
- Allowing agents unrestricted tool access.
- Using LLM-as-a-judge as the only evaluation.
- Performing high-impact actions without approval.
- Failing to persist workflow state and execution summaries.
- Using a third-party API without failure and rate-limit handling.
- Creating the Git repository late.
- Making artificial final-day commit histories.
- Omitting the minimum GitHub Actions workflow.
- Deploying React against localhost.
- Submitting inaccessible links.
- Uploading separate reports instead of one consolidated PDF.
- Omitting individual AI logs or group AI declaration.
- Using AI to write the personal reflection.
- Using external AI during the final demonstration or viva.
- Demonstrating only happy paths.
- Depending on evidence that the student cannot explain or reproduce.

---

# Key Terms

- SE3090
- Full-Stack Development
- ASP.NET Core Web API
- Entity Framework Core
- PostgreSQL
- React
- Flutter
- Dart
- Agentic AI
- Distinct Agent
- Planner
- Domain Agent
- Tool Agent
- Validation Agent
- Shared State
- Allow-Listed Tool
- Human Approval
- Safe Failure
- Observability
- Audit Logging
- REST
- DTO
- JWT
- Role-Based Authorization
- CORS
- Swagger / OpenAPI
- Normalization
- Migration
- Transaction
- Index
- State Management
- Protected Route
- Secure Token Storage
- Device Feature
- Third-Party Integration
- Golden Case
- Prompt Injection
- CI/CD
- GitHub Actions
- Pull Request
- Code Review
- Deployment
- ADR
- AI Usage Log
- AI Usage Declaration
- CLEAR Framework
- AI Assessment Scale
- Academic Integrity
- Cross-Platform Workflow

---

# Final One-Page Revision Notes

## Non-Negotiable Stack

```text
React
Flutter
ASP.NET Core Web API
PostgreSQL
Agentic AI
```

## Integration Rule

```text
React ----\
           -> ASP.NET Core -> PostgreSQL
Flutter --/       |
                  -> Controlled Agentic AI
                  -> Third-Party Service
```

## Standard Group

- 4 students.
- 4 primary business components.
- 1 component per student.
- Every student contributes across the stack.
- Every student owns a distinct Agentic AI contribution.

## Minimum Domain Complexity

- 3+ roles.
- CRUD.
- Business workflow.
- Search, filter, sort, pagination.
- Reporting or analytics.
- Different React and Flutter purposes.
- Third-party integration.
- Cross-platform AI workflow.

## Agentic AI Minimum

```text
Objective
-> Plan
-> Distinct Agents
-> Controlled Tools
-> Shared State
-> Deterministic Validation
-> Human Approval
-> Auditable Result or Safe Failure
```

## Required Evidence

- Working integrated software.
- Tests.
- Performance results.
- Agent evaluation.
- Git history.
- Pull requests.
- CI.
- Deployment.
- Consolidated report.
- ADRs.
- AI disclosure.
- Individual reflection.
- Viva understanding.

## Final Evaluation

| Area | Marks |
|---|---:|
| Group | 30 |
| Individual | 70 |
| **Total** | **100** |
| Module contribution after scaling | 25% |

## Dates

- Release: 31 July 2026.
- Submission: 30 September 2026 at 11:50 PM.
- Access maintained until at least 21 October 2026.

## AI Rule

```text
Development: Level 4 AI allowed with disclosure and verification.
Demo/Viva: Level 1, no external AI assistance.
```

---

# Verification

PDF pages: 17 / MD page sections: 17 ✅
