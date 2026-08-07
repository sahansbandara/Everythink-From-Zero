# SE3090 - Software Engineering Frameworks
## Lab Practical 04 - Database Design, Authentication, Authorization & Secure Full-Stack Integration

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Lab practical | Lab Practical 04 |
| Lab title | Database Design, Authentication, Authorization & Secure Full-Stack Integration |
| Related lecture | Lecture 04 - Database Design, Authentication, Authorization and Integration |
| Duration | 2 hours (in-lab) |
| Learning outcomes | LO2 - Apply frameworks & tools; LO3 - Best practices for integration & quality; LO4 - Select & justify approaches |
| Stack | C# 12; .NET 8; ASP.NET Core; PostgreSQL; EF Core; JWT; Swagger / Postman |
| Mode | Individual coding; Word document + project ZIP submitted to CourseWeb within the session |
| Total PDF pages | 20 |

> **Source note:** This Markdown file follows the uploaded PDF page by page. All original instructions, code, commands, tables, examples, expected outputs, security notes, questions, submission rules, and marking criteria are preserved in the same order. Supplementary explanations and answer guides are clearly separated from the original source content.

---

# Table of Contents

- [Page 01 - Lab Overview, Introduction, Continuity, and Objectives](#page-01---lab-overview-introduction-continuity-and-objectives)
- [Page 02 - Lab Objectives, Required Tools, NuGet Packages, and Time Plan](#page-02---lab-objectives-required-tools-nuget-packages-and-time-plan)
- [Page 03 - CampusEats Secure Menu API Scenario](#page-03---campuseats-secure-menu-api-scenario)
- [Page 04 - Task 01: Design the Database Schema in 3NF](#page-04---task-01-design-the-database-schema-in-3nf)
- [Page 05 - Task 01 Expected Output](#page-05---task-01-expected-output)
- [Page 06 - Task 02: PostgreSQL and EF Core Part A](#page-06---task-02-postgresql-and-ef-core-part-a)
- [Page 07 - Task 02: Migration and EF Core Menu Service](#page-07---task-02-migration-and-ef-core-menu-service)
- [Page 08 - Task 02: CRUD Persistence, Scoped Lifetime, and Seed Data](#page-08---task-02-crud-persistence-scoped-lifetime-and-seed-data)
- [Page 09 - Task 02: Persistence Proof and Expected Output](#page-09---task-02-persistence-proof-and-expected-output)
- [Page 10 - Task 03: User Registration with Password Hashing](#page-10---task-03-user-registration-with-password-hashing)
- [Page 11 - Task 03: Registration Completion and Expected Output](#page-11---task-03-registration-completion-and-expected-output)
- [Page 12 - Task 04: JWT Configuration and Authentication Setup](#page-12---task-04-jwt-configuration-and-authentication-setup)
- [Page 13 - Task 04: Login and JWT Token Generation](#page-13---task-04-login-and-jwt-token-generation)
- [Page 14 - Task 04 Expected Output](#page-14---task-04-expected-output)
- [Page 15 - Task 05: RBAC and Secure-Flow Testing](#page-15---task-05-rbac-and-secure-flow-testing)
- [Page 16 - Task 05 Expected Output and Security Note](#page-16---task-05-expected-output-and-security-note)
- [Page 17 - Quick Test](#page-17---quick-test)
- [Page 18 - Quick Test Submission Reminder](#page-18---quick-test-submission-reminder)
- [Page 19 - Submission Instructions and Marking Guide Part 1](#page-19---submission-instructions-and-marking-guide-part-1)
- [Page 20 - Marking Guide Part 2](#page-20---marking-guide-part-2)
- [Full Lab Summary](#full-lab-summary)
- [Architecture and Security Diagrams](#architecture-and-security-diagrams)
- [Key Definitions Table](#key-definitions-table)
- [Database Design Revision](#database-design-revision)
- [Authentication and Authorization Revision](#authentication-and-authorization-revision)
- [Important Code Snippets](#important-code-snippets)
- [Quick Test Answer Guide](#quick-test-answer-guide)
- [Likely Exam and Viva Questions](#likely-exam-and-viva-questions)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Quick Revision Table](#quick-revision-table)
- [Key Terms](#key-terms)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)
- [Verification](#verification)

---

# Page-by-Page Lab Notes

## Page 01 - Lab Overview, Introduction, Continuity, and Objectives

### Original Page Content

**SE3090 - Software Engineering Frameworks**

**Lab Practical 04**

**Database Design, Authentication, Authorization & Secure Full-Stack Integration**

| Item | Details |
|---|---|
| Lab Practical Number | Lab 04 |
| Lab Title | Database Design, Authentication, Authorization & Secure Full-Stack Integration |
| Related Lecture | Lecture 04 - Database Design, Authentication, Authorization and Integration |
| Duration | 2 Hours (in-lab) |
| Learning Outcomes | LO2 - Apply frameworks & tools; LO3 - Best practices for integration & quality; LO4 - Select & justify approaches |
| Stack | C# 12; .NET 8; ASP.NET Core; PostgreSQL; EF Core; JWT; Swagger / Postman |
| Mode | Individual coding; Word document + project ZIP submitted to CourseWeb within the session |

### Introduction

This lab gives the CampusEats API **memory and a lock**.

Lecture 04 covered:

- Relational database design.
- Entities.
- Relationships.
- Primary and foreign keys.
- Normalization to 3NF.
- Connecting ASP.NET Core to PostgreSQL using Entity Framework Core.
- Authentication and authorization.
- Password hashing.
- JWT tokens.
- Role-based access control.

During the two-hour session, students:

- Design a small schema.
- Connect EF Core to PostgreSQL.
- Implement registration and login using JWT.
- Protect endpoints by role.

The implementation and explanations should be based on:

- Lecture 04.
- The LankaMart ER diagram and security case study, adapted to CampusEats.
- Class examples:
  - The **foreign key on the many side** rule.
  - Authentication versus authorization.
  - `401` versus `403`.
  - JWT `header.payload.signature`.
  - `[Authorize(Roles=...)]`.
  - Default-deny security.

### Continuity with Lab 03

In Lab 03, the CampusEats Menu API used in-memory data.

In this lab, students extend the same project by:

- Replacing in-memory storage with PostgreSQL via EF Core.
- Adding user accounts.
- Restricting menu write operations so only an Admin can change the menu.

### If Time Is Short

The authentication code is the longest part.

Priority order:

1. Database wiring - Tasks 01-02.
2. Registration - Task 03.
3. Login and JWT - Task 04.
4. Task 05 authorization if time remains.

If Task 05 cannot be completed:

- Protect at least one endpoint.
- Explain the remaining flow in words.
- Partial but well-explained work can earn marks.

If Task 02 Part B, moving the menu to the database, is taking too long:

- Continue to the authentication tasks.
- The in-memory menu still works.
- Part B can be completed after Task 05.

### Lab Objectives - Beginning

The page introduces the objective list, which continues on Page 02.

### Visual Explanation

The page uses:

- A dark-blue lab-title band.
- A metadata table.
- A blue continuity callout.
- An orange "If Time Is Short" priority box.
- A section for learning objectives.

The development progression is:

```text
Lab 03
In-Memory Menu API
        |
        v
Lab 04
PostgreSQL Persistence
        |
        v
User Registration
        |
        v
JWT Authentication
        |
        v
Role-Based Authorization
```

### Explanation

The lab adds two major architectural capabilities to the previous API:

1. **Persistence** - data survives application restarts.
2. **Security** - the system identifies users and controls what they are allowed to do.

### Definition

**Persistence:** The ability to store data so that it remains available after the application process stops or restarts.

**Simple meaning:** Data does not disappear when the API restarts.

### Definition

**Authentication:** The process of proving who a user is.

**Simple meaning:** "Who are you?"

### Definition

**Authorization:** The process of checking what an authenticated user is permitted to do.

**Simple meaning:** "What are you allowed to do?"

### Exam Tip

The key conceptual chain is:

```text
Database Design -> Persistence -> Authentication -> Authorization
```

### Common Mistake

Do not confuse authentication and authorization. A user can be correctly authenticated but still be forbidden from an Admin-only action.

---

## Page 02 - Lab Objectives, Required Tools, NuGet Packages, and Time Plan

### Original Page Content

### Lab Objectives - Continued

By the end of the lab, students should be able to:

- Design a normalized relational schema identifying entities, primary keys, and foreign keys, applied to 3NF. `(LO3, LO4)`
- Connect ASP.NET Core to PostgreSQL with EF Core through:
  - A `DbContext`.
  - A connection string.
  - A migration that creates the tables. `(LO2, LO3)`
- Implement user registration with hashed passwords:
  - Store a password hash.
  - Never store plaintext passwords. `(LO2, LO3)`
- Implement login that issues a JWT.
- Explain the token's:
  - Header.
  - Payload.
  - Signature. `(LO2, LO3)`
- Protect endpoints with role-based authorization using:
  - `[Authorize]`
  - `[Authorize(Roles="Admin")]`
- Correctly distinguish:
  - `401 Unauthorized`
  - `403 Forbidden` `(LO2, LO3, LO4)`
- Justify:
  - Password hashing.
  - Stateless JWT.
  - RBAC. `(LO4)`

### Required Tools / Software

- **.NET 8 SDK**
  - Verify using:

```bash
dotnet --version
```

- **PostgreSQL + pgAdmin or psql**
  - Used to create and inspect the database and its records.

- **EF Core CLI**
  - Install once using:

```bash
dotnet tool install --global dotnet-ef --version 8.*
```

- **Lab 03 project**
  - `CampusEats.Api`, or create a fresh Web API.

- **Swagger and/or Postman**
  - Test registration.
  - Test login.
  - Test protected endpoints using a Bearer token.

- **Editor**
  - Visual Studio 2022.
  - Rider.
  - VS Code with C# Dev Kit.

### NuGet Packages You Will Add

- `Npgsql.EntityFrameworkCore.PostgreSQL`
- `Microsoft.EntityFrameworkCore.Design`
- `BCrypt.Net-Next`
- `Microsoft.AspNetCore.Authentication.JwtBearer`

> The `--version 8.*` pins matter because the project targets .NET 8. The newest package majors target .NET 10, so an unpinned install may fail to restore in this project.

### Lab Time Plan - 120 Minutes

| Time | Activity | Output |
|---|---|---|
| 0:00-0:08 | Briefing and recap of Lecture 04: schema, EF Core, JWT, RBAC | Ready to build |
| 0:08-0:20 | Task 01 - Design the database schema in 3NF | ER + table design |
| 0:20-0:55 | Task 02 - EF Core + PostgreSQL + menu to database | Menu served from DB |
| 0:55-1:15 | Task 03 - User registration with password hashing | Register endpoint works |
| 1:15-1:38 | Task 04 - Login + JWT token generation | Login returns a token |
| 1:38-1:52 | Task 05 - Protect endpoints with RBAC + test | 401 / 403 / 200 verified |
| 1:52-2:00 | Quick test + screenshots, ZIP, and submit | Submitted `.docx` + `.zip` |

### How to Use This Plan

The times are a guide.

The PDF emphasizes:

- Connect PostgreSQL early.
- Apply the migration early.
- Later tasks depend on the database connection.
- Authentication Tasks 03-04 are the heart of the lab.

### Visual Explanation

```text
Schema Design
    |
    v
EF Core + PostgreSQL
    |
    v
Registration + Hashing
    |
    v
Login + JWT
    |
    v
RBAC Protection
    |
    v
Quick Test + Submission
```

### Exam Tip

Know the purpose of the four packages:

| Package | Purpose |
|---|---|
| `Npgsql.EntityFrameworkCore.PostgreSQL` | EF Core provider for PostgreSQL |
| `Microsoft.EntityFrameworkCore.Design` | Supports migrations and EF design-time commands |
| `BCrypt.Net-Next` | Password hashing and verification |
| `Microsoft.AspNetCore.Authentication.JwtBearer` | JWT Bearer authentication |

### Common Mistake

Do not install mismatched major versions of EF Core or JWT packages into a .NET 8 project.

---

## Page 03 - CampusEats Secure Menu API Scenario

### Original Page Content

### Mini Project Scenario

**CampusEats - Secure Menu API with User Accounts & Roles**

The CampusEats backend is being secured.

Requirements:

- The menu must be stored in a real PostgreSQL database.
- Anyone can browse the menu.
- Only an Admin may:
  - Add a dish.
  - Change a dish.
  - Delete a dish.
- Customers can:
  - Register.
  - Log in.
  - Receive a token that identifies them on each request.

This mirrors the lecture's LankaMart security case study:

- Real database behind the API.
- Default-deny authorization on endpoints that change data.

### Entities for This Lab

| Entity | Fields |
|---|---|
| User | **Id (PK)**, Name, Email `(unique)`, PasswordHash, Role `(Customer \| Admin)`, CreatedAt |
| MenuItem | **Id (PK)**, Name, Price `(decimal)`, Category, Available |

> For a two-hour lab, these two entities are enough to exercise the complete database + authentication + RBAC flow.

The full assignment would use a more complete schema similar to the lecture's LankaMart ER diagram:

- Customers.
- Orders.
- Order items.
- Products.
- Categories.

The full RBAC design in the lecture uses a users-to-roles junction design.

This lab simplifies the design to a single `Role` column, as flagged in the lecture's ER diagram.

### Endpoints to Add or Secure

| Method | Path | Access | Purpose |
|---|---|---|---|
| `POST` | `/api/auth/register` | Public | Create a Customer account |
| `POST` | `/api/auth/login` | Public | Log in and receive a JWT |
| `GET` | `/api/menu` | Public | Browse the menu |
| `POST / PUT / DELETE` | `/api/menu` / `/api/menu/{id}` | Admin only | Manage the menu |

### Visual Explanation

The access model is:

```text
Public User
├── Register
├── Login
└── Browse Menu

Authenticated Customer
└── Browse Menu

Authenticated Admin
├── Browse Menu
├── Create Menu Item
├── Update Menu Item
└── Delete Menu Item
```

The lab's simplified data model is:

```text
User
├── Id
├── Name
├── Email
├── PasswordHash
├── Role
└── CreatedAt

MenuItem
├── Id
├── Name
├── Price
├── Category
└── Available
```

### Definition

**Role-Based Access Control - RBAC:** An authorization model in which permissions are assigned to roles and users receive permissions through their roles.

**Simple meaning:** A user's role determines what they can do.

### Definition

**Default deny:** An authorization principle where access is denied unless it is explicitly allowed.

**Simple meaning:** Protected operations are closed unless the user has permission.

### Exam Tip

The lab's security rule is:

```text
GET menu = public
POST / PUT / DELETE menu = Admin only
```

### Common Mistake

Do not expose write endpoints publicly just because the UI hides the buttons. The API itself must enforce authorization.

---

## Page 04 - Task 01: Design the Database Schema in 3NF

### Original Page Content

**Task 01 - 12 minutes - LO3, LO4**

### Design the Database Schema - 3NF

Before writing code:

- Identify entities and relationships.
- Choose primary keys.
- Choose foreign keys.
- Check that each table is in third normal form - 3NF:
  - Atomic columns.
  - No partial dependencies.
  - No transitive dependencies.

### Step-by-Step Instructions

1. List the entities and their attributes:
   - `User`
   - `MenuItem`
2. Mark the primary key of each.
3. State the relationship that would exist in the full system:
   - One `User` places many `Orders`.
4. Using the lecture rule, state which side holds the foreign key.
5. Complete the table design below.
6. Confirm each table is in 3NF using one sentence.

### Original Table Design to Complete

| Column | Type | Key / Constraint |
|---|---|---|
| `users.id` |  |  |
| `users.email` |  |  |
| `users.password_hash` |  |  |
| `users.role` |  |  |
| `menu_items.id` |  |  |
| `menu_items.price` |  |  |

### Reference: Schema the EF Core Migration Will Create

Students do not need to type this SQL.

The SQL is presented in the lecture's snake_case conceptual style.

The actual EF Core migration uses quoted PascalCase names such as:

- `"Users"`
- `"MenuItems"`
- `"PasswordHash"`

and IDENTITY columns.

Defaults are handled in C#, so pgAdmin displays the EF-generated schema.

### PostgreSQL DDL - Conceptual Design / Lecture Style

```sql
CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    name          TEXT          NOT NULL,
    email         TEXT          NOT NULL UNIQUE,   -- no dupes
    password_hash TEXT          NOT NULL,
    role          TEXT          NOT NULL DEFAULT 'Customer',
    created_at    TIMESTAMPTZ   NOT NULL DEFAULT now()
);

CREATE TABLE menu_items (
    id        SERIAL PRIMARY KEY,
    name      TEXT          NOT NULL,
    price     NUMERIC(10,2) NOT NULL,   -- money = NUMERIC
    category TEXT           NOT NULL,
    available BOOLEAN       NOT NULL DEFAULT TRUE
);
```

### Visual Explanation

Normalization goal:

```text
Entity
  |
  v
Atomic Attributes
  |
  v
Primary Key
  |
  v
No Partial Dependencies
  |
  v
No Transitive Dependencies
  |
  v
3NF Table
```

Foreign-key rule:

```text
User 1 -------- * Orders
                    |
                    v
              UserId foreign key
              lives on the many side
```

### Definition

**Primary key:** A column or set of columns that uniquely identifies each row.

**Simple meaning:** The unique identity of a record.

### Definition

**Foreign key:** A column referencing a key in another table.

**Simple meaning:** The value that connects related records.

### Definition

**Third Normal Form - 3NF:** A normalized table form where attributes are atomic and non-key attributes depend on the key, the whole key, and nothing but the key.

**Simple meaning:** The table avoids repeated groups, partial dependencies, and transitive dependencies.

### Supplementary Task 01 Answer Guide

> The following table is a study guide derived directly from the supplied conceptual SQL. It is not filled in on the original worksheet.

| Column | Type | Key / Constraint |
|---|---|---|
| `users.id` | `SERIAL` / integer identity | Primary key |
| `users.email` | `TEXT` | `NOT NULL`, `UNIQUE` |
| `users.password_hash` | `TEXT` | `NOT NULL` |
| `users.role` | `TEXT` | `NOT NULL`, default `Customer` |
| `menu_items.id` | `SERIAL` / integer identity | Primary key |
| `menu_items.price` | `NUMERIC(10,2)` | `NOT NULL` |

**FK-side answer:** In a one-to-many `User -> Orders` relationship, the foreign key is stored in the `Orders` table, the many side.

### Exam Tip

For one-to-many:

```text
Foreign key goes on the many side.
```

### Common Mistake

Do not automatically create a junction table for every one-to-many relationship. Junction tables are normally required for many-to-many relationships.

---

## Page 05 - Task 01 Expected Output

### Original Page Content

### Expected Output

Students should produce:

- A completed table design for the two entities.
- Primary keys and foreign keys identified.
- Types included.
- The foreign-key-side answer for the `User -> Orders` relationship.
- A one-line 3NF justification for each table.
- An ER sketch is welcome:
  - Hand-drawn, or
  - Created with a tool.

### Visual Explanation

This page contains a single highlighted expected-output box and otherwise large white space.

The expected evidence can be summarized as:

```text
Table Design
    +
PK / FK Identification
    +
Correct FK Side
    +
3NF Justifications
    +
Optional ER Sketch
```

### Explanation

Task 01 is a design task. The goal is to show that the student understands the schema before implementing it with EF Core.

### Exam Tip

When justifying 3NF, explicitly mention:

- Atomic columns.
- Dependence on the primary key.
- No transitive dependency.

### Common Mistake

Do not submit only an ER diagram without the requested table-design details and 3NF explanations.

---

## Page 06 - Task 02: PostgreSQL and EF Core Part A

### Original Page Content

**Task 02 - 35 minutes - LO2, LO3**

### Connect to PostgreSQL with EF Core

Extend the Lab 03 `CampusEats.Api` project.

Goals:

- Add EF Core PostgreSQL packages.
- Create a `DbContext`.
- Configure the connection.
- Run a migration that creates the database tables.

### Part A - Wire EF Core and Create the Tables

#### Step 1 - Create Database

In PostgreSQL, using pgAdmin or psql, create:

```text
campuseats
```

#### Step 2 - Add Packages and EF Core Tool

Run these commands inside the project folder:

```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 8.*
dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.*
dotnet tool install --global dotnet-ef --version 8.*
```

#### Step 3 - Add the User Model

**File:** `Models/User.cs`

```csharp
namespace CampusEats.Api.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public string PasswordHash { get; set; } = "";
    public string Role { get; set; } = "Customer"; // or Admin
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
```

The `MenuItem` model already exists from Lab 03.

#### Step 4 - Create the DbContext

**File:** `Data/AppDbContext.cs`

```csharp
using CampusEats.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CampusEats.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> o)
        : base(o) { }

    public DbSet<MenuItem> MenuItems => Set<MenuItem>();
    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder b)
    {
        b.Entity<User>()                       // unique email
         .HasIndex(u => u.Email).IsUnique();
    }
}
```

#### Step 5 - Add the Connection String

**File:** `appsettings.json`

```json
"ConnectionStrings": {
  "Default": "Host=localhost;Database=campuseats;Username=postgres;Password=postgres"
}
```

> The lab says to use your own PostgreSQL password.

### Visual Explanation

EF Core connection architecture:

```text
ASP.NET Core
    |
    v
AppDbContext
    |
    v
Npgsql EF Core Provider
    |
    v
PostgreSQL
    |
    v
campuseats database
```

### Definition

**DbContext:** The central EF Core object used to query and save entities.

**Simple meaning:** The C# gateway between the application and the database.

### Definition

**DbSet:** An EF Core representation of a table-like collection of entities.

**Simple meaning:** A C# entry point for working with records of one entity type.

### Exam Tip

The unique email rule is enforced with:

```csharp
b.Entity<User>()
 .HasIndex(u => u.Email).IsUnique();
```

### Common Mistake

Do not rely only on application code to prevent duplicate email addresses. The schema also defines uniqueness.

---

## Page 07 - Task 02: Migration and EF Core Menu Service

### Original Page Content

### Step 6 - Register the DbContext

Add this above `builder.Build()`.

**File:** `Program.cs`

```csharp
using CampusEats.Api.Data;
using Microsoft.EntityFrameworkCore;

builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseNpgsql(builder.Configuration
        .GetConnectionString("Default")));
```

### Step 7 - Create and Apply the Migration

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### Step 8 - Confirm Tables

In pgAdmin, verify that the `campuseats` database contains:

- `Users`
- `MenuItems`

### Part B - Move the Menu from Memory to the Database

Lab 03 used:

- An in-memory `List<MenuItem>`.
- `AddSingleton`.

With a real database:

- The menu service uses EF Core.
- The service lifetime changes to `AddScoped`.

The PDF emphasizes an important design benefit:

> `IMenuService` and `MenuController` do not need to change because the controller depends on the interface rather than the storage implementation.

### Step 9 - Replace `MenuService.cs`

**File:** `Services/MenuService.cs`

```csharp
using CampusEats.Api.Data;
using CampusEats.Api.Dtos;
using CampusEats.Api.Models;

namespace CampusEats.Api.Services;

public class MenuService : IMenuService
{
    private readonly AppDbContext _db;      // was: List<MenuItem> + _nextId
    public MenuService(AppDbContext db) => _db = db;

    private static MenuItemDto ToDto(MenuItem m) =>
        new(m.Id, m.Name, m.Price, m.Category, m.Available);

    public IEnumerable<MenuItemDto> GetAll() =>
        _db.MenuItems.OrderBy(m => m.Id).ToList().Select(ToDto);

    public MenuItemDto? GetById(int id)
    {
        var m = _db.MenuItems.Find(id);
        return m is null ? null : ToDto(m);
    }

    public MenuItemDto Create(CreateMenuItemDto dto)
    {
        var item = new MenuItem
        {
            Name = dto.Name,                // no Id — the database assigns it
            Price = dto.Price,
```

The `Create`, `Update`, and `Delete` code continues on Page 08.

### Visual Explanation

The architecture changes internally:

```text
Before - Lab 03
MenuController
      |
      v
IMenuService
      |
      v
MenuService
      |
      v
List<MenuItem>

After - Lab 04
MenuController
      |
      v
IMenuService
      |
      v
MenuService
      |
      v
AppDbContext
      |
      v
PostgreSQL
```

The controller remains unchanged because it depends on the abstraction.

### Definition

**Migration:** A versioned description of database-schema changes generated and applied by EF Core.

**Simple meaning:** A reproducible way to create or modify the database structure.

### Definition

**Dependency inversion / abstraction benefit:** Higher-level code depends on an interface rather than a concrete storage implementation.

**Simple meaning:** The controller does not care whether data comes from a list or a database.

### Exam Tip

This is a key architecture example:

```text
Storage implementation changed.
Controller did not change.
Reason: dependency on IMenuService.
```

### Common Mistake

Do not rewrite `MenuController` merely because the storage changed.

---

## Page 08 - Task 02: CRUD Persistence, Scoped Lifetime, and Seed Data

### Original Page Content

The `Create` method continues:

```csharp
            Category = dto.Category,
            Available = true
        };
        _db.MenuItems.Add(item);
        _db.SaveChanges();                                   // INSERT
        return ToDto(item);
    }

    public bool Update(int id, CreateMenuItemDto dto)
    {
        var m = _db.MenuItems.Find(id);
        if (m is null) return false;        // guard clause
        m.Name = dto.Name;                  // replaces the editable fields
        m.Price = dto.Price;
        m.Category = dto.Category;
        _db.SaveChanges();                  // UPDATE
        return true;
    }

    public bool Delete(int id)
    {
        var m = _db.MenuItems.Find(id);
        if (m is null) return false;
        _db.MenuItems.Remove(m);
        _db.SaveChanges();                                      // DELETE
        return true;
    }
}
```

### Step 10 - Fix the Service Lifetime

A scoped `AppDbContext` cannot be injected into a singleton service.

The PDF warns that the application would crash at startup.

Change:

```csharp
// was: builder.Services.AddSingleton<IMenuService, MenuService>();
builder.Services.AddScoped<IMenuService, MenuService>();   // one per request
```

### Step 11 - Seed the Menu

Below:

```csharp
var app = builder.Build();
```

insert:

```csharp
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    if (!db.MenuItems.Any())
    {
        db.MenuItems.AddRange(
            new MenuItem { Name = "Kottu Roti", Price = 750m, Category = "Mains"   },
            new MenuItem { Name = "Fried Rice", Price = 850m, Category = "Mains"   },
            new MenuItem { Name = "Watalappan", Price = 350m, Category = "Dessert" });
        db.SaveChanges();
    }
}
```

If required, add:

```csharp
using CampusEats.Api.Models;
```

at the top.

### Step 12 - Prove Persistence

Run the API.

Test:

```http
GET /api/menu
```

Expected:

- Three seeded dishes are returned from PostgreSQL.

Then:

1. `POST` a new dish.
2. Stop the application.
3. Run `dotnet run` again.
4. Confirm the new dish still exists.

In Lab 03, in-memory data would disappear after restart.

### Step 13 - View the Data in PostgreSQL

Run:

```sql
SELECT * FROM "MenuItems";
```

The PDF specifically notes the quoted PascalCase table name created by EF Core.

### Visual Explanation

Persistence proof:

```text
POST Dish
   |
   v
PostgreSQL Stores Row
   |
Stop API
   |
Restart API
   |
GET /api/menu
   |
   v
Dish Still Exists
```

Service lifetime relationship:

```text
HTTP Request
    |
    v
Scoped MenuService
    |
    v
Scoped AppDbContext
    |
    v
Database
```

### Definition

**Scoped lifetime:** One service instance is created for each request scope.

**Simple meaning:** A new service and `DbContext` are used for each HTTP request.

### Definition

**Seed data:** Initial records inserted so the application has useful starting data.

**Simple meaning:** Starter data.

### Exam Tip

The critical lifetime rule:

```text
DbContext-backed service -> AddScoped
```

### Common Mistake

Do not inject a scoped `DbContext` into a singleton service.

---

## Page 09 - Task 02: Persistence Proof and Expected Output

### Original Page Content

The page completes the PostgreSQL query:

```sql
SELECT * FROM "MenuItems";
```

### Why the Controller Did Not Change

The PDF explains:

- The service implementation changed:
  - From an in-memory list.
  - To a database.
- `MenuController` still compiled unchanged.
- `MenuController` depends on:
  - `IMenuService`
  - Not the data-storage implementation.
- This is the dependency-injection payoff from Lecture 03.
- `AddScoped` is the correct lifetime for `DbContext`-backed services.

### Expected Output

Students should provide evidence that:

- The migration runs successfully.
- The tables are created.
- pgAdmin shows:
  - `Users`
  - `MenuItems`
- `GET /api/menu` returns the three seeded dishes from PostgreSQL.
- A newly created dish survives application restart.
- `MenuService` uses `AppDbContext`.
- `MenuService` is registered with `AddScoped`.
- The in-memory list has been removed.

### Visual Explanation

The page contains:

- A code block at the top.
- A blue explanatory box about dependency injection.
- A blue expected-output box.

### Explanation

Task 02 proves both **database integration** and **architectural decoupling**.

### Exam Tip

If asked why interfaces matter, use this lab as the example:

> The storage changed without requiring the controller to change.

### Common Mistake

Do not claim persistence merely because data remains visible while the application is running. Restart the API and prove the record still exists.

---

## Page 10 - Task 03: User Registration with Password Hashing

### Original Page Content

**Task 03 - 20 minutes - LO2, LO3**

### User Registration with Password Hashing

The registration endpoint follows the lecture's golden rule:

> **Never store a plaintext password. Store a one-way hash.**

The lab uses BCrypt, which salts and hashes passwords.

### Step 1 - Add BCrypt

```bash
dotnet add package BCrypt.Net-Next
```

### Step 2 - Create Authentication DTOs

**File:** `Dtos/AuthDtos.cs`

```csharp
using System.ComponentModel.DataAnnotations;

namespace CampusEats.Api.Dtos;

public record RegisterDto(
    [Required, StringLength(80)] string Name,
    [Required, EmailAddress]     string Email,
    [Required, MinLength(8)]     string Password);

public record LoginDto(string Email, string Password);
```

### Step 3 - Create `AuthController`

**File:** `Controllers/AuthController.cs`

```csharp
using CampusEats.Api.Data;
using CampusEats.Api.Dtos;
using CampusEats.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CampusEats.Api.Controllers;

[ApiController]
[Route("api/[controller]")]            // → /api/auth
public class AuthController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly IConfiguration _cfg;
    public AuthController(AppDbContext db,
                          IConfiguration cfg)
    { _db = db; _cfg = cfg; }

    [HttpPost("register")]
    public async Task<IActionResult> Register(
        RegisterDto dto)
    {
        var taken = await _db.Users
            .AnyAsync(u => u.Email == dto.Email);
        if (taken) return Conflict("Email already used");

        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
```

The method continues on Page 11.

### Visual Explanation

Registration flow:

```text
Register Request
Name + Email + Password
        |
        v
Validate DTO
        |
        v
Check Email Uniqueness
        |
   +----+----+
   |         |
Taken      Available
   |         |
409        BCrypt Hash
             |
             v
          Save User
             |
             v
         201 Created
```

### Definition

**Password hashing:** Applying a one-way cryptographic transformation to a password so the original password is not stored.

**Simple meaning:** Store a value used to verify the password, not the password itself.

### Definition

**Salt:** Random data incorporated into password hashing so identical passwords do not produce the same stored hash.

**Simple meaning:** Extra randomness that strengthens stored password protection.

### Exam Tip

The create DTO uses:

- `[EmailAddress]`
- `[MinLength(8)]`

and registration checks duplicate email before insert.

### Common Mistake

Do not encrypt passwords with a reversible key for normal authentication storage. The lecture rule is one-way salted hashing.

---

## Page 11 - Task 03: Registration Completion and Expected Output

### Original Page Content

The registration method continues:

```csharp
            PasswordHash =
                BCrypt.Net.BCrypt.HashPassword(dto.Password),           // hash!
            Role = "Customer"
        };
        _db.Users.Add(user);
        await _db.SaveChangesAsync();
        return StatusCode(201, new                              // 201 Created
            { user.Id, user.Email, user.Role });
    }
}
```

### Step 4 - Test Registration

Run the API and send:

```http
POST /api/auth/register
```

using Swagger with:

- Name.
- Email.
- Password.

Expected:

```text
201 Created
```

The PDF repeats the Lab 03 REST rule:

> A `POST` that creates a resource returns `201`, not `200`.

### Step 5 - Verify Stored Hash

In pgAdmin:

- Open the `Users` table.
- Confirm `"PasswordHash"` contains a hash.
- The hash should start with `$2`.
- The plaintext password must not be stored.

### Expected Output

Students should show:

- A working registration endpoint.
- A created `Customer`.
- A screenshot of the `Users` table showing:
  - The stored BCrypt hash.
  - No plaintext password.
- A duplicate email request returning:

```text
409 Conflict
```

### Visual Explanation

Stored-data comparison:

```text
Bad
Password = "mypassword123"

Correct
PasswordHash = "$2..."
```

### Definition

**409 Conflict:** An HTTP status indicating that the request conflicts with the current state of the resource.

**Simple meaning:** The requested change cannot be completed because something already exists or conflicts.

### Exam Tip

Duplicate email:

```text
POST register with used email -> 409 Conflict
```

### Common Mistake

Do not return the password hash in the registration response.

---

## Page 12 - Task 04: JWT Configuration and Authentication Setup

### Original Page Content

**Task 04 - 23 minutes - LO2, LO3**

### Login & JWT Token Generation

The login endpoint:

- Verifies a submitted password.
- Returns a JWT.

The PDF recalls JWT structure:

```text
header.payload.signature
```

The signature proves that the token was issued by the server and has not simply been forged.

### Part A - Configure JWT Authentication

#### Step 1 - Add JWT Settings

**File:** `appsettings.json`

```json
"Jwt": {
  "Key": "dev-only-secret-change-me-min-32-characters!!",
  "Issuer": "CampusEats",
  "Audience": "CampusEatsUsers"
}
```

#### Step 2 - Install JWT Bearer Package

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 8.*
```

### Configure Authentication

**File:** `Program.cs`

```csharp
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var jwt = builder.Configuration.GetSection("Jwt");
var key = Encoding.UTF8.GetBytes(jwt["Key"]!);

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt => opt.TokenValidationParameters = new()
    {
        ValidateIssuer = true,   ValidIssuer = jwt["Issuer"],
        ValidateAudience = true, ValidAudience = jwt["Audience"],
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateLifetime = true
    });
builder.Services.AddAuthorization();
```

### Step 3 - Configure Swagger JWT Authorization

The template Swagger configuration does not initially have the security definition required to display the **Authorize** button.

Replace the existing `AddSwaggerGen()` line.

Add:

```csharp
using Microsoft.OpenApi.Models;
```

Then use:

```csharp
builder.Services.AddSwaggerGen(c =>
{
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization", In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http, Scheme = "bearer",
        BearerFormat = "JWT",
        Description = "Paste ONLY the token - no 'Bearer ' prefix."
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
```

The Swagger security requirement continues on Page 13.

### Visual Explanation

JWT validation checks:

```text
Incoming Token
    |
    +--> Issuer valid?
    +--> Audience valid?
    +--> Signature valid?
    +--> Token lifetime valid?
    |
    v
Authenticated Identity
```

### Definition

**JWT - JSON Web Token:** A compact signed token carrying claims that can identify a user and support authorization.

**Simple meaning:** A signed token the client sends to prove identity.

### Definition

**Claim:** A named piece of information inside the token, such as user ID, email, or role.

**Simple meaning:** A fact about the authenticated user.

### Exam Tip

Remember the three parts:

```text
Header
Payload
Signature
```

### Common Mistake

Do not treat the JWT payload as secret just because it is encoded. The signature provides integrity/authenticity, not confidentiality.

---

## Page 13 - Task 04: Login and JWT Token Generation

### Original Page Content

The Swagger security requirement continues:

```csharp
        { new OpenApiSecurityScheme { Reference = new OpenApiReference
            { Type = ReferenceType.SecurityScheme, Id = "Bearer" } },
          Array.Empty<string>() }
    });
});
```

### Step 4 - Add Middleware in Correct Order

Add this above `app.MapControllers()`:

```csharp
app.UseAuthentication();                        // who are you?      (validates JWT)
app.UseAuthorization();                         // may you?          (checks roles)
```

The PDF explicitly states:

- Authentication must run before authorization.
- AuthN asks: **Who are you?**
- AuthZ asks: **May you?**

### Part B - Issue the Token on Login

#### Step 5 - Add Namespaces

**File:** `AuthController.cs`

```csharp
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
```

#### Step 6 - Add Login and Token Builder

```csharp
[HttpPost("login")]
public async Task<IActionResult> Login(LoginDto dto)
{
    var user = await _db.Users
        .FirstOrDefaultAsync(u => u.Email == dto.Email);
    if (user is null || !BCrypt.Net.BCrypt.Verify(
            dto.Password, user.PasswordHash))
        return Unauthorized("Invalid credentials");
    return Ok(new { token = CreateToken(user) });
}

private string CreateToken(User user)
{
    var jwt = _cfg.GetSection("Jwt");
    var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(jwt["Key"]!));
    var creds = new SigningCredentials(
        key, SecurityAlgorithms.HmacSha256);
    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier,
                  user.Id.ToString()),
        new Claim(ClaimTypes.Email, user.Email),
        new Claim(ClaimTypes.Role, user.Role)   // for RBAC
    };
    var token = new JwtSecurityToken(
        issuer: jwt["Issuer"], audience: jwt["Audience"],
        claims: claims,
        expires: DateTime.UtcNow.AddHours(2),
        signingCredentials: creds);
    return new JwtSecurityTokenHandler()
        .WriteToken(token);
}
```

### Step 7 - Test Login and Decode the Token

Use:

```http
POST /api/auth/login
```

For valid credentials:

- Copy the returned JWT.
- Paste it into `jwt.io`.
- Inspect:
  - Header.
  - Payload.
  - Claims.
  - Signature.
- Confirm the role claim is present.

### Visual Explanation

Login-to-token flow:

```text
Email + Password
      |
      v
Find User by Email
      |
      v
BCrypt.Verify(password, stored hash)
      |
  +---+---+
  |       |
Fail    Success
  |       |
401     Create claims
          |
          v
      Sign JWT
          |
          v
      Return token
```

JWT claims in this lab:

```text
NameIdentifier -> User Id
Email          -> User Email
Role           -> Customer or Admin
```

### Definition

**JWT signature:** A cryptographic value generated from the token data and a signing key, used to detect tampering and verify the issuer.

**Simple meaning:** Proof that the token has not been changed and was signed by the trusted server.

### Exam Tip

Role-based authorization depends on the role claim being included in the JWT.

### Common Mistake

Do not create the role claim only in the database and forget to include it in the token.

---

## Page 14 - Task 04 Expected Output

### Original Page Content

### Expected Output

- Login returns a JWT for valid credentials.
- Invalid credentials return:

```text
401 Unauthorized
```

- Students should capture a screenshot of the token decoded at `jwt.io`.
- The decoded token should show the role claim.
- Students should add a one-line note explaining what the signature is for.

### Visual Explanation

This page contains a single highlighted expected-output box and large white space.

### Supplementary Signature Note

> **JWT signature:** It allows the server to verify that the token was signed with the expected key and has not been altered after issuance.

### Exam Tip

Invalid login is an authentication failure:

```text
Wrong email or password -> 401
```

### Common Mistake

Do not confuse a wrong password with a `403`. The user has not successfully authenticated, so the correct result is `401`.

---

## Page 15 - Task 05: RBAC and Secure-Flow Testing

### Original Page Content

**Task 05 - 14 minutes - LO2, LO3, LO4**

### Protect Endpoints with RBAC & Test the Secure Flow

Requirements:

- Menu write endpoints are Admin-only.
- Menu `GET` remains public.
- Test:
  - `401`.
  - `403`.
  - `201`.

### Part A - Add Authorization

In `MenuController.cs`, add:

```csharp
using Microsoft.AspNetCore.Authorization;
```

Protect the write actions.

### POST

```csharp
[HttpPost]
[Authorize(Roles = "Admin")]        // create: Admins only
public ActionResult<MenuItemDto> Create(...) { ... }
```

### PUT

```csharp
[HttpPut("{id}")]
[Authorize(Roles = "Admin")]        // update: Admins only
public IActionResult Update(...) { ... }
```

### DELETE

```csharp
[HttpDelete("{id}")]
[Authorize(Roles = "Admin")]        // delete: Admins only
public IActionResult Delete(...) { ... }
```

`GET` actions remain public.

### Part B - Make an Admin and Test

#### Step 2 - Promote a Registered User

Register a user, then in pgAdmin run:

```sql
UPDATE "Users" SET "Role" = 'Admin' WHERE "Email" = 'you@x.com';
```

The PDF notes:

- There is no self-service Admin creation in this lab.
- Quoted PascalCase names are required because of the EF Core-generated schema.

#### Step 3 - Log In Again

Log in again as the promoted user to obtain a **fresh token** containing the `Admin` role.

#### Step 4 - Authorize Swagger

In Swagger:

- Click **Authorize**.
- Paste only the token.
- Swagger adds the `Bearer` prefix.

In Postman:

```http
Authorization: Bearer <token>
```

### Step 5 - Test and Record Results

| Request | Token Used | Expected |
|---|---|---|
| `POST /api/menu` | No token | `401 Unauthorized` |
| `POST /api/menu` | Customer token | `403 Forbidden` |
| `POST /api/menu` | Admin token | `201 Created` |
| `GET /api/menu` | No token | `200 OK` - public |

### Part C - Justify the Security Design - LO4

Write two or three sentences each answering:

1. Why store a password hash instead of the password?
2. Why use a stateless JWT instead of a server-side session?
3. Why use role-based access control instead of checking individual users in every method?

### 401 vs 403 - Know the Difference

**401 Unauthorized**

- Not authenticated.
- No token or invalid token.
- Meaning:

> "I don't know who you are."

**403 Forbidden**

- Authenticated.
- User lacks permission.
- Meaning:

> "I know who you are, but you may not."

### Visual Explanation

Authorization flow:

```text
Request to Admin Endpoint
        |
        v
Valid JWT?
   +----+----+
   |         |
  No        Yes
   |         |
 401      Is Role Admin?
             +----+----+
             |         |
            No        Yes
             |         |
            403      Execute
                       |
                       v
                   201 / 204
```

### Supplementary LO4 Justification Guide

**Why hashing?**

A password hash prevents the application from storing the user's original secret. Authentication can verify a submitted password against the stored hash without recovering the plaintext password.

**Why stateless JWT?**

A signed JWT carries the identity and claims needed by the API, so the server does not need a separate per-user session object for each request. The API validates the token and reconstructs the authenticated identity from its claims.

**Why RBAC?**

RBAC centralizes access rules around roles such as `Admin` and `Customer`. It is easier to maintain and audit than hardcoding checks for individual user IDs inside every controller action.

### Exam Tip

The distinction most likely to appear in MCQs or short questions is:

```text
401 = authentication problem
403 = authorization problem
```

### Common Mistake

After changing a database role from `Customer` to `Admin`, do not reuse the old token. The role claim inside the existing JWT does not automatically change; log in again.

---

## Page 16 - Task 05 Expected Output and Security Note

### Original Page Content

### Expected Output

Students should provide:

- Write endpoints protected by role.
- End-to-end secure-flow testing.
- Screenshots showing:
  - `401`.
  - `403`.
  - `201`.
- Short written justifications for:
  - Hashing.
  - JWT.
  - RBAC.

### Security Note - Lecture Rule

For this local two-hour lab:

- The connection string is in `appsettings.json`.
- The JWT key is in `appsettings.json`.

For a real project:

- These values are secrets.
- Use:
  - Environment variables, or
  - User-secrets.
- Never:
  - Hardcode real secrets.
  - Commit real secrets to Git.

### Visual Explanation

This page contains:

- A blue expected-output box.
- A red/orange security warning box.

Production-security transition:

```text
Local Lab
appsettings.json
    |
    v
Real Project
Environment Variables / User Secrets
    |
    v
No Secrets in Source Control
```

### Definition

**Secret:** Sensitive configuration data such as passwords, private keys, API keys, or signing keys.

**Simple meaning:** Configuration that must not be publicly exposed.

### Exam Tip

The lab's hardcoded development key is an instructional simplification, not the production recommendation.

### Common Mistake

Do not commit real PostgreSQL passwords or JWT signing keys to GitHub.

---

## Page 17 - Quick Test

### Original Page Content

**Quick Test - 8 minutes**

### Knowledge Check

Answer all questions in the Word document.

- Q1-Q5: Multiple choice.
- Q6: Database design.
- Q7: Authentication.
- Q8: Authorization scenario.

### Multiple Choice

#### Q1

Which key uniquely identifies each row in a table?

- `(a)` foreign key
- `(b)` candidate index
- `(c)` primary key
- `(d)` composite column

#### Q2

In a one-to-many relationship, one User and many Orders, the foreign key goes on:

- `(a)` the User - one side
- `(b)` the Orders - many side
- `(c)` both sides
- `(d)` neither - always use a join table

#### Q3

A logged-in user without permission for an action should receive:

- `(a)` `200 OK`
- `(b)` `401 Unauthorized`
- `(c)` `403 Forbidden`
- `(d)` `404 Not Found`

#### Q4

How should user passwords be stored?

- `(a)` As plaintext.
- `(b)` As a salted one-way hash.
- `(c)` Encrypted with the JWT key.
- `(d)` In the token.

#### Q5

A JWT has three dot-separated parts: header, payload, and:

- `(a)` cookie
- `(b)` session id
- `(c)` signature
- `(d)` checksum

### Database Design

#### Q6

A `students` table stores:

- `course1`
- `course2`
- `course3`

columns for each student's enrolments.

Questions:

- Which normalization rule does this break?
- How would you redesign it?

### Authentication

#### Q7

Describe the login-to-token flow in three short steps, from the user submitting credentials to the client holding a JWT.

### Authorization Scenario

#### Q8

A logged-in Customer calls:

```http
DELETE /api/menu/3
```

and receives:

```text
403 Forbidden
```

Explain:

- Why this is `403`, not `401`.
- Which attribute on the endpoint caused it.

### Submission Instruction

Submit the Quick Test answers inside the same Word document.

### Visual Explanation

The test covers:

```text
Database Keys
    +
Relationships
    +
Normalization
    +
Password Storage
    +
JWT Structure
    +
Authentication Flow
    +
Authorization / RBAC
```

### Exam Tip

The marking guide later provides Q1-Q5 as:

```text
(c, b, c, b, c)
```

### Common Mistake

Do not write `401` for an authenticated Customer who lacks Admin permission.

---

## Page 18 - Quick Test Submission Reminder

### Original Page Content

> Place your quick-test answers in a clearly labelled **"Quick Test"** section after your Task 01-05 answers.

### Visual Explanation

This page contains one highlighted submission-reminder box and otherwise large white space.

### Exam Tip

Use clear document headings so the evaluator can immediately locate Tasks 01-05 and Q1-Q8.

### Common Mistake

Do not upload the Quick Test as a separate document unless the lecturer explicitly instructs otherwise.

---

## Page 19 - Submission Instructions and Marking Guide Part 1

### Original Page Content

### Submission Instructions

Prepare:

- One Microsoft Word document containing all lab work.
- A project ZIP if the lecturer requests it.

### Word Document Must Include

- Student name.
- IT number.
- Lab practical number:
  - Lab 04.
- Database-design diagram or table design.
- Screenshots of PostgreSQL:
  - Tables.
  - Records.
  - Stored password hash.
- Swagger or Postman screenshots.
- Screenshots of:
  - Registration.
  - Login.
  - Protected endpoint tests.
  - `401`.
  - `403`.
  - `201`.
- Source-code snippets for important parts:
  - `User` model.
  - `AppDbContext`.
  - `AuthController`.
  - JWT setup in `Program.cs`.
  - `appsettings` configuration.
- Brief explanation for each task:
  - Two to three sentences.
- Quick Test answers:
  - Q1-Q8.

### Project ZIP - If Required

- ZIP the project folder.
- Exclude:
  - `bin`
  - `obj`
- Do not commit real secrets.

### File Naming and Upload

Word document:

```text
ITXXXXXXXX_Lab04.docx
```

Example:

```text
IT22123456_Lab04.docx
```

Project ZIP:

```text
ITXXXXXXXX_Lab04_Project.zip
```

Upload rules:

- Submit to CourseWeb.
- Submit before the end of the two-hour lab.
- Late submissions are not accepted without prior lecturer approval.

### Student Instruction

Students must refer to Lecture 04.

Implementation and explanations must be based on:

- Lecture content.
- Class explanations.
- Practical examples discussed during the lecture.

### Evaluation Criteria - 20 Marks

The marking guide rewards:

- Correct schema.
- Working database-connected API.
- Secured API.
- Justified security decisions.

### Marking Guide - Part 1

| Component | Marks | What Earns Full Marks |
|---|---:|---|
| Task 01 - Schema design | 3 | Entities with PK/FK identified; FK on the many side; each table justified as 3NF |
| Task 02 - EF Core + PostgreSQL | 4 | Packages added; `DbContext` with both `DbSet`s + unique email; connection configured; migration creates the tables; menu service moved onto EF Core with `AddScoped`; menu data survives a restart |

The Task 02 criterion continues on Page 20.

### Visual Explanation

Submission evidence map:

```text
Word Document
├── Student details
├── Database design
├── PostgreSQL evidence
├── Swagger / Postman evidence
├── Security status-code evidence
├── Important code
├── Task explanations
└── Quick Test

Optional ZIP
└── Project without bin / obj
```

### Exam Tip

The marking guide is also a completion checklist. Every phrase under "What earns full marks" should have visible evidence.

### Common Mistake

Do not submit code screenshots without the required working endpoint and database screenshots.

---

## Page 20 - Marking Guide Part 2

### Original Page Content

The Task 02 criterion completes:

- Menu service uses EF Core.
- `AddScoped` is used.
- Menu data survives restart.

### Remaining Marking Guide

| Component | Marks | What Earns Full Marks |
|---|---:|---|
| Task 03 - Registration + hashing | 4 | Register endpoint stores a BCrypt hash, never plaintext, and returns `201 Created`; duplicate email returns `409` |
| Task 04 - Login + JWT | 4 | Login verifies the password and returns a valid JWT with a role claim; AuthN/AuthZ middleware wired in order |
| Task 05 - RBAC + secure test | 3 | Write endpoints use `[Authorize(Roles="Admin")]`; `401` / `403` / `200` demonstrated; security justification is sound |
| Quick Test - Q1-Q8 | 2 | Q1-Q5 correct: `(c, b, c, b, c)`; Q6-Q8 show correct understanding |
| **Total** | **20** |  |

### Mark Weight Summary

| Component | Marks | Lab Percentage |
|---|---:|---:|
| Task 01 | 3 | 15% |
| Task 02 | 4 | 20% |
| Task 03 | 4 | 20% |
| Task 04 | 4 | 20% |
| Task 05 | 3 | 15% |
| Quick Test | 2 | 10% |
| **Total** | **20** | **100%** |

### Visual Explanation

```text
Task 01 - Schema Design           3
Task 02 - EF Core + PostgreSQL    4
Task 03 - Registration + Hashing  4
Task 04 - Login + JWT             4
Task 05 - RBAC                    3
Quick Test                        2
-----------------------------------
Total                            20
```

### Explanation

The three largest technical areas are worth four marks each:

- Database integration.
- Registration and password hashing.
- Login and JWT.

### Exam Tip

Do not ignore the status-code evidence. The rubric explicitly checks:

- `201`.
- `409`.
- `401`.
- `403`.
- `200`.

### Common Mistake

A working happy path alone is not enough. The evaluator expects negative-path security and validation evidence.

---

# Full Lab Summary

Lab 04 extends the Lab 03 CampusEats REST API by adding persistent storage and security.

The database section begins by designing two entities, `User` and `MenuItem`, and reviewing primary keys, foreign keys, and 3NF. In a one-to-many relationship, the foreign key is stored on the many side.

PostgreSQL is connected using EF Core and the Npgsql provider. `AppDbContext` exposes `Users` and `MenuItems`, and a unique index is created on user email. EF Core migrations create the database schema.

`MenuService` is changed from an in-memory list to a database-backed service. Because `AppDbContext` is scoped, `MenuService` is also changed from `AddSingleton` to `AddScoped`. The controller remains unchanged because it depends on `IMenuService`.

Registration stores a BCrypt password hash rather than plaintext. New accounts are created with the `Customer` role. Duplicate email returns `409 Conflict`.

Login verifies the submitted password against the stored hash. On success, the application creates a signed JWT carrying claims for:

- User ID.
- Email.
- Role.

JWT Bearer authentication validates issuer, audience, signature, and lifetime. Authentication middleware runs before authorization middleware.

RBAC protects menu write operations. Public users can read the menu, but only an `Admin` role can create, update, or delete dishes.

The most important security distinction is:

```text
401 Unauthorized = user is not authenticated
403 Forbidden    = user is authenticated but not permitted
```

Students must prove the complete flow using PostgreSQL, Swagger or Postman, screenshots, code snippets, written justifications, and the Quick Test.

---

# Architecture and Security Diagrams

## Full Lab Architecture

```text
Swagger / Postman / Client
          |
          v
ASP.NET Core Pipeline
├── Authentication
├── Authorization
└── Controllers
          |
          v
Services
          |
          v
AppDbContext
          |
          v
PostgreSQL
```

## Registration Flow

```text
RegisterDto
Name + Email + Password
        |
        v
Automatic / Server Validation
        |
        v
Check Unique Email
        |
        +--> Exists -> 409 Conflict
        |
        v
BCrypt Hash Password
        |
        v
Create Customer User
        |
        v
Save to PostgreSQL
        |
        v
201 Created
```

## Login Flow

```text
LoginDto
Email + Password
        |
        v
Find User
        |
        v
BCrypt.Verify
        |
   +----+----+
   |         |
 Fail      Success
   |         |
 401      Build Claims
             |
             v
          Sign JWT
             |
             v
          200 + Token
```

## JWT Structure

```text
header.payload.signature
```

## JWT Request Flow

```text
Client Sends Bearer Token
        |
        v
UseAuthentication
- issuer
- audience
- signature
- lifetime
        |
        v
Authenticated ClaimsPrincipal
        |
        v
UseAuthorization
- role / policy checks
        |
    +---+---+
    |       |
 Allowed  Denied
    |       |
 Action    403
```

## RBAC Decision

```text
Admin Endpoint Request
        |
        v
Authenticated?
   +----+----+
   |         |
  No        Yes
   |         |
 401     Role = Admin?
             +----+----+
             |         |
            No        Yes
             |         |
            403     Endpoint Runs
```

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Entity | A domain object represented in the database | A thing stored as records |
| Primary Key | Unique identifier for a row | Record ID |
| Foreign Key | Column referencing another table's key | Relationship link |
| One-to-Many | One parent can relate to many child records | One User, many Orders |
| 3NF | Normal form avoiding partial and transitive dependencies | Well-structured relational table |
| PostgreSQL | Relational database management system | Database used by the lab |
| EF Core | .NET object-relational mapping framework | C# data-access framework |
| Npgsql | PostgreSQL provider used with .NET / EF Core | Connects EF Core to PostgreSQL |
| `DbContext` | EF Core unit for querying and saving entities | C# database gateway |
| `DbSet` | EF Core collection for one entity type | Table-like entity collection |
| Migration | Versioned database-schema change | Reproducible schema update |
| Seed Data | Initial records inserted for development | Starter database data |
| Scoped Lifetime | One service instance per request scope | Correct lifetime for DbContext-based service |
| Password Hash | One-way representation used to verify a password | Stored instead of plaintext password |
| BCrypt | Password-hashing algorithm and library | Hashes and verifies passwords |
| Authentication | Verifying identity | Who are you? |
| Authorization | Checking permissions | What may you do? |
| JWT | Signed token carrying claims | Stateless authentication token |
| Claim | Fact stored in the token identity | ID, email, role |
| Signature | Cryptographic proof of token integrity and issuer | Detects token tampering |
| RBAC | Authorization based on roles | Admin versus Customer permissions |
| `401 Unauthorized` | Request is not authenticated | No valid identity |
| `403 Forbidden` | Authenticated identity lacks permission | Identity known, action denied |
| `409 Conflict` | Request conflicts with existing resource state | Duplicate email |
| Bearer Token | Token presented in the Authorization header | JWT sent with API request |

---

# Database Design Revision

## One-to-Many Foreign Key Rule

```text
One Side          Many Side
User 1 ---------- * Orders
                      |
                      v
                  UserId FK
```

## 3NF Checklist

A table should avoid:

- Repeating groups.
- Multi-valued columns such as `course1`, `course2`, `course3`.
- Partial dependencies.
- Transitive dependencies.

## Better Enrollment Design

Instead of:

```text
students
- id
- name
- course1
- course2
- course3
```

use separate relational tables such as:

```text
Students
- Id
- Name

Courses
- Id
- Name

Enrollments
- StudentId
- CourseId
```

This also correctly models a many-to-many student-course relationship.

---

# Authentication and Authorization Revision

## Authentication vs Authorization

| Authentication | Authorization |
|---|---|
| Who are you? | What may you do? |
| Login verifies credentials | Role/policy checks permission |
| Failure usually produces `401` | Failure after authentication produces `403` |
| Creates authenticated identity | Uses that identity and claims |

## Password Storage

```text
Plain Password
      |
      v
BCrypt.HashPassword
      |
      v
PasswordHash Stored in DB

Login Password
      |
      v
BCrypt.Verify(LoginPassword, PasswordHash)
      |
      v
True / False
```

## JWT Claims in This Lab

| Claim | Purpose |
|---|---|
| `NameIdentifier` | User ID |
| `Email` | User email |
| `Role` | Used by RBAC |

## Status Codes

| Situation | Status |
|---|---:|
| Registration succeeds | `201 Created` |
| Duplicate email | `409 Conflict` |
| Login credentials invalid | `401 Unauthorized` |
| Protected endpoint without token | `401 Unauthorized` |
| Customer calls Admin-only endpoint | `403 Forbidden` |
| Admin creates menu item | `201 Created` |
| Public `GET /api/menu` | `200 OK` |

---

# Important Code Snippets

## EF Core Packages

```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 8.*
dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.*
dotnet tool install --global dotnet-ef --version 8.*
```

## DbContext Registration

```csharp
builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseNpgsql(builder.Configuration
        .GetConnectionString("Default")));
```

## Migration

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Scoped Menu Service

```csharp
builder.Services.AddScoped<IMenuService, MenuService>();
```

## BCrypt Hash

```csharp
PasswordHash =
    BCrypt.Net.BCrypt.HashPassword(dto.Password)
```

## BCrypt Verify

```csharp
BCrypt.Net.BCrypt.Verify(
    dto.Password, user.PasswordHash)
```

## JWT Authentication Registration

```csharp
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt => opt.TokenValidationParameters = new()
    {
        ValidateIssuer = true,   ValidIssuer = jwt["Issuer"],
        ValidateAudience = true, ValidAudience = jwt["Audience"],
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateLifetime = true
    });
builder.Services.AddAuthorization();
```

## Middleware Order

```csharp
app.UseAuthentication();
app.UseAuthorization();
```

## Role Claim

```csharp
new Claim(ClaimTypes.Role, user.Role)
```

## Admin-Only Endpoint

```csharp
[Authorize(Roles = "Admin")]
```

---

# Quick Test Answer Guide

> Q1-Q5 are explicitly confirmed by the marking guide. Q6-Q8 below are supplementary answers based on the lab content.

## Q1

**Answer:** `(c) primary key`

A primary key uniquely identifies each row.

## Q2

**Answer:** `(b) the Orders - many side`

In a one-to-many relationship, the foreign key goes on the many side.

## Q3

**Answer:** `(c) 403 Forbidden`

The user is already authenticated but lacks permission.

## Q4

**Answer:** `(b) as a salted one-way hash`

Passwords must not be stored in plaintext.

## Q5

**Answer:** `(c) signature`

JWT structure:

```text
header.payload.signature
```

## Q6

The `course1`, `course2`, `course3` columns violate the normalization goal of atomic, properly relational data and create repeating groups.

A normalized design uses:

- A `Students` table.
- A `Courses` table.
- An `Enrollments` junction table containing:
  - `StudentId`
  - `CourseId`

## Q7

Three-step login-to-token flow:

1. Client sends email and password to `/api/auth/login`.
2. Server finds the user and verifies the password with BCrypt against the stored hash.
3. Server creates and signs a JWT containing claims; the client receives and stores the token for authenticated requests.

## Q8

The response is `403 Forbidden` because the Customer has a valid authenticated identity but does not have the required `Admin` role.

The endpoint is protected by:

```csharp
[Authorize(Roles = "Admin")]
```

---

# Likely Exam and Viva Questions

### Question 1

What is the difference between a primary key and a foreign key?

**Expected Answer:** A primary key uniquely identifies a row in its own table. A foreign key references a key in another table and creates a relationship between records.

### Question 2

Where is the foreign key placed in a one-to-many relationship?

**Expected Answer:** On the many side. For one User with many Orders, `Orders` contains the user foreign key.

### Question 3

Why is `DbContext` normally registered as scoped?

**Expected Answer:** EF Core `DbContext` is designed around a unit of work per request. A scoped lifetime gives one context for that request and avoids lifetime conflicts with services that depend on it.

### Question 4

Why did `MenuController` not change when the storage changed from memory to PostgreSQL?

**Expected Answer:** The controller depends on the `IMenuService` interface. Only the concrete service implementation changed.

### Question 5

Why should passwords be hashed?

**Expected Answer:** The system should not store recoverable plaintext secrets. A password hash allows verification without storing the original password.

### Question 6

What is the purpose of a JWT signature?

**Expected Answer:** It verifies token integrity and proves that the token was signed using the expected server key.

### Question 7

What is the difference between authentication and authorization?

**Expected Answer:** Authentication verifies who the user is. Authorization decides whether that authenticated user has permission for a specific action.

### Question 8

Explain `401` versus `403`.

**Expected Answer:** `401` means there is no valid authenticated identity. `403` means the user is authenticated but lacks the required permission.

### Question 9

Why must authentication middleware execute before authorization middleware?

**Expected Answer:** Authorization needs an authenticated user and claims to decide whether access should be allowed.

### Question 10

Why is a fresh JWT required after changing a user's role in the database?

**Expected Answer:** The role claim is embedded in the existing token. Changing the database role does not modify an already-issued JWT, so the user must log in again to obtain a new token.

### Question 11

What is the purpose of `[Authorize(Roles = "Admin")]`?

**Expected Answer:** It restricts the action to authenticated users whose identity contains the `Admin` role.

### Question 12

Why should production secrets not be stored in `appsettings.json`?

**Expected Answer:** Configuration files may be committed or exposed. Secrets should be supplied through protected mechanisms such as environment variables or user-secrets.

---

# Common Mistakes to Avoid

- Confusing primary keys and foreign keys.
- Putting the foreign key on the one side of a one-to-many relationship.
- Using repeating fields such as `course1`, `course2`, `course3`.
- Skipping the 3NF justification.
- Installing EF Core package majors that do not match .NET 8.
- Forgetting the PostgreSQL connection string.
- Forgetting to register `AppDbContext`.
- Running `dotnet ef database update` before creating a migration.
- Keeping `MenuService` as a singleton after it depends on `AppDbContext`.
- Claiming persistence without restarting the application.
- Storing plaintext passwords.
- Returning the password hash to the client.
- Forgetting the unique-email check.
- Forgetting the database unique index.
- Returning `200` rather than the required `201` for registration.
- Forgetting to add the JWT Bearer package.
- Forgetting the Swagger Bearer security definition.
- Placing `UseAuthorization()` before `UseAuthentication()`.
- Omitting the role claim from the JWT.
- Reusing an old Customer token after promoting the user to Admin.
- Pasting `Bearer ` into Swagger when the configured UI expects only the token.
- Returning or expecting `401` for an authenticated Customer who lacks Admin permission.
- Protecting `GET /api/menu` when the lab requires it to remain public.
- Hardcoding or committing real production secrets.
- Submitting the `bin` and `obj` directories.
- Omitting negative-path screenshots such as `401`, `403`, and `409`.

---

# Quick Revision Table

| Topic | Must Remember | PDF Page |
|---|---|---:|
| Lab goal | Add PostgreSQL persistence + authentication + authorization | 1 |
| 3NF | Atomic values, no partial/transitive dependencies | 1, 4 |
| FK rule | Foreign key goes on the many side | 1, 4 |
| Database | PostgreSQL | 2-9 |
| EF provider | Npgsql | 2, 6 |
| DbContext | `AppDbContext` | 6 |
| Unique email | EF Core unique index | 6 |
| Migration | `migrations add` + `database update` | 7 |
| Service lifetime | `AddScoped` for DbContext-backed service | 8 |
| Persistence test | Record survives API restart | 8-9 |
| Registration | BCrypt password hash | 10-11 |
| Duplicate email | `409 Conflict` | 10-11 |
| JWT structure | Header, payload, signature | 12 |
| JWT claims | ID, email, role | 13 |
| Middleware order | Authentication before authorization | 13 |
| Invalid login | `401 Unauthorized` | 14 |
| Admin protection | `[Authorize(Roles = "Admin")]` | 15 |
| No token | `401` | 15 |
| Customer token on Admin route | `403` | 15 |
| Admin token | Allowed | 15 |
| Secrets | Environment variables / user-secrets in real projects | 16 |
| Quick Test answers | `(c, b, c, b, c)` | 20 |
| Total marks | 20 | 19-20 |

---

# Key Terms

- Relational Database
- Entity
- Relationship
- Primary Key
- Foreign Key
- One-to-Many
- Third Normal Form
- 3NF
- PostgreSQL
- pgAdmin
- psql
- Entity Framework Core
- EF Core
- Npgsql
- `DbContext`
- `DbSet`
- Migration
- Connection String
- Seed Data
- Persistence
- Dependency Injection
- `IMenuService`
- `AddScoped`
- `AddSingleton`
- Authentication
- Authorization
- AuthN
- AuthZ
- Password Hash
- BCrypt
- Salt
- JWT
- Header
- Payload
- Signature
- Claim
- Role Claim
- Bearer Token
- RBAC
- `[Authorize]`
- `[Authorize(Roles="Admin")]`
- `401 Unauthorized`
- `403 Forbidden`
- `409 Conflict`
- `201 Created`
- `200 OK`
- Swagger
- Postman
- Environment Variable
- User Secrets
- Default Deny

---

# Final One-Page Revision Notes

## Database

```text
User
- Id PK
- Name
- Email UNIQUE
- PasswordHash
- Role
- CreatedAt

MenuItem
- Id PK
- Name
- Price
- Category
- Available
```

## Relationship Rule

```text
One-to-Many -> FK on many side
User 1 ---- * Orders
               |
               -> UserId FK
```

## EF Core

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

```text
AppDbContext -> PostgreSQL
MenuService  -> AddScoped
```

## Registration

```text
Register
-> validate
-> check duplicate email
-> BCrypt hash
-> save Customer
-> 201
```

## Login

```text
Email + Password
-> find user
-> BCrypt.Verify
-> claims
-> signed JWT
```

## JWT

```text
header.payload.signature
```

Claims:

- User ID.
- Email.
- Role.

## Middleware

```csharp
app.UseAuthentication();
app.UseAuthorization();
```

## Authorization

```text
No valid token -> 401
Valid Customer token on Admin endpoint -> 403
Valid Admin token -> allowed
```

Admin-only attribute:

```csharp
[Authorize(Roles = "Admin")]
```

## Status Codes to Memorize

| Situation | Code |
|---|---:|
| Public menu GET | `200` |
| Register success | `201` |
| Duplicate email | `409` |
| Invalid login | `401` |
| No token on protected route | `401` |
| Customer denied Admin operation | `403` |
| Admin create menu item | `201` |

## Marks

| Component | Marks |
|---|---:|
| Task 01 | 3 |
| Task 02 | 4 |
| Task 03 | 4 |
| Task 04 | 4 |
| Task 05 | 3 |
| Quick Test | 2 |
| **Total** | **20** |

---

# Verification

PDF pages: 20 / MD page sections: 20 ✅
