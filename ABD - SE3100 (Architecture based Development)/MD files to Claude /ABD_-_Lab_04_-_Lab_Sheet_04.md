# SE3100 - Architecture Based Development
## Lab Sheet 04 - Vibe-Coding Within a Micro-kernel Architecture

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Degree | BSc (Hons) in IT specializing in Software Engineering |
| Module code | SE3100 |
| Module name | Architecture Based Development |
| Academic period | Year 3 Semester 1 - 2026 |
| Lab sheet | Lab Sheet 04 |
| Title | Vibe-Coding Within a Micro-kernel Architecture |
| Author metadata | Anuradha Karunasena |
| Total PDF pages | 7 |

> **Source boundary:** This file follows the uploaded lab sheet page by page. The worked **Order Discount Calculator** is the source's illustrative example only. The actual student task is the **Campus Delivery Service - Shipping Cost Calculator**. The source explicitly says not to reuse the worked example as the student's own answer.

---

# Table of Contents

- [Page 01 - Objective, Before You Begin, and Microkernel Rules](#page-01---objective-before-you-begin-and-microkernel-rules)
- [Page 02 - Compile-Based Plug-ins and Worked Example Architecture](#page-02---compile-based-plug-ins-and-worked-example-architecture)
- [Page 03 - Worked Example Rules, Tech Stack, Structure Plan, and Prompt 1](#page-03---worked-example-rules-tech-stack-structure-plan-and-prompt-1)
- [Page 04 - Worked Example Prompts: Contract, Core, and Student Plug-in](#page-04---worked-example-prompts-contract-core-and-student-plug-in)
- [Page 05 - Loyalty Plug-in, Bad Prompt, Review, and Discussion](#page-05---loyalty-plug-in-bad-prompt-review-and-discussion)
- [Page 06 - Campus Delivery Service and Tasks 1-2](#page-06---campus-delivery-service-and-tasks-1-2)
- [Page 07 - Tasks 2-5 and Final Guidelines](#page-07---tasks-2-5-and-final-guidelines)
- [Microkernel Architecture Summary](#microkernel-architecture-summary)
- [Prompting Rules Summary](#prompting-rules-summary)
- [Worked Example Summary](#worked-example-summary)
- [Student Task Checklist](#student-task-checklist)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Viva and Exam Questions](#likely-viva-and-exam-questions)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Key Terms](#key-terms)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)
- [Verification](#verification)

---

# Page-by-Page Lab Notes

## Page 01 - Objective, Before You Begin, and Microkernel Rules

### Original Page Content

**BSc (Hons) in IT specializing in Software Engineering**

**SE3100 : Architecture based Development**

**Year 3 Semester 1 - 2026**

# Lab Sheet 04 - Vibe-Coding Within a Micro-kernel Architecture

### Objective

This practical helps students apply architectural discipline while using an AI assistant to generate code, referred to in the sheet as **"vibe coding"**, within a **microkernel (plug-in) architecture**.

By the end, students should be able to:

- Plan a core system, registry, and plug-in contract before writing any prompts.
- Generate a feature incrementally:
  - Contract first.
  - Then the core.
  - Then individual plug-ins.
- Keep the AI within the architectural boundaries defined by the student.
- Spot when:
  - The core absorbs plug-in-specific logic.
  - Plug-ins depend on each other.
- Fix such violations.

Activity conditions:

- This is a self-guided activity.
- Students may attempt it as a pair.
- Discussions are encouraged.
- Students may consult lab instructors.
- Students are expected to carry out the steps on their own, as a pair.
- Online and offline material may be referenced.

### Before You Begin

The sheet states that an AI assistant only knows what is in the current prompt.

It:

- Has no memory of a constraint unless the constraint is restated.
- Will fill gaps with whatever appears locally reasonable.

In a microkernel architecture, this creates two specific risks.

#### Risk 1 - Plug-in-Specific Logic Leaks into the Core

The AI may write logic such as:

```text
if promotion is Student -> ...
else if promotion is Loyalty -> ...
else if promotion is Seasonal -> ...
```

inside the core instead of delegating the work to plug-ins.

#### Risk 2 - Plug-ins Call One Another

If a prompt implies that two plug-ins interact, the AI may make one plug-in directly call another instead of routing interaction through the architectural boundary.

The sheet emphasizes that these violations may not occur every time.

That is precisely why students cannot rely on the AI to infer the architecture.

The boundary must be restated explicitly in every prompt.

### Rule for This Lab

The source gives the architecture as:

```text
Core system <-> Registry <-> Plug-in components
```

The rules are:

#### Core System

- May only look up the correct plug-in in the registry.
- May call the plug-in only through the shared contract.
- Must never contain logic specific to an individual plug-in.

#### Plug-in

- May only implement the contract.
- Must never call another plug-in directly.
- Must never reach into:
  - The core's internal state.
  - Another plug-in's data.

#### Registry

- Is the only place that knows which plug-ins exist.
- Neither the core's logic nor any plug-in should hardcode the plug-in list elsewhere.

#### Contract

- Is the shared method signature every plug-in agrees to implement.
- Allows the core to call any plug-in in the same way.
- Prevents the core from needing to know how each plug-in works internally.

### Visual Explanation

The page establishes the architecture boundary:

```text
                  Shared Contract
                       |
                       v
Core System <------> Registry <------> Plug-ins
    |                                      |
    |                                      |
    +-- no plug-in-specific logic          +-- no direct plug-in-to-plug-in calls
```

A violation looks like:

```text
BAD:
Core
├── if StandardShipping ...
├── else if ExpressShipping ...
└── else if SameDayShipping ...

BAD:
StandardShipping -> calls ExpressShipping directly
```

A correct structure looks like:

```text
GOOD:
Core -> Registry -> selected plug-in through shared contract
```

### Explanation

The central idea is **architectural discipline while prompting**.

The AI is not expected to preserve a software architecture automatically.

The student must:

1. Define the boundary first.
2. Put that boundary into each prompt.
3. Review every generated output against the boundary.

### Definition

**Definition:** A microkernel architecture separates a stable core from extensible plug-in components connected through a defined contract.

**Simple meaning:** Keep the main system small and stable, while optional or varying behavior lives in separate plug-ins.

### Definition

**Definition:** A contract is the shared method signature or interface that defines how the core and plug-ins communicate.

**Simple meaning:** A fixed rule saying what method every plug-in must provide.

### Definition

**Definition:** A registry maps a plug-in identifier or type to the corresponding plug-in implementation.

**Simple meaning:** The lookup table that tells the core which plug-in to use.

### Exam Tip

The most important architecture sentence is:

```text
The core and plug-ins communicate only through the shared contract,
coordinated by the registry.
```

### Common Mistake

Do not assume that "the code works" means the architecture is correct. A working implementation can still violate the microkernel boundary.

### Likely Exam / Viva Questions

**Question 1:** What is the responsibility of the core in this lab?

**Expected Answer:** It looks up the correct plug-in in the registry and invokes it through the shared contract. It must not contain plug-in-specific logic.

**Question 2:** Why must architectural constraints be repeated in AI prompts?

**Expected Answer:** The AI only sees the current prompt context and may otherwise generate locally reasonable but architecturally incorrect code.

---

## Page 02 - Compile-Based Plug-ins and Worked Example Architecture

### Original Page Content

### Note on Plug-in Implementation

Real-world microkernel systems sometimes use runtime plug-in frameworks such as:

- OSGi.
- Jigsaw.
- Prism.

These frameworks may allow plug-ins to be added or removed without redeploying the whole application.

For this lab, plug-ins must instead be implemented as **compile-based**:

- Separate classes or modules.
- Within the same project.

The purpose is to focus on:

- Core boundary.
- Plug-in boundary.
- Contract boundary.

rather than framework setup.

# Worked Example - Order Discount Calculator

The source says:

> This shows what a complete, correct submission looks like for a different feature than the one you'll build (Shipping Cost Calculator). Use it as a reference for expected depth and format - do not reuse it for your own answers.

### Worked Example Architecture

The diagram contains:

#### Core System

- **Core system**
- **Checkout flow (stable)**

Inside it:

#### Registry

- **Registry**
- `Promo -> plugin lookup`

Around the core are four plug-ins:

- **StudentDiscount**
  - Implements contract.
- **SeasonalDiscount**
  - Implements contract.
- **LoyaltyDiscount**
  - Implements contract.
- **CouponDiscount**
  - Owns its coupon data.

Visual legend:

- Blue = core and registry, stable.
- Purple = plug-ins, implementing the shared contract.

The page states:

> Core system and registry stay untouched no matter how many plug-ins are added or removed, because every plug-in only ever talks to the core through the same contract, never to each other.

### Recreated Architecture Diagram

```text
                    +--------------------------+
                    |       Core system        |
                    |   Checkout flow (stable) |
                    |                          |
StudentDiscount <-> |       +----------+       | <-> SeasonalDiscount
implements contract |       | Registry |       |     implements contract
                    |       | Promo ->  |       |
LoyaltyDiscount <-> |       | plug-in   |       | <-> CouponDiscount
implements contract |       | lookup    |       |     owns coupon data
                    |       +----------+       |
                    +--------------------------+

Blue area   = stable core + registry
Purple area = plug-ins implementing the shared contract
```

### AI Prompting Context

The worked example begins with this context:

```text
We are implementing an Order Discount Calculator using a microkernel architecture.

Technology Stack:

- Language: JavaScript
- Runtime: Node.js
- Framework: Express.js
- Registry storage: In-memory Map

The architecture consists of:

Core System <-> Registry <-> Plug-ins
```

### Visual Explanation

The visual shows that:

- The core is in the center.
- The registry belongs to the stable core area.
- Plug-ins exist outside the stable core.
- Plug-ins connect toward the stable core.
- Plug-ins do **not** connect to each other.

### Explanation

The worked example is not only showing code structure.

It demonstrates the **prompt context** needed before asking the AI to generate anything.

The prompt gives:

- Feature name.
- Architecture.
- Technology stack.
- Registry storage.
- Architectural topology.

### Definition

**Definition:** Compile-based plug-ins are separate classes or modules included in the same project and compiled/deployed with the application.

**Simple meaning:** The plug-ins are separate in code, but they are not dynamically installed at runtime.

### Exam Tip

For this lab:

```text
Use compile-based plug-ins.
Do NOT use runtime plug-in frameworks.
```

### Common Mistake

Do not spend the lab setting up OSGi, Jigsaw, Prism, or another runtime plug-in framework. The source explicitly says that setup is outside the lab focus.

---

## Page 03 - Worked Example Rules, Tech Stack, Structure Plan, and Prompt 1

### Original Page Content

### Worked Example Rules

```text
- The core system must not contain any promotion-specific logic.

- The core can only communicate with plug-ins through the DiscountPlugin contract.

- The registry is responsible for mapping promotion types to plug-in implementations.

- Each plug-in must only implement the DiscountPlugin contract.

- Plug-ins must never call each other directly.

- Plug-ins must not access the core, registry, or other plug-ins.

- The contract is the only shared dependency between the core and plug-ins.
```

### Incremental Generation Order

The example says:

1. Define the contract.
2. Generate the core system.
3. Generate each plug-in separately.

### Sample Task 1 - Tech Stack

**Stack:**

```text
Node.js with Express + in-memory map for the registry
```

Reason:

- Simplicity.
- Lightweight.
- Quick to prompt an AI for small isolated plug-in functions.
- Easy to verify each plug-in independently.

### Sample Task 2 - Core/Plug-in Plan

| Component | Contract interaction | Responsibilities | Must NOT do |
|---|---|---|---|
| Core system | Calls plug-ins via `DiscountPlugin` contract | Look up promo type in registry, invoke matching plug-in, return result | Contain any promotion-specific calculation |
| Registry | - | Maps promo type string to plug-in class/module | Contain calculation logic |
| StudentDiscount (plug-in) | Implements `DiscountPlugin.apply(order)` | Calculate 10% student discount | Call other plug-ins, access core internals |
| LoyaltyDiscount (plug-in) | Implements `DiscountPlugin.apply(order)` | Calculate points-based discount | Call other plug-ins, access core internals |

### Sample Task 3 - Implementation

The source labels this:

> **Illustrative only**

### Good Prompts

#### Prompt 1 - Contract

The prompt begins:

```text
Define a contract interface named DiscountPlugin.

Method:
```

and continues on Page 04.

### Visual Explanation

The planning table is the key visual on this page.

It forces every component to be defined in four dimensions:

```text
Component
    |
    +--> How does it interact with the contract?
    +--> What is it responsible for?
    +--> What must it NOT do?
```

### Explanation

The **Must NOT do** column is as important as the responsibility column.

It makes architectural boundaries explicit before code is generated.

### Exam Tip

Before prompting, write the architecture plan first.

Do not reverse the process by generating code and then inventing a plan that matches it.

### Common Mistake

Do not make the registry perform the discount calculation. Its responsibility is mapping, not domain logic.

---

## Page 04 - Worked Example Prompts: Contract, Core, and Student Plug-in

### Original Page Content

### Prompt 1 - Contract

```text
Define a contract interface named DiscountPlugin.

Method:

apply(order): DiscountResult

DiscountResult contains:

- discountAmount
- explanation

Requirements

- This contract is the only shared dependency between the core and plug-ins.
- Do not generate registry, core, or plug-in implementations.
```

**Output 1:**

```text
(generated interface code)
```

### Prompt 2 - Core

```text
A contract already exists:

interface DiscountPlugin { apply(order) -> DiscountResult }

Generate a core system function named calculateDiscount(promoType, order).

Requirements

- Look up promoType in a registry map.
- Instantiate the matching plug-in and call apply(order).
- Return the DiscountResult unchanged.

Do NOT

- Contain any if/else branching by promotion type.
- Calculate any discount amount itself.
- Format or interpret explanation.
```

**Output 2:**

```text
(generated core code)
```

### Prompt 3 - Plug-in - Student

```text
A contract already exists:

interface DiscountPlugin { apply(order) -> DiscountResult }

Generate a plug-in named StudentDiscount implementing DiscountPlugin.

Requirements

- apply(order) returns 10% of order.total as discountAmount.
- Set explanation to a short string describing the discount.

Do NOT

- Call any other plug-in.
- Reference the registry or the core.
- Access a database directly.
- Generate the contract, registry, or core again.
```

**Output 3:**

```text
(generated plug-in code)
```

### Visual Explanation

The page demonstrates a progressively narrowing prompt sequence:

```text
Prompt 1
Define only the contract
        |
        v
Prompt 2
Use the existing exact contract
Generate only the core
        |
        v
Prompt 3
Use the existing exact contract
Generate only one plug-in
```

### Explanation

Each prompt has three strong features:

1. **Existing architectural context is restated.**
2. **The requested responsibility is narrow.**
3. **Forbidden behavior is explicitly listed.**

This prevents the AI from generating the entire feature in one tightly coupled block.

### Exam Tip

A good architectural prompt contains both:

```text
Requirements
```

and:

```text
Do NOT
```

### Common Mistake

Do not ask the StudentDiscount prompt to regenerate the contract, registry, or core.

---

## Page 05 - Loyalty Plug-in, Bad Prompt, Review, and Discussion

### Original Page Content

### Prompt 3 - Plug-in - Loyalty

```text
A contract already exists:

interface DiscountPlugin { apply(order) -> DiscountResult }

Generate a plug-in named LoyaltyDiscount implementing DiscountPlugin.

Requirements

- apply(order) calculates a discount based on the customer's loyalty points
  (e.g., 1% discount for every 100 points, up to a maximum of 15%).
- Return the calculated discount as discountAmount.
- Set explanation to a short string describing the applied loyalty discount.

Do NOT

- Call any other plug-in.
- Reference the registry or the core.
- Access a database directly.
- Generate the contract, registry, or core again.
```

**Output 3:**

```text
(generated plug-in code)
```

### Bad Prompt

```text
Build a discount calculator that checks if the customer is a student, if it's a seasonal sale,
or if they have loyalty points, and applies the right discount to the order total.
Use Node.js with Express.
```

### Why This Is Bad

The source gives four reasons:

- It never mentions the architecture.
- It never defines the contract.
- It never restricts the core.
- It asks for the whole feature at once, encouraging tightly coupled code.

### Sample Task 4 - Review the Output

The worked example review says no violation was found.

The reasons:

- The core performed only:
  - Registry lookup.
  - Method call.
- It had no promotion-specific branching.
- Each plug-in:
  - Implemented only the contract.
  - Never referenced another plug-in.
- Restating the contract's exact method signature in every prompt kept the boundary intact.

### Sample Task 5 - Discuss

The worked example's reflection says that explicitly stating that the core must contain **zero promotion-specific logic** was easiest to forget.

A small `if` statement may seem harmless in isolation.

However, even one shortcut:

- Reintroduces coupling.
- Encourages another shortcut for the next promotion type.
- Causes the core to grow uncontrollably.

### Visual Explanation

The page contrasts good prompting with a deliberately bad prompt.

```text
GOOD
Architecture + Exact Contract + Narrow Task + "Do NOT" constraints

BAD
"Build the whole feature"
        |
        v
AI chooses local implementation details
        |
        v
Risk of tight coupling
```

### Explanation

The lesson is not that AI-generated code is inherently bad.

The lesson is that **prompt scope determines architectural risk**.

### Exam Tip

When asked why the bad prompt is poor, mention all four source reasons.

### Common Mistake

Do not defend a promotion-specific `if` in the core just because there are currently only two plug-ins.

---

## Page 06 - Campus Delivery Service and Tasks 1-2

### Original Page Content

# Now Your Turn: Campus Delivery Service - Shipping Cost Calculator

A university's logistics office wants a system that calculates shipping cost for a package based on the selected shipping method.

Students must build the **Shipping Cost Calculator** using the same process as the worked example.

## Guidelines to Follow While Building the Shipping Cost Calculator

### 1. Define Before Prompting

Before the first prompt:

- Define the contract every plug-in must implement.
- Decide what the core:
  - Is allowed to do.
  - Is not allowed to do.
- Task 2 formalizes this plan.
- The plan must be decided before prompting, not afterward to match generated code.

### 2. Generate Incrementally

Generate in this order:

```text
contract -> core system -> registry -> each plug-in, one at a time
```

Never ask for the whole feature in one prompt.

### 3. Repeat the Contract and Prohibitions

Every plug-in prompt must state:

- Exactly which contract method it must implement.
- Exactly what it must **NOT** do.

The source example says:

```text
This must only implement calculateCost(package).
Do not call other plug-ins.
Do not modify the registry.
```

The restriction must be written every time.

### 4. Review Each Plug-in Immediately

After each plug-in is generated:

- Check whether it calls anything beyond the contract method(s) requested.
- If it reads another plug-in's rate table directly, that is still a violation even if it works.
- Fix the violation using a corrected prompt before moving to the next plug-in.

### 5. Paste the Exact Contract Signature

Before writing the next prompt:

- Copy the exact contract signature generated in Task 3's first step.
- Paste it into every later prompt.
- Do not re-describe it in different wording.

### 6. Perform a Final Architecture Pass

After all plug-ins are generated:

- Pick any two plug-ins.
- Confirm neither references the other.
- Check the core for:
  - `if/else` branching by shipping method.
  - `switch` branching by shipping method.
- Such branching means the core has absorbed plug-in logic.

The source describes this as:

> the microkernel equivalent of a layer being skipped.

# Tasks

## Task 1 - Choose Your Tech Stack

State the language/framework to use.

Any familiar language/framework is allowed.

Justify the choice in **1-2 sentences**.

Suggested:

- Java.
- C#/.NET.
- Python.

Implementation requirement:

- Separate classes/modules.
- Same project.
- Compile-based plug-ins.

Do not use runtime plug-in frameworks such as:

- OSGi.
- Jigsaw.
- Prism.
- Similar frameworks.

Reason:

- They add setup overhead unrelated to the lab's focus.

## Task 2 - Write the Structure Plan

Complete the plan **before writing any prompts**.

The table begins on Page 06:

| Component | Contract interaction | Responsibilities | Must NOT do |
|---|---|---|---|
| Core system |  |  |  |
| Registry |  |  |  |

The plug-in rows continue on Page 07.

### Visual Explanation

The required workflow is:

```text
PLAN
  |
  v
CONTRACT
  |
  v
CORE
  |
  v
REGISTRY
  |
  v
PLUG-IN 1
  |
  v
REVIEW
  |
  v
PLUG-IN 2
  |
  v
REVIEW
  |
  v
FINAL ARCHITECTURE CHECK
```

### Definition

**Definition:** Architectural boundary is the restriction defining which components may communicate and what responsibilities each component may contain.

**Simple meaning:** A rule that stops one part of the system from taking over another part's job.

### Exam Tip

For the Shipping Cost Calculator, your core should know **that a shipping plug-in exists**, not **how Standard or Express shipping is calculated**.

### Common Mistake

Do not start Task 3 before Task 2 is completed.

---

## Page 07 - Tasks 2-5 and Final Guidelines

### Original Page Content

### Task 2 - Structure Plan Continued

| Component | Contract interaction | Responsibilities | Must NOT do |
|---|---|---|---|
| Plug-in 1 |  |  |  |
| Plug-in 2 |  |  |  |
| Plug-in 3 (optional) |  |  |  |

### Task 3 - Implement It

Using the Task 2 plan:

- Generate the application using an AI assistant.
- Record the **exact prompts** used.
- Record the **exact code generated**.

Evidence must be recorded for:

- The contract.
- The core system.
- Each plug-in.

Minimum:

- Two plug-ins.

Examples given by the source:

- Standard Shipping.
- Express Shipping.

### Task 4 - Review the Output

Check the generated code against the Task 2 plan.

If a violation is found:

- Describe it.
- Show the corrected prompt.
- Show the corrected output.

If no violation is found:

- Briefly explain what in the prompting approach prevented the violation.

### Task 5 - Discuss

Expected length:

```text
3-4 sentences
```

Question:

> Which guideline was hardest to actually follow while prompting, and why? Was this different from what you expected before you started?

### Some Guidelines

- Focus on the architectural reasoning behind each prompt.
- Do not focus on producing polished, production-ready code.
- The implementation may be minimal.
- It only needs to demonstrate the core/plug-in separation.
- Keep answers clear and concise.
- Do the thinking on your own.
- Use AI/LLM only to organize your thoughts.
- Do not blindly depend on LLMs.

### Visual Explanation

The complete Task 2 plan is:

| Component | Contract interaction | Responsibilities | Must NOT do |
|---|---|---|---|
| Core system | Student completes | Student completes | Student completes |
| Registry | Student completes | Student completes | Student completes |
| Plug-in 1 | Student completes | Student completes | Student completes |
| Plug-in 2 | Student completes | Student completes | Student completes |
| Plug-in 3 (optional) | Student completes | Student completes | Student completes |

The lab deliverable logic is:

```text
Task 1
Choose stack
   |
Task 2
Plan architecture
   |
Task 3
Record prompts + generated code
   |
Task 4
Audit architecture
   |
Task 5
Reflect on prompting discipline
```

### Explanation

Task 4 is not optional quality checking.

It is where the student demonstrates that they can recognize whether AI-generated code respects the architecture.

### Exam Tip

If a violation is found, showing only a description is insufficient according to the Task 4 wording.

Show:

1. Violation.
2. Corrected prompt.
3. Corrected output.

### Common Mistake

Do not submit only the final code. Task 3 explicitly requires the exact prompts and exact generated code.

---

# Microkernel Architecture Summary

## Required Structure

```text
                +-------------------+
                |    Core System    |
                | stable behavior   |
                +---------+---------+
                          |
                          | shared contract
                          v
                +-------------------+
                |     Registry      |
                | plug-in lookup    |
                +---------+---------+
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
     Plug-in 1        Plug-in 2       Plug-in 3
```

## Responsibility Matrix

| Part | Should Do | Must Not Do |
|---|---|---|
| Core | Accept request, ask registry for correct plug-in, invoke contract, return result | Know shipping-method-specific formulas |
| Registry | Map key/type to plug-in implementation | Calculate shipping cost |
| Plug-in | Implement contract and its own shipping behavior | Call another plug-in, access core internals, alter registry |
| Contract | Define the common operation and result shape | Contain shipping-method-specific logic |

> The table above is a supplementary conceptual summary. The actual Task 2 table in the source is intentionally blank for the student to complete.

---

# Prompting Rules Summary

## Rule 1 - Architecture First

```text
Decide architecture before prompting.
```

Do not:

```text
Generate first -> invent architecture later
```

## Rule 2 - One Component at a Time

```text
Contract
  ->
Core
  ->
Registry
  ->
Plug-in 1
  ->
Plug-in 2
  ->
Optional Plug-in 3
```

## Rule 3 - Paste the Exact Contract

Do not paraphrase the generated contract in later prompts.

Copy the real signature.

## Rule 4 - Include Prohibitions

Every plug-in prompt should explicitly say what it must **not** do.

## Rule 5 - Review Immediately

After each plug-in:

```text
Does it call another plug-in?
Does it access the core?
Does it modify the registry?
Does it violate the contract?
```

## Rule 6 - Final Core Audit

Search for shipping-method branching such as:

```text
if shippingMethod == ...
switch shippingMethod ...
```

If the core contains such behavior-specific branching, plug-in logic has leaked into the core.

---

# Worked Example Summary

## Feature

```text
Order Discount Calculator
```

## Stack

```text
JavaScript
Node.js
Express.js
In-memory Map registry
```

## Contract

```text
DiscountPlugin
apply(order): DiscountResult
```

## Result

```text
DiscountResult
- discountAmount
- explanation
```

## Example Plug-ins

- StudentDiscount.
- LoyaltyDiscount.
- SeasonalDiscount.
- CouponDiscount.

## Core Rule

The core:

- Looks up the plug-in.
- Calls `apply(order)`.
- Returns the result.

The core must not calculate a discount itself.

---

# Student Task Checklist

## Before Prompting

- [ ] Select a technology stack.
- [ ] Use compile-based plug-ins.
- [ ] Define the contract conceptually.
- [ ] Define core responsibilities.
- [ ] Define core prohibitions.
- [ ] Define registry responsibility.
- [ ] Define plug-in responsibilities.
- [ ] Complete Task 2 structure plan.

## During Generation

- [ ] Generate the contract first.
- [ ] Save the exact generated contract signature.
- [ ] Generate the core separately.
- [ ] Generate the registry separately.
- [ ] Generate Plug-in 1 separately.
- [ ] Repeat the exact contract in the plug-in prompt.
- [ ] Include explicit "Do NOT" rules.
- [ ] Review Plug-in 1 before continuing.
- [ ] Generate Plug-in 2 separately.
- [ ] Review Plug-in 2.
- [ ] Add Plug-in 3 only if desired.
- [ ] Record every exact prompt.
- [ ] Record every exact generated code output.

## Final Review

- [ ] No plug-in calls another plug-in.
- [ ] No plug-in accesses core internals.
- [ ] No plug-in modifies the registry.
- [ ] Registry contains lookup/mapping only.
- [ ] Core contains no Standard-specific logic.
- [ ] Core contains no Express-specific logic.
- [ ] Core contains no shipping-method `if/else` or `switch`.
- [ ] All plug-ins implement the same contract.
- [ ] Task 4 review is written.
- [ ] If a violation was found, corrected prompt and output are included.
- [ ] Task 5 reflection is 3-4 sentences.

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Microkernel Architecture | Architecture with a stable core extended by plug-ins through defined interfaces | Stable core + separate extensions |
| Core System | Stable part coordinating the application | Main coordinator |
| Plug-in | Independent component implementing optional or varying behavior | Feature module |
| Contract | Shared interface/method signature used between core and plug-ins | Communication rule |
| Registry | Component mapping a plug-in identifier to an implementation | Plug-in lookup |
| Compile-Based Plug-in | Plug-in built as a separate class/module within the same compiled project | Separate code module, same app |
| Runtime Plug-in Framework | Framework supporting dynamic installation/removal of plug-ins | Dynamic plug-in system |
| Coupling | Degree to which software components depend on one another | How tightly parts are connected |
| Architectural Boundary | Rule controlling allowed responsibilities and communication | Who may do/call what |
| Vibe Coding | Term used by the source for AI-assisted code generation in this lab | Prompt-driven coding with AI |
| Incremental Generation | Generating one architecture element at a time | Contract first, then components |
| Contract Violation | Generated behavior that breaks the agreed architecture rules | Code crossing the boundary |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Lab objective | Use AI while preserving architecture | 1 |
| Architecture | Core <-> Registry <-> Plug-ins | 1 |
| Core rule | No plug-in-specific logic | 1, 3 |
| Plug-in rule | No direct plug-in-to-plug-in calls | 1, 3 |
| Registry rule | Only place knowing which plug-ins exist | 1 |
| Contract | Only shared dependency | 1, 3 |
| Implementation style | Compile-based plug-ins | 1-2 |
| Runtime frameworks | OSGi, Jigsaw, Prism not used | 1-2, 6 |
| Worked example | Order Discount Calculator | 2-5 |
| Good generation order | Contract -> core -> registry -> each plug-in | 3, 6 |
| Bad prompt | Whole feature requested at once | 5 |
| Student feature | Shipping Cost Calculator | 6 |
| Task 1 | Choose and justify stack | 6 |
| Task 2 | Structure plan before prompts | 6-7 |
| Task 3 | Exact prompts + exact generated code | 7 |
| Minimum plug-ins | 2 | 7 |
| Example plug-ins | Standard + Express Shipping | 7 |
| Task 4 | Review architecture violations | 7 |
| Task 5 | 3-4 sentence reflection | 7 |

---

# Likely Viva and Exam Questions

### Question 1

What is the main rule of the microkernel architecture used in this lab?

**Expected Answer:** The core and plug-ins communicate only through a shared contract, with the registry coordinating plug-in lookup.

### Question 2

Why should the core not contain shipping-method-specific `if/else` logic?

**Expected Answer:** That logic belongs inside plug-ins. Putting it in the core couples the core to individual plug-ins and makes every new shipping type require a core change.

### Question 3

What is the purpose of the registry?

**Expected Answer:** The registry maps a shipping or promotion type to the appropriate plug-in implementation. It should not contain calculation logic.

### Question 4

Why is the exact contract signature pasted into each later AI prompt?

**Expected Answer:** The AI has no guaranteed memory of the original constraint. Reusing the exact signature keeps each generated component aligned with the same boundary.

### Question 5

Why should plug-ins never call one another?

**Expected Answer:** Direct plug-in dependencies create coupling and bypass the stable core/contract boundary.

### Question 6

What is wrong with asking an AI to "build the entire discount calculator" in one prompt?

**Expected Answer:** The prompt does not constrain the architecture, contract, or core responsibilities and encourages tightly coupled code.

### Question 7

What is the required generation order for the Shipping Cost Calculator?

**Expected Answer:**

```text
Contract -> Core System -> Registry -> Each Plug-in, one at a time.
```

### Question 8

What should be checked after each generated plug-in?

**Expected Answer:** Confirm it only implements the required contract behavior and does not call other plug-ins, access the core, or modify the registry.

### Question 9

Why does this lab use compile-based rather than runtime plug-ins?

**Expected Answer:** To keep the focus on the core/plug-in/contract boundary rather than runtime plug-in framework setup.

### Question 10

What evidence is required in Task 3?

**Expected Answer:** The exact prompts used and the exact code generated for the contract, core system, and every plug-in, with at least two plug-ins.

---

# Common Mistakes to Avoid

- Asking the AI to generate the entire feature in one prompt.
- Starting implementation before completing Task 2.
- Failing to define a shared contract.
- Paraphrasing the contract differently in every prompt.
- Letting the core calculate Standard Shipping cost.
- Letting the core calculate Express Shipping cost.
- Adding a shipping-method `if/else` or `switch` to the core.
- Letting a plug-in call another plug-in.
- Letting a plug-in access another plug-in's data.
- Letting a plug-in access core internals.
- Letting a plug-in modify the registry.
- Putting calculation logic inside the registry.
- Hardcoding the complete plug-in list in several files.
- Using a runtime plug-in framework when the lab asks for compile-based plug-ins.
- Generating a plug-in before reviewing the previous plug-in.
- Recording only the final code but not the exact prompts.
- Reusing the worked Order Discount Calculator as the Shipping Cost Calculator answer.
- Treating "works correctly" as proof that the architecture is correct.
- Producing production-scale code instead of focusing on architectural separation.
- Blindly accepting AI output without reviewing the boundary.

---

# Key Terms

- SE3100
- Architecture Based Development
- Microkernel Architecture
- Plug-in Architecture
- Core System
- Registry
- Plug-in
- Shared Contract
- Interface
- Architectural Boundary
- Coupling
- Vibe Coding
- AI Assistant
- Incremental Generation
- Compile-Based Plug-in
- Runtime Plug-in
- OSGi
- Jigsaw
- Prism
- Order Discount Calculator
- DiscountPlugin
- DiscountResult
- StudentDiscount
- LoyaltyDiscount
- SeasonalDiscount
- CouponDiscount
- Shipping Cost Calculator
- Standard Shipping
- Express Shipping
- `calculateCost(package)`
- Architecture Violation
- Registry Lookup
- Promotion-Specific Logic
- Shipping-Method-Specific Logic

---

# Final One-Page Revision Notes

## Architecture

```text
Core System <-> Registry <-> Plug-ins
```

## Stable Core

The core may:

```text
1. Receive request
2. Ask registry for matching plug-in
3. Call plug-in through contract
4. Return result
```

The core must not:

```text
- Know Standard-specific calculation
- Know Express-specific calculation
- Branch by shipping method
```

## Plug-ins

Each plug-in:

```text
- Implements the same contract
- Owns its own behavior
- Does not call other plug-ins
- Does not access core internals
- Does not modify the registry
```

## Registry

```text
shipping type -> plug-in implementation
```

No shipping-cost calculation belongs there.

## AI Prompting Order

```text
1. Contract
2. Core
3. Registry
4. Plug-in 1
5. Review
6. Plug-in 2
7. Review
8. Final architecture audit
```

## Every Prompt Should Reinforce

```text
Exact contract signature
Requirements
Do NOT rules
```

## Bad Sign

```text
if (shippingMethod == "standard") ...
else if (shippingMethod == "express") ...
```

inside the core.

That is plug-in-specific logic leaking into the core.

## Lab Tasks

```text
Task 1 -> Choose stack, justify in 1-2 sentences
Task 2 -> Complete architecture plan
Task 3 -> Record exact prompts + exact generated code
Task 4 -> Review and correct violations
Task 5 -> 3-4 sentence reflection
```

---

# Verification

PDF pages: 7 / MD page sections: 7 ✅
