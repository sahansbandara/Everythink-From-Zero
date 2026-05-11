# SE2020 - Web Technologies and Mobile — Lecture 03
## Introduction to JavaScript

- **Institution:** Sri Lanka Institute of Information Technology
- **Faculty:** Faculty of Computing
- **Module Code:** SE2020
- **Module Name:** Web Technologies and Mobile
- **Lecture Number:** Lecture 03
- **Lecture Title:** Introduction to JavaScript
- **Lecturer:** Ms. Dilani Lunugalage
- **Degree/Program:** BSc (Hons) in Information Technology
- **Total PDF Pages/Slides:** 60

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture Title](#page-02--lecture-title)
- [Page 03 — How JavaScript aligns with other Web Technologies](#page-03--how-javascript-aligns-with-other-web-technologies)
- [Page 04 — Things you can do with JavaScript: Part 1](#page-04--things-you-can-do-with-javascript--part-1)
- [Page 05 — Things you can do with JavaScript: Part 2](#page-05--things-you-can-do-with-javascript--part-2)
- [Page 06 — The script tag](#page-06--the-script--script-tag)
- [Page 07 — JavaScript syntax basics](#page-07--javascript-syntax-basics)
- [Page 08 — Reserved Keywords](#page-08--reserved-keywords)
- [Page 09 — Variables](#page-09--variables)
- [Page 10 — Declaring variables with var](#page-10--declaring-variables-with-var)
- [Page 11 — Declaring variables with let](#page-11--declaring-variables-with-let)
- [Page 12 — Declaring variables with const](#page-12--declaring-variables-with-const)
- [Page 13 — General Rule for declaring variables](#page-13--general-rule-for-declaring-variables)
- [Page 14 — Identifiers](#page-14--identifiers)
- [Page 15 — Types](#page-15--types)
- [Page 16 — Strings](#page-16--strings)
- [Page 17 — String Methods Continued](#page-17--contd-string-methods)
- [Page 18 — Number](#page-18--number)
- [Page 19 — Boolean, Null and Undefined](#page-19--boolean-null-and-undefined)
- [Page 20 — Objects](#page-20--objects)
- [Page 21 — Conditional Statements](#page-21--conditional-statements)
- [Page 22 — If Statement](#page-22--if-statement)
- [Page 23 — If...else Statement](#page-23--ifelse-statement)
- [Page 24 — If...else if...else Statement](#page-24--ifelse-ifelse-statement)
- [Page 25 — Question: Equivalent Conditions](#page-25--question-equivalent-conditions)
- [Page 26 — The JavaScript Switch Statement](#page-26--the-javascript-switch-statement)
- [Page 27 — Switch Statement Example](#page-27--the-javascript-switch-statement-example)
- [Page 28 — Comparison Operators](#page-28--comparison-operators)
- [Page 29 — Logical Operators](#page-29--logical-operators)
- [Page 30 — JavaScript Loops](#page-30--javascript-loops)
- [Page 31 — The For Loop](#page-31--the-for-loop)
- [Page 32 — The While Loop](#page-32--the-while-loop)
- [Page 33 — The Do While Loop: Explanation](#page-33--the-do-while-loop-explanation)
- [Page 34 — The Do While Loop: Syntax and Example 1](#page-34--the-do-while-loop-syntax-and-example-1)
- [Page 35 — The Do While Loop: Input Validation Example](#page-35--the-do-while-loop-input-validation-example)
- [Page 36 — The Break Statement](#page-36--the-break-statement)
- [Page 37 — The Continue Statement](#page-37--the-continue-statement)
- [Page 38 — JavaScript Dialog Boxes](#page-38--javascript-dialog-boxes)
- [Page 39 — Review Questions](#page-39--review-questions)
- [Page 40 — JavaScript Objects](#page-40--javascript-objects)
- [Page 41 — Accessing Object Properties](#page-41--accessing-object-properties)
- [Page 42 — Accessing Object Methods](#page-42--accessing-object-methods)
- [Page 43 — JavaScript Arrays](#page-43--javascript-arrays)
- [Page 44 — Array Properties](#page-44--array-properties)
- [Pages 45-55 — Array Methods](#pages-45-55--array-methods)
- [Page 56 — Functions](#page-56--functions)
- [Page 57 — Function Syntax](#page-57--function-syntax)
- [Page 58 — Function Example](#page-58--function-example)
- [Page 59 — Global Functions](#page-59--global-functions)
- [Page 60 — Thank You](#page-60--thank-you)
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

- Sri Lanka Institute of Information Technology
- Faculty of Computing
- SE2020 - Web Technologies and Mobile
- Ms. Dilani Lunugalage
- BSc (Hons) in Information Technology
- Page 1 / 60

### Visual Explanation

The slide is a formal title slide. It identifies the university, faculty, module code, module title, lecturer, and degree program.

### Explanation

This lecture belongs to the SE2020 Web Technologies and Mobile module. The lecture is focused on JavaScript, which is one of the main technologies used in web development.

### Exam Tip

Remember the module context: JavaScript is taught as part of web technologies, together with HTML and CSS.

### Common Mistake

No major common mistake.

---

## Page 02 — Lecture Title

### Original Slide Content

- Lecture 03
- Introduction to JavaScript
- BSc (Hons) in Information Technology
- Page 2 / 60

### Visual Explanation

The slide introduces the lecture topic: JavaScript.

### Explanation

This lecture starts the JavaScript section. JavaScript is the programming language used mainly to add behavior and interactivity to web pages.

### Exam Tip

If asked what Lecture 03 is about, the answer is **Introduction to JavaScript**.

### Common Mistake

Do not confuse JavaScript with Java. They are different languages.

---

## Page 03 — How JavaScript aligns with other Web Technologies

### Original Slide Content

- HTML is for content.
- CSS is for presentation.
- JavaScript is for interactivity.
- JavaScript can:
  - validate user input in an HTML form before sending the data to a server;
  - build forms that respond to user input without accessing a server;
  - change the appearance of HTML documents and write data to browser windows;
  - open and close new browser windows or frames;
  - build small but complete client-side programs.

### Visual Explanation

No major visual content. The slide gives a functional comparison of HTML, CSS, and JavaScript.

### Explanation

Web pages normally use three core technologies:

| Technology | Main Role | Simple Meaning |
|---|---|---|
| HTML | Content | What appears on the page |
| CSS | Presentation | How the page looks |
| JavaScript | Interactivity | How the page behaves |

JavaScript is useful because it can react to user actions. For example, it can check whether a form field is empty before sending the form to the server.

### Visual/Text Diagram

```text
HTML       -> structure/content
CSS        -> design/presentation
JavaScript -> behavior/interactivity
```

### Exam Tip

For a short-answer question, use the phrase: **HTML content, CSS presentation, JavaScript interactivity**.

### Common Mistake

Students often say CSS makes websites interactive. That is weak. CSS can create visual effects, but JavaScript handles logic and dynamic behavior.

---

## Page 04 — Things you can do with JavaScript — Part 1

### Original Slide Content

Things you can do with JavaScript - Some examples:

- Validate User Input
  - Checking the values in input fields
  - Checking a Password
  - Checking numeric values
- Forms that respond to user input without accessing a server
  - Forms that load a URL
  - Forms that calculate
- Write information into HTML documents using Javascript Statements
  - Programmed output via `document.write()` or `[element selector].innerHTML`
  - Adjust document colours
  - Change/rewrite images in a document

### Visual Explanation

No major visual content. The slide lists practical JavaScript use cases in web pages.

### Explanation

JavaScript can run in the browser before data is submitted to a server. This makes web pages faster and more user-friendly. For example, a form can show an error immediately if the user enters an invalid password.

`document.write()` writes content directly into the document. `innerHTML` changes the HTML content inside a selected element.

### Visual/Text Diagram

```text
User types input
      ↓
JavaScript checks input
      ↓
Valid? -> submit to server
Invalid? -> show error immediately
```

### Exam Tip

For JavaScript uses, give practical examples: form validation, calculations, dynamic HTML, changing images, and changing colors.

### Common Mistake

Do not say JavaScript always needs a server. JavaScript can run on the client side in the browser.

---

## Page 05 — Things you can do with JavaScript — Part 2

### Original Slide Content

Things you can do with JavaScript - Some examples:

- Open and Close Browser windows and Frames
  - Create new Browser windows with documents or programmed output
- Build small but complete client side programs
  - Calculators
  - Games
- Control Robots
- Control drones (IOT)

### Visual Explanation

No major visual content. The slide extends JavaScript examples beyond simple web forms.

### Explanation

JavaScript can be used for small client-side applications such as calculators and browser games. In modern environments, JavaScript can also interact with IoT systems through APIs or platforms that connect to robots and drones.

### Exam Tip

When writing examples, mention both browser-based examples and wider uses like IoT only if the question asks for applications.

### Common Mistake

Do not limit JavaScript only to form validation. It can build complete client-side programs.

---

## Page 06 — The `<script> </script>` tag

### Original Slide Content

- Slide title: The `<script> </script>` tag
- The visual shows an HTML document where JavaScript is placed inside `<script>` tags.
- The slide shows that script tags can be placed in the `<head>` or inside the `<body>` of an HTML document.
- Example page heading: “The Script Tag: Example 1”.
- Example browser text:
  - “Script tags can be placed in the head of an HTML document.”
  - “Script tags can also be placed in the body of an HTML document.”
  - “Script tags will be ignored by other browsers that do not understand them.”

### Visual Explanation

The slide contains an HTML code screenshot and a browser output screenshot. The code demonstrates that JavaScript is inserted into HTML using `<script>` and `</script>` tags.

### Code from Slide

```html
<html>
<head>
    <title>The Script Tag 1</title>
    <script>
        document.write("<p>Script tags can be placed in the head of an HTML document.</p>");
    </script>
</head>
<body>
    <h1>The Script Tag: Example 1</h1>
    <p>
        Script tags can also be placed in the body of an HTML document.
    </p>
    <script>
        document.write("<p>Script tags will be ignored by other browsers that do not understand them.</p>");
    </script>
</body>
</html>
```

### Code Explanation

The code uses `document.write()` to write text into the HTML page. One script is placed in the `<head>` section and another script is placed in the `<body>` section.

### Output/Result

The browser displays the heading and the text generated by JavaScript.

### Explanation

The `<script>` tag tells the browser that the content inside it is JavaScript code. JavaScript can be written inside the HTML file or linked from an external file.

### Visual/Text Diagram

```text
HTML document
├── head
│   └── script
└── body
    ├── normal HTML content
    └── script
```

### Exam Tip

If asked “Which HTML tags hold JavaScript code?”, answer: `<script>` and `</script>`.

### Common Mistake

Do not write JavaScript directly in HTML without the correct `<script>` tag unless it is inside an event attribute such as `onclick`.

---

## Page 07 — JavaScript syntax basics

### Original Slide Content

- Comments
  - JavaScript supports single-line and multi-line comments.
- White Space
  - White space is used to improve code readability.

### Visual Explanation

The slide shows code screenshots for comments and whitespace formatting. The exact code is partially small in the PDF, but the intended syntax is clear.

### Code from Slide — Comments

```javascript
// Single and multi line comments.
// This is an example of a single line comment.

/*
 * this is an example
 * of a
 * multi line
 * comment.
 */
```

### Code from Slide — White Space

```javascript
const hello = "Hello";
const world = "World";
```

Example of readable whitespace:

```javascript
let foo = function() {
    for (let i = 1; i < 10; i++) {
        alert(i);
    }
};
```

### Explanation

Comments are ignored by the JavaScript engine. They help humans understand the code. White space does not usually change JavaScript meaning, but it improves readability.

### Visual/Text Diagram

```text
// single-line comment

/* multi-line
   comment */
```

### Exam Tip

Know the two comment types: `//` for single-line comments and `/* ... */` for multi-line comments.

### Common Mistake

Do not use HTML comments `<!-- -->` as normal JavaScript comments.

---

## Page 08 — Reserved Keywords

### Original Slide Content

- There are a handful of reserved words that can’t be used when declaring user-defined variables and functions.
- Some of these reserved words are currently implemented, some are saved for future use, and others are reserved for historical reasons.
- A list of words and in-depth explanations for each can be found on the Mozilla Developer Network JavaScript Reference site.

### Visual Explanation

No major visual content.

### Explanation

Reserved keywords are words already used by JavaScript for special language features. Examples include `if`, `else`, `switch`, `function`, `return`, `var`, `let`, and `const`. These cannot be used as variable or function names.

### Exam Tip

If asked why a variable name is invalid, check whether it is a reserved keyword.

### Common Mistake

Do not name a variable `let`, `const`, `function`, or `return`.

---

## Page 09 — Variables

### Original Slide Content

Variables are containers for storing data. You can declare a variable in JavaScript:

- Using `var`
- Using `let`
- Using `const`

### Visual Explanation

No major visual content.

### Explanation

A variable stores a value so it can be used later. JavaScript has three common declaration keywords: `var`, `let`, and `const`.

### Visual/Text Diagram

```text
Variable name -> stored value
age           -> 20
name          -> "Saman"
isValid       -> true
```

### Exam Tip

If a question asks for variable declaration methods, list: `var`, `let`, and `const`.

### Common Mistake

Do not think `const` means the value is always deeply frozen. For objects and arrays, internal content can still be changed.

---

## Page 10 — Declaring variables with `var`

### Original Slide Content

- The `var` statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
- Variables declared with `var` are processed before any code is executed. This is called hoisting.
- The scope of a variable declared with `var` is its current execution context and closures thereof.
- The scope is either:
  - the enclosing function and functions declared within it, or
  - global if declared outside any function.
- Duplicate variable declarations using `var` will not trigger an error, even in strict mode.
- The variable will not lose its value unless another assignment is performed.
- More on `var`.

### Visual Explanation

No major visual content.

### Explanation

`var` is the older way to declare variables. It is function-scoped, not block-scoped. Because of hoisting, declarations are moved conceptually to the top of their scope.

### Visual/Text Diagram

```text
function scope
├── var x is visible throughout the function
└── block { var x is still function-scoped }
```

### Exam Tip

Keywords for `var`: **function-scoped**, **global-scoped**, **hoisting**, **duplicate declarations allowed**.

### Common Mistake

Do not say `var` is block-scoped. That is false.

---

## Page 11 — Declaring variables with `let`

### Original Slide Content

- The `let` statement declares a block-scoped local variable, optionally initializing it to a value.
- `let` allows variables limited to the scope of a block statement or expression.
- This differs from `var`, which declares a variable globally or locally to an entire function regardless of block scope.
- Another difference between `var` and `let` is that `let` is initialized to a value only when a parser evaluates it.
- More on `let`.

### Visual Explanation

No major visual content.

### Explanation

`let` is preferred for variables that need to change. It is block-scoped, meaning it only exists inside the nearest `{ ... }` block.

### Visual/Text Diagram

```text
if (condition) {
    let value = 10;  -> usable only inside this block
}
```

### Exam Tip

Keywords for `let`: **block-scoped**, **local variable**, **can be reassigned**.

### Common Mistake

Do not use `let` for values that should never be reassigned. Use `const` for those.

---

## Page 12 — Declaring variables with `const`

### Original Slide Content

- `const` allows you to declare and initialize a read-only variable that will hold a constant value and something that we can never change.
- `const` variables are block-scoped, much like variables declared using `let`.
- The value of a constant can’t be changed through reassignment, and it can’t be redeclared.
- However, if a variable declared with `const` is an object or array its properties or items can be updated or removed.
- An initializer for a constant is required.
- You must specify its value in the same statement in which it’s declared.
- This declaration creates a constant whose scope can be either global or local to the block in which it is declared.
- More information on `const`.

### Visual Explanation

No major visual content.

### Explanation

`const` creates a variable that cannot be reassigned. It must be assigned immediately. It is block-scoped like `let`.

Important nuance: `const` prevents reassignment of the variable name, but it does not always prevent changing the contents of an object or array.

### Code Example

```javascript
const name = "Kamal";
// name = "Nimal"; // not allowed

const numbers = [1, 2, 3];
numbers.push(4); // allowed because the array content is changed, not reassigned
```

### Exam Tip

For `const`, mention: **block-scoped**, **must be initialized**, **cannot be reassigned**, **objects/arrays can still be mutated**.

### Common Mistake

Saying “`const` arrays can never change” is inaccurate. The variable cannot be reassigned, but array items can be modified.

---

## Page 13 — General Rule for declaring variables

### Original Slide Content

- In general, use `const` for declaring objects or arrays, and variables that will not change.
- Use `let` to declare variables that will change through reassignment.
- Use `var` only if your code needs to run on older browsers.

### Visual Explanation

No major visual content.

### Explanation

Modern JavaScript normally uses `const` first. Use `let` only when reassignment is needed. Avoid `var` unless supporting older browsers.

### Comparison Table

| Keyword | Scope | Reassignment | Best Use |
|---|---|---|---|
| `var` | Function/global | Allowed | Old browser support |
| `let` | Block | Allowed | Values that change |
| `const` | Block | Not allowed | Values that should not be reassigned |

### Exam Tip

A strong answer: **Use `const` by default, `let` when reassignment is needed, and avoid `var` unless necessary.**

### Common Mistake

Using `var` everywhere in modern JavaScript is bad practice.

---

## Page 14 — Identifiers

### Original Slide Content

Identifiers are used to give variables and functions a unique name so they can subsequently be referred to by that name. The name of an identifier must follow a few rules:

- Cannot be a reserved word.
- Can only be composed of letters, numbers, dollar signs, and underscores.
- The first character cannot be a number.
- It’s best practice to name identifiers in a way that will make sense to you and other developers later on.

### Visual Explanation

The slide includes a code screenshot showing valid identifier names.

### Code from Slide

```javascript
// Valid identifier names.
const myAwesomeVariable = "a";
const myAwesomeVariable2 = "b";
const my_awesome_variable = "c";
const $my_AwesomeVariable = "d";
const _my_awesome_variable_$ = "e";
```

### Explanation

An identifier is a name used for a variable, function, object, or similar item. Good identifiers make code easier to understand.

### Exam Tip

If given names and asked which are invalid, check two things: first character and reserved keywords.

### Common Mistake

Starting an identifier with a number, such as `1name`, is invalid.

---

## Page 15 — Types

### Original Slide Content

Types in JavaScript fall into two categories: primitives or objects.

Primitive types include:

- String
- Number
- Boolean
- Null
- Undefined

### Visual Explanation

No major visual content.

### Explanation

JavaScript values are classified into types. Primitive values are simple values. Objects are more complex structures with properties and methods.

### Visual/Text Diagram

```text
JavaScript Types
├── Primitive types
│   ├── String
│   ├── Number
│   ├── Boolean
│   ├── Null
│   └── Undefined
└── Objects
    ├── Date
    ├── Array
    └── Function
```

### Exam Tip

Know the primitive types listed in the lecture: String, Number, Boolean, Null, Undefined.

### Common Mistake

Do not mix up `null` and `undefined`. They are different.

---

## Page 16 — Strings

### Original Slide Content

- Strings are text wrapped in single or double quotation marks.
- It is best practice to consistently use one or the other.
- There may be times when the string contains quotation marks that collide with the ones used to create the string.
- In this case, either escape the characters using a `\` backslash or use different quotes around the string.
- Strings can created with double or single quotes.

### Visual Explanation

The slide includes string examples using single quotes, double quotes, escaped quotes, and a `welcome` string.

### Code from Slide

```javascript
let a = "I am a string";
let b = 'So am I!';

alert(a);
alert(b);
```

```javascript
const statement1 = 'He said "JavaScript is awesome!"';
const statement2 = "He said \"JavaScript is awesome!\"";
```

```javascript
const welcome = "Hello World";
```

### Code Explanation

Strings can use either single or double quotes. If the same quote type appears inside the string, it must be escaped using `\`, or the outer quote type must be changed.

### Explanation

A string stores text. JavaScript allows both `'single quotes'` and `"double quotes"`, but consistency matters.

### Exam Tip

For string questions, mention quotes and escaping using a backslash.

### Common Mistake

Forgetting to escape quotes inside a string causes syntax errors.

---

## Page 17 — Contd: String Methods

### Original Slide Content

The slide continues the string example using `welcome = "Hello World"` and demonstrates string properties/methods.

### Visual Explanation

The slide contains a code screenshot and output screenshot. It demonstrates `length`, `toUpperCase()`, `toLowerCase()`, `charAt()`, `substr()`, `substring()`, and `indexOf()`.

### Code from Slide

```javascript
let result = welcome.length; // result is the number 11

result = welcome.toUpperCase(); // result is HELLO WORLD

result = welcome.toLowerCase(); // result is hello world

result = welcome.charAt(0); // result is the character H

result = welcome.substr(6, 5); // (start,length) result is the string World

result = welcome.substring(6, 11); // (start,end) result is the string World

result = welcome.indexOf("World", 0); // return is the number 6.
// If the string is not found indexOf returns -1
```

### Output/Result

```text
Hello World
HELLO WORLD
hello world
H
Hello
6
```

### Explanation

String methods are functions that operate on string values. String properties describe information about the string, such as its length.

| Method/Property | Meaning | Example Result |
|---|---|---|
| `length` | Counts characters | `11` for `Hello World` |
| `toUpperCase()` | Converts to uppercase | `HELLO WORLD` |
| `toLowerCase()` | Converts to lowercase | `hello world` |
| `charAt(0)` | Gets character at index 0 | `H` |
| `substr(6, 5)` | Gets 5 characters starting at index 6 | `World` |
| `substring(6, 11)` | Gets characters from index 6 up to 11 | `World` |
| `indexOf("World", 0)` | Finds first index of `World` | `6` |

### Exam Tip

Remember that JavaScript string indexing starts at `0`.

### Common Mistake

Confusing `substr(start, length)` with `substring(start, end)`.

---

## Page 18 — Number

### Original Slide Content

- Number types are any positive or negative numeric value.
- There is no distinction between integer and floating point values.
- JavaScript is a loosely typed language.
- Programmers used to strongly typed languages such as C++ or Java find this difficult to get used to.
- In C/C++/Java, integer division such as `5/10` may result in `0` depending on integer types.
- In JavaScript there are no explicit integers or floating-point numbers.
- “Unofficially,” you will get one or the other back.
- `result` would be assigned `0.5`.

### Visual Explanation

The slide shows examples of number declarations and a division example.

### Code from Slide

```javascript
let num1 = 100;
let num2 = 100.10;
let num3 = 0.10;
```

C/C++/Java-style example shown conceptually:

```c
int result;
result = 5/10;
```

JavaScript example:

```javascript
result = 5/10;
```

### Code Explanation

JavaScript uses one `Number` type for both whole numbers and decimal numbers. Therefore, `5 / 10` gives `0.5`.

### Explanation

JavaScript is loosely typed, so variables do not need explicit type declarations such as `int` or `float`.

### Exam Tip

For JavaScript numbers, write: **no separate integer and floating-point types in normal Number usage**.

### Common Mistake

Expecting JavaScript `5 / 10` to return `0` like integer division in some strongly typed languages.

---

## Page 19 — Boolean, Null and Undefined

### Original Slide Content

- Boolean types are either `true` or `false`.
- Null and Undefined:
  - Null types are a value that represent the absence of a value, similar to many other programming languages.
  - Undefined types represent a state in which no value has been assigned at all.
  - This type is created in two ways: by using the `undefined` keyword or by not defining a value at all.

### Visual Explanation

The slide contains code examples for booleans, null, and undefined.

### Code from Slide

```javascript
const okay = true;
const fail = false;
```

```javascript
// Achieve a null value.
let foo = null;

// Two ways to achieve an undefined value.
var bar1 = undefined;
var bar2;
```

### Explanation

A Boolean stores only two possible values: `true` or `false`. `null` means an intentional absence of a value. `undefined` means a value has not been assigned.

### Comparison Table

| Type | Meaning | Example |
|---|---|---|
| Boolean | True/false value | `true`, `false` |
| Null | Intentional no-value | `let x = null;` |
| Undefined | Not assigned | `let x;` |

### Exam Tip

Use this exact distinction: **null = assigned empty value; undefined = no value assigned**.

### Common Mistake

Do not say `null` and `undefined` are exactly the same.

---

## Page 20 — Objects

### Original Slide Content

Everything else is in JavaScript is considered an Object. While there are numerous built-in objects, here we will cover:

- Date
- Array
- Function

### Visual Explanation

No major visual content.

### Explanation

Objects are complex values. They can contain properties and methods. In this lecture, important object-related areas are Date, Array, and Function.

### Visual/Text Diagram

```text
Object
├── properties -> stored data
└── methods    -> actions/functions
```

### Exam Tip

For JavaScript objects, remember: **object = data with properties and methods**.

### Common Mistake

Do not call arrays primitive values. Arrays are objects.

---

## Page 21 — Conditional Statements

### Original Slide Content

In JavaScript we have the following conditional statements:

- `if` statement - use this statement to execute some code only if a specified condition is true.
- `if...else` statement - use this statement to execute some code if the condition is true and another code if the condition is false.
- `if...else if....else` statement - use this statement to select one of many blocks of code to be executed.
- `switch` statement - use this statement to select one of many blocks of code to be executed.

### Visual Explanation

No major visual content.

### Explanation

Conditional statements allow a program to make decisions. The code path changes depending on whether a condition is true or false.

### Visual/Text Diagram

```text
Condition?
├── true  -> run true block
└── false -> run alternative block
```

### Exam Tip

For conditional statement lists, include all four: `if`, `if...else`, `if...else if...else`, and `switch`.

### Common Mistake

Do not use many separate `if` statements when only one branch should run. Use `else if` or `switch`.

---

## Page 22 — If Statement

### Original Slide Content

Use the `if` statement to execute some code only if a specified condition is true.

### Code from Slide

```javascript
if (condition) {
    // code to be executed if condition is true
}
```

Example:

```javascript
if (age < 16) {
    entry = "free";
}
```

### Visual Explanation

The slide shows syntax and one example for `if`.

### Explanation

An `if` statement checks a condition. If the condition is true, the code inside `{}` runs. If false, it is skipped.

### Visual/Text Diagram

```text
age < 16 ?
├── true  -> entry = "free"
└── false -> do nothing
```

### Exam Tip

Use `if` when there is only one condition to check and no required alternative.

### Common Mistake

Do not put a semicolon immediately after the `if(condition)` because it can break the logic.

---

## Page 23 — If...else Statement

### Original Slide Content

Use the `if...else` statement to execute some code if a condition is true and another code if the condition is not true.

### Code from Slide

```javascript
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is not true
}
```

Example:

```javascript
if (age < 16) {
    entry = "free";
} else {
    entry = "£10";
}
```

### Visual Explanation

The slide shows syntax and one entry-price example.

### Explanation

`if...else` creates two paths. One path runs when the condition is true. The other path runs when it is false.

### Visual/Text Diagram

```text
age < 16 ?
├── true  -> entry = "free"
└── false -> entry = "£10"
```

### Exam Tip

Use `if...else` when exactly one of two code blocks must execute.

### Common Mistake

Do not write another independent `if` when the second condition is simply the opposite. Use `else`.

---

## Page 24 — If...else if...else Statement

### Original Slide Content

Use the `if...else if...else` statement to select one of several blocks of code to be executed.

### Code from Slide

```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if neither condition1 nor condition2 is true
}
```

Example:

```javascript
if (age < 12) {
    entry = "free";
} else if (age < 18) {
    entry = "£10";
} else {
    entry = "£20";
}
```

### Visual Explanation

The slide shows multiple-branch decision-making.

### Explanation

`else if` checks conditions in order. Once one condition is true, its block runs and the rest are skipped.

### Visual/Text Diagram

```text
age < 12 ?
├── true  -> free
└── false -> age < 18 ?
             ├── true  -> £10
             └── false -> £20
```

### Exam Tip

Order matters. Put the most specific or smallest range condition first.

### Common Mistake

Putting `age < 18` before `age < 12` can make the `age < 12` branch unreachable.

---

## Page 25 — Question: Equivalent Conditions

### Original Slide Content

Question: Are these equivalent and why?

Left code:

```javascript
if (age < 12) {
    entry = "free";
} else if (age < 18) {
    entry = "£10";
} else {
    entry = "£20";
}
```

Right code:

```javascript
if (age < 18) {
    entry = "£10";
} else if (age < 12) {
    entry = "free";
} else {
    entry = "£20";
}
```

### Visual Explanation

The slide shows two similar-looking `if...else if...else` blocks side by side.

### Explanation

They are **not equivalent**.

In the left code, the program first checks `age < 12`, so children below 12 get `"free"`. Then it checks `age < 18`, so ages 12 to 17 get `"£10"`.

In the right code, `age < 18` catches every age below 18, including ages below 12. Therefore, the `else if (age < 12)` branch will never run.

### Visual/Text Diagram

```text
Correct order:
age < 12  -> free
age < 18  -> £10
otherwise -> £20

Wrong order:
age < 18 catches both under 12 and under 18
age < 12 becomes unreachable
```

### Exam Tip

For range conditions, order must be from most restrictive/specific to broader conditions.

### Common Mistake

Thinking same conditions in different order always produce same output. In `else if` chains, order changes meaning.

---

## Page 26 — The JavaScript Switch Statement

### Original Slide Content

The JavaScript Switch Statement — Syntax.

### Code from Slide

```javascript
switch (n) {
    case 1:
        // execute code block 1
        break;

    case 2:
        // execute code block 2
        break;

    default:
        // code to be executed if n is different from case 1 and 2
}
```

### Visual Explanation

The slide shows the general `switch` syntax with `case`, `break`, and `default`.

### Explanation

A `switch` statement compares one expression against multiple cases. `break` stops execution after a matching case. `default` runs when no case matches.

### Visual/Text Diagram

```text
switch value
├── case 1 -> code block 1 -> break
├── case 2 -> code block 2 -> break
└── default -> fallback code
```

### Exam Tip

Always mention `break` and `default` when explaining `switch`.

### Common Mistake

Forgetting `break` can cause fall-through, where later cases also execute.

---

## Page 27 — The JavaScript Switch Statement Example

### Original Slide Content

The slide shows a `switch` example using the day of the week and a note about `document.write()` and `innerHTML`.

### Code from Slide

```javascript
var day = new Date().getDay();
switch (day) {
    case 0:
        message = "Today is Sunday";
        break;
    case 1:
        message = "Today is Monday";
        break;
    case 2:
        message = "Today is Tuesday";
        break;
    case 3:
        message = "Today is Wednesday";
        break;
    case 4:
        message = "Today is Thursday";
        break;
    case 5:
        message = "Today is Friday";
        break;
    case 6:
        message = "Today is Saturday";
        break;
}
```

### Note from Slide

When the `document.write()` method is used to display content on the page, any prior content is removed. For this reason, `document.write()` is rarely used in production. The slide notes that an alternative method is opening and closing tag comments and selecting this element with `div` and making its `innerHTML` equal to `x`.

### Visual Explanation

The visual demonstrates a practical use of `switch`: selecting a message according to the current day.

### Explanation

`new Date().getDay()` returns a number from 0 to 6. The switch uses that number to set the correct day message.

### Exam Tip

If asked for a switch example, a day-of-week example is easy to write and explain.

### Common Mistake

Assuming `getDay()` returns the day name. It returns a number.

---

## Page 28 — Comparison Operators

### Original Slide Content

Comparison operators are used in logical statements to determine equality or difference between variables or values.

The slide uses `x = 5` and shows:

| Operator | Description | Comparing | Returns |
|---|---|---|---|
| `==` | is equal to | `x == 8` | false |
| `==` | is equal to | `x == 5` | true |
| `===` | is exactly equal to value and type | `x === "5"` | false |
| `===` | is exactly equal to value and type | `x === 5` | true |
| `!=` | is not equal to | `x != 8` | true |
| `!==` | is not equal to neither value nor type | `x !== "5"` | true |
| `!==` | is not equal to neither value nor type | `x !== 5` | false |
| `>` | is greater than | `x > 8` | false |
| `<` | is less than | `x < 8` | true |
| `>=` | is greater than or equal to | `x >= 8` | false |
| `<=` | is less than or equal to | `x <= 8` | true |

### Visual Explanation

The slide shows a table of comparison operators with examples and return values.

### Explanation

Comparison operators return Boolean values: `true` or `false`. `==` compares value with possible type conversion. `===` compares both value and type.

### Exam Tip

Use `===` in modern JavaScript when you want strict equality.

### Common Mistake

Confusing `==` and `===`. `===` is stricter because it checks both value and type.

---

## Page 29 — Logical Operators

### Original Slide Content

Logical operators are used to determine the logic between variables or values.

The slide uses `x = 5`, `y = 3` and shows:

| Operator | Description | Example |
|---|---|---|
| `&&` | and | `(x < 10 && y > 1)` is true |
| `&&` | and | `(x == 5 && y == 5)` is false |
| `||` | or | `(x == 5 || y == 5)` is true |
| `!` | not | `!(x == y)` is true |

### Visual Explanation

The slide contains a logical operators table.

### Explanation

Logical operators combine or invert Boolean expressions.

| Operator | Meaning | True When |
|---|---|---|
| `&&` | AND | Both sides are true |
| `||` | OR | At least one side is true |
| `!` | NOT | Reverses true/false |

### Exam Tip

For logical operators, show the condition and final Boolean result.

### Common Mistake

Using `&` instead of `&&`, or `|` instead of `||`, in normal JavaScript logical conditions.

---

## Page 30 — JavaScript Loops

### Original Slide Content

In JavaScript we have the following loops:

- `for` - loops through a block of code a number of times.
- `for/in` - loops through the properties of an object.
- `while` - loops through a block of code while a specified condition is true.
- `do/while` - also loops through a block of code while a specified condition is true.

### Visual Explanation

No major visual content.

### Explanation

Loops repeat code. Different loop types are useful for different situations.

### Comparison Table

| Loop | Best Use |
|---|---|
| `for` | Repeat known number of times |
| `for/in` | Iterate object properties |
| `while` | Repeat while condition is true |
| `do/while` | Run once first, then check condition |

### Exam Tip

For loop comparisons, emphasize when each loop is used.

### Common Mistake

Using `while` when the loop counter is not updated, causing an infinite loop.

---

## Page 31 — The For Loop

### Original Slide Content

The `for` loop is often the tool you will use when you want to create a loop. This will often be used if you want to repeat the same code a number of times, each time with a different value.

### Code from Slide

```javascript
for (initial statement; boolean expression; statement) {
    // the code block to be executed
}
```

Slide notes:

- Initial statement: This statement is executed before looping begins.
- Boolean expression: This expression is evaluated to true or false. If true the loop is entered.
- Statement: This statement is executed at the end of each loop.

Example:

```javascript
for (let counter = 0; counter < 10; counter++) {
    document.write("<p>");
    document.write("Counter is: " + counter);
    document.write("</p>");
}
```

### Visual Explanation

The slide shows syntax, explanation of each part, and an example using `document.write()`.

### Explanation

A `for` loop has three parts: initialization, condition, and update. It is ideal when the number of repetitions is known.

### Visual/Text Diagram

```text
initial statement
      ↓
check condition
      ↓ true
run code block
      ↓
run update statement
      ↓
check condition again
```

### Exam Tip

If asked to write a loop from 0 to 9, use `for (let counter = 0; counter < 10; counter++)`.

### Common Mistake

Using `counter <= 10` when exactly 10 repetitions from 0 to 9 are expected.

---

## Page 32 — The While Loop

### Original Slide Content

The `while` loop allows you to run a block of code while a condition is true. If the condition is not true at the start, the block of code inside the while loop will not be executed at all.

### Code from Slide

```javascript
while (boolean expression) {
    // the code block to be executed
}
```

Slide notes:

- Boolean expression: This expression is evaluated to true or false. If true the loop is entered.
- Statement(s): Code block to be executed.

Example:

```javascript
let counter = 0;
while (counter < 10) {
    document.write("<p>");
    document.write("Counter is: " + counter);
    document.write("</p>");
    counter++;
}
```

### Visual Explanation

The slide shows the while syntax and an example similar to the for loop.

### Explanation

A `while` loop checks the condition before each loop execution. If the condition is false at the beginning, the loop body never runs.

### Visual/Text Diagram

```text
check condition first
├── true  -> run code -> update -> check again
└── false -> skip loop
```

### Exam Tip

Mention that a `while` loop may execute zero times.

### Common Mistake

Forgetting `counter++` creates an infinite loop.

---

## Page 33 — The Do While Loop: Explanation

### Original Slide Content

- The `do while` loop allows you to run a block of code once, and to continue to run it while a condition is true.
- If the condition is not true at the start, the block of code inside curly braces will be executed once, as the condition check only takes place at the end of the execution of that block of code.
- This is particularly useful when asking for user input and validating it.
- You can ask the user to enter their input once, and to repeat as long as the value they have entered is invalid, see Example 2.

### Visual Explanation

No major visual content.

### Explanation

A `do...while` loop always executes the body at least once because the condition is checked after the body runs.

### Visual/Text Diagram

```text
run code block once
      ↓
check condition
├── true  -> repeat
└── false -> stop
```

### Exam Tip

Main keyword: **do...while executes at least once**.

### Common Mistake

Confusing `while` with `do...while`. `while` may run zero times; `do...while` runs at least once.

---

## Page 34 — The Do While Loop: Syntax and Example 1

### Original Slide Content

### Code from Slide

```javascript
do {
    // the code block to be executed
} while (boolean expression);
```

Slide notes:

- Boolean expression: This expression is evaluated to true or false. If true the loop is re-entered.
- Statement(s): Code block to be executed.

Example 1:

```javascript
counter = 0;
do {
    document.write("<p>");
    document.write("Counter is: " + counter);
    document.write("</p>");
    counter++;
} while (counter < 10);
```

### Visual Explanation

The slide shows the syntax and example of a `do...while` loop.

### Explanation

This loop prints counter values and increments the counter after each execution. The condition is checked at the bottom.

### Exam Tip

Notice the semicolon after `while (counter < 10);` in a `do...while` loop.

### Common Mistake

Forgetting the semicolon after the `while` condition in `do...while`.

---

## Page 35 — The Do While Loop: Input Validation Example

### Original Slide Content

The slide shows a `do...while` example for user input validation.

### Code from Slide

```javascript
let numValid = false;
let userNumber1;
do {
    userNumber1 = parseInt(prompt("Please choose a number between 1 and 59"));
    if (!(Number.isInteger(userNumber1))) {
        alert("Error: The number you entered is not an integer");
    } else if ((userNumber1 < 1) || (userNumber1 > 59)) {
        alert("Error: The number must be between 1 and 59");
    } else {
        numValid = true;
    }
} while (numValid != true);
```

### Note from Slide

In the `do while`, you will need to add a semicolon at the end of the while condition statement, unlike in the `while` condition.

### Visual Explanation

The code asks the user to enter a number and repeats until the number is valid.

### Explanation

This example is useful for validation:

1. Start with `numValid = false`.
2. Ask user for input using `prompt()`.
3. Convert input to integer using `parseInt()`.
4. Check if it is an integer.
5. Check if it is between 1 and 59.
6. If valid, set `numValid = true` and stop looping.

### Visual/Text Diagram

```text
Ask user for number
      ↓
Is integer?
├── no  -> show error -> repeat
└── yes -> between 1 and 59?
          ├── no  -> show error -> repeat
          └── yes -> valid -> stop
```

### Exam Tip

For input validation, `do...while` is strong because it guarantees the user is asked at least once.

### Common Mistake

Using `prompt()` without converting the string to a number before numeric validation.

---

## Page 36 — The Break Statement

### Original Slide Content

The `break` statement breaks the loop and continues executing the code after the loop, if any.

### Code from Slide

```javascript
let counter = 0;
while (true) { // potentially infinite loop
    if (counter > 5) {
        break;
    }
    counter++;
}
```

### Visual Explanation

The slide shows `break` being used to exit a potentially infinite loop.

### Explanation

`break` immediately exits the nearest loop or switch. In this example, the loop would otherwise run forever because the condition is `true`.

### Visual/Text Diagram

```text
while(true)
      ↓
counter > 5?
├── true  -> break -> exit loop
└── false -> counter++ -> continue loop
```

### Exam Tip

Use `break` when you need to stop a loop early.

### Common Mistake

Thinking `break` only skips one iteration. That is false. `break` exits the loop.

---

## Page 37 — The Continue Statement

### Original Slide Content

The `continue` statement breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.

### Code from Slide

```javascript
let counter = 0;
while (counter < 6) {
    counter++;
    if (counter % 2 == 0) {
        continue;
    }
    document.write("Counter is now: " + counter);
}
```

### Visual Explanation

The slide shows a loop where `continue` skips the rest of the current iteration when the counter is even.

### Explanation

`continue` skips the remaining code in the current loop iteration and moves to the next iteration. In the example, even numbers are skipped before `document.write()` runs.

### Visual/Text Diagram

```text
counter++
      ↓
counter even?
├── yes -> continue -> next loop
└── no  -> write counter
```

### Exam Tip

Use `continue` when you want to skip only the current iteration, not stop the entire loop.

### Common Mistake

Confusing `continue` with `break`: `continue` skips one iteration; `break` exits the loop.

---

## Page 38 — JavaScript Dialog Boxes

### Original Slide Content

The slide shows JavaScript dialog boxes:

- `alert()`
  - Shows a dialog box with a message.
- `confirm()`
  - Shows a dialog box and returns a boolean.
- `prompt()`
  - Shows a dialog box and returns a string.
- Line breaks in dialog boxes can be created using `\n`.
- Note: Even if your user enters a number in the prompt dialog box, this will be considered as a string. You must convert it to a number using `parseInt()` or `parseFloat()` before manipulating it with number methods.

### Code from Slide — alert

```javascript
alert("Your Message Goes Here!");
```

### Code from Slide — confirm

```javascript
let answer = confirm("Are you sure you want to close....");
if (answer == true) {
    alert("You said OK");
} else {
    alert("You said Cancel");
}
```

### Code from Slide — prompt

```javascript
let answer = prompt("Enter something here", "Nothing will do");
alert("You said: " + answer);
```

### Code from Slide — line break

```javascript
alert("Hello,\nWho are you?");
```

### Visual Explanation

The slide shows examples of the three browser dialog boxes and notes their return values.

### Explanation

| Dialog | Purpose | Return Value |
|---|---|---|
| `alert()` | Display message | No useful input return |
| `confirm()` | Ask OK/Cancel | Boolean: `true` or `false` |
| `prompt()` | Ask text input | String |

### Exam Tip

Dialog box differences are likely short-answer questions. Focus on return values.

### Common Mistake

Treating `prompt()` input as a number without conversion.

---

## Page 39 — Review Questions

### Original Slide Content

- Question 1 - Which HTML tags are used to hold JavaScript code?
- Question 2 - In which parts of the HTML document should the scripts go?
- Question 3 - Would it make sense to have a string holding HTML code as a parameter for the `write()` method?
- Question 4 - Would it make sense to have a string holding HTML code as a parameter for the `alert()` method?
- Question 5 - What are the 3 JavaScript dialog boxes and what are their differences?

### Visual Explanation

The slide lists review questions for checking understanding.

### Explanation and Short Answers

1. JavaScript code is held inside `<script>` and `</script>` tags.
2. Scripts can be placed in the `<head>` or `<body>`, but functions are often placed in the `<head>` so they are loaded before being called.
3. Yes, because `document.write()` writes HTML/text into the document, so HTML code can be interpreted as page content.
4. No, not in the same way. `alert()` displays plain text in a dialog box; it does not render HTML tags as page elements.
5. The three dialog boxes are `alert()`, `confirm()`, and `prompt()`.

### Exam Tip

These are direct exam-style questions. Learn the exact differences between `write()` and `alert()`.

### Common Mistake

Thinking `alert("<h1>Hello</h1>")` will display a heading. It shows the text, not rendered HTML.

---

## Page 40 — JavaScript Objects

### Original Slide Content

- In JavaScript, an object is data, with properties and methods.
- When you declare a JavaScript variable like this:

```javascript
let message = "Hello World!";
```

- You create a JavaScript String object.
- The String object has a built-in property called `length`.
- For the string above, `length` has the value 12.
- The String object also have several built-in methods.

### Visual Explanation

The slide shows a string variable example and explains it as a String object with properties and methods.

### Explanation

JavaScript provides built-in object behavior for strings. A string can use properties like `length` and methods like `toUpperCase()`.

### Visual/Text Diagram

```text
String object: "Hello World!"
├── property: length -> 12
└── methods: toUpperCase(), toLowerCase(), etc.
```

### Exam Tip

For object definition: **object = data with properties and methods**.

### Common Mistake

Calling `length` a method. It is a property, so use `message.length`, not `message.length()`.

---

## Page 41 — Accessing Object Properties

### Original Slide Content

Syntax:

```javascript
objectName.propertyName
```

Example:

```javascript
let message = "Hello world!";
let messageLength = message.length; //12
```

### Visual Explanation

The slide shows dot notation for property access.

### Explanation

Properties are accessed using dot notation. `message.length` returns the number of characters in the string.

### Exam Tip

For properties, remember: **no parentheses**.

### Common Mistake

Writing `message.length()` for a property. That is incorrect.

---

## Page 42 — Accessing Object Methods

### Original Slide Content

Syntax:

```javascript
objectName.methodName()
```

Example:

```javascript
let message = "Hello world!";
let newMessage = message.toUpperCase(); //HELLO WORLD!
```

### Visual Explanation

The slide shows dot notation with parentheses for method calls.

### Explanation

A method is an action/function attached to an object. Methods use parentheses because they are executed.

### Exam Tip

Property: `object.property`; method: `object.method()`.

### Common Mistake

Forgetting parentheses on methods such as `toUpperCase()`.

---

## Page 43 — JavaScript Arrays

### Original Slide Content

An array is a special variable, which can hold more than one value at a time. There are various ways of creating an array:

1. Regular

```javascript
const questions = [];
questions[0] = "1 + 1";
questions[1] = "2 x 3";
questions[2] = "6 - 4";
```

2. Literal

```javascript
const questions = [ "1 + 1", "2 x 3", "6 - 4" ];
```

### Visual Explanation

The slide shows two ways of creating arrays: create empty array then assign indexes, or use array literal.

### Explanation

An array stores multiple values in one variable. Array indexes start at `0`.

### Visual/Text Diagram

```text
questions
├── [0] -> "1 + 1"
├── [1] -> "2 x 3"
└── [2] -> "6 - 4"
```

### Exam Tip

Remember: first array element is index `0`, not `1`.

### Common Mistake

Using `questions[1]` to access the first item. The first item is `questions[0]`.

---

## Page 44 — Array Properties

### Original Slide Content

| Property | Description |
|---|---|
| `constructor` | Returns the function that created the Array object's prototype |
| `length` | Sets or returns the number of elements in an array |
| `prototype` | Allows you to add properties and methods to an Array object |

### Visual Explanation

The slide shows a table of array properties.

### Explanation

Array properties provide information or allow extension of array behavior. The most commonly used property is `length`.

### Exam Tip

For arrays, `length` is the must-know property.

### Common Mistake

Thinking `length` returns the last index. It returns the number of elements. Last index is `length - 1`.

---

## Pages 45-55 — Array Methods

The original lecture uses multiple slides to show array methods with descriptions and code examples. The method order below follows the PDF slide order.

---

## Page 45 — Array Methods: `concat()` and `every()`

### Original Slide Content

| Method | Description |
|---|---|
| `concat()` | Joins two or more arrays, and returns a copy of the joined arrays |
| `every()` | Checks if every element in an array passes a test and returns a boolean value |

### Code from Slide — `concat()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
let vegetables = ["Carrot", "Potato"];
let fruitsAndVeg = fruits.concat(vegetables);
// fruitsAndVeg is equal to ["Apple", "Banana", "Mango", "Carrot", "Potato"]
```

### Code from Slide — `every()`

```javascript
function containsFiveLetters(currentValue) {
    return currentValue.length == 5;
}

let fruit1 = ["Apple", "Banana", "Mango"];
let fruit2 = ["Apple", "Mango"];

console.log(fruit1.every(containsFiveLetters));
// outputs: false
console.log(fruit2.every(containsFiveLetters));
// outputs: true
```

### Explanation

`concat()` combines arrays without changing the original arrays. `every()` returns `true` only if every item passes the test.

### Exam Tip

For `every()`, remember: **all elements must pass**.

### Common Mistake

Thinking `concat()` modifies the original array. It returns a new joined array.

---

## Page 46 — Array Methods: `fill()` and `filter()`

### Original Slide Content

| Method | Description |
|---|---|
| `fill()` | Fills the elements in an array with a static value from an optional start index to an optional end index |
| `filter()` | Creates a new array with every element in an array that pass a test |

### Code from Slide — `fill()`

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.fill("Strawberry", 2, 4);
// fills with "Strawberry" from position 2 until position 4
console.log(fruits);
// outputs: ["Apple", "Banana", "Strawberry", "Strawberry"]
```

### Code from Slide — `filter()`

```javascript
function containsFiveLetters(currentValue) {
    return currentValue.length == 5;
}

let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
let result = fruits.filter(containsFiveLetters);
// result is equal to ["Apple", "Mango"]
```

### Explanation

`fill()` replaces array elements. `filter()` creates a new array containing only the elements that pass a condition.

### Exam Tip

`filter()` may return fewer elements than the original array.

### Common Mistake

Confusing `filter()` with `find()`. `filter()` returns an array; `find()` returns one value.

---

## Page 47 — Array Methods: `find()` and `findIndex()`

### Original Slide Content

| Method | Description |
|---|---|
| `find()` | Returns the value of the first element in an array that passes a test |
| `findIndex()` | Returns the index of the first element in an array that passes a test, otherwise returns `-1` |

### Code from Slide — `find()`

```javascript
function containsSixLetters(currentValue) {
    return currentValue.length == 6;
}

let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
let result = fruits.find(containsSixLetters);
// result is equal to "Banana"
```

### Code from Slide — `findIndex()`

```javascript
function containsSixLetters(currentValue) {
    return currentValue.length == 6;
}

let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
let result = fruits.findIndex(containsSixLetters);
// result is equal to 1
```

### Explanation

`find()` returns the first matching value. `findIndex()` returns the first matching index.

### Exam Tip

Know the difference: value vs index.

### Common Mistake

Expecting `find()` to return all matching values. It returns only the first match.

---

## Page 48 — Array Methods: `forEach()`, `indexOf()`, and `isArray()`

### Original Slide Content

| Method | Description |
|---|---|
| `forEach()` | Calls a function for each array element |
| `indexOf()` | Searches the array for an element and returns its position |
| `isArray()` | Checks whether an object is an array |

### Code from Slide — `forEach()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(element) { console.log(element); });

// outputs: "Apple"
// outputs: "Banana"
// outputs: "Mango"
```

### Code from Slide — `indexOf()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
let pos = fruits.indexOf("Banana");
// pos is equal to 1
```

### Code from Slide — `isArray()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(Array.isArray(fruits));
```

### Explanation

`forEach()` loops through each array item. `indexOf()` finds the first position of an item. `Array.isArray()` verifies whether a value is an array.

### Exam Tip

`indexOf()` returns `-1` if the item is not found.

### Common Mistake

Using `isArray()` directly instead of `Array.isArray()`.

---

## Page 49 — Array Methods: `join()`, `lastIndexOf()`, and `map()`

### Original Slide Content

| Method | Description |
|---|---|
| `join()` | Joins all elements of an array into a string and takes a separator as option |
| `lastIndexOf()` | Searches the array for an element, starting at the end, and returns its position |
| `map()` | Creates a new array with the result of calling a function for each array element |

### Code from Slide — `join()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
let myString = fruits.join(" - ");
// myString is equal to Apple - Banana - Mango
```

### Code from Slide — `lastIndexOf()`

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange", "Banana", "Strawberry"];
let pos = fruits.lastIndexOf("Banana");
// pos is equal to 4
```

### Code from Slide — `map()`

```javascript
let array1 = [1, 4, 9, 16];

function multiplyArray(item) {
    return item * 2;
}

let map1 = array1.map(multiplyArray);
console.log(map1);
// outputs: Array [2, 8, 18, 32]
```

### Explanation

`join()` converts array items to a string. `lastIndexOf()` searches from the end. `map()` transforms each element and returns a new array.

### Exam Tip

`map()` keeps the same number of elements but changes their values.

### Common Mistake

Using `map()` when you want to remove items. Use `filter()` for that.

---

## Page 50 — Array Methods: `pop()` and `push()`

### Original Slide Content

| Method | Description |
|---|---|
| `pop()` | Removes the last element of an array, and returns that element |
| `push()` | Adds new elements to the end of an array, and returns the new length |

### Code from Slide — `pop()`

```javascript
var fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.pop());
// outputs: "Mango"

console.log(fruits);
// outputs: Array ["Apple", "Banana"]

fruits.pop();

console.log(fruits);
// outputs: Array ["Apple"]
```

### Code from Slide — `push()`

```javascript
var fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // ["Apple", "Banana", "Mango", "Orange"]
```

### Explanation

`pop()` removes from the end. `push()` adds to the end.

### Visual/Text Diagram

```text
push -> add to end
pop  -> remove from end
```

### Exam Tip

For stack-like behavior, remember `push()` and `pop()` work at the end of the array.

### Common Mistake

Thinking `pop()` removes the first element. It removes the last element.

---

## Page 51 — Array Methods: `reduce()`

### Original Slide Content

`reduce()` reduces the values of an array to a single value going left-to-right.

### Code from Slide

```javascript
let array1 = [1, 2, 3, 4];

function addUp(total, num) {
    return (total + num);
}

// 1 + 2 + 3 + 4
console.log(array1.reduce(addUp));
// outputs: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(addUp, 5));
// outputs: 15
```

### Visual Explanation

The slide shows reducing multiple values into one total.

### Explanation

`reduce()` processes array values into a single result. The second argument can be used as an initial value.

### Exam Tip

`reduce()` is used when the final result is one value, such as a sum.

### Common Mistake

Thinking `reduce()` returns an array. It usually returns a single value.

---

## Page 52 — Array Methods: `reduceRight()` and `reverse()`

### Original Slide Content

| Method | Description |
|---|---|
| `reduceRight()` | Reduces the values of an array to a single value going right-to-left |
| `reverse()` | Reverses the order of the elements in an array. The original array is modified |

### Code from Slide — `reduceRight()`

```javascript
let array1 = [1, 2, 3, 4];

function takeAway(total, num) {
    return (total - num);
}

// 4 - 3 - 2 - 1
console.log(array1.reduceRight(takeAway));
// outputs: -2

// 5 - 4 - 3 - 2 - 1
console.log(array1.reduceRight(takeAway, 5));
// outputs: -5
```

### Code from Slide — `reverse()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
fruits.reverse();
console.log(fruits);
// outputs: Array ["Mango", "Banana", "Apple"]
```

### Explanation

`reduceRight()` works like `reduce()` but starts from the right side. `reverse()` changes the original array order.

### Exam Tip

For `reverse()`, mention that the original array is modified.

### Common Mistake

Assuming `reverse()` returns a new array without changing the original.

---

## Page 53 — Array Methods: `shift()` and `slice()`

### Original Slide Content

| Method | Description |
|---|---|
| `shift()` | Removes the first element of an array, and returns that element |
| `slice()` | Selects a part of an array and returns the new array. The original array is not modified |

### Code from Slide — `shift()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
let firstElement = fruits.shift();

console.log(fruits);
// outputs: Array ["Banana", "Mango"]

console.log(firstElement);
// outputs: "Apple"
```

### Code from Slide — `slice()`

```javascript
let fruits = ["Apple", "Banana", "Mango", "Banana", "Strawberry"];

console.log(fruits.slice(2));
// outputs: Array ["Mango", "Banana", "Strawberry"]

console.log(fruits.slice(2, 4));
// outputs: Array ["Mango", "Banana"]

console.log(fruits.slice(1, 5));
// outputs: Array ["Banana", "Mango", "Banana", "Strawberry"]
```

### Explanation

`shift()` removes from the beginning. `slice()` copies part of an array into a new array.

### Exam Tip

`slice(start, end)` does not include the end index.

### Common Mistake

Confusing `slice()` with `splice()`. `slice()` does not modify the original array.

---

## Page 54 — Array Methods: `sort()` and `splice()`

### Original Slide Content

| Method | Description |
|---|---|
| `sort()` | Sorts the elements of an array and returns the sorted array. Default sort order is ascending and converts elements to strings, then compares UTF-16 code unit values |
| `splice()` | Adds/removes elements from an array |

### Code from Slide — `sort()`

```javascript
var months = ["March", "Jan", "Feb", "Dec"];
months.sort();
let js = months;
// outputs: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
let js = array1;
// outputs: Array [1, 100000, 21, 30, 4]
```

### Code from Slide — `splice()`

```javascript
var months = ["Jan", "March", "April", "June"];
let js = months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// outputs: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// outputs: Array ["Jan", "Feb", "March", "April", "May"]
```

### Explanation

`sort()` sorts alphabetically by default, even for numbers, unless a compare function is used. `splice()` changes the original array by inserting, removing, or replacing elements.

### Exam Tip

Mention that default numeric `sort()` can produce unexpected order because values are compared as strings.

### Common Mistake

Expecting `[1, 30, 4, 21, 100000].sort()` to sort numerically by default.

---

## Page 55 — Array Methods: `unshift()`, `valueOf()`, and `toString()`

### Original Slide Content

| Method | Description |
|---|---|
| `unshift()` | Adds new elements to the beginning of an array, and returns the new length |
| `valueOf()` | Returns the primitive value of an array |
| `toString()` | Converts an array to a string, and returns the result |

### Code from Slide — `unshift()`

```javascript
var fruits = ["Apple", "Banana", "Mango"];

let js = fruits.unshift("Strawberry", "Orange");
// outputs: 5

console.log(fruits);
// outputs: Array ["Strawberry", "Orange", "Apple", "Banana", "Mango"]
```

### Code from Slide — `valueOf()`

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruits_valueOf = fruits.valueOf();
let js = fruits_valueOf;
// outputs: Array ["Banana", "Orange", "Apple", "Mango"]
```

### Code from Slide — `toString()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
let myString = fruits.toString();
// myString is equal to Apple,Banana,Mango
```

### Explanation

`unshift()` adds items to the start of the array. `valueOf()` returns the array's primitive value representation. `toString()` creates a comma-separated string.

### Exam Tip

`push()` adds to the end; `unshift()` adds to the beginning.

### Common Mistake

Confusing `shift()` and `unshift()`: `shift()` removes first; `unshift()` adds first.

---

## Page 56 — Functions

### Original Slide Content

- A function is a collection of JavaScript statements.
- These statements usually have a single purpose, such as performing a complex calculation or verifying the data entered into an HTML form.
- Functions can be passed copies of objects or variables to work with.
- This is done in the parameter list.
- JavaScript functions can be placed inside script tags anywhere in the document.
- However, they should be placed in the head of the document to guarantee they are loaded before being called from script statements in the body of the document.

### Visual Explanation

No major visual content.

### Explanation

A function groups reusable code. It can accept inputs through parameters and perform a task.

### Visual/Text Diagram

```text
Input values -> function -> result/action
```

### Exam Tip

For function definition, mention: **collection of JavaScript statements with a single purpose**.

### Common Mistake

Calling a function before it is loaded or defined, especially when scripts are placed incorrectly.

---

## Page 57 — Function Syntax

### Original Slide Content

The slide shows function syntax and an example function that finds the maximum value of two numbers.

### Code from Slide — Syntax

```javascript
function functionName(parameter_1, parameter_2, ..., parameter_n) {
    statement1;
    statement2;
    ...
    statementn;
}
```

### Code from Slide — Example

```javascript
function getMax(n1, n2) {
    if (n1 < n2) {
        return n2;
    } else {
        return n1;
    }
}
```

### Visual Explanation

The slide shows the general function format and a practical function that compares two numbers.

### Explanation

`functionName` is the identifier of the function. Parameters are input values. `return` sends a result back to the caller.

### Exam Tip

A function that returns a value must use `return`.

### Common Mistake

Forgetting to call the function after declaring it.

---

## Page 58 — Function Example

### Original Slide Content

The slide shows an HTML page using a JavaScript function to validate a student username.

### Code from Slide — Basic Function Call Example

```html
<html>
<head>
    <script>
        function getMax(n1, n2) {
            if (n1 < n2) {
                return n2;
            } else {
                return n1;
            }
        }
    </script>
</head>
<body>
    <script>
        document.write("<p>");
        document.write("The largest number of 5 or 6 is " + getMax(5, 6));
        document.write("</p>");
    </script>
</body>
</html>
```

### Code from Slide — Form Validation Function

```html
<html>
<head>
    <script>
        function checkUserName(form) {
            if (form.reg.value.length != 8) {
                alert("You have not entered an eight character string");
                return false;
            } else {
                alert("This is correct");
                return true;
            }
        }
    </script>
</head>
<body>
    <p>Please enter your student username: <input type="text" name="reg" /></p>
    <input type="button" onclick="checkUserName(form);" value="Check validity" />
</body>
</html>
```

### Visual Explanation

The slide contains two HTML/JavaScript examples. The first writes the maximum number result to the page. The second checks if a username has exactly 8 characters.

### Explanation

The validation example checks the `length` of the text input. If it is not 8, it alerts an error and returns `false`; otherwise it alerts success and returns `true`.

### Exam Tip

Form validation questions often require checking field values and returning `true` or `false`.

### Common Mistake

Using `length()` instead of `length` for string length.

---

## Page 59 — Global Functions

### Original Slide Content

The JavaScript language comes with global properties and functions that can be used with all the built-in JavaScript objects:

| Global Function | Description |
|---|---|
| `decodeURI()` | Decodes a URI |
| `decodeURIComponent()` | Decodes a URI component |
| `encodeURI()` | Encodes a URI |
| `encodeURIComponent()` | Encodes a URI component |
| `eval()` | Evaluates a string and executes it as if it was script code |
| `isFinite()` | Determines whether a value is a finite, legal number |
| `isNaN()` | Determines whether a value is not a number (NaN) |
| `Number()` | Converts an object's value to a number |
| `parseFloat()` | Parses a string and returns a floating point number |
| `parseInt()` | Parses a string and returns an integer |
| `String()` | Converts an object's value to a string |

### Code from Slide — `eval()` Example

```javascript
var math1 = 140;
var math3 = 30;
var math = "+";
match = "switch" + math;
alert("You win £" + eval(match)); // alert("You win £30");
```

### Visual Explanation

The slide shows a table of global functions with descriptions and an example under `eval()`.

### Explanation

Global functions can be called directly without needing an object name. In practical modern development, `parseInt()`, `parseFloat()`, `Number()`, `String()`, `isNaN()`, and `isFinite()` are common. `eval()` should generally be avoided because it can execute arbitrary code and create security risks.

### Exam Tip

For conversion questions, remember `parseInt()`, `parseFloat()`, `Number()`, and `String()`.

### Common Mistake

Using `eval()` unnecessarily. It is powerful but unsafe and rarely recommended.

---

## Page 60 — Thank You

### Original Slide Content

Thank You!

### Visual Explanation

The final slide displays a closing message.

### Explanation

This marks the end of Lecture 03.

### Exam Tip

No technical exam content on this slide.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

Lecture 03 introduces JavaScript as the interactivity layer of web development. HTML provides page content, CSS controls presentation, and JavaScript adds behavior. JavaScript can validate forms, change HTML content, adjust colors/images, open browser windows, build calculators and games, and interact with IoT systems.

The lecture explains how JavaScript is embedded in HTML using `<script>` tags. It introduces syntax basics such as comments and whitespace, then explains reserved keywords, identifiers, variables, and JavaScript data types. Variables can be declared using `var`, `let`, or `const`. The modern rule is to prefer `const`, use `let` when reassignment is needed, and avoid `var` unless old browser support is required.

JavaScript primitive types discussed are String, Number, Boolean, Null, and Undefined. The lecture also introduces objects such as Date, Array, and Function. Strings have properties and methods such as `length`, `toUpperCase()`, `toLowerCase()`, `charAt()`, `substr()`, `substring()`, and `indexOf()`.

Control flow is covered using conditional statements: `if`, `if...else`, `if...else if...else`, and `switch`. The lecture stresses that condition order matters in `else if` chains. Operators are covered through comparison operators like `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`, and logical operators like `&&`, `||`, and `!`.

Looping is explained through `for`, `for/in`, `while`, and `do...while`. The lecture also explains `break` and `continue`. `break` exits a loop, while `continue` skips the current iteration and moves to the next one.

JavaScript dialog boxes include `alert()`, `confirm()`, and `prompt()`. `alert()` displays a message, `confirm()` returns a Boolean, and `prompt()` returns a string. Prompt input must be converted before numeric operations.

The final part covers JavaScript objects, arrays, array properties, array methods, functions, and global functions. Arrays store multiple values and support many methods such as `concat()`, `every()`, `fill()`, `filter()`, `find()`, `findIndex()`, `forEach()`, `indexOf()`, `isArray()`, `join()`, `lastIndexOf()`, `map()`, `pop()`, `push()`, `reduce()`, `reduceRight()`, `reverse()`, `shift()`, `slice()`, `sort()`, `splice()`, `unshift()`, `valueOf()`, and `toString()`. Functions group reusable code and can accept parameters and return values.

---

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| JavaScript | Programming language used to add interactivity to web pages | Form validation |
| HTML | Markup language for web content | Headings, paragraphs |
| CSS | Style language for page presentation | Colors, fonts |
| `<script>` tag | HTML tag used to hold JavaScript code | `<script>alert("Hi")</script>` |
| Variable | Container for storing data | `let age = 20;` |
| `var` | Function/global-scoped variable declaration | `var x = 5;` |
| `let` | Block-scoped variable declaration that can be reassigned | `let count = 0;` |
| `const` | Block-scoped variable declaration that cannot be reassigned | `const PI = 3.14;` |
| Identifier | Name given to variables/functions | `myVariable` |
| String | Text value | `"Hello"` |
| Number | Numeric value | `100`, `0.5` |
| Boolean | True/false value | `true` |
| Null | Intentional absence of value | `let x = null;` |
| Undefined | No value assigned | `let x;` |
| Object | Data with properties and methods | String object |
| Property | Stored information on an object | `message.length` |
| Method | Function attached to an object | `message.toUpperCase()` |
| Array | Special variable holding multiple values | `["Apple", "Banana"]` |
| Function | Collection of JavaScript statements with a purpose | `function getMax(a,b){...}` |
| `if` | Runs code if condition is true | `if(age < 16){...}` |
| `switch` | Selects one block from many cases | `switch(day){...}` |
| `for` loop | Repeats code known number of times | `for(let i=0;i<10;i++)` |
| `while` loop | Repeats while condition is true | `while(x < 10)` |
| `do...while` loop | Runs once, then repeats while condition is true | `do {...} while(valid != true);` |
| `break` | Exits loop/switch | `break;` |
| `continue` | Skips current loop iteration | `continue;` |
| `alert()` | Shows message dialog | `alert("Hi")` |
| `confirm()` | Shows OK/Cancel dialog and returns Boolean | `confirm("Continue?")` |
| `prompt()` | Shows input dialog and returns string | `prompt("Enter age")` |
| `parseInt()` | Converts string to integer | `parseInt("25")` |
| `parseFloat()` | Converts string to floating number | `parseFloat("2.5")` |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| HTML/CSS/JavaScript roles | HTML content, CSS presentation, JavaScript interactivity | 03 |
| JavaScript uses | Validation, dynamic content, forms, windows, programs | 04-05 |
| Script tag | JavaScript goes inside `<script>` tags | 06 |
| Comments | `//` and `/* ... */` | 07 |
| Reserved keywords | Cannot use as identifiers | 08 |
| Variables | `var`, `let`, `const` | 09-13 |
| Identifiers | Cannot start with number; cannot be reserved word | 14 |
| Primitive types | String, Number, Boolean, Null, Undefined | 15 |
| Strings | Quotes, escaping, string methods | 16-17 |
| Numbers | No normal integer/float split | 18 |
| Null vs Undefined | Null assigned no-value; undefined not assigned | 19 |
| Conditionals | `if`, `else`, `else if`, `switch` | 21-27 |
| Comparison operators | `==` vs `===` | 28 |
| Logical operators | `&&`, `||`, `!` | 29 |
| Loops | `for`, `while`, `do...while` | 30-35 |
| Break/Continue | `break` exits, `continue` skips iteration | 36-37 |
| Dialog boxes | `alert`, `confirm`, `prompt` | 38 |
| Objects | Data with properties and methods | 40-42 |
| Arrays | Multiple values in one variable | 43-55 |
| Functions | Reusable statements, parameters, return | 56-58 |
| Global functions | Conversion and utility functions | 59 |

---

# Important Code Snippets

## Page 06 — Script Tag

```html
<script>
    document.write("<p>Script tags can be placed in the head of an HTML document.</p>");
</script>
```

**Explanation:** JavaScript code is placed inside `<script>` tags.

## Page 14 — Valid Identifiers

```javascript
const myAwesomeVariable = "a";
const myAwesomeVariable2 = "b";
const my_awesome_variable = "c";
const $my_AwesomeVariable = "d";
const _my_awesome_variable_$ = "e";
```

**Explanation:** Valid identifiers can use letters, numbers, `_`, and `$`, but cannot start with a number.

## Page 17 — String Methods

```javascript
result = welcome.toUpperCase();
result = welcome.toLowerCase();
result = welcome.charAt(0);
result = welcome.substr(6, 5);
result = welcome.substring(6, 11);
result = welcome.indexOf("World", 0);
```

**Explanation:** String methods transform or search string values.

## Page 22-24 — Conditional Statements

```javascript
if (age < 12) {
    entry = "free";
} else if (age < 18) {
    entry = "£10";
} else {
    entry = "£20";
}
```

**Explanation:** Selects one result based on age range.

## Page 26 — Switch

```javascript
switch (n) {
    case 1:
        break;
    case 2:
        break;
    default:
}
```

**Explanation:** Selects a branch based on the value of `n`.

## Page 31 — For Loop

```javascript
for (let counter = 0; counter < 10; counter++) {
    document.write("Counter is: " + counter);
}
```

**Explanation:** Repeats a known number of times.

## Page 35 — Do While Validation

```javascript
do {
    userNumber1 = parseInt(prompt("Please choose a number between 1 and 59"));
} while (numValid != true);
```

**Explanation:** Repeats input request until valid.

## Page 38 — Dialog Boxes

```javascript
alert("Your Message Goes Here!");
confirm("Are you sure?");
prompt("Enter something here");
```

**Explanation:** Browser dialog boxes for message, confirmation, and input.

## Page 43 — Array Literal

```javascript
const questions = [ "1 + 1", "2 x 3", "6 - 4" ];
```

**Explanation:** Creates an array with multiple values.

## Page 57 — Function

```javascript
function getMax(n1, n2) {
    if (n1 < n2) {
        return n2;
    } else {
        return n1;
    }
}
```

**Explanation:** Returns the larger of two numbers.

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 03 | HTML/CSS/JavaScript roles | Shows JavaScript as the interactivity layer |
| 06 | HTML document with scripts | Scripts can be placed in head/body |
| 07 | Comment and whitespace code | Shows readable syntax practices |
| 14 | Identifier examples | Shows valid variable names |
| 16-17 | String code/output | Shows string creation and string methods |
| 22-25 | Conditional code examples | Shows decision-making and importance of order |
| 26-27 | Switch examples | Shows multi-branch selection |
| 28 | Comparison operator table | Shows operator outputs |
| 29 | Logical operator table | Shows boolean logic |
| 31-35 | Loop syntax/examples | Shows repeated execution |
| 36-37 | Break/continue examples | Shows loop control |
| 38 | Dialog box examples | Shows alert, confirm, prompt |
| 40-42 | Object property/method examples | Shows `length` and `toUpperCase()` |
| 43-55 | Array method tables | Shows common array operations |
| 57-58 | Function examples | Shows function declaration and usage |
| 59 | Global function table | Shows built-in utility functions |

---

# Likely Exam Questions and Short Answers

## Question 1
What is the role of JavaScript in web technologies?

**Expected Answer:** JavaScript adds interactivity and behavior to web pages. HTML provides content, CSS provides presentation, and JavaScript handles dynamic actions such as validation, calculations, and page updates.

## Question 2
Which HTML tags are used to hold JavaScript code?

**Expected Answer:** JavaScript code is placed inside `<script>` and `</script>` tags.

## Question 3
Differentiate `var`, `let`, and `const`.

**Expected Answer:** `var` is function/global-scoped and hoisted. `let` is block-scoped and can be reassigned. `const` is block-scoped, must be initialized, and cannot be reassigned.

## Question 4
What is the difference between `==` and `===`?

**Expected Answer:** `==` checks equality with possible type conversion. `===` checks both value and type, so it is strict equality.

## Question 5
Explain `null` and `undefined`.

**Expected Answer:** `null` represents an intentional absence of value. `undefined` means a value has not been assigned.

## Question 6
Write an `if...else if...else` statement for ticket pricing.

**Expected Answer:**

```javascript
if (age < 12) {
    entry = "free";
} else if (age < 18) {
    entry = "£10";
} else {
    entry = "£20";
}
```

## Question 7
Why are the two conditions on Page 25 not equivalent?

**Expected Answer:** They are not equivalent because `else if` conditions are checked in order. If `age < 18` is checked first, it catches all ages below 18, so `age < 12` never executes.

## Question 8
What is the purpose of `break` in a switch statement?

**Expected Answer:** `break` stops execution of the current case and exits the switch. Without it, execution can fall through to later cases.

## Question 9
Differentiate `while` and `do...while` loops.

**Expected Answer:** A `while` loop checks the condition before running, so it may run zero times. A `do...while` loop runs the code once before checking the condition, so it always runs at least once.

## Question 10
Differentiate `break` and `continue`.

**Expected Answer:** `break` exits the loop completely. `continue` skips the current iteration and moves to the next iteration.

## Question 11
Name the three JavaScript dialog boxes and their return values.

**Expected Answer:** `alert()` displays a message, `confirm()` returns a Boolean, and `prompt()` returns a string.

## Question 12
What is the difference between an object property and object method?

**Expected Answer:** A property stores data and is accessed without parentheses, such as `message.length`. A method performs an action and is called with parentheses, such as `message.toUpperCase()`.

## Question 13
Write two ways to create an array.

**Expected Answer:**

```javascript
const questions = [];
questions[0] = "1 + 1";
```

```javascript
const questions = ["1 + 1", "2 x 3", "6 - 4"];
```

## Question 14
Differentiate `push()`, `pop()`, `shift()`, and `unshift()`.

**Expected Answer:** `push()` adds to the end, `pop()` removes from the end, `shift()` removes from the beginning, and `unshift()` adds to the beginning.

## Question 15
Write a function to return the larger of two numbers.

**Expected Answer:**

```javascript
function getMax(n1, n2) {
    if (n1 < n2) {
        return n2;
    } else {
        return n1;
    }
}
```

---

# Common Mistakes to Avoid

- Saying HTML, CSS, and JavaScript do the same job.
- Forgetting that JavaScript is mainly for interactivity.
- Writing JavaScript without `<script>` tags inside HTML.
- Confusing JavaScript and Java.
- Using reserved keywords as variable names.
- Starting identifiers with numbers.
- Saying `var` is block-scoped.
- Saying `const` arrays can never be modified.
- Confusing `null` and `undefined`.
- Using `length()` instead of `length`.
- Confusing `substr(start, length)` with `substring(start, end)`.
- Using `==` when strict equality `===` is required.
- Forgetting `break` in `switch` statements.
- Ordering `else if` conditions incorrectly.
- Creating infinite loops by forgetting to update loop variables.
- Forgetting the semicolon after `do...while` condition.
- Treating `prompt()` input as a number without conversion.
- Confusing `break` and `continue`.
- Confusing `filter()` and `find()`.
- Confusing `slice()` and `splice()`.
- Expecting `sort()` to sort numbers numerically by default.

---

# Final One-Page Revision Notes

## Core Web Roles

```text
HTML       = content
CSS        = presentation
JavaScript = interactivity
```

## JavaScript Placement

```html
<script>
    // JavaScript code here
</script>
```

Scripts can be placed in `<head>` or `<body>`. Functions are commonly placed in `<head>` so they are loaded before being called.

## Variables

| Keyword | Scope | Reassign? | Use |
|---|---|---|---|
| `var` | Function/global | Yes | Old code |
| `let` | Block | Yes | Changing values |
| `const` | Block | No | Default choice |

## Data Types

```text
Primitive: String, Number, Boolean, Null, Undefined
Objects: Date, Array, Function
```

## Conditions

```javascript
if (condition) {
} else if (condition2) {
} else {
}
```

Order matters. Put specific conditions first.

## Operators

| Operator | Meaning |
|---|---|
| `==` | Equal value |
| `===` | Equal value and type |
| `!=` | Not equal value |
| `!==` | Not equal value or type |
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

## Loops

| Loop | Key Point |
|---|---|
| `for` | Known repetitions |
| `while` | May run zero times |
| `do...while` | Runs at least once |

## Loop Control

```text
break    -> exits loop
continue -> skips current iteration
```

## Dialog Boxes

| Function | Purpose | Return |
|---|---|---|
| `alert()` | Message | none/useful display only |
| `confirm()` | OK/Cancel | Boolean |
| `prompt()` | Input | String |

## Objects

```text
property -> objectName.propertyName
method   -> objectName.methodName()
```

Example:

```javascript
message.length;
message.toUpperCase();
```

## Arrays

```javascript
const questions = ["1 + 1", "2 x 3", "6 - 4"];
```

Important methods:

| Method | Meaning |
|---|---|
| `push()` | Add to end |
| `pop()` | Remove from end |
| `shift()` | Remove from beginning |
| `unshift()` | Add to beginning |
| `filter()` | New array with matching items |
| `find()` | First matching value |
| `findIndex()` | First matching index |
| `map()` | Transform each item |
| `reduce()` | Reduce to one value |
| `slice()` | Copy part, does not modify original |
| `splice()` | Add/remove, modifies original |
| `sort()` | Sorts, default compares as strings |

## Functions

```javascript
function getMax(n1, n2) {
    if (n1 < n2) {
        return n2;
    } else {
        return n1;
    }
}
```

## Must-Remember Exam Keywords

- Interactivity
- Client-side validation
- `<script>` tag
- Reserved keywords
- Block scope
- Function scope
- Hoisting
- Strict equality
- Properties and methods
- Array index starts at `0`
- `do...while` runs at least once
- `prompt()` returns string
- `break` exits, `continue` skips
