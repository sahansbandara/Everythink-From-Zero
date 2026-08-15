# SE3090 — Software Engineering Frameworks

## Lecture 05 — Agentic AI Fundamentals – Part 1

### Lecture Metadata

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Department | Department of Software Engineering |
| Degree / Programme | Not explicitly stated on the slides |
| Module Code | SE3090 |
| Module Name | Software Engineering Frameworks |
| Lecture | Lecture 05 |
| Title | Agentic AI Fundamentals – Part 1 |
| Academic Level | Year 3 |
| Semester | Semester 1 |
| Credits | 4 Credits |
| Lecturer | Lasal Hettiarachchi |
| Lecturer Email | lasal.h.visiting@sliit.lk |
| Course Web | courseweb.sliit.lk |
| Total PDF Pages | 32 |

> **Source note:** The content under **Original Page Content** preserves the lecture's terminology, wording, examples, formulas, and page order. Sections labeled **Explanation**, **Exam Tip**, **Common Mistake**, and **Likely Exam Questions** are supplementary study aids added for clarity and exam preparation.

---

# Table of Contents

## PDF Pages

1. [Page 01 — Agentic AI Fundamentals – Part 1](#page-01)
2. [Page 02 — Today's Roadmap – 3 Hours](#page-02)
3. [Page 03 — Fundamentals Of LLMs](#page-03)
4. [Page 04 — Agent vs Model](#page-04)
5. [Page 05 — Small pieces of words combine to form sentences](#page-05)
6. [Page 06 — What is an LLM, really?](#page-06)
7. [Page 07 — Model Catalog](#page-07)
8. [Page 08 — What is an LLM, really? — Generation Pipeline](#page-08)
9. [Page 09 — From hidden state to a probability](#page-09)
10. [Page 10 — Temperature sharpening vs flattening](#page-10)
11. [Page 11 — Let's go for a quick playthrough](#page-11)
12. [Page 12 — The three defining limitations](#page-12)
13. [Page 13 — Evolution from standalone models to Agentic AI](#page-13)
14. [Page 14 — What is an Agent?](#page-14)
15. [Page 15 — Quick demo on playground](#page-15)
16. [Page 16 — The Agency Spectrum](#page-16)
17. [Page 17 — Do You Actually Need an Agent?](#page-17)
18. [Page 18 — Checkpoint 1 — Justify which pattern you would use](#page-18)
19. [Page 19 — Checkpoint 1 — Answers](#page-19)
20. [Page 20 — ReAct & Tool Calling](#page-20)
21. [Page 21 — ReAct: why interleaving beats planning ahead](#page-21)
22. [Page 22 — The Messages](#page-22)
23. [Page 23 — The Bridge problem](#page-23)
24. [Page 24 — Frame by Frame: Tool calling cycle](#page-24)
25. [Page 25 — Checkpoint 2 — Quick Activity](#page-25)
26. [Page 26 — Agentic Frameworks](#page-26)
27. [Page 27 — Agentic frameworks](#page-27)
28. [Page 28 — Key components of an agentic framework](#page-28)
29. [Page 29 — Popular agentic frameworks](#page-29)
30. [Page 30 — Popular agentic frameworks — Logos](#page-30)
31. [Page 31 — Best Practices](#page-31)
32. [Page 32 — Next Week & How to Prepare](#page-32)

## Revision Sections

- [Lecture Summary](#lecture-summary)
- [Key Definitions](#key-definitions)
- [Important Formulas](#important-formulas)
- [Important Code Snippet](#important-code-snippet)
- [Important Diagrams and Flows](#important-diagrams-and-flows)
- [Quick Revision Notes](#quick-revision-notes)
- [Likely Exam Questions](#lecture-level-likely-exam-questions)
- [Key Terms](#key-terms)
- [Verification](#verification)

---

<a id="page-01"></a>
## Page 01 — Agentic AI Fundamentals – Part 1

### Original Page Content

- **SLIIT | Faculty of Computing | Department of Software Engineering**
- **SE3090 – Software Engineering Frameworks**
- **Lecture 05**
- **Agentic AI Fundamentals – Part 1**
- **Year 3 • Semester 1 • 4 Credits**
- Lecturer: **Lasal Hettiarachchi**
- Email: **lasal.h.visiting@sliit.lk**
- Course web: **courseweb.sliit.lk**

### Visual Explanation

This is the lecture cover slide. It establishes the module, lecture number, lecture title, academic level, semester, credits, and lecturer details. The slide uses the SLIIT Faculty of Computing visual identity and contains no conceptual diagram.

### Explanation

This lecture introduces the foundations needed to understand **Agentic AI**. It begins with how LLMs generate outputs, then explains why a plain model has limitations, how an agent extends a model with tools and a control loop, and why frameworks are needed to manage agentic systems.

### Exam Tip

Remember the progression of the lecture:

```text
LLM fundamentals
   ↓
LLM limitations
   ↓
Agentic AI / agency spectrum
   ↓
ReAct + tool calling
   ↓
Agentic frameworks
```

### Common Mistake

Do not treat **LLM**, **agent**, and **agentic framework** as interchangeable terms. They are different layers of the system.

### Likely Exam Questions

1. **What is the main subject of Lecture 05?**  
   **Expected answer:** Agentic AI fundamentals, including LLM foundations, agent behavior, tool calling, ReAct, and agentic frameworks.

---

<a id="page-02"></a>
## Page 02 — Today's Roadmap – 3 Hours

### Original Page Content

**LECTURE 05 • OPENING**

**Today's Roadmap – 3 Hours**

| Hour | Topic | Coverage |
|---|---|---|
| Hour 1 | Frameworks & Fundamentals | Introduction to Agentic AI \| Frameworks \| Fundamental knowledge about Models |
| Hour 2 | MODEL + TOOLS + LOOP + GOALS | Effective tool usage in Agentic AI |
| Hour 3 | Composition | Quick intro to the LABS |

- Short breaks after each hour
- Questions welcome at any point

### Visual Explanation

The slide divides the lecture into three time blocks. Hour 1 builds conceptual foundations, Hour 2 focuses on the core agent combination **MODEL + TOOLS + LOOP + GOALS**, and Hour 3 moves into composition and laboratory preparation.

### Explanation

A useful mental model for the lecture is:

```text
MODEL + TOOLS + LOOP + GOALS
```

- **Model**: makes language/reasoning decisions.
- **Tools**: allow interaction with external systems.
- **Loop**: allows repeated observe → decide → act cycles.
- **Goals**: define what the agent is trying to achieve.

This decomposition is supplementary wording based on the roadmap; the slide explicitly names the four components but does not define each one here.

### Exam Tip

The phrase **MODEL + TOOLS + LOOP + GOALS** is a high-value memory anchor for agentic systems.

### Common Mistake

A model with a good prompt is not automatically an agent. Agentic behavior requires more than one-shot text generation.

### Likely Exam Questions

1. **What four ideas are highlighted in Hour 2?**  
   **Expected answer:** Model, tools, loop, and goals.

---

<a id="page-03"></a>
## Page 03 — Fundamentals Of LLMs

### Original Page Content

**PART 1 OF 4**

**Fundamentals Of LLMs**

- How LLMs work
- Limitations of LLM workflows
- What is agentic AI
- Agentic AI spectrum

### Visual Explanation

This is a section-divider slide for **Part 1 of 4**. It lists the four learning areas covered in the first part of the lecture.

### Explanation

Part 1 first establishes what an LLM is and how it generates text. It then identifies limitations of model-only workflows. Those limitations motivate the move toward **Agentic AI**, after which the lecture introduces different levels of agency.

### Exam Tip

A strong exam answer can often be organized in this exact order: **LLM → limitations → agent → agency spectrum**.

### Common Mistake

Do not jump directly to frameworks before understanding the limitations they are designed to address.

### Likely Exam Questions

1. **List the four areas covered under Fundamentals of LLMs.**  
   **Expected answer:** How LLMs work, limitations of LLM workflows, what Agentic AI is, and the Agentic AI spectrum.

---

<a id="page-04"></a>
## Page 04 — Agent vs Model

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Agent vs Model**

**Prompt:**

> Find me a flight to Singapore next Friday under $400 and hold a seat.

**Model:**

> Here are some tips for finding cheap flights...

**Agent:**

> Held seat 34C on TR 561, Confirmation #8842

### Visual Explanation

The slide presents one user request at the top and compares two responses underneath:

```text
User Prompt
   |
   +------------------------+
   |                        |
   v                        v
Model                    Agent
Provides information     Takes an action
/tips                    and returns result
```

The key visual message is the difference between **describing what to do** and **actually performing an action**.

### Explanation

A plain model can generate useful text from the prompt, but it does not inherently interact with a flight-booking system. An agent can be connected to tools or APIs and can use them to perform the requested operation.

### Definition

**Definition:** A **model** produces model outputs from inputs; an **agent** uses a model as part of a broader loop that can choose and execute actions.

**Simple meaning:** Model = *answers*. Agent = *can act*.

**Example:** A model may explain how to book a seat; an agent may call a booking API and hold the seat.

### Exam Tip

When comparing **Agent vs Model**, emphasize **action/tool use** and **goal completion**, not just response quality.

### Common Mistake

Do not say an agent is simply a “smarter LLM.” The difference shown in the slide is mainly **ability to act through a system**, not merely higher intelligence.

### Likely Exam Questions

1. **Differentiate a model and an agent using the flight example.**  
   **Expected answer:** The model provides advice or text, whereas the agent can use external capabilities to take the requested action, such as holding a seat.

---

<a id="page-05"></a>
## Page 05 — Small pieces of words combine to form sentences

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Small pieces of words combine to form sentences**

#### Tokens

Tokens are the foundational units of text processing in NLP, created by breaking down raw text into smaller components like words, subwords, or even characters.

#### Embeddings

Embeddings are the result of training vectorized tokens to capture semantic relationships between words. Unlike raw vectors, embeddings position similar words (e.g., "king" and "queen") closer in vector space, allowing models to understand context and meaning.

Source link shown on slide:

`https://medium.com/@saschametzger/what-are-tokens-vectors-and-embeddings-how-do-you-create-them-e2a3e698e037`

### Visual Explanation

The slide is arranged as a two-column comparison:

| Tokens | Embeddings |
|---|---|
| Small textual units used for processing | Learned vector representations capturing semantic relationships |
| May represent words, subwords, or characters | Similar meanings are positioned closer in vector space |

Small icons visually distinguish the text-processing concept from the vector/semantic concept.

### Definition

**Definition:** A **token** is a foundational unit of text processing produced by splitting raw text into smaller components.

**Simple meaning:** A token is one piece of text that the model processes.

**Definition:** An **embedding** is a learned vector representation used to capture semantic relationships.

**Simple meaning:** An embedding converts meaning into numbers so similar concepts can be represented near each other.

### Explanation

The slide establishes a pipeline conceptually:

```text
Raw text
   ↓
Tokens
   ↓
Vector representations / embeddings
   ↓
Model processing
```

### Exam Tip

Know the distinction: **token = textual unit**, **embedding = learned numerical representation**.

### Common Mistake

Do not define an embedding as merely “a token converted to numbers.” The slide emphasizes that embeddings are **trained to capture semantic relationships**.

### Likely Exam Questions

1. **What is a token?**  
   **Expected answer:** A foundational unit of text processing formed by splitting raw text into words, subwords, or characters.
2. **What is the purpose of embeddings?**  
   **Expected answer:** To represent tokens in a vector space that captures semantic relationships and context.

---

<a id="page-06"></a>
## Page 06 — What is an LLM, really?

### Original Page Content

**PART 1 • FUNDAMENTALS**

**What is an LLM, really?**

**Definition:** A neural network trained to predict the next token given the previous tokens. Usually the first set of seed text (user prompt) and the system message is provided.

- **"Token" ≈ a chunk of text (~¾ of a word).** Text is split into tokens first.
- Trained in two broad stages (high level):
  - **Pre-training** — read enormous amounts of text → learn language & world patterns.
  - **Alignment / instruction-tuning** — learn to follow instructions and be helpful.
- At inference it is, fundamentally, a **function**: `tokens in → next token out`, applied repeatedly to generate text.

### Visual Explanation

The main definition is placed in a highlighted box, followed by the high-level training stages and the inference behavior. The slide visually emphasizes the phrases **Pre-training**, **Alignment / instruction-tuning**, **function**, and `tokens in → next token out`.

### Definition

**Definition:** An **LLM** is a neural network trained to predict the next token from previous tokens.

**Simple meaning:** It repeatedly predicts what token is likely to come next.

### Explanation

The generation loop can be represented as:

```text
Input tokens
   ↓
Model predicts next-token probabilities
   ↓
Select / sample next token
   ↓
Append token to context
   ↓
Repeat until generation stops
```

The two training stages on this slide are deliberately high-level:

1. **Pre-training:** learns patterns from very large amounts of text.
2. **Alignment / instruction-tuning:** adapts the model to follow instructions and behave helpfully.

### Exam Tip

For a short-answer definition of an LLM, include **neural network**, **next-token prediction**, and **previous tokens/context**.

### Common Mistake

Do not describe the LLM as retrieving a complete stored sentence. The lecture frames inference as repeated **next-token generation**.

### Likely Exam Questions

1. **Define an LLM according to the lecture.**  
   **Expected answer:** A neural network trained to predict the next token given previous tokens.
2. **Name the two broad training stages.**  
   **Expected answer:** Pre-training and alignment/instruction-tuning.

---

<a id="page-07"></a>
## Page 07 — Model Catalog

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Model Catalog**

The page mainly contains a screenshot of the **Microsoft Foundry** model catalog.

### Visual Explanation

The screenshot shows a model-discovery interface with:

- A left navigation area including items such as **Models**, **Agents**, **Tools**, **Services**, and **Solution templates**.
- A model search and filtering area.
- A model catalog containing many providers and model families.
- Visible examples include model entries from OpenAI, Anthropic/Claude, Cohere, Microsoft MAI, xAI/Grok, DeepSeek, Kimi, and image/audio model categories.
- Buttons such as **Compare models** and **View leaderboard** are visible.

The purpose of the screenshot is to show that agentic applications are not tied to a single model. Developers can select among models with different capabilities and deployment options.

### Explanation

The lecture uses the model catalog to reinforce that the **model** is one configurable component in a broader agentic stack. Different tasks may require different model capabilities.

### Exam Tip

If asked what a model catalog provides, focus on **model selection, comparison, availability, supported features, deployment options, and task suitability** as shown in the interface.

### Common Mistake

Do not assume an agentic framework is bound to one specific LLM provider merely because a demo uses one platform.

### Likely Exam Questions

1. **Why is a model catalog useful in an agentic AI development platform?**  
   **Expected answer:** It lets developers discover, compare, filter, and select models based on capabilities and deployment needs.

---

<a id="page-08"></a>
## Page 08 — What is an LLM, really? — Generation Pipeline

### Original Page Content

**PART 1 • FUNDAMENTALS**

**What is an LLM, really?**

This page is primarily a visual slide showing the token-generation pipeline and the effect of temperature in LLM APIs.

### Visual Explanation

The left-side diagram shows a decoder-style generation process:

```text
Input Text
   ↓
Tokenized Text
   ↓
Token Embedding Layer Lookup
   ↓
Token Vectors
   ↓
Decoder-Only Transformer
   ├─ Positional Embeddings
   ├─ Multi-Head Masked Self-Attention
   └─ Feed Forward Neural Network
   ↓
Output Vectors
   ↓
Linear Layer
   ↓
Softmax
   ↓
Token Probabilities
   ↓
Greedy Decoding / token selection
   ↓
EOS?
   ├─ No  → append token and continue
   └─ Yes → Output Sequence
```

The diagram includes an example input beginning with **“The chicken crossed the …”** and illustrates how tokens pass through embeddings and the decoder-only transformer before the next token is selected.

The right side is labeled **Temperature in LLM APIs** and **Softmax with Temperature**. It visually compares token-probability distributions at lower and higher temperatures:

- **Low temperature** → probability is concentrated more strongly around high-scoring tokens.
- **High temperature** → probabilities are spread more broadly among alternatives.

### Explanation

This page connects the earlier definition of an LLM to the actual generation stages: tokenize → embed → process with transformer → produce logits → convert to probabilities → select a token → repeat.

### Exam Tip

Be able to explain the high-level data flow from **input text to token probabilities**. You do not need to redraw every internal layer unless requested, but know the order.

### Common Mistake

Do not say temperature changes the model's learned weights. In this lecture, temperature acts on the logits/probability calculation during generation.

### Likely Exam Questions

1. **Outline the high-level next-token generation pipeline.**  
   **Expected answer:** Tokenize input → embeddings → transformer → output/logits → softmax → token probabilities → choose/sample next token → repeat.

---

<a id="page-09"></a>
## Page 09 — From hidden state to a probability

### Original Page Content

**PART 1 • FUNDAMENTALS**

**From hidden state to a probability**

> At each step the network emits a vector of logits — one raw score \(z_i\) for every token \(i\) in the vocabulary \(V\).

- Logits become a probability distribution via the **softmax**:

\[
p_i = \frac{e^{z_i}}{\sum_{j \in V} e^{z_j}}
\]

- Each \(p_i \in (0,1)\) and \(\sum_i p_i = 1\) — a valid distribution.
- Exponentiation makes bigger logits dominate; it is monotonic, so ranking is preserved.

### Visual Explanation

The formula is centered prominently on the slide. The highlighted statement at the top emphasizes that the model first produces **logits**, which are raw scores, not probabilities. Softmax then converts those scores into a normalized probability distribution.

### Definition

**Definition:** A **logit** is the raw score emitted for a candidate token before normalization.

**Simple meaning:** Higher logit = the model currently favors that token more strongly.

**Definition:** **Softmax** converts all token logits into probabilities that sum to 1.

**Simple meaning:** It turns raw scores into a probability distribution over the vocabulary.

### Explanation

For vocabulary tokens \(1,2,...,V\):

```text
Raw scores (logits)
[z1, z2, z3, ...]
       ↓ softmax
Probabilities
[p1, p2, p3, ...]
       ↓
Σ pi = 1
```

### Exam Tip

Memorize what softmax does conceptually even if a question does not require formula manipulation: **raw logits → normalized probabilities**.

### Common Mistake

Do not call logits probabilities. They become probabilities only after softmax.

### Likely Exam Questions

1. **What is a logit?**  
   **Expected answer:** A raw model score for a vocabulary token before softmax normalization.
2. **What does softmax guarantee?**  
   **Expected answer:** Each probability lies between 0 and 1 and the probabilities sum to 1.

---

<a id="page-10"></a>
## Page 10 — Temperature sharpening vs flattening

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Temperature sharpening vs flattening**

- Temperature \(T\) rescales the logits **before** softmax:

\[
p_i = \frac{e^{z_i/T}}{\sum_j e^{z_j/T}}
\]

- \(T \to 0\): the largest logit dominates → distribution collapses to **argmax** (greedy, deterministic).
- \(T = 1\): the model's “natural” distribution.
- \(T \to \infty\): logits flatten → **uniform** (maximum randomness).

### Visual Explanation

The slide centers the temperature-adjusted softmax formula and then gives three limiting cases. The visual structure makes the relationship between temperature and output randomness explicit.

### Definition

**Definition:** **Temperature** is a parameter that rescales logits before softmax and changes how concentrated or spread the token probabilities are.

**Simple meaning:** Lower temperature = more focused/deterministic; higher temperature = more random/diverse.

### Explanation

| Temperature | Probability Shape | Behavior |
|---|---|---|
| \(T \to 0\) | Very sharp | Highest-logit token dominates |
| \(T = 1\) | Natural model distribution | Normal model probabilities |
| \(T \to \infty\) | Very flat | Approaches uniform / maximum randomness |

### Exam Tip

A common exam comparison is **low vs high temperature**. Use the words **sharpening**, **flattening**, **deterministic**, and **randomness**.

### Common Mistake

Do not reverse the effect: **higher** temperature increases randomness; **lower** temperature reduces it.

### Likely Exam Questions

1. **What happens as temperature approaches 0?**  
   **Expected answer:** The highest logit dominates and the distribution approaches argmax/greedy deterministic selection.
2. **What happens at very high temperature?**  
   **Expected answer:** The distribution flattens toward uniform, increasing randomness.

---

<a id="page-11"></a>
## Page 11 — Let's go for a quick playthrough

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Let's go for a quick playthrough**

The slide is a demo-oriented screenshot rather than a text-heavy theory slide.

### Visual Explanation

The screenshot shows a **Microsoft Foundry** playground for a deployed model, visibly labeled **gpt-5-mini** in the interface.

Visible interface areas include:

- Model/deployment selection.
- Tabs such as **Playground**, **Details**, **Monitor**, and **Evaluation**.
- An **Instructions** field containing a system-style instruction: “You are an AI assistant that helps people find information.”
- A **Tools** area.
- A **Knowledge** area.
- A chat panel where a user can send a message.
- Options such as **Save as agent** and **Compare models**.

### Explanation

The slide provides a practical bridge from theory to a model playground. It demonstrates that model behavior can be configured using instructions, tools, knowledge, and deployment settings.

### Exam Tip

The screenshot is more likely to support a conceptual question about **playground configuration** than a memorization question about exact UI positions.

### Common Mistake

Do not confuse a playground UI with the underlying LLM itself. The UI is a development environment around the model.

### Likely Exam Questions

1. **What kinds of configurations are visible in the model playground?**  
   **Expected answer:** Model/deployment selection, instructions, tools, knowledge, chat interaction, monitoring/evaluation options.

---

<a id="page-12"></a>
## Page 12 — The three defining limitations

### Original Page Content

**PART 1 • FUNDAMENTALS**

**The three defining limitations**

- There are **3 defining limitations** when it comes to using models alone.
- Almost everything we build this term compensates for these:

| Limitation | What happens there | Unlabeled guidance column on slide |
|---|---|---|
| **Stateless** | No memory between calls | If you want the model to "remember," you must store and replay it. |
| **Ungrounded** | No live data; only training + your input | To answer about your documents or current facts, you must bring the data to the model (retrieval) or give it tools to fetch it. |
| **Probabilistic** | Improvises; "best" not guaranteed | We control this with the **temperature**. |

### Visual Explanation

The slide uses a three-row table. Each limitation is paired with what goes wrong and a practical compensation strategy.

### Definition

**Definition:** **Stateless** means there is no memory automatically carried between separate model calls.

**Simple meaning:** The model does not remember earlier calls unless the application stores and replays the relevant context.

**Definition:** **Ungrounded** means the model does not inherently have live/current external data beyond its training and supplied input.

**Simple meaning:** To answer from current or private data, the application must provide or retrieve that data.

**Definition:** **Probabilistic** means model output is generated from probability distributions, so the “best” response is not guaranteed.

**Simple meaning:** The same or similar input can produce different outputs and can be wrong.

### Explanation

The lecture's three limitation-to-solution mappings are:

```text
Stateless     → store and replay memory/state
Ungrounded    → retrieval and/or tools
Probabilistic → control randomness (e.g., temperature) + later framework controls
```

### Exam Tip

This is one of the most important slides. Memorize all **three limitations** and how the lecture says systems compensate for them.

### Common Mistake

Do not use “stateless” to mean “the model has no context inside the current prompt.” The limitation discussed here is **no memory between calls**.

### Likely Exam Questions

1. **List the three defining limitations of using models alone.**  
   **Expected answer:** Stateless, ungrounded, and probabilistic.
2. **How can an application compensate for an ungrounded model?**  
   **Expected answer:** Bring data to the model through retrieval or give the model tools that can fetch current/external data.

---

<a id="page-13"></a>
## Page 13 — Evolution from standalone models to Agentic AI

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Evolution from standalone models to Agentic AI**

### AI that can Create for you — Models

- Text summarization
- Text synthesis
- Pattern matching

### AI that can Retrieve for you — Assistants

- Information retrieval
- Prescriptive tasks
- Single step or rule based processes

### AI that can Do for you — Agents

- Multi step processes
- Autonomous actions
- Self-corrections

- The evolution from probabilistic to agentic and how we overcome the limitations of LLMs

### Visual Explanation

The slide uses three side-by-side cards to show an increasing capability progression:

```text
Models
"Create for you"
      ↓
Assistants
"Retrieve for you"
      ↓
Agents
"Do for you"
```

The capabilities become progressively more action-oriented and autonomous.

### Explanation

This slide frames Agentic AI as an evolution from pure content generation toward systems that retrieve external information and finally perform multi-step actions and self-correction.

### Exam Tip

Use the verbs **Create → Retrieve → Do** to remember the progression.

### Common Mistake

Do not assume all “assistants” are fully autonomous agents. In this slide, assistants are associated with retrieval and single-step/rule-based processes, while agents handle multi-step autonomous actions.

### Likely Exam Questions

1. **Compare Models, Assistants, and Agents using the lecture's capability progression.**  
   **Expected answer:** Models create content, assistants retrieve information and perform prescriptive/single-step tasks, while agents perform multi-step autonomous actions and self-correction.

---

<a id="page-14"></a>
## Page 14 — What is an Agent?

### Original Page Content

**PART 1 • FUNDAMENTALS**

**What is an Agent?**

**Definition:** An LLM directing a loop: it observes state, decides on actions (tool calls), a runtime executes them, and results feedback.

### Visual Explanation

The right-side diagram shows the central agent loop:

```text
          Prompt
            |
            v
          Model ------------------> Response
            ^
            | Observation
            |
          Tool
            ^
            | Action
            +---------------------- Model
```

Meaning:

1. The model receives a prompt/state.
2. The model may emit an **Action** requesting a tool call.
3. The tool/runtime executes the action.
4. The tool result returns as an **Observation**.
5. The model decides what to do next or produces a final **Response**.

The left visual presents an AI-agent ecosystem. It includes a **User**, an **AI agent**, external **data/documents**, a **code executor**, a **task output**, references to **Any LLM**, and **Any ML model**. Arrows indicate that the agent can receive prompts, query data, execute code, use models, and produce task output.

### Definition

**Definition:** An **agent** is an LLM directing a feedback loop in which it observes state, selects actions/tool calls, receives execution results, and continues until it can respond or complete the goal.

**Simple meaning:** The LLM is not just answering once; it can **decide → act → observe → decide again**.

### Explanation

The minimum conceptual loop is:

```text
Observe → Decide → Act → Observe → ... → Finish
```

This loop is the key difference between an autonomous agent and a one-shot model call.

### Exam Tip

A strong definition should include **LLM**, **loop**, **state/observation**, **actions/tool calls**, **runtime execution**, and **feedback**.

### Common Mistake

Do not say the LLM directly executes external code/API calls. The lecture says **a runtime executes them**; the model decides on the action.

### Likely Exam Questions

1. **Define an Agent according to the lecture.**  
   **Expected answer:** An LLM directing a loop that observes state, decides actions/tool calls, has a runtime execute them, and receives the results as feedback.
2. **What is the purpose of the observation in the agent loop?**  
   **Expected answer:** It gives the model the result/state produced by the previous action so it can decide the next step.

---

<a id="page-15"></a>
## Page 15 — Quick demo on playground

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Quick demo on playground**

The page is primarily a screenshot of an agent playground.

### Visual Explanation

The screenshot shows a Microsoft Foundry-style **Agents** interface for an agent named **trip-itinerary-designer**.

Visible areas include:

- Agent/model selection.
- Tabs such as **Playground**, **Details**, **Preview**, **Traces**, **Monitor**, and **Evaluation**.
- An instruction section describing a trip itinerary designer/co-planner role.
- A tools section with **Web search** visible.
- A chat/test area for sending messages to the agent.
- **Save** and **Publish** controls.

The screenshot demonstrates that an agent can combine **instructions + model + tools + runtime/testing interface**.

### Explanation

Unlike the earlier model playground, this agent playground visibly includes a configured agent identity and a connected web-search tool, illustrating how external capabilities are attached to an agent.

### Exam Tip

If asked what differentiates an agent playground from a basic model playground, mention **agent instructions, tools, traces/monitoring, and executable behavior**.

### Common Mistake

Do not treat a tool listed in the UI as something the model “knows internally.” It is an external capability the agent can invoke.

### Likely Exam Questions

1. **What tool is visibly connected to the demo agent?**  
   **Expected answer:** Web search.

---

<a id="page-16"></a>
## Page 16 — The Agency Spectrum

### Original Page Content

**PART 1 • FUNDAMENTALS**

**The Agency Spectrum**

**Definition:** "Agent" is not binary. A useful ladder — each rung hands the LLM more control over control flow:

| Rung | LLM decides… | Example |
|---|---|---|
| **LLM call** | Content of one output | summarize this email |
| **Workflow / chain** | fixed code path with LLM steps | translate → summarize → format |
| **Router** | which of N fixed paths | triage: billing vs tech support |
| **Autonomous agent** | Which tools, what order, when to stop | Book me a flight to London tomorrow |

### Visual Explanation

The table is a ladder of increasing autonomy. Moving downward, the LLM gains more control over the application's **control flow**.

```text
Least control
LLM call
   ↓
Workflow / chain
   ↓
Router
   ↓
Autonomous agent
Most control
```

### Definition

**Definition:** The **Agency Spectrum** describes different levels of control given to the LLM, rather than treating “agent” as a yes/no property.

**Simple meaning:** There are degrees of autonomy.

### Explanation

- **LLM call:** code controls the process; model mainly decides output content.
- **Workflow/chain:** path is fixed in advance; LLM is used at known steps.
- **Router:** model decides which predefined path should be selected.
- **Autonomous agent:** model dynamically chooses tools, order, and stopping point.

### Exam Tip

This table is extremely exam-friendly. Be able to identify the correct rung from a scenario.

### Common Mistake

Do not classify any multi-step system as an autonomous agent. A fixed sequence such as translate → summarize → format is a **workflow/chain**.

### Likely Exam Questions

1. **What is meant by “Agent is not binary”?**  
   **Expected answer:** Systems exist on an agency spectrum; different architectures give the LLM different levels of control over control flow.
2. **What does an autonomous agent decide?**  
   **Expected answer:** Which tools to use, in what order, and when to stop.

---

<a id="page-17"></a>
## Page 17 — Do You Actually Need an Agent?

### Original Page Content

**PART 1 • FUNDAMENTALS**

**Do You Actually Need an Agent?**

- Agents buy flexibility and pay with **latency, cost, and non-determinism**.
- Every LLM decision is a chance to be wrong.

| Ask yourself… | Then reach for… |
|---|---|
| Can you write the steps down in advance? | **workflow, not agent.** |
| Is the output space small and known? | **router/classifier.** |
| Do you genuinely need dynamic multi-step decisions against an unpredictable environment? | **agent with the least autonomy that works.** |

### Visual Explanation

The slide combines two warning bullets with a decision table. The key architectural principle is not to maximize autonomy; it is to select the **least autonomous pattern that still solves the problem**.

### Explanation

Decision flow:

```text
Can steps be fixed in advance?
   ├─ Yes → Workflow / Chain
   └─ No
       ↓
Is output one of a small known set?
   ├─ Yes → Router / Classifier
   └─ No
       ↓
Need dynamic multi-step action in unpredictable environment?
   └─ Yes → Agent, with least autonomy that works
```

### Exam Tip

If a scenario can be solved deterministically with a fixed workflow, choosing an agent is usually the wrong answer **according to this lecture**.

### Common Mistake

More autonomy is not automatically better. The slide explicitly identifies **latency, cost, non-determinism, and error opportunities** as trade-offs.

### Likely Exam Questions

1. **Why should developers avoid unnecessary agent autonomy?**  
   **Expected answer:** Agents increase flexibility but also latency, cost, non-determinism, and opportunities for LLM decisions to be wrong.
2. **What pattern should be used when the output space is small and known?**  
   **Expected answer:** Router/classifier.

---

<a id="page-18"></a>
## Page 18 — Checkpoint 1 — Justify which pattern you would use

### Original Page Content

**PART 1 • ENGAGEMENT**

**Checkpoint 1 – Justify which pattern you would use**

1. You are building an application that takes a daily news article in Spanish, translates it into English, summarizes it into three bullet points, and finally formats the output into a specific JSON structure for your database.
2. A user prompts your application with: **"Find me a flight to London tomorrow, book a 4-star hotel near the city center, and check if I need an umbrella based on the forecast."** The system must interact with external booking APIs and weather services to fulfill the request.
3. Your company receives thousands of customer emails daily. You need a system that reads each incoming email and simply categorizes it into one of three buckets: **"Billing Issue," "Technical Support," or "General Inquiry."**

**Pair up — 3 minutes — then we discuss answers together.**

### Visual Explanation

The slide presents three scenario cards designed to test whether the student can distinguish **workflow/chain**, **autonomous agent**, and **router/classifier** patterns.

### Explanation

Before checking the next slide, identify whether each scenario has:

- a fixed known sequence,
- a small known output set, or
- dynamic multi-step decisions using external systems.

### Exam Tip

Scenario classification is likely exam material because it tests application, not only definitions.

### Common Mistake

Do not classify based on the number of steps alone. The important factor is **who controls the steps** and whether the environment is predictable.

### Likely Exam Questions

1. **Which pattern should be used for the Spanish article process? Why?**  
   **Expected answer:** Workflow/chain, because translate → summarize → format is known in advance.
2. **Which pattern fits the flight/hotel/weather request? Why?**  
   **Expected answer:** Autonomous agent, because it requires dynamic multi-step tool use against changing external systems.

---

<a id="page-19"></a>
## Page 19 — Checkpoint 1 — Answers

### Original Page Content

**PART 1 • ENGAGEMENT**

**Checkpoint 1 – Answers**

### 1. Workflow / Chain

You can write the steps down in advance (**Translate → Summarize → Format**). It relies on a fixed code path with specific LLM steps rather than autonomous decision-making.

### 2. Autonomous Agent

This requires dynamic multi-step decisions against an unpredictable environment (flight/hotel availability). The LLM must observe state, decide which tools to use and in what order, and execute them.

### 3. Router / Classifier

The output space is small and known (only three categories). The LLM just needs to decide which of the N fixed paths the input belongs to.

**Rule of thumb — choose the least autonomy that still solves the problem.**

### Visual Explanation

The slide displays the three official pattern answers in separate cards and reinforces the rule of thumb at the bottom.

### Explanation

| Scenario | Correct Pattern | Core Reason |
|---|---|---|
| Translate → summarize → format | Workflow / Chain | Fixed steps can be written in advance |
| Flight + hotel + weather | Autonomous Agent | Dynamic tool use in unpredictable environment |
| Email into 3 categories | Router / Classifier | Small, known output space |

### Exam Tip

Use the phrase **“least autonomy that still solves the problem”** in justification questions.

### Common Mistake

Do not call the email classification scenario a workflow merely because it processes many emails. The key is that the model chooses among **N fixed categories/paths**.

### Likely Exam Questions

1. **State the rule of thumb for choosing an agentic pattern.**  
   **Expected answer:** Choose the least autonomy that still solves the problem.

---

<a id="page-20"></a>
## Page 20 — ReAct & Tool Calling

### Original Page Content

**PART 2 OF 4**

**ReAct & Tool Calling**

- ReAct tool calling
- Tool execution lifecycle

### Visual Explanation

This is the section-divider slide for **Part 2 of 4**. It introduces two topics: the ReAct reasoning/action pattern and the lifecycle through which tool calls are generated and executed.

### Explanation

Part 2 answers a key question: once an LLM is allowed to act, **how does it decide an action, execute a tool, observe the result, and continue?**

### Exam Tip

Connect Part 2 directly to Page 14's loop. ReAct and tool calling provide a concrete mechanism for repeated **action + observation**.

### Common Mistake

Do not confuse **tool definition** with **tool execution**. The model can request a tool call, but the runtime executes the underlying function.

### Likely Exam Questions

1. **What two topics are covered in Part 2?**  
   **Expected answer:** ReAct tool calling and the tool execution lifecycle.

---

<a id="page-21"></a>
## Page 21 — ReAct: why interleaving beats planning ahead

### Original Page Content

**PART 2 • ReAct & TOOL CALLING**

**ReAct: why interleaving beats planning ahead**

**PROMPT:**

> "Who is the current CEO of the company that owns LinkedIn, and what year did they become CEO?":

- **Plan-then-execute:** write the full plan, run it. Fragile — the plan can't react to what search actually returns (what if the owner changed? what if search returns a disambiguation page?).
- **ReAct (Yao et al., 2022 — Reasoning + Acting):** alternate **Thought → Action → Observation**, deciding each action after seeing the last observation:

The slide's example trace:

```text
Thought: I need the owner of LinkedIn first.
Action:  search("who owns LinkedIn")
Observation: "Microsoft acquired LinkedIn in 2016"
Thought: Now I need Microsoft's current CEO...
Action:  search("Microsoft current CEO start year")
Observation: "Satya Nadella, CEO since 2014"
Thought: I can answer now.
Answer:  Satya Nadella, CEO since 2014.
```

The diagram annotates the lines as **reasoning (tokens)**, **tool call**, **runtime result**, **reasoning**, **tool call**, and **result**.

### Visual Explanation

The slide contrasts two control styles:

```text
Plan-then-execute
Plan everything first → Execute full plan
                 ↑
           cannot adapt easily

ReAct
Thought → Action → Observation
   ↑                    |
   +--------------------+
     adapt after result
```

ReAct's key advantage is that the next action is selected **after observing what actually happened**.

### Definition

**Definition:** **ReAct** stands for **Reasoning + Acting** and alternates reasoning with actions and observations.

**Simple meaning:** Think about the next step, act, inspect the result, then decide again.

### Explanation

The lecture calls plan-then-execute fragile because assumptions made before execution may become invalid when real tool results are returned. ReAct reduces this by interleaving decision-making and observations.

### Exam Tip

Memorize the cycle: **Thought → Action → Observation**.

### Common Mistake

Do not describe ReAct as creating a complete fixed plan before tool execution. That is exactly the approach the slide contrasts against ReAct.

### Likely Exam Questions

1. **Why can ReAct be more robust than plan-then-execute?**  
   **Expected answer:** Because it chooses each next action after seeing the previous observation, so it can adapt to unexpected tool results.
2. **What is the basic ReAct cycle?**  
   **Expected answer:** Thought → Action → Observation, repeated as needed.

---

<a id="page-22"></a>
## Page 22 — The Messages

### Original Page Content

**PART 2 • ReAct & TOOL CALLING**

**The Messages**

**Definition:** The LLMs has both the text completion and the reasoning capability and some of them offer tool calling capabilities also meaning it will emit both tokens as well as actions.

### Message types

- **System message** — Tells the model how to behave and provide context for interactions.
- **Human message** — Represents user input and interactions with the model.
- **AI message** — Responses generated by the model, including text content, tool calls, and metadata.
- **Tool message** — Represents the outputs of tool calls.

Links shown on slide:

- `https://docs.langchain.com/oss/python/langchain/messages`
- `https://developers.openai.com/api/docs/guides/function-calling`

### Visual Explanation

The slide presents the four message types as a list with icons. The design reinforces that agentic conversations are not only plain user/assistant text; they can also contain **tool-call requests and tool results**.

### Definition

**Definition:** A **system message** provides behavioral instructions/context to the model.

**Definition:** A **human message** represents user input.

**Definition:** An **AI message** represents model output and may include text, tool calls, and metadata.

**Definition:** A **tool message** carries the output of a tool call back into the conversation state.

### Explanation

A typical agentic message flow can be represented as:

```text
System message
      +
Human message
      ↓
AI message (may contain tool call)
      ↓
Tool executes
      ↓
Tool message (result)
      ↓
AI message (next decision or final answer)
```

### Exam Tip

Be able to distinguish **AI message with a tool call** from the **Tool message containing the result**.

### Common Mistake

The tool message is not the request to call the tool. It represents the **output/result** of the tool call.

### Likely Exam Questions

1. **List the four message types presented in the lecture.**  
   **Expected answer:** System, Human, AI, and Tool messages.
2. **Which message type contains outputs of tool calls?**  
   **Expected answer:** Tool message.

---

<a id="page-23"></a>
## Page 23 — The Bridge problem

### Original Page Content

**PART 2 • ReAct & TOOL CALLING**

**The Bridge problem**

The slide contains the following wording:

- **LLMs emit tokens. Action**
- LLM emits both tokens as well as actions (DB calls, API calls, other function executions etc)
- **Naive approach**
  - (Regex parsing JSON) is 80% reliable
- **Solution: Native Tool Calling (post-trained to emit structured calls).**

### Visual Explanation

The slide uses two highlighted cards:

1. The first establishes the need to bridge model output with real **actions** such as database calls, API calls, and function executions.
2. The second warns that naïvely asking the LLM to print JSON and then parsing it with regex is unreliable.
3. A bold solution line introduces **Native Tool Calling**, where models are post-trained to emit structured tool calls.

### Definition

**Definition:** **Native Tool Calling** is a mechanism where a model emits a structured request for a tool/function rather than relying on free-form text that must be parsed manually.

**Simple meaning:** Instead of guessing an action from text, the application receives a structured tool-call object.

### Explanation

Conceptual bridge:

```text
Natural-language reasoning
        ↓
Structured tool-call request
        ↓
Runtime validates + executes function
        ↓
Structured result
        ↓
Model continues
```

### Exam Tip

If asked why native tool calling is preferable to regex parsing, emphasize **structure and reliability**.

### Common Mistake

Do not describe native tool calling as the LLM executing the database/API directly. It emits a structured call that the runtime handles.

### Likely Exam Questions

1. **What problem does Native Tool Calling solve?**  
   **Expected answer:** It provides a structured and more reliable bridge from model decisions to executable functions/tools instead of parsing free-form model text.

---

<a id="page-24"></a>
## Page 24 — Frame by Frame: Tool calling cycle

### Original Page Content

**PART 2 • ReAct & TOOL CALLING**

**Frame by Frame: Tool calling cycle**

- Tools extend what agents can do letting them fetch real time data, execute code, query external databases, and take actions in the world.
- Under the hood, tools are callable functions with well defined inputs and outputs that get passed to a chat model. The model decides when to invoke a tool based on the conversation context, and what input arguments to provide.

### Code shown on the slide

```python
from langchain.tools import tool

@tool
def search_database(query: str, limit: int = 10) -> str:
    """Search the customer database for records matching the query.

    Args:
        query: Search terms to look for
        limit: Maximum number of results to return
    """
    return f"Found {limit} results for '{query}'"
```

### Visual Explanation

The left-side lifecycle diagram shows five numbered stages using a weather example:

1. **Tool Definitions + Messages** are sent from the developer/runtime side to the model. The tool is shown as `get_weather(location)` and the user asks: **“What's the weather in Paris?”**
2. The model emits a **Tool Call**, shown as `get_weather("paris")`.
3. The developer/runtime **Executes Function Code**, again shown as `get_weather("paris")`, and obtains a result such as `{"temperature":14}`.
4. The **Results** plus prior messages are sent back to the model.
5. The model produces a **Final Response**, shown as **“It's currently 14°C in Paris.”**

Recreated flow:

```text
(1) Tool definitions + user messages
Developer/Runtime ----------------------> Model

(2) Structured tool call
Model ----------------------------------> Runtime
          get_weather("paris")

(3) Execute function
Runtime → weather function → {"temperature": 14}

(4) Tool result + prior messages
Runtime --------------------------------> Model

(5) Final natural-language response
Model ----------------------------------> User
          "It's currently 14°C in Paris."
```

### Definition

**Definition:** A **tool** is a callable function with well-defined inputs and outputs that extends what the agent can do.

**Simple meaning:** A tool gives the model a safe, structured way to ask the application to perform an external operation.

### Explanation

The code example demonstrates the importance of:

- a clear function name,
- typed parameters,
- defaults where appropriate,
- a useful docstring explaining behavior and arguments,
- a defined return type.

These make it easier for an LLM/runtime to understand when and how the tool should be called.

### Exam Tip

Know the five-stage lifecycle: **define/provide tools → model requests call → runtime executes → result returns → model responds**.

### Common Mistake

Do not skip the result-feedback step. The model needs the tool result before it can produce a grounded final answer based on that action.

### Likely Exam Questions

1. **Describe the tool-calling lifecycle.**  
   **Expected answer:** Tools and messages are provided to the model; the model emits a structured tool call; the runtime executes the function; the result is returned as a tool message/context; the model then continues or produces a final response.
2. **Why should tool inputs and outputs be well defined?**  
   **Expected answer:** So the model/runtime can reliably determine what arguments are required and interpret the result.

---

<a id="page-25"></a>
## Page 25 — Checkpoint 2 — Quick Activity

### Original Page Content

**PART 2 • ENGAGEMENT**

**Checkpoint 2 – Quick Activity**

1. **The Scenario:** Brainstorm one specific real-world task where an AI agent cannot rely on its internal knowledge and must interact with an external system (e.g., checking live sports scores, sending an email, booking a meeting room).
2. **Design the Signature:** Give your tool a clear function name and list the exact input parameters (arguments) the LLM would need to extract from a user's prompt (e.g., `book_room(room_id, start_time, duration)`).
3. **Determine the Return:** What specific data type or confirmation must this tool return back to the LLM so it can formulate a helpful final response to the user?

**Pair up — 3 minutes — then we discuss answers together.**

### Visual Explanation

The slide uses three numbered cards corresponding to the three stages of tool design: **scenario → function signature → return value**.

### Explanation

A tool-design checklist from the activity is:

```text
1. What external capability is needed?
2. What function should expose it?
3. What exact arguments are required?
4. What should the function return?
5. Is the return sufficient for the model to answer the user?
```

### Exam Tip

In a practical exam question, write a precise function signature and a precise return shape instead of vague phrases such as “use an API.”

### Common Mistake

Do not make the model guess missing required arguments that the tool cannot safely execute without.

### Likely Exam Questions

1. **What three things should you define when designing a tool for an agent?**  
   **Expected answer:** The real-world scenario/capability, the function signature with exact arguments, and the returned data/confirmation.

---

<a id="page-26"></a>
## Page 26 — Agentic Frameworks

### Original Page Content

**PART 3 OF 4**

**Agentic Frameworks**

- Agentic frameworks
- How to choose the correct framework

### Visual Explanation

This is the section-divider slide for **Part 3 of 4**. It transitions from individual agents/tool calls to the software frameworks used to build and manage them.

### Explanation

The lecture now moves from **how an agent works** to **how developers structure agentic applications in software**.

### Exam Tip

Keep the abstraction levels separate:

```text
LLM → Agent → Agentic Framework → Agentic Application/System
```

### Common Mistake

An agentic framework is not itself an LLM. It is software used to build/manage/orchestrate agent behavior.

### Likely Exam Questions

1. **What two topics are introduced in Part 3?**  
   **Expected answer:** Agentic frameworks and how to choose the correct framework.

---

<a id="page-27"></a>
## Page 27 — Agentic frameworks

### Original Page Content

**PART 3 • FRAMEWORKS**

**Agentic frameworks**

**Definition:** An agentic framework is a software architecture designed to build, manage, and orchestrate autonomous AI agents.

### Overcoming the "Stateless" Limitation

A raw LLM cannot pause a task, wait for an external system to process a job, and come back to it later. Agentic frameworks manage the "state" of a task. If a process takes hours or requires waiting for a human to approve an action, the framework parks the state and resumes it seamlessly.

### Deterministic Control in a Probabilistic System

LLMs are probabilistic. Frameworks enforce structure. They ensure that if an LLM decides to delete a file, the framework intercepts that decision, validates the parameters, and can enforce a "human-in-the-loop" approval process before the action actually happens.

### Cyclical Execution and Error Correction

The agent can execute a tool (like running code), read the error message, realize its mistake, and try a different approach without the user having to re-prompt it.

### Multi-Agent Orchestration

Complex problems often require different skill sets. Instead of using one massive prompt to do everything, frameworks allow developers to build multi-agent systems.

### Visual Explanation

The page places the framework definition at the top and four capability blocks below it:

```text
Agentic Framework
   ├─ Manage state / resume work
   ├─ Enforce deterministic controls + HIL
   ├─ Support cycles + error correction
   └─ Orchestrate multiple agents
```

### Definition

**Definition:** An **agentic framework** is a software architecture designed to build, manage, and orchestrate autonomous AI agents.

**Simple meaning:** It provides the engineering structure around agents so they can maintain state, use tools safely, retry, and coordinate complex workflows.

**Definition:** **Human-in-the-loop (HIL)** refers here to a control where a human approval step can be required before an action actually occurs.

### Explanation

This slide directly connects frameworks to earlier LLM limitations:

| Earlier Limitation / Risk | Framework Capability from this page |
|---|---|
| Statelessness | Persist and resume task state |
| Probabilistic decisions | Validate/intercept actions and enforce structured control |
| Tool failure | Cyclical execution and error correction |
| Complex multi-skill tasks | Multi-agent orchestration |

### Exam Tip

For “Why use an agentic framework?” answer using the four headings on this slide.

### Common Mistake

Do not assume autonomous means uncontrolled. The slide specifically emphasizes **deterministic control** and **human-in-the-loop approval** around probabilistic model decisions.

### Likely Exam Questions

1. **Define an agentic framework.**  
   **Expected answer:** A software architecture designed to build, manage, and orchestrate autonomous AI agents.
2. **How can a framework make a probabilistic agent safer?**  
   **Expected answer:** By intercepting decisions, validating parameters, applying guard/control logic, and requiring human approval for sensitive actions.

---

<a id="page-28"></a>
## Page 28 — Key components of an agentic framework

### Original Page Content

**PART 3 • FRAMEWORKS**

**Key components of an agentic framework**

### Models

The brain of the system. While the LLM is the most famous part, an agentic framework often uses a mix of models.

### Tools

Tools give the LLM "hands" to interact with the outside world. The framework translates the LLM's text output into functional calls.

### Memory

Memory provides the context necessary for the agent to maintain continuity across tasks and sessions.

### Monitoring

This is the monitoring backend for the agents execution.

### Prompts

The instructions and the response objects that govern the HUMAN, SYSTEM, TOOL, AI lifecycle.

### Middleware / Orchestration

These include the structured outputs, guardrails, HIL, Orchestration etc.

### Visual Explanation

The slide presents six equal component cards:

```text
Agentic Framework
   ├─ Models
   ├─ Tools
   ├─ Memory
   ├─ Monitoring
   ├─ Prompts
   └─ Middleware / Orchestration
```

Each card gives a short role description, emphasizing that production agentic systems need much more than an LLM.

### Definition

**Definition:** **Memory** provides context that allows the agent to maintain continuity across tasks and sessions.

**Definition:** **Monitoring** is the backend used to observe the agent's execution.

**Definition:** **Middleware / Orchestration** includes structured outputs, guardrails, human-in-the-loop mechanisms, and orchestration logic.

### Explanation

A useful way to remember the roles is:

| Component | Memory phrase |
|---|---|
| Models | Brain |
| Tools | Hands |
| Memory | Continuity |
| Monitoring | Visibility |
| Prompts | Instructions/messages |
| Middleware / Orchestration | Control + coordination |

### Exam Tip

This six-component list is likely suitable for a “List and explain” question.

### Common Mistake

Do not describe memory as the same thing as the model's training knowledge. The slide defines memory as context for continuity across tasks and sessions.

### Likely Exam Questions

1. **List the six key components of an agentic framework.**  
   **Expected answer:** Models, Tools, Memory, Monitoring, Prompts, and Middleware/Orchestration.
2. **What role does Middleware/Orchestration play?**  
   **Expected answer:** It provides structures such as structured outputs, guardrails, HIL, and orchestration/control logic.

---

<a id="page-29"></a>
## Page 29 — Popular agentic frameworks

### Original Page Content

**PART 3 • FRAMEWORKS**

**Popular agentic frameworks**

| Framework | Best at | Reach for it when… |
|---|---|---|
| **LangChain + LangGraph (our stack)** | biggest ecosystem of integrations; LangGraph: explicit, durable, resumable control flow | you want maximum transferability and production-grade control |
| **Microsoft Agent Framework (succeeds AutoGen + Semantic Kernel)** | multi-agent patterns with first class citizenship | deep Azure ecosystem alignment |
| **LlamaIndex** | data first: ingestion, indexing, retrieval quality knobs | RAG is the product and agents are a feature (inverse of LangChain's emphasis) |
| **Google ADK** | thorough multi agent orchestration with sequential pipelines, parallel workflows and feedback loops | quick prototyping and deep orchestration flows and handoffs |
| **DSPy** | optimizing prompts/pipelines programmatically (adjacent to agents) | you have evals and want the machine to tune the prompts |

### Visual Explanation

This is a framework-selection table. It does not claim one framework is universally best. Instead, each row maps a framework to the type of problem or ecosystem where it is most appropriate.

### Explanation

The lecture's framework selection logic can be summarized as:

```text
Need broad integrations + durable production control?
→ LangChain + LangGraph

Deep Azure alignment + multi-agent patterns?
→ Microsoft Agent Framework

RAG/data ingestion is central product capability?
→ LlamaIndex

Deep multi-agent orchestration / sequential + parallel + feedback flows?
→ Google ADK

Have evals and want programmatic prompt/pipeline optimization?
→ DSPy
```

### Exam Tip

For framework comparison questions, answer using the **Best at** and **Reach for it when** columns rather than giving generic external descriptions.

### Common Mistake

Do not say “LangChain is always best” because the lecture explicitly maps different frameworks to different use cases.

### Likely Exam Questions

1. **When does the lecture recommend LlamaIndex?**  
   **Expected answer:** When RAG/data ingestion, indexing, and retrieval are the product focus and agents are a feature.
2. **What is LangGraph highlighted for?**  
   **Expected answer:** Explicit, durable, resumable control flow within the broader LangChain ecosystem.

---

<a id="page-30"></a>
## Page 30 — Popular agentic frameworks — Logos

### Original Page Content

**PART 3 • FRAMEWORKS**

**Popular agentic frameworks**

This page is visual rather than text-heavy.

### Visual Explanation

The slide displays framework/project logos. Readable names include:

- **LangChain**
- **crewAI**
- **LlamaIndex**
- **Haystack by deepset**
- **DSPy**
- **Pydantic AI**

Three additional logos appear on the lower row without readable textual names on the slide. They are intentionally not identified here to avoid guessing beyond the source.

### Explanation

The visual reinforces that the agentic framework ecosystem contains many alternatives beyond the frameworks listed in the comparison table on Page 29.

### Exam Tip

Prioritize the frameworks and use cases explicitly described on Page 29. Page 30 is mainly an ecosystem-awareness slide.

### Common Mistake

Do not infer detailed capabilities from a logo-only slide when the lecture does not provide the accompanying text.

### Likely Exam Questions

1. **Name three agentic framework/project names visibly shown on this page.**  
   **Expected answer:** Any three of LangChain, crewAI, LlamaIndex, Haystack, DSPy, Pydantic AI.

---

<a id="page-31"></a>
## Page 31 — Best Practices

### Original Page Content

**PART 3 • FRAMEWORKS**

**Best Practices**

- Start with Small-Scale Prototypes
- Incorporate Human Oversight
- Optimize Memory Usage
- Ensure Robust Monitoring and Observability
- Ensure security is not an afterthought

Links shown on slide:

- `https://blog.jetbrains.com/pycharm/2026/06/top-agentic-frameworks-for-building-applications-2026/#best-agentic-frameworks-for-your-projects`
- `https://www.exabeam.com/explainers/agentic-ai/agentic-ai-frameworks-key-components-top-8-options/`

### Visual Explanation

The slide is a concise five-item checklist. It highlights practical engineering concerns rather than a new theoretical model.

### Explanation

The five practices address five major production risks:

| Best Practice | What it controls |
|---|---|
| Start small | Complexity and unknown behavior |
| Human oversight | Unsafe or incorrect autonomous actions |
| Optimize memory | Context/state efficiency |
| Monitoring & observability | Debugging, tracing, operational visibility |
| Security from the start | Tool/data/action risks |

The “what it controls” column is supplementary interpretation; the original five practices are preserved above.

### Exam Tip

If asked for agentic framework best practices, reproduce the five slide bullets first, then explain them.

### Common Mistake

Security is explicitly stated as **not an afterthought**. Do not treat security as something added only after the agent is functional.

### Likely Exam Questions

1. **List the five best practices given for agentic systems/frameworks.**  
   **Expected answer:** Start with small-scale prototypes, incorporate human oversight, optimize memory usage, ensure robust monitoring/observability, and treat security as a first-class concern.

---

<a id="page-32"></a>
## Page 32 — Next Week & How to Prepare

### Original Page Content

**PART 4 • CLOSING**

**Next Week & How to Prepare**

**Lecture 06 — Knowledge & memory of AI agents:** RAG, embeddings, retrieval, memory & the idea of tools

- Go through the LABs
  - Go through background material on the above topics
  - Play around on Azure AI Foundry

### Visual Explanation

The slide contains a prominent banner introducing Lecture 06 and a short preparation list. It closes Lecture 05 and points forward to knowledge, memory, RAG, embeddings, retrieval, and tools.

### Explanation

Lecture 05 establishes the agent/control foundation; Lecture 06 is positioned to deepen how agents access and retain information.

### Exam Tip

For Lecture 05 revision, prioritize concepts already completed here. The Page 32 Lecture 06 items are preparation topics, not detailed Lecture 05 theory.

### Common Mistake

Do not attribute detailed RAG or memory mechanisms to Lecture 05 when this slide only previews them for Lecture 06.

### Likely Exam Questions

1. **What topics are previewed for Lecture 06?**  
   **Expected answer:** Knowledge and memory of AI agents, including RAG, embeddings, retrieval, memory, and the idea of tools.

---

<a id="lecture-summary"></a>
# Lecture Summary

## 1. LLM Fundamentals

An LLM is presented as a **neural network trained to predict the next token from previous tokens**. Text is broken into **tokens**, and learned **embeddings** represent semantic relationships between those tokens. During inference, the model repeatedly predicts a next token until generation ends.

The high-level generation pipeline is:

```text
Text
 ↓
Tokens
 ↓
Embeddings
 ↓
Decoder-only Transformer
 ↓
Logits
 ↓
Softmax
 ↓
Token probability distribution
 ↓
Token selection
 ↓
Repeat
```

The lecture describes two broad training stages:

1. **Pre-training** — learning language and world patterns from very large amounts of text.
2. **Alignment / instruction-tuning** — learning to follow instructions and be helpful.

## 2. Logits, Softmax, and Temperature

At each generation step, the model emits a raw score (**logit**) for each token in the vocabulary. Softmax converts these logits into a probability distribution.

Temperature changes the shape of that distribution:

- low temperature → sharper, more deterministic distribution,
- \(T=1\) → natural model distribution,
- high temperature → flatter, more random distribution.

## 3. Three Defining Model Limitations

The lecture identifies three limitations of using models alone:

| Limitation | Meaning | Lecture response |
|---|---|---|
| Stateless | No memory between calls | Store and replay state/context |
| Ungrounded | No live/current external data automatically | Retrieval and/or tools |
| Probabilistic | Output is not guaranteed to be best/correct | Temperature helps control randomness; frameworks later add structure |

These limitations motivate the move from standalone models toward Agentic AI.

## 4. Model vs Assistant vs Agent

Capability evolves from:

```text
Models      → Create for you
Assistants  → Retrieve for you
Agents      → Do for you
```

Agents support multi-step processes, autonomous actions, and self-correction.

## 5. What an Agent Is

The lecture defines an agent as an **LLM directing a loop**:

```text
Observe state
   ↓
Decide action / tool call
   ↓
Runtime executes
   ↓
Return observation/result
   ↓
Decide again
   ↓
Final response / goal completion
```

The LLM decides; the runtime executes.

## 6. Agency Spectrum

Agency is not binary:

| Rung | LLM Control |
|---|---|
| LLM call | Content of one output |
| Workflow / Chain | LLM participates inside a fixed code path |
| Router | Chooses among N predefined paths |
| Autonomous Agent | Chooses tools, order, and stopping point |

The lecture's design rule is:

> **Choose the least autonomy that still solves the problem.**

Agents bring flexibility but also **latency, cost, non-determinism, and additional opportunities for incorrect decisions**.

## 7. ReAct

ReAct stands for **Reasoning + Acting**. Instead of planning everything before execution, the agent repeatedly interleaves:

```text
Thought → Action → Observation → Thought → ...
```

This lets the next decision depend on real tool results.

## 8. Messages and Native Tool Calling

Agentic conversations can contain:

- System messages
- Human messages
- AI messages
- Tool messages

Native tool calling bridges model reasoning and executable functions through structured calls rather than relying on regex parsing of free-form output.

## 9. Tool Calling Lifecycle

```text
1. Runtime gives model tool definitions + messages
2. Model emits structured tool call
3. Runtime executes function
4. Runtime returns tool result + conversation state
5. Model produces next action or final answer
```

Tools can fetch real-time information, run code, query databases, or cause actions in external systems.

## 10. Agentic Frameworks

An agentic framework is defined as **a software architecture designed to build, manage, and orchestrate autonomous AI agents**.

Key roles include:

- overcoming statelessness through persistent/resumable state,
- deterministic control around probabilistic decisions,
- human-in-the-loop approval,
- cyclical execution and error correction,
- multi-agent orchestration.

## 11. Key Framework Components

1. Models
2. Tools
3. Memory
4. Monitoring
5. Prompts
6. Middleware / Orchestration

## 12. Framework Selection

The lecture compares:

- LangChain + LangGraph
- Microsoft Agent Framework
- LlamaIndex
- Google ADK
- DSPy

The correct framework depends on ecosystem, control-flow requirements, RAG/data emphasis, multi-agent orchestration needs, and evaluation/prompt-optimization needs.

## 13. Best Practices

- Start with Small-Scale Prototypes
- Incorporate Human Oversight
- Optimize Memory Usage
- Ensure Robust Monitoring and Observability
- Ensure security is not an afterthought

---

<a id="key-definitions"></a>
# Key Definitions

| Term | Definition from / aligned with lecture | Simple Meaning |
|---|---|---|
| Token | Foundational unit of text processing formed by splitting raw text into smaller components | A piece of text processed by the model |
| Embedding | Learned vector representation that captures semantic relationships | Numbers representing meaning |
| LLM | Neural network trained to predict the next token given previous tokens | Repeated next-token predictor |
| Logit | Raw score for a token before softmax | Unnormalized preference score |
| Softmax | Converts logits into a valid probability distribution | Raw scores → probabilities |
| Temperature | Rescales logits before softmax, sharpening or flattening probabilities | Controls randomness/concentration |
| Stateless | No memory between model calls | Must store/replay context externally |
| Ungrounded | No inherent live/current data beyond training + provided input | Needs retrieval/tools for fresh/private data |
| Probabilistic | Output is sampled/selected from probability distributions; best result not guaranteed | Can vary or be wrong |
| Agent | An LLM directing a loop that observes state, decides actions, receives execution results, and continues | Model that can repeatedly decide and act through tools |
| Agency Spectrum | Ladder showing increasing LLM control over control flow | Different degrees of autonomy |
| ReAct | Reasoning + Acting pattern that alternates Thought → Action → Observation | Think, act, inspect, repeat |
| Native Tool Calling | Structured mechanism for a model to request function/tool execution | Structured action request instead of parsing text |
| Tool | Callable function with well-defined inputs and outputs exposed to an agent/model | External capability / “hands” |
| Agentic Framework | Software architecture designed to build, manage, and orchestrate autonomous AI agents | Engineering structure around agents |
| Human-in-the-loop | Human approval/participation introduced before or during sensitive actions | Human control checkpoint |
| Memory | Context supporting continuity across tasks and sessions | Persistent context/state |
| Monitoring | Backend for observing agent execution | Visibility into what the agent did |
| Middleware / Orchestration | Structured outputs, guardrails, HIL, and orchestration/control mechanisms | Coordination and safety/control layer |

---

<a id="important-formulas"></a>
# Important Formulas

## Softmax

\[
p_i = \frac{e^{z_i}}{\sum_{j \in V} e^{z_j}}
\]

Where:

- \(z_i\) = logit for token \(i\)
- \(V\) = vocabulary
- \(p_i\) = normalized probability for token \(i\)

Properties from the lecture:

- \(p_i \in (0,1)\)
- \(\sum_i p_i = 1\)

## Softmax with Temperature

\[
p_i = \frac{e^{z_i/T}}{\sum_j e^{z_j/T}}
\]

| Temperature | Effect |
|---|---|
| \(T \to 0\) | Highest logit dominates → argmax / greedy / deterministic |
| \(T=1\) | Natural model distribution |
| \(T \to \infty\) | Distribution approaches uniform / maximum randomness |

---

<a id="important-code-snippet"></a>
# Important Code Snippet

Tool example from Page 24:

```python
from langchain.tools import tool

@tool
def search_database(query: str, limit: int = 10) -> str:
    """Search the customer database for records matching the query.

    Args:
        query: Search terms to look for
        limit: Maximum number of results to return
    """
    return f"Found {limit} results for '{query}'"
```

### Why this snippet matters

It demonstrates a tool with:

- a decorator marking it as a tool,
- a clear function name,
- typed parameters,
- a default argument,
- a docstring describing the tool and its arguments,
- a defined return type.

---

<a id="important-diagrams-and-flows"></a>
# Important Diagrams and Flows

## 1. LLM Generation Flow

```text
Input text
   ↓
Tokenization
   ↓
Embeddings
   ↓
Transformer processing
   ↓
Logits
   ↓
Softmax / Temperature
   ↓
Token probabilities
   ↓
Choose/sample next token
   ↓
Append + repeat
```

## 2. Agent Loop

```text
        Prompt / State
             |
             v
           Model
          /     \
   Action       Final Response
      |
      v
     Tool
      |
 Observation
      |
      +----------> Model
```

## 3. ReAct Loop

```text
Thought
   ↓
Action
   ↓
Observation
   ↓
Thought
   ↓
...
```

## 4. Tool Calling Lifecycle

```text
Tool definitions + messages
          ↓
        Model
          ↓
Structured tool call
          ↓
Runtime executes function
          ↓
Tool result
          ↓
        Model
          ↓
Final response / next tool call
```

## 5. Agency Spectrum

```text
LOW AUTONOMY
LLM Call
   ↓
Workflow / Chain
   ↓
Router
   ↓
Autonomous Agent
HIGH AUTONOMY
```

## 6. Agentic Framework Components

```text
Agentic Framework
├── Models
├── Tools
├── Memory
├── Monitoring
├── Prompts
└── Middleware / Orchestration
```

---

<a id="quick-revision-notes"></a>
# Quick Revision Notes

| Topic | Fast Revision Point | Exam Importance |
|---|---|---|
| LLM definition | Neural network predicting next token from previous tokens | High |
| Token | Small text-processing unit | Medium |
| Embedding | Learned semantic vector representation | Medium |
| Logits | Raw scores before softmax | High |
| Softmax | Converts logits to probabilities summing to 1 | High |
| Temperature | Low = sharp/deterministic; high = flat/random | High |
| 3 limitations | Stateless, Ungrounded, Probabilistic | Very High |
| Model vs Agent | Model generates; agent can act via tools in a loop | Very High |
| Agency Spectrum | LLM call → workflow → router → autonomous agent | Very High |
| Design rule | Choose the least autonomy that still solves the problem | Very High |
| ReAct | Thought → Action → Observation | Very High |
| Message types | System, Human, AI, Tool | High |
| Tool calling | Model requests; runtime executes; result returns | Very High |
| Agentic framework | Build/manage/orchestrate autonomous agents | Very High |
| Framework benefits | State, controls/HIL, error correction, multi-agent orchestration | High |
| Framework components | Models, Tools, Memory, Monitoring, Prompts, Middleware/Orchestration | Very High |
| Best practices | Prototype small, human oversight, memory, monitoring, security | High |

## Memory Tricks

### Three LLM limitations

**S-U-P**

- **S**tateless
- **U**ngrounded
- **P**robabilistic

### Agent loop

**O-D-A-O**

- **O**bserve
- **D**ecide
- **A**ct
- **O**bserve again

### ReAct

**T-A-O**

- **T**hought
- **A**ction
- **O**bservation

### Framework components

Remember the system needs a **Brain, Hands, Memory, Eyes, Instructions, Controller**:

- Brain → Models
- Hands → Tools
- Memory → Memory
- Eyes → Monitoring
- Instructions → Prompts
- Controller → Middleware / Orchestration

---

<a id="lecture-level-likely-exam-questions"></a>
# Lecture-Level Likely Exam Questions

## Q1. Define an LLM.

**Expected answer:** An LLM is a neural network trained to predict the next token given previous tokens. During inference it repeatedly maps input tokens/context to a next-token distribution and generates text token by token.

## Q2. What are the three defining limitations of model-only workflows?

**Expected answer:**

1. Stateless — no memory between calls.
2. Ungrounded — no live/current external data automatically.
3. Probabilistic — outputs are not guaranteed to be the best/correct result.

## Q3. Explain how temperature affects token generation.

**Expected answer:** Temperature rescales logits before softmax. Low temperature sharpens the distribution so high-logit tokens dominate; \(T=1\) preserves the natural distribution; high temperature flattens the distribution and increases randomness.

## Q4. Differentiate a model from an agent.

**Expected answer:** A model primarily generates output from input. An agent uses an LLM inside a loop, observes state, selects actions/tool calls, has a runtime execute them, receives observations, and continues until the goal is completed or a final response can be produced.

## Q5. Explain the Agency Spectrum.

**Expected answer:** Agency is not binary. The lecture shows increasing control from LLM call → workflow/chain → router → autonomous agent. More autonomy means the LLM controls more of the application's control flow.

## Q6. When should you use a workflow instead of an agent?

**Expected answer:** Use a workflow when the sequence of steps can be written down in advance. It is cheaper and more deterministic than unnecessary autonomous decision-making.

## Q7. What is the rule of thumb for autonomy?

**Expected answer:** Choose the **least autonomy that still solves the problem**.

## Q8. What is ReAct and why is it useful?

**Expected answer:** ReAct is Reasoning + Acting. It alternates Thought → Action → Observation, allowing the next decision to depend on the latest real-world/tool result instead of following a rigid precomputed plan.

## Q9. List and explain the four message types.

**Expected answer:**

- System message — instructions/context for model behavior.
- Human message — user input.
- AI message — model response, potentially including tool calls and metadata.
- Tool message — output/result of a tool call.

## Q10. Describe the tool-calling lifecycle.

**Expected answer:** The application provides tool definitions and conversation messages; the model emits a structured tool call with arguments; the runtime executes the function; the tool result is returned to the model; the model then continues or responds to the user.

## Q11. What is the bridge problem and how does native tool calling help?

**Expected answer:** Free-form model text must somehow become reliable executable action. Naïvely parsing text/JSON with regex is unreliable. Native tool calling gives structured function-call outputs that the runtime can validate and execute.

## Q12. Define an agentic framework.

**Expected answer:** An agentic framework is a software architecture designed to build, manage, and orchestrate autonomous AI agents.

## Q13. Give four reasons to use an agentic framework.

**Expected answer:**

- Manage persistent/resumable state.
- Add deterministic controls and human-in-the-loop approval around probabilistic decisions.
- Support cyclical execution and error correction.
- Orchestrate multiple agents.

## Q14. List the six key components of an agentic framework.

**Expected answer:** Models, Tools, Memory, Monitoring, Prompts, Middleware/Orchestration.

## Q15. Match the scenario to the correct pattern.

**Scenario A:** Translate → summarize → format JSON.  
**Answer:** Workflow/Chain.

**Scenario B:** Categorize email into Billing / Technical Support / General Inquiry.  
**Answer:** Router/Classifier.

**Scenario C:** Search flight/hotel/weather APIs and dynamically complete a travel task.  
**Answer:** Autonomous Agent.

## Q16. Give the five best practices from the lecture.

**Expected answer:** Start with small-scale prototypes, incorporate human oversight, optimize memory usage, ensure robust monitoring and observability, and ensure security is not an afterthought.

---

<a id="key-terms"></a>
# Key Terms

- Agent
- Agentic AI
- Agentic framework
- Agency Spectrum
- Alignment
- Autonomous agent
- Embedding
- Human message
- Human-in-the-loop (HIL)
- Instruction-tuning
- LLM
- Logit
- Memory
- Middleware
- Model
- Monitoring
- Native Tool Calling
- Observation
- Orchestration
- Pre-training
- Probabilistic
- Prompt
- ReAct
- Router / Classifier
- Softmax
- Stateless
- System message
- Temperature
- Token
- Tool
- Tool call
- Tool message
- Ungrounded
- Workflow / Chain

---

<a id="verification"></a>
# Verification

### Completeness Checks

- All PDF pages were processed in order from **Page 01** through **Page 32**.
- Cover, roadmap, section-divider, demo, activity, closing, and image-heavy pages were retained.
- Tables on Pages 12, 16, 17, 19, and 29 were recreated in Markdown.
- Formulas on Pages 09 and 10 were preserved.
- The ReAct trace on Page 21 was transcribed in a language-tagged `text` block.
- The code example on Page 24 was preserved in a language-tagged `python` block.
- Tool-calling, agent-loop, agency-spectrum, and framework visuals were recreated as text/ASCII diagrams where useful.
- Page 30's unlabeled logos were not guessed.
- Supplementary explanations are separated from original lecture content.

**PDF pages: 32 / MD page sections: 32 ✅**
