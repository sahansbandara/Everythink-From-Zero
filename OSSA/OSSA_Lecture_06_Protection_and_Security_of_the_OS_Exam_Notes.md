# IT2130 - Operating Systems and System Administration — Lecture 06
## Protection and Security of the Operating System

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology |
| Faculty | Faculty of Computing |
| Lecturer | Dr. Sanvitha Kasthuriarachchi |
| Module code | IT2130 |
| Module name | Operating Systems and System Administration |
| Lecture number | Lecture 06 |
| Lecture title | Protection and Security of the Operating System |
| Academic level | Year 02 and Semester 02 |
| Total PDF pages/slides | 29 |

> Purpose: These notes preserve the original lecture order and add student-friendly explanations, diagrams, comparison tables, exam tips, common mistakes, and final revision support.

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Lecture Title](#page-02--lecture-title)
- [Page 03 — Outline](#page-03--outline)
- [Page 04 — Protection and Security](#page-04--protection-and-security)
- [Page 05 — Facets to Protection of Information](#page-05--facets-to-protection-of-information)
- [Page 06 — Security and Protection: Policies and Mechanisms — Security](#page-06--security-and-protection-policies-and-mechanisms-security)
- [Page 07 — Security and Protection: Policies and Mechanisms — Protection](#page-07--security-and-protection-policies-and-mechanisms-protection)
- [Page 08 — Why is Security a Problem](#page-08--why-is-security-a-problem)
- [Page 09 — Reasons for taking Security Measures](#page-09--reasons-for-taking-security-measures)
- [Page 10 — Authentication](#page-10--authentication)
- [Page 11 — Core Security Principles — CIA Triad](#page-11--core-security-principles-cia-triad)
- [Page 12 — Core Security Principles — Confidentiality](#page-12--core-security-principles-confidentiality)
- [Page 13 — Core Security Principles — Integrity and Availability](#page-13--core-security-principles-integrity-and-availability)
- [Page 14 — Security Models](#page-14--security-models)
- [Page 15 — Security Policy Vs. Security Model](#page-15--security-policy-vs-security-model)
- [Page 16 — Access Matrix Model](#page-16--access-matrix-model)
- [Page 17 — Access Matrix Example](#page-17--access-matrix-example)
- [Page 18 — Program Threats](#page-18--program-threats)
- [Page 19 — Common Threats — Trojan Horse and Trapdoor](#page-19--common-threats-trojan-horse-and-trapdoor)
- [Page 20 — Common Threats — Logic Bomb and Virus](#page-20--common-threats-logic-bomb-and-virus)
- [Page 21 — Common Threats — Worm](#page-21--common-threats-worm)
- [Page 22 — OS-Level Defenses](#page-22--os-level-defenses)
- [Page 23 — System and Network Threats — DoS](#page-23--system-and-network-threats-dos)
- [Page 24 — System and Network Threats — DDoS, Spoofing, Port Scanning](#page-24--system-and-network-threats-ddos-spoofing-port-scanning)
- [Page 25 — System and Network Threats — MITM and Network-Based Malware](#page-25--system-and-network-threats-mitm-and-network-based-malware)
- [Page 26 — OS and Network Defenses](#page-26--os-and-network-defenses)
- [Page 27 — End of Lecture 6](#page-27--end-of-lecture-6)
- [Page 28 — Weekly Plan](#page-28--weekly-plan)
- [Page 29 — Thank You](#page-29--thank-you)
- [Lecture Weight Table](#lecture-weight-table)
- [Key Definitions](#key-definitions)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Lecture Weight Table

| Page range | Topic | Exam importance | Why it matters |
|---|---|---|---|
| 01-03 | Lecture identity and outline | Low | Gives scope only. |
| 04-07 | Protection, security, policies, mechanisms | Very High | Foundation definitions and comparisons. |
| 08-10 | Security problem, reasons, authentication | High | Common short-answer and explanation topics. |
| 11-13 | CIA triad | Very High | Core security principle likely to appear in exams. |
| 14-15 | Security models, policy vs model | High | Comparison/definition questions. |
| 16-17 | Access matrix model | Very High | Diagram/table interpretation question. |
| 18-22 | Program threats and OS defenses | Very High | Threat definitions and comparisons. |
| 23-26 | System/network threats and defenses | Very High | DoS, DDoS, spoofing, MITM, firewall, IDS. |
| 27-29 | End slides and weekly plan | Low | No major theory content. |

---

# Page-by-Page Lecture Notes

## Page 01 — Title Page

### Original Slide Content

Sri Lanka Institute of Information Technology
Faculty of Computing
Dr.Sanvitha Kasthuriarachchi
IT2130 - Operating Systems and System Administration
Year 02 and Semester 02

### Visual Explanation

The slide shows the SLIIT / Faculty of Computing lecture identity: institution, lecturer, module code, module name, and semester. It is a title/metadata slide, not a technical diagram.

### Explanation

This page gives the administrative context for the lecture. For exam preparation, remember the module is IT2130 and this lecture belongs to Operating Systems and System Administration.

### Exam Tip

Low priority. Use this only to identify the module and lecture context.

### Common Mistake

No major common mistake.

---

## Page 02 — Lecture Title

### Original Slide Content

Lecture 06
Protection and Security of
the Operating System

### Visual Explanation

Title slide showing Lecture 06: Protection and Security of the Operating System. This marks the start of the OS security topic.

### Explanation

This lecture focuses on how an operating system protects data, users, programs, and system resources from internal and external threats.

### Exam Tip

Low priority. Remember the lecture title for topic classification.

### Common Mistake

No major common mistake.

---

## Page 03 — Outline

### Original Slide Content

Outline
Goals of Protection
The Security Problem
Reasons for taking Security Measures
Access Matrix
Program Threats
System and Network Threats

### Visual Explanation

No major visual content. The slide is an outline listing the main areas of the lecture.

### Explanation

The outline tells you the exam scope: protection goals, security problem, security measures, access matrix, program threats, and system/network threats.

### Exam Tip

High priority as a roadmap. These outline items can become separate exam questions.

### Common Mistake

No major common mistake.

---

## Page 04 — Protection and Security

### Original Slide Content

Protection and Security
Operating System uses two sets of techniques to counter threats to
information namely;
Protection - It involves guarding a user’s data and programs against
inference by other authorized users of the system.
Security - It involves guarding of a user’s data and programs against
interference by external entities. Eg: Unauthorized persons.

### Visual Explanation

No major visual content. The slide contrasts two OS threat-countering ideas: protection and security.

### Explanation

Protection mainly deals with controlling actions of authorized users inside the system. Security mainly deals with defending the system from external or unauthorized entities. The wording in the slide says protection guards against inference by authorized users and security guards against interference by external entities.

### Visual/Text Diagram

```text
Operating System Threat Control
│
├── Protection
│   └── Guards user data/programs from interference by authorized internal users
│
└── Security
    └── Guards user data/programs from external/unauthorized entities
```

### Exam Tip

Very high priority. Be ready to differentiate protection and security.

### Common Mistake

Confusing protection and security. Protection is mostly internal access control among authorized users; security is broader defense against unauthorized/external threats.

---

## Page 05 — Facets to Protection of Information

### Original Slide Content

Facets to Protection of Information
There are two facets to protection of information
Secrecy: implies that only authorized users should be able to access
information.
Privacy: implies that information should be used only for the
purpose(s) for which it is intended and shared.
Operating System focuses on guaranteeing secrecy of information and
leaves the issues of privacy to the users and their processes.

### Visual Explanation

No major visual content. The slide separates secrecy and privacy as two facets of information protection.

### Explanation

Secrecy is about who is allowed to access information. Privacy is about using information only for the intended purpose. Operating systems mainly enforce secrecy using access controls; privacy also depends on users, applications, and policies.

### Exam Tip

High priority. Define secrecy and privacy and state what OS mainly focuses on.

### Common Mistake

Thinking secrecy and privacy are identical. Secrecy is access restriction; privacy is correct/intended use of information.

---

## Page 06 — Security and Protection: Policies and Mechanisms — Security

### Original Slide Content

Security and Protection: Policies and Mechanisms
Security
Policy: Specify whether a person can become a user of the system.
Mechanism:
Add or delete users
Verify whether a person is an authorized user.

### Visual Explanation

No major visual content. The slide maps security policy to mechanisms: policy decides who can become a system user; mechanisms add/delete users and verify authorization.

### Explanation

A security policy states the rule. A security mechanism enforces the rule. For example, the policy may say only registered students can use a lab system; the mechanism is account creation, deletion, and login verification.

### Visual/Text Diagram

```text
Security Policy: Who can become a system user?
        ↓ enforced by
Security Mechanisms: add/delete users + verify authorized users
```

### Exam Tip

High priority. Explain policy vs mechanism using user authentication/account example.

### Common Mistake

Writing only policy or only mechanism. Exam answers need both: rule + enforcement method.

---

## Page 07 — Security and Protection: Policies and Mechanisms — Protection

### Original Slide Content

Security and Protection: Policies and Mechanisms
Protection
Policy: Specify whether a user can access a specific file.
Mechanism:
Set or change protection information of a file.
Check whether a file can be accessed by a user.

### Visual Explanation

No major visual content. The slide maps protection policy to mechanisms: policy decides whether a user can access a file; mechanisms store and check protection information.

### Explanation

For protection, the policy may say which user can open or edit a file. The mechanism stores permissions and checks them when a user tries to access the file.

### Visual/Text Diagram

```text
Protection Policy: Can this user access this file?
        ↓ enforced by
Protection Mechanisms: set/check file protection information
```

### Exam Tip

High priority. Explain protection policy vs mechanism using file access example.

### Common Mistake

Confusing authentication with authorization. Authentication verifies user identity; protection checks whether that user may access a file.

---

## Page 08 — Why is Security a Problem

### Original Slide Content

Why is Security a Problem
Modern operating systems face security challenges because:
Multiple users share the same system
Programs may not be trustworthy
Systems are connected to networks (Internet)
Attackers continuously evolve new techniques

### Visual Explanation

No major visual content. The slide lists why OS security is difficult in modern systems.

### Explanation

Security is hard because OSs are shared, programs can be malicious or buggy, networks expose systems to remote attackers, and attack techniques keep changing.

### Exam Tip

Medium priority. Use these reasons when asked why OS security is difficult.

### Common Mistake

No major common mistake.

---

## Page 09 — Reasons for taking Security Measures

### Original Slide Content

Reasons for taking Security Measures
To prevent loss of data
To prevent corruption of data
To prevent compromise of data
To prevent theft of data

### Visual Explanation

No major visual content. The slide lists the main reasons for security measures: prevent loss, corruption, compromise, and theft of data.

### Explanation

Security measures exist to protect data from four major damages: losing it, corrupting it, exposing it, or stealing it.

### Exam Tip

Medium priority. Memorize the four prevention goals: loss, corruption, compromise, theft.

### Common Mistake

No major common mistake.

---

## Page 10 — Authentication

### Original Slide Content

Authentication
The goal of authentication is the reasonable assurance that anyone
who attempts to access a system or a network is a legitimate user.
There are 3 Mechanisms:
1
Password
2
Physical token or an artifact
3
Biometric measure

### Visual Explanation

No major visual content. The slide introduces authentication mechanisms: password, physical token/artifact, and biometric measure.

### Explanation

Authentication checks whether the person or entity trying to access the system is legitimate. The three common evidence types are something you know, something you have, and something you are.

### Visual/Text Diagram

```text
Authentication evidence
├── Something you know  → Password
├── Something you have  → Physical token / artifact
└── Something you are   → Biometric measure
```

### Exam Tip

High priority. Authentication mechanisms are common short-answer content.

### Common Mistake

Saying password is the only authentication method. Tokens/artifacts and biometrics are also mechanisms.

---

## Page 11 — Core Security Principles — CIA Triad

### Original Slide Content

Core Security Principles
Operating System security is
built around 3 objectives known
as CIA;
Confidentiality
Integrity
Availability

### Visual Explanation

The visual is a CIA triangle with three labeled objectives: Confidentiality, Integrity, and Availability. It shows that OS security depends on balancing all three, not only password protection.

### Explanation

The CIA triad is the core memory model for security. Confidentiality protects secrecy, integrity protects correctness, and availability protects access when needed.

### Visual/Text Diagram

```text
CIA Triad
├── Confidentiality → prevent unauthorized disclosure
├── Integrity       → prevent unauthorized modification
└── Availability    → keep resources accessible when needed
```

### Exam Tip

Very high priority. CIA triad is a standard exam definition topic.

### Common Mistake

Forgetting one part of CIA. Security is weak if any one of confidentiality, integrity, or availability fails.

---

## Page 12 — Core Security Principles — Confidentiality

### Original Slide Content

Core Security Principles
Confidentiality - The information is
not disclosed to unauthorized
individuals, entities and process.
Eg: If someone sees my computer password
while I am logging in, then my password
has been compromised, and confidentiality
has been breached.

### Visual Explanation

The visual repeats the CIA triangle and highlights Confidentiality. It connects confidentiality to secrecy: unauthorized individuals, entities, and processes should not see protected information.

### Explanation

Confidentiality fails when unauthorized users can view sensitive data. Password exposure is a direct confidentiality breach because secret information becomes visible.

### Exam Tip

High priority. Give confidentiality definition plus password example.

### Common Mistake

Calling password leakage an integrity issue. It is mainly a confidentiality issue.

---

## Page 13 — Core Security Principles — Integrity and Availability

### Original Slide Content

Core Security Principles
Integrity - This ensures that data and
system resources are not modified
without authorization.
Eg: Only authorized users can modify
system files
Availability - Availability ensures that
system resources are accessible when
needed.
Eg: CPU time is fairly shared among
processes.

### Visual Explanation

The visual repeats the CIA triangle and connects Integrity and Availability to OS security. Integrity protects data/system resources from unauthorized modification. Availability keeps resources accessible when needed.

### Explanation

Integrity means data must not be changed by unauthorized users. Availability means valid users must be able to use system resources when required.

### Exam Tip

High priority. Compare integrity and availability with examples.

### Common Mistake

Confusing integrity with availability. Integrity = no unauthorized modification; availability = accessible when needed.

---

## Page 14 — Security Models

### Original Slide Content

Security Models
Security models can be discretionary or mandatory.
Discretionary: Holders of right can be allowed to transfer them at their
discretion.
Mandatory: Only designated roles are allowed to grant rights.

### Visual Explanation

No major visual content. The slide compares discretionary and mandatory security models.

### Explanation

Discretionary models let rights holders decide whether to transfer rights. Mandatory models restrict rights assignment to designated roles or authorities.

### Exam Tip

Medium priority. Know discretionary vs mandatory rights management.

### Common Mistake

Confusing discretionary with mandatory. Discretionary allows rights transfer by holders; mandatory restricts granting rights to designated roles.

---

## Page 15 — Security Policy Vs. Security Model

### Original Slide Content

Security Policy Vs. Security Model
Security Policy: Outlines several high-level points:
How the data is accessed
The amount of security required and what are the steps when these
requirements are not met.
Security Model: The mechanism to support the security policy. This
involves in the design of the security system.

### Visual Explanation

No major visual content. The slide separates security policy from security model.

### Explanation

Policy is the “what should happen” part. Model is the “how the system is designed to enforce it” part. Do not mix these in exam answers.

### Exam Tip

High priority. Differentiate security policy and security model.

### Common Mistake

Treating security policy and security model as the same. Policy is high-level requirement; model is supporting mechanism/design.

---

## Page 16 — Access Matrix Model

### Original Slide Content

Access Matrix Model
This consists of three principal components:
A set of passive objects (files, terminals, devices and other entities)
A set of active subjects, which may manipulate the objects
A set of rules governing the manipulation of objects by subjects.

### Visual Explanation

No major visual content. The slide introduces the access matrix model using subjects, objects, and rules.

### Explanation

The access matrix is a formal way to represent access control. Subjects are active entities like users/processes. Objects are passive resources like files/devices. Rules define allowed operations.

### Visual/Text Diagram

```text
Access Matrix Model

Subject/User/Process  →  attempts operation  →  Object/File/Device
        │                                            │
        └──────────── checked against matrix ────────┘
```

### Exam Tip

Very high priority. Access matrix can appear as a diagram/table explanation question.

### Common Mistake

Confusing subjects and objects. Subjects are active users/processes; objects are passive resources.

---

## Page 17 — Access Matrix Example

### Original Slide Content

The access matrix is a rectangular array with one row per subject and
one column per object.
Each cell defines what operations a subject is allowed to perform on
an object.

**Access matrix table reconstructed from slide visual:**

| Subject | File 1 | File 2 | File 3 |
|---|---|---|---|
| User 1 | r, w | r | r, w, x |
| User 2 | r | r | r, w, x |
| User 3 | r, w, x | r, w | r, w, x |

**Permission meanings:** `r` = read, `w` = write, `x` = execute.

### Visual Explanation

The visual shows an access matrix table. Rows are subjects/users and columns are objects/files. Each cell contains permissions such as r, w, and x. This visual explains that access rights are stored per user-object pair.

### Explanation

This page shows the access matrix in table form. For example, if User 1 has r,w for File 1, that user can read and write File 1. If the cell has r,w,x, the user can read, write, and execute.

### Visual/Text Diagram

```text
Access Matrix Shape

            Object 1     Object 2     Object 3
Subject 1   rights       rights       rights
Subject 2   rights       rights       rights
Subject 3   rights       rights       rights

rights examples: r = read, w = write, x = execute
```

### Exam Tip

Very high priority. Be ready to interpret r, w, x permissions in a matrix.

### Common Mistake

Ignoring empty/permission cells. Every cell represents the exact rights a subject has over an object.

---

## Page 18 — Program Threats

### Original Slide Content

Program Threats
Program threats occur when a malicious program exploits system
vulnerabilities to gain unauthorized access or disrupt system
operation.
There are two types of threats:
Direct: This is any direct attack on your specific systems, whether
from outside hackers or from disgruntled insiders.
Indirect: This is general random attack, most commonly computer
viruses, computer worms and Trojan horses.

### Visual Explanation

No major visual content. The slide introduces program threats and divides threats into direct and indirect attacks.

### Explanation

Program threats are malicious or harmful programs that exploit vulnerabilities. Direct attacks target a specific system. Indirect attacks are broad/random attacks such as viruses, worms, and Trojan horses.

### Visual/Text Diagram

```text
Program Threats
├── Direct
│   └── Specific targeted attack against the system
└── Indirect
    └── General/random attack such as virus, worm, Trojan horse
```

### Exam Tip

High priority. Direct vs indirect threats can appear as comparison question.

### Common Mistake

Confusing direct attack with malware category. Direct attack targets specific systems; indirect attack is general/random malware spread.

---

## Page 19 — Common Threats — Trojan Horse and Trapdoor

### Original Slide Content

Common Threats
1.Trojan Horse
A malicious program disguised as a legitimate one
Performs hidden harmful actions
Eg: A fake “calculator” that steals passwords
2.Trapdoor (Backdoor)
A hidden entry point in a program
Bypasses normal authentication
Eg: Developer leaves a secret login for testing

### Visual Explanation

The slide includes small security-themed images for Trojan horse malware and backdoor access. They support the idea that malicious programs may look legitimate or hide secret entry points.

### Explanation

A Trojan horse looks useful but secretly performs harmful activity. A trapdoor/backdoor is a hidden access method that bypasses normal authentication.

### Exam Tip

High priority. Trojan horse vs trapdoor/backdoor is common.

### Common Mistake

Confusing Trojan horse and virus. Trojan disguises itself as legitimate; virus attaches and replicates through a host program.

---

## Page 20 — Common Threats — Logic Bomb and Virus

### Original Slide Content

Common Threats
3. Logic Bomb
Malicious code that activates when a specific condition is met
Eg: Code deletes files on a specific date
4.Virus
Attaches itself to a legitimate program
Replicates when the program runs
There can be file corruptions, system slowdown and data losses

### Visual Explanation

No major visual content. The slide defines logic bombs and viruses.

### Explanation

A logic bomb waits for a trigger condition before executing malicious code. A virus attaches to a legitimate host program and replicates when that host runs.

### Exam Tip

High priority. Logic bomb vs virus is a likely comparison.

### Common Mistake

Confusing logic bomb and virus. Logic bomb triggers on a condition; virus attaches to a program and replicates.

---

## Page 21 — Common Threats — Worm

### Original Slide Content

Common Threats
5. Worm
Self-replicating program
Spreads without user interaction, often via networks
These are different from Virus because worms do not need a host
program

### Visual Explanation

The visual shows cartoon worms moving across computers, representing worm malware spreading through networks without needing a host program.

### Explanation

A worm can replicate and spread by itself, often through a network. The key difference from a virus is that a worm does not need a host program.

### Visual/Text Diagram

```text
Virus vs Worm Spread

Virus: Host program runs → virus replicates
Worm : Network path found → worm self-replicates without host program
```

### Exam Tip

High priority. Virus vs worm difference is an exam classic.

### Common Mistake

Saying worms need host programs. Worms do not need a host program.

---

## Page 22 — OS-Level Defenses

### Original Slide Content

OS-Level Defenses
Code signing
Antivirus software
Sandboxing
Least privilege execution

### Visual Explanation

No major visual content. The slide lists OS-level defenses: code signing, antivirus, sandboxing, and least privilege execution.

### Explanation

OS-level defenses reduce risk from malicious code. Code signing verifies software origin/integrity. Antivirus detects malware. Sandboxing limits program actions. Least privilege gives only the permissions needed.

### Exam Tip

Medium priority. List defenses and briefly explain each.

### Common Mistake

Thinking antivirus alone is enough. Defense should combine multiple controls.

---

## Page 23 — System and Network Threats — DoS

### Original Slide Content

System and Network Threats
Threats that target the entire system or network infrastructure rather
than individual programs.
There are different system threats:
1. Denial of Service (DoS)
Makes system resources unavailable
Overloads CPU, memory, or network
Eg: Flooding a server with requests

### Visual Explanation

No major visual content. The slide introduces system/network threats and DoS attacks.

### Explanation

System/network threats attack the whole system or infrastructure. A DoS attack tries to make resources unavailable by overwhelming CPU, memory, or network capacity.

### Visual/Text Diagram

```text
DoS Attack Flow

Attacker sends excessive requests
        ↓
Server CPU / memory / network overloaded
        ↓
Legitimate users cannot access service
```

### Exam Tip

High priority. Define DoS and give server-flooding example.

### Common Mistake

Confusing DoS with data theft. DoS mainly targets availability, not confidentiality.

---

## Page 24 — System and Network Threats — DDoS, Spoofing, Port Scanning

### Original Slide Content

System and Network Threats
2. Distributed Denial of Service (DDoS)
DoS attack from multiple machines (botnet)
3. Spoofing
Attacker pretends to be a legitimate user or system
There are two types: IP spoofing and Email spoofing
4. Port Scanning
Scanning open ports to find vulnerabilities

### Visual Explanation

No major visual content. The slide defines DDoS, spoofing, and port scanning.

### Explanation

A DDoS is a DoS launched from many machines, usually a botnet. Spoofing means pretending to be another user/system. Port scanning searches for open services to attack.

### Visual/Text Diagram

```text
DDoS Attack Flow

Bot 1 ─┐
Bot 2 ─┼──> Target server overloaded
Bot 3 ─┘
```

### Exam Tip

High priority. DDoS, spoofing, and port scanning are likely short answers.

### Common Mistake

Confusing DDoS with DoS. DDoS uses multiple machines; DoS can be a single-source attack.

---

## Page 25 — System and Network Threats — MITM and Network-Based Malware

### Original Slide Content

System and Network Threats
5. Man-in-the-Middle (MITM)
Attacker intercepts communication between two parties
Eg: Stealing passwords on public Wi-Fi
Network-Based Malware
Network worms
Ransomware
Spyware

### Visual Explanation

No major visual content. The slide defines MITM and lists network-based malware.

### Explanation

A MITM attack intercepts communication between two parties. Network-based malware includes worms, ransomware, and spyware that spread or operate through network paths.

### Visual/Text Diagram

```text
MITM Attack

User A  ←──── intercepted/modified ────→  Attacker  ←────→  User B / Server

The parties think they communicate directly, but the attacker sits between them.
```

### Exam Tip

High priority. MITM is a practical security scenario question.

### Common Mistake

Thinking MITM only happens on public Wi-Fi. Public Wi-Fi is an example; MITM can occur in other intercepted communication paths too.

---

## Page 26 — OS and Network Defenses

### Original Slide Content

OS and Network Defenses
Firewalls
Intrusion Detection Systems (IDS)
Secure protocols (HTTPS, SSH)
Regular patching and updates

### Visual Explanation

No major visual content. The slide lists OS and network defenses.

### Explanation

Network defenses reduce exposure. Firewalls filter traffic. IDS detects suspicious activity. Secure protocols encrypt or protect communication. Regular patching removes known vulnerabilities.

### Visual/Text Diagram

```text
Defense Layers

Firewall → filters traffic
IDS      → detects suspicious activity
HTTPS/SSH→ secures communication
Patching → removes known vulnerabilities
```

### Exam Tip

Medium priority. List common OS/network defenses and their purpose.

### Common Mistake

Ignoring patching. Unpatched systems remain vulnerable even with firewalls and IDS.

---

## Page 27 — End of Lecture 6

### Original Slide Content

End of Lecture 6

### Visual Explanation

No major visual content. The slide marks the end of Lecture 6.

### Explanation

This is a closing slide for the lecture content. No new security concept is introduced.

### Exam Tip

Low priority. End marker only.

### Common Mistake

No major common mistake.

---

## Page 28 — Weekly Plan

### Original Slide Content

Weekly plan
Practical: Pipe implementation in C
Workshop:
Summary – Protection and Security of the OS
Discussion of Tutorial 6

### Visual Explanation

No major visual content. The slide lists the practical and workshop plan.

### Explanation

The weekly plan links the lecture to practical and workshop activities: pipe implementation in C, summary discussion, and Tutorial 6 discussion.

### Exam Tip

Low priority. Practical plan only unless asked in class context.

### Common Mistake

No major common mistake.

---

## Page 29 — Thank You

### Original Slide Content

This page has no major extractable text. It mainly contains visual or closing content.

### Visual Explanation

The slide contains a large “THANK YOU!” image on a notebook. It is an end/closing slide with no new technical concept.

### Explanation

This is the final thank-you slide. No new technical content is introduced.

### Exam Tip

Low priority. Closing slide only.

### Common Mistake

No major common mistake.

---

# Key Definitions

| Term | Meaning | Example |
|---|---|---|
| Protection | OS techniques that guard a user’s data/programs against interference by other authorized users of the system. | File permissions preventing another user from editing your file. |
| Security | OS techniques that guard data/programs against interference by external or unauthorized entities. | Blocking unauthorized login attempts. |
| Secrecy | Only authorized users should access information. | Only the file owner can read a private file. |
| Privacy | Information should be used only for its intended and shared purpose. | Student data used only for academic administration. |
| Security policy | High-level rule describing what security should achieve. | Only registered users can log in. |
| Security mechanism | Technical method that enforces a policy. | User accounts, password checks, permission checks. |
| Authentication | Assurance that a person/system attempting access is legitimate. | Password, token, fingerprint. |
| Confidentiality | Information is not disclosed to unauthorized individuals, entities, or processes. | Password must not be exposed. |
| Integrity | Data/system resources are not modified without authorization. | Only admins can change system files. |
| Availability | System resources are accessible when needed. | CPU time is fairly shared among processes. |
| Discretionary security model | Holders of rights can transfer them at their discretion. | A file owner grants read permission to another user. |
| Mandatory security model | Only designated roles can grant rights. | Security administrator grants access. |
| Access matrix | Table showing subjects, objects, and allowed operations. | User 1 can read/write File 1. |
| Subject | Active entity that manipulates objects. | User, process. |
| Object | Passive resource being accessed. | File, terminal, device. |
| Trojan horse | Malicious program disguised as legitimate software. | Fake calculator stealing passwords. |
| Trapdoor / Backdoor | Hidden program entry point bypassing normal authentication. | Secret developer login. |
| Logic bomb | Malicious code triggered by a specific condition. | Deleting files on a specific date. |
| Virus | Malware that attaches to a legitimate program and replicates when it runs. | Infected executable corrupting files. |
| Worm | Self-replicating malware that spreads without user interaction, often via networks. | Network worm spreading across computers. |
| DoS | Attack that makes system resources unavailable. | Flooding a server with requests. |
| DDoS | DoS attack from multiple machines, often a botnet. | Thousands of bots flood one website. |
| Spoofing | Attacker pretends to be a legitimate user/system. | Fake email sender address. |
| Port scanning | Scanning open ports to find vulnerabilities. | Finding an exposed SSH port. |
| MITM | Attacker intercepts communication between two parties. | Password theft on public Wi‑Fi. |
| Firewall | Defense that filters network traffic. | Blocking unwanted inbound connections. |
| IDS | Intrusion Detection System that detects suspicious activity. | Alerting on abnormal network traffic. |

---

# Important Comparison Tables

## Protection vs Security

| Aspect | Protection | Security |
|---|---|---|
| Main focus | Internal access control | External/unauthorized threat defense |
| Concern | Authorized users misusing or inferring data | Unauthorized persons/entities attacking data/programs |
| Example | File permission check | Blocking unauthorized login or malware |
| Related mechanism | Access rights, access matrix | Authentication, firewall, antivirus |

## Secrecy vs Privacy

| Aspect | Secrecy | Privacy |
|---|---|---|
| Meaning | Only authorized users can access information | Information is used only for intended purposes |
| OS focus | Strong focus | Usually left to users/processes/policies |
| Example | File read permission | Personal data not reused for another purpose |

## Security Policy vs Security Model

| Aspect | Security Policy | Security Model |
|---|---|---|
| Meaning | High-level security requirement | Mechanism/design supporting the policy |
| Answers | What should be allowed/denied? | How will the system enforce it? |
| Example | Only admins modify system files | Role-based access control / access matrix |

## Virus vs Worm vs Trojan Horse

| Threat | Key idea | Needs host program? | Main behavior |
|---|---|---|---|
| Virus | Attaches to legitimate program | Yes | Replicates when host runs |
| Worm | Self-replicates via network | No | Spreads without user interaction |
| Trojan horse | Disguised as legitimate program | Not necessarily | Performs hidden harmful actions |

## DoS vs DDoS

| Aspect | DoS | DDoS |
|---|---|---|
| Source | Usually single source | Multiple machines/botnet |
| Goal | Make resources unavailable | Same, but with larger scale |
| Example | One attacker floods a server | Many infected devices flood a server |

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 11 | CIA triangle | OS security depends on confidentiality, integrity, and availability. |
| 12 | CIA triangle highlighting confidentiality | Unauthorized disclosure breaks confidentiality. |
| 13 | CIA triangle with integrity and availability | Protect modification and ensure resource access. |
| 17 | Access matrix table | Permissions are stored per subject-object pair. |
| 19 | Trojan/backdoor security images | Malicious programs can disguise themselves or hide access paths. |
| 21 | Worm spreading across computers | Worms self-replicate and spread across networks. |
| 29 | Thank-you image | Closing slide only. |

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| Protection vs Security | Protection = internal access control; Security = external/unauthorized defense | 04 |
| Secrecy vs Privacy | Secrecy = access restriction; Privacy = intended use | 05 |
| Policy vs Mechanism | Policy says rule; mechanism enforces rule | 06-07 |
| Authentication | Password, physical token/artifact, biometric measure | 10 |
| CIA Triad | Confidentiality, Integrity, Availability | 11-13 |
| Security models | Discretionary vs Mandatory | 14 |
| Security policy vs model | Policy = high-level requirement; model = support mechanism/design | 15 |
| Access matrix | Subjects × objects; cells show operations | 16-17 |
| Program threats | Direct vs indirect attacks | 18 |
| Trojan and backdoor | Disguised malware vs hidden entry point | 19 |
| Logic bomb and virus | Trigger condition vs host-attached replicating malware | 20 |
| Worm | Self-replicating, no host program needed | 21 |
| OS defenses | Code signing, antivirus, sandboxing, least privilege | 22 |
| DoS/DDoS | Availability attacks | 23-24 |
| Spoofing/port scanning/MITM | Identity pretending, finding open ports, intercepting communication | 24-25 |
| Network defenses | Firewalls, IDS, HTTPS/SSH, patching | 26 |

---

# Important Code Snippets

No programming code snippets are present in Lecture 06. The lecture is theory-focused and contains definitions, security models, threat classifications, and one access matrix table. The weekly plan mentions a practical on pipe implementation in C, but no C code is shown in this lecture PDF.

---

# Likely Exam Questions and Short Answers

## Question 1

Define protection and security in an operating system.

**Expected Answer:**
Protection guards a user’s data and programs against interference by other authorized users. Security guards data and programs against interference by external or unauthorized entities.

## Question 2

Differentiate secrecy and privacy.

**Expected Answer:**
Secrecy means only authorized users can access information. Privacy means information is used only for its intended/shared purpose.

## Question 3

What is the difference between security policy and security mechanism?

**Expected Answer:**
A policy specifies what should be allowed or denied. A mechanism enforces that policy, such as adding/deleting users or checking authorization.

## Question 4

What is authentication? List three authentication mechanisms.

**Expected Answer:**
Authentication is reasonable assurance that someone accessing a system/network is legitimate. Mechanisms: password, physical token/artifact, biometric measure.

## Question 5

Explain the CIA triad.

**Expected Answer:**
CIA stands for Confidentiality, Integrity, and Availability. Confidentiality prevents unauthorized disclosure, integrity prevents unauthorized modification, and availability keeps resources accessible when needed.

## Question 6

Define confidentiality with an example.

**Expected Answer:**
Confidentiality means information is not disclosed to unauthorized individuals, entities, or processes. Example: a password seen by another person is a confidentiality breach.

## Question 7

Differentiate integrity and availability.

**Expected Answer:**
Integrity ensures data/resources are not modified without authorization. Availability ensures resources are accessible when needed.

## Question 8

Differentiate discretionary and mandatory security models.

**Expected Answer:**
In discretionary models, rights holders can transfer rights at their discretion. In mandatory models, only designated roles can grant rights.

## Question 9

What is an access matrix?

**Expected Answer:**
An access matrix is a rectangular table with one row per subject and one column per object. Each cell shows operations the subject can perform on the object.

## Question 10

What are subjects and objects in the access matrix model?

**Expected Answer:**
Subjects are active entities such as users/processes. Objects are passive resources such as files, terminals, and devices.

## Question 11

What is a Trojan horse?

**Expected Answer:**
A malicious program disguised as a legitimate one that performs hidden harmful actions, such as a fake calculator stealing passwords.

## Question 12

What is a trapdoor/backdoor?

**Expected Answer:**
A hidden entry point in a program that bypasses normal authentication, such as a secret developer login.

## Question 13

What is a logic bomb?

**Expected Answer:**
Malicious code that activates when a specific condition is met, such as deleting files on a specific date.

## Question 14

Differentiate virus and worm.

**Expected Answer:**
A virus attaches to a legitimate program and replicates when that program runs. A worm self-replicates and spreads without needing a host program.

## Question 15

List OS-level defenses against program threats.

**Expected Answer:**
Code signing, antivirus software, sandboxing, and least privilege execution.

## Question 16

What is a Denial of Service attack?

**Expected Answer:**
A DoS attack makes system resources unavailable by overloading CPU, memory, or network resources, such as flooding a server with requests.

## Question 17

Differentiate DoS and DDoS.

**Expected Answer:**
DoS can come from one source. DDoS is a DoS attack launched from multiple machines, often a botnet.

## Question 18

What is spoofing?

**Expected Answer:**
Spoofing occurs when an attacker pretends to be a legitimate user or system, such as IP spoofing or email spoofing.

## Question 19

What is port scanning?

**Expected Answer:**
Port scanning checks open ports on a system to identify possible vulnerabilities.

## Question 20

What is a Man-in-the-Middle attack?

**Expected Answer:**
A MITM attack occurs when an attacker intercepts communication between two parties, such as stealing passwords on public Wi‑Fi.

## Question 21

List OS and network defenses.

**Expected Answer:**
Firewalls, Intrusion Detection Systems, secure protocols such as HTTPS/SSH, and regular patching/updates.

---

# Common Mistakes to Avoid

- Writing that protection and security are exactly the same — incorrect.
- Confusing secrecy with privacy — secrecy is access restriction; privacy is intended use.
- Giving a policy without a mechanism when the question asks for both.
- Confusing authentication with authorization/protection.
- Forgetting one part of CIA: confidentiality, integrity, availability.
- Calling password exposure an integrity breach — it is mainly confidentiality breach.
- Confusing subjects and objects in the access matrix.
- Saying a worm needs a host program — incorrect; a virus needs a host program.
- Confusing Trojan horse with virus — Trojan disguises itself; virus attaches and replicates.
- Treating DoS as data theft — DoS mainly attacks availability.
- Forgetting DDoS uses multiple machines/botnets.
- Thinking antivirus alone is enough — use layered defenses: code signing, sandboxing, least privilege, firewall, IDS, secure protocols, patching.

---

# Final One-Page Revision Notes

```text
Lecture 06 — Protection and Security of the Operating System

1. Protection vs Security
   Protection → protects from misuse/interference by authorized internal users.
   Security   → protects from external/unauthorized entities.

2. Secrecy vs Privacy
   Secrecy → only authorized users access information.
   Privacy → information used only for intended/shared purpose.

3. Policy vs Mechanism
   Policy    → what is allowed/denied.
   Mechanism → how OS enforces it.

4. Authentication Mechanisms
   Password | Physical token/artifact | Biometric measure

5. CIA Triad
   Confidentiality → no unauthorized disclosure.
   Integrity       → no unauthorized modification.
   Availability    → resources accessible when needed.

6. Security Models
   Discretionary → rights holders may transfer rights.
   Mandatory     → only designated roles grant rights.

7. Access Matrix
   Rows = subjects/users/processes.
   Columns = objects/files/devices.
   Cells = allowed operations: r, w, x.

8. Program Threats
   Trojan horse → disguised malicious program.
   Trapdoor/backdoor → hidden bypass entry.
   Logic bomb → triggers under condition.
   Virus → attaches to host program.
   Worm → self-replicates; no host program needed.

9. OS-Level Defenses
   Code signing | Antivirus | Sandboxing | Least privilege

10. System/Network Threats
   DoS → makes resources unavailable.
   DDoS → DoS from many machines/botnet.
   Spoofing → pretending to be legitimate.
   Port scanning → finding open ports/vulnerabilities.
   MITM → intercepting communication.

11. OS/Network Defenses
   Firewalls | IDS | HTTPS/SSH | Regular patching and updates
```

---

# Execution Checklist

- [x] Read the uploaded PDF.
- [x] Read the uploaded TXT file.
- [x] Compared PDF/TXT content using page order and visible slide details.
- [x] Followed original PDF page order exactly.
- [x] Added page numbers for every slide/page.
- [x] Included every major text point from the lecture.
- [x] Confirmed there are no code snippets in this lecture.
- [x] Included the access matrix table as a Markdown table.
- [x] Described every important visual/diagram/image.
- [x] Added simple explanations for difficult points.
- [x] Added useful text diagrams.
- [x] Added comparison tables.
- [x] Added definitions and simple meanings.
- [x] Added exam tips.
- [x] Added common mistakes.
- [x] Added full revision summary.
- [x] Added key definitions table.
- [x] Added quick revision table.
- [x] Added important diagrams summary.
- [x] Added likely exam questions with expected answers.
- [x] Added final one-page revision notes.
- [x] Created only one downloadable `.md` file.
- [x] Did not create a PDF.