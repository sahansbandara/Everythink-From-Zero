# SE2020 - Web Technologies and Mobile
# Lecture 01 - Basics of Web, Protocols, Networking, DNS & Languages

**Module:** SE2020 - Web Technologies and Mobile  
**Lecture:** Lecture 01  
**Lecture Title:** Basics of Web, Protocols, Networking, DNS & Languages  
**Lecturer:** Ms. Dilani Lunugalage  
**Institution:** Sri Lanka Institute of Information Technology, Faculty of Computing  
**Programme:** BSc (Hons) in Information Technology  
**Source Pages:** 60 PDF pages/slides

---

## Table of Contents

1. [Lecture Overview](#lecture-overview)
2. [Page-by-Page Lecture Notes](#page-by-page-lecture-notes)
   - [Page 01 - Title Slide](#page-01--title-slide)
   - [Page 02 - Lecture Topic](#page-02--lecture-topic)
   - [Page 03 - What is the Web?](#page-03--what-is-the-web)
   - [Page 04 - Internet vs Web](#page-04--internet-vs-web)
   - [Page 05 - Components of the Web](#page-05--components-of-the-web)
   - [Page 06 - Client](#page-06--client)
   - [Page 07 - Server](#page-07--server)
   - [Page 08 - Client-Server Interaction](#page-08--client-server-interaction)
   - [Page 09 - Benefits of the Web](#page-09--benefits-of-the-web)
   - [Page 10 - What is a Protocol?](#page-10--what-is-a-protocol)
   - [Page 11 - HTTP Overview](#page-11--http-overview)
   - [Page 12 - Other Protocol Overview](#page-12--other-protocol-overview)
   - [Page 13 - Protocols in Action](#page-13--protocols-in-action)
   - [Page 14 - What is a Network?](#page-14--what-is-a-network)
   - [Page 15 - Importance of a Computer Network](#page-15--importance-of-a-computer-network)
   - [Page 16 - Types of Network](#page-16--types-of-network)
   - [Page 17 - LAN](#page-17--different-network-sizes---lan)
   - [Page 18 - MAN](#page-18--different-network-sizes---man)
   - [Page 19 - WAN](#page-19--different-network-sizes---wan)
   - [Page 20 - Network Topology](#page-20--network-topology)
   - [Page 21 - Physical Topology](#page-21--physical-topology)
   - [Page 22 - Logical Topology](#page-22--logical-topology)
   - [Page 23 - IP Addresses](#page-23--ip-addresses)
   - [Page 24 - IP Addressing](#page-24--ip-addressing)
   - [Page 25 - Anatomy of the IP Address](#page-25--anatomy-of-the-ip-address)
   - [Page 26 - How DNS Works](#page-26--how-dns-works)
   - [Page 27 - DNS - Internet's Phonebook](#page-27--dns---internets-phonebook)
   - [Page 28 - Uniform Resource Locator](#page-28--uniform-resource-locator)
   - [Page 29 - Introduction to Web](#page-29--introduction-to-web)
   - [Page 30 - History: How the Web Started](#page-30--history--how-the-web-started)
   - [Page 31 - Markup Languages](#page-31--markup-languages)
   - [Page 32 - XML](#page-32--extensible-markup-language---xml)
   - [Page 33 - HTML](#page-33--html-hypertext-markup-language)
   - [Page 34 - Why HTML?](#page-34--why-html)
   - [Page 35 - Browser Whitespace Handling](#page-35--contd-browser-whitespace-handling)
   - [Page 36 - History of HTML](#page-36--history-of-html)
   - [Page 37 - HTML5](#page-37--html5)
   - [Page 38 - Structure of the HTML Page](#page-38--structure-of-the-html-page)
   - [Page 39 - Sample HTML Page](#page-39--sample-html-page)
   - [Page 40 - Tags Used](#page-40--tags-used)
   - [Page 41 - Simple Formatting Tags](#page-41--simple-formatting-tags)
   - [Page 42 - Headings](#page-42--headings)
   - [Page 43 - Paragraphs/Rulers](#page-43--paragraphsrulers)
   - [Page 44 - Lists](#page-44--lists)
   - [Page 45 - Nested Unordered Lists](#page-45--nested-unordered-lists)
   - [Page 46 - Ordered List](#page-46--ordered-list)
   - [Page 47 - Nested Ordered Lists](#page-47--nested-ordered-lists)
   - [Page 48 - Ordered List Start and Value](#page-48--nested-ordered-lists-start-and-value)
   - [Page 49 - Description Lists](#page-49--description-lists)
   - [Page 50 - HTML Tables](#page-50--html-tables)
   - [Page 51 - Table Attributes](#page-51--table-attributes)
   - [Page 52 - Rows of Cells](#page-52--rows-of-cells)
   - [Page 53 - Table Borders](#page-53--table-borders)
   - [Page 54 - Adding More Rows](#page-54--adding-more-rows)
   - [Page 55 - Heading to a Column](#page-55--heading-to-a-column)
   - [Page 56 - Spanning Rows and Columns](#page-56--spanning-rows-and-columns)
   - [Page 57 - Span and Div Elements](#page-57--span-and-div-elements)
   - [Page 58 - Span and Div Example](#page-58--span-and-div-elements-example)
   - [Page 59 - Review Questions](#page-59--review-questions)
   - [Page 60 - Thank You](#page-60--thank-you)
3. [Exam-Ready Summary](#exam-ready-summary)
4. [Important Definitions Table](#important-definitions-table)
5. [Quick Revision Table](#quick-revision-table)
6. [Likely Exam Questions and Short Expected Answers](#likely-exam-questions-and-short-expected-answers)
7. [Key Terms List](#key-terms-list)

---

## Lecture Overview

This lecture introduces the basic foundation needed before learning deeper web development. It connects the web, internet, protocols, networking, DNS, URLs, markup languages, XML, HTML, and basic HTML tags.

| Main Area | Pages | Exam Importance | Why it matters |
|---|---:|---|---|
| Web basics and client-server model | 3-9 | High | Basic theory questions often ask definitions and differences. |
| Protocols and HTTP/HTTPS | 10-13 | High | Important for explaining how web communication happens. |
| Networking, topology, IP, DNS | 14-28 | High | Core web infrastructure knowledge. |
| Website and web history | 29-30 | Medium | Useful for short-answer theory. |
| XML and HTML basics | 31-40 | High | Directly connected to coding and explanation questions. |
| HTML tags, lists, tables, span/div | 41-59 | Very High | Likely practical written-code questions. |

---

# Page-by-Page Lecture Notes

## Page 01 - Title Slide

### Original Slide Content

- Sri Lanka Institute of Information Technology
- Faculty of Computing
- SE2020 - Web Technologies and Mobile
- Ms. Dilani Lunugalage
- BSc (Hons) in Information Technology

### Explanation

This slide identifies the module, lecturer, institution, and degree programme.

### Exam Tip

Usually not examined directly, but remember the module context: **web technologies and mobile**.

---

## Page 02 - Lecture Topic

### Original Slide Content

**Lecture 01**  
**Basics of Web, Protocols, Networking, DNS & Languages**

### Explanation

The lecture covers the foundation layer of web development:

```text
Web basics -> Protocols -> Networking -> DNS/URL -> XML/HTML -> HTML tags
```

### Exam Tip

This lecture is foundational. If you do not understand the request-response model, DNS, IP address, and HTML structure, later lectures become harder.

---

## Page 03 - What is the Web?

### Original Slide Content

- World Wide Web (WWW): System of interlinked hypertext documents.
- Accessed via internet using browsers.
- Invented by Tim Berners-Lee (1989).

### Definition

**Definition:** The World Wide Web is a system of interlinked hypertext documents and resources that users access through the internet using web browsers.

**Simple meaning:** The web is the collection of websites and pages you open using browsers like Chrome, Firefox, Edge, Opera, or Safari.

### Visual Explanation

The slide shows a timeline-style image of web/internet growth. It includes early networking ideas such as ARPANET, Ethernet, FTP, TCP/IP, the World Wide Web, and later services/platforms like Google, YouTube, Facebook, and mobile/social services.

**Why it matters:** It shows that the web evolved on top of earlier networking technologies. The web is not the same as the internet; it is one major service that uses the internet.

### Text Diagram

```text
Internet infrastructure
        |
        v
World Wide Web
        |
        v
Websites, web apps, search engines, social media, video platforms
```

### Exam Tip

A strong short answer must include: **WWW**, **interlinked hypertext documents**, **browser**, **internet**, and **Tim Berners-Lee, 1989**.

---

## Page 04 - Internet vs Web

### Original Slide Content

- Internet = Global network of computers.
- Web = Services running on internet, such as websites and apps.
- FTP, Telnet, email are also running on internet.

### Definition

**Definition:** The internet is the global physical/logical network connecting computers and devices. The web is a service that runs on top of the internet.

**Simple meaning:** Internet is the road system. Web is one type of vehicle/service using that road.

### Visual Explanation

The slide uses an oval diagram. The larger area represents the **Internet**. Inside it are services like:

- World Wide Web
- FTP
- Telnet
- Email

This shows that the web is only part of the internet, not the whole internet.

### Comparison Table

| Feature | Internet | Web |
|---|---|---|
| Meaning | Global network of computers/devices | Collection of websites/web apps using the internet |
| Type | Infrastructure/network | Service/application layer system |
| Access | Many protocols and applications | Mainly browsers using HTTP/HTTPS |
| Examples | Email, FTP, Telnet, Web | Websites, web apps, online documents |

### Common Mistake

Do not write **Internet = Web**. That is wrong. The web is one service that runs on the internet.

### Exam Tip

If the question asks the difference, write one sentence for each and give examples.

---

## Page 05 - Components of the Web

### Original Slide Content

- Client (browser)
- Server (stores web resources)
- Protocols (rules for communication)

### Explanation

The web needs three basic components:

| Component | Meaning | Example |
|---|---|---|
| Client | Requests information | Browser such as Chrome |
| Server | Stores and sends web resources | Apache/Nginx web server |
| Protocol | Communication rules | HTTP/HTTPS |

### Visual Explanation

The slide shows clients connected through the internet to a server.

```text
Client devices -> Internet -> Server
```

The server stores resources. Clients request those resources.

### Exam Tip

For “components of the web”, do not only list them. Add a one-line function for each.

---

## Page 06 - Client

### Original Slide Content

- Device/software requesting information.
- Example: Chrome, Firefox, Edge, Opera.
- Handles rendering of web content.

### Definition

**Definition:** A client is a device or software application that requests data or services from a server.

**Simple meaning:** The client is the side that asks for a webpage.

### Visual Explanation

The slide shows browser logos such as Chrome, Edge, Firefox, Opera, and Safari. These are examples of web clients.

### Important Point

The browser does more than request data. It also **renders** HTML, CSS, and JavaScript into the webpage seen by the user.

```text
HTML + CSS + JS -> Browser rendering -> Visible webpage
```

### Exam Tip

Write: “A browser is a client because it sends requests to servers and renders returned web content.”

---

## Page 07 - Server

### Original Slide Content

- Stores and serves web content.
- Examples: Apache, Nginx, IIS, Tomcat.

### Definition

**Definition:** A server is a computer or software system that stores resources and responds to client requests.

**Simple meaning:** The server is the side that gives the requested webpage or data.

### Visual Explanation

The slide shows server rooms/racks. This represents physical servers or hosting infrastructure.

### Common Web Server Examples

| Server | Typical Use |
|---|---|
| Apache | General web hosting |
| Nginx | High-performance web server/reverse proxy |
| IIS | Microsoft web server |
| Tomcat | Java web application server |

### Exam Tip

Do not say a server always means a huge physical machine. A server can also be software running on a machine.

---

## Page 08 - Client-Server Interaction

### Original Slide Content

- User enters URL -> Request sent -> Server responds.
- Example: Request for `www.google.com`

**Request-Response Model**

- Client sends request (HTTP).
- Server processes and sends back response (HTML, CSS, JS).
- Server only sends responses.
- Client always initiates the conversation.

### Explanation

The web commonly uses a request-response model. The browser starts the conversation by sending a request. The server responds with the required resources.

### Visual Explanation

The slide has two diagrams:

1. **Client devices connected through the internet to a server.**
2. **Browser request to a server-side system**, where files/scripts/database may be involved before sending the response back.

### Text Diagram

```text
User enters URL
      |
      v
Browser/Client sends HTTP request
      |
      v
Server receives and processes request
      |
      v
Server sends response: HTML + CSS + JavaScript/data
      |
      v
Browser renders page for user
```

### Definition

**Definition:** The request-response model is a communication model where the client sends a request and the server sends back a response.

**Simple meaning:** Client asks. Server answers.

### Common Mistake

Do not write that the server starts the conversation. In normal web browsing, the **client initiates** the request.

### Short Answer Example

**Question:** Explain client-server interaction.  
**Answer:** In client-server interaction, the client such as a browser sends an HTTP request after the user enters a URL. The server processes the request and returns a response such as HTML, CSS, and JavaScript. The client always initiates the conversation, and the server responds.

---

## Page 09 - Benefits of the Web

### Original Slide Content

- Global communication.
- Easy access to information.
- Platform for applications & services.
- What more ??????

### Explanation

The web enables worldwide communication and access to services through browsers and web apps.

### Visual Explanation

The image shows communication-style icons such as phone, message, mail, and cloud. These represent communication, messaging, email, and cloud/web services.

### Additional Valid Benefits

| Benefit | Example |
|---|---|
| Global communication | Email, chat, video calls |
| Information access | Search engines, Wikipedia |
| Online services | Banking, shopping, education |
| Collaboration | Google Docs, LMS platforms |
| Business platform | E-commerce and SaaS systems |

### Exam Tip

For a benefits question, give at least three points with examples.

---

## Page 10 - What is a Protocol?

### Original Slide Content

- Set of rules for data exchange.
- Defines how communication happens.

**Why Protocols Matter**

- Enable interoperability.
- Ensure reliability & security.

### Definition

**Definition:** A protocol is a set of rules that defines how data is exchanged between devices or systems.

**Simple meaning:** A protocol is a communication rulebook.

### Visual Explanation

The slide shows a sequence-style communication diagram. It represents that communication must follow agreed rules, timing, and message formats.

### Why Protocols Matter

| Reason | Meaning |
|---|---|
| Interoperability | Different devices/systems can communicate correctly. |
| Reliability | Data can be delivered in a controlled and expected way. |
| Security | Secure protocols protect data during transmission. |

### Exam Tip

If asked “Why are protocols important?”, do not only define protocol. Add interoperability, reliability, and security.

---

## Page 11 - HTTP Overview

### Original Slide Content

**HTTP**

- Hypertext Transfer Protocol
- Foundation of the web
- Stateless

**HTTP Request & Response**

- Request: Method, Headers, Body
- Response: Status, Headers, Body

**HTTPS - Secure HTTP**

- Encryption via SSL/TLS
- Prevents eavesdropping

**HTTP vs HTTPS**

- HTTP = No encryption
- HTTPS = Secure, trusted

### Definition

**Definition:** HTTP is the protocol used by browsers and servers to transfer web resources.

**Simple meaning:** HTTP is how the browser and server talk on the web.

### Visual Explanation

The slide shows:

1. Client/browser sending an **HTTP request** to server-side systems.
2. Server sending an **HTTP response** back to the client.
3. Response sections such as status line, headers, and body.

### HTTP Message Structure

| Part | Request | Response |
|---|---|---|
| Start line | Method/path/version | Status code/message |
| Headers | Metadata about request | Metadata about response |
| Body | Optional data sent to server | Usually page/data returned to client |

### HTTP vs HTTPS Table

| Feature | HTTP | HTTPS |
|---|---|---|
| Full form | Hypertext Transfer Protocol | Hypertext Transfer Protocol Secure |
| Encryption | No | Yes, using SSL/TLS |
| Security | Lower | Higher |
| Trust | Less trusted | More trusted, shows secure connection |
| Typical port | 80 | 443 |

### Common Mistake

“Stateless” does not mean HTTP cannot carry data. It means each request is independent unless state is managed using cookies, sessions, or tokens.

### Exam Tip

Remember: **HTTP request = method + headers + body** and **HTTP response = status + headers + body**.

---

## Page 12 - Other Protocol Overview

### Original Slide Content

**SMTP**

- Simple Mail Transfer Protocol
- Used for sending emails

**POP3 & IMAP**

- POP3: Downloads emails locally
- IMAP: Syncs across devices

**FTP**

- File Transfer Protocol
- Used for uploading/downloading files

### Visual Explanation

The slide shows email flow between sender, SMTP server, internet, receiving mail server, and recipient. It also shows FTP client-server file transfer.

### Protocol Table

| Protocol | Full Form | Purpose |
|---|---|---|
| SMTP | Simple Mail Transfer Protocol | Sending emails |
| POP3 | Post Office Protocol version 3 | Downloading emails locally |
| IMAP | Internet Message Access Protocol | Syncing emails across devices |
| FTP | File Transfer Protocol | Uploading/downloading files |

### POP3 vs IMAP

| Feature | POP3 | IMAP |
|---|---|---|
| Main behavior | Downloads email to local device | Keeps email synchronized with server |
| Multi-device use | Weak | Strong |
| Best for | Single-device offline email | Multiple-device email access |

### Exam Tip

Do not confuse SMTP with POP3/IMAP. SMTP sends emails. POP3/IMAP retrieve or sync emails.

---

## Page 13 - Protocols in Action

### Original Slide Content

**Application Layer**

- Web: HTTP/HTTPS
- Email: SMTP, IMAP, POP3
- File transfer: FTP

**Transport Layer**

- TCP, UDP, Web Socket

**Port Numbers:**

- HTTP: 80
- HTTPS: 443
- FTP: 21
- SMTP: 25

### Visual Explanation

The diagram shows communication through layers from a source computer to a destination computer. Application and transport layers are shown, with routers and links between systems.

### Layer Table

| Layer | Examples | Purpose |
|---|---|---|
| Application Layer | HTTP, HTTPS, SMTP, IMAP, POP3, FTP | Provides services used by applications |
| Transport Layer | TCP, UDP, WebSocket | Handles end-to-end communication behavior |

### Port Number Table

| Protocol | Port Number | Purpose |
|---|---:|---|
| HTTP | 80 | Standard unencrypted web traffic |
| HTTPS | 443 | Secure web traffic |
| FTP | 21 | File transfer control connection |
| SMTP | 25 | Email sending |

### Exam Tip

Port numbers are easy marks. Memorize: **HTTP 80, HTTPS 443, FTP 21, SMTP 25**.

---

## Page 14 - What is a Network?

### Original Slide Content

- Definition: an interconnected or interrelated chain, group, or system.
- What is a computer Network? Group of devices connected to share data.

### Definition

**Definition:** A network is an interconnected or interrelated chain, group, or system.

**Computer Network Definition:** A computer network is a group of devices connected together to share data and resources.

### Visual Explanation

The slide uses three visual examples:

1. People connected as a social network.
2. Neurons connected as a biological network.
3. Roads connected as a transport network.

These visuals show the general idea of interconnected systems.

### Text Diagram

```text
Device A ---- Device B
   |             |
Device C ---- Device D

All devices are connected and can share data/resources.
```

### Exam Tip

For a network definition, use the phrase **connected devices** and **share data/resources**.

---

## Page 15 - Importance of a Computer Network

### Original Slide Content

- Resource Sharing (like printers)
- Improved Communication (email, video calls)
- Enhanced Productivity and Collaboration (working together on projects)
- Centralized Data Management
- Security (backups and access control)
- Remote Access
- Scalability (working from anywhere and growing the network easily)

### Visual Explanation

The slide shows a network with internet, router/firewall, switch, server, workstation PCs, laptop, phone, and smartphone. It demonstrates how different devices can connect and share resources through network infrastructure.

### Importance Table

| Importance | Meaning | Example |
|---|---|---|
| Resource sharing | Devices share hardware/software resources | Shared printer |
| Communication | Users communicate over network | Email/video call |
| Collaboration | Multiple users work together | Shared project files |
| Centralized data | Data stored and managed centrally | Company server |
| Security | Access control and backup | User permissions |
| Remote access | Access resources from another location | Work from home |
| Scalability | Network can grow | Add more devices/users |

### Exam Tip

If asked “importance of computer networks”, write 5-6 points with examples.

---

## Page 16 - Types of Network

### Original Slide Content

- Client-Server
- Peer to peer

### Visual Explanation

The slide compares two network types:

1. **Client-server:** Several client computers connect to one central server.
2. **Peer-to-peer:** Devices connect directly with each other without a single central server.

### Comparison Table

| Feature | Client-Server | Peer-to-Peer |
|---|---|---|
| Control | Centralized | Decentralized |
| Main device | Server provides services | Each peer can share resources |
| Management | Easier to control centrally | Harder to manage at scale |
| Example | School/company network | Small file-sharing network |

### Text Diagrams

```text
Client-Server:
Client 1 -> Server <- Client 2
Client 3 -> Server <- Client 4
```

```text
Peer-to-Peer:
Peer 1 <-> Peer 2
  ^         ^
  |         |
Peer 3 <-> Peer 4
```

### Exam Tip

Common question: “Differentiate client-server and peer-to-peer network.” Use a comparison table.

---

## Page 17 - Different Network (Sizes) - LAN

### Original Slide Content

LAN stands for Local Area Network. It is a network of computers and devices connected together within a limited geographic area, such as:

- Home
- School
- Building or campus
- Office

**Key Features of a LAN:**

- Short-range: Typically spans a small area, meters to a few kilometers.
- High speed: Offers fast data transfer rates, often 100 Mbps to 10 Gbps.
- Private ownership: Usually owned, managed, and maintained by a single person or organization.
- Low latency: Very quick communication between devices.

### Definition

**Definition:** A LAN is a computer network covering a small geographic area such as a home, school, office, building, or campus.

### Visual Explanation

The slide shows devices such as a tablet, laptop, printer, smartphone, refrigerator, and air conditioner connected to a wireless router. This represents a home/small-area LAN.

### Exam Tip

LAN keywords: **small area, high speed, private ownership, low latency**.

---

## Page 18 - Different Network (Sizes) - MAN

### Original Slide Content

A MAN is a type of computer network that spans a city or large campus, covering a larger area than a LAN but smaller than a WAN.

- Coverage Area: Typically spans a city, town, or metropolitan area up to 50 km.
- Interconnects multiple LANs: Useful for linking several local networks across buildings or campuses.
- High-speed connections: Often uses fiber optics and high-bandwidth infrastructure.
- Medium-range: Larger than a LAN, smaller than a WAN.

### Definition

**Definition:** A MAN is a Metropolitan Area Network that connects networks across a city, town, or large campus.

### Visual Explanation

The slide shows multiple LAN groups connected to form a MAN. This means a MAN connects several smaller local networks.

```text
LAN 1 ----|
LAN 2 ----|--> MAN
LAN 3 ----|
LAN 4 ----|
```

### Exam Tip

MAN keyword: **city/metropolitan area**.

---

## Page 19 - Different Network (Sizes) - WAN

### Original Slide Content

A WAN is a computer network that spans a large geographical area such as a country, continent, or the entire globe.

WANs connect multiple LANs and MANs together, enabling communication and data sharing over long distances.

**Key Features of WAN:**

- Large Coverage Area: Can span thousands of kilometers.
- Interconnects LANs and MANs: Used by businesses, governments, and the internet itself.
- Slower speeds compared to LANs due to distance and infrastructure.
- Uses public and private transmission systems, such as leased lines, satellite links, and fiber optics.

### Definition

**Definition:** A WAN is a Wide Area Network that connects networks over very large geographical distances.

### LAN vs MAN vs WAN

| Network Type | Full Form | Coverage | Example |
|---|---|---|---|
| LAN | Local Area Network | Home, office, school, building | School computer lab |
| MAN | Metropolitan Area Network | City/town/large campus | City-wide university network |
| WAN | Wide Area Network | Country/continent/global | Internet |

### Exam Tip

WAN keyword: **large geographical area** and **connects LANs/MANs**.

---

## Page 20 - Network Topology

### Original Slide Content

**Physical & Logical Topologies**

- Physical Topology defines the actual layout of the wire/media.
  - Example: The wiring in computer labs are laid out in an extended star arrangement.
  - Terminology: Network Interface Card (NIC), Unshielded Twisted Pair (UTP), Shielded Twisted Pair (STP).
- Logical Topology defines how the media is accessed by the hosts.
  - Example: In computer labs, hosts access the media on a first come, first served basis.

### Definition

**Definition:** Network topology describes how devices and connections are arranged or how communication happens in a network.

### Physical vs Logical Topology

| Type | Meaning | Example |
|---|---|---|
| Physical topology | Actual layout of cables/devices | Star layout in a lab |
| Logical topology | How data/media is accessed | First come, first served access |

### Key Terms

| Term | Meaning |
|---|---|
| NIC | Network Interface Card, connects a device to network |
| UTP | Unshielded Twisted Pair cable |
| STP | Shielded Twisted Pair cable |

### Exam Tip

Physical = visible arrangement. Logical = data access/flow method.

---

## Page 21 - Physical Topology

### Original Slide Content

- Refers to the arrangement of nodes and connections in a network.
- Can describe physical layout such as cables and devices.
- Affects performance, scalability, and fault tolerance.
- Common types: Bus, Star, Ring, Mesh, Hybrid.
- Internet Backbone: Global ISPs + undersea cables.

### Visual Explanation

The slide shows topology diagrams: bus, ring, star, extended star, hierarchical, and mesh.

### Topology Comparison Table

| Topology | Visual Idea | Explanation |
|---|---|---|
| Bus | One main cable | All devices connect to a single backbone cable. |
| Ring | Circular connection | Each device connects to two neighboring devices. |
| Star | Center device | All devices connect to a central hub/switch. |
| Extended Star | Stars connected together | Multiple star networks linked. |
| Hierarchical | Tree-like | Devices arranged in levels. |
| Mesh | Many interconnections | Devices have multiple paths to each other. |

### Text Diagrams

```text
Star:
       PC1
        |
PC2 -- Switch -- PC3
        |
       PC4
```

```text
Bus:
PC1 --- PC2 --- PC3 --- PC4
```

```text
Ring:
PC1 --- PC2
 |       |
PC4 --- PC3
```

### Exam Tip

Topology affects **performance, scalability, and fault tolerance**. Include these words in theory answers.

---

## Page 22 - Logical Topology

### Original Slide Content

**Broadcast topology:**

- Each host on the LAN sends or broadcasts its data to every other host.
- Access to media is based on “First come, first served”.
- Ethernet works this way.

**Token Passing Topology:**

- Access to media is controlled by an electronic token.
- Possession of the token gives the host the right to pass data onto the media.

### Definition

**Definition:** Logical topology describes how hosts access the communication media and how data logically moves through the network.

### Broadcast vs Token Passing

| Logical Topology | How it works | Example/Key idea |
|---|---|---|
| Broadcast | Data is sent to all hosts; first come, first served | Ethernet |
| Token Passing | Only the host with the token can send data | Controlled access |

### Common Mistake

Broadcast topology does not mean every device physically connects to every other device. It means the data access behavior is broadcast-based.

### Exam Tip

Remember: **Ethernet = broadcast style / first come first served** in this lecture context.

---

## Page 23 - IP Addresses

### Original Slide Content

- Unique Identification of Network Host
  - Source
  - Destination
- Identifies machine's connection to a network.
- Moving to another network requires change of IP address.
- Assigned by authorities such as:
  - RIPE (Regional Internet Registry for Europe)
  - ARIN (American Registry for Internet Numbers)
  - LIR (Local Internet Registries)
- TCP/IP uses unique 32-bit address Transmission Control Protocol / Internet Protocol.

### Definition

**Definition:** An IP address is a unique numerical address used to identify a device or host on a network.

**Simple meaning:** IP address is like the network address of a device.

### Important Points

| Point | Meaning |
|---|---|
| Source IP | Address of the sender |
| Destination IP | Address of the receiver |
| Network-dependent | Changing network can change IP |
| Assigned by authorities | Internet address allocation is controlled by registries |

### Exam Tip

Mention both **source** and **destination** when explaining how IP addresses help communication.

---

## Page 24 - IP Addressing

### Original Slide Content

**IPv4**

- 32 bit address
- Broken into 4 groups of 8 bits
- 2^32 addresses in total
- 4,294,967,296
- 2 addresses for every 3 persons on Earth
- Example: `133.27.168.125`

**IPv6**

- 128 bit address
- Broken into 12 groups of 8 bits
- 2^128 addresses in total
- 3.4 x 10^38
- 5 x 10^28 addresses per person on Earth
- Example: `2001:db8:85a3::8a2e:370:7334`

### IPv4 vs IPv6 Table

| Feature | IPv4 | IPv6 |
|---|---|---|
| Address size | 32 bits | 128 bits |
| Address groups | 4 groups of 8 bits | Lecture states 12 groups of 8 bits |
| Total addresses | 2^32 | 2^128 |
| Example | `133.27.168.125` | `2001:db8:85a3::8a2e:370:7334` |
| Address capacity | Much smaller | Extremely larger |

### Common Mistake

Do not mix the format. IPv4 uses dotted decimal format. IPv6 uses colon-separated hexadecimal format.

### Exam Tip

Memorize: **IPv4 = 32-bit**, **IPv6 = 128-bit**.

---

## Page 25 - Anatomy of the IP Address

### Original Slide Content

**Hierarchical Division in IP Address:**

- Network Part (Prefix)
  - Describes which physical network
- Host Part (Host Address)
  - Describes which host on that network

### Visual Explanation

The slide shows an IP address split into a **Network** section and a **Host** section. It uses the example-style numbers `205.154.8.1`, with binary bits shown below.

### Definition

**Definition:** An IP address is divided into a network part and a host part. The network part identifies the network, while the host part identifies the specific device within that network.

### Text Diagram

```text
IP Address = Network Part + Host Part

Network Part -> Which network?
Host Part    -> Which device on that network?
```

### Exam Tip

If asked about IP address anatomy, write: **network prefix identifies network; host address identifies device/host**.

---

## Page 26 - How DNS Works

### Original Slide Content

- Slide title: How DNS works

### Visual Explanation

The diagram shows a browser requesting `google.com`, then communicating through an ISP and DNS server to resolve the domain into an IP address. The IP address shown in the diagram is `216.58.213.100`. After the IP is found, the browser communicates with the Google server.

### DNS Process Flow

```text
1. User enters domain name: google.com
2. Browser asks for the IP address.
3. Request goes through ISP/DNS resolver.
4. DNS server returns matching IP address.
5. Browser uses IP address to contact the web server.
6. Server returns the requested web resource.
```

### Definition

**Definition:** DNS translates human-readable domain names into IP addresses that computers use to locate servers.

**Simple meaning:** DNS changes names like `google.com` into numbers like an IP address.

### Exam Tip

DNS is usually explained as **domain name -> IP address**.

---

## Page 27 - DNS - Internet's Phonebook

### Original Slide Content

- DNS - Internet's phonebook

### Visual Explanation

The slide shows the DNS hierarchy:

```text
DNS Root Zone
    |
1st Level Zone: .com, .edu, .gov
    |
2nd Level Zone: google.com
    |
3rd Level Zone: drive.google.com, mail.google.com
```

This hierarchy shows that DNS is organized in levels, starting from the root, then top-level domains, second-level domains, and subdomains.

### Explanation

DNS works like a phonebook because it maps a name to a number:

```text
Person name -> Phone number
Domain name -> IP address
```

### Exam Tip

For DNS hierarchy questions, mention **root**, **top-level domain**, **domain**, and **subdomain**.

---

## Page 28 - Uniform Resource Locator

### Original Slide Content

URL is the unique address for a file that is accessible through Internet.

### Definition

**Definition:** A Uniform Resource Locator (URL) is the unique address used to locate a resource or file on the internet.

**Simple meaning:** A URL is the web address of a webpage or file.

### Example URL Structure

```text
https://www.example.com/folder/page.html
|       |               |
Protocol Domain name     Path/resource
```

### Exam Tip

URL = address of an internet resource. DNS helps convert the domain part of a URL into an IP address.

---

## Page 29 - Introduction to Web

### Original Slide Content

- A website is a collection of related web pages hosted on a server, accessible via the internet.
- Each page is written in code and displayed using a web browser.
- Websites can include text, images, videos, links, forms, and more.

**Examples:**

- Informational (Wikipedia)
- E-commerce (Amazon)
- Social Media (Instagram)
- Educational (Khan Academy)

### Definition

**Definition:** A website is a collection of related web pages hosted on a server and accessed using the internet.

### Website Type Table

| Website Type | Example | Purpose |
|---|---|---|
| Informational | Wikipedia | Provides information |
| E-commerce | Amazon | Online buying/selling |
| Social media | Instagram | Social interaction and sharing |
| Educational | Khan Academy | Learning content |

### Exam Tip

Use the keywords: **collection of related pages**, **hosted on server**, **accessible through internet**, **displayed in browser**.

---

## Page 30 - History - How the Web Started

### Original Slide Content

- 1989: Invented by Tim Berners-Lee at CERN.
- Purpose: To share research and documents across computers.
- Introduced the first:
  - Web browser (WorldWideWeb)
  - Web server
  - HTML (HyperText Markup Language)
- 1991: First website went live.

### Timeline

| Year | Event |
|---:|---|
| 1989 | Tim Berners-Lee invented the web at CERN. |
| 1989 onward | Web browser, web server, and HTML were introduced. |
| 1991 | First website went live. |

### Exam Tip

The three first components to remember: **web browser, web server, HTML**.

---

## Page 31 - Markup Languages

### Original Slide Content

Markup languages are used to structure, format, and organize content on the web or for data sharing.

**XML**

- Used for storing and transporting data, not for displaying it.
- Tags are custom-defined.
- You create your own tags based on your needs.
- Common in web services, APIs, and configuration files.
- Used to create layouts, for example Android.

### Definition

**Definition:** A markup language uses tags to structure, format, and organize content or data.

### XML Explanation

XML is not mainly for visual display. It focuses on storing and transporting structured data.

### Exam Tip

XML keywords: **data storage**, **data transport**, **custom tags**, **APIs/configuration**.

---

## Page 32 - Extensible Markup Language - XML

### Original Slide Content

```xml
<?xml version="1.0" encoding="UTF-8"?>
<student_List>
   <student id="1">
      <name>Kamal</name>
      <grade>A</grade>
   </student>
   <student id="2">
      <name>Farhath</name>
      <grade>A</grade>
   </student>
</student_List>
```

### Explanation

This XML example stores a list of students. Each `<student>` has an `id` attribute and contains child elements such as `<name>` and `<grade>`.

### Visual/Structure Diagram

```text
student_List
├── student id="1"
│   ├── name: Kamal
│   └── grade: A
└── student id="2"
    ├── name: Farhath
    └── grade: A
```

### Exam Tip

XML tags must be properly nested and closed.

---

## Page 33 - HTML (HyperText Markup Language)

### Original Slide Content

**HTML - The Structure of the Web**

**Content:**

- HTML stands for HyperText Markup Language.
- It is the standard language for creating webpages.
- Defines the structure and content of a webpage.
- Uses tags to mark elements, such as headings, paragraphs, links, and images.
- Every webpage you see in a browser is built with HTML.

**Visual Suggestion:** Diagram of a simple HTML page structure showing `<html> -> <head> -> <body>` flow.

### Definition

**Definition:** HTML is the standard markup language used to create the structure and content of webpages.

### HTML Structure Diagram

```text
<html>
├── <head>
│   └── Metadata, title, links, scripts
└── <body>
    └── Visible webpage content
```

### Exam Tip

HTML is for **structure**, CSS is for **style**, JavaScript is for **behavior**.

---

## Page 34 - Why HTML?

### Original Slide Content

**Purpose of HTML**

**Content:**

- Provides the skeleton of a webpage.
- Supported by all browsers.
- Forms the foundation for all web and mobile apps.
- Can embed text, images, videos, and links.

### Visual Explanation

The slide includes a sample HTML code structure with `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<meta charset="UTF-8">`, `<title>`, and `<body>` containing headings and paragraphs.

### Explanation

HTML is required because browsers understand HTML and use it to build the page structure.

### Exam Tip

Use the phrase: **HTML provides the skeleton of a webpage**.

---

## Page 35 - Contd. Browser Whitespace Handling

### Original Slide Content

- The browser ignores extra spaces and new lines between words and markup tags when reading the document.
- Thus, the following three text fragments will be formatted identically.

### Visual Explanation

The slide compares three fragments where the text has different spacing/new lines, but all produce the same browser output. The output sentence is:

```text
The browser will ignore new lines and extra spaces in the text.
```

### Explanation

HTML collapses multiple spaces and line breaks into a single space in normal text flow.

### Common Mistake

Do not expect pressing Enter in HTML source code to create a line break in the browser. Use proper HTML tags such as `<br>` or block elements.

### Exam Tip

Browser ignores extra whitespace in HTML text unless special handling/tags/styles are used.

---

## Page 36 - History of HTML

### Original Slide Content / Visual Timeline

The slide shows a timeline:

| Year | Version/Event |
|---:|---|
| 1991 | HTML first published |
| 1995 | HTML 2.0 |
| 1997 | HTML 3.2 |
| 1999 | HTML 4.01 |
| 2000 | XHTML 1.0 |
| 2002 | XHTML 2.0 |
| 2009 | HTML5 development/shift |
| 2012 | HTML5 |

### Visual Explanation

The slide includes notes explaining that after HTML 4.01, focus shifted to XHTML and stricter standards. XHTML 2.0 had stricter rules than HTML 1.0 and rejected pages that did not comply. HTML5 became more tolerant and capable of handling malformed markup better. Although HTML5 was officially published in 2012, it had been in development earlier.

### Exam Tip

For exams, the key version to remember is **HTML5**, because modern web pages use it and it improves semantic elements and device-independent rendering.

---

## Page 37 - HTML5

### Original Slide Content

- HTML5 is the newest version of HTML.
- Supports all existing web pages. With HTML5, there is no requirement to go back and revise older websites.
- Reduces the need for external plugins and scripts to show website content.
- Improves the semantic definition, meaning and purpose, of page elements.
- Makes rendering of web content universal and independent of the device being used.
- Handles web document errors in a better and more consistent fashion.

### Explanation

HTML5 modernized HTML by adding better semantic structure and reducing dependency on external plugins.

### HTML5 Advantages Table

| Advantage | Meaning |
|---|---|
| Backward compatibility | Older websites can still work. |
| Fewer plugins | Built-in support for media and features. |
| Better semantics | Tags can show meaning, not only layout. |
| Device independent | Content can work across different devices. |
| Better error handling | Browsers handle invalid markup more consistently. |

### Exam Tip

HTML5 is likely to appear as a “list advantages/features” question.

---

## Page 38 - Structure of the HTML Page

### Original Slide Content

- The HTML content begins with `<html>` and ends with `</html>`. The document is divided into two sections:
  - the head, bracketed by `<head>` and `</head>`
  - the body, bracketed by `<body>` and `</body>`
- The head of an HTML document contains identifying and control information that is not part of the displayed text. Such information can be the document title, bracketed by the `<title>` and `</title>` tags.
- The body of the document is where the user-readable text is stored and usually accounts for the bulk of the document.
- Various control tags are there to tell the browser where to insert line breaks and how to format the document.

### Explanation

A standard HTML document has two main parts:

| Section | Purpose | Displayed in browser page? |
|---|---|---|
| `<head>` | Metadata, title, control information | Usually no |
| `<body>` | User-visible content | Yes |

### Structure Diagram

```html
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    Visible content goes here.
  </body>
</html>
```

### Exam Tip

If asked to write a basic HTML structure, always include `<html>`, `<head>`, `<title>`, and `<body>`.

---

## Page 39 - Sample HTML Page

### Original Slide Content / Visual

The slide compares **Displayed by browser** and **HTML markup required**.

The sample browser output says:

```text
An example of a simple web page.
```

The HTML markup shows a simple page structure with doctype, html, head, title, a comment, body text, and closing tags.

### Recreated Sample Code

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Title of the web page</title>
  </head>
  <body>
    <!-- this is a comment that will not be displayed -->
    An example of a simple web page.
  </body>
</html>
```

### Explanation

The browser displays only the body content. The head content controls page metadata and title, but it does not appear as main page text.

### Exam Tip

HTML comments are written as `<!-- comment -->` and are not displayed in the browser.

---

## Page 40 - Tags Used

### Original Slide Content

The slide explains common HTML tags.

| HTML Markup | Meaning |
|---|---|
| `<!doctype html>` | Indicates that this is an HTML5 document. |
| `<html> </html>` | Defines the extent of the HTML markup text. |
| `<html lang="en"> </html>` | The `lang` attribute specifies which language is used to write the content of a web page. |
| `<head> </head>` | Contains descriptions/meta information of the HTML page. This is not displayed as part of the web page. |
| `<title> </title>` | Describes the title of the page. It is usually displayed as the browser window/tab title and may be used by search engines. |
| `<body> </body>` | Delimits the body of the web page. The body contains text displayed on the page and HTML markup for formatting. |
| `<!-- some text -->` | Represents HTML comments. They are not displayed on the web page. |

### Explanation

This table gives the minimum set of tags needed to understand a basic HTML document.

### Exam Tip

In code questions, close your tags correctly. Missing closing tags is a common error.

---

## Page 41 - Simple Formatting Tags

### Original Slide Content

The following are simple physical formatting tags available in HTML.

| Formatted Text | HTML Markup Required |
|---|---|
| Italic font | `<i>Italic</i>` |
| Bold font | `<b>Bold</b>` |
| Small font | `<small>Small</small>` |
| Subscript font | `<sub>Subscript</sub>` |
| Superscript font | `<sup>Superscript</sup>` |

### Explanation

These tags change the physical appearance of text.

### Common Mistake

Do not confuse `<sub>` and `<sup>`:

- `<sub>` displays text lower, like H₂O.
- `<sup>` displays text higher, like x².

### Exam Tip

For practical HTML questions, know the exact opening and closing tags.

---

## Page 42 - Headings

### Original Slide Content

A heading in the text is created with the `<h1>` tag. There are six heading tags, going from `<h1>` the largest to `<h6>` the smallest.

### Recreated Example

```html
<h1>A H1 heading</h1>
<h2>A H2 heading</h2>
<h3>A H3 heading</h3>
<h4>A H4 heading</h4>
<h5>A H5 heading</h5>
<h6>A H6 heading</h6>
```

### Explanation

Headings create structure in a webpage. `<h1>` is the most important/largest heading, while `<h6>` is the least prominent/smallest.

### Exam Tip

Use headings in order. Do not use `<h1>` only because it is large; it should represent the main heading.

---

## Page 43 - Paragraphs/Rulers

### Original Slide Content / Visual

The slide explains paragraphs and horizontal rulers.

**Paragraphs:** A paragraph is created with the `<p>` tag and closed with the `</p>` tag.

```html
<p>A first paragraph</p>
<p>A second paragraph</p>
```

**Rulers:** A horizontal ruler across the page can be created with the `<hr>` tag.

```html
End of a section <hr> New section
```

### Explanation

- `<p>` creates a paragraph block.
- `<hr>` creates a horizontal line used to separate sections.

### Exam Tip

`<hr>` is often used as a void/empty element. It creates a visual separator line.

---

## Page 44 - Lists

### Original Slide Content

**Unordered Lists**

There are several types of list. An unordered list can be created by the following markup.

### Recreated Example

Browser output:

```text
- Item one of list
- Item two of list
```

HTML markup:

```html
<ul>
  <li>Item one of list</li>
  <li>Item two of list</li>
</ul>
```

### Explanation

An unordered list displays bullet points. Each list item must be inside `<li>` tags.

### Exam Tip

Unordered list = `<ul>`. List item = `<li>`.

---

## Page 45 - Nested Unordered Lists

### Original Slide Content

Nested lists can be done as follows.

### Recreated Example

```html
<ul>
  <li>Item one of list</li>
  <li>Item two of list
    <ul>
      <li>Subitem one of item two</li>
      <li>Subitem two of item two
        <ul>
          <li>Subsubitem one of subitem two</li>
          <li>Subsubitem two of subitem two</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Item three of list</li>
</ul>
```

### Visual Explanation

The visual shows a bullet list with sub-bullets and deeper sub-sub-bullets.

### Explanation

A nested list is created by placing a new `<ul>` inside an existing `<li>`.

### Exam Tip

The inner `<ul>` should be inside the parent `<li>`, not randomly after it.

---

## Page 46 - Ordered List

### Original Slide Content

An ordered list is similar to an unordered list, except that each entry is consecutively numbered.

### Recreated Example

```html
<ol>
  <li>Item one of list</li>
  <li>Item two of list</li>
</ol>
```

Browser output:

```text
1. Item one of list
2. Item two of list
```

### Explanation

An ordered list uses numbers automatically.

### Exam Tip

Ordered list = `<ol>`. Unordered list = `<ul>`.

---

## Page 47 - Nested Ordered Lists

### Original Slide Content / Visual

The slide shows a nested numbered list.

### Recreated Example

```html
<ol>
  <li>Item one of list</li>
  <li>Item two of list
    <ol>
      <li>Subitem one of item two</li>
      <li>Subitem two of item two
        <ol>
          <li>Subsubitem one of subitem two</li>
          <li>Subsubitem two of subitem two</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>Item three of list</li>
</ol>
```

### Visual Explanation

The output shows numbered items, with nested numbered subitems under item two.

### Exam Tip

For nested ordered lists, put `<ol>` inside a parent `<li>`.

---

## Page 48 - Nested Ordered Lists: Start and Value

### Original Slide Content

It is possible to give a start value to the ordered list or to reset the counter.

### Recreated Examples

**Starting an ordered list from 3:**

```html
<ol start="3">
  <li>Item one of list</li>
  <li>Item two of list</li>
  <li>Item three of list</li>
  <li>Item four of list</li>
</ol>
```

**Resetting item value:**

```html
<ol>
  <li>Item one of list</li>
  <li>Item two of list</li>
  <li>Item three of list</li>
  <li value="7">Item four of list</li>
  <li>Item five of list</li>
</ol>
```

### Visual Explanation

The first example begins numbering at 3. The second example changes a specific list item to number 7, and the following items continue from that value.

### Slide Note

The note says `start` and `value` attributes were deprecated in HTML 4.01, but are supported in HTML5.

### Exam Tip

Remember: `<ol start="3">` changes the starting number. `<li value="7">` changes one list item's number.

---

## Page 49 - Description Lists

### Original Slide Content

A description list is used to display name/value pairs such as terms and their definitions.

### Recreated Example

```html
<dl>
  <dt>Definition tag.</dt>
  <dd>Text of the definition list. Which may stretch over several lines.</dd>
  <dt>Another definition tag.</dt>
  <dd>Text of the definition list.</dd>
</dl>
```

### Explanation

| Tag | Meaning |
|---|---|
| `<dl>` | Description list |
| `<dt>` | Description term/name |
| `<dd>` | Description details/definition |

### Exam Tip

Description lists are not the same as ordered/unordered lists. They are for terms and definitions.

---

## Page 50 - HTML Tables

### Original Slide Content

The HTML tags to create a table are as follows:

| HTML Markup | Meaning |
|---|---|
| `<table> </table>` | Declares a table. |
| `<caption> </caption>` | Defines the table's caption and provides a short description. |
| `<tr> </tr>` | Begins a table row. |
| `<th> </th>` | Begins a cell containing header text. |
| `<td> </td>` | Begins a cell containing regular text. |

### Explanation

A table is built using rows. Each row contains cells. Header cells use `<th>`, and normal data cells use `<td>`.

### Table Structure Diagram

```text
<table>
  <tr>
    <th>Header cell</th>
    <th>Header cell</th>
  </tr>
  <tr>
    <td>Data cell</td>
    <td>Data cell</td>
  </tr>
</table>
```

### Exam Tip

The most important table tags are: `<table>`, `<tr>`, `<th>`, `<td>`.

---

## Page 51 - Table Attributes

### Original Slide Content / Visual Table

The slide shows table-related CSS properties and their meanings.

| Table Element | CSS | Meaning |
|---|---|---|
| `<table>`, `<th>`, or `<td>` | `border`, e.g. `border: 1px solid black;` | Specifies a border for the table, row, or cell. Used to replace the old `border` table attribute. |
| `<table>`, `<th>`, or `<td>` | `padding`, e.g. `padding: 25px;` | Specifies gap/padding between a border and table cell contents. |
| `<table>`, `<th>`, or `<td>` | `background-color`, e.g. `background-color: aqua;` | Sets background colour for the table, row, or cell. |
| `<table>` | `width`, e.g. `width: 80%;` | Specifies the element as 80% of the window width. |
| `<table>` | `width`, e.g. `width: 500px;` | Specifies the element as 500 pixels wide. |
| `<th>`, `<td>` | `text-align`, e.g. `text-align: right;` | Sets horizontal alignment: right, center, justify. Default is left. |
| `<th>`, `<td>` | `vertical-align`, e.g. `vertical-align: top;` | Sets vertical alignment: top, bottom, middle. Default is middle. |

### Explanation

Modern HTML uses CSS to style tables instead of old presentation attributes.

### Exam Tip

For “no CSS used” questions, only use HTML tags. For styling questions, mention CSS properties like `border`, `padding`, and `border-collapse`.

---

## Page 52 - Row(s) of Cells

### Original Slide Content

A table in HTML is constructed horizontally by creating rows of data cells.

### Recreated Example

```html
<table>
  <tr>
    <td>Data cell 1</td>
    <td>Data cell 2</td>
  </tr>
</table>
```

Browser output:

| Data cell 1 | Data cell 2 |
|---|---|

### Explanation

`<tr>` creates a row. Each `<td>` inside that row creates a cell.

### Exam Tip

`<tr>` does not store cell data by itself. It only creates the row container.

---

## Page 53 - Table Borders

### Original Slide Content

- We can use CSS to add a table border and some padding.
- When CSS adds a border, by default the table borders are separated: `border-collapse: separate;`.
- In the lecture examples, the default display is changed with `border-collapse: collapse;` so that borders collapse into a single border.

### Recreated CSS

```css
table, th, td {
  border: 1px solid black;
  border-collapse: separate;
}

th, td {
  padding: 5px;
}
```

```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td {
  padding: 5px;
}
```

### Visual Explanation

The slide compares two small tables:

1. Borders separated: each cell border appears separate.
2. Borders collapsed: adjacent borders merge into a single clean border.

### Exam Tip

`border-collapse: collapse;` is used to remove double-looking separated borders.

---

## Page 54 - Adding More Rows

### Original Slide Content

You can add more rows to your table by adding a new `<tr>` tag followed by your table cells and content, and closing the row using the `</tr>` tag.

### Recreated Example

```html
<table>
  <tr>
    <td>Data cell 1</td>
    <td>Data cell 2</td>
  </tr>
  <tr>
    <td>Data cell 3</td>
    <td>Data cell 4</td>
  </tr>
</table>
```

Browser output idea:

| Data cell 1 | Data cell 2 |
|---|---|
| Data cell 3 | Data cell 4 |

### Explanation

Each new row needs its own `<tr>...</tr>` pair.

### Exam Tip

Rows are horizontal. To add a new horizontal row, add another `<tr>`.

---

## Page 55 - Heading to a Column

### Original Slide Content

The tag `<th>` may be used instead of `<td>` if the cell is a header to a column of cells.

### Visual Explanation

The slide shows a table with column headers such as **Mnemonic** and **Expansion**. The rows include examples such as HTML and Hyper Text Markup Language.

### Recreated Example

```html
<table>
  <tr>
    <th>Mnemonic</th>
    <th>Expansion</th>
  </tr>
  <tr>
    <td>HTML</td>
    <td>Hyper Text Markup Language</td>
  </tr>
</table>
```

### Explanation

Use `<th>` for header cells because it gives semantic meaning to the table.

### Exam Tip

`<th>` = header cell. `<td>` = normal data cell.

---

## Page 56 - Spanning Rows and Columns

### Original Slide Content

You can add the attributes `rowspan` and `colspan` to the HTML tags `<td>` and `<th>` to form data cells which span more than one row or column.

### Visual Explanation

The slide shows a table where some cells combine across rows or columns. This is useful when one heading or category applies to multiple cells.

### Recreated Example

```html
<table>
  <tr>
    <th>Exam</th>
    <th>Coursework</th>
  </tr>
  <tr>
    <td rowspan="2">ICT</td>
    <td>Tutorials 30%</td>
  </tr>
  <tr>
    <td>Coursework 10%</td>
  </tr>
</table>
```

### Meaning Table

| Attribute | Used on | Meaning |
|---|---|---|
| `rowspan` | `<td>` or `<th>` | Cell spans multiple rows. |
| `colspan` | `<td>` or `<th>` | Cell spans multiple columns. |

### Exam Tip

`rowspan` = vertical merge. `colspan` = horizontal merge.

---

## Page 57 - Span and Div Elements

### Original Slide Content

- `<span>` element is a grouping element. Its primary purpose is to apply CSS rules or id attributes to a block of text. It is an inline-level element, which means it is displayed in line with other text and with no line breaks.
- `<div>` is a similar element but displayed on its own line, with margins above and below. It is a block-level element.

### Definition

**Definition:** `<span>` is an inline grouping element used to apply CSS or attributes to part of text.

**Definition:** `<div>` is a block-level grouping element used to group larger sections of content.

### Span vs Div Table

| Feature | `<span>` | `<div>` |
|---|---|---|
| Display type | Inline | Block-level |
| Starts new line? | No | Yes |
| Common use | Style part of text | Group sections/layout blocks |
| Example | Highlight one word | Wrap a page section |

### Exam Tip

`span` is inline. `div` is block. This is a very common exam/interview difference.

---

## Page 58 - Span and Div Elements Example

### Original Slide Content / Visual

The slide shows code and browser output comparing span and div behavior.

### Visual Explanation

The browser output shows:

- A title: **The span element**
- A line where only part of the sentence is styled using `<span>`.
- A title: **The div Element**
- A pink block/section created using `<div>` containing text.

### Recreated Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight {
      color: blue;
      font-weight: bold;
    }
    .box {
      background-color: pink;
      padding: 15px;
    }
  </style>
</head>
<body>
  <h1>The span element</h1>
  <p>My mother has <span class="highlight">blue</span> eyes.</p>

  <h1>The div Element</h1>
  <div class="box">
    My mother has blue eyes.<br>
    My father has green eyes.
  </div>
</body>
</html>
```

### Explanation

`<span>` styles part of a sentence without breaking the line. `<div>` creates a separate block area that can contain multiple lines or elements.

### Exam Tip

If the requirement is to style only one word or phrase, use `<span>`. If the requirement is to group a section, use `<div>`.

---

## Page 59 - Review Questions

### Original Slide Content

- Question 1 - What is the difference between the `<tr>` and `<td>` tags?
- Question 2 - What is the difference between the `<td>` and `<th>` tags?
- Question 3 - Write the HTML tags to display the following tables, with no CSS used.

### Visual Explanation

The slide shows four table examples that likely require use of:

- `<table>`
- `<tr>`
- `<td>`
- `<th>`
- `rowspan`
- `colspan`

### Short Expected Answers

**Q1: Difference between `<tr>` and `<td>`**

`<tr>` defines a table row. `<td>` defines a normal data cell inside a row.

**Q2: Difference between `<td>` and `<th>`**

`<td>` is used for normal table data cells. `<th>` is used for header cells, usually column or row headings.

**Q3: Tags needed for tables**

Use `<table>` as the table container, `<tr>` for rows, `<td>` for data cells, `<th>` for headers, and `rowspan`/`colspan` for merged cells.

### Exam Tip

For “write HTML tags for the table” questions, first count rows and columns, then identify merged cells.

---

## Page 60 - Thank You

### Original Slide Content

Thank You!

### Explanation

This is the closing slide. No new technical content is introduced.

---

# Exam-Ready Summary

## Full Lecture Summary

This lecture explains the foundation of web technologies. The World Wide Web is a system of interlinked hypertext documents accessed through browsers over the internet. The internet is the global network infrastructure, while the web is only one service running on it. Web communication commonly follows the client-server model, where the client/browser sends an HTTP request and the server returns a response such as HTML, CSS, and JavaScript.

Protocols are rule sets for data exchange. HTTP is the foundation of web communication, while HTTPS secures HTTP using SSL/TLS encryption. Other important protocols include SMTP for sending email, POP3/IMAP for receiving or syncing email, and FTP for file transfer. Protocols work across layers, with application layer protocols using transport layer technologies such as TCP and UDP. Key ports include HTTP 80, HTTPS 443, FTP 21, and SMTP 25.

A computer network is a group of connected devices that share data and resources. Networks are useful for resource sharing, communication, collaboration, centralized management, security, remote access, and scalability. LAN covers a small area, MAN covers a city/metropolitan area, and WAN covers large geographical distances. Network topology can be physical or logical. Physical topology describes the actual cable/device arrangement, while logical topology explains how the network media is accessed.

IP addresses uniquely identify hosts on a network. IPv4 is 32-bit, while IPv6 is 128-bit. IP addresses include a network part and host part. DNS works like the internet's phonebook by translating domain names into IP addresses. A URL is the unique address of a file or resource accessible through the internet.

The lecture then introduces markup languages. XML stores and transports data using custom tags. HTML is the standard markup language used to create webpages. HTML provides the skeleton/structure of webpages and uses tags such as `<html>`, `<head>`, `<title>`, and `<body>`. HTML5 improves semantic meaning, device independence, backward compatibility, and error handling.

Finally, the lecture covers practical HTML tags. Formatting tags include `<i>`, `<b>`, `<small>`, `<sub>`, and `<sup>`. Headings use `<h1>` to `<h6>`. Paragraphs use `<p>`, horizontal rules use `<hr>`, unordered lists use `<ul>`, ordered lists use `<ol>`, and list items use `<li>`. Description lists use `<dl>`, `<dt>`, and `<dd>`. Tables use `<table>`, `<tr>`, `<th>`, and `<td>`, with `rowspan` and `colspan` for merged cells. `<span>` is inline, while `<div>` is block-level.

---

## Important Formulas / Code Snippets

### Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
</body>
</html>
```

### Basic Table

```html
<table>
  <tr>
    <th>Name</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>Kamal</td>
    <td>A</td>
  </tr>
</table>
```

### Nested List

```html
<ul>
  <li>Main item
    <ul>
      <li>Sub item</li>
    </ul>
  </li>
</ul>
```

---

# Important Definitions Table

| Term | Definition | Simple Meaning |
|---|---|---|
| Web / WWW | System of interlinked hypertext documents accessed through browsers over the internet. | Websites and web pages opened in browsers. |
| Internet | Global network of connected computers/devices. | The worldwide network infrastructure. |
| Client | Device/software that requests information from a server. | Browser/user side. |
| Server | System that stores and serves resources to clients. | Resource provider. |
| Protocol | Set of rules for data exchange. | Communication rulebook. |
| HTTP | Protocol used to transfer web resources. | Web communication protocol. |
| HTTPS | Secure version of HTTP using SSL/TLS. | Encrypted web communication. |
| Network | Interconnected group/system. | Connected devices sharing data. |
| LAN | Local Area Network covering a small area. | Home/school/office network. |
| MAN | Metropolitan Area Network covering a city/campus. | City-level network. |
| WAN | Wide Area Network covering large distances. | Country/global network. |
| IP Address | Unique address identifying a host on a network. | Device network address. |
| DNS | System that converts domain names to IP addresses. | Internet phonebook. |
| URL | Unique address for an internet resource/file. | Web address. |
| XML | Markup language for storing/transporting data using custom tags. | Structured data format. |
| HTML | Standard markup language for webpage structure. | Webpage skeleton language. |
| `<span>` | Inline grouping element. | Style part of text. |
| `<div>` | Block-level grouping element. | Group page sections. |

---

# Quick Revision Table

| Topic | Must Remember |
|---|---|
| Web vs Internet | Internet is infrastructure; web is a service on it. |
| Client-server | Client requests, server responds. |
| HTTP | Stateless, request-response protocol. |
| HTTPS | HTTP + SSL/TLS encryption. |
| Email protocols | SMTP sends; POP3 downloads; IMAP syncs. |
| Ports | HTTP 80, HTTPS 443, FTP 21, SMTP 25. |
| LAN/MAN/WAN | Small/city/large geographic coverage. |
| Topology | Physical layout vs logical access method. |
| IP | IPv4 32-bit, IPv6 128-bit. |
| DNS | Domain name to IP address. |
| URL | Address of web resource. |
| XML | Data storage/transport; custom tags. |
| HTML | Webpage structure. |
| HTML5 | Semantic, device-independent, better error handling. |
| Table tags | `<table>`, `<tr>`, `<th>`, `<td>`. |
| List tags | `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`. |
| Span vs Div | Inline vs block-level. |

---

# Likely Exam Questions and Short Expected Answers

## 1. What is the World Wide Web?

The World Wide Web is a system of interlinked hypertext documents and resources accessed through the internet using web browsers. It was invented by Tim Berners-Lee in 1989.

## 2. Difference between Internet and Web

The internet is the global network infrastructure connecting computers. The web is a service running on the internet that provides websites and web applications. Email, FTP, and Telnet also run on the internet.

## 3. Explain client-server interaction

A client such as a browser sends an HTTP request to a server after the user enters a URL. The server processes the request and returns a response such as HTML, CSS, and JavaScript. The client initiates the conversation.

## 4. What is a protocol?

A protocol is a set of rules for data exchange. It defines how communication happens between systems and supports interoperability, reliability, and security.

## 5. Difference between HTTP and HTTPS

HTTP transfers web resources without encryption. HTTPS is the secure version of HTTP and uses SSL/TLS encryption to protect data and prevent eavesdropping.

## 6. Explain SMTP, POP3, IMAP, and FTP

SMTP is used for sending emails. POP3 downloads emails locally. IMAP syncs emails across devices. FTP is used to upload and download files.

## 7. What are LAN, MAN, and WAN?

LAN covers a small area such as a home, office, or school. MAN covers a city or large campus. WAN covers a large geographical area such as a country, continent, or the globe.

## 8. Difference between physical and logical topology

Physical topology describes the actual layout of cables, nodes, and devices. Logical topology describes how network media is accessed and how data logically flows through the network.

## 9. What is DNS?

DNS is the system that translates human-readable domain names into IP addresses. It is known as the internet's phonebook.

## 10. What is HTML?

HTML stands for HyperText Markup Language. It is the standard markup language used to create the structure and content of webpages.

## 11. Difference between XML and HTML

XML is used to store and transport data using custom tags. HTML is used to structure and display webpage content in browsers.

## 12. Difference between `<tr>` and `<td>`

`<tr>` defines a table row. `<td>` defines a normal data cell inside a row.

## 13. Difference between `<td>` and `<th>`

`<td>` is a normal table data cell. `<th>` is a table header cell and is used for headings.

## 14. Difference between `<span>` and `<div>`

`<span>` is an inline element used to style part of text without line breaks. `<div>` is a block-level element used to group larger sections and starts on a new line.

## 15. Write HTML for a simple table

```html
<table>
  <tr>
    <th>Name</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td>Kamal</td>
    <td>85</td>
  </tr>
</table>
```

---

# Key Terms List

- World Wide Web (WWW)
- Internet
- Browser
- Client
- Server
- Protocol
- HTTP
- HTTPS
- SSL/TLS
- Request
- Response
- Header
- Body
- SMTP
- POP3
- IMAP
- FTP
- TCP
- UDP
- WebSocket
- Port number
- Computer network
- LAN
- MAN
- WAN
- Physical topology
- Logical topology
- Bus topology
- Star topology
- Ring topology
- Mesh topology
- IP address
- IPv4
- IPv6
- Network part
- Host part
- DNS
- URL
- Website
- XML
- HTML
- HTML5
- Tag
- Element
- Attribute
- `<html>`
- `<head>`
- `<title>`
- `<body>`
- `<p>`
- `<hr>`
- `<ul>`
- `<ol>`
- `<li>`
- `<dl>`
- `<dt>`
- `<dd>`
- `<table>`
- `<tr>`
- `<th>`
- `<td>`
- `rowspan`
- `colspan`
- `<span>`
- `<div>`

---

# Final Execution Checklist

- [x] Read both PDF and TXT files.
- [x] Followed original PDF page order exactly.
- [x] Included all page numbers.
- [x] Included original text points from each PDF page.
- [x] Described images, diagrams, tables, and visuals where they appear.
- [x] Added explanations without changing the lecture meaning.
- [x] Added clickable Markdown-style table of contents.
- [x] Added useful tables and text diagrams.
- [x] Added exam tips and likely questions.
- [x] Created only one downloadable `.md` file.
- [x] Did not create a PDF.
