# SE3110 - Quality Management in Software Engineering
## Tutorial 01: Introduction to Software Quality & Testing

| Metadata | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Degree | BSc (Hons) in Software Engineering |
| Module Code | SE3110 |
| Module Name | Quality Management in Software Engineering |
| Tutorial Sheet | 01 |
| Tutorial Title | Introduction to Software Quality & Testing |
| Academic Period | Year 3 - Semester 1 - 2026 |
| Lecturer | Not stated in the PDF |
| Total PDF Pages | 7 |

> **Source note:** This Markdown file preserves the tutorial page order, questions, code, tables, diagrams, and blank response areas. Explanations and exam notes are added separately for clarity and do not replace the original tutorial tasks.

---

# Table of Contents

- [Page 01 - Tutorial Introduction and Core Definitions](#page-01---tutorial-introduction-and-core-definitions)
  - [Objective](#objective)
  - [Fault, Error, and Failure](#fault-error-and-failure)
- [Page 02 - Error Propagation, Historical Failures, Validation and Verification](#page-02---error-propagation-historical-failures-validation-and-verification)
  - [Historical Software Failures](#historical-software-failures)
  - [Validation vs Verification](#validation-vs-verification)
- [Page 03 - V-Model and Activity: Fundamentals of Software Testing](#page-03---v-model-and-activity-fundamentals-of-software-testing)
  - [The V-Model](#the-v-model)
  - [Section 1 Questions 1-4](#section-1-questions-1-4)
- [Page 04 - Fundamentals Continued and Critical Failure Analysis](#page-04---fundamentals-continued-and-critical-failure-analysis)
  - [Section 1 Questions 5-6](#section-1-questions-5-6)
  - [Section 2: Critical Software Failure Analysis](#section-2-critical-software-failure-analysis)
- [Page 05 - Failure Analysis Table and RIPR Model](#page-05---failure-analysis-table-and-ripr-model)
  - [Failure Analysis Template](#failure-analysis-template)
  - [Section 3: Fault-Error-Failure Propagation](#section-3-fault-error-failure-propagation)
- [Page 06 - RIPR Tasks A-D](#page-06---ripr-tasks-a-d)
- [Page 07 - Discussion Questions](#page-07---discussion-questions)
- [Full Tutorial Summary](#full-tutorial-summary)
- [Important Code Snippet](#important-code-snippet)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Key Terms List](#key-terms-list)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Tutorial Notes

## Page 01 - Tutorial Introduction and Core Definitions

### Original Page Content

**BSc (Hons) in Software Engineering**  
**SE3110: Quality Management in Software Engineering**  
**Faculty of Computing**  
**Tutorial Sheet 01**  
**Year 3 - Semester 1 - 2026**

# Tutorial 01: Introduction to Software Quality & Testing

### Objective

This tutorial session aims to explore:

- The importance of software testing.
- Software-testing principles.
- Different testing methodologies.
- How a single seeded fault propagates, or fails to propagate, through a program.
- A major software failure in history.
- What went wrong in that failure.
- Which testing techniques could have prevented it.

### Introduction

Software is not immune to defects. Even carefully designed systems can contain:

- **Faults** - defects in the code or design.
- **Errors** - incorrect internal states caused by faults.
- **Failures** - observable incorrect behavior that occurs when an error propagates to the system output.

### Fault, Error, and Failure

**Definition: Software Fault**  
A static defect in the code or design.

**Simple meaning:** A mistake exists in the software artifact, even if it has not yet caused incorrect execution.

**Definition: Software Error**  
An incorrect internal state caused by a fault.

**Simple meaning:** During execution, the program's internal value or condition becomes wrong.

**Definition: Software Failure**  
The system's externally observable incorrect behavior when an error propagates.

**Simple meaning:** The user or another system can see that the software produced the wrong result or behavior.

### Medical Analogy

- **Failures** are like symptoms reported by the patient.
- **Faults** are the root causes, such as the ailment.

The explanation continues on Page 02 by identifying **errors** as anomalous internal medical conditions.

### Visual Explanation

The page uses:

- Institutional branding and module metadata at the top.
- A highlighted objective box.
- A definition section.
- A shaded analogy box.

The conceptual flow is:

```text
Static defect in code/design
          |
          v
        Fault
          |
          | Executed under a relevant condition
          v
Incorrect internal program state
          |
          v
        Error
          |
          | Propagates to an observable output
          v
       Failure
```

**Why this matters:** A fault can exist without causing a failure in every execution. Testing must use inputs that activate the fault, create an incorrect state, and expose that state at the output.

### Explanation

The most important distinction is that the three terms are related but not identical:

1. A **fault** is present in the software.
2. A relevant execution may cause an **error**.
3. The error may be masked, corrected, or overwritten.
4. Only an error that reaches an observable output becomes a **failure**.

### Exam Tip

A common short-answer question asks for the difference among **fault**, **error**, and **failure**. Use the sequence:

`Fault -> Error -> Failure`

Then explain that propagation is not guaranteed.

### Common Mistake

Do not use the words fault, error, and failure as synonyms.

### Likely Exam Questions

**Question 1:** Define a software fault.  
**Expected answer:** A software fault is a static defect in code or design that may cause an incorrect internal state when executed.

**Question 2:** Does every fault cause a failure?  
**Expected answer:** No. A fault must be reached, infect the internal state, propagate, and be revealed at an observable output.

---

## Page 02 - Error Propagation, Historical Failures, Validation and Verification

### Original Page Content

The medical analogy continues:

- **Errors** are anomalous internal conditions, such as high blood pressure or bacteria in the blood.

> **Important:** A fault does not always cause an error, and an error does not always propagate into a visible failure.

The tutorial asks students to demonstrate this distinction with real code using the **RIPR model**:

- Reachability
- Infection
- Propagation
- Reveal

### Historical Software Failures

History has shown that insufficient testing can lead to catastrophic consequences.

| Case | Year | Consequence stated in the tutorial |
|---|---:|---|
| Therac-25 | 1985-1987 | Radiation overdoses causing patient deaths |
| Ariane 5 | 1996 | Rocket explosion due to a software exception; loss of $370 million |
| Mars Polar Lander | 1999 | Crashed due to a software integration error |
| Boeing 737 MAX | 2018-2019 | MCAS software faults leading to fatal accidents |

These cases underline the importance of rigorous software testing.

The tutorial states:

- Software does not degrade with time in the same way hardware does.
- Software problems are caused by design or coding mistakes present from the start.
- Effective testing is a primary defense for uncovering these issues before release.

### Validation vs Verification

**Definition: Validation**  
Does the software system meet the user's real needs?

**Key question:** *Are we building the right software?*

**Simple meaning:** Confirm that the completed solution solves the user's actual problem.

**Definition: Verification**  
Does the software system meet the requirements specifications?

**Key question:** *Are we building the software right?*

**Simple meaning:** Confirm that the software is being built according to the documented requirements and design.

### Validation vs Verification Table

| Aspect | Validation | Verification |
|---|---|---|
| Main concern | User needs and intended use | Requirements and specifications |
| Key question | Are we building the right software? | Are we building the software right? |
| Focus | Suitability of the product | Correctness of development artifacts |
| V-Model connection | Right-hand testing activities | Left-hand development activities |

### Visual Explanation

The page is text-heavy and introduces the heading **The V-Model**, whose diagram appears on Page 03.

The main conceptual relationships are:

```text
Fault exists
    |
    | Relevant execution reaches it
    v
Internal state may become incorrect
    |
    | Error may propagate or be masked
    v
Visible failure may or may not occur
```

### Explanation

Testing must do more than execute code. A test needs:

1. A suitable input.
2. An expected result, called an oracle.
3. Conditions that activate the relevant behavior.
4. A comparison between actual and expected behavior.

The historical failures show why software quality is not merely a technical preference. It can affect safety, finance, reputation, and human life.

### Exam Tip

Memorize both phrases exactly:

- Validation: **building the right software**
- Verification: **building the software right**

### Common Mistake

Do not reverse validation and verification.

### Likely Exam Questions

**Question 1:** Why can a fault remain hidden?  
**Expected answer:** The fault may not be reached, may not infect the internal state, or its error may be masked before reaching an observable output.

**Question 2:** Differentiate validation and verification.  
**Expected answer:** Validation checks whether the product meets user needs; verification checks whether it conforms to requirements and design specifications.

---

## Page 03 - V-Model and Activity: Fundamentals of Software Testing

### Original Page Content

### The V-Model

The diagram pairs development activities with corresponding test levels:

| Development Side | Corresponding Testing Side |
|---|---|
| Requirements | Acceptance Testing |
| System Design | System Testing |
| Architecture Design | Integration Testing |
| Module Design | Unit Testing |
| Coding | Bottom point connecting development and testing |

### Visual Explanation

The diagram is shaped like the letter **V**.

```text
Requirements -------------------------------- Acceptance Testing
       \                                      /
        System Design ---------------- System Testing
             \                          /
      Architecture Design ------ Integration Testing
                  \                /
              Module Design -- Unit Testing
                       \      /
                        Coding
```

**What it shows:**

- The left side represents progressively detailed development and design work.
- Coding is at the bottom.
- The right side represents testing at increasing levels.
- Each test level is linked to an earlier development artifact.

**Why this matters:** Testing should be planned alongside development, not postponed until after coding.

### Activity

This is an **individual activity**.

Students must:

- Complete each section independently.
- Type answers directly into the provided boxes.

### Section 1: Fundamentals of Software Testing

Prepare a concise document covering the following.

### Section 1 Questions 1-4

| No. | Tutorial Question | Response Area |
|---:|---|---|
| 1 | What is software testing? |  |
| 2 | Why is software testing important? |  |
| 3 | What are the key principles of software testing? |  |
| 4 | Define and explain the Software Testing Life Cycle. |  |

### Visual Explanation

Below the V-Model, the PDF shows a large activity panel containing four numbered questions and blank dotted answer boxes.

**Why this matters:** The worksheet is designed for written individual responses rather than multiple-choice answers.

### Explanation

The PDF asks students to recall the detailed answers from the lecture. It does not provide:

- A full definition of software testing.
- The complete list of testing principles.
- The phases of the Software Testing Life Cycle.

Therefore, those answers should be prepared from lecture notes rather than invented from the tutorial sheet alone.

### Exam Tip

When answering a broad question such as “What is software testing?”, include:

- Planned evaluation.
- Comparison with expected behavior or requirements.
- Defect detection.
- Quality and risk information.

For Question 4, use the exact STLC phases taught in the lecture.

### Common Mistake

Do not confuse the **Software Development Life Cycle** with the **Software Testing Life Cycle**.

### Likely Exam Questions

**Question 1:** How does the V-Model connect development and testing?  
**Expected answer:** Each development activity has a corresponding testing level, allowing test planning and verification to begin early.

**Question 2:** Which test level corresponds to architecture design?  
**Expected answer:** Integration testing.

---

## Page 04 - Fundamentals Continued and Critical Failure Analysis

### Original Page Content

### Section 1 Questions 5-6

**Question 5:** Describe the types of software testing with examples of tools/software used in each type.

**Question 6:** What is Model-Driven Test Design (MDTD)? *(from lecture)*

Briefly describe the four types of test activities MDTD separates:

1. Test design
2. Test automation
3. Test execution
4. Test evaluation

Explain why splitting these roles helps a test team work more effectively than having one person do everything.

### MDTD Role Diagram

```text
Model / Requirements
        |
        v
   Test Design
        |
        v
 Test Automation
        |
        v
  Test Execution
        |
        v
 Test Evaluation
        |
        v
Quality information and decisions
```

### Definitions

**Definition: Test Design**  
The activity of deciding what to test, which conditions and inputs to use, and what outcomes are expected.

**Simple meaning:** Create meaningful test cases.

**Definition: Test Automation**  
The activity of implementing tests so tools can run or support them repeatedly.

**Simple meaning:** Turn suitable tests into executable scripts or automated workflows.

**Definition: Test Execution**  
The activity of running tests against the software.

**Simple meaning:** Perform the tests and collect actual results.

**Definition: Test Evaluation**  
The activity of comparing actual results with expected results and interpreting the findings.

**Simple meaning:** Decide whether the test passed and what the result means.

### Why Separate the MDTD Activities?

Separating activities can improve:

- Specialization.
- Independent review.
- Reuse of test designs.
- Maintainability of automation.
- Repeatability of execution.
- Objective evaluation.
- Team scalability.

> The tutorial asks students to explain MDTD using content from the lecture. The role descriptions above clarify the four named activities; they should be aligned with the lecturer's exact terminology.

### Section 2: Critical Software Failure Analysis

**Task:** Analyze one major software failure, identify its root cause, and determine:

1. The impact of the failure:
   - Financial impact
   - Social impact
   - Company reputation or image
2. What could have been tested:
   - Requirements
   - Security
   - Performance
   - Other relevant areas
3. Which type of testing could have prevented the failure:
   - Stress testing
   - Security testing
   - Other relevant testing types

### Available Cases

- Therac-25 Radiation Overdose (1985-1987)
- Ariane 5 Rocket Explosion (1996)
- Knight Capital Group Trading Glitch (2012)
- Boeing 737 MAX MCAS Failure (2018-2019)
- Healthcare.gov Launch Failure (2013)
- Another case, with instructor approval

### Visual Explanation

The page contains:

- Two blank response areas for Questions 5 and 6.
- A second large panel for the failure-analysis task.
- A numbered three-part analysis structure.
- A list of approved case options.

### Failure-Analysis Process

```text
Choose one case
      |
      v
Identify the root cause
      |
      v
Measure the impact
      |
      v
Identify what should have been tested
      |
      v
Select suitable testing techniques
      |
      v
Explain how those tests could reduce or prevent the failure
```

### Exam Tip

A strong failure analysis must connect:

`Root cause -> Missing or weak test activity -> Failure impact`

Do not list testing types without explaining how they relate to the root cause.

### Common Mistake

Do not claim that one testing technique can guarantee prevention. Explain how the technique could have detected, reduced, or exposed the underlying risk before release.

### Likely Exam Questions

**Question 1:** What are the four activities separated by MDTD?  
**Expected answer:** Test design, test automation, test execution, and test evaluation.

**Question 2:** What should a critical software failure analysis contain?  
**Expected answer:** The chosen case, root cause, impact, what should have been tested, and which testing techniques could have detected or prevented the problem.

---

## Page 05 - Failure Analysis Table and RIPR Model

### Original Page Content

### Failure Analysis Template

| Analysis Field | Student Response |
|---|---|
| Case chosen |  |
| Root cause |  |
| Impact |  |
| What could have been tested |  |
| Testing type that could have prevented it |  |

The PDF displays this as a two-column table with a shaded label column and large blank dotted response areas.

### Section 3: Fault-Error-Failure Propagation

The code contains **one seeded fault**.

The task is to:

- Find the fault.
- Find three different input sets.
- Use each input set to demonstrate a different stage of the fault-error-failure chain.
- Apply the RIPR conditions from the lecture.

### RIPR Model

- **Reachability**
- **Infection**
- **Propagation**
- **Reveal**

### Specification

`checkAlert` should return an alert whenever:

- Temperature is **greater than or equal to 100**.
- Exception: If the system is in maintenance mode, alerts are suppressed for anything below 120.

### Code from the Tutorial

> **Reconstruction note:** The method declaration is clipped at the right edge of the PDF. The parameter name `maintenanceMode` and the opening brace are reconstructed from the method body and the task text. The remaining code is preserved as shown.

```java
public boolean checkAlert(int temperature, boolean maintenanceMode) {
    boolean isHigh = (temperature > 100);
    boolean alert = isHigh;
    if (maintenanceMode) {
        alert = (temperature >= 120);
    }
    return alert;
}
```

### Code Explanation

- `isHigh` records whether the temperature is considered high.
- `alert` initially receives the value of `isHigh`.
- In maintenance mode, the initial value is overwritten.
- During maintenance, an alert is returned only when the temperature is at least 120.

### Visual Explanation

The page contains:

1. A blank failure-analysis table.
2. A highlighted Section 3 title.
3. A specification box.
4. A monospaced Java code block.
5. The code continues onto Page 06 with `return alert;`.

### RIPR Visual Diagram

```text
R - Reachability
Does the test execute the faulty statement?
          |
          v
I - Infection
Does the faulty statement create an incorrect internal state?
          |
          v
P - Propagation
Does the incorrect state survive and influence later computation?
          |
          v
R - Reveal
Can the test oracle observe the incorrect external result?
```

### Definitions

**Definition: Reachability**  
The faulty location must be executed by the test.

**Simple meaning:** The test must run the relevant code.

**Definition: Infection**  
Executing the fault must create an incorrect internal state.

**Simple meaning:** A program value must become wrong.

**Definition: Propagation**  
The incorrect state must travel through subsequent computation toward an output.

**Simple meaning:** The error must not be masked or overwritten.

**Definition: Reveal**  
The failure must be observable and recognized by the test oracle.

**Simple meaning:** The test must detect that the output is wrong.

### Explanation

The suspicious boundary is:

```java
temperature > 100
```

The specification says the non-maintenance threshold is:

```java
temperature >= 100
```

The tutorial intentionally uses a boundary-value fault so students can create tests where:

- No incorrect state is created.
- An incorrect state is created but masked.
- The incorrect state becomes a visible failure.

### Exam Tip

Boundary values are essential. For a threshold of `>= 100`, test at least:

- Just below: 99
- Exactly at: 100
- Just above: 101

### Common Mistake

Do not test only 99 and 101. Those values make `> 100` and `>= 100` behave the same. The exact boundary value 100 exposes the difference.

### Likely Exam Questions

**Question 1:** What does RIPR stand for?  
**Expected answer:** Reachability, Infection, Propagation, and Reveal.

**Question 2:** Which statement contains the seeded fault?  
**Expected answer:** `boolean isHigh = (temperature > 100);` because the specification requires `temperature >= 100`.

---

## Page 06 - RIPR Tasks A-D

### Original Page Content

The code ends with:

```java
return alert;
}
```

### Task A: Find the Fault

Which line is wrong, and what should it say instead?

| Student Response |
|---|
|  |

### Task B: Input Where the Fault Is Not Triggered

**Condition:** No reachability of the incorrect state.

Give values for:

- `temperature`
- `maintenanceMode`

The faulty line executes but produces no wrong behavior. The incorrect code happens to give the same result as the correct code.

Explain why.

| Student Response |
|---|
|  |

### Task C: Infection Occurs but There Is No Propagation

Give values where:

- `isHigh` is computed incorrectly.
- An error exists in the internal state.
- The function still returns the correct result.
- The error is masked before reaching the output.

Explain what masks the error.

| Student Response |
|---|
|  |

### Task D: Error Propagates into an Observable Failure

Give values where the incorrect internal state directly causes the function to return the wrong result.

| Student Response |
|---|
|  |

### Visual Explanation

The page contains four task headings and large dotted answer boxes.

The tasks form a progression:

```text
Task A: Identify the fault
          |
          v
Task B: Execute code without creating an incorrect state
          |
          v
Task C: Create an incorrect state, but mask it
          |
          v
Task D: Allow the incorrect state to reach the output
```

### Student-Friendly RIPR Analysis

The following examples are logically derived from the specification and code. They are study guidance, not text printed in the original answer boxes.

| Task | `temperature` | `maintenanceMode` | Faulty Result | Correct Result | RIPR Meaning |
|---|---:|---|---|---|---|
| B | 99 | `false` | `false` | `false` | The line executes, but `> 100` and `>= 100` both evaluate to false; no infection |
| C | 100 | `true` | `false` | `false` | `isHigh` is infected, but maintenance logic overwrites `alert` with `100 >= 120`, masking the error |
| D | 100 | `false` | `false` | `true` | The infected state is not overwritten and becomes a visible wrong return value |

### Task A - Derived Correction

```java
boolean isHigh = (temperature >= 100);
```

### Detailed Flow for the Masked Case

```text
Input: temperature = 100, maintenanceMode = true
                    |
                    v
Faulty isHigh = (100 > 100) = false
Correct isHigh = (100 >= 100) = true
                    |
                    v
Internal state is infected
                    |
                    v
maintenanceMode branch executes
                    |
                    v
alert = (100 >= 120) = false
                    |
                    v
Both faulty and correct versions return false
                    |
                    v
No observable failure
```

### Exam Tip

When asked to demonstrate infection without failure, show:

1. The faulty internal value.
2. The correct internal value.
3. The later statement that masks or overwrites the difference.
4. The final output.

### Common Mistake

Task B's wording says “no reachability of the incorrect state,” not necessarily that the faulty line is skipped. The line is executed, but it does not create a different state for the chosen input.

### Likely Exam Questions

**Question 1:** Give an input that creates infection but no failure.  
**Expected answer:** `temperature = 100`, `maintenanceMode = true`. `isHigh` is incorrectly false, but the maintenance branch overwrites `alert` with false, which is the correct final result.

**Question 2:** Give an input that reveals the failure.  
**Expected answer:** `temperature = 100`, `maintenanceMode = false`. The faulty method returns false even though the specification requires true.

---

## Page 07 - Discussion Questions

### Original Page Content

### Discussion 1: Syntax Error vs Logical Error

Suppose a code segment contained both a syntax error and a logical error.

Which one would you call “the fault” for this kind of fault-error-failure analysis, and why?

**Hint:** Think about what has to happen before a fault can affect a running program - reachability.

| Student Response |
|---|
|  |

### Discussion 2: Coverage Alone

If all three test cases ran through a code coverage tool, they would report:

- 100% statement coverage for `checkAlert`
- 100% branch coverage for `checkAlert`

What does this tell you about relying on coverage alone to judge a test suite?

| Student Response |
|---|
|  |

### Discussion 3: Separating Faults, Errors, and Failures

Why is it useful, as a tester, to think separately about faults, errors, and failures rather than only asking:

> “Does the output look right?”

| Student Response |
|---|
|  |

### Visual Explanation

The final page contains three discussion prompts, each followed by a blank dotted answer box. The Faculty of Computing branding appears at the bottom.

### Student-Friendly Discussion Guidance

The following points are derived analysis for revision.

#### Syntax Error vs Logical Error

A syntax error normally prevents successful compilation or execution. Because the program cannot run, the code cannot satisfy reachability in an execution-based RIPR analysis.

A logical error is therefore the meaningful executable fault in this context because it can:

- Be reached.
- Infect program state.
- Propagate.
- Produce a revealed failure.

#### Why Coverage Is Not Enough

Coverage indicates which code was executed, not whether:

- Important boundary values were tested.
- Internal state was correct.
- Errors propagated.
- The expected result was correct.
- The oracle could detect a failure.

A test suite can achieve high statement and branch coverage and still miss important faults.

#### Why Separate Fault, Error, and Failure?

Separating the concepts helps a tester:

- Identify the root defect.
- Understand the internal state difference.
- Find masking behavior.
- Select inputs that force propagation.
- Design better oracles.
- Diagnose why a test passes even when a fault exists.

### Coverage vs Fault Detection Table

| Question | Coverage Can Answer? |
|---|---|
| Was the statement executed? | Yes |
| Was each branch executed? | Yes, with branch coverage |
| Did the execution create an incorrect internal state? | Not necessarily |
| Did the error propagate? | Not necessarily |
| Was the expected output correct? | No |
| Did the test reveal the fault? | Not necessarily |
| Was the boundary value tested effectively? | Not necessarily |

### Exam Tip

Use the phrase:

> **Coverage is necessary evidence of execution, but it is not sufficient evidence of fault detection.**

### Common Mistake

Do not say “100% coverage means the program is fully tested.” Coverage does not prove correctness or test-oracle quality.

### Likely Exam Questions

**Question 1:** Why is a syntax error unsuitable for execution-based RIPR analysis?  
**Expected answer:** It prevents the program from compiling or running, so the faulty statement cannot be reached during execution.

**Question 2:** What is the limitation of 100% branch coverage?  
**Expected answer:** It confirms that branches were executed, but not that suitable data, internal-state infection, propagation, or failure detection occurred.

---

# Full Tutorial Summary

Tutorial 01 introduces software quality and testing through three connected areas.

## 1. Fault-Error-Failure Chain

A software **fault** is a static defect in code or design. When relevant code executes, the fault may create an **error**, which is an incorrect internal state. If that state propagates to an observable output, the user sees a **failure**.

```text
Fault -> Error -> Failure
```

The transition is conditional. A fault may remain dormant, and an error may be masked.

## 2. Importance of Testing

The tutorial refers to serious failures involving:

- Therac-25
- Ariane 5
- Mars Polar Lander
- Boeing 737 MAX

These cases demonstrate financial, social, safety, and reputational consequences.

## 3. Validation, Verification, and the V-Model

- Validation asks whether the team is building the right software.
- Verification asks whether the team is building the software right.

The V-Model links development work with corresponding testing:

```text
Requirements <-> Acceptance Testing
System Design <-> System Testing
Architecture Design <-> Integration Testing
Module Design <-> Unit Testing
Coding at the base
```

## 4. Tutorial Activities

The student must prepare answers on:

- Software testing.
- Importance of testing.
- Testing principles.
- Software Testing Life Cycle.
- Testing types and tools.
- Model-Driven Test Design.
- A major software failure.
- RIPR fault propagation.
- Coverage limitations.

## 5. RIPR Model

For a test to reveal a fault:

1. **Reachability** - execute the faulty statement.
2. **Infection** - create an incorrect internal state.
3. **Propagation** - allow the error to influence later computation.
4. **Reveal** - observe the incorrect output using a valid oracle.

The seeded fault is a boundary condition:

```java
temperature > 100
```

The specification requires:

```java
temperature >= 100
```

The exact boundary value `100` is necessary to distinguish the two expressions.

---

# Important Code Snippet

## Page 05-06 - `checkAlert`

```java
public boolean checkAlert(int temperature, boolean maintenanceMode) {
    boolean isHigh = (temperature > 100);
    boolean alert = isHigh;
    if (maintenanceMode) {
        alert = (temperature >= 120);
    }
    return alert;
}
```

### Corrected Faulty Line

```java
boolean isHigh = (temperature >= 100);
```

### Important Test Inputs

| Purpose | Input | Expected Meaning |
|---|---|---|
| No infection | `99, false` | Both expressions return false |
| Infection, masked | `100, true` | Wrong `isHigh`, but maintenance rule overwrites it |
| Revealed failure | `100, false` | Wrong state reaches the return value |

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Software fault | Static defect in code or design | The underlying mistake |
| Software error | Incorrect internal state caused by a fault | A value or state becomes wrong |
| Software failure | Observable incorrect external behavior | The user can see the wrong result |
| Validation | Evaluation of whether the product meets real user needs | Building the right software |
| Verification | Evaluation of whether the product conforms to specifications | Building the software right |
| V-Model | Development-testing model pairing development stages with test levels | Plan matching tests for each development artifact |
| Unit testing | Testing individual modules or units | Test a small component |
| Integration testing | Testing interactions among modules | Test connected components |
| System testing | Testing the complete integrated system | Test the full product |
| Acceptance testing | Testing whether the system meets user/business needs | Confirm readiness for the customer |
| MDTD | Model-Driven Test Design, separating test design, automation, execution, and evaluation | Divide testing work into specialized activities |
| Reachability | Execution reaches the fault | Run the faulty code |
| Infection | Fault creates an incorrect state | Internal value becomes wrong |
| Propagation | Error influences later computation | Wrong value survives |
| Reveal | Failure is observable to the oracle | Test detects the wrong result |
| Test coverage | Measurement of executed code structures | Shows what ran, not whether faults were found |
| Test oracle | Source used to decide the expected result | How the test knows right from wrong |
| Boundary value | Input at or near a condition limit | Example: exactly 100 |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Objective | Testing principles, methods, RIPR, and failure analysis | 1 |
| Fault | Static defect | 1 |
| Error | Incorrect internal state | 1-2 |
| Failure | Observable incorrect behavior | 1 |
| Historical failures | Testing failures can be catastrophic | 2 |
| Validation | Building the right software | 2 |
| Verification | Building the software right | 2 |
| V-Model | Development stages pair with testing levels | 3 |
| Section 1 | Testing fundamentals, STLC, types, tools, MDTD | 3-4 |
| Section 2 | Root cause, impact, missing tests, preventive testing | 4-5 |
| RIPR | Reachability, Infection, Propagation, Reveal | 5 |
| Seeded fault | `> 100` instead of `>= 100` | 5-6 |
| Masking case | `100, true` | 6 |
| Revealed case | `100, false` | 6 |
| Coverage limitation | Execution does not prove fault detection | 7 |

---

# Important Diagrams Summary

| Page | Visual | Meaning |
|---:|---|---|
| 1 | Fault-error-failure definitions and medical analogy | Root defect, internal condition, and visible symptom are different |
| 2 | Textual RIPR introduction | Not every fault creates a visible failure |
| 3 | V-Model | Development artifacts correspond to testing levels |
| 3-4 | Question panels with response boxes | Individual written activity |
| 5 | Failure-analysis table | Structured case evaluation |
| 5 | Java code block | Boundary-condition fault for RIPR analysis |
| 6 | RIPR task sequence | No infection, masking, and revealed failure |
| 7 | Discussion boxes | Coverage, logical faults, and diagnostic reasoning |

---

# Likely Exam Questions and Short Answers

## Question 1
Differentiate fault, error, and failure.

**Expected Answer:**  
A fault is a static defect in code or design. An error is an incorrect internal state created during execution. A failure is observable incorrect external behavior when the error propagates to the output.

## Question 2
Can a fault exist without a failure?

**Expected Answer:**  
Yes. It may not be reached, may not infect the state, or the error may be masked before reaching an observable output.

## Question 3
What is the difference between validation and verification?

**Expected Answer:**  
Validation checks whether the system meets real user needs; verification checks whether it conforms to requirements and specifications.

## Question 4
Map the V-Model development stages to test levels.

**Expected Answer:**  
Requirements to acceptance testing, system design to system testing, architecture design to integration testing, and module design to unit testing.

## Question 5
What are the four MDTD activities named in the tutorial?

**Expected Answer:**  
Test design, test automation, test execution, and test evaluation.

## Question 6
What does RIPR stand for?

**Expected Answer:**  
Reachability, Infection, Propagation, and Reveal.

## Question 7
Identify the fault in `checkAlert`.

**Expected Answer:**  
`temperature > 100` should be `temperature >= 100`.

## Question 8
Give an infection-without-failure input.

**Expected Answer:**  
`temperature = 100`, `maintenanceMode = true`. The wrong `isHigh` value is overwritten by the maintenance branch, so the final result is still correct.

## Question 9
Give an input that reveals the failure.

**Expected Answer:**  
`temperature = 100`, `maintenanceMode = false`. The method returns false but should return true.

## Question 10
Why is 100% code coverage insufficient?

**Expected Answer:**  
Coverage shows that code was executed, but it does not prove correct internal states, effective boundary values, error propagation, valid expected results, or fault detection.

---

# Common Mistakes to Avoid

- Treating fault, error, and failure as identical.
- Saying every fault always causes a failure.
- Reversing validation and verification.
- Treating the V-Model as testing only after coding.
- Confusing STLC with SDLC.
- Listing testing tools without linking them to testing purposes.
- Describing a failure case without identifying the root cause.
- Naming a testing type without explaining how it could detect the fault.
- Ignoring the exact boundary value 100.
- Assuming execution automatically causes infection.
- Assuming infection automatically causes failure.
- Forgetting that later logic can mask an error.
- Saying 100% statement or branch coverage proves correctness.
- Ignoring the role of the test oracle.

---

# Key Terms List

- Software quality
- Software testing
- Software fault
- Software error
- Software failure
- Defect
- Internal state
- Observable behavior
- Validation
- Verification
- V-Model
- Requirements
- System design
- Architecture design
- Module design
- Coding
- Unit testing
- Integration testing
- System testing
- Acceptance testing
- Software Testing Life Cycle
- Model-Driven Test Design
- Test design
- Test automation
- Test execution
- Test evaluation
- Root cause
- Impact analysis
- RIPR
- Reachability
- Infection
- Propagation
- Reveal
- Error masking
- Boundary-value testing
- Statement coverage
- Branch coverage
- Test oracle
- Logical error
- Syntax error

---

# Final One-Page Revision Notes

```text
FAULT
Static defect in code or design
        |
        v
ERROR
Incorrect internal execution state
        |
        v
FAILURE
Observable incorrect behavior
```

```text
RIPR
Reachability -> Infection -> Propagation -> Reveal
```

```text
Validation   = Are we building the right software?
Verification = Are we building the software right?
```

```text
V-Model
Requirements        <-> Acceptance Testing
System Design       <-> System Testing
Architecture Design <-> Integration Testing
Module Design       <-> Unit Testing
Coding              = Base of the V
```

```java
// Faulty boundary
boolean isHigh = (temperature > 100);

// Correct boundary
boolean isHigh = (temperature >= 100);
```

| RIPR Example | Input | Result |
|---|---|---|
| No infection | `99, false` | Correct false |
| Infection masked | `100, true` | Correct false after overwrite |
| Failure revealed | `100, false` | Faulty false instead of true |

**Final rule:** High coverage shows what was executed. It does not prove that the tests used the right values, detected infected states, forced propagation, or checked the correct expected result.

---

PDF pages: 7 / MD page sections: 7 ✅
