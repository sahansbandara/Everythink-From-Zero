# SE3110 - Quality Management in Software Engineering
## Lecture 01 - Introduction to Software Quality & Testing

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module code | SE3110 |
| Module name | Quality Management in Software Engineering |
| Lecture number | Lecture 01 |
| Lecture title | Introduction to Software Quality & Testing |
| Total PDF pages/slides | 27 |

> **Source note:** This file follows the uploaded lecture PDF page by page. Original lecture statements, examples, code, figures, and ordering are preserved. Added explanations, diagrams, and exam notes are clearly separated from the original slide content.

---

# Table of Contents

- [Page 01 - Lecture Title](#page-01---lecture-title)
- [Page 02 - What This Lecture Covers](#page-02---what-this-lecture-covers)
- [Page 03 - Section 01: Software Quality](#page-03---section-01-software-quality)
- [Page 04 - What Is Software Quality?](#page-04---what-is-software-quality)
- [Page 05 - How Software Testing Supports Software Quality](#page-05---how-software-testing-supports-software-quality)
- [Page 06 - What Is Software Testing?](#page-06---what-is-software-testing)
- [Page 07 - Section 02: Faults, Errors & Failures](#page-07---section-02-faults-errors--failures)
- [Page 08 - The Term Bug](#page-08---the-term-bug)
- [Page 09 - Fault, Error, Failure](#page-09---fault-error-failure)
- [Page 10 - Same Fault, Different Outcome](#page-10---same-fault-different-outcome)
- [Page 11 - Section 03: Why Do We Test?](#page-11---section-03-why-do-we-test)
- [Page 12 - When Testing Goes Wrong](#page-12---when-testing-goes-wrong)
- [Page 13 - The True Cost of Poor Software](#page-13---the-true-cost-of-poor-software)
- [Page 14 - The Later You Catch a Defect, the More It Costs](#page-14---the-later-you-catch-a-defect-the-more-it-costs)
- [Page 15 - How Mature Is Your Testing?](#page-15---how-mature-is-your-testing)
- [Page 16 - Verification vs Validation](#page-16---verification-vs-validation)
- [Page 17 - Section 04: How We Test](#page-17---section-04-how-we-test)
- [Page 18 - How Is Testing Done?](#page-18---how-is-testing-done)
- [Page 19 - Test Levels](#page-19---test-levels)
- [Page 20 - Functional and Non-Functional Testing](#page-20---functional-and-non-functional-testing)
- [Page 21 - Seven Principles of Testing](#page-21---seven-principles-of-testing)
- [Page 22 - Section 05: The Software Testing Life Cycle](#page-22---section-05-the-software-testing-life-cycle)
- [Page 23 - A Common Software Testing Life Cycle](#page-23---a-common-software-testing-life-cycle)
- [Page 24 - STLC Quick Challenge](#page-24---stlc-quick-challenge)
- [Page 25 - Common Challenges in Testing](#page-25---common-challenges-in-testing)
- [Page 26 - Key Takeaways](#page-26---key-takeaways)
- [Page 27 - Over to You](#page-27---over-to-you)
- [Full Lecture Summary](#full-lecture-summary)
- [Important Code Snippets](#important-code-snippets)
- [Key Definitions Table](#key-definitions-table)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Key Terms](#key-terms)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)
- [Verification](#verification)

---

# Page-by-Page Lecture Notes

## Page 01 - Lecture Title

### Original Slide Content

- **SE3110**
- **LECTURE 1**
- **Introduction to Software Quality & Testing**
- Faculty of Computing
- Department of Software Engineering
- Sri Lanka Institute of Information Technology

### Visual Explanation

This is the title slide. It contains the SLIIT logo and institution name at the top, the module code and lecture number on the left, and the lecture title as the main focus.

### Explanation

The lecture introduces the foundations of software quality and testing. It establishes the terminology and concepts needed for later topics in Quality Management in Software Engineering.

### Exam Tip

Use the correct terminology from this lecture in later answers, especially **quality**, **fault**, **error**, **failure**, **verification**, **validation**, and **STLC**.

### Common Mistake

Do not treat testing as the whole of quality management. The lecture later shows that testing is one part of a larger quality-management structure.

---

## Page 02 - What This Lecture Covers

### Original Slide Content

1. Software quality
2. Software testing
3. Faults & failures
4. Why we test
5. Cost of defects
6. Maturity levels
7. Verification & validation
8. How we test
9. Types of testing
10. Testing principles
11. The STLC

### Visual Explanation

The slide presents the lecture as eleven numbered topic cards arranged in a grid. The sequence moves from definitions to practical testing processes.

```text
Quality Concepts
      |
      v
Faults, Errors, and Failures
      |
      v
Why Testing Matters
      |
      v
Testing Approaches and Levels
      |
      v
Testing Principles
      |
      v
Software Testing Life Cycle
```

### Explanation

The lecture has five broad sections:

| Broad Area | Included Topics |
|---|---|
| Software quality | Quality views and how testing supports quality |
| Testing terminology | Faults, errors, failures, and the word "bug" |
| Business importance | Failure examples, defect cost, testing maturity |
| Testing approaches | Manual, automated, static, dynamic, test levels, test types |
| Testing process | Principles and the Software Testing Life Cycle |

### Exam Tip

The outline is an effective revision checklist. A complete exam answer should use the precise terms introduced in these sections.

### Common Mistake

Do not study only test types. Quality definitions, terminology, principles, and STLC are equally important.

---

## Page 03 - Section 01: Software Quality

### Original Slide Content

- **SECTION 01**
- **Software Quality**
- Two views of quality - and where testing fits in.

### Visual Explanation

This is a section-divider slide. The large number **01** visually marks the beginning of the first major topic.

### Explanation

The section introduces two complementary definitions of quality:

- Quality from the producer's perspective.
- Quality from the customer's perspective.

It then positions software testing inside quality management.

### Exam Tip

When defining software quality, give both perspectives rather than using only one.

### Common Mistake

Do not define quality only as "no bugs." Quality includes meeting specifications and satisfying actual users.

---

## Page 04 - What Is Software Quality?

### Original Slide Content

#### Producer View - Philip Crosby

**Quality is conformance to requirements.**

Example: A car is specified for 200 km/h and 15 km/l. If it meets the specification, that is quality.

#### Customer View - Joseph Juran / W. E. Deming

**Quality is fitness for use.**

Example: A phone with great specifications still is not quality if it overheats or freezes for users.

#### Main Message

> Both matter: good software must conform to its specification and satisfy real users.

### Visual Explanation

The slide compares two quality views using two side-by-side cards:

| Producer View | Customer View |
|---|---|
| Conformance to requirements | Fitness for use |
| Focuses on whether the product matches the specification | Focuses on whether the product works well for real users |
| Car meets its stated performance figures | Phone is practically usable without overheating or freezing |

The highlighted statement at the bottom combines both views.

### Definition

**Software quality:** The degree to which software conforms to stated requirements and is fit for its intended use.

**Simple meaning:** Good software must be built correctly and must also work well for real users.

### Explanation

A product can satisfy the written specification but still provide a poor experience. Conversely, users may like a product even though it violates important requirements. High-quality software must satisfy both conditions.

```text
Producer Requirements
          +
Real User Needs
          =
Complete View of Software Quality
```

### Exam Tip

Use the two phrases exactly:

- **Conformance to requirements**
- **Fitness for use**

### Common Mistake

Do not claim that meeting a specification automatically guarantees customer satisfaction.

### Likely Exam Questions

**Question 1:** Explain the producer and customer views of software quality.

**Expected answer:** The producer view defines quality as conformance to requirements, while the customer view defines quality as fitness for use. Good software must satisfy both its specification and real user needs.

---

## Page 05 - How Software Testing Supports Software Quality

### Original Slide Content

> Testing is not the whole quality-management process - it provides evidence for product quality.

#### Quality Management

Plan and control quality across the software lifecycle.

#### Quality Assurance

Prevent defects through standards, reviews, and process improvement.

#### Quality Control

Evaluate the product and detect defects.

#### Software Testing

Execute and examine the software to reveal failures and build confidence.

### Visual Explanation

The slide draws a progression from the broadest activity to the most specific:

```text
Quality Management
Plan and control quality across the lifecycle
        |
        v
Quality Assurance
Prevent defects through standards, reviews, and process improvement
        |
        v
Quality Control
Evaluate the product and detect defects
        |
        v
Software Testing
Execute and examine software to reveal failures and build confidence
```

### Definitions

**Quality Management (QM):** The overall planning and control of quality throughout the software lifecycle.

**Simple meaning:** The complete system used to manage quality.

**Quality Assurance (QA):** Process-focused activities intended to prevent defects.

**Simple meaning:** Improve how software is developed so fewer defects are created.

**Quality Control (QC):** Product-focused activities intended to evaluate the product and detect defects.

**Simple meaning:** Check the actual software product.

**Software Testing:** Execution and examination of software to reveal failures and provide evidence about quality.

**Simple meaning:** Run or inspect the software to find problems and build confidence.

### Explanation

Testing is part of Quality Control, while Quality Assurance focuses on preventing problems through better processes.

| Aspect | QA | QC / Testing |
|---|---|---|
| Main focus | Process | Product |
| Main purpose | Prevent defects | Detect defects and failures |
| Examples | Standards, reviews, process improvement | Test execution, result checking, defect reports |

### Exam Tip

Remember the hierarchy and the difference between **prevention** and **detection**.

### Common Mistake

Do not use QA and testing as exact synonyms. Testing contributes to quality, but QA is broader and process-focused.

---

## Page 06 - What Is Software Testing?

### Original Slide Content

**Software testing is the process of evaluating a software system to reveal failures, expose defects, and check whether quality requirements are being met.**

#### Evaluate

Exercise the software against what it should do.

#### Reveal Failures

Observe wrong behaviour before real users experience it.

#### Assure Quality

Give evidence that the product is ready to proceed or ship.

### Visual Explanation

The definition is followed by three purpose cards:

```text
Evaluate
    |
    v
Reveal Failures
    |
    v
Provide Quality Evidence
```

### Definition

**Software testing:** The process of evaluating software to reveal failures, expose defects, and determine whether quality requirements are met.

**Simple meaning:** Test the software, observe problems, and collect evidence about whether it is ready.

### Explanation

Testing does not prove absolute correctness. It provides evidence and increases confidence by checking expected behaviour and finding failures before release.

### Exam Tip

A strong definition should include:

- Evaluation.
- Failures and defects.
- Quality requirements.
- Evidence or confidence.

### Common Mistake

Do not write that testing proves software has no defects. Testing can show the presence of defects, not their complete absence.

---

## Page 07 - Section 02: Faults, Errors & Failures

### Original Slide Content

- **SECTION 02**
- **Faults, Errors & Failures**
- Precise words for imprecise things - because "bug" means too many things.

### Visual Explanation

This section-divider slide uses the large number **02** and introduces precise testing vocabulary.

### Explanation

The section separates three related but different concepts:

```text
Fault -> Error -> Failure
```

Using these terms correctly helps testers discuss causes and visible outcomes without ambiguity.

### Exam Tip

This terminology is highly examinable. Learn the definitions and causal relationship.

### Common Mistake

Do not use **fault**, **error**, and **failure** as interchangeable words.

---

## Page 08 - The Term Bug

### Original Slide Content

- Bug is used informally.
- Sometimes speakers mean fault, sometimes error, sometimes failure ... often the speaker does not know what it means.
- This class will try to use words that have precise, defined, and unambiguous meanings.

### Visual Explanation

The slide is a simple bullet list emphasizing that **bug** is an imprecise umbrella term.

### Explanation

The word "bug" can hide whether the speaker means:

- A mistake in source code.
- An incorrect internal state.
- Wrong behaviour observed by a user.

Precise language improves defect reports, diagnosis, and communication.

### Exam Tip

Prefer **fault**, **error**, or **failure** when the exact meaning is known.

### Common Mistake

Do not define "bug" as only a source-code mistake unless the context makes that meaning explicit.

---

## Page 09 - Fault, Error, Failure

### Original Slide Content

#### Fault

A static defect in the software - a mistake sitting in the source code.

#### Error

An incorrect internal state, produced when a fault is executed.

#### Failure

Observable wrong behaviour, relative to the requirements.

#### Medical Analogy

- Symptoms = failures reported by the patient.
- Ailment = root cause diagnosed by the doctor.
- High blood pressure or arrhythmia = anomalous internal readings.

#### Important Note

> Software faults are present from the start; they do not "wear in" like hardware.

### Visual Explanation

The slide places the three terms in separate cards and then maps them to a medical analogy.

| Software Concept | Medical Analogy |
|---|---|
| Fault | Underlying ailment or root cause |
| Error | Abnormal internal reading |
| Failure | Visible symptom reported by the patient |

### Definition

**Fault:** A static defect in software, such as an incorrect line of source code.

**Simple meaning:** The underlying mistake in the software.

**Error:** An incorrect internal state produced when a fault executes.

**Simple meaning:** The software's internal data becomes wrong.

**Failure:** Observable behaviour that differs from the required behaviour.

**Simple meaning:** The user or tester sees the system do the wrong thing.

### Causal Relationship

```text
Fault in Code
      |
      | executed
      v
Incorrect Internal State (Error)
      |
      | propagates to observable output
      v
Failure
```

### Explanation

A fault does not always produce a failure. The fault must execute, create an incorrect internal state, and allow that state to propagate to the output.

### Exam Tip

Write the chain in the correct order:

**Fault -> Error -> Failure**

### Common Mistake

Do not say that a failure is the source-code mistake. A failure is the visible incorrect behaviour.

### Likely Exam Question

**Question:** Distinguish fault, error, and failure using an example.

**Expected answer:** A fault is the incorrect code, an error is the wrong internal state produced when that code executes, and a failure is the incorrect externally observable result.

---

## Page 10 - Same Fault, Different Outcome

### Original Slide Content

> One passing test proves very little - the fault may not propagate to the output.

### Code from Slide

```java
public static int numZero(int[] arr) {
  int count = 0;
  for (int i = 1; i < arr.length; i++) {
    // FAULT: should start at 0
    if (arr[i] == 0) {
      count++;
    }
  }
  return count;
}
```

### Test 1

```text
arr = [2, 7, 0]
```

- Expected: `1`
- Actual: `1`
- Result: No failure.
- Reason: The skipped index `0` is not zero, so the error does not reach the output.

### Test 2

```text
arr = [0, 2, 7]
```

- Expected: `1`
- Actual: `0`
- Result: Failure.
- Reason: The skipped index `0` holds the only zero, so the output is wrong.

### Visual Explanation

The slide places the faulty Java method on the left and two test outcomes on the right. Green marks the passing case; red marks the failing case.

```text
Same Fault
for loop starts at index 1
        |
        +--> Input [2, 7, 0]
        |      skipped value = 2
        |      output remains correct
        |      no visible failure
        |
        +--> Input [0, 2, 7]
               skipped value = 0
               output becomes incorrect
               visible failure
```

### Code Explanation

The loop incorrectly begins at index `1`, so the first array element is never examined. Whether this creates a visible failure depends on the test data.

### Definition

**Fault propagation:** The process by which an internal error influences later calculations and eventually becomes an observable failure.

**Simple meaning:** The internal problem reaches the final output.

### Exam Tip

A passing test shows only that the tested input did not reveal a failure. It does not prove that the program is defect-free.

### Common Mistake

Do not correct the loop in the transcribed code. The incorrect start value is intentional because the slide demonstrates fault propagation.

### Likely Exam Question

**Question:** Why does Test 1 pass even though the method contains a fault?

**Expected answer:** The first element is skipped, but in Test 1 the skipped element is not zero. Therefore, the incorrect internal behaviour does not change the final output.

---

## Page 11 - Section 03: Why Do We Test?

### Original Slide Content

- **SECTION 03**
- **Why Do We Test?**
- The cost of getting it wrong - from wasted dollars to lost lives.

### Visual Explanation

This is a section-divider slide marked with the large number **03**.

### Explanation

The section moves from definitions to consequences. It demonstrates that software failures can cause financial loss, infrastructure disruption, and loss of life.

### Exam Tip

When answering "Why test?", include risk reduction, defect detection, economic impact, safety, and user confidence.

### Common Mistake

Do not answer only "to find bugs." Testing also provides information for release decisions and reduces business and safety risk.

---

## Page 12 - When Testing Goes Wrong

### Original Slide Content

| Incident | Year / Impact | Lecture Explanation |
|---|---|---|
| Mars Climate Orbiter | 1999 - $327M | Metric-vs-imperial unit mix-up sent the probe too low. |
| Knight Capital | 2012 - $440M | Untested trade-engine deployment lost the sum in 45 minutes. |
| Ariane 5 Flight 501 | 1996 - approximately $370M | Conversion overflow forced self-destruct seconds after launch. |
| THERAC-25 | 1985-87 - 3 lives | Race condition delivered massive radiation overdoses. |
| NE Blackout | 2003 - 55M people | Alarm-system software error left operators blind. |
| Boeing 737 MAX | 2018-19 - 346 lives | Inadequately tested MCAS contributed to two crashes. |

> **"Software testers try to find the faults before the faults find the users."**

### Visual Explanation

The slide displays six incident cards in a two-row grid. Each card combines a system name, date and impact, and a short technical cause.

The examples demonstrate several risk categories:

| Risk Category | Examples |
|---|---|
| Financial loss | Knight Capital, Mars Climate Orbiter |
| Mission or product loss | Ariane 5, Mars Climate Orbiter |
| Public infrastructure disruption | NE Blackout |
| Human safety and lives | THERAC-25, Boeing 737 MAX |

### Explanation

Testing is not only a technical activity. Software failures can affect businesses, infrastructure, public safety, and human life. The required depth of testing should reflect the consequences of failure.

### Exam Tip

Use one or two examples to support an answer about the importance of testing. Explain both the failure and its impact.

### Common Mistake

Do not list incident names without connecting them to testing risk, software failure, and consequences.

---

## Page 13 - The True Cost of Poor Software

### Original Slide Content

| Figure | Meaning | Source Shown on Slide |
|---|---|---|
| `$22-59B` | Estimated annual cost of inadequate software testing to the U.S. economy | NIST, 2002 |
| `$1.7T` | Combined cost of 606 software failures reported worldwide in one year | Tricentis Fail Watch, 2016 |
| `1/2` | Half of the world's population was affected by those 2016 software failures | Tricentis Fail Watch, 2016 |

> Poor software is not just frustrating - it is a measurable drag on the global economy.

### Visual Explanation

Three large statistic cards present economic and population-scale impacts. The slide uses large numbers to emphasize scale.

### Explanation

The costs of poor software include:

- Direct repair cost.
- Lost revenue.
- Operational disruption.
- Compensation and legal cost.
- Reputational damage.
- Productivity loss.
- Impact on large populations.

### Exam Tip

When discussing software quality economically, explain that defect cost extends beyond coding and debugging.

### Common Mistake

Do not assume the main cost is only the developer time needed to fix the code.

---

## Page 14 - The Later You Catch a Defect, the More It Costs

### Original Slide Content

> Find faults early. Test continuously.

The slide shows an illustrative defect-cost curve:

| Development Stage | Relative Cost |
|---|---:|
| Requirements | `1x` |
| Design | `5x` |
| Coding / unit test | `10x` |
| Integration | `20x` |
| System test | `50x` |
| Post-release | `100x` |

Highlighted message:

> **100x costlier once a defect reaches production.**

Source note shown on slide:

> Illustrative curve after Boehm and CMU-SEI.

### Visual Explanation

The bars increase sharply from left to right:

```text
Requirements   1x
Design         5x
Coding/Test   10x
Integration   20x
System Test   50x
Post-release 100x
```

The chart communicates exponential growth in the cost of correction as a defect moves through the lifecycle.

### Explanation

A requirements fault detected immediately may need only a document correction. The same fault discovered after release may require code changes, retesting, deployment, customer support, data repair, and compensation.

### Definition

**Cost of defect:** The total effort and impact associated with finding, correcting, retesting, and recovering from a defect.

**Simple meaning:** How expensive the defect becomes to fix and manage.

### Exam Tip

Use **shift-left testing** as the practical interpretation: review and test as early as possible.

### Common Mistake

Do not interpret the values as universal exact costs. The slide labels the curve as illustrative; the important concept is that late defects are much more expensive.

### Likely Exam Question

**Question:** Why should testing begin early in the software lifecycle?

**Expected answer:** Defects detected early are cheaper and easier to correct. If they survive into integration, system testing, or production, they cause rework, retesting, deployment, support, and business impact.

---

## Page 15 - How Mature Is Your Testing?

### Original Slide Content

> Testing goals evolve as an organisation matures - the aim is Level 4.

| Level | Testing View | Explanation |
|---:|---|---|
| 0 | Testing is treated as debugging | No line is drawn between wrong behaviour and mistakes in the code. |
| 1 | Testing tries to show correctness | Passing tests cannot prove complete correctness. |
| 2 | Testing shows failures | A negative stance may pit testers against developers. |
| 3 | Testing reduces risk | Testers and developers cooperate to lower shipping risk. |
| 4 | Testing improves quality | Testing becomes a discipline that lifts the whole team. |

### Visual Explanation

The slide shows five horizontal maturity bands, numbered 0 to 4. The final band is visually highlighted.

```text
Level 0: Debugging
    |
Level 1: Demonstrate correctness
    |
Level 2: Reveal failures
    |
Level 3: Reduce risk
    |
Level 4: Improve quality
```

### Explanation

Testing maturity is not simply about using more tools. It reflects how the organization understands testing and collaborates around quality.

At Level 4:

- Testing is planned.
- Test information supports decisions.
- Developers and testers cooperate.
- Quality improvement becomes a team responsibility.

### Exam Tip

The target is **Level 4 - Testing improves quality**.

### Common Mistake

Do not define mature testing only as automated testing. Maturity also involves goals, culture, risk management, and collaboration.

---

## Page 16 - Verification vs Validation

### Original Slide Content

#### Verification - Are we building the software right?

Do the outputs of each development phase meet the requirements set in the phase before it?

**Focus:** Correct implementation against the specification.

#### Validation - Are we building the right software?

Does the finished software actually comply with its intended use?

**Focus:** Real user needs and satisfaction.

#### Car Example

> Verification checks the design specification; validation checks the customer's actual driving experience.

### Visual Explanation

The slide uses two side-by-side comparison cards.

| Verification | Validation |
|---|---|
| Are we building the software right? | Are we building the right software? |
| Checks work products against specifications | Checks the finished product against intended use |
| Focuses on correct implementation | Focuses on user needs and satisfaction |

### Definitions

**Verification:** Evaluation of development outputs to determine whether they satisfy the conditions or specifications of the preceding phase.

**Simple meaning:** Check that the product is being built correctly.

**Validation:** Evaluation of the completed software to determine whether it satisfies its intended use and real user needs.

**Simple meaning:** Check that the correct product is being built.

### Visual/Text Diagram

```text
Requirements
    |
    | Verification
    v
Design
    |
    | Verification
    v
Implementation
    |
    | Validation against real use
    v
User-acceptable product
```

### Exam Tip

Memorize the two questions:

- Verification: **Are we building the software right?**
- Validation: **Are we building the right software?**

### Common Mistake

Do not reverse the questions. This is one of the most common exam errors.

---

## Page 17 - Section 04: How We Test

### Original Slide Content

- **SECTION 04**
- **How We Test**
- Approaches, levels, and the qualities we put to the test.

### Visual Explanation

This is a section-divider slide marked with the large number **04**.

### Explanation

The section classifies testing using independent dimensions:

- Who or what performs the test.
- Whether the code is executed.
- How much of the software is covered.
- Whether behaviour or quality characteristics are tested.

### Exam Tip

Be ready to classify one test in several ways. For example, an automated system test can also be dynamic and functional.

### Common Mistake

Do not assume that manual/automated and static/dynamic are the same classification.

---

## Page 18 - How Is Testing Done?

### Original Slide Content

> Two independent questions: who runs the tests, and whether the code is executed.

#### Manual

A person exercises the application by hand, following a test plan. Useful for UI and exploratory work, but slow and error-prone.

#### Automated

Scripts and tools run the tests. Fast and repeatable, with an up-front setup cost.

#### Static

Examine the software without executing it - reviews, inspections, and walkthroughs.

#### Dynamic

Execute the software with real inputs and observe its behaviour.

### Visual Explanation

The slide presents four cards arranged as two independent comparisons:

| Who Executes? | Description |
|---|---|
| Manual | Human performs the test |
| Automated | Script or tool performs the test |

| Is Code Executed? | Description |
|---|---|
| Static | No execution |
| Dynamic | Software is executed |

### Explanation

These categories can be combined:

| Example | Classification |
|---|---|
| Human exploratory UI session | Manual + Dynamic |
| Automated unit test | Automated + Dynamic |
| Human code review | Manual + Static |
| Automated static-analysis tool | Automated + Static |

### Definitions

**Manual testing:** Testing performed directly by a person.

**Automated testing:** Testing performed by scripts or tools.

**Static testing:** Evaluation without executing the software.

**Dynamic testing:** Evaluation by executing software with inputs.

### Exam Tip

State that the two questions are independent. A test can be automated and static, or manual and dynamic.

### Common Mistake

Do not define static testing as "testing static websites." Static means the software is not executed.

---

## Page 19 - Test Levels

### Original Slide Content

> The scope widens from a small unit to the whole product.

1. **Unit**
   - Smallest testable parts such as functions or methods.
   - Usually performed by developers.
2. **Integration**
   - Modules working together correctly across their interfaces.
3. **System**
   - The whole system tested end-to-end against requirements.
4. **Acceptance**
   - Real users confirm the software meets their needs before release.

> Note: Functional and non-functional tests may be performed at several levels.

### Visual Explanation

The four cards are connected left to right with arrows:

```text
Unit -> Integration -> System -> Acceptance
Small scope --------------------------> Whole-product / user scope
```

### Definitions

**Unit testing:** Testing the smallest independently testable software elements.

**Integration testing:** Testing interactions and interfaces between combined modules.

**System testing:** Testing the complete integrated system against requirements.

**Acceptance testing:** Testing by or for users to determine whether the software is acceptable for release.

### Comparison Table

| Level | Main Focus | Typical Scope |
|---|---|---|
| Unit | Individual logic | Function, method, class |
| Integration | Interfaces and interaction | Multiple modules or services |
| System | Complete product behaviour | End-to-end system |
| Acceptance | User and business needs | Real use before release |

### Exam Tip

Remember the order and the widening scope.

### Common Mistake

Do not say acceptance testing is simply another developer test. It focuses on user or business acceptance.

---

## Page 20 - Functional and Non-Functional Testing

### Original Slide Content

> Functional tests ask "does it do what it should?"; non-functional tests ask "how well does it work?"

#### Functional Testing

Checks features and business rules against requirements:

- Login.
- Search.
- Checkout.
- Reports.
- APIs.

#### Non-Functional Testing

Checks speed, responsiveness, and stability under load.

Example: 10,000 users at once.

### Visual Explanation

Two side-by-side cards compare behaviour with quality characteristics.

| Functional Testing | Non-Functional Testing |
|---|---|
| Checks what the system does | Checks how well the system works |
| Features and business rules | Performance, responsiveness, stability |
| Example: login returns the correct result | Example: login remains responsive for 10,000 users |

### Definition

**Functional testing:** Testing software functions and business rules against specified requirements.

**Simple meaning:** Check whether the required feature works.

**Non-functional testing:** Testing quality characteristics such as performance, security, usability, reliability, or scalability.

**Simple meaning:** Check how well the system performs its functions.

### Exam Tip

Use the exact question pair:

- Functional: **Does it do what it should?**
- Non-functional: **How well does it work?**

### Common Mistake

Do not assume non-functional means "unimportant." Performance, security, and reliability can be critical requirements.

---

## Page 21 - Seven Principles of Testing

### Original Slide Content

1. **Testing shows the presence of defects**
   - Never their absence.
2. **Exhaustive testing is impossible**
   - Prioritise where risk is highest.
3. **Test early**
   - Earlier defects are cheaper to fix.
4. **Defects cluster**
   - A few modules often contain most bugs.
5. **Pesticide paradox**
   - Refresh tests to find new defects.
6. **Testing is context-dependent**
   - A pacemaker and a game need different testing.
7. **Absence of errors is a fallacy**
   - Bug-free software is useless if it is the wrong software.

### Visual Explanation

The principles are displayed as seven numbered cards. The seventh card is placed separately at the bottom, emphasizing the final warning.

### Explanation of Each Principle

| Principle | Student-Friendly Meaning |
|---|---|
| Presence of defects | A test can reveal a defect, but passing tests do not prove no defects exist. |
| Exhaustive testing impossible | All combinations cannot normally be tested; prioritize by risk. |
| Test early | Prevent expensive rework by reviewing and testing early artifacts. |
| Defects cluster | A small number of modules often contain a large share of defects. |
| Pesticide paradox | Repeating unchanged tests eventually stops finding new defects. |
| Context-dependent | Testing must match the system's risk, domain, and purpose. |
| Absence-of-errors fallacy | Correctly built software still fails if it does not meet user needs. |

### Definition

**Pesticide paradox:** The principle that repeatedly running the same tests eventually finds fewer new defects, so tests must be reviewed and improved.

**Simple meaning:** Old tests alone will stop revealing new problems.

### Exam Tip

Learn all seven names and one-line meanings. Scenario questions often ask which principle applies.

### Common Mistake

Do not confuse the first and seventh principles:

- Principle 1: Passing tests do not prove no defects exist.
- Principle 7: Even defect-free software is unsuccessful if it solves the wrong problem.

### Likely Exam Question

**Question:** Explain any four testing principles with examples.

**Expected answer:** Name each principle, define it, and add a short practical example such as risk-based prioritization for exhaustive testing being impossible.

---

## Page 22 - Section 05: The Software Testing Life Cycle

### Original Slide Content

- **SECTION 05**
- **The Software Testing Life Cycle**
- A repeatable process - the backbone of Topic 1.

### Visual Explanation

This is a section-divider slide marked with the large number **05**.

### Explanation

The Software Testing Life Cycle organizes testing work into planned phases with clear inputs, activities, and completion criteria.

### Definition

**Software Testing Life Cycle (STLC):** A structured sequence of activities used to plan, design, prepare, execute, and close software testing.

**Simple meaning:** The repeatable process followed by a testing team.

### Exam Tip

STLC phases and their outputs are major exam content.

### Common Mistake

Do not confuse STLC with SDLC. STLC focuses specifically on testing activities.

---

## Page 23 - A Common Software Testing Life Cycle

### Original Slide Content

> Six phases, each guided by entry and exit criteria.

1. **Requirement Analysis**
   - Identify what is testable and clarify acceptance criteria.
2. **Test Planning**
   - Set scope, strategy, tools, schedule, and roles.
3. **Test Case Development**
   - Write test cases and scripts; prepare test data.
4. **Test Environment Setup**
   - Configure hardware, software, and test data.
5. **Test Execution**
   - Run tests, log results, and report defects.
6. **Test Closure**
   - Check exit criteria, report, and capture lessons learned.

### Visual Explanation

The six numbered cards form a lifecycle. A circular arrow beneath them indicates repetition and feedback.

```text
1. Requirement Analysis
          |
          v
2. Test Planning
          |
          v
3. Test Case Development
          |
          v
4. Test Environment Setup
          |
          v
5. Test Execution
          |
          v
6. Test Closure
          |
          +----> Lessons and feedback for future cycles
```

### Definitions

**Entry criteria:** Conditions that must be satisfied before a testing phase begins.

**Simple meaning:** What must be ready before starting.

**Exit criteria:** Conditions that must be satisfied before a testing phase is considered complete.

**Simple meaning:** What must be achieved before finishing.

### STLC Phase Table

| Phase | Main Question | Typical Output |
|---|---|---|
| Requirement Analysis | What can and should be tested? | Testable requirements and acceptance criteria |
| Test Planning | How will testing be performed? | Test plan, scope, schedule, roles, tools |
| Test Case Development | What exact tests will be run? | Test cases, scripts, test data |
| Environment Setup | Where and with what will tests run? | Ready test environment |
| Test Execution | What happened when tests ran? | Results and defect reports |
| Test Closure | Is testing complete and what was learned? | Closure report and lessons learned |

### Exam Tip

Write phases in the correct order and mention at least one activity or output for each.

### Common Mistake

Do not place environment setup after execution. The environment must be ready before tests can run.

---

## Page 24 - STLC Quick Challenge

### Original Slide Content

> Apply each Software Testing Life Cycle phase to one simple login requirement.

#### Scenario

A university login system allows students to sign in using a student ID and password. After three incorrect attempts, the account should be temporarily locked.

#### Activity Prompts

1. **Requirement Analysis**
   - Identify one testable requirement.
2. **Test Planning**
   - Decide the feature you will test.
3. **Test Case Development**
   - Write one test case.
4. **Environment Setup**
   - State what is needed to perform the test.
5. **Test Execution**
   - Decide the expected result.
6. **Test Closure**
   - State whether the feature is ready for release.

### Visual Explanation

The scenario is highlighted at the top. Six activity boxes below correspond directly to the six STLC phases.

### Supplementary Worked Example

> The following completion is an exam-study example added for clarification. It is not printed as an answer on the slide.

| STLC Phase | Possible Application to the Login Scenario |
|---|---|
| Requirement Analysis | Confirm that the account must lock after exactly three consecutive incorrect password attempts and clarify the lock duration. |
| Test Planning | Test valid login, incorrect attempts, the third-attempt lock, and login behaviour during the lock period. |
| Test Case Development | Enter a valid student ID with an incorrect password three times; then attempt a fourth login with the correct password. |
| Environment Setup | A test student account, known credentials, login application, test database, browser, and access to account-status logs. |
| Test Execution | After the third incorrect attempt, the account becomes temporarily locked; the correct password is rejected during the lock period with an appropriate message. |
| Test Closure | Ready only if expected behaviour is observed, no critical defects remain, and exit criteria are met. |

### Exam Tip

In a scenario question, connect every STLC phase to the same requirement rather than giving unrelated generic definitions.

### Common Mistake

Do not treat "expected result" as the actual result. Expected result is defined before execution; actual result is recorded while running the test.

---

## Page 25 - Common Challenges in Testing

### Original Slide Content

- Changing requirements.
- Time constraints.
- Complex, large systems.
- Defect leakage.
- Need for skilled testers.

### Visual Explanation

The slide presents five horizontal challenge bars. Four use blue accents; **Defect leakage** is highlighted differently.

### Definitions and Explanations

| Challenge | Meaning |
|---|---|
| Changing requirements | Tests, plans, and acceptance criteria must be updated as expectations change. |
| Time constraints | Limited time forces careful prioritization and risk-based testing. |
| Complex, large systems | Many components, interfaces, configurations, and data paths increase test difficulty. |
| Defect leakage | Defects escape one testing stage and are found later or in production. |
| Need for skilled testers | Effective testing requires technical, analytical, domain, and communication skills. |

### Definition

**Defect leakage:** A defect that is not detected in the intended testing phase and escapes to a later phase or production.

**Simple meaning:** Testing misses a defect and it appears later.

### Exam Tip

For each challenge, state one practical response, such as requirement traceability, risk prioritization, automation, reviews, or training.

### Common Mistake

Do not describe every challenge as only "lack of testing." Each has a different cause and response.

---

## Page 26 - Key Takeaways

### Original Slide Content

#### Quality Has Two Faces

Conformance for the producer, fitness-for-use for the customer - testing checks both.

#### Be Precise

A fault may cause an error that leads to a failure.

#### Test Early

A defect's cost grows significantly from requirements to production.

#### Testing Is Not Debugging

Aim for Level-4 thinking: testing as a discipline that improves quality.

### Visual Explanation

Four summary cards bring together the lecture's main ideas.

```text
Quality = Conformance + Fitness for Use

Fault -> Error -> Failure

Earlier Detection -> Lower Cost

Testing -> Quality Improvement Discipline
```

### Explanation

These four statements summarize the conceptual foundation of the lecture:

1. Quality must satisfy both specifications and users.
2. Precise terminology explains cause and outcome.
3. Early testing reduces cost and risk.
4. Mature testing improves the whole development process.

### Exam Tip

These four statements can be used as the structure of a short essay on software quality and testing.

### Common Mistake

Do not reduce testing to debugging. Debugging locates and fixes causes; testing evaluates software and reveals failures.

---

## Page 27 - Over to You

### Original Slide Content

> Before you leave, finish this line:

> **"Today I learned that software testing is ______."**

### Visual Explanation

The slide contains a large blue reflection box with the incomplete sentence.

### Explanation

The activity asks students to summarize the lecture in one statement.

A suitable lecture-based completion is:

> Software testing is a structured quality-control activity that reveals failures, provides evidence about quality, reduces risk, and supports continuous improvement.

### Exam Tip

A concise definition should include evaluation, failure detection, quality evidence, and risk reduction.

### Common Mistake

Do not complete the sentence only as "finding bugs." That misses the broader quality and risk-management role.

---

# Full Lecture Summary

Software quality has two complementary views. From the producer's perspective, quality means **conformance to requirements**. From the customer's perspective, quality means **fitness for use**. Good software must satisfy both.

Software testing is part of a broader quality-management structure. Quality Management plans and controls quality across the lifecycle. Quality Assurance prevents defects through standards, reviews, and process improvement. Quality Control evaluates the product, while software testing executes and examines the product to reveal failures and build confidence.

The lecture replaces the vague word **bug** with precise terminology. A **fault** is a static defect in the code. When the fault executes, it may create an incorrect internal state called an **error**. If the error propagates to an observable output, it produces a **failure**. A fault does not always produce a failure, which is why a passing test proves very little.

Testing matters because software failures can cause large financial losses, infrastructure disruption, mission failure, and loss of life. The cost of correcting a defect rises sharply as it moves from requirements to production. Early testing and continuous testing reduce cost and risk.

Testing maturity develops from treating testing as debugging to using testing as a discipline that improves quality. Mature organizations aim for Level 4, where testers and developers cooperate and testing supports the whole team's quality goals.

**Verification** asks whether the software is being built correctly according to specifications. **Validation** asks whether the correct software is being built for real users and intended use.

Testing may be manual or automated, and static or dynamic. These dimensions are independent. Test scope progresses through unit, integration, system, and acceptance levels. Functional testing checks what the system does, while non-functional testing checks how well it works.

The seven principles of testing state that testing reveals the presence, not the absence, of defects; exhaustive testing is impossible; testing should start early; defects cluster; tests must be refreshed because of the pesticide paradox; testing is context-dependent; and defect-free software is still a failure if it is the wrong product.

The Software Testing Life Cycle contains six common phases: Requirement Analysis, Test Planning, Test Case Development, Test Environment Setup, Test Execution, and Test Closure. Each phase uses entry and exit criteria. Testing teams must also manage changing requirements, time constraints, large-system complexity, defect leakage, and the need for skilled testers.

---

# Important Code Snippets

## Fault Propagation Example - Page 10

```java
public static int numZero(int[] arr) {
  int count = 0;
  for (int i = 1; i < arr.length; i++) {
    // FAULT: should start at 0
    if (arr[i] == 0) {
      count++;
    }
  }
  return count;
}
```

### Explanation

The loop begins at index `1`, so index `0` is never checked. Some inputs still produce the correct output, while other inputs reveal a failure.

### Test Outcomes

| Input | Expected | Actual | Failure? |
|---|---:|---:|---|
| `[2, 7, 0]` | 1 | 1 | No |
| `[0, 2, 7]` | 1 | 0 | Yes |

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Software quality | Conformance to requirements and fitness for intended use | Meets specifications and satisfies users |
| Quality Management | Planning and controlling quality across the lifecycle | The complete quality system |
| Quality Assurance | Process-focused defect prevention | Improve the process to prevent defects |
| Quality Control | Product evaluation and defect detection | Check the product |
| Software testing | Evaluation of software to reveal failures and assess quality requirements | Run or inspect software to find problems |
| Fault | Static defect in software | Mistake in code or another work product |
| Error | Incorrect internal state caused by an executed fault | Wrong data or state inside the system |
| Failure | Observable behaviour that violates requirements | User sees the wrong result |
| Verification | Checking outputs against specifications | Building the software right |
| Validation | Checking the finished product against intended use | Building the right software |
| Manual testing | A person performs the test | Human-run testing |
| Automated testing | Scripts or tools perform the test | Tool-run testing |
| Static testing | Evaluation without code execution | Review or inspect |
| Dynamic testing | Evaluation by executing software | Run and observe |
| Unit testing | Testing the smallest testable parts | Test one function or method |
| Integration testing | Testing interaction between combined modules | Test interfaces |
| System testing | Testing the complete system | End-to-end product testing |
| Acceptance testing | Confirming user or business acceptance | Check readiness for users |
| Functional testing | Testing required behaviour and business rules | Does it work? |
| Non-functional testing | Testing quality characteristics | How well does it work? |
| Pesticide paradox | Repeated unchanged tests stop finding new defects | Refresh tests |
| STLC | Structured lifecycle of testing activities | Testing process |
| Entry criteria | Conditions required before a phase begins | Ready-to-start conditions |
| Exit criteria | Conditions required before a phase ends | Ready-to-finish conditions |
| Defect leakage | A defect escapes the intended testing phase | Missed defect found later |

---

# Important Diagrams Summary

| Page | Visual / Diagram | Meaning |
|---:|---|---|
| 4 | Producer view vs customer view | Complete quality includes conformance and fitness for use |
| 5 | QM -> QA -> QC -> Testing | Testing is one part of broader quality management |
| 9 | Fault -> Error -> Failure | Root cause can propagate into visible wrong behaviour |
| 10 | Same fault, two test outcomes | Faults do not always produce failures |
| 12 | Six real-world incidents | Testing failures can cause money loss, disruption, and death |
| 13 | Three large cost statistics | Poor software has global economic impact |
| 14 | Defect-cost growth chart | Late defect discovery is much more expensive |
| 15 | Testing maturity levels 0-4 | Mature testing improves quality and collaboration |
| 16 | Verification vs validation | Specification correctness vs intended-use suitability |
| 18 | Manual/automated and static/dynamic | Two independent testing dimensions |
| 19 | Unit -> Integration -> System -> Acceptance | Test scope widens toward the complete product |
| 20 | Functional vs non-functional | What the system does vs how well it does it |
| 21 | Seven testing principles | Core rules guiding effective testing |
| 23 | Six STLC phases | Repeatable testing process with entry and exit criteria |
| 24 | Login STLC activity | Apply every phase to one requirement |
| 26 | Four takeaway cards | Summary of quality, terminology, cost, and maturity |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Producer quality view | Conformance to requirements | 4 |
| Customer quality view | Fitness for use | 4 |
| Quality hierarchy | QM -> QA -> QC -> Testing | 5 |
| Testing definition | Evaluate, reveal failures, provide evidence | 6 |
| Precise terminology | Fault -> Error -> Failure | 9 |
| Passing test | Does not prove absence of defects | 10 |
| Importance of testing | Financial, operational, safety, human impact | 12-13 |
| Cost of late defects | 1x at requirements to 100x post-release in slide illustration | 14 |
| Maturity target | Level 4 - testing improves quality | 15 |
| Verification | Building the software right | 16 |
| Validation | Building the right software | 16 |
| Testing execution dimensions | Manual/automated; static/dynamic | 18 |
| Test levels | Unit, integration, system, acceptance | 19 |
| Functional testing | Does it do what it should? | 20 |
| Non-functional testing | How well does it work? | 20 |
| Testing principles | Seven principles | 21 |
| STLC order | Analysis, planning, development, setup, execution, closure | 23 |
| Common challenges | Change, time, complexity, leakage, skills | 25 |

---

# Likely Exam Questions and Short Answers

### Question 1

Define software quality using the producer and customer views.

**Expected Answer:** The producer view defines quality as conformance to requirements, while the customer view defines quality as fitness for use. High-quality software must satisfy both.

### Question 2

Explain how software testing relates to Quality Management, Quality Assurance, and Quality Control.

**Expected Answer:** Quality Management is the broad lifecycle-wide system. QA prevents defects through processes and standards. QC evaluates the product. Software testing is a QC activity that reveals failures and provides evidence about product quality.

### Question 3

Differentiate fault, error, and failure.

**Expected Answer:** A fault is a static defect, an error is an incorrect internal state caused when the fault executes, and a failure is observable wrong behaviour when the error reaches the output.

### Question 4

Why can a program containing a fault pass a test?

**Expected Answer:** The fault may not execute, may not create an incorrect state, or the error may not propagate to the observed output for that input.

### Question 5

Why is early testing economically important?

**Expected Answer:** Early defects are cheaper to correct. Late defects create rework across requirements, design, code, integration, deployment, support, and business operations.

### Question 6

Explain verification and validation.

**Expected Answer:** Verification asks whether the software is built correctly against specifications. Validation asks whether the correct software is built for intended use and user needs.

### Question 7

Distinguish manual, automated, static, and dynamic testing.

**Expected Answer:** Manual and automated describe who or what performs tests. Static and dynamic describe whether the software is executed. The two classifications are independent.

### Question 8

Explain the four test levels.

**Expected Answer:** Unit testing checks small parts, integration testing checks interfaces between modules, system testing checks the complete system, and acceptance testing confirms user or business needs before release.

### Question 9

Differentiate functional and non-functional testing.

**Expected Answer:** Functional testing checks required features and rules, while non-functional testing checks quality characteristics such as performance, stability, security, or usability.

### Question 10

List the seven principles of testing.

**Expected Answer:** Presence of defects, exhaustive testing is impossible, test early, defects cluster, pesticide paradox, context-dependent testing, and absence-of-errors fallacy.

### Question 11

List the six STLC phases in order.

**Expected Answer:** Requirement Analysis, Test Planning, Test Case Development, Test Environment Setup, Test Execution, and Test Closure.

### Question 12

What is defect leakage?

**Expected Answer:** Defect leakage occurs when a defect is missed in the intended testing phase and is found in a later phase or production.

---

# Common Mistakes to Avoid

- Defining quality only as "no bugs."
- Using QA and testing as exact synonyms.
- Claiming testing proves software has no defects.
- Using fault, error, and failure interchangeably.
- Saying a passing test proves program correctness.
- Treating the cost multipliers on Page 14 as universal exact values.
- Reversing verification and validation.
- Confusing manual/automated with static/dynamic.
- Defining static testing as testing a static website.
- Putting test levels in the wrong order.
- Saying non-functional requirements are optional.
- Forgetting one or more of the seven testing principles.
- Confusing the pesticide paradox with defect clustering.
- Confusing STLC with the entire SDLC.
- Running tests before the environment is prepared.
- Treating expected results as actual results.
- Ignoring defect leakage as a quality indicator.
- Describing testing only as debugging.

---

# Key Terms

- Software Quality
- Conformance to Requirements
- Fitness for Use
- Quality Management
- Quality Assurance
- Quality Control
- Software Testing
- Fault
- Error
- Failure
- Fault Propagation
- Testing Risk
- Cost of Defects
- Testing Maturity
- Verification
- Validation
- Manual Testing
- Automated Testing
- Static Testing
- Dynamic Testing
- Unit Testing
- Integration Testing
- System Testing
- Acceptance Testing
- Functional Testing
- Non-Functional Testing
- Exhaustive Testing
- Defect Clustering
- Pesticide Paradox
- Context-Dependent Testing
- Absence-of-Errors Fallacy
- Software Testing Life Cycle
- Requirement Analysis
- Test Planning
- Test Case Development
- Test Environment Setup
- Test Execution
- Test Closure
- Entry Criteria
- Exit Criteria
- Defect Leakage

---

# Final One-Page Revision Notes

## Quality

```text
Producer View: Conformance to requirements
Customer View: Fitness for use
Good Quality = Both
```

## Quality Structure

```text
Quality Management
    -> Quality Assurance
    -> Quality Control
    -> Software Testing
```

## Precise Terminology

```text
Fault
  -> executed
Error
  -> propagates
Failure
```

## Verification and Validation

| Verification | Validation |
|---|---|
| Building the software right | Building the right software |
| Specification focus | Intended-use and user focus |

## Testing Dimensions

```text
Who runs it?
- Manual
- Automated

Is code executed?
- Static
- Dynamic
```

## Test Levels

```text
Unit -> Integration -> System -> Acceptance
```

## Test Types

```text
Functional: Does it do what it should?
Non-functional: How well does it work?
```

## Seven Principles

1. Testing shows the presence of defects.
2. Exhaustive testing is impossible.
3. Test early.
4. Defects cluster.
5. Pesticide paradox.
6. Testing is context-dependent.
7. Absence of errors is a fallacy.

## STLC

```text
Requirement Analysis
        ->
Test Planning
        ->
Test Case Development
        ->
Test Environment Setup
        ->
Test Execution
        ->
Test Closure
```

## Final Exam Keywords

- Evidence, not proof of absence.
- Risk reduction.
- Early defect detection.
- Quality improvement.
- Entry and exit criteria.
- Precise fault/error/failure terminology.

---

# Verification

PDF pages: 27 / MD page sections: 27 ✅
