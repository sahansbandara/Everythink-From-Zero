# SE3090 — Software Engineering Frameworks
## Lecture 04 — Database Design, Authentication, Authorization and Integration

## Title Section

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Lecture number | Lecture 04 |
| Lecture title | Database Design, Authentication, Authorization and Integration |
| Main technologies/topics | PostgreSQL · EF Core/Npgsql · JWT · RBAC · Secure full-stack integration |
| Year / Semester / Credits | Year 3 · Semester 1 · 4 Credits |
| Lecturer | Eishan Weerasinghe |
| Email | eishan.w@sliit.lk |
| Total PDF pages | 48 |

---

# Table of Contents

- [Pages 01–05 — Context, Outcomes and Roadmap](#page-01--database-design-authentication-authorization-and-integration)
- [Pages 06–10 — Part 1: Database Design Fundamentals](#page-06--part-1--database-design-fundamentals-for-full-stack-applications)
- [Pages 11–21 — Part 2: ER Modelling, Normalization and Schema](#page-11--part-2--entity-relationships-normalization--schema-design)
- [Pages 22–27 — Part 3: Backend and PostgreSQL Integration](#page-22--part-3--backend--database-integration-with-postgresql)
- [Pages 28–35 — Part 4: Authentication, Authorization and JWT](#page-28--part-4--authentication-authorization--jwt)
- [Pages 36–45 — Part 5: RBAC and Secure Integration](#page-36--part-5--authorization-secure-integration--practice)
- [Pages 46–48 — Summary, Preparation and References](#page-46--lecture-summary--key-takeaways)
- [Full Lecture Summary](#full-lecture-summary)
- [Important Code Snippets and Diagrams](#important-code-snippets-and-diagrams)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms List](#key-terms-list)

## Page Index
- [Page 01 — Database Design, Authentication, Authorization and Integration](#page-01-database-design-authentication-authorization-and-integration)
- [Page 02 — Where This Lecture Fits in SE3090](#page-02-where-this-lecture-fits-in-se3090)
- [Page 03 — Lecture Learning Outcomes](#page-03-lecture-learning-outcomes)
- [Page 04 — Why Database Design & Authentication Matter](#page-04-why-database-design-authentication-matter)
- [Page 05 — Lecture Roadmap — 3 Hours](#page-05-lecture-roadmap-3-hours)
- [Page 06 — Part 1 — Database Design Fundamentals for Full-Stack Applications](#page-06-part-1-database-design-fundamentals-for-full-stack-applications)
- [Page 07 — The Database in Full-Stack Architecture](#page-07-the-database-in-full-stack-architecture)
- [Page 08 — Relational Database Concepts — A Quick Refresher](#page-08-relational-database-concepts-a-quick-refresher)
- [Page 09 — Why PostgreSQL for Modern Software Systems?](#page-09-why-postgresql-for-modern-software-systems)
- [Page 10 — Application Logic vs Data Persistence](#page-10-application-logic-vs-data-persistence)
- [Page 11 — Part 2 — Entity Relationships, Normalization & Schema Design](#page-11-part-2-entity-relationships-normalization-schema-design)
- [Page 12 — Entities, Attributes and Relationships](#page-12-entities-attributes-and-relationships)
- [Page 13 — Relationship Cardinalities: 1:1, 1:N, M:N](#page-13-relationship-cardinalities-1-1-1-n-m-n)
- [Page 14 — Primary Keys and Foreign Keys](#page-14-primary-keys-and-foreign-keys)
- [Page 15 — ER Diagram — LankaMart E-Commerce Example](#page-15-er-diagram-lankamart-e-commerce-example)
- [Page 16 — Normalization & First Normal Form (1NF)](#page-16-normalization-first-normal-form-1nf)
- [Page 17 — Second and Third Normal Form (2NF & 3NF)](#page-17-second-and-third-normal-form-2nf-3nf)
- [Page 18 — Worked Example: Un-normalized → 3NF](#page-18-worked-example-un-normalized-3nf)
- [Page 19 — PostgreSQL Schema Design Best Practices](#page-19-postgresql-schema-design-best-practices)
- [Page 20 — Example: LankaMart Core Schema in PostgreSQL](#page-20-example-lankamart-core-schema-in-postgresql)
- [Page 21 — Checkpoint 01 — Quick Questions](#page-21-checkpoint-01-quick-questions)
- [Page 22 — Part 3 — Backend & Database Integration with PostgreSQL](#page-22-part-3-backend-database-integration-with-postgresql)
- [Page 23 — Connecting the API to PostgreSQL — Securely](#page-23-connecting-the-api-to-postgresql-securely)
- [Page 24 — CRUD Workflow — Repository / Service Layers](#page-24-crud-workflow-repository-service-layers)
- [Page 25 — ORM Concepts — Entity Framework Core + Npgsql](#page-25-orm-concepts-entity-framework-core-npgsql)
- [Page 26 — ORM Concepts — EF Core Features, Npgsql, Benefits and Cautions](#page-26-orm-concepts-ef-core-features-npgsql-benefits-and-cautions)
- [Page 27 — Database Errors & Connection Pooling](#page-27-database-errors-connection-pooling)
- [Page 28 — Part 4 — Authentication, Authorization & JWT](#page-28-part-4-authentication-authorization-jwt)
- [Page 29 — Authentication vs Authorization](#page-29-authentication-vs-authorization)
- [Page 30 — Protecting Routes: Sessions vs Token-Based Auth](#page-30-protecting-routes-sessions-vs-token-based-auth)
- [Page 31 — JSON Web Token (JWT) — Structure](#page-31-json-web-token-jwt-structure)
- [Page 32 — JWT Authentication Flow](#page-32-jwt-authentication-flow)
- [Page 33 — Access Tokens, Refresh Tokens & Secure Storage](#page-33-access-tokens-refresh-tokens-secure-storage)
- [Page 34 — Common JWT Security Risks & Mitigations](#page-34-common-jwt-security-risks-mitigations)
- [Page 35 — Checkpoint 02 — Discussion](#page-35-checkpoint-02-discussion)
- [Page 36 — Part 5 — Authorization, Secure Integration & Practice](#page-36-part-5-authorization-secure-integration-practice)
- [Page 37 — Role-Based Access Control (RBAC)](#page-37-role-based-access-control-rbac)
- [Page 38 — Mapping RBAC to PostgreSQL Tables](#page-38-mapping-rbac-to-postgresql-tables)
- [Page 39 — Protecting API Endpoints by Role — ASP.NET Core](#page-39-protecting-api-endpoints-by-role-asp-net-core)
- [Page 40 — Secure Request Flow — Frontend → Backend → Database](#page-40-secure-request-flow-frontend-backend-database)
- [Page 41 — Validation, Sanitization & Preventing SQL Injection](#page-41-validation-sanitization-preventing-sql-injection)
- [Page 42 — Error Handling Without Leaking Secrets](#page-42-error-handling-without-leaking-secrets)
- [Page 43 — Case Study: LankaMart — Putting It All Together](#page-43-case-study-lankamart-putting-it-all-together)
- [Page 44 — Group Activity: Schema & Auth Flow (20 min)](#page-44-group-activity-schema-auth-flow-20-min)
- [Page 45 — Quick Quiz — 5 Questions](#page-45-quick-quiz-5-questions)
- [Page 46 — Lecture Summary — Key Takeaways](#page-46-lecture-summary-key-takeaways)
- [Page 47 — Learning Outcomes, Next Lecture & Preparation](#page-47-learning-outcomes-next-lecture-preparation)
- [Page 48 — References & Further Reading](#page-48-references-further-reading)

---

# Page-by-Page Lecture Notes

## Page 01 — Database Design, Authentication, Authorization and Integration

### Original Page Content

Year 3  •  Semester 1  •  4 Credits
Lecturer: Eishan Weerasinghe   •   eishan.w@sliit.lk
PostgreSQL schema design • JWT authentication • Role-based access control • Secure full-stack
integration
SLIIT  |  FACULTY OF COMPUTING  |  DEPARTMENT OF SOFTWARE ENGINEERING
Lecture 04
Database Design, Authentication, Authorization
and Integration
SLIIT |  Faculty of Computing

### Visual Explanation

Title slide. The visual hierarchy highlights Lecture 04 and the four core themes: PostgreSQL schema design, JWT authentication, role-based access control, and secure full-stack integration.

### Explanation

The lecture combines persistent data design and security. The same full-stack application is followed from React through ASP.NET Core to PostgreSQL and then secured with JWT and RBAC.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 02 — Where This Lecture Fits in SE3090

### Original Page Content

Where This Lecture Fits in SE3090
L01
Framework
fundamentals & trends
L02
Advanced React
frontend
L03*
C# / .NET & REST APIs
TODAY
Database, AuthN/AuthZ
& integration
Next
Agentic software
development
- Module content area 2(f)–2(h): database design, authentication & authorization, secure
integration
- Builds on your React frontend (Lecture 02) and ASP.NET Core REST API knowledge
- Directly assessed in lab submissions, the mini hackathon and the Main Assignment (25%)
- Foundation for DevOps deployment topics later (database hosting, environment configuration)

### Visual Explanation

A horizontal course-sequence timeline: L01 Framework fundamentals → L02 React → L03 C#/.NET REST APIs → **Today** Database/AuthN/AuthZ/Integration → Next Agentic software development. It shows this lecture as the data/security bridge between frontend/backend fundamentals and later AI-assisted development.

### Explanation

This lecture builds directly on the frontend/API lectures. Database correctness and access control are now added to the stack.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 03 — Lecture Learning Outcomes

### Original Page Content

Lecture Learning Outcomes
LO2
Apply suitable frameworks & tools
Design a normalized PostgreSQL schema and integrate it with an ASP.NET Core backend for a full-stack
application.
LO3
Use best practices for integration & quality
Implement secure frontend–backend–database integration with validation, safe error handling and secure
configuration.
LO4
Select & justify approaches
Justify choices of database design, token-based authentication (JWT) and role-based access control for
project requirements.

### Visual Explanation

Three outcome cards map LO2, LO3 and LO4 to database design/integration, secure integration practices, and justified technology/security choices.

### Explanation

LO2 = build the data integration; LO3 = integrate securely; LO4 = justify design/security choices.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 04 — Why Database Design & Authentication Matter

### Original Page Content

Why Database Design & Authentication Matter
Data outlives code
Frontends are rewritten every few years; your data
and schema live for decades. Poor design today is
expensive forever.
Most breaches target data
Broken access control is the #1 risk in the OWASP
Top 10. Injection and identification failures also
remain in the list.
Performance starts at the schema
No amount of caching rescues a schema with
duplicated, inconsistent data and missing indexes.
Every real app has users & roles
E-commerce, banking, LMS, healthcare — all need
login, identity and per-role permissions to function
legally and safely.

### Visual Explanation

Four cards explain why the topic matters: data outlives code, breaches target data/access control, schema design drives performance, and real applications require identities/roles.

### Explanation

Schema and security decisions have long-term cost. Poor data design creates integrity/performance problems; poor access control can expose sensitive data.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 05 — Lecture Roadmap — 3 Hours

### Original Page Content

Lecture Roadmap – 3 Hours
1
Database design fundamentals
Role of PostgreSQL in full-stack apps · logic vs persistence
~25 min
2
ER modelling, normalization & schema
Entities · relationships · 1NF–3NF · PostgreSQL schema design
~45 min
3
Backend ↔ PostgreSQL integration
Connections · env vars · CRUD · repository layer · ORM · pooling
~35 min
4
Authentication & JWT
AuthN vs AuthZ · sessions vs tokens · JWT flow · token security
~40 min
RBAC & secure integration
Roles & permissions · protected endpoints · validation · safe errors
~35 min

### Visual Explanation

Five numbered roadmap rows allocate about 25, 45, 35, 40 and 35 minutes to database fundamentals, ER/normalization, integration, JWT, and RBAC/security.

### Explanation

The lecture spends the most time on schema/normalization and authentication because they require both conceptual and implementation reasoning.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 06 — Part 1 — Database Design Fundamentals for Full-Stack Applications

### Original Page Content

P A R T  1
Database Design Fundamentals for Full-
Stack Applications
- Role of the database in the three-tier architecture
- Relational database concepts refresher
- Why PostgreSQL for modern systems
- Application logic vs data persistence

### Visual Explanation

Section-divider slide for Part 1. The listed scope is database role, relational concepts, PostgreSQL, and logic-vs-persistence.

### Explanation

Part 1 establishes the database's role before designing tables.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 07 — The Database in Full-Stack Architecture

### Original Page Content

The Database in Full-Stack Architecture
P R E S E N T A T I O N
React Frontend
Components · state · forms
Calls REST APIs (JSON)
A P P L I C A T I O N
ASP.NET Core API
Controllers · services · models
Business rules & validation
D A T A
PostgreSQL
Tables · constraints · indexes
Transactions & persistence
HTTP / JSON
SQL via ORM
- The database is the single source of truth — every tier above it depends on its correctness
- Stores state that must survive restarts, crashes and deployments (persistence)
- Enforces integrity with constraints even when application code has bugs
- Serves many clients at once: web app, mobile app, reports, background jobs
- The frontend NEVER talks to PostgreSQL directly — always through the API tier

### Visual Explanation

Three-tier architecture diagram: React presentation ↔ ASP.NET Core application ↔ PostgreSQL data. HTTP/JSON connects frontend to API; SQL via ORM connects API to DB.

### Explanation

The API is the only tier that should talk to PostgreSQL. The DB remains the source of truth and persists state through restarts/deployments.

### Definitions

**Definition: Persistence** — The ability of stored state to survive process restarts, crashes and deployments.

**Simple meaning:** Data remains after the app stops.

### Exam Tip

Draw the three-tier flow and state that the frontend never talks directly to PostgreSQL.

### Common Mistake

Direct browser-to-database connections break the architecture and expose credentials/data access.

---

## Page 08 — Relational Database Concepts — A Quick Refresher

### Original Page Content

Relational Database Concepts – A Quick Refresher
- Data is organised into tables (relations) of rows and
columns
  - Row (tuple) = one record, e.g. one customer; Column
(attribute) = one fact about it
- Every table should have a primary key that uniquely
identifies each row
- Tables are connected through foreign keys — this is
the 'relational' part
- SQL is the declarative language for defining and
querying data
- Database transactions follow the ACID principles:
Atomicity · Consistency · Isolation · Durability
customers
id (PK)
name
email
1
Amal Perera
amal@mail.lk
2
Nadia Silva
nadia@mail.lk
ACID in one line each
A — the entire operation succeeds or fails.
C — the data always follows the database rules.
I — multiple users can work without interfering with
one another.
D — saved data remains available even after a system
failure

### Recreated Table — `customers`

| id (PK) | name | email |
|---:|---|---|
| 1 | Amal Perera | amal@mail.lk |
| 2 | Nadia Silva | nadia@mail.lk |

### ACID Memory Table

| Principle | Slide meaning |
|---|---|
| Atomicity | Entire operation succeeds or fails |
| Consistency | Data always follows database rules |
| Isolation | Multiple users can work without interfering |
| Durability | Saved data remains after system failure |

### Visual Explanation

A small `customers` table illustrates rows, columns and a primary key. A separate ACID callout gives one-line meanings for Atomicity, Consistency, Isolation and Durability.

### Explanation

Relational systems use keys and relationships to maintain data integrity. ACID describes the guarantees required for reliable transactions.

### Definitions

**Definition: Primary key** — A column or set of columns that uniquely identifies each row.

**Simple meaning:** Unique row ID.

**Definition: Foreign key** — A column referencing a key in another table to enforce a relationship.

**Simple meaning:** Connects tables safely.

**Definition: ACID** — Atomicity, Consistency, Isolation and Durability transaction guarantees.

**Simple meaning:** Rules for reliable transactions.

### Exam Tip

Memorize PK, FK, SQL and ACID. ACID is a common short-answer topic.

### Common Mistake

Do not confuse a foreign key with a primary key; a FK references another table's PK/unique key.

---

## Page 09 — Why PostgreSQL for Modern Software Systems?

### Original Page Content

Why PostgreSQL for Modern Software Systems?
Open source & free
Permissive licence, no per-core fees; huge community;
powers Instagram, Reddit, Skype-scale workloads.
Standards & integrity first
Strong SQL-standard compliance, rich constraints, full
ACID transactions, MVCC concurrency.
Rich data types
JSONB for document data, arrays, UUID, full-text
search, PostGIS for geo — relational + flexible.
Ecosystem & tooling
First-class support in EF Core (Npgsql), Prisma,
Hibernate; runs everywhere — Docker, Azure, AWS
RDS, Supabase, Neon.
LO4 link:  in your assignment, justify the choice — e.g. "PostgreSQL chosen for ACID guarantees, JSONB flexibility and free cloud
hosting tiers."

### Visual Explanation

Four benefit cards: open source/free, standards/integrity, rich data types, ecosystem/tooling. A highlighted LO4 callout demonstrates how to justify PostgreSQL in an assignment.

### Explanation

PostgreSQL is justified using cost, correctness, data-type flexibility and ecosystem support — a model for LO4-style justification.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 10 — Application Logic vs Data Persistence

### Original Page Content

Application Logic vs Data Persistence
Application logic (API tier)
- 
Business rules: pricing, discounts, workflows
- 
Validation of incoming requests
- 
Orchestration: call services, send emails
- 
Authentication & authorization decisions
- 
Changes often — redeployed weekly/daily
Data persistence (DB tier)
- 
Durable storage of facts (orders, users)
- 
Structural integrity: keys, constraints
- 
Transactions & concurrency control
- 
Efficient retrieval: indexes, query planner
- 
Changes rarely — schema evolves carefully via
migrations
Rule of thumb:  the database guarantees data is valid; the application decides what to do with it. Keep business rules out of the
schema, and persistence details out of controllers.

### Visual Explanation

Two-column comparison: application logic on the API side versus data persistence on the DB side. The footer rule summarizes responsibility separation.

### Explanation

The application makes business decisions; the DB guarantees structural truth and persistence. Mixing these concerns creates hard-to-maintain code.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

### Major Topic Exam Section — Database Fundamentals

**Exam Tip:** Explain the database as the single source of truth in a three-tier system and separate application logic from persistence.

**Common Mistake:** Do not let the React frontend access PostgreSQL directly.

**Likely exam question 1:** What is the role of PostgreSQL in a three-tier full-stack application?  
**Expected answer:** It stores durable state, enforces constraints/integrity, manages transactions/concurrency and serves data through the API tier.

**Likely exam question 2:** Distinguish application logic from data persistence.  
**Expected answer:** Application logic contains business rules, validation, orchestration and auth decisions; persistence stores facts, enforces structural integrity, handles transactions and optimizes retrieval.

---

## Page 11 — Part 2 — Entity Relationships, Normalization & Schema Design

### Original Page Content

P A R T  2
Entity Relationships, Normalization &
Schema Design
- Entities, attributes and relationship types
- ER diagrams for full-stack applications
- Normalization: 1NF, 2NF, 3NF
- PostgreSQL schema design best practices

### Visual Explanation

Section-divider slide for Part 2: entities, ER diagrams, normalization (1NF–3NF), and PostgreSQL schema design.

### Explanation

Part 2 converts requirements into relational structures and then normalizes them.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 12 — Entities, Attributes and Relationships

### Original Page Content

Entities, Attributes and Relationships
- Entity — a real-world 'thing' we store data about
  - Customer, Product, Order, Category → become tables
- Attribute — a property of an entity
  - Customer: id, name, email, phone → become columns
- Relationship — a meaningful association between
entities
  - A Customer places Orders; an Order contains Products
- Identify entities from nouns and relationships from
verbs in the requirements
CUSTOMER
ORDER
PRODUCT
places
contains

### Visual Explanation

Three entity boxes — CUSTOMER, ORDER, PRODUCT — linked by verbs `places` and `contains`. It demonstrates nouns → entities and verbs → relationships.

### Explanation

A fast modelling trick is nouns → entities and verbs → relationships.

### Definitions

**Definition: Entity** — A real-world thing stored in the database.

**Simple meaning:** Usually becomes a table.

**Definition: Attribute** — A property of an entity.

**Simple meaning:** Usually becomes a column.

**Definition: Relationship** — A meaningful association between entities.

**Simple meaning:** Connection between tables.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 13 — Relationship Cardinalities: 1:1, 1:N, M:N

### Original Page Content

Relationship Cardinalities: 1:1, 1:N, M:N
One-to-one
USER
1 ——— 1
PROFILE
FK with UNIQUE on the child side, or
merge into one table.
e.g. each user has one profile
One-to-many
CUSTOMER
1 ——— N
ORDER
Most common. FK customer_id stored on
the MANY side (orders).
e.g. one customer, many
orders
Many-to-many
ORDER
M ——— N
PRODUCT
Cannot be stored directly — resolve with
a junction table (order_items).
e.g. orders ↔ products
Key rule: the foreign key always lives on the 'many' side; M:N always becomes a junction (bridge) table.

### Cardinality Comparison

| Relationship | Example | Implementation rule |
|---|---|---|
| 1:1 | User ↔ Profile | FK with UNIQUE on child side, or merge tables |
| 1:N | Customer → Orders | FK stored on the **many** side |
| M:N | Orders ↔ Products | Resolve with a junction/bridge table |

### Visual Explanation

Three relationship rows compare 1:1, 1:N and M:N. The key visual rule is that the FK belongs on the many side; M:N is resolved using a junction table.

### Explanation

Cardinality determines FK placement. M:N cannot be represented with one FK; it needs a bridge/junction table.

### Definitions

**Definition: Cardinality** — The number relationship between entity instances, such as 1:1, 1:N or M:N.

**Simple meaning:** How many records can relate.

### Exam Tip

Key rule: FK on the many side; M:N → junction table.

### Common Mistake

Do not put a single FK on one side of an M:N relationship and assume it models many values.

---

## Page 14 — Primary Keys and Foreign Keys

### Original Page Content

### Primary Keys and Foreign Keys

- **Primary key (PK):** uniquely identifies each row — never NULL, never changes.
  - Prefer surrogate keys: `id BIGINT GENERATED ALWAYS AS IDENTITY` (or UUID).
  - Natural keys (email, NIC) can change — keep them UNIQUE, not primary.
- **Foreign key (FK):** a column referencing another table's PK.
  - Enforces referential integrity: no order without a real customer.
  - `ON DELETE` behaviour: RESTRICT (default safety) · CASCADE · SET NULL.
- **Composite keys:** junction tables often use `(order_id, product_id)` together.

**PostgreSQL example:**

```sql
CREATE TABLE orders (
    id BIGINT GENERATED ALWAYS
        AS IDENTITY PRIMARY KEY,
    customer_id BIGINT NOT NULL
        REFERENCES customers(id)
        ON DELETE RESTRICT,
    status TEXT NOT NULL
        DEFAULT 'PENDING',
    created_at TIMESTAMPTZ
        NOT NULL DEFAULT now()
);
```

**Why RESTRICT?** Deleting a customer who has orders should fail loudly — losing order history silently (CASCADE) is usually a business disaster.

### Visual Explanation

Left-side key rules plus a PostgreSQL `orders` table definition. The RESTRICT callout explains why delete behaviour is a business decision.

### Explanation

Primary keys identify rows, foreign keys protect relationships, composite keys are common in junctions, and delete actions must match business meaning.

### Exam Tip

Be able to justify RESTRICT, CASCADE and SET NULL instead of memorizing them blindly.

### Common Mistake

Do not use email/NIC as a primary key only because it is unique today; natural keys can change.

---

## Page 15 — ER Diagram — LankaMart E-Commerce Example

### Original Page Content

ER Diagram – LankaMart E-Commerce Example
customers
id  PK
name
email  UNIQUE
password_hash
created_at
orders
id  PK
customer_id FK
status
created_at
order_items
order_id  PK,FK
product_id PK,FK
quantity
unit_price
products
id  PK
name
price
stock_qty
category_id FK
categories
id  PK
name  UNIQUE
1
N
places
1
N
N
1
1
N
Read the diagram:
• orders↔products was M:N —
resolved by order_items
• unit_price copied into order_items:
prices change, history must not

### Recreated ER Diagram

```text
customers (1)
    |
    | places
    v
orders (N) (1)
    |
    v
order_items (N) ---- N:1 ----> products (1)
                              ^
                              |
categories (1) ---- 1:N ------+
```

`order_items(order_id, product_id, quantity, unit_price)` resolves the Order↔Product M:N relationship.

### Visual Explanation

ER diagram for LankaMart: customers 1:N orders; orders 1:N order_items; products 1:N order_items; categories 1:N products. `order_items` resolves the original Order↔Product M:N relationship.

### Explanation

`order_items` is both relationship data and business history: `unit_price` is a snapshot so later product price changes do not alter old orders.

### Exam Tip

Explain both cardinalities and why `unit_price` belongs in order_items.

### Common Mistake

`unit_price` is intentional historical snapshot data, not careless duplication.

---

## Page 16 — Normalization & First Normal Form (1NF)

### Original Page Content

Normalization & First Normal Form (1NF)
- Normalization = organising tables to reduce
redundancy and prevent anomalies
  - Insert, update and delete anomalies all come from
storing one fact in many places
- 1NF rules:
  - Every column holds atomic (indivisible) values — no lists
in a cell
  - No repeating groups (phone1, phone2, phone3 …)
  - Each row is unique (has a primary key)
- Fix: move multi-valued data into its own related table
✗Violates 1NF
order_id
products
501
Mouse, Keyboard, USB Hub
502
Monitor
✓1NF — atomic rows in a child table
order_id
product
qty
501
Mouse
1
501
Keyboard
1
501
USB Hub
2
502
Monitor
1
Why it matters: try writing SQL to find 'all orders containing a Keyboard'
against the comma-separated version — slow LIKE scans, broken counts,
impossible joins.

### Recreated 1NF Comparison

**Violates 1NF**

| order_id | products |
|---:|---|
| 501 | Mouse, Keyboard, USB Hub |
| 502 | Monitor |

**1NF — atomic child rows**

| order_id | product | qty |
|---:|---|---:|
| 501 | Mouse | 1 |
| 501 | Keyboard | 1 |
| 501 | USB Hub | 2 |
| 502 | Monitor | 1 |

### Visual Explanation

Red/green comparison between a comma-separated products cell and atomic child rows. The green table shows the 1NF fix.

### Explanation

1NF eliminates list-like cells and repeating groups. Atomic rows make joins, counts and filters reliable.

### Definitions

**Definition: Normalization** — Organizing tables to reduce redundancy and prevent anomalies.

**Simple meaning:** Store facts cleanly and once.

**Definition: First Normal Form (1NF)** — Atomic column values, no repeating groups and unique rows.

**Simple meaning:** No lists inside cells.

### Exam Tip

1NF = atomic values, no repeating groups, unique rows.

### Common Mistake

A comma-separated list in one cell violates 1NF.

---

## Page 17 — Second and Third Normal Form (2NF & 3NF)

### Original Page Content

Second and Third Normal Form (2NF & 3NF)
2NF — no partial dependency
- 
Applies to tables with composite primary keys
- 
Every non-key column must depend on the entire
primary key, not only part of it
order_items(order_id, product_id, qty, product_name)
- 
product_name depends only on product_id, so it
should be moved to the Products table.
3NF — no transitive dependency
- 
Non-key columns must not depend on other non-key
columns
orders(id, customer_id, customer_city)
  - customer_city depends on the customer, not the
order, so it should be stored in the Customers table.
Practical guidance
- 
3NF is the standard target for transactional (OLTP) full-stack applications
- 
Each table should describe exactly ONE entity; each fact stored exactly once
- 
Denormalize only deliberately, for measured performance reasons — and document why (LO4)

### Visual Explanation

Two large boxes contrast 2NF (no partial dependency) and 3NF (no transitive dependency), with a practical-guidance box below.

### Explanation

2NF eliminates facts depending on only part of a composite key. 3NF eliminates facts depending on another non-key fact. 3NF is the default OLTP target.

### Definitions

**Definition: Second Normal Form (2NF)** — No non-key attribute depends on only part of a composite primary key.

**Simple meaning:** Depend on the whole composite key.

**Definition: Third Normal Form (3NF)** — No non-key attribute depends transitively on another non-key attribute.

**Simple meaning:** Non-key facts belong with their real entity.

### Exam Tip

2NF = no partial dependency; 3NF = no transitive dependency.

### Common Mistake

2NF is specifically relevant to composite keys; 3NF concerns non-key→non-key dependency.

---

## Page 18 — Worked Example: Un-normalized → 3NF

### Original Page Content

Worked Example: Un-normalized → 3NF
✗One flat 'orders' spreadsheet-style table
order
customer
email
city
product
cat
price
qty
501
Amal
amal@m.lk
Galle
Mouse
IT
2500
1
501
Amal
amal@m.lk
Galle
Keyboard
IT
5500
1
502
Nadia
nadia@m.lk
Kandy
Mouse
IT
2500
2
Redundancy everywhere: Amal's details ×2, Mouse price ×2 → update/insert/delete anomalies
✓Decomposed to 3NF (our LankaMart schema)
customers
id
name
city
1
Amal
Galle
2
Nadia
Kandy
products
id
name
price
10
Mouse
2500
11
Keyboard
5500
orders
id
cust_id
501
1
502
2
order_items
ord
prod
qty
501
10
1
501
11
1
502
10
2
Each fact lives exactly once; JOINs reassemble the original view when needed.

### Recreated Normalization Example

**Un-normalized flat table**

| order | customer | email | city | product | cat | price | qty |
|---:|---|---|---|---|---|---:|---:|
| 501 | Amal | amal@m.lk | Galle | Mouse | IT | 2500 | 1 |
| 501 | Amal | amal@m.lk | Galle | Keyboard | IT | 5500 | 1 |
| 502 | Nadia | nadia@m.lk | Kandy | Mouse | IT | 2500 | 2 |

**3NF decomposition**

`customers`

| id | name | city |
|---:|---|---|
| 1 | Amal | Galle |
| 2 | Nadia | Kandy |

`products`

| id | name | price |
|---:|---|---:|
| 10 | Mouse | 2500 |
| 11 | Keyboard | 5500 |

`orders`

| id | cust_id |
|---:|---:|
| 501 | 1 |
| 502 | 2 |

`order_items`

| ord | prod | qty |
|---:|---:|---:|
| 501 | 10 | 1 |
| 501 | 11 | 1 |
| 502 | 10 | 2 |

### Visual Explanation

A red flat spreadsheet-style order table is decomposed into four green 3NF tables: customers, products, orders and order_items. This visually shows redundancy removal.

### Explanation

Normalization stores each fact once and reconstructs combined views with JOINs when required.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 19 — PostgreSQL Schema Design Best Practices

### Original Page Content

PostgreSQL Schema Design Best Practices
Naming & types
  - snake_case, plural table names (orders)
  - TEXT over VARCHAR(n) unless limits matter
  - NUMERIC for money — never FLOAT
  - TIMESTAMPTZ (UTC) for all timestamps
Constraints = free correctness
  - NOT NULL by default; allow NULL deliberately
  - UNIQUE for emails, usernames, codes
  - CHECK (price >= 0), CHECK (qty > 0)
  - FKs on every relationship
Indexes
  - PK & UNIQUE are indexed automatically
  - Index FK columns and frequent WHERE/JOIN columns
  - Don't over-index — each index slows writes
  - EXPLAIN ANALYZE to verify usage
Evolution & safety
  - Schema lives in versioned migrations (EF Core)
  - Never edit production tables by hand
  - Seed data scripts for dev/test
  - One schema diagram in your repo & report

### Visual Explanation

Four cards: Naming & types, Constraints, Indexes, Evolution & safety.

### Explanation

Schema quality depends on disciplined naming/types, constraints, selective indexing and versioned migrations.

### Exam Tip

NUMERIC for money, TIMESTAMPTZ for timestamps, constraints for correctness, indexes for actual query patterns.

### Common Mistake

Do not over-index; every index adds write cost.

---

## Page 20 — Example: LankaMart Core Schema in PostgreSQL

### Original Page Content

### Example: LankaMart Core Schema in PostgreSQL

```sql
CREATE TABLE customers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE products (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    stock_qty INT NOT NULL DEFAULT 0 CHECK (stock_qty >= 0)
);

CREATE TABLE order_items (
    order_id BIGINT REFERENCES orders(id) ON DELETE CASCADE,
    product_id BIGINT REFERENCES products(id),
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(10,2) NOT NULL,
    PRIMARY KEY (order_id, product_id)
);

CREATE INDEX idx_orders_customer ON orders(customer_id);
```

**Spot the practices**

- Surrogate IDENTITY keys.
- UNIQUE email (natural key kept unique, not primary).
- `password_hash` — never plain text.
- NUMERIC for money + CHECK guards.
- Composite PK on the junction table.
- CASCADE only where children are meaningless alone.
- Explicit index on the FK used by every “my orders” query.

### Visual Explanation

Large SQL code panel plus a checklist identifying surrogate keys, UNIQUE email, password hashing, NUMERIC money, CHECKs, composite PK, careful CASCADE and FK indexing.

### Explanation

The SQL combines multiple best practices into one realistic core schema.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

Never store plain-text passwords.

---

## Page 21 — Checkpoint 01 — Quick Questions

### Original Page Content

Checkpoint 01 – Quick Questions
Answer with your neighbour — 4 minutes
Q1
A table stores course codes as "SE3090; IT2030; SE3050" in one column. Which normal form is violated and how do you fix
it?
Q2
students(id, module_id, module_name, grade) with key (id, module_id) — which normal form does module_name break?
Q3
Why does order_items store unit_price when products already has price? Is that redundancy?
Q4
Which side of a one-to-many relationship holds the foreign key — and why can't it be the other side?

### Visual Explanation

Four checkpoint question cards testing 1NF, 2NF, snapshot price and FK placement.

### Explanation

The checkpoint answers are: Q1 1NF; move course codes to related rows. Q2 2NF; `module_name` depends only on `module_id`. Q3 snapshot `unit_price` is deliberate historical duplication. Q4 FK belongs on the many side.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

### Major Topic Exam Section — ER Modelling, Keys and Normalization

**Exam Tip:** Be able to design an ER model from nouns/verbs, choose cardinalities, place FKs correctly, resolve M:N, and normalize to 3NF.

**Common Mistake:** Do not normalize blindly; snapshot/history fields such as `order_items.unit_price` can be deliberate.

**Likely exam question 1:** How is an M:N relationship implemented?  
**Expected answer:** Create a junction table containing FKs to both parent tables, commonly with a composite key.

**Likely exam question 2:** Compare 1NF, 2NF and 3NF.  
**Expected answer:** 1NF requires atomic values/no repeating groups; 2NF removes partial dependency on part of a composite key; 3NF removes transitive non-key dependencies.

---

## Page 22 — Part 3 — Backend & Database Integration with PostgreSQL

### Original Page Content

P A R T  3
Backend & Database Integration with
PostgreSQL
- Connection configuration & environment variables
- CRUD workflow through layers
- Repository / service pattern & ORM (EF Core + Npgsql)
- Error handling & connection pooling

### Visual Explanation

Section-divider slide for backend/PostgreSQL integration, with a plug icon representing connectivity.

### Explanation

Part 3 connects the schema to ASP.NET Core without leaking persistence concerns into controllers.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 23 — Connecting the API to PostgreSQL — Securely

### Original Page Content

### Connecting the API to PostgreSQL — Securely

- A connection string tells the driver where and how to connect.
  - Host, port (5432), database, username, password, SSL mode.
- **NEVER hard-code credentials in source code or commit them to Git.**
- Use environment variables / user-secrets per environment.
  - Dev, test and production each get their own values.
  - Same code, different config — a 12-Factor App principle.
- Production secrets come from the platform, such as Azure App Settings or AWS Secrets Manager.

```dotenv
# .env (git-ignored!)
DB_CONNECTION="Host=localhost;Port=5432;
Database=lankamart;Username=app_user;
Password=${DB_PASSWORD};SslMode=Require"
```

```csharp
// Program.cs
var cs = builder.Configuration
    .GetConnectionString("Default");

builder.Services.AddDbContext<AppDbContext>(
    o => o.UseNpgsql(cs));
```

**Checklist:** `.env` in `.gitignore` · least-privilege DB user (no superuser!) · SSL required · different passwords per environment.

### Visual Explanation

Configuration bullets paired with `.env` and `Program.cs` code panels. A checklist emphasizes git-ignore, least privilege, SSL and per-environment credentials.

### Explanation

Secrets belong in configuration, not code. The same application binary should receive different environment values.

### Exam Tip

Never hard-code credentials. Mention env vars/user-secrets, least privilege and SSL.

### Common Mistake

Never commit `.env` credentials or use a DB superuser for the application.

---

## Page 24 — CRUD Workflow — Repository / Service Layers

### Original Page Content

CRUD Workflow — Repository / Service Layers
React client
POST /api/products  { name, price }
Controller
Parse + validate request → calls service (no business logic here)
Service layer
Business rules: pricing checks, stock rules, transactions
Repository / DbContext
Data access only: LINQ → SQL via EF Core
PostgreSQL
INSERT INTO products … RETURNING id
Why layers?
- 
Separation of concerns —
each layer has one job
- 
Testability: mock the
repository, unit-test the service
- 
Swap implementations (e.g.
cache layer) without touching
controllers
- 
CRUD = Create, Read,
Update, Delete ↔ INSERT,
SELECT, UPDATE, DELETE
↔ POST, GET, PUT, DELETE

### CRUD Mapping Table

| Application action | HTTP | SQL |
|---|---|---|
| Create | POST | INSERT |
| Read | GET | SELECT |
| Update | PUT | UPDATE |
| Delete | DELETE | DELETE |

### Visual Explanation

Vertical CRUD pipeline: React → Controller → Service → Repository/DbContext → PostgreSQL. A side panel maps separation/testability and CRUD to HTTP/SQL verbs.

### Explanation

Layering improves testability and change isolation. CRUD maps naturally across HTTP verbs, repository operations and SQL.

### Exam Tip

Controller has no business logic; repository has data access only.

### Common Mistake

Do not put SQL/data access in controllers or business rules in repositories.

---

## Page 25 — ORM Concepts — Entity Framework Core + Npgsql

### Original Page Content

### ORM Concepts — Entity Framework Core + Npgsql

**What is an ORM?**

An Object-Relational Mapper (ORM) allows a C# application to communicate with a database using classes and objects.

In Entity Framework Core:

- classes ↔ tables
- properties ↔ columns
- objects ↔ rows
- LINQ queries retrieve, filter and sort data.
- Entity Framework translates LINQ into parameterized SQL, which helps prevent SQL injection.

```csharp
// Entity class ↔ table
public class Product {
    public long Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

// LINQ → parameterized SQL
var cheap = await db.Products
    .Where(p => p.Price < limit)
    .OrderBy(p => p.Name)
    .ToListAsync();
```

```sql
SELECT * FROM products
WHERE price < $1
ORDER BY name;
```

### Visual Explanation

ORM explanation paired with C# entity/LINQ code and the resulting parameterized SQL.

### Explanation

An ORM bridges objects and relations while still producing SQL. Parameterization is a major security benefit, but SQL knowledge remains necessary.

### Definitions

**Definition: ORM** — Object-Relational Mapper that maps objects/classes to relational data.

**Simple meaning:** Use C# objects/LINQ instead of hand-writing every SQL query.

### Exam Tip

ORM maps classes↔tables, properties↔columns, objects↔rows; LINQ becomes parameterized SQL.

### Common Mistake

An ORM does not mean SQL knowledge is unnecessary.

---

## Page 26 — ORM Concepts — EF Core Features, Npgsql, Benefits and Cautions

### Original Page Content

### ORM Concepts — Entity Framework Core + Npgsql

**EF Core Features**

- Change tracking detects modifications to objects, and `SaveChanges()` updates the database.
- Migrations help manage database schema changes through code.
- Npgsql is the PostgreSQL provider that allows Entity Framework Core to communicate specifically with PostgreSQL.
- **Benefits:** productivity, type safety, built-in SQL-injection protection.
- **Costs & cautions:**
  - N+1 query problem — use `.Include()` deliberately.
  - We must still understand SQL and check generated queries; N+1 can reduce performance.

```csharp
public class Product {
    public long Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

var cheap = await db.Products
    .Where(p => p.Price < limit)
    .OrderBy(p => p.Name)
    .ToListAsync();
```

```sql
SELECT * FROM products
WHERE price < $1
ORDER BY name;
```

### Visual Explanation

Same ORM code panel plus feature/benefit/caution bullets, especially change tracking, migrations, Npgsql and N+1.

### Explanation

EF Core automates tracking/migrations and Npgsql provides PostgreSQL connectivity, but careless loading can create N+1 performance problems.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

Do not load related entities carelessly; N+1 can destroy performance.

---

## Page 27 — Database Errors & Connection Pooling

### Original Page Content

Database Errors & Connection Pooling
Handling database errors
- 
Database
operations
may
fail
due
to
timeouts,
duplicate
values,
foreign-key
violations,
or
connection issues.
- 
We should catch the specific database error and
return
a
meaningful
API
response.
For
example,
PostgreSQL error 23505 means a unique value already
exists. The API can return 409 Conflict with a safe
message such as ‘Email already registered.
- 
We should retry only temporary connection failures.
We must not automatically retry write operations
because this could create duplicate records.
- 
The complete error should be logged on the server, but
technical or sensitive details should not be shown to the
client.
Connection pooling
- 
A
connection
pool
keeps
a
set
of
database
connections
ready
for
reuse.
This
improves
performance because creating a new connection for
every request is expensive.
- 
Npgsql manages connection pooling automatically.
When we close a connection, it normally returns to the
pool for another request.
- 
Finally,
always
dispose
of
database
contexts
and
connections correctly. Otherwise, connection leaks can
exhaust the pool and prevent new requests from
accessing the database

### Visual Explanation

Two-column card layout: database error handling on the left and connection pooling on the right.

### Explanation

Database reliability includes translating specific failures into safe API responses and reusing connections efficiently through pooling.

### Definitions

**Definition: Connection pool** — Reusable set of DB connections maintained for efficiency.

**Simple meaning:** Reuse connections instead of reconnecting every request.

### Exam Tip

23505 duplicate/UNIQUE violation can map to 409 Conflict; retry only temporary connection failures.

### Common Mistake

Do not automatically retry non-idempotent/write operations.

---

### Major Topic Exam Section — Backend ↔ PostgreSQL Integration

**Exam Tip:** Trace one request through Controller → Service → Repository/DbContext → PostgreSQL and explain configuration, ORM, pooling and safe errors.

**Common Mistake:** Do not hard-code connection credentials or mix business/data-access responsibilities.

**Likely exam question 1:** Why use EF Core with Npgsql?  
**Expected answer:** EF Core provides ORM/LINQ, type safety, change tracking and migrations; Npgsql is the PostgreSQL provider.

**Likely exam question 2:** Why use connection pooling?  
**Expected answer:** Reusing existing connections avoids the cost of opening a new DB connection for every request.

---

## Page 28 — Part 4 — Authentication, Authorization & JWT

### Original Page Content

P A R T  4
Authentication, Authorization & JWT
- Authentication vs authorization
- Public vs protected routes; sessions vs tokens
- JWT structure, login flow, access & refresh tokens
- Token storage and common JWT security risks

### Visual Explanation

Section-divider slide for Authentication, Authorization & JWT.

### Explanation

Part 4 separates identity proof from permission checks and then uses JWT for stateless proof.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 29 — Authentication vs Authorization

### Original Page Content

Authentication vs Authorization
Authentication (AuthN)
“Who are you?”
- 
Verifying identity: login with email + password
- 
Also: OAuth (Google login), MFA, biometrics
- 
Happens first, typically once per session
- 
Failure → 401 Unauthorized
Authorization (AuthZ)
“What may you do?”
- 
Checking permissions for an action/resource
- 
Roles (Admin, Staff, Customer) & policies
- 
Happens on every protected request
- 
Failure → 403 Forbidden
Airport analogy:  passport control checks WHO you are (authentication); your boarding pass decides WHICH flight and seat you
may board (authorization). Both are required — in order.

### Visual Explanation

Two-column comparison: AuthN asks “Who are you?” and returns 401 on failure; AuthZ asks “What may you do?” and returns 403. Airport passport/boarding-pass analogy reinforces ordering.

### Explanation

Authentication must happen before authorization. 401 means identity proof is missing/invalid; 403 means identity is known but access is denied.

### Definitions

**Definition: Authentication (AuthN)** — Verification of identity.

**Simple meaning:** Who are you?

**Definition: Authorization (AuthZ)** — Permission checking after identity is known.

**Simple meaning:** What may you do?

### Exam Tip

401 = unauthenticated/invalid identity; 403 = authenticated but forbidden.

### Common Mistake

Do not return 403 for missing/invalid authentication; 403 is for insufficient permission after authentication.

---

## Page 30 — Protecting Routes: Sessions vs Token-Based Auth

### Original Page Content

Protecting Routes: Sessions vs Token-Based Auth
Public vs protected routes
Public:  GET /products · POST /auth/register · POST /auth/login
Protected:  GET /orders/my · POST /orders · admin endpoints —
require proof of identity on EVERY request
HTTP is stateless
The server forgets you between requests. After login, every later
request must carry proof of identity. Two strategies exist for that
proof →
Server-side sessions
Tokens (JWT)
Where state lives
Server memory/store; client holds a session-id cookie
Inside the signed token on the client; server stores nothing
Scaling
Needs sticky sessions or shared store (Redis)
Any API instance can verify — ideal for multiple servers,
mobile, microservices
Revocation
Easy — delete the session
Hard — valid until expiry (hence short lifetimes + refresh
tokens)
Typical use
Classic server-rendered web apps
SPAs (React) + REST APIs — our stack

### Sessions vs JWT

| Criterion | Server-side sessions | Tokens (JWT) |
|---|---|---|
| Where state lives | Server store; client has session-id cookie | Signed token on client; API can verify without session state |
| Scaling | Sticky sessions or shared store such as Redis | Any API instance can verify |
| Revocation | Easy: delete session | Harder: token valid until expiry |
| Typical use | Classic server-rendered web | SPA + REST API, mobile, distributed APIs |

### Visual Explanation

Public/protected route callouts above a sessions-vs-JWT comparison table covering state location, scaling, revocation and typical use.

### Explanation

Because HTTP is stateless, every protected request needs identity proof. Sessions store state server-side; JWT moves signed claims to the client.

### Exam Tip

Know sessions vs JWT by state location, scaling, revocation and typical use.

### Common Mistake

JWT is not automatically 'more secure' than sessions; trade-offs differ.

---

## Page 31 — JSON Web Token (JWT) — Structure

### Original Page Content

### JSON Web Token (JWT) — Structure

A JSON Web Token, or JWT, contains three parts: the header, payload, and signature.

**HEADER**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

The header identifies the token type and signing algorithm.

**PAYLOAD**

```json
{
  "sub": "42",
  "role": "Customer",
  "exp": 1718200000
}
```

The payload contains claims such as the user ID, role and expiry time. This information is only Base64-encoded, not encrypted, so anyone can read it.

**SIGNATURE**

```text
HMACSHA256(
  base64(header) + "." +
  base64(payload),
  SECRET
)
```

The signature allows the server to verify that the token is authentic and has not been modified.

**Golden rule:** Never store passwords or sensitive information inside a JWT payload.

### Visual Explanation

Three large JWT panels — Header . Payload . Signature — visually showing the dot-separated structure and the security role of the signature.

### Explanation

JWT payloads are readable because Base64 is encoding, not encryption. Trust comes from signature verification, not secrecy of claims.

### Definitions

**Definition: JWT** — A signed token containing header, payload claims and signature.

**Simple meaning:** Portable proof of identity/claims.

**Definition: Claim** — A statement inside a token such as subject, role or expiry.

**Simple meaning:** A fact asserted by the token.

### Exam Tip

JWT = header.payload.signature; payload is readable; signature prevents tampering.

### Common Mistake

Base64 encoding is not encryption.

---

## Page 32 — JWT Authentication Flow

### Original Page Content

JWT Authentication Flow
React Client
ASP.NET Core API
PostgreSQL
1
User enters email + password
React sends POST /auth/login through HTTPS
2
Retrieve the user account
API searches PostgreSQL securely by email
Account information returned
user ID · role · password hash
3
4
Compare password with stored hash — original password is never
stored
If correct → issue short-lived JWT: user ID · role · expiry
5
Request a protected resource
Authorization: Bearer <JWT access token>
Validate JWT: signature · expiry · issuer · audience  →  check role / permission
6
7
200 OK — request processed successfully
401 Unauthorized — token is missing, invalid or expired  |  403 Forbidden — valid token, insufficient permission
HTTPS required — protects login details and JWTs during communication

### Visual Explanation

Sequence diagram between React Client, ASP.NET Core API and PostgreSQL showing login, user lookup, password-hash comparison, JWT issuing, protected request, validation and response.

### Explanation

The login flow never stores the original password. The API compares a submitted password to a stored hash and then issues a short-lived token.

### Exam Tip

Memorize the login/protected-request sequence and the 401/403 split.

### Common Mistake

Never store or compare plain-text passwords.

---

## Page 33 — Access Tokens, Refresh Tokens & Secure Storage

### Original Page Content

Access Tokens, Refresh Tokens & Secure Storage
Access token
Refresh token
Purpose
Sent with every API request to prove identity
Used only to obtain a new access token
Lifetime
Short: 15–60 minutes
Long: days–weeks
Server state
None (stateless JWT)
Stored hashed in DB → can be revoked (logout, ban,
rotation)
If stolen
Damage window limited by expiry
Serious — hence rotation & revocation list
Where should the React app keep tokens?
- 
localStorage — convenient but readable by ANY JavaScript → exposed if an XSS attack succeeds
- 
Recommended: refresh token in an HttpOnly, Secure, SameSite cookie (JS cannot read it); access token in memory only
- 
Whatever you choose: HTTPS always, short expiry, and never log tokens

### Access vs Refresh Tokens

| Criterion | Access token | Refresh token |
|---|---|---|
| Purpose | Sent with every API request | Used to obtain a new access token |
| Lifetime | Short: 15–60 min | Long: days–weeks |
| Server state | None for stateless JWT | Stored hashed in DB for revocation/rotation |
| If stolen | Damage limited by short expiry | More serious; rotate and revoke |

### Visual Explanation

Access-token versus refresh-token comparison table, followed by a token-storage guidance box warning against localStorage under XSS.

### Explanation

Short-lived access tokens reduce theft impact. Refresh tokens live longer, must be revocable/rotated, and need stronger storage protection.

### Definitions

**Definition: Access token** — Short-lived token sent to APIs to prove identity.

**Simple meaning:** Used on normal requests.

**Definition: Refresh token** — Longer-lived credential used to obtain new access tokens.

**Simple meaning:** Used to renew access.

### Exam Tip

Access token short; refresh token long and revocable. Recommended storage: refresh cookie + access token in memory.

### Common Mistake

Do not store long-lived refresh tokens in easy-to-read JavaScript storage.

---

## Page 34 — Common JWT Security Risks & Mitigations

### Original Page Content

Common JWT Security Risks & Mitigations
Risk
What goes wrong
Mitigation
alg: none / weak alg
Attacker strips or downgrades the signature algorithm
Server pins accepted algorithms; reject 'none'; use vetted
libraries
Weak / leaked secret
Short secrets brute-forced offline → forged tokens
Long random key (256-bit+), env vars, rotation plan
No expiry validation
Stolen tokens work forever
Always set & validate exp; keep lifetimes short
Sensitive data in payload
Payload is Base64 — readable by anyone
Only ids, roles, expiry — never passwords/PII
Token theft via XSS
Injected script reads localStorage tokens
HttpOnly cookies, CSP, input/output sanitization
Trusting client claims
Role checked in React only — attacker calls API directly
Authorization enforced server-side on EVERY endpoint
The client is enemy territory: hiding a button in React is UX, not security. Every rule must also exist in the API.

### JWT Risk Table

| Risk | What goes wrong | Mitigation |
|---|---|---|
| `alg: none` / weak algorithm | Signature downgraded/removed | Pin accepted algorithms; reject `none`; vetted libraries |
| Weak/leaked secret | Forged tokens | Long random 256-bit+ key; env vars; rotation |
| No expiry validation | Stolen token works indefinitely | Set and validate `exp`; short lifetime |
| Sensitive payload data | Base64 claims readable | IDs/roles/expiry only; never passwords/PII |
| XSS token theft | Script reads localStorage | HttpOnly cookies, CSP, sanitization |
| Trusting client claims | Attacker calls API directly | Server-side authorization on every endpoint |

### Visual Explanation

Three-column risk table: JWT risk → what goes wrong → mitigation. The footer states that client-side hiding is UX, not security.

### Explanation

JWT security fails when algorithms/secrets/expiry/storage/server-side authorization are weak. The server must never trust client-only role checks.

### Exam Tip

Client-side hiding is not security. Authorization must be enforced by the API.

### Common Mistake

Do not trust role checks performed only in React.

---

## Page 35 — Checkpoint 02 — Discussion

### Original Page Content

Checkpoint 02 – Discussion
Discuss in pairs — 5 minutes, then we debate
D1
Your API returns 401 for an expired token AND for a wrong password. A teammate says both should be 403. Who is right, and
why does it matter?
D2
A friend proposes: "Make tokens valid for 30 days so users never get logged out." Argue for and against. What design gets both
convenience and safety?
D3
You can read your lecturer's JWT payload with a Base64 decoder. Is that a vulnerability? Justify using the signature mechanism.
D4
What is the WORST place mentioned today to store: (a) the JWT signing key, (b) user passwords, (c) the DB connection string?

### Visual Explanation

Four discussion cards covering 401/403, token lifetime, Base64-readable JWT payloads and worst secret-storage locations.

### Explanation

Discussion answers: 401 is correct for wrong credentials or expired/missing token; long access tokens improve convenience but increase theft window; readable payload is expected, signature protects integrity; worst storage is source code/plain text/local client storage depending on the secret.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

### Major Topic Exam Section — Authentication, JWT and Token Security

**Exam Tip:** Keep AuthN/AuthZ, 401/403, JWT structure, login flow, access/refresh tokens and secure storage clearly separated.

**Common Mistake:** A readable JWT payload is not automatically a vulnerability; the payload is encoded, while integrity comes from the signature.

**Likely exam question 1:** Differentiate authentication and authorization.  
**Expected answer:** Authentication verifies identity (“who are you?”); authorization checks permissions (“what may you do?”).

**Likely exam question 2:** Why use short-lived access tokens plus refresh tokens?  
**Expected answer:** Short access tokens reduce theft damage while refresh tokens provide convenience and can be rotated/revoked.

---

## Page 36 — Part 5 — Authorization, Secure Integration & Practice

### Original Page Content

P A R T  5
Authorization, Secure Integration &
Practice
- 
Role-based access control & schema
- 
Protecting endpoints
- 
SQL injection & validation
- 
Safe errors • case study • activity • quiz

### Visual Explanation

Section-divider slide for RBAC, protected endpoints, SQL injection/validation, safe errors and practice.

### Explanation

Part 5 applies authorization and security across all tiers.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 37 — Role-Based Access Control (RBAC)

### Original Page Content

Role-Based Access Control (RBAC)
- Permissions attach to roles, not to individual users
  - Users gain permissions by being assigned roles
  - Manage 3 roles instead of 3,000 users' individual rights
- Principle of least privilege: each role gets the minimum
it needs
- It is easier to manage because a new employee can
simply be assigned the appropriate role.
- For more control, roles can contain specific
permissions such as products.create or orders.refund.
Admin
Manage users & roles · all reports · system
settings
Staff
Manage products & stock · process orders ·
view sales
Customer
Browse products · place orders · view OWN
orders only
Note “own orders only”:  Roles alone cannot enforce “own orders only.” The API must compare the order’s customer ID with the
authenticated user’s ID in the JWT.

### Visual Explanation

Three role cards (Admin, Staff, Customer) show permission scope. A callout warns that role checks alone cannot enforce object ownership.

### Explanation

RBAC reduces administration by attaching permissions to roles. Ownership rules are object-level and require comparing the resource owner with token identity.

### Definitions

**Definition: RBAC** — Role-Based Access Control: permissions are assigned to roles and users receive roles.

**Simple meaning:** Manage permissions through roles.

**Definition: Least privilege** — Grant only the minimum permission required.

**Simple meaning:** No unnecessary access.

### Exam Tip

Roles do not automatically enforce ownership.

### Common Mistake

RBAC alone cannot enforce 'own resource only'.

---

## Page 38 — Mapping RBAC to PostgreSQL Tables

### Original Page Content

Mapping RBAC to PostgreSQL Tables
users
id  PK
name
email UNIQUE
password_hash
user_roles
user_id  PK,FK
role_id  PK,FK
roles
id  PK
name UNIQUE
(Admin / Staff
/ Customer)
role_permissions
role_id  PK,FK
permission_id PK,FK
permissions
id  PK
code UNIQUE
(products.create,
orders.refund…)
M:N
M:N
Same pattern twice!
users↔roles and
roles↔permissions are
both M:N — resolved
with junction tables,
exactly like order_items.
At login: load the user's roles → embed as claims in the JWT → no DB lookup on later requests (until refresh).

### Recreated RBAC Schema

```text
users
  |
  | M:N
  v
user_roles
  |
  v
roles
  |
  | M:N
  v
role_permissions
  |
  v
permissions
```

Both M:N relationships are resolved using junction tables with composite PK/FKs.

### Visual Explanation

RBAC ER diagram: users↔roles and roles↔permissions are both M:N, resolved by `user_roles` and `role_permissions` junction tables.

### Explanation

RBAC schema reuses the same M:N junction-table pattern from order_items. Roles may also be embedded in JWT claims at login.

### Exam Tip

users↔roles and roles↔permissions are both M:N junction-table problems.

### Common Mistake

Do not duplicate role/permission text directly on every user row when a normalized RBAC schema is required.

---

## Page 39 — Protecting API Endpoints by Role — ASP.NET Core

### Original Page Content

### Protecting API Endpoints by Role — ASP.NET Core

```csharp
[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase {

    [HttpGet]                      // public route
    [AllowAnonymous]
    public Task<IEnumerable<ProductDto>> GetAll() ...

    [HttpPost]                     // Staff or Admin
    [Authorize(Roles = "Staff,Admin")]
    public Task<IActionResult> Create(CreateProductDto d) ...

    [HttpDelete("{id}")]           // Admin only
    [Authorize(Roles = "Admin")]
    public Task<IActionResult> Delete(long id) ...
}
```

**Request pipeline**

1. JWT middleware: signature and expiry valid? → otherwise 401.
2. `[Authorize]`: authenticated? → otherwise 401.
3. Role/policy check passed? → otherwise 403.
4. Object-level check in service: owns this resource?
5. Controller action runs.

**Policies > raw roles for complex rules:**

```csharp
AddPolicy(
    "CanRefund",
    p => p.RequireClaim("perm", "orders.refund")
);
```

### Visual Explanation

ASP.NET Core controller code on the left and a five-step authorization request pipeline on the right.

### Explanation

ASP.NET Core `[Authorize]` attributes enforce route-level roles/policies, while service logic handles object ownership.

### Exam Tip

Order: validate token → authenticate → role/policy → ownership → action.

### Common Mistake

Do not stop at role checks if object-level ownership matters.

---

## Page 40 — Secure Request Flow — Frontend → Backend → Database

### Original Page Content

Secure Request Flow — Frontend → Backend → Database
React (browser)
- HTTPS only
- Bearer token via interceptor
- Client-side validation (UX)
- Holds no secrets, no SQL
ASP.NET Core API
- CORS allow-list (your origin only)
- JWT validation → roles + ownership
- Server-side validation & sanitization
- Parameterized queries via EF Core
PostgreSQL
- SSL connection, private network
- Least-privilege app_user
- Constraints as last line of defence
- Only hashed passwords stored
Defence in depth:  every layer assumes the previous one failed. Browser checks can be bypassed; the API re-validates; the database
constrains anyway.

### Visual Explanation

Three security columns for React, ASP.NET Core and PostgreSQL. The defence-in-depth footer explains that each layer re-checks assumptions.

### Explanation

Defence in depth means React UX checks, API validation/authorization and DB constraints all exist because any previous layer can be bypassed or fail.

### Definitions

**Definition: Defence in depth** — Multiple independent security controls across layers.

**Simple meaning:** If one layer fails, another still protects the system.

### Exam Tip

Use the phrase 'defence in depth'.

### Common Mistake

Client-side validation alone is never a security boundary.

---

## Page 41 — Validation, Sanitization & Preventing SQL Injection

### Original Page Content

### Validation, Sanitization & Preventing SQL Injection

- Validate on **BOTH** sides — for different reasons.
  - Frontend validation provides quick feedback but can be bypassed.
  - Backend validation is the real security layer; check type, format, range and business rules.
- ASP.NET Core supports validation through data annotations and FluentValidation.
  - `[Required]`, `[EmailAddress]`, `[Range(0, 1000000)]`
- React normally encodes displayed content, helping to prevent XSS attacks.
- SQL injection occurs when untrusted input is joined directly with an SQL command.
  - Never build SQL queries using string concatenation.
  - Use parameterized queries or EF Core LINQ queries.

```csharp
// VULNERABLE: string concatenation
var sql = "SELECT * FROM users"
    + " WHERE email='" + input + "'";

// input: ' OR '1'='1 → returns ALL users

// SAFE: parameterized raw SQL
db.Users.FromSqlInterpolated(
    $"SELECT * FROM users WHERE email={input}");

// SAFE: LINQ (parameterized by EF Core)
db.Users.Where(u => u.Email == input);
```

Parameters travel **SEPARATELY** from SQL text — the database can never mistake data for commands. Hand-escaping is not a substitute.

### Visual Explanation

Validation/security bullets paired with vulnerable and safe query examples. The callout explains why parameter separation prevents SQL injection.

### Explanation

Frontend validation improves UX; backend validation protects the system. Parameterized SQL separates data from commands, blocking classic injection attacks.

### Definitions

**Definition: SQL injection** — Attack where untrusted input becomes part of executable SQL.

**Simple meaning:** User data is mistaken for commands.

**Definition: Parameterized query** — Query where data values are sent separately from SQL text.

**Simple meaning:** Stops input becoming SQL code.

### Exam Tip

The primary SQL-injection defence is parameterized queries, not manual escaping.

### Common Mistake

Do not concatenate untrusted input into SQL and do not rely on hand escaping.

---

## Page 42 — Error Handling Without Leaking Secrets

### Original Page Content

### Error Handling Without Leaking Secrets

**WRONG — what the client should never see**

```text
HTTP 500
Npgsql.PostgresException (0x80004005):
23505: duplicate key violates unique
constraint "users_email_key"
at LankaMart.Repos.UserRepo.Insert()
in C:\src\api\UserRepo.cs:line 42
```

This leaks table and constraint names, file paths, stack frames and driver information.

**RIGHT — safe, structured error response**

```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json
```

```json
{
  "type": ".../errors/email-taken",
  "title": "Email already registered",
  "status": 409,
  "traceId": "00-8f3a...-01"
}
```

Problem Details format (RFC 9457) is built into ASP.NET Core. `traceId` links a user report to the full server-side log entry.

**The pattern**

- Global exception middleware: log full detail server-side → return generic Problem Details to the client.
- Map known cases to proper codes: validation → 400 · auth → 401/403 · not found → 404 · conflict → 409 · unknown → 500.

### Visual Explanation

Side-by-side WRONG/RIGHT error responses. The unsafe example leaks internal details; the safe example uses structured Problem Details and traceId.

### Explanation

Clients should receive safe, stable errors while servers retain full diagnostics in logs. `traceId` connects the two views.

### Definitions

**Definition: Problem Details** — Standard structured HTTP API error format (RFC 9457).

**Simple meaning:** Safe predictable error response.

### Exam Tip

Return Problem Details; log internal detail server-side.

### Common Mistake

Do not return stack traces, paths, SQL details or driver internals to clients.

---

## Page 43 — Case Study: LankaMart — Putting It All Together

### Original Page Content

Case Study: LankaMart — Putting It All Together
Requirements → design decisions, with justification (LO4)
Requirement
Design decision
Justification
Customers register & log in
users + bcrypt hash; JWT access (15 min) + rotating refresh
token
Stateless scaling for the SPA; revocation via refresh
store
Orders contain many products
orders + order_items junction, composite PK, snapshot
unit_price
M:N resolved; invoices immune to later price changes
Staff manage catalogue, admins manage staff
roles + user_roles; [Authorize(Roles=…)] on endpoints
Least privilege; policy change = edit role, not 3,000
users
Customers see only their own orders
Ownership check in service: order.customer_id == token sub
Role checks alone can't prevent object-level access
(OWASP #1)
Stock never negative; emails unique
CHECK (stock_qty >= 0); UNIQUE(email)
Constraints enforce truth even past application bugs
Same method applies to your assignment domain: property management, student management, clinic booking …

### Requirement → Decision → Justification

| Requirement | Design decision | Justification |
|---|---|---|
| Customers register & log in | users + bcrypt hash; 15-min JWT access + rotating refresh token | Stateless SPA scaling; refresh-store revocation |
| Orders contain many products | orders + order_items; composite PK; snapshot unit_price | Resolve M:N; preserve invoice history |
| Staff manage catalogue; admins manage staff | roles + user_roles; `[Authorize(Roles=…)]` | Least privilege; change role once |
| Customers see own orders | Service ownership check: `order.customer_id == token sub` | Role check alone cannot prevent object-level access |
| Stock non-negative; emails unique | `CHECK (stock_qty >= 0)`; `UNIQUE(email)` | DB constraints preserve truth despite app bugs |

### Visual Explanation

Three-column case-study table mapping LankaMart requirements to design decisions and justifications.

### Explanation

The case study demonstrates LO4: every requirement is mapped to a concrete design choice and an explicit reason.

### Exam Tip

In LO4 questions, always write Requirement → Design decision → Justification.

### Common Mistake

A technology choice without justification is incomplete for LO4.

---

## Page 44 — Group Activity: Schema & Auth Flow (20 min)

### Original Page Content

Group Activity: Schema & Auth Flow (20 min)
Groups of 3–4 · paper or laptop · present in 60 seconds
Scenario: University Library System
Students borrow books; librarians manage the catalogue and loans; admins manage
user accounts. A student may borrow up to 5 books; a book can have many copies.
- 
Task 1 — ER diagram: entities, keys, cardinalities (resolve any
M:N)
- 
Task 2 — RBAC: roles table + 2 protected endpoints with required
roles
- 
Task 3 — Auth flow: sketch login → JWT → borrow-a-book
request
- 
Task 4 — One constraint that enforces a business rule in
PostgreSQL
Marking lens (same as the assignment)
- 
Junction tables where needed?
- 
FKs on the correct side?
- 
3NF — or justified exceptions?
- 
401 vs 403 used correctly?
- 
Object-level check identified? (a student
sees only own loans)

### Visual Explanation

Group-activity slide. The left side defines the University Library System scenario and four tasks; the right side gives the marking lens used to assess design quality.

### Explanation

The activity combines schema design, RBAC, JWT flow and DB constraints in one new domain. The marking lens mirrors assignment expectations.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 45 — Quick Quiz — 5 Questions

### Original Page Content

Quick Quiz — 5 Questions
1
Which normal form is violated when module_name sits in a table keyed by (student_id, module_id)?
A) 1NF   B) 2NF   C) 3NF
2
An order_items table linking orders and products is an example of resolving a …
A) 1:1   B) 1:N   C) M:N relationship
3
A valid but expired JWT arrives at a protected endpoint. The correct response is …
A) 400   B) 401   C) 403
4
Which part of a JWT prevents tampering?
A) Header   B) Payload   C) Signature
5
The single most effective defence against SQL injection is …
A) Input length limits   B) Parameterized queries   C) Hiding error messages

### Visual Explanation

Five quiz rows testing 2NF, M:N junctions, 401, JWT signature, and parameterized queries.

### Explanation

Quiz answers: 1-B (2NF), 2-C (M:N), 3-B (401), 4-C (Signature), 5-B (Parameterized queries).

### Exam Tip

Memorize quiz key: B, C, B, C, B.

### Common Mistake

No major common mistake.

---

### Major Topic Exam Section — RBAC and Secure Full-Stack Integration

**Exam Tip:** Explain role-level checks, object-level ownership, defence in depth, parameterized queries and safe Problem Details together.

**Common Mistake:** Hiding a button in React is UX only; the API must enforce the same authorization.

**Likely exam question 1:** Why are roles alone insufficient for “customer sees own orders only”?  
**Expected answer:** The service must compare the resource owner/customer ID with the authenticated user ID from the JWT.

**Likely exam question 2:** What is the strongest defence against SQL injection in this lecture?  
**Expected answer:** Parameterized queries or EF Core LINQ that generates parameterized SQL.

---

## Page 46 — Lecture Summary — Key Takeaways

### Original Page Content

Lecture Summary — Key Takeaways
Design the data first
3NF schemas with proper keys, junction tables for M:N, constraints and FK indexes — in
PostgreSQL, with migrations.
Integrate through layers
Controller → service → repository → EF Core/Npgsql; env vars for connection strings; pooled
connections; typed error handling.
Authenticate with JWT
Stateless signed tokens: short-lived access + revocable rotating refresh; bcrypt-hashed
passwords; secure token storage.
Authorize everywhere
RBAC via roles/junction tables, [Authorize] policies on every endpoint, PLUS object-level
ownership checks.
Defend in depth
Validate both sides, parameterized queries only, safe Problem-Details errors, least-privilege DB
users, secrets in env config.

### Visual Explanation

Five summary rows: design data first, integrate through layers, authenticate with JWT, authorize everywhere, and defend in depth.

### Explanation

This page is the shortest complete revision of the lecture.

### Exam Tip

Use this page as the final five-point memory map.

### Common Mistake

No major common mistake.

---

## Page 47 — Learning Outcomes, Next Lecture & Preparation

### Original Page Content

Learning Outcomes, Next Lecture & Preparation
LO
Covered today by…
LO2
Designing PostgreSQL schemas and integrating them with ASP.NET Core (EF Core + Npgsql) to build full-stack applications
LO3
Best practices for secure integration: layered architecture, env configuration, validation, parameterized queries, safe error handling
LO4
Selecting and justifying PostgreSQL, JWT-based authentication and RBAC against project requirements (case study & activity)
Next: Agentic Software Development (1 of 3)
AI agents in engineering workflows, AI-assisted design and coding
— you will use today's schema and auth design as the playground
for AI-assisted implementation.
Before the lab / next week
- 
Install PostgreSQL 16 + pgAdmin (or Docker image)
- 
Sketch the ER diagram for YOUR assignment domain
- 
Read: EF Core 'Getting Started with PostgreSQL' (Npgsql docs)
- 
Skim OWASP Top 10 — A01 & A07

### Recreated LO Coverage Table

| LO | Covered today by… |
|---|---|
| LO2 | PostgreSQL schema design + ASP.NET Core integration using EF Core/Npgsql |
| LO3 | Layering, env config, validation, parameterized queries, safe errors |
| LO4 | Justifying PostgreSQL, JWT and RBAC against requirements |

### Visual Explanation

Top table maps LO2/LO3/LO4 to what was covered. Bottom cards show the next Agentic Software Development lecture and preparation tasks.

### Explanation

The final preparation links this lecture to the next AI-agent topic and asks students to install PostgreSQL, sketch their assignment ERD and review Npgsql/OWASP.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

## Page 48 — References & Further Reading

### Original Page Content

References & Further Reading
- 
Module-recommended texts
  - Freeman, E. & Robson, E. (2020) Head First Design Patterns, 2nd edn. O'Reilly Media.
  - Ford, N., Richards, M., Sadalage, P. & Dehghani, Z. (2021) Software Architecture: The Hard Parts. O'Reilly Media.
  - Biswas, A. & Talukdar, W. (2025) Building Agentic AI Systems. Packt Publishing.
- 
Documentation (primary sources)
  - PostgreSQL 16 Documentation — postgresql.org/docs (DDL, constraints, indexes)
  - Npgsql & EF Core PostgreSQL provider — npgsql.org
  - Microsoft Learn — ASP.NET Core Security: Authentication & Authorization
- 
Security references
  - OWASP Top 10 (2021) & OWASP API Security Top 10 (2023) — owasp.org
  - RFC 7519 (JSON Web Token) · RFC 9457 (Problem Details for HTTP APIs)
  - OWASP Cheat Sheet Series: SQL Injection Prevention · Password Storage

### Visual Explanation

Reference list grouped into module texts, primary documentation and security references. No technical diagram.

### Explanation

These are the lecture's recommended sources; they are useful for deeper detail on PostgreSQL, EF Core/Npgsql, JWT, Problem Details and OWASP guidance.

### Exam Tip

Focus on the page's bold keywords and connect the concept to the full-stack flow.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

Lecture 04 completes the core full-stack foundation by adding durable data, authentication, authorization and secure integration to the React + ASP.NET Core stack.

**Database design:** PostgreSQL is the data tier and single source of truth. Relational design uses entities, attributes, primary keys, foreign keys and cardinalities. M:N relationships are resolved with junction tables. Normalization reduces redundancy and anomalies: 1NF requires atomic values, 2NF removes partial dependencies, and 3NF removes transitive dependencies. For transactional systems, 3NF is the standard target unless denormalization is deliberate and justified.

**Schema quality:** Use stable surrogate PKs, UNIQUE natural identifiers, meaningful FKs, careful `ON DELETE` behaviour, `NUMERIC` for money, `TIMESTAMPTZ` for timestamps, `NOT NULL`/`CHECK` constraints and indexes that match frequent FK/WHERE/JOIN usage. Keep schema evolution in migrations rather than manual production edits.

**Backend ↔ database integration:** The secure flow is React → Controller → Service → Repository/DbContext → PostgreSQL. Controllers handle HTTP and validation, services hold business rules, repositories/EF Core handle data access. Npgsql connects EF Core to PostgreSQL. ORM/LINQ improves productivity and parameterization, but developers must still understand SQL and avoid N+1 query patterns. Use environment configuration, least-privilege DB users, SSL and connection pooling.

**Authentication and JWT:** Authentication verifies identity and fails with 401; authorization checks permission and fails with 403. HTTP is stateless, so protected requests need proof of identity. JWT is `header.payload.signature`; payload claims are readable Base64, while the signature protects integrity. Login retrieves the account, compares the submitted password with the stored hash, issues a short-lived access token and uses refresh tokens for safe renewal.

**Token security:** Access tokens should be short-lived. Refresh tokens are longer-lived, stored/managed so they can be revoked and rotated. The lecture recommends a refresh token in an HttpOnly, Secure, SameSite cookie and the access token in memory. Never store sensitive information in JWT payloads, never use weak signing secrets/algorithms, always validate expiry/issuer/audience and never trust client-only authorization.

**RBAC and secure integration:** Permissions attach to roles; roles are assigned to users using M:N junction tables. More granular permissions can be modelled through another M:N relationship. Endpoint authorization uses `[Authorize]` roles/policies, but object-level ownership checks must still be performed in the service. Defence in depth requires HTTPS/CORS on the browser/API boundary, server-side validation, parameterized queries, DB constraints, least-privilege DB access and safe Problem Details errors.

# Important Code Snippets and Diagrams

## Full-Stack Request Flow

```text
React Browser
   | HTTPS + JSON + Bearer token
   v
ASP.NET Core API
   | Controller → Service → Repository/DbContext
   v
EF Core + Npgsql
   | parameterized SQL
   v
PostgreSQL
```

## JWT Structure

```text
BASE64URL(header) . BASE64URL(payload) . signature
```

## Authentication / Authorization Decision

```text
Token missing/invalid/expired → 401
Valid identity but insufficient permission → 403
Valid identity + permission + ownership → action executes
```

## Core PostgreSQL Pattern

```sql
CREATE TABLE products (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    stock_qty INT NOT NULL DEFAULT 0 CHECK (stock_qty >= 0)
);
```

## Safe EF Core Query

```csharp
var user = await db.Users
    .Where(u => u.Email == input)
    .SingleOrDefaultAsync();
```

# Key Definitions Table

| Term | Accurate definition | Simple meaning |
|---|---|---|
| PostgreSQL | Open-source relational DBMS supporting SQL, ACID, rich constraints and advanced data types | Main database used in the lecture |
| Primary key | Unique non-null row identifier | Row ID |
| Foreign key | Reference to a key in another table | Safe table relationship |
| Junction table | Bridge table resolving an M:N relationship | Table between two many-sides |
| 1NF | Atomic values, no repeating groups, unique rows | No lists in cells |
| 2NF | No partial dependency on part of a composite key | Depend on whole key |
| 3NF | No transitive dependency among non-key attributes | Each fact stored with its real entity |
| ORM | Maps program objects/classes to relational data | C# objects ↔ DB tables |
| Npgsql | PostgreSQL provider for .NET / EF Core | Lets EF Core talk to PostgreSQL |
| Connection pooling | Reusing prepared DB connections | Avoid reconnect cost |
| Authentication | Identity verification | Who are you? |
| Authorization | Permission checking | What may you do? |
| JWT | Signed token with header, payload and signature | Stateless identity/claim proof |
| Access token | Short-lived API credential | Sent with normal protected requests |
| Refresh token | Longer-lived credential used to obtain access tokens | Renews access |
| RBAC | Permissions assigned through roles | User gets access through role |
| Least privilege | Minimum necessary access | Only what is needed |
| SQL injection | Untrusted input becomes executable SQL | Data becomes commands |
| Parameterized query | SQL and input values sent separately | Primary SQL-injection defence |
| Problem Details | Standard structured API error format | Safe consistent error body |
| Defence in depth | Multiple independent security layers | Never trust one defence |

# Quick Revision Table

| Topic | Must remember | Pages | Exam importance |
|---|---|---:|---|
| Three-tier DB role | React → API → PostgreSQL; DB = source of truth | 7–10 | High |
| Relational basics | PK, FK, SQL, ACID | 8 | High |
| Cardinalities | 1:1, 1:N, M:N; FK on many side | 12–15 | Very High |
| Normalization | 1NF atomic, 2NF no partial, 3NF no transitive | 16–18 | Very High |
| Schema best practices | types, constraints, indexes, migrations | 19–20 | Very High |
| Secure DB connection | env vars, least privilege, SSL | 23 | Very High |
| Layered CRUD | Controller → Service → Repository → DB | 24 | Very High |
| ORM/EF Core | objects↔rows, LINQ→parameterized SQL, N+1 caution | 25–26 | High |
| DB errors/pooling | map errors safely; reuse connections | 27 | High |
| AuthN vs AuthZ | 401 vs 403 | 29 | Very High |
| Sessions vs JWT | state, scaling, revocation | 30 | High |
| JWT structure/flow | header.payload.signature; login flow | 31–32 | Very High |
| Token storage | short access, revocable refresh, avoid localStorage | 33–34 | Very High |
| RBAC | roles, permissions, least privilege, ownership | 37–39 | Very High |
| Defence in depth | validate everywhere; server authorization | 40 | Very High |
| SQL injection | parameterized queries / EF Core LINQ | 41 | Very High |
| Safe errors | Problem Details, traceId, no internals | 42 | High |
| Case study method | Requirement → Decision → Justification | 43 | Very High |

# Likely Exam Questions

1. **Explain the role of PostgreSQL in a three-tier application.**  
   **Expected answer:** It stores durable state, enforces integrity/constraints, supports transactions/concurrency and is accessed only through the API/data layer.
2. **Differentiate PK and FK.**  
   **Expected answer:** PK uniquely identifies a row; FK references another table's key to enforce a relationship.
3. **How do you implement 1:N and M:N relationships?**  
   **Expected answer:** Put the FK on the many side for 1:N; use a junction table with two FKs for M:N.
4. **Compare 1NF, 2NF and 3NF.**  
   **Expected answer:** 1NF atomic/no repeating groups; 2NF no partial dependency; 3NF no transitive dependency.
5. **Why does `order_items` store `unit_price`?**  
   **Expected answer:** It snapshots the price at purchase time so historical invoices are not changed by later product-price updates.
6. **Why use `NUMERIC` rather than FLOAT for money?**  
   **Expected answer:** NUMERIC supports exact decimal financial values rather than binary floating-point approximation.
7. **Explain the Controller–Service–Repository workflow.**  
   **Expected answer:** Controller handles HTTP, service handles business rules, repository/DbContext handles persistence.
8. **What is an ORM and what does EF Core/Npgsql provide?**  
   **Expected answer:** ORM maps objects to relational data; EF Core provides LINQ/tracking/migrations, Npgsql connects it to PostgreSQL.
9. **Differentiate authentication and authorization and state failure codes.**  
   **Expected answer:** AuthN verifies identity → 401 on failure; AuthZ checks permission after authentication → 403 on failure.
10. **Explain JWT structure and why the payload is not secret.**  
    **Expected answer:** Header, payload and signature; payload is Base64-encoded/readable, while the signature verifies integrity.
11. **Describe the JWT login/protected-request flow.**  
    **Expected answer:** Login over HTTPS → user lookup → compare password hash → issue short JWT → send Bearer token → validate signature/expiry/issuer/audience → check role/ownership.
12. **Compare access and refresh tokens.**  
    **Expected answer:** Access token is short-lived and sent to APIs; refresh token is longer-lived and used only to get new access, with rotation/revocation.
13. **Why is localStorage risky for tokens?**  
    **Expected answer:** Any injected JavaScript can read it after an XSS compromise.
14. **Why are role checks insufficient for own-resource rules?**  
    **Expected answer:** The API must compare the resource owner ID with the authenticated user ID in token claims.
15. **What is the strongest SQL-injection defence taught here?**  
    **Expected answer:** Parameterized queries or EF Core LINQ that generates parameterized SQL.
16. **How should database errors be exposed to clients?**  
    **Expected answer:** Map known failures to safe HTTP codes/Problem Details, log full internal detail only on the server and include a traceId.

# Key Terms List

- PostgreSQL
- relational database
- table / relation
- row / tuple
- column / attribute
- primary key
- foreign key
- surrogate key
- natural key
- composite key
- referential integrity
- ON DELETE RESTRICT
- CASCADE
- SET NULL
- entity
- attribute
- relationship
- cardinality
- 1:1
- 1:N
- M:N
- junction table
- normalization
- 1NF
- 2NF
- 3NF
- partial dependency
- transitive dependency
- denormalization
- OLTP
- constraint
- NOT NULL
- UNIQUE
- CHECK
- index
- EXPLAIN ANALYZE
- migration
- connection string
- environment variable
- user-secrets
- least privilege
- SSL
- CRUD
- repository
- service layer
- DbContext
- ORM
- Entity Framework Core
- Npgsql
- LINQ
- change tracking
- N+1 query
- connection pooling
- authentication
- authorization
- AuthN
- AuthZ
- 401 Unauthorized
- 403 Forbidden
- session
- JWT
- claim
- header
- payload
- signature
- access token
- refresh token
- HttpOnly
- Secure cookie
- SameSite
- XSS
- RBAC
- role
- permission
- object-level authorization
- CORS
- defence in depth
- SQL injection
- parameterized query
- FluentValidation
- Problem Details
- traceId
- OWASP

# Verification

- PDF page count checked directly: 48
- Markdown page sections checked: 48
- Exact page order preserved from Page 01 through Page 48
- Every source page represented
- Visual tables/diagrams/processes recreated where meaningful
- Source code preserved in language-tagged fenced blocks
- Major-topic exam tips, common mistakes and likely questions included

PDF pages: 48 / MD page sections: 48 ✅
