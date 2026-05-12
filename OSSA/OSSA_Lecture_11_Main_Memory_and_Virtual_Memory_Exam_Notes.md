# IT2130 - Operating Systems and System Administration — Lecture 11
## Main Memory and Virtual Memory Management in Operating System

**Institution:** Sri Lanka Institute of Information Technology (SLIIT)  
**Faculty:** Faculty of Computing  
**Module Code:** IT2130  
**Module Name:** Operating Systems and System Administration  
**Lecture:** Lecture 11  
**Lecture Title:** Main Memory and Virtual Memory Management in Operating System  
**Lecturer:** Prof. Sanvitha Kasthuriarachchi  
**Year/Semester:** Year 02 and Semester 02  
**Uploaded PDF pages:** 39 pages  
**Original lecture footer numbering:** 1 / 41 to 41 / 41. The uploaded PDF contains 39 rendered pages; footer numbers 36 and 38 are not present in the extracted page sequence.

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture 11 Title](#page-02--lecture-11-title)
- [Page 03 — Content](#page-03--content)
- [Page 04 — Main Memory](#page-04--main-memory)
- [Page 05 — Main Memory Cont.](#page-05--main-memory-cont)
- [Page 06 — Why Main Memory](#page-06--why-main-memory)
- [Page 07 — What OS Does for Memory Management](#page-07--what-os-does-for-memory-management)
- [Page 08 — Memory Capacity from Address Bits](#page-08--memory-capacity-from-address-bits)
- [Page 09 — Address Binding](#page-09--address-binding)
- [Page 10 — Logical vs Physical Address Space](#page-10--logical-vs-physical-address-space)
- [Page 11 — Swapping](#page-11--swapping)
- [Page 12 — Contiguous Allocation](#page-12--contiguous-allocation)
- [Page 13 — Contiguous Allocation Cont.](#page-13--contiguous-allocation-cont)
- [Page 14 — Multiple-Partition Allocation](#page-14--multiple-partition-allocation)
- [Page 15 — Dynamic Storage-Allocation Problem](#page-15--dynamic-storage-allocation-problem)
- [Page 16 — Fragmentation](#page-16--fragmentation)
- [Page 17 — External Fragmentation and Compaction](#page-17--external-fragmentation-and-compaction)
- [Page 18 — External Fragmentation and Paging](#page-18--external-fragmentation-and-paging)
- [Page 19 — External Fragmentation and Paging Cont.](#page-19--external-fragmentation-and-paging-cont)
- [Page 20 — Address Translation Scheme](#page-20--address-translation-scheme)
- [Page 21 — Paging Hardware](#page-21--paging-hardware)
- [Page 22 — Free Frames](#page-22--free-frames)
- [Page 23 — Paging Hardware With Associative Memory TLB](#page-23--paging-hardware-with-associative-memory-tlb)
- [Page 24 — Effective Access Time](#page-24--effective-access-time)
- [Page 25 — Memory Protection](#page-25--memory-protection)
- [Page 26 — Valid or Invalid Bit in a Page Table](#page-26--valid-or-invalid-bit-in-a-page-table)
- [Page 27 — Demand Paging](#page-27--demand-paging)
- [Page 28 — Page Faults](#page-28--page-faults)
- [Page 29 — Steps in Handling a Page Fault](#page-29--steps-in-handling-a-page-fault)
- [Page 30 — If No Free Frames in RAM](#page-30--if-no-free-frames-in-ram)
- [Page 31 — Page Replacement](#page-31--page-replacement)
- [Page 32 — Page-Replacement Algorithms](#page-32--page-replacement-algorithms)
- [Page 33 — First-In-First-Out FIFO Algorithm](#page-33--first-in-first-out-fifo-algorithm)
- [Page 34 — FIFO Example With 3 and 4 Frames](#page-34--fifo-example-with-3-and-4-frames)
- [Page 35 — Optimal Page Replacement Algorithm OPT](#page-35--optimal-page-replacement-algorithm-opt)
- [Page 36 — Least Recently Used LRU Algorithm](#page-36--least-recently-used-lru-algorithm)
- [Page 37 — Page-Buffering Algorithms](#page-37--page-buffering-algorithms)
- [Page 38 — End of Lecture 11](#page-38--end-of-lecture-11)
- [Page 39 — Thank You](#page-39--thank-you)
- [Key Definitions](#key-definitions)
- [Important Formulae and Worked Calculations](#important-formulae-and-worked-calculations)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Lecture Notes

## Page 01 — Title Page

### Original Slide Content

- Sri Lanka Institute of Information Technology
- Faculty of Computing
- Prof. Sanvitha Kasthuriarachchi
- IT2130 - Operating Systems and System Administration
- Year 02 and Semester 02

### Visual Explanation

The slide is a formal module title slide. It identifies the institution, faculty, lecturer, module code, module name, and semester context.

### Explanation

This slide tells you the lecture belongs to **Operating Systems and System Administration**. The exact topic starts on the next slide.

### Exam Tip

No direct theory question usually comes from this slide, but always write the module terminology correctly: **Operating Systems and System Administration**.

### Common Mistake

No major common mistake.

---

## Page 02 — Lecture 11 Title

### Original Slide Content

**Lecture 11**  
**Main Memory and Virtual Memory Management in Operating System**

### Visual Explanation

The slide introduces the lecture topic. The key area is memory management: how the OS organizes RAM, maps addresses, handles paging, handles page faults, and uses virtual memory.

### Explanation

This lecture focuses on how an operating system manages memory so that processes can run safely and efficiently. Main memory refers to RAM. Virtual memory allows programs to behave as if more memory is available than physical RAM.

### Exam Tip

This topic is very exam-friendly. Expect written questions on:

- main memory
- logical vs physical addresses
- fragmentation
- paging
- page tables
- TLB
- demand paging
- page faults
- FIFO, OPT, and LRU page replacement

### Common Mistake

Do not treat **main memory** and **virtual memory** as the same thing. Main memory is physical RAM; virtual memory is an abstraction managed by the OS.

---

## Page 03 — Content

### Original Slide Content

- Main memory concept
- Why main memory
- Address binding
- Contiguous Memory Allocation
- Fragmentation
- Paging

### Visual Explanation

The slide lists the lecture flow. It begins with basic memory concepts, then moves into allocation and paging.

### Explanation

The lecture order is logical:

1. Understand what main memory is.
2. Understand why CPU needs programs in memory.
3. Understand how addresses are assigned.
4. Understand contiguous memory allocation.
5. Understand fragmentation problems.
6. Understand paging as a solution.

### Visual/Text Diagram

```text
Main Memory
   ↓
Address Binding
   ↓
Contiguous Allocation
   ↓
Fragmentation Problem
   ↓
Paging Solution
   ↓
Virtual Memory + Page Replacement
```

### Exam Tip

A strong essay answer should follow this same flow: define memory, explain address mapping, explain allocation, explain fragmentation, then paging.

### Common Mistake

Students jump directly to page replacement without explaining paging basics. That makes answers weak.

---

## Page 04 — Main Memory

### Original Slide Content

- Memory is a large array of words or bytes, each with its own address.
- It is a repository of quickly accessible data shared by CPU and I/O devices.
- Memory and registers are the only storage that CPU can directly access.

### Visual Explanation

The slide shows a simple relationship:

```text
CPU  <──>  Memory  <──>  I/O
```

The visual means memory acts as the central working area between the CPU and I/O devices.

### Explanation

Main memory is RAM. The CPU cannot directly execute programs from the hard disk. It directly accesses only:

- CPU registers
- main memory

A program must be loaded into memory before execution. Each memory location has an address, similar to a house number.

### Visual/Text Diagram

```text
CPU Register  ← fastest, smallest
Main Memory   ← directly accessed by CPU
Hard Disk     ← not directly executed by CPU
```

### Exam Tip

Use these keywords in answers:

- array of bytes/words
- each location has an address
- quickly accessible
- shared by CPU and I/O
- CPU directly accesses only registers and memory

### Common Mistake

Do not say the CPU directly accesses the hard disk to execute instructions. The CPU needs instructions/data in memory.

---

## Page 05 — Main Memory Cont.

### Original Slide Content

- Main memory is a volatile storage device. It loses its contents in the case of system failure.
- A program must be mapped to absolute addresses and loaded into memory.
- Main memory is usually divided into two partitions:
  - **Kernel memory area:** Resident operating system, PCBs, System calls usually held in low memory.
  - **User memory area:** User processes are in here. It is the high memory.

### Visual Explanation

No major visual content.

### Explanation

Main memory is **volatile**, meaning data disappears when power fails. It is not permanent storage like a hard disk or SSD.

Memory is divided into:

| Memory Area | Contains | Purpose |
|---|---|---|
| Kernel memory area | OS kernel, PCBs, system call code | Protected OS area |
| User memory area | User processes/programs | Area where applications run |

### Visual/Text Diagram

```text
Main Memory
├── Low Memory
│   └── Kernel memory area
│       ├── Operating system
│       ├── PCBs
│       └── System calls
└── High Memory
    └── User memory area
        ├── Process A
        ├── Process B
        └── Process C
```

### Exam Tip

For short questions, define **volatile memory** and explain **kernel/user memory separation**.

### Common Mistake

Do not say user programs can freely access kernel memory. Kernel memory is protected.

---

## Page 06 — Why Main Memory

### Original Slide Content

- Main memory and registers are the only storage CPU can access.
- From the hard disk the programs must be taken into the main memory prior to beginning the execution.

### Visual Explanation

The visual shows:

```text
CPU  ↔  RAM (Primary Memory)  ↔  Hard Disk Drive (Secondary Storage)
```

It explains that programs stored on the hard disk must be loaded into RAM before the CPU can execute them.

### Explanation

Hard disk/SSD is for storage. RAM is for active execution. When you launch a program, the OS copies required parts of the program from secondary storage into RAM.

### Visual/Text Diagram

```text
Program stored on disk
        ↓ loaded by OS
Main memory / RAM
        ↓ instructions fetched by CPU
CPU executes program
```

### Exam Tip

A good answer should state: **CPU cannot directly execute programs from disk; programs must first be loaded into main memory.**

### Common Mistake

Do not confuse **storage** with **execution memory**. Disk stores; RAM executes.

---

## Page 07 — What OS Does for Memory Management

### Original Slide Content

The OS is responsible for the following activities:

- Keep track of which parts of memory are being used and by whom.
- Decide which processes to load next when memory space becomes available.
- Allocate and deallocate memory.

### Visual Explanation

No major visual content.

### Explanation

The operating system works as the memory manager. It tracks which memory areas are free and which are occupied. It decides where to place a process and releases memory when the process finishes.

### Visual/Text Diagram

```text
Operating System Memory Manager
├── Tracks used/free memory
├── Decides which process enters memory
├── Allocates memory to processes
└── Deallocates memory after process completion
```

### Exam Tip

For “What are the OS memory management activities?” write these three responsibilities clearly.

### Common Mistake

Do not say memory allocation is handled only by the application. The OS controls physical memory allocation.

---

## Page 08 — Memory Capacity from Address Bits

### Original Slide Content

**For n bits address, the memory capacity = 2ⁿ bytes**

### Visual Explanation

The slide shows binary addresses, hexadecimal equivalents, and memory bytes. It demonstrates that an address length determines the maximum number of unique memory locations.

Example from the visual:

| Binary Address | Hex Address | Meaning |
|---|---:|---|
| `0000 0000 0000 0000` | `0000` | first address |
| `0000 0000 0000 0001` | `0001` | next address |
| `1111 1111 1111 1111` | `FFFF` | last 16-bit address |

A 16-bit address can represent:

```text
2^16 = 65,536 bytes = 64 KB
```

### Explanation

If an address has **n bits**, there are **2ⁿ possible addresses**. If each address points to one byte, memory capacity is **2ⁿ bytes**.

### Important Formula

```text
Memory capacity = 2^n bytes
```

Where:

- `n` = number of address bits
- `2^n` = number of possible byte addresses

### Exam Tip

Expect calculations like:

| Address Bits | Capacity |
|---:|---:|
| 10 bits | 2¹⁰ = 1024 bytes = 1 KB |
| 16 bits | 2¹⁶ = 65,536 bytes = 64 KB |
| 20 bits | 2²⁰ = 1,048,576 bytes = 1 MB |
| 32 bits | 2³² bytes = 4 GB |

### Common Mistake

Do not write `2 × n`. It is `2^n`.

---

## Page 09 — Address Binding

### Original Slide Content

Address binding of instructions and data to memory addresses can happen at three different stages:

- **Compile time:** If the starting memory location is known beforehand, the program is compiled and an absolute code will be generated with fixed addresses.
- **Load time:** If address binding is not done at compile time, the compiler generates a relocatable code. The loader then adjusts addresses based on where the program is placed in memory.
- **Execution time:** Address binding occurs during program execution. The CPU generates logical (virtual) addresses, which are dynamically translated into physical addresses by the Memory Management Unit (MMU).

### Visual Explanation

No major visual content.

### Explanation

**Address binding** means connecting program instructions/data with real memory addresses. Binding can happen early or late.

| Stage | When Binding Happens | Address Type/Result | Flexibility |
|---|---|---|---|
| Compile time | During compilation | Absolute fixed addresses | Low |
| Load time | When loading into memory | Relocatable addresses adjusted by loader | Medium |
| Execution time | While program runs | Logical addresses translated by MMU | High |

### Visual/Text Diagram

```text
Source Program
   ↓ compile time binding possible
Object / executable code
   ↓ load time binding possible
Loaded process in memory
   ↓ execution time binding possible
CPU logical address → MMU → physical address
```

### Exam Tip

This is a likely comparison question. Mention:

- compile time = fixed address
- load time = relocatable code
- execution time = dynamic translation using MMU

### Common Mistake

Do not say address binding only happens during execution. It can happen at compile time, load time, or execution time.

---

## Page 10 — Logical vs Physical Address Space

### Original Slide Content

- The concept of a logical address space that is bound to a separate physical address space is central to proper memory management.
- **Logical address** – generated by the CPU; also referred to as virtual address.
- **Physical address** – address seen by the memory unit.
- Logical address space is the set of all logical addresses generated by a program.
- Physical address space is the set of all physical addresses generated by a program.

### Visual Explanation

No major visual content.

### Explanation

A program does not directly work with actual RAM addresses. It usually works with **logical/virtual addresses**. The OS/MMU translates them into **physical addresses** in RAM.

| Concept | Meaning | Generated/Seen By |
|---|---|---|
| Logical address | Virtual address used by a program | CPU |
| Physical address | Actual RAM address | Memory unit |
| Logical address space | All logical addresses of a program | Program/CPU view |
| Physical address space | All physical addresses mapped in memory | RAM/memory view |

### Visual/Text Diagram

```text
Program instruction
      ↓
CPU generates logical address
      ↓
MMU translates address
      ↓
Physical address in RAM
```

### Exam Tip

Use the phrase: **logical address is generated by CPU; physical address is seen by the memory unit.**

### Common Mistake

Do not say logical and physical addresses are always the same. In execution-time binding and virtual memory, they are different.

---

## Page 11 — Swapping

### Original Slide Content

**Swapping**

### Visual Explanation

The diagram shows:

- Main memory divided into operating system area and user space.
- Backing store contains processes.
- Process `P1` is swapped out from main memory to backing store.
- Process `P2` is swapped in from backing store to main memory.

### Explanation

Swapping is moving a process between RAM and backing store. It is used when memory is limited and the OS needs to free RAM for another process.

### Visual/Text Diagram

```text
Main Memory                         Backing Store
┌───────────────┐                  ┌───────────────┐
│ Operating Sys │                  │ Process P1    │
├───────────────┤   swap out  ───▶ │               │
│ User Space    │                  │ Process P2    │
│ Process P1    │ ◀── swap in      │               │
└───────────────┘                  └───────────────┘
```

### Exam Tip

Define swapping as **temporarily moving processes between main memory and backing store**.

### Common Mistake

Do not confuse swapping with paging. Swapping usually moves whole processes; paging moves fixed-size pages.

---

## Page 12 — Contiguous Allocation

### Original Slide Content

- A memory management technique in which each process is allocated a single continuous block of memory in RAM.
- When a process is loaded into memory, the OS finds a contiguous (adjacent) block large enough to hold it.

### Visual Explanation

No major visual content.

### Explanation

In contiguous allocation, a process must occupy one continuous block of memory. Its memory locations are adjacent.

### Visual/Text Diagram

```text
RAM
┌───────────────┐
│ Operating Sys │
├───────────────┤
│ Process A     │  ← one continuous block
│ Process A     │
│ Process A     │
├───────────────┤
│ Process B     │  ← one continuous block
└───────────────┘
```

### Exam Tip

Use the keyword **single continuous block**. This is the core definition.

### Common Mistake

Do not describe contiguous allocation as placing one process in many separate scattered frames. That is paging, not contiguous allocation.

---

## Page 13 — Contiguous Allocation Cont.

### Original Slide Content

Two registers provide address protection between processes:

- **Base register:** smallest legal address space
- **Limit register:** size of the legal range

### Visual Explanation

The diagram shows memory with the operating system at the top and processes in memory. A base value of `30004` and a limit value of `12090` define the allowed range of addresses for a process.

This means the process can legally access:

```text
base address <= address < base + limit
```

Using the shown values:

```text
30004 <= address < 30004 + 12090
30004 <= address < 42094
```

### Explanation

The base and limit registers protect processes from accessing memory outside their assigned region.

| Register | Meaning | Example |
|---|---|---|
| Base | Starting legal address | 30004 |
| Limit | Size/range of allowed memory | 12090 |
| Legal range | Base to base + limit | 30004 to 42094 |

### Visual/Text Diagram

```text
Process legal memory range

Base = 30004
Limit = 12090

Allowed addresses:
30004 ───────────────────── 42094
```

### Exam Tip

Expected phrase: **Base register stores the smallest legal physical address; limit register stores the size of the legal address range.**

### Common Mistake

Do not say the limit register stores the ending address directly. In this slide, it stores the **size of the legal range**.

---

## Page 14 — Multiple-Partition Allocation

### Original Slide Content

**Multiple-Partition Allocation**

### Visual Explanation

The slide shows memory divided into several partitions. Processes are placed into available partitions over time. A free space/hole appears when a process is removed, then later another process can be loaded into that hole.

Process sequence shown visually:

1. OS + process 5 + process 8 + process 2
2. Process 8 leaves, creating a free hole.
3. Process 9 is loaded into part of the free space.
4. Process 10 is also loaded, leaving a smaller free space.

### Explanation

Multiple-partition allocation divides memory so several processes can reside in memory at the same time. When processes leave memory, holes are created.

### Visual/Text Diagram

```text
Before:
[ OS ][ P5 ][ P8 ][ P2 ]

P8 leaves:
[ OS ][ P5 ][ free hole ][ P2 ]

P9 loads:
[ OS ][ P5 ][ P9 ][ free hole ][ P2 ]

P10 loads:
[ OS ][ P5 ][ P9 ][ P10 ][ free hole ][ P2 ]
```

### Exam Tip

Mention that multiple-partition allocation supports multiprogramming but can create holes and fragmentation.

### Common Mistake

Do not assume every hole can fit every process. The OS must find a hole large enough.

---

## Page 15 — Dynamic Storage-Allocation Problem

### Original Slide Content

How to satisfy a request of size `n` from a list of free holes?

- **First-fit:** Allocate the first hole that is big enough.
- **Best-fit:** Allocate the smallest hole that is big enough; must search entire list, unless ordered by size. Produces the smallest leftover hole.
- **Worst-fit:** Allocate the largest hole; must also search entire list. Produces the largest leftover hole.
- First-fit and best-fit are better than worst-fit in terms of speed and storage utilization.

### Visual Explanation

No major visual content.

### Explanation

When a process requests memory, the OS must choose a free hole. These are allocation strategies.

| Algorithm | Selection Rule | Advantage | Disadvantage |
|---|---|---|---|
| First-fit | First hole large enough | Fast | May leave many small holes |
| Best-fit | Smallest suitable hole | Reduces leftover waste locally | Searches more; may create tiny useless holes |
| Worst-fit | Largest hole | Leaves a large leftover hole | Poor speed/storage utilization |

### Visual/Text Diagram

```text
Free holes: [100 KB] [500 KB] [200 KB]
Request: 180 KB

First-fit → 500 KB if 100 KB too small
Best-fit  → 200 KB
Worst-fit → 500 KB
```

### Exam Tip

A common exam question asks to compare **first-fit, best-fit, and worst-fit**.

### Common Mistake

Do not say best-fit is always fastest. Best-fit may need to search the entire free list.

---

## Page 16 — Fragmentation

### Original Slide Content

- **External Fragmentation** – total memory space exists to satisfy a request, but it is not contiguous.
- **Internal Fragmentation** – allocated memory may be slightly larger than requested memory; this size difference is memory internal to a partition, but not being used.

### Visual Explanation

No major visual content.

### Explanation

Fragmentation means memory is wasted or unusable due to allocation structure.

| Type | Where Waste Happens | Meaning | Example |
|---|---|---|---|
| External fragmentation | Outside allocated partitions | Free memory exists but scattered | 100 KB + 200 KB + 300 KB free, but no single 500 KB block |
| Internal fragmentation | Inside allocated partition | Allocated block is bigger than required | Process needs 18 KB but gets 20 KB; 2 KB wasted |

### Visual/Text Diagram

```text
External fragmentation:
[Process][Free 100][Process][Free 200][Process][Free 300]
Total free = 600 KB, but not one continuous 600 KB block.

Internal fragmentation:
Allocated block = 20 KB
Used by process  = 18 KB
Wasted inside    = 2 KB
```

### Exam Tip

This is highly likely as a direct comparison question.

### Common Mistake

Do not mix the two:

- External = scattered free holes outside processes.
- Internal = unused space inside allocated block.

---

## Page 17 — External Fragmentation and Compaction

### Original Slide Content

- Reduce external fragmentation by compaction.
- Shuffle memory contents to place all free memory together in one large block.
- Compaction is possible only if relocation is dynamic, and is done at execution time.

### Visual Explanation

No major visual content.

### Explanation

Compaction rearranges processes in memory so scattered holes combine into one large free block.

### Visual/Text Diagram

```text
Before compaction:
[P1][Free][P2][Free][P3][Free]

After compaction:
[P1][P2][P3][Free Free Free]
```

### Exam Tip

Mention the condition: **compaction is possible only with dynamic relocation at execution time.**

### Common Mistake

Do not say compaction solves internal fragmentation. It mainly reduces external fragmentation.

---

## Page 18 — External Fragmentation and Paging

### Original Slide Content

**External Fragmentation and Paging**

### Visual Explanation

The diagram shows:

- Logical memory split into pages: page 0, page 1, page 2, page 3.
- A page table mapping pages to physical frames.
- Physical memory frames where pages are placed non-contiguously.

Visible mapping:

| Logical Page | Physical Frame |
|---:|---:|
| Page 0 | Frame 1 |
| Page 1 | Frame 4 |
| Page 2 | Frame 3 |
| Page 3 | Frame 7 |

The key idea: pages from the same process do **not** need to be placed contiguously in physical memory.

### Explanation

Paging solves external fragmentation by allowing a process to be divided into pages and loaded into any available frames.

### Visual/Text Diagram

```text
Logical memory         Page table          Physical memory
Page 0  ───────────▶   frame 1      ───▶   Frame 1
Page 1  ───────────▶   frame 4      ───▶   Frame 4
Page 2  ───────────▶   frame 3      ───▶   Frame 3
Page 3  ───────────▶   frame 7      ───▶   Frame 7
```

### Exam Tip

Use this phrase: **Paging eliminates external fragmentation because pages can be placed in non-contiguous frames.**

### Common Mistake

Do not say paging requires the whole process to be contiguous in RAM. That is false.

---

## Page 19 — External Fragmentation and Paging Cont.

### Original Slide Content

- Divide physical memory into fixed-sized blocks called **frames**.
- Divide logical memory into blocks of same size called **pages**.
- Keep track of all free frames.
- Set up a page table to translate logical to physical addresses.

### Visual Explanation

No major visual content.

### Explanation

Paging uses equal-sized blocks:

| Memory Type | Divided Into | Meaning |
|---|---|---|
| Logical memory | Pages | Process-side blocks |
| Physical memory | Frames | RAM-side blocks |

The page table maps page numbers to frame numbers.

### Visual/Text Diagram

```text
Logical memory:  Page 0 | Page 1 | Page 2 | Page 3
Physical memory: Frame 0 | Frame 1 | Frame 2 | Frame 3 | ...

Page table:
Page number → Frame number
```

### Exam Tip

Definitions to memorize:

- Page = fixed-size block of logical memory.
- Frame = fixed-size block of physical memory.
- Page table = maps pages to frames.

### Common Mistake

Do not say pages and frames are different sizes. In paging, page size and frame size are the same.

---

## Page 20 — Address Translation Scheme

### Original Slide Content

Address generated by CPU is divided into:

- **Page number (p)** – used as an index into a page table which contains base address of each page in physical memory.
- **Page offset (d)** – combined with base address to define the physical memory address sent to the memory unit.
- For given logical address space `2^m` and page size `2^n`.

### Visual Explanation

No major visual content.

### Explanation

A logical address is split into two parts:

```text
Logical address = page number + page offset
```

- Page number tells which page is needed.
- Offset tells the exact byte/word position inside that page.

For a logical address space of `2^m` and page size `2^n`:

| Part | Number of Bits |
|---|---:|
| Page offset `d` | `n` bits |
| Page number `p` | `m - n` bits |

### Visual/Text Diagram

```text
Logical Address
┌───────────────┬───────────────┐
│ page number p │ page offset d │
└───────────────┴───────────────┘
        │                │
        │                └── copied into physical address
        ↓
   Page table lookup
        ↓
   Frame number f
        ↓
Physical Address
┌───────────────┬───────────────┐
│ frame number f│ page offset d │
└───────────────┴───────────────┘
```

### Exam Tip

Expected keywords: **page number indexes page table; page offset is combined with frame/base address.**

### Common Mistake

Do not use the page offset to search the page table. The page number indexes the page table.

---

## Page 21 — Paging Hardware

### Original Slide Content

**Paging Hardware**

### Visual Explanation

The diagram shows the address translation path:

1. CPU generates a logical address `(p, d)`.
2. Page number `p` goes to the page table.
3. Page table returns frame number `f`.
4. Frame number `f` combines with offset `d`.
5. Physical address `(f, d)` is sent to physical memory.

### Explanation

Paging hardware performs logical-to-physical address translation. The offset does not change; only the page number is translated into a frame number.

### Visual/Text Diagram

```text
CPU
 │
 │ logical address = (p, d)
 ↓
Page table lookup using p
 │
 │ returns frame number f
 ↓
Physical address = (f, d)
 │
 ↓
Physical memory
```

### Exam Tip

For diagram explanation questions, write the steps above in order.

### Common Mistake

Do not say the whole logical address is replaced. Only `p` is translated to `f`; offset `d` remains the same.

---

## Page 22 — Free Frames

### Original Slide Content

**Free Frames**

### Visual Explanation

The slide shows memory allocation before and after assigning free frames to a new process.

Before allocation:

- New process has pages: page 0, page 1, page 2, page 3.
- Free-frame list includes frames such as 14, 13, 18, 20, 15.

After allocation:

- Page table maps new process pages to selected free frames.
- Example mapping shown visually:

| New Process Page | Allocated Frame |
|---:|---:|
| Page 0 | Frame 14 |
| Page 1 | Frame 13 |
| Page 2 | Frame 18 |
| Page 3 | Frame 20 |

### Explanation

The OS keeps a list of free frames. When a process needs memory, the OS assigns frames from the free-frame list and builds the process page table.

### Visual/Text Diagram

```text
Free-frame list before allocation:
[14, 13, 18, 20, 15]

New process pages:
[page 0, page 1, page 2, page 3]

Page table after allocation:
page 0 → frame 14
page 1 → frame 13
page 2 → frame 18
page 3 → frame 20
```

### Exam Tip

Mention **free-frame list** and **new process page table**.

### Common Mistake

Do not assume page 0 must go into frame 0. Any free frame can be used.

---

## Page 23 — Paging Hardware With Associative Memory TLB

### Original Slide Content

**Paging Hardware With Associative Memory (TLB)**

### Visual Explanation

The diagram shows:

- CPU generates logical address `(p, d)`.
- First, the page number is searched in the TLB.
- If found, it is a **TLB hit** and frame number is obtained quickly.
- If not found, it is a **TLB miss** and the page table must be accessed.
- Physical address becomes `(f, d)`.

### Explanation

The **Translation Lookaside Buffer (TLB)** is a small fast cache that stores recent page-table entries. It speeds up address translation.

### Visual/Text Diagram

```text
CPU generates (p, d)
        ↓
Search TLB
 ├── TLB hit  → get frame f quickly → physical address (f, d)
 └── TLB miss → access page table → get frame f → physical address (f, d)
```

### Exam Tip

A strong answer should define TLB as **associative memory used to cache page-table entries and reduce effective memory access time**.

### Common Mistake

Do not say TLB stores full pages. It stores page-to-frame translation entries, not page contents.

---

## Page 24 — Effective Access Time

### Original Slide Content

- Associative Lookup = `ϵ` time unit
- Can be `< 10%` of memory access time
- Hit ratio = `α`
- Hit ratio - Percentage of times that a page number is found in the associative registers
- Consider `α = 80%`, `ϵ = 20ns` for TLB search, `100ns` for memory access:

```text
EAT = (100 + 20) × 80% + (200 + 20) × 20%
EAT = 0.80 × 100 + 0.20 × 200 = 120ns
```

### Visual Explanation

No major visual content. The slide is formula-based.

### Explanation

Effective Access Time (EAT) is the average time required to access memory considering TLB hits and misses.

The slide contains two forms. The more complete form includes TLB lookup time:

```text
EAT = α × (ϵ + memory access time) + (1 - α) × (ϵ + 2 × memory access time)
```

Using the slide values:

```text
α = 0.80
ϵ = 20 ns
memory access time = 100 ns

Hit time  = 20 + 100 = 120 ns
Miss time = 20 + 100 + 100 = 220 ns

EAT = 0.80 × 120 + 0.20 × 220
EAT = 96 + 44
EAT = 140 ns
```

The slide also shows a simplified calculation:

```text
EAT = 0.80 × 100 + 0.20 × 200 = 120 ns
```

This simplified version ignores the 20 ns TLB lookup in both cases.

### Exam Tip

For exams, follow the formula your lecturer provides. If `ϵ` is included in the question, include it in the calculation unless the question explicitly asks for the simplified version.

### Common Mistake

Do not confuse hit ratio `α` with miss ratio. Miss ratio is `1 - α`.

---

## Page 25 — Memory Protection

### Original Slide Content

- Memory protection implemented by associating a protection bit with each frame to indicate if read-only or read-write access is allowed.
- Can also add more bits to indicate page execute-only, and so on.
- Valid-invalid bit attached to each entry in the page table:
  - “valid” indicates that the associated page is in the process’ logical address space, and is thus a legal page.
  - “invalid” indicates that the page is not in the process’ logical address space.

### Visual Explanation

No major visual content.

### Explanation

Memory protection prevents a process from accessing memory it should not access. The OS uses page table bits to control access.

| Bit Type | Purpose |
|---|---|
| Protection bit | Controls read-only, read-write, execute-only, etc. |
| Valid bit | Page belongs to process logical address space |
| Invalid bit | Page does not belong to process logical address space |

### Visual/Text Diagram

```text
Page table entry
┌──────────────┬──────────────┬──────────────┐
│ Frame number │ valid/invalid│ protection   │
└──────────────┴──────────────┴──────────────┘
```

### Exam Tip

Use the exact distinction:

- valid = legal page in process logical address space
- invalid = not in process logical address space

### Common Mistake

Do not say invalid means the page is always physically damaged or missing from disk. It means the page is not legal for that process address space.

---

## Page 26 — Valid or Invalid Bit in a Page Table

### Original Slide Content

**Valid (v) or Invalid (i) Bit In A Page Table**

### Visual Explanation

The diagram shows a logical address space with pages 0–5 and a page table containing frame numbers and valid-invalid bits.

Visible mapping:

| Page | Frame | Bit |
|---:|---:|---|
| 0 | 2 | v |
| 1 | 3 | v |
| 2 | 4 | v |
| 3 | 7 | v |
| 4 | 8 | v |
| 5 | 9 | v |
| 6 | 0 | i |
| 7 | 0 | i |

Physical memory shows pages loaded into frames 2, 3, 4, 7, 8, and 9.

### Explanation

The valid-invalid bit prevents illegal memory access. Pages marked `v` are valid for the process. Pages marked `i` are not part of the legal logical address space.

### Visual/Text Diagram

```text
Page table
Page 0 → Frame 2 → valid
Page 1 → Frame 3 → valid
Page 2 → Frame 4 → valid
Page 3 → Frame 7 → valid
Page 4 → Frame 8 → valid
Page 5 → Frame 9 → valid
Page 6 → invalid
Page 7 → invalid
```

### Exam Tip

If a logical address refers to an invalid page, the OS traps/raises an error because the process attempted illegal access.

### Common Mistake

Do not treat invalid pages as free memory for the same process. They are outside the process logical address space.

---

## Page 27 — Demand Paging

### Original Slide Content

Demand paging is a technique used in virtual memory where pages are loaded into RAM only when they are actually needed, rather than loading the entire program in advance.

### Visual Explanation

The visual shows main memory and backing store. Only needed program pages are swapped into memory. Other pages remain in backing store until required.

### Explanation

Demand paging improves memory usage because the OS loads only required pages into RAM. This allows programs to start faster and supports more processes in memory.

### Visual/Text Diagram

```text
Program on disk/backing store
├── Page 0
├── Page 1
├── Page 2
├── Page 3
└── ...

Only needed pages are loaded:
Backing store ── needed page ──▶ RAM
```

### Exam Tip

Use the key phrase: **pages are loaded into RAM only when actually needed**.

### Common Mistake

Do not say demand paging loads the full program before execution. That is the opposite of demand paging.

---

## Page 28 — Page Faults

### Original Slide Content

- A program starts execution, but not all its pages are in memory.
- When the CPU tries to access a page that is not in RAM, a page fault occurs.
- The operating system finds the required page on the hard disk.
- Loads it into a free frame in RAM.
- The program continues execution.

### Visual Explanation

No major visual content.

### Explanation

A page fault is not always a fatal error. In virtual memory, it often means the requested page is not currently in RAM, so the OS must bring it from disk.

### Visual/Text Diagram

```text
CPU accesses page
      ↓
Page in RAM?
 ├── Yes → continue execution
 └── No  → page fault
             ↓
          OS loads page from disk
             ↓
          Update page table
             ↓
          Restart instruction
```

### Exam Tip

For page fault questions, write the steps in order. Do not only define it.

### Common Mistake

Do not say every page fault crashes the program. Many page faults are handled normally by the OS.

---

## Page 29 — Steps in Handling a Page Fault

### Original Slide Content

**Steps in Handling a Page Fault**

### Visual Explanation

The diagram labels the process:

1. A memory reference is made.
2. Invalid page-table entry causes a trap to the operating system.
3. OS checks that the page is on backing store.
4. Missing page is brought into a free frame.
5. Page table is reset/updated.
6. Instruction is restarted.

### Explanation

A page fault requires OS intervention. The OS checks whether access is valid, locates the page on disk, loads it into RAM, updates the page table, and restarts the instruction.

### Visual/Text Diagram

```text
1. CPU references page
2. Page table says invalid/not in RAM
3. Trap to operating system
4. OS locates page on backing store
5. OS loads page into free frame
6. OS updates page table
7. Instruction restarts
```

### Exam Tip

This is a likely diagram explanation question. Use numbered steps.

### Common Mistake

Do not forget the final step: restart the instruction that caused the page fault.

---

## Page 30 — If No Free Frames in RAM

### Original Slide Content

1. Find a free frame:
   - If there is a free frame, use it.
   - If there is no free frame, use a page replacement algorithm to select a victim frame.
   - Write victim frame to disk if dirty.
2. Bring the desired page into the newly free frame; update the page and frame tables.
3. Continue the process by restarting the instruction that caused the trap.

### Visual Explanation

No major visual content.

### Explanation

If RAM is full, the OS must remove one existing page to make space. The removed page is called the **victim page/frame**. If it was modified, it must be written back to disk before replacement.

### Visual/Text Diagram

```text
Page fault occurs
      ↓
Any free frame?
 ├── Yes → load required page
 └── No  → choose victim frame
             ↓
          if dirty, write victim to disk
             ↓
          load required page
             ↓
          update page/frame tables
             ↓
          restart instruction
```

### Exam Tip

Include the dirty-page condition: **write victim frame to disk if dirty**.

### Common Mistake

Do not say the OS always discards the victim page without saving. Dirty pages must be written back.

---

## Page 31 — Page Replacement

### Original Slide Content

**Page Replacement**

### Visual Explanation

The diagram shows:

1. Victim page is swapped out to backing store.
2. Its page-table entry changes to invalid.
3. Desired page is swapped in to physical memory.
4. Page table is reset/updated for the new page.

### Explanation

Page replacement is used when a page fault occurs and there are no free frames. The OS chooses a victim page, removes it, and loads the required page.

### Visual/Text Diagram

```text
Physical memory full
      ↓
Select victim frame
      ↓
Swap out victim page
      ↓
Mark victim page invalid
      ↓
Swap desired page in
      ↓
Update page table
```

### Exam Tip

Define page replacement as **selecting a victim frame/page to remove when no free frame exists**.

### Common Mistake

Do not confuse page replacement with address translation. Replacement decides what to evict; translation maps page to frame.

---

## Page 32 — Page-Replacement Algorithms

### Original Slide Content

- There are many page replacement algorithms.
- We want an algorithm that results in the lowest page-fault rate.
- Evaluate algorithm by running it on a particular string of memory references (reference string) and compute the number of page faults on that string.

### Visual Explanation

No major visual content.

### Explanation

A page replacement algorithm decides which page should be removed from memory. The best algorithm has fewer page faults.

**Reference string** means the sequence of page requests made by a process.

Example:

```text
Reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
```

### Exam Tip

In numerical questions, you will be given:

- reference string
- number of frames
- algorithm name

Then you must calculate page faults.

### Common Mistake

Do not count a page hit as a page fault. A page fault happens only when requested page is not in RAM.

---

## Page 33 — First-In-First-Out FIFO Algorithm

### Original Slide Content

- Use FIFO queue: replace the page at the head of the queue, and insert a new page at the tail.
- 3 or 4 frames (3 or 4 pages can be in memory at a time per process)
- FIFO replacement suffers from **Belady’s anomaly** – more frames can result in more page faults.

### Visual Explanation

No major visual content on this page besides text.

### Explanation

FIFO removes the oldest loaded page first. It is simple but not always efficient.

### Visual/Text Diagram

```text
FIFO queue:
Head                         Tail
Oldest page ───────────────▶ Newest page

When replacement needed:
Remove page at Head
Insert new page at Tail
```

### Exam Tip

Belady’s anomaly is a strong exam keyword. Write: **In FIFO, increasing the number of frames can sometimes increase the number of page faults.**

### Common Mistake

Do not assume more frames always means fewer page faults for FIFO. Belady’s anomaly proves otherwise.

---

## Page 34 — FIFO Example With 3 and 4 Frames

### Original Slide Content

Reference string shown:

```text
1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
```

- If 3 Frames are in the RAM → **9 page faults**
- If 4 Frames are in the RAM → **10 page faults**

### Visual Explanation

The visual demonstrates Belady’s anomaly using FIFO. With the same reference string, 4 frames produce more page faults than 3 frames.

### Explanation

Normally, students expect more frames to reduce page faults. FIFO can violate this expectation.

| Frames | Algorithm | Page Faults |
|---:|---|---:|
| 3 | FIFO | 9 |
| 4 | FIFO | 10 |

This is Belady’s anomaly.

### Visual/Text Diagram

```text
Same reference string:
1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

FIFO with 3 frames → 9 page faults
FIFO with 4 frames → 10 page faults

More frames caused more faults → Belady's anomaly
```

### Exam Tip

If asked to define Belady’s anomaly, cite this example: **3 frames = 9 faults, 4 frames = 10 faults under FIFO.**

### Common Mistake

Do not say the 4-frame result must always be better. In the slide example, it is worse.

---

## Page 35 — Optimal Page Replacement Algorithm OPT

### Original Slide Content

- OPT replaces the page that will not be used for the longest period of time.
- 4 frames example:

```text
1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
```

- Result shown: **6 page faults**
- For a fixed number of frames, OPT has the lowest page fault rate of all algorithms. It also never suffers from Belady’s anomaly.
- Problem: It is difficult to implement – it requires future knowledge of the reference string!

### Visual Explanation

The diagram shows the frame state across the reference string and counts **6 page faults** for 4 frames using OPT.

### Explanation

OPT is theoretically best because it removes the page whose next use is farthest in the future. However, real systems cannot know the future exactly, so OPT is mostly used as a benchmark.

### Visual/Text Diagram

```text
OPT decision rule:
When replacement is needed:
Remove the page that will be used farthest in the future.
```

### Exam Tip

Write both:

- Advantage: lowest page-fault rate; no Belady’s anomaly.
- Disadvantage: difficult/impossible to implement practically because future references are unknown.

### Common Mistake

Do not say OPT is commonly implemented directly in real OS scheduling. It requires future knowledge.

---

## Page 36 — Least Recently Used LRU Algorithm

### Original Slide Content

- LRU replaces the page that has not been used for the longest period of time.
- Reference string:

```text
1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
```

- Result shown: **8 page faults**
- A class of algorithms that do not suffer from Belady’s anomaly are called **stack algorithms**.

### Visual Explanation

The visual shows LRU with 4 frames and counts **8 page faults**.

### Explanation

LRU uses past behavior to predict future behavior. It assumes that pages not used recently are less likely to be used soon.

### Visual/Text Diagram

```text
LRU decision rule:
When replacement is needed:
Remove the page with the oldest recent use time.
```

### Exam Tip

Compare FIFO, OPT, and LRU:

| Algorithm | Replacement Rule | Faults in Slide Example |
|---|---|---:|
| FIFO | Oldest loaded page | 10 faults with 4 frames |
| OPT | Page used farthest in future | 6 faults with 4 frames |
| LRU | Least recently used page | 8 faults with 4 frames |

### Common Mistake

Do not confuse LRU with FIFO. FIFO cares when a page entered memory; LRU cares when it was last used.

---

## Page 37 — Page-Buffering Algorithms

### Original Slide Content

- Keep a pool of free frames, always.
  - Then a frame is available when needed, not found at fault time.
  - Read page into free frame and select victim to evict and add to free pool.
  - When convenient, evict victim.
- Possibly, keep list of modified pages.
  - When backing store is otherwise idle, write pages there and set to non-dirty.

### Visual Explanation

No major visual content.

### Explanation

Page buffering improves performance by keeping free frames ready. Instead of searching for a frame only after a page fault, the OS maintains a pool of free frames.

Modified/dirty pages can be written to backing store when the disk is idle, reducing delay during future replacements.

### Visual/Text Diagram

```text
Page-buffering idea:

Free frame pool maintained always
      ↓
Page fault occurs
      ↓
Load needed page into available free frame quickly
      ↓
Choose victim page later / when convenient
      ↓
Write dirty pages during idle backing-store time
```

### Exam Tip

Mention **pool of free frames** and **modified page list**.

### Common Mistake

Do not say page buffering removes the need for page replacement. It improves handling but replacement may still be needed.

---

## Page 38 — End of Lecture 11

### Original Slide Content

**End of Lecture 11**

### Visual Explanation

This is a closing slide marking the end of lecture content.

### Explanation

No new technical concept is introduced.

### Exam Tip

No direct exam theory from this slide.

### Common Mistake

No major common mistake.

---

## Page 39 — Thank You

### Original Slide Content

**Thank You**

### Visual Explanation

The slide displays a closing message.

### Explanation

No technical content.

### Exam Tip

No direct exam theory from this slide.

### Common Mistake

No major common mistake.

---

# Key Definitions

## Main Memory

### Definition
Main memory is a large array of words or bytes, each with its own address, used as quickly accessible storage shared by the CPU and I/O devices.

### Simple Meaning
RAM is the working area where programs must be loaded before the CPU executes them.

### Example
Opening a browser loads required program instructions from disk into RAM.

## Volatile Memory

### Definition
Volatile memory loses its contents when power fails or the system shuts down.

### Simple Meaning
RAM data disappears when the computer turns off.

### Example
Unsaved work may be lost after power failure.

## Address Binding

### Definition
Address binding is the process of mapping program instructions and data to memory addresses.

### Simple Meaning
It decides where a program’s instructions/data live in memory.

### Example
Execution-time binding translates logical addresses to physical addresses using the MMU.

## Logical Address

### Definition
A logical address is an address generated by the CPU, also called a virtual address.

### Simple Meaning
This is the address the program thinks it is using.

### Example
A process accesses logical page 2 with offset 100.

## Physical Address

### Definition
A physical address is the real address seen by the memory unit.

### Simple Meaning
This is the actual RAM location.

### Example
Logical page 2 may map to physical frame 4.

## Swapping

### Definition
Swapping is the movement of a process between main memory and backing store.

### Simple Meaning
The OS temporarily moves processes out of RAM to make room.

### Example
Process P1 is swapped out; process P2 is swapped in.

## Contiguous Allocation

### Definition
A memory allocation method where each process receives one continuous block of RAM.

### Simple Meaning
The entire process must fit into one adjacent memory area.

### Example
A 100 KB process needs one continuous 100 KB hole.

## External Fragmentation

### Definition
External fragmentation occurs when enough total free memory exists, but it is scattered and not contiguous.

### Simple Meaning
There is enough space overall, but not in one block.

### Example
Three holes of 100 KB, 200 KB, and 300 KB cannot fit a 500 KB process if contiguous allocation is required.

## Internal Fragmentation

### Definition
Internal fragmentation occurs when allocated memory is larger than requested, leaving unused space inside the allocation.

### Simple Meaning
Extra memory inside a partition is wasted.

### Example
A process needs 18 KB but receives 20 KB, wasting 2 KB.

## Compaction

### Definition
Compaction is rearranging memory contents to combine scattered free spaces into one large free block.

### Simple Meaning
Move processes together so free space becomes continuous.

### Example
`[P1][Free][P2][Free]` becomes `[P1][P2][Free Free]`.

## Page

### Definition
A page is a fixed-size block of logical memory.

### Simple Meaning
A process is divided into equal-sized pieces.

### Example
Logical memory may be divided into page 0, page 1, page 2, and page 3.

## Frame

### Definition
A frame is a fixed-size block of physical memory.

### Simple Meaning
RAM is divided into equal-sized slots.

### Example
Page 0 may be loaded into frame 14.

## Page Table

### Definition
A page table maps logical page numbers to physical frame numbers.

### Simple Meaning
It tells the OS/MMU where each page is in RAM.

### Example
Page 0 → Frame 14.

## TLB

### Definition
The Translation Lookaside Buffer is a small fast associative memory that caches recent page-table entries.

### Simple Meaning
It speeds up address translation.

### Example
If page 2 is found in the TLB, the system avoids a page-table memory lookup.

## Hit Ratio

### Definition
Hit ratio is the percentage of times a page number is found in the associative registers/TLB.

### Simple Meaning
How often the TLB lookup succeeds.

### Example
A hit ratio of 80% means 8 out of 10 page lookups are found in the TLB.

## Demand Paging

### Definition
Demand paging loads pages into RAM only when they are actually needed.

### Simple Meaning
The OS does not load the whole program at once.

### Example
A program starts with only the required first pages in memory.

## Page Fault

### Definition
A page fault occurs when the CPU accesses a page that is not currently in RAM.

### Simple Meaning
The page is needed, but it must be brought from disk.

### Example
The OS loads a missing page from backing store into a free frame.

## Page Replacement

### Definition
Page replacement selects a victim page/frame to remove when no free frame is available.

### Simple Meaning
RAM is full, so the OS removes one page to load another.

### Example
FIFO removes the oldest loaded page.

## Belady’s Anomaly

### Definition
Belady’s anomaly is a situation where increasing the number of frames causes more page faults in some algorithms such as FIFO.

### Simple Meaning
More memory can sometimes perform worse under FIFO.

### Example
In the slide, FIFO gives 9 faults with 3 frames and 10 faults with 4 frames.

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Main memory | CPU directly accesses only registers and main memory | 4 |
| Volatile memory | RAM loses data on failure/power loss | 5 |
| Kernel/User memory | OS in low memory, user processes in high memory | 5 |
| Why RAM is needed | Programs must be loaded from disk to RAM before execution | 6 |
| OS memory duties | Track, decide loading, allocate/deallocate | 7 |
| Address capacity | `2^n` bytes for n-bit address | 8 |
| Address binding | Compile, load, execution time | 9 |
| Logical vs physical | CPU generates logical; memory unit sees physical | 10 |
| Swapping | Move process between RAM and backing store | 11 |
| Contiguous allocation | One continuous memory block per process | 12 |
| Base/limit registers | Protect legal address range | 13 |
| Allocation algorithms | First-fit, best-fit, worst-fit | 15 |
| Fragmentation | External vs internal | 16 |
| Compaction | Combines free holes | 17 |
| Paging | Pages map to frames using page table | 18–21 |
| Free frames | OS maintains free-frame list | 22 |
| TLB | Fast cache for page-table entries | 23 |
| EAT | Average memory access time with TLB hit/miss | 24 |
| Valid/invalid bit | Legal/illegal pages in address space | 25–26 |
| Demand paging | Load pages only when needed | 27 |
| Page fault | Required page not in RAM | 28–30 |
| Page replacement | Select victim frame when RAM is full | 31–32 |
| FIFO | Oldest page replaced; has Belady’s anomaly | 33–34 |
| OPT | Replaces farthest future use; lowest faults | 35 |
| LRU | Replaces least recently used page | 36 |
| Page buffering | Keep free frame pool ready | 37 |

---

# Important Formulae and Worked Calculations

## 1. Address Capacity

```text
For n bits address:
Memory capacity = 2^n bytes
```

### Example

```text
n = 16
Memory capacity = 2^16 bytes
                = 65,536 bytes
                = 64 KB
```

## 2. Paging Address Division

```text
Logical address = (page number p, page offset d)
Physical address = (frame number f, page offset d)
```

For logical address space `2^m` and page size `2^n`:

```text
Offset bits = n
Page number bits = m - n
```

## 3. Effective Access Time with TLB

Complete form:

```text
EAT = α × (ϵ + memory access time) + (1 - α) × (ϵ + 2 × memory access time)
```

Where:

- `α` = hit ratio
- `ϵ` = associative lookup/TLB lookup time
- memory access time = time to access physical memory

Using slide values:

```text
α = 0.80
ϵ = 20 ns
memory access time = 100 ns

EAT = 0.80 × (20 + 100) + 0.20 × (20 + 200)
EAT = 0.80 × 120 + 0.20 × 220
EAT = 96 + 44
EAT = 140 ns
```

Simplified slide calculation ignoring TLB lookup time:

```text
EAT = 0.80 × 100 + 0.20 × 200
EAT = 120 ns
```

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---:|---|---|
| 4 | CPU ↔ Memory ↔ I/O | Main memory is shared by CPU and I/O; CPU directly accesses memory/registers |
| 6 | CPU ↔ RAM ↔ Hard Disk | Programs move from disk to RAM before CPU execution |
| 8 | Binary/hex memory addresses | n-bit address gives `2^n` byte addresses |
| 11 | Swapping | Processes move between RAM and backing store |
| 13 | Base/limit register diagram | Legal memory range is protected by base and limit registers |
| 14 | Multiple-partition allocation | Processes enter/leave memory, creating holes |
| 18 | Paging mapping | Logical pages map to non-contiguous physical frames |
| 21 | Paging hardware | Logical address `(p,d)` becomes physical address `(f,d)` |
| 22 | Free frames | OS assigns free frames to process pages and builds a page table |
| 23 | TLB hardware | TLB speeds page-to-frame translation |
| 26 | Valid/invalid bit | Page table entries mark legal and illegal pages |
| 27 | Demand paging | Only required pages are loaded into RAM |
| 29 | Page fault handling | Trap, locate page, load page, update table, restart instruction |
| 31 | Page replacement | Victim page swapped out, desired page swapped in |
| 34 | FIFO 3 vs 4 frames | Demonstrates Belady’s anomaly |
| 35 | OPT example | 4-frame OPT gives 6 page faults |
| 36 | LRU example | 4-frame LRU gives 8 page faults |

---

# Likely Exam Questions and Short Answers

## Question 1
What is main memory?

**Expected Answer:**  
Main memory is a large array of words or bytes, each having its own address. It stores quickly accessible data shared by CPU and I/O devices. Memory and registers are the only storage the CPU can directly access.

## Question 2
Why must a program be loaded into main memory before execution?

**Expected Answer:**  
The CPU cannot directly execute programs from the hard disk. Programs stored in secondary storage must be loaded into main memory because main memory and registers are the only storage directly accessible by the CPU.

## Question 3
List the memory management responsibilities of the OS.

**Expected Answer:**  
The OS tracks which parts of memory are used and by whom, decides which processes to load when memory becomes available, and allocates/deallocates memory.

## Question 4
For an n-bit address, what is the memory capacity?

**Expected Answer:**  
For an n-bit address, memory capacity is `2^n` bytes. For example, a 16-bit address gives `2^16 = 65,536 bytes = 64 KB`.

## Question 5
Explain compile-time, load-time, and execution-time address binding.

**Expected Answer:**  
Compile-time binding generates fixed absolute addresses if the starting location is known. Load-time binding generates relocatable code and the loader adjusts addresses when loading. Execution-time binding dynamically translates logical addresses to physical addresses during execution using the MMU.

## Question 6
Differentiate logical address and physical address.

**Expected Answer:**

| Logical Address | Physical Address |
|---|---|
| Generated by CPU | Seen by memory unit |
| Also called virtual address | Actual RAM address |
| Belongs to logical address space | Belongs to physical address space |

## Question 7
What is swapping?

**Expected Answer:**  
Swapping is a memory management technique where a process is moved temporarily from main memory to backing store and later brought back into memory.

## Question 8
Define contiguous allocation.

**Expected Answer:**  
Contiguous allocation is a technique where each process is allocated one continuous block of memory in RAM. The OS finds a large enough adjacent free block before loading the process.

## Question 9
Explain base and limit registers.

**Expected Answer:**  
The base register stores the smallest legal address for a process, while the limit register stores the size of the legal range. Together they protect processes from accessing memory outside their allowed region.

## Question 10
Compare first-fit, best-fit, and worst-fit allocation.

**Expected Answer:**

| Method | Meaning |
|---|---|
| First-fit | Allocates the first hole large enough |
| Best-fit | Allocates the smallest hole large enough |
| Worst-fit | Allocates the largest hole |

First-fit and best-fit are generally better than worst-fit in speed and storage utilization.

## Question 11
Differentiate internal and external fragmentation.

**Expected Answer:**

| External Fragmentation | Internal Fragmentation |
|---|---|
| Free memory exists but is not contiguous | Allocated memory is larger than requested |
| Happens outside allocated partitions | Happens inside allocated partitions |
| Reduced by compaction/paging | Reduced by better block sizing |

## Question 12
How does compaction reduce external fragmentation?

**Expected Answer:**  
Compaction shuffles memory contents so scattered free holes are combined into one large free block. It is possible only when relocation is dynamic and performed at execution time.

## Question 13
What is paging?

**Expected Answer:**  
Paging divides logical memory into fixed-size pages and physical memory into same-size frames. A page table maps pages to frames, allowing a process to be stored non-contiguously in RAM.

## Question 14
Explain page and frame.

**Expected Answer:**  
A page is a fixed-size block of logical memory. A frame is a fixed-size block of physical memory. Pages are loaded into frames.

## Question 15
Explain address translation in paging.

**Expected Answer:**  
The CPU generates a logical address containing page number `p` and offset `d`. The page number indexes the page table to find frame number `f`. The physical address is formed by combining `f` with the same offset `d`.

## Question 16
What is a TLB?

**Expected Answer:**  
A Translation Lookaside Buffer is a fast associative memory that stores recent page-table entries. It reduces effective memory access time by avoiding repeated page table lookups.

## Question 17
Define hit ratio.

**Expected Answer:**  
Hit ratio is the percentage of times that a page number is found in the TLB/associative registers.

## Question 18
What is demand paging?

**Expected Answer:**  
Demand paging is a virtual memory technique where pages are loaded into RAM only when they are actually needed, instead of loading the entire program in advance.

## Question 19
What is a page fault?

**Expected Answer:**  
A page fault occurs when the CPU tries to access a page that is not currently in RAM. The OS then finds the required page on disk, loads it into a free frame, updates the page table, and restarts the instruction.

## Question 20
List the steps in handling a page fault.

**Expected Answer:**

1. CPU references a page.
2. Page is not in memory, causing a trap to OS.
3. OS locates the page in backing store.
4. OS finds a free frame or selects a victim frame.
5. Missing page is loaded into RAM.
6. Page table is updated.
7. Instruction is restarted.

## Question 21
What happens if there are no free frames during a page fault?

**Expected Answer:**  
The OS uses a page replacement algorithm to choose a victim frame. If the victim page is dirty, it is written to disk. Then the desired page is loaded into the free frame, tables are updated, and the instruction restarts.

## Question 22
Explain FIFO page replacement.

**Expected Answer:**  
FIFO uses a queue and replaces the page at the head of the queue, meaning the oldest loaded page is removed first. New pages are inserted at the tail. FIFO can suffer from Belady’s anomaly.

## Question 23
What is Belady’s anomaly?

**Expected Answer:**  
Belady’s anomaly is the situation where increasing the number of frames results in more page faults. In the lecture example, FIFO gives 9 faults with 3 frames but 10 faults with 4 frames.

## Question 24
Explain OPT page replacement.

**Expected Answer:**  
OPT replaces the page that will not be used for the longest period of time in the future. It gives the lowest page fault rate and does not suffer from Belady’s anomaly, but it is difficult to implement because it requires future knowledge.

## Question 25
Explain LRU page replacement.

**Expected Answer:**  
LRU replaces the page that has not been used for the longest period of time. It uses past access history and belongs to stack algorithms that do not suffer from Belady’s anomaly.

## Question 26
Compare FIFO, OPT, and LRU.

**Expected Answer:**

| Algorithm | Replacement Rule | Advantage | Limitation |
|---|---|---|---|
| FIFO | Replaces oldest loaded page | Simple | Suffers from Belady’s anomaly |
| OPT | Replaces page used farthest in future | Lowest page faults | Needs future knowledge |
| LRU | Replaces least recently used page | Good practical approximation | Needs tracking of recent use |

## Question 27
What are page-buffering algorithms?

**Expected Answer:**  
Page-buffering algorithms keep a pool of free frames ready so a frame is available when needed. They may also keep a list of modified pages and write them to backing store when the disk is idle.

---

# Common Mistakes to Avoid

- Writing `2 × n` instead of `2^n` for address capacity.
- Saying the CPU directly executes programs from the hard disk.
- Confusing logical address with physical address.
- Forgetting that execution-time binding uses MMU translation.
- Saying contiguous allocation stores a process in scattered frames.
- Mixing up internal and external fragmentation.
- Saying compaction fixes internal fragmentation.
- Forgetting that pages and frames are the same size in paging.
- Saying page 0 must always go into frame 0.
- Forgetting that offset `d` remains unchanged during paging translation.
- Saying TLB stores full pages. It stores translation entries.
- Treating every page fault as a program crash.
- Forgetting to write dirty victim pages back to disk.
- Confusing FIFO with LRU.
- Saying FIFO never suffers when frames increase. FIFO can suffer from Belady’s anomaly.
- Saying OPT is easy to implement in real systems. It requires future knowledge.
- Forgetting that LRU is based on last use, not first arrival.

---

# Final One-Page Revision Notes

## Core Memory Concepts

```text
CPU directly accesses only:
1. Registers
2. Main memory / RAM
```

Main memory:

- large array of bytes/words
- each location has an address
- volatile
- stores active program instructions/data
- divided into kernel memory and user memory

## OS Memory Management Duties

```text
OS tracks memory usage
OS decides which process to load
OS allocates memory
OS deallocates memory
```

## Address Binding

| Stage | Key Point |
|---|---|
| Compile time | Fixed absolute addresses |
| Load time | Relocatable code adjusted by loader |
| Execution time | Logical addresses translated by MMU |

## Logical vs Physical Address

```text
CPU generates logical/virtual address
MMU translates it
Memory unit sees physical address
```

## Contiguous Allocation

```text
Each process gets one continuous RAM block.
Problem: fragmentation.
```

## Fragmentation

| Type | Meaning |
|---|---|
| External | Free memory exists but not contiguous |
| Internal | Unused space inside allocated block |

## Paging

```text
Logical memory → pages
Physical memory → frames
Page table maps page → frame
```

Logical address:

```text
(p, d)
p = page number
d = page offset
```

Physical address:

```text
(f, d)
f = frame number from page table
d = same offset
```

## TLB

```text
TLB = fast cache of page-table entries
TLB hit = fast translation
TLB miss = access page table
```

## Demand Paging

```text
Load page only when needed.
If page not in RAM → page fault.
```

## Page Fault Handling

```text
Reference page
↓
Trap to OS
↓
Find page on disk
↓
Find free frame or replace victim
↓
Load page into RAM
↓
Update page table
↓
Restart instruction
```

## Page Replacement Algorithms

| Algorithm | Rule | Important Point |
|---|---|---|
| FIFO | Remove oldest loaded page | Can suffer Belady’s anomaly |
| OPT | Remove page used farthest in future | Lowest faults, needs future knowledge |
| LRU | Remove least recently used page | Does not suffer Belady’s anomaly |

## Slide Example Results

| Algorithm/Case | Frames | Page Faults |
|---|---:|---:|
| FIFO | 3 | 9 |
| FIFO | 4 | 10 |
| OPT | 4 | 6 |
| LRU | 4 | 8 |

## Must-Use Exam Keywords

- main memory
- volatile
- address binding
- logical address
- physical address
- MMU
- contiguous allocation
- base register
- limit register
- external fragmentation
- internal fragmentation
- compaction
- paging
- page
- frame
- page table
- TLB
- hit ratio
- demand paging
- page fault
- victim frame
- dirty page
- FIFO
- Belady’s anomaly
- OPT
- LRU
- stack algorithm
- page buffering

---

# Execution Checklist

- [x] Read the uploaded PDF content.
- [x] Read the uploaded TXT content.
- [x] Compared PDF visual content with extracted text.
- [x] Preserved original PDF page order.
- [x] Included all 39 uploaded PDF pages.
- [x] Added page numbers and slide titles.
- [x] Included lecture text content.
- [x] Explained diagrams and visual meanings.
- [x] Recreated key flows using Markdown text diagrams.
- [x] Added formulae and worked calculations.
- [x] Added definitions and simple explanations.
- [x] Added exam tips and common mistakes.
- [x] Added important diagrams summary.
- [x] Added likely exam questions and expected answers.
- [x] Added final one-page revision notes.
- [x] Created only one `.md` file.
