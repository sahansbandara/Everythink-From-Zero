# SE3110 - Quality Management in Software Engineering
## Lecture 02 - Specification Based Test Case Design Techniques

| Metadata | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Module Code | SE3110 |
| Module Name | Quality Management in Software Engineering |
| Lecture | Lecture 02 |
| Lecture Title | Specification Based Test Case Design Techniques |
| Main Topics | Equivalence Partitioning, Boundary Value Analysis, Decision Tables |
| Lecturer | Not specified in the lecture PDF |
| Total PDF Pages | 43 |

> **Lecture purpose:** Design effective black-box test cases from requirements without depending on the source code or internal implementation.

---
# Table of Contents

- [Lecture Overview](#se3110---quality-management-in-software-engineering)
- [Page-by-Page Lecture Notes](#page-by-page-lecture-notes)
  - [Page 01 - Lecture Title](#page-01-lecture-title)
  - [Page 02 - Introduction to Specification Based Testing](#page-02-introduction-to-specification-based-testing)
  - [Page 03 - Why Use Specification-Based Testing?](#page-03-why-use-specification-based-testing)
  - [Page 04 - Types of Specification Based Test Case Design Techniques](#page-04-types-of-specification-based-test-case-design-techniques)
  - [Page 05 - Equivalence Partitioning](#page-05-equivalence-partitioning)
  - [Page 06 - Equivalence Partitioning Assumptions](#page-06-equivalence-partitioning-assumptions)
  - [Page 07 - Fitness 1st Gym Example](#page-07-fitness-1st-gym-example)
  - [Page 08 - Why Test Reduction Is Necessary](#page-08-why-test-reduction-is-necessary)
  - [Page 09 - How to Do Equivalence Partitioning](#page-09-how-to-do-equivalence-partitioning)
  - [Page 10 - Equivalence Partitioning Diagram](#page-10-equivalence-partitioning-diagram)
  - [Page 11 - Further Dividing Equivalence Partitions](#page-11-further-dividing-equivalence-partitions)
  - [Page 12 - Equivalence Sub-Partitions](#page-12-equivalence-sub-partitions)
  - [Page 13 - Representative Test Conditions for Sub-Partitions](#page-13-representative-test-conditions-for-sub-partitions)
  - [Page 14 - Equivalence Partitioning Coverage](#page-14-equivalence-partitioning-coverage)
  - [Page 15 - Drawbacks of Equivalence Partitioning](#page-15-drawbacks-of-equivalence-partitioning)
  - [Page 16 - Equivalence Partitioning Exercise - Order Pizza](#page-16-equivalence-partitioning-exercise---order-pizza)
  - [Page 17 - Equivalence Partitioning Exercise - Answer](#page-17-equivalence-partitioning-exercise---answer)
  - [Page 18 - Boundary Value Analysis](#page-18-boundary-value-analysis)
  - [Page 19 - Why Boundary Value Analysis Is Needed](#page-19-why-boundary-value-analysis-is-needed)
  - [Page 20 - How to Do Boundary Value Analysis](#page-20-how-to-do-boundary-value-analysis)
  - [Page 21 - Three-Step Boundary Identification](#page-21-three-step-boundary-identification)
  - [Page 22 - Boundary Value Number Line](#page-22-boundary-value-number-line)
  - [Page 23 - Boundary Conditions for the Age Rule](#page-23-boundary-conditions-for-the-age-rule)
  - [Page 24 - Combining Boundary Value Analysis with Equivalence Partitioning](#page-24-combining-boundary-value-analysis-with-equivalence-partitioning)
  - [Page 25 - Combined EP and BVA Test Conditions](#page-25-combined-ep-and-bva-test-conditions)
  - [Page 26 - Drawbacks of Boundary Value Analysis](#page-26-drawbacks-of-boundary-value-analysis)
  - [Page 27 - Boundary Value Analysis Exercise - Order Pizza](#page-27-boundary-value-analysis-exercise---order-pizza)
  - [Page 28 - Boundary Value Analysis Exercise - Answer](#page-28-boundary-value-analysis-exercise---answer)
  - [Page 29 - Decision Table](#page-29-decision-table)
  - [Page 30 - How to Use a Decision Table - Step 1](#page-30-how-to-use-a-decision-table---step-1)
  - [Page 31 - Decision Table Example - Gym Membership](#page-31-decision-table-example---gym-membership)
  - [Page 32 - Decision Table - Step 2: Identify Conditions](#page-32-decision-table---step-2-identify-conditions)
  - [Page 33 - Decision Table - Step 3: Identify All Combinations](#page-33-decision-table---step-3-identify-all-combinations)
  - [Page 34 - Decision Table - Step 4: Identify Outcomes](#page-34-decision-table---step-4-identify-outcomes)
  - [Page 35 - Decision Table Reveals a Missing Rule](#page-35-decision-table-reveals-a-missing-rule)
  - [Page 36 - Decision Table with Error Action Added](#page-36-decision-table-with-error-action-added)
  - [Page 37 - Decision Table - What If Both Fields Are Not Allowed?](#page-37-decision-table---what-if-both-fields-are-not-allowed)
  - [Page 38 - Decision Table Updated for Mutually Exclusive Inputs](#page-38-decision-table-updated-for-mutually-exclusive-inputs)
  - [Page 39 - Mutually Exclusive Actions](#page-39-mutually-exclusive-actions)
  - [Page 40 - Condensed Decision Table](#page-40-condensed-decision-table)
  - [Page 41 - Decision Table - Step 5: Write Test Cases](#page-41-decision-table---step-5-write-test-cases)
  - [Page 42 - Decision Table Exercise - Credit Card Discounts](#page-42-decision-table-exercise---credit-card-discounts)
  - [Page 43 - Thank You](#page-43-thank-you)

- [Major Topic Review](#major-topic-review)
  - [Equivalence Partitioning](#equivalence-partitioning-review)
  - [Boundary Value Analysis](#boundary-value-analysis-review)
  - [Decision Tables](#decision-tables-review)
- [Full Lecture Summary](#full-lecture-summary)
- [Important Formulas and Structures](#important-formulas-and-structures)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions](#likely-exam-questions)
- [Key Terms](#key-terms)
- [Verification](#verification)

---
# Page-by-Page Lecture Notes

## Page 01 - Lecture Title

### Original Slide Content
- Sri Lanka Institute of Information Technology
- **SE3110 - Quality Management in Software Engineering**
- **Lecture 2 - Specification Based Test Case Design Techniques**
- Equivalence partitioning
- Boundary value analysis
- Decision tables
- SLIIT - Faculty of Computing - Department of Software Engineering

### Visual Explanation
The title slide introduces the three specification-based test case design techniques covered in the lecture.

### Explanation
Specification-based techniques derive test cases from requirements and observable behaviour. They are commonly treated as **black-box testing** because the tester does not need to inspect source code.

### Exam Tip
Remember the three techniques exactly: **Equivalence Partitioning (EP), Boundary Value Analysis (BVA), and Decision Tables**.

### Common Mistake
No major common mistake.

### Likely Exam Question(s)
1. **Question:** Name the three specification-based test case design techniques introduced in this lecture.
   - **Expected answer:** Equivalence Partitioning, Boundary Value Analysis, and Decision Tables.

---

## Page 02 - Introduction to Specification Based Testing

### Original Slide Content
### Key Characteristics
- Focuses on **what the system should do**, not how it is implemented.
- Independent of internal structure: **Black Box Testing / Behaviour Based Testing**.
- Uses **functional requirements** as a reference.

### Visual Explanation
The slide uses a simple textual layout to emphasize the difference between externally visible behaviour and internal implementation.

### Explanation
**Definition:** Specification-based testing is a test design approach in which test conditions and test cases are derived from specifications, requirements, and expected external behaviour.

**Simple meaning:** Test the system from the outside by checking whether inputs produce the required outputs.

### Exam Tip
Use the keywords **functional requirements**, **external behaviour**, and **independent of internal structure**.

### Common Mistake
Do not say specification-based testing examines code paths. That belongs to structure-based or white-box testing.

### Likely Exam Question(s)
1. **Question:** Why is specification-based testing called black-box testing?
   - **Expected answer:** Because test cases are designed from requirements and observable behaviour without relying on the internal code structure.

---

## Page 03 - Why Use Specification-Based Testing?

### Original Slide Content
- Ensures correctness.
- Covers diverse inputs and outputs.
- Helps catch missing or unclear requirements early.
- Does not require coding knowledge.

### Visual Explanation
No major diagram is used. The slide presents four benefits as a focused list.

### Explanation
This method is useful during requirements review and system testing because testers can identify ambiguous rules before implementation details are available.

### Exam Tip
A common exam question asks for benefits. State at least three and connect them to requirements coverage.

### Common Mistake
“Does not require coding knowledge” does not mean technical understanding is unnecessary; testers still need to understand the requirements and domain.

---

## Page 04 - Types of Specification Based Test Case Design Techniques

### Original Slide Content
- Equivalence partitioning
- Boundary value analysis
- Decision Table

### Visual Explanation
The visual is a simple three-item classification list.

### Explanation
The techniques solve different test-design problems:

| Technique | Main purpose |
|---|---|
| Equivalence Partitioning | Reduce many possible values into behaviourally similar groups |
| Boundary Value Analysis | Focus on values at and around valid/invalid limits |
| Decision Table | Test combinations of conditions and resulting actions |

### Exam Tip
Be able to select the suitable technique from a scenario.

### Common Mistake
Do not treat these techniques as mutually exclusive. EP and BVA are often combined.

---

## Page 05 - Equivalence Partitioning

### Original Slide Content
- Divide inputs into groups that are expected to behave the same way.
- Reduces the number of test cases while ensuring sufficient coverage.
- Example: an age-based system allows users aged **18-60**.
  - **Invalid Partition:** Age < 18
  - **Valid Partition:** Age 18-60
  - **Invalid Partition:** Age > 60

### Visual Explanation
The age range is split into three continuous regions:

```text
Invalid partition       Valid partition       Invalid partition
Age < 18                18 <= Age <= 60       Age > 60
```

### Explanation
**Definition:** Equivalence Partitioning divides the input domain into partitions whose values are expected to be processed in the same way.

**Simple meaning:** Choose one representative value from each group instead of testing every possible value.

### Exam Tip
For a range question, identify all valid and invalid classes before choosing representatives.

### Common Mistake
Do not test only the valid class. Invalid partitions are essential.

### Likely Exam Question(s)
1. **Question:** For an age rule of 18-60 inclusive, identify the equivalence partitions.
   - **Expected answer:** Age below 18 is invalid, ages 18 through 60 are valid, and ages above 60 are invalid.

---

## Page 06 - Equivalence Partitioning Assumptions

### Original Slide Content
Equivalence partitioning works on certain assumptions:

- The system will handle all test input variations within a partition in the same way.
- If one input condition passes, all other input conditions within the partition will also pass.
- If one input condition fails, all other input conditions within the partition will also fail.

### Visual Explanation
No major visual content.

### Explanation
The method saves effort only when the partition is correctly defined. If values inside a supposed partition trigger different rules, the partition must be divided further.

### Exam Tip
Explain the core assumption: **same behaviour inside one partition**.

### Common Mistake
A single successful representative does not prove the partition is correct if the requirements were partitioned incorrectly.

---

## Page 07 - Fitness 1st Gym Example

### Original Slide Content
Fitness 1st gym provides membership for clients between the age of **16 to 60**. The online membership form behaves as follows:

- The user has to fill the age first.
- The user can proceed only if the age is between 16 and 60.
- Otherwise, a message says that the user cannot get a membership.

### Visual Explanation
The slide describes a membership input form and its acceptance rule.

### Explanation
The requirement has one input, `age`, and one primary decision: accept ages 16-60 inclusive; reject the rest.

### Exam Tip
Translate the statement into explicit inequalities before designing tests.

### Common Mistake
Do not assume whether 16 and 60 are excluded. The wording “between 16 to 60” is clarified by later slides as inclusive.

---

## Page 08 - Why Test Reduction Is Necessary

### Original Slide Content
The form has to be tested with values:

- Less than 16
- Between 16 and 60
- More than 60

Possible combinations mentioned:
- Less than 16 has 16 combinations from 0-15.
- 16 to 60 has 45 combinations.
- Greater than 60 has 40 combinations if values are considered only up to 100.

Question: Is it possible or practical to test all 100 combinations?

### Visual Explanation
The slide compares exhaustive testing with partition-based reduction.

### Explanation
Testing every integer from 0 to 100 is possible for this tiny field, but it is inefficient and does not scale. EP reduces this to representative values from three partitions.

### Exam Tip
State that EP provides **representative coverage**, not exhaustive coverage.

### Common Mistake
The lecture's counts are illustrative. The core lesson is test reduction, not memorizing the arithmetic count.

---

## Page 09 - How to Do Equivalence Partitioning

### Original Slide Content
- **Valid partitions** are values that the component or system should accept under test. This is called a **Valid Equivalence Partition**.
- **Invalid partitions** are values that should be rejected by the component or system under test. This is called an **Invalid Equivalence Partition**.

### Visual Explanation
No major visual content.

### Explanation
Start by identifying requirement rules, then group values according to expected outcomes. Each partition should have a clear acceptance or rejection behaviour.

### Exam Tip
Use the terms **valid equivalence partition** and **invalid equivalence partition**.

### Common Mistake
“Invalid partition” means expected rejection by the system, not an invalid test case.

---

## Page 10 - Equivalence Partitioning Diagram

### Original Slide Content
The slide visually divides the age input into:
- Invalid Partition (IP)
- Valid Partition (VP)
- Invalid Partition (IP)

### Visual Explanation
Recreated diagram:

```text
<----------------|==========================|---------------->
 Invalid IP      16       Valid VP        60      Invalid IP
   Age < 16              16 <= Age <= 60           Age > 60
```

Each region should be represented by at least one test value.

### Explanation
The visual shows that partitions must be continuous, non-overlapping, and based on the system's expected behaviour.

### Exam Tip
When drawing partitions, label both the ranges and whether each is valid or invalid.

### Common Mistake
Do not leave gaps or overlaps between partitions.

---

## Page 11 - Further Dividing Equivalence Partitions

### Original Slide Content
Partitions may be divided into sub-partitions when additional requirements apply.

Additional rule:
- If age is **16 to 20** or **55 to 60**, proof of age must be attached when submitting the membership form.

Question: How should the valid partition be divided?

### Visual Explanation
No major diagram on this page; it introduces the need for sub-partitioning.

### Explanation
Although all ages 16-60 are accepted, the processing differs because some ages require proof. Therefore, the original valid partition is no longer behaviourally uniform.

### Exam Tip
When an extra rule changes behaviour inside a partition, split that partition.

### Common Mistake
Do not keep 16-60 as one valid partition after introducing proof-of-age rules.

---

## Page 12 - Equivalence Sub-Partitions

### Original Slide Content
The original valid partition is divided into three valid sub-partitions:
- VP1: Ages 16-20
- VP2: Ages 21-54
- VP3: Ages 55-60

The outer invalid partitions remain:
- Age < 16
- Age > 60

### Visual Explanation
Recreated diagram:

```text
Invalid IP        VP1              VP2              VP3       Invalid IP
Age < 16       16-----20        21--------54      55-----60    Age > 60
                 Proof             No proof          Proof
                required           required         required
```

### Explanation
Sub-partitions are necessary because the application performs different actions within the valid range.

### Exam Tip
For full EP coverage, choose a representative from every sub-partition and every invalid partition.

### Common Mistake
Do not confuse sub-partitions with boundary values. Sub-partitions represent different behaviour classes.

---

## Page 13 - Representative Test Conditions for Sub-Partitions

### Original Slide Content
VP1, VP2, and VP3 are all valid sub-partitions based on the additional requirements.

Possible test conditions:
- Enter Age 5
- Enter Age 18
- Enter Age 30
- Enter Age 58
- Enter Age 65

### Visual Explanation
The five values map to the five final partitions:

| Test value | Partition | Expected high-level result |
|---:|---|---|
| 5 | Age < 16 | Reject |
| 18 | VP1: 16-20 | Accept; proof required |
| 30 | VP2: 21-54 | Accept; no additional proof rule |
| 58 | VP3: 55-60 | Accept; proof required |
| 65 | Age > 60 | Reject |

### Explanation
Each value represents one complete behaviour class, reducing the test set from many ages to five conditions.

### Exam Tip
In answers, map each representative value to its partition.

### Common Mistake
Do not select two values from one partition while omitting another partition.

---

## Page 14 - Equivalence Partitioning Coverage

### Original Slide Content
- **Unique Partitions:** Ensure each test value belongs to only one partition; no overlap.
- **Complete Coverage:** Test cases should cover all identified partitions.
- **Coverage Measurement:**

```text
Test Coverage = (Partitions Tested / Total Recognized Partitions) x 100%
```

### Visual Explanation
The formula shows partition coverage as a percentage.

### Explanation
Example: if 4 of 5 identified partitions are tested:

```text
Test Coverage = (4 / 5) x 100% = 80%
```

### Exam Tip
Memorize both requirements: partitions must be **unique** and coverage must be **complete**.

### Common Mistake
The denominator is the total number of recognized partitions, not the total number of possible raw input values.

### Likely Exam Question(s)
1. **Question:** How is equivalence-partition coverage calculated?
   - **Expected answer:** Divide the number of partitions tested by the total recognized partitions and multiply by 100%.

---

## Page 15 - Drawbacks of Equivalence Partitioning

### Original Slide Content
- Depends on correct partitioning.
- Limited to stated requirements.
- Gives no insight into code implementation.

### Visual Explanation
No major visual content.

### Explanation
EP may miss defects when requirements are incomplete, when partitions are poorly defined, or when faults occur only at exact limits. Boundary Value Analysis complements EP for limit-related defects.

### Exam Tip
A limitations question should mention requirement dependence and lack of internal-code coverage.

### Common Mistake
Do not claim EP guarantees defect-free software.

---

## Page 16 - Equivalence Partitioning Exercise - Order Pizza

### Original Slide Content
Consider the behaviour of the **Order Pizza** text box.

Requirements:
- Pizza values **1 to 10** are valid. A success message is shown.
- Pizza values less than 1 are invalid. Error: **“Please enter a valid count”**.
- Pizza values greater than 10 are invalid. Error: **“Only 10 Pizzas can be ordered at a time”**.
- Perform equivalence partitioning and identify test conditions with sample values.

### Visual Explanation
The visual shows a text input labelled “Order Pizza” with a Submit button.

### Explanation
Partitions:

```text
Invalid: count < 1 | Valid: 1 <= count <= 10 | Invalid: count > 10
```

### Exam Tip
Identify three partitions and choose one value from each.

### Common Mistake
Do not use only 1 and 10 here; those are boundary-focused choices. EP needs representative classes.

---

## Page 17 - Equivalence Partitioning Exercise - Answer

### Original Slide Content
Test conditions:

- Any number less than 1, meaning 0 or below, is invalid.
  - **Enter Pizza Value = -1**
- Numbers 1 to 10 are valid.
  - **Enter Pizza Value = 5**
- Any number greater than 10 is invalid.
  - **Enter Pizza Value = 15**

### Visual Explanation
The answer gives one representative value from each equivalence partition.

### Explanation
Expected outcomes:

| Input | Partition | Expected result |
|---:|---|---|
| -1 | Invalid: below 1 | “Please enter a valid count” |
| 5 | Valid: 1-10 | Success message |
| 15 | Invalid: above 10 | “Only 10 Pizzas can be ordered at a time” |

### Exam Tip
When presenting EP answers, include input, partition, and expected outcome.

### Common Mistake
Do not label `-1` as a valid test case value. It is a valid test input for an invalid partition.

---

## Page 18 - Boundary Value Analysis

### Original Slide Content
- A software testing technique in which tests include representatives of boundary values in a range.
- An extension of equivalence partitioning.
- Tests the boundaries of partitions.
- Usable when the partition is ordered, consisting of numeric or sequential data.
- The minimum and maximum values of a partition are its boundary values.

### Visual Explanation
No major visual content.

### Explanation
**Definition:** Boundary Value Analysis designs tests at the minimum, maximum, and immediately adjacent values of ordered partitions.

**Simple meaning:** Errors often occur at the edges, so test just below, at, and just above each limit.

### Exam Tip
Use BVA only where values have an order, such as numbers, dates, counts, or lengths.

### Common Mistake
Do not apply numeric “one less/one more” logic to unordered categories.

---

## Page 19 - Why Boundary Value Analysis Is Needed

### Original Slide Content
- Defects have a high chance of occurring at partition boundaries.
- Equivalence partitioning alone may not catch such defects.
- BVA was designed to detect anomalies at the boundaries of a partition.

### Visual Explanation
No major visual content.

### Explanation
Typical boundary faults include `<` used instead of `<=`, off-by-one loop errors, wrong minimum/maximum checks, and incorrect array length validation.

### Exam Tip
Mention **off-by-one defects** when explaining why BVA is effective.

### Common Mistake
Do not select only a middle value when the question asks for BVA.

---

## Page 20 - How to Do Boundary Value Analysis

### Original Slide Content
Using the Fitness 1st gym age form:
- First create the equivalence partitions.
- Concentrate on the valid partition, which ranges from **16 to 60**.

### Visual Explanation
No major visual content.

### Explanation
EP identifies the valid range. BVA then focuses on both ends of that range.

### Exam Tip
Always identify the valid range before calculating boundary test values.

### Common Mistake
Do not start BVA without clarifying whether endpoints are inclusive or exclusive.

---

## Page 21 - Three-Step Boundary Identification

### Original Slide Content
Three-step approach:

1. Identify exact boundary values: **16 and 60**.
2. Get values one less than each exact boundary: **15 and 59**.
3. Get values one more than each exact boundary: **17 and 61**.

### Visual Explanation
This produces six boundary-related values: 15, 16, 17, 59, 60, and 61.

### Explanation
For an inclusive range `min..max`, the standard robust set is:

```text
min - 1, min, min + 1, max - 1, max, max + 1
```

### Exam Tip
Write the values in boundary groups so the examiner can see the method.

### Common Mistake
Do not calculate “one less” from only the lower limit and “one more” from only the upper limit; test both sides around both boundaries.

---

## Page 22 - Boundary Value Number Line

### Original Slide Content
The age boundaries and neighbouring values are shown:
- Lower boundary: 15, 16, 17
- Upper boundary: 59, 60, 61

### Visual Explanation
Recreated number line:

```text
------------------|---|---|====================|---|---|------------------
                 15  16  17                  59  60  61
                 I   V   V                   V   V   I
```

`I` = invalid; `V` = valid.

### Explanation
The diagram highlights exact boundary values and values immediately on either side.

### Exam Tip
Label the expected validity of each boundary value.

### Common Mistake
Age 59 is not below the valid range; it is the inside-neighbour of the upper boundary.

---

## Page 23 - Boundary Conditions for the Age Rule

### Original Slide Content
- **Valid boundary conditions:** Age 16, 17, 59, 60
- **Invalid boundary conditions:** Age 15, 61
- Valid boundary conditions belong to the valid partition.
- Invalid boundary conditions belong to invalid partitions.

### Visual Explanation
The slide classifies the six values from the previous number line.

### Explanation
BVA does not eliminate the concept of equivalence partitions. It chooses special representatives from the partitions around their edges.

### Exam Tip
Be able to state which values are valid and invalid, not merely list numbers.

### Common Mistake
Do not call 15 and 61 “invalid test cases”; they are test cases that verify invalid input handling.

---

## Page 24 - Combining Boundary Value Analysis with Equivalence Partitioning

### Original Slide Content
BVA is combined with EP to obtain a fuller set of test conditions.

For the range 16 to 60:
- Equivalence partitioning gives test conditions: **5, 30, 65**
- Boundary value analysis gives test conditions: **15, 16, 17, 59, 60, 61**

### Visual Explanation
No major visual on this page; it introduces the combined set.

### Explanation
EP covers the centres of the behaviour classes, while BVA covers the edges. Combining them improves confidence.

### Exam Tip
When asked to combine EP and BVA, include representatives from invalid/valid partitions and all six boundary values.

### Common Mistake
Do not remove EP representatives merely because the boundary set exists.

---

## Page 25 - Combined EP and BVA Test Conditions

### Original Slide Content
All test conditions:
- 5
- 15
- 16
- 17
- 30
- 59
- 60
- 61
- 65

### Visual Explanation
Recreated number line:

```text
Invalid representative      Lower boundary       Valid representative      Upper boundary      Invalid representative
        5                    15  16  17                   30                 59  60  61                    65
--------|---------------------|---|---|====================|==================|---|---|---------------------|--------
```

### Explanation
The set combines broad partition coverage with edge-focused defect detection.

### Exam Tip
Explain why 5, 30, and 65 are EP values and why the remaining six are BVA values.

### Common Mistake
Do not count duplicate values twice if an EP representative is also chosen as a boundary.

---

## Page 26 - Drawbacks of Boundary Value Analysis

### Original Slide Content
- BVA and EP assume the application prevents or handles other characters or values. This assumption is not valid for all applications.
- BVA cannot handle situations where a decision depends on more than one input value.
- Example: if the gym form has a Male/Female field and the age limit varies according to that selection.

### Visual Explanation
No major visual content.

### Explanation
BVA is strong for single ordered ranges but weak for combinations of independent conditions. Decision tables are more appropriate when outcomes depend on multiple inputs.

### Exam Tip
State the suitability boundary: BVA is not designed for complex combinations of conditions.

### Common Mistake
Do not try to solve multi-condition business rules using only numeric boundary points.

---

## Page 27 - Boundary Value Analysis Exercise - Order Pizza

### Original Slide Content
Use the same Order Pizza requirements:
- 1 to 10 are valid.
- Less than 1 is invalid with “Please enter a valid count”.
- Greater than 10 is invalid with “Only 10 Pizzas can be ordered at a time”.
- Perform BVA and identify boundary test conditions with sample values.

### Visual Explanation
The slide again shows the Order Pizza input and Submit button.

### Explanation
The valid interval is 1-10 inclusive. Therefore test around 1 and 10.

### Exam Tip
Use the pattern `min-1, min, min+1, max-1, max, max+1`.

### Common Mistake
Do not use only -1, 5, and 15; those are EP representatives from the previous exercise.

---

## Page 28 - Boundary Value Analysis Exercise - Answer

### Original Slide Content
Boundary value analysis test conditions:
- Value = 0 - Invalid
- Value = 1 - Valid
- Value = 2 - Valid
- Value = 9 - Valid
- Value = 10 - Valid
- Value = 11 - Invalid

### Visual Explanation
Recreated number line:

```text
----------------|---|---|=====================|---|---|----------------
                0   1   2                     9  10  11
                I   V   V                     V   V   I
```

### Explanation
These values test just outside, exactly at, and just inside both boundaries.

### Exam Tip
For a 1-10 inclusive range, the correct six BVA values are 0, 1, 2, 9, 10, and 11.

### Common Mistake
Do not classify 9 as an upper invalid value; it is inside the valid range.

---

## Page 29 - Decision Table

### Original Slide Content
- A software testing technique focused on business logic or business rules.
- A good way to deal with combinations of inputs.
- Provides a systematic way of stating complex business rules, useful for developers and testers.
- Can be used in test design whether or not it appears in the specification.
- Helps testers explore the effects of combinations of inputs and other software states that must correctly implement business rules.

### Visual Explanation
No major visual content.

### Explanation
**Definition:** A decision table represents conditions, all relevant combinations of those conditions, and the action or outcome for each combination.

**Simple meaning:** Turn “if/else” business rules into a table where each column is one rule.

### Exam Tip
Use decision tables when the outcome depends on combinations of conditions.

### Common Mistake
Do not confuse a decision table with a data table. Its columns represent rules, not records.

---

## Page 30 - How to Use a Decision Table - Step 1

### Original Slide Content
1. Identify a suitable function or subsystem that reacts according to a combination of inputs or events.
2. Avoid selecting a system with too many inputs because the number of combinations can become unmanageable.

### Visual Explanation
No major visual content.

### Explanation
With `n` Boolean conditions, a full decision table may require `2^n` combinations. The technique becomes expensive as `n` increases.

### Exam Tip
Mention combinatorial growth when discussing decision table limitations.

### Common Mistake
Do not ignore conditions that can change the action; missing one creates incomplete rules.

---

## Page 31 - Decision Table Example - Gym Membership

### Original Slide Content
A gym membership application allows a user to enter either:
- The total amount they are willing to pay, or
- The number of months they want membership for.

Behaviour:
- If total amount is entered, calculate how many months the membership lasts based on the monthly fee.
- If number of months is entered, calculate the total membership cost.

### Visual Explanation
The example defines two Boolean conditions and two main calculations.

### Explanation
The rule set must also clarify what happens when both fields are entered or when neither field is entered. Decision tables expose such missing cases.

### Exam Tip
Look for unstated combinations. This is a key strength of decision tables.

### Common Mistake
Do not assume only the two explicitly described single-field cases exist.

---

## Page 32 - Decision Table - Step 2: Identify Conditions

### Original Slide Content
Conditions:
- Enter the total amount.
- Enter the number of months.

### Visual Explanation
The slide isolates the two inputs that determine behaviour.

### Explanation
Each condition can be represented as True (`T`) or False (`F`).

### Exam Tip
Write conditions as clear yes/no statements.

### Common Mistake
Do not use outcomes such as “calculate cost” in the condition section.

---

## Page 33 - Decision Table - Step 3: Identify All Combinations

### Original Slide Content
Identify all combinations of True and False.

```text
Total Combinations = 2^(Number of Conditions)
```

With two conditions:

```text
2^2 = 4 rules
```

Initial condition table:

| Conditions | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---:|---:|---:|---:|
| Enter total amount |  |  |  |  |
| Enter number of months |  |  |  |  |

### Visual Explanation
The slide shows an empty four-rule table ready to receive all combinations.

### Explanation
For two Boolean conditions the standard column order may be `TT`, `TF`, `FT`, `FF`.

### Exam Tip
Memorize `2^n`, where `n` is the number of Boolean conditions.

### Common Mistake
Do not calculate `2 x n`; combinations grow exponentially.

---

## Page 34 - Decision Table - Step 4: Identify Outcomes

### Original Slide Content
The slide fills the four combinations and their initially expected actions:

| Conditions / Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---:|---:|---:|---:|
| Enter total amount | T | T | F | F |
| Enter number of months | T | F | T | F |
| **Actions / Outcomes** |  |  |  |  |
| Calculate how many months for membership | Y | Y |  |  |
| Total cost of membership | Y |  | Y |  |

The user may enter one or both fields. Each combination is a rule.

### Visual Explanation
The table makes the `TT`, `TF`, `FT`, and `FF` combinations visible.

### Explanation
At this stage, Rule 1 (`TT`) triggers both calculations, Rule 2 calculates months, Rule 3 calculates cost, and Rule 4 has no defined action.

### Exam Tip
A blank action cell may reveal an incomplete specification.

### Common Mistake
Do not conclude that a blank cell means “do nothing” unless the specification says so.

---

## Page 35 - Decision Table Reveals a Missing Rule

### Original Slide Content
Questions raised:
- What happens if the customer enters nothing in either field?
- The table has identified a combination not mentioned in the specification.
- This combination may be assumed to produce an error message.
- Therefore, add another action to the decision table.

### Visual Explanation
No major visual content.

### Explanation
This demonstrates requirements validation: test design can uncover missing or ambiguous behaviour before execution.

### Exam Tip
Decision tables are not only for test-case generation; they also expose requirement gaps.

### Common Mistake
Any assumed behaviour should be confirmed with stakeholders rather than silently implemented.

---

## Page 36 - Decision Table with Error Action Added

### Original Slide Content
Updated table:

| Conditions / Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---:|---:|---:|---:|
| Enter total amount | T | T | F | F |
| Enter number of months | T | F | T | F |
| **Actions / Outcomes** |  |  |  |  |
| Calculate how many months for membership | Y | Y |  |  |
| Total cost of membership | Y |  | Y |  |
| Error message |  |  |  | Y |

### Visual Explanation
The new error action gives Rule 4 (`FF`) a defined outcome.

### Explanation
The table is more complete, but the next slide challenges whether both fields should be accepted.

### Exam Tip
Check every column has an explicit and valid expected outcome.

### Common Mistake
A table can still be logically wrong even when every column has an action; business constraints must also be applied.

---

## Page 37 - Decision Table - What If Both Fields Are Not Allowed?

### Original Slide Content
Question:
- What if the customer is not allowed to enter both the total amount and the number of months?

### Visual Explanation
No major visual content.

### Explanation
If simultaneous entry is prohibited, Rule 1 (`TT`) should produce an error rather than two calculations.

### Exam Tip
When a new business rule appears, update the relevant action column rather than rebuilding the whole table blindly.

### Common Mistake
Do not leave Rule 1 unchanged after stating that both fields are mutually exclusive.

---

## Page 38 - Decision Table Updated for Mutually Exclusive Inputs

### Original Slide Content
Updated table:

| Conditions / Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---:|---:|---:|---:|
| Enter total amount | T | T | F | F |
| Enter number of months | T | F | T | F |
| **Actions / Outcomes** |  |  |  |  |
| Calculate how many months for membership |  | Y |  |  |
| Total cost of membership |  |  | Y |  |
| Error message | Y |  |  | Y |

### Visual Explanation
Rule meanings:
- Rule 1 (`TT`): error because both fields are entered.
- Rule 2 (`TF`): calculate number of months.
- Rule 3 (`FT`): calculate total cost.
- Rule 4 (`FF`): error because neither field is entered.

### Explanation
This is the completed decision logic under the mutual-exclusion requirement.

### Exam Tip
A rule column should be traceable to one test case.

### Common Mistake
Do not reverse Rule 2 and Rule 3 outcomes: total amount determines months; number of months determines total cost.

---

## Page 39 - Mutually Exclusive Actions

### Original Slide Content
- Each column now contains only one `Yes` for the actions.
- This is called a **mutually exclusive action**: only one action occurs for each combination of conditions.

### Visual Explanation
No major visual content.

### Explanation
Mutually exclusive outcomes reduce ambiguity because one rule cannot produce conflicting actions.

### Exam Tip
Define “mutually exclusive” in terms of one action per condition combination.

### Common Mistake
Mutually exclusive conditions and mutually exclusive actions are different ideas.

---

## Page 40 - Condensed Decision Table

### Original Slide Content
The completed decision table can be represented with one result per rule:

| Conditions / Result | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---:|---:|---:|---:|
| Enter total amount | T | T | F | F |
| Enter number of months | T | F | T | F |
| **Result** | Error message | Calculate number of months for membership | Calculate total cost for membership | Error message |

### Visual Explanation
The table condenses multiple action rows into a single result row because the actions are mutually exclusive.

### Explanation
This format is efficient for deriving one test case from each rule.

### Exam Tip
In an exam, clearly state both conditions and expected result for all four rules.

### Common Mistake
Do not omit Rule 1 or Rule 4 just because they are error cases.

---

## Page 41 - Decision Table - Step 5: Write Test Cases

### Original Slide Content
5. The final step is to write test cases that exercise each of the four rules in the decision table.

### Visual Explanation
No major visual content.

### Explanation
Example test-case mapping:

| Test case | Total amount entered? | Months entered? | Expected result |
|---|---:|---:|---|
| TC1 | Yes | Yes | Error message |
| TC2 | Yes | No | Calculate number of months |
| TC3 | No | Yes | Calculate total cost |
| TC4 | No | No | Error message |

### Exam Tip
There should normally be at least one test case for every valid rule column.

### Common Mistake
Do not stop after creating the table; the table must be converted into executable test cases.

---

## Page 42 - Decision Table Exercise - Credit Card Discounts

### Original Slide Content
A customer can use a credit card with three conditions:

- New customers receive a **15% discount** on all purchases today.
- If the customer is an existing customer and holds a loyalty card, the customer receives a **10 discount**.
- If the customer has a coupon, the customer can receive **20 off today**, but the coupon cannot be used with the new-customer discount.
- Create the decision table for the scenario.

### Visual Explanation
The slide is an exercise and does not provide an official answer.

With three Boolean conditions, a full table starts with:

```text
2^3 = 8 possible combinations
```

Potential conditions:
1. Is the customer new?
2. Does the customer hold a loyalty card?
3. Does the customer have a coupon?

### Explanation
The exercise requires identifying discount actions and resolving interactions, especially the incompatibility between the coupon and the new-customer discount. If the requirements do not specify precedence or combined discounts for every rule, those ambiguities should be raised.

### Exam Tip
A strong answer includes all eight combinations and explicitly marks invalid or conflicting combinations.

### Common Mistake
Do not invent precedence between discounts without stating an assumption or asking for clarification.

### Likely Exam Question(s)
1. **Question:** How many full decision-table rules are required for three Boolean conditions?
   - **Expected answer:** Eight rules, because 2^3 = 8.
2. **Question:** What requirement ambiguity is exposed by the exercise?
   - **Expected answer:** The specification does not fully state how all discount combinations should be resolved, including precedence and whether some discounts may be combined.

---

## Page 43 - Thank You

### Original Slide Content
- Thank You!
- End of Lecture 02

### Visual Explanation
The closing slide contains a large “THANK YOU!” graphic.

### Explanation
The lecture ends after covering Equivalence Partitioning, Boundary Value Analysis, and Decision Tables.

### Exam Tip
Use the final revision sections below to compare the three techniques and practise test-design questions.

### Common Mistake
No major common mistake.

---

# Major Topic Review

## Equivalence Partitioning Review

### Definition
Equivalence Partitioning divides an input domain into valid and invalid groups whose values are expected to produce the same behaviour.

### Simple meaning
Test one representative from each meaningful input group instead of testing every possible value.

### Workflow
```text
Read requirement
      |
      v
Identify input domain
      |
      v
Separate valid and invalid behaviour classes
      |
      v
Split classes further when additional rules change behaviour
      |
      v
Choose one representative per partition
      |
      v
Check complete, non-overlapping coverage
```

### Exam Tip
When asked to “apply EP,” provide:
1. The partitions.
2. Whether each is valid or invalid.
3. One representative input per partition.
4. The expected result.

### Common Mistake
Choosing only valid values or defining overlapping partitions.

### Likely questions
1. **Explain Equivalence Partitioning with an example.**  
   **Expected answer:** Define EP, identify behaviourally similar classes, and show valid/invalid partitions with representative values.
2. **Why may a valid partition need sub-partitioning?**  
   **Expected answer:** Because additional requirements may cause values inside the original partition to receive different processing.

## Boundary Value Analysis Review

### Definition
Boundary Value Analysis tests exact limits and values immediately below and above those limits.

### Simple meaning
Most input-range bugs happen at the edges, so test the edges carefully.

### Standard inclusive-range pattern
```text
min - 1, min, min + 1, max - 1, max, max + 1
```

### Relationship with EP
| EP | BVA |
|---|---|
| Covers representative behaviour classes | Covers edges between classes |
| Often chooses middle values | Chooses values at and next to limits |
| Reduces the full input domain | Detects off-by-one and comparison errors |
| Works for ordered and some categorical partitions | Requires an ordered domain |

### Exam Tip
Show the range, draw a number line when useful, and classify each value as valid or invalid.

### Common Mistake
Listing only `min` and `max` without the neighbouring values.

### Likely questions
1. **Apply BVA to a valid range of 1-10.**  
   **Expected answer:** 0, 1, 2, 9, 10, 11, with 0 and 11 invalid.
2. **Why combine EP and BVA?**  
   **Expected answer:** EP covers all behaviour classes, while BVA targets defect-prone edges.

## Decision Tables Review

### Definition
A decision table maps combinations of conditions to actions or outcomes.

### Simple meaning
Each column is one complete “if this combination, then this result” rule.

### Workflow
```text
Select business rule
      |
      v
List Boolean conditions
      |
      v
Calculate 2^n combinations
      |
      v
Fill T/F condition columns
      |
      v
Assign actions or outcomes
      |
      v
Identify missing or conflicting rules
      |
      v
Write one or more test cases per rule
```

### Structure
| Section | Purpose |
|---|---|
| Conditions | Inputs or states that can be true or false |
| Rules | Every relevant combination of conditions |
| Actions | Required system response for each rule |
| Test cases | Concrete data that exercises each rule |

### Exam Tip
For `n` independent Boolean conditions, begin with `2^n` columns unless rules or constraints justify collapsing combinations.

### Common Mistake
Leaving a rule with no action or silently assuming an outcome for an unspecified combination.

### Likely questions
1. **What is the advantage of a decision table?**  
   **Expected answer:** It systematically covers combinations of business conditions and exposes missing, conflicting, or ambiguous requirements.
2. **How many rules exist for four Boolean conditions?**  
   **Expected answer:** `2^4 = 16`.

---

# Full Lecture Summary

Specification-based testing derives test cases from requirements and expected behaviour. It is independent of implementation and therefore supports black-box testing.

**Equivalence Partitioning** reduces the number of test cases by dividing input data into valid and invalid behaviour classes. A correct partition is unique, non-overlapping, and represented by at least one test. Additional business rules may require a partition to be divided into sub-partitions.

**Boundary Value Analysis** extends EP by selecting values at and around the limits of ordered partitions. For an inclusive range, the common test set is one below, at, and one above the lower boundary, plus one below, at, and one above the upper boundary. EP and BVA work well together: EP covers broad classes, while BVA targets defect-prone edges.

**Decision Tables** are used when outcomes depend on combinations of conditions. Conditions are listed as True/False, and each combination becomes a rule column. The number of combinations for `n` Boolean conditions is `2^n`. Actions are assigned to every rule, and concrete test cases are then written to exercise the rules. Decision tables also expose missing and ambiguous requirements.

---

# Important Formulas and Structures

## Equivalence Partition Coverage
```text
Test Coverage = (Partitions Tested / Total Recognized Partitions) x 100%
```

## Number of Decision-Table Combinations
```text
Total Combinations = 2^(Number of Conditions)
```

## Standard BVA Values for an Inclusive Range
```text
min - 1, min, min + 1, max - 1, max, max + 1
```

## EP + BVA for Age 16-60
```text
EP representatives: 5, 30, 65
BVA values:         15, 16, 17, 59, 60, 61
Combined set:       5, 15, 16, 17, 30, 59, 60, 61, 65
```

## Completed Gym Decision Table
| Conditions / Result | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---:|---:|---:|---:|
| Enter total amount | T | T | F | F |
| Enter number of months | T | F | T | F |
| Result | Error | Calculate months | Calculate total cost | Error |

---

# Key Definitions Table

| Term | Definition | Simple example |
|---|---|---|
| Specification-based testing | Testing derived from requirements and external behaviour | Verify a login form from its stated rules |
| Black-box testing | Testing without depending on internal source code | Provide inputs and check outputs |
| Equivalence Partition | A class of values expected to behave the same way | Ages 16-60 accepted |
| Valid Partition | Values the system should accept | Pizza count 1-10 |
| Invalid Partition | Values the system should reject | Pizza count above 10 |
| Boundary Value | Minimum, maximum, or neighbouring value of an ordered partition | 0, 1, 2 for lower boundary 1 |
| Boundary Value Analysis | Testing at and around partition boundaries | Test 9, 10, 11 around upper limit 10 |
| Decision Table | Table mapping condition combinations to actions | Amount entered / months entered rules |
| Condition | A Boolean input or state in a decision table | “Total amount entered?” |
| Rule | One complete combination of conditions | `T,F` |
| Action | Expected system outcome for a rule | Calculate months |
| Mutually Exclusive Action | Only one action occurs for a condition combination | Error OR calculate, not both |

---

# Quick Revision Table

| Topic | Must Remember | Pages |
|---|---|---:|
| Specification-based testing | Tests what the system should do; uses functional requirements | 2-4 |
| EP definition | Divide inputs into same-behaviour classes | 5-9 |
| EP sub-partitions | Split a class when an additional rule changes behaviour | 11-13 |
| EP coverage | Unique partitions, complete coverage, coverage formula | 14 |
| EP limitations | Depends on requirements and correct partitioning | 15 |
| BVA definition | Test boundaries of ordered partitions | 18-20 |
| BVA method | `min-1, min, min+1, max-1, max, max+1` | 21-23 |
| EP + BVA | Combine class representatives and boundary values | 24-25 |
| BVA limitation | Weak for multi-input decisions | 26 |
| Decision table purpose | Cover combinations of business conditions | 29-32 |
| Rule count | `2^n` for `n` Boolean conditions | 33 |
| Missing requirements | Blank or conflicting columns expose gaps | 34-38 |
| Test-case derivation | Exercise every decision-table rule | 41 |
| Credit-card exercise | Three conditions produce eight combinations | 42 |

---

# Likely Exam Questions

## Question 1
Define specification-based testing.

**Expected answer:**  
It is a black-box test design approach in which test cases are derived from functional requirements and expected external behaviour without relying on internal code structure.

## Question 2
A field accepts values from 20 to 50 inclusive. Apply Equivalence Partitioning.

**Expected answer:**  
Invalid partition: values below 20; valid partition: 20-50; invalid partition: values above 50. Example representatives: 10, 35, and 60.

## Question 3
Apply BVA to the range 20-50 inclusive.

**Expected answer:**  
19, 20, 21, 49, 50, 51. Values 19 and 51 are invalid; the others are valid.

## Question 4
Differentiate EP and BVA.

**Expected answer:**  
EP groups inputs by expected behaviour and selects representative values, while BVA selects exact and neighbouring values at partition limits to detect boundary defects.

## Question 5
Why are decision tables suitable for business rules?

**Expected answer:**  
They systematically represent all relevant combinations of conditions and the required outcomes, revealing missing or conflicting requirements.

## Question 6
A subsystem has five Boolean conditions. How many full decision-table rules are possible?

**Expected answer:**  
`2^5 = 32`.

## Question 7
Create the completed rule results for the gym membership example.

**Expected answer:**  
Both fields entered: error; amount only: calculate months; months only: calculate total cost; neither field: error.

## Question 8
State three drawbacks of EP or BVA.

**Expected answer:**  
EP depends on correct partitioning, is limited by stated requirements, and does not cover internal code. BVA applies mainly to ordered inputs and does not directly handle complex combinations of inputs.

---

# Key Terms

Specification-based testing; black-box testing; behaviour-based testing; functional requirements; Equivalence Partitioning; valid partition; invalid partition; sub-partition; representative value; partition coverage; Boundary Value Analysis; minimum boundary; maximum boundary; off-by-one defect; ordered partition; decision table; condition; rule; action; outcome; Boolean combination; mutually exclusive action; requirement ambiguity; test condition; test case.

---

# Verification

PDF pages: 43 / MD page sections: 43 ✅
