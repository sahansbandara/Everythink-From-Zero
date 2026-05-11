# SE2020 – Web Technologies and Mobile — Lecture 04
## Html DOM

| Field | Details |
|---|---|
| Institution | SLIIT |
| Faculty | Faculty of Computing |
| Module Code | SE2020 |
| Module Name | Web Technologies and Mobile |
| Lecture Number | Lecture 04 |
| Lecture Title | Html DOM |
| Lecturer | Mr. Aruna Ishara Gamage |
| Degree / Program | Not stated in the slide deck |
| Total PDF Pages / Slides | 18 |
| Main Topic | HTML DOM, JavaScript DOM methods, DOM style object, events, image replacement |

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Introduction to the HTML DOM](#page-02--introduction-to-the-html-dom-document-object-model)
- [Page 03 — DOM](#page-03--dom)
- [Page 04 — JavaScript and the DOM](#page-04--javascript-and-the-dom)
- [Page 05 — DOM Methods in camel case](#page-05--dom--methods--in-camel-case)
- [Page 06 — getElementById](#page-06--getelementbyid)
- [Page 07 — getElementByTagName](#page-07--getelementbytagname)
- [Page 08 — getElementByName](#page-08--getelementbyname)
- [Page 09 — getElementByClassName](#page-09--getelementbyclassname)
- [Page 10 — Changing HTML Style with the HTML DOM Style Object](#page-10--changing-html-style-with-the-html-dom-style-object)
- [Page 11 — Background properties](#page-11--background-properties)
- [Page 12 — HTML DOM Events](#page-12--html-dom-events--all-in-simple-letters)
- [Page 13 — Key Board Events](#page-13--key-board-events)
- [Page 14 — Form Events](#page-14--form-events)
- [Page 15 — onkeydown onchange](#page-15--onkeydown-onchange)
- [Page 16 — Image Replacement](#page-16--image-replacement)
- [Page 17 — A Simple Example](#page-17--a-simple-example)
- [Page 18 — Thank You](#page-18--thank-you)
- [Key Definitions](#key-definitions)
- [Important Code Snippets](#important-code-snippets)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Lecture Notes

## Page 01 — Title Page

### Original Slide Content

- SE2020 – Web Technologies and Mobile
- Lecture 04
- Html DOM
- Mr. Aruna Ishara Gamage

### Visual Explanation

The title slide shows the SLIIT logo and Faculty of Computing branding. It introduces the lecture topic as **Html DOM**, which means the lesson focuses on how JavaScript interacts with HTML documents through the Document Object Model.

### Explanation

This lecture belongs to the SE2020 Web Technologies and Mobile module. The main subject is the **HTML DOM**, the browser-created structure that represents an HTML page as objects. JavaScript uses this object structure to find, read, update, style, and react to HTML elements.

### Exam Tip

Remember the full form: **DOM = Document Object Model**. In exams, DOM usually appears in questions about JavaScript changing page content, styles, form values, and event handling.

### Common Mistake

Do not write DOM as only “HTML code”. DOM is the browser-created object representation of the HTML document.

---

## Page 02 — Introduction to the HTML DOM (Document Object Model)

### Original Slide Content

- We will only cover aspects of the DOM that we need to read/change form element values/settings, document content and document style attributes.
- The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents.
- The document can be further processed and the results of that processing can be incorporated back into the presented page. This is an overview of DOM-related materials here at W3C and around the web. (W3C)
- The HTML DOM model is constructed as a tree of Objects, created by the browser, so we can quickly find HTML elements using JavaScript.

### Visual Explanation

No major technical diagram is shown on this page. The slide contains lecture text explaining the purpose of DOM and its browser-created tree structure.

### Explanation

The **HTML DOM** is the interface between JavaScript and an HTML page. When the browser loads an HTML document, it converts the page into a tree-like object model. Each HTML element becomes an object that JavaScript can access.

Main things JavaScript can do using DOM:

- Read form values.
- Change form values or settings.
- Change document content.
- Change document style.
- Dynamically update the page after user actions.

### Visual/Text Diagram

```text
HTML Document loaded by browser
        ↓
Browser creates DOM Tree
        ↓
HTML elements become objects
        ↓
JavaScript finds objects
        ↓
JavaScript changes content, structure, style, or values
```

### Exam Tip

For a DOM definition answer, include these keywords:

- platform-neutral
- language-neutral
- dynamically access and update
- content, structure, style
- tree of objects
- created by the browser

### Common Mistake

Do not say JavaScript creates the DOM. The browser creates the DOM; JavaScript uses it.

---

## Page 03 — DOM

### Original Slide Content

- DOM

### Visual Explanation

The slide contains visual examples of a DOM tree. It shows HTML source code being represented as a tree structure. The visible tree includes a hierarchy similar to:

```text
Document
└── HTML
    ├── Head
    │   └── Title
    └── Body
        └── div
            ├── p
            ├── h1
            └── ul
                └── li
```

Another visual shows nested HTML elements and identifies **child elements** and **container elements**. For example:

- `<html>` contains `<head>` and `<body>`.
- `<head>` contains `<title>`.
- `<body>` may contain `<div>`.
- `<div>` may contain headings, paragraphs, and lists.

### Explanation

The DOM is best understood as a **family tree of HTML elements**. Parent elements contain child elements. JavaScript can move through this tree and select elements to change them.

Example:

- The document is the root.
- `<html>` is the main page element.
- `<head>` and `<body>` are children of `<html>`.
- Elements inside `<body>` are visible content objects.

### Visual/Text Diagram

```text
Document
└── html
    ├── head
    │   └── title
    └── body
        ├── div
        │   ├── h1
        │   ├── p
        │   └── ul
        │       └── li
        └── other visible elements
```

### Exam Tip

If asked to draw or explain DOM, draw it as a tree. Mention **root**, **parent**, **child**, and **element nodes**.

### Common Mistake

Do not explain DOM as a flat list. DOM is hierarchical.

---

## Page 04 — JavaScript and the DOM

### Original Slide Content

JavaScript can be used to:

- change HTML elements in the page
- change HTML attributes in the page
- change the CSS styles in the page
- react to the events in the page

In order to do that JavaScript should find element in an html page.

Finding HTML Elements:

- finding HTML elements by id
- finding HTML elements by tag name
- finding HTML elements by class name

### Visual Explanation

No major visual content. The slide introduces the relationship between JavaScript and DOM element selection.

### Explanation

JavaScript cannot change an element unless it first **finds/selects** that element from the DOM. After selecting an element, JavaScript can:

| Task | Example |
|---|---|
| Change HTML content | Change paragraph text |
| Change HTML attribute | Change image `src` |
| Change CSS style | Change text color or background color |
| React to event | Run a function when a button is clicked |

Common ways to find HTML elements:

| Selection Type | DOM Method |
|---|---|
| By ID | `getElementById()` |
| By tag name | `getElementsByTagName()` |
| By class name | `getElementsByClassName()` |

### Visual/Text Diagram

```text
User interacts with page
        ↓
JavaScript event/function runs
        ↓
JavaScript finds an HTML element
        ↓
JavaScript changes content, attribute, style, or value
        ↓
Updated result appears in browser
```

### Exam Tip

A strong answer should say: **Before JavaScript changes a page, it must select the required DOM element.**

### Common Mistake

Do not write `getElementByTagName()` as the standard method name. In JavaScript the correct method is `getElementsByTagName()` with **Elements** plural.

---

## Page 05 — DOM – Methods – in camel case

### Original Slide Content

Document Object Methods table:

| Method | Description | W3C |
|---|---|---|
| `close()` | Closes the output stream previously opened with `document.open()` | Yes |
| `getElementsByName()` | Accesses all elements with a specified name | Yes |
| `getElementById()` | Accesses the element with the specified id | Yes |
| `getElementsByClassName()` | Accesses all elements with a specified class name | Yes |
| `getElementsByTagName()` | Accesses all elements with a specified tag name | Yes |
| `open()` | Opens an output stream to collect the output from `document.write()` or `document.writeln()` | Yes |
| `write()` | Writes HTML expressions or JavaScript code to a document | Yes |
| `writeln()` | Same as `write()`, but adds a newline character after each statement | Yes |

### Visual Explanation

The slide shows a table of common `document` object methods. It emphasizes that DOM method names are written in **camel case**.

### Explanation

**Camel case** means the first word starts lowercase and later words start with uppercase letters.

Examples:

- `getElementById()`
- `getElementsByName()`
- `getElementsByClassName()`

The table groups methods into two main types:

1. **Element selection methods** — used to find elements.
2. **Document writing methods** — used to write output into the document.

### Visual/Text Diagram

```text
Document Object Methods
├── Select elements
│   ├── getElementById()
│   ├── getElementsByName()
│   ├── getElementsByClassName()
│   └── getElementsByTagName()
└── Write/open/close document stream
    ├── open()
    ├── write()
    ├── writeln()
    └── close()
```

### Exam Tip

For method-name questions, spelling matters. Use correct camel case exactly.

### Common Mistake

Writing `getelementbyid()` or `getElementByID()` is wrong in JavaScript because method names are case-sensitive.

---

## Page 06 — getElementById()

### Original Slide Content

- `getElementById()`
- Now shall we create a simple calculator to do addition, Multifaction, division and subtraction.

### Code from Slide

Code reconstructed from slide visual.

```html
<label>Enter first number</label>
<input type="text" id="num1"/>
<br>
<label>Enter second number</label>
<input type="text" id="num2"/>
<button onclick="addNumber()">+ </button>
<p id="sumValue"></p>
<script>
  function addNumber(){

    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let results=parseInt(num1)+ parseInt(num2);

    document.getElementById("sumValue").innerHTML =num1 + " + " + num2 + " = "+results;
  }
</script>
```

### Code Explanation

- `id="num1"` identifies the first input field.
- `id="num2"` identifies the second input field.
- `document.getElementById("num1").value` reads the first input value.
- `document.getElementById("num2").value` reads the second input value.
- `parseInt()` converts input text into integers.
- `innerHTML` writes the answer into the paragraph with `id="sumValue"`.
- The button calls `addNumber()` when clicked.

### Output/Result

The visual result is a **Simple Calculator** interface with:

- First number input field
- Second number input field
- Four calculator-style buttons: `+`, `−`, `×`, `÷`
- A result area labeled `Result:`

The code shown specifically implements addition using the `+` button.

### Visual Explanation

The slide links the code to a simple calculator UI. It demonstrates the practical reason for `getElementById()`: each input has a unique ID, so JavaScript can directly access exact fields.

### Explanation

`getElementById()` is used when one specific element must be selected. Since IDs should be unique in an HTML page, this method returns one element, not a list.

### Visual/Text Diagram

```text
User enters two numbers
        ↓
User clicks + button
        ↓
addNumber() function runs
        ↓
JavaScript reads num1 and num2 using getElementById()
        ↓
Values are converted using parseInt()
        ↓
Result is displayed inside sumValue paragraph
```

### Exam Tip

For practical questions, remember this pattern:

```text
document.getElementById("idName").value
```

Use `.value` for form inputs and `.innerHTML` or `.textContent` to display output.

### Common Mistake

Do not forget that values from text inputs are strings. For arithmetic, convert them using `parseInt()` or `parseFloat()`.

---

## Page 07 — getElementByTagName()

### Original Slide Content

- `getElementByTagName()`
- Now shall we change html content dynamically as follows with a button click.

> Note: The slide title says `getElementByTagName()`, but the code uses the JavaScript method `getElementsByTagName()`.

### Code from Slide

Code reconstructed from slide visual.

```html
<!-- Change color html code - getElementByTagName-->
<p>This is the First paragraph</p>
<p>This is the Second paragraph</p>
<p>This is the Third paragraph</p>
<button onclick="changeColor()">Change Text Color</button>
<script>
  function changeColor() {
    let paragraphs = document.getElementsByTagName("p");

    paragraphs[0].style.color = "pink";
    paragraphs[1].style.color = "aqua";
    paragraphs[2].style.color = "purple";
  }
</script>
```

### Code Explanation

- `document.getElementsByTagName("p")` selects all `<p>` elements.
- The selected elements are returned as a collection.
- `paragraphs[0]` means the first paragraph.
- `paragraphs[1]` means the second paragraph.
- `paragraphs[2]` means the third paragraph.
- `.style.color` changes the text color of each paragraph.

### Output/Result

The slide shows two interface states:

1. Before update:
   - “This is the First paragraph”
   - “This is the Second paragraph”
   - “This is the Third paragraph”
   - Button: “Change Text Color”

2. After update / second visual:
   - “Updated first paragraph”
   - “Updated second paragraph”
   - “Updated third paragraph”
   - Buttons: “Change Text Color” and “Change Text Content”

### Visual Explanation

The slide demonstrates that JavaScript can select multiple elements by tag name and update them dynamically after a button click.

### Explanation

`getElementsByTagName()` is useful when multiple elements have the same tag. For example, a page can have many paragraphs. This method returns all matching elements, so the programmer must access individual elements by index.

### Visual/Text Diagram

```text
All <p> elements selected
        ↓
paragraphs[0] → first paragraph
paragraphs[1] → second paragraph
paragraphs[2] → third paragraph
        ↓
Each paragraph receives a different text color
```

### Exam Tip

Write **Elements** plural when using tag name selection:

```javascript
document.getElementsByTagName("p")
```

### Common Mistake

Do not treat `getElementsByTagName()` as if it returns one element. It returns a collection, so indexing is required.

---

## Page 08 — getElementByName()

### Original Slide Content

- `getElementByName()`
- Returns a NodeList
- Mostly used for form inputs
- Access using index
- Try this code

> Note: The slide title says `getElementByName()`, but the code uses `getElementsByName()`.

### Code from Slide — Example 1: Same name text inputs

Code reconstructed from slide visual.

```html
<!-- getElementByName -->
<form>
  <input type="text" name="username" placeholder="Enter username">
  <input type="text" name="username" placeholder="Re-enter username">
  <button type="button" onclick="showName()">Show</button>
</form>
<p id="output"></p>
<script>
function showName() {
  let inputs = document.getElementsByName("username");
  document.getElementById("output").textContent = inputs[0].value;
}
</script>
```

### Code Explanation

- Two input fields use the same `name="username"`.
- `document.getElementsByName("username")` returns a NodeList of both input fields.
- `inputs[0].value` reads the first input field only.
- The result is displayed in the paragraph with `id="output"`.

### Code from Slide — Example 2: Radio button gender selection

Code reconstructed from slide visual.

```html
<h3>Select Gender</h3>

<input type="radio" name="gender" value="Male"> Male
<input type="radio" name="gender" value="Female"> Female

<br><br>
<button onclick="showGender()">Show Gender</button>

<p id="result"></p>
```

```javascript
function showGender() {
  let gender = document.getElementsByName("gender");

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      document.getElementById("result").textContent =
        "Selected: " + gender[i].value;
    }
  }
}
```

### Code Explanation

- Both radio buttons share the same `name="gender"`.
- This groups the radio buttons together.
- `getElementsByName("gender")` returns all radio buttons in that group.
- A `for` loop checks which radio button is selected.
- `.checked` is used to test selected status.
- `.value` returns the selected value, such as `Male` or `Female`.

### Visual Explanation

The slide is split into two examples. The left example shows using a shared name for text inputs. The right example shows using a shared name for radio buttons.

### Explanation

`getElementsByName()` is especially useful for form elements because form fields often use the same name, especially radio buttons and checkbox groups.

### Visual/Text Diagram

```text
name="gender"
├── radio button: Male
└── radio button: Female
        ↓
getElementsByName("gender") returns both
        ↓
Loop checks which one is selected
        ↓
Selected value is displayed
```

### Exam Tip

For radio button questions, mention:

- same `name` groups options
- `getElementsByName()` returns a NodeList
- use index or loop
- use `.checked` to detect selected option

### Common Mistake

Do not use `getElementById()` to collect radio-button groups unless each option has its own unique ID. For a group, `getElementsByName()` is more suitable.

---

## Page 09 — getElementByClassName()

### Original Slide Content

- `getElementByClassName()`
- Returns an HTMLCollection (classlist)
- Very fast
- Live collection (updates automatically)
- Try this code

> Note: The slide title says `getElementByClassName()`, but the code uses `getElementsByClassName()`.

### Code from Slide

Code reconstructed from slide visual.

```html
<!-- getElementByClassName-->
<h3>Choose a Course</h3>

<div class="course">Web Development</div>
<div class="course">Mobile App Development</div>
<div class="course">Data Science</div>

<button onclick="highlight()">Highlight Courses</button>

<script>
function highlight() {
  let courses = document.getElementsByClassName("course");
  for (let i = 0; i < courses.length; i++) {
    courses[i].classList.add("active");
  }
}
</script>
```

```css
<style>
.course {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
}

.active {
  background-color: #d1e7ff;
  font-weight: bold;
}
</style>
```

### Code Explanation

- Each course item has `class="course"`.
- `document.getElementsByClassName("course")` selects all course elements.
- A loop goes through every selected course.
- `classList.add("active")` adds the `active` CSS class.
- The `active` class changes background color and font weight.

### Output/Result

Before clicking:

- Web Development
- Mobile App Development
- Data Science
- Button: Highlight Courses

After clicking:

- All three course rows become highlighted with a light blue background.
- The text becomes bold.

### Visual Explanation

The visual shows the course list before and after applying the `active` class. It demonstrates that class-based selection is best when applying the same behavior or style to many elements.

### Explanation

`getElementsByClassName()` is used when multiple elements share the same class. It returns an `HTMLCollection`, which updates automatically if matching elements are added or removed from the DOM.

### Visual/Text Diagram

```text
Elements with class="course"
├── Web Development
├── Mobile App Development
└── Data Science
        ↓
JavaScript adds class="active"
        ↓
CSS .active style is applied
```

### Exam Tip

For class-selection questions, mention:

- returns `HTMLCollection`
- accesses multiple elements
- uses index or loop
- can combine with `classList.add()`

### Common Mistake

Do not forget the plural method name: `getElementsByClassName()`.

---

## Page 10 — Changing HTML Style with the HTML DOM Style Object

### Original Slide Content

Text properties table:

| Property | Description | W3C |
|---|---|---|
| `color` | Sets or returns the color of the text | Yes |
| `direction` | Sets or returns the text direction | Yes |
| `font` | Sets or returns font-style, font-variant, font-weight, font-size, line-height, and font-family in one declaration | Yes |
| `fontFamily` | Sets or returns the font face for text | Yes |
| `fontSize` | Sets or returns the font size of the text | Yes |
| `fontSizeAdjust` | Sets or returns the font aspect value | Yes |
| `fontStyle` | Sets or returns whether the style of the font is normal, italic or oblique | Yes |
| `fontVariant` | Sets or returns whether the font should be displayed in small capital letters | Yes |
| `fontWeight` | Sets or returns the boldness of the font | Yes |
| `letterSpacing` | Sets or returns the space between characters in a text | Yes |
| `lineHeight` | Sets or returns the distance between lines in a text | Yes |

### Visual Explanation

The slide shows a table of DOM style object text properties. These are JavaScript-accessible properties used through an element’s `.style` object.

### Explanation

JavaScript can change CSS styles directly using the DOM style object.

Example pattern:

```javascript
document.getElementById("myText").style.color = "red";
document.getElementById("myText").style.fontSize = "20px";
```

Important rule: CSS property names with hyphens become camel case in JavaScript.

| CSS Property | DOM Style Property |
|---|---|
| `font-size` | `fontSize` |
| `font-family` | `fontFamily` |
| `font-weight` | `fontWeight` |
| `letter-spacing` | `letterSpacing` |
| `line-height` | `lineHeight` |

### Visual/Text Diagram

```text
HTML element
    ↓
JavaScript selects element
    ↓
element.style.property = value
    ↓
Browser updates CSS style visually
```

### Exam Tip

Remember: in JavaScript DOM style, use camel case, not CSS hyphen style.

### Common Mistake

Writing `style.font-size` is wrong in JavaScript. Use `style.fontSize`.

---

## Page 11 — Background properties

### Original Slide Content

| Property | Description | W3C |
|---|---|---|
| `background` | Sets or returns all the background properties in one declaration | Yes |
| `backgroundAttachment` | Sets or returns whether a background-image is fixed or scrolls with the page | Yes |
| `backgroundColor` | Sets or returns the background-color of an element | Yes |
| `backgroundImage` | Sets or returns the background-image for an element | Yes |
| `backgroundPosition` | Sets or returns the starting position of a background-image | Yes |
| `backgroundRepeat` | Sets or returns how to repeat (tile) a background-image | Yes |

### Visual Explanation

The slide shows a table of background-related DOM style object properties.

### Explanation

These properties allow JavaScript to change an element’s background dynamically.

Example:

```javascript
document.getElementById("box").style.backgroundColor = "yellow";
document.getElementById("box").style.backgroundImage = "url('image.jpg')";
```

### Visual/Text Diagram

```text
Selected element
      ↓
style.backgroundColor = "yellow"
      ↓
Element background color changes
```

### Exam Tip

For DOM style questions, write property names in camel case:

- `backgroundColor`
- `backgroundImage`
- `backgroundPosition`
- `backgroundRepeat`

### Common Mistake

Do not write `background-color` after `.style` in JavaScript. Correct form: `.style.backgroundColor`.

---

## Page 12 — HTML DOM Events – (all in simple letters)

### Original Slide Content

- HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
- Events are normally used in combination with functions, and the function will not be executed before the event occurs, such as when a user clicks a button.
- Some common uses of events:
  - When a user clicks the mouse
  - When a web page has loaded
  - When an image has been loaded
  - When the mouse moves over an element
  - When an input field is changed
  - When an HTML form is submitted
  - When a user strokes a key

### Visual Explanation

No major visual content. The slide explains when event handlers are triggered.

### Explanation

An **event** is something that happens in the browser. JavaScript can respond to that event by running a function.

Examples:

| Event Situation | Possible Event Attribute |
|---|---|
| User clicks button | `onclick` |
| Page loads | `onload` |
| Image loads | `onload` |
| Mouse moves over element | `onmouseover` |
| Input field changes | `onchange` |
| Form submitted | `onsubmit` |
| User presses key | `onkeydown`, `onkeypress`, `onkeyup` |

### Visual/Text Diagram

```text
User action or browser action
        ↓
Event occurs
        ↓
Event handler detects it
        ↓
JavaScript function runs
        ↓
Page responds dynamically
```

### Exam Tip

Define event as a browser/user action that JavaScript can respond to using event handlers.

### Common Mistake

Do not say the function runs before the event. The function runs **after the event occurs**.

---

## Page 13 — Key Board Events

### Original Slide Content

| Attribute | Description |
|---|---|
| `onkeydown` | The event occurs when the user is pressing a key |
| `onkeypress` | The event occurs when the user presses a key |
| `onkeyup` | The event occurs when the user releases a key |

### Visual Explanation

The slide shows a two-column table comparing keyboard event attributes.

### Explanation

Keyboard events are triggered by keyboard actions.

| Event | When it happens | Simple Meaning |
|---|---|---|
| `onkeydown` | When the key goes down | Start pressing key |
| `onkeypress` | When a key press is registered | Key is pressed |
| `onkeyup` | When the key is released | Stop pressing key |

### Visual/Text Diagram

```text
Key action sequence
1. Finger presses key down  → onkeydown
2. Key press is registered  → onkeypress
3. Finger releases key      → onkeyup
```

### Exam Tip

If asked to compare keyboard events, show the order: **keydown → keypress → keyup**.

### Common Mistake

Do not confuse `onkeydown` and `onkeyup`. `onkeydown` happens when pressing starts; `onkeyup` happens when the key is released.

---

## Page 14 — Form Events

### Original Slide Content

| Attribute | Description |
|---|---|
| `onblur` | The event occurs when a form element loses focus |
| `onchange` | The event occurs when the content of a form element, the selection, or the checked state have changed, for `<input>`, `<select>`, and `<textarea>` |
| `onfocus` | The event occurs when an element gets focus, for `<label>`, `<input>`, `<select>`, `<textarea>`, and `<button>` |
| `onreset` | The event occurs when a form is reset |
| `onselect` | The event occurs when a user selects some text, for `<input>` and `<textarea>` |
| `onsubmit` | The event occurs when a form is submitted |

### Visual Explanation

The slide shows a table of common form events and when they occur.

### Explanation

Form events are important because most websites collect input from users. JavaScript can respond when a user enters data, selects options, submits forms, or moves focus between fields.

| Event | Common Use |
|---|---|
| `onblur` | Validate input after user leaves field |
| `onchange` | Update result when selected value changes |
| `onfocus` | Highlight field when user clicks into it |
| `onreset` | Clear custom messages when form resets |
| `onselect` | Detect selected text |
| `onsubmit` | Validate form before sending |

### Visual/Text Diagram

```text
User works with form
├── Clicks into field → onfocus
├── Changes value → onchange
├── Leaves field → onblur
├── Selects text → onselect
├── Resets form → onreset
└── Submits form → onsubmit
```

### Exam Tip

For form event questions, use practical examples. Example: `onsubmit` can validate a form before submission.

### Common Mistake

Do not use `onclick` for every form action. Form-specific events such as `onchange` and `onsubmit` are often more suitable.

---

## Page 15 — onkeydown onchange

### Original Slide Content

- `onkeydown`
- `onchange`

### Code from Slide — onkeydown

Code reconstructed from slide visual.

```html
<!--keyboard onkeydown -->
<h3>Press any key</h3>
<input type="text" onkeydown="showKey(event)">
<p id="result"></p>
<script>
  function showKey(e) {
    document.getElementById("result").textContent =
      "Key pressed: " + e.key;
  }
</script>
```

### Code Explanation

- The input field listens for the `onkeydown` event.
- When a key is pressed, `showKey(event)` runs.
- The event object is passed as `e`.
- `e.key` gives the key that was pressed.
- The result is shown inside the paragraph with `id="result"`.

### Code from Slide — onchange

Code reconstructed from slide visual.

```html
<h3>Select your city</h3>
<select onchange="showCity(this.value)">
  <option value="">-- Select City --</option>
  <option value="Colombo">Colombo</option>
  <option value="Kandy">Kandy</option>
  <option value="Galle">Galle</option>
</select>
<p id="result"></p>
<script>
  function showCity(city) {
    document.getElementById("result").textContent =
      "You selected: " + city;
  }
</script>
```

### Code Explanation

- The `<select>` element listens for the `onchange` event.
- `this.value` sends the selected option value to the function.
- `showCity(city)` receives the selected city.
- The selected city is displayed inside the paragraph with `id="result"`.

### Output/Result

- In the `onkeydown` example, typing a key displays text like: `Key pressed: A`.
- In the `onchange` example, selecting Colombo displays: `You selected: Colombo`.

### Visual Explanation

The slide compares two event examples side by side:

- `onkeydown` reacts to keyboard input.
- `onchange` reacts to changed dropdown selection.

### Explanation

These examples show event-driven programming. The page does not update by itself. It waits for the event, then runs the linked function.

### Visual/Text Diagram

```text
onkeydown example:
User presses key → showKey(event) → e.key read → result displayed

onchange example:
User selects city → showCity(this.value) → selected value displayed
```

### Exam Tip

For event-code questions, identify:

1. the event attribute,
2. the function called,
3. the value passed,
4. the DOM element updated.

### Common Mistake

Do not confuse `event` and `e.key`. `event` is the full event object; `e.key` is only the key value inside that object.

---

## Page 16 — Image Replacement

### Original Slide Content

- Image Replacement
- Image Properties

Image Properties table:

| Property | Description |
|---|---|
| `align` | Sets or returns the value of the align attribute of an image |
| `alt` | Sets or returns the value of the alt attribute of an image |
| `border` | Sets or returns the value of the border attribute of an image |
| `complete` | Returns whether or not the browser is finished loading an image |
| `height` | Sets or returns the value of the height attribute of an image |
| `hspace` | Sets or returns the value of the hspace attribute of an image |
| `longDesc` | Sets or returns the value of the longdesc attribute of an image |
| `lowsrc` | Sets or returns a URL to a low-resolution version of an image |
| `name` | Sets or returns the name of an image |
| `src` | Sets or returns the value of the src attribute of an image |
| `useMap` | Sets or returns the value of the usemap attribute of an image |
| `vspace` | Sets or returns the value of the vspace attribute of an image |
| `width` | Sets or returns the value of the width attribute of an image |

### Visual Explanation

The slide shows image object properties. The most important for this lecture is `src`, because changing `src` replaces the displayed image.

### Explanation

An image in the DOM has properties such as `src`, `alt`, `height`, and `width`. JavaScript can read or change these properties.

Example:

```javascript
document.images[0].src = "newImage.jpg";
```

This changes the first image on the page to a different image file.

### Visual/Text Diagram

```text
<img src="old.jpg">
        ↓ JavaScript changes src
<img src="new.jpg">
        ↓
Browser loads and displays new image
```

### Exam Tip

For image replacement, the key property is `src`.

### Common Mistake

Do not say changing `alt` changes the visible image. `alt` changes alternative text; `src` changes the image source.

---

## Page 17 — A Simple Example

### Original Slide Content

- Changing the URL of the image using the `src` property causes the new image to be loaded gradually onto the page.
- Replacement is not immediate.

### Code from Slide

Code reconstructed from slide visual.

```html
<img src="simple0.jpg" width="257" height="75" name="sample" alt="simple image">

<form>
<input type="button" value="simple0.jpg" onclick="document.images[0].src = 'simple0.jpg'">
<input type="button" value="simple1.jpg" onclick="document.images[0].src = 'simple1.jpg'">
</form>
```

### Code Explanation

- The page initially displays `simple0.jpg`.
- `document.images[0]` accesses the first image in the document.
- Clicking the first button sets the image source to `simple0.jpg`.
- Clicking the second button sets the image source to `simple1.jpg`.
- The image replacement happens by changing the `src` property.

### Output/Result

The visual output shows an image area labeled “Image Replacement” and two buttons:

- `simple0.jpg`
- `simple1.jpg`

Clicking each button changes the displayed image.

### Visual Explanation

The slide demonstrates practical image replacement. It also warns that image replacement is not always instant because the browser may need time to load the new image file.

### Explanation

Changing an image is not the same as changing plain text. Text can update immediately, but an image file may need to be requested and loaded by the browser. Therefore, the replacement can appear gradually depending on file size and network speed.

### Visual/Text Diagram

```text
Button clicked
      ↓
onclick changes document.images[0].src
      ↓
Browser requests new image file
      ↓
New image gradually loads
      ↓
Displayed image is replaced
```

### Exam Tip

In an image-replacement question, write:

```javascript
document.images[0].src = "imageName.jpg";
```

Also mention that replacement may not be immediate because the new image must load.

### Common Mistake

Do not write only `document.images[0] = "simple1.jpg"`. You must change the `.src` property.

---

## Page 18 — Thank You

### Original Slide Content

- Thank You

### Visual Explanation

The slide contains SLIIT branding and a “Thank You” closing message. No technical content is introduced.

### Explanation

This is the closing slide of Lecture 04.

### Exam Tip

No direct exam content.

### Common Mistake

No major common mistake.

---

# Key Definitions

## Definition — HTML DOM

### Definition

The HTML DOM is a browser-created object model that represents an HTML document as a tree of objects, allowing scripts to access and update document content, structure, and style dynamically.

### Simple Meaning

The DOM is the bridge between JavaScript and the HTML page.

### Example

```javascript
document.getElementById("title").textContent = "New Title";
```

## Definition — DOM Tree

### Definition

A DOM tree is the hierarchical representation of an HTML document where elements are organized as parent and child objects.

### Simple Meaning

HTML becomes a tree structure inside the browser.

### Example

```text
document → html → body → p
```

## Definition — Event

### Definition

An event is an action or occurrence in the browser that JavaScript can respond to using an event handler.

### Simple Meaning

Something happens, then JavaScript reacts.

### Example

```html
<button onclick="showMessage()">Click</button>
```

## Definition — Event Handler

### Definition

An event handler is code or an attribute that connects an event to a JavaScript function.

### Simple Meaning

It tells the browser what function to run when an event happens.

### Example

```html
<input onchange="showCity(this.value)">
```

---

# Full Lecture Summary

Lecture 04 explains how JavaScript uses the HTML DOM to access and update web pages dynamically. The DOM is created by the browser as a tree of objects. JavaScript can select elements by ID, tag name, name, or class name. After selecting elements, JavaScript can read form values, update page content, change styles, respond to keyboard and form events, and replace images by changing the image `src` property.

The lecture gives practical examples using:

- `getElementById()` for a calculator.
- `getElementsByTagName()` for changing paragraph colors.
- `getElementsByName()` for form inputs and radio buttons.
- `getElementsByClassName()` for highlighting course items.
- DOM style properties for text and background styling.
- DOM events such as `onkeydown`, `onchange`, `onblur`, `onfocus`, and `onsubmit`.
- Image replacement using `document.images[0].src`.

---

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| DOM | Object model of an HTML document created by the browser | `document.getElementById("x")` |
| DOM Tree | Hierarchical structure of HTML objects | `html → body → p` |
| Document Object | Main object representing the loaded web page | `document` |
| `getElementById()` | Selects one element by unique ID | `document.getElementById("num1")` |
| `getElementsByTagName()` | Selects all elements with a tag name | `document.getElementsByTagName("p")` |
| `getElementsByName()` | Selects all elements with a specified name | `document.getElementsByName("gender")` |
| `getElementsByClassName()` | Selects all elements with a class name | `document.getElementsByClassName("course")` |
| NodeList | List-like collection returned by methods such as `getElementsByName()` | `gender[0]` |
| HTMLCollection | Live collection of elements returned by some DOM methods | `courses[0]` |
| Event | Browser/user action | click, key press, form submit |
| Event Handler | Code that responds to an event | `onclick`, `onchange` |
| `style` object | Object used to change CSS through JavaScript | `.style.color = "red"` |
| `src` | Image source property | `image.src = "new.jpg"` |
| `textContent` | Sets/returns text content | `.textContent = "Hello"` |
| `innerHTML` | Sets/returns HTML content | `.innerHTML = "<b>Hello</b>"` |
| `value` | Reads/sets form field value | `.value` |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| HTML DOM introduction | DOM allows dynamic access and update of content, structure, and style | 02 |
| DOM tree | Browser creates a tree of objects | 03 |
| JavaScript and DOM | JavaScript must first find/select elements | 04 |
| DOM methods | Method names are camel case and case-sensitive | 05 |
| `getElementById()` | Selects one element by ID | 06 |
| `getElementsByTagName()` | Selects multiple elements by tag name | 07 |
| `getElementsByName()` | Useful for form inputs, returns NodeList | 08 |
| `getElementsByClassName()` | Returns live HTMLCollection | 09 |
| Style object | CSS properties become camel case in JavaScript | 10 |
| Background style | Use `backgroundColor`, not `background-color` | 11 |
| DOM events | Function executes after event occurs | 12 |
| Keyboard events | `onkeydown`, `onkeypress`, `onkeyup` | 13 |
| Form events | `onblur`, `onchange`, `onfocus`, `onreset`, `onselect`, `onsubmit` | 14 |
| Event examples | `onkeydown` uses `event.key`; `onchange` uses `this.value` | 15 |
| Image properties | `src` changes the displayed image | 16 |
| Image replacement | Replacement may not be immediate | 17 |

---

# Important Code Snippets

## Page 06 — `getElementById()` calculator addition

```html
<label>Enter first number</label>
<input type="text" id="num1"/>
<br>
<label>Enter second number</label>
<input type="text" id="num2"/>
<button onclick="addNumber()">+ </button>
<p id="sumValue"></p>
<script>
  function addNumber(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let results=parseInt(num1)+ parseInt(num2);
    document.getElementById("sumValue").innerHTML =num1 + " + " + num2 + " = "+results;
  }
</script>
```

**Short explanation:** Reads two input values by ID, converts them to integers, adds them, and displays the result.

## Page 07 — `getElementsByTagName()` paragraph color change

```html
<p>This is the First paragraph</p>
<p>This is the Second paragraph</p>
<p>This is the Third paragraph</p>
<button onclick="changeColor()">Change Text Color</button>
<script>
  function changeColor() {
    let paragraphs = document.getElementsByTagName("p");
    paragraphs[0].style.color = "pink";
    paragraphs[1].style.color = "aqua";
    paragraphs[2].style.color = "purple";
  }
</script>
```

**Short explanation:** Selects all paragraphs and changes each paragraph text color using index values.

## Page 08 — `getElementsByName()` radio button selection

```javascript
function showGender() {
  let gender = document.getElementsByName("gender");

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      document.getElementById("result").textContent =
        "Selected: " + gender[i].value;
    }
  }
}
```

**Short explanation:** Loops through same-name radio buttons and displays the checked value.

## Page 09 — `getElementsByClassName()` course highlight

```javascript
function highlight() {
  let courses = document.getElementsByClassName("course");
  for (let i = 0; i < courses.length; i++) {
    courses[i].classList.add("active");
  }
}
```

**Short explanation:** Selects all elements with class `course` and adds the `active` class to each one.

## Page 15 — `onkeydown`

```html
<input type="text" onkeydown="showKey(event)">
<p id="result"></p>
<script>
  function showKey(e) {
    document.getElementById("result").textContent =
      "Key pressed: " + e.key;
  }
</script>
```

**Short explanation:** Shows which key was pressed using `e.key`.

## Page 15 — `onchange`

```html
<select onchange="showCity(this.value)">
  <option value="">-- Select City --</option>
  <option value="Colombo">Colombo</option>
  <option value="Kandy">Kandy</option>
  <option value="Galle">Galle</option>
</select>
<p id="result"></p>
<script>
  function showCity(city) {
    document.getElementById("result").textContent =
      "You selected: " + city;
  }
</script>
```

**Short explanation:** Displays the selected dropdown value.

## Page 17 — Image replacement

```html
<img src="simple0.jpg" width="257" height="75" name="sample" alt="simple image">

<form>
<input type="button" value="simple0.jpg" onclick="document.images[0].src = 'simple0.jpg'">
<input type="button" value="simple1.jpg" onclick="document.images[0].src = 'simple1.jpg'">
</form>
```

**Short explanation:** Replaces the image by changing the first image element’s `src` property.

---

# Important Diagrams Summary

| Page | Visual / Diagram | Meaning |
|---|---|---|
| 01 | SLIIT title slide | Introduces Lecture 04: Html DOM |
| 03 | DOM tree diagrams | HTML document is represented as parent-child object tree |
| 06 | Simple calculator UI | `getElementById()` can read form input values and show result |
| 07 | Paragraph update UI | `getElementsByTagName()` can update multiple elements by tag |
| 08 | Form and radio examples | `getElementsByName()` is useful for same-name form fields |
| 09 | Course highlight example | `getElementsByClassName()` can apply style changes to multiple class elements |
| 10 | Text properties table | DOM style object can change text CSS properties |
| 11 | Background properties table | DOM style object can change background CSS properties |
| 13 | Keyboard events table | Compares `onkeydown`, `onkeypress`, and `onkeyup` |
| 14 | Form events table | Lists common form-related event handlers |
| 15 | Keyboard and dropdown code | Shows event-driven page updates |
| 16 | Image properties table | Shows important image object properties, especially `src` |
| 17 | Image replacement UI | Shows image replacement using `document.images[0].src` |
| 18 | Thank You slide | Closing slide |

---

# Likely Exam Questions and Short Answers

## Question 1

What is the HTML DOM?

**Expected Answer:**
The HTML DOM is a browser-created object model that represents an HTML document as a tree of objects. It allows JavaScript to dynamically access and update document content, structure, style, and form values.

## Question 2

Why does JavaScript need the DOM?

**Expected Answer:**
JavaScript needs the DOM to find HTML elements and modify them. Through DOM methods, JavaScript can change content, attributes, CSS styles, form values, and respond to user events.

## Question 3

Write the JavaScript statement to read the value of an input field with `id="num1"`.

**Expected Answer:**

```javascript
let num1 = document.getElementById("num1").value;
```

## Question 4

Differentiate `getElementById()` and `getElementsByTagName()`.

**Expected Answer:**

| Method | Return Type / Result | Use |
|---|---|---|
| `getElementById()` | One element | Selects a unique element by ID |
| `getElementsByTagName()` | Collection of elements | Selects all elements with a given tag name |

## Question 5

Why is `getElementsByName()` commonly used with radio buttons?

**Expected Answer:**
Radio buttons in the same group normally share the same `name` attribute. `getElementsByName()` can select all radio buttons in that group, and a loop can check which one is selected using `.checked`.

## Question 6

What is the difference between `onkeydown` and `onkeyup`?

**Expected Answer:**
`onkeydown` occurs when the user is pressing a key. `onkeyup` occurs when the user releases the key.

## Question 7

Write a simple example of changing text color using DOM style.

**Expected Answer:**

```javascript
document.getElementById("para").style.color = "red";
```

## Question 8

What is the correct JavaScript DOM style property for CSS `background-color`?

**Expected Answer:**

```javascript
backgroundColor
```

## Question 9

How can JavaScript replace an image on a web page?

**Expected Answer:**
JavaScript can replace an image by changing the image element’s `src` property.

```javascript
document.images[0].src = "simple1.jpg";
```

## Question 10

Why may image replacement not be immediate?

**Expected Answer:**
Image replacement may not be immediate because the browser must load the new image file after the `src` property changes.

## Question 11

What is an HTML DOM event?

**Expected Answer:**
An HTML DOM event is an action or occurrence such as a mouse click, key press, page load, form submit, or input change that JavaScript can respond to using event handlers.

## Question 12

Write a code snippet to display the selected dropdown value.

**Expected Answer:**

```html
<select onchange="showCity(this.value)">
  <option value="Colombo">Colombo</option>
  <option value="Kandy">Kandy</option>
</select>
<p id="result"></p>
<script>
  function showCity(city) {
    document.getElementById("result").textContent = "You selected: " + city;
  }
</script>
```

---

# Common Mistakes to Avoid

- Writing `getElementByTagName()` instead of `getElementsByTagName()` in actual JavaScript code.
- Writing `getElementByClassName()` instead of `getElementsByClassName()` in actual JavaScript code.
- Forgetting JavaScript method names are case-sensitive.
- Using `.value` on normal paragraphs instead of form inputs.
- Using `.innerHTML` when plain text output is enough; `.textContent` is safer for plain text.
- Forgetting to convert string input values before arithmetic.
- Treating collections as single elements.
- Forgetting index values start from `0`.
- Writing CSS property names with hyphens after `.style`, such as `.style.background-color`.
- Confusing `onkeydown` with `onkeyup`.
- Forgetting that image replacement uses `.src`.
- Thinking image replacement is always instant.

---

# Final One-Page Revision Notes

## Core Idea

```text
Browser loads HTML → Browser creates DOM → JavaScript uses DOM → Page updates dynamically
```

## Must-Remember DOM Methods

| Method | Use |
|---|---|
| `document.getElementById("id")` | Select one element by ID |
| `document.getElementsByTagName("p")` | Select elements by tag |
| `document.getElementsByName("name")` | Select form elements by name |
| `document.getElementsByClassName("class")` | Select elements by class |

## Must-Remember Properties

| Property | Use |
|---|---|
| `.value` | Read/write form input value |
| `.innerHTML` | Change HTML content |
| `.textContent` | Change plain text content |
| `.style.color` | Change text color |
| `.style.backgroundColor` | Change background color |
| `.src` | Change image source |
| `.checked` | Check if radio/checkbox is selected |
| `.classList.add()` | Add CSS class |

## Event Flow

```text
User action
   ↓
Event occurs
   ↓
Event handler runs
   ↓
JavaScript function executes
   ↓
DOM/content/style/value changes
```

## Keyboard Events

```text
onkeydown → key is being pressed
onkeypress → key press happens
onkeyup → key is released
```

## Form Events

| Event | Meaning |
|---|---|
| `onblur` | Field loses focus |
| `onchange` | Value/selection changes |
| `onfocus` | Field gets focus |
| `onreset` | Form resets |
| `onselect` | Text is selected |
| `onsubmit` | Form is submitted |

## Exam Keywords

- Document Object Model
- tree of objects
- browser-created
- dynamic access
- dynamic update
- content, structure, style
- event handler
- form values
- DOM style object
- camel case
- NodeList
- HTMLCollection
- image `src` property

---

# Execution Checklist

- [x] Read the uploaded PDF.
- [x] Read the uploaded TXT file.
- [x] Compared PDF and TXT content.
- [x] Followed original PDF page order from Page 01 to Page 18.
- [x] Added page numbers for every slide/page.
- [x] Included all readable slide text.
- [x] Reconstructed code examples from slide visuals.
- [x] Put code in Markdown code blocks.
- [x] Preserved HTML/CSS/JavaScript snippets as visible code.
- [x] Recreated tables in Markdown format.
- [x] Described images, diagrams, screenshots, and visual meanings.
- [x] Added explanations for difficult points.
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
- [x] Created one downloadable `.md` file only.
- [x] Did not create PDF.
