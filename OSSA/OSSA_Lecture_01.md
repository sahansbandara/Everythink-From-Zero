# IT2130 - Operating Systems and System Administration  
## Lecture 01: Introduction to Operating Systems — Part I

**Institution:** Sri Lanka Institute of Information Technology  
**Faculty:** Faculty of Computing  
**Lecturer:** Dr. Sanvitha Kasthuriarachchi  
**Academic Level:** Year 02 and Semester 02  
**Original PDF length:** 30 slides/pages  

---

# Page Order Map

| Original PDF Page | Topic |
|---:|---|
| 1 | Module title page |
| 2 | Lecture title: Introduction to Operating Systems Part I |
| 3 | Computer System Structure |
| 4 | Abstract View of Components of Computer |
| 5 | Software |
| 6 | What is an Operating System (OS)? |
| 7 | Purposes of using an Operating System |
| 8 | Main Types of Operating Systems |
| 9 | User Interface of the Operating System |
| 10 | Graphical User Interface and Command Line Interface |
| 11 | CLI vs GUI |
| 12 | Components of Operating Systems |
| 13 | OS Services: UI and Program Execution |
| 14 | OS Services: I/O, File System, Communication, Error Detection |
| 15 | OS Services: Resource Allocation, Accounting, Protection and Security |
| 16 | System Calls |
| 17 | Examples for System Calls |
| 18 | System Programs or Utilities |
| 19 | Operations of OS: Dual Mode Operation |
| 20 | Operations of OS: Privileged Instructions |
| 21 | Operations of OS: I/O Device Protection |
| 22 | Operations of OS: Memory Protection |
| 23 | Operations of OS: CPU Protection |
| 24 | Interrupts and Types |
| 25 | Interrupt Handling |
| 26 | Operating System Design Goals |
| 27 | Policy and Mechanism |
| 28 | End of Lecture 1 |
| 29 | Weekly Plan |
| 30 | Thank You |

---

# Page 1 — Module Title Page

## IT2130 - Operating Systems and System Administration

This lecture belongs to the module **IT2130 - Operating Systems and System Administration** at the **Sri Lanka Institute of Information Technology, Faculty of Computing**.

### Key Details

| Field | Details |
|---|---|
| Institute | Sri Lanka Institute of Information Technology |
| Faculty | Faculty of Computing |
| Module Code | IT2130 |
| Module Name | Operating Systems and System Administration |
| Lecturer | Dr. Sanvitha Kasthuriarachchi |
| Semester | Year 02 and Semester 02 |

---

# Page 2 — Lecture Title

## Lecture 01  
## Introduction to Operating Systems — Part I

This lecture introduces the foundation of operating systems. It explains what an operating system is, why it is needed, the services it provides, how it protects the computer system, and how interrupts/system calls work.

---

# Page 3 — Computer System Structure

## Computer System Structure

A computer system is divided into **four major components**:

| No. | Component | Meaning |
|---:|---|---|
| 1 | **Hardware** | Provides basic computing resources such as CPU, memory, and I/O devices. |
| 2 | **Operating System** | Controls and coordinates the use of hardware among different applications and users. |
| 3 | **Application Programs** | Define how system resources are used to solve users' computing problems. Examples: word processors, compilers, web browsers, database systems, and video games. |
| 4 | **Users** | People, machines, or other computers that interact with the system. |

## Simple Structure

```text
Users
  ↓
Application Programs
  ↓
Operating System
  ↓
Hardware
```

## Explanation

The operating system sits between **application programs** and **hardware**. Users normally do not directly control hardware. Instead, users interact with application programs, and those programs request services from the operating system.

## Exam Point

A computer system is not only hardware. It includes hardware, OS, applications, and users. The operating system is the controller/coordinator.

---

# Page 4 — Abstract View of Components of Computer

## Abstract View of Computer Components

The slide shows two abstract views.

## Diagram 1: Layered Computer System View

```text
User
 ↓
Application Programs
(compilers, web browsers, development kits, etc.)
 ↓
Operating System
 ↓
Computer Hardware
(CPU, memory, I/O devices, etc.)
```

