# SE3110 - Quality Management in Software Engineering
## Tutorial 02 - Boundary Value Analysis, Equivalence Partitioning, and Decision Tables

| Item | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Degree | BSc (Hons) in Software Engineering |
| Module Code | SE3110 |
| Module Name | Quality Management in Software Engineering |
| Academic Period | Year 3, Semester 1 - 2026 |
| Tutorial | Tutorial 02 |
| Main Topics | Boundary Value Analysis, Equivalence Partitioning, Decision Tables |
| PDF Pages | 2 |

---

# Table of Contents

- [Page 01 - Tutorial Questions and Initial Answer](#page-01--tutorial-questions-and-initial-answer)
  - [Question 1 - Salary Tax Rules](#question-1--salary-tax-rules)
  - [Question 2 - Customer Discount and Delivery Rules](#question-2--customer-discount-and-delivery-rules)
  - [Answer - Equivalence Partitioning](#answer--equivalence-partitioning)
  - [Answer - Boundary Value Analysis, First Test](#answer--boundary-value-analysis-first-test)
- [Page 02 - Boundary Tests and Decision Table](#page-02--boundary-tests-and-decision-table)
  - [Boundary Value Analysis - Complete Test Set](#boundary-value-analysis--complete-test-set)
  - [Decision Table - Original Eight Rules](#decision-table--original-eight-rules)
- [Major Topic 1 - Equivalence Partitioning](#major-topic-1--equivalence-partitioning)
- [Major Topic 2 - Boundary Value Analysis](#major-topic-2--boundary-value-analysis)
- [Major Topic 3 - Decision Table Testing](#major-topic-3--decision-table-testing)
- [Full Tutorial Summary](#full-tutorial-summary)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Important Formulas and Code Snippets](#important-formulas-and-code-snippets)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Key Terms](#key-terms)

---

# Page-by-Page Notes

## Page 01 - Tutorial Questions and Initial Answer

### Original Slide Content

**BSc (Hons) in Software Engineering**  
**SE3110: Quality Management in Software Engineering**  
**Year 3 Semester 1 2026**  
**Tutorial 2**

### Question 1 - Salary Tax Rules

Using **Boundary Value Analysis** and **Equivalence Partitioning** test-design techniques, identify the optimum set of test cases for the following business requirements.

A system designed to calculate the tax payable must apply these rules:

- If an employee's salary is **less than Rs. 50,000**, the employee is **not taxed**.
- If the salary is **greater than or equal to Rs. 50,000** and **less than Rs. 200,000**, the employee is taxed at **10%**.
- If the salary is **greater than or equal to Rs. 200,000** and **less than Rs. 400,000**, the employee is taxed at **15%**.
- If the salary is **greater than or equal to Rs. 400,000**, the employee is taxed at **25%**.

### Visual Explanation

The page uses a standard SLIIT tutorial layout and presents the salary rules as four ordered ranges. The important visual meaning is the transition from one tax rate to another at three boundary points: **50,000**, **200,000**, and **400,000**.

```text
Salary range (Rs.)

Less than 50,000       50,000 to 199,999       200,000 to 399,999       400,000 and above
        |                       |                        |                         |
        v                       v                        v                         v
      0% tax                  10% tax                  15% tax                  25% tax

Boundaries: 50,000 | 200,000 | 400,000
```

**Why this matters:** Equivalence Partitioning chooses a representative value from each range, while Boundary Value Analysis focuses on values immediately below, at, and immediately above each boundary.

### Explanation

The salary input domain is divided into four groups that should behave identically within each group. Testing every salary is unnecessary. Instead:

- **Equivalence Partitioning** selects one typical salary from each tax bracket.
- **Boundary Value Analysis** tests the points where the output changes, because defects commonly occur around `<`, `<=`, `>`, and `>=` conditions.

### Exam Tip

When answering, first write the four valid partitions, then identify the three boundaries. For each boundary, use the pattern **boundary - 1, boundary, boundary + 1** when salary is treated as a whole-number value.

### Common Mistake

Do not assign Rs. 50,000 to the 0% partition. The requirement states **less than Rs. 50,000** is untaxed, while **Rs. 50,000 is included in the 10% partition**.

### Likely Exam Questions

1. **Question:** Identify the equivalence partitions for the salary-tax system.  
   **Expected answer:** `< 50,000 -> 0%`, `50,000-199,999 -> 10%`, `200,000-399,999 -> 15%`, and `>= 400,000 -> 25%`.

2. **Question:** Why should Rs. 49,999, Rs. 50,000, and Rs. 50,001 be tested?  
   **Expected answer:** They test immediately below, exactly at, and immediately above the Rs. 50,000 boundary.

---

### Question 2 - Customer Discount and Delivery Rules

Create a **decision table** and the optimized set of condition combinations for the following business requirements. Assume customers are either **new** or **existing** customers only.

#### Conditions

- Existing customers receive a **2% discount** on all orders.
- If the customer is existing and pays by cash, an **additional 3% discount** is offered.
- If **fifty or more items** are ordered by any type of customer, then, in addition to the applicable discount, the items are delivered **free of charge**.

### Visual Explanation

The conditions form three Boolean decisions:

1. Is the customer existing?
2. Is payment made by cash?
3. Is the order quantity at least 50?

Three independent True/False conditions produce `2^3 = 8` possible combinations before optimization.

```text
Customer type
├── Existing
│   ├── Cash       -> 5% total discount
│   └── Not cash   -> 2% discount
└── New
    ├── Cash       -> 0% discount
    └── Not cash   -> 0% discount

For every branch:
Order quantity >= 50 -> Free delivery
Order quantity < 50  -> No free delivery
```

**Why this matters:** A decision table ensures every meaningful combination is tested and prevents missing interactions between customer type, payment method, and order quantity.

### Explanation

The 3% cash discount is not a general cash discount. It is an **additional discount only for existing customers who pay cash**. New customers receive no discount regardless of payment method. Delivery depends only on quantity and applies to both new and existing customers.

### Exam Tip

Underline dependency words such as **"if it is an existing customer and pays by cash"**. This makes it clear that the 3% cash discount requires both conditions.

### Common Mistake

Do not give a new customer a 3% discount merely because the customer pays cash. The cash discount is conditional on the customer also being existing.

### Likely Exam Questions

1. **Question:** How many unoptimized rules are generated by three Boolean conditions?  
   **Expected answer:** `2^3 = 8` rules.

2. **Question:** What discount applies to an existing customer paying cash?  
   **Expected answer:** 2% existing-customer discount plus an additional 3%, giving a total of 5%.

---

### Answer - Equivalence Partitioning

The original page begins the answer with the following representative test cases:

| Test Input | Expected Output |
|---|---:|
| Salary = 25,000 | Tax = 0% |
| Salary = 100,000 | Tax = 10% |
| Salary = 300,000 | Tax = 15% |
| Salary = 500,000 | Tax = 25% |

### Visual Explanation

The table selects one salary from the interior of each tax range. Each chosen salary represents all other valid salaries in that same equivalence class.

| Equivalence Class | Representative Value | Expected Result |
|---|---:|---:|
| Salary < 50,000 | 25,000 | 0% |
| 50,000 <= Salary < 200,000 | 100,000 | 10% |
| 200,000 <= Salary < 400,000 | 300,000 | 15% |
| Salary >= 400,000 | 500,000 | 25% |

### Explanation

These four cases are the optimum valid-partition set shown in the tutorial because one case is selected from each distinct behavior group.

### Exam Tip

Choose values clearly inside each partition for Equivalence Partitioning. Avoid selecting a boundary value as the representative unless the question explicitly combines EP with BVA.

### Common Mistake

Do not use multiple values from the same partition while leaving another partition untested.

---

### Answer - Boundary Value Analysis, First Test

The first BVA test shown at the bottom of page 1 is:

| Test Input | Expected Output |
|---|---:|
| Salary = 49,999 | Tax = 0% |

### Visual Explanation

Rs. 49,999 is immediately below the first boundary, Rs. 50,000. It confirms that the final salary in the untaxed partition still receives 0% tax.

### Explanation

The remaining BVA tests continue on page 2.

### Exam Tip

For each threshold, test the value immediately below it, exactly equal to it, and immediately above it.

### Common Mistake

Do not stop after testing only the value below a boundary. A complete normal BVA set includes the boundary itself and the adjacent value above it.

---

## Page 02 - Boundary Tests and Decision Table

### Original Slide Content

Page 2 continues the Boundary Value Analysis answer and provides the eight-rule decision table.

### Boundary Value Analysis - Complete Test Set

| Test Input | Expected Output |
|---|---:|
| Salary = 49,999 | Tax = 0% |
| Salary = 50,000 | Tax = 10% |
| Salary = 50,001 | Tax = 10% |
| Salary = 199,999 | Tax = 10% |
| Salary = 200,000 | Tax = 15% |
| Salary = 200,001 | Tax = 15% |
| Salary = 399,999 | Tax = 15% |
| Salary = 400,000 | Tax = 25% |
| Salary = 400,001 | Tax = 25% |

### Visual Explanation

The table tests three values around each of the three boundaries:

| Boundary | Just Below | At Boundary | Just Above |
|---:|---:|---:|---:|
| 50,000 | 49,999 -> 0% | 50,000 -> 10% | 50,001 -> 10% |
| 200,000 | 199,999 -> 10% | 200,000 -> 15% | 200,001 -> 15% |
| 400,000 | 399,999 -> 15% | 400,000 -> 25% | 400,001 -> 25% |

```text
49,999       50,000       50,001
  0%     |boundary|         10%

199,999      200,000      200,001
  10%    |boundary|         15%

399,999      400,000      400,001
  15%    |boundary|         25%
```

**Why this matters:** These tests can reveal wrong comparison operators such as using `>` instead of `>=`, or assigning a boundary to the wrong tax bracket.

### Explanation

The PDF uses a robust 3-value boundary approach. Since there are three boundaries and each is tested below, at, and above, the complete set contains nine BVA cases.

### Exam Tip

Show the test data and the expected outcome together. A BVA answer without expected results is incomplete as a test case set.

### Common Mistake

Do not treat Rs. 199,999 and Rs. 200,000 as belonging to the same partition. Rs. 200,000 starts the 15% range.

### Likely Exam Questions

1. **Question:** List the BVA tests around Rs. 200,000.  
   **Expected answer:** Rs. 199,999 -> 10%, Rs. 200,000 -> 15%, and Rs. 200,001 -> 15%.

2. **Question:** How many test cases are in the tutorial's complete BVA set?  
   **Expected answer:** Nine test cases: three values around each of three boundaries.

---

### Decision Table - Original Eight Rules

The tutorial's decision table is recreated below.

| Conditions / Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 | Rule 7 | Rule 8 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Existing Customer (2%) | T | T | T | T | F | F | F | F |
| Pay by Cash (3%) | T | T | F | F | T | T | F | F |
| 50 or More Items | T | F | T | F | T | F | T | F |
| **Discount** | **5%** | **5%** | **2%** | **2%** | **0%** | **0%** | **0%** | **0%** |
| **Free Delivery** | **Y** | **N** | **Y** | **N** | **Y** | **N** | **Y** | **N** |

> **Source wording note:** The requirement says **"fifty or more items"**, meaning `quantity >= 50`. The slide's table label visually says **"More than 50 items"**. For correct requirement-based testing, treat the threshold as **50 or more**.

### Rule-by-Rule Meaning

| Rule | Customer | Payment | Quantity | Discount | Delivery |
|---|---|---|---|---:|---|
| 1 | Existing | Cash | >= 50 | 5% | Free |
| 2 | Existing | Cash | < 50 | 5% | Paid/normal |
| 3 | Existing | Not cash | >= 50 | 2% | Free |
| 4 | Existing | Not cash | < 50 | 2% | Paid/normal |
| 5 | New | Cash | >= 50 | 0% | Free |
| 6 | New | Cash | < 50 | 0% | Paid/normal |
| 7 | New | Not cash | >= 50 | 0% | Free |
| 8 | New | Not cash | < 50 | 0% | Paid/normal |

### Visual Explanation

The table enumerates every possible True/False combination. The outputs follow two separate decision paths:

```text
Discount decision
Existing customer?
├── Yes
│   ├── Cash? Yes -> 5%
│   └── Cash? No  -> 2%
└── No             -> 0% (cash is irrelevant)

Delivery decision
Quantity >= 50?
├── Yes -> Free delivery
└── No  -> Normal delivery charge
```

**Why this matters:** The full table proves that all combinations have been considered. It also reveals that payment method does not affect the outcome for new customers.

### Optimized Decision Table

Rules 5 and 7 have the same outcomes except for the irrelevant cash condition, and rules 6 and 8 do as well. They can therefore be merged using `-` for **don't care**.

| Conditions / Actions | Opt. Rule 1 | Opt. Rule 2 | Opt. Rule 3 | Opt. Rule 4 | Opt. Rule 5 | Opt. Rule 6 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Existing Customer | T | T | T | T | F | F |
| Pay by Cash | T | T | F | F | - | - |
| 50 or More Items | T | F | T | F | T | F |
| **Discount** | **5%** | **5%** | **2%** | **2%** | **0%** | **0%** |
| **Free Delivery** | **Y** | **N** | **Y** | **N** | **Y** | **N** |

`-` means the payment method does not change the outcome for a new customer.

### Explanation

The unoptimized table contains eight combinations. The optimized table contains six rules because the cash condition is irrelevant when the customer is new.

### Exam Tip

Start with all combinations, calculate the actions, and then merge rules only when their outputs are identical and the differing condition has no effect.

### Common Mistake

Do not merge rules merely because one action is the same. All resulting actions must match before a condition can be replaced by `-`.

### Likely Exam Questions

1. **Question:** Why can Rules 5 and 7 be merged?  
   **Expected answer:** Both represent new customers ordering at least 50 items and produce 0% discount with free delivery; payment method does not affect the outcome.

2. **Question:** What does `-` mean in an optimized decision table?  
   **Expected answer:** It means "don't care"; either True or False produces the same actions for that rule.

---

# Major Topic 1 - Equivalence Partitioning

### Definition:

**Equivalence Partitioning (EP)** is a black-box test-design technique that divides the input domain into groups expected to be handled in the same way by the system.

### Simple meaning:

Instead of testing every possible input, test one representative value from each behavior group.

### Tutorial Application

| Partition | Condition | Representative Test | Expected Tax |
|---|---|---:|---:|
| EP1 | Salary < 50,000 | 25,000 | 0% |
| EP2 | 50,000 <= Salary < 200,000 | 100,000 | 10% |
| EP3 | 200,000 <= Salary < 400,000 | 300,000 | 15% |
| EP4 | Salary >= 400,000 | 500,000 | 25% |

### Exam Tip:

Clearly state the range of every partition and choose one representative input from each.

### Common Mistake:

Choosing two values from one partition does not increase coverage if another partition is missing.

### Likely Exam Questions

1. **Question:** Define Equivalence Partitioning.  
   **Expected answer:** It divides the input domain into classes in which all values are expected to produce equivalent behavior, allowing one representative test per class.

2. **Question:** What is the representative EP test for the 15% bracket in the tutorial?  
   **Expected answer:** Salary = Rs. 300,000, expected tax rate = 15%.

---

# Major Topic 2 - Boundary Value Analysis

### Definition:

**Boundary Value Analysis (BVA)** is a black-box test-design technique that selects test inputs at and around the boundaries between equivalence partitions.

### Simple meaning:

Errors often occur where one range changes into another, so test just below, exactly at, and just above each limit.

### Tutorial Boundaries

| Boundary | Values Tested |
|---:|---|
| 50,000 | 49,999, 50,000, 50,001 |
| 200,000 | 199,999, 200,000, 200,001 |
| 400,000 | 399,999, 400,000, 400,001 |

### Exam Tip:

Match each BVA input to its expected result. This demonstrates that you understand which partition owns the exact boundary.

### Common Mistake:

Using arbitrary values near the middle of a range is EP, not BVA.

### Likely Exam Questions

1. **Question:** Define Boundary Value Analysis.  
   **Expected answer:** It tests values at and immediately around input boundaries where system behavior changes.

2. **Question:** Which tax rate applies exactly at Rs. 400,000?  
   **Expected answer:** 25%, because the final range is salary greater than or equal to Rs. 400,000.

---

# Major Topic 3 - Decision Table Testing

### Definition:

**Decision Table Testing** is a black-box technique that represents combinations of conditions and their corresponding actions in a table.

### Simple meaning:

List every important situation and show exactly what the system must do in each one.

### Condition and Action Model

| Type | Item |
|---|---|
| Condition | Existing customer? |
| Condition | Pays by cash? |
| Condition | Orders 50 or more items? |
| Action | Apply 0%, 2%, or 5% discount |
| Action | Provide free delivery or not |

### Exam Tip:

For `n` independent Boolean conditions, begin with up to `2^n` rules, then optimize by merging rules with identical actions.

### Common Mistake:

Do not interpret the additional 3% cash discount as independent of existing-customer status.

### Likely Exam Questions

1. **Question:** What is the purpose of a decision table?  
   **Expected answer:** To systematically represent combinations of conditions and verify the corresponding actions or outcomes.

2. **Question:** What discount applies to a new customer who pays cash and orders 60 items?  
   **Expected answer:** 0% discount and free delivery.

---

# Full Tutorial Summary

This tutorial applies three black-box test-design techniques:

1. **Equivalence Partitioning** divides the salary input into four valid behavior groups and selects one representative salary from each.
2. **Boundary Value Analysis** tests the values immediately below, exactly at, and immediately above the salary thresholds Rs. 50,000, Rs. 200,000, and Rs. 400,000.
3. **Decision Table Testing** enumerates combinations of customer type, payment method, and order quantity to determine discount and delivery outcomes.

The salary system has four tax outcomes: 0%, 10%, 15%, and 25%. The customer-order system gives existing customers 2%, increases this to 5% when they pay cash, and provides free delivery to any customer ordering at least 50 items. The complete decision table has eight rules, and it can be optimized to six because payment type does not affect new-customer outcomes.

---

# Key Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Equivalence Partition | A group of input values expected to produce the same system behavior | A range where one representative test is enough |
| Equivalence Partitioning | Dividing inputs into equivalent behavior classes | Test one typical value from each group |
| Boundary | A point where expected behavior changes | The exact limit between two ranges |
| Boundary Value Analysis | Testing at and around partition boundaries | Test below, at, and above each limit |
| Decision Table | A table mapping condition combinations to actions | A complete rule sheet for business logic |
| Rule | One combination of conditions and expected actions | One testable business scenario |
| Don't Care (`-`) | A condition whose value does not affect the actions | True or False gives the same result |
| Optimized Decision Table | A table in which equivalent rules are merged | Fewer rules without losing behavior coverage |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Salary partitions | `<50k: 0%`, `50k-<200k: 10%`, `200k-<400k: 15%`, `>=400k: 25%` | 1 |
| EP representatives | 25,000; 100,000; 300,000; 500,000 | 1 |
| BVA pattern | Boundary - 1, boundary, boundary + 1 | 1-2 |
| Salary boundaries | 50,000; 200,000; 400,000 | 1-2 |
| Existing-customer discount | 2% | 1-2 |
| Existing + cash discount | 5% total | 1-2 |
| Free-delivery threshold | 50 or more items | 1-2 |
| Full decision table | 8 combinations | 2 |
| Optimized table | 6 rules; cash is don't-care for new customers | 2 |

---

# Important Formulas and Code Snippets

No programming code appears in this tutorial.

The only useful combination formula is:

```text
Number of Boolean combinations = 2^n
```

For three Boolean conditions:

```text
2^3 = 8 unoptimized decision-table rules
```

The BVA selection pattern used is:

```text
Boundary - 1, Boundary, Boundary + 1
```

---

# Likely Exam Questions and Short Answers

### Question 1

What is the difference between Equivalence Partitioning and Boundary Value Analysis?

**Expected Answer:**  
EP selects representative values from groups of inputs expected to behave the same. BVA selects values at and immediately around the boundaries between those groups.

### Question 2

Write the four equivalence partitions for the salary-tax system.

**Expected Answer:**  
Salary `< 50,000 -> 0%`; `50,000 <= salary < 200,000 -> 10%`; `200,000 <= salary < 400,000 -> 15%`; and `salary >= 400,000 -> 25%`.

### Question 3

Give the BVA tests for the Rs. 400,000 boundary.

**Expected Answer:**  
Rs. 399,999 -> 15%; Rs. 400,000 -> 25%; Rs. 400,001 -> 25%.

### Question 4

How many unoptimized rules are required for three Boolean conditions?

**Expected Answer:**  
Eight rules because `2^3 = 8`.

### Question 5

An existing customer pays cash and orders 45 items. What are the outcomes?

**Expected Answer:**  
5% discount and no free delivery.

### Question 6

A new customer pays cash and orders 50 items. What are the outcomes?

**Expected Answer:**  
0% discount and free delivery.

### Question 7

Why can the decision table be reduced from eight rules to six?

**Expected Answer:**  
For new customers, payment method does not change the discount or delivery outcome, so pairs of rules differing only in cash payment can be merged using a don't-care condition.

---

# Key Terms

- Black-box testing
- Equivalence Partitioning
- Equivalence class
- Representative value
- Boundary Value Analysis
- Boundary
- Test input
- Expected output
- Decision table
- Condition
- Action
- Rule
- Boolean combination
- Don't care
- Rule optimization
- Tax bracket
- Discount
- Free-delivery threshold

---

PDF pages: 2 / MD page sections: 2 ✅
