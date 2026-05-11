# SE2020 - Web Technologies and Mobile — Lecture 05
## More on Manipulating the DOM

**Institution:** Sri Lanka Institute of Information Technology  
**Faculty:** Faculty of Computing  
**Module Code:** SE2020  
**Module Name:** Web Technologies and Mobile  
**Lecture Number:** Lecture 05  
**Lecture Title:** More on Manipulating the DOM  
**Lecturer:** Ms. Dilani Lunugalage  
**Degree/Program:** BSc (Hons) in Information Technology  
**Total PDF Pages/Slides:** 26

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture Title](#page-02--lecture-title)
- [Page 03 — Manipulating the DOM](#page-03--manipulating-the-dom)
- [Page 04 — How to Access DOM Elements](#page-04--how-to-access-dom-elements)
- [Page 05 — querySelector() - CSS](#page-05--queryselector---css)
- [Page 06 — How to Work with Attribute Nodes](#page-06--how-to-work-with-attribute-nodes)
- [Page 07 — TO DO: Change Attribute Nodes](#page-07--to-do-change-attribute-nodes)
- [Page 08 — Changing CSS Rules](#page-08--changing-css-rules)
- [Page 09 — TO DO: Change Class Attribute Nodes](#page-09--to-do-change-class-attribute-nodes)
- [Page 10 — Retrieving Multiple Elements](#page-10--retrieving-multiple-elements)
- [Page 11 — Accessing Elements](#page-11--accessing-elements)
- [Page 12 — Live Lists and Non-Live Lists](#page-12--live-lists-and-non-live-lists)
- [Page 13 — Live List and Non-Live List](#page-13--live-list-and-non-live-list)
- [Page 14 — TO DO: Access Multiple Elements](#page-14--to-do-access-multiple-elements)
- [Page 15 — Add Event Listeners](#page-15--add-event-listeners)
- [Page 16 — addEventListener() Advantages Continued](#page-16--addeventlistener-advantages-continued)
- [Page 17 — The addEventListener() Method](#page-17--the-addeventlistener-method)
- [Page 18 — Example: Change Background Color](#page-18--example-change-background-color)
- [Page 19 — Example 1: Simple Counter](#page-19--example-1-simple-counter)
- [Page 20 — Example 2: Character Count](#page-20--example-2-character-count)
- [Page 21 — Example 03: Add Form to index.html](#page-21--example-03-add-form-to-indexhtml)
- [Page 22 — Identify Interactive Elements](#page-22--identify-interactive-elements)
- [Page 23 — TO DO: Get Reference, Add Event Listener](#page-23--to-do-get-reference-add-event-listener)
- [Page 24 — TO DO: Implement Event Handler](#page-24--to-do-implement-event-handler)
- [Page 25 — TO DO: Encode Calculate](#page-25--to-do-encode-calculate)
- [Page 26 — Thank You](#page-26--thank-you)
- [Important Definitions](#important-definitions)
- [Comparison Tables](#comparison-tables)
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
- Page 1 / 26

### Visual Explanation

The slide is a formal title page. It identifies the institution, faculty, module, lecturer, and program. No technical diagram is shown.

### Explanation

This page establishes the lecture context. The lecture belongs to the SE2020 Web Technologies and Mobile module and is delivered by Ms. Dilani Lunugalage.

### Exam Tip

No direct technical question usually comes from this page. Use it to identify the module and lecture correctly in your notes.

### Common Mistake

No major common mistake.

---

## Page 02 — Lecture Title

### Original Slide Content

- Lecture 05
- More on Manipulating the DOM
- BSc (Hons) in Information Technology
- Page 2 / 26

### Visual Explanation

This is the lecture title slide. It introduces the topic: deeper DOM manipulation using JavaScript.

### Explanation

This lecture continues from earlier DOM basics. The main focus is using JavaScript to access HTML elements, modify attributes, change CSS classes, retrieve multiple elements, and handle events using `addEventListener()`.

### Exam Tip

Expect practical JavaScript questions: selecting elements, modifying attributes/classes, looping through elements, and attaching event listeners.

### Common Mistake

Do not treat DOM manipulation as only reading content. This lecture is mainly about changing elements and reacting to user events.

---

## Page 03 — Manipulating the DOM

### Original Slide Content

- As seen last week, we can use JavaScript to access elements in the DOM.
- Retrieve and store a reference to the element.
- Get the value of field using the `value` attribute.
- Display results using the `innerText` attribute.
- We can also manipulate other attributes of the element.

### Code from Slide

~~~javascript
const txtIn = document.getElementById("in");
const txtOut = document.getElementById("out");
~~~

~~~javascript
let input = txtIn.value;
~~~

~~~javascript
txtOut.innerText = "result";
~~~

### Visual Explanation

The slide shows three boxed JavaScript examples:

1. Getting references to elements with IDs `in` and `out`.
2. Reading a value from an input field using `.value`.
3. Writing output to an element using `.innerText`.

### Explanation

DOM manipulation usually follows this pattern:

1. Find the HTML element.
2. Store it in a JavaScript variable.
3. Read or change its properties.
4. Show the result back on the page.

`document.getElementById()` searches the HTML document for one element with the matching `id`. `.value` is used mainly with input fields. `.innerText` changes the visible text inside an element.

### Visual/Text Diagram

~~~text
HTML element in page
        ↓
document.getElementById("id")
        ↓
JavaScript variable stores reference
        ↓
Read value / change text / change attributes
~~~

### Exam Tip

For practical questions, remember the sequence: **select element → read value → process → output result**.

### Common Mistake

Confusing `.value` and `.innerText`:

- `.value` reads input field values.
- `.innerText` changes visible text inside an element like `p`, `div`, or `span`.

---

## Page 04 — How to Access DOM Elements

### Original Slide Content

- Every element in the DOM can be accessed using JavaScript.
- We have seen how to do this for elements with a unique ID.
- Can also be done using `querySelector()`.
  - Returns first element that matches the criteria.

### Code from Slide

~~~javascript
const element1 = document.getElementById("id");
~~~

~~~javascript
const element2 = document.querySelector("#id");

const element3 = document.querySelector(".class");

//paragraph inside div
const element4 = document.querySelector("div p");
~~~

### Visual Explanation

The slide displays JavaScript code boxes comparing two methods:

- `getElementById("id")` selects by unique ID.
- `querySelector()` selects elements using CSS-style selectors.

The examples show:

| Selector | Meaning |
|---|---|
| `#id` | Select element with ID `id` |
| `.class` | Select first element with class `class` |
| `div p` | Select first paragraph inside a `div` |

### Explanation

`querySelector()` is flexible because it uses CSS selector syntax. It can select by ID, class, tag, or nested structure. However, it returns only the **first matching element**.

### Visual/Text Diagram

~~~text
DOM Tree
├── element with id="id"       → #id
├── element with class="class" → .class
└── div
    └── p                      → div p
~~~

### Exam Tip

If the question asks for the **first matching element**, use `querySelector()`. If it asks for a unique ID only, `getElementById()` is also correct.

### Common Mistake

Writing `document.querySelector("id")` to select an ID is incorrect. For ID selectors, use `"#id"`.

---

## Page 05 — querySelector() - CSS

### Original Slide Content

- `→` selects by class.
- `querySelector()` returns the first matching element.

### Code from Slide

Code reconstructed from slide visual:

~~~html
<button onClick="checkVal()">Click Me</button>
<p class="para">Hello World</p>
<h3 class="para">Hello World</h3>
<script>
Function checkVal(){
const element3 = document.querySelector(".para");
paragraph.textContent = "Button Clicked!"
}
</script>
~~~

### Visual Explanation

The visual shows HTML elements sharing the same class name `para`:

- A `<p>` element with `class="para"`
- An `<h3>` element with `class="para"`

The JavaScript uses:

~~~javascript
document.querySelector(".para")
~~~

This selects the **first** element with class `para`, which is the paragraph, not the heading.

### Explanation

`querySelector(".para")` uses the CSS class selector. Since both `<p>` and `<h3>` have the same class, JavaScript chooses only the first matching element. This matters because if you expect all matching elements to change, `querySelector()` will not do that. You need `querySelectorAll()` for all matches.

**Note:** The slide code visually appears to use `Function` with a capital `F` and then refers to `paragraph.textContent` although the selected element is stored in `element3`. In real JavaScript, `function` should be lowercase, and the same variable name should be used. The lecture point is still about class selection and first-match behavior.

### Visual/Text Diagram

~~~text
<p class="para">Hello World</p>   ← first match selected
<h3 class="para">Hello World</h3>  ← not selected by querySelector()
~~~

### Exam Tip

Keyword to remember: `querySelector()` = **first matching element only**.

### Common Mistake

Thinking `querySelector(".para")` selects all elements with class `para`. It does not. It selects only the first one.

---

## Page 06 — How to Work with Attribute Nodes

### Original Slide Content

Once required element has been retrieved, you can modify attribute node using:

- `getAttribute(<attribute>)`
  - Return the value of the attribute.
- `setAttribute(<attribute>, <value>)`
  - If attribute exists, overwrites its value, otherwise, adds attribute-value pair to the element.
- `removeAttribute(<attribute>)`
  - Delete attribute from element.
- `hasAttribute(<attribute>)`
  - If attribute exists, returns true, otherwise, returns false.

### Visual Explanation

No major visual content. The slide is mainly a method list explaining attribute operations.

### Explanation

HTML elements have attributes such as `id`, `class`, `src`, `href`, `type`, and `value`. JavaScript can read, add, update, remove, or check these attributes.

| Method | Purpose | Example |
|---|---|---|
| `getAttribute("src")` | Reads an attribute value | Reads image path |
| `setAttribute("class", "blue")` | Adds or changes an attribute | Sets class to blue |
| `removeAttribute("class")` | Removes an attribute | Removes CSS class |
| `hasAttribute("src")` | Checks existence | Returns true/false |

### Visual/Text Diagram

~~~text
HTML element
      ↓
Attribute operations
├── getAttribute()    → read value
├── setAttribute()    → add/change value
├── removeAttribute() → delete value
└── hasAttribute()    → check if exists
~~~

### Exam Tip

If the question asks how to change image path, class, link URL, or input type, mention `setAttribute()`.

### Common Mistake

Confusing `getAttribute()` with `setAttribute()`:

- `getAttribute()` reads.
- `setAttribute()` changes/adds.

---

## Page 07 — TO DO: Change Attribute Nodes

### Original Slide Content

- What is the effect of these JavaScript statements? Why?
- Changing the attribute value

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
const pic = document.querySelector("img");

console.log(pic.hasAttribute("src"));
console.log(pic.getAttribute("src"));
~~~

~~~javascript
pic.setAttribute("src", "images/happy.jpg");
console.log(pic.getAttribute("src"));
~~~

### Visual Explanation

The slide shows a smiling face image on the right side. The JavaScript selects the first `<img>` element, checks whether it has a `src` attribute, reads the current `src`, then changes the `src` to `images/happy.jpg`.

### Explanation

The code works as follows:

1. `document.querySelector("img")` selects the first image element on the page.
2. `pic.hasAttribute("src")` checks whether the image has a source path.
3. `pic.getAttribute("src")` prints the current image path.
4. `pic.setAttribute("src", "images/happy.jpg")` changes the image shown on the page.
5. The final `console.log()` confirms the updated image path.

### Visual/Text Diagram

~~~text
<img src="old-image.jpg">
        ↓ setAttribute("src", "images/happy.jpg")
<img src="images/happy.jpg">
        ↓
Browser displays new image
~~~

### Exam Tip

This is a common practical question: “Write JavaScript to change an image.” Use `querySelector("img")` and `setAttribute("src", "newPath")`.

### Common Mistake

Selecting the image correctly but forgetting that changing the `src` attribute changes the visible image.

---

## Page 08 — Changing CSS Rules

### Original Slide Content

- Can easily change appearance of elements by adding, changing or removing `class` attribute.
  - Get element to be targeted.
  - Use `setAttribute` to add or change class attribute.
  - Use `removeAttribute` to remove class attribute.

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
element1.setAttribute("class", "cssRule");
element2.removeAttribute("class");
~~~

### Visual Explanation

The slide shows two JavaScript statements:

- One adds or changes the `class` attribute.
- One removes the `class` attribute.

This connects JavaScript behavior with CSS styling.

### Explanation

CSS classes control appearance. JavaScript can change the class of an element, causing the element to use different CSS rules.

Example:

- `setAttribute("class", "cssRule")` applies CSS class `cssRule`.
- `removeAttribute("class")` removes styling attached through the class attribute.

### Visual/Text Diagram

~~~text
Element selected by JavaScript
        ↓
setAttribute("class", "cssRule")
        ↓
CSS rule applies
        ↓
Element appearance changes
~~~

### Exam Tip

For questions about changing colors, fonts, borders, or layout dynamically, answer with class manipulation using `setAttribute()` or `removeAttribute()`.

### Common Mistake

Trying to change CSS file content directly. In DOM manipulation, you usually change the element’s class or style, not the CSS file itself.

---

## Page 09 — TO DO: Change Class Attribute Nodes

### Original Slide Content

- What is the effect of these JavaScript statements? Why?

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
let first = document.getElementById("first");
first.removeAttribute("class");

let second = document.getElementById("second");
second.setAttribute("class", "blue");
~~~

### Visual Explanation

The slide shows JavaScript that targets two elements by ID:

- `first`
- `second`

The first element loses its CSS class. The second element receives class `blue`.

### Explanation

The effect is:

1. Element with ID `first` loses its class-based styling.
2. Element with ID `second` gets class `blue`, so CSS rules for `.blue` apply to it.

### Visual/Text Diagram

~~~text
#first  → removeAttribute("class") → class removed → old styling removed
#second → setAttribute("class", "blue") → blue class added → blue styling applied
~~~

### Exam Tip

If asked “What is the output/effect?”, explain the visible page effect, not only the code operation.

### Common Mistake

Saying `removeAttribute("class")` deletes the whole element. It only removes the class attribute, not the HTML element.

---

## Page 10 — Retrieving Multiple Elements

### Original Slide Content

- Examples so far have only retrieved a single element using:
  - `getElementById()`
  - `querySelector()`

- Can also retrieve multiple elements using:
  - `getElementsByTagName()`
  - `getElementsByName()`
  - `getElementsByClassName()`
  - These return a live node list.

- `querySelectorAll()`
  - Returns a non-live node list.

### Visual Explanation

The visual groups DOM selection methods into single-element and multiple-element retrieval. It also marks three methods as returning live node lists and `querySelectorAll()` as returning a non-live node list.

### Explanation

When many elements match the same selector, JavaScript can return a collection of elements. That collection can be looped through.

| Method | Selects | List Type |
|---|---|---|
| `getElementsByTagName()` | Elements by tag name | Live |
| `getElementsByName()` | Elements by name attribute | Live |
| `getElementsByClassName()` | Elements by class | Live |
| `querySelectorAll()` | Elements by CSS selector | Non-live/static |

### Visual/Text Diagram

~~~text
Single element methods
├── getElementById()
└── querySelector()

Multiple element methods
├── getElementsByTagName()   → live list
├── getElementsByName()      → live list
├── getElementsByClassName() → live list
└── querySelectorAll()       → non-live/static list
~~~

### Exam Tip

Remember the live vs non-live difference. It is an exam-friendly comparison question.

### Common Mistake

Thinking all DOM lists update automatically. `querySelectorAll()` returns a non-live list, so it does not update when the DOM changes later.

---

## Page 11 — Accessing Elements

### Original Slide Content

- Get all matching elements. Check this using `console.log`.
- Access single element specifying its index.
- Loop through all elements using `for` loop.

### Code from Slide

~~~javascript
const allParas = document.querySelectorAll("p");
~~~

~~~javascript
allParas[0].setAttribute("class", "green");
~~~

~~~javascript
for (let i = 0; i < allParas.length; i++) {
    allParas[i].setAttribute("class", "blue");
}
~~~

### Visual Explanation

The slide shows three boxed code examples:

1. Select all paragraphs.
2. Change the first paragraph using index `0`.
3. Loop through all paragraphs and set their class to `blue`.

### Explanation

DOM collections work like array-like lists. They have indexes starting from `0` and a `.length` property.

- `allParas[0]` means the first paragraph.
- `allParas.length` gives the number of selected paragraphs.
- A `for` loop can apply the same change to every selected element.

### Visual/Text Diagram

~~~text
allParas = [p0, p1, p2, p3]
             ↓
allParas[0] = first paragraph

Loop:
i = 0 → p0 class blue
i = 1 → p1 class blue
i = 2 → p2 class blue
i = 3 → p3 class blue
~~~

### Exam Tip

For “change all paragraphs” questions, use `querySelectorAll("p")` plus a `for` loop.

### Common Mistake

Forgetting that indexes start from `0`, not `1`.

---

## Page 12 — Live Lists and Non-Live Lists

### Original Slide Content

- All these methods return node-list of objects:
  - Can access individual elements.
  - Can loop through elements.
  - But there are no methods to add new elements or remove elements.
- `querySelectorAll()` returns a non-live list.
- Any changes to the DOM do not modify the original node list returned.

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
document.querySelectorAll(".card.active")
document.querySelectorAll("#container > p")
document.querySelectorAll("ul li:first-child")
document.querySelectorAll("input[type='text']")
~~~

### Visual Explanation

The visual shows examples of CSS selectors used with `querySelectorAll()`:

| Selector | Meaning |
|---|---|
| `.card.active` | Elements that have both `card` and `active` classes |
| `#container > p` | Direct child `<p>` elements inside `#container` |
| `ul li:first-child` | First `<li>` child inside a `<ul>` |
| `input[type='text']` | Text input elements |

### Explanation

`querySelectorAll()` is powerful because it supports detailed CSS selectors. However, the returned list is static. If new matching elements are added after the selection, the original list does not update automatically.

### Visual/Text Diagram

~~~text
Initial DOM
├── p
└── p

querySelectorAll("p") → static list [p, p]

Later DOM changes
├── p
├── p
└── new p

Original static list still = [p, p]
~~~

### Exam Tip

Use the phrase **non-live/static list** when explaining `querySelectorAll()`.

### Common Mistake

Assuming `querySelectorAll()` updates after adding new elements. It does not.

---

## Page 13 — Live List and Non-Live List

### Original Slide Content

- Now add this code through dev tools.
- Live list updated instantly but not the static list.

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
let live = document.getElementsByClassName("box");
let staticList = document.querySelectorAll(".box");

console.log("Live:", live.length);
console.log("Static:", staticList.length);
~~~

Code added through dev tools:

~~~html
<div class="box"></div>
~~~

### Visual Explanation

The slide demonstrates the difference between a live list and a static list.

- `getElementsByClassName("box")` returns a live list.
- `querySelectorAll(".box")` returns a static/non-live list.
- When a new `<div class="box"></div>` is added, the live list length updates, but the static list length stays as it was.

### Explanation

This example proves that the selection method affects whether the list tracks future DOM changes. Live lists stay connected to the document. Static lists are snapshots taken at the time of selection.

### Visual/Text Diagram

~~~text
Before adding new box:
live.length       = original number
staticList.length = original number

Add: <div class="box"></div>

After adding:
live.length       = updated automatically
staticList.length = unchanged
~~~

### Exam Tip

If asked to compare live and non-live lists, use this example. It is clean and practical.

### Common Mistake

Calling both results “arrays.” They are not normal arrays; they are DOM collections/node lists.

---

## Page 14 — TO DO: Access Multiple Elements

### Original Slide Content

- What is the effect of these JavaScript statements? Why?

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
let x = document.getElementsByTagName("p")
for (let i = 0; i < x.length; i+=2)
{
    x[i].setAttribute("class", "green");
}
let y = document.querySelectorAll("div p");
for (let i = 0; i < y.length; i++) {
    y[i].setAttribute("class", "green");
}
let z = document.querySelectorAll("div, p");
for (let i = 0; i < z.length; i++) {
    z[i].setAttribute("class", "green");
}
~~~

### Visual Explanation

The code shows three different ways to select multiple elements:

1. All `<p>` elements by tag name.
2. All `<p>` elements inside a `<div>`.
3. All `<div>` elements and all `<p>` elements.

### Explanation

Effect of each code block:

| Variable | Selector | Elements affected | Effect |
|---|---|---|---|
| `x` | `getElementsByTagName("p")` | Every second paragraph because `i += 2` | Adds class `green` to indexes 0, 2, 4... |
| `y` | `querySelectorAll("div p")` | Paragraphs inside divs | Adds class `green` to those paragraphs |
| `z` | `querySelectorAll("div, p")` | All divs and all paragraphs | Adds class `green` to both div and p elements |

### Visual/Text Diagram

~~~text
x: all p elements
p0 ✓, p1 ✗, p2 ✓, p3 ✗ ...

 y: only p inside div
<div><p> ✓ </p></div>
<p> ✗ </p>

z: all div and all p
<div> ✓ </div>
<p> ✓ </p>
~~~

### Exam Tip

Pay attention to selector syntax:

- `"div p"` means paragraphs inside divs.
- `"div, p"` means divs and paragraphs.

### Common Mistake

Ignoring the comma in `"div, p"`. The comma changes the meaning completely.

---

## Page 15 — Add Event Listeners

### Original Slide Content

- We have used DOM events previously by adding listeners directly in the HTML element.
- However, in order to totally separate the HTML from the JavaScript code, it is better practice to add the event Listener inside the JavaScript code by using the `addEventListener()` method.
- This improves separation of concerns, readability and allows you to add the event listeners and effects even if you do not have control over the HTML code.
- The `addEventListener()` method attaches an event handler to a specified element.
- It will not overwrite existing event handlers on that element, so it is possible to add many event handlers to one element, including more than one identical event handler.
- Example: You can add two click event listeners to the same element.

### Visual Explanation

No major visual content. The slide is text-based and introduces the importance of JavaScript-based event listeners.

### Explanation

An event is something that happens on a webpage, such as:

- Button click
- Keyboard input
- Mouse movement
- Form submission

Instead of writing event code inside HTML like `onclick="functionName()"`, better practice is to keep HTML and JavaScript separate by using `addEventListener()` in the JavaScript file.

### Visual/Text Diagram

~~~text
HTML structure only
        +
JavaScript behavior using addEventListener()
        ↓
Cleaner code + better separation of concerns
~~~

### Exam Tip

Use these keywords in written answers: **separation of concerns**, **readability**, **does not overwrite existing handlers**, **multiple handlers allowed**.

### Common Mistake

Thinking `addEventListener()` replaces all existing handlers. It does not overwrite existing event handlers.

---

## Page 16 — addEventListener() Advantages Continued

### Original Slide Content

- The other advantage of using the `addEventListener()` method is that you get control of the event bubbling, which means how the event propagates through the DOM nodes.
- You can remove an event listener by using the `removeEventListener()` method.

### Visual Explanation

No major visual content.

### Explanation

Event propagation means how an event moves through the DOM. When a child element is clicked, the event can move upward through its parent elements. This is called event bubbling.

`removeEventListener()` can be used when an event should no longer trigger a function.

### Visual/Text Diagram

~~~text
Click on child button
        ↓
Button receives event
        ↓
Parent div may receive event
        ↓
Body/document may receive event

This upward movement is event bubbling.
~~~

### Exam Tip

For theory questions, define event bubbling as event propagation through DOM nodes, usually from child to parent.

### Common Mistake

Confusing event bubbling with repeated clicking. Bubbling is about event movement through the DOM hierarchy, not about clicking many times.

---

## Page 17 — The addEventListener() Method

### Original Slide Content

- Syntax
- Where:
  - `element` is the element on which we add the eventListener.
  - `event` is the event that we are listening for.
  - `function` is the function that gets called when the event is triggered. This can be a defined function or an anonymous function.
  - `useCapture` is a boolean that specifies whether we use the event bubbling (`false`, also default option) or event capturing (`true`). This parameter is optional.

### Code from Slide

~~~javascript
element.addEventListener(event, function, useCapture);
~~~

### Visual Explanation

The slide shows the general syntax of `addEventListener()` and then explains each parameter.

### Explanation

`addEventListener()` connects an event to a function.

Example meaning:

~~~javascript
button.addEventListener("click", calculate);
~~~

This means: “When the button is clicked, run the `calculate` function.”

### Visual/Text Diagram

~~~text
Element
  + Event type
  + Function to run
  + Optional useCapture
        ↓
addEventListener()
        ↓
Function runs when event happens
~~~

### Exam Tip

Memorize the syntax order: **element → event → function → useCapture**.

### Common Mistake

Writing the event name without quotes, such as `click` instead of `"click"`.

---

## Page 18 — Example: Change Background Color

### Original Slide Content

- Example – Change Background color

### Code from Slide

Code reconstructed from slide visual:

~~~html
<div id="turnPurple" style="height:150px; width:150px; border: solid thin black; margin: 10px">
</div>
<div id="clearPurple" style="height:150px; width:150px; border: solid thin black; margin: 10px">
</div>
<script>
document.getElementById("turnPurple").addEventListener("click", function() {
        document.getElementById("turnPurple").style.backgroundColor = "purple";
});
document.getElementById("clearPurple").addEventListener("click", function() {
        document.getElementById("turnPurple").style.backgroundColor = "white";
});
</script>
~~~

### Output/Result from Slide

The page displays two bordered boxes:

- First box text: “Click Me I'll turn purple”
- Second box text: “Click Me to clear purple”

Clicking the first box turns the `turnPurple` box purple. Clicking the second box changes the `turnPurple` box back to white.

### Visual Explanation

The visual contains code and the rendered output. It demonstrates direct style manipulation using `.style.backgroundColor` inside click event listeners.

### Explanation

This example attaches two click handlers:

1. First handler changes background color to purple.
2. Second handler changes background color back to white.

It shows how DOM events and CSS changes work together.

### Visual/Text Diagram

~~~text
Click #turnPurple
        ↓
backgroundColor = "purple"

Click #clearPurple
        ↓
#turnPurple backgroundColor = "white"
~~~

### Exam Tip

This is a strong practical question example. You may be asked to write JavaScript to change an element’s background color on click.

### Common Mistake

Changing the wrong element. In this example, even the `clearPurple` click changes the `turnPurple` element, not itself.

---

## Page 19 — Example 1: Simple Counter

### Original Slide Content

- Example 1 – Simple Counter
- Click Counter

### Code from Slide

Code reconstructed from slide visual:

~~~html
<h2>Click Counter</h2>
<button id="btn">Click Me</button>
<div id="count">0</div>

<script>
    const button = document.querySelector("#btn");
    const counterDisplay = document.querySelector("#count");

    let count = 0;

    button.addEventListener("click", function() {
        count++;
        counterDisplay.textContent = count;
    });
</script>
~~~

### Output/Result from Slide

The slide output shows:

- A heading: “Click Counter”
- A button: “Click Me”
- A displayed number, shown as `7` in the screenshot after multiple clicks.

### Visual Explanation

The visual shows both the web page and the JavaScript code. Each click increases the counter by 1 and updates the displayed value.

### Explanation

The counter uses a variable named `count`. Every time the button is clicked:

1. `count++` increases the number by 1.
2. `counterDisplay.textContent = count;` updates the visible number.

### Visual/Text Diagram

~~~text
Initial count = 0
        ↓ click
count = 1 → display 1
        ↓ click
count = 2 → display 2
        ↓ click
count = 3 → display 3
~~~

### Exam Tip

For counter programs, remember three parts: **button reference**, **counter variable**, **event listener**.

### Common Mistake

Declaring `count` inside the click function. That would reset it every time. It should be outside the function.

---

## Page 20 — Example 2: Character Count

### Original Slide Content

- Example 2 – Character Count
- Live Character Counter

### Code from Slide

Code reconstructed from slide visual:

~~~html
<h2>Live Character Counter</h2>
<textarea id="textBox"></textarea>
<div id="charCount">Characters: 0</div>

<script>
    const textBox = document.querySelector("#textBox");
    const charCount = document.querySelector("#charCount");

    textBox.addEventListener("input", function(event) {
        charCount.textContent =
            "Characters: " + event.target.value.length;
    });
</script>
~~~

### Output/Result from Slide

The slide output shows:

- Heading: “Live Character Counter”
- A textarea containing text similar to “hi there,”
- A display line showing `Characters: 10`

### Visual Explanation

The visual shows a textarea and a character counter. The counter updates as the user types because the `input` event fires whenever the textarea value changes.

### Explanation

`event.target.value` gives the current text inside the textarea. `.length` counts how many characters are in that text. This value is then shown in the `charCount` div.

### Visual/Text Diagram

~~~text
User types in textarea
        ↓
input event fires
        ↓
event.target.value.length calculated
        ↓
Characters count displayed
~~~

### Exam Tip

For live input updates, use the `input` event, not only the `click` event.

### Common Mistake

Using a button click for live character counting. A live counter should react to the `input` event.

---

## Page 21 — Example 03: Add Form to index.html

### Original Slide Content

- Add following under `<!-- form -->` comment in `index.html`.

### Code from Slide

Code reconstructed from slide visual:

~~~html
<!-- form -->
<form method="get">
    <fieldset>
        <legend>Calculate wages</legend>
        <p>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
        </p>
        <p>
            <label for="hours">Hours worked:</label>
            <input type="number" id="hours" min="0" name="hours">
        </p>
    </fieldset>
    <button type="button" id="calculate">Calculate</button>
</form>
~~~

### Visual Explanation

The visual shows a form structure for calculating wages. It contains:

- A form with method `get`
- A fieldset
- A legend saying “Calculate wages”
- A text input for name
- A number input for hours worked
- A button with ID `calculate`

### Explanation

This form collects user input. The `id` values are important because JavaScript will use them to access the elements:

- `id="name"` for the name input
- `id="hours"` for the hours worked input
- `id="calculate"` for the button

### Visual/Text Diagram

~~~text
form
├── fieldset
│   ├── legend: Calculate wages
│   ├── name input     → id="name"
│   └── hours input    → id="hours"
└── button             → id="calculate"
~~~

### Exam Tip

For form-based practical questions, always check IDs. JavaScript usually selects form elements using their IDs.

### Common Mistake

Forgetting `type="button"`. If a button inside a form defaults to submit behavior, the page may reload before JavaScript output is seen.

---

## Page 22 — Identify Interactive Elements

### Original Slide Content

- User can interact with:
  - Text field with `id=name`
  - Text field with `id=hours`
  - Button with `id=calculate`
  - Hourly rate = Rs.550
- Program can output values to:
  - Paragraph with `id=output`
- Need to listen for events:
  - Click calculate button

### Visual Explanation

The visual shows the wage calculation form. Colored outlines highlight:

- Input fields for name and hours.
- Calculate button.
- Output area where the result will be displayed.

### Explanation

Before writing JavaScript, identify:

1. Inputs: what the user gives.
2. Button/event: what action triggers calculation.
3. Output area: where the result appears.
4. Constant value: hourly rate is Rs.550.

### Visual/Text Diagram

~~~text
User input: name
User input: hours
        ↓
Click Calculate button
        ↓
JavaScript calculates wages
        ↓
Output paragraph displays result
~~~

### Exam Tip

In practical questions, first list interactive elements. This prevents selecting the wrong ID in JavaScript.

### Common Mistake

The slide says output goes to a paragraph with `id=output`, so JavaScript must also get a reference to that output element. Do not only select inputs and button.

---

## Page 23 — TO DO: Get Reference, Add Event Listener

### Original Slide Content

- First in your code in `main.js`, we are getting the references to the interactive elements.
- Next append the following code to `main.js` to listen for when the user clicks the `btnCalculate` and execute `calculate` when they do.

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
const btnCalculate = document.getElementById("calculate");
~~~

~~~javascript
//add event listener
btnCalculate.addEventListener("click", calculate);
~~~

### Visual Explanation

The slide shows two required steps:

1. Store the calculate button reference.
2. Attach a click event listener to that button.

### Explanation

This code means: when the button with ID `calculate` is clicked, run the function named `calculate`.

The function itself is implemented later.

### Visual/Text Diagram

~~~text
Button id="calculate"
        ↓
btnCalculate variable
        ↓
addEventListener("click", calculate)
        ↓
calculate() runs when clicked
~~~

### Exam Tip

When passing a named function to `addEventListener`, write `calculate`, not `calculate()`. Writing `calculate()` runs the function immediately.

### Common Mistake

Using `calculate()` inside `addEventListener`. Correct: `addEventListener("click", calculate)`.

---

## Page 24 — TO DO: Implement Event Handler

### Original Slide Content

- Append the following code to `main.js` to handle the click event on `btnCalculate`.
- Refresh `index.html` in browser.
  - Click calculate button to check that `calculate` is called correctly.
  - `calculate` should be displayed in the Console window each time the button is clicked.

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
//implement calculate event handler
function calculate() {
    console.log("calculate");
}
~~~

### Visual Explanation

The slide shows a basic event handler function. It does not calculate wages yet. It only logs the word `calculate` to confirm that the button click correctly calls the function.

### Explanation

This is a debugging step. Before writing full calculation logic, check whether the event listener works.

If the console shows `calculate` every time the button is clicked, the event connection is correct.

### Visual/Text Diagram

~~~text
Click Calculate button
        ↓
calculate() function runs
        ↓
Console displays: calculate
~~~

### Exam Tip

In practical programming, test event handlers before adding full logic. It makes debugging easier.

### Common Mistake

Skipping this check and writing the whole calculation first. If the result does not work, you will not know whether the problem is the event listener or the calculation logic.

---

## Page 25 — TO DO: Encode Calculate

### Original Slide Content

- Calculate function with the following:
- One line is missing, complete that line as well.
- Refresh `index.html` in browser.
  - Enter data in the required fields and click the calculate button.

### Code from Slide

Code reconstructed from slide visual:

~~~javascript
const hourlyRate = 550;
const name = document.getElementById("name").value;
let hours = parseInt(document.getElementById("hours").value);
const takeHome = hourlyRate * hours;
txtOutput.innerText = `${name} worked ${hours} hours
    Take home pay is: £${takeHome.toFixed(2)}`;
~~~

### Missing Line to Complete the Task

The slide says one line is missing. Based on Page 22, the program outputs to a paragraph with `id=output`. Therefore, the missing line should get a reference to that output element:

~~~javascript
const txtOutput = document.getElementById("output");
~~~

A complete version of the function would be:

~~~javascript
function calculate() {
    const hourlyRate = 550;
    const name = document.getElementById("name").value;
    let hours = parseInt(document.getElementById("hours").value);
    const takeHome = hourlyRate * hours;
    const txtOutput = document.getElementById("output");
    txtOutput.innerText = `${name} worked ${hours} hours
    Take home pay is: £${takeHome.toFixed(2)}`;
}
~~~

### Visual Explanation

The visual shows wage calculation logic. It reads the name and hours from the form, multiplies hours by `550`, and writes the result to `txtOutput.innerText`.

### Explanation

The calculation flow is:

1. Set hourly rate to `550`.
2. Read the employee/student name.
3. Read hours worked and convert it into an integer using `parseInt()`.
4. Calculate take-home pay.
5. Output a formatted message.

`toFixed(2)` formats the final payment amount to two decimal places.

### Visual/Text Diagram

~~~text
Name input + Hours input
        ↓
Read values using getElementById()
        ↓
hours × 550
        ↓
Format using toFixed(2)
        ↓
Display in output paragraph
~~~

### Exam Tip

For calculation questions, mention `parseInt()` or `parseFloat()` when reading numeric input from form fields because input values are read as strings.

### Common Mistake

Forgetting to select the output element before using `txtOutput.innerText`. If `txtOutput` is not defined, JavaScript gives an error.

---

## Page 26 — Thank You

### Original Slide Content

- Thank You!
- BSc (Hons) in Information Technology
- Page 26 / 26

### Visual Explanation

This is the closing slide. No technical content is shown.

### Explanation

The lecture ends after the wage-calculation example.

### Exam Tip

No direct exam content.

### Common Mistake

No major common mistake.

---

# Important Definitions

## DOM

### Definition

The Document Object Model is a programming representation of an HTML document, where page elements can be accessed and manipulated using JavaScript.

### Simple Meaning

The DOM is the structure JavaScript uses to find and change webpage content.

### Example

~~~javascript
document.getElementById("name")
~~~

---

## DOM Element Reference

### Definition

A DOM element reference is a JavaScript variable that stores access to an element from the HTML document.

### Simple Meaning

You save the selected HTML element into a variable so you can use it later.

### Example

~~~javascript
const txtIn = document.getElementById("in");
~~~

---

## Attribute

### Definition

An attribute is extra information added to an HTML element, usually inside the opening tag.

### Simple Meaning

Attributes describe or configure HTML elements.

### Example

~~~html
<img src="images/happy.jpg">
~~~

---

## `querySelector()`

### Definition

`querySelector()` returns the first element in the document that matches a CSS selector.

### Simple Meaning

It finds the first matching element.

### Example

~~~javascript
document.querySelector(".para")
~~~

---

## `querySelectorAll()`

### Definition

`querySelectorAll()` returns a static/non-live list of all elements matching a CSS selector.

### Simple Meaning

It finds all matching elements, but the returned list does not automatically update after later DOM changes.

### Example

~~~javascript
document.querySelectorAll("p")
~~~

---

## Live Node List

### Definition

A live node list is a DOM collection that updates automatically when matching elements are added or removed from the document.

### Simple Meaning

The list stays connected to the page.

### Example

~~~javascript
document.getElementsByClassName("box")
~~~

---

## Non-Live Node List

### Definition

A non-live node list is a static snapshot of matching elements at the time the selector was executed.

### Simple Meaning

The list does not update by itself after DOM changes.

### Example

~~~javascript
document.querySelectorAll(".box")
~~~

---

## Event Listener

### Definition

An event listener is JavaScript code that waits for a specific event and runs a function when that event occurs.

### Simple Meaning

It tells JavaScript what to do when the user clicks, types, or interacts.

### Example

~~~javascript
button.addEventListener("click", calculate);
~~~

---

## Event Bubbling

### Definition

Event bubbling is the process where an event starts at the target element and propagates upward through its parent DOM nodes.

### Simple Meaning

A child element receives the event first, then the event can move up to parent elements.

### Example

Clicking a button inside a `<div>` may trigger the button’s listener first and then the div’s listener.

---

# Comparison Tables

## DOM Selection Methods

| Method | Returns | Selector Style | Live/Non-Live | Use Case |
|---|---|---|---|---|
| `getElementById()` | One element | ID only | Not a list | Select one unique element |
| `querySelector()` | First matching element | CSS selector | Not a list | Select first match by ID/class/tag/nesting |
| `getElementsByTagName()` | Multiple elements | Tag name | Live | Select all elements by tag |
| `getElementsByName()` | Multiple elements | Name attribute | Live | Select form elements by name |
| `getElementsByClassName()` | Multiple elements | Class name | Live | Select all elements by class |
| `querySelectorAll()` | Multiple elements | CSS selector | Non-live/static | Select all elements by CSS selector |

## Attribute Methods

| Method | Purpose | Example |
|---|---|---|
| `getAttribute()` | Reads an attribute value | `pic.getAttribute("src")` |
| `setAttribute()` | Adds or updates an attribute | `pic.setAttribute("src", "images/happy.jpg")` |
| `removeAttribute()` | Removes an attribute | `first.removeAttribute("class")` |
| `hasAttribute()` | Checks if attribute exists | `pic.hasAttribute("src")` |

## `querySelector()` vs `querySelectorAll()`

| Feature | `querySelector()` | `querySelectorAll()` |
|---|---|---|
| Number of elements | First matching element only | All matching elements |
| Return type | Single element | NodeList |
| CSS selectors | Yes | Yes |
| Live update | Not applicable | Non-live/static |
| Example | `document.querySelector("p")` | `document.querySelectorAll("p")` |

## Live List vs Non-Live List

| Feature | Live List | Non-Live List |
|---|---|---|
| Updates after DOM changes | Yes | No |
| Example method | `getElementsByClassName()` | `querySelectorAll()` |
| Behavior | Always reflects current DOM | Snapshot of DOM at selection time |
| Exam keyword | Live node list | Static/non-live node list |

## `innerText`, `textContent`, and `value`

| Property | Used For | Example |
|---|---|---|
| `.value` | Reading/writing form input values | `txtIn.value` |
| `.innerText` | Changing visible text in an element | `txtOut.innerText = "result"` |
| `.textContent` | Changing text content without HTML rendering | `charCount.textContent = "Characters: 10"` |

---

# Full Lecture Summary

Lecture 05 explains how to manipulate the DOM more deeply using JavaScript. It begins by reviewing how to access HTML elements, store references, read input values using `.value`, and display output using `.innerText`.

The lecture then introduces flexible element selection with `querySelector()` and CSS selectors such as `#id`, `.class`, `div p`, and `div, p`. A key rule is that `querySelector()` returns only the first matching element, while `querySelectorAll()` returns all matching elements as a non-live list.

The lecture also covers HTML attribute manipulation. After selecting an element, JavaScript can read, change, remove, or check attributes using `getAttribute()`, `setAttribute()`, `removeAttribute()`, and `hasAttribute()`. This allows actions such as changing an image source or changing/removing CSS classes.

Next, the lecture explains retrieving multiple elements using methods such as `getElementsByTagName()`, `getElementsByName()`, `getElementsByClassName()`, and `querySelectorAll()`. The important exam concept is the difference between live and non-live lists. Live lists update automatically when the DOM changes, but non-live lists from `querySelectorAll()` do not.

The final major topic is event handling. The lecture explains why `addEventListener()` is better than placing event handlers directly inside HTML. It improves separation of concerns, readability, allows multiple handlers, and gives control over event bubbling/capturing. Practical examples include changing background color, creating a click counter, creating a live character counter, and calculating wages from form input.

---

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| DOM | JavaScript-accessible structure of an HTML page | `document` |
| Element reference | Variable storing access to an HTML element | `const btn = document.getElementById("calculate")` |
| Attribute | Extra information in an HTML tag | `src`, `class`, `id` |
| `getElementById()` | Gets one element by ID | `document.getElementById("name")` |
| `querySelector()` | Gets first element matching a CSS selector | `document.querySelector(".para")` |
| `querySelectorAll()` | Gets all elements matching a CSS selector | `document.querySelectorAll("p")` |
| Live list | List that updates when DOM changes | `getElementsByClassName()` |
| Non-live list | Static list that does not update automatically | `querySelectorAll()` |
| Event listener | Code that listens for user/browser events | `addEventListener("click", fn)` |
| Event bubbling | Event propagation from child to parent nodes | Button click bubbling to div |
| `value` | Form input value property | `input.value` |
| `innerText` | Visible text property | `output.innerText = "Done"` |
| `textContent` | Text content property | `count.textContent = count` |
| `setAttribute()` | Adds/changes attribute | `setAttribute("class", "blue")` |
| `removeAttribute()` | Removes attribute | `removeAttribute("class")` |
| `hasAttribute()` | Checks attribute existence | `hasAttribute("src")` |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| DOM manipulation pattern | Select → read/change → output | 03 |
| `getElementById()` | Selects element by unique ID | 03-04 |
| `querySelector()` | CSS selector, first match only | 04-05 |
| Attribute methods | Read/change/remove/check attributes | 06-07 |
| CSS class manipulation | Use `setAttribute()` / `removeAttribute()` | 08-09 |
| Multiple elements | Use DOM collection methods | 10-11 |
| Live vs non-live lists | Live updates; static does not | 10-13 |
| CSS selector differences | `div p` vs `div, p` | 14 |
| `addEventListener()` | Adds handler without overwriting | 15-17 |
| Background color example | Click event changes CSS style | 18 |
| Counter example | Increment variable and update display | 19 |
| Character counter | Use `input` event and `.length` | 20 |
| Form wage example | Read inputs, calculate, output result | 21-25 |

---

# Important Code Snippets

## Page 03 — Basic DOM Access and Output

~~~javascript
const txtIn = document.getElementById("in");
const txtOut = document.getElementById("out");
let input = txtIn.value;
txtOut.innerText = "result";
~~~

**Explanation:** Gets input and output elements, reads input value, and displays result.

## Page 04 — DOM Selection with ID and CSS Selectors

~~~javascript
const element1 = document.getElementById("id");
const element2 = document.querySelector("#id");
const element3 = document.querySelector(".class");
const element4 = document.querySelector("div p");
~~~

**Explanation:** Shows different ways to select elements from the DOM.

## Page 05 — Class Selector with `querySelector()`

~~~html
<button onClick="checkVal()">Click Me</button>
<p class="para">Hello World</p>
<h3 class="para">Hello World</h3>
<script>
Function checkVal(){
const element3 = document.querySelector(".para");
paragraph.textContent = "Button Clicked!"
}
</script>
~~~

**Explanation:** Demonstrates selecting the first matching element with class `para`.

## Page 07 — Change Image `src`

~~~javascript
const pic = document.querySelector("img");
console.log(pic.hasAttribute("src"));
console.log(pic.getAttribute("src"));
pic.setAttribute("src", "images/happy.jpg");
console.log(pic.getAttribute("src"));
~~~

**Explanation:** Checks, reads, and changes an image source attribute.

## Page 11 — Loop Through Paragraphs

~~~javascript
const allParas = document.querySelectorAll("p");

for (let i = 0; i < allParas.length; i++) {
    allParas[i].setAttribute("class", "blue");
}
~~~

**Explanation:** Applies a class to all selected paragraphs.

## Page 17 — `addEventListener()` Syntax

~~~javascript
element.addEventListener(event, function, useCapture);
~~~

**Explanation:** General syntax for attaching an event handler to an element.

## Page 19 — Simple Counter

~~~javascript
const button = document.querySelector("#btn");
const counterDisplay = document.querySelector("#count");

let count = 0;

button.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});
~~~

**Explanation:** Increases a counter every time the button is clicked.

## Page 20 — Live Character Counter

~~~javascript
const textBox = document.querySelector("#textBox");
const charCount = document.querySelector("#charCount");

textBox.addEventListener("input", function(event) {
    charCount.textContent =
        "Characters: " + event.target.value.length;
});
~~~

**Explanation:** Counts characters as the user types.

## Page 21 — Wage Form HTML

~~~html
<form method="get">
    <fieldset>
        <legend>Calculate wages</legend>
        <p>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
        </p>
        <p>
            <label for="hours">Hours worked:</label>
            <input type="number" id="hours" min="0" name="hours">
        </p>
    </fieldset>
    <button type="button" id="calculate">Calculate</button>
</form>
~~~

**Explanation:** HTML form for collecting name and worked hours.

## Page 23-25 — Wage Calculation Logic

~~~javascript
const btnCalculate = document.getElementById("calculate");

//add event listener
btnCalculate.addEventListener("click", calculate);

//implement calculate event handler
function calculate() {
    const hourlyRate = 550;
    const name = document.getElementById("name").value;
    let hours = parseInt(document.getElementById("hours").value);
    const takeHome = hourlyRate * hours;
    const txtOutput = document.getElementById("output");
    txtOutput.innerText = `${name} worked ${hours} hours
    Take home pay is: £${takeHome.toFixed(2)}`;
}
~~~

**Explanation:** Adds a click listener, reads form data, calculates wage, and displays the result.

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 03 | Boxed DOM access code | Shows selection, value reading, and output display |
| 04 | CSS selector examples | Shows ID, class, and nested selection using `querySelector()` |
| 05 | HTML with repeated class | Shows `querySelector()` selects first matching class only |
| 07 | Image attribute change | Shows changing `src` changes displayed image |
| 08 | Class attribute code | Shows changing/removing CSS class with JavaScript |
| 10 | Live/non-live grouping | Shows which methods return live vs static lists |
| 11 | Looping examples | Shows selecting all paragraphs and applying classes |
| 12 | Advanced CSS selectors | Shows `querySelectorAll()` with detailed selectors |
| 13 | Live vs static demo | Shows live list updates, static list does not |
| 14 | Multiple selector effects | Shows tag selection, descendant selection, and comma-separated selection |
| 18 | Background color demo | Shows click-based CSS style change |
| 19 | Click counter output | Shows event listener updating counter display |
| 20 | Character counter output | Shows input event updating character count |
| 21 | Wage form HTML | Shows form structure and IDs used by JavaScript |
| 22 | Highlighted form areas | Shows interactive inputs, button, and output area |
| 25 | Calculation code | Shows wage calculation from form inputs |

---

# Likely Exam Questions and Short Answers

## Question 1

What is DOM manipulation?

**Expected Answer:**
DOM manipulation is using JavaScript to access and change HTML elements, attributes, content, styles, and events in a webpage.

## Question 2

What is the difference between `getElementById()` and `querySelector()`?

**Expected Answer:**
`getElementById()` selects one element by its unique ID. `querySelector()` selects the first element matching any CSS selector such as ID, class, tag, or nested selector.

## Question 3

What does `querySelector(".para")` return?

**Expected Answer:**
It returns the first element in the document with class `para`.

## Question 4

Write JavaScript to change an image source to `images/happy.jpg`.

**Expected Answer:**

~~~javascript
const pic = document.querySelector("img");
pic.setAttribute("src", "images/happy.jpg");
~~~

## Question 5

Name four methods used to work with attributes.

**Expected Answer:**
`getAttribute()`, `setAttribute()`, `removeAttribute()`, and `hasAttribute()`.

## Question 6

What is the difference between a live list and a non-live list?

**Expected Answer:**
A live list updates automatically when the DOM changes. A non-live list is static and does not update after it is created.

## Question 7

Which method returns a non-live list?

**Expected Answer:**
`querySelectorAll()` returns a non-live/static node list.

## Question 8

What is the effect of this selector: `querySelectorAll("div p")`?

**Expected Answer:**
It selects all `<p>` elements that are inside `<div>` elements.

## Question 9

What is the effect of this selector: `querySelectorAll("div, p")`?

**Expected Answer:**
It selects all `<div>` elements and all `<p>` elements.

## Question 10

Why is `addEventListener()` better than adding events directly in HTML?

**Expected Answer:**
It separates HTML from JavaScript, improves readability, allows multiple event handlers, and gives better control over event propagation.

## Question 11

Write the syntax of `addEventListener()`.

**Expected Answer:**

~~~javascript
element.addEventListener(event, function, useCapture);
~~~

## Question 12

What is event bubbling?

**Expected Answer:**
Event bubbling is when an event starts at the target element and propagates upward through parent DOM nodes.

## Question 13

Write JavaScript for a simple button click counter.

**Expected Answer:**

~~~javascript
const button = document.querySelector("#btn");
const counterDisplay = document.querySelector("#count");
let count = 0;

button.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});
~~~

## Question 14

Which event is suitable for a live character counter?

**Expected Answer:**
The `input` event is suitable because it fires whenever the user changes the text.

## Question 15

Why is `parseInt()` used when reading hours from an input field?

**Expected Answer:**
Input values are read as strings, so `parseInt()` converts the hours value into a number before calculation.

---

# Common Mistakes to Avoid

- Writing `document.querySelector("id")` for an ID selector. Correct form is `document.querySelector("#id")`.
- Thinking `querySelector()` selects all matching elements. It selects only the first match.
- Thinking `querySelectorAll()` returns a live list. It returns a non-live/static list.
- Confusing `"div p"` with `"div, p"`.
- Forgetting that DOM collection indexes start from `0`.
- Using `.value` on normal display elements instead of input fields.
- Using `.innerText` when the task is to read an input field value.
- Forgetting to get an element reference before changing it.
- Writing `calculate()` instead of `calculate` inside `addEventListener()`.
- Declaring a counter variable inside the event function, causing it to reset on every click.
- Forgetting to convert input strings to numbers before arithmetic.
- Forgetting to define/select `txtOutput` before using `txtOutput.innerText`.
- Confusing event bubbling with multiple clicks.
- Changing HTML event attributes directly instead of using `addEventListener()` when separation of concerns is required.

---

# Final One-Page Revision Notes

## Core Flow of DOM Manipulation

~~~text
Select element
      ↓
Read value / attribute / text
      ↓
Process data
      ↓
Change text / attribute / style / class
      ↓
Display result
~~~

## Must-Remember Methods

| Method/Property | Meaning |
|---|---|
| `getElementById("id")` | Select one element by ID |
| `querySelector("selector")` | Select first matching element |
| `querySelectorAll("selector")` | Select all matching elements as static list |
| `getElementsByClassName("class")` | Select live list by class |
| `getAttribute("attr")` | Read attribute |
| `setAttribute("attr", "value")` | Add/change attribute |
| `removeAttribute("attr")` | Remove attribute |
| `hasAttribute("attr")` | Check attribute |
| `.value` | Read input value |
| `.innerText` | Set visible text |
| `.textContent` | Set text content |
| `addEventListener()` | Attach event handler |
| `removeEventListener()` | Remove event handler |

## Critical Comparisons

| Concept A | Concept B | Difference |
|---|---|---|
| `querySelector()` | `querySelectorAll()` | First match vs all matches |
| Live list | Non-live list | Updates automatically vs static snapshot |
| `.value` | `.innerText` | Input value vs visible element text |
| `div p` | `div, p` | Paragraphs inside div vs divs and paragraphs |
| Inline event | `addEventListener()` | Mixed HTML/JS vs separated JS behavior |

## Event Listener Pattern

~~~javascript
const element = document.getElementById("id");
element.addEventListener("click", functionName);

function functionName() {
    // code to run when event happens
}
~~~

## Wage Calculation Pattern

~~~javascript
function calculate() {
    const hourlyRate = 550;
    const name = document.getElementById("name").value;
    let hours = parseInt(document.getElementById("hours").value);
    const takeHome = hourlyRate * hours;
    const txtOutput = document.getElementById("output");
    txtOutput.innerText = `${name} worked ${hours} hours
    Take home pay is: £${takeHome.toFixed(2)}`;
}
~~~

## Exam Keywords

- DOM
- Element reference
- CSS selector
- Attribute node
- `getAttribute()`
- `setAttribute()`
- `removeAttribute()`
- `hasAttribute()`
- Live node list
- Non-live/static node list
- Event listener
- Separation of concerns
- Event bubbling
- Event capturing
- `input` event
- `click` event
- `parseInt()`
- `toFixed(2)`

---

# Execution Checklist

- [x] Read the uploaded PDF.
- [x] Read the uploaded TXT file.
- [x] Compared PDF and TXT.
- [x] Followed original PDF page order exactly.
- [x] Added page numbers for every slide/page.
- [x] Included every text point from the lecture.
- [x] Preserved all visible code in Markdown code blocks.
- [x] Reconstructed code from PDF visual where TXT omitted it.
- [x] Included HTML and JavaScript snippets.
- [x] Did not render HTML/XML tags.
- [x] Described every important image, diagram, screenshot, and visual.
- [x] Added explanations for difficult points.
- [x] Added useful text diagrams.
- [x] Added comparison tables.
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
- [x] Created only one downloadable `.md` file.
- [x] Did not create PDF.