### Explanation

- The **user** works with application programs.
- **Application programs** request OS services.
- The **operating system** manages and controls hardware.
- **Hardware** provides actual computing power and devices.

## Diagram 2: User Mode and Kernel Mode View

```text
Software
├── User Mode
│   ├── Web Browser
│   ├── Email Reader
│   ├── Music Player
│   └── User Interface Program
│
└── Kernel Mode
    └── Operating System

Hardware
└── Physical computer resources
```

### Explanation

The diagram separates computer operation into:

| Mode | Runs What? | Purpose |
|---|---|---|
| **User Mode** | User applications such as browser, email reader, and music player | Limited access, safer execution |
| **Kernel Mode** | Operating system core | Full control over hardware and system resources |

## Key Idea

Applications run in **user mode**, while the OS core runs in **kernel/monitor mode**. This prevents user programs from directly damaging hardware or system memory.

---

# Page 5 — Software

## Software Classification

The slide shows that **software** is divided into two major categories:

```text
Software
├── System Software
│   ├── Software which runs on hardware to provide services to user
│   ├── Operating System
│   ├── Utility Software
│   └── Language Translators
│
└── Application Software
    ├── Software which runs on operating system to provide service to user
    ├── General Purpose
    └── Special Purpose
```

## System Software

System software runs close to the hardware and provides services to users and applications.

### Examples

| Type | Meaning |
|---|---|
| Operating System | Manages hardware and provides services to programs |
| Utility Software | Helps maintain and manage the computer |
| Language Translators | Convert programs into machine-understandable form |

## Application Software

Application software runs on top of the operating system and helps users perform tasks.

### Types

| Type | Meaning |
|---|---|
| General Purpose | Software used for common tasks, such as word processing or browsing |
| Special Purpose | Software designed for a specific task or organization |

## Exam Point

System software supports the computer system. Application software supports user tasks.

---

# Page 6 — What is an Operating System (OS)?

## Definition

An **Operating System** is a program that acts as an **intermediary/interface** between a user of a computer and the computer hardware.

```text
User ↔ Operating System ↔ Hardware
```

## OS Goals

The goals of an operating system are:

1. **Control/execute user/application programs**
2. **Make the computer system convenient to use**
3. **Ease the solving of user problems**
4. **Use the computer hardware in an efficient manner**

## Explanation

The OS hides hardware complexity. Instead of users manually controlling CPU, memory, files, and devices, the OS provides a controlled environment for running programs.

## Memory Trick

**C-C-E-E**

| Letter | Meaning |
|---|---|
| C | Control/execute programs |
| C | Convenient to use |
| E | Ease problem solving |
| E | Efficient hardware use |

---

# Page 7 — Purposes of using an Operating System

## Main Purposes

The purposes of using an operating system are:

1. **Provide the environment for program execution and development**
2. **Manage the resources of the computer**
   - CPU
   - Memory
   - I/O devices
   - Hard disk
   - Files
3. **Provide access controlling**
   - Username
   - Password

## Explanation

The operating system is responsible for both **running programs** and **protecting resources**. Without an OS, users would have to manually manage hardware, memory, devices, and file access.

## Exam Point

When asked “Why do we need an OS?”, mention three areas:

```text
Execution + Resource Management + Access Control
```

---

# Page 8 — Main Types of Operating Systems

## Two Main Types

There are two types of operating systems:

| Type | Description |
|---|---|
| **Open-Source OS** | Code is open and anyone can freely download the OS. |
| **Closed-Source OS** | Code is locked and users need to buy or license the OS. |

## Open-Source OS

Open-source operating systems allow users/developers to view, modify, and distribute the source code.

### Examples shown/related in the slide image

- Ubuntu
- Linux
- Android
- SUSE
- MeeGo
- OpenOffice ecosystem examples shown near open-source side

## Closed-Source OS

Closed-source operating systems do not provide source code freely. The code is locked and controlled by the company/vendor.

### Examples shown/related in the slide image

- Microsoft Windows
- Apple/iOS related software icons
- Microsoft Office
- Adobe Photoshop
- McAfee
- CorelDRAW

