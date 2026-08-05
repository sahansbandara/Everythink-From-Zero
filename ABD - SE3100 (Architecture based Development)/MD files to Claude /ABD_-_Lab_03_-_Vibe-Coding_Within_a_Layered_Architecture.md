# SE3100 — Architecture Based Development
## Lab Sheet 03 — Vibe-Coding Within a Layered Architecture

## Title Section

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Degree | BSc (Hons) in IT specializing in Software Engineering |
| Module code | SE3100 |
| Module name | Architecture Based Development |
| Academic period | Year 3 Semester 1 — 2026 |
| Lab number | Lab Sheet 03 |
| Lab title | Vibe-Coding Within a Layered Architecture |
| Activity type | Self-guided; may be attempted as a pair |
| Total PDF pages | 5 |

> **Source scope:** This Markdown file preserves the lab sheet and explains its architecture and prompting discipline. The source does not provide completed code for the Fines feature; it asks the student to generate and submit that work.

---

# Table of Contents

- [Page 01 — Objective, Layering Rule and Worked Example Structure Plan](#page-01--objective-layering-rule-and-worked-example-structure-plan)
  - [Objective](#objective)
  - [Before You Begin](#before-you-begin)
  - [Worked Example — Catalog Search Feature](#worked-example--catalog-search-feature)
- [Page 02 — Worked Example Implementation Prompts: Persistence and Business](#page-02--worked-example-implementation-prompts-persistence-and-business)
  - [Prompt 1 — Persistence](#prompt-1--persistence)
  - [Prompt 2 — Business](#prompt-2--business)
- [Page 03 — Presentation Prompt, Bad Prompt, Review and Fines Feature](#page-03--presentation-prompt-bad-prompt-review-and-fines-feature)
  - [Prompt 3 — Presentation](#prompt-3--presentation)
  - [Bad Prompt](#bad-prompt)
  - [Campus Library Portal — Fines Feature](#campus-library-portal--fines-feature)
- [Page 04 — Layer-by-Layer Guidelines and Student Tasks](#page-04--layer-by-layer-guidelines-and-student-tasks)
  - [Guidelines 2–6](#guidelines-26)
  - [Task 1 — Choose Your Tech Stack](#task-1--choose-your-tech-stack)
  - [Task 2 — Write the Structure Plan](#task-2--write-the-structure-plan)
  - [Task 3 — Implement It](#task-3--implement-it)
  - [Task 4 — Review the Output](#task-4--review-the-output)
  - [Task 5 — Discuss](#task-5--discuss)
- [Page 05 — Discussion Question, Submission and Final Guidelines](#page-05--discussion-question-submission-and-final-guidelines)
- [Major Topic Exam Sections](#major-topic-exam-sections)
- [Full Lab Summary](#full-lab-summary)
- [Important Diagrams, Signatures and Prompt Patterns](#important-diagrams-signatures-and-prompt-patterns)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions with Short Expected Answers](#likely-exam-questions-with-short-expected-answers)
- [Key Terms List](#key-terms-list)
- [Verification](#verification)

---

# Page-by-Page Notes

## Page 01 — Objective, Layering Rule and Worked Example Structure Plan

### Original Page Content

**SE3100: Architecture Based Development**

**Year 3 Semester 1 — 2026**

**BSc (Hons) in IT specializing in Software Engineering**

**Lab Sheet 03 — Vibe-Coding Within a Layered Architecture**

### Objective

This practical helps you apply architectural discipline while using an AI assistant to generate code ("vibe coding"). By the end, you should be able to:

- Plan a feature's layers before writing any prompts.
- Generate a feature layer-by-layer, keeping the AI within the boundaries you defined.
- Spot when a layer boundary has been broken and fix it.
- This is a self-guided activity.
- You may attempt this as a pair. Discussions are encouraged.
- You may consult the lab instructors at any time, but you are expected to carry out the steps on your own (as a pair).
- You are free to refer to any material online/offline.

### Before You Begin

**Why this matters:** An AI assistant can take the fastest path to satisfy whatever it is asked. It also has no memory of earlier, separate conversations. Therefore, asking for a whole feature in one prompt, or failing to restate a boundary, can cause the AI to take a shortcut such as reading the database directly from the presentation layer.

**The rule for this lab:** In a layered architecture, each layer may only call the layer directly below it:

```text
Presentation → Business → Persistence → Database
```

A layer must never skip ahead—for example, presentation calling persistence or the database directly—and must never call upward.

### Worked Example — Catalog Search Feature

The worked example shows the expected depth and format for a feature different from the Fines feature. It must be used as a reference and not reused as the student's own answer.

#### Sample Task 1 — Tech Stack

**Stack:** Node.js with Express + text file for data storage, for simplicity.

**Justification:** Lightweight, quick to prompt an AI for small isolated functions, and easy to read the generated output layer by layer.

#### Sample Task 2 — Structure Plan

| Layer | What it may call | Functions/responsibilities it must contain |
|---|---|---|
| Presentation | Business layer only | `displaySearchResults(query)` — shows book results to the student |
| Business | Persistence layer only | `searchBooks(query)` — applies search rules, such as partial title match |
| Persistence | Database layer only | `findBooksByTitle(query)` — retrieves matching rows |
| Database | — | Stores the book catalog table |

### Visual Explanation

The page uses a formal SLIIT lab-sheet layout and places the most important architecture rule in bold text. The bottom table assigns one responsibility and one permitted downward dependency to each layer.

```text
Student / User
      |
      v
Presentation
      |
      v
Business
      |
      v
Persistence
      |
      v
Database
```

**Why it matters:** The arrows represent allowed dependency direction. The system is not merely divided into folders; each layer is restricted from bypassing the layer below it.

### Explanation

The page defines the central problem: AI-generated code may be functionally correct but architecturally wrong. The lab therefore requires planning before prompting and explicit restrictions in every prompt.

**Definition: Layered architecture** — An architecture that separates responsibilities into ordered layers with controlled dependency direction.

**Simple meaning:** Each layer has one job and can communicate only through the approved layer beneath it.

**Definition: Layer boundary** — A rule defining what a layer may access and which responsibilities it may contain.

**Simple meaning:** The limit that prevents logic from leaking into the wrong part of the system.

### Exam Tip

Memorize the permitted direction exactly:

```text
Presentation → Business → Persistence → Database
```

### Common Mistake

Creating four folders is not enough. A layered architecture is broken if the presentation layer directly reads database data, even when the code still works.

---

## Page 02 — Worked Example Implementation Prompts: Persistence and Business

### Original Page Content

The final row of the worked-example structure plan is:

| Layer | What it may call | Functions/responsibilities it must contain |
|---|---|---|
| Database | — | Stores the book catalog table |

### Sample Task 3 — Implementation (Illustrative Only)

#### Good Prompts

### Prompt 1 — Persistence

The source prompt is:

```text
Generate a Persistence Layer function named findBooksByTitle(query).

Requirements
- Search the books table using a partial title match.
- Return matching book records.
- Return raw database data only.

Do NOT
- Apply business rules.
- Format the output.
- Generate UI code.
- Create API endpoints.
```

**Output 1:** `(generated function code)`

The source provides only this placeholder and does not include the generated code.

### Prompt 2 — Business

A persistence function already exists:

```javascript
findBooksByTitle(query)
```

The source prompt is:

```text
Generate a Business Layer function named searchBooks(query).

Requirements
- Call findBooksByTitle(query).
- Ignore queries shorter than 3 characters.
- Return an empty list when the query is too short.

Do NOT
- Access the database directly.
- Write SQL.
- Generate UI code.
```

**Output 2:** `(generated function code)`

The source provides only this placeholder and does not include the generated code.

### Visual Explanation

The page visually separates each prompt into four parts:

```text
Layer name and exact function name
            ↓
Requirements: what the code must do
            ↓
Do NOT: what the code must not do
            ↓
Generated output for that layer only
```

The persistence prompt owns raw retrieval only. The business prompt receives the exact persistence signature and adds a search-length rule without accessing the database.

### Explanation

The prompts define both positive and negative scope. Positive requirements are insufficient by themselves because an AI may add convenient behaviour. The `Do NOT` section establishes an explicit architectural boundary.

**Definition: Persistence layer** — The layer responsible for obtaining and storing data through the database boundary.

**Simple meaning:** It handles raw data access, not business decisions or presentation.

**Definition: Business layer** — The layer that applies business rules and coordinates operations using the persistence layer.

**Simple meaning:** It decides what the application should do with the data.

### Exam Tip

A layer prompt should contain the exact callable function from the layer below. Do not paraphrase the signature.

### Common Mistake

The business layer must not write SQL or access the database directly. It should call `findBooksByTitle(query)`.

---

## Page 03 — Presentation Prompt, Bad Prompt, Review and Fines Feature

### Original Page Content

### Prompt 3 — Presentation

A business function already exists:

```javascript
searchBooks(query)
```

The source prompt is:

```text
Generate a Presentation Layer function named displaySearchResults(query).

Requirements
- Call searchBooks(query).
- Display the matching books.
- Show a message when no books are found.

Do NOT
- Call the persistence layer.
- Access the database.
- Apply business rules.
```

**Output 3:** `(generated component code)`

The source provides only this placeholder and does not include the generated component code.

### Bad Prompt

```text
Build a feature that shows a student their overdue book fines. It should look up
their borrow records in the database, calculate the fine based on how many days
overdue the book is (e.g. Rs. 10.00/day), and display the total fine amount along
with a list of which books are overdue. Use Node.js with Express.
```

### Sample Task 4 — Review the Output

No violation was found in the worked example. Each generated piece called only the function signature explicitly provided in its prompt. No prompt requested more than one layer's logic. Restating each exact function signature in the next prompt kept the boundaries intact.

### Sample Task 5 — Discuss

The worked-example discussion states that explicitly writing what the new code must **NOT** do was the easiest step to forget because it felt repetitive. The repetition prevented the AI from defaulting to the fastest path when a reminder was missing.

### Campus Library Portal — Fines Feature

A university wants a portal where students can:

- Search the book catalog.
- Borrow and return books.
- View fines.

The student must build the **Fines feature** using the same process as the worked example.

### Guidelines to Follow While Building the Fines Feature

1. Before writing the first prompt, list what each layer is allowed to call. This is formally completed in Task 2, but it must be planned before prompting rather than filled in afterward to match whatever the AI generated.

### Visual Explanation

The page contrasts a disciplined single-layer presentation prompt with a bad whole-feature prompt.

| Good prompt characteristic | Bad prompt problem |
|---|---|
| Produces one layer only | Requests data access, business calculation and UI together |
| Names an exact function to call | Does not define dependency boundaries |
| Contains explicit `Do NOT` restrictions | Encourages the fastest implementation path |
| Can be reviewed against a structure plan | Makes layer ownership unclear |

### Explanation

The bad prompt is not rejected because the feature itself is invalid. It is bad because it combines presentation, business and persistence responsibilities in one request. This prevents architectural review and encourages boundary violations.

**Definition: Vibe coding** — Using an AI assistant to generate code primarily through natural-language instructions.

**Simple meaning:** Describing what to build and letting AI produce the code.

**Definition: Architectural violation** — Code that breaks the planned layer responsibilities or dependency direction.

**Simple meaning:** A layer calls or performs something it was not allowed to.

### Exam Tip

When reviewing a prompt, ask:

```text
Does this prompt request more than one layer's responsibility?
```

### Common Mistake

A prompt is not good merely because it mentions Node.js, Express or another framework. The crucial issue is whether it preserves layer responsibilities and call direction.

---

## Page 04 — Layer-by-Layer Guidelines and Student Tasks

### Original Page Content

### Guidelines 2–6

2. Generate one layer per prompt, in this order:

```text
Persistence → Business → Presentation
```

Never ask for the whole feature in one prompt. Each prompt should produce exactly one layer's code and nothing else.

3. In every prompt, state exactly which function or functions the new code may call and directly state what it must **NOT** do.

Example restriction:

```text
This must only call getFineBalance(studentId).
Do not access the database directly.
```

The restriction must be written every time rather than assumed.

4. After generating each layer, inspect whether it calls anything other than what was explicitly permitted. Even a working shortcut—such as directly reading a value instead of requesting it through the lower layer—is a violation. Fix the problem with a corrected prompt before generating the next layer.

5. Before writing the next prompt, copy the exact generated function names and parameters from the previous step into the new prompt. Do not re-describe the function; paste its actual signature so the AI builds against the implementation that exists rather than a guess.

6. After all three layers are generated, perform a final check between non-adjacent layers, such as presentation and persistence, and confirm that neither directly calls the other.

### Tasks

### Task 1 — Choose Your Tech Stack

State the language or framework to be used and justify the choice in one or two sentences.

### Task 2 — Write the Structure Plan

Complete the following table **before** writing any prompts:

| Layer | What it may call | Functions/responsibilities it must contain |
|---|---|---|
| Presentation |  |  |
| Business |  |  |
| Persistence |  |  |
| Database |  |  |

### Task 3 — Implement It

Using the Task 2 plan, generate the application with an AI assistant. For each of the three code layers, record:

- The exact prompt used.
- The exact code generated.

The final work must contain three prompt/output pairs:

1. Persistence.
2. Business.
3. Presentation.

### Task 4 — Review the Output

Check the generated code against the Task 2 plan.

- If a violation is found, describe it and show the corrected prompt and corrected output.
- If no violation is found, briefly explain what aspect of the prompting approach prevented violations.

### Task 5 — Discuss

Expected length: **3–4 sentences**.

### Visual Explanation

The page turns the architecture rule into a repeatable development workflow:

```text
1. Plan layer permissions
        ↓
2. Prompt persistence only
        ↓
3. Review and correct
        ↓
4. Copy exact signature
        ↓
5. Prompt business only
        ↓
6. Review and correct
        ↓
7. Copy exact signature
        ↓
8. Prompt presentation only
        ↓
9. Final non-adjacent-layer check
```

The blank Task 2 table is the control document used to evaluate all generated code.

### Explanation

The page makes review part of generation. The student should not wait until all code is produced. Every generated layer is checked immediately, and violations are corrected before the next dependency is created.

**Definition: Exact function signature** — The function name and parameter list exactly as generated.

**Simple meaning:** The real callable interface, such as `getFineBalance(studentId)`, copied without guessing.

**Definition: Non-adjacent layer check** — A final inspection confirming that layers separated by another layer do not communicate directly.

**Simple meaning:** Ensure presentation does not call persistence or database.

### Exam Tip

The generation order is the reverse of the runtime call direction:

| Activity | Order |
|---|---|
| Generate the code | Persistence → Business → Presentation |
| Runtime calls | Presentation → Business → Persistence → Database |

### Common Mistake

Do not complete the structure plan after code generation. Doing so would merely document the AI's output instead of controlling it.

---

## Page 05 — Discussion Question, Submission and Final Guidelines

### Original Page Content

### Task 5 Discussion Question

Which guideline was hardest to actually follow while prompting, and why? Was this different from what you expected before you started?

### Submission

Submit the prompts and the outputs you received.

### Some Guidelines

- Focus on the architectural reasoning behind each prompt—not on producing polished, production-ready code.
- The implementation may be minimal. It only needs to demonstrate layering discipline.
- Keep answers clear and concise.
- Do the thinking independently and use AI/LLM only to organize thoughts. Do not blindly depend on LLMs.

### Visual Explanation

This is the final submission page. It contains no technical diagram. Its large empty lower area visually indicates that the source lab sheet ends after concise submission guidance.

### Explanation

The assessment focus is architectural discipline, not code volume or production polish. The student is expected to show the prompt sequence, generated outputs and evidence of review.

### Exam Tip

A correct submission demonstrates:

```text
Plan → Prompt one layer → Record output → Review boundary
→ Correct if required → Continue → Final cross-layer check
```

### Common Mistake

Do not submit only final code. The source explicitly asks for the prompts and outputs received.

---

# Major Topic Exam Sections

## Major Topic 1 — Layered Architecture Boundaries

**Exam Tip:** State both responsibility separation and permitted dependency direction.

**Common Mistake:** Treating layered architecture as a folder-naming convention rather than a dependency rule.

### Likely Exam Questions

1. **Question:** What is the permitted call direction in this lab?  
   **Expected answer:** `Presentation → Business → Persistence → Database`.

2. **Question:** Why is presentation-to-database access a violation?  
   **Expected answer:** It skips the business and persistence layers, mixes responsibilities and breaks the planned dependency direction.

## Major Topic 2 — Prompting One Layer at a Time

**Exam Tip:** Every prompt should identify the target layer, exact function, allowed calls, requirements and prohibited actions.

**Common Mistake:** Asking for an entire feature in one prompt.

### Likely Exam Questions

1. **Question:** Why should persistence be generated before business and presentation?  
   **Expected answer:** Each higher layer needs the exact callable signature of the layer below, so the lower-level contract must exist first.

2. **Question:** Why include a `Do NOT` section?  
   **Expected answer:** It explicitly prevents the AI from adding responsibilities or dependencies outside the target layer.

## Major Topic 3 — Exact Signatures and Review

**Exam Tip:** Paste actual generated names and parameters into the next prompt.

**Common Mistake:** Rewriting a lower-layer function from memory or describing it loosely.

### Likely Exam Questions

1. **Question:** What should be checked after each layer is generated?  
   **Expected answer:** Whether it calls or performs anything not explicitly permitted by the structure plan and prompt.

2. **Question:** What is the purpose of the final non-adjacent-layer check?  
   **Expected answer:** To catch hidden shortcuts such as presentation directly calling persistence.

## Major Topic 4 — Submission and Architectural Reasoning

**Exam Tip:** The submission evidence is the sequence of prompts, exact generated outputs, review and any corrected prompt/output.

**Common Mistake:** Optimizing for polished code instead of a minimal demonstration of architecture discipline.

### Likely Exam Questions

1. **Question:** What should be submitted?  
   **Expected answer:** The prompts and outputs received, including the three persistence, business and presentation prompt/output pairs.

2. **Question:** What is the primary assessment focus?  
   **Expected answer:** The architectural reasoning and preservation of layer boundaries.

---

# Full Lab Summary

This lab teaches students to preserve layered architecture while using AI-generated code. AI assistants may choose the fastest implementation path unless every architectural boundary is stated explicitly. The required runtime dependency direction is:

```text
Presentation → Business → Persistence → Database
```

The student first plans the permitted calls and responsibilities of each layer. Code is then generated in the opposite order—persistence, business and presentation—because each upper layer must receive the exact function signature of the layer beneath it.

Every prompt should contain:

- The target layer.
- The exact function to generate.
- The exact lower-layer functions it may call.
- Positive requirements.
- A `Do NOT` section defining prohibited responsibilities and dependencies.

After each output, the student checks whether the code calls or performs anything beyond its permission. Violations must be corrected before moving upward. A final review compares non-adjacent layers and confirms that no shortcut bypasses the architecture.

The Fines feature is the student's required application. The catalog-search example demonstrates the required depth and format but must not be reused as the student's own solution. The source requires minimal code that demonstrates layering discipline, plus the exact prompts, outputs and a short reflection.

---

# Important Diagrams, Signatures and Prompt Patterns

## Runtime Dependency Direction

```text
Presentation
     |
     v
Business
     |
     v
Persistence
     |
     v
Database
```

## Code Generation Order

```text
Persistence → Business → Presentation
```

## Worked-Example Signatures

```javascript
findBooksByTitle(query)
searchBooks(query)
displaySearchResults(query)
```

## Recommended Prompt Structure

```text
Generate a [TARGET LAYER] function named [EXACT FUNCTION SIGNATURE].

Allowed calls
- [Exact function(s) from the layer directly below]

Requirements
- [Responsibility owned by this layer]
- [Required return/output behaviour]

Do NOT
- Access a lower non-adjacent layer
- Call upward
- Perform another layer's responsibilities
- Generate unrelated code
```

## Review Checklist

```text
Does the output call only explicitly permitted functions?
Does it contain only the target layer's responsibility?
Does it avoid direct access to non-adjacent layers?
Does the next prompt use the exact generated signature?
Does the final system preserve all planned boundaries?
```

## Important Formulas or Implemented Code

The source includes an illustrative fine rate inside a **bad prompt**—`Rs. 10.00/day`—but does not define it as the required Fines-feature rule and does not provide implemented source code. It should not be silently treated as the student's final specification.

---

# Key Definitions Table

| Term | Definition | Simple meaning |
|---|---|---|
| Vibe coding | Generating code through natural-language interaction with an AI assistant | Describe code and let AI produce it |
| Layered architecture | Architecture that separates responsibilities into ordered layers with controlled dependencies | Each layer has one job and allowed calls |
| Presentation layer | Layer responsible for user interaction and display | Shows results and accepts input |
| Business layer | Layer responsible for application and domain rules | Makes decisions |
| Persistence layer | Layer responsible for retrieving and storing data | Talks to the database boundary |
| Database layer | Data storage managed beneath persistence | Stores records |
| Layer boundary | Restriction on responsibilities and dependencies | What a layer may and may not do |
| Architecture violation | Code that breaks a planned layer boundary | A forbidden shortcut |
| Exact function signature | Actual function name and parameter list | The precise callable contract |
| Adjacent layer | The layer immediately above or below another layer | Direct neighbor |
| Non-adjacent layer | A layer separated by one or more layers | Must not be called directly |
| Structure plan | Table defining layer permissions and responsibilities before prompting | The architecture contract |
| Prompt/output pair | Exact AI prompt recorded together with the generated code | Evidence of the generation process |

---

# Quick Revision Table

| Topic | Must Remember | Page(s) | Importance |
|---|---|---:|---|
| Lab objective | Plan, generate one layer at a time, detect and fix violations | 1 | High |
| Runtime direction | Presentation → Business → Persistence → Database | 1 | Very High |
| Worked example plan | One responsibility and one permitted lower layer per row | 1–2 | High |
| Good prompts | Target layer + exact function + requirements + `Do NOT` | 2–3 | Very High |
| Bad prompt | Whole feature combines database, rules and display | 3 | Very High |
| Generation order | Persistence → Business → Presentation | 4 | Very High |
| Immediate review | Check each output before generating the next layer | 4 | Very High |
| Exact signatures | Paste actual generated signatures into later prompts | 4 | High |
| Final review | Check non-adjacent layers | 4 | High |
| Tasks | Tech stack, plan, implementation, review, discussion | 4–5 | High |
| Submission | Submit prompts and outputs | 5 | High |
| Assessment focus | Architectural reasoning, not production polish | 5 | Very High |

---

# Likely Exam Questions with Short Expected Answers

## Question 1

**Question:** Explain why an AI assistant may break a layered architecture.

**Expected answer:** It may choose the fastest implementation path and has no automatic knowledge of boundaries from separate prompts unless the restrictions are restated.

## Question 2

**Question:** State the permitted runtime call sequence.

**Expected answer:** Presentation calls Business, Business calls Persistence, and Persistence calls Database.

## Question 3

**Question:** State the required generation sequence.

**Expected answer:** Persistence first, then Business, then Presentation.

## Question 4

**Question:** Why are runtime direction and generation order different?

**Expected answer:** Runtime calls flow downward, but generation starts at the bottom so each higher layer can use the exact signature of the layer below.

## Question 5

**Question:** What makes the whole-feature Fines prompt architecturally weak?

**Expected answer:** It combines database access, fine calculation and presentation in one prompt and does not define layer permissions.

## Question 6

**Question:** What should a well-scoped layer prompt contain?

**Expected answer:** Target layer, exact function signature, allowed lower-layer calls, requirements and explicit prohibited actions.

## Question 7

**Question:** How should a boundary violation be handled?

**Expected answer:** Describe the violation, issue a corrected prompt, regenerate the output and verify it before continuing.

## Question 8

**Question:** What evidence should the student submit?

**Expected answer:** The exact prompts and outputs for persistence, business and presentation, plus review/corrections and the short discussion.

---

# Key Terms List

- SE3100
- Architecture Based Development
- Vibe coding
- AI assistant
- Layered architecture
- Presentation layer
- Business layer
- Persistence layer
- Database layer
- Dependency direction
- Layer boundary
- Architecture violation
- Structure plan
- Exact function signature
- Prompt restriction
- `Do NOT`
- Adjacent layer
- Non-adjacent layer
- Persistence-first generation
- Immediate review
- Corrected prompt
- Prompt/output pair
- Catalog Search feature
- Fines feature
- Architectural reasoning
- Minimal implementation
- Independent thinking

---

# Verification

- PDF page count checked directly: 5
- Markdown page sections checked: 5
- Exact page order preserved from Page 01 to Page 05
- All visible source text included
- Both source tables recreated as Markdown tables
- Layering and prompting flows recreated as tagged text diagrams
- Function signatures preserved in language-tagged JavaScript blocks
- The source's generated-code placeholders were preserved without inventing missing code
- Exam tips, common mistakes and likely questions added for every major topic

PDF pages: 5 / MD page sections: 5 ✅
