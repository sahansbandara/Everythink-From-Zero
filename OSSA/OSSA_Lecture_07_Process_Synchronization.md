# IT2130 - Operating Systems and System Administration — Lecture 07
## Process Synchronization

- **Institution:** Sri Lanka Institute of Information Technology
- **Faculty:** Faculty of Computing
- **Module Code:** IT2130
- **Module Name:** Operating Systems and System Administration
- **Lecture Number:** Lecture 07
- **Lecture Title:** Process Synchronization
- **Lecturer:** Dr. Sanvitha Kasthuriarachchi
- **Program/Level:** Year 02 and Semester 02
- **Total PDF Pages/Slides:** 38

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture Title](#page-02--lecture-title)
- [Page 03 — Outline](#page-03--outline)
- [Page 04 — Background](#page-04--background)
- [Page 05 — Data Inconsistency due to Concurrency](#page-05--data-inconsistency-due-to-concurrency)
- [Page 06 — Producer–Consumer Illustration](#page-06--producerconsumer-illustration)
- [Page 07 — Producer–Consumer Illustration](#page-07--producerconsumer-illustration)
- [Page 08 — Race Condition](#page-08--race-condition)
- [Page 09 — Critical Section of a Process](#page-09--critical-section-of-a-process)
- [Page 10 — Critical Section Problem](#page-10--critical-section-problem)
- [Page 11 — Critical Section Problem](#page-11--critical-section-problem)
- [Page 12 — Solution to Critical-Section Problem](#page-12--solution-to-critical-section-problem)
- [Page 13 — How the Critical Section Problem can be Avoided](#page-13--how-the-critical-section-problem-can-be-avoided)
- [Page 14 — Solutions for Critical Section Problem](#page-14--solutions-for-critical-section-problem)
- [Page 15 — Algorithm 1](#page-15--algorithm-1-software-based-solution-for-two-processes)
- [Page 16 — Algorithm 2](#page-16--algorithm-2-software-based-solution-for-two-processes)
- [Page 17 — Algorithm 3 / Peterson’s Solution](#page-17--algorithm-3-software-based-solution-for-two-processes)
- [Page 18 — Bakery Algorithm](#page-18--bakery-algorithm--software-solution-for-n-processes)
- [Page 19 — Synchronization Hardware](#page-19--synchronization-hardware)
- [Page 20 — Test-and-Set](#page-20--synchronization-hardware)
- [Page 21 — Swap](#page-21--synchronization-hardware)
- [Page 22 — Semaphore](#page-22--semaphore)
- [Page 23 — Semaphore Usage](#page-23--semaphore-usage)
- [Page 24 — Semaphore Implementation](#page-24--semaphore-implementation)
- [Page 25 — Classical Problems of Synchronization](#page-25--classical-problems-of-synchronization)
- [Page 26 — Bounded-Buffer Problem](#page-26--bounded-buffer-problem)
- [Page 27 — Bounded Buffer Producer](#page-27--bounded-buffer-problem-cont)
- [Page 28 — Bounded Buffer Consumer](#page-28--bounded-buffer-problem-cont)
- [Page 29 — Readers-Writers Problem](#page-29--readers-writers-problem)
- [Page 30 — Writer Process](#page-30--readers-writers-problem-cont)
- [Page 31 — Reader Process](#page-31--readers-writers-problem-cont)
- [Page 32 — Dining-Philosophers Problem](#page-32--dining-philosophers-problem)
- [Page 33 — Dining-Philosophers Algorithm](#page-33--dining-philosophers-problem-algorithm)
- [Page 34 — Problems with Semaphores](#page-34--problems-with-semaphores)
- [Page 35 — Monitors](#page-35--monitors)
- [Page 36 — End of Lecture 7](#page-36--end-of-lecture-7)
- [Page 37 — Weekly Plan](#page-37--weekly-plan)
- [Page 38 — Thank You](#page-38--thank-you)
- [Important Definitions](#important-definitions)
- [Important Code Snippets](#important-code-snippets)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Full Lecture Summary](#full-lecture-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Lecture Notes
## Page 01 — Title Page

### Original Slide Content

Sri Lanka Institute of Information Technology
Faculty of Computing
Dr. Sanvitha Kasthuriarachchi
IT2130 - Operating Systems and System Administration
Year 02 and Semester 02


### Visual Explanation

Title slide with institution, faculty, lecturer, module code, module name, and semester information.


### Explanation

This page identifies the academic context of the lecture. The module is about operating systems and system administration, and this lecture focuses on a core OS topic: process synchronization.


### Exam Tip

Use this page to identify the module and lecturer in your notes.


### Common Mistake

No major common mistake.


## Page 02 — Lecture Title

### Original Slide Content

Lecture 07
Process Synchronization


### Visual Explanation

Title slide showing that Lecture 07 is about Process Synchronization.


### Explanation

Process synchronization is the OS mechanism used to coordinate concurrent processes so shared data remains consistent.


### Visual/Text Diagram

```text
Concurrent Processes
      ↓
Shared Data Access
      ↓
Need Synchronization
```


### Exam Tip

Define process synchronization as coordination of concurrent processes/threads to avoid data inconsistency.


### Common Mistake

Thinking synchronization is only about speed. It is mainly about correctness and safe access to shared data.


## Page 03 — Outline

### Original Slide Content

Introduction to Synchronization
The Critical-Section Problem
Semaphores
Classical Problems of Synchronization
Problems with Semaphores
Monitors


### Visual Explanation

No major visual content.


### Explanation

The lecture is structured from the problem first, then solutions. It starts with concurrency problems, explains critical sections, introduces semaphores, shows classical synchronization problems, then ends with monitor abstraction.


### Visual/Text Diagram

```text
Synchronization Lecture Flow
Introduction → Critical Section → Semaphores → Classical Problems → Semaphore Problems → Monitors
```


### Exam Tip

Essay questions usually combine several parts: race condition, critical section requirements, semaphore-based solutions, and classical problems.


### Common Mistake

Studying semaphores before understanding race conditions and critical sections. That makes the topic harder.


## Page 04 — Background

### Original Slide Content

Processes are executing concurrently while interrupting the executions of other processes.
The concurrent access to shared data may result in data inconsistencies.
Maintaining data consistency requires mechanisms to ensure the orderly execution of cooperating processes.


### Visual Explanation

No major visual content.


### Explanation

When several processes run at the same time, their instructions can interleave. If they use the same data, one process may read or update data while another process is also changing it. Synchronization gives rules so cooperating processes execute in a safe order.


### Visual/Text Diagram

```text
Process A
   ↘
    Shared Data → Possible inconsistency
   ↗
Process B

Synchronization → Ordered execution
```


### Exam Tip

Keywords: concurrently, shared data, data inconsistency, orderly execution, cooperating processes.


### Common Mistake

Saying concurrency always causes errors. It only becomes unsafe when shared data is accessed without proper control.


## Page 05 — Data Inconsistency due to Concurrency

### Original Slide Content

Illustration of the problem:
Suppose that we wanted to provide a solution to the consumer-producer problem that fills all the buffers. We can do so by having an integer counter that keeps track of the number of full buffers. Initially, counter is set to 0. It is incremented by the producer after it produces a new buffer and is decremented by the consumer after it consumes a buffer.


### Visual Explanation

No major visual content.


### Explanation

The producer-consumer problem uses a shared buffer. The producer adds items and increments `counter`; the consumer removes items and decrements `counter`. Because both modify the same `counter`, concurrent execution can produce wrong values.


### Visual/Text Diagram

```text
Producer adds item → counter++
Consumer removes item → counter--
Both use same counter → synchronization needed
```


### Exam Tip

This is a common written-exam example for explaining data inconsistency caused by concurrency.


### Common Mistake

Thinking `counter++` is one single machine instruction. It usually involves multiple low-level steps: read, add, write.


## Page 06 — Producer–Consumer Illustration

### Original Slide Content

The slide shows the producer and consumer process logic.

Producer:
- Waits while `counter == BUFFER_SIZE`.
- Produces an item into `buffer[in]`.
- Updates `in` using modulo arithmetic.
- Increments `counter`.

Consumer:
- Waits while `counter == 0`.
- Consumes an item from `buffer[out]`.
- Updates `out` using modulo arithmetic.
- Decrements `counter`.

The slide also shows that:
- `counter++` can be implemented as three lower-level steps.
- `counter--` can be implemented as three lower-level steps.


### Visual Explanation

The visual is a two-column table comparing Producer and Consumer code. It also breaks down `counter++` and `counter--` into register-level operations.

### Code from Slide

```c
// Producer
while (true)
{
    while (counter == BUFFER_SIZE)
        /* do nothing */
    buffer[in] = next_produced;
    in = (in + 1) % BUFFER_SIZE;
    counter++;
}

// Consumer
while (true)
{
    while (counter == 0)
        /* do nothing */
    next_consumed = buffer[out];
    out = (out + 1) % BUFFER_SIZE;
    counter--;
}
```

### Register-level meaning from slide

```text
counter++ could be implemented as:
register1 = counter
register1 = register1 + 1
counter = register1

counter-- could be implemented as:
register2 = counter
register2 = register2 - 1
counter = register2
```

### Why this matters
The visual proves that increment and decrement are not necessarily atomic. If producer and consumer interleave between these steps, `counter` can become incorrect.


### Explanation

The key issue is the shared variable `counter`. Producer and consumer both depend on it. If the operations overlap, the final value may not represent the real number of full buffers.


### Visual/Text Diagram

```text
counter++
Read counter → Add 1 → Write counter

counter--
Read counter → Subtract 1 → Write counter

Interleaving these steps → wrong counter value
```


### Exam Tip

Be able to explain why `counter++` and `counter--` create a race condition when run concurrently.


### Common Mistake

Assuming high-level statements like `counter++` and `counter--` execute atomically.


## Page 07 — Producer–Consumer Illustration

### Original Slide Content

Assume the initial value of count is 5 and producer starts the execution. The producer increments count in its local copy and before the count is updated, the consumer starts. Then the consumer reads an incorrect value to proceed. This can be happened in the other way as well. Then the count may have a different value.


### Visual Explanation

The diagram shows two processes, P1 and P2, sharing a variable named `count` with initial value `5`. P1 is the Producer and performs `count++`; P2 is the Consumer and performs `count--`. The diagram demonstrates that both processes may use local copies before the shared count is correctly updated.


### Explanation

If `count = 5`, producer may read 5 and prepare to write 6. Before it writes back, consumer may read 5 and prepare to write 4. Depending on which write happens last, the final value can incorrectly become 6 or 4 instead of the correct value 5.


### Visual/Text Diagram

```text
Initial count = 5

Producer reads 5 → local value becomes 6
Consumer reads 5 → local value becomes 4

Last write wins → final count may be 6 or 4
Correct value should be 5
```


### Exam Tip

Use this exact style of example to explain race condition in exams.


### Common Mistake

Writing only “both processes run at the same time” without explaining how the final value becomes wrong.


## Page 08 — Race Condition

### Original Slide Content

This is a situation where several processes access and manipulate the shared data concurrently. Then the outcome of the execution depends on the order in which the access takes place.

In order to prevent the race condition, it must ensure that only one process at a time can be manipulating the shared data.

Then the process synchronization applies.


### Visual Explanation

No major visual content.


### Explanation

A race condition happens when the result depends on timing/order. If two processes update shared data at the same time, the final result becomes unpredictable. Synchronization avoids this by ensuring only one process modifies shared data at a time.


### Visual/Text Diagram

```text
Several processes
      ↓
Access shared data concurrently
      ↓
Output depends on order/timing
      ↓
Race condition
      ↓
Need synchronization
```


### Exam Tip

Definition question: mention shared data, concurrent access, and outcome depends on execution order.


### Common Mistake

Saying race condition means a process executes faster than another. Speed is not the point; unsafe interleaving is.


## Page 09 — Critical Section of a Process

### Original Slide Content

The critical section of a process is a segment of code which the shared data is getting changed.

The shared data includes common variables, shared buffers shared tables, shared files etc.


### Visual Explanation

No major visual content.


### Explanation

The critical section is the dangerous part of code because it changes shared resources. Synchronization is mainly used to protect this section.


### Visual/Text Diagram

```text
Process Code
├── Normal code
├── Critical section → modifies shared data
└── Normal code
```


### Exam Tip

Define critical section clearly: a code segment where shared data is accessed/modified.


### Common Mistake

Calling the whole process a critical section. Only the shared-data-access part is the critical section.


## Page 10 — Critical Section Problem

### Original Slide Content

Each process must ask permission to enter critical section in entry section, may follow critical section with exit section, then remainder section.

General structure of process P1


### Visual Explanation

The visual shows the general structure:

```text
do {
    entry section
    critical section
    exit section
    remainder section
} while (true);
```

The slide labels the four logical parts of a process loop.


### Explanation

Before entering the critical section, the process runs entry code to request permission. After finishing, it runs exit code to release permission. Remainder section contains normal code unrelated to shared data.


### Visual/Text Diagram

```text
Entry section → ask permission
Critical section → access shared data
Exit section → release permission
Remainder section → other work
```


### Exam Tip

Draw this structure if asked to explain the critical-section problem.


### Common Mistake

Forgetting exit section. Without exit section, other processes may never get access.


## Page 11 — Critical Section Problem

### Original Slide Content

Consider a system with n processes {P0, P1, . . . , Pn−1}, where each process has a critical section.

If more than one process executes its critical section at the same time, they may concurrently access and modify shared data. This situation is known as the critical section problem.

If the critical section problem is not handled properly, it can lead to data inconsistency.


### Visual Explanation

No major visual content.


### Explanation

In a system with many processes, each may have a critical section. The critical-section problem is about designing rules so multiple processes do not enter conflicting critical sections simultaneously.


### Visual/Text Diagram

```text
P0 CS
P1 CS
P2 CS
...
Pn-1 CS

Problem: more than one CS executing together → shared data inconsistency
```


### Exam Tip

Exam answer should connect critical-section problem with data inconsistency.


### Common Mistake

Saying the problem exists only for two processes. It can happen with n processes.


## Page 12 — Solution to Critical-Section Problem

### Original Slide Content

1. Mutual Exclusion – If process Pi is executing in its critical section, then no other processes can be executing in their critical sections.

2. Progress – If no process is executing in its critical section and there exist some processes that wish to enter their critical section, then the selection of the processes that will enter the critical section next cannot be postponed indefinitely.

3. Bounded Waiting – A bound must exist on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.


### Visual Explanation

No major visual content.


### Explanation

A correct solution must satisfy three conditions. Mutual exclusion prevents simultaneous critical-section execution. Progress prevents unnecessary delay. Bounded waiting prevents starvation by ensuring a process will eventually get a turn.


### Visual/Text Diagram

```text
Correct Critical Section Solution
├── Mutual Exclusion: only one inside CS
├── Progress: choose next without indefinite delay
└── Bounded Waiting: limited waiting time
```


### Exam Tip

Very important: list and explain all three requirements exactly.


### Common Mistake

Mixing up progress and bounded waiting. Progress is about not delaying selection; bounded waiting is about limiting how long a process waits.


## Page 13 — How the Critical Section Problem can be Avoided

### Original Slide Content

Simplest solution:
Each process disables all interrupts just after entering its critical section and re-enables them just before leaving it. However, enabling/disabling interrupts is a privileged instruction.

Solution in kernel mode:
Preemptive kernel: a process can be preempted while running in kernel mode. More responsive and suitable for real-time systems.

Otherwise, the kernel is non-preemptive kernel: allows the process to run until it exits kernel mode, blocks, or voluntarily yields CPU.
Non-preemptive kernel is free from race conditions.


### Visual Explanation

No major visual content.


### Explanation

One simple idea is disabling interrupts, but normal user programs cannot safely do that because it is privileged. Kernel design also matters. A preemptive kernel can interrupt a process inside kernel mode, so synchronization is more complex. A non-preemptive kernel avoids kernel-mode race conditions because a process keeps running until it exits, blocks, or yields.


### Visual/Text Diagram

```text
Avoiding Critical Section Problems
├── Disable interrupts: simple but privileged
├── Preemptive kernel: responsive, but needs synchronization
└── Non-preemptive kernel: fewer kernel race conditions
```


### Exam Tip

Compare preemptive and non-preemptive kernel if asked about synchronization in kernel mode.


### Common Mistake

Saying disabling interrupts is the best user-level solution. It is privileged and not suitable for general user programs.


## Page 14 — Solutions for Critical Section Problem

### Original Slide Content

There are three software-based solutions and two hardware-based solutions.


### Visual Explanation

The slide has a comparison table.

| Software based solutions | Hardware based solutions |
|---|---|
| Algorithm 1 - for two processes | Test and Set Solution |
| Algorithm 2 - for two processes | Swap Solution |
| Algorithm 3 - Peterson’s solution (for two processes): Combination of Algorithms 1 and 2 |  |
| Bakery Algorithm – for multiple processes |  |

The visual groups critical-section solutions into software and hardware approaches.


### Explanation

Software solutions use shared variables and algorithms. Hardware solutions rely on atomic CPU instructions such as test-and-set and swap.


### Visual/Text Diagram

```text
Critical Section Solutions
├── Software based
│   ├── Algorithm 1
│   ├── Algorithm 2
│   ├── Peterson’s solution
│   └── Bakery Algorithm
└── Hardware based
    ├── Test-and-Set
    └── Swap
```


### Exam Tip

Memorize this classification table. It is easy marks in short-answer exams.


### Common Mistake

Calling Bakery Algorithm a hardware solution. It is software-based for multiple processes.


## Page 15 — ALGORITHM 1: Software-based Solution for two processes

### Original Slide Content

var turn: (i, j); // Initially turn = i; turn = i means Pi can enter its CS

The Busy waiting condition occurs

Busy waiting: continuously testing a variable waiting for some value to appear


### Visual Explanation

The visual shows two processes using a shared variable `turn`.

### Code from Slide

```text
var turn: (i, j); // Initially turn = i; turn = i means Pi can enter its CS

Process Pi
repeat
    while turn ≠ i do no-op;
    Critical Section
    turn = j;
    Remainder Section
until false;

Process Pj
repeat
    while turn ≠ j do no-op;
    Critical Section
    turn = i;
    Remainder Section
until false;
```

The slide also states that busy waiting occurs.


### Explanation

Algorithm 1 uses turn-taking. Only the process whose turn matches can enter the critical section. The problem is busy waiting: the waiting process continuously checks the `turn` variable and wastes CPU time.


### Visual/Text Diagram

```text
turn = i → Pi may enter
turn = j → Pj may enter
Waiting process loops repeatedly → busy waiting
```


### Exam Tip

If asked limitation of Algorithm 1: mention busy waiting and strict alternation.


### Common Mistake

Thinking busy waiting means the process is sleeping. It is not sleeping; it is repeatedly checking a condition.


## Page 16 — ALGORITHM 2: Software-based Solution for two processes

### Original Slide Content

Initially flag[i] = flag[j] = false; flag[i] = true means Pi wants to enter its CS.


### Visual Explanation

The visual shows a flag-based attempt for two processes.

### Code from Slide

```text
Initially flag[i] = flag[j] = false; flag[i] = true means Pi wants to enter its CS

Process Pi
repeat
    flag[i] = true;
    while flag[j] do no-op;
    Critical Section
    flag[i] = false;
    Remainder Section
until false;

Process Pj
repeat
    flag[j] = true;
    while flag[i] do no-op;
    Critical Section
    flag[j] = false;
    Remainder Section
until false;
```

The visual compares symmetric code for `Pi` and `Pj`.


### Explanation

Algorithm 2 uses flags to show intention. A process sets its flag to true before entering. If the other process also wants to enter, it waits. This can create problems if both set flags at the same time and both wait forever.


### Visual/Text Diagram

```text
Pi sets flag[i] = true
Pj sets flag[j] = true
Pi sees flag[j] true → waits
Pj sees flag[i] true → waits
Possible deadlock-like waiting
```


### Exam Tip

State that flags represent intention to enter the critical section.


### Common Mistake

Assuming flag-only solution always works. It can fail when both processes set their flags simultaneously.


## Page 17 — ALGORITHM 3: Software-based Solution for two processes

### Original Slide Content

Peterson’s solution: Combine shared variables of Algorithms 1 and 2.


### Visual Explanation

The visual shows Peterson’s solution using both `flag[]` and `turn`.

### Code from Slide

```text
Peterson’s solution: Combine shared variables of Algorithms 1 and 2

Process Pi
repeat
    flag[i] = true;
    turn = j;
    while flag[j] and turn = j do no-op;
    Critical Section
    flag[i] = false;
    Remainder Section
until false;

Process Pj
repeat
    flag[j] = true;
    turn = i;
    while flag[i] and turn = i do no-op;
    Critical Section
    flag[j] = false;
    Remainder Section
until false;
```

The visual shows two parallel columns for `Pi` and `Pj`.


### Explanation

Peterson’s solution combines intention (`flag`) and priority (`turn`). It is a classic software solution for two processes. If both want to enter, `turn` decides who waits.


### Visual/Text Diagram

```text
flag → “I want to enter”
turn → “Let the other go first if conflict”
flag + turn → safer two-process synchronization
```


### Exam Tip

Peterson’s solution is important for essay questions on software-based critical-section solutions.


### Common Mistake

Forgetting that Peterson’s solution is for two processes, not directly for many processes.


## Page 18 — Bakery Algorithm – Software solution for n processes

### Original Slide Content

Before entering the critical section, each process receives a number.
The holder of the smallest number enters the critical section.


### Visual Explanation

The visual shows pseudocode for `Process Pi` and explains ticket-style ordering.

### Code from Slide

```text
Process Pi
repeat
    choosing[i] = true;
    number[i] = max(number[0], number[1], ..., number[n-1]) + 1;
    choosing[i] = false;

    for j = 0 to n-1 do
    begin
        while choosing[j] do no-op;
        while number[j] ≠ 0 and (number[j], j) < (number[i], i) do no-op;
    end;

    critical section

    number[i] = 0;
    remainder section
until false
```

### Meaning of the visual
It works like a bakery queue ticket: each process takes a number, and the process with the smallest number enters first.


### Explanation

The Bakery Algorithm extends synchronization to multiple processes. Each process gets a number before entering. The smallest ticket wins. If there is a tie, process ID breaks the tie.


### Visual/Text Diagram

```text
Processes take numbers
P1: 3, P2: 1, P3: 2
Smallest number enters first → P2 → P3 → P1
```


### Exam Tip

Use the bakery shop analogy in exams: ticket number decides entry order.


### Common Mistake

Thinking Bakery Algorithm is only for two processes. It is for n processes.


## Page 19 — Synchronization Hardware

### Original Slide Content

Use special hardware instructions.
- Test-and-set
- Swap

These are atomic instruction - They cannot be interrupted until it completes its execution.


### Visual Explanation

The visual contains pseudocode for `Test-and-Set` and `Swap` atomic instructions.

### Code from Slide

```text
// Test and set the content of a word atomically
function Test-and-Set(var boolean: target)
begin
    Test-and-Set = target;
    target = true;
end;
```

```text
// Swapping instruction atomically
procedure Swap(var boolean: a, b)
var boolean: temp;
begin
    temp = a;
    a = b;
    b = temp;
end;
```

### Why this matters
Atomic instructions complete as one indivisible operation. Another process cannot interrupt halfway through the operation.


### Explanation

Hardware solutions use CPU-supported atomic operations. Atomic means the instruction completes fully or not at all. This is useful for implementing locks.


### Visual/Text Diagram

```text
Atomic Instruction
Start → Cannot be interrupted → Finish

Used to protect critical section entry
```


### Exam Tip

Define atomic operation: cannot be interrupted until completion.


### Common Mistake

Writing “atomic means fast.” Atomic means indivisible/uninterruptible, not simply fast.


## Page 20 — Synchronization Hardware

### Original Slide Content

Test-and-Set

var boolean: lock; lock is a shared variable, initially set to false.


### Visual Explanation

The slide shows Test-and-Set applied to two processes.

### Code from Slide

```text
Test-and-Set
var boolean: lock; lock is a shared variable, initially set to false.

Repeat // Process Pi
    while Test-and-Set(lock) do no-op;
    Critical Section
    lock = false;
    Remainder Section
until false;

Repeat // Process Pj
    while Test-and-Set(lock) do no-op;
    Critical Section
    lock = false;
    Remainder Section
until false;
```

The shared `lock` prevents two processes from entering the critical section together.


### Explanation

If `lock` is false, a process can enter and Test-and-Set changes it to true. Other processes calling Test-and-Set see true and busy-wait. When the process exits, it sets `lock = false`.


### Visual/Text Diagram

```text
lock = false → free
Process enters → Test-and-Set makes lock true
Others wait while lock true
Exit → lock = false
```


### Exam Tip

Explain how `lock` is used with Test-and-Set to provide mutual exclusion.


### Common Mistake

Forgetting to set `lock = false` after the critical section. That would block others forever.


## Page 21 — Synchronization Hardware

### Original Slide Content

Swap


### Visual Explanation

The visual shows using the atomic `Swap(lock, key)` operation.

### Code from Slide

```text
Swap

Repeat // Process Pi
    key = true;
    repeat
        Swap(lock, key);
    until key = false;
    Critical section
    lock = false;
    Remainder section
until false;

Repeat // Process Pj
    key = true;
    repeat
        Swap(lock, key);
    until key = false;
    Critical section
    lock = false;
    Remainder section
until false;
```

The visual presents the same structure for processes `Pi` and `Pj`.


### Explanation

The process repeatedly swaps its local `key` with shared `lock`. When `key` becomes false, it means the process successfully acquired the lock and may enter the critical section.


### Visual/Text Diagram

```text
key = true
Swap(lock, key) repeatedly
key becomes false → lock acquired
Critical section
lock = false → release
```


### Exam Tip

Be able to identify `Swap` as a hardware-based atomic synchronization solution.


### Common Mistake

Confusing local variable `key` with shared variable `lock`.


## Page 22 — Semaphore

### Original Slide Content

This is a synchronization tool that provides more sophisticated way for process to synchronize their activities.
Semaphore is an integer variable (S).
Can only be accessed via two indivisible (atomic) operations:
- wait()
- signal()


### Visual Explanation

The visual includes definitions of `wait()` and `signal()`.

### Code from Slide

```text
Definition of the wait() operation

wait(S) {
    while (S <= 0)
        ; // busy wait
    S--;
}
```

```text
Definition of the signal() operation

signal(S) {
    S++;
}
```

The visual shows semaphore operations as atomic operations over integer variable `S`.


### Explanation

A semaphore is a synchronization variable. `wait()` decreases the semaphore after it is available. `signal()` increases it to release or notify availability.


### Visual/Text Diagram

```text
wait(S) → request/acquire resource
signal(S) → release/notify resource
```


### Exam Tip

Define semaphore and name its two atomic operations: wait and signal.


### Common Mistake

Reversing meanings: `wait()` decreases/acquires; `signal()` increases/releases.


## Page 23 — Semaphore Usage

### Original Slide Content

Counting semaphore – integer value can range over an unrestricted domain.
Binary semaphore – integer value can range only between 0 and 1 (Same as a mutex lock).
Consider P1 and P2 that require S1 to happen before S2.
Create a semaphore “synch” initialized to 0.
Can implement a counting semaphore S as a binary semaphore.


### Visual Explanation

The visual shows an ordering example using a semaphore named `synch`.

### Code from Slide

```text
P1:
    S1;
    signal(synch);

P2:
    wait(synch);
    S2;
```

### Meaning
`P2` cannot execute `S2` until `P1` executes `S1` and signals `synch`.


### Explanation

Semaphores can control both mutual exclusion and ordering. In the example, `synch` starts at 0, so P2 waits. After P1 completes S1, it signals, allowing P2 to continue.


### Visual/Text Diagram

```text
P1: S1 → signal(synch)
                 ↓
P2: wait(synch) → S2
```


### Exam Tip

Counting vs binary semaphore is a common comparison question.


### Common Mistake

Thinking semaphore is only for locking. It can also enforce ordering between events.


## Page 24 — Semaphore Implementation

### Original Slide Content

Must guarantee that no two processes can execute the wait() and signal() on the same semaphore at the same time.
Semaphores are implemented in two methods.
- Spinlock – uses busy waiting
- Block and wakeup - block the execution and wait in a semaphore list.
wait.


### Visual Explanation

No major visual content.


### Explanation

Semaphore implementation itself must be protected. Two processes should not update the same semaphore simultaneously. Spinlock keeps checking in a loop. Block-and-wakeup blocks the process and places it in a waiting list until it can continue.


### Visual/Text Diagram

```text
Semaphore Implementation
├── Spinlock → busy waiting
└── Block and wakeup → sleep in waiting list, wake later
```


### Exam Tip

Compare spinlock and block/wakeup implementation methods.


### Common Mistake

Assuming all semaphore waiting wastes CPU. Block-and-wakeup does not continuously spin.


## Page 25 — Classical Problems of Synchronization

### Original Slide Content

Classical problems used to test newly-proposed synchronization schemes:
- Bounded-Buffer Problem
- Readers and Writers Problem
- Dining-Philosophers Problem


### Visual Explanation

No major visual content.


### Explanation

These are standard OS problems used to test whether synchronization methods work correctly. Each problem highlights a different type of shared resource conflict.


### Visual/Text Diagram

```text
Classical Synchronization Problems
├── Bounded Buffer
├── Readers-Writers
└── Dining Philosophers
```


### Exam Tip

Memorize the three classical problems and the shared-resource issue in each.


### Common Mistake

Treating these as unrelated stories. They are models for synchronization challenges.


## Page 26 — Bounded-Buffer Problem

### Original Slide Content

n buffers, each can hold one item.
Semaphore mutex initialized to the value 1.
Semaphore full initialized to the value 0.
Semaphore empty initialized to the value n.


### Visual Explanation

No major visual content.


### Explanation

`mutex` protects access to the buffer. `full` counts filled slots. `empty` counts empty slots. Initially, all n buffers are empty, so `empty = n` and `full = 0`.


### Visual/Text Diagram

```text
Buffer slots = n
mutex = 1 → one process accesses buffer at a time
full = 0 → no filled slots initially
empty = n → all slots empty initially
```


### Exam Tip

For bounded buffer, always state the initial semaphore values.


### Common Mistake

Mixing up `full` and `empty` initial values. Initially full is 0, empty is n.


## Page 27 — Bounded Buffer Problem (Cont.)

### Original Slide Content

The structure of the producer process


### Visual Explanation

The visual shows semaphore-based producer pseudocode.

### Code from Slide

```text
do {
    ...
    /* produce an item in next_produced */
    ...
    wait(empty);
    wait(mutex);

    ...
    /* add next_produced to the buffer */
    ...

    signal(mutex);
    signal(full);
} while (true);
```

### Meaning
Producer first waits for an empty slot, then locks the buffer using `mutex`, adds the item, releases the mutex, and signals that one more full slot exists.


### Explanation

The ordering is important. Producer cannot add if there is no empty slot. It must protect buffer modification with `mutex`.


### Visual/Text Diagram

```text
Produce item
wait(empty) → need free slot
wait(mutex) → lock buffer
add item
signal(mutex) → unlock buffer
signal(full) → one more full slot
```


### Exam Tip

Write producer process in correct semaphore order.


### Common Mistake

Calling `signal(full)` before adding the item. That would allow consumer to read before data is actually available.


## Page 28 — Bounded Buffer Problem (Cont.)

### Original Slide Content

The structure of the consumer process


### Visual Explanation

The visual shows semaphore-based consumer pseudocode.

### Code from Slide

```text
do {
    wait(full);
    wait(mutex);

    ...
    /* remove an item from buffer to next_consumed */
    ...

    signal(mutex);
    signal(empty);

    ...
    /* consume the item in next_consumed */
    ...
} while (true);
```

### Meaning
Consumer first waits for a full slot, then locks the buffer, removes the item, releases the mutex, signals that an empty slot is available, and consumes the item.


### Explanation

Consumer cannot remove if buffer is empty. `wait(full)` ensures an item exists. `mutex` ensures only one process modifies the buffer at a time.


### Visual/Text Diagram

```text
wait(full) → need available item
wait(mutex) → lock buffer
remove item
signal(mutex) → unlock buffer
signal(empty) → one more empty slot
consume item
```


### Exam Tip

Write consumer process in correct semaphore order.


### Common Mistake

Consuming inside the critical section unnecessarily. The slide removes item inside the critical section, then consumes after releasing `mutex`.


## Page 29 — Readers-Writers Problem

### Original Slide Content

Multiple readers want to read shared data and multiple writers want to write (modify) the same shared data.
- Many readers can read at the same time.
- Only one writer can write at a time.
- When a writer is writing, no reader can read.
- Two writers cannot write at the same time.


### Visual Explanation

No major visual content.


### Explanation

Reading does not modify data, so multiple readers can safely read together. Writing modifies data, so a writer needs exclusive access. When a writer writes, readers and other writers must wait.


### Visual/Text Diagram

```text
Allowed: Reader + Reader
Not allowed: Writer + Reader
Not allowed: Writer + Writer
```


### Exam Tip

This is a high-frequency comparison/logic question: readers may share, writers need exclusivity.


### Common Mistake

Thinking only one reader can read at a time. Many readers can read together if no writer is writing.


## Page 30 — Readers-Writers Problem (Cont.)

### Original Slide Content

Shared Data:
- Data set
- Semaphore rw_mutex initialized to 1
- Semaphore mutex initialized to 1
- Integer read_count initialized to 0

The structure of a writer process


### Visual Explanation

The visual shows shared data and the writer process code.

### Code from Slide

```text
Shared Data
- Data set
- Semaphore rw_mutex initialized to 1
- Semaphore mutex initialized to 1
- Integer read_count initialized to 0

The structure of a writer process

do {
    wait(rw_mutex);
    ...
    /* writing is performed */
    ...
    signal(rw_mutex);
} while (true);
```

### Meaning
`rw_mutex` gives exclusive access to the shared data for writing.


### Explanation

A writer uses `rw_mutex` to block readers and other writers while writing. Only one writer can pass `wait(rw_mutex)` at a time.


### Visual/Text Diagram

```text
Writer
wait(rw_mutex) → exclusive access
write data
signal(rw_mutex) → release access
```


### Exam Tip

Explain why writer needs `rw_mutex`: to ensure exclusive write access.


### Common Mistake

Forgetting `signal(rw_mutex)` after writing. That would block all future readers/writers.


## Page 31 — Readers-Writers Problem (Cont.)

### Original Slide Content

The structure of a reader process


### Visual Explanation

The visual shows reader pseudocode.

### Code from Slide

```text
do {
    wait(mutex);
    read_count++;
    if (read_count == 1)
        wait(rw_mutex);
    signal(mutex);

    ...
    /* reading is performed */
    ...

    wait(mutex);
    read_count--;
    if (read_count == 0)
        signal(rw_mutex);
    signal(mutex);
} while (true);
```

### Meaning
The first reader locks writers out by waiting on `rw_mutex`. Additional readers can read together. The last reader releases `rw_mutex`.


### Explanation

The variable `read_count` tracks how many readers are currently reading. `mutex` protects updates to `read_count`. The first reader blocks writers; the last reader allows writers again.


### Visual/Text Diagram

```text
First reader → wait(rw_mutex)
More readers → can read together
Last reader → signal(rw_mutex)
Writer can proceed after all readers finish
```


### Exam Tip

Very important practical algorithm. Explain the role of both `mutex` and `rw_mutex`.


### Common Mistake

Thinking `mutex` protects the data set. In this algorithm, `mutex` protects `read_count`; `rw_mutex` protects the shared data access.


## Page 32 — Dining-Philosophers Problem

### Original Slide Content

Philosophers spend their lives alternating thinking and eating.
All philosophers pick up their left fork at the same time.
Each philosopher waits for the right fork, which is already held by their neighbor.
No philosopher can eat.


### Visual Explanation

The visual shows a circular table with philosophers/forks around a shared dish. It represents multiple processes competing for limited neighboring resources.


### Explanation

The dining philosophers problem models deadlock. If every philosopher grabs the left fork and waits for the right fork, all wait forever. No one can proceed.


### Visual/Text Diagram

```text
P0 holds left fork → waits right
P1 holds left fork → waits right
P2 holds left fork → waits right
P3 holds left fork → waits right
P4 holds left fork → waits right

Circular waiting → deadlock
```


### Exam Tip

Use this problem to explain deadlock caused by circular waiting.


### Common Mistake

Explaining it only as an eating story and not connecting it to processes/resources.


## Page 33 — Dining-Philosophers Problem Algorithm

### Original Slide Content

The structure of Philosopher i:


### Visual Explanation

The visual shows the algorithm for philosopher `i`.

### Code from Slide

```text
do {
    wait(chopstick[i]);
    wait(chopStick[(i + 1) % 5]);

    // eat

    signal(chopstick[i]);
    signal(chopstick[(i + 1) % 5]);

    // think
} while (TRUE);
```

### Meaning
Each philosopher waits for the left chopstick/fork and then the right chopstick/fork. After eating, both are released.


### Explanation

The modulo expression `(i + 1) % 5` selects the neighboring chopstick in a circular arrangement. The problem is that if everyone waits for the second chopstick, deadlock may happen.


### Visual/Text Diagram

```text
Philosopher i
wait(left chopstick i)
wait(right chopstick (i+1)%5)
eat
signal(left)
signal(right)
think
```


### Exam Tip

Be able to explain what `(i + 1) % 5` means in the circular table.


### Common Mistake

Ignoring the deadlock risk in the basic algorithm.


## Page 34 — Problems with Semaphores

### Original Slide Content

Incorrect use of semaphore operations:
- signal(mutex) ...wait(mutex)
- wait(mutex) ...wait(mutex)
- Omitting of wait(mutex) or signal(mutex) (or both)

Deadlock and starvation are possible.


### Visual Explanation

No major visual content.


### Explanation

Semaphores are powerful but error-prone. Using operations in the wrong order, calling `wait()` twice, or forgetting `signal()` can cause deadlock or starvation.


### Visual/Text Diagram

```text
Wrong semaphore use
├── signal before wait
├── wait twice
├── missing wait
└── missing signal

Possible result: deadlock / starvation
```


### Exam Tip

Mention deadlock and starvation as risks of incorrect semaphore usage.


### Common Mistake

Assuming semaphore code is automatically safe. Incorrect semaphore order can break the whole program.


## Page 35 — Monitors

### Original Slide Content

A high-level abstraction that provides a convenient and effective mechanism for process synchronization.
Abstract data type, internal variables only accessible by code within the procedure.
Only one process may be active within the monitor at a time.
But not powerful enough to model some synchronization schemes.


### Visual Explanation

The visual shows a monitor structure.

### Code from Slide

```text
monitor monitor-name
{
    // shared variable declarations
    procedure P1 (...) { ... }

    procedure Pn (...) { ... }

    Initialization code (...) { ... }
}
```

### Meaning
A monitor encapsulates shared variables and procedures. Only code inside the monitor can access internal variables, and only one process can be active inside at a time.


### Explanation

Monitors are higher-level than semaphores. They reduce direct mistakes by hiding shared variables and controlling entry automatically.


### Visual/Text Diagram

```text
Monitor
├── Shared variables (private inside monitor)
├── Procedures
└── Initialization code

Only one process active inside monitor at once
```


### Exam Tip

Define monitor as a high-level synchronization abstraction with mutual exclusion inside the monitor.


### Common Mistake

Saying monitors are the same as semaphores. Monitors are higher-level abstractions.


## Page 36 — End of Lecture 7

### Original Slide Content

End of Lecture 7


### Visual Explanation

End slide indicating that the core Lecture 07 content has finished.


### Explanation

This page marks the completion of the process synchronization lecture content.


### Exam Tip

No exam theory here, but use it as a checkpoint to revise all previous topics.


### Common Mistake

No major common mistake.


## Page 37 — Weekly Plan

### Original Slide Content

Practical: Shared Memory implementation in C

Workshop:
- Summary – Process Synchronization in OS
- Discussion of Tutorial 7


### Visual Explanation

No major visual content.


### Explanation

The practical component connects this lecture to C programming and shared memory. Tutorial 7 likely checks synchronization concepts and problem-solving.


### Visual/Text Diagram

```text
Lecture Theory → Practical: Shared Memory in C → Workshop Summary + Tutorial Discussion
```


### Exam Tip

Practical questions may ask how synchronization applies to shared memory programs.


### Common Mistake

Ignoring the practical link. Synchronization theory becomes important when multiple C processes share memory.


## Page 38 — Thank You

### Original Slide Content

Thank You


### Visual Explanation

Final closing slide.


### Explanation

The lecture ends here.


### Exam Tip

No exam content on this slide.


### Common Mistake

No major common mistake.

---

# Important Definitions

| Term | Definition | Simple Meaning | Example |
|---|---|---|---|
| Concurrency | Execution where processes overlap/interleave in time. | Multiple processes appear to run together. | Producer and consumer running together. |
| Shared Data | Data accessed by more than one process. | Common data used by several processes. | `counter`, shared buffer, shared file. |
| Data Inconsistency | Incorrect data state caused by unsafe concurrent access. | Final value becomes wrong. | Counter should be 5 but becomes 4 or 6. |
| Race Condition | Situation where output depends on order/timing of concurrent shared-data access. | Result changes depending on who executes first. | Producer and consumer updating `counter`. |
| Process Synchronization | Mechanisms that coordinate concurrent processes to avoid inconsistency. | Rules for safe cooperation. | Semaphores, monitors. |
| Critical Section | Code segment where shared data is accessed or modified. | Dangerous shared-data part of code. | Updating shared counter. |
| Entry Section | Code that requests permission to enter the critical section. | Ask for access. | `wait(mutex)`. |
| Exit Section | Code that releases permission after the critical section. | Give access back. | `signal(mutex)`. |
| Remainder Section | Code outside the critical section. | Normal work. | Local calculations. |
| Mutual Exclusion | Only one process can execute its critical section at a time. | One inside at once. | One writer writes at a time. |
| Progress | If no process is in the critical section, selection of next process cannot be postponed indefinitely. | System must not delay unnecessarily. | Waiting process should be chosen. |
| Bounded Waiting | There is a limit on how long a requesting process waits. | No endless waiting. | A process eventually gets its turn. |
| Busy Waiting | Continuously testing a condition while waiting. | Wastes CPU by looping. | `while(lock) do no-op;` |
| Atomic Operation | Operation that cannot be interrupted halfway. | All-or-nothing instruction. | Test-and-Set, Swap. |
| Test-and-Set | Atomic hardware instruction that reads a value and sets it. | Used to build locks. | `Test-and-Set(lock)`. |
| Swap | Atomic instruction that exchanges two values. | Used for lock acquisition. | `Swap(lock, key)`. |
| Semaphore | Integer synchronization variable accessed only by atomic `wait()` and `signal()`. | Counter/lock for process control. | `mutex`, `full`, `empty`. |
| Counting Semaphore | Semaphore with unrestricted integer range. | Counts many resources. | Empty buffer slots. |
| Binary Semaphore | Semaphore with value 0 or 1. | Same idea as mutex lock. | `mutex = 1`. |
| Spinlock | Lock implementation that uses busy waiting. | Keeps checking until free. | Loop while lock is true. |
| Block and Wakeup | Semaphore implementation where waiting process blocks in a waiting list. | Sleep now, wake later. | OS blocks process until signal. |
| Bounded Buffer | Producer-consumer problem with finite buffer slots. | Limited shared queue. | Buffer of size n. |
| Readers-Writers Problem | Multiple readers and writers share data with read/write constraints. | Readers share, writers need exclusivity. | Database access. |
| Dining-Philosophers Problem | Synchronization problem showing deadlock risk with shared neighboring resources. | Everyone waits forever for a resource. | Philosophers waiting for forks. |
| Deadlock | Processes wait forever because each holds a needed resource. | No one can proceed. | All philosophers hold left fork. |
| Starvation | A process waits indefinitely because others keep getting access. | Some process never gets turn. | Writer blocked by continuous readers. |
| Monitor | High-level synchronization abstraction with private data and procedures. | Safer wrapper for shared data. | Monitor with procedures `P1`, `Pn`. |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| Background | Concurrent access to shared data causes inconsistency. | 04 |
| Producer-Consumer | `counter++` and `counter--` are not safely atomic. | 05–07 |
| Race Condition | Outcome depends on access order. | 08 |
| Critical Section | Shared data is changed inside it. | 09 |
| Critical Section Structure | Entry → Critical → Exit → Remainder. | 10 |
| Solution Requirements | Mutual exclusion, progress, bounded waiting. | 12 |
| Kernel Modes | Non-preemptive kernel is free from race conditions. | 13 |
| Software Solutions | Algorithm 1, Algorithm 2, Peterson, Bakery. | 14–18 |
| Hardware Solutions | Test-and-Set, Swap. | 19–21 |
| Semaphore | Integer variable with atomic `wait()` and `signal()`. | 22 |
| Semaphore Usage | Counting and binary semaphores; ordering with `synch`. | 23 |
| Semaphore Implementation | Spinlock or block/wakeup. | 24 |
| Classical Problems | Bounded buffer, readers-writers, dining philosophers. | 25 |
| Bounded Buffer | `mutex=1`, `full=0`, `empty=n`. | 26 |
| Readers-Writers | Many readers allowed; only one writer. | 29–31 |
| Dining Philosophers | Circular waiting can cause deadlock. | 32–33 |
| Semaphore Problems | Wrong use causes deadlock/starvation. | 34 |
| Monitors | High-level synchronization abstraction. | 35 |

---

# Important Code Snippets

## Page 06 — Producer and Consumer Counter Code

```c
// Producer
while (true)
{
    while (counter == BUFFER_SIZE)
        /* do nothing */
    buffer[in] = next_produced;
    in = (in + 1) % BUFFER_SIZE;
    counter++;
}

// Consumer
while (true)
{
    while (counter == 0)
        /* do nothing */
    next_consumed = buffer[out];
    out = (out + 1) % BUFFER_SIZE;
    counter--;
}
```

**Explanation:** Producer increments `counter`; consumer decrements `counter`. Since both modify shared `counter`, synchronization is needed.

## Page 10 — General Critical Section Structure

```text
do {
    entry section
    critical section
    exit section
    remainder section
} while (true);
```

**Explanation:** The entry section controls permission to enter; exit section releases permission.

## Page 15 — Algorithm 1

```text
var turn: (i, j); // Initially turn = i; turn = i means Pi can enter its CS

Process Pi
repeat
    while turn ≠ i do no-op;
    Critical Section
    turn = j;
    Remainder Section
until false;

Process Pj
repeat
    while turn ≠ j do no-op;
    Critical Section
    turn = i;
    Remainder Section
until false;
```

**Explanation:** Uses strict turns. Causes busy waiting.

## Page 16 — Algorithm 2

```text
Initially flag[i] = flag[j] = false; flag[i] = true means Pi wants to enter its CS

Process Pi
repeat
    flag[i] = true;
    while flag[j] do no-op;
    Critical Section
    flag[i] = false;
    Remainder Section
until false;

Process Pj
repeat
    flag[j] = true;
    while flag[i] do no-op;
    Critical Section
    flag[j] = false;
    Remainder Section
until false;
```

**Explanation:** Uses flags to indicate intention to enter the critical section.

## Page 17 — Peterson’s Solution

```text
Process Pi
repeat
    flag[i] = true;
    turn = j;
    while flag[j] and turn = j do no-op;
    Critical Section
    flag[i] = false;
    Remainder Section
until false;

Process Pj
repeat
    flag[j] = true;
    turn = i;
    while flag[i] and turn = i do no-op;
    Critical Section
    flag[j] = false;
    Remainder Section
until false;
```

**Explanation:** Combines `flag` and `turn` to solve the two-process critical-section problem.

## Page 18 — Bakery Algorithm

```text
Process Pi
repeat
    choosing[i] = true;
    number[i] = max(number[0], number[1], ..., number[n-1]) + 1;
    choosing[i] = false;

    for j = 0 to n-1 do
    begin
        while choosing[j] do no-op;
        while number[j] ≠ 0 and (number[j], j) < (number[i], i) do no-op;
    end;

    critical section

    number[i] = 0;
    remainder section
until false
```

**Explanation:** Multiple processes take numbers; smallest number enters the critical section first.

## Page 19 — Test-and-Set and Swap Atomic Instructions

```text
function Test-and-Set(var boolean: target)
begin
    Test-and-Set = target;
    target = true;
end;
```

```text
procedure Swap(var boolean: a, b)
var boolean: temp;
begin
    temp = a;
    a = b;
    b = temp;
end;
```

**Explanation:** These are atomic hardware instructions used to build synchronization locks.

## Page 22 — Semaphore Operations

```text
wait(S) {
    while (S <= 0)
        ; // busy wait
    S--;
}
```

```text
signal(S) {
    S++;
}
```

**Explanation:** `wait()` acquires/decrements; `signal()` releases/increments.

## Page 27 — Bounded Buffer Producer

```text
do {
    ...
    /* produce an item in next_produced */
    ...
    wait(empty);
    wait(mutex);

    ...
    /* add next_produced to the buffer */
    ...

    signal(mutex);
    signal(full);
} while (true);
```

**Explanation:** Producer waits for empty space and locks the buffer before inserting.

## Page 28 — Bounded Buffer Consumer

```text
do {
    wait(full);
    wait(mutex);

    ...
    /* remove an item from buffer to next_consumed */
    ...

    signal(mutex);
    signal(empty);

    ...
    /* consume the item in next_consumed */
    ...
} while (true);
```

**Explanation:** Consumer waits for a full slot and locks the buffer before removing.

## Page 30 — Readers-Writers Writer Process

```text
do {
    wait(rw_mutex);
    ...
    /* writing is performed */
    ...
    signal(rw_mutex);
} while (true);
```

**Explanation:** Writer gets exclusive access using `rw_mutex`.

## Page 31 — Readers-Writers Reader Process

```text
do {
    wait(mutex);
    read_count++;
    if (read_count == 1)
        wait(rw_mutex);
    signal(mutex);

    ...
    /* reading is performed */
    ...

    wait(mutex);
    read_count--;
    if (read_count == 0)
        signal(rw_mutex);
    signal(mutex);
} while (true);
```

**Explanation:** First reader blocks writers; last reader releases writers.

## Page 33 — Dining-Philosophers Algorithm

```text
do {
    wait(chopstick[i]);
    wait(chopStick[(i + 1) % 5]);

    // eat

    signal(chopstick[i]);
    signal(chopstick[(i + 1) % 5]);

    // think
} while (TRUE);
```

**Explanation:** Philosopher gets both chopsticks before eating and releases both afterward.

## Page 35 — Monitor Structure

```text
monitor monitor-name
{
    // shared variable declarations
    procedure P1 (...) { ... }

    procedure Pn (...) { ... }

    Initialization code (...) { ... }
}
```

**Explanation:** Monitor groups shared data and procedures with built-in mutual exclusion.

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 06 | Producer-consumer table with `counter++` and `counter--` breakdown | Shows why shared counter updates are unsafe without synchronization. |
| 07 | Producer and consumer using shared `count = 5` | Demonstrates incorrect final value due to interleaving. |
| 10 | Entry/critical/exit/remainder loop | Shows general process structure for critical-section problem. |
| 14 | Software vs hardware solutions table | Classifies synchronization approaches. |
| 15 | Algorithm 1 two-process pseudocode | Uses `turn`; causes busy waiting. |
| 16 | Algorithm 2 two-process pseudocode | Uses `flag[]` to show intention. |
| 17 | Peterson’s solution pseudocode | Combines `flag[]` and `turn`. |
| 18 | Bakery algorithm pseudocode | Ticket-number approach for n processes. |
| 19 | Test-and-Set and Swap code | Atomic hardware instructions. |
| 20 | Test-and-Set lock use | Shared lock controls critical-section entry. |
| 21 | Swap lock use | Atomic swap controls critical-section entry. |
| 22 | `wait()` and `signal()` definitions | Basic semaphore operations. |
| 23 | P1/P2 ordering with `synch` | Shows semaphore event ordering. |
| 27 | Bounded buffer producer | Semaphore ordering for producer. |
| 28 | Bounded buffer consumer | Semaphore ordering for consumer. |
| 30 | Writer process | Writer gets exclusive access using `rw_mutex`. |
| 31 | Reader process | First reader locks writers; last reader releases writers. |
| 32 | Dining philosophers table | Shows circular resource competition. |
| 33 | Dining philosophers algorithm | Shows fork/chopstick acquisition and release. |
| 35 | Monitor structure | Encapsulates shared variables and procedures. |

---

# Full Lecture Summary

This lecture explains why process synchronization is necessary in operating systems. When processes execute concurrently, their instructions can interleave. If these processes access and modify shared data, the final data may become inconsistent. The producer-consumer example shows this clearly: both producer and consumer modify a shared `counter`, and operations such as `counter++` and `counter--` involve multiple lower-level steps.

A race condition occurs when several processes access and manipulate shared data concurrently, and the final result depends on the order of execution. To prevent this, only one process should modify shared data at a time. The part of code where shared data is accessed or changed is called the critical section.

The critical-section problem requires three conditions for a correct solution: mutual exclusion, progress, and bounded waiting. Mutual exclusion ensures that only one process is in the critical section. Progress ensures that selecting the next process is not delayed indefinitely. Bounded waiting ensures that a process does not starve while waiting.

The lecture then explains software-based solutions such as Algorithm 1, Algorithm 2, Peterson’s solution, and the Bakery Algorithm. Algorithm 1 uses a `turn` variable but causes busy waiting. Algorithm 2 uses flags. Peterson’s solution combines `flag[]` and `turn` for two processes. Bakery Algorithm extends the idea to n processes using ticket numbers.

Hardware-based solutions use atomic instructions such as Test-and-Set and Swap. Atomic operations cannot be interrupted, so they can safely implement locks.

Semaphores are a more sophisticated synchronization tool. A semaphore is an integer variable accessed only through atomic `wait()` and `signal()` operations. Semaphores may be counting semaphores or binary semaphores. They can be implemented using spinlocks or block-and-wakeup mechanisms.

The lecture also presents three classical synchronization problems: bounded-buffer, readers-writers, and dining-philosophers. The bounded-buffer problem uses `mutex`, `full`, and `empty` semaphores. The readers-writers problem allows many readers but only one writer. The dining-philosophers problem demonstrates deadlock risk when all philosophers hold one fork and wait for another.

Incorrect semaphore usage can lead to deadlock and starvation. Monitors provide a higher-level synchronization abstraction by hiding shared variables inside procedures and allowing only one process to be active inside the monitor at a time.

---

# Likely Exam Questions and Short Answers

### Question 1
What is a race condition?

**Expected Answer:**
A race condition is a situation where several processes access and manipulate shared data concurrently, and the final outcome depends on the order in which the access occurs.

### Question 2
Why is process synchronization needed?

**Expected Answer:**
Process synchronization is needed to ensure orderly execution of cooperating processes and to prevent data inconsistency when concurrent processes access shared data.

### Question 3
What is a critical section?

**Expected Answer:**
A critical section is a segment of code in which shared data such as common variables, buffers, tables, or files is accessed or modified.

### Question 4
List the three requirements of a solution to the critical-section problem.

**Expected Answer:**
The three requirements are mutual exclusion, progress, and bounded waiting.

### Question 5
Explain mutual exclusion.

**Expected Answer:**
Mutual exclusion means that if one process is executing in its critical section, no other process can execute in its critical section at the same time.

### Question 6
What is busy waiting?

**Expected Answer:**
Busy waiting is continuously testing a variable while waiting for a required value to appear.

### Question 7
What is Peterson’s solution?

**Expected Answer:**
Peterson’s solution is a software-based solution for two processes that combines `flag[]` variables and a `turn` variable to solve the critical-section problem.

### Question 8
What is the Bakery Algorithm?

**Expected Answer:**
The Bakery Algorithm is a software solution for n processes where each process receives a number before entering the critical section, and the process with the smallest number enters first.

### Question 9
What is an atomic instruction?

**Expected Answer:**
An atomic instruction is an instruction that cannot be interrupted until it completes execution.

### Question 10
Name two hardware-based synchronization solutions.

**Expected Answer:**
Test-and-Set and Swap.

### Question 11
What is a semaphore?

**Expected Answer:**
A semaphore is an integer synchronization variable that can only be accessed using two atomic operations: `wait()` and `signal()`.

### Question 12
Differentiate counting semaphore and binary semaphore.

**Expected Answer:**
A counting semaphore can take an unrestricted integer value, while a binary semaphore can only take values 0 and 1 and works like a mutex lock.

### Question 13
What are the initial semaphore values in the bounded-buffer problem?

**Expected Answer:**
`mutex = 1`, `full = 0`, and `empty = n`, where n is the number of buffers.

### Question 14
Explain the readers-writers problem.

**Expected Answer:**
Multiple readers and writers access shared data. Many readers can read simultaneously, but only one writer can write at a time. When a writer writes, no reader can read, and two writers cannot write at the same time.

### Question 15
Explain how the reader process works in the readers-writers problem.

**Expected Answer:**
The first reader waits on `rw_mutex` to block writers. Other readers can read together. When the last reader exits, it signals `rw_mutex` so writers can proceed.

### Question 16
What problem is demonstrated by the Dining-Philosophers Problem?

**Expected Answer:**
It demonstrates deadlock risk, where each philosopher holds one fork and waits for another fork held by a neighbor, so no philosopher can eat.

### Question 17
What are common problems with semaphores?

**Expected Answer:**
Incorrect use of semaphore operations, such as wrong order, repeated `wait()`, or omitting `wait()`/`signal()`, can cause deadlock and starvation.

### Question 18
What is a monitor?

**Expected Answer:**
A monitor is a high-level synchronization abstraction where internal variables are accessible only by monitor procedures, and only one process can be active inside the monitor at a time.

---

# Common Mistakes to Avoid

- Writing that concurrency always causes errors. It causes errors only when shared data is accessed unsafely.
- Forgetting that `counter++` and `counter--` are not always atomic.
- Defining race condition without mentioning shared data and execution order.
- Calling the whole program a critical section instead of only the shared-data part.
- Mixing up entry section and exit section.
- Forgetting one of the three critical-section requirements: mutual exclusion, progress, bounded waiting.
- Confusing progress with bounded waiting.
- Saying busy waiting means sleeping. Busy waiting means actively looping.
- Treating Peterson’s solution as a solution for n processes. It is for two processes.
- Treating Bakery Algorithm as hardware-based. It is software-based.
- Saying atomic means fast. Atomic means indivisible/uninterruptible.
- Reversing `wait()` and `signal()` meanings.
- Mixing initial values in bounded buffer: `full = 0`, `empty = n`, `mutex = 1`.
- Saying only one reader can read in readers-writers problem. Multiple readers can read together.
- Forgetting that writer access must be exclusive.
- Ignoring deadlock risk in dining philosophers.
- Assuming semaphores automatically prevent all problems. Wrong semaphore use can cause deadlock and starvation.
- Saying monitors and semaphores are exactly the same. Monitors are higher-level abstractions.

---

# Final One-Page Revision Notes

## Core Idea
Process synchronization prevents data inconsistency when concurrent processes access shared data.

## Key Flow

```text
Concurrent Processes
      ↓
Shared Data Access
      ↓
Race Condition Risk
      ↓
Critical Section Protection
      ↓
Synchronization Mechanisms
```

## Race Condition
A race condition happens when the output depends on the order/timing of concurrent access to shared data.

## Critical Section Structure

```text
do {
    entry section
    critical section
    exit section
    remainder section
} while (true);
```

## Three Requirements

| Requirement | Meaning |
|---|---|
| Mutual Exclusion | Only one process in critical section. |
| Progress | Next process selection cannot be delayed forever. |
| Bounded Waiting | Waiting time/turns must be limited. |

## Solutions

| Type | Solutions |
|---|---|
| Software | Algorithm 1, Algorithm 2, Peterson’s solution, Bakery Algorithm |
| Hardware | Test-and-Set, Swap |
| High-level | Semaphores, Monitors |

## Semaphore Basics

```text
wait(S)   → acquire/decrement
signal(S) → release/increment
```

| Semaphore Type | Meaning |
|---|---|
| Counting semaphore | Integer value over unrestricted range. |
| Binary semaphore | Value only 0 or 1; same as mutex lock. |

## Bounded Buffer Initial Values

```text
mutex = 1
full  = 0
empty = n
```

## Readers-Writers Rules

```text
Many readers together: allowed
Writer + reader: not allowed
Writer + writer: not allowed
```

## Dining Philosophers Risk

```text
All take left fork
      ↓
All wait for right fork
      ↓
No one can eat
      ↓
Deadlock
```

## Monitor
A monitor is a high-level synchronization abstraction. It hides shared variables and allows only one process active inside at a time.

## Must-Use Exam Keywords
- Concurrent execution
- Shared data
- Data inconsistency
- Race condition
- Critical section
- Mutual exclusion
- Progress
- Bounded waiting
- Busy waiting
- Atomic operation
- Semaphore
- wait()
- signal()
- Deadlock
- Starvation
- Monitor