## Comparison Table

| Feature | Open-Source OS | Closed-Source OS |
|---|---|---|
| Source code | Open | Locked |
| Cost | Usually free | Usually paid/licensed |
| Modification | Allowed | Not allowed by normal users |
| Control | Community/developer controlled | Vendor/company controlled |
| Example | Linux, Ubuntu | Windows, macOS/iOS ecosystem |

## Exam Point

Do not only say “free vs paid.” The main difference is **source code availability**.

---

# Page 9 — User Interface of the Operating System

## Definition

A **user interface** of an operating system is the layer that allows users to interact with the computer’s hardware and software.

## Functions of UI

Users can:

- Provide inputs
- See system responses
- Understand system output in a human-readable form

## Two Types of User Interfaces

1. **Command Line Interface (CLI)**
2. **Graphical User Interface (GUI)**

## Simple Diagram

```text
User
 ↓ input
User Interface
 ↓ command/request
Operating System
 ↓ control
Hardware / Software Resources
```

---

# Page 10 — Graphical User Interface and Command Line Interface

## GUI and CLI Visual Comparison

The slide shows:

| Interface | Visual Example |
|---|---|
| **Graphical User Interface** | Windows-style screen with icons and tiles |
| **Command Line Interface** | Black command prompt screen with typed commands |

## GUI

A GUI uses visual elements such as:

- Windows
- Icons
- Menus
- Pointer/mouse

## CLI

A CLI uses typed commands. Users type commands into a terminal or command prompt.

## Explanation

GUI is easier for beginners because users can click visible options. CLI is more powerful and faster for experienced users, but commands must be remembered.

---

# Page 11 — Command Line Interface Vs. Graphical User Interface

## Command Line Interface (CLI)

### Features

- Operates via commands
- User has to remember commands
- Not very user-friendly
- Needs fewer resources
- Comparatively faster
- Main component: **Command interpreter**

## Graphical User Interface (GUI)

### Features

- Provides a user-friendly environment
- Easy for a novice/beginner user to learn
- Requires more resources to function
- Comparatively slower
- Main components:
  - Icons
  - Menus
  - Pointer

## Comparison Table

| Feature | CLI | GUI |
|---|---|---|
| Interaction method | Typed commands | Visual elements |
| Ease of use | Harder for beginners | Easier for beginners |
| Speed | Faster | Slower compared to CLI |
| Resource usage | Less resources | More resources |
| Main component | Command interpreter | Icons, menus, pointer |
| Example | Terminal, Command Prompt | Windows desktop, macOS desktop |

## Memory Trick

**CLI = Command, Less resources, Interpreter**  
**GUI = Graphics, User-friendly, Icons**

---

# Page 12 — Components of Operating Systems

## Main Components

The components of operating systems are:

1. **Process Management**
2. **Main-memory Management**
3. **Secondary-storage Management**
4. **File Management**
5. **I/O System Management**
6. **Protection System**
7. **Networking (Distributed Systems)**
8. **Command-interpreter System**

## Explanation Table

| Component | Purpose |
|---|---|
| Process Management | Manages running programs/processes |
| Main-memory Management | Manages RAM allocation and protection |
| Secondary-storage Management | Manages disks and long-term storage |
| File Management | Handles files and directories |
| I/O System Management | Controls input/output devices |
| Protection System | Controls access and permissions |
| Networking | Supports communication between systems |
| Command-interpreter System | Accepts and interprets user commands |

## Exam Tip

If asked to list OS components, write all eight. If asked to explain, use one line for each.

---

# Page 13 — Services provided by Operating Systems

## Service 1: User Interface

The OS provides a user interface to work with the computer.

### Types

- Command Line Interface (CLI)
- Graphical User Interface (GUI)

## Service 2: Program Execution Environment

The OS provides an environment for program execution.

### How it works

- OS loads programs
- OS runs programs
- OS handles program completion

Program completion may happen:

| Completion Type | Meaning |
|---|---|
| Normal completion | Program finishes correctly |
| Abnormal completion | Program stops because of an error |

