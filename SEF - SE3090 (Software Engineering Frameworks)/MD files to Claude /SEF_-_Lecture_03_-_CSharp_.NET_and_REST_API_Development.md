# SE3090 — Software Engineering Frameworks
## Lecture 03 — C#, .NET Fundamentals, ASP.NET Core and REST API Development

## Title Section

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Lecture number | Lecture 03 |
| Lecture title | C#, .NET Fundamentals, ASP.NET Core and REST API Development |
| Stack | C# 12 · .NET 8 · ASP.NET Core |
| Duration | 3 hours |
| Learning outcomes | LO2 · LO3 · LO4 |
| Year / Semester / Credits | Year 3 · Semester 1 · 4 Credits |
| Lecturer | Eishan Weerasinghe |
| Email | eishan.w@sliit.lk |
| PDF pages | 57 |

---

# Table of Contents

- [Pages 01–05 — Context, Outcomes and Roadmap](#page-01--c-net-fundamentals-aspnet-core-and-rest-api-development)
- [Pages 06–13 — Part 1: C# Programming Fundamentals](#page-06--part-1--c-programming-fundamentals)
- [Pages 14–21 — Part 2: Object-Oriented Programming](#page-14--part-2--object-oriented-programming-in-c)
- [Pages 22–27 — Part 3: .NET and ASP.NET Core](#page-22--part-3--net-and-aspnet-core)
- [Pages 28–36 — Part 4: REST API Architecture](#page-28--part-4--rest-api-architecture)
- [Pages 37–47 — Part 5: Building and Testing the API](#page-37--part-5--building-and-testing-the-api-in-aspnet-core)
- [Pages 48–54 — Part 6: Backend Best Practices](#page-48--part-6--backend-best-practices-maintainability-scalability-and-security)
- [Pages 55–57 — Summary, Preparation and References](#page-55--lecture-summary--key-takeaways)
- [Full Lecture Summary](#full-lecture-summary)
- [Important Code and Concept Snippets](#important-code-and-concept-snippets)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms List](#key-terms-list)

## Page Index
- [Page 01 — C#, .NET Fundamentals, ASP.NET Core and REST API Development](#page-01-c-net-fundamentals-asp-net-core-and-rest-api-development)
- [Page 02 — Where This Lecture Fits in SE3090](#page-02-where-this-lecture-fits-in-se3090)
- [Page 03 — Lecture Learning Outcomes](#page-03-lecture-learning-outcomes)
- [Page 04 — Why C#, .NET and ASP.NET Core Matter](#page-04-why-c-net-and-asp-net-core-matter)
- [Page 05 — Lecture Roadmap — 3 Hours](#page-05-lecture-roadmap-3-hours)
- [Page 06 — Part 1 — C# Programming Fundamentals](#page-06-part-1-c-programming-fundamentals)
- [Page 07 — The Role of C# in Modern Development](#page-07-the-role-of-c-in-modern-development)
- [Page 08 — Anatomy of a C# Program](#page-08-anatomy-of-a-c-program)
- [Page 09 — Variables, Data Types and Operators](#page-09-variables-data-types-and-operators)
- [Page 10 — Control Structures](#page-10-control-structures)
- [Page 11 — Methods and Parameters](#page-11-methods-and-parameters)
- [Page 12 — Classes and Objects — First Look](#page-12-classes-and-objects-first-look)
- [Page 13 — Checkpoint 01 — Quick Questions](#page-13-checkpoint-01-quick-questions)
- [Page 14 — Part 2 — Object-Oriented Programming in C#](#page-14-part-2-object-oriented-programming-in-c)
- [Page 15 — Constructors and Properties](#page-15-constructors-and-properties)
- [Page 16 — Encapsulation — Protecting Object State](#page-16-encapsulation-protecting-object-state)
- [Page 17 — Inheritance — Sharing Structure and Behaviour](#page-17-inheritance-sharing-structure-and-behaviour)
- [Page 18 — Polymorphism — One Interface, Many Behaviours](#page-18-polymorphism-one-interface-many-behaviours)
- [Page 19 — Abstraction and Interfaces](#page-19-abstraction-and-interfaces)
- [Page 20 — OOP in Practice — A Backend Domain Model](#page-20-oop-in-practice-a-backend-domain-model)
- [Page 21 — Checkpoint 02 — OOP Quick Questions](#page-21-checkpoint-02-oop-quick-questions)
- [Page 22 — Part 3 — .NET and ASP.NET Core](#page-22-part-3-net-and-asp-net-core)
- [Page 23 — What Is .NET? Platform, Runtime and Ecosystem](#page-23-what-is-net-platform-runtime-and-ecosystem)
- [Page 24 — .NET vs C# vs ASP.NET Core — Untangled](#page-24-net-vs-c-vs-asp-net-core-untangled)
- [Page 25 — Why ASP.NET Core for Modern Web APIs](#page-25-why-asp-net-core-for-modern-web-apis)
- [Page 26 — Dependency Injection — The Framework's Backbone](#page-26-dependency-injection-the-framework-s-backbone)
- [Page 27 — The Middleware Pipeline](#page-27-the-middleware-pipeline)
- [Page 28 — Part 4 — REST API Architecture](#page-28-part-4-rest-api-architecture)
- [Page 29 — What Is an API? What Is a Web API?](#page-29-what-is-an-api-what-is-a-web-api)
- [Page 30 — REST — The Architectural Principles](#page-30-rest-the-architectural-principles)
- [Page 31 — Resources and Endpoint Design](#page-31-resources-and-endpoint-design)
- [Page 32 — HTTP Methods — The Verbs of REST](#page-32-http-methods-the-verbs-of-rest)
- [Page 33 — HTTP Status Codes — The Response Contract](#page-33-http-status-codes-the-response-contract)
- [Page 34 — Request → Response Lifecycle, and JSON](#page-34-request-response-lifecycle-and-json)
- [Page 35 — REST API Design Best Practices](#page-35-rest-api-design-best-practices)
- [Page 36 — Checkpoint 03 — REST Design](#page-36-checkpoint-03-rest-design)
- [Page 37 — Part 5 — Building and Testing the API in ASP.NET Core](#page-37-part-5-building-and-testing-the-api-in-asp-net-core)
- [Page 38 — Clean ASP.NET Core Project Structure](#page-38-clean-asp-net-core-project-structure)
- [Page 39 — Models and DTOs — and Why They Differ](#page-39-models-and-dtos-and-why-they-differ)
- [Page 40 — Controller → Service → Model Workflow](#page-40-controller-service-model-workflow)
- [Page 41 — Controllers, Attribute Routing and Endpoint Mapping](#page-41-controllers-attribute-routing-and-endpoint-mapping)
- [Page 42 — Services and Dependency Injection in Practice](#page-42-services-and-dependency-injection-in-practice)
- [Page 43 — Reading Route, Query and Body Parameters](#page-43-reading-route-query-and-body-parameters)
- [Page 44 — Returning Proper Responses and JSON](#page-44-returning-proper-responses-and-json)
- [Page 45 — API Testing with Swagger / OpenAPI](#page-45-api-testing-with-swagger-openapi)
- [Page 46 — Testing with Postman — A Practical Workflow](#page-46-testing-with-postman-a-practical-workflow)
- [Page 47 — End-to-End: From Browser Click to JSON Response](#page-47-end-to-end-from-browser-click-to-json-response)
- [Page 48 — Part 6 — Backend Best Practices: Maintainability, Scalability and Security](#page-48-part-6-backend-best-practices-maintainability-scalability-and-security)
- [Page 49 — Layered Architecture and DI Best Practices](#page-49-layered-architecture-and-di-best-practices)
- [Page 50 — Validation, Exception Handling and Logging](#page-50-validation-exception-handling-and-logging)
- [Page 51 — Secure Configuration and Basic API Security](#page-51-secure-configuration-and-basic-api-security)
- [Page 52 — Case Study: Designing the LankaMart Backend API](#page-52-case-study-designing-the-lankamart-backend-api)
- [Page 53 — Group Activity: Design REST Endpoints](#page-53-group-activity-design-rest-endpoints)
- [Page 54 — Quick Quiz — 6 Questions](#page-54-quick-quiz-6-questions)
- [Page 55 — Lecture Summary — Key Takeaways](#page-55-lecture-summary-key-takeaways)
- [Page 56 — Learning Outcomes, Next Lecture and Preparation](#page-56-learning-outcomes-next-lecture-and-preparation)
- [Page 57 — References and Further Reading](#page-57-references-and-further-reading)

---

# Page-by-Page Lecture Notes

## Page 01 — C#, .NET Fundamentals, ASP.NET Core and REST API Development

### Original Slide Content

SLIIT  |  FACULTY OF COMPUTING  |  DEPARTMENT OF SOFTWARE ENGINEERING

Lecture 03

C#, .NET Fundamentals, ASP.NET Core

and REST API Development

Stack: C# 12 · .NET 8 · ASP.NET Core      Duration: 3 hours      Learning outcomes: LO2 · LO3 · LO4

Year 3  •  Semester 1  •  4 Credits

Lecturer: Eishan Weerasinghe   •   eishan.w@sliit.lk

SLIIT |  Faculty of Computing

### Visual Explanation

Title slide using the SE3090 navy/orange visual theme. It identifies the stack, duration, learning outcomes, academic level, lecturer and contact details.

### Student-Friendly Explanation

The lecture builds one complete backend mental model: C# language → .NET platform → ASP.NET Core framework → REST contract → layered implementation and secure operation.

---

## Page 02 — Where This Lecture Fits in SE3090

### Original Slide Content

Where This Lecture Fits in SE3090

L01

L02

TODAY

Next

Framework

fundamentals & trends

Advanced React

frontend

C#, .NET, ASP.NET Core

& REST APIs

Database, AuthN/AuthZ

& integration

- Module content areas 2(c)–2(e): REST communication, framework-based backend development, server-side applications

- The API tier you used as a 'black box' in the database lecture becomes today's subject

- Directly assessed in labs, the mini hackathon and the Main Assignment backend (25%)

- Foundation for CI/CD, deployment and AI-assisted backend development in later lectures

### Recreated Table

| Stage | Topic |
|---|---|
| L01 | Framework fundamentals & trends |
| L02 | Advanced React frontend |
| Today | C#, .NET, ASP.NET Core & REST APIs |
| Next | Database, AuthN/AuthZ & integration |

### Visual Explanation

A four-stage horizontal sequence positions today's backend/API lecture between React frontend work and the next database/authentication/integration topic.

### Student-Friendly Explanation

This is the backend/API bridge between the React frontend and the coming database, authentication and integration work.

---

## Page 03 — Lecture Learning Outcomes

### Original Slide Content

Lecture Learning Outcomes

Apply suitable frameworks & tools

LO2

Build a working ASP.NET Core REST API using C# OOP, controllers, services, models and routing.

Use best practices for integration & quality

LO3

Structure a maintainable layered backend with DI, validation, exception handling, logging and tested

endpoints (Swagger/Postman).

Select & justify approaches

LO4

Justify the choice of .NET/ASP.NET Core and REST design decisions (resources, methods, status codes) for

project requirements.

### Recreated Table

| LO | Focus | Lecture evidence |
|---|---|---|
| LO2 | Apply suitable frameworks & tools | Build an ASP.NET Core REST API using C# OOP, controllers, services, models and routing |
| LO3 | Use best practices for integration & quality | Layering, DI, validation, exception handling, logging and endpoint testing |
| LO4 | Select & justify approaches | Justify .NET/ASP.NET Core and REST decisions |

### Visual Explanation

Three stacked outcome cards connect LO2, LO3 and LO4 to concrete backend skills.

### Student-Friendly Explanation

LO2 is about building, LO3 is about maintainable quality, and LO4 is about defending technical choices.

---

## Page 04 — Why C#, .NET and ASP.NET Core Matter

### Original Slide Content

Why C#, .NET and ASP.NET Core Matter

Industry footprint

Performance

Enterprise systems, banking, government, healthcare,

games (Unity) and cloud services run on .NET — strong

demand in Sri Lanka and globally.

ASP.NET Core consistently ranks among the fastest

mainstream web frameworks (TechEmpower

benchmarks) — millions of requests/sec on Kestrel.

One language, many targets

Modern & open source

C# covers web APIs, desktop, mobile (MAUI), games,

IoT and cloud functions — skills transfer across

domains.

Cross-platform (Windows/Linux/macOS), MIT-licensed,

6-monthly releases, strong typing + rich tooling (Visual

Studio, Rider, VS Code).

### Recreated Table

| Reason | Meaning |
|---|---|
| Industry footprint | Used in enterprise, banking, government, healthcare, Unity and cloud services |
| Performance | Kestrel and async I/O support high-performance APIs |
| One language, many targets | C# covers APIs, desktop, MAUI, games, IoT and cloud functions |
| Modern & open source | Cross-platform, MIT-licensed, strongly typed and well tooled |

### Visual Explanation

Four comparison cards present industry footprint, performance, multi-target use and open-source/tooling benefits.

### Student-Friendly Explanation

The choice of ASP.NET Core is justified through project and industry criteria rather than popularity alone.

---

## Page 05 — Lecture Roadmap — 3 Hours

### Original Slide Content

Lecture Roadmap – 3 Hours

C# fundamentals

~30 min

Syntax · types · control flow · methods · classes

OOP in C#

~35 min

Encapsulation · inheritance · polymorphism · abstraction · interfaces

.NET & ASP.NET Core

~25 min

Platform · runtime · DI · middleware pipeline

REST API architecture

~35 min

Resources · HTTP methods · status codes · JSON · lifecycle

Controllers, services, models & routing

~25 min

MVC-style structure · DTOs · attribute routing

Requests, responses & testing + best practices

~30 min

Binding · responses · Swagger · Postman · layered design

### Recreated Table

| Part | Topic | Time |
|---:|---|---:|
| 1 | C# fundamentals | ~30 min |
| 2 | OOP in C# | ~35 min |
| 3 | .NET & ASP.NET Core | ~25 min |
| 4 | REST API architecture | ~35 min |
| 5 | Controllers, services, models & routing | ~25 min |
| 6 | Requests, responses, testing and best practices | ~30 min |

### Visual Explanation

A six-row roadmap distributes the three-hour lecture across C#, OOP, .NET, REST, API construction and quality practices.

### Student-Friendly Explanation

The roadmap shows that REST design and implementation receive as much attention as C# syntax.

---

### Major Topic Exam Section — Lecture Context and Framework Choice

**Exam Tip:** Justify ASP.NET Core using requirements such as performance, cross-platform deployment, built-in services, LTS support and tooling.

**Common Mistake:** Do not describe C#, .NET and ASP.NET Core as the same thing.

**Likely exam question 1:** Distinguish C#, .NET and ASP.NET Core.  
**Expected answer:** C# is the language, .NET is the runtime/platform and ASP.NET Core is the web framework built on .NET.

**Likely exam question 2:** Give two reasons ASP.NET Core is suitable for enterprise APIs.  
**Expected answer:** Examples include performance, cross-platform/container support, built-in DI/middleware/logging, LTS security support and mature tooling.

---

## Page 06 — Part 1 — C# Programming Fundamentals

### Original Slide Content

P A R T  1

C# Programming Fundamentals

- Role of C# in modern software development

- Program structure, variables, types and operators

- Control structures and methods

- First look at classes and objects SE3090 – Software Engineering Frameworks  |  Lecture 04

### Visual Explanation

Part-divider slide introducing C# fundamentals. It uses a navy background and four scope bullets.

### Student-Friendly Explanation

This page develops the C# language skills needed to read and write backend code.

> **Source note:** The footer on this part-divider slide reads `SE3090 – Software Engineering Frameworks | Lecture 04`. This wording is preserved from the uploaded PDF even though the deck title identifies it as Lecture 03.

---

## Page 07 — The Role of C# in Modern Development

### Original Slide Content

The Role of C# in Modern Development

- General-purpose, statically typed, object-oriented language (2000, Microsoft; now open standard) C# vs languages you know

  - Compiled to IL (Intermediate Language), executed by the .NET runtime (JIT)

- Static typing = errors caught at compile time, great IDE vs JavaScript: compile-time types instead of runtime surprises; classes are real, not prototypes support, safer refactoring

- Modern features: async/await, LINQ, pattern matching, records, nullable reference types vs Java: very similar feel; C# adds properties, LINQ, async/await ergonomics, value types

- Where you'll meet it:

  - Web APIs & microservices (ASP.NET Core) — our focus vs Python: more ceremony, but far faster and safer for large team codebases

  - Enterprise/desktop apps, Azure cloud functions, Unity games, MAUI mobile

### Recreated Table

| Compared with | C# difference |
|---|---|
| JavaScript | Compile-time types; class-based rather than prototype-based |
| Java | Similar feel; C# adds properties, LINQ, async/await ergonomics and value types |
| Python | More ceremony, but faster and safer for large-team codebases |

### Visual Explanation

A two-column layout combines C# characteristics with comparisons against JavaScript, Java and Python.

### Student-Friendly Explanation

This page develops the C# language skills needed to read and write backend code.

### Definitions

**Definition: Static typing** — Types are checked at compile time.

**Simple meaning:** Many type errors are found before the application runs.

---

## Page 08 — Anatomy of a C# Program

### Original Slide Content

Anatomy of a C# Program

Building blocks

-  using — imports a namespace

-  namespace — logical grouping; mirrors folder structure

-  class — the unit of code; (almost) everything lives in one

-  Main / top-level statements — the entry point

-  Statements end with ; — blocks use { } Try it:  dotnet new console → dotnet run.  ASP.NET Core's Program.cs uses exactly this top-level style.

### Code / Command Examples

**Program.cs — modern and classic entry points**

```csharp
// Program.cs — modern top-level statements
using System;                  // import namespace

Console.WriteLine("Hello, SE3090!");

// Classic explicit form (same program)
namespace LankaMart.Api;       // organises code

public class Program {
    public static void Main(string[] args) {
        Console.WriteLine("Hello, SE3090!");
    }
}
```

**Try it**

```bash
dotnet new console
dotnet run
```

### Visual Explanation

A dark code panel is paired with a building-block checklist. The slide contrasts top-level statements with the classic explicit `Main` form.

### Student-Friendly Explanation

This page develops the C# language skills needed to read and write backend code.

### Definitions

**Definition: Namespace** — A logical grouping of related C# types.

**Simple meaning:** It organizes code and commonly mirrors folders.

---

## Page 09 — Variables, Data Types and Operators

### Original Slide Content

Variables, Data Types and Operators

Key points

-  decimal for money — never double (rounding errors)

-  var = inference, still strongly typed

-  string? — nullable reference types make null explicit

-  $"..." string interpolation

-  Operators as expected: + - * / %, == != < >, && || ! Backend link: these types map directly to your PostgreSQL columns — decimal ↔ NUMERIC, int ↔ INT, string ↔ TEXT, bool ↔ BOOLEAN. Choosing the C# type IS a schema decision.

### Code / Command Examples

**Variables, types, operators and interpolation**

```csharp
int qty = 3;                  // whole numbers
double rating = 4.7;          // floating point
decimal price = 2500.00m;     // money — exact!
bool inStock = true;
string name = "Wireless Mouse";
char grade = 'A';

var total = price * qty;      // type inferred: decimal
string? note = null;          // nullable reference

string label =
    $"{name}: {total:C} ({(inStock ? "in" : "out")})";
```

### Visual Explanation

A code panel demonstrates types and interpolation; a key-points panel emphasizes money, type inference and nullable references.

### Student-Friendly Explanation

This page develops the C# language skills needed to read and write backend code.

### Definitions

**Definition: Nullable reference type** — A reference type explicitly marked as permitted to contain `null`.

**Simple meaning:** `string?` makes possible absence visible to the compiler.

---

## Page 10 — Control Structures

### Original Slide Content

Control Structures

Guard clauses (validate-and-return-early) keep backend methods flat and readable — you'll see them in every controller and service today.

### Code / Command Examples

**Control structures and LINQ**

```csharp
// if / else
if (qty <= 0)
    return "Quantity must be positive";
else if (qty > stock)
    return "Not enough stock";

// switch expression (modern C#)
var fee = method switch {
    "card" => 0m,
    "cod"  => 250m,
    _      => throw new ArgumentException()
};

// loops
for (int i = 0; i < items.Count; i++)
    Console.WriteLine(items[i]);

foreach (var item in items)    // preferred
    total += item.Price * item.Qty;

while (retries < 3 && !ok)
    ok = TryConnect(ref retries);

// LINQ — declarative alternative
var total = items.Sum(i => i.Price * i.Qty);
```

### Visual Explanation

Two code panels divide conditional expressions from loops/LINQ. A bottom callout emphasizes guard clauses.

### Student-Friendly Explanation

This page develops the C# language skills needed to read and write backend code.

---

## Page 11 — Methods and Parameters

### Original Slide Content

Methods and Parameters

Reading the signature

-  public — visible outside the class

-  decimal — return type (void = none)

-  Parameters are typed; optional ones take defaults

-  PascalCase method names, verbs first (CalculateTotal, GetById)

-  One method = one job — small methods are testable methods

### Code / Command Examples

**Methods and parameters**

```csharp
// access  return-type  Name(parameters)
public decimal CalculateTotal(
    List<OrderItem> items,
    decimal discountPct = 0)   // optional param
{
    if (items is null || items.Count == 0)
        throw new ArgumentException("Empty order");

    var subtotal = items.Sum(i => i.Price * i.Qty);
    return subtotal * (1 - discountPct / 100m);
}

// expression-bodied — for one-liners
public bool IsInStock(Product p) => p.StockQty > 0;
```

### Visual Explanation

A method example is paired with a guide for reading access, return type, parameters and naming.

### Student-Friendly Explanation

This page develops the C# language skills needed to read and write backend code.

---

## Page 12 — Classes and Objects — First Look

### Original Slide Content

Classes and Objects — First Look

Class vs object

-  Class = blueprint (the Product design)

-  Object = a concrete instance made with new

-  Properties hold state; methods provide behaviour

-  new creates an instance; object initializer { } sets properties

-  This Product maps 1:1 to the products table from Lecture 03

### Code / Command Examples

**Class and object example**

```csharp
public class Product
{
    // properties — data with controlled access
    public long Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
    public int StockQty { get; set; }

    // behaviour — methods that use the data
    public bool CanFulfil(int qty) => StockQty >= qty;
}

var mouse = new Product { Name = "Mouse", Price = 2500m };
bool ok = mouse.CanFulfil(2);   // object in action
```

### Visual Explanation

A class code panel and a class-vs-object explanation show blueprint, instance, state and behaviour.

### Student-Friendly Explanation

This page develops the C# language skills needed to read and write backend code.

### Definitions

**Definition: Class** — A blueprint defining state and behaviour.

**Definition: Object** — A concrete instance created from a class.

---

## Page 13 — Checkpoint 01 — Quick Questions

### Original Slide Content

Checkpoint 01 – Quick Questions

Answer with your neighbour — 4 minutes

Q1

Why must an order total use decimal rather than double? What could go wrong in production?

Q2

var x = 10; x = "ten";  — does this compile? What does that tell you about var?

Q3

Rewrite mentally with a guard clause:  if (user != null) { if (user.IsActive) { /* 30 lines */ } }

Q4

In one sentence: what is the difference between the Product class and the mouse object?

### Visual Explanation

Four question cards form Checkpoint 01.

### Student-Friendly Explanation

Expected ideas: use `decimal` for exact money; `var` remains statically typed; guard clauses reject invalid/null/inactive cases early; a class is a blueprint and an object is an instance.

---

### Major Topic Exam Section — C# Fundamentals

**Exam Tip:** Know program structure, common types, `decimal`, nullable references, guard clauses, methods, classes and objects.

**Common Mistake:** `var` is type inference, not dynamic typing.

**Likely exam question 1:** Why should money use `decimal` rather than `double`?  
**Expected answer:** `decimal` represents base-10 values more exactly and avoids binary floating-point rounding errors in financial calculations.

**Likely exam question 2:** Differentiate a class and an object.  
**Expected answer:** A class is a blueprint; an object is a concrete instance created from it.

---

## Page 14 — Part 2 — Object-Oriented Programming in C#

### Original Slide Content

P A R T  2

Object-Oriented Programming in C#

- Constructors and properties

- Encapsulation · inheritance · polymorphism · abstraction

- Interfaces — the backbone of ASP.NET Core design

- Practical OOP for backend models and services SE3090 – Software Engineering Frameworks  |  Lecture 04

### Visual Explanation

Part-divider slide introducing object-oriented programming in C#.

### Student-Friendly Explanation

This page connects an OOP principle to safe, testable backend domain models and services.

> **Source note:** The footer on this part-divider slide reads `SE3090 – Software Engineering Frameworks | Lecture 04`. This wording is preserved from the uploaded PDF even though the deck title identifies it as Lecture 03.

---

## Page 15 — Constructors and Properties

### Original Slide Content

Constructors and Properties

Why it matters

-  Constructor = the object's front door: no Order exists without a valid customer

-  Properties control WHO can change WHAT (get; private set;)

-  An invalid state becomes unrepresentable — fewer bugs by design

-  UtcNow default: timestamps in UTC, echoing Lecture 03

### Code / Command Examples

**Constructor and controlled properties**

```csharp
public class Order
{
    public long Id { get; private set; }      // read-only outside
    public long CustomerId { get; }           // immutable
    public string Status { get; private set; }
    public DateTime CreatedAt { get; } = DateTime.UtcNow;

    // constructor — guarantees a valid object
    public Order(long customerId)
    {
        if (customerId <= 0)
            throw new ArgumentException("Invalid customer");

        CustomerId = customerId;
        Status = "PENDING";
    }
}
```

### Visual Explanation

Constructor code is paired with a 'Why it matters' panel about valid objects and controlled state.

### Student-Friendly Explanation

This page connects an OOP principle to safe, testable backend domain models and services.

### Definitions

**Definition: Constructor** — A member that initializes a new object and can enforce valid initial state.

---

## Page 16 — Encapsulation — Protecting Object State

### Original Slide Content

Encapsulation — Protecting Object State

The principle

-  State is private; behaviour is public

-  All changes pass through methods that enforce the rules

-  Impossible to set _balance = - 1,000,000 from outside

-  Access modifiers: public · private · protected · internal

-  Rule of thumb: start private, open up only with reason Backend reality: encapsulation is why business rules live in services/domain objects — not spread across controllers that poke at raw data.

### Code / Command Examples

**Encapsulated bank account**

```csharp
public class BankAccount
{
    private decimal _balance;          // hidden state

    public decimal Balance => _balance;  // read-only view

    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException();
        _balance += amount;
    }

    public bool Withdraw(decimal amount) =>
        amount > 0 && amount <= _balance
            ? (_balance -= amount) >= 0 : false;
}
```

### Visual Explanation

The code hides `_balance` and exposes safe methods; the right panel lists encapsulation rules.

### Student-Friendly Explanation

This page connects an OOP principle to safe, testable backend domain models and services.

### Definitions

**Definition: Encapsulation** — Hiding internal state and permitting controlled change through public behaviour.

---

## Page 17 — Inheritance — Sharing Structure and Behaviour

### Original Slide Content

Inheritance — Sharing Structure and Behaviour

Mechanics

-  : User — Staff IS-A User; inherits all members

-  virtual — base allows overriding

-  override — derived replaces behaviour

-  base.Member reaches the parent

-  C# = single inheritance (one base class only) Use with care: prefer inheritance for true IS-A relationships (Staff is a User). For sharing capabilities, prefer composition or interfaces — "composition over inheritance".

### Code / Command Examples

**Inheritance and overriding**

```csharp
public class User                       // base class
{
    public long Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public virtual string Describe() => $"User {Name}";
}

public class Staff : User               // derived class
{
    public string Branch { get; set; } = "";
    public override string Describe()
        => $"Staff {Name} ({Branch})";
}
```

### Visual Explanation

The code shows base and derived classes; the side panel explains `virtual`, `override`, `base` and single inheritance.

### Student-Friendly Explanation

This page connects an OOP principle to safe, testable backend domain models and services.

### Definitions

**Definition: Inheritance** — A mechanism where a derived class receives accessible members from a base class.

---

## Page 18 — Polymorphism — One Interface, Many Behaviours

### Original Slide Content

Polymorphism — One Interface, Many Behaviours

What just happened

-  The variable's type is User; the OBJECT decides which Describe runs (runtime dispatch)

-  Calling code stays generic — new user types need zero changes here

-  This is the Open/Closed Principle: open for extension, closed for modification

-  Same idea powers ASP.NET Core: the framework calls YOUR controller methods polymorphically

### Code / Command Examples

**Runtime polymorphism**

```csharp
List<User> users = new()
{
    new User  { Name = "Amal"  },
    new Staff { Name = "Nadia", Branch = "Kandy" },
    new Admin { Name = "Ruwan" }
};

foreach (var u in users)
    Console.WriteLine(u.Describe());

// Output — same call, three behaviours:
// User Amal
// Staff Nadia (Kandy)
// Admin Ruwan [full access]
```

### Visual Explanation

A list of mixed user types calls the same method; the side panel explains runtime dispatch and Open/Closed Principle.

### Student-Friendly Explanation

This page connects an OOP principle to safe, testable backend domain models and services.

### Definitions

**Definition: Polymorphism** — The same method call producing behaviour based on the runtime object type.

---

## Page 19 — Abstraction and Interfaces

### Original Slide Content

Abstraction and Interfaces

Interface vs abstract class

-  Interface: contract only; a class can implement MANY

-  Abstract class: partial implementation + contract; single inheritance

-  Naming: IName (IEmailSender, IProductService) Why backends are built on interfaces Swap implementations (SMTP → SendGrid) without touching consumers · plug in fakes for unit tests · ASP.NET Core dependency injection registers and resolves BY INTERFACE — this single concept unlocks the next part of the lecture.

### Code / Command Examples

**Interfaces and interchangeable implementations**

```csharp
// interface — a pure contract, no implementation
public interface IEmailSender
{
    Task SendAsync(string to, string subject, string body);
}

public class SmtpEmailSender : IEmailSender { ... }
public class FakeEmailSender : IEmailSender { ... } // tests

// consumers depend on the CONTRACT, not a class:
public class OrderService(IEmailSender email) { ... }
```

### Visual Explanation

Interface code is paired with an interface-vs-abstract-class comparison and a backend DI callout.

### Student-Friendly Explanation

This page connects an OOP principle to safe, testable backend domain models and services.

### Definitions

**Definition: Interface** — A contract that specifies required members without binding consumers to one implementation.

**Definition: Abstraction** — Exposing essential behaviour while hiding implementation details.

---

## Page 20 — OOP in Practice — A Backend Domain Model

### Original Slide Content

OOP in Practice — A Backend Domain Model

Spot all four pillars

-  Encapsulation: _items private, rules in AddItem

-  Abstraction: callers see AddItem/Confirm, not list mechanics

-  Computed property: Total derives from items — never stored stale

-  Snapshot price captured (p.Price) — Lecture 03's unit_price rule, now in code!

-  Polymorphism & inheritance arrive via EF Core & controllers

### Code / Command Examples

**Backend domain model**

```csharp
public class Order
{
    private readonly List<OrderItem> _items = new();
    public IReadOnlyList<OrderItem> Items => _items;
    public string Status { get; private set; } = "PENDING";
    public decimal Total => _items.Sum(i => i.LineTotal);

    public void AddItem(Product p, int qty)
    {
        if (Status != "PENDING")
            throw new InvalidOperationException("Order locked");

        if (!p.CanFulfil(qty))
            throw new InvalidOperationException("No stock");

        _items.Add(new OrderItem(p.Id, qty, p.Price));
    }

    public void Confirm() => Status = "CONFIRMED";
}
```

### Visual Explanation

A domain model code panel is annotated with encapsulation, abstraction, computed state and snapshot-price observations.

### Student-Friendly Explanation

This page connects an OOP principle to safe, testable backend domain models and services.

---

## Page 21 — Checkpoint 02 — OOP Quick Questions

### Original Slide Content

Checkpoint 02 – OOP Quick Questions

Pairs — 4 minutes, then we discuss

Q1

User u = new Admin(); u.Describe();  — whose Describe runs, and what is this mechanism called?

Q2

A teammate makes Order.Status a public { get; set; }. What bug becomes possible that was impossible before?

Q3

PaymentService needs card, cash and bank-transfer handling that can grow. Interface or abstract class for the payment types —

and why?

Q4

True or false: 'Inheritance is the main tool for code reuse in modern backends.' Defend your answer.

### Visual Explanation

Four OOP question cards form Checkpoint 02.

### Student-Friendly Explanation

Expected ideas: `Admin.Describe()` runs through runtime polymorphism; a public setter permits invalid status changes; interfaces suit interchangeable payment strategies; modern backends favour composition/interfaces over inheritance for reuse.

---

### Major Topic Exam Section — Object-Oriented Programming

**Exam Tip:** Explain each pillar using backend consequences: valid state, controlled change, interchangeable implementations and generic calling code.

**Common Mistake:** Inheritance is not the default reuse mechanism; prefer composition or interfaces unless the relationship is a true IS-A relationship.

**Likely exam question 1:** How does encapsulation prevent invalid state?  
**Expected answer:** State is private or has restricted setters, and all changes pass through methods/constructors that enforce rules.

**Likely exam question 2:** Why are interfaces important to ASP.NET Core?  
**Expected answer:** They support loose coupling, DI, implementation swapping and test fakes.

---

## Page 22 — Part 3 — .NET and ASP.NET Core

### Original Slide Content

P A R T  3

.NET and ASP.NET Core

- What .NET is: platform, runtime, libraries, CLI

- .NET vs C# vs ASP.NET Core — untangled

- Why ASP.NET Core for modern web APIs

- Dependency injection & the middleware pipeline SE3090 – Software Engineering Frameworks  |  Lecture 04

### Visual Explanation

Part-divider slide introducing .NET and ASP.NET Core.

### Student-Friendly Explanation

This page explains how the .NET platform and ASP.NET Core framework execute and organize backend applications.

> **Source note:** The footer on this part-divider slide reads `SE3090 – Software Engineering Frameworks | Lecture 04`. This wording is preserved from the uploaded PDF even though the deck title identifies it as Lecture 03.

---

## Page 23 — What Is .NET? Platform, Runtime and Ecosystem

### Original Slide Content

What is .NET? Platform, Runtime and Ecosystem

Plus the tooling

Your application

LankaMart.Api — your C# code

-  dotnet CLI: new, run, build, test, publish

-  NuGet: package manager (like npm) Frameworks ASP.NET Core (web) · MAUI (mobile) · Worker services · Blazor

-  IDEs: Visual Studio, Rider, VS Code Base Class Library (BCL) Collections · LINQ · IO · networking · JSON — batteries included

-  .NET 8 = current LTS (3-yr support) Runtime (CLR) JIT compilation · garbage collection · type safety · async scheduling Operating system Windows · Linux · macOS — one codebase, all of them A development platform: a runtime that executes your code + a huge standard library + tooling to build and run it.

### Recreated Table

| Layer | Contents |
|---|---|
| Application | LankaMart.Api — C# code |
| Frameworks | ASP.NET Core, MAUI, Worker Services, Blazor |
| Base Class Library | Collections, LINQ, I/O, networking, JSON |
| Runtime (CLR) | JIT, garbage collection, type safety, async scheduling |
| Operating system | Windows, Linux, macOS |

### Visual Explanation

A layered platform diagram places application code above frameworks, BCL, CLR and operating systems, with tooling at the side.

### Student-Friendly Explanation

This page explains how the .NET platform and ASP.NET Core framework execute and organize backend applications.

### Definitions

**Definition: .NET** — A cross-platform development platform containing the CLR, BCL and tooling.

**Definition: CLR** — The runtime that executes .NET code and provides JIT, garbage collection and type safety.

---

## Page 24 — .NET vs C# vs ASP.NET Core — Untangled

### Original Slide Content

.NET vs C# vs ASP.NET Core — Untangled

C#

.NET

ASP.NET Core

The language

The platform

The web framework

  - Built ON .NET for web apps & APIs

  - Syntax, types, OOP — what you WRITE

  - Runtime (CLR) + libraries (BCL) + tools

  - Routing, controllers, DI, middleware,

  - Compiles to IL

  - WHERE your code runs Kestrel

  - Other .NET languages exist (F#, VB)

  - Cross-platform, open source

  - What we use to SERVE HTTP The language you speak The country and its roads A delivery company using those roads Analogy:  C# is to .NET what JavaScript is to Node.js; ASP.NET Core is the Express/NestJS of that world — language → platform → web framework.

-  You write C#, which runs on .NET, using ASP.NET Core to handle the web part

### Recreated Table

| Technology | Role | Key idea |
|---|---|---|
| C# | Language | What you write; compiles to IL |
| .NET | Platform | CLR, BCL and tools; where code runs |
| ASP.NET Core | Web framework | Routing, controllers, DI, middleware and Kestrel for HTTP |

### Visual Explanation

Three cards distinguish language, platform and web framework, followed by a road/delivery-company analogy.

### Student-Friendly Explanation

This page explains how the .NET platform and ASP.NET Core framework execute and organize backend applications.

### Definitions

**Definition: ASP.NET Core** — The .NET web framework used to build web applications and HTTP APIs.

---

## Page 25 — Why ASP.NET Core for Modern Web APIs

### Original Slide Content

Why ASP.NET Core for Modern Web APIs

Fast by default

Cross-platform & container-ready

Kestrel + async I/O top the TechEmpower benchmarks

among mainstream frameworks; async/await is

idiomatic, not bolted on.

Develop on Windows/macOS, deploy to Linux Docker

containers — the standard cloud path (Azure, AWS).

Batteries included

Enterprise-grade & supported

Routing, model binding, validation, DI container,

configuration, logging, auth, OpenAPI — in the

framework, not 30 npm packages.

LTS releases, security patches, massive ecosystem,

first-class tooling — safe choice to justify for serious

systems (LO4).

### Recreated Table

| Strength | Source explanation |
|---|---|
| Fast by default | Kestrel and idiomatic async I/O |
| Cross-platform and container-ready | Develop on Windows/macOS and deploy to Linux containers |
| Batteries included | Routing, binding, validation, DI, config, logging, auth and OpenAPI |
| Enterprise-grade and supported | LTS, patches, ecosystem and first-class tooling |

### Visual Explanation

Four cards justify ASP.NET Core through performance, containers, built-in features and enterprise support.

### Student-Friendly Explanation

This page explains how the .NET platform and ASP.NET Core framework execute and organize backend applications.

---

## Page 26 — Dependency Injection — The Framework's Backbone

### Original Slide Content

Dependency Injection (DI) — The Framework's

Backbone

Lifetimes

-  Singleton — one instance forever (config, caches)

-  Scoped — one per HTTP request (services, DbContext)

-  Transient — new every time (lightweight, stateless) Why: classes declare WHAT they need (interfaces); the container decides WHICH implementation and WHEN to create it. Result: loose coupling, easy testing (inject fakes), and one place to change wiring. This is 'Inversion of Control' — you don't new your dependencies; they are handed to you.

### Code / Command Examples

**DI registration and constructor injection**

```csharp
// 1. Register (Program.cs) — interface → implementation
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IEmailSender, SmtpEmailSender>();
builder.Services.AddDbContext<AppDbContext>(...);

// 2. Request (constructor) — the container injects
public class ProductsController(IProductService svc)
    : ControllerBase
{
    [HttpGet]
    public Task<List<ProductDto>> GetAll()
        => svc.GetAllAsync();   // svc arrived automatically
}
```

### Recreated Table

| DI lifetime | Instance scope | Typical use |
|---|---|---|
| Singleton | One instance for the application lifetime | Configuration, caches |
| Scoped | One instance per HTTP request | Services, DbContext |
| Transient | New instance every resolution | Lightweight stateless services |

### Visual Explanation

Registration and constructor-injection code are paired with a three-lifetime comparison.

### Student-Friendly Explanation

This page explains how the .NET platform and ASP.NET Core framework execute and organize backend applications.

### Definitions

**Definition: Dependency Injection** — Supplying dependencies from a container instead of constructing them inside the consumer.

**Definition: Inversion of Control** — The framework controls dependency creation and application lifecycle decisions.

---

## Page 27 — The Middleware Pipeline

### Original Slide Content

The Middleware Pipeline

Request →

Exception handler

HTTPS redirect

CORS

Authentication

Authorization

Endpoint (controller)

← Response (back through the same chain)

Mental model

-  Each middleware can inspect, modify, short-circuit, or pass along

-  401 from JWT middleware = a short-circuit — your controller never runs

-  Order matters: AuthN must precede AuthZ; exception handler wraps everything (first)

### Code / Command Examples

**Program.cs middleware order**

```csharp
// Program.cs — order matters!
app.UseExceptionHandler("/error");
app.UseHttpsRedirection();
app.UseCors("Frontend");
app.UseAuthentication();   // who are you?
app.UseAuthorization();    // may you?
app.MapControllers();
```

### Visual Explanation

A left-to-right middleware chain shows request processing and response travel back through the same pipeline.

### Student-Friendly Explanation

This page explains how the .NET platform and ASP.NET Core framework execute and organize backend applications.

### Definitions

**Definition: Middleware** — A component in the HTTP pipeline that can inspect, modify, short-circuit or pass a request/response.

---

### Major Topic Exam Section — .NET, ASP.NET Core, DI and Middleware

**Exam Tip:** Memorize DI lifetimes and the middleware order rule.

**Common Mistake:** Authentication and authorization are not interchangeable; AuthN identifies the caller and must run before AuthZ checks permissions.

**Likely exam question 1:** Compare Singleton, Scoped and Transient lifetimes.  
**Expected answer:** Singleton is one per app, Scoped is one per HTTP request and Transient is new each resolution.

**Likely exam question 2:** Why does middleware order matter?  
**Expected answer:** Each component wraps or passes to the next; incorrect order can bypass required behaviour or cause authorization/error handling to fail.

---

## Page 28 — Part 4 — REST API Architecture

### Original Slide Content

P A R T  4

REST API Architecture

- What an API is; what makes one RESTful

- Resources, endpoints and HTTP methods

- Status codes and the request/response lifecycle

- JSON and REST design best practices SE3090 – Software Engineering Frameworks  |  Lecture 04

### Visual Explanation

Part-divider slide introducing REST API architecture.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

> **Source note:** The footer on this part-divider slide reads `SE3090 – Software Engineering Frameworks | Lecture 04`. This wording is preserved from the uploaded PDF even though the deck title identifies it as Lecture 03.

---

## Page 29 — What Is an API? What Is a Web API?

### Original Slide Content

What is an API? What is a Web API?

- API = Application Programming Interface — a contract for software to talk to software

  - You have used APIs all day: Console.WriteLine is the BCL's API; React app API React hooks are React's API

- A Web API exposes that contract over HTTP GET /api/products

  - Client sends a request → server returns a response (usually 200 OK + JSON JSON)

- Why web APIs power full-stack systems:

  - One backend serves web, mobile and partner integrations Restaurant analogy

  - Frontend and backend evolve and deploy independently

  - Clear security boundary (the only door to your data) The menu is the API contract; the waiter carries requests and responses (HTTP); the kitchen is your service + database. Diners never enter the kitchen — encapsulation at system scale.

### Visual Explanation

A React app ↔ API diagram shows a GET request and 200 JSON response; a restaurant analogy explains contracts and encapsulation.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

### Definitions

**Definition: API** — A contract allowing software components to communicate.

**Definition: Web API** — An API exposed over HTTP, commonly using JSON.

---

## Page 30 — REST — The Architectural Principles

### Original Slide Content

REST — The Architectural Principles

Client–server

Stateless

Uniform interface

Every request carries ALL context (incl. the

JWT). No server session memory between

calls.

Resources identified by URLs; manipulated via

standard HTTP methods; self-descriptive

messages.

UI concerns separated from data/logic

concerns; each evolves independently.

Resource-oriented

Cacheable

Layered system

Clients can't tell if they talk to the API, a

gateway, or a load balancer — layers are

invisible.

Model the domain as nouns (products,

orders) — not actions (getProduct, doOrder).

Responses declare cacheability — GETs can

be cached by browsers/CDNs for speed.

REST (Roy Fielding, 2000) is a STYLE, not a protocol or standard — 'RESTful' means following these constraints. Statelessness is the one you

must never violate: it is what lets APIs scale horizontally.

### Recreated Table

| REST constraint | Meaning |
|---|---|
| Client–server | Separate UI concerns from data and logic |
| Stateless | Every request carries all required context |
| Uniform interface | URLs identify resources; standard methods manipulate them |
| Resource-oriented | Model domain nouns, not action-style URLs |
| Cacheable | Responses state whether they may be cached |
| Layered system | Gateways/load balancers remain invisible to clients |

### Visual Explanation

Six cards summarize the REST constraints.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

### Definitions

**Definition: REST** — An architectural style for distributed systems based on constraints such as statelessness and uniform interfaces.

---

## Page 31 — Resources and Endpoint Design

### Original Slide Content

Resources and Endpoint Design

Rule

✓Good

✗Avoid

Nouns, not verbs — the METHOD is the verb

GET /api/products

GET /api/getAllProducts

Plural collection names

/api/products, /api/orders

/api/product, /api/orderList

Identify items by id in the path

/api/products/42

/api/products?id=42 (for identity)

Nest ONLY true ownership, max 1 level

/api/orders/7/items

/api/customers/3/orders/7/items/2

Filters/paging via query string

/api/products?category=it&page=2

/api/products/it/page2

Consistent casing & style

kebab-or-lowercase, no trailing /

/api/ProductItems/, mixedStyles

A resource is a domain noun (usually an entity or aggregate from your ER diagram). The endpoint set for LankaMart almost writes itself from the

Lecture 03 schema: /products, /categories, /orders, /orders/{id}/items, /auth/login.

### Recreated Table

| Rule | Good | Avoid |
|---|---|---|
| Nouns, not verbs | `GET /api/products` | `GET /api/getAllProducts` |
| Plural collection names | `/api/products`, `/api/orders` | `/api/product`, `/api/orderList` |
| Identity in path | `/api/products/42` | `/api/products?id=42` for identity |
| Nest only true ownership, max one level | `/api/orders/7/items` | `/api/customers/3/orders/7/items/2` |
| Filters/paging in query | `/api/products?category=it&page=2` | `/api/products/it/page2` |
| Consistent casing/style | lowercase or kebab, no trailing slash | `/api/ProductItems/`, mixed styles |

### Visual Explanation

A three-column rule/good/avoid table reconstructs endpoint-design conventions.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

### Definitions

**Definition: Resource** — A domain noun identified through an API URL.

---

## Page 32 — HTTP Methods — The Verbs of REST

### Original Slide Content

HTTP Methods — The Verbs of REST

Method

Meaning

Example

Idempotent?

Body?

GET

Read a resource/collection — never changes state

GET /api/products/42

Yes (and safe)

No

POST

Create a new resource (server assigns id)

POST /api/orders

No

Yes

PUT

Replace a resource entirely

PUT /api/products/42

Yes

Yes

PATCH

Partially update specified fields

PATCH /api/products/42

Not guaranteed

Yes

DELETE

Remove a resource

DELETE /api/products/42

Yes

Usually no

Idempotent = repeating the request gives the same result.  Why it matters: networks retry. Retrying DELETE /products/42 is harmless;

retrying POST /orders can charge a customer twice — handle duplicates deliberately.

### Recreated Table

| Method | Meaning | Example | Idempotent? | Body? |
|---|---|---|---|---|
| GET | Read a resource/collection; never changes state | `GET /api/products/42` | Yes and safe | No |
| POST | Create a new resource | `POST /api/orders` | No | Yes |
| PUT | Replace a resource entirely | `PUT /api/products/42` | Yes | Yes |
| PATCH | Partially update specified fields | `PATCH /api/products/42` | Not guaranteed | Yes |
| DELETE | Remove a resource | `DELETE /api/products/42` | Yes | Usually no |

### Visual Explanation

A five-column table compares HTTP methods, meaning, idempotency and request bodies.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

### Definitions

**Definition: Idempotent request** — A request that produces the same resulting state when repeated.

---

## Page 33 — HTTP Status Codes — The Response Contract

### Original Slide Content

HTTP Status Codes — The Response Contract

2xx — Success

4xx — Client's fault

5xx — Server's fault

200 OK

400 Bad Request

500 Internal Server Error

GET/PUT/PATCH succeeded; body included

Validation failed; malformed input

Unhandled exception — your bug

201 Created

401 Unauthorized

503 Service Unavailable

POST succeeded; Location header points to the

new resource

Not authenticated (missing/invalid token)

Overloaded / down for maintenance

204 No Content

403 Forbidden

Success with nothing to return (DELETE)

Authenticated but not permitted

404 Not Found

Resource doesn't exist

409 Conflict

State conflict (duplicate email)

### Recreated Table

| Class | Code | Meaning |
|---|---:|---|
| Success | 200 | GET/PUT/PATCH succeeded; body included |
| Success | 201 | POST created a resource; include `Location` |
| Success | 204 | Success with no response body |
| Client error | 400 | Validation failed or malformed input |
| Client error | 401 | Missing or invalid authentication |
| Client error | 403 | Authenticated but not permitted |
| Client error | 404 | Resource does not exist |
| Client error | 409 | State conflict, such as duplicate email |
| Server error | 500 | Unhandled exception |
| Server error | 503 | Overloaded or unavailable |

### Visual Explanation

Three colour-coded columns group 2xx, 4xx and 5xx status codes.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

### Definitions

**Definition: HTTP status code** — A numeric response classification that communicates the result of an HTTP request.

---

## Page 34 — Request → Response Lifecycle, and JSON

### Original Slide Content

Request → Response Lifecycle, and JSON

1.  React fetch()

2.  HTTP request

3.  Middleware pipeline

4.  Routing → Controller

5.  Service → EF Core → PostgreSQL

JSON: lightweight, human-readable, language-neutral. ASP.NET Core serializes

objects ↔ JSON automatically (System.Text.Json), converting PascalCase C#

to camelCase JSON by default.

6.  JSON response

### Code / Command Examples

**HTTP request and response**

```http
GET /api/products/42 HTTP/1.1
Host: api.lankamart.lk
Authorization: Bearer eyJhbGc...
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
```

**JSON response body**

```json
{
  "id": 42,
  "name": "Wireless Mouse",
  "price": 2500.00,
  "inStock": true
}
```

### Visual Explanation

A six-step lifecycle runs from React to JSON; a dark panel shows a concrete HTTP exchange.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

### Definitions

**Definition: JSON** — A lightweight, human-readable, language-neutral data-interchange format.

---

## Page 35 — REST API Design Best Practices

### Original Slide Content

REST API Design Best Practices

Consistency above all

Paginate collections

Version from day one

  - Same naming style, casing, error shape and

  - Never return unbounded lists:

  - /api/v1/products — breaking changes go to paging pattern on EVERY endpoint ?page=1&pageSize=20 v2

  - Consumers learn your API once

  - Return total count metadata for UIs

  - Old clients keep working Uniform error shape Secure by default Document as you build

  - Problem Details (RFC 9457) for all errors

  - HTTPS only · [Authorize] unless explicitly

  - Swagger/OpenAPI generated from code public

  - Machine-readable type + human title +

  - The docs ARE the contract — keep them traceId

  - Validate every input (next part) honest

### Recreated Table

| Practice | Requirement |
|---|---|
| Consistency | Same naming, casing, error and paging patterns |
| Pagination | Never return unbounded collections |
| Versioning | Use `/api/v1/...`; breaking changes move to v2 |
| Uniform errors | Use Problem Details with type, title and traceId |
| Secure by default | HTTPS, authorization and validation |
| Documentation | Generate and maintain Swagger/OpenAPI |

### Visual Explanation

Six cards summarize consistency, pagination, versioning, error shape, security and documentation.

### Student-Friendly Explanation

This page defines the HTTP/REST contract that clients and servers must follow.

---

## Page 36 — Checkpoint 03 — REST Design

### Original Slide Content

Checkpoint 03 – REST Design

Pairs — 5 minutes: design and defend

Q1

Design the endpoint (method + URL + success status) for: 'customer cancels order 17'. Two defensible answers exist — give one

and justify it.

Q2

A teammate returns 200 OK with { "error": "product not found" }. Explain to them — kindly — everything wrong with this.

Q3

PUT /api/products/42 with body { "price": 2600 } wiped the product's name. What happened, and which method should have

been used?

Q4

Why must POST /api/orders NOT be retried blindly on timeout, while DELETE /api/orders/17 can be?

### Visual Explanation

Four REST-design question cards form Checkpoint 03.

### Student-Friendly Explanation

The checkpoint tests resource design, truthful status codes, PUT-versus-PATCH semantics and idempotency.

---

### Major Topic Exam Section — REST API Architecture

**Exam Tip:** Design URLs around plural resource nouns, use methods as verbs and return status codes that truthfully describe the result.

**Common Mistake:** `PUT` is full replacement; use `PATCH` for a partial update.

**Likely exam question 1:** Why is statelessness important?  
**Expected answer:** Each request contains all context, allowing servers to scale horizontally without per-client session memory.

**Likely exam question 2:** Why is blind retry of POST dangerous?  
**Expected answer:** POST is not idempotent and may create or charge twice; DELETE is idempotent and repeated deletion leaves the same final state.

---

## Page 37 — Part 5 — Building and Testing the API in ASP.NET Core

### Original Slide Content

P A R T  5

Building & Testing the API in ASP.NET

Core

- MVC-style structure: controllers, services, models & DTOs

- Routing, attribute routing and endpoint mapping

- Request handling and JSON response formatting

- Testing with Swagger / OpenAPI and Postman SE3090 – Software Engineering Frameworks  |  Lecture 04

### Visual Explanation

Part-divider slide introducing API construction and testing.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

> **Source note:** The footer on this part-divider slide reads `SE3090 – Software Engineering Frameworks | Lecture 04`. This wording is preserved from the uploaded PDF even though the deck title identifies it as Lecture 03.

---

## Page 38 — Clean ASP.NET Core Project Structure

### Original Slide Content

Clean ASP.NET Core Project Structure

Why this layout?

-  Folders mirror responsibilities — find anything fast

-  Each layer depends only on the one below via interfaces

-  New feature = one file per folder (Orders → 5 files)

-  Scales from assignment to enterprise unchanged

-  Markers can navigate it instantly

### Code / Command Examples

**Project folder layout**

```text
LankaMart.Api/
├─ Program.cs                  // startup, DI, middleware
├─ appsettings.json            // configuration (no secrets!)
├─ Controllers/
│  └─ ProductsController.cs    // HTTP layer
├─ Services/
│  ├─ IProductService.cs       // contract
│  └─ ProductService.cs        // business logic
├─ Models/
│  └─ Product.cs               // domain entity
├─ Dtos/
│  ├─ CreateProductDto.cs      // input shape
│  └─ ProductDto.cs            // output shape
└─ Repositories/               // data access (next lecture)
```

### Visual Explanation

A code-style folder tree is paired with reasons for the layered project structure.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

---

## Page 39 — Models and DTOs — and Why They Differ

### Original Slide Content

Models and DTOs — and Why They Differ

Model ≠ DTO

-  Model = internal shape (maps to the DB)

-  DTO = Data Transfer Object = the public contract

-  Hide internal/sensitive fields from clients

-  Input DTO ≠ output DTO (no Id on create)

-  Decouples API from database changes

-  record = concise, immutable DTO type

### Code / Command Examples

**Domain model**

```csharp
// Models/Product.cs — internal domain entity
public class Product {
    public long Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
    public int Stock { get; set; }
    public string SupplierCostNote = ""; // internal!
}
```

**Input and output DTOs**

```csharp
// Dtos — what crosses the API boundary
public record CreateProductDto(
    string Name, decimal Price, int Stock);

public record ProductDto(
    long Id, string Name, decimal Price,
    bool InStock);   // no internal fields exposed
```

### Visual Explanation

Two code panels contrast the internal model with public DTOs; the side panel explains their separation.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

### Definitions

**Definition: DTO** — A Data Transfer Object defining the public data shape that crosses an API boundary.

---

## Page 40 — Controller → Service → Model Workflow

### Original Slide Content

Controller → Service → Model Workflow

Separation of concerns

Client (React)

HTTP request + JSON

-  Each box: one reason to change

-  Controller thin, service rich

-  Test the service without HTTP Controller HTTP only: bind, validate, map DTO, choose status code

-  Swap the repo without touching controllers

-  Same pattern as Lecture 03's diagram — now in C# Service Business rules, orchestration, decisions (no HTTP, no SQL) Repository Data access only (EF Core → DB) — next lecture Model / DB Persistent entities & constraints

### Recreated Table

| Layer | Responsibility |
|---|---|
| Client | Sends HTTP request and JSON |
| Controller | Binds, validates, maps DTOs and chooses status codes |
| Service | Business rules, orchestration and decisions |
| Repository | Data access using EF Core |
| Model / DB | Persistent entities and constraints |

### Visual Explanation

A vertical workflow connects client, controller, service, repository and database.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

### Definitions

**Definition: Separation of concerns** — Assigning different responsibilities to distinct layers or components.

---

## Page 41 — Controllers, Attribute Routing and Endpoint Mapping

### Original Slide Content

Controllers, Attribute Routing & Endpoint Mapping

Reading it

-  [ApiController] auto-returns 400 on invalid models

-  [Route] + [Http*] attributes map URL+verb to a method

-  [controller] token = class name minus 'Controller'

-  Service arrives via constructor injection

-  Ok(), NotFound(), Created() set the status code

-  async Task<...> for non-blocking I/O

### Code / Command Examples

**ProductsController.cs**

```csharp
[ApiController]                       // model binding + 400s
[Route("api/[controller]")]           // → api/products
public class ProductsController : ControllerBase
{
    private readonly IProductService _svc;

    public ProductsController(IProductService svc)
        => _svc = svc;                 // injected by DI

    [HttpGet]                          // GET api/products
    public async Task<IEnumerable<ProductDto>> GetAll()
        => await _svc.GetAllAsync();

    [HttpGet("{id}")]                  // GET api/products/42
    public async Task<ActionResult<ProductDto>> Get(long id)
    {
        var p = await _svc.GetByIdAsync(id);
        return p is null ? NotFound() : Ok(p);
    }
}
```

### Visual Explanation

Controller code is paired with a reading guide for routing, DI, result helpers and async I/O.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

### Definitions

**Definition: Attribute routing** — Mapping HTTP methods and URL patterns to controller actions using attributes.

---

## Page 42 — Services and Dependency Injection in Practice

### Original Slide Content

Services and Dependency Injection in Practice

DI lifetimes

-  Scoped — one per request (most services)

-  Transient — new every time

-  Singleton — one for the whole app

-  Depend on the INTERFACE; swap implementations freely

### Code / Command Examples

**Service contract and implementation**

```csharp
// Services/IProductService.cs — the contract
public interface IProductService {
    Task<IEnumerable<ProductDto>> GetAllAsync();
    Task<ProductDto?> GetByIdAsync(long id);
    Task<ProductDto> CreateAsync(CreateProductDto dto);
}

// Services/ProductService.cs — the logic
public class ProductService : IProductService {
    public async Task<ProductDto> CreateAsync(
        CreateProductDto dto) {
        if (dto.Price < 0)
            throw new ValidationException("Price < 0");

        /* map, persist, return ProductDto */
    }
}
```

**Program.cs registration**

```csharp
// Program.cs — register once
builder.Services
    .AddScoped<IProductService, ProductService>();
```

### Visual Explanation

Service contract/implementation code and DI registration are paired with lifetime reminders.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

---

## Page 43 — Reading Route, Query and Body Parameters

### Original Slide Content

Reading Route, Query and Body Parameters

Binding sources

-  Route → identity (which item)

-  Query → options (filter, sort, page)

-  Body → the payload (create/update data)

-  ASP.NET Core binds by name & source automatically

-  Defaults make query params optional

-  Never read raw JSON by hand — bind to a DTO

### Code / Command Examples

**Route, query and body binding**

```csharp
// 1) Route parameter — part of the path
[HttpGet("{id}")]
public ... Get(long id) { ... }      // GET /products/42

// 2) Query parameters — filtering & paging
[HttpGet]
public ... Search(string? category,
    int page = 1, int pageSize = 20)
// GET /products?category=it&page=2

// 3) Request body — JSON → DTO
[HttpPost]
public ... Create([FromBody] CreateProductDto dto)
// POST /products  { "name": "Mouse", ... }
```

### Visual Explanation

Three code sections show route, query and body binding; the right panel explains each source.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

### Definitions

**Definition: Model binding** — Automatic conversion of route, query and body values into typed action parameters or DTOs.

---

## Page 44 — Returning Proper Responses and JSON

### Original Slide Content

Returning Proper Responses & JSON

JSON by default

ASP.NET Core serializes returned objects to

JSON automatically (System.Text.Json).

camelCase output by convention — matches

JavaScript clients.

Match the status code to what happened: created → 201, found → 200, deleted → 204, missing → 404. Don't return 200 for everything.

### Code / Command Examples

**Returning a created resource**

```csharp
[HttpPost]
public async Task<ActionResult<ProductDto>> Create(
    CreateProductDto dto) {
    var created = await _svc.CreateAsync(dto);
    return CreatedAtAction(nameof(Get),
        new { id = created.Id }, created);  // 201 + Location
}

// helpers map intent → status code
Ok(dto)          // 200 OK
CreatedAtAction  // 201 Created (+ where to find it)
NoContent()      // 204 (successful delete/update)
NotFound()       // 404
BadRequest(err)  // 400
```

**200 OK body**

```json
{
  "id": 42,
  "name": "Mouse",
  "price": 2500.00,
  "inStock": true
}
```

### Visual Explanation

Creation-response code is paired with automatic JSON serialization and a sample body.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

---

## Page 45 — API Testing with Swagger / OpenAPI

### Original Slide Content

API Testing with Swagger / OpenAPI

- OpenAPI = a standard, machine-readable description of Swagger UI — /swagger your API

  - Swagger UI renders it as an interactive test page in the GET /api/products browser

- Ships with the ASP.NET Core Web API template — almost GET /api/products/{id} zero setup

- Try endpoints live: fill parameters, Execute, see real POST /api/products responses

- Auto-documents routes, parameters, DTO shapes and PUT /api/products/{id} status codes

- Frontend & mobile teams can generate client code from DELETE /api/products/{id} the spec

  - Great first stop before reaching for Postman ▶Try it out → Execute → 200 OK

### Recreated Table

| Method | Swagger route |
|---|---|
| GET | `/api/products` |
| GET | `/api/products/{id}` |
| POST | `/api/products` |
| PUT | `/api/products/{id}` |
| DELETE | `/api/products/{id}` |

### Visual Explanation

A Swagger UI mock-up lists CRUD endpoints and the Try it out → Execute flow.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

### Definitions

**Definition: OpenAPI** — A machine-readable standard for describing an HTTP API.

**Definition: Swagger UI** — An interactive browser interface rendered from an OpenAPI document.

---

## Page 46 — Testing with Postman — A Practical Workflow

### Original Slide Content

Testing with Postman — A Practical Workflow

Swagger vs Postman

Set up

Create a collection per API; an environment var baseUrl =

https://localhost:5001

-  Swagger: quick manual checks, lives with the code, always in sync

-  Postman: saved collections, scripted assertions, environments, automation

Send requests

Build GET/POST/PUT/DELETE with headers & JSON body; inspect

status, body, time

-  Use both: Swagger while coding, Postman for repeatable test suites

Save & organise

Save each request; group by resource; share the collection with

the team

Assert

Add test scripts: status is 200, body has an id, response < 500 ms

Automate

Run the whole collection (Runner / Newman) in CI on every push

### Recreated Table

| Tool | Best use |
|---|---|
| Swagger | Fast manual checks; lives with code and stays synchronized |
| Postman | Saved collections, environments, scripted assertions and automation |

### Visual Explanation

A five-step Postman workflow is paired with a Swagger-vs-Postman comparison.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

### Definitions

**Definition: Postman collection** — A saved, organized set of API requests and tests.

---

## Page 47 — End-to-End: From Browser Click to JSON Response

### Original Slide Content

End-to-End: From Browser Click to JSON Response

1  React

User clicks Buy → fetch('POST /api/orders', body)

2  Kestrel + middleware

Routing, CORS, (auth next lecture), model binding & validation

3  Controller

Maps DTO, calls service, picks status code

4  Service

Business rules → calls repository

5  Repository + DB

Persists data, returns entity (next lecture)

6  Response

DTO → JSON → 201 Created → back to React → UI updates

### Visual Explanation

A six-step end-to-end flow follows a browser click through middleware, controller, service, repository and response.

### Student-Friendly Explanation

This page shows how an ASP.NET Core API is structured, routed, bound, returned and tested.

---

### Major Topic Exam Section — Building and Testing ASP.NET Core APIs

**Exam Tip:** Draw the request path: client → middleware → controller → service → repository/database → DTO/JSON response.

**Common Mistake:** Do not expose database entities directly or place business rules in controllers.

**Likely exam question 1:** Why use DTOs?  
**Expected answer:** To hide internal fields, separate input/output contracts and decouple the API from database changes.

**Likely exam question 2:** Compare Swagger and Postman.  
**Expected answer:** Swagger is fast, code-synchronized interactive documentation; Postman supports saved collections, environments, assertions and automation.

---

## Page 48 — Part 6 — Backend Best Practices: Maintainability, Scalability and Security

### Original Slide Content

P A R T  6

Backend Best Practices: Maintainability,

Scalability & Security

- Layered architecture & separation of concerns (recap in practice)

- Validation, exception handling & logging

- Secure configuration — no hardcoded secrets

- Writing code that survives the assignment AND the real world SE3090 – Software Engineering Frameworks  |  Lecture 04

### Visual Explanation

Part-divider slide introducing maintainability, scalability and security practices.

### Student-Friendly Explanation

This page focuses on maintainability, correctness, security and justified API design.

> **Source note:** The footer on this part-divider slide reads `SE3090 – Software Engineering Frameworks | Lecture 04`. This wording is preserved from the uploaded PDF even though the deck title identifies it as Lecture 03.

---

## Page 49 — Layered Architecture and DI Best Practices

### Original Slide Content

Layered Architecture & DI Best Practices

Respect the layers

Depend on abstractions

  - Controller → Service → Repository, one way only

  - No SQL in controllers, no HTTP in services

  - Each layer testable in isolation

  - Inject interfaces, not concrete classes

  - Register in Program.cs with the right lifetime

  - Swap implementations without edits upstream Small, focused units Consistency wins

  - One class, one responsibility (SRP)

  - Short methods with clear verb names

  - Feature = one file per folder

  - Same naming, same folder layout everywhere

  - Predictable code is maintainable code

  - New teammates ramp up fast

### Recreated Table

| Practice area | Rules |
|---|---|
| Respect layers | Controller → Service → Repository; no SQL in controllers; no HTTP in services |
| Depend on abstractions | Inject interfaces and register correct lifetimes |
| Small focused units | One responsibility per class; short verb-named methods |
| Consistency | Same naming and folder structure throughout |

### Visual Explanation

Four cards cover layer boundaries, abstractions, focused units and consistency.

### Student-Friendly Explanation

This page focuses on maintainability, correctness, security and justified API design.

### Definitions

**Definition: Single Responsibility Principle** — A class should have one main reason to change.

---

## Page 50 — Validation, Exception Handling and Logging

### Original Slide Content

Validation, Exception Handling & Logging

Principles

-  Validate at the edge; fail fast with

-  Handle errors in ONE place, not try/catch everywhere

-  Map exceptions → correct status codes

-  Log full detail server-side; return safe messages

-  Never expose stack traces to clients

-  Use a traceId to link reports to logs

### Code / Command Examples

**Validation, exception handling and structured logging**

```csharp
// 1) Declarative validation on the DTO
public record CreateProductDto(
    [Required, StringLength(120)] string Name,
    [Range(0, 1_000_000)]        decimal Price,
    [Range(0, int.MaxValue)]      int Stock);
// [ApiController] auto-returns 400 + details

// 2) Global exception middleware (Program.cs)
app.UseExceptionHandler();   // one place for errors

// 3) Structured logging via injected logger
_logger.LogInformation("Created product {Id}",
    created.Id);
```

### Visual Explanation

Code for validation, global exception handling and logging is paired with six principles.

### Student-Friendly Explanation

This page focuses on maintainability, correctness, security and justified API design.

### Definitions

**Definition: Structured logging** — Logging named fields so events can be searched and correlated.

**Definition: Trace ID** — An identifier used to connect a client-visible error with server logs.

---

## Page 51 — Secure Configuration and Basic API Security

### Original Slide Content

Secure Configuration & Basic API Security

Configuration & secrets

Baseline API security

-  NEVER hardcode secrets or commit them to Git

-  HTTPS everywhere (TLS) — encrypt in transit

-  Validate & sanitize all input (prevents injection)

-  Connection strings, API keys, JWT secrets → environment variables / user-secrets

-  Authentication + authorization (JWT + RBAC — next lecture)

-  appsettings.json for non-secret config only

-  Different values per environment (dev/test/prod)

-  Least-privilege database account

-  CORS allow-list — only your frontend origin

-  Production secrets from the platform (Azure Key Vault, etc.)

-  Don't leak details in errors; rate-limit sensitive endpoints

-  Read via IConfiguration / IOptions<T>

### Recreated Table

| Configuration and secrets | Baseline API security |
|---|---|
| Never hardcode or commit secrets | HTTPS/TLS |
| Use environment variables or user-secrets | Validate and sanitize input |
| `appsettings.json` only for non-secrets | JWT authentication and RBAC |
| Different dev/test/prod values | Least-privilege DB account |
| Platform secret stores in production | CORS allow-list |
| Read via `IConfiguration` / `IOptions<T>` | Safe errors and rate limiting |

### Visual Explanation

Two large columns separate secret/configuration practices from baseline API security.

### Student-Friendly Explanation

This page focuses on maintainability, correctness, security and justified API design.

### Definitions

**Definition: Least privilege** — Granting only the minimum access required.

**Definition: CORS allow-list** — Permitting browser requests only from explicitly trusted origins.

---

## Page 52 — Case Study: Designing the LankaMart Backend API

### Original Slide Content

Case Study: Designing the LankaMart Backend API

Requirements → API design decisions (with justification — LO4)

Requirement

Endpoint / design

Justification

Browse & search products

GET /api/products?category=&page=

Collection + query params for filtering/paging; cache-friendly

View one product

GET /api/products/{id} → 200 / 404

Identity in the path; correct status codes

Staff add a product

POST /api/products → 201 + Location

Server assigns id; CreatedAtAction; input via CreateProductDto

Update / partial edit

PUT vs PATCH /api/products/{id}

PUT full replace, PATCH partial — avoids accidental field wipe

Place an order

POST /api/orders (service + transaction)

Business logic in service layer; not a controller concern

Clean, layered code

Controllers · Services · DTOs · DI

Maintainable, testable, scalable — meets the rubric

Same method applies to your assignment domain: property management, student management, clinic booking, event ticketing …

### Recreated Table

| Requirement | Endpoint / design | Justification |
|---|---|---|
| Browse and search products | `GET /api/products?category=&page=` | Collection and query parameters; cache-friendly |
| View one product | `GET /api/products/{id}` → 200 / 404 | Identity in path; correct status codes |
| Staff add a product | `POST /api/products` → 201 + Location | Server assigns ID; `CreatedAtAction`; input DTO |
| Update / partial edit | PUT vs PATCH `/api/products/{id}` | Full replace vs partial update |
| Place an order | `POST /api/orders` with service + transaction | Business logic belongs in service |
| Clean layered code | Controllers, Services, DTOs, DI | Maintainable, testable and scalable |

### Visual Explanation

A requirement-to-design-to-justification table applies the lecture to LankaMart.

### Student-Friendly Explanation

This page focuses on maintainability, correctness, security and justified API design.

---

## Page 53 — Group Activity: Design REST Endpoints

### Original Slide Content

Group Activity: Design REST Endpoints (20 min)

Groups of 3–4 · whiteboard or paper · present in 60 seconds

Scenario: Campus Library System

Marking lens (= the rubric)

-  Nouns as resources, plural, no verbs in paths? Members borrow books; librarians manage the catalogue; admins manage members. A member can borrow up to 5 books at once.

-  Identity in the path, options in the query?

-  Task 1 — List the resources (nouns) for the system

-  Correct HTTP method per action?

-  Task 2 — Design endpoints (method + path) for browse, view one, add, update, delete a book

-  Business rule placed in the SERVICE, not the controller?

-  Task 3 — Design the 'borrow a book' endpoint; which layer holds the 5- book rule?

-  Sensible status codes (201 / 404 / 400 or 409)?

-  Task 4 — Pick the right status code for: created, not found, borrow- limit exceeded

### Visual Explanation

A scenario/task panel is paired with a marking-lens panel for the campus library activity.

### Student-Friendly Explanation

The activity applies the same rules to a new domain: nouns as resources, service-layer business rules and status codes that reflect outcomes.

---

## Page 54 — Quick Quiz — 6 Questions

### Original Slide Content

Quick Quiz — 6 Questions

Which type stores money exactly in C#?

A) double   B) float   C) decimal

What does the [ApiController] attribute give you automatically?

A) a database   B) 400 on invalid models   C)

HTTPS

A controller needs IProductService. How does it get one?

A) new ProductService()   B) constructor

injection (DI)   C) a global variable

POST that creates a resource should return…

A) 200 OK   B) 201 Created   C) 204 No Content

Why return a DTO instead of the entity?

A) it's faster   B) hide internal fields / decouple

C) required by C#

Where should the JWT signing secret live?

A) appsettings.json in Git   B) hardcoded   C)

environment / secret store

### Visual Explanation

Six multiple-choice question rows form the quick quiz.

### Student-Friendly Explanation

Answer key: 1-C `decimal`; 2-B automatic 400; 3-B constructor injection; 4-B 201 Created; 5-B hide internals/decouple; 6-C environment or secret store.

---

### Major Topic Exam Section — Backend Quality and Security

**Exam Tip:** Use the three-point pattern: validate at the edge, handle exceptions centrally and log structured details server-side.

**Common Mistake:** Never hardcode or commit connection strings, API keys or JWT secrets.

**Likely exam question 1:** Where should secrets be stored?  
**Expected answer:** Environment variables, user-secrets during development or platform secret stores such as Azure Key Vault in production.

**Likely exam question 2:** What belongs in each layer?  
**Expected answer:** Controller handles HTTP, service handles business rules, repository handles data access and DTOs define the API boundary.

---

## Page 55 — Lecture Summary — Key Takeaways

### Original Slide Content

Lecture Summary — Key Takeaways

C# is your backend language

REST is the contract

Strongly typed, OOP, modern (properties, var, async, LINQ);

decimal for money.

Resources + HTTP methods + status codes + JSON; design

URLs around nouns.

OOP structures the code

Build it in layers

Encapsulation, inheritance, polymorphism, abstraction &

interfaces drive clean, testable design.

Controllers (HTTP) → Services (logic) → Repositories (data);

DTOs at the boundary.

.NET + ASP.NET Core run it

Do it well

Cross-platform, fast, batteries-included: DI and middleware

out of the box.

Validate, handle errors centrally, log, and keep secrets out of

code.

### Visual Explanation

Six recap cards summarize C#, OOP, .NET/ASP.NET Core, REST, layering and quality.

### Student-Friendly Explanation

This slide is the shortest complete revision of the lecture.

---

## Page 56 — Learning Outcomes, Next Lecture and Preparation

### Original Slide Content

Learning Outcomes, Next Lecture & Preparation

LO

Covered today by…

LO2

Writing C# OOP classes and building working ASP.NET Core REST endpoints (controllers, services, models)

LO3

Layered architecture, dependency injection, validation, exception handling, correct HTTP semantics & JSON

LO4

Justifying C#/.NET, ASP.NET Core and REST design choices in the case study and endpoint-design activity

Next: Database, AuthN/AuthZ & Integration

Before the lab / next week

-  Install the .NET 8 SDK; run dotnet new webapi

-  Build & open the project; explore Swagger at /swagger Give the API memory and a lock: PostgreSQL schema design with EF Core, then JWT authentication and role-based access control securing these very endpoints.

-  Read: Microsoft Learn 'Create a web API with ASP.NET Core'

-  Sketch the resource list for YOUR assignment domain

### Code / Command Examples

**Preparation command**

```bash
dotnet new webapi
```

### Recreated Table

| LO | Covered today by |
|---|---|
| LO2 | C# OOP classes and working ASP.NET Core REST endpoints |
| LO3 | Layered architecture, DI, validation, exception handling, HTTP semantics and JSON |
| LO4 | Justified C#/.NET, ASP.NET Core and REST choices |

### Visual Explanation

An LO coverage table is followed by next-lecture and preparation cards.

### Student-Friendly Explanation

Preparation turns theory into practice by creating a Web API project, opening Swagger and identifying assignment resources.

---

## Page 57 — References and Further Reading

### Original Slide Content

References & Further Reading

-  Official documentation (primary sources)

  - Microsoft Learn — C# documentation & language reference (learn.microsoft.com/dotnet/csharp)

  - Microsoft Learn — ASP.NET Core fundamentals & 'Create a web API' tutorial

  - Microsoft Learn — Dependency injection, configuration & logging in .NET

  - OpenAPI Specification (openapis.org) · Swagger documentation (swagger.io)

-  Standards & guidelines

  - RFC 9110 — HTTP Semantics (methods & status codes) · RFC 8259 — JSON

  - Microsoft REST API Guidelines · OWASP API Security Top 10 (owasp.org)

-  Recommended texts

  - Albahari, J. (2024) C# 12 in a Nutshell. O'Reilly Media.

  - Price, M. J. (2023) C# 12 and .NET 8 – Modern Cross-Platform Development. Packt.

  - Lock, A. (2023) ASP.NET Core in Action, 3rd edn. Manning Publications.

### Visual Explanation

A references slide grouped into official documentation, standards/guidelines and recommended books.

### Student-Friendly Explanation

The references identify the primary specifications, official documentation and recommended books behind the lecture.

---

# Full Lecture Summary

Lecture 03 develops a complete backend foundation. C# provides a statically typed, object-oriented language with modern features such as properties, nullable reference types, LINQ and `async`/`await`. `decimal` is used for financial values, guard clauses keep methods flat, and classes combine state with behaviour.

Object-oriented design protects backend rules. Constructors establish valid initial state, encapsulation prevents uncontrolled mutation, inheritance supports true IS-A relationships, polymorphism allows one call to trigger different runtime behaviours, and interfaces define contracts that support Dependency Injection and unit testing.

.NET is the cross-platform platform containing the CLR, Base Class Library and tooling. ASP.NET Core is the web framework built on .NET. Its DI container supplies registered dependencies with Singleton, Scoped or Transient lifetimes. Its middleware pipeline processes requests in order, so exception handling, CORS, authentication, authorization and endpoint mapping must be arranged deliberately.

A Web API exposes a software contract over HTTP. RESTful APIs model the domain as resources, use standard HTTP methods, remain stateless, return meaningful status codes and exchange JSON. URLs should use plural nouns, identity belongs in the path, filtering and paging belong in query strings, and true ownership may be nested carefully.

ASP.NET Core APIs are built using thin controllers, service-layer business rules, repositories for data access, internal models and public DTOs. Attribute routing maps methods and paths, model binding reads route/query/body data, and response helpers return correct status codes. Swagger/OpenAPI supports interactive documentation and quick checks, while Postman supports repeatable collections, assertions and CI automation.

Production-quality backends preserve layer boundaries, depend on interfaces, validate at the edge, handle exceptions globally, log structured server-side detail, never expose stack traces, and keep secrets out of source code. HTTPS, least privilege, input validation, JWT/RBAC, CORS allow-lists and rate limiting form the baseline security direction.

# Important Code and Concept Snippets

## Platform Relationship

```text
C# source code → IL → .NET CLR
C# + .NET + ASP.NET Core → HTTP Web API
```

## Layered Backend

```text
Client → Middleware → Controller → Service → Repository → Database
                                              ↓
                                      DTO / JSON response
```

## REST Resource Pattern

```http
GET    /api/products
GET    /api/products/42
POST   /api/products
PUT    /api/products/42
PATCH  /api/products/42
DELETE /api/products/42
```

## Dependency Injection Pattern

```csharp
builder.Services.AddScoped<IProductService, ProductService>();

public class ProductsController(IProductService service)
    : ControllerBase
{
    // service supplied by the ASP.NET Core container
}
```

## Status Code Memory

```text
Created → 201
Found / successful read → 200
Successful no-body operation → 204
Invalid input → 400
Unauthenticated → 401
Authenticated but forbidden → 403
Missing resource → 404
State conflict → 409
Unhandled server failure → 500
```

# Key Definitions Table

| Term | Definition | Simple meaning |
|---|---|---|
| C# | A general-purpose, statically typed, object-oriented language that compiles to IL | The backend language used in this lecture |
| .NET | Cross-platform runtime, standard library and development tooling | The platform where C# runs |
| CLR | Runtime providing JIT, garbage collection, type safety and scheduling | The engine executing .NET code |
| ASP.NET Core | .NET web framework for apps and APIs | The framework serving HTTP |
| Class | Blueprint defining state and behaviour | Type design |
| Object | Concrete instance of a class | A created value with state |
| Encapsulation | Controlled access to internal state | Protect data through rules |
| Inheritance | Derived class receives members from a base class | IS-A reuse mechanism |
| Polymorphism | Runtime object chooses the implementation of a common operation | Same call, different behaviour |
| Abstraction | Essential contract exposed while implementation is hidden | Show what, hide how |
| Interface | Contract implemented by one or more classes | Swappable capability definition |
| Dependency Injection | Container supplies registered dependencies | Do not construct dependencies inside consumers |
| Middleware | Ordered HTTP pipeline component | Request/response processing step |
| API | Contract for software-to-software communication | Defined way systems communicate |
| REST | Architectural style using constraints such as statelessness and uniform interfaces | Resource-based HTTP design |
| Resource | Domain noun identified by a URL | Product, order, customer, etc. |
| Idempotent | Repeating a request produces the same resulting state | Safe to retry with respect to final state |
| DTO | Public transfer shape crossing an API boundary | Safe API input/output object |
| Model binding | Automatic conversion of request values into typed parameters/DTOs | ASP.NET Core reads request data for you |
| OpenAPI | Machine-readable API-description standard | Formal API contract document |
| Swagger UI | Interactive interface generated from OpenAPI | Browser page for testing/documentation |
| Structured logging | Logging named fields and values | Searchable, machine-friendly logs |
| Least privilege | Minimum access required for a task | Reduce damage if compromised |

# Quick Revision Table

| Topic | Core facts | Pages | Exam importance |
|---|---|---:|---|
| C# role and syntax | Static typing, IL/JIT, types, `decimal`, methods and classes | 6–13 | High |
| OOP | Constructor, encapsulation, inheritance, polymorphism, abstraction and interfaces | 14–21 | Very High |
| .NET platform | CLR, BCL, tooling and cross-platform runtime | 22–25 | High |
| DI and middleware | Lifetimes, constructor injection and pipeline order | 26–27 | Very High |
| REST principles | Statelessness, uniform interface, resources, caching and layering | 28–30 | Very High |
| Endpoint design | Nouns, paths, queries, methods, idempotency and status codes | 31–36 | Very High |
| ASP.NET Core structure | Controllers, services, models, DTOs and repositories | 37–44 | Very High |
| API testing | Swagger/OpenAPI and Postman workflow | 45–47 | High |
| Backend quality | Layering, validation, exceptions, logging, secrets and security | 48–54 | Very High |
| Summary/preparation | LO coverage and next database/auth work | 55–57 | Medium |

# Likely Exam Questions

1. **Distinguish C#, .NET and ASP.NET Core.**  
   **Expected answer:** C# is the language, .NET is the runtime/platform and ASP.NET Core is the web framework.
2. **Why use `decimal` for financial values?**  
   **Expected answer:** It provides exact base-10 arithmetic and avoids binary floating-point rounding errors.
3. **Explain the four OOP pillars using backend examples.**  
   **Expected answer:** Encapsulation protects state, inheritance models true IS-A relationships, polymorphism provides runtime variation and abstraction/interfaces hide details and support contracts.
4. **Explain Dependency Injection and the three lifetimes.**  
   **Expected answer:** The container supplies dependencies; Singleton is app-wide, Scoped is per request and Transient is per resolution.
5. **Why does middleware order matter?**  
   **Expected answer:** Each middleware wraps/passes to the next; exception handling must wrap the pipeline and authentication must precede authorization.
6. **List and explain the REST constraints.**  
   **Expected answer:** Client-server, stateless, uniform interface, resource-oriented, cacheable and layered system.
7. **Compare GET, POST, PUT, PATCH and DELETE.**  
   **Expected answer:** GET reads, POST creates, PUT fully replaces, PATCH partially updates and DELETE removes; their idempotency differs.
8. **Why should an API return meaningful status codes?**  
   **Expected answer:** Status codes are part of the response contract and allow clients to handle success, validation, authentication, missing resources, conflicts and server failures correctly.
9. **Why use DTOs instead of exposing entities?**  
   **Expected answer:** DTOs hide internal fields, separate input/output contracts and decouple clients from persistence changes.
10. **Explain the controller-service-repository separation.**  
    **Expected answer:** Controllers handle HTTP, services handle business rules and repositories handle data access.
11. **Compare Swagger and Postman.**  
    **Expected answer:** Swagger provides code-synchronized interactive documentation; Postman supports saved collections, assertions, environments and automation.
12. **State the core secure-configuration rules.**  
    **Expected answer:** Never hardcode/commit secrets; use environment/user/platform secret stores; use HTTPS, least privilege, validation, JWT/RBAC and CORS allow-lists.

# Key Terms List

- C# 12
- .NET 8
- ASP.NET Core
- Intermediate Language
- JIT
- CLR
- Base Class Library
- NuGet
- Static typing
- Nullable reference type
- String interpolation
- Guard clause
- LINQ
- Class
- Object
- Constructor
- Property
- Encapsulation
- Inheritance
- Polymorphism
- Abstraction
- Interface
- Open/Closed Principle
- Dependency Injection
- Singleton
- Scoped
- Transient
- Middleware
- CORS
- Authentication
- Authorization
- API
- Web API
- REST
- Stateless
- Uniform interface
- Resource
- Endpoint
- HTTP method
- Idempotent
- HTTP status code
- JSON
- Pagination
- API versioning
- Problem Details
- Controller
- Service
- Repository
- Model
- DTO
- Attribute routing
- Model binding
- Swagger
- OpenAPI
- Postman
- Validation
- Exception handling
- Structured logging
- Trace ID
- HTTPS
- JWT
- RBAC
- Least privilege
- Secret store

# Verification

- PDF page count checked directly: 57
- Markdown page sections checked: 57
- Exact page order preserved from Page 01 to Page 57.
- Source text captured for every page.
- All source code examples preserved in language-tagged fenced blocks.
- Tables and visual workflows reconstructed with Markdown tables and tagged ASCII/text diagrams.
- Major-topic exam tips, common mistakes and likely questions included.

PDF pages: 57 / MD page sections: 57 ✅
