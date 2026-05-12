# IT2130 - Operating Systems and System Administration — Lecture 09
## Introduction to Deadlock

- **Institution:** Sri Lanka Institute of Information Technology (SLIIT)
- **Faculty:** Faculty of Computing
- **Module Code:** IT2130
- **Module Name:** Operating Systems and System Administration
- **Lecture Number:** Lecture 09
- **Lecture Title:** Introduction to Deadlock
- **Lecturer:** Prof. Sanvitha Kasthuriarachchi
- **Degree / Semester:** Year 02 and Semester 02
- **Total PDF Pages / Slides:** 29

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture Title](#page-02--lecture-title)
- [Page 03 — Deadlocks](#page-03--deadlocks)
- [Page 04 — System Model](#page-04--system-model)
- [Page 05 — System Model: Resource Usage Sequence](#page-05--system-model-resource-usage-sequence)
- [Page 06 — Necessary Conditions for Deadlock](#page-06--necessary-conditions-for-deadlock)
- [Page 07 — Deadlock Modelling](#page-07--deadlock-modelling)
- [Page 08 — Model Symbols](#page-08--model-symbols)
- [Page 09 — Resource Allocation Graphs and Deadlocks](#page-09--resource-allocation-graphs-and-deadlocks)
- [Page 10 — Example 1: No Cycles](#page-10--example-1-no-cycles)
- [Page 11 — Example 2: Cycle and Deadlock](#page-11--example-2-cycle-and-deadlock)
- [Page 12 — Example 3: Cycle but No Deadlock](#page-12--example-3-cycle-but-no-deadlock)
- [Page 13 — Three Methods for Handling Deadlock](#page-13--three-methods-for-handling-deadlock)
- [Page 14 — Deadlock Prevention: Deny Mutual Exclusion and Hold-and-Wait](#page-14--deadlock-prevention-deny-mutual-exclusion-and-hold-and-wait)
- [Page 15 — Deadlock Prevention: Allow Pre-emption and Deny Circular Wait](#page-15--deadlock-prevention-allow-pre-emption-and-deny-circular-wait)
- [Page 16 — Deadlock Avoidance](#page-16--deadlock-avoidance)
- [Page 17 — Safe State](#page-17--safe-state)
- [Page 18 — Safe State Example](#page-18--safe-state-example)
- [Page 19 — Resource-Allocation Graph Algorithm](#page-19--resource-allocation-graph-algorithm)
- [Page 20 — Resource-Allocation Graph Algorithm Example](#page-20--resource-allocation-graph-algorithm-example)
- [Page 21 — Banker’s Algorithm](#page-21--bankers-algorithm)
- [Page 22 — Banker’s Algorithm Example](#page-22--bankers-algorithm-example)
- [Page 23 — Banker’s Algorithm Request Example](#page-23--bankers-algorithm-request-example)
- [Page 24 — Deadlock Detection](#page-24--deadlock-detection)
- [Page 25 — Wait-for Graph Example](#page-25--wait-for-graph-example)
- [Page 26 — Deadlock Recovery: Terminate Processes](#page-26--deadlock-recovery-terminate-processes)
- [Page 27 — Deadlock Recovery: Pre-empt a Resource](#page-27--deadlock-recovery-pre-empt-a-resource)
- [Page 28 — End of Lecture 9](#page-28--end-of-lecture-9)
- [Page 29 — Thank You](#page-29--thank-you)
- [Key Definitions](#key-definitions)
- [Important Tables](#important-tables)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Important Code Snippets](#important-code-snippets)
- [Full Lecture Summary](#full-lecture-summary)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Lecture Notes

## Page 01 — Title Page

### Original Slide Content

Sri Lanka Institute of Information Technology  
Faculty of Computing  
Prof. Sanvitha Kasthuriarachchi  
IT2130 - Operating Systems and System Administration  
Year 02 and Semester 02

### Visual Explanation

The slide is the module title page. It identifies the institution, faculty, lecturer, module code, module name, and academic year/semester.

### Explanation

This page introduces the module context. The lecture belongs to **Operating Systems and System Administration**, and the topic will focus on deadlocks in operating systems.

### Exam Tip

Remember the module focus: deadlock is an **operating system resource-management problem**.

### Common Mistake

No major common mistake.

---

## Page 02 — Lecture Title

### Original Slide Content

Lecture 09  
Introduction to Deadlock

### Visual Explanation

A simple title slide. It confirms the lecture topic as **Introduction to Deadlock**.

### Explanation

This lecture explains what deadlock is, why it occurs, how to model it, and how operating systems handle it using prevention, avoidance, detection, and recovery.

### Exam Tip

A likely exam area is: **define deadlock and explain the four necessary conditions**.

### Common Mistake

Do not treat deadlock as only “program freezing.” Deadlock is specifically caused by processes waiting forever for resources held by other waiting processes.

---

## Page 03 — Deadlocks

### Original Slide Content

Several processes may compete for a finite number of resources, and some of them may wait for the resources forever because the resources are held by other waiting processes.

### Visual Explanation

The slide shows traffic examples:

1. A real road traffic jam where vehicles block each other.
2. A simple bridge example where two trucks face each other and neither can proceed.

These visuals represent deadlock: every participant is waiting, but nobody can move because the required path/resource is blocked by another participant.

### Explanation

A **deadlock** occurs when processes are stuck waiting for resources forever. Each process is holding something another process needs, so no process can continue.

Simple example:

- Process P1 holds Printer and waits for Scanner.
- Process P2 holds Scanner and waits for Printer.
- P1 cannot continue because P2 has Scanner.
- P2 cannot continue because P1 has Printer.
- Both wait forever.

### Visual/Text Diagram

~~~text
P1 holds Printer  ───── waits for ─────> Scanner held by P2
P2 holds Scanner  ───── waits for ─────> Printer held by P1

Result: P1 and P2 both wait forever = Deadlock
~~~

### Exam Tip

Use the keywords: **finite resources**, **processes compete**, **waiting forever**, **resources held by other waiting processes**.

### Common Mistake

Weak answer: “Deadlock means the computer stops.”  
Correct answer: “Deadlock occurs when processes wait forever because each needs resources held by others.”

---

## Page 04 — System Model

### Original Slide Content

Resources are partitioned into several types, each consists of some number of identical instances.

Identical: allocation of any instance of the type will satisfy process’s request.

Resources may be physical resources (printers, tape drives, CPU cycles), or logical resources (files, semaphores, and monitors).

A pre-emptible resource is one that can be taken away from a process with no ill effect to the process; e.g., memory.

A non-preemptible resource is one that cannot be taken away from its user since it will make the user fails; e.g., printers.

In general, potential deadlocks involve this resource type.

### Visual Explanation

No major visual content. The slide is mainly text explaining system resources and resource categories.

### Explanation

Operating systems manage many resources. A **resource type** may have multiple **instances**.

Example:

- Resource type: Printer
- Instances: Printer 1, Printer 2, Printer 3

If the instances are identical, any one printer can satisfy the request.

Resources are divided into:

| Resource Type | Meaning | Example |
|---|---|---|
| Physical resource | Hardware or physical system resource | Printer, tape drive, CPU cycles |
| Logical resource | Software-level resource | File, semaphore, monitor |
| Pre-emptible resource | Can be taken away safely | Memory |
| Non-preemptible resource | Cannot be taken away safely | Printer |

Deadlocks usually happen with **non-preemptible resources** because the OS cannot safely forcefully take them away.

### Visual/Text Diagram

~~~text
Resources
├── Physical resources
│   ├── Printer
│   ├── Tape drive
│   └── CPU cycles
└── Logical resources
    ├── Files
    ├── Semaphores
    └── Monitors

Resource behavior
├── Pre-emptible: can be taken away safely
└── Non-preemptible: cannot be taken away safely
~~~

### Exam Tip

Be ready to compare **pre-emptible** and **non-preemptible** resources with examples.

### Common Mistake

Do not say every resource causes deadlock. Deadlocks mainly involve **non-preemptible resources**.

---

## Page 05 — System Model: Resource Usage Sequence

### Original Slide Content

Each process uses a resource as follows:

1. Request the resource; a process must wait if the resource is being used by another process.
2. Use the resource; e.g., the process can print on the printer.
3. Release the resource.

### Visual Explanation

No major visual content.

### Explanation

Every process follows a basic resource life cycle:

1. **Request** — asks for a resource.
2. **Use** — uses the resource after allocation.
3. **Release** — gives the resource back after finishing.

Deadlock risk appears when a process requests a resource while still holding another resource.

### Visual/Text Diagram

~~~text
Process
  ↓
Request resource
  ↓
If resource unavailable → Wait
  ↓
Use resource
  ↓
Release resource
~~~

### Exam Tip

For short questions, write the sequence: **Request → Use → Release**.

### Common Mistake

Do not skip the release step. Forgetting release is one reason resource-management problems occur.

---

## Page 06 — Necessary Conditions for Deadlock

### Original Slide Content

Four conditions must hold for a deadlock to occur:

1. **Mutual exclusion condition.** Only one process at a time can use the resource.
2. **Hold and wait condition.** A process holding at least one resource is waiting to acquire additional resources held by other processes.
3. **No pre-emption condition.** A resource can be released only voluntarily by the process holding it after that process has completed its task.
4. **Circular wait condition.** There exists a set `{P0, P1, . . . , Pn}` of waiting processes such that `P0` is waiting for a resource held by `P1`, `P1` for one held by `P2`, `. . .`, and `Pn` is waiting for a resource held by `P0`.

Note: the four conditions are not completely independent, e.g., the circular-wait condition implies the hold-and-wait condition.

### Visual Explanation

No major visual content.

### Explanation

Deadlock can occur only if all four conditions exist together. These are often called the **Coffman conditions**.

| Condition | Meaning | Simple Example |
|---|---|---|
| Mutual exclusion | Only one process can use a resource at a time | One printer can print only one job at a time |
| Hold and wait | Process holds one resource while waiting for another | P1 holds printer and waits for scanner |
| No pre-emption | Resource cannot be forcefully taken | Printer job cannot be safely taken halfway |
| Circular wait | Processes form a waiting cycle | P1 waits for P2, P2 waits for P3, P3 waits for P1 |

Important: If you break at least one of these conditions, deadlock can be prevented.

### Visual/Text Diagram

~~~text
P0 waits for resource held by P1
P1 waits for resource held by P2
P2 waits for resource held by P3
...
Pn waits for resource held by P0

Cycle formed → Circular wait → Deadlock possible
~~~

### Exam Tip

This is high-probability exam content. Write all four conditions with one-line explanations.

### Common Mistake

Do not write only “circular wait” as the cause. Deadlock requires all four conditions to hold.

---

## Page 07 — Deadlock Modelling

### Original Slide Content

Deadlocks can be described more precisely in terms of a directed graph `G(V, E)`. This is called **System resource-allocation graph**.

`V` is partitioned into two types:

- Set of processes in the system:  
  `P = {P1, P2, . . . , Pn}`
- Set of all resource types in the system:  
  `R = {R1, R2, . . . , Rn}`

Request edge – directed edge `Pi → Rj`  
Process `Pi` requests an instance of resource `Rj`.

Assignment edge – directed edge `Rj → Pi`  
An instance of resource `Rj` has been allocated to process `Pi`.

### Visual Explanation

No major visual content. The slide introduces the mathematical model for representing deadlock.

### Explanation

A **resource-allocation graph** models processes and resources as nodes, and requests/allocations as directed edges.

- Process nodes represent active processes.
- Resource nodes represent resource types.
- A request edge shows that a process is waiting for a resource.
- An assignment edge shows that a resource is already allocated to a process.

### Visual/Text Diagram

~~~text
Request edge:
Pi ─────> Rj
Meaning: Process Pi is requesting resource Rj

Assignment edge:
Rj ─────> Pi
Meaning: Resource Rj is allocated to process Pi
~~~

### Exam Tip

If asked to model deadlock, define `G(V, E)`, then explain process set `P`, resource set `R`, request edge, and assignment edge.

### Common Mistake

Do not reverse edge meanings. `Pi → Rj` means request. `Rj → Pi` means assignment.

---

## Page 08 — Model Symbols

### Original Slide Content

Model Symbols

Visual symbols shown:

- Process: circle
- Resource type with 4 instances: rectangle containing four dots
- `Pi` requests `Rj`: process circle points to resource rectangle
- `Pi` uses `Rj`: resource rectangle points to process circle

The diagram also shows a resource allocation graph with processes `P1`, `P2`, `P3` and resources `R1`, `R2`.

### Visual Explanation

The slide explains how to read resource-allocation graph symbols:

| Symbol / Edge | Meaning |
|---|---|
| Circle | Process |
| Rectangle | Resource type |
| Dots inside resource rectangle | Number of resource instances |
| Process → Resource | Request edge |
| Resource → Process | Assignment edge |

The lower diagram shows processes and resources connected by request and assignment edges. It demonstrates how a real system can be represented using these symbols.

### Explanation

This page is important because exam questions may show a graph and ask whether deadlock exists. You must identify processes, resource instances, request edges, and assignment edges correctly.

### Visual/Text Diagram

~~~text
Process symbol:
(Pi)

Resource symbol with 4 instances:
[Rj: • • • •]

Request:
(Pi) ─────> [Rj]

Assignment:
[Rj] ─────> (Pi)
~~~

### Exam Tip

When analyzing a diagram, first label all request edges and assignment edges before deciding whether there is a cycle.

### Common Mistake

Students often confuse the direction of arrows. Direction matters. Wrong direction gives a wrong deadlock conclusion.

---

## Page 09 — Resource Allocation Graphs and Deadlocks

### Original Slide Content

If the graph contains **no cycles**, no process in the system is deadlocked.

If the graph contains a **cycle**, deadlock may exist:

- If each resource type has **one instance**, cycle means deadlock.
- If each resource type has **several instances**, cycle is necessary but not sufficient condition for deadlock.

### Visual Explanation

The slide includes a small graph with two processes and two resources: **Printer** and **Tape drive**. The arrows form a cycle, representing processes waiting for resources held by one another.

### Explanation

Cycle detection is the core idea:

| Graph Condition | Meaning |
|---|---|
| No cycle | No deadlock |
| Cycle + single instance per resource | Deadlock definitely exists |
| Cycle + multiple instances per resource | Deadlock may exist, but not guaranteed |

Why multiple instances matter: another free instance of a resource may satisfy a waiting process and break the cycle.

### Visual/Text Diagram

~~~text
No cycle:
No deadlock

Cycle + one instance each:
Deadlock

Cycle + multiple instances:
Maybe deadlock, maybe not
Need deeper analysis
~~~

### Exam Tip

This is a common graph-analysis question. The safest answer: **cycle is sufficient only when each resource type has one instance**.

### Common Mistake

Do not always conclude “cycle = deadlock.” That is only guaranteed for single-instance resource types.

---

## Page 10 — Example 1: No Cycles

### Original Slide Content

A resource allocation graph with no cycles. Therefore, no deadlocks.

### Visual Explanation

The diagram shows processes `P1`, `P2`, and `P3` with resources `R1`, `R2`, `R3`, and `R4`. The edges do not form a closed loop.

Because no cycle exists, no process is trapped in a circular waiting chain.

### Explanation

This is the simplest graph case. If a resource-allocation graph has no cycle, deadlock cannot exist.

### Visual/Text Diagram

~~~text
Resource-allocation graph
      ↓
Check for cycle
      ↓
No cycle found
      ↓
No deadlock
~~~

### Exam Tip

In graph questions, write: “Since the resource-allocation graph contains no cycle, the system is not deadlocked.”

### Common Mistake

Do not assume deadlock just because some process is waiting. Waiting alone is not deadlock.

---

## Page 11 — Example 2: Cycle and Deadlock

### Original Slide Content

A resource allocation graph with a cycle and a deadlock.

### Visual Explanation

The diagram shows processes and resources connected so that a circular wait exists. The highlighted/red arrows show the cycle.

Because the involved resources are effectively blocking the involved processes, the cycle produces a deadlock.

### Explanation

This example demonstrates a real deadlock case. A process waits for a resource held by another process, which also waits for another resource, eventually forming a closed waiting loop.

### Visual/Text Diagram

~~~text
P1 waits for resource held by P2
P2 waits for resource held by P3
P3 waits for resource held by P1

Closed cycle → Deadlock
~~~

### Exam Tip

When explaining a deadlock graph, mention the cycle and list the involved processes/resources.

### Common Mistake

Do not just say “there is a cycle.” For full marks, explain why the cycle means the processes cannot proceed.

---

## Page 12 — Example 3: Cycle but No Deadlock

### Original Slide Content

A resource allocation graph with a cycle but no deadlock.

`P4` can release `R2` which gets allocated to `P3`, breaking the cycle.

### Visual Explanation

The diagram shows resources `R1` and `R2` with multiple instances. Although a cycle appears among processes and resources, there is still a way for the system to continue because `P4` can release `R2`. Once `R2` is released, it can be allocated to `P3`, breaking the waiting cycle.

### Explanation

This slide proves why **cycle is not always sufficient** for deadlock when resources have multiple instances.

The system is not deadlocked because at least one process outside or around the cycle can still finish and release a resource.

### Visual/Text Diagram

~~~text
Cycle exists
  ↓
But R2 has multiple instances
  ↓
P4 can release R2
  ↓
R2 goes to P3
  ↓
Cycle breaks
  ↓
No deadlock
~~~

### Exam Tip

For multiple-instance resource graphs, explain whether any process can still finish and release a resource.

### Common Mistake

Do not apply single-instance logic to multiple-instance graphs. That gives a false deadlock conclusion.

---

## Page 13 — Three Methods for Handling Deadlock

### Original Slide Content

Use a protocol to ensure that the system will never reach deadlock.

- Using deadlock prevention and/or deadlock avoidance techniques.

Allow the system to enter a deadlock state and then recover.

- Needs deadlock detection and deadlock recovery algorithms.

Ignore the problem and pretend that deadlocks never occur in the system.

- Used by most OSs, including UNIX.
- Also called the ostrich algorithm.

### Visual Explanation

No major visual content.

### Explanation

Operating systems handle deadlock in three main ways:

| Method | Meaning | Needs |
|---|---|---|
| Prevention / Avoidance | Stop deadlock before it happens | Rules or safe-state checking |
| Detection and Recovery | Allow deadlock, detect it, then recover | Detection algorithm + recovery algorithm |
| Ignore / Ostrich algorithm | Pretend deadlocks rarely happen | No active handling |

The **ostrich algorithm** means “ignore the problem,” like an ostrich hiding its head in the sand.

### Visual/Text Diagram

~~~text
Deadlock handling
├── Prevent / Avoid
│   └── Never allow system to reach deadlock
├── Detect / Recover
│   └── Allow deadlock, then fix it
└── Ignore
    └── Assume deadlock rarely occurs
~~~

### Exam Tip

Likely question: “Explain three methods for handling deadlock.” Give one or two lines for each.

### Common Mistake

Do not confuse prevention and avoidance. Prevention breaks one deadlock condition; avoidance checks safe/unsafe states dynamically.

---

## Page 14 — Deadlock Prevention: Deny Mutual Exclusion and Hold-and-Wait

### Original Slide Content

Use a set of methods to ensure that any one of the four deadlock conditions cannot hold:

1. **Deny mutual exclusion**
   - Processes are sharing the resources.

2. **Deny hold and wait**
   - Must guarantee that whenever a process requests a resource, it does not hold any other resources.
   - Each process is granted all resources before it starts.
   - If a process needs more resources, release all resources before requesting new ones.

### Visual Explanation

No major visual content.

### Explanation

Deadlock prevention works by breaking at least one of the four necessary conditions.

#### 1. Deny mutual exclusion

Make resources sharable where possible.

Example: Read-only files can be shared by many processes.

But not all resources can be shared. A printer cannot print two jobs at the exact same time.

#### 2. Deny hold and wait

Make sure a process does not hold resources while waiting for more.

Two possible approaches:

- Allocate all resources before the process starts.
- If the process needs a new resource, it must first release all currently held resources.

### Visual/Text Diagram

~~~text
Hold-and-wait prevention:

Wrong pattern:
Process holds R1 + waits for R2

Prevention pattern:
Process requests all resources first
OR
Process releases R1 before requesting R2
~~~

### Exam Tip

For prevention questions, connect each technique to the deadlock condition it breaks.

### Common Mistake

Denying mutual exclusion is not practical for all resources. Some resources are naturally non-sharable.

---

## Page 15 — Deadlock Prevention: Allow Pre-emption and Deny Circular Wait

### Original Slide Content

3. **Prevent no pre-emption** (i.e., allow pre-emption)

When a process holding some resources requests other resources that cannot be immediately allocated, it must release all resources currently being held.

4. **Deny circular wait**

All resource types are ordered, e.g.,

- `F(card reader) = 1`
- `F(disk drive) = 5`
- `F(tape drive) = 7`
- `F(printer) = 12`

Each process must request resources in increasing order.

### Visual Explanation

No major visual content.

### Explanation

#### 3. Allow pre-emption

If a process cannot get a new requested resource, the OS may force it to release resources it already holds.

This breaks the **no pre-emption** condition.

#### 4. Deny circular wait

Give every resource type a numeric order. Processes must request resources only in increasing order.

Example:

~~~text
Card reader = 1
Disk drive  = 5
Tape drive  = 7
Printer     = 12
~~~

A process can request card reader, then disk drive, then printer. It cannot request printer first and later request card reader because that would go backwards.

### Visual/Text Diagram

~~~text
Allowed order:
Card reader (1) → Disk drive (5) → Tape drive (7) → Printer (12)

Not allowed:
Printer (12) → Disk drive (5)
Because order decreases
~~~

### Exam Tip

For circular wait prevention, always mention **ordered resource numbering** and **increasing order requests**.

### Common Mistake

Do not write “release resources randomly.” Prevention needs a clear rule, such as ordered resource requests.

---

## Page 16 — Deadlock Avoidance

### Original Slide Content

The deadlock-avoidance algorithm dynamically examines the resource-allocation state to ensure that there can never be a circular-wait condition.

A resource-allocation state is defined by:

- The number of available and allocated resources, and
- The maximum demands of the processes.

### Visual Explanation

No major visual content.

### Explanation

Deadlock avoidance does not simply break a condition permanently. Instead, it checks each resource request before granting it.

The OS asks:

> “If I grant this request, will the system still remain safe?”

If yes, grant it.  
If no, make the process wait.

### Visual/Text Diagram

~~~text
Process requests resource
      ↓
OS checks current allocation state
      ↓
Would granting request keep system safe?
      ↓
Yes → grant resource
No  → process waits
~~~

### Exam Tip

Use the keywords: **dynamic examination**, **resource-allocation state**, **available resources**, **allocated resources**, **maximum demands**.

### Common Mistake

Do not confuse avoidance with detection. Avoidance acts before deadlock. Detection acts after deadlock may have happened.

---

## Page 17 — Safe State

### Original Slide Content

When a process requests an available resource, the system checks if its allocation keeps the system in safe state.

The system is in safe state if there exists a safe sequence of all processes.

A sequence `⟨P1, P2, . . . , Pn⟩` is safe if, for each `Pi`, the resources requested by `Pi` can be allocated from the currently available resources + resources held by all `Pj`, with `j < i`.

If `Pi`’s resource needs are not immediately available, `Pi` waits until all `Pj` have finished.

When all `Pj` are finished, `Pi` obtains the needed resources, executes, returns the allocated resources, and terminates.

When `Pi` terminates, `Pi+1` can obtain its needed resources, and so on.

### Visual Explanation

No major visual content.

### Explanation

A **safe state** means the OS can find at least one order of process execution where all processes can finish successfully.

A **safe sequence** is that successful order.

Example safe sequence:

~~~text
⟨P1, P0, P2⟩
~~~

Meaning:

1. P1 can finish first with available resources.
2. P1 releases its resources.
3. P0 can now finish.
4. P0 releases its resources.
5. P2 can now finish.

### Visual/Text Diagram

~~~text
Safe sequence example:
P1 finishes → releases resources
      ↓
P0 finishes → releases resources
      ↓
P2 finishes → releases resources
      ↓
All processes complete safely
~~~

### Exam Tip

If asked “What is safe state?”, answer using **safe sequence**. That is the examiner keyword.

### Common Mistake

Safe state does not mean “no process is waiting right now.” A process may wait, but the system is safe if a valid completion sequence exists.

---

## Page 18 — Safe State Example

### Original Slide Content

Consider a system with 12 resources of the same type, and 3 processes:

| Process | Maximum needs | Allocation | Current need |
|---|---:|---:|---:|
| `P0` | 10 | 5 | 5 |
| `P1` | 4 | 2 | 2 |
| `P2` | 9 | 2 | 7 |

At time `t0`, available resource = 3, and the system is in safe state.

There is a safe sequence `⟨P1, P0, P2⟩`.

What if at `t1` one more resource is allocated to process `P2`?

- The system is in unsafe state.
  - Deadlock can occur.

### Visual Explanation

The table shows maximum needs, current allocation, and current need for each process. It demonstrates how a safe sequence can exist at time `t0`, but a later allocation to `P2` may make the system unsafe.

### Explanation

At `t0`, available resources = 3.

- `P1` needs only 2 more resources, so it can finish.
- After `P1` finishes, it releases its 2 allocated resources.
- Available becomes enough for `P0`.
- After `P0` finishes, enough resources are available for `P2`.

Safe sequence: `⟨P1, P0, P2⟩`

If one more resource is allocated to `P2`, available resources decrease. Then the system may no longer have a process that can safely finish first. That produces an unsafe state, meaning deadlock can occur.

### Visual/Text Diagram

~~~text
At t0:
Available = 3

P1 needs 2 → can finish → releases 2
P0 needs 5 → can finish after P1 releases resources
P2 needs 7 → can finish after P0 releases resources

Safe sequence: P1 → P0 → P2
~~~

### Exam Tip

In safe-state questions, always check if at least one process can complete with current available resources, then add its released resources and continue.

### Common Mistake

Do not confuse **maximum need** with **current need**. Current need = Maximum needs − Allocation.

---

## Page 19 — Resource-Allocation Graph Algorithm

### Original Slide Content

Claim edge `Pi → Rj` indicates that process `Pi` may request resource `Rj`. It is represented by a dashed line.

Claim edge converts to a request edge when a process requests a resource.

### Visual Explanation

The diagram shows claim edges as dashed lines. A claim edge means the process may request a resource in the future. When the request is actually made, the dashed line becomes a normal request edge.

### Explanation

The resource-allocation graph algorithm is an avoidance method for systems with single-instance resource types.

Edge meanings:

| Edge Type | Appearance | Meaning |
|---|---|---|
| Claim edge | Dashed line | Process may request resource later |
| Request edge | Solid arrow from process to resource | Process is currently requesting resource |
| Assignment edge | Solid arrow from resource to process | Resource is allocated to process |

### Visual/Text Diagram

~~~text
Before request:
Pi - - - -> Rj
Claim edge: Pi may request Rj

After request:
Pi ─────> Rj
Request edge: Pi is requesting Rj now
~~~

### Exam Tip

Remember: **claim edge = future possible request**, shown using a dashed line.

### Common Mistake

Do not treat a claim edge as an active request. It is only a possible future request.

---

## Page 20 — Resource-Allocation Graph Algorithm Example

### Original Slide Content

When a resource is released by a process, assignment edge converts to a claim edge.

Resources must be claimed a priori in the system.

Need a cycle detection algorithm.

This algorithm can only be used for systems comprising resource types with single instance.

### Visual Explanation

The diagram shows claim, request, and assignment relationships among processes and resources. A red marking highlights a possible cycle area, emphasizing the need for cycle detection.

### Explanation

This algorithm requires processes to declare possible resource needs before execution. These declared possibilities are shown as claim edges.

When a resource is released:

~~~text
Assignment edge → Claim edge
~~~

The OS uses cycle detection to decide whether granting a request is safe.

Important limitation: this algorithm works only when each resource type has a **single instance**.

### Visual/Text Diagram

~~~text
Resource released:
Rj ─────> Pi       becomes       Pi - - - -> Rj
assignment edge                  claim edge

Before granting request:
Check if converting claim/request edge creates a cycle
~~~

### Exam Tip

For resource-allocation graph algorithm questions, mention: **a priori claims**, **cycle detection**, and **single-instance resource types only**.

### Common Mistake

Do not use this algorithm for multiple-instance resource types. For multiple instances, use Banker’s Algorithm.

---

## Page 21 — Banker’s Algorithm

### Original Slide Content

The algorithm for a system comprising resource types with multiple instances.

Each process must a priori claim maximum number of instances of each resource type that it may need.

When a process requests a resource:

- It may have to wait (if resource allocation may lead to unsafe state) until some other process releases enough resources.

When a process gets all its resources:

- It must return them in a finite amount of time.

### Visual Explanation

No major visual content.

### Explanation

**Banker’s Algorithm** is a deadlock avoidance algorithm for multiple-instance resources.

It works like a bank approving loans:

- The bank knows the maximum loan each customer may need.
- The bank gives money only if it can still satisfy everyone eventually.
- Similarly, the OS grants resources only if the system remains safe.

### Visual/Text Diagram

~~~text
Process requests resources
      ↓
Check Request ≤ Need
      ↓
Check Request ≤ Available
      ↓
Pretend to allocate resources
      ↓
Run safety algorithm
      ↓
Safe → grant request
Unsafe → process waits
~~~

### Exam Tip

Banker’s Algorithm is for **multiple instances**. Resource-allocation graph algorithm is for **single instance**.

### Common Mistake

Do not grant a request just because resources are currently available. You must check whether the system remains safe after allocation.

---

## Page 22 — Banker’s Algorithm Example

### Original Slide Content

5 processes `P0` through `P4`; 3 resource types `A` (10 instances), `B` (5 instances), and `C` (7 instances).

Snapshot at time `T0`:

The content of matrix `Need` is defined to be `Max − Allocation`.

The system is in a safe state since the sequence `⟨P1, P3, P4, P2, P0⟩` satisfies the safety criteria.

### Recreated Table from Slide

| Process | Allocation A | Allocation B | Allocation C | Max A | Max B | Max C | Available A | Available B | Available C | Need A | Need B | Need C |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `P0` | 0 | 1 | 0 | 7 | 5 | 3 | 3 | 3 | 2 | 7 | 4 | 3 |
| `P1` | 2 | 0 | 0 | 3 | 2 | 2 |  |  |  | 1 | 2 | 2 |
| `P2` | 3 | 0 | 2 | 9 | 0 | 2 |  |  |  | 6 | 0 | 0 |
| `P3` | 2 | 1 | 1 | 2 | 2 | 2 |  |  |  | 0 | 1 | 1 |
| `P4` | 0 | 0 | 2 | 4 | 3 | 3 |  |  |  | 4 | 3 | 1 |

Available vector at `T0`:

| A | B | C |
|---:|---:|---:|
| 3 | 3 | 2 |

### Visual Explanation

The table shows:

- **Allocation:** resources currently held by each process.
- **Max:** maximum resources each process may need.
- **Available:** currently free resources.
- **Need:** remaining resources needed to finish.

Formula:

~~~text
Need = Max − Allocation
~~~

### Explanation

The safety sequence `⟨P1, P3, P4, P2, P0⟩` means the system can let processes finish in that order without deadlock.

A short safety check:

1. Available = `(3, 3, 2)`
2. `P1` Need = `(1, 2, 2)` → can finish.
3. `P1` releases Allocation `(2, 0, 0)`, so Available becomes `(5, 3, 2)`.
4. `P3` Need = `(0, 1, 1)` → can finish.
5. Continue similarly until all processes finish.

### Visual/Text Diagram

~~~text
Initial Available = (3, 3, 2)

P1 finishes → releases (2, 0, 0)
P3 finishes → releases (2, 1, 1)
P4 finishes → releases (0, 0, 2)
P2 finishes → releases (3, 0, 2)
P0 finishes → releases (0, 1, 0)

Safe sequence: P1 → P3 → P4 → P2 → P0
~~~

### Exam Tip

For Banker’s Algorithm, show the formula **Need = Max − Allocation** and then prove a safe sequence.

### Common Mistake

Do not calculate Need as Allocation − Max. That gives negative/wrong values.

---

## Page 23 — Banker’s Algorithm Request Example

### Original Slide Content

Example (`P1` requests `(1, 0, 2)`)

Check that `request ≤ need` (that is, `(1, 0, 2) ≤ (1, 2, 2)`) → true

Check that `request ≤ available` (that is, `(1, 0, 2) ≤ (3, 3, 2)`) → true

`⟨P1, P3, P4, P0, P2⟩` or `⟨P1, P4, P3, P0, P2⟩` satisfies safety requirement.

Can request for `(3, 3, 0)` by `P4` be granted? `(0, 2, 0)` by `P0`?

### Recreated Before/After Adjustment Tables

#### Before Adjustment

| Process | Allocation A | Allocation B | Allocation C |
|---|---:|---:|---:|
| `P0` | 0 | 1 | 0 |
| `P1` | 2 | 0 | 0 |
| `P2` | 3 | 0 | 2 |
| `P3` | 2 | 1 | 1 |
| `P4` | 0 | 0 | 2 |

#### After Adjustment for `P1` Request `(1, 0, 2)`

| Process | Allocation A | Allocation B | Allocation C | Need A | Need B | Need C | Available A | Available B | Available C |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `P0` | 0 | 1 | 0 | 7 | 4 | 3 | 2 | 3 | 0 |
| `P1` | 3 | 0 | 2 | 0 | 2 | 0 |  |  |  |
| `P2` | 3 | 0 | 2 | 6 | 0 | 0 |  |  |  |
| `P3` | 2 | 1 | 1 | 0 | 1 | 1 |  |  |  |
| `P4` | 0 | 0 | 2 | 4 | 3 | 1 |  |  |  |

### Visual Explanation

The slide compares the resource state before and after granting `P1`’s request `(1, 0, 2)`. After granting the request, the system checks whether a safe sequence still exists.

### Explanation

Banker’s Algorithm checks the request in stages:

1. **Request ≤ Need**  
   `P1` is not asking for more than its declared maximum.

2. **Request ≤ Available**  
   The system currently has enough available resources.

3. **Safety check**  
   After pretending to allocate the resources, the system still has a safe sequence.

Because safe sequences exist, the request can be granted.

### Visual/Text Diagram

~~~text
P1 requests (1, 0, 2)

Step 1: Request ≤ Need?
(1, 0, 2) ≤ (1, 2, 2) → True

Step 2: Request ≤ Available?
(1, 0, 2) ≤ (3, 3, 2) → True

Step 3: Safety sequence exists?
P1 → P3 → P4 → P0 → P2 → True

Decision: Grant request
~~~

### Exam Tip

For Banker’s Algorithm request questions, never jump straight to the answer. Show all three checks.

### Common Mistake

Do not stop after `request ≤ available`. A request may be available but still unsafe.

---

## Page 24 — Deadlock Detection

### Original Slide Content

If a system does not employ either a deadlock-prevention or a deadlock-avoidance algorithm, then a deadlock situation may occur.

Need a deadlock detection algorithm that examines the state of the system to determine whether a deadlock has occurred.

Need a recovery algorithm to recover from deadlock.

Deadlock detection for single instance of each resource type:

- Maintain a wait-for graph.
- Periodically invoke an algorithm that searches for a cycle in the graph.

### Visual Explanation

No major visual content.

### Explanation

Deadlock detection is used when the OS allows deadlock to happen but checks for it later.

For systems with one instance per resource type, a **wait-for graph** can be used.

In a wait-for graph:

- Nodes are processes.
- Edge `Pi → Pj` means `Pi` is waiting for a resource held by `Pj`.
- A cycle means deadlock.

### Visual/Text Diagram

~~~text
Resource-allocation graph
      ↓
Convert to wait-for graph
      ↓
Search for cycle
      ↓
Cycle found → Deadlock exists
No cycle    → No deadlock
~~~

### Exam Tip

Use the keywords: **wait-for graph**, **cycle detection**, **periodically invoked algorithm**.

### Common Mistake

Detection does not prevent deadlock. It only finds deadlock after it may have occurred.

---

## Page 25 — Wait-for Graph Example

### Original Slide Content

Example

The slide shows:

- A Resource Allocation Graph
- A Wait-for Graph

### Visual Explanation

The left side shows a resource-allocation graph with processes and resources. The right side shows the equivalent wait-for graph with only processes.

In the wait-for graph:

- Resource nodes are removed.
- A direct process-to-process edge is created if one process waits for a resource held by another process.
- Cycles in this graph represent deadlock.

### Explanation

This slide demonstrates how to simplify a resource-allocation graph into a wait-for graph.

Example interpretation:

~~~text
If P1 requests a resource held by P2:
P1 → P2

If P2 requests a resource held by P4:
P2 → P4

If a cycle appears:
P1 → P2 → P4 → P1
Deadlock exists
~~~

### Visual/Text Diagram

~~~text
Resource Allocation Graph
Processes + Resources + Request edges + Assignment edges

Converted to:

Wait-for Graph
Processes only + Waiting relationships

Cycle in wait-for graph = Deadlock
~~~

### Exam Tip

If asked to draw a wait-for graph, remove resource nodes and connect waiting processes directly to the process holding the resource.

### Common Mistake

Do not include resource nodes in the wait-for graph. Wait-for graph contains only process nodes.

---

## Page 26 — Deadlock Recovery: Terminate Processes

### Original Slide Content

1) Terminate processes

Kill (abort) all deadlocked processes.

Kill one process at a time until deadlock cycle is eliminated.

In which order should we choose a process to abort?

- The process with lowest priority
- How long the process has computed, and how much longer to completion
- Resources the process has used
- Resources the process needs to complete
- How many processes will need to be terminated
- Is process interactive or batch?

Problem: what if the process is in the middle of updating a file?

Aborting the process may lead to incorrect file.

### Visual Explanation

No major visual content.

### Explanation

One way to recover from deadlock is to terminate processes.

Two approaches:

1. Kill all deadlocked processes.
2. Kill one process at a time until the cycle breaks.

Killing all is simple but expensive. Killing one at a time is more controlled but requires careful victim selection.

Victim selection factors include priority, resources used, resources still needed, amount of work already done, and whether the process is interactive or batch.

### Visual/Text Diagram

~~~text
Deadlock detected
      ↓
Terminate all deadlocked processes
      OR
Terminate one victim process at a time
      ↓
Check if cycle is removed
      ↓
System recovers
~~~

### Exam Tip

For recovery questions, mention both options: **abort all deadlocked processes** or **abort one process at a time**.

### Common Mistake

Do not ignore data consistency. Killing a process during file update can corrupt or leave incorrect files.

---

## Page 27 — Deadlock Recovery: Pre-empt a Resource

### Original Slide Content

2) Pre-empt a resource from a process

How to select a victim (process) to minimize cost?

Roll back the process to some safe state and restart from there.

How do we find a safe state?

- Easiest way: destroy the process and restart.
- Use checkpoints during execution.

Starvation – same process may always be picked as victim.

How do we ensure no starvation?

- Include number of rollbacks in cost factor.

### Visual Explanation

No major visual content.

### Explanation

Another recovery method is resource pre-emption: take a resource from one process and give it to another to break the deadlock.

This needs three decisions:

| Decision | Meaning |
|---|---|
| Select victim | Choose which process/resource to pre-empt |
| Rollback | Move the process back to a safe previous state |
| Avoid starvation | Prevent the same process from being chosen repeatedly |

Checkpoints help rollback because the process can restart from a saved state instead of starting from zero.

### Visual/Text Diagram

~~~text
Deadlock detected
      ↓
Select victim process
      ↓
Pre-empt resource
      ↓
Rollback victim to safe state
      ↓
Restart victim later
      ↓
Use rollback count to avoid starvation
~~~

### Exam Tip

For pre-emption recovery, write: **victim selection**, **rollback**, **checkpointing**, and **starvation prevention**.

### Common Mistake

Do not repeatedly choose the same process as victim. That can cause starvation.

---

## Page 28 — End of Lecture 9

### Original Slide Content

End of Lecture 9

### Visual Explanation

This is a closing slide indicating that the lecture content is complete.

### Explanation

The lecture ends after explaining recovery methods.

### Exam Tip

Use the final revision section below to review the entire lecture.

### Common Mistake

No major common mistake.

---

## Page 29 — Thank You

### Original Slide Content

Thank You

### Visual Explanation

Final thank-you slide.

### Explanation

No technical content is introduced on this slide.

### Exam Tip

No exam content from this page.

### Common Mistake

No major common mistake.

---

# Key Definitions

## Deadlock

### Definition
A deadlock is a situation where a set of processes wait forever because each process is waiting for a resource held by another waiting process.

### Simple Meaning
Everyone is waiting, but nobody can continue.

### Example
P1 holds Printer and waits for Scanner. P2 holds Scanner and waits for Printer.

## Resource Type

### Definition
A category of resource in a system, consisting of one or more identical instances.

### Simple Meaning
A group of same-type resources.

### Example
Printer as a resource type with three identical printer instances.

## Pre-emptible Resource

### Definition
A resource that can be taken away from a process without harmful effect.

### Simple Meaning
The OS can safely take it back.

### Example
Memory.

## Non-preemptible Resource

### Definition
A resource that cannot be taken away safely because it may cause failure or inconsistency.

### Simple Meaning
The OS should not forcibly take it.

### Example
Printer.

## Resource-Allocation Graph

### Definition
A directed graph `G(V, E)` used to model processes, resources, requests, and allocations.

### Simple Meaning
A diagram showing who has resources and who is waiting.

### Example
`P1 → R1` means P1 requests R1. `R1 → P1` means R1 is allocated to P1.

## Request Edge

### Definition
A directed edge `Pi → Rj` showing that process `Pi` requests resource `Rj`.

### Simple Meaning
Process is waiting for a resource.

### Example
`P2 → Printer`.

## Assignment Edge

### Definition
A directed edge `Rj → Pi` showing that resource `Rj` is allocated to process `Pi`.

### Simple Meaning
Resource is currently held by a process.

### Example
`Printer → P1`.

## Claim Edge

### Definition
A dashed edge `Pi → Rj` showing that process `Pi` may request resource `Rj` in the future.

### Simple Meaning
Possible future request.

### Example
`P1 - - -> R2`.

## Safe State

### Definition
A system is in a safe state if there exists a safe sequence in which all processes can complete.

### Simple Meaning
There is at least one order where every process can finish.

### Example
Safe sequence `⟨P1, P0, P2⟩`.

## Safe Sequence

### Definition
An order of processes where each process can obtain required resources, execute, release resources, and allow the next process to proceed.

### Simple Meaning
A successful finishing order.

### Example
`P1 → P3 → P4 → P2 → P0`.

## Banker’s Algorithm

### Definition
A deadlock avoidance algorithm for systems with multiple instances of resources.

### Simple Meaning
The OS grants a request only if the system remains safe.

### Example
Grant `P1` request `(1, 0, 2)` only after checking `request ≤ need`, `request ≤ available`, and safe sequence.

## Wait-for Graph

### Definition
A graph containing only process nodes, where an edge `Pi → Pj` means `Pi` is waiting for a resource held by `Pj`.

### Simple Meaning
A simplified graph showing which process waits for which process.

### Example
`P1 → P2 → P4 → P1` indicates a cycle and possible deadlock.

---

# Important Tables

## Four Necessary Conditions for Deadlock

| Condition | Meaning | Prevention Idea |
|---|---|---|
| Mutual exclusion | Only one process can use resource at a time | Make resources sharable where possible |
| Hold and wait | Process holds resource while waiting for more | Request all resources before starting or release before requesting |
| No pre-emption | Resource released only voluntarily | Allow pre-emption |
| Circular wait | Processes wait in a cycle | Order resources and request in increasing order |

## Deadlock Handling Methods

| Method | When It Acts | Main Idea |
|---|---|---|
| Prevention | Before deadlock | Break one necessary condition |
| Avoidance | Before granting request | Grant only if system remains safe |
| Detection and recovery | After possible deadlock | Detect cycle/deadlock and recover |
| Ignore / Ostrich | No active handling | Assume deadlocks rarely happen |

## Resource-Allocation Graph Rules

| Graph Situation | Result |
|---|---|
| No cycle | No deadlock |
| Cycle + single resource instance | Deadlock exists |
| Cycle + multiple resource instances | Deadlock may or may not exist |

## Banker’s Algorithm Checks

| Step | Check | Purpose |
|---|---|---|
| 1 | `Request ≤ Need` | Ensure process does not exceed declared maximum |
| 2 | `Request ≤ Available` | Ensure resources are currently available |
| 3 | Safety algorithm | Ensure system remains in safe state |

---

# Important Diagrams Summary

| Page | Visual / Diagram | Meaning |
|---:|---|---|
| 03 | Traffic jam and bridge/truck example | Shows deadlock as a situation where nobody can proceed |
| 08 | Model symbols | Shows circles for processes, rectangles/dots for resources, and arrow meanings |
| 09 | Printer and tape drive graph | Demonstrates cycle logic in resource-allocation graphs |
| 10 | No-cycle resource-allocation graph | No cycle means no deadlock |
| 11 | Cycle and deadlock graph | Cycle produces deadlock in the shown case |
| 12 | Cycle but no deadlock graph | Multiple instances can break a cycle; cycle is not always sufficient |
| 18 | Safe-state table | Shows maximum need, allocation, and current need |
| 19 | Claim edge conversion | Dashed claim edge becomes request edge |
| 20 | Resource-allocation graph algorithm | Shows cycle detection and single-instance limitation |
| 22 | Banker’s Algorithm matrix | Demonstrates Allocation, Max, Available, and Need |
| 23 | Banker’s request adjustment | Shows before/after resource allocation for request `(1, 0, 2)` |
| 25 | Resource-allocation graph to wait-for graph | Shows conversion for deadlock detection |

---

# Important Code Snippets

This lecture does **not** contain programming code snippets, terminal commands, HTML/XML/CSS/JavaScript, or configuration code.

However, it contains important algorithmic formulas and symbolic expressions:

## Formula 1 — Need Matrix

~~~text
Need = Max − Allocation
~~~

### Explanation

In Banker’s Algorithm, the remaining resource requirement of each process is calculated by subtracting currently allocated resources from the maximum declared demand.

## Formula 2 — Request Edge

~~~text
Pi → Rj
~~~

### Explanation

Process `Pi` requests resource `Rj`.

## Formula 3 — Assignment Edge

~~~text
Rj → Pi
~~~

### Explanation

Resource `Rj` is allocated to process `Pi`.

## Formula 4 — Safe Sequence

~~~text
⟨P1, P2, ..., Pn⟩
~~~

### Explanation

A safe sequence is an order in which processes can complete without deadlock.

---

# Full Lecture Summary

This lecture introduces **deadlock**, a resource-management problem in operating systems. Deadlock occurs when several processes compete for a finite number of resources and wait forever because the needed resources are held by other waiting processes.

The system model explains that resources are divided into types and instances. Resources can be physical, such as printers and CPU cycles, or logical, such as files and semaphores. A key distinction is between pre-emptible and non-preemptible resources. Deadlocks usually involve non-preemptible resources because they cannot be forcefully taken from a process without causing problems.

A process normally uses resources in three stages: request, use, and release. Deadlock can occur when processes hold some resources while waiting for others.

Four necessary conditions must hold for deadlock: mutual exclusion, hold and wait, no pre-emption, and circular wait. Deadlock prevention works by breaking at least one of these conditions.

Deadlocks can be modeled using a **resource-allocation graph**. Processes and resources are represented as nodes. Request edges show waiting, while assignment edges show allocation. If a graph has no cycle, there is no deadlock. If a graph has a cycle and each resource type has one instance, deadlock exists. If resources have multiple instances, a cycle is necessary but not sufficient.

Operating systems can handle deadlock using three broad strategies: prevention/avoidance, detection/recovery, or ignoring the problem using the ostrich algorithm.

Deadlock avoidance uses safe-state checking. A system is safe if there is at least one safe sequence in which all processes can complete. The resource-allocation graph algorithm is used for single-instance resources, while Banker’s Algorithm is used for multiple-instance resource types.

Banker’s Algorithm requires processes to declare maximum resource needs in advance. For each request, the OS checks whether the request is within the process need, whether resources are available, and whether granting the request leaves the system in a safe state.

If prevention and avoidance are not used, the OS may use deadlock detection. For single-instance resources, a wait-for graph is maintained and checked for cycles. If deadlock is detected, recovery can be done by terminating processes or pre-empting resources. Both approaches require careful victim selection to minimize cost and avoid starvation.

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Deadlock definition | Processes wait forever for resources held by other waiting processes | 03 |
| Resource types | Physical/logical, pre-emptible/non-preemptible | 04 |
| Resource usage | Request → Use → Release | 05 |
| Four conditions | Mutual exclusion, hold and wait, no pre-emption, circular wait | 06 |
| Resource-allocation graph | `Pi → Rj` request, `Rj → Pi` assignment | 07 |
| Model symbols | Circle = process, rectangle = resource, dots = instances | 08 |
| Cycle rule | No cycle = no deadlock; single-instance cycle = deadlock | 09 |
| Handling methods | Prevent/avoid, detect/recover, ignore | 13 |
| Prevention | Break one of four conditions | 14–15 |
| Avoidance | Dynamically check safe state | 16 |
| Safe state | Safe sequence exists | 17 |
| Banker’s Algorithm | Multiple-instance deadlock avoidance | 21–23 |
| Deadlock detection | Wait-for graph and cycle detection | 24–25 |
| Recovery | Terminate processes or pre-empt resources | 26–27 |

---

# Likely Exam Questions and Short Answers

## Question 1
Define deadlock in an operating system.

**Expected Answer:**  
A deadlock is a situation where a set of processes wait forever because each process is waiting for a resource held by another waiting process.

## Question 2
Explain the four necessary conditions for deadlock.

**Expected Answer:**  
The four necessary conditions are mutual exclusion, hold and wait, no pre-emption, and circular wait. Mutual exclusion means only one process can use a resource at a time. Hold and wait means a process holds at least one resource while waiting for another. No pre-emption means resources are released only voluntarily. Circular wait means processes form a circular chain of waiting.

## Question 3
What is the difference between pre-emptible and non-preemptible resources?

**Expected Answer:**  
A pre-emptible resource can be taken away from a process without harmful effect, such as memory. A non-preemptible resource cannot be taken away safely, such as a printer. Deadlocks usually involve non-preemptible resources.

## Question 4
Explain request edge and assignment edge in a resource-allocation graph.

**Expected Answer:**  
A request edge `Pi → Rj` means process `Pi` is requesting resource `Rj`. An assignment edge `Rj → Pi` means resource `Rj` has been allocated to process `Pi`.

## Question 5
What can be concluded if a resource-allocation graph has no cycles?

**Expected Answer:**  
If the graph has no cycles, no process in the system is deadlocked.

## Question 6
Does a cycle always mean deadlock?

**Expected Answer:**  
No. If each resource type has one instance, a cycle means deadlock. If resource types have multiple instances, a cycle is necessary but not sufficient for deadlock.

## Question 7
List three methods for handling deadlock.

**Expected Answer:**  
Deadlock can be handled by prevention/avoidance, detection and recovery, or by ignoring the problem using the ostrich algorithm.

## Question 8
How does deadlock prevention work?

**Expected Answer:**  
Deadlock prevention ensures that at least one of the four necessary deadlock conditions cannot hold. For example, deny hold and wait by requiring a process to request all resources before execution.

## Question 9
What is a safe state?

**Expected Answer:**  
A safe state is a state where there exists at least one safe sequence of all processes, allowing every process to complete without deadlock.

## Question 10
What is Banker’s Algorithm used for?

**Expected Answer:**  
Banker’s Algorithm is a deadlock avoidance algorithm used for systems with multiple instances of resource types. It grants requests only if the system remains in a safe state.

## Question 11
What are the three main checks in Banker’s Algorithm for a resource request?

**Expected Answer:**  
The system checks whether `Request ≤ Need`, whether `Request ≤ Available`, and whether the system remains safe after pretending to allocate the requested resources.

## Question 12
What is a wait-for graph?

**Expected Answer:**  
A wait-for graph is a graph containing only process nodes. An edge `Pi → Pj` means process `Pi` is waiting for a resource held by process `Pj`. A cycle in the wait-for graph indicates deadlock.

## Question 13
Explain two deadlock recovery methods.

**Expected Answer:**  
Deadlock can be recovered by terminating processes or by pre-empting resources. Process termination may abort all deadlocked processes or one process at a time. Resource pre-emption takes resources from a selected victim process, rolls it back to a safe state, and restarts it later.

## Question 14
Why can terminating a process during deadlock recovery be dangerous?

**Expected Answer:**  
If a process is updating a file or critical data when it is terminated, the file or data may become incorrect or inconsistent.

## Question 15
How can starvation occur during resource pre-emption recovery?

**Expected Answer:**  
Starvation can occur if the same process is repeatedly selected as the victim. To avoid this, the number of rollbacks can be included in the cost factor for victim selection.

---

# Common Mistakes to Avoid

- Writing “deadlock means system crash” — incorrect. Deadlock means processes wait forever due to resource dependency.
- Forgetting one of the four necessary conditions.
- Saying a cycle always means deadlock — incorrect for multiple-instance resource types.
- Reversing request and assignment edges.
- Confusing prevention with avoidance.
- Thinking safe state means no process is waiting.
- Calculating `Need` incorrectly. Correct formula: `Need = Max − Allocation`.
- Granting a Banker’s Algorithm request just because resources are available, without checking safety.
- Drawing resource nodes in a wait-for graph. Wait-for graphs contain only processes.
- Ignoring starvation during recovery by resource pre-emption.

---

# Final One-Page Revision Notes

## Core Idea

Deadlock happens when processes wait forever because each process needs a resource held by another waiting process.

## Resource Usage Flow

~~~text
Request → Use → Release
~~~

## Four Necessary Conditions

1. **Mutual exclusion** — one process at a time uses resource.
2. **Hold and wait** — process holds resource while waiting for another.
3. **No pre-emption** — resource released only voluntarily.
4. **Circular wait** — processes form a waiting cycle.

## Resource-Allocation Graph

~~~text
Pi → Rj  = request edge
Rj → Pi  = assignment edge
Pi - - -> Rj = claim edge
~~~

## Cycle Rules

| Situation | Result |
|---|---|
| No cycle | No deadlock |
| Cycle + one instance | Deadlock |
| Cycle + multiple instances | Maybe deadlock |

## Deadlock Handling

~~~text
Prevent / Avoid → stop deadlock before it occurs
Detect / Recover → find and fix deadlock after it occurs
Ignore → ostrich algorithm
~~~

## Safe State

A system is safe if at least one safe sequence exists.

~~~text
Safe sequence = order where all processes can finish
~~~

## Banker’s Algorithm

Used for multiple-instance resources.

Checks:

~~~text
1. Request ≤ Need
2. Request ≤ Available
3. Safety sequence exists after allocation
~~~

Formula:

~~~text
Need = Max − Allocation
~~~

## Deadlock Detection

For single-instance resource types:

~~~text
Maintain wait-for graph
Search for cycle
Cycle = deadlock
~~~

## Recovery

1. **Terminate processes**
   - Kill all deadlocked processes.
   - Or kill one at a time until cycle breaks.

2. **Pre-empt resources**
   - Select victim.
   - Roll back to safe state.
   - Use checkpoints.
   - Avoid starvation by considering rollback count.

## Examiner Keywords

Deadlock, finite resources, waiting forever, mutual exclusion, hold and wait, no pre-emption, circular wait, resource-allocation graph, request edge, assignment edge, claim edge, cycle detection, safe state, safe sequence, Banker’s Algorithm, wait-for graph, rollback, starvation.