## Explanation

When a program starts, the OS loads it into memory, gives it CPU time, manages required resources, and handles its ending.

---

# Page 14 — Services provided by Operating Systems

## Service 3: I/O Operations

The OS provides support to execute I/O operations.

### Important Point

User programs **cannot execute I/O operations directly**.

Instead, user programs must request the OS to perform I/O operations.

## Service 4: File-System Manipulation

The OS provides mechanisms for file-system manipulation.

### Capabilities

- Read files
- Write files
- Create files
- Delete files
- Manage directory trees

## Service 5: Process Communication

The OS provides mechanisms for process communication.

### Communication can happen between:

- Processes on the same computer
- Processes on different systems through a network

## Service 6: Error Detection

The OS detects:

- Device errors
- Program errors

Then it takes appropriate actions to ensure correct and consistent computing.

## Summary Diagram

```text
User Program
   ↓ request
Operating System
   ├── I/O operations
   ├── File operations
   ├── Process communication
   └── Error detection/handling
```

---

# Page 15 — Services provided by Operating Systems

## Service 7: Resource Allocation

The OS allocates resources to:

- Multiple users
- Multiple jobs running at the same time

### Example

- CPU scheduling

## Service 8: Accounting

The OS keeps track of resource usage.

### Accounting tracks:

- Which users used resources
- How much resources were used
- What kinds of resources were used

### Uses

- Account billing
- Usage statistics

## Service 9: Protection and Security

The OS ensures that all access to system resources is controlled.

### Example

- Access permissions

## Summary Table of OS Services

| Service | Meaning |
|---|---|
| User Interface | Allows users to interact with the system |
| Program Execution | Loads, runs, and ends programs |
| I/O Operations | Allows safe input/output through OS |
| File-System Manipulation | Read, write, create, delete files/directories |
| Process Communication | Allows processes to exchange information |
| Error Detection | Detects and handles device/program errors |
| Resource Allocation | Shares CPU, memory, and devices |
| Accounting | Tracks resource usage |
| Protection and Security | Controls access to resources |

---

# Page 16 — System Calls

## Definition

A **system call** is a user interface to the OS services.

In simple terms, a system call is the method used by user programs to request services from the operating system.

```text
User Program → System Call → Operating System Service
```

## System Call Result / Termination

A system call or program may terminate in two ways:

| Termination Type | Meaning |
|---|---|
| **Normal termination** | Program exits or returns correctly |
| **Abnormal termination** | Program error occurs; trap happens |

## Details

- Normal termination may happen through **exit** or **return**.
- After normal termination, the current program terminates and returns to the command interpreter.
- Abnormal termination happens due to a program error, usually called a **trap**.

## System Call Flow Diagram from Slide

The slide shows:

```text
User Application
   |
   | open()
   ↓
System Call Interface
   |
   ↓
Implementation of open() system call
   |
   ↓
Return
```

The diagram also shows movement between:

```text
User Mode
Kernel Mode
```

## Explanation

A user application cannot directly access OS internals. It makes a system call, the OS switches control to kernel mode, executes the requested service, and returns the result.

---

# Page 17 — Examples for System Calls

## System Call Categories and Examples

The slide contains a table of system call categories.

| Name and Task of the System Call | Task Description | Examples |
|---|---|---|
| **Process Control** | End, abort running program, load, execute, create, terminate, signal event | `fork()`, `exit()`, `wait()` |
| **File Management** | Create, delete, open, close; read, write, reposition; get and set file attributes | `open()`, `read()`, `write()`, `close()` |
| **Device Management** | Request device, release device, read, write, reposition | `ioctl()`, `read()`, `write()` |
| **Information Maintenance** | Get or set time/date; get or set process attributes | `getpid()`, `alarm()`, `sleep()` |
| **Communications** | Create/delete communication connection; send and receive messages | `pipe()`, `shmget()`, `mmap()` |
| **Protection** | Resource access control | `chmod()`, `umask()`, `chown()` |

## Explanation of Key Examples

