# SE3110 - Quality Management in Software Engineering
## Lab Sheet 01 - Introduction to Selenium IDE

| Field | Details |
|---|---|
| Institution | Sri Lanka Institute of Information Technology (SLIIT) |
| Faculty | Faculty of Computing |
| Degree | BSc (Hons) in Software Engineering |
| Module code | SE3110 |
| Module name | Quality Management in Software Engineering |
| Academic period | Year 3 Semester 1 - 2026 |
| Lab sheet | Lab Sheet 01 |
| Lab title | Introduction to Selenium IDE |
| Total PDF pages | 7 |

---

# Table of Contents

- [Page 01 - Introduction to Selenium and Selenium IDE](#page-01---introduction-to-selenium-and-selenium-ide)
- [Page 02 - Installation Details for Firefox](#page-02---installation-details-for-firefox)
- [Page 03 - Installation Details for Chrome: Steps 1-3](#page-03---installation-details-for-chrome-steps-1-3)
- [Page 04 - Chrome Installation Completion and Opening Selenium IDE](#page-04---chrome-installation-completion-and-opening-selenium-ide)
- [Page 05 - Creating and Recording a New Test Case](#page-05---creating-and-recording-a-new-test-case)
- [Page 06 - Stopping Recording and Naming the Test Case](#page-06---stopping-recording-and-naming-the-test-case)
- [Page 07 - Saving, Reopening, Executing and Monitoring Test Cases](#page-07---saving-reopening-executing-and-monitoring-test-cases)
- [Major Topic Exam Sections](#major-topic-exam-sections)
- [Full Lab Summary](#full-lab-summary)
- [Important Formulas and Code Snippets](#important-formulas-and-code-snippets)
- [Key Definitions Table](#key-definitions-table)
- [Quick Revision Table](#quick-revision-table)
- [Likely Exam Questions with Short Expected Answers](#likely-exam-questions-with-short-expected-answers)
- [Key Terms List](#key-terms-list)
- [Verification](#verification)

---

# Page-by-Page Notes

## Page 01 - Introduction to Selenium and Selenium IDE

### Original Slide Content

**BSc (Hons) in Software Engineering**  
**SE3110: Quality Management in Software Engineering**  
**Year 3 Semester 1 2026**  
**LAB SHEET < 1 >**

**Selenium** is an automated testing tool for web applications. It is an open source project that allows both testers and developers for developing functional tests in the browser. It allows developers to record the workflows, so that they can prevent future regressions of code. In addition, it works on any browser that supports JavaScript.

### Selenium Integrated Development Environment (IDE)

Selenium Integrated Development Environment (IDE) is one of the simplest components in the Selenium automation testing suite.

### Features of Selenium

- Supports for cross-browser testing.
- Supports several languages including Java, C#, PHP, and Python.
- Provides an efficient way of comparing expected and actual results.
- Inbuilt reporting mechanism.

### How to Get It

- Use Selenium-Core or get a Firefox plug-in "Selenium-IDE". The plugin helps you to record test cases.
- Reference: `https://www.seleniumhq.org//`

### Visual Explanation

The central screenshot shows the Selenium IDE user interface and labels its main areas:

| Label in the visual | Meaning |
|---|---|
| Replay Toolbar | Contains controls for replaying recorded tests and managing playback. |
| Start and Stop Recording Button | Starts or stops capturing browser actions as test steps. |
| Script Editor | Displays the recorded commands, targets, and values that form the test script. |
| Access Area | Provides fields for viewing or editing a selected command, target, and value. |
| Selenium Log | Displays execution information, errors, and diagnostic messages. |

```text
Selenium IDE Interface
├── Replay Toolbar
├── Record / Stop Button
├── Script Editor
│   ├── Command
│   ├── Target
│   └── Value
├── Command Access Area
└── Selenium Log
```

**Why this matters:** The diagram introduces the areas students must recognize when recording, editing, replaying, and troubleshooting a Selenium IDE test case.

### Explanation

Selenium helps automate browser-based functional testing. Instead of manually repeating the same browser workflow after every software change, a tester can record the workflow and replay it later. This supports regression testing by checking whether previously working behavior still works after code changes.

**Definition:** Selenium is an open-source web-application automation tool used to create and execute browser-based tests.

**Simple meaning:** Selenium can repeat actions in a web browser automatically and check whether the website behaves correctly.

**Definition:** Selenium IDE is a browser-based component of the Selenium suite that allows users to record, edit, save, and replay test cases.

**Simple meaning:** Selenium IDE records what the tester does in the browser and turns those actions into a reusable test.

### Exam Tip

Remember these keywords: **automated web testing, functional tests, record and replay, regression prevention, cross-browser support, expected vs actual results, reporting**.

### Common Mistake

Do not describe Selenium IDE as a general-purpose programming IDE. In this lab, it is specifically used to record, edit, and replay browser test cases.

---

## Page 02 - Installation Details for Firefox

### Original Slide Content

### Installation Details for Firefox

- Download IDE from the SeleniumHQ official downloads page (Refer fig. 1).

**Fig. 1: Adding Selenium in Firefox - Step 1**

- Click on "Add" button. Then Firefox Add-ons window will pop up to show that you have added Selenium IDE to Firefox (Refer fig. 2).

**Fig. 2: Adding Selenium in Firefox - Step 2**

- Run Selenium by clicking on the "Selenium" icon which appears near the search bar of the browser. Otherwise, you can run it by selecting it from "Tools" menu of Firefox.
- Then Selenium window will open as an empty script-editing window.
- There is a menu for loading or creating new test cases.

### Visual Explanation

**Figure 1** shows the Firefox permission dialog titled **"Add Selenium IDE?"**. The dialog lists extension permissions such as access to website data, downloads, notifications, browser tabs, and browser activity. The user confirms installation using the **Add** button.

**Figure 2** shows a confirmation message stating that Selenium IDE has been added to Firefox.

```text
Open Selenium IDE download page
        ↓
Firefox displays extension permission dialog
        ↓
Click "Add"
        ↓
Firefox confirms Selenium IDE was added
        ↓
Open Selenium IDE from browser icon or Tools menu
        ↓
Empty script-editing window opens
```

**Why this matters:** Browser extensions require explicit permission. The screenshots demonstrate both the permission step and the successful-installation confirmation.

### Explanation

The Firefox installation process has two main phases: adding the extension and launching it. After installation, Selenium IDE can be opened from the browser toolbar or Firefox Tools menu. The initial Selenium IDE window is empty because no project or test case has been created yet.

### Exam Tip

For a process question, write the steps in order: **download -> add permission -> confirmation -> open Selenium IDE -> create or load test case**.

### Common Mistake

Do not stop after the extension confirmation. Installation is complete, but the user must still open Selenium IDE before creating or loading test cases.

---

## Page 03 - Installation Details for Chrome: Steps 1-3

### Original Slide Content

### Installation Details for Chrome

- Download IDE from the SeleniumHQ official downloads page (Refer fig. 3).

**Fig. 3: Adding Selenium in Chrome - Step 1**

- Click on "Add to Chrome" button (Refer fig. 4).

**Fig. 4: Adding Selenium in Chrome - Step 2**

- Click on "Add extension" button (Refer fig. 5).

**Fig. 5: Adding Selenium in Chrome - Step 3**

### Visual Explanation

The page contains three sequential Chrome installation screenshots:

| Figure | What the screenshot shows | Required action |
|---|---|---|
| Fig. 3 | SeleniumHQ downloads page with the Selenium IDE browser-extension link highlighted | Select the Chrome version/link. |
| Fig. 4 | Chrome Web Store page for Selenium IDE | Click **Add to Chrome**. |
| Fig. 5 | Chrome confirmation dialog listing extension permissions | Click **Add extension**. |

```text
SeleniumHQ downloads page
        ↓
Choose Selenium IDE for Chrome
        ↓
Chrome Web Store page
        ↓
Click "Add to Chrome"
        ↓
Permission confirmation dialog
        ↓
Click "Add extension"
```

**Why this matters:** Chrome separates selecting the extension from granting permission. Both actions are required before the extension is installed.

### Explanation

The Chrome installation procedure begins at the SeleniumHQ downloads page, continues to the Chrome Web Store, and finishes when the user accepts the extension permissions. The screenshots use red arrows and circles to show the exact controls to select.

### Exam Tip

Distinguish the two buttons: **Add to Chrome** begins the installation request, while **Add extension** confirms the permissions and completes the addition.

### Common Mistake

Do not confuse the Chrome Web Store page with the completed installation state. The extension is not added until the confirmation dialog is accepted.

---

## Page 04 - Chrome Installation Completion and Opening Selenium IDE

### Original Slide Content

- Then Chrome Add-ons window will pop up to show that you have added Selenium IDE to Chrome (Refer fig. 6).

**Fig. 6: Adding Selenium in Chrome - Step 4**

- Run Selenium by clicking on the "Selenium" icon which appears near the search bar of the browser (Refer fig. 7).

**Fig. 7: Adding Selenium in Chrome - Step 5**

### Working with a Selenium Test Case

1. Open a web browser.

   **Note:** Chrome web browser have been used to demonstrate the remaining steps.

2. Open Selenium IDE by clicking on the Selenium icon (Refer fig. 8).

**Fig. 8: Selenium Icon**

### Visual Explanation

**Figure 6** shows the Chrome notification **"Selenium IDE has been added to Chrome"**, confirming successful installation.

**Figure 7** shows the Selenium IDE extension icon near the browser address/search bar, highlighted by a red arrow.

**Figure 8** gives a close-up of the Selenium icon, circled in red, so the user can identify the correct extension button.

```text
Chrome confirms installation
        ↓
Locate Selenium IDE icon near address bar
        ↓
Open a browser
        ↓
Click Selenium IDE icon
        ↓
Selenium IDE starts
```

**Why this matters:** The page transitions from installation to practical use. It teaches the student how to locate and launch the installed extension.

### Explanation

After Chrome confirms installation, Selenium IDE is accessed through its toolbar icon. The remaining practical steps use Chrome, but the general workflow is the same: open the browser, launch Selenium IDE, create a project, and record a test.

### Exam Tip

In a procedural answer, clearly separate **installation** from **test-case creation**. Page 04 is the transition point between those two phases.

### Common Mistake

Do not begin recording before opening Selenium IDE. The browser itself does not automatically record actions simply because the extension is installed.

---

## Page 05 - Creating and Recording a New Test Case

### Original Slide Content

3. Click on "Record a new test in a new project" (Refer fig. 9).

**Fig. 9: Recording a New Test Case**

4. Give a name for the project (Refer fig. 10). Then click "OK".

**Fig. 10: Adding a Project Name**

5. Give the web address that you want to monitor (Refer fig. 11). Click on "Start Recording".

**Fig. 11: Adding a Website Link**

Now the web address will be opened, and recording will get started. You can navigate through different tabs of the webpage.

### Visual Explanation

The three screenshots represent the setup sequence before browser actions are recorded:

| Figure | Interface shown | Student action |
|---|---|---|
| Fig. 9 | Selenium IDE welcome screen | Select **Record a new test in a new project**. |
| Fig. 10 | **Name your new project** dialog | Enter a project name and click **OK**. |
| Fig. 11 | **Set your project's base URL** dialog | Enter the website address and click **Start Recording**. |

```text
Open Selenium IDE
        ↓
Select "Record a new test in a new project"
        ↓
Enter project name
        ↓
Enter base URL / website address
        ↓
Click "Start Recording"
        ↓
Website opens and browser actions are captured
```

**Why this matters:** A Selenium IDE recording belongs to a project and begins from a defined base URL. These details help organize tests and determine where recorded navigation begins.

### Explanation

A **project** groups related Selenium test cases. The **base URL** is the starting website address for the recording. Once recording begins, Selenium IDE captures browser actions such as opening pages, clicking links, selecting items, and navigating through the website.

**Definition:** A test case is a sequence of commands used to verify a specific behavior or workflow in an application.

**Simple meaning:** It is a saved set of steps that checks whether one feature works correctly.

**Definition:** A base URL is the main starting address used by a Selenium IDE project or test.

**Simple meaning:** It is the website Selenium opens when the recorded test begins.

### Exam Tip

Remember the creation sequence: **new project -> project name -> base URL -> start recording**.

### Common Mistake

Do not confuse the project name with the test-case name. The project is named before recording; the individual test case is named after recording stops.

---

## Page 06 - Stopping Recording and Naming the Test Case

### Original Slide Content

6. Click on "Stop Recording" button (Refer fig. 12).

**Fig. 12: Stopping Recording**

7. Give a name to your test case and click "OK" (Refer fig. 13).

**Fig. 13: Adding a Test Case Name**

### Visual Explanation

**Figure 12** shows the Selenium IDE command table after several actions have been recorded. The red-circled recording button at the upper-right is used to stop recording. Visible recorded command examples include:

- `open`
- `set window size`
- `click`

The command table uses three principal columns:

| Column | Purpose |
|---|---|
| Command | The action Selenium performs, such as `open` or `click`. |
| Target | The page element, URL path, or selector affected by the command. |
| Value | Additional data required by a command, when applicable. |

**Figure 13** shows the **Name your new test** dialog. The user enters a test-case name and confirms it using **OK**.

```text
Perform browser actions while recording
        ↓
Selenium IDE adds Command / Target / Value rows
        ↓
Click Stop Recording
        ↓
Enter a test-case name
        ↓
Click OK
```

**Why this matters:** Stopping the recording finalizes the captured action sequence. Naming the test allows it to be identified, saved, reopened, and executed later.

### Explanation

Each browser action becomes a Selenium command. The **Command** describes what to do, the **Target** identifies where to do it, and **Value** supplies extra input when needed. The test should be given a meaningful name that describes the workflow being verified.

### Exam Tip

Be able to explain the three columns: **Command = action, Target = element/location, Value = input or extra data**.

### Common Mistake

Do not close Selenium IDE immediately after naming the test. The project/test must still be saved using the save button shown on Page 07.

---

## Page 07 - Saving, Reopening, Executing and Monitoring Test Cases

### Original Slide Content

8. Click on the save button to save the test case (Refer fig. 14) and save it.

**Fig. 14: Saving the Test Case**

9. You can open the saved test case in future and create a new project using the icons in the toolbar of the Selenium IDE.

10. Based on your choice you can either execute one test case at a time or all the test cases together (Refer fig. 15).

**Fig. 15: Executing Test Cases**

11. You can monitor the commands and issues related to all the test cases.

### Visual Explanation

**Figure 14** shows the save icon in the Selenium IDE toolbar, highlighted with a red circle. The command table remains visible, demonstrating that the recorded test is ready to be saved.

**Figure 15** highlights a replay/run button. Selenium IDE provides controls for executing a selected test case or running a collection of test cases.

The lower section of the interface contains **Log** and **Reference** tabs, which support monitoring and understanding execution.

```text
Recorded and named test case
        ↓
Click Save
        ↓
Test can be reopened later
        ↓
Choose execution mode
        ├── Run one selected test case
        └── Run all test cases
        ↓
Monitor commands, logs, and issues
```

**Why this matters:** Recording alone is not enough. A reusable automated test must be saved, executed, and monitored to determine whether it passed and whether any commands failed.

### Explanation

The final workflow turns a recorded browser session into a reusable test asset. Saving preserves the project and test. Replay executes the recorded commands. Monitoring the log helps identify errors, failed commands, and other issues during execution.

**Definition:** Test execution is the process of running the saved Selenium commands against the web application.

**Simple meaning:** Selenium repeats the recorded browser actions automatically.

**Definition:** A test log is a record of execution messages, statuses, errors, and issues produced while the test runs.

**Simple meaning:** The log shows what happened during the test and helps find failures.

### Exam Tip

The complete operational cycle is: **record -> stop -> name -> save -> reopen -> execute -> monitor**.

### Common Mistake

Do not assume a replayed test passed only because it completed. The tester must inspect commands, results, and log messages for failures or unexpected behavior.

---

# Major Topic Exam Sections

## Major Topic 1 - Selenium and Selenium IDE Fundamentals

### Exam Tip

Use the terms **open source, browser automation, functional testing, record and replay, regression testing, cross-browser testing, expected vs actual results, reporting**.

### Common Mistake

Do not say Selenium is only for developers. The lab states that both testers and developers can create browser functional tests.

### Likely Exam Questions

1. **Question:** What is Selenium?
   - **Expected answer:** Selenium is an open-source automated testing tool for web applications that supports recording and executing browser-based functional tests.
2. **Question:** State four features of Selenium from the lab sheet.
   - **Expected answer:** Cross-browser testing, support for several programming languages, comparison of expected and actual results, and an inbuilt reporting mechanism.

## Major Topic 2 - Selenium IDE Interface

### Exam Tip

Know the functions of the replay toolbar, recording button, script editor, command access area, and Selenium log.

### Common Mistake

Do not confuse the script editor with the log. The script editor stores commands; the log reports execution information and issues.

### Likely Exam Questions

1. **Question:** What is the purpose of the Selenium IDE script editor?
   - **Expected answer:** It displays and allows editing of the recorded test commands, targets, and values.
2. **Question:** What information is shown in the Selenium log?
   - **Expected answer:** Execution messages, errors, and diagnostic information related to the test.

## Major Topic 3 - Installing Selenium IDE

### Exam Tip

Explain installation as a sequence and distinguish Firefox and Chrome button names.

### Common Mistake

Do not omit the extension-permission confirmation step.

### Likely Exam Questions

1. **Question:** Summarize the Firefox installation procedure.
   - **Expected answer:** Download Selenium IDE, approve the Add permission dialog, confirm installation, and open Selenium IDE using its browser icon or Tools menu.
2. **Question:** What are the two main Chrome installation buttons?
   - **Expected answer:** Add to Chrome and Add extension.

## Major Topic 4 - Recording a Selenium Test Case

### Exam Tip

Memorize the sequence: **open IDE -> record a new test in a new project -> name project -> enter base URL -> start recording -> navigate -> stop recording -> name test**.

### Common Mistake

Do not use the same explanation for project name and test-case name. They identify different levels.

### Likely Exam Questions

1. **Question:** What is the purpose of the base URL?
   - **Expected answer:** It defines the starting website address for the Selenium IDE project or test recording.
2. **Question:** What happens after Start Recording is selected?
   - **Expected answer:** The website opens and Selenium IDE captures the user's browser actions as test commands.

## Major Topic 5 - Saving, Executing and Monitoring Tests

### Exam Tip

A complete answer should include saving, reopening, single/all-test execution, and log monitoring.

### Common Mistake

Do not treat saving and executing as the same operation. Saving preserves the test; executing runs its commands.

### Likely Exam Questions

1. **Question:** How can Selenium IDE tests be executed?
   - **Expected answer:** A user can execute one selected test case or all test cases together.
2. **Question:** Why should the tester monitor the Selenium log?
   - **Expected answer:** To identify execution messages, failed commands, and issues related to the test cases.

---

# Full Lab Summary

Selenium is an open-source automated testing tool for web applications. It allows testers and developers to create functional browser tests, record workflows, replay them, compare expected and actual results, and reduce the risk of code regressions. Selenium supports cross-browser testing, several programming languages, and built-in reporting.

Selenium IDE is one of the simplest Selenium-suite components. Its interface includes a replay toolbar, start/stop recording control, script editor, command access area, and Selenium log. The script editor represents a test as commands, targets, and values.

The lab demonstrates extension installation in Firefox and Chrome. Firefox uses an **Add** permission step and confirms that the extension has been added. Chrome uses **Add to Chrome**, followed by **Add extension**, then displays a confirmation and toolbar icon.

To create a test, the user opens Selenium IDE, selects **Record a new test in a new project**, provides a project name, enters a base URL, and starts recording. Selenium captures navigation and interactions as commands. The user then stops recording, names the test case, and saves it. Saved tests can be reopened and executed individually or together. Logs and command information are monitored to identify issues.

# Important Formulas and Code Snippets

No mathematical formulas or programming source-code examples appear in this lab sheet.

The most important procedural sequences are:

```text
Firefox Installation:
Download → Add → Confirmation → Open Selenium IDE
```

```text
Chrome Installation:
Download → Add to Chrome → Add extension → Confirmation → Open Selenium IDE
```

```text
Test Creation:
Open IDE → New project/test → Project name → Base URL
→ Start recording → Perform actions → Stop recording
→ Test-case name → Save → Execute → Monitor
```

# Key Definitions Table

| Term | Definition | Simple meaning |
|---|---|---|
| Selenium | Open-source automation tool for testing web applications | Tool that automates browser tests |
| Selenium IDE | Browser-based Selenium component for recording, editing, saving, and replaying tests | Record-and-playback testing tool |
| Functional testing | Testing whether application functions behave as required | Check whether features work |
| Regression | A previously working feature that fails after a change | Old functionality breaks after new code |
| Cross-browser testing | Running tests across different browser environments | Check the site in multiple browsers |
| Project | Container used to organize one or more Selenium IDE test cases | Group of related tests |
| Test case | Sequence of commands that verifies a workflow or behavior | Saved automated test |
| Base URL | Starting website address for a project or test | Main site Selenium opens |
| Command | Action Selenium performs | What the test does |
| Target | Element or location affected by a command | Where the action happens |
| Value | Additional data used by a command | Input needed by the action |
| Test execution | Running saved Selenium commands | Replay the test |
| Selenium log | Execution messages and errors generated during a test | Record of what happened |

# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---:|
| Selenium purpose | Automated functional testing for web applications | 1 |
| Selenium features | Cross-browser, language support, expected/actual comparison, reporting | 1 |
| IDE components | Replay toolbar, record button, script editor, access area, log | 1 |
| Firefox installation | Download, Add, confirm, open | 2 |
| Chrome installation | Download, Add to Chrome, Add extension, confirm, open | 3-4 |
| Start test creation | New project, project name, base URL, Start Recording | 4-5 |
| Finish recording | Stop Recording, name test case | 6 |
| Preserve and run | Save, reopen, run one/all, monitor logs | 7 |

# Likely Exam Questions with Short Expected Answers

## Question 1

**Question:** Define Selenium.

**Expected Answer:** Selenium is an open-source automated testing tool for web applications that allows testers and developers to create and execute functional browser tests.

## Question 2

**Question:** What is Selenium IDE?

**Expected Answer:** Selenium IDE is a simple component of the Selenium suite used to record, edit, save, and replay browser test cases.

## Question 3

**Question:** Explain how Selenium supports regression testing.

**Expected Answer:** Recorded workflows can be replayed after software changes to check whether previously working behavior still functions correctly.

## Question 4

**Question:** List the main Selenium IDE interface areas shown in the lab.

**Expected Answer:** Replay toolbar, start/stop recording button, script editor, command access area, and Selenium log.

## Question 5

**Question:** State the steps for creating a new Selenium IDE test.

**Expected Answer:** Open Selenium IDE, select a new test in a new project, enter a project name, enter the base URL, start recording, perform browser actions, stop recording, and name the test case.

## Question 6

**Question:** Differentiate Command, Target, and Value.

**Expected Answer:** Command is the action, Target identifies the element or location, and Value supplies additional input required by the action.

## Question 7

**Question:** What happens after a test is saved?

**Expected Answer:** It can be reopened later, executed individually or with other test cases, and monitored using commands and logs.

# Key Terms List

- Selenium
- Selenium IDE
- Automated testing
- Web application testing
- Functional testing
- Regression testing
- Cross-browser testing
- Open source
- Replay toolbar
- Start Recording
- Stop Recording
- Script editor
- Access area
- Selenium log
- Browser extension
- Firefox Add-ons
- Chrome Web Store
- Project
- Test case
- Base URL
- Command
- Target
- Value
- Save
- Replay
- Execute test case
- Execute all tests
- Monitoring
- Expected result
- Actual result
- Reporting

# Verification

- PDF page count checked: 7
- Markdown page sections checked: 7
- Page order verified: Page 01 -> Page 02 -> Page 03 -> Page 04 -> Page 05 -> Page 06 -> Page 07
- All source text included in page order.
- All fifteen figures described in their corresponding page sections.
- Selenium IDE interface and workflow visuals represented using Markdown tables and tagged ASCII diagrams.
- No source code was present; every added diagram uses a `text` language tag.

PDF pages: 7 / MD page sections: 7 ✅
