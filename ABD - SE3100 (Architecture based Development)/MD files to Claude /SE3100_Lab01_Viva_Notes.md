# SE3100 – Lab 01 – Viva Preparation Notes
### ⚠️ PERSONAL STUDY COPY — DO NOT SUBMIT

---

## 1. Numbers I Must Be Able to Defend

Every `<<>>` value in the submission must have a reason. Prepared justifications:

| Value | My justification |
|---|---|
| 2 s / 5 s response time | A patient booking a same-day appointment abandons the action if the confirmation is slower than a few seconds; 2 s is a common interactive-response threshold, 5 s is the outer tolerance limit |
| 1,000 concurrent users | Derived from a multi-branch network where each branch has both patient-side and reception-side traffic during the morning peak |
| 200 requests/second | Sustained throughput needed for the peak window rather than a momentary burst |
| 0.1% failure rate | A rejected booking is a lost clinical appointment, so the tolerance is very low |
| 3 interactions / 30 s to undo | A correction made while a patient is waiting must not interrupt the consultation |
| 30 minutes to task competence | Staff must be productive within a single onboarding session, not a training course |

If the lecturer challenges a number: **do not defend the exact figure — defend the reasoning and say the value would be agreed with stakeholders.**

---

## 2. Six Scenario Elements

Source → Stimulus → Environment → Artifact → Response → Response Measure

| Element | One-line meaning |
|---|---|
| Source | Who or what originates the event |
| Stimulus | The event, request or fault arriving at the system |
| Environment | The operating condition when it occurs |
| Artifact | The specific part of the system affected |
| Response | What the system does |
| Response Measure | The objective metric that tests the response |

---

## 3. Anticipated Questions and Answers

**Q. What is a quality attribute?**
A measurable characteristic describing how well a software system performs or behaves — for example availability, performance, security, usability or modifiability.

**Q. Functional requirement vs quality attribute?**
A functional requirement states *what* the system must do; a quality attribute states *how well* it must do it under specified conditions.

**Q. Why did you choose Performance?**
The case study explicitly requires booking and check-in processing to continue without noticeable delay when simultaneous requests rise well above a normal day's traffic during morning peaks and seasonal outbreaks.

**Q. Why did you choose Usability?**
Staff have varying digital familiarity, some are first-time users, and they must correct accidental cancellations and incorrect entries without complicated recovery steps.

**Q. Difference between Response and Response Measure?**
The Response describes what the system does; the Response Measure defines the objective metric used to decide whether that behaviour is acceptable.

**Q. Why is "the system should be fast" a weak requirement?**
It is not testable — it specifies no workload, environment, artifact, expected response or measurable threshold.

**Q. Why must scenarios be technology-neutral?**
A scenario should state the required outcome without prematurely constraining the architectural solution; naming a product fixes the design before trade-offs are analysed.

**Q. Why is your Artifact not "the whole system"?**
A scenario must be testable against a specific part. Naming the booking and check-in service tells the tester exactly what to load-test; naming the entire platform makes the measure meaningless.

**Q. Is the 3-interaction undo limit architectural or just UI design?**
It is architectural, because reversing an action requires the system to retain prior state and support compensating operations — a data-model and transaction decision, not a screen-layout decision.

**Q. Why are quality attributes hard to add later?**
They are cross-cutting: they influence decomposition, deployment topology and data handling. Retrofitting them usually means restructuring rather than adding a module.

**Q. Is "patients can view past visit history" a quality attribute?**
No — it is functional. It becomes quality-related only when a measurable condition is attached, such as returning three years of history within two seconds.

**Q. What is degraded mode?**
A reduced operating state in which the system continues essential functions while some normal capabilities are unavailable.

**Q. What is an omission fault?**
A fault in which an expected response, message or service does not arrive.

**Q. What makes a requirement architecturally significant?**
When satisfying it requires major structural, deployment, data, integration, scaling, recovery or change-related decisions — decisions that are strategic, long-lasting, cross-cutting and expensive to reverse.

**Q. Why do trade-offs exist?**
Mechanisms that improve one quality consume cost, complexity or resources, or directly weaken another quality. The usual outcome is the *least-worst* architecture rather than an optimal one.

---

## 4. Structure of a Full Trade-Off Answer

1. Name the two competing qualities
2. Explain why they conflict
3. State the situation in which the conflict matters
4. State the balance the stakeholders require

---

## 5. Pre-Submission Checklist

- [ ] All `<<>>` placeholders replaced with final values
- [ ] Availability not used as one of my attributes
- [ ] No functional requirement listed as a quality attribute
- [ ] All six rows filled in both scenarios
- [ ] Every response measure contains a number
- [ ] Artifact is a named module, not "the system"
- [ ] Stimulus row contains the event, not the system's behaviour
- [ ] No technology, framework, database, cloud service or language named
- [ ] Wording rewritten in my own phrasing
- [ ] Name and student ID present on the document