| System Call | Simple Meaning |
|---|---|
| `fork()` | Creates a new process |
| `exit()` | Ends a process |
| `wait()` | Waits for a child process to finish |
| `open()` | Opens a file |
| `read()` | Reads data |
| `write()` | Writes data |
| `close()` | Closes a file |
| `ioctl()` | Controls device-specific operations |
| `getpid()` | Gets process ID |
| `alarm()` | Sets alarm signal/timer |
| `sleep()` | Pauses execution temporarily |
| `pipe()` | Creates communication channel |
| `shmget()` | Gets shared memory segment |
| `mmap()` | Maps files/memory into process address space |
| `chmod()` | Changes file permissions |
| `umask()` | Sets default permission mask |
| `chown()` | Changes file owner |

## Exam Tip

If asked for system call examples, categorize them. Do not list random calls only.

---

# Page 18 — System Programs or Utilities

## Definition

**System programs or utilities** are a set of tools provided by the operating system to help users manage files, devices, and system settings easily.

## Categories of System Programs

| Category | Description | Examples / Tasks |
|---|---|---|
| File Manipulation | Manage files | Create, delete, copy, rename, print, dump, list |
| Status Information | Show system status | Date, time, memory, disk space, number of users |
| File Modification | Edit file contents | Text editors |
| Programming-Language Support | Support software development | Compilers, interpreters, assemblers |
| Program Loading and Execution | Load and execute programs | Absolute loaders, relocatable loaders, overlay loaders |
| Communication | Connect processes/users/systems | Virtual connections among processes, users, and computer systems |

## Explanation

System programs are not the OS kernel itself. They are helpful utilities that make the operating system easier to use.

## Example

A text editor is a system utility because it helps users create and modify files.

---

# Page 19 — Operations of Operating Systems: Dual Mode Operation

## Dual Mode Operation

Hardware provides at least two modes of operation:

| Mode | Description |
|---|---|
| **User Mode** | The mode in which user programs run |
| **Monitor Mode** | Also known as supervisor, system, or privileged mode; used by the operating system core |

## Mode Bit

Hardware provides a **mode bit** to indicate the current mode.

| Mode Bit Value | Mode |
|---:|---|
| 0 | Monitor mode |
| 1 | User mode |

## Diagram from Slide

```text
Monitor Mode (0)  --set user mode-->  User Mode (1)
      ↑                                  |
      |                                  |
      └-------- interrupt/fault ----------
```

## Explanation

- OS starts in monitor mode.
- User programs run in user mode.
- If an interrupt or fault occurs, hardware switches back to monitor mode so the OS can handle it.

## Exam Point

Dual mode operation protects the system by separating user execution from OS-level privileged execution.

---

# Page 20 — Operations of Operating Systems: Privileged Instructions

## Privileged Instructions

Some machine instructions can cause harm if executed by normal user programs. These are called **privileged instructions**.

## Key Points

- A privileged instruction can be executed only in **monitor mode**.
- At system boot-time, while the OS loads, hardware starts in **monitor mode**.
- The OS starts user processes in **user mode**.
- A user process cannot gain control of the computer in monitor mode.
- When an interrupt or fault occurs, hardware switches to **monitor mode**.

## Explanation

Privileged instructions are restricted because they can directly affect hardware, memory, I/O devices, and system control.

## Example

Loading a timer value, changing base/limit registers, or performing direct I/O control may be privileged.

---

# Page 21 — Operations of Operating Systems: I/O Device Protection

## I/O Device Protection

The operating system performs I/O device protection using privileged instructions.

## Key Point

User programs perform I/O operations using **system calls**.

## Flow

The slide explains this sequence:

1. User program requests I/O using a system call.
2. The system call usually takes the form of a **trap** to a specific location in the interrupt vector.
3. Control passes through the interrupt vector to a service routine in the OS.
4. The mode bit is set to **monitor mode**.
5. The monitor verifies that parameters are correct and legal.
6. The OS executes the request.
7. Control returns to the instruction following the system call.

## Diagram

```text
User Program
   ↓ system call / trap
Interrupt Vector
   ↓
OS Service Routine
   ↓ verify parameters
Execute I/O Request
   ↓
Return to User Program
```

