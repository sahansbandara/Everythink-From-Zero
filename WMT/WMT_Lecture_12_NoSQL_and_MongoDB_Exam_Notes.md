# SE2020 — Web Technologies and Mobile
## Lecture 12 — NoSQL and MongoDB

**Institution:** SLIIT  
**Faculty:** Faculty of Computing  
**Module Code:** SE2020  
**Module Name:** Web Technologies and Mobile / Web and Mobile Technologies  
**Lecture Number:** 12  
**Lecture Title:** NoSQL and MongoDB  
**Total PDF Pages/Slides:** 19

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — Agenda](#page-02--agenda)
- [Page 03 — Fundamental of NoSQL](#page-03--fundamental-of-nosql)
- [Page 04 — NoSQL vs Relational DB](#page-04--nosql-vs-relational-db)
- [Page 05 — NoSQL vs Relational DB – Real world example](#page-05--nosql-vs-relational-db--real-world-example)
- [Page 06 — NoSQL – Key Characteristics](#page-06--nosql--key-characteristics)
- [Page 07 — Types of NoSQL](#page-07--types-of-nosql)
- [Page 08 — Document Based Databases](#page-08--document-based-databases)
- [Page 09 — Key Value Stores](#page-09--key-value-stores)
- [Page 10 — Column Family Databases](#page-10--column-family-databases)
- [Page 11 — Graph Databases](#page-11--graph-databases)
- [Page 12 — Exercise](#page-12--exercise)
- [Page 13 — CAP Theorem](#page-13--cap-theorem)
- [Page 14 — MongoDB](#page-14--mongodb)
- [Page 15 — MongoDB – Key Characteristics](#page-15--mongodb--key-characteristics)
- [Page 16 — MongoDB – Data Structure](#page-16--mongodb--data-structure)
- [Page 17 — MongoDB – Common Operations](#page-17--mongodb--common-operations)
- [Page 18 — Tutorial – Connecting MongoDB with Backend Server](#page-18--tutorial--connecting-mongodb-with-backend-server)
- [Page 19 — Thank You](#page-19--thank-you)
- [Key Definitions](#key-definitions)
- [Important Tables](#important-tables)
- [Important Diagrams Summary](#important-diagrams-summary)
- [Important Code and Query Snippets](#important-code-and-query-snippets)
- [Likely Exam Questions and Short Answers](#likely-exam-questions-and-short-answers)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Final One-Page Revision Notes](#final-one-page-revision-notes)

---

# Page-by-Page Lecture Notes

## Page 01 — Title Page

### Original Slide Content

- **SE2020 – Web Technologies and Mobile**
- **Lecture 12**
- **NoSQL and MongoDB**
- SLIIT / Faculty of Computing branding is shown on the slide.

### Visual Explanation

The slide is a title slide. It contains the SLIIT logo, Faculty of Computing branding, and the lecture topic. The visual design uses a white background with blue and orange geometric shapes.

### Explanation

This lecture focuses on **NoSQL databases** and **MongoDB**. It belongs to SE2020 Web Technologies and Mobile. The main learning direction is database design for modern web/mobile applications where data may be flexible, large, or distributed.

### Exam Tip

Remember the lecture title exactly: **NoSQL and MongoDB**. This lecture can appear in theory questions about database types, NoSQL characteristics, MongoDB data structure, MongoDB CRUD operations, and CAP theorem.

### Common Mistake

No major common mistake.

---

## Page 02 — Agenda

### Original Slide Content

**Agenda**

- Fundamental of NoSQL
- CAP Theorem
- Different types of NoSQL DB
- Introduction to MongoDB
- Integrate MongoDB with Express

### Visual Explanation

The slide lists the main lecture flow as a vertical agenda. It shows that the lesson moves from general NoSQL theory into MongoDB and then backend integration.

### Explanation

The lecture is structured from concept to practice:

1. First, understand what NoSQL means.
2. Then learn the CAP theorem, which explains trade-offs in distributed databases.
3. Then learn types of NoSQL databases.
4. Then focus on MongoDB as a document-based NoSQL database.
5. Finally, connect MongoDB with an Express backend.

### Visual/Text Diagram

```text
NoSQL Basics
      ↓
CAP Theorem
      ↓
Types of NoSQL Databases
      ↓
MongoDB Introduction
      ↓
MongoDB + Express Backend Integration
```

### Exam Tip

If asked to outline the lecture scope, mention: **NoSQL fundamentals, CAP theorem, NoSQL database types, MongoDB, and Express integration**.

### Common Mistake

A weak answer jumps directly to MongoDB without explaining NoSQL first. MongoDB is only one type of NoSQL database.

---

## Page 03 — Fundamental of NoSQL

### Original Slide Content

- **NoSQL (Not Only SQL)** is a modern database approach that differs from traditional relational database systems.
- It is designed to store, retrieve, and manage large volumes of **unstructured**, **semi-structured**, or **rapidly changing** data efficiently.
- Unlike relational databases that rely on fixed schemas and tables, NoSQL databases offer **flexibility**, **scalability**, and **high performance** for modern, data-intensive applications such as social networks, IoT systems, and real-time analytics.

### Visual Explanation

The slide contains three bullet points explaining the meaning, purpose, and advantage of NoSQL. There are no complex diagrams.

### Explanation

**NoSQL** means **Not Only SQL**. It does not mean “No SQL forever.” It means the database model is not limited to traditional relational tables.

Traditional relational databases store data in tables with fixed columns. That is good for structured data. However, modern systems often deal with:

- Social media posts
- IoT sensor data
- Real-time logs
- Product catalogs with changing fields
- User profiles with different attributes

For these cases, NoSQL is useful because it can store data in flexible structures such as documents, key-value pairs, columns, or graphs.

### Definition

**NoSQL Database:** A non-relational database approach designed to store and manage flexible, large-scale, unstructured, semi-structured, or rapidly changing data.

### Simple Meaning

NoSQL is a flexible database style used when fixed tables are too restrictive or when the application needs high scalability and fast performance.

### Example

A social media user profile may include different fields for different users:

```json
{
  "name": "Sanduni",
  "email": "sanduni@gmail.com",
  "interests": ["AI", "Travel", "Music"],
  "verified": true
}
```

Another user may have extra fields such as address, phone number, or profile settings. NoSQL handles this flexibility well.

### Exam Tip

For a definition question, include these keywords: **Not Only SQL**, **non-relational**, **unstructured/semi-structured data**, **flexibility**, **scalability**, **high performance**.

### Common Mistake

Do not write “NoSQL means it does not support queries.” NoSQL databases still query data, but not always using traditional SQL.

---

## Page 04 — NoSQL vs Relational DB

### Original Slide Content

| Feature | Relational Databases | Non-Relational Databases |
|---|---|---|
| Structure | Structured, with defined relationships between tables | Flexible, allowing for dynamic and changing data structures |
| Query Language | Uses SQL for querying data | Uses various querying languages, including JSON and BSON |
| Data Consistency | Enforces strict data consistency rules | Often prioritizes availability and partition tolerance over consistency |
| Popularity | Widely used and has a long history in the tech industry | Gained popularity with the rise of big data and modern web applications |
| Transactions and Operations | Well-suited for complex transactions and operations | Often faster and more scalable than relational databases |
| Purpose | Best suited for structured data and complex queries | Best suited for unstructured data and high scalability |
| Scalability | Vertical scaling is more common, but limited | Horizontal scaling is more common, and highly scalable |
| Examples | MySQL, Oracle, Microsoft SQL Server | MongoDB, Cassandra, Couchbase |
| Data Volume | Good for small to medium data volumes | Good for large data volumes |
| Cost | Relatively expensive | Relatively cheap |
| Use Cases | Financial institutions, transactional systems, inventory management | Big data, IoT, content management, cloud computing |

### Visual Explanation

The slide shows a comparison table. It compares relational and non-relational databases across structure, query language, consistency, scalability, cost, data volume, and use cases.

### Explanation

Relational databases are strict and table-based. They are strong for structured data and complex transactions. NoSQL databases are flexible and scalable. They are strong for big data, rapidly changing structures, and distributed systems.

| Situation | Better Choice | Reason |
|---|---|---|
| Bank transaction system | Relational DB | Strong consistency and transaction support |
| Social media feed | NoSQL DB | High scalability and changing data structure |
| Inventory management | Relational DB | Structured data and relationships |
| IoT sensor data | NoSQL DB | Large volume and fast writes |
| Product catalog with different fields | NoSQL DB | Flexible schema |

### Visual/Text Diagram

```text
Relational DB
Tables → Rows → Columns → Fixed schema → SQL

NoSQL DB
Documents / Key-value / Graph / Column → Flexible schema → Scalable design
```

### Exam Tip

Comparison questions are likely. Write a table instead of paragraphs. Cover at least: **structure, query language, consistency, scalability, examples, use cases**.

### Common Mistake

Do not say NoSQL is always better. Relational DBs are still better for strict transactions, banking, and structured systems.

---

## Page 05 — NoSQL vs Relational DB – Real world example

### Original Slide Content

In a relational database, a book record is often dissembled (or “normalized”) and stored in separate tables, and relationships are defined by primary and foreign key constraints. In this example, the **Books** table has columns for **ISBN**, **Book Title**, and **Edition Number**, the **Authors** table has columns for **AuthorID** and **Author Name**, and finally, the **Author-ISBN** table has columns for **AuthorID** and **ISBN**. The relational model is designed to enable the database to enforce referential integrity between tables in the database, normalized to reduce the redundancy, and generally optimized for storage.

In a NoSQL database, a book record is usually stored as a **JSON document**. For each book, the item, **ISBN**, **Book Title**, **Edition Number**, **Author Name**, and **AuthorID** are stored as attributes in a single document. In this model, data is optimized for intuitive development and horizontal scalability.

### Visual Explanation

The slide visually contrasts two approaches:

- Relational DB: book data is split across multiple related tables.
- NoSQL DB: book data is stored as one JSON-like document.

There are database and document icons to represent these two storage models.

### Explanation

In a relational database, normalization splits repeated data into separate tables. Example:

```text
Books Table
ISBN | Book Title | Edition Number

Authors Table
AuthorID | Author Name

Author-ISBN Table
AuthorID | ISBN
```

This reduces duplication and enforces relationships using primary keys and foreign keys.

In NoSQL, the same book data can be stored in one document:

```json
{
  "item": "Book",
  "ISBN": "978-1234567890",
  "BookTitle": "Database Systems",
  "EditionNumber": 2,
  "AuthorName": "Sanduni",
  "AuthorID": "A101"
}
```

This is easier for developers because the full book record can be read in one query.

### Visual/Text Diagram

```text
Relational Model
Book data
 ├── Books table
 ├── Authors table
 └── Author-ISBN relationship table

NoSQL Document Model
Book data
 └── One JSON/BSON document containing all book attributes
```

### Exam Tip

For a real-world example question, explain **normalization** in relational databases and **single document storage** in NoSQL. Mention **primary key**, **foreign key**, **referential integrity**, **JSON document**, and **horizontal scalability**.

### Common Mistake

Do not confuse normalized storage with “bad design.” Normalization is good for relational databases, but it may be slower or less convenient for some modern scalable applications.

---

## Page 06 — NoSQL – Key Characteristics

### Original Slide Content

- **Schema-less Structure** – Data can be stored without predefined tables or columns, allowing flexibility.
- **Horizontal Scalability** – Supports easy expansion by adding more servers instead of upgrading existing hardware.
- **High Performance** – Optimized for fast read/write operations and low latency.
- **Flexible Data Models** – Supports multiple data types such as document, key-value, column, and graph.
- **Distributed and Fault-Tolerant** – Built to operate efficiently across multiple nodes with automatic replication and recovery.

### Visual Explanation

The slide lists five major characteristics of NoSQL databases. No complex visual diagram is shown.

### Explanation

NoSQL databases are popular because they solve limitations of traditional relational systems for modern distributed applications.

| Characteristic | Meaning | Example |
|---|---|---|
| Schema-less | No fixed table design required | User documents can have different fields |
| Horizontal scalability | Add more machines/servers | Add new database nodes during growth |
| High performance | Fast reads/writes | Real-time analytics dashboard |
| Flexible data models | Supports multiple data formats | Document, key-value, graph, column |
| Fault-tolerant | Works even if some nodes fail | Replica copy handles failure |

### Visual/Text Diagram

```text
NoSQL Strengths
├── Flexible schema
├── Horizontal scaling
├── Fast read/write performance
├── Multiple data models
└── Distributed fault tolerance
```

### Exam Tip

A common short-answer question: “List characteristics of NoSQL databases.” Write at least five and briefly explain each.

### Common Mistake

Do not write only the characteristic names. Exams usually expect a short explanation for each point.

---

## Page 07 — Types of NoSQL

### Original Slide Content

- Document Based Databases
- Key-value Stores
- Graph Databases
- Column Family Stores
- In-memory

### Visual Explanation

The slide is a simple list of NoSQL database types.

### Explanation

NoSQL is not one single database model. It is a group of database approaches.

| Type | Main Idea | Example Use |
|---|---|---|
| Document Based | Stores JSON/BSON/XML documents | User profiles, products, content |
| Key-value | Stores data as key-value pairs | Sessions, cache, tokens |
| Graph | Stores nodes and relationships | Social networks, recommendations |
| Column Family | Stores data in column families | Analytics, large sparse datasets |
| In-memory | Stores data mainly in memory | Fast cache, real-time operations |

### Visual/Text Diagram

```text
NoSQL Databases
├── Document Based Databases
├── Key-value Stores
├── Graph Databases
├── Column Family Stores
└── In-memory Databases
```

### Exam Tip

If asked “Name different types of NoSQL databases,” list all five from the slide and give one example for each if possible.

### Common Mistake

Do not say MongoDB is a type by itself. MongoDB is an example of a **document-based NoSQL database**.

---

## Page 08 — Document Based Databases

### Original Slide Content

- Document databases store data in structured documents usually in **JSON**, **BSON**, or **XML** format, rather than rows and columns.
- Each document contains key-value pairs and can have a flexible structure, allowing different documents in the same collection to have different fields.
- Schema-less design — no need for a fixed table schema.
- Hierarchical data storage format supports nested structures.
- Easy mapping between application objects and database records.
- Example: **MongoDB, CouchDB, Firebase FireStore**

### Visual Explanation

The slide includes a small document example on the lower right. It shows a product-like JSON document with fields such as product id, name, price, features, and stock.

### Code from Slide Visual

```json
{
  "product_id": "P001",
  "name": "Wireless Mouse",
  "price": 1200,
  "features": ["Bluetooth", "Rechargeable", "Ergonomic"],
  "stock": 40
}
```

### Code Explanation

This document stores all information about one product inside one JSON-like structure. The `features` field is an array, showing that document databases can store nested or complex values.

### Explanation

Document databases store records as documents instead of rows. This is natural for web/mobile apps because application objects are often already represented as JSON.

Example: A product object in JavaScript maps easily to a MongoDB document.

```text
Application Object → JSON/BSON Document → Database Record
```

### Exam Tip

For document database questions, mention: **JSON/BSON/XML**, **key-value pairs**, **schema-less**, **nested/hierarchical data**, **MongoDB**.

### Common Mistake

Do not say document databases store Word/PDF files. “Document” here means a structured JSON/BSON/XML record.

---

## Page 09 — Key Value Stores

### Original Slide Content

- Key-Value databases are the simplest type of NoSQL databases.
- Data is stored as a collection of key-value pairs, where a unique key is used to retrieve a corresponding value.
- The value can be a string, JSON object, or binary data.
- Extremely fast read/write operations.
- Ideal for caching and session management.
- Highly scalable and distributed by design.
- Simple data model, making it easy to implement.
- Example: **Redis, Amazon DynamoDB, Riak**

Slide examples:

| Key | Value |
|---|---|
| `"user123"` | `{ "name": "Sanduni", "email": "sanduni@gmail.com" }` |
| `"session456"` | `{ "token": "abc123xyz", "expires": "2025-10-29T10:00:00Z" }` |

### Visual Explanation

The slide includes a small table showing two key-value records. Each key uniquely identifies a value object.

### Explanation

A key-value store works like a dictionary or map:

```text
key → value
```

You provide the key, and the database returns the value. This makes key-value databases very fast.

Common uses:

- User session storage
- Caching API responses
- Authentication tokens
- Shopping cart temporary data

### Visual/Text Diagram

```text
"user123"
    ↓
{ "name": "Sanduni", "email": "sanduni@gmail.com" }

"session456"
    ↓
{ "token": "abc123xyz", "expires": "2025-10-29T10:00:00Z" }
```

### Exam Tip

If asked for use cases, write **caching** and **session management**. Redis is the easiest example to remember.

### Common Mistake

Do not use key-value stores for complex relationship-heavy queries. They are simple and fast, but not ideal for complex joins or relationships.

---

## Page 10 — Column Family Databases

### Original Slide Content

- Column-family databases (also known as wide-column stores) organize data into columns and column families rather than rows and tables.
- Each column family contains rows identified by a key, but each row can have a different set of columns.
- This makes them efficient for analytical queries and handling large, sparse datasets.
- Optimized for high-performance read/write of large datasets.
- Example: **Apache Cassandra, HBase, ScyllaDB**

### Visual Explanation

The slide includes a small diagram showing a column-family model. It shows row keys, a column family, and columns grouped under a structure. The diagram communicates that data is organized around column groups rather than fixed relational rows.

### Explanation

Column-family databases are useful when data is very large and not every row has the same columns. They are common in analytics and distributed systems.

Example idea:

```text
Row Key: company_001
Column Family: company
├── name: "Dialog"
├── address: "Colombo"
└── website: "dialog.lk"
```

Another row may have different columns. This flexibility supports large sparse datasets.

### Visual/Text Diagram

```text
Column Family Database
├── Row Key 1
│   ├── Column: name
│   ├── Column: address
│   └── Column: website
└── Row Key 2
    ├── Column: name
    └── Column: phone
```

### Exam Tip

Write: **wide-column stores**, **column families**, **row key**, **different columns per row**, **large sparse datasets**, **Cassandra/HBase**.

### Common Mistake

Do not confuse column-family databases with normal SQL columns. They are designed for distributed large-scale storage, not fixed table schemas.

---

## Page 11 — Graph Databases

### Original Slide Content

- Graph databases store data in **nodes** (entities) and **edges** (relationships), making them ideal for representing highly connected data.
- Each node and edge can have attributes that describe entities and their relationships.
- Graph databases use query languages such as **Cypher** (Neo4j) or **Gremlin** to explore relationships efficiently.
- Designed for relationship-heavy data and intuitive visualization of data relationships.
- Example: **Neo4j, Amazon Neptune, ArangoDB**

### Visual Explanation

The slide includes a graph-style network visual. It contains colored nodes connected by edges, representing entities and their relationships. The image reinforces that graph databases are optimized for connected data.

### Explanation

Graph databases are strongest when relationships matter more than individual records.

Examples:

- Social network friendships
- Recommendation systems
- Fraud detection
- Network topology
- Knowledge graphs

### Visual/Text Diagram

```text
(Person: Sanduni) --FRIEND_OF--> (Person: Nimal)
(Person: Sanduni) --LIKES------> (Movie: Inception)
(Person: Nimal)   --WORKS_AT---> (Company: ABC)
```

### Exam Tip

Use the words **nodes**, **edges**, **relationships**, **Cypher**, **Neo4j**. For examples, write social networks or recommendation systems.

### Common Mistake

Do not describe a graph database as a database for charts/graphs only. It stores connected entities and relationships.

---

## Page 12 — Exercise

### Original Slide Content

**Exercise:**

Discuss the advantages and limitations of NoSQL databases?

### Visual Explanation

This is an exercise slide with one discussion question.

### Explanation

This is likely an exam-style question. A strong answer must give both advantages and limitations.

### Expected Answer Structure

| Advantages of NoSQL | Limitations of NoSQL |
|---|---|
| Flexible schema | Less strict consistency in some systems |
| Horizontal scalability | No standard query language across all NoSQL DBs |
| High performance for large data | Complex transactions can be harder |
| Handles unstructured/semi-structured data | Data duplication may occur |
| Good for distributed applications | Choosing the wrong NoSQL type can create poor design |
| Supports multiple data models | Learning curve and tool differences |

### Student-Friendly Answer

NoSQL databases are advantageous because they provide flexible schema design, horizontal scalability, high performance, and support for unstructured or semi-structured data. They are useful for big data, IoT, content management, and modern cloud applications.

However, NoSQL databases also have limitations. Some NoSQL systems prioritize availability and partition tolerance over strong consistency. They may not be ideal for complex transactions, joins, or strict relational integrity. There is also no single standard query language across all NoSQL databases.

### Exam Tip

For a “discuss” question, never list only advantages. Use a two-column table and then add a short paragraph.

### Common Mistake

A one-sided answer is weak. The question asks **advantages and limitations**, so both are required.

---

## Page 13 — CAP Theorem

### Original Slide Content

It explains the trade-offs in distributed databases. It states that a distributed system can only guarantee two out of the three properties:

- **Consistency** - Every read receives the most recent write (all nodes see the same data at the same time).
- **Availability** - Every request receives a response (even if some nodes are down).
- **Partition Tolerance** - The system continues to function even if communication between some nodes fails or is delayed (network partition).

### Visual Explanation

The slide includes a CAP theorem Venn diagram with three circles:

- Consistency
- Availability
- Partition Tolerance

The overlap regions represent trade-off categories such as CA, CP, and AP. The image reinforces that a distributed system cannot perfectly guarantee all three properties at the same time under network partition conditions.

### Explanation

The CAP theorem is a key theory for distributed databases. It says a distributed system must make trade-offs between:

| CAP Property | Meaning | Simple Example |
|---|---|---|
| Consistency | All nodes return latest data | After updating balance, every server shows the new balance |
| Availability | Every request gets a response | User gets a response even if one server fails |
| Partition Tolerance | System continues despite network failure | Database continues when nodes cannot communicate |

### Visual/Text Diagram

```text
CAP Theorem

Consistency (C)
All nodes show same latest data

Availability (A)
Every request gets a response

Partition Tolerance (P)
System survives communication failure

Distributed DB trade-off:
You can strongly guarantee only two at a time.
```

### CAP Trade-Off Summary

| Pair | Meaning | Typical Priority |
|---|---|---|
| CA | Consistency + Availability | Works when no network partition is considered |
| CP | Consistency + Partition Tolerance | May reject/delay requests to keep data correct |
| AP | Availability + Partition Tolerance | Always responds, but data may be temporarily inconsistent |

### Exam Tip

A CAP theorem answer must define **all three**: consistency, availability, partition tolerance. Then state that a distributed system can only guarantee two out of three.

### Common Mistake

Do not write “CAP means database has all three.” The theorem says there are trade-offs; during partitions, all three cannot be fully guaranteed together.

---

## Page 14 — MongoDB

### Original Slide Content

- MongoDB is a popular NoSQL, document-oriented database system designed to store and manage large volumes of data in a flexible, scalable, and high-performance manner.
- It uses JSON-like documents (**BSON – Binary JSON**) to store data, making it ideal for modern applications that handle unstructured or semi-structured information.
- MongoDB was developed by MongoDB Inc. and first released in **2009** and has become one of the most widely used NoSQL databases in the world.

### Visual Explanation

The slide includes the MongoDB logo. The visual emphasizes that MongoDB is the key technology introduced after the general NoSQL theory.

### Explanation

MongoDB is a document-oriented NoSQL database. It stores records as documents, not table rows. MongoDB documents are stored internally using BSON, which is a binary representation of JSON-like data.

Example MongoDB document:

```json
{
  "name": "Sanduni",
  "age": 25,
  "city": "Wattala"
}
```

### Definition

**MongoDB:** A document-oriented NoSQL database that stores data as JSON-like BSON documents and supports flexible, scalable, high-performance data storage.

### Exam Tip

Remember: **MongoDB = NoSQL + document-oriented + BSON + flexible schema + scalable**.

### Common Mistake

Do not say MongoDB stores data in tables. MongoDB stores data in **collections** and **documents**.

---

## Page 15 — MongoDB – Key Characteristics

### Original Slide Content

- **Document-Oriented Storage.** Data is stored in documents (similar to JSON objects) instead of rows and columns. Each document represents a record and contains key-value pairs.
- **Schema-Less Design.** Documents in the same collection can have different structures. Ideal for rapidly evolving applications.
- **High Scalability.** Supports horizontal scaling through sharding, distributing data across multiple servers.
- **High Availability.** Achieved through replication (Replica Sets) — multiple copies of data ensure fault tolerance.

### Visual Explanation

The slide lists four key MongoDB characteristics. No complex diagram is shown.

### Explanation

MongoDB is built for flexible and scalable applications.

| Characteristic | Meaning | Why It Matters |
|---|---|---|
| Document-oriented storage | Data stored as JSON-like documents | Easy mapping with app objects |
| Schema-less design | Documents can have different fields | Good for changing requirements |
| High scalability | Uses sharding for horizontal scaling | Handles large growth |
| High availability | Uses replica sets | Keeps data available during failures |

### Visual/Text Diagram

```text
MongoDB Characteristics
├── Document-Oriented Storage
├── Schema-Less Design
├── High Scalability through Sharding
└── High Availability through Replica Sets
```

### Exam Tip

If asked “Explain MongoDB key characteristics,” give all four with one-line explanation each.

### Common Mistake

Do not confuse **sharding** and **replication**:

- Sharding = split data across servers for scalability.
- Replication = copy data across servers for availability/fault tolerance.

---

## Page 16 — MongoDB – Data Structure

### Original Slide Content

| Level | Description | Example |
|---|---|---|
| Database | Highest level container for collections. | UniversityDB |
| Collection | Group of related documents (like a table in RDBMS) | Students |
| Document | Individual record stored in JSON/BSON format | `{“name” : “Sanduni”, “age” : 27}` |
| Field | Key-value pair inside a document | `“name” : “Sanduni”` |

### Visual Explanation

The slide shows a table explaining MongoDB hierarchy: database, collection, document, field.

### Explanation

MongoDB structure is similar to relational databases in concept, but the actual storage model is different.

| MongoDB | Relational DB Similar Idea | Example |
|---|---|---|
| Database | Database | `UniversityDB` |
| Collection | Table | `Students` |
| Document | Row/Record | `{ "name": "Sanduni", "age": 27 }` |
| Field | Column/Attribute | `"name": "Sanduni"` |

### Visual/Text Diagram

```text
UniversityDB                 ← Database
└── Students                 ← Collection
    ├── { name: "Sanduni", age: 27 }    ← Document
    │   ├── name: "Sanduni"             ← Field
    │   └── age: 27                     ← Field
    └── { name: "Nimal", age: 24 }      ← Document
```

### Exam Tip

This is highly examable. Memorize the hierarchy:

```text
Database → Collection → Document → Field
```

### Common Mistake

Do not write “MongoDB table.” The correct term is **collection**.

---

## Page 17 — MongoDB – Common Operations

### Original Slide Content

| Operation | Description | Example (MQL) |
|---|---|---|
| Insert | Add a new document | `db.students.insertOne({name: “Sanduni", age: 25})` |
| Find | Retrieve documents | `db.students.find({city: "Wattala"})` |
| Update | Modify existing document | `db.students.updateOne({name: “Sanduni"}, {$set: {age: 26}})` |
| Delete | Remove a document | `db.students.deleteOne({name: “Sanduni"})` |

### Visual Explanation

The slide shows a table of MongoDB CRUD operations using MongoDB Query Language (MQL). The four operations are insert, find, update, and delete.

### Code from Slide

```javascript
// Insert: Add a new document
db.students.insertOne({ name: "Sanduni", age: 25 })

// Find: Retrieve documents
db.students.find({ city: "Wattala" })

// Update: Modify existing document
db.students.updateOne({ name: "Sanduni" }, { $set: { age: 26 } })

// Delete: Remove a document
db.students.deleteOne({ name: "Sanduni" })
```

### Code Explanation

- `insertOne()` adds one document to a collection.
- `find()` retrieves documents matching a condition.
- `updateOne()` modifies one matching document.
- `$set` updates a specific field value.
- `deleteOne()` removes one matching document.

### Explanation

These are the core MongoDB CRUD operations:

| CRUD | MongoDB Operation | Purpose |
|---|---|---|
| Create | `insertOne()` | Add new data |
| Read | `find()` | Retrieve data |
| Update | `updateOne()` | Modify existing data |
| Delete | `deleteOne()` | Remove data |

### Visual/Text Diagram

```text
CRUD in MongoDB
Create → insertOne()
Read   → find()
Update → updateOne() + $set
Delete → deleteOne()
```

### Exam Tip

For practical questions, memorize the syntax pattern:

```javascript
db.collection.operation({ condition }, { update })
```

For update:

```javascript
db.students.updateOne({ name: "Sanduni" }, { $set: { age: 26 } })
```

### Common Mistake

Do not forget `$set` in update operations. Without `$set`, the update behavior can be wrong or destructive depending on the operation context.

---

## Page 18 — Tutorial – Connecting MongoDB with Backend Server

### Original Slide Content

**Tutorial– Connecting MongoDB with Backend Server**

### Visual Explanation

The slide is a tutorial title slide. It introduces the practical part: connecting MongoDB with a backend server. The agenda mentioned Express integration, so the backend server is expected to be an Express server.

### Explanation

Although this slide does not show code, the concept is important. A typical Express + MongoDB backend includes:

1. Install backend dependencies.
2. Create an Express server.
3. Connect MongoDB using a MongoDB driver or Mongoose.
4. Create schemas/models if using Mongoose.
5. Create CRUD routes.
6. Test endpoints using Postman or frontend requests.

### Visual/Text Diagram

```text
Frontend / Mobile App
        ↓ HTTP Request
Express Backend Server
        ↓ Database Query
MongoDB Database
        ↓ Result
Express Backend Server
        ↓ JSON Response
Frontend / Mobile App
```

### Practical Example Structure

```text
backend/
├── server.js
├── .env
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
└── package.json
```

### Example Connection Code for Understanding

> This code is added as a helpful explanation because the slide only gives the tutorial title and does not include actual code.

```javascript
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
```

### Code Explanation

This example creates an Express server, enables JSON request body parsing, connects to MongoDB using `mongoose.connect()`, and starts the server on port `5000`.

### Exam Tip

If asked about MongoDB backend integration, explain the flow: **Express route receives request → backend uses MongoDB/Mongoose → database returns data → Express sends JSON response**.

### Common Mistake

Do not expose MongoDB credentials directly in code. Use `.env` for database connection strings.

---

## Page 19 — Thank You

### Original Slide Content

**Thank You**

### Visual Explanation

The final slide contains SLIIT branding and a “Thank You” message. It uses the same white, blue, and orange visual theme as the title slide.

### Explanation

This slide closes the lecture.

### Exam Tip

No technical content here.

### Common Mistake

No major common mistake.

---

# Key Definitions

## NoSQL

### Definition
A modern non-relational database approach designed to store, retrieve, and manage large volumes of unstructured, semi-structured, or rapidly changing data.

### Simple Meaning
A flexible database style used when fixed relational tables are not enough.

### Example
MongoDB storing user records as documents.

## Relational Database

### Definition
A database system that stores data in structured tables with predefined schemas and relationships.

### Simple Meaning
A table-based database using rows, columns, SQL, primary keys, and foreign keys.

### Example
MySQL, Oracle, Microsoft SQL Server.

## Document Database

### Definition
A NoSQL database that stores data in structured documents such as JSON, BSON, or XML.

### Simple Meaning
Stores one record as one document.

### Example
MongoDB, CouchDB, Firebase Firestore.

## Key-Value Store

### Definition
A NoSQL database that stores data as pairs of unique keys and associated values.

### Simple Meaning
Give a key, get its value.

### Example
Redis storing sessions.

## Column Family Database

### Definition
A wide-column NoSQL database that organizes data into column families and rows identified by keys.

### Simple Meaning
A scalable database model for large sparse datasets.

### Example
Apache Cassandra, HBase, ScyllaDB.

## Graph Database

### Definition
A NoSQL database that stores entities as nodes and relationships as edges.

### Simple Meaning
Best when relationships are the main focus.

### Example
Neo4j, Amazon Neptune, ArangoDB.

## CAP Theorem

### Definition
A theorem explaining that a distributed system can only strongly guarantee two out of Consistency, Availability, and Partition Tolerance.

### Simple Meaning
Distributed databases must make trade-offs.

### Example
During a network failure, a system may choose consistency over availability or availability over consistency.

## MongoDB

### Definition
A popular document-oriented NoSQL database that stores data in JSON-like BSON documents.

### Simple Meaning
A flexible database for modern apps that stores records as documents.

### Example
A `Students` collection containing student documents.

## BSON

### Definition
Binary JSON, MongoDB’s internal format for storing JSON-like documents.

### Simple Meaning
A binary version of JSON used by MongoDB.

### Example
`{ "name": "Sanduni", "age": 27 }` stored internally as BSON.

## Collection

### Definition
A group of related MongoDB documents.

### Simple Meaning
Similar to a table in relational databases.

### Example
`Students` collection.

## Document

### Definition
An individual MongoDB record stored in JSON/BSON format.

### Simple Meaning
One record.

### Example
`{ "name": "Sanduni", "age": 27 }`

## Field

### Definition
A key-value pair inside a MongoDB document.

### Simple Meaning
One attribute in a document.

### Example
`"name": "Sanduni"`

---

# Important Tables

## NoSQL vs Relational Database

| Criteria | Relational DB | NoSQL DB |
|---|---|---|
| Structure | Fixed tables | Flexible structures |
| Schema | Predefined schema | Schema-less or flexible schema |
| Query | SQL | JSON/BSON-based or database-specific query languages |
| Data type | Structured data | Unstructured/semi-structured data |
| Scaling | Mostly vertical | Mostly horizontal |
| Consistency | Strong consistency | Often availability/partition tolerance priority |
| Best for | Transactions, finance, inventory | Big data, IoT, cloud apps, content systems |
| Examples | MySQL, Oracle, SQL Server | MongoDB, Cassandra, Couchbase |

## Types of NoSQL Databases

| Type | Storage Model | Best Use | Examples |
|---|---|---|---|
| Document Based | JSON/BSON/XML documents | Content, profiles, product catalogs | MongoDB, CouchDB, Firebase Firestore |
| Key-value | Key → value | Cache, sessions | Redis, DynamoDB, Riak |
| Column Family | Column families | Large sparse datasets, analytics | Cassandra, HBase, ScyllaDB |
| Graph | Nodes and edges | Relationship-heavy data | Neo4j, Neptune, ArangoDB |
| In-memory | Memory-first data storage | Ultra-fast cache/realtime operations | Redis is commonly used in this style |

## MongoDB Data Structure

| Level | Description | Example |
|---|---|---|
| Database | Highest-level container | `UniversityDB` |
| Collection | Group of related documents | `Students` |
| Document | Individual JSON/BSON record | `{ "name": "Sanduni", "age": 27 }` |
| Field | Key-value pair | `"name": "Sanduni"` |

## MongoDB CRUD Operations

| CRUD Action | MongoDB Method | Example |
|---|---|---|
| Create | `insertOne()` | `db.students.insertOne({ name: "Sanduni", age: 25 })` |
| Read | `find()` | `db.students.find({ city: "Wattala" })` |
| Update | `updateOne()` | `db.students.updateOne({ name: "Sanduni" }, { $set: { age: 26 } })` |
| Delete | `deleteOne()` | `db.students.deleteOne({ name: "Sanduni" })` |

---

# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 01 | SLIIT title slide | Introduces Lecture 12: NoSQL and MongoDB |
| 04 | Comparison table | Shows differences between relational and non-relational databases |
| 05 | Relational vs NoSQL book example | Relational splits records across tables; NoSQL stores as one JSON document |
| 08 | Product document example | Shows document database format using JSON-like structure |
| 09 | Key-value table | Shows key-value store retrieval model |
| 10 | Column family diagram | Shows row keys, columns, and column families |
| 11 | Graph database network | Shows connected nodes and edges |
| 13 | CAP theorem Venn diagram | Shows trade-offs among consistency, availability, and partition tolerance |
| 16 | MongoDB structure table | Shows database → collection → document → field hierarchy |
| 17 | MongoDB operations table | Shows insert, find, update, delete operations |

---

# Important Code and Query Snippets

## Page 08 — Document Database JSON Example

```json
{
  "product_id": "P001",
  "name": "Wireless Mouse",
  "price": 1200,
  "features": ["Bluetooth", "Rechargeable", "Ergonomic"],
  "stock": 40
}
```

**Explanation:** Represents one product as a document with fields and an array.

## Page 09 — Key-Value Examples

```json
"user123" : { "name": "Sanduni", "email": "sanduni@gmail.com" }
"session456" : { "token": "abc123xyz", "expires": "2025-10-29T10:00:00Z" }
```

**Explanation:** Each unique key points to a value object.

## Page 17 — MongoDB Insert

```javascript
db.students.insertOne({ name: "Sanduni", age: 25 })
```

**Explanation:** Adds a new document into the `students` collection.

## Page 17 — MongoDB Find

```javascript
db.students.find({ city: "Wattala" })
```

**Explanation:** Finds student documents where `city` is `Wattala`.

## Page 17 — MongoDB Update

```javascript
db.students.updateOne({ name: "Sanduni" }, { $set: { age: 26 } })
```

**Explanation:** Finds one document where name is Sanduni and updates the age to 26.

## Page 17 — MongoDB Delete

```javascript
db.students.deleteOne({ name: "Sanduni" })
```

**Explanation:** Deletes one document where name is Sanduni.

---

# Full Lecture Summary

This lecture introduces NoSQL and MongoDB. NoSQL means **Not Only SQL** and represents modern non-relational database systems designed for flexible, scalable, high-performance data storage. NoSQL databases are useful for unstructured, semi-structured, or rapidly changing data in applications such as social networks, IoT systems, real-time analytics, cloud computing, and big data platforms.

Relational databases use fixed tables, structured schemas, SQL, strong consistency, and are suitable for financial systems, transactions, and inventory management. NoSQL databases use flexible data structures, different query models, horizontal scaling, and are suitable for large-scale modern applications.

The lecture explains several NoSQL types: document databases, key-value stores, column-family databases, graph databases, and in-memory databases. MongoDB is introduced as a document-oriented NoSQL database that stores data in JSON-like BSON documents. MongoDB uses databases, collections, documents, and fields. Common MongoDB operations include `insertOne()`, `find()`, `updateOne()`, and `deleteOne()`.

The CAP theorem explains that distributed databases must trade off between consistency, availability, and partition tolerance. A distributed system can only strongly guarantee two out of the three properties.

---

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| NoSQL meaning | Not Only SQL; flexible non-relational database approach | 03 |
| NoSQL purpose | Handles unstructured/semi-structured/rapidly changing data | 03 |
| Relational vs NoSQL | Tables + SQL vs flexible structures + scalability | 04 |
| Real-world example | Relational book data split into tables; NoSQL book data stored as JSON document | 05 |
| NoSQL characteristics | Schema-less, horizontal scaling, high performance, flexible models, fault tolerant | 06 |
| NoSQL types | Document, key-value, graph, column family, in-memory | 07 |
| Document DB | JSON/BSON/XML documents; MongoDB example | 08 |
| Key-value store | Unique key retrieves value; Redis example | 09 |
| Column family | Wide-column; large sparse datasets; Cassandra example | 10 |
| Graph DB | Nodes + edges; Neo4j example | 11 |
| CAP theorem | Consistency, Availability, Partition Tolerance; only two guarantees | 13 |
| MongoDB | NoSQL document DB; BSON; released 2009 | 14 |
| MongoDB characteristics | Document storage, schema-less, sharding, replica sets | 15 |
| MongoDB hierarchy | Database → Collection → Document → Field | 16 |
| MongoDB CRUD | insertOne, find, updateOne, deleteOne | 17 |
| Backend integration | Express server connects to MongoDB and returns JSON | 18 |

---

# Likely Exam Questions and Short Answers

## Question 1
What is NoSQL?

**Expected Answer:**
NoSQL stands for Not Only SQL. It is a modern non-relational database approach designed to store, retrieve, and manage large volumes of unstructured, semi-structured, or rapidly changing data with flexibility, scalability, and high performance.

## Question 2
Compare relational databases and NoSQL databases.

**Expected Answer:**
Relational databases store data in fixed tables with predefined schemas and use SQL. They are suitable for structured data and complex transactions. NoSQL databases use flexible data models such as documents, key-value pairs, graphs, and column families. They are suitable for unstructured data, large data volumes, and horizontal scalability.

## Question 3
List five key characteristics of NoSQL databases.

**Expected Answer:**
NoSQL databases are schema-less, horizontally scalable, high-performance, support flexible data models, and are distributed and fault-tolerant.

## Question 4
Name different types of NoSQL databases with examples.

**Expected Answer:**
Document databases such as MongoDB, key-value stores such as Redis, column-family databases such as Cassandra, graph databases such as Neo4j, and in-memory databases used for fast caching.

## Question 5
What is a document-based database?

**Expected Answer:**
A document-based database stores data as structured documents, usually in JSON, BSON, or XML format. Each document contains key-value pairs and can have flexible fields. MongoDB is an example.

## Question 6
What is a key-value store?

**Expected Answer:**
A key-value store is a NoSQL database that stores data as unique keys mapped to values. The value can be a string, JSON object, or binary data. It is fast and suitable for caching and session management.

## Question 7
Explain graph databases.

**Expected Answer:**
Graph databases store data as nodes and edges. Nodes represent entities, and edges represent relationships. They are useful for relationship-heavy data such as social networks, recommendations, and fraud detection. Neo4j is an example.

## Question 8
Explain CAP theorem.

**Expected Answer:**
CAP theorem states that a distributed system can only guarantee two out of three properties: consistency, availability, and partition tolerance. Consistency means every read receives the latest write. Availability means every request receives a response. Partition tolerance means the system continues to operate despite communication failures.

## Question 9
What is MongoDB?

**Expected Answer:**
MongoDB is a popular NoSQL document-oriented database that stores data in JSON-like BSON documents. It is flexible, scalable, and suitable for unstructured or semi-structured data in modern applications.

## Question 10
Explain MongoDB data structure.

**Expected Answer:**
MongoDB stores data using the hierarchy: database, collection, document, and field. A database is the highest-level container, a collection groups related documents, a document is an individual JSON/BSON record, and a field is a key-value pair inside a document.

## Question 11
Write MongoDB commands for insert, find, update, and delete.

**Expected Answer:**

```javascript
db.students.insertOne({ name: "Sanduni", age: 25 })
db.students.find({ city: "Wattala" })
db.students.updateOne({ name: "Sanduni" }, { $set: { age: 26 } })
db.students.deleteOne({ name: "Sanduni" })
```

## Question 12
Discuss advantages and limitations of NoSQL databases.

**Expected Answer:**
Advantages include flexible schema, horizontal scalability, high performance, support for large unstructured data, and distributed fault tolerance. Limitations include weaker consistency in some systems, lack of standard query language, difficulty with complex transactions, possible data duplication, and the need to choose the correct NoSQL model.

## Question 13
Differentiate sharding and replication in MongoDB.

**Expected Answer:**
Sharding distributes data across multiple servers for horizontal scalability. Replication creates multiple copies of data using replica sets to provide high availability and fault tolerance.

## Question 14
Why is MongoDB suitable for modern web and mobile applications?

**Expected Answer:**
MongoDB is suitable because it stores data as flexible JSON-like documents, handles semi-structured data, scales horizontally, supports fast read/write operations, and maps naturally to application objects used in web and mobile development.

---

# Common Mistakes to Avoid

- Writing “NoSQL means no SQL at all.” Correct meaning: **Not Only SQL**.
- Saying NoSQL is always better than relational databases. It depends on the use case.
- Forgetting that MongoDB is a **document-based** NoSQL database.
- Calling MongoDB collections “tables” in exam answers. Use **collection**.
- Calling MongoDB documents “rows.” Use **document**.
- Confusing sharding with replication.
- Forgetting `$set` in `updateOne()` examples.
- Writing only advantages when the question asks for advantages and limitations.
- Explaining CAP theorem without defining all three properties.
- Saying graph databases are for charts. They are for connected data using nodes and edges.
- Confusing key-value stores with document databases.

---

# Final One-Page Revision Notes

## Core Definitions

| Term | One-Line Meaning |
|---|---|
| NoSQL | Not Only SQL; flexible non-relational database approach |
| Relational DB | Table-based database with fixed schema and SQL |
| Document DB | Stores data as JSON/BSON/XML documents |
| Key-value Store | Stores data as key → value pairs |
| Column Family DB | Stores data in column families for large sparse datasets |
| Graph DB | Stores entities as nodes and relationships as edges |
| MongoDB | Document-oriented NoSQL database using BSON |
| BSON | Binary JSON used internally by MongoDB |
| Collection | Group of related MongoDB documents |
| Document | One MongoDB record |
| Field | Key-value pair inside a document |

## Must-Remember Comparisons

| Relational DB | NoSQL DB |
|---|---|
| Fixed schema | Flexible schema |
| Tables, rows, columns | Documents, keys, graphs, columns |
| SQL | JSON/BSON or DB-specific queries |
| Strong transactions | High scalability/performance |
| Vertical scaling common | Horizontal scaling common |

## NoSQL Types

```text
NoSQL
├── Document Based       → MongoDB
├── Key-value            → Redis
├── Column Family        → Cassandra
├── Graph                → Neo4j
└── In-memory            → Fast cache/realtime use
```

## CAP Theorem

```text
C = Consistency → every read gets latest write
A = Availability → every request gets response
P = Partition Tolerance → system works despite network failure

Distributed system can guarantee only two strongly at once.
```

## MongoDB Structure

```text
Database → Collection → Document → Field
UniversityDB → Students → { name: "Sanduni", age: 27 } → name: "Sanduni"
```

## MongoDB CRUD

```javascript
db.students.insertOne({ name: "Sanduni", age: 25 })
db.students.find({ city: "Wattala" })
db.students.updateOne({ name: "Sanduni" }, { $set: { age: 26 } })
db.students.deleteOne({ name: "Sanduni" })
```

## Exam Keywords

- Not Only SQL
- Flexible schema
- Horizontal scalability
- Unstructured/semi-structured data
- JSON / BSON
- CAP theorem
- Consistency / Availability / Partition Tolerance
- Document / Collection / Field
- Sharding
- Replica sets
- CRUD operations

---

# Execution Checklist

- [x] Read the uploaded PDF.
- [x] Read the uploaded TXT file.
- [x] Compared PDF and TXT content.
- [x] Followed original PDF page order from Page 01 to Page 19.
- [x] Added page numbers for every slide/page.
- [x] Included every text point from the lecture.
- [x] Recreated tables in Markdown.
- [x] Described every visual, diagram, chart, and table.
- [x] Added simple explanations for difficult points.
- [x] Added useful text diagrams.
- [x] Added comparison tables.
- [x] Added definitions and simple meanings.
- [x] Added exam tips.
- [x] Added common mistakes.
- [x] Added full lecture summary.
- [x] Added key definitions table.
- [x] Added quick revision table.
- [x] Added important code/query snippets section.
- [x] Added important diagrams summary.
- [x] Added likely exam questions with expected answers.
- [x] Added final one-page revision notes.
- [x] Created only one downloadable `.md` file.
- [x] Did not create PDF.
