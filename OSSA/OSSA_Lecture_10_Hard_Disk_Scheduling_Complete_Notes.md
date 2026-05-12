# IT2130 - Operating Systems and System Administration — Lecture 10
## Hard Disk Scheduling in Operating Systems

**Institution:** Sri Lanka Institute of Information Technology  
**Faculty:** Faculty of Computing  
**Module Code:** IT2130  
**Module Name:** Operating Systems and System Administration  
**Lecture Number:** 10  
**Lecture Title:** Hard Disk Scheduling in Operating Systems  
**Lecturer:** Prof. Sanvitha Kasthuriarachchi  
**Degree/Program:** Year 02 and Semester 02  
**Total PDF Pages/Slides:** 24

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture 10 — Hard Disk Scheduling in Operating Systems](#page-02--lecture-10-hard-disk-scheduling-in-operating-systems)
- [Page 03 — Lecture Content](#page-03--lecture-content)
- [Page 04 — Hard Disk (HDD)](#page-04--hard-disk-hdd)
- [Page 05 — Disk Structure](#page-05--disk-structure)
- [Page 06 — Disk Access – Key Components](#page-06--disk-access-key-components)
- [Page 07 — Disk Scheduling](#page-07--disk-scheduling)
- [Page 08 — Why Disk Scheduling](#page-08--why-disk-scheduling)
- [Page 09 — Disk Scheduling (Cont.)](#page-09--disk-scheduling-cont)
- [Page 10 — Disk Scheduling Algorithms](#page-10--disk-scheduling-algorithms)
- [Page 11 — FCFS Algorithm](#page-11--fcfs-algorithm)
- [Page 12 — SSTF Algorithm](#page-12--sstf-algorithm)
- [Page 13 — SCAN / Elevator Algorithm](#page-13--scan-elevator-algorithm)
- [Page 14 — C-SCAN Algorithm](#page-14--c-scan-algorithm)
- [Page 15 — LOOK Scheduling](#page-15--look-scheduling)
- [Page 16 — C-LOOK Algorithm](#page-16--c-look-algorithm)
- [Page 17 — Redundant Array of Independent Disks (RAID)](#page-17--redundant-array-of-independent-disks-raid)
- [Page 18 — RAID 0 – Striping](#page-18--raid-0-striping)
- [Page 19 — RAID 1 – Mirroring](#page-19--raid-1-mirroring)
- [Page 20 — RAID 5 – Striping with Parity](#page-20--raid-5-striping-with-parity)
- [Page 21 — RAID 6 – Double Parity](#page-21--raid-6-double-parity)
- [Page 22 — RAID 10 (1+0) – Striping + Mirroring](#page-22--raid-10-1-0-striping-mirroring)
- [Page 23 — End of Lecture 10](#page-23--end-of-lecture-10)
- [Page 24 — Thank You](#page-24--thank-you)
- [Core Formula and Algorithm Calculations](#core-formula-and-algorithm-calculations)
- [Disk Scheduling Algorithm Comparison](#disk-scheduling-algorithm-comparison)
- [RAID Comparison Table](#raid-comparison-table)
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

Sri Lanka Institute of Information Technology
Faculty of Computing
Prof. Sanvitha Kasthuriarachchi
IT2130 - Operating Systems and System Administration
Year 02 and Semester 02

### Visual Explanation

Title slide with SLIIT, Faculty of Computing, lecturer name, module code/title, and year/semester information.

### Explanation

This page identifies the institution, module, lecturer, and academic context for the lecture. It confirms that the lecture belongs to IT2130 - Operating Systems and System Administration.

### Exam Tip

Use this page to correctly identify the module and lecture context in your notes or report.

### Common Mistake

Do not confuse this OSSA module with Web Technologies or Distributed Systems modules.

---

## Page 02 — Lecture 10 — Hard Disk Scheduling in Operating Systems

### Original Slide Content

Lecture 10
Hard Disk Scheduling in Operating Systems

### Visual Explanation

Lecture title page. No technical diagram is shown.

### Explanation

This lecture focuses on how operating systems handle hard disk access requests efficiently using disk scheduling algorithms and RAID concepts.

### Exam Tip

The main exam topic is hard disk scheduling algorithms and their movement calculations.

### Common Mistake

Do not study only definitions; scheduling algorithm calculations are likely practical/exam material.

---

## Page 03 — Lecture Content

### Original Slide Content

Hard Disk (HDD)
Disk Structure
Disk Access
Disk Scheduling
RAID Structure

### Visual Explanation

Agenda/list of lecture topics.

### Explanation

The lecture moves from hardware basics to access-time concepts, then disk scheduling algorithms, and finally RAID storage structures.

### Exam Tip

Use this as the lecture roadmap: HDD → structure → access time → scheduling → RAID.

### Common Mistake

Do not jump directly to algorithms without understanding seek time and rotational latency.

---

## Page 04 — Hard Disk (HDD)

### Original Slide Content

A hard disk drive is a secondary storage device used to store data permanently in a computer.

Platter
Tracks
Sectors
Read/Write Head
Actuator Arm

### Visual Explanation

No major technical visual on the parsed slide, but the listed terms describe the main physical parts of an HDD.

### Explanation

An HDD stores data permanently, even after power is turned off. Data is stored magnetically on platters. Tracks and sectors organize where data is located. The read/write head moves over the disk surface using an actuator arm.

### Exam Tip

For a definition question, mention that HDD is secondary storage and stores data permanently.

### Common Mistake

Do not call HDD primary memory. RAM is primary memory; HDD is secondary storage.

---

## Page 05 — Disk Structure

### Original Slide Content

Disk Structure

### Visual Explanation

The diagram labels the main HDD structure: spindle, track, sector, cylinder, platter, read-write head, arm assembly, arm, and rotation. It shows multiple platters stacked around a central spindle. Tracks are circular paths on each platter, sectors are smaller divisions of tracks, and a cylinder is the set of tracks aligned vertically across platters.

### Visual/Text Diagram

```text
Hard Disk Structure
├── Spindle: central rotating shaft
├── Platters: circular magnetic disks
│   ├── Tracks: circular paths on platter surface
│   └── Sectors: smaller divisions of tracks
├── Cylinder: same track position across multiple platters
└── Read/Write Head + Actuator Arm: moves to access data
```

### Explanation

The disk structure diagram is important because scheduling algorithms reduce the movement of the read/write head across tracks/cylinders. The head must move to the correct track, wait for the correct sector to rotate under it, then transfer data.

### Exam Tip

In diagram questions, label platter, track, sector, cylinder, spindle, arm, and read/write head.

### Common Mistake

Do not confuse track with sector. A track is a circular path; a sector is a small part of a track.

---

## Page 06 — Disk Access – Key Components

### Original Slide Content

Seek Time
The time taken for the disk head to move to the required track (cylinder).

Rotational Latency
The time taken for the disk to rotate so that the required sector comes under the read/write head.

Transfer Time
The time taken to read or write the data once the head is in the correct position.

Total Disk Access Time

Taccess = Tseek time + Trotational latency + Ttransfer time

### Visual Explanation

The slide is text-based and presents the total disk access time formula.

### Formula

```text
Taccess = Tseek time + Trotational latency + Ttransfer time
```

### Explanation

Disk access is not instant. The head first moves to the correct track, then waits for the disk to rotate to the correct sector, then reads/writes the actual data. Disk scheduling mainly tries to reduce seek time because head movement is expensive.

### Exam Tip

Memorize the formula: access time = seek time + rotational latency + transfer time.

### Common Mistake

Do not say access time is only transfer time. Seek time and rotational latency are also included.

---

## Page 07 — Disk Scheduling

### Original Slide Content

Disk scheduling is the method used by the operating system to decide the order in which disk read/write requests are serviced.

The main goal is to reduce disk access time and improve overall system performance.

### Visual Explanation

No major visual content.

### Explanation

When many processes request disk access, the OS must decide which request to serve first. A good order reduces unnecessary head movement and improves performance.

### Exam Tip

For definitions, include “order of disk read/write requests”, “reduce access time”, and “improve performance”.

### Common Mistake

Do not define disk scheduling as CPU scheduling. It is specifically about disk I/O request order.

---

## Page 08 — Why Disk Scheduling

### Original Slide Content

In an operating system, multiple processes often request access to the disk at the same time. These requests are placed in a queue, waiting to be processed.

If the system services these requests inefficiently, the disk head will move unnecessarily, increasing access time and slowing down overall system performance. Therefore, disk scheduling algorithms are used to optimize the order of requests and improve speed.

### Visual Explanation

No major visual content.

### Explanation

The core problem is unnecessary disk-head movement. If requests are handled badly, the head jumps back and forth across the disk. Scheduling algorithms arrange requests to reduce movement.

### Exam Tip

In an essay, write the problem first: multiple I/O requests create a queue; inefficient servicing increases head movement.

### Common Mistake

Do not say disk scheduling improves CPU speed directly. It improves disk I/O performance and overall system responsiveness.

---

## Page 09 — Disk Scheduling (Cont.)

### Original Slide Content

Note that drive controllers have small buffers and can manage a queue of I/O requests (of varying “depth”)

Several algorithms exist to schedule the servicing of disk I/O requests

The analysis is true for one or many platters

We illustrate scheduling algorithms with a request queue (0–199)

98, 183, 37, 122, 14, 124, 65, 67

Head pointer 53

### Visual Explanation

This slide provides the common example used for all scheduling algorithm diagrams. Cylinder range is 0–199, request queue is 98, 183, 37, 122, 14, 124, 65, 67, and initial head position is 53.

### Explanation

All following algorithm diagrams use the same request queue so that their head movements can be compared fairly. The goal is to calculate the order of service and total head movement.

### Exam Tip

Write the initial queue and head position before calculating any algorithm.

### Common Mistake

Do not sort the queue automatically unless the algorithm requires it.

---

## Page 10 — Disk Scheduling Algorithms

### Original Slide Content

FCFS Algorithm
SSTF Algorithm
SCAN Algorithm
C-SCAN Algorithm
LOOK Algorithm
C-LOOK Algorithm

### Visual Explanation

No major visual content. It lists the six scheduling algorithms covered.

### Explanation

The lecture compares six algorithms. FCFS follows arrival order, SSTF chooses nearest request, SCAN/C-SCAN move like an elevator, and LOOK/C-LOOK are optimized versions that only go as far as the furthest request.

### Exam Tip

Prepare comparison answers for all six algorithms.

### Common Mistake

Do not confuse SCAN with LOOK. SCAN goes to disk end; LOOK only goes to last request.

---

## Page 11 — FCFS Algorithm

### Original Slide Content

The scheduling algorithm with a request queue (0–199)

queue = 98, 183, 37, 122, 14, 124, 65, 67
head starts at 53

### Visual Explanation

The diagram shows the head starting at 53 and visiting requests exactly in queue order: 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67. The arrow path jumps back and forth because no optimization is applied.

### Algorithm Movement Example

```text
Service path: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67
Total head movement: |98-53| + |183-98| + |37-183| + |122-37| + |14-122| + |124-14| + |65-124| + |67-65| = 532 cylinders
```

### Explanation

FCFS means First-Come, First-Served. It is simple and fair because requests are handled in arrival order, but it can cause large unnecessary head movement.

### Exam Tip

For FCFS, never reorder the queue. Total movement is calculated in the given order.

### Common Mistake

Do not sort FCFS requests. That would become a different algorithm.

---

## Page 12 — SSTF Algorithm

### Original Slide Content

The scheduling algorithm with a request queue (0–199)

queue = 98, 183, 37, 122, 14, 124, 65, 67
head starts at 53

### Visual Explanation

The diagram shows SSTF selecting the request closest to the current head position each time. From 53, nearest requests are chosen step by step, reducing short-term movement.

### Algorithm Movement Example

```text
Service path: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183
Total head movement: 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236 cylinders
```

### Explanation

SSTF means Shortest Seek Time First. It selects the request with the smallest distance from the current head position. It usually reduces total head movement compared with FCFS, but requests far away may wait too long.

### Exam Tip

At every step, recalculate the nearest remaining request from the current head position.

### Common Mistake

Do not choose nearest from the original head every time; choose nearest from the current head after each movement.

---

## Page 13 — SCAN / Elevator Algorithm

### Original Slide Content

The scheduling algorithm with a request queue (0–199)

queue = 98, 183, 37, 122, 14, 124, 65, 67
head starts at 53, and initially moving to the left direction

### Visual Explanation

The diagram shows the disk head moving left first from 53, servicing requests on the way, reaching the lower end, then reversing direction and servicing requests to the right. This behavior is similar to an elevator.

### Algorithm Movement Example

```text
Service path: 53 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183
Total head movement: 16 + 23 + 14 + 65 + 2 + 31 + 24 + 2 + 59 = 236 cylinders
```

### Explanation

SCAN moves in one direction, services all requests in that direction, reaches the end of the disk, reverses, and services the other side. It reduces back-and-forth jumping and gives more uniform waiting time than FCFS.

### Exam Tip

For SCAN, direction matters. Also include movement to the end of the disk before reversing.

### Common Mistake

Do not stop at the last request for SCAN; that is LOOK, not SCAN.

---

## Page 14 — C-SCAN Algorithm

### Original Slide Content

The scheduling algorithm with a request queue (0–199)

queue = 98, 183, 37, 122, 14, 124, 65, 67
head starts at 53 and previously it was at 36.

### Visual Explanation

The diagram shows the head moving in one direction only. Because the previous position was 36 and current head is 53, the direction is right. The head services requests to the right, reaches the end, jumps to the beginning, and continues servicing from the left side.

### Algorithm Movement Example

```text
Service path: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37
Total head movement: 12 + 2 + 31 + 24 + 2 + 59 + 16 + 199 + 14 + 23 = 382 cylinders
```

### Explanation

C-SCAN means Circular SCAN. It treats disk cylinders like a circular list. It services in one direction only, then jumps back to the beginning without servicing during the return. This gives more uniform waiting time.

### Exam Tip

Use previous head position to infer direction. Since 36 → 53, the head is moving right.

### Common Mistake

Do not reverse and service on the way back in C-SCAN. That is SCAN behavior.

---

## Page 15 — LOOK Scheduling

### Original Slide Content

The scheduling algorithm with a request queue (0–199)

queue = 98, 183, 37, 122, 14, 124, 65, 67
head starts at 53 and the direction is right.

### Visual Explanation

The diagram shows the head moving right first, servicing right-side requests until the last request in that direction, then reversing to service left-side requests. It does not go all the way to cylinder 199 unless needed.

### Algorithm Movement Example

```text
Service path: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14
Total head movement: 12 + 2 + 31 + 24 + 2 + 59 + 146 + 23 = 299 cylinders
```

### Explanation

LOOK is like SCAN but smarter. It looks ahead and only travels as far as the furthest request in the current direction, then reverses. It avoids unnecessary movement to the physical end of the disk.

### Exam Tip

For LOOK, stop at the last pending request in the direction, not at disk boundary.

### Common Mistake

Do not include movement to 199 unless there is a request at 199.

---

## Page 16 — C-LOOK Algorithm

### Original Slide Content

The scheduling algorithm with a request queue (0–199)

queue = 98, 183, 37, 122, 14, 124, 65, 67
head starts at 53 and the direction is right.

### Visual Explanation

The diagram shows the head moving right, servicing requests until the largest request, then jumping to the smallest request and continuing in the same rightward direction. It does not go to disk ends 0 or 199 unless those are actual requests.

### Algorithm Movement Example

```text
Service path: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 14 → 37
Total head movement: 12 + 2 + 31 + 24 + 2 + 59 + 169 + 23 = 322 cylinders
```

### Explanation

C-LOOK is the circular version of LOOK. It only services in one direction and jumps from the last request to the first request without traveling to the physical disk boundary.

### Exam Tip

For C-LOOK, visit requests in one direction, jump to the smallest pending request, then continue.

### Common Mistake

Do not go to 199 and 0 in C-LOOK; that is C-SCAN behavior.

---

## Page 17 — Redundant Array of Independent Disks (RAID)

### Original Slide Content

RAID is a storage technology that combines multiple physical hard disks into a single logical unit to improve:
Performance (speed)
Reliability (fault tolerance)
Storage capacity

It allows data to be stored across multiple disks using techniques like striping, mirroring, and parity.

### Visual Explanation

No major visual content. The slide introduces RAID and its goals.

### Explanation

RAID combines disks so the system sees them as one logical storage unit. Depending on RAID level, the goal can be speed, reliability, capacity, or a balance of these.

### Exam Tip

Define RAID using the phrase “multiple physical disks into one logical unit”.

### Common Mistake

Do not say every RAID level gives fault tolerance. RAID 0 has no fault tolerance.

---

## Page 18 — RAID 0 – Striping

### Original Slide Content

Data is divided into blocks and distributed across multiple disks
Each disk stores part of the data, allowing parallel access

Advantages:
Very high read/write performance
Full use of total disk capacity

Disadvantages:
No fault tolerance
If one disk fails, all data is lost

### Visual Explanation

No major visual content in the parsed page. Conceptually, data blocks are split across disks.

### Explanation

RAID 0 improves speed by striping data across disks. Multiple disks can read/write parts of the data in parallel. The weakness is reliability: if one disk fails, the full data set becomes unusable.

### Exam Tip

RAID 0 = striping = high performance + no fault tolerance.

### Common Mistake

Do not choose RAID 0 for critical data unless backups exist.

---

## Page 19 — RAID 1 – Mirroring

### Original Slide Content

Data is duplicated on two or more disks
Each disk contains an exact copy of the data

Advantages:
High reliability and data protection
Easy data recovery if one disk fails

Disadvantages:
Requires double storage capacity
Higher cost

### Visual Explanation

No major visual content in the parsed page. Conceptually, the same data is copied to multiple disks.

### Explanation

RAID 1 protects data by mirroring. If one disk fails, another disk still has a complete copy. The cost is reduced usable capacity because storage is duplicated.

### Exam Tip

RAID 1 = mirroring = high reliability + 50% usable capacity in two-disk setup.

### Common Mistake

Do not say RAID 1 improves capacity. It sacrifices capacity for reliability.

---

## Page 20 — RAID 5 – Striping with Parity

### Original Slide Content

Data and parity information are distributed across all disks
Parity is used to reconstruct data if one disk fails

Advantages:
Good balance between performance and reliability
Efficient use of storage (less overhead than RAID 1)

Disadvantages:
Write operations are slower due to parity calculation
Can only tolerate one disk failure

### Visual Explanation

No major visual content in the parsed page. Conceptually, data blocks and parity blocks are distributed across disks.

### Explanation

RAID 5 combines striping with parity. Parity lets the system reconstruct missing data if one disk fails. It is efficient compared to mirroring, but writes are slower because parity must be calculated.

### Exam Tip

RAID 5 = striping + distributed parity + one disk failure tolerance.

### Common Mistake

Do not say RAID 5 can survive two disk failures. That is RAID 6.

---

## Page 21 — RAID 6 – Double Parity

### Original Slide Content

Similar to RAID 5 but uses two parity blocks
Can recover data even if two disks fail

Advantages:
Very high fault tolerance
Suitable for large storage systems

Disadvantages:
Slower write performance than RAID 5
More storage overhead

### Visual Explanation

No major visual content in the parsed page. Conceptually, RAID 6 adds a second parity layer.

### Explanation

RAID 6 is like RAID 5 but safer. It stores two parity blocks, so it can tolerate two disk failures. The tradeoff is slower writes and more storage overhead.

### Exam Tip

RAID 6 = RAID 5 + double parity + two disk failure tolerance.

### Common Mistake

Do not ignore write penalty; RAID 6 writes are slower than RAID 5.

---

## Page 22 — RAID 10 (1+0) – Striping + Mirroring

### Original Slide Content

Combines RAID 1 (mirroring) and RAID 0 (striping)
Data is mirrored first, then striped across disks

Advantages:
Very high performance
High fault tolerance
Fast recovery

Disadvantages:
Requires many disks
Expensive (50% storage overhead)

### Visual Explanation

The diagram shows RAID 1+0 with disk pairs mirrored and data striped across those mirror groups. It also indicates a single disk failure scenario where data can still survive because the mirror copy remains available.

### Explanation

RAID 10 combines RAID 1 and RAID 0. Mirroring provides reliability, and striping provides performance. It is powerful but expensive because only about half of raw capacity is usable.

### Exam Tip

RAID 10 = mirroring + striping; high speed and high fault tolerance, but costly.

### Common Mistake

Do not confuse RAID 10 with RAID 01. RAID 10 mirrors first, then stripes across mirror pairs.

---

## Page 23 — End of Lecture 10

### Original Slide Content

End of Lecture 10

### Visual Explanation

Closing slide indicating the lecture content has ended.

### Explanation

This marks the end of the technical content for Lecture 10.

### Exam Tip

No exam content here except confirming lecture boundary.

### Common Mistake

No major common mistake.

---

## Page 24 — Thank You

### Original Slide Content

Thank You

### Visual Explanation

Final thank-you slide.

### Explanation

This is the final closing slide.

### Exam Tip

No exam content here.

### Common Mistake

No major common mistake.

---

# Core Formula and Algorithm Calculations

## Total Disk Access Time

```text
Taccess = Tseek time + Trotational latency + Ttransfer time
```

| Component | Meaning | What It Affects |
|---|---|---|
| Seek Time | Time for head to move to required track/cylinder | Most affected by scheduling |
| Rotational Latency | Time until required sector rotates under head | Depends on disk rotation speed |
| Transfer Time | Time to read/write after head is positioned | Depends on data size and transfer rate |

## Common Example Used in Lecture

```text
Cylinder range: 0–199
Request queue: 98, 183, 37, 122, 14, 124, 65, 67
Initial head pointer: 53
```

| Algorithm | Service Order | Total Head Movement | Key Idea |
|---|---|---:|---|

| FCFS | 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67 | 532 | Serve in arrival order |
| SSTF | 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183 | 236 | Always serve nearest request |
| SCAN | 53 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183 | 236 | Move to disk end, reverse direction |
| C-SCAN | 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37 | 382 | Move one direction, wrap to start |
| LOOK | 53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14 | 299 | Like SCAN but stops at last request |
| C-LOOK | 53 → 65 → 67 → 98 → 122 → 124 → 183 → 14 → 37 | 322 | Like C-SCAN but wraps between requests |

# Disk Scheduling Algorithm Comparison

| Algorithm | Main Rule | Advantages | Disadvantages | Best Exam Keyword |
|---|---|---|---|---|

| FCFS | Serve requests in arrival order | Simple, fair, no starvation | Poor performance; high head movement | Arrival order |
| SSTF | Serve nearest request first | Low average seek time | Can starve far requests | Shortest seek |
| SCAN | Move like elevator to disk end then reverse | More uniform than SSTF | May travel to disk end unnecessarily | Elevator |
| C-SCAN | Move in one direction, jump to beginning | Uniform waiting time | Long wrap-around movement | Circular scan |
| LOOK | Move like SCAN but only to last request | Avoids unnecessary end movement | Direction still affects result | Look ahead |
| C-LOOK | Circular LOOK between actual requests | Avoids physical disk ends | Jump cost may be high | Circular look |

# RAID Comparison Table

| RAID Level | Technique | Fault Tolerance | Performance | Storage Cost/Overhead | Main Weakness |
|---|---|---|---|---|---|

| RAID 0 | Striping | None | Very high | Full capacity usable | One disk failure loses all data |
| RAID 1 | Mirroring | High | Good reads; writes duplicated | About 50% usable in two-disk setup | Higher cost/double storage |
| RAID 5 | Striping with distributed parity | One disk failure | Good balance | Less overhead than mirroring | Slower writes due to parity |
| RAID 6 | Double parity | Two disk failures | Good reads; slower writes | More overhead than RAID 5 | Write penalty and overhead |
| RAID 10 | Mirroring + striping | High | Very high | 50% storage overhead | Expensive; requires many disks |

# Full Lecture Summary

Lecture 10 explains how hard disks work and how operating systems schedule disk I/O requests to improve performance. A hard disk drive is secondary storage used for permanent data storage. Its main physical parts include platters, tracks, sectors, cylinders, the spindle, read/write heads, actuator arm, and arm assembly. The disk head must move to the correct track, wait for the correct sector to rotate under it, then read or write data. Therefore, total disk access time is made of seek time, rotational latency, and transfer time.

Disk scheduling is needed because multiple processes may request disk access at the same time. These requests form a queue. If handled inefficiently, the disk head moves unnecessarily, increasing access time. Disk scheduling algorithms optimize the order of requests to reduce head movement and improve system performance.

The lecture uses one common example: cylinders 0–199, request queue 98, 183, 37, 122, 14, 124, 65, 67, and initial head pointer 53. FCFS serves requests exactly in queue order and is simple but inefficient. SSTF chooses the nearest request each time and reduces movement but may starve far requests. SCAN moves like an elevator to one end then reverses. C-SCAN moves in one direction and jumps back to the start. LOOK is like SCAN but stops at the last request instead of the disk end. C-LOOK is like C-SCAN but only jumps between actual request extremes.

The lecture ends with RAID. RAID combines multiple physical disks into one logical unit to improve speed, reliability, and/or capacity. RAID 0 uses striping for high performance but has no fault tolerance. RAID 1 uses mirroring for reliability but needs extra storage. RAID 5 uses striping with parity and tolerates one disk failure. RAID 6 uses double parity and tolerates two disk failures. RAID 10 combines mirroring and striping for high performance and high fault tolerance, but it is expensive and has 50% storage overhead.

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| Hard Disk Drive (HDD) | Secondary storage device used to store data permanently | Laptop/desktop hard drive |
| Platter | Circular magnetic disk surface where data is stored | Stacked disk surface inside HDD |
| Track | Circular path on a platter | Track 53 |
| Sector | Small division of a track | Sector containing part of a file |
| Cylinder | Same track position across multiple platters | Aligned tracks on disk stack |
| Read/Write Head | Device that reads/writes data from/to platter | Head moves to track 98 |
| Actuator Arm | Arm that moves the read/write head | Moves head across tracks |
| Seek Time | Time for head to move to required track | Move from cylinder 53 to 98 |
| Rotational Latency | Time waiting for required sector to rotate under head | Waiting for sector to arrive |
| Transfer Time | Time to read/write data after positioning | Writing file block |
| Disk Scheduling | OS method for ordering disk I/O requests | FCFS, SSTF, SCAN |
| FCFS | First-Come, First-Served disk scheduling | Serve 98 then 183 then 37 |
| SSTF | Shortest Seek Time First | From 53 choose 65 |
| SCAN | Elevator algorithm that moves to disk end and reverses | 53 → 37 → 14 → 0 → ... |
| C-SCAN | Circular SCAN, services one direction and wraps | ... → 199 → 0 → ... |
| LOOK | SCAN variant stopping at last request | Stops at 183, not 199 |
| C-LOOK | Circular LOOK between actual request extremes | 183 → 14 jump |
| RAID | Multiple disks combined into one logical unit | RAID 5 storage array |
| Striping | Splitting data blocks across disks | RAID 0 |
| Mirroring | Duplicating data across disks | RAID 1 |
| Parity | Extra information used to reconstruct failed disk data | RAID 5/6 |

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| HDD definition | Permanent secondary storage | 04 |
| Disk structure | Platter, track, sector, cylinder, head, arm | 05 |
| Disk access time | Seek + rotational latency + transfer | 06 |
| Disk scheduling | Orders disk requests to reduce access time | 07-10 |
| FCFS | No reordering; arrival order | 11 |
| SSTF | Nearest request first | 12 |
| SCAN | Elevator; goes to end then reverses | 13 |
| C-SCAN | One direction; wraps around | 14 |
| LOOK | SCAN without unnecessary disk-end travel | 15 |
| C-LOOK | C-SCAN without physical disk-end travel | 16 |
| RAID | Combines disks for speed/reliability/capacity | 17 |
| RAID levels | 0 striping, 1 mirroring, 5 parity, 6 double parity, 10 striping+mirroring | 18-22 |

# Important Code Snippets

No programming code snippets are present in this lecture. The important technical content is formula-based and algorithm-calculation-based.

## Important Formula

```text
Taccess = Tseek time + Trotational latency + Ttransfer time
```

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 05 | Disk Structure | The diagram labels the main HDD structure: spindle, track, sector, cylinder, platter, read-write head, arm assembly, arm, and rotation. It shows multiple platters stacked around a central spindle. Tracks are circular paths on each platter, sectors are smaller divisions of tracks, and a cylinder is the set of tracks aligned vertically across platters. |
| 11 | FCFS Algorithm | The diagram shows the head starting at 53 and visiting requests exactly in queue order: 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67. The arrow path jumps back and forth because no optimization is applied. |
| 12 | SSTF Algorithm | The diagram shows SSTF selecting the request closest to the current head position each time. From 53, nearest requests are chosen step by step, reducing short-term movement. |
| 13 | SCAN / Elevator Algorithm | The diagram shows the disk head moving left first from 53, servicing requests on the way, reaching the lower end, then reversing direction and servicing requests to the right. This behavior is similar to an elevator. |
| 14 | C-SCAN Algorithm | The diagram shows the head moving in one direction only. Because the previous position was 36 and current head is 53, the direction is right. The head services requests to the right, reaches the end, jumps to the beginning, and continues servicing from the left side. |
| 15 | LOOK Scheduling | The diagram shows the head moving right first, servicing right-side requests until the last request in that direction, then reversing to service left-side requests. It does not go all the way to cylinder 199 unless needed. |
| 16 | C-LOOK Algorithm | The diagram shows the head moving right, servicing requests until the largest request, then jumping to the smallest request and continuing in the same rightward direction. It does not go to disk ends 0 or 199 unless those are actual requests. |
| 22 | RAID 10 (1+0) – Striping + Mirroring | The diagram shows RAID 1+0 with disk pairs mirrored and data striped across those mirror groups. It also indicates a single disk failure scenario where data can still survive because the mirror copy remains available. |

# Likely Exam Questions and Short Answers

## Question 1
Define a hard disk drive.

**Expected Answer:** A hard disk drive is a secondary storage device used to store data permanently in a computer.

## Question 2
List the main physical components of an HDD.

**Expected Answer:** Platter, tracks, sectors, read/write head, actuator arm, spindle, and cylinder.

## Question 3
What is seek time?

**Expected Answer:** Seek time is the time taken for the disk head to move to the required track or cylinder.

## Question 4
Write the total disk access time formula.

**Expected Answer:** Taccess = Tseek time + Trotational latency + Ttransfer time.

## Question 5
Define disk scheduling.

**Expected Answer:** Disk scheduling is the OS method of deciding the order in which disk read/write requests are serviced.

## Question 6
Why is disk scheduling needed?

**Expected Answer:** It reduces unnecessary disk-head movement, decreases access time, and improves overall system performance.

## Question 7
Explain FCFS disk scheduling.

**Expected Answer:** FCFS services disk requests in the order they arrive. It is simple and fair but may produce high total head movement.

## Question 8
Explain SSTF disk scheduling.

**Expected Answer:** SSTF services the request closest to the current head position. It reduces seek time but can cause starvation.

## Question 9
Explain SCAN algorithm.

**Expected Answer:** SCAN moves the disk head in one direction servicing requests until the disk end, then reverses direction.

## Question 10
Differentiate SCAN and LOOK.

**Expected Answer:** SCAN goes to the physical disk end before reversing. LOOK reverses at the last request in that direction.

## Question 11
Differentiate C-SCAN and C-LOOK.

**Expected Answer:** C-SCAN goes to disk end and wraps to beginning. C-LOOK wraps from highest request to lowest request without going to physical ends.

## Question 12
What is RAID?

**Expected Answer:** RAID combines multiple physical disks into one logical unit to improve performance, reliability, and/or storage capacity.

## Question 13
Explain RAID 0.

**Expected Answer:** RAID 0 uses striping for high read/write performance and full capacity use, but it has no fault tolerance.

## Question 14
Explain RAID 1.

**Expected Answer:** RAID 1 uses mirroring where data is duplicated across disks for reliability, but it requires extra storage capacity.

## Question 15
Explain RAID 5.

**Expected Answer:** RAID 5 uses striping with distributed parity and can tolerate one disk failure.

## Question 16
Explain RAID 6.

**Expected Answer:** RAID 6 uses double parity and can tolerate two disk failures, but write performance is slower.

## Question 17
Explain RAID 10.

**Expected Answer:** RAID 10 combines RAID 1 mirroring and RAID 0 striping for high performance and fault tolerance, but it is expensive.

# Common Mistakes to Avoid

- Confusing track and sector.
- Forgetting rotational latency and transfer time in total disk access time.
- Treating disk scheduling as CPU scheduling.
- Sorting FCFS requests; FCFS must follow arrival order.
- Choosing nearest request in SSTF from the original head every time instead of the current head.
- Confusing SCAN with LOOK.
- Confusing C-SCAN with C-LOOK.
- Forgetting that direction matters for SCAN, C-SCAN, LOOK, and C-LOOK.
- Saying RAID 0 has fault tolerance. It does not.
- Saying RAID 5 tolerates two disk failures. RAID 5 tolerates only one.
- Ignoring RAID write penalties caused by parity calculation.
- Confusing RAID 10 with only RAID 0 or only RAID 1.

# Final One-Page Revision Notes

```text
HDD = permanent secondary storage
Disk structure = platter + track + sector + cylinder + read/write head + actuator arm
Access time = seek time + rotational latency + transfer time
Disk scheduling goal = reduce head movement and improve performance

Common request queue:
98, 183, 37, 122, 14, 124, 65, 67
Head starts at 53, cylinders 0–199

FCFS  = arrival order
SSTF  = nearest request first
SCAN  = elevator to disk end, reverse
C-SCAN = one direction to end, jump to start
LOOK  = SCAN but stops at last request
C-LOOK = C-SCAN but jumps between actual request extremes

RAID 0  = striping, fast, no fault tolerance
RAID 1  = mirroring, reliable, expensive capacity
RAID 5  = striping + parity, tolerates 1 disk failure
RAID 6  = double parity, tolerates 2 disk failures
RAID 10 = RAID 1 + RAID 0, fast + reliable, expensive
```

## Must-Write Keywords in Exam Answers
- Secondary storage
- Permanent storage
- Seek time
- Rotational latency
- Transfer time
- Disk I/O request queue
- Head movement
- Service order
- Fault tolerance
- Striping
- Mirroring
- Parity

## Execution Checklist
- [ ] Memorize HDD components.
- [ ] Memorize disk access time formula.
- [ ] Practice FCFS calculation.
- [ ] Practice SSTF nearest-request selection.
- [ ] Practice SCAN and LOOK difference.
- [ ] Practice C-SCAN and C-LOOK difference.
- [ ] Memorize RAID level comparison.
- [ ] Write short exam answers using exact technical keywords.