## Explanation

User programs cannot directly access devices because that would be unsafe. The OS checks whether the request is valid before allowing device access.

---

# Page 22 — Operations of Operating Systems: Memory Protection

## Memory Protection

The operating system provides memory protection.

## Key Points

- The OS has unrestricted access to monitor and user memory.
- Two registers determine the range of legal addresses for a program:
  - **Base register**
  - **Limit register**
- Memory outside the defined range is protected.
- Loading values into base and limit registers is a privileged instruction.

## Base Register

The **base register** holds the smallest legal physical memory address.

## Limit Register

The **limit register** contains the size of the memory range.

## Diagram Explanation from Slide

The slide shows memory divided into regions:

```text
0
|
| Operating System
|
256000
|
| Process
|
300040  ← Base = 300040
|
| Process legal address range
|
420940  ← Limit = 120900
|
| Process
|
880000
|
1024000
```

The visible values in the slide include:

| Label | Value |
|---|---:|
| Base | 300040 |
| Limit | 120900 |

## How Base + Limit Works

```text
Legal Memory Range = Base address to Base + Limit
```

Using the slide values:

```text
Base = 300040
Limit = 120900

Legal range = 300040 to 420940
```

## Explanation

If a program tries to access memory outside its allowed range, the OS blocks it. This prevents one process from damaging another process or the OS.

## Exam Point

Base and limit registers are used for memory protection. Loading these registers is privileged.

---

# Page 23 — Operations of Operating Systems: CPU Protection

## CPU Protection

The operating system provides CPU protection.

## Purpose

The OS must prevent one user or one process from using the CPU all the time.

## Timer Interrupt

The OS uses a **timer interrupt** after a specified period to ensure that it maintains control.

## Timer Operation

- Timer is decremented every clock tick.
- When timer reaches value `0`, an interrupt occurs.
- Timer is commonly used to implement **time sharing**.
- Loading timer value is a privileged instruction.

## Diagram

```text
Process gets CPU
   ↓
Timer starts
   ↓ every clock tick
Timer decreases
   ↓
Timer = 0
   ↓
Interrupt occurs
   ↓
Control returns to OS
```

## Explanation

CPU protection allows the OS to switch between processes. Without a timer, one program could keep the CPU forever.

## Exam Point

Timer interrupt is the mechanism used to implement CPU protection and time sharing.

---

# Page 24 — Interrupts and Its Types

## Definition

**Interrupts** are signals sent to the CPU by external devices, normally I/O devices.

## Main Function

An interrupt suspends the execution of one program and begins the execution of another program.

## Three Types of Interrupts

| Type | Meaning |
|---|---|
| **Hardware Interrupts** | Generated by hardware devices to signal that they need attention from the OS |
| **Software Interrupts** | Generated by programs when they want to request a system call from the OS |
| **Traps** | Generated by the CPU itself to indicate an error or condition that needs OS assistance |

## Explanation

Interrupts allow the CPU to respond to events immediately instead of continuously checking every device.

## Examples

| Interrupt Type | Example Situation |
|---|---|
| Hardware Interrupt | Keyboard input, disk I/O completion |
| Software Interrupt | Program calls OS service |
| Trap | Divide-by-zero error, invalid memory access |

## Memory Trick

**H-S-T**

| Letter | Type |
|---|---|
| H | Hardware Interrupt |
| S | Software Interrupt |
| T | Trap |

---

# Page 25 — Interrupt Handling

## Interrupt Handling Process

When an interrupt occurs:

1. The interrupt suspends the running program in the CPU.
2. Control is handed over to the OS.
3. The OS keeps the state of the suspended program in registers, especially the **Program Counter**.
4. Each interrupt has a separate segment of code in the OS called an **Interrupt Service Routine (ISR)**.
5. The ISR determines what action should be taken.
6. The address of the ISR is available in the **Interrupt Vector (IV)** in memory.
7. The OS provides memory protection at least for the ISR and IV.

## Key Terms

