# IT2130 — Operating Systems and System Administration — Lecture 08
## FileSystem Handling in Operating System

**Institution:** Sri Lanka Institute of Information Technology  
**Faculty:** Faculty of Computing  
**Module Code:** IT2130  
**Module Name:** Operating Systems and System Administration  
**Lecture Number:** Lecture 08  
**Lecture Title:** FileSystem Handling in Operating System  
**Lecturer:** Dr. Sanvitha Kasthuriarachchi  
**Year/Semester:** Year 02 and Semester 02  
**Total PDF Pages/Slides:** 43

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture Title](#page-02--lecture-title)
- [Page 03 — Outline](#page-03--outline)
- [Page 04 — File Concept: File System](#page-04--file-concept-file-system)
- [Page 05 — File Concept: File](#page-05--file-concept-file)
- [Page 06 — File Attributes](#page-06--file-attributes)
- [Page 07 — Directory Structure](#page-07--directory-structure)
- [Page 08 — File Operations](#page-08--file-operations)
- [Page 09 — Open Files: Required Data](#page-09--open-files-required-data)
- [Page 10 — Open Files: Open-File Table](#page-10--open-files-open-file-table)
- [Page 11 — File Types: Name and Extension](#page-11--file-types-name-and-extension)
- [Page 12 — File Access Methods](#page-12--file-access-methods)
- [Page 13 — Sequential Access](#page-13--sequential-access)
- [Page 14 — Direct Access](#page-14--direct-access)
- [Page 15 — Operations Performed on Directory](#page-15--operations-performed-on-directory)
- [Page 16 — Types of Directories](#page-16--types-of-directories)
- [Page 17 — Single-Level Directory](#page-17--single-level-directory)
- [Page 18 — Two-Level Directory](#page-18--two-level-directory)
- [Page 19 — Tree-Structured Directories](#page-19--tree-structured-directories)
- [Page 20 — General Graph Directory](#page-20--general-graph-directory)
- [Page 21 — File Protection](#page-21--file-protection)
- [Page 22 — Access Lists and Groups in Unix](#page-22--access-lists-and-groups-in-unix)
- [Page 23 — A Sample UNIX Directory Listing](#page-23--a-sample-unix-directory-listing)
- [Page 24 — File-System Structure](#page-24--file-system-structure)
- [Page 25 — File Control Block](#page-25--file-control-block-fcb)
- [Page 26 — File Allocation Method](#page-26--file-allocation-method)
- [Page 27 — Contiguous Allocation Method](#page-27--contiguous-allocation-method)
- [Page 28 — Contiguous Allocation Continued](#page-28--contiguous-allocation-continued)
- [Page 29 — Contiguous Allocation I/O Questions](#page-29--contiguous-allocation-io-questions)
- [Page 30 — Extent-Based Systems](#page-30--extent-based-systems)
- [Page 31 — Linked Allocation](#page-31--linked-allocation)
- [Page 32 — Linked Allocation Example](#page-32--linked-allocation-example)
- [Page 33 — Linked Allocation I/O Questions](#page-33--linked-allocation-io-questions)
- [Page 34 — File-Allocation Table](#page-34--file-allocation-table)
- [Page 35 — Indexed Allocation Method](#page-35--indexed-allocation-method)
- [Page 36 — Example of Indexed Allocation](#page-36--example-of-indexed-allocation)
- [Page 37 — Index Allocation I/O Questions](#page-37--index-allocation-io-questions)
- [Page 38 — Allocation I/O Example](#page-38--allocation-io-example)
- [Page 39 — Modern File Systems](#page-39--modern-file-systems)
- [Page 40 — File System Performance](#page-40--file-system-performance)
- [Page 41 — End of Lecture 8](#page-41--end-of-lecture-8)
- [Page 42 — Weekly Plan](#page-42--weekly-plan)
- [Page 43 — Thank You](#page-43--thank-you)
- [Full Lecture Summary](#full-lecture-summary)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Important Commands and Syntax](#important-commands-and-syntax)
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
- Dr. Sanvitha Kasthuriarachchi
- IT2130 - Operating Systems and System Administration
- Year 02 and Semester 02

### Visual Explanation

This is the title page. It identifies the institution, faculty, lecturer, module code, module name, and academic year/semester.

### Explanation

This lecture belongs to the Operating Systems and System Administration module. The topic focuses on how operating systems handle files, directories, file permissions, and disk allocation.

### Exam Tip

Remember the module context: file systems are an operating system responsibility. In exams, link file handling to storage management, security, and performance.

### Common Mistake

No major common mistake.

---

## Page 02 — Lecture Title

### Original Slide Content

- Lecture 08
- File System Handling in Operating System

### Visual Explanation

The slide announces the lecture topic.

### Explanation

This lecture explains how operating systems manage files from both the user view and the internal system view. It covers concepts such as file attributes, directories, access methods, protection, and allocation methods.

### Exam Tip

This is a high-value OS topic because it combines theory and calculation-style I/O questions.

### Common Mistake

Do not think file handling means only creating and deleting files. It includes metadata, access rights, allocation, directories, and performance.

---

## Page 03 — Outline

### Original Slide Content

- UNIX File Concept
- File Access Methods
- Disk and Directory Structure
- File Allocation Methods

### Visual Explanation

No major visual content.

### Explanation

The lecture has four main sections:

| Section | Focus |
|---|---|
| UNIX File Concept | What files are and how UNIX treats them |
| File Access Methods | How data inside files is accessed |
| Disk and Directory Structure | How files are organized and protected |
| File Allocation Methods | How disk blocks are assigned to files |

### Exam Tip

For a written paper, expect comparison questions such as sequential vs direct access, or contiguous vs linked vs indexed allocation.

### Common Mistake

Students often study file operations but ignore allocation methods. Allocation methods usually produce easy marks through direct comparison and I/O calculations.

---

## Page 04 — File Concept: File System

### Original Slide Content

- A file system is a fundamental component of an operating system that manages how data is stored, organized, and retrieved from storage devices.
- It provides an abstraction layer between the user and the hardware, allowing users to interact with files without worrying about physical storage details.

### Visual Explanation

No major visual content.

### Explanation

A file system hides the complex physical details of disk storage. Users see simple files and folders, while the OS internally manages sectors, blocks, metadata, permissions, and disk locations.

### Visual/Text Diagram

```text
User
 ↓
File System Interface
 ↓
Operating System File Management
 ↓
Disk Blocks / Storage Hardware
```

### Exam Tip

Use the keyword **abstraction layer**. It shows examiner-level understanding.

### Common Mistake

Do not define a file system as “a folder system” only. That is too weak. A file system manages storage, organization, retrieval, metadata, and access control.

---

## Page 05 — File Concept: File

### Original Slide Content

- A file is the smallest unit of logical storage in an operating system.
- It represents a collection of related information stored on secondary storage.
- Files can contain:
  - Text (documents)
  - Numbers (data files)
  - Binary data (images, videos)
  - Executable programs
- Each file is defined by its creator and has a specific purpose.
- The operating system treats all files as a sequence of bytes or records.

### Visual Explanation

No major visual content.

### Explanation

A file is the basic logical storage unit that users and programs work with. The OS does not need to understand the human meaning of the file; it mainly manages the file as bytes or records.

### Visual/Text Diagram

```text
File
├── Text data
├── Numeric data
├── Binary data
└── Executable program data
```

### Exam Tip

Definition question likely: “What is a file?” Answer with **smallest unit of logical storage**, **related information**, and **secondary storage**.

### Common Mistake

Do not say files are stored only in RAM. Files are stored on secondary storage; variables are usually in memory during program execution.

---

## Page 06 — File Attributes

### Original Slide Content

- Each file has associated metadata known as attributes. These help the operating system manage and control files effectively.
- Key attributes include:
  - Name: Human-readable identifier
  - Identifier: Unique internal ID
  - Location: Where the file is stored
  - Size: Current file size
  - Protection: Access permissions
  - Time & Date: Creation and modification timestamps
- These attributes are essential for security, tracking, and file organization.

### Visual Explanation

No major visual content.

### Explanation

File attributes are metadata about a file. They do not represent the file content itself; they describe how the OS should identify, locate, protect, and manage the file.

| Attribute | Meaning | Why It Matters |
|---|---|---|
| Name | Human-readable file name | Easy for users to identify |
| Identifier | Unique OS-level ID | Avoids confusion internally |
| Location | Disk location | Needed to find file data |
| Size | Current file size | Needed for storage management |
| Protection | Access permission | Supports security |
| Time & Date | Creation/modification timestamps | Supports tracking and auditing |

### Exam Tip

If asked “List file attributes,” give at least five with brief meanings.

### Common Mistake

Do not confuse file name with file identifier. Name is for users; identifier is internal to the OS.

---

## Page 07 — Directory Structure

### Original Slide Content

- A directory is a special type of file that stores information about other files. It acts like an index or table of contents.
- Functions of directories:
  - Organize files logically
  - Store file metadata
  - Enable efficient searching
- Directories make file management easier and more structured.

### Visual Explanation

No major visual content.

### Explanation

A directory stores file entries. Each entry may include file names and references to metadata or storage information. Directories make it possible to organize files into meaningful groups.

### Visual/Text Diagram

```text
Directory
├── file1.txt
├── report.pdf
├── image.png
└── subdirectory/
```

### Exam Tip

Use the phrase **special type of file** when defining a directory in OS theory.

### Common Mistake

Do not define a directory only as a “folder.” In OS theory, it is a special file containing information about other files.

---

## Page 08 — File Operations

### Original Slide Content

- The operating system provides several operations to manipulate files:
  - Create: Generate a new file
  - Open: Prepare file for access
  - Read: Retrieve data
  - Write: Modify or add data
  - Seek: Move within the file
  - Close: Finish operations
  - Delete: Remove file
- These operations are implemented using system calls.

### Visual Explanation

No major visual content.

### Explanation

File operations are actions programs request from the OS. Since direct hardware access is unsafe, programs use system calls to ask the OS to create, read, write, seek, close, or delete files.

### Visual/Text Diagram

```text
Program
 ↓ system call
Operating System
 ↓
File Operation
 ↓
Storage Device
```

### Exam Tip

If the exam asks “Why are system calls needed for file operations?”, answer: because user programs must request OS-controlled access to files and hardware resources.

### Common Mistake

Do not forget `seek`. It is important because it changes the current position inside the file.

---

## Page 09 — Open Files: Required Data

### Original Slide Content

Several pieces of data are needed to manage open files:

- Open-file table: tracks open files
- File pointer: pointer to last read/write location, per process that has the file open
- File-open count: counter of number of times a file is open — to allow removal of data from open-file table when last process closes it
- Disk location of the file: cache of data access information
- Access rights: per-process access mode information

### Visual Explanation

No major visual content.

### Explanation

When a file is opened, the OS stores details in memory so it does not need to repeatedly search the disk. The open-file table keeps track of active file usage. Each process may have its own file pointer and access rights.

| Open File Data | Meaning |
|---|---|
| Open-file table | Tracks currently opened files |
| File pointer | Current read/write position |
| File-open count | Number of active opens for that file |
| Disk location | Cached location of file data |
| Access rights | Read/write/execute permissions for process |

### Exam Tip

Open-file table questions often ask what information the OS maintains when a file is open. Memorize this table.

### Common Mistake

Do not assume one file pointer is shared by every process. The slide states the file pointer is per process that has the file open.

---

## Page 10 — Open Files: Open-File Table

### Original Slide Content

- When a file is opened, the OS maintains information in an open-file table.
- This includes:
  - File pointer (current position)
  - Access rights
  - Number of processes using the file
- This mechanism improves performance by avoiding repeated disk access and supports multi-user environments.

### Visual Explanation

No major visual content.

### Explanation

The open-file table is an optimization and control structure. It stores active file information in memory, which makes repeated file operations faster and safer in multi-user systems.

### Visual/Text Diagram

```text
Open-File Table
├── File pointer
├── Access rights
└── Open count / process usage
```

### Exam Tip

For “advantages of open-file table,” write: improves performance, avoids repeated disk access, and supports multi-user file sharing/control.

### Common Mistake

Do not say the open-file table stores the entire file content. It stores management information about opened files.

---

## Page 11 — File Types: Name and Extension

### Original Slide Content

The slide shows a table of file types, usual extensions, and functions.

### Visual Explanation

The visual is a table titled **File Types – Name, Extension**. It maps common file categories to extensions and usage.

| File Type | Usual Extension | Function |
|---|---|---|
| executable | `exe`, `com`, `bin` or none | Ready-to-run machine-language program |
| object | `obj`, `o` | Compiled machine language, not linked |
| source code | `c`, `cc`, `java`, `pas`, `asm`, `a` | Source code in various languages |
| batch | `bat`, `sh` | Commands to the command interpreter |
| text | `txt`, `doc` | Textual data, documents |
| word processor | `wp`, `tex`, `rtf`, `doc` | Various word-processor formats |
| library | `lib`, `a`, `so`, `dll` | Libraries of routines for programmers |
| print or view | `ps`, `pdf`, `jpg` | ASCII or binary file in a format for printing or viewing |
| archive | `arc`, `zip`, `tar` | Related files grouped into one file, sometimes compressed, for archiving or storage |
| multimedia | `mpeg`, `mov`, `rm`, `mp3`, `avi` | Binary file containing audio or A/V information |

### Explanation

File extensions help users and applications identify the likely purpose or format of a file. However, the extension alone does not guarantee the actual content; the OS and applications may also inspect metadata or file signatures.

### Exam Tip

A table question can ask you to match file types with extensions. Know common examples such as `.exe`, `.txt`, `.sh`, `.so`, `.dll`, `.zip`, `.tar`, `.mp3`, and `.avi`.

### Common Mistake

Do not assume all executable files always have `.exe`. UNIX executable files may have no extension.

---

## Page 12 — File Access Methods

### Original Slide Content

- File access methods define how data inside a file is accessed.
- Main types:
  - Sequential Access — data is accessed in order
  - Direct Access — data can be accessed randomly
- The choice depends on application requirements.

### Visual Explanation

No major visual content.

### Explanation

File access method determines how a program reads or writes file content. Sequential access is simple and ordered. Direct access allows jumping to a specific position or record.

| Method | Meaning | Best For |
|---|---|---|
| Sequential Access | Read/write from start to end | Logs, text streams |
| Direct Access | Jump directly to a record/block | Databases, large indexed files |

### Exam Tip

Comparison question likely: sequential access vs direct access.

### Common Mistake

Do not call direct access “faster always.” It is faster for random reads, but sequential reads can be efficient for linear processing.

---

## Page 13 — Sequential Access

### Original Slide Content

- In sequential access, data is read or written in order, from beginning to end.
- The characteristics are:
  - Simple to implement
  - Efficient for linear data processing
  - Not suitable for random access
- Example: Reading a log file line by line.

### Visual Explanation

No major visual content.

### Explanation

Sequential access works like reading a book from page 1 to page 2 to page 3. It is useful when the program needs all records in order.

### Visual/Text Diagram

```text
Block 1 → Block 2 → Block 3 → Block 4 → ... → End
```

### Exam Tip

Use log file reading as a clear example.

### Common Mistake

Do not say sequential access can directly jump to any record. That is direct access.

---

## Page 14 — Direct Access

### Original Slide Content

- Direct access allows reading or writing at any location in the file.
- The characteristics are:
  - Fast and flexible
  - Requires addressing mechanism
  - Used in databases and large systems
- Example: Accessing record number 100 directly.

### Visual Explanation

No major visual content.

### Explanation

Direct access is like opening a book directly to page 100. The system needs a way to calculate or find the target location.

### Visual/Text Diagram

```text
Request record 100
       ↓
Calculate/access location
       ↓
Read or write record 100
```

### Exam Tip

Mention **addressing mechanism**. This is the key technical requirement.

### Common Mistake

Do not say direct access reads every previous record first. That is sequential/linked-style traversal, not direct access.

---

## Page 15 — Operations Performed on Directory

### Original Slide Content

- Search for a file
- Create a file
- Delete a file
- List a directory
- Rename a file
- Traverse the file system

### Visual Explanation

No major visual content.

### Explanation

Directories need operations for finding, adding, removing, renaming, listing, and navigating files. These operations support normal file management.

### Exam Tip

A short-answer question may ask for directory operations. List at least five.

### Common Mistake

Do not forget **traverse the file system**. It is important for moving through nested directory structures.

---

## Page 16 — Types of Directories

### Original Slide Content

Different directory structures are used to organize files:

- Single-level directory
- Two-level directory
- Tree-structured directory
- Graph-based directory

### Visual Explanation

No major visual content.

### Explanation

Directory structure controls how files are grouped and located. More advanced structures solve problems that simple structures cannot handle.

| Directory Type | Main Idea |
|---|---|
| Single-level | One directory for all files/users |
| Two-level | Separate directory for each user |
| Tree-structured | Hierarchical directory tree |
| Graph-based | Allows shared files/directories through links |

### Exam Tip

Expect “compare directory structures” or “draw and explain” questions.

### Common Mistake

Do not confuse tree-structured and graph-based directories. A tree has one parent path; graph structures can allow shared links and multiple paths.

---

## Page 17 — Single-Level Directory

### Original Slide Content

- A single directory for all users
- Naming problem
- Grouping problem

### Visual Explanation

The diagram shows one directory row containing file entries such as `cat`, `bo`, `a`, `test`, `data`, `mail`, `cont`, `hex`, and `records`. Each entry points to a file object below it.

### Explanation

In a single-level directory, all files are placed in one directory. This is simple, but it creates problems when many users or many files exist.

**Problems:**

| Problem | Explanation |
|---|---|
| Naming problem | Two users cannot easily use the same file name in the same directory |
| Grouping problem | Files cannot be grouped by user, project, or category |

### Visual/Text Diagram

```text
Single Directory
├── cat
├── bo
├── a
├── test
├── data
├── mail
├── cont
├── hex
└── records
```

### Exam Tip

For single-level directory, always mention **naming problem** and **grouping problem**.

### Common Mistake

Do not say single-level directories are good for multi-user systems. They are weak because all users share one directory.

---

## Page 18 — Two-Level Directory

### Original Slide Content

- Separate directory for each user
- Path name
- Can have the same file name for different user
- Efficient searching
- No grouping capability

### Visual Explanation

The diagram shows a master file directory at the top with user directories such as `user 1`, `user 2`, `user 3`, and `user 4`. Each user has a separate user file directory below. Some users can have files with the same names because their directories are separate.

### Explanation

Two-level directories solve the naming conflict between users by giving each user a private directory. However, inside each user directory, there may still be limited grouping capability.

| Advantage | Disadvantage |
|---|---|
| Same file name can exist under different users | No strong grouping inside each user directory |
| Searching is more efficient than single-level | Sharing across users can be harder |
| Supports path names | Less flexible than tree directory |

### Visual/Text Diagram

```text
Master File Directory
├── user1/
│   ├── cat
│   ├── bo
│   └── test
├── user2/
│   ├── a
│   └── data
├── user3/
│   ├── a
│   └── test
└── user4/
    ├── x
    └── data
```

### Exam Tip

Mention that same file names are possible for different users because each user has a separate directory.

### Common Mistake

Do not say two-level directories fully solve grouping. The slide clearly states **no grouping capability**.

---

## Page 19 — Tree-Structured Directories

### Original Slide Content

- Tree-Structured Directories

### Visual Explanation

The diagram shows a root directory at the top, branching into subdirectories such as `spell`, `bin`, and `programs`. These further branch into files and subdirectories. This forms a hierarchy.

### Explanation

A tree-structured directory organizes files in levels. It supports nested folders and absolute/relative paths. It is widely used because it supports logical grouping.

### Visual/Text Diagram

```text
root/
├── spell/
│   ├── stat
│   ├── mail
│   └── dist
├── bin/
│   ├── find
│   ├── count
│   ├── hex
│   └── recorder
└── programs/
    ├── p
    ├── e
    └── mail
```

### Exam Tip

Tree directory is a common “draw and explain” exam topic. Include root, subdirectories, files, and path names.

### Common Mistake

Do not confuse root directory with user directory. Root is the top of the hierarchy.

---

## Page 20 — General Graph Directory

### Original Slide Content

- General Graph Directory

### Visual Explanation

The diagram shows a root directory with multiple branches and links between directories/files. Some nodes are shared or reached through multiple paths, which creates a graph rather than a strict tree.

### Explanation

A graph-based directory allows sharing. A file or directory may have multiple references/links. This is useful, but it introduces complexity such as cycles and deletion/reference-count problems.

### Visual/Text Diagram

```text
root
├── avi
│   ├── text
│   ├── mail
│   ├── count ─┐
│   └── book ──┼── shared nodes
├── tc         │
└── jim        ┘
```

### Exam Tip

For graph-based directories, mention **sharing**, **links**, and possible **cycle/reference management** issues.

### Common Mistake

Do not describe graph directory as a simple hierarchy. A graph can have multiple paths to the same object.

---

## Page 21 — File Protection

### Original Slide Content

- File protection ensures that only authorized users can access files.
- Types of access:
  - Read
  - Write
  - Execute
- Protection mechanisms are critical in multi-user systems.

### Visual Explanation

No major visual content.

### Explanation

File protection controls who can do what to a file. Read allows viewing, write allows modification, and execute allows running a file as a program/script.

| Access Type | Meaning |
|---|---|
| Read | View or retrieve file content |
| Write | Modify or add content |
| Execute | Run the file/program |

### Exam Tip

Remember `rwx`: read, write, execute.

### Common Mistake

Do not confuse write and execute. A user may be allowed to edit a file but not run it, or run it but not edit it.

---

## Page 22 — Access Lists and Groups in Unix

### Original Slide Content

- Mode of access: read, write, execute
- Three classes of users on Unix / Linux:
  - owner access `7` ⇒ `111` (`RWX`)
  - group access `6` ⇒ `110` (`RWX`, but no execute)
  - public access `1` ⇒ `001` (`RWX`, but only execute)
- Ask manager to create a group with a unique name, say `G`, and add some users to the group.
- For a file, say `game`, or subdirectory, define appropriate access.
- Attach a group to a file:

```bash
chgrp G game
```

### Visual Explanation

The slide visually maps Unix/Linux permission numbers to binary values and read/write/execute permission positions.

### Explanation

Unix permissions use three classes:

| Class | Meaning |
|---|---|
| Owner | User who owns the file |
| Group | Users belonging to the assigned group |
| Public/Others | Everyone else |

Permissions use binary positions:

| Permission | Binary Value | Decimal Value |
|---|---:|---:|
| Read (`r`) | `100` | 4 |
| Write (`w`) | `010` | 2 |
| Execute (`x`) | `001` | 1 |

So:

| Permission Number | Binary | Meaning |
|---:|---|---|
| 7 | `111` | read + write + execute |
| 6 | `110` | read + write |
| 1 | `001` | execute only |

### Code/Command Explanation

`chgrp G game` changes the group ownership of the file or directory named `game` to group `G`.

### Exam Tip

You must be able to convert permission numbers to `rwx`. Example: `761` means owner=`rwx`, group=`rw-`, others=`--x`.

### Common Mistake

Do not read permission digits as normal numbers. Each digit represents a binary permission set for owner, group, or others.

---

## Page 23 — A Sample UNIX Directory Listing

### Original Slide Content

The slide shows a sample UNIX directory listing.

### Visual Explanation

The listing includes permission strings, link counts, owner, group, file size, date/time, and file/directory names.

Reconstructed listing from the slide:

```text
-rw-rw-r--   1 pbg staff    31200 Sep 3 08:30 intro.ps
drwx------   5 pbg staff      512 Jul 8 09:33 private/
drwxrwxr-x   2 pbg staff      512 Jul 8 09:35 doc/
drwxrwx---   2 pbg student    512 Aug 3 14:13 student-proj/
-rw-r--r--   1 pbg staff     9423 Feb 24 2003 program.c
-rwxr-xr-x   1 pbg staff    20471 Feb 24 2003 program
drwx--x--x   4 pbg faculty    512 Jul 31 10:31 lib/
drwx------   3 pbg staff     1024 Aug 29 06:52 mail/
drwxrwxrwx   3 pbg staff      512 Jul 8 09:35 test/
```

### Explanation

UNIX directory listing shows metadata for each file. The first character indicates type:

- `-` means regular file
- `d` means directory

The next nine characters represent permissions:

```text
rwx rwx rwx
│   │   └── others/public
│   └────── group
└────────── owner
```

### Exam Tip

Be ready to interpret a UNIX listing. Examiner may ask: “What does `drwxr-xr-x` mean?”

### Common Mistake

Do not ignore the first character. `d` means directory; it is not part of owner permission.

---

## Page 24 — File-System Structure

### Original Slide Content

- A file system is organized in layers:
  - Application layer
  - Logical file system
  - Physical file system
  - Device drivers
- This layered design improves modularity and efficiency.

### Visual Explanation

No major visual content.

### Explanation

A layered file system separates responsibilities. Applications request file operations; the logical file system handles metadata and naming; the physical file system maps files to blocks; device drivers communicate with hardware.

### Visual/Text Diagram

```text
Application Layer
        ↓
Logical File System
        ↓
Physical File System
        ↓
Device Drivers
        ↓
Storage Hardware
```

### Exam Tip

If asked “Why layered design?”, answer: improves modularity, maintainability, efficiency, and hardware independence.

### Common Mistake

Do not merge logical and physical file systems. Logical deals more with file names/metadata; physical deals more with disk block placement.

---

## Page 25 — File Control Block (FCB)

### Original Slide Content

- OS maintains FCB per file, which contains many details about the file.
- Typically:
  - inode number
  - permissions
  - size
  - dates
- Example shown in visual.

### Visual Explanation

The diagram shows an FCB-style block containing:

- file permissions
- file dates: create, access, write
- file owner, group, ACL
- file size
- file data blocks or pointers to file data blocks

### Explanation

A File Control Block is a data structure maintained by the OS for each file. It stores important metadata and pointers needed to manage and locate file data.

| FCB Field | Meaning |
|---|---|
| File permissions | Access control information |
| File dates | Creation, access, and write timestamps |
| File owner/group/ACL | Ownership and access control list |
| File size | Size of the file |
| Data block pointers | Locations or references to file data blocks |

### Exam Tip

FCB is a direct definition question. Write: “FCB is an OS-maintained data structure per file containing metadata and block pointers.”

### Common Mistake

Do not say FCB contains only the file name. It contains multiple metadata fields and data block pointers.

---

## Page 26 — File Allocation Method

### Original Slide Content

- An allocation method refers to how disk blocks are allocated for files:
  - Contiguous
  - Linked
  - File Allocation Table (FAT)

### Visual Explanation

No major visual content.

### Explanation

File allocation methods decide how file data is placed on disk blocks. The allocation method affects speed, fragmentation, direct access, reliability, and storage overhead.

### Exam Tip

This is one of the most exam-important sections. Know advantages, disadvantages, and I/O operation counts.

### Common Mistake

The lecture later also discusses indexed allocation, even though this outline lists contiguous, linked, and FAT.

---

## Page 27 — Contiguous Allocation Method

### Original Slide Content

- An allocation method refers to how disk blocks are allocated for files.
- Each file occupies a set of contiguous blocks.
- Best performance in most cases.
- Simple — only starting location/block number and length/number of blocks are required.
- Problems include:
  - Finding space on the disk for a file
  - Knowing file size
  - External fragmentation
  - Need for compaction offline/downtime or online

### Visual Explanation

No major visual content.

### Explanation

In contiguous allocation, a file is stored in consecutive disk blocks. This makes direct calculation easy: if the starting block and length are known, the OS can locate any block quickly.

| Advantage | Disadvantage |
|---|---|
| Fast access | External fragmentation |
| Simple metadata: start + length | Hard to grow file if nearby space unavailable |
| Good direct access | File size may need to be known earlier |

### Visual/Text Diagram

```text
File A stored contiguously:
[Block 10][Block 11][Block 12][Block 13]
 start=10, length=4
```

### Exam Tip

For contiguous allocation, keywords: **consecutive blocks**, **start block**, **length**, **fast/direct access**, **external fragmentation**.

### Common Mistake

Do not say contiguous allocation has no fragmentation. It can suffer from external fragmentation.

---

## Page 28 — Contiguous Allocation Continued

### Original Slide Content

- Mapping from logical to physical block, block size = 512 bytes.
- `LA / 512` gives:
  - `Q`
  - `R`
- Block to be accessed = starting address + `Q`
- Displacement into block = `R`

### Visual Explanation

The diagram shows logical address mapping into disk blocks. `LA / 512` is divided into quotient `Q` and remainder `R`. The physical block is found using `starting address + Q`, while `R` identifies the offset inside that block. A directory table shows files with start and length values.

Example visible directory table:

| File | Start | Length |
|---|---:|---:|
| count | 0 | 2 |
| tr | 14 | 3 |
| mail | 19 | 6 |
| list | 28 | 4 |
| f | 6 | 2 |

### Explanation

When block size is 512 bytes, logical address conversion works like division:

```text
Logical Address / 512 = Q remainder R
```

- `Q` tells which block offset from the file start is needed.
- `R` tells the byte displacement inside that block.

### Visual/Text Diagram

```text
Logical Address (LA)
       ↓ divide by block size 512
Q = block number within file
R = offset inside block
       ↓
Physical block = starting block + Q
```

### Exam Tip

For calculation questions, remember:

```text
Physical block = start + Q
Displacement = R
```

### Common Mistake

Do not add `R` to the starting block. `R` is the displacement inside the block, not a block number.

---

## Page 29 — Contiguous Allocation I/O Questions

### Original Slide Content

- In contiguous allocation, as blocks are stored sequentially and address is calculated directly, 1 I/O operation is required to allocate/access a single data block.
- A file is stored using contiguous allocation. How many I/O operations are required to access the 8th block?
  - Direct access → 1 I/O
- A file contains 12 blocks. How many I/O operations are required to read the entire file?
  - Read 12 blocks → 12 I/O

### Visual Explanation

No major visual content.

### Explanation

Because contiguous allocation stores blocks in order, the OS can directly calculate the location of a requested block. Reading the entire file requires reading each block.

| Task | I/O Operations |
|---|---:|
| Access 8th block | 1 I/O |
| Read entire 12-block file | 12 I/Os |

### Exam Tip

Contiguous allocation random block access = **1 I/O** because it can directly calculate the block address.

### Common Mistake

Do not answer 8 I/Os for the 8th block in contiguous allocation. That mistake belongs to linked allocation traversal logic.

---

## Page 30 — Extent-Based Systems

### Original Slide Content

- Many newer file systems, for example Veritas File System, use a modified contiguous allocation scheme.
- Extent-based file systems allocate disk blocks in extents.
- An extent is a contiguous block of disks.
  - Extents are allocated for file allocation.
  - A file consists of one or more extents.

### Visual Explanation

No major visual content.

### Explanation

Extent-based allocation improves contiguous allocation by allowing a file to be stored in several contiguous regions instead of requiring one large continuous area.

### Visual/Text Diagram

```text
File A
├── Extent 1: blocks 10-14
├── Extent 2: blocks 40-45
└── Extent 3: blocks 70-72
```

### Exam Tip

Define extent as **a contiguous group of disk blocks**.

### Common Mistake

Do not say an extent-based file must be stored in one continuous location. A file may consist of multiple extents.

---

## Page 31 — Linked Allocation

### Original Slide Content

- Each file is a linked list of blocks.
- File ends at nil pointer.
- No external fragmentation.
- Each block contains pointer to next block.
- No compaction, external fragmentation.
- Free space management system called when new block needed.
- Improve efficiency by clustering blocks into groups but increases internal fragmentation.
- Reliability can be a problem.
- Locating a block can take many I/Os and disk seeks.

### Visual Explanation

No major visual content.

### Explanation

In linked allocation, file blocks do not need to be next to each other. Each block stores a pointer to the next block. This removes external fragmentation but makes random access slow because the OS may need to follow pointers from the beginning.

> Note: The slide includes wording that says “No compaction, external fragmentation.” The intended meaning in standard OS theory is that linked allocation does **not require compaction** and has **no external fragmentation**.

| Advantage | Disadvantage |
|---|---|
| No external fragmentation | Slow direct/random access |
| File can grow easily | Pointer overhead |
| No compaction needed | Reliability issue if pointer is corrupted |
| Good for sequential access | Many I/Os and disk seeks may be needed |

### Visual/Text Diagram

```text
File blocks in linked allocation:
[Block 9] → [Block 16] → [Block 1] → [Block 10] → [Block 25] → NIL
```

### Exam Tip

For linked allocation, random access to the nth block usually needs **n I/Os** because blocks must be traversed.

### Common Mistake

Do not say linked allocation supports efficient direct access. It is poor for direct access because of pointer traversal.

---

## Page 32 — Linked Allocation Example

### Original Slide Content

- Each file is a linked list of disk blocks: blocks may be scattered anywhere on the disk.
- Scheme.

### Visual Explanation

The diagram shows file `jeep` in the directory with start block `9` and end block `25`. The disk blocks are connected through pointers, showing that file blocks may be scattered across the disk.

### Explanation

The directory only needs to know the starting block and often the ending block. The OS follows the chain of pointers from one block to the next to read the file.

### Visual/Text Diagram

```text
Directory entry:
file: jeep
start: 9
end: 25

Block chain:
9 → ... → 25 → NIL
```

### Exam Tip

If asked to explain the diagram, say: the file blocks are scattered, but each block points to the next block in the file.

### Common Mistake

Do not assume the blocks are physically adjacent just because they belong to one file.

---

## Page 33 — Linked Allocation I/O Questions

### Original Slide Content

- A file has 10 blocks stored using linked allocation. How many I/O operations are needed to access the 6th block?
  - Must traverse first 6 blocks → 6 I/O
- How many I/O operations are required to read the entire file of 8 blocks?
  - 8 I/O

### Visual Explanation

No major visual content.

### Explanation

To access the 6th block in linked allocation, the system starts at the first block and follows pointers until the 6th block. To read an 8-block file fully, every block must be read.

| Task | I/O Operations |
|---|---:|
| Access 6th block | 6 I/Os |
| Read entire 8-block file | 8 I/Os |

### Exam Tip

Linked allocation access to nth block = **n I/Os**.

### Common Mistake

Do not answer 1 I/O for linked allocation random access. That applies to contiguous allocation, not linked allocation.

---

## Page 34 — File-Allocation Table

### Original Slide Content

- File-Allocation Table

### Visual Explanation

The diagram shows a directory entry for file `test` with start block `217`. The FAT table then links block `217` to `618`, block `618` to `339`, and block `339` to `-1`, where `-1` marks the end of file.

### Explanation

A File Allocation Table stores block-chain information in a separate table instead of storing the next-block pointer inside every file data block. The directory points to the starting block; the FAT table tells where to go next.

### Visual/Text Diagram

```text
Directory entry:
test → start block 217

FAT:
217 → 618
618 → 339
339 → -1 (end of file)
```

### Exam Tip

FAT is linked allocation using a central table. Mention **directory start block** and **FAT entries point to next block**.

### Common Mistake

Do not confuse FAT with indexed allocation. FAT stores next-block chains in a table; indexed allocation stores all data block pointers in an index block per file.

---

## Page 35 — Indexed Allocation Method

### Original Slide Content

- Each file has an index block containing pointers.
- Advantages:
  - Supports direct access
  - Efficient for large files
- Disadvantages:
  - Extra storage overhead

### Visual Explanation

No major visual content.

### Explanation

Indexed allocation stores all pointers to a file’s data blocks inside a separate index block. This supports direct access because the OS can look inside the index block to find the target data block pointer.

| Advantage | Disadvantage |
|---|---|
| Supports direct access | Needs extra index block storage |
| Good for large files | Index block must be read unless cached |
| Avoids linked traversal | Storage overhead for small files |

### Visual/Text Diagram

```text
Directory → Index Block
              ├── pointer to data block 1
              ├── pointer to data block 2
              ├── pointer to data block 3
              └── pointer to data block n
```

### Exam Tip

Indexed allocation random access normally requires **2 I/Os**: one for index block, one for data block.

### Common Mistake

Do not say indexed allocation has no overhead. The index block is extra storage overhead.

---

## Page 36 — Example of Indexed Allocation

### Original Slide Content

- Example of Indexed Allocation

### Visual Explanation

The diagram shows file `jeep` with index block `19`. The index block contains data block pointers such as `9`, `16`, `1`, `10`, and `25`, followed by `-1` entries to mark unused/end entries.

### Explanation

The directory points to the index block. The index block then points to the actual file data blocks. This avoids following a chain block by block.

### Visual/Text Diagram

```text
Directory:
file jeep → index block 19

Index block 19:
[9, 16, 1, 10, 25, -1, -1]

Data blocks:
9, 16, 1, 10, 25
```

### Exam Tip

If asked to interpret this diagram, explain the separation between **index block** and **data blocks**.

### Common Mistake

Do not treat the index block as file data. It contains pointers to file data.

---

## Page 37 — Index Allocation I/O Questions

### Original Slide Content

- Step 1 → Read index block
- Step 2 → Read data block
- A file uses indexed allocation. How many I/O operations are required to access the 4th block?
  - Read Index block → 1 I/O
  - Read Data block → 1 I/O
  - 2 I/Os
- If the index block is already in memory, how many I/O operations are needed?
  - Only data block access → 1 I/O
- A file has 10 blocks. How many I/O operations are required to read the entire file?
  - Read Index block → 1 I/O
  - Read Data blocks → 10 I/Os
  - 10 + 1 = 11 I/Os

### Visual Explanation

No major visual content.

### Explanation

Indexed allocation requires checking the index block first unless it is already cached in memory. Once the pointer is found, the data block is accessed.

| Task | I/O Operations |
|---|---:|
| Access 4th block | 2 I/Os |
| Access block when index block is in memory | 1 I/O |
| Read entire 10-block file | 11 I/Os |

### Exam Tip

Formula-like memory trick:

```text
Indexed access = index block I/O + data block I/O
```

### Common Mistake

Do not forget to count the index block I/O unless the question states it is already in memory.

---

## Page 38 — Allocation I/O Example

### Original Slide Content

Example:

A file contains 10 blocks. Calculate I/O operations required to access the 7th block in:

- Contiguous allocation
- Linked allocation
- Indexed allocation

Answer:

- Contiguous: 1 I/O
- Linked: 7 I/Os
- Indexed: 2 I/Os

### Visual Explanation

No major visual content.

### Explanation

This slide summarizes the performance difference between allocation methods for direct access to a specific block.

| Allocation Method | Access 7th Block | Reason |
|---|---:|---|
| Contiguous | 1 I/O | Direct address calculation |
| Linked | 7 I/Os | Must traverse first 7 blocks |
| Indexed | 2 I/Os | Read index block + read data block |

### Exam Tip

This is the most likely calculation pattern. Memorize it.

### Common Mistake

Do not use the same I/O count for all methods. The method changes the access cost.

---

## Page 39 — Modern File Systems

### Original Slide Content

- Modern File Systems are highly reliable and support large storages.
- Examples include:
  - NTFS (Windows)
  - ext4 (Linux)
  - APFS (macOS)

### Visual Explanation

No major visual content.

### Explanation

Modern file systems are designed for reliability, scalability, and performance. Different operating systems commonly use different file systems.

| File System | Operating System |
|---|---|
| NTFS | Windows |
| ext4 | Linux |
| APFS | macOS |

### Exam Tip

Be able to match file systems with operating systems.

### Common Mistake

Do not say APFS is mainly for Linux. APFS is associated with macOS.

---

## Page 40 — File System Performance

### Original Slide Content

- Performance depends on:
  - Disk speed
  - Allocation method
  - Caching mechanisms
- Modern systems use buffer caches to improve efficiency.

### Visual Explanation

No major visual content.

### Explanation

File system performance depends on both hardware and OS design. Caching stores frequently used data in memory to reduce repeated disk access.

### Visual/Text Diagram

```text
Application request
       ↓
Buffer cache checked
       ↓
If cached: fast memory access
If not cached: disk access required
```

### Exam Tip

For performance questions, include **disk speed**, **allocation method**, and **caching**.

### Common Mistake

Do not say performance depends only on disk speed. Allocation method and caching also matter.

---

## Page 41 — End of Lecture 8

### Original Slide Content

- End of Lecture 8

### Visual Explanation

No major visual content.

### Explanation

This slide marks the end of the main lecture content.

### Exam Tip

No direct exam content, but this confirms that pages after this are weekly plan and closing slides.

### Common Mistake

No major common mistake.

---

## Page 42 — Weekly Plan

### Original Slide Content

- Practical: File Management in UNIX
- Workshop:
  - Summary — File management
  - Discussion of Tutorial 8

### Visual Explanation

No major visual content.

### Explanation

The practical session connects the theory to UNIX file management commands and permission handling.

### Exam Tip

UNIX file permissions and directory listing interpretation are likely practical/theory crossover questions.

### Common Mistake

Do not study only definitions. Practice UNIX permission interpretation.

---

## Page 43 — Thank You

### Original Slide Content

- Thank You!

### Visual Explanation

Closing slide.

### Explanation

This ends the lecture.

### Exam Tip

No direct exam content.

### Common Mistake

No major common mistake.

---

# Full Lecture Summary

This lecture explains how operating systems handle files and file systems. A file system is a core OS component that manages how data is stored, organized, retrieved, and protected. A file is the smallest logical storage unit, and it may contain text, numbers, binary data, or executable programs. Each file has attributes such as name, identifier, location, size, protection, and timestamps.

Directories are special files that organize other files. Directory operations include searching, creating, deleting, listing, renaming, and traversing. Directory structures include single-level, two-level, tree-structured, and graph-based systems. Single-level directories are simple but suffer from naming and grouping problems. Two-level directories solve user naming conflicts but still lack grouping. Tree directories provide hierarchy, while graph-based directories support sharing through links.

File protection ensures authorized access using read, write, and execute permissions. UNIX/Linux uses owner, group, and public classes with permission numbers such as `7`, `6`, and `1`. A sample UNIX listing shows file type, permissions, owner, group, size, date, and file name.

The file system is layered into application layer, logical file system, physical file system, and device drivers. The OS maintains a File Control Block (FCB) for each file, storing metadata such as inode number, permissions, file dates, owner, group, ACL, size, and data block pointers.

File allocation methods decide how disk blocks are assigned. Contiguous allocation stores each file in consecutive blocks and supports fast direct access but suffers from external fragmentation. Extent-based systems improve contiguous allocation by storing files in one or more contiguous extents. Linked allocation stores files as linked lists of blocks, avoiding external fragmentation but making random access slow. FAT stores next-block pointers in a central table. Indexed allocation uses an index block containing pointers to data blocks, supporting direct access with extra storage overhead.

Modern file systems such as NTFS, ext4, and APFS are designed for large storage, reliability, and performance. File system performance depends on disk speed, allocation method, and caching mechanisms such as buffer caches.

---

# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| File system | OS component that manages storing, organizing, and retrieving data | NTFS, ext4, APFS |
| File | Smallest logical storage unit in OS | `report.txt`, `program.c` |
| File attributes | Metadata describing a file | name, size, permissions |
| Directory | Special file storing information about other files | `/home/user/docs` |
| Open-file table | OS table tracking currently opened files | stores file pointer and access rights |
| File pointer | Current read/write position in an open file | points to next byte/record |
| Sequential access | Accessing file data in order | reading a log line by line |
| Direct access | Accessing data at any location | accessing record 100 |
| File protection | Controlling who can access files | read/write/execute permissions |
| FCB | OS-maintained metadata structure per file | inode, permissions, size, dates |
| Contiguous allocation | File stored in consecutive disk blocks | blocks 10–15 |
| Extent | Contiguous group of disk blocks | extent 1: blocks 10–20 |
| Linked allocation | File stored as linked list of disk blocks | 9 → 16 → 1 → NIL |
| FAT | Table storing next-block links | 217 → 618 → 339 → -1 |
| Indexed allocation | File uses index block with pointers | index block points to all data blocks |
| Buffer cache | Memory area used to cache disk data | reduces repeated disk access |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| File system | OS abstraction for storage management | 4 |
| File | Smallest unit of logical storage | 5 |
| File attributes | name, identifier, location, size, protection, timestamps | 6 |
| Directory | Special file acting like index/table of contents | 7 |
| File operations | create, open, read, write, seek, close, delete | 8 |
| Open files | open-file table, file pointer, open count, rights | 9–10 |
| File types | extensions identify common file functions | 11 |
| Sequential access | ordered access from start to end | 13 |
| Direct access | random access using addressing | 14 |
| Directory operations | search, create, delete, list, rename, traverse | 15 |
| Directory types | single-level, two-level, tree, graph | 16–20 |
| File protection | read, write, execute | 21–23 |
| FCB | metadata and data block pointers | 25 |
| Contiguous allocation | fast direct access, external fragmentation | 27–29 |
| Extents | file consists of one or more contiguous extents | 30 |
| Linked allocation | no external fragmentation, slow random access | 31–33 |
| FAT | central table links file blocks | 34 |
| Indexed allocation | index block supports direct access | 35–38 |
| Modern file systems | NTFS, ext4, APFS | 39 |
| Performance | disk speed, allocation, caching | 40 |

---

# Important Commands and Syntax

## Page 22 — Change Group Ownership

```bash
chgrp G game
```

**Explanation:** Changes the group ownership of file or directory `game` to group `G`.

## Page 22 — UNIX Permission Values

```text
r = 4
w = 2
x = 1

7 = 111 = rwx
6 = 110 = rw-
1 = 001 = --x
```

**Explanation:** UNIX/Linux permission digits are based on binary read/write/execute values.

## Page 28 — Contiguous Allocation Address Mapping

```text
LA / 512 = Q remainder R
Physical block = starting address + Q
Displacement into block = R
```

**Explanation:** Used to map a logical address to a physical block when block size is 512 bytes.

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---:|---|---|
| 11 | File types table | Shows file type, extension, and function |
| 17 | Single-level directory | One directory for all users; causes naming/grouping problems |
| 18 | Two-level directory | Master directory points to separate user directories |
| 19 | Tree-structured directory | Hierarchical root/subdirectory/file organization |
| 20 | General graph directory | Allows shared links and multiple paths |
| 23 | UNIX directory listing | Shows permissions, owner, group, size, date, and filename |
| 25 | FCB example | Shows metadata fields stored per file |
| 28 | Contiguous allocation mapping | Logical address maps to physical block using quotient/remainder |
| 32 | Linked allocation example | File blocks are scattered and connected by pointers |
| 34 | FAT diagram | Directory start block points into FAT chain |
| 36 | Indexed allocation example | Directory points to index block, which points to data blocks |

---

# Likely Exam Questions and Short Answers

## Question 1

Define a file system.

**Expected Answer:**  
A file system is a fundamental component of an operating system that manages how data is stored, organized, and retrieved from storage devices. It provides an abstraction between users and hardware storage details.

## Question 2

Define a file.

**Expected Answer:**  
A file is the smallest unit of logical storage in an operating system. It represents a collection of related information stored on secondary storage and may contain text, numeric, binary, or executable data.

## Question 3

List five file attributes.

**Expected Answer:**  
Name, identifier, location, size, protection, and time/date information such as creation and modification timestamps.

## Question 4

What is an open-file table?

**Expected Answer:**  
An open-file table is an OS-maintained table that tracks currently open files. It stores information such as file pointer, access rights, open count, and disk location information.

## Question 5

Compare sequential access and direct access.

**Expected Answer:**

| Sequential Access | Direct Access |
|---|---|
| Accesses data in order | Accesses any location directly |
| Simple to implement | Requires addressing mechanism |
| Good for logs/text streams | Good for databases/large files |
| Poor for random access | Fast and flexible for random access |

## Question 6

What are the operations performed on a directory?

**Expected Answer:**  
Search for a file, create a file, delete a file, list a directory, rename a file, and traverse the file system.

## Question 7

Explain the problem with a single-level directory.

**Expected Answer:**  
A single-level directory uses one directory for all users. It causes naming problems because files must have unique names, and grouping problems because files cannot be organized by user or category.

## Question 8

What is the advantage of a two-level directory?

**Expected Answer:**  
A two-level directory gives each user a separate directory. This allows different users to use the same file name and improves searching, but it still lacks grouping capability inside each user directory.

## Question 9

Explain UNIX file permission `761`.

**Expected Answer:**  
`761` means owner has `7 = rwx`, group has `6 = rw-`, and public/others have `1 = --x`.

## Question 10

What is a File Control Block?

**Expected Answer:**  
A File Control Block is an OS-maintained data structure for each file. It stores file metadata such as inode number, permissions, owner, group, size, dates, and pointers to data blocks.

## Question 11

Compare contiguous, linked, and indexed allocation.

**Expected Answer:**

| Method | Main Idea | Advantage | Disadvantage |
|---|---|---|---|
| Contiguous | Consecutive disk blocks | Fast direct access | External fragmentation |
| Linked | Blocks connected by pointers | No external fragmentation | Slow random access |
| Indexed | Index block stores pointers | Supports direct access | Extra storage overhead |

## Question 12

A file contains 10 blocks. How many I/O operations are required to access the 7th block in contiguous, linked, and indexed allocation?

**Expected Answer:**  
Contiguous allocation: 1 I/O. Linked allocation: 7 I/Os. Indexed allocation: 2 I/Os.

## Question 13

In indexed allocation, how many I/O operations are needed to read a file with 10 data blocks?

**Expected Answer:**  
11 I/Os: 1 I/O to read the index block and 10 I/Os to read the data blocks.

## Question 14

What is an extent in file systems?

**Expected Answer:**  
An extent is a contiguous group of disk blocks. In extent-based systems, a file consists of one or more extents.

## Question 15

List three modern file systems.

**Expected Answer:**  
NTFS for Windows, ext4 for Linux, and APFS for macOS.

---

# Common Mistakes to Avoid

- Saying a file system is only “folders.” It manages storage, organization, retrieval, metadata, and protection.
- Confusing file content with file attributes. Attributes are metadata.
- Forgetting that a directory is a special type of file.
- Saying single-level directories work well for multi-user systems. They cause naming and grouping problems.
- Confusing two-level directories with tree directories.
- Forgetting that graph-based directories can have shared links and multiple paths.
- Ignoring the first character in UNIX listings: `d` means directory, `-` means regular file.
- Misreading UNIX permission numbers. `7` means `rwx`, not “level 7 security.”
- Saying contiguous allocation has no fragmentation. It can suffer from external fragmentation.
- Answering 7 I/Os for the 7th block in contiguous allocation. Correct answer is 1 I/O.
- Answering 1 I/O for linked allocation random access. Linked allocation must traverse blocks.
- Forgetting to count the index block I/O in indexed allocation.
- Confusing FAT with indexed allocation.
- Saying performance depends only on disk speed. Allocation method and caching also matter.

---

# Final One-Page Revision Notes

## Core Definitions

- **File system:** OS component that manages data storage, organization, retrieval, metadata, and protection.
- **File:** Smallest logical storage unit, stored on secondary storage.
- **Directory:** Special file that stores information about other files.
- **FCB:** OS data structure containing file metadata and data block pointers.

## Must-Know File Attributes

```text
Name
Identifier
Location
Size
Protection
Time & Date
```

## File Operations

```text
Create → Open → Read/Write/Seek → Close → Delete
```

## Access Methods

| Method | Meaning | Example |
|---|---|---|
| Sequential | Access in order | log file line by line |
| Direct | Access any location | database record 100 |

## Directory Structures

| Type | Key Point |
|---|---|
| Single-level | One directory; naming/grouping problems |
| Two-level | Separate user directories; same file names possible |
| Tree | Hierarchical root/subdirectories |
| Graph | Sharing through links; more complex |

## UNIX Permissions

```text
r = 4
w = 2
x = 1

7 = rwx
6 = rw-
1 = --x
```

Example:

```text
761 = owner rwx, group rw-, others --x
```

Command:

```bash
chgrp G game
```

## Allocation Methods

| Method | Direct Block Access | Strength | Weakness |
|---|---:|---|---|
| Contiguous | 1 I/O | Fast | External fragmentation |
| Linked | n I/Os for nth block | No external fragmentation | Slow random access |
| Indexed | 2 I/Os | Direct access | Index block overhead |

## Key I/O Answers

```text
Access 7th block:
Contiguous = 1 I/O
Linked = 7 I/Os
Indexed = 2 I/Os

Read 10-block indexed file:
1 index block + 10 data blocks = 11 I/Os
```

## Modern File Systems

```text
NTFS → Windows
ext4 → Linux
APFS → macOS
```

## Performance Factors

```text
Disk speed
Allocation method
Caching mechanisms / buffer cache
```

