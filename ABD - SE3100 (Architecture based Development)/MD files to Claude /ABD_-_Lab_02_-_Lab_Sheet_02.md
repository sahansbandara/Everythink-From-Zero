# Lab Sheet 02 — Identifying and Reasoning About Quality Attribute Trade-offs

## Document Metadata

| Field | Details |
|---|---|
| Institution | SLIIT |
| Faculty | Faculty of Computing |
| Degree / Programme | BSc (Hons) in IT specializing in Software Engineering |
| Module Code | SE3100 |
| Module Name | Architecture based Development |
| Academic Period | Year 3 Semester 1 - 2026 |
| Material Type | Lab Sheet 02 |
| Title | Identifying and Reasoning About Quality Attribute Trade-offs |
| Lecturer | Not stated in the PDF |
| PDF Author Metadata | Anuradha Karunasena |
| Total PDF Pages | 2 |

> **Source note:** Content under **Original Page Content** reproduces the PDF in page order. Sections labelled **Supplementary Explanation**, **Definition**, **Exam Tip**, **Common Mistake**, and **Likely Exam Questions** are study aids added for understanding and are not verbatim source text.

---

## Table of Contents

- [Page 01 — Objective, Trade-off Introduction, and Courseweb Scenario](#page-01)
  - [Objective](#page-01-objective)
  - [Before You Begin](#page-01-before-you-begin)
  - [Task: Courseweb Announcements and Publish-Subscribe](#page-01-task)
  - [Important Diagram: Broadcast vs Individual Delivery](#diagram-broadcast-vs-individual)
- [Page 02 — Point-to-Point Messaging, Tasks, and Guidelines](#page-02)
  - [Point-to-Point Messaging](#page-02-point-to-point)
  - [Task 1 — Identify the Trade-offs](#page-02-task-1)
  - [Task 2 — Decide and Justify](#page-02-task-2)
  - [Task 3 — Apply It in a New Situation](#page-02-task-3)
  - [Some Guidelines](#page-02-guidelines)
  - [Important Diagram: Messaging Model Comparison](#diagram-messaging-comparison)
- [Key Definitions](#key-definitions)
- [Important Code Snippets](#important-code-snippets)
- [Important Diagrams](#important-diagrams)
- [Complete Summary](#complete-summary)
- [Quick Revision Notes](#quick-revision-notes)
- [Likely Exam Questions](#likely-exam-questions-summary)
- [Key Terms](#key-terms)
- [Verification](#verification)

---

<a id="page-01"></a>
## Page 01 — Objective, Trade-off Introduction, and Courseweb Scenario

### Original Page Content

**BSc (Hons) in IT specializing in Software Engineering**  
**SE3100 : Architecture based Development**  
**Year 3 Semester 1 - 2026**

**Lab Sheet 02 - Identifying and Reasoning About Quality Attribute Trade-offs**

<a id="page-01-objective"></a>
#### Objective

The objective of this practical is to help students identify trade-offs between competing quality attributes on their own, rather than being told which two attributes are in tension. By the end of this activity, you should be able to spot multiple trade-offs within a system description, decide which quality attribute a system should prioritize in each situation, and justify that decision based on real consequences.

- This is a self-guided activity.
- You may attempt this as a pair. Discussions are encouraged.
- You may consult the lab instructors at any time, but you are expected to carry out the steps on your own (as a pair).
- You are free to refer to any material online/offline.

<a id="page-01-before-you-begin"></a>
#### Before You Begin

Quality attributes often conflict with each other. Improving one can make another harder to achieve. This situation is known as a trade-off. A single system description can contain more than one such tension at once, and they are not always obvious. Part of an architect's job is to notice these tensions before they cause problems, not just react to the one that is most visible.

To see what this looks like in practice, consider the situation given below.

Imagine a school with a public notice board in the main corridor. If the principal wants to announce something to everyone, they pin it to the board. Anyone walking past can read it, including students it wasn't really meant for. If the principal instead wants to tell one specific student something private, they call that student aside directly. The board is fast and effortless to use for everyone but offers no privacy. Speaking to a student directly is private and controlled but doesn't scale as the principal can't personally pull aside a different student for every single announcement.

This is analogous to a common trade-off tension architects deal with constantly - broadcast to everyone (easy, but exposed) vs. deliver individually to exactly who needs it (controlled, but effortful).

<a id="page-01-task"></a>
#### Task

Consider Courseweb announcements. Normally, when a lecturer posts an announcement, it goes to the whole course. Every enrolled student sees it. Behind the scenes, this works because the announcement is placed once onto a shared channel. Anyone enrolled in the course can check that channel and see it. Every student receives the same message, without the lecturer having to send it individually to each person. This messaging model, where a message is published once and any number of interested subscribers can pick it up on their own, is called **publish-subscribe**. It makes the system easy to extend. A new subscriber just starts listening, without anyone needing to reconfigure anything, but it also means anyone with access to that channel can see everything posted to it, which

### Visual Explanation

The page uses SLIIT and Faculty of Computing branding in the header and footer. There is no conceptual chart or table. The main visual structure separates the document into **Objective**, **Before You Begin**, and **Task**, guiding the student from the general idea of trade-offs to the Courseweb messaging scenario.

<a id="diagram-broadcast-vs-individual"></a>
#### Recreated Mechanism — Broadcast vs. Individual Delivery

```text
Public notice board / shared channel

Principal or Lecturer
        |
        | posts once
        v
  Shared Notice Board
   /      |       \
  v       v        v
Student Student  Student

Benefit: easy to distribute and extend
Cost: everyone with access may see the message
```

```text
Direct conversation / dedicated delivery

Principal or Lecturer
        |
        | sends specifically
        v
 Intended Student or Sub-group

Benefit: controlled and private delivery
Cost: more effort and dedicated setup
```

### Supplementary Explanation

The page introduces architectural decision-making through a simple analogy. The notice board represents a **shared communication channel**, while direct conversation represents **targeted delivery**. The architect must decide which consequence matters more in a particular situation rather than treating one pattern as universally superior.

**Supplementary interpretation:** The source explicitly emphasizes that publish-subscribe is easy to extend but may expose messages to everyone who can access the shared channel. This suggests a tension between **extensibility/scalability of distribution** and **security/confidentiality of delivery**. The lab asks the student to identify and justify the exact quality attributes.

### Definitions

**Definition:** A **quality attribute** is a measurable or observable property that describes how well a system operates, such as security, performance, availability, scalability, or modifiability.

**Simple meaning:** It describes the system's non-functional quality rather than the business function it performs.

**Example:** Sending an announcement is a function; ensuring only the intended student can read it is a security or confidentiality quality concern.

**Definition:** A **trade-off** occurs when improving one quality attribute makes another quality attribute harder to achieve.

**Simple meaning:** Gaining one benefit may require accepting a disadvantage elsewhere.

**Example:** A shared announcement channel is easier to extend, but it gives less control over who can see each message.

**Definition:** **Publish-subscribe** is a messaging model in which a message is published to a shared channel and any number of interested subscribers can receive or access it.

**Simple meaning:** The sender posts once, and multiple listeners obtain the same message.

**Example:** A Courseweb announcement visible to every student enrolled in a course.

### Exam Tip

Focus on the **mechanism and consequence**:

- Shared channel → one publication can reach many subscribers.
- Adding subscribers is easy → supports extension and broad distribution.
- Shared access → weaker audience-specific confidentiality.
- A valid trade-off answer must explain both what improves and what becomes harder.

### Common Mistake

Do not state only two quality-attribute names without explaining how the messaging mechanism helps one and harms the other. Also, do not assume that publish-subscribe is always insecure; the source's specific concern is that everyone who has access to the shared channel can see all messages posted there.

### Likely Exam Questions

1. **What is a quality-attribute trade-off?**  
   **Expected answer:** It is a situation where improving one system quality makes another quality harder to achieve.

2. **Why is publish-subscribe easy to extend in the Courseweb example?**  
   **Expected answer:** A new subscriber can start listening to the shared channel without requiring individual sender-side reconfiguration.

---

<a id="page-02"></a>
## Page 02 — Point-to-Point Messaging, Tasks, and Guidelines

### Original Page Content

is not ideal if a lecturer wants to notify only a specific sub-group, such as students who haven't submitted an assignment yet.

<a id="page-02-point-to-point"></a>
To handle that case properly, the system would instead need to deliver the announcement only to the intended sub-group, through a channel set up specifically for them. A messaging model called **point-to-point messaging**, often implemented using queues, where each message goes from a sender to one specific, intended receiver. This keeps the announcement private to the right audience, but it means a new dedicated channel has to be set up every time a new sub-group needs one, rather than everyone simply sharing the same feed.

<a id="page-02-task-1"></a>
#### 1. Identify the Trade-offs

Based on the publish-subscribe vs. point-to-point/queue explanation above, name the two quality attributes in tension. Briefly explain what publish-subscribe gives you at the cost of the other attribute, and what point-to-point/queue protects at the cost of the first.

<a id="page-02-task-2"></a>
#### 2. Decide and Justify

For the sub-group announcement problem described above (notifying only students who haven't submitted an assignment), decide whether Courseweb should use publish-subscribe or point-to-point/queue for this specific case. With appropriate justifications discuss what does the university gain, and what does it give up, by choosing one messaging model over the other?

<a id="page-02-task-3"></a>
#### 3. Apply It in a new situation

Now imagine the university wants to send missed attendance warnings to the students who have not met the attendance criteria set for each semester for at least one module. As per university policy, a student should only see information related to them, not anyone else’s. Which pattern fits better, publish-subscribe or point-to-point/queue? Explain why and say whether your answer is the same as Task 2 or different.

<a id="page-02-guidelines"></a>
#### Some Guidelines

- There's no single "correct" trade-off to pick in Task 2 and 3. What matters is how clearly you identify the tension and how well you justify your decision.
- Do not mention specific technologies, frameworks, or programming languages.
- Focus on the mechanism behind each trade-off. What change helps one attribute and hurts another, not just a list of attribute names.
- Keep your answers concise: a few sentences per task is enough.
- Do the thinking on your own and use AI/LLM only to organize your thoughts. Do not blindly depend on LLMs.

### Visual Explanation

The page continues the sentence from Page 01, then presents the point-to-point alternative followed by three numbered tasks and a guideline list. No conceptual image, chart, or table is present. The layout emphasizes a reasoning sequence:

1. Identify the competing qualities.
2. Select a messaging model for the assignment-submission scenario.
3. Apply the same reasoning to private attendance warnings.
4. Justify the decision based on consequences.

<a id="diagram-messaging-comparison"></a>
#### Recreated Messaging Model Comparison

```text
Publish-Subscribe

Publisher
    |
    | publish once
    v
Shared Channel
  |    |    |
  v    v    v
Sub 1 Sub 2 Sub 3

Easy to add subscribers
Broad/shared visibility
```

```text
Point-to-Point / Queue

Sender
   |
   | targeted message
   v
Dedicated Channel or Queue
   |
   v
Specific Intended Receiver

Controlled audience
Additional setup for new receivers/sub-groups
```

### Supplementary Explanation

The tasks are not asking for a memorized pattern choice. They test whether the student can:

1. Detect the quality attributes that are in tension.
2. Connect each attribute to the actual messaging mechanism.
3. Select the higher-priority attribute for the stated scenario.
4. Explain the benefit gained and the cost accepted.

For the attendance-warning scenario, the source gives a strict policy constraint: each student should see only information related to them. This makes audience-specific confidentiality the central decision factor. The final answer should still mention the cost of creating or managing more targeted delivery paths.

### Definitions

**Definition:** **Point-to-point messaging** is a messaging model where a message is sent from a sender to one specific intended receiver, commonly through a dedicated delivery path or queue.

**Simple meaning:** The sender targets one receiver rather than publishing the message to everyone on a shared feed.

**Example:** Sending an attendance warning only to the student whose attendance is below the required level.

**Definition:** **Confidentiality** is the property that information is accessible only to authorized or intended recipients.

**Simple meaning:** Only the correct person or group should be able to see the message.

**Example:** One student must not see another student's attendance warning.

**Definition:** **Extensibility** is the ease with which a system can support new participants, capabilities, or variations without extensive reconfiguration.

**Simple meaning:** The system can grow or accept new users with little extra setup.

**Example:** A new subscriber can begin listening to a publish-subscribe channel without creating a separate sender-to-receiver path.

### Exam Tip

A strong answer can follow this four-part structure:

1. **Name the two attributes in tension.**
2. **Explain the mechanism.**
3. **Choose the pattern based on the scenario's priority.**
4. **State both the gain and the sacrifice.**

Useful source-grounded phrases include:

- “published once onto a shared channel”
- “new subscriber just starts listening”
- “anyone with access to that channel can see everything”
- “deliver the announcement only to the intended sub-group”
- “a new dedicated channel has to be set up”

### Common Mistake

Do not claim that point-to-point messaging has no disadvantage. It protects targeted visibility, but the source explicitly states that a new dedicated channel must be set up for each new sub-group. Also avoid naming specific products, frameworks, or programming languages because the lab asks for architectural reasoning at the mechanism level.

### Likely Exam Questions

1. **What benefit does point-to-point messaging protect in this scenario, and what does it cost?**  
   **Expected answer:** It protects controlled, audience-specific confidentiality, but requires additional dedicated setup for each receiver or sub-group.

2. **Why is the attendance-warning case different from a normal whole-course announcement?**  
   **Expected answer:** Attendance information is personal, and university policy says each student should see only information related to them, so a shared channel is not suitable for the warning content.

---

<a id="key-definitions"></a>
## Key Definitions

| Term | Definition | Simple Meaning | Source Status |
|---|---|---|---|
| Quality attribute | A property describing how well a system operates. | A non-functional quality of the system. | Supplementary explanation |
| Trade-off | A situation where improving one quality makes another harder to achieve. | One benefit is gained by accepting another cost. | Stated in the PDF |
| Publish-subscribe | A message is published once to a shared channel and interested subscribers obtain it. | Post once, many listeners receive it. | Stated in the PDF |
| Point-to-point messaging | A message is delivered from a sender to one specific intended receiver. | Send directly to the intended recipient. | Stated in the PDF |
| Confidentiality | Information is accessible only to authorized or intended recipients. | Only the right audience can see it. | Supplementary term matching the source mechanism |
| Extensibility | New participants or capabilities can be added with limited reconfiguration. | Easy to add or expand. | Supplementary term matching the source mechanism |

---

<a id="important-code-snippets"></a>
## Important Code Snippets

No code snippets appear in the source PDF.

---

<a id="important-diagrams"></a>
## Important Diagrams

### 1. Notice Board Analogy

```text
One announcement
      |
      v
Public notice board
      |
      +--> visible to many people

Strength: effortless broad communication
Weakness: limited privacy
```

### 2. Direct Delivery Analogy

```text
Private information
       |
       v
Directly contact intended student

Strength: controlled and private
Weakness: difficult to repeat at scale
```

### 3. Architectural Decision Flow

```text
Read the scenario
      |
      v
Identify competing quality attributes
      |
      v
Determine the higher-priority consequence
      |
      v
Choose a messaging pattern
      |
      v
State the gain and the accepted cost
```

---

<a id="complete-summary"></a>
## Complete Summary

This lab introduces quality-attribute trade-offs through a communication analogy and the Courseweb announcement system. A public notice board is fast and easy for broad communication but does not preserve privacy. Directly speaking to one student protects privacy but requires more effort and does not scale easily.

The Courseweb example maps this idea to two messaging models:

- **Publish-subscribe:** The lecturer publishes an announcement once to a shared channel, and all interested or enrolled subscribers can access it. This is easy to extend because new subscribers can begin listening without reconfiguring individual delivery paths. The cost is that everyone with channel access can see the content.
- **Point-to-point/queue:** The system sends a message to a specific intended receiver or sub-group through a dedicated path. This gives stronger control over the audience and helps preserve confidentiality. The cost is additional setup whenever a new receiver or sub-group requires a separate channel.

The lab requires students to identify the quality attributes in tension, decide which attribute should have priority in the sub-group announcement case, and apply the same reasoning to missed-attendance warnings. The key assessment criterion is not selecting a universally “correct” model. It is explaining the mechanism, consequences, gain, and sacrifice clearly and concisely.

### Main Trade-off Comparison

| Decision Factor | Publish-Subscribe | Point-to-Point / Queue |
|---|---|---|
| Message placement | Published once to a shared channel | Delivered through a targeted or dedicated path |
| Audience | Any interested subscriber with channel access | One intended receiver or a specifically targeted group |
| Extension | New subscribers can start listening easily | New receiver/sub-group may require additional setup |
| Privacy/control | Lower control in the scenario because channel members can see all posts | Higher control because delivery is restricted to the intended audience |
| Suitable source scenario | Normal whole-course announcements | Private sub-group notices and student-specific warnings |
| Main gain | Ease of distribution and extension | Confidentiality and precise audience control |
| Main sacrifice | Reduced audience-specific privacy | Increased configuration and management effort |

### Important Formulas

No mathematical formulas appear in the source PDF.

---

<a id="quick-revision-notes"></a>
## Quick Revision Notes

| Question | Quick Answer |
|---|---|
| What is a trade-off? | Improving one quality makes another harder to achieve. |
| What does publish-subscribe do? | Publishes once to a shared channel for multiple subscribers. |
| Why is publish-subscribe easy to extend? | New subscribers can start listening without individual reconfiguration. |
| What is its source-stated risk? | Anyone with shared-channel access can see everything posted there. |
| What does point-to-point do? | Delivers a message to a specific intended receiver. |
| What does point-to-point protect? | Targeted visibility and confidentiality. |
| What does point-to-point give up? | It requires dedicated setup for new receivers or sub-groups. |
| What should a justification contain? | The selected priority, the mechanism, the gain, and the accepted cost. |
| What should answers avoid? | Specific technologies, frameworks, programming languages, and unsupported claims. |

---

<a id="likely-exam-questions-summary"></a>
## Likely Exam Questions

1. **Define a quality-attribute trade-off.**  
   **Expected answer:** A quality-attribute trade-off occurs when improving one quality attribute makes another quality attribute harder to achieve.

2. **Compare publish-subscribe and point-to-point messaging using the Courseweb example.**  
   **Expected answer:** Publish-subscribe publishes once to a shared channel and is easy to extend, but all users with access may see the message. Point-to-point targets a specific receiver and protects confidentiality, but requires more dedicated setup.

3. **Why must an architect discuss consequences rather than only naming attributes?**  
   **Expected answer:** The architectural decision depends on how the mechanism improves one quality and harms another in the actual scenario.

4. **Which mechanism is better suited to private student attendance warnings, based on the stated policy?**  
   **Expected answer:** Point-to-point/queue is better suited because each warning must be visible only to the relevant student; the accepted cost is additional targeted-delivery setup.

5. **Is there one universally correct pattern for Tasks 2 and 3?**  
   **Expected answer:** No. The lab evaluates how clearly the student identifies the tension and justifies the decision using the scenario's consequences.

---

<a id="key-terms"></a>
## Key Terms

- Architecture based Development
- Quality attribute
- Quality-attribute trade-off
- Publish-subscribe
- Publisher
- Subscriber
- Shared channel
- Point-to-point messaging
- Queue
- Intended receiver
- Dedicated channel
- Confidentiality
- Privacy
- Extensibility
- Scalability of distribution
- Audience control
- Architectural consequence
- Decision justification

---

<a id="verification"></a>
## Verification

- PDF page count checked before writing: **2**
- Markdown page sections created: **2**
- Page order preserved: **Page 01 → Page 02**
- Original page text included: **Yes**
- Meaningful visuals explained or recreated: **Yes**
- Code blocks language-tagged: **Yes** (`text` used for ASCII diagrams)
- Tables recreated: **No source tables were present; supplementary comparison tables were added**
- Missing pages: **None**

PDF pages: 2 / MD page sections: 2 ✅