| Term | Meaning |
|---|---|
| Program Counter | Register that stores the address of the next instruction |
| ISR | Interrupt Service Routine; code that handles a specific interrupt |
| IV | Interrupt Vector; memory table containing addresses of ISRs |

## Diagram

```text
Running Program
   ↓ interrupt
CPU suspends program
   ↓
OS saves state / Program Counter
   ↓
Interrupt Vector finds ISR address
   ↓
ISR executes
   ↓
Control returns after handling
```

## Exam Point

ISR is the code that handles interrupts. Interrupt Vector stores ISR addresses.

---

# Page 26 — Operating System Design Goals

## What Affects OS Design?

The design of the operating system is affected by:

- Hardware choice
- System type

## User Goals

From the user's point of view, the OS should be:

- Convenient to use
- Easy to learn
- Reliable
- Safe
- Fast

## System Goals

From the system/developer point of view, the OS should be:

- Easy to design
- Easy to implement
- Easy to maintain
- Flexible
- Reliable
- Error-free
- Efficient

## Comparison Table

| Goal Type | Focus |
|---|---|
| User Goals | Usability, speed, safety, reliability |
| System Goals | Design quality, maintainability, flexibility, efficiency |

## Explanation

Users care about ease of use and performance. System designers care about correct design, maintainability, and efficiency.

---

# Page 27 — Operating System Design Goals: Policy and Mechanism

## Separation of Policy and Mechanism

Separation of policy and mechanism is a very important principle in OS design.

## Mechanism

**Mechanisms determine how to do something.**

## Policy

**Policies decide what will be done.**

## Important Point

Policies are likely to change from place to place and time to time. Therefore, a general mechanism is more desirable.

## Example from Slide

A mechanism for ensuring CPU protection is the **timer construct**.

The decision on how long the timer is set for a particular user is a **policy decision**.

## Explanation Table

| Concept | Meaning | Example |
|---|---|---|
| Mechanism | How something is done | Timer interrupt mechanism |
| Policy | What decision is made | How long the timer should be set |

## Simple Example

```text
Mechanism: Timer can interrupt a process.
Policy: Process A gets 10 ms, Process B gets 20 ms.
```

## Exam Point

This is a likely theory question. Always explain with the timer example.

---

# Page 28 — End of Lecture 1

## End of Lecture 1

This slide marks the end of the main lecture content.

---

# Page 29 — Weekly Plan

## Practical

- Introducing C programming

## Workshop

- Summary: Introduction to Operating Systems
- Discussion of Tutorial 1

## Explanation

The practical component connects this OS module with C programming, because many OS-level concepts such as system calls, process management, file handling, and memory handling are commonly demonstrated using C.

---

# Page 30 — Thank You

## Thank You Slide

The final slide contains a “Thank You!” image.

This is the closing slide of Lecture 01.

---

# Complete Lecture Summary

## Main Topics Covered

| Area | Key Points |
|---|---|
| Computer System Structure | Hardware, OS, application programs, users |
| OS Definition | Interface between user and hardware |
| OS Goals | Convenience, efficiency, execution, problem solving |
| OS Purposes | Program execution, resource management, access control |
| OS Types | Open-source and closed-source |
| User Interfaces | CLI and GUI |
| OS Components | Process, memory, storage, files, I/O, protection, networking, command interpreter |
| OS Services | UI, program execution, I/O, files, communication, errors, resource allocation, accounting, security |
| System Calls | Interface to OS services |
| System Programs | Utilities for users |
| Dual Mode Operation | User mode and monitor/kernel mode |
| Protection | I/O, memory, CPU protection |
| Interrupts | Hardware interrupts, software interrupts, traps |
| Interrupt Handling | ISR, interrupt vector, program counter |
| Design Goals | User goals and system goals |
| Policy vs Mechanism | Mechanism = how, policy = what |

---

# High-Priority Exam Questions

## 1. Define Operating System.

An operating system is a program that acts as an intermediary/interface between a user of a computer and the computer hardware.

## 2. What are the four components of a computer system?

1. Hardware
2. Operating system
3. Application programs
4. Users

## 3. What are the main goals of an OS?

