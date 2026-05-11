# SE2020 - Web Technologies and Mobile - Lecture 10
## NodeJS

**Institution:** Sri Lanka Institute of Information Technology (SLIIT)  
**Faculty:** Faculty of Computing  
**Module Code:** SE2020  
**Module Name:** Web Technologies and Mobile  
**Lecture Number:** 10  
**Lecture Title:** NodeJS  
**Total PDF Pages/Slides:** 22  

---

# Table of Contents

- [Page 01 - Title Page](#page-01---title-page)
- [Page 02 - Agenda](#page-02---agenda)
- [Page 03 - Asynchronous JavaScript](#page-03---asynchronous-javascript)
- [Page 04 - NIO Model - Example](#page-04---nio-model---example)
- [Page 05 - Asynchronous Operation](#page-05---asynchronous-operation)
- [Page 06 - Callback](#page-06---callback)
- [Page 07 - Node JS](#page-07---node-js)
- [Page 08 - Event-Driven Model](#page-08---event-driven-model)
- [Page 09 - Event Loop](#page-09---event-loop)
- [Page 10 - Use Cases](#page-10---use-cases)
- [Page 11 - Use Cases - Activity](#page-11---use-cases---activity)
- [Page 12 - Use Cases](#page-12---use-cases)
- [Page 13 - Advantages](#page-13---advantages)
- [Page 14 - Disadvantages](#page-14---disadvantages)
- [Page 15 - Node Package Manager](#page-15---node-package-manager)
- [Page 16 - Node Package Manager... (cnt)](#page-16---node-package-manager-cnt)
- [Page 17 - Core Modules](#page-17---core-modules)
- [Page 18 - Core Modules](#page-18---core-modules)
- [Page 19 - File System (fs Module)](#page-19---file-system-fs-module)
- [Page 20 - Example](#page-20---example)
- [Page 21 - What's the Output?](#page-21---whats-the-output)
- [Page 22 - Thank You](#page-22---thank-you)
- [Key Definitions](#key-definitions)
- [Important Code Snippets](#important-code-snippets)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Lecture Notes

## Page 01 - Title Page

### Original Slide Content

- **SE2020 - Web Technologies and Mobile**
- **Lecture 10**
- **NodeJS**
- SLIIT logo
- Faculty of Computing branding

### Visual Explanation

The slide is a title page with SLIIT and Faculty of Computing branding. It introduces Lecture 10 as a NodeJS lecture under SE2020 - Web Technologies and Mobile.

### Explanation

This lecture focuses on JavaScript beyond the browser. The main topic is NodeJS, which allows JavaScript to run on the server side and handle backend/network operations.

### Exam Tip

Use the correct spelling and concept: **NodeJS is a runtime environment**, not a programming language.

### Common Mistake

Saying NodeJS is a new language. It is not. It runs JavaScript outside the browser.

---

## Page 02 - Agenda

### Original Slide Content

**Agenda**

- Asynchronous JavaScript
- NodeJS - Introduction
- Event loop
- Use Cases
- Advantages and Disadvantages
- Package Manager
- Core Modules & File System

### Visual Explanation

The slide lists the complete lecture flow. It starts with asynchronous JavaScript because NodeJS depends heavily on asynchronous, event-driven execution.

### Explanation

The lecture is built in this order:

1. Understand asynchronous JavaScript.
2. Learn what NodeJS is.
3. Learn the event loop.
4. Learn where NodeJS is useful and where it is weak.
5. Learn npm and dependency management.
6. Learn modules and the file system module.

### Visual/Text Diagram

```text
Asynchronous JavaScript
        ↓
NodeJS Introduction
        ↓
Event-Driven Model + Event Loop
        ↓
Use Cases + Pros/Cons
        ↓
npm + package.json
        ↓
Modules + fs Module
```

### Exam Tip

The strongest exam areas are NodeJS definition, event loop, non-blocking I/O, npm, modules, and `fs` module.

### Common Mistake

Studying NodeJS before understanding asynchronous JavaScript. That is weak preparation because NodeJS is built around async/event-driven behavior.

---

## Page 03 - Asynchronous JavaScript

### Original Slide Content

- JS programs run using a single thread. Though there are ways to create new threads, it is considered as **Single threaded language**.
- It is considered asynchronous because it follows a **Non-Blocking I/O (NIO) model**.
- JavaScript is **dynamically typed**.
- JavaScript has an eventing system which manages it's asynchronous operations.
- **What is Non-Blocking I/O (NIO) model?**
  - Non-Blocking I/O means that when JavaScript initiates an operation like file reading, API requests, and timers, it does not wait for the operation to complete. Instead, it moves on to the next task while the operation executes in the background.

### Visual Explanation

No diagram is shown, but the slide uses bullet points to connect single-threaded JavaScript with asynchronous non-blocking behavior.

### Explanation

JavaScript normally runs one main task at a time because it is single-threaded. However, it does not block the whole program while waiting for slow operations such as:

- Reading a file
- Waiting for a timer
- Sending or receiving API data
- Network requests

Instead, JavaScript starts the operation, moves to the next task, and later handles the result through the eventing system.

### Visual/Text Diagram

```text
JavaScript starts task
        ↓
Task needs waiting time?  ── No ──> Run immediately
        ↓ Yes
Send task to background system
        ↓
Continue next code without waiting
        ↓
When background task completes, callback/event handler runs
```

### Definition

**Non-Blocking I/O:** A model where the program does not wait for input/output operations to finish before continuing other work.

### Simple Meaning

JavaScript can say: "Start this slow task, but I will continue doing other work until it finishes."

### Example

A `setTimeout()` timer waits in the background while the rest of the code continues.

### Exam Tip

Keywords to include: **single-threaded**, **non-blocking I/O**, **eventing system**, **background execution**, **callback/event handler**.

### Common Mistake

Thinking asynchronous means JavaScript uses many main threads automatically. In normal JavaScript execution, the main execution is still single-threaded.

---

## Page 04 - NIO Model - Example

### Original Slide Content

**NIO Model - example**

Code shown on slide:

```javascript
console.log("Start");

// Non-blocking I/O operation
setTimeout(() => {
    console.log("Data loaded");
}, 2000);

console.log("End");
```

**Output:**

```text
Start
End
undefined
Data loaded
```

### Visual Explanation

The slide shows JavaScript code on the left and console output on the right. The important visual point is that `End` appears before `Data loaded`, even though the timeout code is written before `console.log("End")`.

### Explanation

Execution order:

1. `console.log("Start")` runs immediately.
2. `setTimeout()` starts a timer for 2000 milliseconds.
3. JavaScript does not wait for the timer.
4. `console.log("End")` runs immediately.
5. After 2 seconds, the callback inside `setTimeout()` runs and prints `Data loaded`.

`undefined` appears in the output because the environment may show the return value of the executed statement. `setTimeout()` itself does not return the final callback result.

### Visual/Text Diagram

```text
console.log("Start")          → prints Start
setTimeout(..., 2000)         → sends callback to timer system
console.log("End")            → prints End
2 seconds later               → callback prints Data loaded
```

### Exam Tip

If asked for output order, never follow only the written order. Check whether any function is asynchronous.

### Common Mistake

Writing output as `Start`, `Data loaded`, `End`. That is wrong because `setTimeout()` is non-blocking.

---

## Page 05 - Asynchronous Operation

### Original Slide Content

**Asynchronous Operation**

Code shown on slide:

```javascript
function fetchData() {
    setTimeout(() => {
        console.log("Data fetched!"); // Runs after 2 seconds
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

console.log("Starting fetch operation...");

fetchData();
processData();
```

**Output:**

```text
Starting fetch operation...
Processing data...

Data fetched!
```

Slide question:

```text
Is everything look good??
```

### Visual Explanation

The slide compares code execution with output. The visual asks whether the result is logically correct. `processData()` runs before `Data fetched!`, which means processing starts before data is actually ready.

### Explanation

This code has a logic problem. `fetchData()` starts a delayed asynchronous task. Then `processData()` runs immediately without waiting for the data.

That means the program says:

1. Start fetching data.
2. Process data immediately.
3. Data arrives later.

This is dangerous because real processing may need the fetched data first.

### Visual/Text Diagram

```text
Start fetch operation
        ↓
fetchData() starts timer
        ↓
processData() runs immediately
        ↓
2 seconds later data is fetched

Problem: processing happens before data is ready.
```

### Exam Tip

This is a classic asynchronous problem. The fix is to use a callback, promise, or async/await so processing happens after data fetching completes.

### Common Mistake

Assuming `fetchData()` finishes before `processData()` only because it is called first.

---

## Page 06 - Callback

### Original Slide Content

**Callback**

Code shown on slide:

```javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!"); // Runs after 2 seconds
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

console.log("Starting fetch operation...");

// Call fetchData first
fetchData(processData);

// Running other synchronous code while waiting
for (let i = 0; i < 5; i++) {
    console.log(`Executing synchronous task ${i + 1}`);
}
```

Definition shown on slide:

> A callback is a function passed as an argument to another function and is executed later, usually after an asynchronous operation completes.

**Output:**

```text
Starting fetch operation...
(Immediately executes the loop)
Executing synchronous task 1
Executing synchronous task 2
Executing synchronous task 3
Executing synchronous task 4
Executing synchronous task 5
(After 2 seconds delay)
Data fetched!
Processing data...
```

### Visual Explanation

The slide shows the corrected version of Page 05. `processData` is passed into `fetchData` as a callback, so it runs only after `Data fetched!` is printed.

### Explanation

A callback solves the issue from Page 05. Instead of calling `processData()` immediately, the program passes `processData` into `fetchData()`.

When the timer finishes:

1. `Data fetched!` is printed.
2. `callback()` runs.
3. Since `callback` is `processData`, it prints `Processing data...`.

The `for` loop still runs while waiting because JavaScript does not block during the timeout.

### Visual/Text Diagram

```text
fetchData(processData)
        ↓
Timer starts for 2 seconds
        ↓
Synchronous loop runs immediately
        ↓
Timer completes
        ↓
Data fetched!
        ↓
callback() runs
        ↓
Processing data...
```

### Definition

**Callback:** A function passed to another function as an argument and executed later.

### Simple Meaning

"After your task is finished, call this function."

### Exam Tip

For callback questions, write: **function passed as argument + executed later + usually after async task completes**.

### Common Mistake

Calling the function immediately like `fetchData(processData())`. That passes the result of `processData`, not the function itself.

---

## Page 07 - Node JS

### Original Slide Content

- Node Js is a runtime environment that allows JavaScript to be executed on the server side.
- Created by Ryan Dahl to build fast and interactive web applications that need live updates like chat apps using WebSockets.
- NodeJS is an open source, cross platform runtime environment for server-side and networking applications.
- Uses event-driven, non-blocking I/O model which makes NodeJS lightweight and efficient.
- Ideal for data-intensive real-time applications that run across distributed devices.

### Visual Explanation

No technical diagram is shown. The slide provides the core definition and reason for NodeJS.

### Explanation

NodeJS lets developers use JavaScript for backend development. Before NodeJS, JavaScript was mainly used inside browsers. NodeJS makes it possible to build:

- Web servers
- APIs
- Real-time chat apps
- Streaming systems
- Server-side tools

NodeJS is strong when applications need to handle many users or many I/O operations at the same time.

### Visual/Text Diagram

```text
Browser JavaScript
    → runs in browser

NodeJS JavaScript
    → runs on server/computer
    → can access files, network, APIs, packages
```

### Definition

**NodeJS:** An open-source, cross-platform runtime environment that executes JavaScript on the server side.

### Exam Tip

Important keywords: **runtime environment**, **server side**, **open source**, **cross platform**, **event-driven**, **non-blocking I/O**, **real-time applications**.

### Common Mistake

Writing that NodeJS is a framework. It is a runtime environment. Express.js is a framework commonly used with NodeJS.

---

## Page 08 - Event-Driven Model

### Original Slide Content

- Flow of execution is determined by events, instead of following a sequential execution.
- **How works?**
  - The system listens for events and, when an event occurs, executes a callback function/event handler without blocking execution, making event-driven systems more responsive and efficient.
- **Key components of event driven model:**
  - Event emitter
  - Event listener
  - Call back function

### Visual Explanation

The slide is a concept slide with bullet points. It explains how NodeJS reacts to events instead of forcing every operation to complete sequentially.

### Explanation

In an event-driven system, the program waits for events such as:

- User request received
- File finished reading
- Timer completed
- Database response received
- Message received through WebSocket

When an event happens, an event handler or callback function runs.

### Visual/Text Diagram

```text
Event Emitter
    ↓ emits event
Event Listener
    ↓ detects event
Callback Function / Event Handler
    ↓ executes response logic
Program continues without blocking
```

### Definitions

| Term | Meaning | Example |
|---|---|---|
| Event emitter | Object/component that produces an event | A server emitting `request` event |
| Event listener | Code that waits for an event | Listener waiting for file-read completion |
| Callback function | Function executed when event occurs | Function called after timer completes |

### Exam Tip

If asked to explain event-driven model, include **event emitter, event listener, callback/event handler**.

### Common Mistake

Thinking event-driven means random execution. It is not random; execution is triggered by events.

---

## Page 09 - Event Loop

### Original Slide Content

**Event Loop**

The event loop is a core mechanism in Node.js that allows it to handle multiple operations without blocking execution, making it fast and efficient for real-time applications.

Visual labels in the event loop diagram include:

- Node.js non-blocking event loop
- Send HTTP Request
- Send HTTP Request
- Read File
- File I/O command to event loop
- Net I/O command to event loop
- DB I/O command to event loop
- These are open for us to do more work
- File I/O callback
- NET I/O callback
- DB I/O callback
- TIME

### Visual Explanation

The diagram shows NodeJS handling different I/O tasks over time without waiting for each task to finish. Tasks like file reading, HTTP requests, network I/O, and database I/O are sent into the event loop/background system. While they are waiting, NodeJS continues to handle more work. When each task completes, its callback is placed back for execution.

### Explanation

The event loop is what makes NodeJS powerful for many I/O-heavy tasks. It allows one main thread to coordinate many operations.

Process:

1. NodeJS receives a task such as file read or HTTP request.
2. If the task takes time, it is delegated to the background/system.
3. NodeJS continues running other code.
4. When the task is complete, its callback is queued.
5. The event loop runs callbacks when the call stack is free.

### Visual/Text Diagram

```text
NodeJS receives task
        ↓
Is it slow I/O?
        ↓ Yes
Send to background/system
        ↓
Continue executing other work
        ↓
I/O task completes
        ↓
Callback enters queue
        ↓
Event loop sends callback to call stack
        ↓
Callback executes
```

### Definition

**Event Loop:** The mechanism that allows NodeJS to handle asynchronous callbacks and multiple operations without blocking the main execution thread.

### Exam Tip

Use these keywords: **call stack**, **callback queue**, **non-blocking**, **I/O**, **asynchronous**, **real-time applications**.

### Common Mistake

Saying the event loop makes CPU-heavy tasks faster. It mainly helps with I/O concurrency, not heavy computation.

---

## Page 10 - Use Cases

### Original Slide Content

- Not the best platform for CPU intensive heavy computational applications.
- Ideal for building fast and scalable network applications.
- NodeJS is capable of handling a huge number of simultaneous connections with high throughput.
- For each connection NodeJS does not spawn new Thread causing max out of memory instead handle all in single thread using non-blocking I/O model.
- NodeJS has achieved over 1 Million concurrent connections.
- Bubbling errors up to NodeJS core event loop will cause crashing the entire program.

### Visual Explanation

No diagram is shown. The slide explains when NodeJS is useful and when it is risky.

### Explanation

NodeJS is good for applications with many simultaneous users or many I/O operations. It avoids creating a new thread for every connection. This saves memory and supports high concurrency.

However, it is weak for CPU-heavy work because heavy computation can block the main thread and delay other users.

Examples of CPU-intensive tasks:

- Large image/video processing
- Machine learning model training
- Cryptographic brute force
- Huge mathematical calculations

### Comparison Table

| Good Fit for NodeJS | Weak Fit for NodeJS |
|---|---|
| APIs | CPU-heavy computation |
| Chat apps | Large mathematical processing |
| Streaming apps | Heavy video encoding |
| Real-time dashboards | Long blocking loops |
| I/O-heavy systems | Blocking synchronous operations |

### Exam Tip

For use-case answers, write both sides: **best for I/O/network/real-time applications**, **not best for CPU-intensive tasks**.

### Common Mistake

Writing "NodeJS is always faster." That is trash reasoning. NodeJS is efficient for non-blocking I/O, not every type of workload.

---

## Page 11 - Use Cases - Activity

### Original Slide Content

**Use Cases - Activity**

Discuss and write down a real-world success story of companies or projects that have effectively utilized Node.js?

**PayPal: 35% Faster Response Time & 2x Requests per Second**

**Before:**

- PayPal's backend was built using Java.
- The development was slow and required separate teams for frontend JavaScript and backend Java.
- Java processes were heavy and slow for handling high-traffic payments.

**After Switching to Node.js:**

- Unified frontend and backend teams, reducing development time.
- Response time improved by 35%.
- Node.js handled double the number of requests per second compared to Java.
- 33% fewer lines of code, making the system easier to maintain.

**Lesson:** Node.js improved performance and developer efficiency while handling large-scale transactions.

### Visual Explanation

The slide presents PayPal as a real-world NodeJS success story. It visually separates the case study into before, after, and lesson.

### Explanation

The key lesson is not simply "NodeJS is faster." The stronger answer is:

- NodeJS helped PayPal use JavaScript on both frontend and backend.
- This improved team efficiency.
- It reduced code volume.
- It improved response time and request handling.

### Exam Tip

If asked for a real-world example, use PayPal and include at least two metrics: **35% faster response time** and **2x requests per second**.

### Common Mistake

Only naming PayPal without explaining what improved. A good exam answer needs the reason and impact.

---

## Page 12 - Use Cases

### Original Slide Content

- I/O bound applications.
- Data streaming applications.
- Data intensive real-time applications.
- JSON APIs based applications.
- Single page applications

Visual company examples/logos shown:

- Uber
- Netflix
- PayPal
- eBay

### Visual Explanation

The slide uses company logos to show that NodeJS is used by large-scale platforms. The listed use cases focus on data flow, real-time communication, and APIs.

### Explanation

NodeJS is commonly used for:

- APIs that send and receive JSON
- Apps that need frequent data updates
- Streaming services
- Systems that handle many simultaneous client connections
- Backend services for single page applications

### Use Case Table

| Use Case | Why NodeJS Fits |
|---|---|
| I/O-bound applications | Non-blocking model handles waiting efficiently |
| Data streaming | Handles chunks of data without blocking whole program |
| Real-time apps | Event-driven model supports live updates |
| JSON APIs | JavaScript naturally works well with JSON |
| Single page applications | NodeJS often serves APIs for frontend frameworks |

### Exam Tip

Mention examples like **Uber, Netflix, PayPal, eBay** only if the question asks for real-world usage.

### Common Mistake

Confusing I/O-bound with CPU-bound. I/O-bound waits for external operations; CPU-bound consumes processor power.

---

## Page 13 - Advantages

### Original Slide Content

- Ability to use single programming language from one end of the application to the other end.
- NodeJS applications are easy to scale both horizontally and vertically.
- Delivers improved performance since V8 engine compile the JS code into machine code directly.
- Performance increased via caching modules into memory after the first use.
- Easily extensible and support for common tools like unit testing.
- Well build `npm` package manager and it's large number of reusable modules.

### Visual Explanation

No diagram is shown. The slide lists practical benefits of NodeJS.

### Explanation

Main advantages:

1. **Same language across stack:** JavaScript can be used on frontend and backend.
2. **Scalability:** Applications can scale horizontally by adding more machines/instances and vertically by increasing resources.
3. **V8 performance:** Google's V8 engine compiles JavaScript into machine code.
4. **Module caching:** Required modules are cached after first load.
5. **Extensibility:** Easy to add packages and tools.
6. **npm ecosystem:** Large package repository.

### Horizontal vs Vertical Scaling

| Scaling Type | Meaning | Example |
|---|---|---|
| Horizontal scaling | Add more servers/instances | Run API on 5 servers |
| Vertical scaling | Upgrade one server | Add more RAM/CPU |

### Exam Tip

For advantages questions, write 4-6 points. Do not just say "fast". Explain **why** it is fast or scalable.

### Common Mistake

Writing "V8 interprets JavaScript only." The slide says V8 compiles JavaScript into machine code directly.

---

## Page 14 - Disadvantages

### Original Slide Content

- Even though there are number of libraries available, the actual number of robust libraries is comparatively low.
- Not suitable for computationally intensive tasks.
- Asynchronous programming model is complex than synchronous model.

**Exercise:**

1. What are robust libraries?
2. What are the available robust libraries?
3. Why is the Number of Robust Libraries Low?

### Visual Explanation

The slide shows disadvantages and then asks students to think about library robustness.

### Explanation

Disadvantages:

- Some npm packages may be immature, poorly maintained, or unreliable.
- CPU-heavy tasks can block the event loop.
- Asynchronous code can become difficult to understand, especially with nested callbacks or poor error handling.

### Definition

**Robust library:** A library that is stable, secure, well-tested, maintained, documented, and reliable in production.

### Examples of Robust NodeJS Libraries

| Library | Purpose |
|---|---|
| Express | Web server/API framework |
| Mongoose | MongoDB object modeling |
| Jest | Testing |
| Nodemon | Development auto-restart tool |
| Chalk | Terminal text styling |

### Why Robust Libraries May Be Low

- npm has many packages, but not all are production-quality.
- Some packages are abandoned.
- Some packages have weak documentation.
- Some packages have security issues.
- Some packages duplicate the same functionality.

### Exam Tip

Do not say npm has few libraries. The slide says many libraries exist, but comparatively fewer are robust.

### Common Mistake

Thinking "many packages" equals "many reliable packages." Quantity is not quality.

---

## Page 15 - Node Package Manager

### Original Slide Content

- Reusable NodeJS components easily available through online repository.
- Build in dependency management, version and scripting mechanism.
- Global installations will be available throughout the system while local installations will only be available for that particular application.
- By default all the dependencies will get installed to `node_modules` directory.
- `package.json` contains all information related to the NodeJS application. The file be placed in the root directory of the application.
- `package.json` will contain name, version, author, repository, required node version, scripts and dependencies etc.

### Visual Explanation

No diagram is shown. The slide explains npm and `package.json`.

### Explanation

npm is the package manager used with NodeJS. It helps developers install, manage, and run project dependencies.

Important parts:

- **Online repository:** Where packages are downloaded from.
- **Dependency management:** Tracks required packages and versions.
- **Scripts:** Commands defined in `package.json`, such as `npm start` or `npm test`.
- **node_modules:** Folder where installed packages are stored.
- **package.json:** Main project metadata and dependency file.

### Visual/Text Diagram

```text
NodeJS Project Root
├── package.json       → project info, scripts, dependencies
├── package-lock.json  → exact installed dependency versions
├── node_modules/      → installed packages
└── index.js           → application code
```

### Global vs Local Installation

| Installation Type | Available Where? | Example Use |
|---|---|---|
| Global | Whole system | CLI tools |
| Local | Only current project | express, mongoose, chalk |

### Exam Tip

Know `package.json` and `node_modules`. These are easy short-answer marks.

### Common Mistake

Committing `node_modules` into a project repository. Usually `package.json` and `package-lock.json` are committed, not `node_modules`.

---

## Page 16 - Node Package Manager... (cnt)

### Original Slide Content

- To denote the compatible version numbers

| Operator | Example | Meaning |
|---|---|---|
| `<=` | `"express": "<=4.18.2"` | Installs version 4.18.2 or lower |
| `>=` | `"express": ">=4.18.2"` | Installs version 4.18.2 or higher |
| `~` | `"express": "~4.18.2"` | Allows only patch updates (4.18.x but NOT 4.19.0) |
| `^` | `"express": "^4.18.2"` | Allows minor & patch updates (4.x.x but NOT 5.0.0) |
| `*` | `"express": "*"` | Installs any available version (not recommended) |
| `1.2.x` | `"express": "1.2.x"` | Installs any patch version (1.2.0, 1.2.5, but NOT 1.3.0) |
| `latest` | `"express": "latest"` | Installs the latest available version from npm |

- There are two types of dependencies,
- Dependencies: needed in runtime (e.g., express, mongoose)
- devDependencies: only for development (e.g., jest, nodemon)

### Visual Explanation

The slide contains a table of npm version operators. The most important visual content is the difference between patch updates, minor updates, and any version.

### Explanation

npm uses semantic versioning patterns to decide which package versions are compatible.

Basic version format:

```text
MAJOR.MINOR.PATCH
Example: 4.18.2
```

Meaning:

- **MAJOR:** Breaking changes may exist.
- **MINOR:** New features, usually backward-compatible.
- **PATCH:** Bug fixes, usually safest.

### Dependencies vs devDependencies

| Type | Needed When? | Examples |
|---|---|---|
| dependencies | Runtime/production | express, mongoose |
| devDependencies | Development/testing only | jest, nodemon |

### Exam Tip

Know `^` and `~`. They are common practical questions:

- `~4.18.2` allows patch updates only.
- `^4.18.2` allows minor and patch updates but not major version 5.

### Common Mistake

Using `*` or `latest` blindly in production. That can break your app when a new incompatible package version is released.

---

## Page 17 - Core Modules

### Original Slide Content

- A module is a reusable block of code. Each file in Node.js is treated as a separate module.
- Three Types of Modules:
  - Core/Built-in Modules: Come with Node.js (`fs`, `path`, `http`, `os`)
  - Local Modules: Files you create yourself
  - Third-party Modules: Installed via npm (`npm install chalk`)
- Why Modules?
  - Reusability: Use the same code in multiple places
  - Avoid Conflicts: Each module has its own scope
  - Maintainability: Easier to find and fix bugs

### Visual Explanation

No diagram is shown. The slide defines NodeJS modules and module types.

### Explanation

A module is a separated part of code. In NodeJS, every file is treated as its own module. This prevents all code from being mixed into one global space.

### Module Types Table

| Module Type | Source | Example |
|---|---|---|
| Core/Built-in | Comes with NodeJS | `fs`, `path`, `http`, `os` |
| Local | Created by developer | `./myModule` |
| Third-party | Installed using npm | `chalk`, `express` |

### Visual/Text Diagram

```text
NodeJS Modules
├── Core Modules
│   ├── fs
│   ├── path
│   ├── http
│   └── os
├── Local Modules
│   └── files created by developer
└── Third-party Modules
    └── packages installed using npm
```

### Exam Tip

If asked "why modules", write: **reusability, avoid conflicts, maintainability**.

### Common Mistake

Thinking only npm packages are modules. Built-in and local files are also modules.

---

## Page 18 - Core Modules

### Original Slide Content

**How Modules works**

Code shown on slide:

```javascript
const fs = require('fs');          // Core module
const myModule = require('./myModule');  // Local module
const chalk = require('chalk');    // npm module
```

**Create Local Modules**

`greetings.js` shown on slide:

```javascript
function sayHello(name) {
    return `Hello, ${name}!`;
}

function sayGoodbye(name) {
    return `Goodbye, ${name}!`;
}

// Export functions
module.exports = {
    sayHello: sayHello,
    sayGoodbye: sayGoodbye
};
```

`index.js` shown on slide:

```javascript
const greetings = require('./greetings');

console.log(greetings.sayHello('Alice'));
console.log(greetings.sayGoodbye('Bob'));
```

### Visual Explanation

The slide contains three code screenshots:

1. How to import core, local, and npm modules using `require()`.
2. How to create a local module file named `greetings.js`.
3. How to use that local module from `index.js`.

### Explanation

`require()` is used in CommonJS NodeJS modules to import code.

- `require('fs')` loads a built-in NodeJS module.
- `require('./myModule')` loads a local file.
- `require('chalk')` loads an installed npm package.

`module.exports` decides what functions or values another file can use.

### Visual/Text Diagram

```text
greetings.js
    ├── sayHello(name)
    ├── sayGoodbye(name)
    └── module.exports exposes both functions

index.js
    ├── require('./greetings')
    ├── greetings.sayHello('Alice')
    └── greetings.sayGoodbye('Bob')
```

### Output/Result

Expected output:

```text
Hello, Alice!
Goodbye, Bob!
```

### Exam Tip

For local module questions, remember two sides:

1. Export from source file using `module.exports`.
2. Import into another file using `require('./filename')`.

### Common Mistake

Forgetting `./` when importing a local module. `require('greetings')` searches for a package; `require('./greetings')` searches for a local file.

---

## Page 19 - File System (fs Module)

### Original Slide Content

- The `fs` module is one of the most fundamental and widely-used modules in Node.js. It allows you to work with the file system.
  - Read files, Write files, Delete files, Create directories
- **Data Persistence:** When runs a Node.js program, all data stored in variables exists only in memory (RAM). When the program stops, all data is lost.
- **Configuration Management:** Every application needs settings that can be changed without modifying code.
- **Logging and debugging:** Track What Happens in Your Application.
- **Files uploads and processing:** Handle User-Generated Content.

### Visual Explanation

No code screenshot is shown on this slide, but it describes common file operations and practical reasons for using the file system.

### Explanation

The `fs` module lets NodeJS interact with files and folders.

Common tasks:

- Read a file
- Write data into a file
- Delete a file
- Create directories/folders
- Store logs
- Read configuration files
- Handle uploaded files

Data in variables disappears when the program stops. Files help save data beyond program runtime.

### Visual/Text Diagram

```text
NodeJS Program
    ↓ uses fs module
File System
├── read files
├── write files
├── delete files
├── create directories
├── store logs
└── process uploaded files
```

### Definition

**File System (`fs`) module:** A core NodeJS module used to interact with files and directories.

### Exam Tip

If asked why `fs` is useful, mention **data persistence, configuration management, logging/debugging, file upload processing**.

### Common Mistake

Thinking variables are permanent storage. Variables live in RAM and disappear when the program stops.

---

## Page 20 - Example

### Original Slide Content

**Example:**

1. Create Sample node project and inspect folder structure, `package.json` file and run sample hello world program.

Code shown on slide (`index.js`):

```javascript
//Import the chalk package
const chalk = require('chalk');

// Use it!
console.log(chalk.blue('Hello World!'));
console.log(chalk.red.bold('This is red and bold'));
console.log(chalk.green.underline('Success message'));
console.log(chalk.yellow.bgBlue('Warning!'));

// Combining styles
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
```

**Output:**

```text
Hello World!
This is red and bold
Success message
Warning!
Hello World!
```

Output visual styling shown:

- `Hello World!` in blue
- `This is red and bold` in red and bold
- `Success message` in green with underline
- `Warning!` in yellow text with blue background
- `Hello World!` with mixed styling: blue `Hello`, normal `World`, red `!`

### Visual Explanation

The slide shows a practical npm package example using `chalk`. The code imports `chalk` and prints styled terminal output.

### Explanation

`chalk` is a third-party npm package used to style terminal output. It does not change program logic; it changes how messages look in the terminal.

This example also reinforces:

- Third-party module import using `require('chalk')`
- npm dependency usage
- Console output styling

### Visual/Text Diagram

```text
npm install chalk
        ↓
const chalk = require('chalk')
        ↓
Use chalk methods
        ↓
Styled terminal output
```

### Exam Tip

If asked to explain the example, say it demonstrates using a third-party npm package in a NodeJS project.

### Common Mistake

Calling `chalk` a core module. It is a third-party npm module.

---

## Page 21 - What's the Output?

### Original Slide Content

**What's the output ???**

Code shown on slide:

```javascript
fs.readFile(__filename, () => {
    console.log("this is readFile 1");
    setImmediate(() => console.log("this is setImmediate 1"));
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 200000000; i++) {
    console.log(i);
}
```

### Visual Explanation

The slide shows a NodeJS event loop output question. It combines:

- `fs.readFile()` callback
- `setImmediate()`
- `process.nextTick()`
- Promise microtask
- `setTimeout(..., 0)`
- A very large synchronous `for` loop

### Explanation

This is an event loop ordering question. The synchronous `for` loop executes before asynchronous callbacks can run. Because the loop logs from `0` up to `199999999`, it blocks the event loop for a long time.

Expected broad order:

1. The synchronous `for` loop logs numbers from `0` to `199999999`.
2. Microtasks run after the current synchronous execution finishes:
   - `process.nextTick(...)`
   - `Promise.resolve().then(...)`
3. Timer/I/O callbacks run depending on event loop phase:
   - `setTimeout(..., 0)`
   - `fs.readFile(...)` callback when file reading completes
   - inside `readFile` callback, `setImmediate(...)` is scheduled
4. `setImmediate` inside the file-read callback runs after the I/O callback phase/check phase.

A reasonable expected output pattern is:

```text
0
1
2
...
199999999
this is process.nextTick 1
this is Promise.resolve 1
this is setTimeout 1
this is readFile 1
this is setImmediate 1
```

Important note: exact ordering between `setTimeout(..., 0)` and `fs.readFile()` can depend on timing/environment. The most important guaranteed concept from this slide is that the huge synchronous loop blocks asynchronous callbacks until it completes.

### Visual/Text Diagram

```text
Synchronous code starts
        ↓
for loop logs 0 to 199999999
        ↓
Call stack becomes free
        ↓
process.nextTick callback
        ↓
Promise microtask
        ↓
Timer/I/O callbacks
        ↓
readFile callback logs message
        ↓
setImmediate inside readFile logs message
```

### Exam Tip

For event loop output questions, identify:

1. Synchronous code
2. Microtasks (`process.nextTick`, Promise)
3. Timers (`setTimeout`)
4. I/O callbacks (`fs.readFile`)
5. `setImmediate`

### Common Mistake

Ignoring the synchronous loop. That loop blocks everything else until it finishes.

---

## Page 22 - Thank You

### Original Slide Content

**Thank You**

### Visual Explanation

Final closing slide.

### Explanation

The lecture ends after covering asynchronous JavaScript, callbacks, NodeJS basics, event loop, use cases, npm, modules, and file system module.

### Exam Tip

No new technical content. Use this point to revise the full lecture flow.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

Lecture 10 introduces NodeJS by first explaining asynchronous JavaScript. JavaScript is considered single-threaded, but it can still handle asynchronous operations using a non-blocking I/O model and an eventing system. Non-blocking I/O means JavaScript does not wait for slow operations like file reading, API calls, or timers. Instead, it continues executing other tasks and later runs callback functions when the operation completes.

Callbacks solve the problem of processing data before it is ready. A callback is passed as an argument to another function and executed later, usually after an asynchronous task completes.

NodeJS is an open-source, cross-platform runtime environment that allows JavaScript to run on the server side. It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient for real-time, I/O-heavy, and network-based applications.

The event loop is the core mechanism that allows NodeJS to manage multiple operations without blocking. It delegates slow I/O operations, continues other work, and later executes callbacks when the operations complete.

NodeJS is strong for APIs, real-time systems, streaming applications, I/O-bound systems, JSON APIs, and single page application backends. It is weak for CPU-intensive heavy computation because blocking CPU work can freeze the event loop.

npm is the Node Package Manager. It manages reusable packages, dependencies, version rules, scripts, and project metadata through `package.json`. Dependencies needed at runtime go under dependencies, while development-only tools go under devDependencies.

NodeJS modules help organize code. There are core modules, local modules, and third-party npm modules. The `fs` module is a core module used for file operations such as reading, writing, deleting files, creating directories, logging, configuration management, and processing uploads.

---

# Key Definitions

| Term | Meaning | Example |
|---|---|---|
| JavaScript | A dynamically typed programming language commonly used for web development | Browser scripts and NodeJS backend code |
| Single-threaded | Executes one main task at a time on the main thread | JavaScript call stack |
| Asynchronous | Allows tasks to start and complete later without blocking all execution | `setTimeout()` |
| Non-Blocking I/O | I/O model where the program does not wait for slow operations to finish | File reading continues in background |
| Callback | Function passed to another function and executed later | `fetchData(processData)` |
| NodeJS | Runtime environment for executing JavaScript on the server side | Backend API server |
| Event-driven model | Execution controlled by events and handlers | HTTP request triggers callback |
| Event emitter | Component/object that emits events | Server emits request event |
| Event listener | Code that listens for an event | Listener for file read complete |
| Event loop | Mechanism that handles async callbacks without blocking execution | NodeJS event loop |
| I/O-bound application | Application waiting often on input/output operations | API, file system, database app |
| CPU-bound application | Application heavily using processor computation | Video encoding, ML training |
| npm | Node Package Manager for installing and managing packages | `npm install express` |
| `package.json` | Main metadata/configuration file for a NodeJS project | Project name, scripts, dependencies |
| `node_modules` | Directory where installed npm packages are stored | Installed Express package files |
| dependency | Package required at runtime | express, mongoose |
| devDependency | Package required only during development | jest, nodemon |
| Module | Reusable block/file of code | `greetings.js` |
| Core module | Built-in NodeJS module | `fs`, `path`, `http`, `os` |
| Local module | Developer-created file module | `./greetings` |
| Third-party module | npm-installed package | `chalk` |
| `fs` module | NodeJS module for file system operations | Read/write files |
| `require()` | CommonJS function used to import modules | `require('fs')` |
| `module.exports` | Exposes functions/values from a module | Export `sayHello` |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| Lecture agenda | Async JS, NodeJS, event loop, npm, modules, fs | 02 |
| Asynchronous JavaScript | Single-threaded but non-blocking I/O | 03 |
| NIO example | `End` prints before delayed data | 04 |
| Async problem | Processing can happen before data is fetched | 05 |
| Callback | Function passed as argument and executed later | 06 |
| NodeJS definition | Server-side JS runtime environment | 07 |
| Event-driven model | Events trigger callback/event handlers | 08 |
| Event loop | Handles async operations without blocking | 09 |
| Use cases | Good for I/O, network, real-time; weak for CPU-heavy | 10, 12 |
| PayPal example | 35% faster response time, 2x requests/sec | 11 |
| Advantages | Same language, scalable, V8, npm ecosystem | 13 |
| Disadvantages | CPU-heavy weakness, async complexity, library quality | 14 |
| npm | Dependency, version, script, package management | 15 |
| Version operators | `~` patch, `^` minor+patch | 16 |
| Modules | Core, local, third-party | 17 |
| Local module code | `require()` and `module.exports` | 18 |
| `fs` module | File system operations | 19 |
| Chalk example | Third-party npm package styling terminal output | 20 |
| Event loop output | Synchronous code blocks async callbacks | 21 |

---

# Important Code Snippets

## Page 04 - NIO Model Example

```javascript
console.log("Start");

// Non-blocking I/O operation
setTimeout(() => {
    console.log("Data loaded");
}, 2000);

console.log("End");
```

**Output:**

```text
Start
End
undefined
Data loaded
```

**Explanation:** `setTimeout()` is asynchronous, so `End` prints before `Data loaded`.

---

## Page 05 - Asynchronous Operation Problem

```javascript
function fetchData() {
    setTimeout(() => {
        console.log("Data fetched!"); // Runs after 2 seconds
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

console.log("Starting fetch operation...");

fetchData();
processData();
```

**Explanation:** `processData()` runs before data is fetched. This shows why async control is needed.

---

## Page 06 - Callback Solution

```javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!"); // Runs after 2 seconds
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

console.log("Starting fetch operation...");

// Call fetchData first
fetchData(processData);

// Running other synchronous code while waiting
for (let i = 0; i < 5; i++) {
    console.log(`Executing synchronous task ${i + 1}`);
}
```

**Explanation:** `processData` is passed as a callback and runs after `Data fetched!`.

---

## Page 18 - Module Import Types

```javascript
const fs = require('fs');          // Core module
const myModule = require('./myModule');  // Local module
const chalk = require('chalk');    // npm module
```

**Explanation:** Demonstrates importing core, local, and third-party modules.

---

## Page 18 - Local Module: greetings.js

```javascript
function sayHello(name) {
    return `Hello, ${name}!`;
}

function sayGoodbye(name) {
    return `Goodbye, ${name}!`;
}

// Export functions
module.exports = {
    sayHello: sayHello,
    sayGoodbye: sayGoodbye
};
```

**Explanation:** Creates two functions and exports them for use in another file.

---

## Page 18 - Local Module Usage: index.js

```javascript
const greetings = require('./greetings');

console.log(greetings.sayHello('Alice'));
console.log(greetings.sayGoodbye('Bob'));
```

**Output:**

```text
Hello, Alice!
Goodbye, Bob!
```

**Explanation:** Imports the local module and calls its exported functions.

---

## Page 20 - Chalk Package Example

```javascript
//Import the chalk package
const chalk = require('chalk');

// Use it!
console.log(chalk.blue('Hello World!'));
console.log(chalk.red.bold('This is red and bold'));
console.log(chalk.green.underline('Success message'));
console.log(chalk.yellow.bgBlue('Warning!'));

// Combining styles
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
```

**Explanation:** Uses the third-party `chalk` npm package to style terminal output.

---

## Page 21 - Event Loop Output Question

```javascript
fs.readFile(__filename, () => {
    console.log("this is readFile 1");
    setImmediate(() => console.log("this is setImmediate 1"));
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 200000000; i++) {
    console.log(i);
}
```

**Explanation:** The large synchronous loop blocks async callbacks. After the loop, microtasks and event loop callbacks execute.

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 01 | SLIIT title slide | Identifies module, lecture number, and topic |
| 02 | Agenda list | Shows full lecture structure |
| 04 | Code-output comparison | Demonstrates non-blocking timer behavior |
| 05 | Code-output comparison | Shows async processing problem |
| 06 | Callback code and output | Shows callback-based solution |
| 09 | Node.js non-blocking event loop diagram | Shows I/O tasks delegated and callbacks returning later |
| 11 | PayPal case study | Shows real-world performance/development improvement |
| 12 | Company logos | Shows real-world NodeJS usage examples |
| 16 | npm version operator table | Explains version compatibility rules |
| 18 | Module code screenshots | Shows importing and exporting NodeJS modules |
| 20 | Chalk code-output screenshot | Shows third-party package usage |
| 21 | Event loop output code | Tests async ordering and blocking behavior |

---

# Likely Exam Questions and Short Answers

## Question 1
What is NodeJS?

**Expected Answer:**  
NodeJS is an open-source, cross-platform runtime environment that allows JavaScript to be executed on the server side. It uses an event-driven, non-blocking I/O model, making it efficient for scalable and real-time applications.

## Question 2
Explain Non-Blocking I/O.

**Expected Answer:**  
Non-Blocking I/O means JavaScript does not wait for slow operations like file reading, API requests, or timers to complete. It continues executing other code, and the result is handled later using callbacks or event handlers.

## Question 3
What is a callback?

**Expected Answer:**  
A callback is a function passed as an argument to another function and executed later, usually after an asynchronous operation completes.

## Question 4
Give the output order of this code:

```javascript
console.log("Start");
setTimeout(() => console.log("Data loaded"), 2000);
console.log("End");
```

**Expected Answer:**

```text
Start
End
Data loaded
```

`Data loaded` prints later because `setTimeout()` is asynchronous.

## Question 5
What is the event loop in NodeJS?

**Expected Answer:**  
The event loop is the core mechanism that allows NodeJS to handle multiple asynchronous operations without blocking the main thread. It manages callbacks from timers, I/O operations, and other asynchronous tasks.

## Question 6
What are the main components of the event-driven model?

**Expected Answer:**  
The main components are event emitter, event listener, and callback function/event handler.

## Question 7
List suitable use cases for NodeJS.

**Expected Answer:**  
NodeJS is suitable for I/O-bound applications, data streaming applications, data-intensive real-time applications, JSON APIs, and backend services for single page applications.

## Question 8
Why is NodeJS not suitable for CPU-intensive applications?

**Expected Answer:**  
NodeJS uses a single main event loop. CPU-intensive tasks can block the event loop, delaying other requests and reducing responsiveness.

## Question 9
State advantages of NodeJS.

**Expected Answer:**  
NodeJS allows JavaScript across frontend and backend, supports horizontal and vertical scaling, uses the V8 engine for performance, caches modules after first use, supports extensibility/testing tools, and has a large npm ecosystem.

## Question 10
State disadvantages of NodeJS.

**Expected Answer:**  
NodeJS is not suitable for CPU-heavy tasks, asynchronous programming can be complex, and although npm has many libraries, fewer are robust and production-quality.

## Question 11
What is npm?

**Expected Answer:**  
npm is the Node Package Manager. It provides reusable NodeJS packages, dependency management, version control, scripts, and package installation from an online repository.

## Question 12
What is `package.json`?

**Expected Answer:**  
`package.json` is the main project file that contains NodeJS application metadata such as name, version, author, repository, required Node version, scripts, dependencies, and devDependencies.

## Question 13
Differentiate dependencies and devDependencies.

**Expected Answer:**

| dependencies | devDependencies |
|---|---|
| Needed at runtime/production | Needed only during development |
| Example: express, mongoose | Example: jest, nodemon |

## Question 14
Differentiate `~` and `^` in npm versions.

**Expected Answer:**  
`~4.18.2` allows only patch updates such as 4.18.x but not 4.19.0. `^4.18.2` allows minor and patch updates such as 4.x.x but not 5.0.0.

## Question 15
What are the three types of NodeJS modules?

**Expected Answer:**  
Core/Built-in modules such as `fs`, `path`, `http`, `os`; local modules created by the developer; and third-party modules installed via npm such as `chalk` or `express`.

## Question 16
What is the purpose of the `fs` module?

**Expected Answer:**  
The `fs` module is a core NodeJS module used to work with the file system. It can read files, write files, delete files, create directories, manage configuration, logging, and file uploads.

## Question 17
Explain the PayPal NodeJS success story from the lecture.

**Expected Answer:**  
PayPal moved from Java backend to NodeJS and improved response time by 35%, doubled requests per second, unified frontend and backend teams, and reduced code by 33%, improving performance and developer efficiency.

## Question 18
Write code to export and import a local NodeJS module.

**Expected Answer:**

`greetings.js`

```javascript
function sayHello(name) {
    return `Hello, ${name}!`;
}

module.exports = { sayHello };
```

`index.js`

```javascript
const greetings = require('./greetings');
console.log(greetings.sayHello('Alice'));
```

---

# Common Mistakes to Avoid

- Saying NodeJS is a programming language. It is a runtime environment.
- Saying NodeJS is always faster. It is efficient for I/O-heavy tasks, not CPU-heavy tasks.
- Ignoring asynchronous behavior when predicting output.
- Assuming `setTimeout(..., 0)` runs immediately before synchronous code.
- Forgetting that a large synchronous loop blocks the event loop.
- Calling a callback immediately instead of passing the function reference.
- Confusing dependency with devDependency.
- Using `*` or `latest` blindly in production dependencies.
- Thinking all npm packages are robust.
- Forgetting `./` when importing a local module.
- Calling `chalk` a core module instead of a third-party module.
- Thinking variables permanently store data after a NodeJS program stops.
- Forgetting that `fs` is a core module.
- Giving PayPal as an example without mentioning performance metrics.

---

# Final One-Page Revision Notes

## Core Concepts

- **NodeJS:** Server-side JavaScript runtime environment.
- **JavaScript:** Single-threaded but supports asynchronous operations.
- **Non-Blocking I/O:** JS does not wait for slow I/O tasks; it continues other work.
- **Callback:** Function passed as argument and executed later.
- **Event-driven model:** Execution happens when events trigger handlers.
- **Event loop:** Manages async callbacks and prevents blocking during I/O operations.

## Must-Remember Flows

```text
Async Flow:
Start async task → Continue next code → Async task completes → Callback runs
```

```text
Event-Driven Flow:
Event emitter → Event listener → Callback/event handler
```

```text
NodeJS I/O Flow:
Request/File/DB task → Background/system → Callback queue → Event loop → Call stack
```

## NodeJS Best Use Cases

- I/O-bound applications
- Real-time apps
- Chat apps
- Streaming apps
- JSON APIs
- Single page app backends
- Network applications with many simultaneous connections

## NodeJS Weak Areas

- CPU-intensive heavy computation
- Blocking loops
- Poor async error handling
- Unreliable/weak npm packages

## npm Essentials

| Item | Meaning |
|---|---|
| `npm` | Node Package Manager |
| `package.json` | Project info, scripts, dependencies |
| `node_modules` | Installed packages folder |
| dependencies | Runtime packages |
| devDependencies | Development-only packages |
| `~` | Patch updates only |
| `^` | Minor + patch updates |

## Modules

```text
Core module       → require('fs')
Local module      → require('./greetings')
Third-party module→ require('chalk')
```

## File System Module

`fs` can:

- Read files
- Write files
- Delete files
- Create directories
- Manage logs
- Read config files
- Process uploaded files

## Exam Keywords

- runtime environment
- server-side JavaScript
- single-threaded
- non-blocking I/O
- asynchronous
- callback
- event emitter
- event listener
- event loop
- scalable network applications
- I/O-bound vs CPU-bound
- npm
- `package.json`
- `node_modules`
- core/local/third-party modules
- `require()`
- `module.exports`
- `fs` module

---

# Execution Checklist

- [x] Read the uploaded PDF.
- [x] Read the uploaded TXT file.
- [x] Compared PDF and TXT content.
- [x] Followed original PDF page order exactly.
- [x] Added page numbers for every slide/page.
- [x] Included every readable text point from the lecture.
- [x] Preserved code examples shown in the PDF.
- [x] Put code in proper Markdown code blocks.
- [x] Reconstructed code from PDF visuals where text extraction missed it.
- [x] Included table content from the npm version slide.
- [x] Described images, diagrams, screenshots, logos, and visual meaning.
- [x] Added simple explanations for difficult points.
- [x] Added useful text diagrams.
- [x] Added comparison tables where useful.
- [x] Added definitions and simple meanings.
- [x] Added exam tips.
- [x] Added common mistakes.
- [x] Added full lecture summary.
- [x] Added key definitions table.
- [x] Added quick revision table.
- [x] Added important code snippets section.
- [x] Added important diagrams summary.
- [x] Added likely exam questions with expected answers.
- [x] Added final one-page revision notes.
