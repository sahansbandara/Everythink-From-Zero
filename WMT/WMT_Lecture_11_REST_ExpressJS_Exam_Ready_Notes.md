# SE2020 — Web Technologies and Mobile — Lecture 11
## RESTful Web Services and Express JS

| Field | Details |
|---|---|
| Institution | SLIIT |
| Faculty | Faculty of Computing |
| Module Code | SE2020 |
| Module Name | Web Technologies and Mobile / Web and Mobile Technologies |
| Lecture Number | Lecture 11 |
| Lecture Title | RESTful Web Services and Express JS |
| Total PDF Pages / Slides | 33 |
| Main Topics | 3-Tier Architecture, Application Layer, MVC, REST APIs, HTTP Request/Response, HTTP Status Codes, Express.js, Routing, Middleware, Database Connectivity, REST API Tutorial |

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Agenda](#page-02--agenda)
- [Page 03 — Introduction](#page-03--introduction)
- [Page 04 — Three Tier Architecture](#page-04--three-tier-architecture)
- [Page 05 — Why 3-Tier Architecture for Web and Mobile Apps?](#page-05--why-3-tier-architecture-for-web-and-mobile-apps)
- [Page 06 — Presentation Layer](#page-06--presentation-layer)
- [Page 07 — Application Layer](#page-07--application-layer)
- [Page 08 — MVC Architecture in 3-Tier](#page-08--mvc-architecture-in-3-tier)
- [Page 09 — MVC Architecture](#page-09--mvc-architecture)
- [Page 10 — MVC Architecture Responsibilities](#page-10--mvc-architecture-responsibilities)
- [Page 11 — Presentation Layer ↔ Application Layer](#page-11--presentation-layer--application-layer)
- [Page 12 — Application Layer: APIs](#page-12--application-layer-apis)
- [Page 13 — Benefits of API](#page-13--benefits-of-api)
- [Page 14 — Different Types of APIs](#page-14--different-types-of-apis)
- [Page 15 — REST](#page-15--rest)
- [Page 16 — REST Resources](#page-16--rest-resources)
- [Page 17 — REST HTTP Request and Response Structure](#page-17--rest-http-request-and-response-structure)
- [Page 18 — Create Student REST Example](#page-18--create-student-rest-example)
- [Page 19 — Get All Students REST Example](#page-19--get-all-students-rest-example)
- [Page 20 — Update All REST Example](#page-20--update-all-rest-example)
- [Page 21 — Partial Update REST Example](#page-21--partial-update-rest-example)
- [Page 22 — Delete Data REST Example](#page-22--delete-data-rest-example)
- [Page 23 — REST HTTP Codes](#page-23--rest-http-codes)
- [Page 24 — Commonly Used HTTP Codes](#page-24--commonly-used-http-codes)
- [Page 25 — Express JS](#page-25--express-js)
- [Page 26 — Express JS in 3-Tier and MVC](#page-26--express-js-in-3-tier-and-mvc)
- [Page 27 — Express JS Routing](#page-27--express-js-routing)
- [Page 28 — Express JS Basic Routing Syntax](#page-28--express-js-basic-routing-syntax)
- [Page 29 — Express JS Middleware](#page-29--express-js-middleware)
- [Page 30 — Express JS Working with Database](#page-30--express-js-working-with-database)
- [Page 31 — Express JS REST APIs](#page-31--express-js-rest-apis)
- [Page 32 — Tutorial: Simple Express JS Backend](#page-32--tutorial-simple-express-js-backend)
- [Page 33 — Thank You](#page-33--thank-you)
- [Full Lecture Summary](#full-lecture-summary)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Important Code Snippets](#important-code-snippets)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Lecture Notes

## Page 01 — Title Page

### Original Slide Content

- SE2020 – Web Technologies and Mobile
- Lecture 11
- RESTful Web Services and Express JS

### Visual Explanation

The slide shows the SLIIT branding and Faculty of Computing design template. The main topic is centered: **RESTful Web Services and Express JS**.

### Explanation

This lecture focuses on how modern web/mobile applications are structured and how backend APIs are built using REST principles and Express.js.

### Exam Tip

Remember the relationship:

```text
3-Tier Architecture = overall system structure
MVC = backend/internal code organization pattern
REST = communication style between frontend and backend
Express.js = Node.js framework used to implement backend APIs
```

### Common Mistake

Confusing REST with Express.js. REST is an architectural communication style; Express.js is a framework used to build REST APIs.

---

## Page 02 — Agenda

### Original Slide Content

SE 2020 – Web and Mobile Technologies

- Introduction
- 3-Tier Architecture
- Application Layer
- MVC Architecture
- REST Service
- Express JS

### Visual Explanation

The slide lists the lecture flow. It starts from high-level architecture and moves toward implementation using Express.js.

### Explanation

The lecture builds step by step:

1. Why architecture is needed.
2. How a web/mobile application is split into layers.
3. Where the backend fits.
4. How MVC organizes backend code.
5. How REST enables frontend-backend communication.
6. How Express.js implements the backend API.

### Visual/Text Diagram

```text
Architecture Concept
      ↓
3-Tier Architecture
      ↓
Application Layer / Backend
      ↓
MVC Organization
      ↓
REST API Communication
      ↓
Express.js Implementation
```

### Exam Tip

If an essay asks for “backend architecture for a web application,” mention 3-Tier + MVC + REST + Express.js together.

### Common Mistake

Studying Express.js only as code and ignoring the architecture behind it. Exams often test the architecture first.

---

## Page 03 — Introduction

### Original Slide Content

- As applications grow, we need to separate responsibilities — for easier maintenance, testing, and scalability.
- Modern applications follow architectural patterns that help achieve this structure.
- Today, we’ll connect four key ideas:
  - 3-Tier Architecture – the overall system design
  - MVC – the internal organization (architectural) pattern
  - REST – the communication style
  - Express.js – the implementation framework

### Visual Explanation

No major visual content. The slide is text-based and introduces the main ideas.

### Explanation

Large applications become hard to manage if all code is mixed together. Separating responsibilities means each part of the system has a clear job:

| Concept | Role |
|---|---|
| 3-Tier Architecture | Separates system into frontend, backend, and database tiers |
| MVC | Organizes backend/application logic into Model, View, Controller |
| REST | Defines how clients and servers communicate using HTTP |
| Express.js | Provides practical tools to build backend APIs in Node.js |

### Visual/Text Diagram

```text
Growing Application Problem
      ↓
Too much code mixed together
      ↓
Solution: separate responsibilities
      ↓
3-Tier + MVC + REST + Express.js
```

### Exam Tip

Important keywords: **maintenance, testing, scalability, separation of responsibilities, architectural patterns**.

### Common Mistake

Writing only “architecture makes apps faster.” The stronger answer is: architecture improves maintainability, testing, scalability, security, and team development.

---

## Page 04 — Three Tier Architecture

### Original Slide Content

- Three Tier Architecture
- SE 2020 – Web and Mobile Technologies

### Visual Explanation

The slide contains a 3-tier architecture diagram:

| Tier | Visual Element | Meaning |
|---|---|---|
| Presentation Tier | Client devices such as laptop and mobile phone | User-facing frontend |
| Application Tier | Web server + application server | Handles business logic and requests |
| Data Tier | Database server | Stores and retrieves data |

The diagram also shows the internet between clients and the application tier.

### Explanation

Three-tier architecture separates an application into three major parts:

1. **Presentation Tier** — what the user sees and interacts with.
2. **Application Tier** — the backend logic that processes requests.
3. **Data Tier** — the database where information is stored.

### Visual/Text Diagram

```text
User / Browser / Mobile App
        ↓
Presentation Tier
        ↓ HTTP / REST API
Application Tier
        ↓ Database Query
Data Tier / Database Server
```

### Exam Tip

For diagrams, draw three boxes: **Presentation → Application → Data**. Then explain each tier’s responsibility.

### Common Mistake

Calling the database “backend.” The backend usually means the application tier. The database is the data tier.

---

## Page 05 — Why 3-Tier Architecture for Web and Mobile Apps?

### Original Slide Content

- **Independent Infrastructure** – Each layer (Presentation, Application, and Data) runs on its own infrastructure, ensuring better performance and maintainability.
- **Parallel Development** – Different teams can develop each tier independently, improving efficiency and speeding up the development process.
- **Scalability** – You can scale up or down each layer separately, without affecting the other tiers, making resource management more flexible.
- **Enhanced Security** – Unlike two-tier architecture, this model provides better security by isolating data and logic from the frontend, reducing vulnerabilities.

### Visual Explanation

No major visual content. The slide lists benefits of 3-tier architecture.

### Explanation

3-tier architecture is useful because each part can be managed independently.

| Benefit | Meaning | Example |
|---|---|---|
| Independent Infrastructure | Each layer can run separately | Frontend on Vercel, backend on Render, database on MongoDB Atlas |
| Parallel Development | Teams can work separately | UI team works on React while backend team builds API |
| Scalability | Each tier can scale separately | Add more backend servers without changing frontend |
| Enhanced Security | Data and logic are hidden from frontend | Users cannot directly access database |

### Visual/Text Diagram

```text
Frontend Team        Backend Team        Database Team
     ↓                    ↓                   ↓
Presentation Tier    Application Tier    Data Tier
     ↓                    ↓                   ↓
Can develop independently but integrate through APIs
```

### Exam Tip

Likely written question: “Explain advantages of 3-tier architecture.” Give four points: independent infrastructure, parallel development, scalability, security.

### Common Mistake

Only writing “it has three layers.” That is not enough. You must explain why separating layers is useful.

---

## Page 06 — Presentation Layer

### Original Slide Content

- The Presentation Layer, also called the client-side or frontend, is responsible for interacting with users.
- It is the visible part of the application where users input data and receive outputs.
- The main goal of this layer is to ensure a smooth user experience (UX) with responsive and accessible interfaces.
- Modern Frontend Frameworks and Libraries:
  - React.js, Angular, Vue.js.
- Legacy Frontend Technologies:
  - jQuery, AJAX (Asynchronous JavaScript and XML).

### Visual Explanation

No major visual content. The slide explains the frontend/presentation layer.

### Explanation

The presentation layer is what users directly use. In a web application, this is commonly the website or mobile app interface.

| Item | Meaning |
|---|---|
| Client-side | Runs in the user’s browser or app |
| Frontend | Visible UI layer |
| UX | User experience: smooth, responsive, accessible interface |
| React/Angular/Vue | Modern frontend tools |
| jQuery/AJAX | Older technologies used for DOM updates and asynchronous communication |

### Visual/Text Diagram

```text
User
 ↓ clicks / types / submits form
Frontend UI
 ↓ sends request
Backend API
```

### Exam Tip

Use these keywords: **client-side, frontend, visible UI, user input, output, UX, responsive interface**.

### Common Mistake

Saying presentation layer stores business data. It should only display and collect data; persistent storage belongs to the data tier.

---

## Page 07 — Application Layer

### Original Slide Content

- The Application Layer, also called the server-side or backend, is responsible for processing business logic, handling requests, and managing data.
- It acts as an intermediary between the Presentation Layer (frontend) and the Database Layer.
- Technologies used to implement include but not limited to:
  - Java – Spring, Spring Boot
  - Node.js – Express.js, Koa
  - Python – Django, Flask
  - PHP – Laravel, Symfony
  - .NET – ASP.NET Core

### Visual Explanation

No major visual content. The slide explains the backend/application layer.

### Explanation

The application layer receives requests from the frontend, performs processing, applies business rules, communicates with the database, and sends a response back.

| Backend Responsibility | Example |
|---|---|
| Process business logic | Calculate total price |
| Handle requests | Receive POST /students |
| Manage data flow | Save student to database |
| Validate input | Check required fields |
| Send responses | Return JSON success/error |

### Visual/Text Diagram

```text
Frontend Request
      ↓
Application Layer / Backend
      ├── Validate request
      ├── Apply business logic
      ├── Query / update database
      └── Return response
```

### Exam Tip

If asked “What is the application layer?”, mention **server-side/backend**, **business logic**, **request handling**, **intermediary between frontend and database**.

### Common Mistake

Thinking Express.js is the only backend technology. Express.js is one option under Node.js.

---

## Page 08 — MVC Architecture in 3-Tier

### Original Slide Content

- MVC Architecture in 3-Tier
- SE 2020 – Web and Mobile Technologies

### Visual Explanation

The slide shows MVC inside the **Application Tier** of the 3-tier architecture.

The visual structure is:

```text
Tier 1: Presentation Tier
├── React Components
├── Vue Components
├── Angular Components
└── Mobile Apps (not MVC View)
        ↓ HTTP / REST API
Tier 2: Application Tier
├── Controller
│   ├── API Endpoints
│   └── Request Handling
├── Model
│   ├── Business Logic
│   └── Data Operations
└── View
    ├── JSON Response Formatting
    └── API Response Structure
        ↓
Tier 3: Data Tier
└── Database
```

The diagram marks the Controller, Model, and View inside the application tier as **MVC**.

### Explanation

MVC is used to organize the backend/application tier. In REST APIs, the “View” is not necessarily an HTML page. It can be the JSON response format sent to the frontend.

### Exam Tip

A strong answer: “In a REST backend, MVC usually sits inside Tier 2. Controller handles API requests, Model handles data/business logic, and View formats the API response.”

### Common Mistake

Assuming MVC View always means a visual webpage. In REST APIs, View can mean JSON response formatting.

---

## Page 09 — MVC Architecture

### Original Slide Content

MVC (Model-View-Controller) is a software design pattern used to organize code in applications. It separates the application into three interconnected components, each with specific responsibilities.

### Visual Explanation

The slide shows an MVC diagram:

- **Model**
  - Defines data structure.
  - Example: updates application to reflect added item.
- **View**
  - Defines display/UI.
  - Example: user clicks “add to cart”.
- **Controller**
  - Contains control logic.
  - Example: receives “update” from view and modifies model.

Relationship shown:

```text
View sends input from user → Controller
Controller manipulates → Model
Model updates → View
```

### Explanation

MVC separates an application into three parts:

| MVC Part | Job |
|---|---|
| Model | Data, business logic, database operations |
| View | Output/presentation format |
| Controller | Receives request, coordinates model and view |

### Visual/Text Diagram

```text
User Action
    ↓
Controller
    ↓ calls
Model
    ↓ data/result
View / Response Format
    ↓
User / Frontend receives output
```

### Exam Tip

For MVC questions, define all three parts. Do not explain only Model and Controller.

### Common Mistake

Putting database operations in Controller. Cleaner MVC keeps database/business logic in the Model.

---

## Page 10 — MVC Architecture Responsibilities

### Original Slide Content

| Model | Controller | View |
|---|---|---|
| Business logic | Send & Receive HTTP requests | Format data for presentation |
| Data validation | Validate request data | Structure API responses |
| Database operations | Call Model methods | Hide sensitive data |
| Business rules enforcement | Call View to format response | Create consistent response format |

### Visual Explanation

The slide contains a comparison table for Model, Controller, and View responsibilities.

### Explanation

This table is exam-important because it shows the exact responsibilities of each MVC part.

| Component | Main Responsibility | In REST API Example |
|---|---|---|
| Model | Handles data and business rules | Student model validates and saves student data |
| Controller | Handles request/response flow | `studentController.createStudent()` receives POST request |
| View | Formats output | Sends JSON without password or internal fields |

### Visual/Text Diagram

```text
Controller receives HTTP request
        ↓
Controller validates request data
        ↓
Controller calls Model methods
        ↓
Model handles business logic/database
        ↓
Controller calls View/response formatting
        ↓
JSON response sent to frontend
```

### Exam Tip

Likely short question: “Differentiate Model, View, Controller.” Use a three-column table.

### Common Mistake

Saying View stores data. View only formats/presents data.

---

## Page 11 — Presentation Layer ↔ Application Layer

### Original Slide Content

How does the Backend and the frontend communicate?

**REST API Communication Scenario**

- **User Action** – A user submits a form on the frontend (e.g., signing up).
- **Frontend Request** – The frontend sends a POST request to the backend with the form data.
- **Backend Processing** – The backend validates the data, updates the database, and processes business logic.
- **Backend Response** – The backend sends a success/failure response back to the frontend.
- **Frontend Update** – The frontend updates the UI dynamically based on the response (e.g., "Registration Successful!").

### Visual Explanation

The slide shows multiple clients/sessions connecting to the frontend, then the frontend communicating with the backend through an API.

Flow:

```text
Client Session 1
Client Session 2  →  Frontend  →  API  →  Backend
Client Session 3
```

### Explanation

Frontend and backend communicate through APIs. A typical form submission uses a POST request. The backend processes it and returns a result, usually in JSON.

### Visual/Text Diagram

```text
User fills signup form
        ↓
Frontend sends POST request with form data
        ↓
Backend validates and applies business logic
        ↓
Backend updates database
        ↓
Backend sends success/failure response
        ↓
Frontend updates UI dynamically
```

### Exam Tip

For frontend-backend communication answers, mention: **user action, HTTP request, backend validation, database update, response, UI update**.

### Common Mistake

Thinking the frontend directly updates the database. In proper 3-tier design, the frontend talks to the backend, and the backend talks to the database.

---

## Page 12 — Application Layer: APIs

### Original Slide Content

**What is an API?**

- API (Application Programming Interface) is a software interface that allows two or more applications to communicate with each other.
- It acts as a bridge between different software components, enabling seamless integration.
- APIs abstract away complexities, allowing developers to interact with services without knowing the internal implementation.
- It defines a contract of services, specifying how applications should request and exchange data.

### Visual Explanation

No major visual content. The slide defines API.

### Explanation

An API is like a rulebook/contract that says:

- What request can be sent.
- What data should be sent.
- What response will be received.
- Which endpoint and HTTP method should be used.

### Visual/Text Diagram

```text
Application A
   ↓ API request
API Contract / Interface
   ↓ processed by
Application B / Service
   ↓ API response
Application A
```

### Exam Tip

Definition keywords: **software interface, communication, bridge, abstraction, contract, request and exchange data**.

### Common Mistake

Saying API is a database. API is not the database; it is the interface used to communicate with a service.

---

## Page 13 — Benefits of API

### Original Slide Content

**Benefits of API**

- **Standardized Communication**
  - Uses standard protocols like HTTP/HTTPS, WebSockets, gRPC.
  - Responses are typically in JSON or XML format.
- **Encapsulation & Abstraction**
  - Hides complex implementation details, exposing only necessary functions and data.
  - Developers don’t need to understand database queries or backend logic.
- **Reusability & Efficiency**
  - APIs allow applications to reuse functionality, reducing redundant code.
  - Example: A payment gateway API (like Stripe) can be integrated into multiple applications without writing new payment logic.

### Visual Explanation

No major visual content. The slide lists API benefits.

### Explanation

APIs make development easier because the frontend or external application does not need to know the internal backend code.

| Benefit | Meaning | Example |
|---|---|---|
| Standardized Communication | Uses common protocols and formats | HTTP + JSON |
| Encapsulation & Abstraction | Hides internal logic | Frontend does not know SQL query details |
| Reusability & Efficiency | Same service can be reused | Payment API reused in many apps |

### Exam Tip

For API benefits, write at least three: **standard communication, abstraction, reusability**.

### Common Mistake

Writing only “API connects apps.” That is true but incomplete. Explain benefits with examples.

---

## Page 14 — Different Types of APIs

### Original Slide Content

**Different Types of APIs**

- REST API (Representational State Transfer)
  - Uses HTTP methods (GET, POST, PUT, DELETE) for communication.
  - Stateless and follows resource-based architecture.
  - Responses are typically in JSON or XML.
  - Commonly Used For: Web and mobile applications, cloud services.
- SOAP API
- RPC (Remote Procedure Call)
- WebSockets API
- GraphQL API

### Visual Explanation

No major visual content. The slide lists API types, with REST explained in more detail.

### Explanation

REST is the main API style covered in this lecture.

| API Type | Main Idea | Common Use |
|---|---|---|
| REST API | Resource-based HTTP API | Web/mobile apps |
| SOAP API | XML-based strict protocol | Enterprise systems |
| RPC | Calls remote functions/procedures | Service-to-service calls |
| WebSockets API | Real-time two-way communication | Chat, live updates |
| GraphQL API | Client asks for exactly needed data | Complex frontend data needs |

### Exam Tip

REST keywords: **HTTP methods, stateless, resources, JSON/XML, web and mobile apps**.

### Common Mistake

Confusing REST and WebSockets. REST is request-response; WebSockets supports persistent real-time communication.

---

## Page 15 — REST

### Original Slide Content

- REST (Representational State Transfer) is an architectural style for building web services.
  - A web service is a way for applications to exchange data and interact with each other, machine-to-machine communication over the web.
- It defines a set of constraints for how clients and servers should communicate over the web, using HTTP as the communication protocol.

### Visual Explanation

The slide includes a REST API model diagram:

```text
Client → HTTP Request → REST API → Server
Client ← HTTP Response ← REST API ← Server
```

The visual shows that the REST API acts as the communication interface between the client and the server.

### Explanation

REST is not a programming language. It is a design style for APIs. It uses HTTP methods and resource URLs so that systems can communicate clearly.

### Visual/Text Diagram

```text
Client
  |  GET /api/students
  v
REST API
  |  query/process
  v
Server / Database
  |  JSON response
  v
Client
```

### Exam Tip

Definition answer must include: **architectural style, web services, client-server communication, HTTP protocol**.

### Common Mistake

Saying REST is “a tool” or “a framework.” It is an architectural style.

---

## Page 16 — REST Resources

### Original Slide Content

- In REST, everything is treated as a resource (e.g., user, product, order).
- Each resource is identified by a unique URI (e.g., `/api/users/123`).
- Clients use HTTP methods to perform operations on resources:
  - GET → Retrieve data (`GET /api/users`)
  - POST → Create a new resource (`POST /api/users`)
  - PUT → Update an existing resource (`PUT /api/users/123`)
  - DELETE → Remove a resource (`DELETE /api/users/123`)

### Visual Explanation

No major visual content. The slide explains resources and HTTP methods.

### Explanation

REST APIs use nouns for resources and HTTP methods for actions.

| HTTP Method | CRUD Operation | Purpose | Example |
|---|---|---|---|
| GET | Read | Retrieve data | `GET /api/users` |
| POST | Create | Add new data | `POST /api/users` |
| PUT | Update/Replace | Update full resource | `PUT /api/users/123` |
| DELETE | Delete | Remove resource | `DELETE /api/users/123` |

### Visual/Text Diagram

```text
Resource: User
Collection URI: /api/users
Single Resource URI: /api/users/123

GET    /api/users      → get all users
POST   /api/users      → create user
PUT    /api/users/123  → update user 123
DELETE /api/users/123  → delete user 123
```

### Exam Tip

This is a very likely exam question. Memorize HTTP method → CRUD mapping.

### Common Mistake

Using verbs in URL such as `/api/getUsers`. REST style prefers nouns: `/api/users` with GET.

---

## Page 17 — REST HTTP Request and Response Structure

### Original Slide Content

- REST – HTTP Request and Response
- Request Message
- Response Message

### Visual Explanation

The slide shows two message structures.

**Request Message:**

```text
<VERB> | <URI> | <HTTP Version>
<Request Header>
<Request Body>
```

**Response Message:**

```text
<HTTP Version> | <Response Code>
<Response Header>
<Response Body>
```

### Explanation

A REST API request usually contains:

- HTTP method/verb such as GET, POST, PUT, DELETE.
- URI that identifies the resource.
- HTTP version.
- Request headers with metadata.
- Request body when data is sent, usually for POST/PUT/PATCH.

A REST API response usually contains:

- HTTP version.
- Response status code.
- Response headers.
- Response body containing returned data or message.

### Visual/Text Diagram

```text
HTTP Request
├── Verb / Method: GET, POST, PUT, DELETE
├── URI: /api/students/123
├── HTTP Version: HTTP/1.1
├── Headers: Content-Type, Authorization, etc.
└── Body: JSON data if needed

HTTP Response
├── HTTP Version: HTTP/1.1
├── Status Code: 200, 201, 404, 500, etc.
├── Headers: Content-Type, etc.
└── Body: JSON response data/message
```

### Exam Tip

If asked to draw request/response structure, show request line + headers + body and response line + headers + body.

### Common Mistake

Putting request body in every request. GET requests usually do not need a body.

---

## Page 18 — Create Student REST Example

### Original Slide Content

Example:

Let’s say you have a Student Management REST API running at: `https://api.school.com/students`. Write API exposes endpoints to Create, Read, Update and Delete student records.

1. Create student

### Visual Explanation

The slide shows a POST request and a 201 Created response.

**Request shown in visual:**

```http
POST /api/students HTTP/1.1
```

Request header contains metadata such as Host and Content-Type.

Request body contains:

```json
{
  "name": "Sanduni",
  "age": 23,
  "course": "Software Engineering"
}
```

**Response shown in visual:**

```http
HTTP/1.1 201 Created
```

Response header includes metadata such as content-type and data.

Response body contains:

```json
{
  "message": "Student added successfully",
  "student": {
    "id": 101,
    "name": "Sanduni",
    "age": 23,
    "course": "Software Engineering"
  }
}
```

### Explanation

Creating a resource uses the POST method. If successful, the correct HTTP status code is commonly **201 Created**.

### Visual/Text Diagram

```text
Frontend sends POST /api/students
        ↓
Request body contains new student data
        ↓
Backend creates student
        ↓
Backend returns 201 Created + created student details
```

### Exam Tip

For create operation, remember: **POST + collection URI + request body + 201 Created**.

### Common Mistake

Using GET to create data. GET should retrieve data only.

---

## Page 19 — Get All Students REST Example

### Original Slide Content

2. Get all students

Request:

```http
GET https://api.school.com/students
```

Response:

```json
[
  { "id": 101, "name": "Sanduni", "age": 23 },
  { "id": 123, "name": "Perera", "age": 26 }
]
```

### Visual Explanation

The slide visually emphasizes GET in green and returns an array/list of students.

### Explanation

GET is used to retrieve data. Since the endpoint is `/students`, it returns all student records.

### Visual/Text Diagram

```text
GET /students
    ↓
Return list/array of students
```

### Exam Tip

For “get all records,” use **GET** on the collection URI.

### Common Mistake

Adding request body to GET. Usually GET uses URL/queries, not body.

---

## Page 20 — Update All REST Example

### Original Slide Content

3. Update All

Request:

```http
PUT https://api.school.com/students/123
```

Body:

```json
{ "name": "Kasun Perera", "age": 26 }
```

Response:

```json
[
  "message": "Student updated successfully",
  "student": { "id": 123, "name": "Kasun Perera", "age": 26 }
]
```

### Visual Explanation

The slide highlights PUT as the method used to update an existing student record by ID.

### Explanation

PUT is used to update an existing resource. In this example, the student with ID `123` is updated.

### Visual/Text Diagram

```text
PUT /students/123
    ↓
Body contains updated student data
    ↓
Backend replaces/updates student 123
    ↓
Return success message + updated student
```

### Exam Tip

For full update, use **PUT + resource URI with ID + request body**.

### Common Mistake

Forgetting the ID in the URI. Updating a specific record needs `/students/123`, not only `/students`.

---

## Page 21 — Partial Update REST Example

### Original Slide Content

4. Update - Partial

Request:

```http
PATCH https://api.school.com/students/123
```

Body:

```json
{ "age": 27 }
```

Response:

```json
[
  "message": "Student age updated successfully",
  "student": { "id": 123, "name": "Kasun Perera", "age": 27 }
]
```

### Visual Explanation

The slide shows PATCH in green and a small body with only the changed field: `age`.

### Explanation

PATCH is used for partial updates. Unlike PUT, PATCH does not require sending the entire resource.

| Method | Update Type | Body Example |
|---|---|---|
| PUT | Full update/replace | `{ "name": "Kasun Perera", "age": 26 }` |
| PATCH | Partial update | `{ "age": 27 }` |

### Visual/Text Diagram

```text
PATCH /students/123
    ↓
Only changed field is sent
    ↓
Backend updates age only
    ↓
Return updated student
```

### Exam Tip

For partial update questions, use **PATCH**, not PUT.

### Common Mistake

Using PUT and PATCH as if they are exactly the same. PUT generally updates/replaces; PATCH partially updates.

---

## Page 22 — Delete Data REST Example

### Original Slide Content

5. Delete Data

Request:

```http
DELETE https://api.school.com/students/123
```

Response:

```json
{ "message": "Student age updated successfully" }
```

### Visual Explanation

The slide shows DELETE as the method and the endpoint `/students/123`. The response message says “Student age updated successfully,” which appears inconsistent with a delete action.

### Explanation

DELETE removes a resource. For this slide, the response message appears to be copied from the previous PATCH example. The expected meaning should be deletion of student ID `123`.

A clearer delete response would normally be:

```json
{ "message": "Student deleted successfully" }
```

### Visual/Text Diagram

```text
DELETE /students/123
      ↓
Backend removes student with ID 123
      ↓
Return success message or 204 No Content
```

### Exam Tip

Use **DELETE + resource URI with ID** to remove a record.

### Common Mistake

The slide’s response message says “Student age updated successfully.” Do not copy that as the logical meaning of DELETE in an exam unless quoting the slide. Explain that DELETE removes the resource.

---

## Page 23 — REST HTTP Codes

### Original Slide Content

- HTTP status codes are 3-digit numbers that indicate the status of a client's request to a server.
- The first digit defines the class of response.
  - 1xx Informational
  - 2xx Success
  - 3xx Redirection
  - 4xx Client Error
  - 5xx Server Error
- The last two digits provide specific details about the response.

### Visual Explanation

No major visual content. The slide explains status code categories.

### Explanation

HTTP status codes tell the client what happened to the request.

| Code Class | Meaning | Example Situation |
|---|---|---|
| 1xx | Informational | Request received, continuing process |
| 2xx | Success | Request succeeded |
| 3xx | Redirection | Client needs to go elsewhere |
| 4xx | Client Error | Client sent bad request or requested missing resource |
| 5xx | Server Error | Server failed to process valid request |

### Exam Tip

Memorize first digit meanings. They are often tested in short-answer questions.

### Common Mistake

Thinking all errors are server errors. 404 is client-side/resource error; 500 is server-side error.

---

## Page 24 — Commonly Used HTTP Codes

### Original Slide Content

Commonly used HTTP codes:

- 200 OK (Success)
- 201 Created
- 202 Accepted
- 204 No content
- 301 Moved Permanently (Redirection)
- 400 Bad request
- 404 Not Found (Client Error)
- 500 Internal Server Error (Server Error)
- 502 Bad gateway
- 503 Service unavailable

### Visual Explanation

No major visual content. The slide lists important HTTP status codes.

### Explanation

| Code | Meaning | Typical REST API Use |
|---|---|---|
| 200 OK | Request successful | GET success, update success |
| 201 Created | New resource created | POST create success |
| 202 Accepted | Request accepted for processing | Async processing |
| 204 No Content | Success but no response body | DELETE success |
| 301 Moved Permanently | Resource moved | URL permanently changed |
| 400 Bad Request | Invalid request | Missing/invalid fields |
| 404 Not Found | Resource not found | Student ID does not exist |
| 500 Internal Server Error | Server error | Backend crash/bug |
| 502 Bad Gateway | Invalid upstream response | Gateway/proxy issue |
| 503 Service Unavailable | Service unavailable | Server temporarily down |

### Exam Tip

For CRUD API answers, pair methods with status codes:

```text
GET success → 200 OK
POST success → 201 Created
PUT/PATCH success → 200 OK
DELETE success → 200 OK or 204 No Content
Invalid input → 400 Bad Request
Missing resource → 404 Not Found
Server failure → 500 Internal Server Error
```

### Common Mistake

Returning 201 for every successful request. 201 is specifically for resource creation.

---

## Page 25 — Express JS

### Original Slide Content

- A web application framework for Node.js
- Provides tools to build web servers and APIs
- Minimal and flexible
- Think of Express.js as:
  - The construction kit you use to build your application
  - The toolbox that has everything you need
  - The foundation on which you implement 3-Tier, MVC, and REST.

### Visual Explanation

No major visual content. The slide introduces Express.js.

### Explanation

Express.js is a lightweight backend framework for Node.js. It helps create:

- Web servers.
- API endpoints.
- Middleware pipelines.
- REST APIs.
- Routing systems.

### Visual/Text Diagram

```text
Node.js Runtime
      ↓
Express.js Framework
      ↓
Routes + Middleware + Controllers
      ↓
REST API Backend
```

### Exam Tip

Definition keywords: **Node.js framework, web servers, APIs, minimal, flexible**.

### Common Mistake

Saying Express.js is a frontend framework. It is backend/server-side.

---

## Page 26 — Express JS in 3-Tier and MVC

### Original Slide Content

- Express.js operates in Tier 2 (Application Tier) and connects to both Tier 1 and Tier 3.
- It provides:
  - HTTP server functionality (listens for requests from Tier 1)
  - Middleware for processing requests
  - Database connection capabilities (connects to Tier 3)
  - Response handling (sends data back to Tier 1)
- Express.js provides the building blocks to implement MVC.
  - `express.Router()` → Maps to CONTROLLER
  - JavaScript Classes → Maps to MODEL
  - `res.json()` → Maps to VIEW

### Visual Explanation

No major visual content. The slide maps Express.js to 3-tier and MVC.

### Explanation

Express.js belongs to the application tier. It receives requests from the frontend and can communicate with the database.

| Express Feature | Architecture Mapping |
|---|---|
| HTTP server | Application tier request receiver |
| Middleware | Request processing pipeline |
| Database connection | Link to data tier |
| Response handling | Sends result to presentation tier |
| `express.Router()` | Controller routing |
| JavaScript Classes | Model logic/data structure |
| `res.json()` | API response/View formatting |

### Visual/Text Diagram

```text
Tier 1: Frontend
    ↓ HTTP Request
Tier 2: Express.js Backend
    ├── Router / Controller
    ├── Middleware
    ├── Model / Business Logic
    └── res.json() response
    ↓ Database Query
Tier 3: Database
```

### Exam Tip

If asked “Where does Express.js fit in 3-tier architecture?”, answer: **Tier 2/Application Tier**.

### Common Mistake

Mapping `res.json()` to Model. `res.json()` formats and sends the response, so it maps closer to View/output formatting.

---

## Page 27 — Express JS Routing

### Original Slide Content

Routing in Express.js is the mechanism that determines how an application responds to client requests for specific URLs (endpoints) and HTTP methods (GET, POST, PUT, DELETE).

**Simple Analogy:**

- Customer walks in (Client makes request)
- Receptionist asks: “Where do you want to go?” (Router checks URL)
- Customer says: “I want Room 305” (URL: `/room/305`)
- Receptionist directs them: “Go to floor 3, turn right” (Route handler executes)
- Customer reaches their room (Response sent back)

### Visual Explanation

The slide shows routing as a receptionist-room analogy. The router checks the URL and sends the request to the correct handler.

### Explanation

Routing connects an HTTP method + URL path to a function.

Example meaning:

```text
GET /students     → run function to return all students
POST /students    → run function to create a student
PUT /students/123 → run function to update student 123
```

### Visual/Text Diagram

```text
Client Request
    ↓
Express Router checks METHOD + PATH
    ↓
Correct route handler runs
    ↓
Handler sends response
```

### Exam Tip

Use the phrase: **Routing determines how an application responds to specific endpoints and HTTP methods**.

### Common Mistake

Thinking routing is only URL matching. It matches both HTTP method and URL path.

---

## Page 28 — Express JS Basic Routing Syntax

### Original Slide Content

```javascript
app.METHOD(PATH, HANDLER)
```

- `app` = Express application instance
- `METHOD` = HTTP method (`get`, `post`, `put`, `delete`, etc.)
- `PATH` = URL path (route)
- `HANDLER` = Function that executes when route is matched

Example:

```javascript
app.get('/about', (req, res) => {
  res.send('This is the about page’);
});
```

### Visual Explanation

The slide shows the generic route syntax and a concrete GET route for `/about`.

### Code from Slide

```javascript
app.METHOD(PATH, HANDLER)
```

### Code Explanation

This is the general Express.js route format. Replace `METHOD` with the required HTTP method such as `get`, `post`, `put`, or `delete`.

### Code from Slide

```javascript
app.get('/about', (req, res) => {
  res.send('This is the about page’);
});
```

### Code Explanation

This route responds when the client sends a GET request to `/about`. The handler sends the text response: `This is the about page`.

### Output/Result

If a browser or client visits `/about`, the server returns:

```text
This is the about page
```

### Visual/Text Diagram

```text
GET /about
   ↓
app.get('/about', handler)
   ↓
res.send('This is the about page')
```

### Exam Tip

Know the four parts of Express routing syntax: **app, METHOD, PATH, HANDLER**.

### Common Mistake

Forgetting that `req` means request and `res` means response.

---

## Page 29 — Express JS Middleware

### Original Slide Content

Middleware is a function that runs between the client request and the server response. It can modify the request, response, or terminate the request cycle.

- Express JS has built-in middleware functions for handling requests, parsing data, and serving static files.
- You can use third-party middleware functions for tasks like logging, authentication, and caching.
- You can create your own (custom) middleware functions to handle specific tasks or modify the request/response as needed.

### Visual Explanation

No major visual content. The slide defines middleware and types of middleware.

### Explanation

Middleware is like a checkpoint between request and response.

| Middleware Type | Purpose | Example |
|---|---|---|
| Built-in | Common Express functionality | `express.json()` parses JSON body |
| Third-party | External package functionality | Logger, authentication, caching |
| Custom | Developer-defined logic | Check if user is logged in |

### Visual/Text Diagram

```text
Client Request
      ↓
Middleware 1: parse JSON
      ↓
Middleware 2: authenticate user
      ↓
Middleware 3: validate input
      ↓
Route Handler
      ↓
Server Response
```

### Exam Tip

Middleware definition: **function that runs between request and response and can modify request/response or end the cycle**.

### Common Mistake

Thinking middleware always sends the final response. Middleware may pass control to the next middleware/route handler.

---

## Page 30 — Express JS Working with Database

### Original Slide Content

- Express JS can work with different types of databases, including SQL databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB).
- You can connect to a database using a database driver or an ORM (Object-Relational Mapping) library like Sequelize or Mongoose.
- Querying the database is done using SQL or a database-specific query language (e.g., MongoDB query syntax).
- ORM libraries provide a higher-level interface for working with databases and can simplify the code for common tasks like creating, reading, updating, and deleting records.

### Visual Explanation

No major visual content. The slide explains database integration with Express.js.

### Explanation

Express.js itself is not a database. It connects to databases using drivers or libraries.

| Database Type | Examples | Common Library |
|---|---|---|
| SQL | MySQL, PostgreSQL | Sequelize |
| NoSQL | MongoDB | Mongoose |

CRUD operations are usually handled through database queries or ORM/model methods.

### Visual/Text Diagram

```text
Express Route Handler
      ↓
Model / ORM / Database Driver
      ↓
SQL or NoSQL Database
      ↓
Result returned to Express
      ↓
JSON response sent to client
```

### Exam Tip

Mention both database types: **SQL and NoSQL**. Mention drivers/ORMs such as **Sequelize and Mongoose**.

### Common Mistake

Saying Express.js stores data by itself. Express.js needs a database or in-memory storage.

---

## Page 31 — Express JS REST APIs

### Original Slide Content

- Express JS is well-suited for building RESTful APIs because of its routing and middleware capabilities.
- To create a RESTful API, you define routes that correspond to the different HTTP methods (GET, POST, PUT, DELETE) and the resources you want to expose.
- You can use middleware functions to handle tasks like input validation, authentication, and rate limiting.
- RESTful APIs should follow certain principles, such as using HTTP status codes to indicate success or failure, using meaningful URIs to identify resources, and providing a consistent interface for interacting with the API.

### Visual Explanation

No major visual content. The slide connects Express features with REST API principles.

### Explanation

Express.js works well for REST APIs because it has:

- Routing for method + endpoint matching.
- Middleware for validation/authentication/rate limiting.
- Response methods like `res.json()`.
- Support for meaningful resource-based URIs.

### Visual/Text Diagram

```text
REST API Design in Express
├── GET /students       → get all students
├── GET /students/:id   → get one student
├── POST /students      → create student
├── PUT /students/:id   → update student
└── DELETE /students/:id→ delete student
```

### Exam Tip

RESTful Express API principles: **HTTP methods, meaningful URIs, status codes, consistent interface, middleware for validation/authentication**.

### Common Mistake

Creating routes like `/addStudent`, `/deleteStudent`. RESTful style prefers `/students` with POST/DELETE methods.

---

## Page 32 — Tutorial: Simple Express JS Backend

### Original Slide Content

Tutorial – Let’s build a simple Express JS backend

Case study: Student Management System

Create a backend API that allows you to:

- Add a new student
- Get all students
- Get a student by ID
- Update student info
- Delete a student

### Visual Explanation

No major visual content. The slide introduces a practical backend API case study.

### Explanation

The Student Management System maps directly to REST CRUD operations.

| Feature | HTTP Method | Endpoint Example |
|---|---|---|
| Add a new student | POST | `/students` |
| Get all students | GET | `/students` |
| Get a student by ID | GET | `/students/:id` |
| Update student info | PUT/PATCH | `/students/:id` |
| Delete a student | DELETE | `/students/:id` |

### Visual/Text Diagram

```text
Student Management REST API
├── POST   /students      → Add student
├── GET    /students      → Get all students
├── GET    /students/:id  → Get student by ID
├── PUT    /students/:id  → Update student info
└── DELETE /students/:id  → Delete student
```

### Exam Tip

This is the most practical coding-style part of the lecture. Be ready to write endpoint mappings.

### Common Mistake

Not using `:id` for operations on a single student.

---

## Page 33 — Thank You

### Original Slide Content

- Thank You

### Visual Explanation

The slide contains a closing message with the SLIIT/Faculty of Computing template.

### Explanation

End of Lecture 11.

### Exam Tip

No exam content on this slide.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

Lecture 11 explains how modern web and mobile applications are structured and implemented using 3-Tier Architecture, MVC, REST APIs, and Express.js.

The lecture starts by explaining that growing applications need separation of responsibilities to improve maintainability, testing, scalability, and security. The 3-tier architecture separates a system into Presentation Tier, Application Tier, and Data Tier. The Presentation Tier is the frontend/client-side layer, the Application Tier is the backend/server-side layer, and the Data Tier is the database layer.

MVC is introduced as a design pattern used inside the application tier. Model handles business logic, validation, database operations, and business rules. Controller handles HTTP requests, validates request data, calls model methods, and controls the request/response flow. View formats data for presentation, structures API responses, hides sensitive data, and creates a consistent response format.

The lecture then explains APIs. An API is a software interface that allows applications to communicate with each other. APIs act as bridges, hide internal complexity, define service contracts, and support standardized communication. REST API is highlighted as the main API type used for web and mobile applications.

REST treats everything as a resource. Each resource is identified by a URI, such as `/api/users/123`. HTTP methods perform operations on resources: GET retrieves, POST creates, PUT updates, PATCH partially updates, and DELETE removes data. REST communication uses HTTP request and response messages containing methods, URIs, headers, bodies, status codes, and response bodies.

The lecture also covers HTTP status codes. 2xx means success, 3xx means redirection, 4xx means client error, and 5xx means server error. Common codes include 200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, and 500 Internal Server Error.

Finally, Express.js is introduced as a minimal and flexible web application framework for Node.js. It operates in the application tier and provides HTTP server functionality, routing, middleware, database connectivity, and response handling. Express.js can implement MVC using routers/controllers, models/classes, and JSON responses. It is especially useful for building RESTful APIs because it supports HTTP methods, routes, middleware, and consistent response handling.

---

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| 3-Tier Architecture | Architecture that separates application into Presentation, Application, and Data tiers | React frontend + Express backend + MongoDB database |
| Presentation Layer | Frontend/client-side layer that users interact with | React, Angular, Vue.js |
| Application Layer | Backend/server-side layer that handles business logic and requests | Express.js API |
| Data Layer | Database layer that stores and retrieves data | MySQL, PostgreSQL, MongoDB |
| MVC | Design pattern that separates Model, View, and Controller responsibilities | Student model + student controller + JSON response |
| Model | Handles business logic, validation, and database operations | Student class/model |
| Controller | Handles HTTP request/response flow and calls model methods | `studentController.getAll()` |
| View | Formats output/response | JSON returned with `res.json()` |
| API | Software interface that allows applications to communicate | Payment gateway API |
| REST | Architectural style for building web services using HTTP | RESTful Student API |
| Resource | Entity exposed by REST API | user, product, student |
| URI | Unique identifier for a resource | `/api/students/123` |
| GET | HTTP method used to retrieve data | `GET /students` |
| POST | HTTP method used to create new resource | `POST /students` |
| PUT | HTTP method used to update/replace existing resource | `PUT /students/123` |
| PATCH | HTTP method used for partial update | `PATCH /students/123` |
| DELETE | HTTP method used to remove resource | `DELETE /students/123` |
| HTTP Status Code | 3-digit response status from server | 200, 201, 404, 500 |
| Express.js | Minimal Node.js framework for web servers and APIs | Express REST backend |
| Routing | Mechanism that maps method + path to handler function | `app.get('/about', handler)` |
| Middleware | Function that runs between request and response | Authentication middleware |
| ORM | Library that provides high-level database interaction | Sequelize, Mongoose |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| Lecture overview | Connects 3-Tier, MVC, REST, Express.js | 03 |
| 3-Tier Architecture | Presentation, Application, Data | 04 |
| Benefits of 3-Tier | Independent infrastructure, parallel development, scalability, security | 05 |
| Presentation Layer | Frontend/client-side UI layer | 06 |
| Application Layer | Backend/server-side business logic layer | 07 |
| MVC in 3-Tier | MVC is inside application tier | 08 |
| MVC Roles | Model, Controller, View responsibilities | 09–10 |
| Frontend-backend communication | REST API request-response scenario | 11 |
| API definition | Interface/bridge/contract for communication | 12 |
| API benefits | Standardization, abstraction, reusability | 13 |
| REST API | HTTP methods, stateless, resources | 14–16 |
| HTTP Request/Response | Method, URI, headers, body, status code | 17 |
| REST CRUD | POST/GET/PUT/PATCH/DELETE examples | 18–22 |
| HTTP Codes | 1xx–5xx classes and common codes | 23–24 |
| Express.js | Node.js framework for APIs | 25 |
| Express in architecture | Tier 2, supports MVC and REST | 26 |
| Routing | Method + path + handler | 27–28 |
| Middleware | Runs between request and response | 29 |
| Database | SQL/NoSQL, drivers/ORMs | 30 |
| Express REST API | Routes, middleware, status codes, URIs | 31 |
| Student API Tutorial | CRUD backend API design | 32 |

---

# Important Code Snippets

## Page 18 — Create Student Request and Response

```http
POST /api/students HTTP/1.1
```

```json
{
  "name": "Sanduni",
  "age": 23,
  "course": "Software Engineering"
}
```

```http
HTTP/1.1 201 Created
```

```json
{
  "message": "Student added successfully",
  "student": {
    "id": 101,
    "name": "Sanduni",
    "age": 23,
    "course": "Software Engineering"
  }
}
```

**Explanation:** POST creates a new student and returns `201 Created` with created student details.

## Page 19 — Get All Students

```http
GET https://api.school.com/students
```

```json
[
  { "id": 101, "name": "Sanduni", "age": 23 },
  { "id": 123, "name": "Perera", "age": 26 }
]
```

**Explanation:** GET retrieves all student records.

## Page 20 — Update Student

```http
PUT https://api.school.com/students/123
```

```json
{ "name": "Kasun Perera", "age": 26 }
```

```json
[
  "message": "Student updated successfully",
  "student": { "id": 123, "name": "Kasun Perera", "age": 26 }
]
```

**Explanation:** PUT updates/replaces student ID 123.

## Page 21 — Partial Update Student

```http
PATCH https://api.school.com/students/123
```

```json
{ "age": 27 }
```

```json
[
  "message": "Student age updated successfully",
  "student": { "id": 123, "name": "Kasun Perera", "age": 27 }
]
```

**Explanation:** PATCH updates only the age field.

## Page 22 — Delete Student

```http
DELETE https://api.school.com/students/123
```

```json
{ "message": "Student age updated successfully" }
```

**Explanation:** The slide response message appears inconsistent. DELETE should remove the student resource. A more logical response would be `Student deleted successfully`.

## Page 28 — Express Basic Routing Syntax

```javascript
app.METHOD(PATH, HANDLER)
```

**Explanation:** Generic Express route format.

```javascript
app.get('/about', (req, res) => {
  res.send('This is the about page’);
});
```

**Explanation:** Handles GET request to `/about` and sends a text response.

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 04 | 3-Tier Architecture Diagram | Shows Presentation Tier, Application Tier, and Data Tier |
| 08 | MVC inside 3-Tier | Shows MVC components inside Application Tier |
| 09 | MVC Relationship Diagram | Shows Model, View, Controller interaction |
| 11 | Frontend-backend API Communication | Shows clients using frontend and API to reach backend |
| 15 | REST API Model | Shows client communicating with server through REST API |
| 17 | HTTP Request/Response Structure | Shows request parts and response parts |
| 18 | POST Create Student Diagram | Shows POST request body and 201 Created response |
| 27 | Routing Analogy | Explains router as receptionist directing request to handler |

---

# Likely Exam Questions and Short Answers

## Question 1
What is 3-tier architecture?

**Expected Answer:**
3-tier architecture is a system design that separates an application into Presentation Tier, Application Tier, and Data Tier. The presentation tier handles user interaction, the application tier handles business logic and requests, and the data tier stores and retrieves data.

## Question 2
State four advantages of 3-tier architecture.

**Expected Answer:**
The advantages are independent infrastructure, parallel development, scalability, and enhanced security. Each tier can be developed, deployed, scaled, and protected separately.

## Question 3
Differentiate Presentation Layer and Application Layer.

**Expected Answer:**
The Presentation Layer is the frontend/client-side layer visible to the user and handles UI interaction. The Application Layer is the backend/server-side layer that processes requests, applies business logic, validates data, communicates with the database, and returns responses.

## Question 4
What is MVC architecture?

**Expected Answer:**
MVC is a software design pattern that organizes an application into Model, View, and Controller. Model handles data and business logic, View formats output, and Controller handles requests and coordinates between Model and View.

## Question 5
Explain how frontend and backend communicate in a REST API scenario.

**Expected Answer:**
The user performs an action on the frontend, such as submitting a form. The frontend sends an HTTP request, such as POST, to the backend API. The backend validates data, applies business logic, updates the database if needed, and sends a success or failure response. The frontend then updates the UI based on the response.

## Question 6
Define API.

**Expected Answer:**
An API is a software interface that allows two or more applications to communicate with each other. It acts as a bridge and defines a contract for how applications request and exchange data.

## Question 7
What are the benefits of APIs?

**Expected Answer:**
APIs provide standardized communication, encapsulation and abstraction, and reusability. They allow developers to use services without knowing internal implementation details and reduce repeated code.

## Question 8
What is REST?

**Expected Answer:**
REST, or Representational State Transfer, is an architectural style for building web services. It defines constraints for client-server communication over the web using HTTP.

## Question 9
Map HTTP methods to CRUD operations.

**Expected Answer:**
GET retrieves data, POST creates a new resource, PUT updates or replaces an existing resource, PATCH partially updates a resource, and DELETE removes a resource.

## Question 10
What is the structure of an HTTP request and response?

**Expected Answer:**
An HTTP request contains a method/verb, URI, HTTP version, request headers, and optionally a request body. An HTTP response contains HTTP version, status code, response headers, and response body.

## Question 11
What is the difference between PUT and PATCH?

**Expected Answer:**
PUT is generally used to update or replace an entire resource. PATCH is used to update only selected fields of a resource.

## Question 12
What are HTTP status codes?

**Expected Answer:**
HTTP status codes are 3-digit numbers that indicate the result of a client request. 2xx means success, 3xx redirection, 4xx client error, and 5xx server error.

## Question 13
What is Express.js?

**Expected Answer:**
Express.js is a minimal and flexible web application framework for Node.js. It provides tools to build web servers and APIs.

## Question 14
Where does Express.js fit in 3-tier architecture?

**Expected Answer:**
Express.js operates in Tier 2, the Application Tier. It receives requests from the frontend, processes them with routing and middleware, connects to the database, and sends responses back.

## Question 15
What is routing in Express.js?

**Expected Answer:**
Routing is the mechanism that determines how an Express application responds to client requests for specific URLs and HTTP methods.

## Question 16
Write the basic Express route syntax.

**Expected Answer:**

```javascript
app.METHOD(PATH, HANDLER)
```

Example:

```javascript
app.get('/about', (req, res) => {
  res.send('This is the about page’);
});
```

## Question 17
What is middleware in Express.js?

**Expected Answer:**
Middleware is a function that runs between the client request and the server response. It can modify the request, modify the response, pass control to the next function, or terminate the request cycle.

## Question 18
Design REST endpoints for a Student Management System.

**Expected Answer:**

| Operation | Method | Endpoint |
|---|---|---|
| Add student | POST | `/students` |
| Get all students | GET | `/students` |
| Get student by ID | GET | `/students/:id` |
| Update student | PUT/PATCH | `/students/:id` |
| Delete student | DELETE | `/students/:id` |

---

# Common Mistakes to Avoid

- Writing “REST is a framework” — incorrect. REST is an architectural style.
- Writing “Express.js is frontend” — incorrect. Express.js is backend/server-side.
- Confusing 3-tier architecture with MVC. 3-tier is system-level; MVC is code organization pattern.
- Saying MVC View must always be an HTML page. In REST APIs, View can mean JSON response formatting.
- Using GET to create/update/delete data.
- Forgetting that REST resources should be nouns such as `/students`, not verbs such as `/getStudents`.
- Confusing PUT and PATCH. PUT is usually full update; PATCH is partial update.
- Returning 201 Created for every successful request. Use 201 mainly for creation.
- Thinking frontend directly connects to the database in 3-tier architecture.
- Thinking Express.js stores data by itself. It needs database drivers, ORMs, or storage logic.
- Forgetting that routing matches both HTTP method and URL path.
- Ignoring middleware in Express REST APIs. Middleware is important for validation, authentication, logging, and rate limiting.

---

# Final One-Page Revision Notes

## Core Architecture

```text
Presentation Tier → Application Tier → Data Tier
Frontend/UI       → Backend/API       → Database
```

## Main Concepts

| Concept | Exam Keyword |
|---|---|
| 3-Tier | Presentation, Application, Data |
| MVC | Model, View, Controller |
| REST | HTTP, resources, stateless, JSON/XML |
| Express.js | Node.js backend framework |

## MVC Quick Memory

```text
Model      = Data + Logic
Controller = Request handler + Coordinator
View       = Response format / Output
```

## REST CRUD Mapping

| CRUD | HTTP Method | Endpoint Example |
|---|---|---|
| Create | POST | `/students` |
| Read all | GET | `/students` |
| Read one | GET | `/students/:id` |
| Update full | PUT | `/students/:id` |
| Update partial | PATCH | `/students/:id` |
| Delete | DELETE | `/students/:id` |

## HTTP Status Code Memory

```text
1xx = Informational
2xx = Success
3xx = Redirection
4xx = Client Error
5xx = Server Error
```

Important codes:

```text
200 OK
201 Created
202 Accepted
204 No Content
301 Moved Permanently
400 Bad Request
404 Not Found
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

## Express Route Syntax

```javascript
app.METHOD(PATH, HANDLER)
```

Example:

```javascript
app.get('/about', (req, res) => {
  res.send('This is the about page’);
});
```

## Express in Architecture

```text
Frontend Request
      ↓
Express Router
      ↓
Middleware
      ↓
Controller
      ↓
Model / Database
      ↓
res.json() Response
```

## Must-Remember Exam Phrases

- “Separation of responsibilities improves maintenance, testing, scalability, and security.”
- “API acts as a bridge and contract between software components.”
- “REST treats everything as a resource identified by a URI.”
- “Express.js operates in Tier 2, the Application Tier.”
- “Middleware runs between request and response.”
- “Routing maps HTTP methods and paths to handler functions.”