- Control/execute user/application programs
- Make the computer convenient to use
- Ease solving of user problems
- Use hardware efficiently

## 4. Compare CLI and GUI.

| CLI | GUI |
|---|---|
| Uses typed commands | Uses icons, menus, pointer |
| Less user-friendly | More user-friendly |
| Faster | Slower |
| Uses fewer resources | Uses more resources |
| Main component is command interpreter | Main components are icons, menus, pointer |

## 5. What is a system call?

A system call is a user interface to OS services. It allows user programs to request services from the operating system.

## 6. What is dual mode operation?

Dual mode operation means the computer has at least two modes:

- User mode for user programs
- Monitor/kernel mode for OS core operations

## 7. What is a privileged instruction?

A privileged instruction is an instruction that can be executed only in monitor mode because it may affect system safety or hardware control.

## 8. What is an interrupt?

An interrupt is a signal sent to the CPU, usually by an I/O device, that suspends the current program and transfers control to another program or OS routine.

## 9. What are the three types of interrupts?

1. Hardware interrupts
2. Software interrupts
3. Traps

## 10. Explain policy and mechanism.

Mechanism determines how something is done. Policy determines what will be done. Example: timer interrupt is the mechanism; deciding how long the timer is set is the policy.

---

# Quick Revision Table

| Term | Short Meaning |
|---|---|
| OS | Interface between user and hardware |
| Hardware | CPU, memory, I/O devices |
| Application Program | Program used to solve user problems |
| CLI | Command-based interface |
| GUI | Graphical interface |
| System Call | Request from user program to OS |
| Kernel/Monitor Mode | Privileged OS mode |
| User Mode | Limited mode for user programs |
| Mode Bit | Indicates user or monitor mode |
| Privileged Instruction | Instruction allowed only in monitor mode |
| Base Register | Smallest legal physical address |
| Limit Register | Size of legal address range |
| Timer Interrupt | Interrupt used for CPU protection |
| Interrupt | Signal that changes CPU execution flow |
| ISR | Code that handles interrupt |
| Interrupt Vector | Stores ISR addresses |
| Policy | What should be done |
| Mechanism | How it is done |

---

# Final Memory Map

```text
Computer System
├── Hardware
├── Operating System
│   ├── Services
│   │   ├── UI
│   │   ├── Program execution
│   │   ├── I/O
│   │   ├── File management
│   │   ├── Communication
│   │   ├── Error detection
│   │   ├── Resource allocation
│   │   ├── Accounting
│   │   └── Protection/security
│   │
│   ├── Protection
│   │   ├── I/O protection
│   │   ├── Memory protection
│   │   └── CPU protection
│   │
│   ├── Modes
│   │   ├── User mode
│   │   └── Monitor/kernel mode
│   │
│   └── Interrupt Handling
│       ├── Hardware interrupts
│       ├── Software interrupts
│       ├── Traps
│       ├── ISR
│       └── Interrupt Vector
│
├── Application Programs
└── Users
```

---

# Sinhala Quick Understanding

## Operating System කියන්නේ මොකක්ද?

Operating System කියන්නේ **user** සහ **computer hardware** අතර තියෙන අතරමැදි software layer එකක්. User ට hardware directly control කරන්න දෙන්නේ නැතුව, OS එක safe විදියට CPU, memory, files, devices manage කරනවා.

```text
User → Application → OS → Hardware
```

## මේ Lecture එකේ main idea එක

Computer එකේ resources safe සහ efficient විදියට manage කරන්න OS එක තියෙන්නේ. User programs direct hardware access කළොත් system එක crash වෙන්න පුළුවන්. ඒ නිසා system calls, user/kernel mode, interrupts, memory protection, CPU protection වගේ mechanisms use කරනවා.

## Sinhala Memory Trick

**OS = Manage + Protect + Execute**

| Word | Meaning |
|---|---|
| Manage | CPU, memory, files, devices manage කරනවා |
| Protect | unauthorized access / dangerous actions වලින් protect කරනවා |
| Execute | programs load කරලා run කරනවා |

---

# End of Organized Markdown Notes
