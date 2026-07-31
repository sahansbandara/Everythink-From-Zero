# SE3090 - Software Engineering Frameworks
## Lab Practical 03 - C#, .NET Fundamentals, ASP.NET Core & REST API Development

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3090 |
| Module name | Software Engineering Frameworks |
| Lab practical | Lab Practical 03 |
| Lab title | C#, .NET Fundamentals, ASP.NET Core & REST API Development |
| Related lecture | Lecture 03 - C#, .NET Fundamentals, ASP.NET Core and REST API Development |
| Duration | 2 hours (in-lab) |
| Learning outcomes | LO2 - Apply frameworks and tools; LO3 - Best practices for integration and quality; LO4 - Select and justify approaches |
| Stack | C# 12; .NET 8 (LTS); ASP.NET Core Web API; Swagger / Postman |
| Mode | Individual coding; Word document and project ZIP submitted to CourseWeb within the session |
| Total PDF pages | 14 |

> **Source boundary:** This Markdown file follows the uploaded PDF page by page. All original instructions, code, commands, tables, expected outputs, questions, submission rules, and marking criteria are preserved in the original order. Added explanations and study answers are clearly labelled.

---

# Table of Contents

- [Page 01 - Lab Overview, Introduction, Continuity, and Objectives](#page-01---lab-overview-introduction-continuity-and-objectives)
- [Page 02 - Tools, Technical Note, and Time Plan](#page-02---tools-technical-note-and-time-plan)
- [Page 03 - CampusEats Menu API Scenario](#page-03---campuseats-menu-api-scenario)
- [Page 04 - Task 01: Create the Web API Project and Run Swagger](#page-04---task-01-create-the-web-api-project-and-run-swagger)
- [Page 05 - Task 02: Create the Model and DTOs](#page-05---task-02-create-the-model-and-dtos)
- [Page 06 - Task 03: Service Contract and Read Operations](#page-06---task-03-service-contract-and-read-operations)
- [Page 07 - Task 03: CRUD Logic and Dependency Injection](#page-07---task-03-crud-logic-and-dependency-injection)
- [Page 08 - Task 04: Controller with GET and POST](#page-08---task-04-controller-with-get-and-post)
- [Page 09 - Task 04: Created Response and Expected Output](#page-09---task-04-created-response-and-expected-output)
- [Page 10 - Task 05: PUT, DELETE, Full CRUD, and LO4 Justification](#page-10---task-05-put-delete-full-crud-and-lo4-justification)
- [Page 11 - Quick Test: Questions 1-7](#page-11---quick-test-questions-1-7)
- [Page 12 - Quick Test: Question 8 and Submission Reminder](#page-12---quick-test-question-8-and-submission-reminder)
- [Page 13 - Submission Instructions and Marking Guide Part 1](#page-13---submission-instructions-and-marking-guide-part-1)
- [Page 14 - Marking Guide Part 2](#page-14---marking-guide-part-2)
- [Full Lab Summary](#full-lab-summary)
- [Architecture and Request-Flow Diagrams](#architecture-and-request-flow-diagrams)
- [Key Definitions Table](#key-definitions-table)
- [REST Endpoint Revision Table](#rest-endpoint-revision-table)
- [Important Code Snippets](#important-code-snippets)
- [Quick Test Answers](#quick-test-answers)
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

**Lab Practical 03**

**C#, .NET Fundamentals, ASP.NET Core & REST API Development**

| Item | Details |
|---|---|
| Lab Practical Number | Lab 03 |
| Lab Title | C#, .NET Fundamentals, ASP.NET Core & REST API Development |
| Related Lecture | Lecture 03 - C#, .NET Fundamentals, ASP.NET Core and REST API Development |
| Duration | 2 Hours (in-lab) |
| Learning Outcomes | LO2 - Apply frameworks & tools; LO3 - Best practices for integration & quality; LO4 - Select & justify approaches |
| Stack | C# 12; .NET 8 (LTS); ASP.NET Core Web API; Swagger / Postman |
| Mode | Individual coding; Word document + project ZIP submitted to CourseWeb within the session |

### Introduction

This lab turns Lecture 03 into a working backend.

The lecture covered:

- C# and object-oriented programming.
- The .NET platform and ASP.NET Core.
- REST API architecture:
  - Resources.
  - HTTP methods.
  - Status codes.
  - JSON.
- The layered controller-service-model structure.

During this two-hour session, students build a small but complete ASP.NET Core REST API with full CRUD operations and test it in Swagger.

Everything required comes from Lecture 03. The implementation and explanations should be based on:

- The lecture content.
- The worked LankaMart example.
- Class examples:
  - `decimal` for money.
  - Models versus DTOs.
  - Dependency injection.
  - Attribute routing.
  - Correct status codes.

Small original examples may be added, but they must remain within Lecture 03's scope.

### Continuity with Lab 02

In Lab 02, students built the CampusEats React frontend that fetched a menu.

In this lab, students build the ASP.NET Core REST API that serves that menu: the `GET`, `POST`, `PUT`, and `DELETE` endpoints behind those frontend components.

### Lab Objectives

By the end of the lab, students should be able to:

- Create and run an ASP.NET Core Web API project and navigate its layered folder structure. `(LO2, LO3)`
- Write a C# model and DTOs using correct types, including `decimal` for money, and understand why the public DTO differs from the internal model. `(LO2, LO3)`
- Build a service with an interface and register it for dependency injection to hold business logic and in-memory data. `(LO2, LO3)`
- Implement a REST controller with `GET`, `POST`, `PUT`, and `DELETE` using attribute routing and correct HTTP status codes. `(LO2, LO3)`
- Test every endpoint in Swagger or Postman and confirm the correct status code for each operation. `(LO3)`

The final objective continues on Page 02.

### Visual Explanation

The page uses:

- A dark-blue lab title panel.
- A metadata table.
- A continuity callout connecting Lab 02 and Lab 03.
- A detailed learning-objectives list.

The course progression is:

```text
Lab 02: React Frontend
        |
        | HTTP requests
        v
Lab 03: ASP.NET Core REST API
        |
        v
GET / POST / PUT / DELETE
```

The application-development flow is:

```text
C# and .NET Fundamentals
          |
          v
ASP.NET Core Project
          |
          v
Model and DTOs
          |
          v
Service and Dependency Injection
          |
          v
REST Controller
          |
          v
Swagger Testing
```

### Explanation

The practical tests more than syntax. It expects:

- A layered architecture.
- Correct REST semantics.
- Separation between internal and public data shapes.
- Dependency injection.
- Correct status-code selection.
- Evidence through Swagger or Postman testing.

### Definition

**CRUD:** The four basic data operations: Create, Read, Update, and Delete.

**Simple meaning:** Add data, view data, change data, and remove data.

### Definition

**REST API:** An HTTP-based interface that exposes resources through standard methods and status codes.

**Simple meaning:** A backend service that clients use through URLs and HTTP requests.

### Exam Tip

The core architecture for this lab is:

```text
Controller -> Service -> Model / Data
```

DTOs cross the API boundary.

### Common Mistake

Do not put all business logic and data directly inside the controller. The controller should remain thin and delegate work to the service.

---

## Page 02 - Tools, Technical Note, and Time Plan

### Original Page Content

The final lab objective from Page 01 is:

- Justify ASP.NET Core and REST design decisions for the backend using the lecture's method and status-code rules. `(LO4)`

### Required Tools / Software

- **.NET 8 SDK**
  - Verify using:

```bash
dotnet --version
```

  - It should report `8.x`.

- **Visual Studio 2022, Rider, or VS Code**
  - VS Code requires the C# Dev Kit extension.

- **A web browser**
  - Used for the built-in Swagger UI at `/swagger`.

- **Postman - optional**
  - Useful for saved request collections and scripted assertions, as shown in the lecture.

- **A terminal**
  - Used to run `dotnet` CLI commands.

### Technical Note

The lab targets **.NET 8**, whose Web API template ships with Swagger UI.

If a machine has .NET 9 or .NET 10 and Swagger does not appear, students should refer to the troubleshooting note in the Lecturer Notes.

Use the following template flag:

```text
--use-controllers
```

This creates a controller-based project rather than a minimal API.

### Lab Time Plan - 120 Minutes

| Time | Activity | Output |
|---|---|---|
| 0:00-0:10 | Briefing and recap of Lecture 03: OOP, DI, REST, layers | Ready to code |
| 0:10-0:22 | Task 01 - Create the Web API project and run Swagger | Running API + Swagger |
| 0:22-0:40 | Task 02 - Model + DTOs + validation | Model and DTO classes |
| 0:40-1:05 | Task 03 - Service: interface + logic, and register for DI | Service with seed data |
| 1:05-1:30 | Task 04 - Controller with GET + POST, tested in Swagger | GET and POST working |
| 1:30-1:50 | Task 05 - PUT + DELETE, full CRUD test + LO4 justification | Full CRUD API |
| 1:50-2:00 | Quick test + screenshots, ZIP, and submit | Submitted `.docx` + `.zip` |

### How to Use This Plan

The times are a guide.

Students should:

- Get the project running quickly.
- Create the model and DTOs quickly.
- Protect time for Tasks 03 and 04 because the service and controller carry the most marks.
- Add `PUT` and `DELETE` last.

### Visual Explanation

```text
0:00          0:22          0:40          1:05          1:30          1:50       2:00
 |--------------|-------------|-------------|-------------|-------------|----------|
 Briefing     Project       Model/DTO     Service       GET/POST      PUT/DELETE  Submit
```

Task dependency:

```text
Project
  |
  v
Model + DTOs
  |
  v
Service + DI
  |
  v
Controller
  |
  v
Swagger CRUD Tests
```

### Exam Tip

Know why the project must use `--use-controllers`: the practical is based on controller, service, model, and DTO layers rather than a minimal API.

### Common Mistake

Do not assume Swagger always appears automatically in every .NET version or template. Follow the exact lab target: .NET 8 and the controller-based template.

---

## Page 03 - CampusEats Menu API Scenario

### Original Page Content

### Mini Project Scenario

**"CampusEats" - Menu API (Product / Inventory Style)**

Students are building the backend REST API for CampusEats.

The API manages a menu of dishes. Each dish is a resource with:

- Name.
- Price.
- Category.
- Availability.

The API must support:

- Listing dishes.
- Viewing one dish.
- Creating dishes.
- Updating dishes.
- Deleting dishes.

Data is held in memory using a list inside the service so students can focus on:

- C#.
- REST design.
- The controller-service structure.

Persistence through a database and Entity Framework Core is introduced in the next lecture.

### The Resource

| Field | Type and Notes |
|---|---|
| `Id` | `int` - assigned by the server and not supplied during creation |
| `Name` | `string` - required; the dish name |
| `Price` | `decimal` - money is always `decimal`, never `double` |
| `Category` | `string` - examples: Mains, Snacks, Drinks, Dessert |
| `Available` | `bool` - whether the dish can currently be ordered |

### Endpoints to Build

| Method | Path | Success | Purpose |
|---|---|---:|---|
| `GET` | `/api/menu` | `200` | List all dishes |
| `GET` | `/api/menu/{id}` | `200 / 404` | Get one dish |
| `POST` | `/api/menu` | `201` | Create a dish |
| `PUT` | `/api/menu/{id}` | `204 / 404` | Replace a dish |
| `DELETE` | `/api/menu/{id}` | `204 / 404` | Delete a dish |

### Target Project Structure

```text
CampusEats.Api/
  Program.cs             // startup, DI, middleware
  appsettings.json       // configuration (no secrets!)
  Controllers/
    MenuController.cs    // HTTP layer (thin)
  Services/
    IMenuService.cs      // contract (interface)
    MenuService.cs       // business logic + in-memory data
  Models/
    MenuItem.cs          // domain entity
  Dtos/
    CreateMenuItemDto.cs // input shape
    MenuItemDto.cs       // output shape
```

### Visual Explanation

The resource and endpoint tables define the API contract, while the folder tree defines the internal architecture.

```text
HTTP Client
    |
    v
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
```

DTO direction:

```text
Client Request
    |
    v
CreateMenuItemDto
    |
    v
MenuService / MenuItem
    |
    v
MenuItemDto
    |
    v
Client Response
```

### Definition

**Resource:** A domain object exposed by a REST API through a URL.

**Simple meaning:** The thing being managed by the API; here, a menu dish.

### Definition

**Domain model:** The internal object used to represent the system's business data.

**Simple meaning:** The backend's internal shape of a dish.

### Definition

**DTO - Data Transfer Object:** A public data shape used to move data across an application boundary.

**Simple meaning:** The request or response shape visible to API clients.

### Exam Tip

Remember that `Id` is server-controlled. The create request must not allow the client to assign it.

### Common Mistake

Do not use `double` for monetary values. Binary floating-point values can introduce precision problems. The lecture rule is `decimal`.

---

## Page 04 - Task 01: Create the Web API Project and Run Swagger

### Original Page Content

**Task 01 - 12 minutes - LO2, LO3**

### Create the Web API Project and Run Swagger

Scaffold a controller-based ASP.NET Core Web API, run it, and open Swagger UI. Then explore the layered folder structure from the lecture.

### Step-by-Step Instructions

1. In a terminal, create a controller-based Web API and run it:

```bash
dotnet new webapi --use-controllers -n CampusEats.Api
cd CampusEats.Api
dotnet run
```

2. Open the printed HTTPS URL and add `/swagger`.

Example:

```text
https://localhost:7xxx/swagger
```

The interactive API documentation should appear.

3. If prompted about the HTTPS certificate, trust it once using:

```bash
dotnet dev-certs https --trust
```

4. Create these folders inside the project:

```text
Models
Dtos
Services
```

5. Delete the sample files:

```text
WeatherForecast.cs
Controllers/WeatherForecastController.cs
```

### Expected Output

- The API runs.
- Swagger UI loads in the browser.
- A screenshot of the running Swagger page is taken.
- A screenshot of the project folder structure is taken.

### Visual Explanation

```text
dotnet new
    |
    v
CampusEats.Api project
    |
    v
dotnet run
    |
    v
HTTPS endpoint
    |
    v
/swagger
    |
    v
Interactive API documentation
```

### Definition

**Scaffolding:** Generating the initial project and configuration from a framework template.

**Simple meaning:** Creating the starter project automatically.

### Definition

**Swagger UI:** A browser-based interface that displays API endpoints and lets users send test requests.

**Simple meaning:** Interactive API documentation and testing.

### Exam Tip

Be able to explain each command:

| Command | Purpose |
|---|---|
| `dotnet new webapi` | Creates a Web API project |
| `--use-controllers` | Selects controller-based architecture |
| `-n CampusEats.Api` | Sets the project name |
| `dotnet run` | Builds and runs the application |
| `dotnet dev-certs https --trust` | Trusts the local development HTTPS certificate |

### Common Mistake

Do not forget to delete the generated WeatherForecast example. Leaving it can make the project structure and Swagger output inconsistent with the lab requirements.

---

## Page 05 - Task 02: Create the Model and DTOs

### Original Page Content

**Task 02 - 18 minutes - LO2, LO3**

### Create the Model and DTOs

Create the internal domain model and the public DTOs.

The lecture rule is:

- The model is the internal shape.
- A DTO is the public contract that crosses the API boundary.

### Step 1 - Model

**File:** `Models/MenuItem.cs`

```csharp
namespace CampusEats.Api.Models;


public class MenuItem
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }     // money = decimal
    public string Category { get; set; } = "";
    public bool Available { get; set; } = true;
}
```

### Step 2 - DTOs

Create the DTOs inside `Dtos/`.

Use record types and validation attributes on the input DTO.

**Files:** `Dtos/CreateMenuItemDto.cs` and `Dtos/MenuItemDto.cs`

```csharp
using System.ComponentModel.DataAnnotations;


namespace CampusEats.Api.Dtos;


// input shape — no Id (the server assigns it)
public record CreateMenuItemDto(
    [Required, StringLength(80)] string Name,
    [Range(0, 100000)] decimal Price,
    [Required, StringLength(40)] string Category);


// output shape — the public contract
public record MenuItemDto(
    int Id, string Name, decimal Price,
    string Category, bool Available);
```

### Step 3 - Written Explanation

In one or two sentences, explain:

- Why the create DTO has no `Id`.
- Why the model and DTO are kept separate.

### Expected Output

- The `MenuItem` model compiles.
- The two DTO records compile.
- The write-up includes a short explanation of:
  - Model versus DTO.
  - Why the input DTO omits `Id`.

### Visual Explanation

```text
Internal System
MenuItem
├── Id
├── Name
├── Price
├── Category
└── Available

API Input
CreateMenuItemDto
├── Name
├── Price
└── Category

API Output
MenuItemDto
├── Id
├── Name
├── Price
├── Category
└── Available
```

### Explanation

The create DTO omits `Id` because the server owns identity creation. Separating the public DTO from the model prevents the API contract from being tightly coupled to the internal domain class.

### Definition

**Record:** A C# reference type designed for concise data-oriented objects and value-based equality.

**Simple meaning:** A compact way to define immutable-style data shapes.

### Definition

**Validation attribute:** Metadata that declares an input rule, such as required text or a numeric range.

**Simple meaning:** A rule attached directly to a DTO property or parameter.

### Validation Rules

| Attribute | Rule |
|---|---|
| `[Required]` | A value must be supplied |
| `[StringLength(80)]` | Maximum 80 characters |
| `[Range(0, 100000)]` | Price must remain within the specified range |
| `[StringLength(40)]` | Maximum 40 characters |

### Exam Tip

DTO separation supports:

- Encapsulation.
- Validation.
- Security.
- Versioning.
- Stable API contracts.

### Common Mistake

Do not expose the internal `MenuItem` directly as both request and response. That can allow clients to send or depend on fields they should not control.

### Likely Exam Question

**Question:** Why does `CreateMenuItemDto` not contain `Id`?

**Expected answer:** The server assigns the identifier. Omitting it prevents clients from controlling resource identity.

---

## Page 06 - Task 03: Service Contract and Read Operations

### Original Page Content

**Task 03 - 25 minutes - LO2, LO3**

### Create the Service and Register It for Dependency Injection

Place business logic and in-memory data in a service behind an interface.

The controller depends on the interface, and the dependency-injection container supplies the implementation.

### Step 1 - Service Contract

**File:** `Services/IMenuService.cs`

```csharp
using CampusEats.Api.Dtos;


namespace CampusEats.Api.Services;


public interface IMenuService
{
    IEnumerable<MenuItemDto> GetAll();
    MenuItemDto? GetById(int id);
    MenuItemDto Create(CreateMenuItemDto dto);
    bool Update(int id, CreateMenuItemDto dto);
    bool Delete(int id);
}
```

### Step 2 - Service Implementation, Part 1

**File:** `Services/MenuService.cs`

```csharp
using CampusEats.Api.Dtos;
using CampusEats.Api.Models;


namespace CampusEats.Api.Services;


public class MenuService : IMenuService
{
    private readonly List<MenuItem> _items;
    private int _nextId;


      public MenuService()             // seed in-memory data
      {
          _items = new()
          {
              new() { Id = 1, Name = "Kottu Roti",
                       Price = 750m, Category = "Mains" },
              new() { Id = 2, Name = "Fried Rice",
                       Price = 850m, Category = "Mains" },
              new() { Id = 3, Name = "Watalappan",
                       Price = 350m, Category = "Dessert" },
          };
          _nextId = 4;
      }


      private static MenuItemDto ToDto(MenuItem m) =>
          new(m.Id, m.Name, m.Price, m.Category, m.Available);


      public IEnumerable<MenuItemDto> GetAll() =>
          _items.Select(ToDto);


      public MenuItemDto? GetById(int id)
      {
          var m = _items.FirstOrDefault(x => x.Id == id);
```

The method continues on Page 07.

### Visual Explanation

The interface declares what the service can do without exposing how it works.

```text
MenuController
      |
      | depends on
      v
IMenuService
      |
      | implemented by
      v
MenuService
      |
      v
List<MenuItem>
```

### Explanation

The interface creates a contract. The controller can use `IMenuService` without constructing or knowing the implementation details of `MenuService`.

The service owns:

- Seed data.
- Identifier generation.
- Model-to-DTO conversion.
- CRUD logic.

### Definition

**Interface:** A C# contract that declares members without providing their concrete implementation.

**Simple meaning:** It says what a service must provide.

### Definition

**Dependency Injection - DI:** A design technique in which required dependencies are supplied to a class rather than created inside it.

**Simple meaning:** The framework gives the controller the service it needs.

### Definition

**Seed data:** Initial sample data loaded when the service is created.

**Simple meaning:** Starting records used for development and testing.

### Exam Tip

The service should not return internal `MenuItem` objects to the controller. It maps them through:

```csharp
private static MenuItemDto ToDto(MenuItem m)
```

### Common Mistake

Do not instantiate the service inside the controller using `new MenuService()`. That bypasses dependency injection and tightly couples the controller to one implementation.

---

## Page 07 - Task 03: CRUD Logic and Dependency Injection

### Original Page Content

The `GetById` method from Page 06 is completed:

```csharp
        return m is null ? null : ToDto(m);
}
```

### Step 3 - Create, Update, and Delete

Add these methods inside the same `MenuService` class.

**File:** `Services/MenuService.cs`

```csharp
public MenuItemDto Create(CreateMenuItemDto dto)
{
    var item = new MenuItem
    {
        Id = _nextId++,
        Name = dto.Name,
        Price = dto.Price,
        Category = dto.Category,
        Available = true
    };
    _items.Add(item);
    return ToDto(item);
}


public bool Update(int id, CreateMenuItemDto dto)
{
    var m = _items.FirstOrDefault(x => x.Id == id);
    if (m is null) return false;   // guard clause
    m.Name = dto.Name;      // replaces the editable fields
    m.Price = dto.Price;
    m.Category = dto.Category;
    return true;
}


public bool Delete(int id)
{
    var m = _items.FirstOrDefault(x => x.Id == id);
    if (m is null) return false;
    _items.Remove(m);
    return true;
}
}
```

### Step 4 - Register the Service

Add the registration above `builder.Build()`.

**File:** `Program.cs`

```csharp
builder.Services.AddSingleton<IMenuService, MenuService>();
```

### Why Singleton Here?

The lecture uses `AddScoped` for services backed by a database.

In this lab, the service itself is the data store. It must keep its list across requests, so it uses:

```csharp
AddSingleton
```

This creates one instance for the entire application.

With a real database and repository in the next lecture, the service would switch back to:

```csharp
AddScoped
```

### Expected Output

- The service compiles.
- The service is registered for dependency injection.
- It holds three seeded dishes in memory.
- It exposes read and write methods.
- The submission includes:
  - A screenshot of the registration line.
  - A brief note explaining the lifetime choice.

### Visual Explanation

Singleton lifetime in this lab:

```text
Application Starts
      |
      v
One MenuService instance
      |
      +--> Request 1
      +--> Request 2
      +--> Request 3
      |
      v
Same in-memory list retained
```

### Definition

**Singleton lifetime:** One service instance is created and shared for the lifetime of the application.

**Simple meaning:** Every request uses the same service object.

### Definition

**Scoped lifetime:** One service instance is created for each request scope.

**Simple meaning:** Each HTTP request receives its own service instance.

### Definition

**Guard clause:** An early condition that exits a method when a required condition is not satisfied.

**Simple meaning:** Stop immediately if the item does not exist.

### Exam Tip

The correct lifetime depends on the responsibility of the service. `AddSingleton` is used here only to preserve the in-memory list across requests.

### Common Mistake

Do not assume singleton is always the best choice. A singleton containing mutable shared data can create concurrency concerns in real applications. This lab uses it for a small in-memory exercise.

---

## Page 08 - Task 04: Controller with GET and POST

### Original Page Content

**Task 04 - 25 minutes - LO2, LO3**

### Controller with GET and POST - Tested in Swagger

Create a thin controller that:

- Receives HTTP requests.
- Calls the service.
- Returns correct status codes.

Use attribute routing and constructor injection exactly as in the lecture.

### Step 1 - Menu Controller

**File:** `Controllers/MenuController.cs`

```csharp
using CampusEats.Api.Dtos;
using CampusEats.Api.Services;
using Microsoft.AspNetCore.Mvc;


namespace CampusEats.Api.Controllers;


[ApiController]                    // auto 400 on invalid body
[Route("api/[controller]")]        // → /api/menu
public class MenuController : ControllerBase
{
    private readonly IMenuService _svc;
    public MenuController(IMenuService svc)
        => _svc = svc;             // injected by DI


       [HttpGet]                          // GET /api/menu
       public ActionResult<IEnumerable<MenuItemDto>> GetAll()
           => Ok(_svc.GetAll());


       [HttpGet("{id}")]                  // GET /api/menu/1
       public ActionResult<MenuItemDto> GetById(int id)
       {
           var item = _svc.GetById(id);
           return item is null ? NotFound() : Ok(item);
       }


       [HttpPost]                         // POST /api/menu
       public ActionResult<MenuItemDto> Create(
           [FromBody] CreateMenuItemDto dto)
       {
           var created = _svc.Create(dto);
           return CreatedAtAction(nameof(GetById),
               new { id = created.Id }, created); // 201
       }
}
```

### Step 2 - Test GET All

Test:

```http
GET /api/menu
```

Expected:

- Status `200`.
- Three seeded dishes.

### Step 3 - Test GET by ID

Test:

```http
GET /api/menu/1
```

Expected:

```text
200 OK
```

Test:

```http
GET /api/menu/99
```

Expected:

```text
404 Not Found
```

### Step 4 - Test POST

```http
POST /api/menu
```

Request body:

```json
{
  "name": "Iced Milo",
  "price": 300,
  "category": "Drinks"
}
```

Expected:

```text
201 Created
```

### Step 5

The response JSON uses camel case and includes the server-assigned `id`. The response body is shown on Page 09.

### Visual Explanation

Request flow:

```text
HTTP Request
      |
      v
MenuController
      |
      v
IMenuService
      |
      v
MenuService
      |
      v
ActionResult + HTTP Status
```

Route matching:

```text
GET  /api/menu       -> GetAll()
GET  /api/menu/1     -> GetById(1)
POST /api/menu       -> Create(dto)
```

### Definition

**Attribute routing:** Defining route patterns using attributes such as `[Route]`, `[HttpGet]`, and `[HttpPost]`.

**Simple meaning:** The route is declared above the controller or action.

### Definition

**Thin controller:** A controller that handles HTTP concerns and delegates business logic to a service.

**Simple meaning:** The controller coordinates; the service performs the real work.

### Definition

**ActionResult:** An ASP.NET Core result type that can represent a response body and different HTTP results.

### Exam Tip

Understand the purpose of:

```csharp
CreatedAtAction(nameof(GetById), new { id = created.Id }, created)
```

It returns:

- `201 Created`.
- The created representation.
- A location linked to the `GetById` action.

### Common Mistake

Do not return `200 OK` for every operation. REST semantics require different status codes for create, missing resource, update, and delete outcomes.

---

## Page 09 - Task 04: Created Response and Expected Output

### Original Page Content

### `201 Created` Response Body

```json
{
  "id": 4,
  "name": "Iced Milo",
  "price": 300,
  "category": "Drinks",
  "available": true
}
```

### Expected Output

Working:

- `GET` all dishes.
- `GET` one dish by ID.
- `POST` a new dish.

Required Swagger screenshots should show:

- The list request returning `200`.
- A missing ID returning `404`.
- A successful `POST` returning `201`.
- The newly created dish in the response body.

### Visual Explanation

```text
POST Request
{
  name,
  price,
  category
}
        |
        v
Server creates Id and Available
        |
        v
201 Created Response
{
  id,
  name,
  price,
  category,
  available
}
```

### Explanation

The request does not include `id` or `available`.

The service:

- Assigns `id = 4`.
- Sets `available = true`.
- Returns the complete public output DTO.

### Exam Tip

This is a clear demonstration of request DTO versus response DTO:

| Request | Response |
|---|---|
| Client-controlled input | Server-controlled complete resource |
| No `id` | Includes `id` |
| No `available` | Includes `available` |

### Common Mistake

Do not expect JSON property names to use C# PascalCase. ASP.NET Core's default JSON formatting uses camel case, such as `id` and `available`.

---

## Page 10 - Task 05: PUT, DELETE, Full CRUD, and LO4 Justification

### Original Page Content

**Task 05 - 20 minutes - LO2, LO3, LO4**

### Add PUT and DELETE, Test Full CRUD, and Justify

Complete the CRUD set with update and delete, test the whole API, and justify REST design decisions using the lecture's HTTP-method and status-code rules.

### Part A - Add PUT and DELETE

Add the following actions inside `MenuController` before the closing brace.

**File:** `Controllers/MenuController.cs`

```csharp
[HttpPut("{id}")]                  // PUT /api/menu/1
public IActionResult Update(int id,
    [FromBody] CreateMenuItemDto dto)
{
    var ok = _svc.Update(id, dto);
    return ok ? NoContent() : NotFound();   // 204/404
}


[HttpDelete("{id}")]               // DELETE /api/menu/1
public IActionResult Delete(int id)
{
    var ok = _svc.Delete(id);
    return ok ? NoContent() : NotFound();   // 204/404
}
```

### Full Swagger Test Sequence

1. `POST` a new dish.
2. `GET` the list.
3. `PUT` to change the new dish.
   - Expected: `204`.
4. `DELETE` the dish.
   - Expected: `204`.
5. `GET` the deleted ID.
   - Expected: `404`.

### Validation Test

Send a `POST` with an empty name.

Expected result:

```text
400 Bad Request
```

The `[ApiController]` attribute returns this automatically when model validation fails.

### Part B - Justify the Design - LO4

Complete the table using the lecture's HTTP-method and status-code rules.

### Original Blank REST-Design Table

| Operation | Method | Path | Success Status + Why |
|---|---|---|---|
| List all dishes |  |  |  |
| Get one dish by ID |  |  |  |
| Add a new dish |  |  |  |
| Replace a dish |  |  |  |
| Remove a dish |  |  |  |

Then write two to three sentences answering:

> Why is ASP.NET Core a suitable framework for this backend?

Cite at least two lecture reasons, such as:

- Performance.
- Cross-platform and container support.
- Batteries-included framework capabilities.
- Enterprise support and LTS.

### Expected Output

- Full CRUD API:
  - `GET`
  - `POST`
  - `PUT`
  - `DELETE`
- End-to-end Swagger testing.
- Screenshots of:
  - `201`
  - `204`
  - `404`
  - `400`
- Completed REST-design table.
- Short ASP.NET Core justification.

### Supplementary Completed REST-Design Table

> This table is an answer guide derived directly from the endpoint table and controller code.

| Operation | Method | Path | Success Status + Why |
|---|---|---|---|
| List all dishes | `GET` | `/api/menu` | `200 OK` because the collection is returned successfully |
| Get one dish by ID | `GET` | `/api/menu/{id}` | `200 OK` with the dish; `404 Not Found` if the resource does not exist |
| Add a new dish | `POST` | `/api/menu` | `201 Created` because a new resource is created |
| Replace a dish | `PUT` | `/api/menu/{id}` | `204 No Content` after successful replacement; `404` if missing |
| Remove a dish | `DELETE` | `/api/menu/{id}` | `204 No Content` after successful deletion; `404` if missing |

### Supplementary ASP.NET Core Justification

ASP.NET Core is suitable because it is a high-performance, cross-platform framework that supports Linux, Windows, containers, and cloud deployment. It also includes dependency injection, model validation, routing, middleware, JSON handling, and Swagger integration, while .NET 8 provides long-term support for enterprise applications.

### Visual Explanation

CRUD cycle:

```text
POST   -> Create
GET    -> Read
PUT    -> Replace
DELETE -> Remove
```

Status-code flow:

```text
Valid POST      -> 201 Created
Successful PUT  -> 204 No Content
Successful DELETE -> 204 No Content
Missing ID      -> 404 Not Found
Invalid DTO     -> 400 Bad Request
```

### Definition

**PUT:** An HTTP method used to replace the state of a resource at a known URI.

**Simple meaning:** Send the complete replacement values for the editable resource.

### Definition

**DELETE:** An HTTP method used to remove a resource.

### Exam Tip

`PUT` uses the same required create DTO in this lab. Therefore, the request must contain every required field, not only the changed value.

### Common Mistake

Do not use `200 OK` for the lab's successful `PUT` and `DELETE`. The controller intentionally returns `204 No Content`.

---

## Page 11 - Quick Test: Questions 1-7

### Original Page Content

**Quick Test - 10 minutes**

### Knowledge Check

Answer all questions in the Word document.

- Q1-Q5: Multiple choice.
- Q6: REST-design question.
- Q7: Code-based.
- Q8: Scenario-based.

### Multiple Choice

#### Q1

Which C# type stores money exactly?

- `(a)` `double`
- `(b)` `float`
- `(c)` `decimal`
- `(d)` `int`

#### Q2

What does the `[ApiController]` attribute give automatically?

- `(a)` A database
- `(b)` `400 Bad Request` on an invalid model
- `(c)` HTTPS
- `(d)` JWT authentication

#### Q3

A controller needs an `IMenuService`. How does it get one?

- `(a)` `new MenuService()`
- `(b)` Constructor injection - DI
- `(c)` A global static variable
- `(d)` A query parameter

#### Q4

A `POST` that creates a new resource should return:

- `(a)` `200 OK`
- `(b)` `201 Created`
- `(c)` `204 No Content`
- `(d)` `404 Not Found`

#### Q5

Why return a DTO instead of the internal entity?

- `(a)` It is faster to type
- `(b)` To hide internal fields and decouple the API from the model
- `(c)` C# requires it
- `(d)` To avoid using JSON

### REST Design

#### Q6

For the operation **view one dish by ID**, provide:

- HTTP method.
- Path.
- Success status code.
- Status code when the dish does not exist.

### Code-Based Question

#### Q7

Complete the route attribute and the not-found return:

```csharp
[Http___("{id}")]
public ActionResult<MenuItemDto> GetById(int id)
{
    var item = _svc.GetById(id);
    return item is null ? ________ : Ok(item);
}
```

The scenario-based question begins on Page 12.

### Visual Explanation

The quick test covers:

```text
C# Data Types
      +
Automatic Validation
      +
Dependency Injection
      +
REST Status Codes
      +
DTO Design
      +
Routing
```

### Exam Tip

Do not memorize only the option letters. Understand the architectural and HTTP reasoning behind each answer.

### Common Mistake

Do not confuse dependency injection registration with injection itself:

- Registration occurs in `Program.cs`.
- Injection occurs through the controller constructor.

---

## Page 12 - Quick Test: Question 8 and Submission Reminder

### Original Page Content

### Q8 - Scenario-Based

A teammate wants to change only the price of dish `2`, but finds that:

```http
PUT /api/menu/2
```

with body:

```json
{
  "price": 900
}
```

is rejected with:

```text
400 Bad Request
```

Explain:

1. Why `PUT` behaves this way.
2. Which HTTP method is designed for partial updates.

### Submission Reminder

Submit the quick-test answers inside the same Word document.

Place the answers in a clearly labelled:

```text
Quick Test
```

section after the Task 01-05 answers.

### Visual Explanation

```text
PUT /api/menu/2
Body contains only price
        |
        v
CreateMenuItemDto validation
Name missing + Category missing
        |
        v
[ApiController]
        |
        v
400 Bad Request
```

Partial-update alternative:

```text
PATCH /api/menu/2
```

### Explanation

The lab uses `CreateMenuItemDto` for `PUT`, and that DTO requires `Name` and `Category`. A `PUT` request represents a complete replacement of the editable resource fields. A request containing only `price` fails validation.

`PATCH` is designed for partial modification.

### Definition

**PATCH:** An HTTP method used to apply a partial change to an existing resource.

**Simple meaning:** Change only the supplied fields.

### Exam Tip

Remember:

```text
PUT   = complete replacement
PATCH = partial update
```

### Common Mistake

Do not disable validation merely to make partial `PUT` requests pass. The correct REST method for a partial update is `PATCH`, with an appropriate update DTO or patch document.

---

## Page 13 - Submission Instructions and Marking Guide Part 1

### Original Page Content

### Submission Instructions

Prepare:

1. One Microsoft Word document containing all work.
2. A project ZIP if requested by the lecturer.

### Word Document Must Include

- Student name.
- IT number.
- Lab practical number: Lab 03.
- Screenshots of:
  - Completed API project.
  - Folder structure.
  - Running application.
- Swagger or Postman screenshots testing each endpoint and showing:
  - `200`
  - `201`
  - `204`
  - `404`
  - `400`
- Source-code snippets for:
  - `MenuItem`
  - DTOs.
  - `IMenuService`
  - `MenuService`
  - `MenuController`
- A brief explanation for each task: two to three sentences.
- Quick Test answers: Q1-Q8.

### Project ZIP - If Required

- ZIP the project folder.
- Exclude:

```text
bin
obj
```

### File Naming and Upload

1. Rename the Word document using the IT number:

```text
ITXXXXXXXX_Lab03.docx
```

2. Example:

```text
IT22123456_Lab03.docx
```

3. Project ZIP:

```text
ITXXXXXXXX_Lab03_Project.zip
```

4. Submit the Word document and ZIP, if required, to CourseWeb before the end of the two-hour session.

5. Late submissions are not accepted unless the lecturer gives prior approval.

### Student Instruction

Students must refer to the provided Lecture 03 material.

The implementation and explanations should be based on:

- Lecture content.
- Class explanations.
- Practical examples discussed during the lecture.

### Evaluation Criteria - 20 Marks

Marks reward:

- A working API.
- Correct REST semantics.
- Clean layered structure.
- Justified design choices.

### Marking Guide - Part 1

| Component | Marks | What Earns Full Marks |
|---|---:|---|
| Task 01 - Project and Swagger | 3 | Controller-based Web API runs; Swagger loads; clean folder structure created |
| Task 02 - Model and DTOs | 3 | `MenuItem` uses `decimal` for price; record DTOs; input DTO omits `Id`; validation attributes present |
| Task 03 - Service and DI | 4 | Interface and implementation with in-memory data; correct CRUD logic; registered for DI; lifetime justified |

### Visual Explanation

Submission structure:

```text
Submission
├── ITXXXXXXXX_Lab03.docx
│   ├── Student details
│   ├── Task explanations
│   ├── Screenshots
│   ├── Code snippets
│   └── Quick Test answers
└── ITXXXXXXXX_Lab03_Project.zip
    └── Project without bin and obj
```

### Exam Tip

Use the marking guide as a final checklist. Each line states the exact evidence needed for marks.

### Common Mistake

Do not include generated `bin` and `obj` folders in the ZIP. They increase file size and are regenerated by the build process.

---

## Page 14 - Marking Guide Part 2

### Original Page Content

| Component | Marks | What Earns Full Marks |
|---|---:|---|
| Task 04 - Controller GET + POST | 4 | `[ApiController]` + attribute routing; constructor injection; `Ok`, `NotFound`, and `CreatedAtAction`; tested in Swagger |
| Task 05 - PUT + DELETE and LO4 | 4 | Working `PUT` and `DELETE` with `204 / 404`; full CRUD tested; REST-design table correct; ASP.NET Core justification |
| Quick Test - Q1-Q8 | 2 | Q1-Q5 correct: `(c, b, b, b, b)`; Q6-Q8 demonstrate correct understanding |
| **Total** | **20** |  |

### Complete Mark Distribution

| Component | Marks | Percentage |
|---|---:|---:|
| Task 01 | 3 | 15% |
| Task 02 | 3 | 15% |
| Task 03 | 4 | 20% |
| Task 04 | 4 | 20% |
| Task 05 | 4 | 20% |
| Quick Test | 2 | 10% |
| **Total** | **20** | **100%** |

### Visual Explanation

```text
Project + Swagger   3
Model + DTOs        3
Service + DI        4
GET + POST          4
PUT + DELETE + LO4  4
Quick Test          2
---------------------
Total              20
```

### Explanation

Tasks 03, 04, and 05 together contribute 12 of the 20 marks. The central assessed skills are therefore:

- Service-layer design.
- Dependency injection.
- Controller implementation.
- REST status codes.
- Full CRUD.
- Justification of framework and API decisions.

### Exam Tip

A working visual interface is not relevant here. Marks are earned through correct backend structure, behaviour, HTTP semantics, and evidence.

### Common Mistake

Do not focus only on obtaining successful responses. The missing-resource, invalid-model, and no-content responses are also explicitly assessed.

---

# Full Lab Summary

This lab builds a complete in-memory ASP.NET Core REST API for the CampusEats menu.

The API is created using the .NET 8 controller-based Web API template and tested through Swagger. The project follows a layered structure:

```text
Controllers
Services
Models
Dtos
```

The `MenuItem` model represents the internal domain entity. `CreateMenuItemDto` defines validated input, while `MenuItemDto` defines public output. The create DTO excludes `Id` because identity is assigned by the server.

`IMenuService` declares CRUD operations. `MenuService` implements those operations over a seeded in-memory list and maps domain models to output DTOs. The service is registered using `AddSingleton` so its list remains available across requests during this lab.

`MenuController` remains thin. It receives HTTP requests, delegates to `IMenuService`, and returns the correct status codes:

- `200 OK` for successful reads.
- `201 Created` for resource creation.
- `204 No Content` for successful replacement or deletion.
- `404 Not Found` for missing resources.
- `400 Bad Request` for validation failures.

The final API supports:

```text
GET /api/menu
GET /api/menu/{id}
POST /api/menu
PUT /api/menu/{id}
DELETE /api/menu/{id}
```

The practical also requires students to justify ASP.NET Core using performance, cross-platform deployment, built-in capabilities, and enterprise/LTS support.

---

# Architecture and Request-Flow Diagrams

## Layered Architecture

```text
Client / Swagger / React Frontend
              |
              v
       MenuController
        HTTP concerns
              |
              v
        IMenuService
         abstraction
              |
              v
         MenuService
       business + data
              |
              v
       List<MenuItem>
```

## Create Request Flow

```text
POST /api/menu
      |
      v
CreateMenuItemDto
      |
      | validation
      v
MenuController
      |
      v
MenuService.Create()
      |
      v
MenuItem + server Id
      |
      v
MenuItemDto
      |
      v
201 Created
```

## Read by ID Flow

```text
GET /api/menu/{id}
        |
        v
Service searches list
        |
    +---+---+
    |       |
  Found   Missing
    |       |
 200 OK  404 Not Found
```

## Update and Delete Flow

```text
PUT / DELETE
      |
      v
Service returns bool
      |
   +--+--+
   |     |
 true   false
   |     |
 204   404
```

## Dependency Injection

```text
Program.cs
AddSingleton<IMenuService, MenuService>()
                 |
                 v
DI Container
                 |
                 v
MenuController(IMenuService svc)
```

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| ASP.NET Core | Cross-platform .NET framework for web applications and APIs | Framework used to build the backend |
| REST | Architectural style for resource-oriented HTTP services | Design rules for the API |
| Resource | Domain object exposed through a URI | A menu dish |
| CRUD | Create, Read, Update, Delete | Basic data operations |
| Model | Internal domain data structure | Backend's internal dish object |
| DTO | Public input or output data shape | Data crossing the API boundary |
| Controller | HTTP-facing class that maps requests to actions | Receives API calls |
| Service | Class containing business logic and data operations | Performs the work |
| Interface | Contract implemented by a class | Declares service operations |
| Dependency Injection | Framework supplies required dependencies | Controller receives its service |
| Attribute Routing | Routes declared using attributes | `[HttpGet]`, `[Route]`, and similar |
| Model Validation | Checking DTO values against declared rules | Reject invalid requests |
| Singleton | One service instance for the app lifetime | Shared in-memory list |
| Scoped | One service instance per request | Common for database-backed services |
| Swagger | Interactive API documentation and test UI | Browser API tester |
| HTTP Status Code | Numeric result describing request outcome | `200`, `201`, `204`, `400`, `404` |
| `decimal` | Base-10 numeric type suitable for money | Precise monetary values |
| `CreatedAtAction` | Creates a `201` response linked to a read action | Return created resource and location |
| Guard Clause | Early exit when a condition fails | Stop if item is missing |
| PUT | Complete replacement of a resource | Send all required editable fields |
| PATCH | Partial update of a resource | Change selected fields only |

---

# REST Endpoint Revision Table

| Operation | Method | Path | Success | Failure / Validation |
|---|---|---|---|---|
| List all dishes | `GET` | `/api/menu` | `200 OK` | - |
| Get one dish | `GET` | `/api/menu/{id}` | `200 OK` | `404 Not Found` |
| Create dish | `POST` | `/api/menu` | `201 Created` | `400 Bad Request` |
| Replace dish | `PUT` | `/api/menu/{id}` | `204 No Content` | `404` or `400` |
| Delete dish | `DELETE` | `/api/menu/{id}` | `204 No Content` | `404 Not Found` |

---

# Important Code Snippets

## Project Creation - Page 04

```bash
dotnet new webapi --use-controllers -n CampusEats.Api
cd CampusEats.Api
dotnet run
```

## Model - Page 05

```csharp
public class MenuItem
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
    public string Category { get; set; } = "";
    public bool Available { get; set; } = true;
}
```

## Input DTO - Page 05

```csharp
public record CreateMenuItemDto(
    [Required, StringLength(80)] string Name,
    [Range(0, 100000)] decimal Price,
    [Required, StringLength(40)] string Category);
```

## Service Registration - Page 07

```csharp
builder.Services.AddSingleton<IMenuService, MenuService>();
```

## GET by ID - Page 08

```csharp
[HttpGet("{id}")]
public ActionResult<MenuItemDto> GetById(int id)
{
    var item = _svc.GetById(id);
    return item is null ? NotFound() : Ok(item);
}
```

## POST - Page 08

```csharp
[HttpPost]
public ActionResult<MenuItemDto> Create(
    [FromBody] CreateMenuItemDto dto)
{
    var created = _svc.Create(dto);
    return CreatedAtAction(nameof(GetById),
        new { id = created.Id }, created);
}
```

## PUT - Page 10

```csharp
[HttpPut("{id}")]
public IActionResult Update(int id,
    [FromBody] CreateMenuItemDto dto)
{
    var ok = _svc.Update(id, dto);
    return ok ? NoContent() : NotFound();
}
```

## DELETE - Page 10

```csharp
[HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    var ok = _svc.Delete(id);
    return ok ? NoContent() : NotFound();
}
```

---

# Quick Test Answers

## Q1

**Answer:** `(c) decimal`

`decimal` stores base-10 values accurately and is the lecture's required type for money.

## Q2

**Answer:** `(b) 400 Bad Request on an invalid model`

`[ApiController]` automatically checks model validation and returns a `400` response when the DTO is invalid.

## Q3

**Answer:** `(b) constructor injection - DI`

The DI container creates or locates the registered service and supplies it through the controller constructor.

## Q4

**Answer:** `(b) 201 Created`

A successful `POST` that creates a new resource should return `201 Created`.

## Q5

**Answer:** `(b) to hide internal fields and decouple the API from the model`

DTOs protect the internal domain shape and define a stable public contract.

## Q6

| Item | Answer |
|---|---|
| Method | `GET` |
| Path | `/api/menu/{id}` |
| Success | `200 OK` |
| Missing dish | `404 Not Found` |

## Q7

```csharp
[HttpGet("{id}")]
public ActionResult<MenuItemDto> GetById(int id)
{
    var item = _svc.GetById(id);
    return item is null ? NotFound() : Ok(item);
}
```

## Q8

The `PUT` action uses `CreateMenuItemDto`, where `Name` and `Category` are required. `PUT` represents a complete replacement, so sending only `price` creates an invalid DTO and `[ApiController]` returns `400 Bad Request`. `PATCH` is the HTTP method designed for partial updates.

---

# Likely Exam and Viva Questions

### Question 1

Why should `decimal` be used instead of `double` for money?

**Expected Answer:** `decimal` represents base-10 monetary values more accurately, while binary floating-point types can introduce rounding errors.

### Question 2

Why use DTOs when the model already exists?

**Expected Answer:** DTOs hide internal fields, apply boundary validation, reduce coupling, support versioning, and prevent clients from controlling server-owned data.

### Question 3

What is dependency injection?

**Expected Answer:** Dependency injection is a design technique where required objects are supplied to a class, usually by a container, instead of being constructed inside the class.

### Question 4

Why is `AddSingleton` used in this lab?

**Expected Answer:** The service stores the in-memory list, so one application-wide instance is needed to preserve changes across requests.

### Question 5

Why should the controller be thin?

**Expected Answer:** The controller should focus on HTTP routing, input, and response codes while business logic remains in the service, improving separation of concerns and testability.

### Question 6

What is the difference between `200`, `201`, and `204`?

**Expected Answer:** `200` indicates a successful request with a response representation, `201` indicates a newly created resource, and `204` indicates success with no response body.

### Question 7

How does `[ApiController]` improve an API?

**Expected Answer:** It enables API-specific conventions including automatic model-validation responses and improved parameter-binding behaviour.

### Question 8

What is the difference between `PUT` and `PATCH`?

**Expected Answer:** `PUT` replaces the resource representation, while `PATCH` applies a partial change.

### Question 9

Why use `CreatedAtAction`?

**Expected Answer:** It returns `201 Created`, includes the created resource, and generates a location pointing to the action that retrieves it.

### Question 10

Why is ASP.NET Core suitable for an enterprise REST API?

**Expected Answer:** It provides strong performance, cross-platform and container support, built-in dependency injection, routing, validation, middleware, JSON support, Swagger integration, and LTS releases.

---

# Common Mistakes to Avoid

- Creating a minimal API instead of using `--use-controllers`.
- Using a .NET version or template where Swagger is not configured as expected.
- Leaving WeatherForecast sample files in the project.
- Using `double` for price.
- Allowing the create request to supply `Id`.
- Returning the internal entity directly.
- Omitting validation attributes.
- Creating `MenuService` manually inside the controller.
- Forgetting to register `IMenuService`.
- Using `AddScoped` in this exact in-memory lab and losing data between requests.
- Using singleton blindly in a real multi-user mutable-data system.
- Placing business logic in the controller.
- Returning `200` for resource creation instead of `201`.
- Returning `200` for the required successful `PUT` and `DELETE` instead of `204`.
- Failing to return `404` for missing IDs.
- Ignoring the `400` validation test.
- Sending a partial body to `PUT`.
- Forgetting that camel-case JSON differs from PascalCase C# property names.
- Submitting the `bin` and `obj` directories.
- Missing screenshots for required status codes.
- Giving framework justification without connecting it to lecture reasons.

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Framework | C# 12, .NET 8, ASP.NET Core Web API | 1-2 |
| Project template | `dotnet new webapi --use-controllers` | 4 |
| API documentation | `/swagger` | 2, 4 |
| Model | Internal domain shape | 5 |
| Create DTO | No `Id`; has validation | 5 |
| Output DTO | Public response contract | 5 |
| Money type | `decimal` | 3, 5 |
| Service contract | `IMenuService` | 6 |
| Data storage | In-memory list | 6-7 |
| DI registration | `AddSingleton<IMenuService, MenuService>()` | 7 |
| Controller | Thin HTTP layer | 8 |
| GET all | `200 OK` | 8 |
| GET missing | `404 Not Found` | 8 |
| POST create | `201 Created` | 8-9 |
| PUT success | `204 No Content` | 10 |
| DELETE success | `204 No Content` | 10 |
| Invalid DTO | `400 Bad Request` | 10 |
| Partial update | `PATCH` | 12 |
| Total marks | 20 | 13-14 |

---

# Key Terms

- C#
- .NET 8
- ASP.NET Core
- Web API
- REST
- CRUD
- Resource
- HTTP
- JSON
- Swagger
- Postman
- Controller
- Service
- Interface
- Model
- DTO
- Record
- Validation Attribute
- Dependency Injection
- DI Container
- Constructor Injection
- Attribute Routing
- `ApiController`
- `ActionResult`
- `IActionResult`
- `CreatedAtAction`
- `Ok`
- `NotFound`
- `NoContent`
- `BadRequest`
- `decimal`
- Singleton
- Scoped
- Seed Data
- Guard Clause
- Camel Case
- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`
- `200 OK`
- `201 Created`
- `204 No Content`
- `400 Bad Request`
- `404 Not Found`

---

# Final One-Page Revision Notes

## Project Creation

```bash
dotnet new webapi --use-controllers -n CampusEats.Api
cd CampusEats.Api
dotnet run
```

## Architecture

```text
Controller -> Interface -> Service -> Model/List
                    |
                   DTOs
```

## Data Shapes

```text
CreateMenuItemDto
- Name
- Price
- Category

MenuItem
- Id
- Name
- Price
- Category
- Available

MenuItemDto
- Id
- Name
- Price
- Category
- Available
```

## Dependency Injection

```csharp
builder.Services.AddSingleton<IMenuService, MenuService>();
```

## REST Contract

| Method | Path | Result |
|---|---|---|
| `GET` | `/api/menu` | `200` |
| `GET` | `/api/menu/{id}` | `200 / 404` |
| `POST` | `/api/menu` | `201 / 400` |
| `PUT` | `/api/menu/{id}` | `204 / 404 / 400` |
| `DELETE` | `/api/menu/{id}` | `204 / 404` |

## Critical Rules

- Money uses `decimal`.
- Server assigns `Id`.
- DTOs cross the API boundary.
- Controller remains thin.
- Service owns business logic and data.
- `[ApiController]` can return automatic `400`.
- `PUT` is complete replacement.
- `PATCH` is partial update.
- Swagger evidence must include `200`, `201`, `204`, `400`, and `404`.

## Mark Distribution

| Component | Marks |
|---|---:|
| Task 01 | 3 |
| Task 02 | 3 |
| Task 03 | 4 |
| Task 04 | 4 |
| Task 05 | 4 |
| Quick Test | 2 |
| **Total** | **20** |

---

# Verification

PDF pages: 14 / MD page sections: 14 ✅
