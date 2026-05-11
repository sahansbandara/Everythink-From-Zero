# WMT — Lecture 06 & 07
## Introduction to React Native with Expo

**Institution name:** Not specified in the slide deck  
**Faculty name:** Not specified in the slide deck  
**Module code:** WMT  
**Module name:** Web and Mobile Technologies / Mobile Development context  
**Lecture number:** Lecture 06 & 07  
**Lecture title:** Introduction to React Native with Expo  
**Lecturer name:** Not specified in the slide deck  
**Degree/program name:** Not specified in the slide deck  
**Total PDF pages/slides:** 79

---

# Table of Contents

- [Page 01 — Title Page](#page-01--title-page)
- [Page 02 — What We'll Cover Today](#page-02--what-we-ll-cover-today)
- [Page 03 — Introduction to Mobile Development](#page-03--introduction-to-mobile-development)
- [Page 04 — Web Apps vs Mobile Apps](#page-04--web-apps-vs-mobile-apps)
- [Page 05 — Native vs Cross-Platform Development](#page-05--native-vs-cross-platform-development)
- [Page 06 — One Codebase → Two Platforms](#page-06--one-codebase-two-platforms)
- [Page 07 — What is React Native?](#page-07--what-is-react-native)
- [Page 08 — What is React Native?](#page-08--what-is-react-native)
- [Page 09 — React vs React Native](#page-09--react-vs-react-native)
- [Page 10 — HTML Elements → React Native Components](#page-10--html-elements-react-native-components)
- [Page 11 — JSX in React Native](#page-11--jsx-in-react-native)
- [Page 12 — Why Use Expo?](#page-12--why-use-expo)
- [Page 13 — What is Expo?](#page-13--what-is-expo)
- [Page 14 — Expo vs React Native CLI](#page-14--expo-vs-react-native-cli)
- [Page 15 — Expo Go — Test on Real Devices](#page-15--expo-go-test-on-real-devices)
- [Page 16 — Setting Up the Dev Environment](#page-16--setting-up-the-dev-environment)
- [Page 17 — Required Tools](#page-17--required-tools)
- [Page 18 — Getting Started — Terminal Commands](#page-18--getting-started-terminal-commands)
- [Page 19 — Testing Options](#page-19--testing-options)
- [Page 20 — Creating Your First Expo App](#page-20--creating-your-first-expo-app)
- [Page 21 — create-expo-app](#page-21--create-expo-app)
- [Page 22 — Project Folder Structure](#page-22--project-folder-structure)
- [Page 23 — Running Your App](#page-23--running-your-app)
- [Page 24 — React Native Basics](#page-24--react-native-basics)
- [Page 25 — Core Components](#page-25--core-components)
- [Page 26 — Flexbox Layout in React Native](#page-26--flexbox-layout-in-react-native)
- [Page 27 — ScrollView & Image](#page-27--scrollview-image)
- [Page 28 — TextInput & Pressable](#page-28--textinput-pressable)
- [Page 29 — Styling in React Native](#page-29--styling-in-react-native)
- [Page 30 — Inline Styles vs StyleSheet.create](#page-30--inline-styles-vs-stylesheet-create)
- [Page 31 — Common Style Properties](#page-31--common-style-properties)
- [Page 32 — Styling in Practice — Before & After](#page-32--styling-in-practice-before-after)
- [Page 33 — Components and Props](#page-33--components-and-props)
- [Page 34 — Functional Components](#page-34--functional-components)
- [Page 35 — Building a Reusable BugCard Component](#page-35--building-a-reusable-bugcard-component)
- [Page 36 — Working with Props](#page-36--working-with-props)
- [Page 37 — State and Events](#page-37--state-and-events)
- [Page 38 — useState Hook](#page-38--usestate-hook)
- [Page 39 — Handling Events & Controlled Inputs](#page-39--handling-events-controlled-inputs)
- [Page 40 — Conditional Rendering](#page-40--conditional-rendering)
- [Page 41 — Lists and Forms](#page-41--lists-and-forms)
- [Page 42 — FlatList — Performant Lists](#page-42--flatlist-performant-lists)
- [Page 43 — ScrollView vs FlatList — When to Use Which](#page-43--scrollview-vs-flatlist-when-to-use-which)
- [Page 44 — Building Forms with Validation](#page-44--building-forms-with-validation)
- [Page 45 — Navigation with Expo Router](#page-45--navigation-with-expo-router)
- [Page 46 — What is Expo Router?](#page-46--what-is-expo-router)
- [Page 47 — File Structure → Routes](#page-47--file-structure-routes)
- [Page 48 — Navigating Between Screens](#page-48--navigating-between-screens)
- [Page 49 — Dynamic Routes & URL Parameters](#page-49--dynamic-routes-url-parameters)
- [Page 50 — Context API](#page-50--context-api)
- [Page 51 — The Problem: Prop Drilling](#page-51--the-problem-prop-drilling)
- [Page 52 — Context API — The Solution](#page-52--context-api-the-solution)
- [Page 53 — Creating BugContext](#page-53--creating-bugcontext)
- [Page 54 — Using Context in Components](#page-54--using-context-in-components)
- [Page 55 — TanStack Query](#page-55--tanstack-query)
- [Page 56 — What is TanStack Query?](#page-56--what-is-tanstack-query)
- [Page 57 — Why Not Just Use useEffect?](#page-57--why-not-just-use-useeffect)
- [Page 58 — Setting Up TanStack Query](#page-58--setting-up-tanstack-query)
- [Page 59 — useQuery — Fetching Data](#page-59--usequery-fetching-data)
- [Page 60 — useMutation — Creating & Updating Data](#page-60--usemutation-creating-updating-data)
- [Page 61 — TanStack Query — Data Flow](#page-61--tanstack-query-data-flow)
- [Page 62 — Bug Report App — Project](#page-62--bug-report-app-project)
- [Page 63 — Project: Bug Report App](#page-63--project-bug-report-app)
- [Page 64 — Data Model — Bug Object](#page-64--data-model-bug-object)
- [Page 65 — App Architecture](#page-65--app-architecture)
- [Page 66 — Project Folder Structure](#page-66--project-folder-structure)
- [Page 67 — Screen Navigation Flow](#page-67--screen-navigation-flow)
- [Page 68 — Setting Up Providers](#page-68--setting-up-providers)
- [Page 69 — services/bugService.js — Mock Data Layer](#page-69--services-bugservice-js-mock-data-layer)
- [Page 70 — Bug List Screen](#page-70--bug-list-screen)
- [Page 71 — Create & Edit Bug Screens](#page-71--create-edit-bug-screens)
- [Page 72 — Bug Detail Screen & Delete Flow](#page-72--bug-detail-screen-delete-flow)
- [Page 73 — CRUD Lifecycle](#page-73--crud-lifecycle)
- [Page 74 — Project Recap — What We Built](#page-74--project-recap-what-we-built)
- [Page 75 — Summary & Q&A](#page-75--summary-q-a)
- [Page 76 — Key Concepts Learned Today](#page-76--key-concepts-learned-today)
- [Page 77 — What to Learn Next](#page-77--what-to-learn-next)
- [Page 78 — Questions & Answers](#page-78--questions-answers)
- [Page 79 — Appendix — Useful Commands](#page-79--appendix-useful-commands)
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

Introduction to
React Native
with Expo
Build cross-platform mobile apps for Android & iOS


### Visual Explanation

Title slide with the lecture title and subtitle. The visual purpose is to introduce React Native with Expo as a cross-platform Android and iOS development topic.


### Explanation

This slide explains **Title Page**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Short-answer question possible: define or explain **Title Page** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 02 — What We'll Cover Today

### Original Slide Content

1. Mobile Dev Intro — Web vs native, cross-platform concepts
2. React Native Basics — Core components, JSX, Flexbox
3. Expo Setup — Dev environment, first app
4. Components & State — Props, useState, events, forms
5. Navigation — Expo Router file-based routing
6. Context API — Global state without prop drilling
7. TanStack Query — Data fetching, caching, mutations
8. Bug Report App — Full CRUD project bringing it all together


### Visual Explanation

No major visual content.


### Explanation

This slide explains **What We'll Cover Today**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Short-answer question possible: define or explain **What We'll Cover Today** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 03 — Introduction to Mobile Development

### Original Slide Content

SECTION
Introduction to Mobile
Development
Web apps vs mobile apps · Native vs cross-platform


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Introduction to Mobile Development.


### Explanation

This slide starts the section on **Introduction to Mobile Development**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 04 — Web Apps vs Mobile Apps

### Original Slide Content

| Web Apps | Mobile Apps |
|---|---|
| Run in browser | Run on device OS |
| URL-based routing | Installed locally |
| HTML/CSS/JS | Full hardware access |
| Limited device access | App Store / Play Store |
| No app store | Offline capable |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

Web apps are browser-based and URL-driven, while mobile apps are installed on the device and can access more device features. This is the starting reason why mobile frameworks like React Native matter.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Web Apps vs Mobile Apps**.


### Common Mistake

Thinking web apps and mobile apps are the same because both may use JavaScript.


## Page 05 — Native vs Cross-Platform Development

### Original Slide Content

| Platform | Language | Code Sharing | Performance | Dev Speed |
|---|---|---|---|---|
| Native Android | Kotlin / Java | None (Android only) | Excellent | Slower (2 codebases) |
| Native iOS | Swift / ObjC | None (iOS only) | Excellent | Slower (2 codebases) |
| React Native | JavaScript / JSX | ~90% shared code | Very Good | Faster |
| Flutter | Dart | ~95% shared code | Very Good | Fast |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

Native development gives maximum platform performance but requires separate Android and iOS codebases. Cross-platform frameworks reduce duplicated work by sharing most code.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Native vs Cross-Platform Development**.


### Common Mistake

Assuming cross-platform always has identical performance to fully native apps.


## Page 06 — One Codebase → Two Platforms

### Original Slide Content

Your React Native Code
↓
Expo + Metro Bundler
↓
Android Native UI Components + iOS Native UI Components

~90% code shared between platforms


### Visual Explanation

Architecture diagram: React Native code goes into Expo + Metro Bundler, then outputs native UI components for Android and iOS. It explains code sharing across two platforms.


### Explanation

React Native does not create one web page for every phone. The shared JavaScript/JSX code is bundled and connected to real native UI components on each platform.


### Visual/Text Diagram

```text
Your React Native Code
        ↓
Expo + Metro Bundler
   ├── Android → Native UI Components
   └── iOS     → Native UI Components
```


### Exam Tip

Short-answer question possible: define or explain **One Codebase → Two Platforms** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 07 — What is React Native?

### Original Slide Content

SECTION
What is React Native?
Native UI components · JSX · Built on React


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: What is React Native?.


### Explanation

This slide starts the section on **What is React Native?**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 08 — What is React Native?

### Original Slide Content

What is React Native?
Created by Meta (2015)
Open source framework for building native mobile apps using
JavaScript and React
Not a web view
Renders real native UI components — not a browser embedded in
your app
Same React mental model
Components, props, useState, useEffect — all the same concepts
you already know
Large ecosystem
Access to thousands of community libraries and Expo SDK
packages


### Visual Explanation

No major visual content.


### Explanation

React Native is a JavaScript/React framework for native mobile apps. The key exam point is that it is not a WebView; it renders native UI components.


### Exam Tip

Short-answer question possible: define or explain **What is React Native?** using the key terms from this slide.


### Common Mistake

Calling React Native a WebView. The lecture explicitly says it is not a web view.


## Page 09 — React vs React Native

### Original Slide Content

| Concept | React (Web) | React Native |
|---|---|---|
| Renders to | HTML DOM | Native UI Components |
| Root element | `<div>` | `<View>` |
| Text | `<p>`, `<span>` | `<Text>` |
| Styling | CSS / className | StyleSheet / inline objects |
| Navigation | React Router | Expo Router |
| Clicks | onClick | onPress |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

React Native uses the same React thinking model, but the rendered building blocks are different: no DOM, no HTML tags, and no browser CSS class system.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **React vs React Native**.


### Common Mistake

Using HTML tags such as `<div>` or `<p>` inside React Native components.


## Page 10 — HTML Elements → React Native Components

### Original Slide Content

| HTML Element | React Native Component | Purpose |
|---|---|---|
| `<div>` | `<View>` | Container / layout box |
| `<p>` / `<span>` | `<Text>` | All text must use `<Text>` |
| `<button>` | `<Pressable>` | Touchable element |
| `<img>` | `<Image>` | Display images |
| `<input>` | `<TextInput>` | Text input field |
| `<ul>` | `<FlatList>` | Performant list rendering |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This mapping is vital for React web students. In React Native, every visible text must be inside `<Text>`, and layout containers use `<View>`.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **HTML Elements → React Native Components**.


### Common Mistake

Forgetting that all visible text must be inside `<Text>`.


## Page 11 — JSX in React Native

### Original Slide Content

### JSX + StyleSheet Example

```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function HelloScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hello, React Native!
      </Text>
      <Text>Welcome to mobile development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#2563EB' },
});
```

- No HTML tags — use `View`, `Text`, `Image` instead of `div`, `p`, `img`.
- `style` prop — pass a JavaScript object, not a CSS class string.
- `StyleSheet.create` — validates styles and improves performance.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

This slide shows the basic structure of a React Native screen: import native components, return JSX using `<View>` and `<Text>`, and define styles with `StyleSheet.create`.


### Exam Tip

Practical/coding question possible: write or explain the `JSX in React Native` code pattern and identify the role of each important prop/hook.


### Common Mistake

Passing CSS class names instead of JavaScript style objects.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 12 — Why Use Expo?

### Original Slide Content

SECTION
Why Use Expo?
Simplify native development · Expo Go · Faster workflow


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Why Use Expo?.


### Explanation

This slide starts the section on **Why Use Expo?**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 13 — What is Expo?

### Original Slide Content

Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

- Zero Native Config — No need to touch Xcode or Android Studio for basic apps.
- Expo Go App — Test on real devices instantly by scanning a QR code.
- Expo SDK — Pre-built modules for camera, location, notifications, and more.
- EAS Build — Cloud builds for Android APK and iOS IPA without a Mac.


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

Expo reduces setup complexity by providing a managed workflow, Expo Go testing, SDK modules, and EAS cloud build tools.


### Exam Tip

Short-answer question possible: define or explain **What is Expo?** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 14 — Expo vs React Native CLI

### Original Slide Content

| Feature | Expo | React Native CLI |
|---|---|---|
| Setup time | Minutes | Hours |
| Native code | Managed | Manual |
| Xcode required | No (EAS build) | Yes (macOS) |
| Custom modules | Limited | Full control |
| Recommended for | Most apps | Advanced native use |
| Expo Go testing | Yes | No |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This slide explains **Expo vs React Native CLI**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Expo vs React Native CLI**.


### Common Mistake

No major common mistake.


## Page 15 — Expo Go — Test on Real Devices

### Original Slide Content

1. Install Node.js — Download from nodejs.org. LTS version recommended.
2. Create Expo App — `npx create-expo-app my-app` or `npx expo start`.
3. Start Dev Server — `npm start`; exposes a QR code in terminal.
4. Install Expo Go — Download from App Store or Google Play Store.
5. Scan QR Code — Open Expo Go, scan QR, app loads instantly on device.

Slide note: `[Insert screenshot of Expo Go QR scan on phone]`.


### Visual Explanation

Five-step horizontal process diagram: install Node.js, create Expo app, start server, install Expo Go, scan QR code. It shows the complete real-device testing workflow.


### Explanation

This slide explains **Expo Go — Test on Real Devices**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Visual/Text Diagram

```text
Install Node.js → Create Expo App → npm start → Install Expo Go → Scan QR Code
```


### Exam Tip

Short-answer question possible: define or explain **Expo Go — Test on Real Devices** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 16 — Setting Up the Dev Environment

### Original Slide Content

SECTION
Setting Up the Dev Environment
Node.js · VS Code · Android Emulator · Expo CLI


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Setting Up the Dev Environment.


### Explanation

This slide starts the section on **Setting Up the Dev Environment**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 17 — Required Tools

### Original Slide Content

| Tool | Source | Purpose | Requirement |
|---|---|---|---|
| Node.js | nodejs.org | JavaScript runtime — required for npm and Expo CLI | Required |
| VS Code | code.visualstudio.com | Code editor with React Native extensions | Required |
| Expo Go App | App Store / Play Store | Install on your phone for live testing | Required |
| Android Studio | developer.android.com | For Android emulator | Optional |
| Xcode | Mac App Store | iOS simulator | macOS only |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This slide explains **Required Tools**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Required Tools**.


### Common Mistake

No major common mistake.


## Page 18 — Getting Started — Terminal Commands

### Original Slide Content

### Terminal / Shell

```bash
# Step 1: Verify Node.js is installed
node --version
npm --version

# Step 2: Create a new Expo app
npx create-expo-app my-first-app

# Step 3: Navigate into the project
cd my-first-app

# Step 4: Start the development server
npm start
# or: npx expo start
```

- `npx` vs `npm` — `npx` runs packages without global install. No need to install `expo-cli` globally anymore.
- QR Code — After `npm start`, a QR code appears. Scan with Expo Go app on your phone.
- Hot Reload — Save any file and the app updates instantly; no rebuild needed.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

These are the minimum terminal commands needed to create and run a first Expo project. `npx` avoids global CLI installation.


### Exam Tip

Practical/coding question possible: write or explain the `Getting Started — Terminal Commands` code pattern and identify the role of each important prop/hook.


### Common Mistake

Installing old global `expo-cli` unnecessarily instead of using `npx`.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 19 — Testing Options

### Original Slide Content

| Testing Option | Steps | Note |
|---|---|---|
| Physical Device | Install Expo Go → Open Expo Go app → Scan QR from terminal → App loads instantly | Easiest method |
| Android Emulator | Requires Android Studio → Install Android Studio → Create AVD emulator → Press `a` in terminal | Screenshot placeholder |
| iOS Simulator | macOS only → Install Xcode → Press `i` in terminal → Simulator launches | macOS users only |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This slide explains **Testing Options**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Testing Options**.


### Common Mistake

No major common mistake.


## Page 20 — Creating Your First Expo App

### Original Slide Content

SECTION
Creating Your First Expo App
Project structure · app directory · Expo Router


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Creating Your First Expo App.


### Explanation

This slide starts the section on **Creating Your First Expo App**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 21 — create-expo-app

### Original Slide Content

### Terminal

```bash
# Create a new app with the default template
npx create-expo-app my-first-app

# Navigate into your project folder
cd my-first-app

# Start the dev server
npm start
```

### Folder structure

```text
# What gets created:
my-first-app/
├── app/              ← Screens (Expo Router)
│   ├── (tabs)/       ← Tab layout group
│   │   ├── index.tsx
│   │   └── explore.tsx
│   └── _layout.tsx   ← Root layout
├── assets/           ← Images, fonts
├── components/       ← Reusable components
├── package.json
└── app.json          ← App config
```

- `app.json` — App name, version, icon, splash screen configuration.
- `package.json` — Dependencies and npm scripts.
- `app/_layout.tsx` — Root layout; wraps all screens with providers.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

The `app/` directory is central because Expo Router turns files into routes. `_layout.tsx` wraps screens and is where providers are commonly placed.


### Exam Tip

Practical/coding question possible: write or explain the `create-expo-app` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 22 — Project Folder Structure

### Original Slide Content

```text
my-first-app/
├── app/                         Root app directory — all files become routes
│   ├── _layout.tsx              Root layout wraps entire app
│   └── (tabs)/                  Tab group with tab bar navigation
│       ├── _layout.tsx
│       ├── index.tsx            Home screen (index = '/')
│       └── explore.tsx          Second tab screen
├── assets/
│   └── images/                  Static assets: icons, splash, fonts
├── components/                  Shared UI components
├── constants/
├── package.json
└── app.json
```


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

This slide explains **Project Folder Structure**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Visual/Text Diagram

```text
my-first-app/
├── app/                         Root app directory — all files become routes
│   ├── _layout.tsx              Root layout wraps entire app
│   └── (tabs)/                  Tab group with tab bar navigation
│       ├── _layout.tsx
│       ├── index.tsx            Home screen (index = '/')
│       └── explore.tsx          Second tab screen
├── assets/
│   └── images/                  Static assets: icons, splash, fonts
├── components/                  Shared UI components
├── constants/
├── package.json
└── app.json
```


### Exam Tip

Short-answer question possible: define or explain **Project Folder Structure** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 23 — Running Your App

### Original Slide Content

```bash
npm start

# Terminal output:
› Metro waiting on exp://192.168.1.5:8081
› Scan the QR code above with Expo Go (Android)
› or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web
› Press r │ reload app
› Press j │ open debugger
```

- Fast Refresh — Changes appear instantly without losing app state.
- Shake to Debug — Shake device to open the Expo dev menu.
- Network Tab — Inspector shows API calls and performance.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

This slide explains **Running Your App**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Practical/coding question possible: write or explain the `Running Your App` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 24 — React Native Basics

### Original Slide Content

SECTION
React Native Basics
Core components · Flexbox layout · View · Text · Image


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: React Native Basics.


### Explanation

This slide starts the section on **React Native Basics**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 25 — Core Components

### Original Slide Content

| Component | Meaning | Key Point |
|---|---|---|
| `<View>` | Container element like `<div>` | Used for layout and grouping |
| `<Text>` | Displays text | Required for all text; supports styling and nesting |
| `<Image>` | Displays local or remote images | Requires `source` prop |
| `<ScrollView>` | Scrollable container | Wraps content that overflows |
| `<TextInput>` | Text input field | Use `value` + `onChangeText` |
| `<Pressable>` | Touchable element | Use instead of Button for custom styling |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

Core components are the basic UI vocabulary of React Native. Know what each component does and which web element it roughly replaces.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Core Components**.


### Common Mistake

Writing plain text directly inside `<View>` without `<Text>`.


## Page 26 — Flexbox Layout in React Native

### Original Slide Content

### Flexbox Example

```jsx
<View style={{ flex: 1, flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center' }}>
  <Text>I am centered!</Text>
</View>

// flexDirection: 'row' → horizontal layout
// justifyContent: 'space-between' | 'flex-start' | 'center'
// alignItems: 'stretch' | 'flex-start' | 'center'
```

Visual labels shown:
- `flexDirection: 'column'` with Box 1, Box 2, Box 3 stacked vertically.
- `justifyContent: 'center'` shows vertical centering.
- `flexDirection: 'row'` shows A, B, C arranged horizontally.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Flexbox controls layout. `flexDirection` controls main axis direction, `justifyContent` positions along the main axis, and `alignItems` positions along the cross axis.


### Visual/Text Diagram

```text
column layout: Box 1
               Box 2
               Box 3

row layout:    A → B → C
```


### Exam Tip

Practical/coding question possible: write or explain the `Flexbox Layout in React Native` code pattern and identify the role of each important prop/hook.


### Common Mistake

Mixing up `justifyContent` and `alignItems` axes.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 27 — ScrollView & Image

### Original Slide Content

### ScrollView + Image

```javascript
import { ScrollView, Image, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView>
      <Image
        source={{ uri: 'https://example.com/avatar.jpg' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>John Doe</Text>
      <Text>Software Engineer</Text>
      {/* More content... */}
    </ScrollView>
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

This slide explains **ScrollView & Image**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Practical/coding question possible: write or explain the `ScrollView & Image` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 28 — TextInput & Pressable

### Original Slide Content

### TextInput + Pressable

```javascript
const [name, setName] = useState('');

// Controlled TextInput
<TextInput
  value={name}
  onChangeText={setName}
  placeholder="Enter your name"
  style={{ borderWidth: 1, padding: 10 }}
/>

// Pressable with feedback
<Pressable
  onPress={() => console.log('Pressed!')}
  style={({ pressed }) => ({
    backgroundColor: pressed ? '#1D4ED8' : '#2563EB',
    padding: 12,
    borderRadius: 8,
  })}
>
  <Text style={{ color: 'white' }}>Submit</Text>
</Pressable>
```

- Controlled Input — Always use `value` + `onChangeText` together.
- Pressable style function — receives `{ pressed }` to create feedback effects.
- KeyboardAvoidingView — wrap forms to stop keyboard hiding inputs.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Controlled inputs keep the input value in React state. `Pressable` is preferred for custom touch feedback because it exposes the pressed state.


### Exam Tip

Practical/coding question possible: write or explain the `TextInput & Pressable` code pattern and identify the role of each important prop/hook.


### Common Mistake

Using `TextInput` without binding both `value` and `onChangeText`.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 29 — Styling in React Native

### Original Slide Content

SECTION
Styling in React Native
StyleSheet.create · Inline styles · Reusable styles


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Styling in React Native.


### Explanation

This slide starts the section on **Styling in React Native**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 30 — Inline Styles vs StyleSheet.create

### Original Slide Content

### Inline vs StyleSheet

```jsx
// Inline style — works but messy
<View style={{ flex: 1, backgroundColor: '#F3F4F6',
                padding: 20, borderRadius: 8 }}>
  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
    Hello
  </Text>
</View>

// StyleSheet.create — recommended
<View style={styles.container}>
  <Text style={styles.heading}>Hello</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
    borderRadius: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
});
```

- Performance — StyleSheet styles are validated once at startup, not on every render.
- Autocomplete — TypeScript and IDEs provide better hints with `StyleSheet.create`.
- Reusability — Style objects can be referenced multiple times across components.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Inline styles work, but reusable StyleSheet objects are cleaner, more maintainable, and better supported by tooling.


### Exam Tip

Practical/coding question possible: write or explain the `Inline Styles vs StyleSheet.create` code pattern and identify the role of each important prop/hook.


### Common Mistake

Letting large inline style blocks make components messy and hard to reuse.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 31 — Common Style Properties

### Original Slide Content

| Category | Properties |
|---|---|
| Layout | `flex`, `flexDirection`, `justifyContent`, `alignItems`, `padding`, `margin`, `width`, `height` |
| Colors | `backgroundColor`, `color` text only, `borderColor` |
| Text | `fontSize`, `fontWeight`, `fontFamily`, `textAlign`, `letterSpacing`, `lineHeight` |
| Borders | `borderWidth`, `borderRadius`, `borderStyle`, `borderColor` |
| Shadows | `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius` iOS; `elevation` Android |
| Position | `position: 'absolute' | 'relative'`, `top`, `left`, `right`, `bottom`, `zIndex` |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This slide explains **Common Style Properties**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Common Style Properties**.


### Common Mistake

No major common mistake.


## Page 32 — Styling in Practice — Before & After

### Original Slide Content

### Before and After

- Unstyled card: `Login button not working`, `Open`.
- Styled card: `Login button not working`, blue `Open` badge, `Reported 2h ago`.

### BugCard styles

```javascript
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3, // Android shadow
  },
  title: { fontSize: 16, fontWeight: '600', color: '#111827' },
  badge: { backgroundColor: '#2563EB', borderRadius: 12,
           paddingHorizontal: 10, paddingVertical: 3 },
  badgeText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
});
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

This slide explains **Styling in Practice — Before & After**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Practical/coding question possible: write or explain the `Styling in Practice — Before & After` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 33 — Components and Props

### Original Slide Content

SECTION
Components and Props
Functional components · Reusability · Props


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Components and Props.


### Explanation

This slide starts the section on **Components and Props**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 34 — Functional Components

### Original Slide Content

### Functional Component

```jsx
// A simple functional component
function Greeting({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
    </View>
  );
}

// Usage
<Greeting name="Rusiru" />
<Greeting name="Alice" />
<Greeting name="Bob" />
```

- Props — properties passed into a component. They are read-only.
- Default Export — Screens must use `export default`. Reusable components can use named exports.
- TypeScript — Define prop types with interfaces for better autocomplete and error detection.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

A functional component is a reusable function that returns UI. Props make the component flexible, but props should not be changed by the child component.


### Exam Tip

Practical/coding question possible: write or explain the `Functional Components` code pattern and identify the role of each important prop/hook.


### Common Mistake

Trying to mutate props inside a child component.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 35 — Building a Reusable BugCard Component

### Original Slide Content

### BugCard Component

```jsx
function BugCard({ title, status, description }) {
  const badgeColor = status === 'Open' ? '#2563EB'
    : status === 'In Progress' ? '#D97706' : '#16A34A';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, { backgroundColor: badgeColor }]}> 
          <Text style={styles.badgeText}>{status}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

// Usage
<BugCard
  title="Login button not working"
  status="Open"
  description="Clicking login does nothing"
/>
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

This slide explains **Building a Reusable BugCard Component**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Practical/coding question possible: write or explain the `Building a Reusable BugCard Component` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 36 — Working with Props

### Original Slide Content

### Props + Callbacks

```jsx
// Parent component passes data and callbacks
function BugListScreen() {
  const handlePress = (id) => {
    router.push(`/bugs/${id}`);
  };

  return (
    <View>
      <BugCard
        title="Login issue"
        status="Open"
        onPress={() => handlePress('1')} // callback prop
      />
    </View>
  );
}

// Child receives and calls the callback
function BugCard({ title, status, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}
```

- Unidirectional — Data flows down; callbacks flow up. Never mutate props directly.
- Destructuring — Use `{ title, status }` in function parameters instead of `props.title`.
- Default Props — Set defaults such as `function Card({ color = 'blue' })`.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Callbacks allow a child component to notify the parent about user actions. This preserves React’s one-way data flow.


### Exam Tip

Practical/coding question possible: write or explain the `Working with Props` code pattern and identify the role of each important prop/hook.


### Common Mistake

Forgetting that data flows down and callbacks flow up.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 37 — State and Events

### Original Slide Content

SECTION
State and Events
useState · onPress · Controlled inputs · Conditional rendering


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: State and Events.


### Explanation

This slide starts the section on **State and Events**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 38 — useState Hook

### Original Slide Content

### useState Example

```javascript
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function CounterScreen() {
  // [currentValue, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable onPress={() => setCount(0)}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}
```

Rules:
1. Always call hooks at the top level — never inside loops or conditions.
2. State updates are asynchronous — do not read state immediately after setting.
3. Use functional updates when new state depends on old: `setCount(prev => prev + 1)`.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

`useState` stores component-level changing data. It returns the current value and a setter function.


### Exam Tip

Practical/coding question possible: write or explain the `useState Hook` code pattern and identify the role of each important prop/hook.


### Common Mistake

Calling hooks inside conditions or loops.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 39 — Handling Events & Controlled Inputs

### Original Slide Content

### Form with State

```javascript
export default function AddBugForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      alert('Title is required!');
      return;
    }
    console.log({ title, description });
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={title}
        onChangeText={setTitle} // ← fires on every keystroke
        placeholder="Bug title"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Describe the bug"
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Pressable onPress={handleSave}>
        <Text>Save Bug</Text>
      </Pressable>
    </View>
  );
}
```

- `onChangeText` receives the new string value automatically; no `event.target.value` needed.
- `multiline` with `numberOfLines` gives textarea-like behavior.
- Validate before saving: empty strings and length limits.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Forms in React Native use `TextInput`, state variables, and handlers. Validation should happen before saving invalid data.


### Exam Tip

Practical/coding question possible: write or explain the `Handling Events & Controlled Inputs` code pattern and identify the role of each important prop/hook.


### Common Mistake

Using web-style `event.target.value` instead of `onChangeText`.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 40 — Conditional Rendering

### Original Slide Content

### Conditional Rendering Patterns

```jsx
const [isLoading, setIsLoading] = useState(true);
const [bugs, setBugs] = useState([]);

// Pattern 1: Ternary operator
{isLoading ? (
  <ActivityIndicator size="large" color="#2563EB" />
) : (
  <BugList bugs={bugs} />
)}

// Pattern 2: Short circuit (&&)
{bugs.length === 0 && (
  <Text>No bugs reported yet! </Text>
)}

// Pattern 3: Variable
let content;
if (isLoading) content = <ActivityIndicator />;
else if (bugs.length === 0) content = <EmptyState />;
else content = <BugList bugs={bugs} />;

return <View>{content}</View>;
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Conditional rendering decides what UI appears for different states, such as loading, empty, or loaded data.


### Exam Tip

Practical/coding question possible: write or explain the `Conditional Rendering` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 41 — Lists and Forms

### Original Slide Content

SECTION
Lists and Forms
FlatList · Key extractor · Forms · Validation


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Lists and Forms.


### Explanation

This slide starts the section on **Lists and Forms**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 42 — FlatList — Performant Lists

### Original Slide Content

### FlatList Example

```jsx
const bugs = [
  { id: '1', title: 'Login issue', status: 'Open' },
  { id: '2', title: 'Dark mode crash', status: 'In Progress' },
  { id: '3', title: 'Slow load', status: 'Closed' },
];

<FlatList
  data={bugs} // ← array of items
  keyExtractor={(item) => item.id} // ← unique key for each item
  renderItem={({ item }) => ( // ← renders each item
    <BugCard
      title={item.title}
      status={item.status}
    />
  )}
  ItemSeparatorComponent={() => ( // ← separator between items
    <View style={{ height: 8 }} />
  )}
  ListEmptyComponent={() => ( // ← shown when data is empty
    <Text>No bugs found!</Text>
  )}
  contentContainerStyle={{ padding: 16 }}
/>
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

`FlatList` is designed for efficient lists. It renders items using `renderItem` and requires stable keys via `keyExtractor`.


### Exam Tip

Practical/coding question possible: write or explain the `FlatList — Performant Lists` code pattern and identify the role of each important prop/hook.


### Common Mistake

Using array index as key when stable IDs are available.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 43 — ScrollView vs FlatList — When to Use Which

### Original Slide Content

| Feature | ScrollView | FlatList |
|---|---|---|
| Virtualization | No — renders all | Yes — renders visible only |
| Performance | Poor with many items | Excellent |
| Item separator | Manual | ItemSeparatorComponent |
| Empty state | Manual conditional | ListEmptyComponent |
| Pull to refresh | Manual | onRefresh + refreshing |
| Best for | < 20 static items | Dynamic lists, API data |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

Use `ScrollView` for small static content. Use `FlatList` for dynamic or large lists because it virtualizes rows.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **ScrollView vs FlatList — When to Use Which**.


### Common Mistake

Using ScrollView for large dynamic API lists.


## Page 44 — Building Forms with Validation

### Original Slide Content

### Form Validation

```javascript
export default function CreateBugScreen() {
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (title.length > 100) newErrors.title = 'Max 100 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // proceed with save...
  };

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle}
        placeholder="Bug title *" />
      {errors.title && (
        <Text style={{ color: 'red' }}>{errors.title}</Text>
      )}
      <Pressable onPress={handleSubmit}>
        <Text>Submit Bug</Text>
      </Pressable>
    </View>
  );
}
```

- Validate on Submit — Run validation when the user presses submit, not on every keystroke.
- Show Errors Inline — Display error messages directly below the field.
- Disable Button — Add `disabled` while submitting to prevent double-submit.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

This slide explains **Building Forms with Validation**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Practical/coding question possible: write or explain the `Building Forms with Validation` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 45 — Navigation with Expo Router

### Original Slide Content

SECTION
Navigation with Expo Router
File-based routing · Screens · Dynamic routes · Params


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Navigation with Expo Router.


### Explanation

This slide starts the section on **Navigation with Expo Router**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 46 — What is Expo Router?

### Original Slide Content

Every file inside the `app/` directory automatically becomes a route. No configuration needed.

- File-based routing — Create `app/settings.tsx` → route `/settings` is live instantly.
- Nested navigation — Create folders for nested routes: `app/bugs/index.tsx` → `/bugs`.
- Dynamic routes — Use `[id].tsx` for dynamic segments: `app/bugs/[id].tsx` → `/bugs/123`.
- Layouts — `_layout.tsx` files wrap sibling routes with shared UI such as header or tab bar.
- Deep linking — Expo Router automatically handles deep links from URLs and notifications.
- Web support — Same code works on web with proper URL routing.


### Visual Explanation

No major visual content.


### Explanation

Expo Router removes manual route configuration. The folder and file names directly define the navigation paths.


### Exam Tip

Short-answer question possible: define or explain **What is Expo Router?** using the key terms from this slide.


### Common Mistake

Manually configuring routes while ignoring Expo Router file-based routing.


## Page 47 — File Structure → Routes

### Original Slide Content

| File Structure | Route Generated | Meaning |
|---|---|---|
| `app/index.tsx` | `/` | Home screen |
| `app/bugs/index.tsx` | `/bugs` | Bug list |
| `app/bugs/create.tsx` | `/bugs/create` | Add bug form |
| `app/bugs/[id].tsx` | `/bugs/[id]` | Bug detail dynamic route |
| `app/settings.tsx` | `/settings` | Settings screen |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This slide explains **File Structure → Routes**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Visual/Text Diagram

```text
app/index.tsx          → /
app/bugs/index.tsx     → /bugs
app/bugs/create.tsx    → /bugs/create
app/bugs/[id].tsx      → /bugs/[id]
app/settings.tsx       → /settings
```


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **File Structure → Routes**.


### Common Mistake

No major common mistake.


## Page 48 — Navigating Between Screens

### Original Slide Content

### Navigation Methods

```javascript
import { router, Link } from 'expo-router';

// Method 1: Imperative — use in event handlers
const handleCreate = async () => {
  await saveBug(formData);
  router.push('/bugs'); // navigate to /bugs
  router.replace('/bugs'); // replace (no back button)
  router.back(); // go back
};

// Method 2: Declarative — use in JSX
<Link href="/bugs" style={styles.link}>
  <Text>View All Bugs</Text>
</Link>

// Navigate with params
router.push(`/bugs/${bug.id}`);

// Or as object
router.push({
  pathname: '/bugs/[id]',
  params: { id: bug.id }
});
```

- `router.push()` adds screen to stack; user can press back.
- `router.replace()` replaces current screen; use after login or when no back navigation is needed.
- `router.back()` goes back to previous screen in the stack.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Navigation can be imperative with `router.push`, `router.replace`, and `router.back`, or declarative with `<Link>`.


### Exam Tip

Practical/coding question possible: write or explain the `Navigating Between Screens` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 49 — Dynamic Routes & URL Parameters

### Original Slide Content

### app/bugs/[id].tsx

```javascript
// File: app/bugs/[id].tsx
import { useLocalSearchParams } from 'expo-router';

export default function BugDetailScreen() {
  // Reads the [id] from the URL: /bugs/42 → id = '42'
  const { id } = useLocalSearchParams();

  // Use id to fetch the specific bug
  const { data: bug, isLoading } = useQuery({
    queryKey: ['bug', id],
    queryFn: () => fetchBugById(id),
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <View>
      <Text>{bug.title}</Text>
      <Text>{bug.description}</Text>
    </View>
  );
}
```

Route Flow: Home `/` → Bug List `/bugs` → Bug Detail `/bugs/[id]` → Edit Bug `/bugs/[id]/edit`.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

Dynamic routes use bracket file names like `[id].tsx`. The route parameter is read with `useLocalSearchParams`.


### Visual/Text Diagram

```text
Home / → Bug List /bugs → Bug Detail /bugs/[id] → Edit Bug /bugs/[id]/edit
```


### Exam Tip

Practical/coding question possible: write or explain the `Dynamic Routes & URL Parameters` code pattern and identify the role of each important prop/hook.


### Common Mistake

Forgetting to read `[id]` using `useLocalSearchParams()`.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 50 — Context API

### Original Slide Content

SECTION
Context API
Global state · Avoid prop drilling · useContext


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Context API.


### Explanation

This slide starts the section on **Context API**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 51 — The Problem: Prop Drilling

### Original Slide Content

```text
App
(has bugs state)
↓ passes bugs as prop
BugsScreen
↓ passes bugs as prop
BugList
↓ passes bugs as prop
BugCard
(needs bugs!)
```

Problems with prop drilling:
- BugsScreen and BugList do not need bugs — they just pass it along.
- Adding new props requires changing every layer.
- Hard to maintain as the app grows.
- Tight coupling between unrelated components.


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

Prop drilling becomes weak architecture when intermediate components pass data they do not use. It creates maintenance pain.


### Visual/Text Diagram

```text
App
(has bugs state)
↓ passes bugs as prop
BugsScreen
↓ passes bugs as prop
BugList
↓ passes bugs as prop
BugCard
(needs bugs!)
```

Problems with prop drilling:
- BugsScreen and BugList do not need bugs — they just pass it along.
- Adding new props requires changing every layer.
- Hard to maintain as the app grows.
- Tight coupling between unrelated components.


### Exam Tip

Short-answer question possible: define or explain **The Problem: Prop Drilling** using the key terms from this slide.


### Common Mistake

Passing props through many components even when those components do not need them.


## Page 52 — Context API — The Solution

### Original Slide Content

```text
BugProvider (wraps entire app)
├── BugsScreen   → useContext(BugContext)
├── HomeScreen   → useContext(BugContext)
├── BugCard      → useContext(BugContext)
├── CreateForm   → useContext(BugContext)
├── EditModal    → useContext(BugContext)
└── Settings     → useContext(BugContext)
```

Any component directly accesses context — no prop drilling.


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

Context lets components access shared data directly from a provider, avoiding unnecessary prop chains.


### Visual/Text Diagram

```text
BugProvider (wraps entire app)
├── BugsScreen   → useContext(BugContext)
├── HomeScreen   → useContext(BugContext)
├── BugCard      → useContext(BugContext)
├── CreateForm   → useContext(BugContext)
├── EditModal    → useContext(BugContext)
└── Settings     → useContext(BugContext)
```

Any component directly accesses context — no prop drilling.


### Exam Tip

Short-answer question possible: define or explain **Context API — The Solution** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 53 — Creating BugContext

### Original Slide Content

### context/BugContext.jsx

```javascript
// context/BugContext.jsx
import { createContext, useContext, useState } from 'react';

// 1. Create the context
const BugContext = createContext(null);

// 2. Create the Provider component
export function BugProvider({ children }) {
  const [bugs, setBugs] = useState([]);

  const addBug = (newBug) => {
    setBugs(prev => [...prev, { ...newBug, id: Date.now().toString() }]);
  };

  const deleteBug = (id) => {
    setBugs(prev => prev.filter(bug => bug.id !== id));
  };

  return (
    <BugContext.Provider value={{ bugs, addBug, deleteBug }}>
      {children}
    </BugContext.Provider>
  );
}

// 3. Custom hook for easy consumption
export function useBugs() {
  return useContext(BugContext);
}
```

- Step 1 — `createContext()` creates the context object with a default value.
- Step 2 — Provider component holds state and exposes it through the `value` prop.
- Step 3 — Custom hook wraps `useContext` for a clean API: `useBugs()`.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

A Context setup has three parts: create the context, wrap the app with a Provider, and consume it using a custom hook.


### Exam Tip

Practical/coding question possible: write or explain the `Creating BugContext` code pattern and identify the role of each important prop/hook.


### Common Mistake

Creating context but forgetting to wrap the app with its Provider.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 54 — Using Context in Components

### Original Slide Content

### Using Context

```javascript
// app/_layout.tsx — Wrap app with Provider
import { BugProvider } from '../context/BugContext';

export default function RootLayout() {
  return (
    <BugProvider>
      <Slot />
    </BugProvider>
  );
}

// app/bugs/index.jsx — Consume context
import { useBugs } from '../../context/BugContext';

export default function BugListScreen() {
  const { bugs, deleteBug } = useBugs();

  return (
    <FlatList
      data={bugs}
      renderItem={({ item }) => (
        <BugCard
          {...item}
          onDelete={() => deleteBug(item.id)}
        />
      )}
    />
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

This slide explains **Using Context in Components**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Practical/coding question possible: write or explain the `Using Context in Components` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 55 — TanStack Query

### Original Slide Content

SECTION
TanStack Query
Data fetching · Caching · useQuery · useMutation


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: TanStack Query.


### Explanation

This slide starts the section on **TanStack Query**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 56 — What is TanStack Query?

### Original Slide Content

TanStack Query gives declarative, always-up-to-date, auto-managed queries and mutations.

- Automatic Caching — Results are cached automatically; navigating back shows cached data instantly.
- Background Refetch — Data auto-refreshes when window is focused or network reconnects.
- Loading States — `isLoading`, `isFetching`, `isError` are available out of the box.
- Mutations — `useMutation` handles POST/PUT/DELETE with optimistic updates and error handling.
- Query Invalidation — Refetch related queries after mutation, for example refresh list after adding item.
- React Native Ready — Works in React Native apps with no extra configuration.


### Visual Explanation

No major visual content.


### Explanation

TanStack Query manages server state: caching, loading states, errors, refetching, and mutations. This is cleaner than manually wiring useEffect for API data.


### Exam Tip

Short-answer question possible: define or explain **What is TanStack Query?** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 57 — Why Not Just Use useEffect?

### Original Slide Content

### useEffect vs useQuery

```javascript
// useEffect approach — lots of boilerplate
const [bugs, setBugs] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true);
  fetch('/api/bugs')
    .then(r => r.json())
    .then(data => { setBugs(data); setIsLoading(false); })
    .catch(err => { setError(err); setIsLoading(false); });
}, []); // No caching, no refetch, no deduplication!

// TanStack Query — clean and powerful
const { data: bugs, isLoading, error } = useQuery({
  queryKey: ['bugs'],
  queryFn: () => fetch('/api/bugs').then(r => r.json()),
  // Automatically: caches, refetches, deduplicates, handles errors
});
```

Problems with only `useEffect`:
- No Caching — re-fetches every time the component mounts.
- Race Conditions — rapid requests may arrive out of order and show stale data.
- No Deduplication — multiple components can cause duplicate requests.


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

`useEffect` can fetch data, but it becomes boilerplate-heavy and lacks built-in caching, deduplication, and refetch logic.


### Exam Tip

Practical/coding question possible: write or explain the `Why Not Just Use useEffect?` code pattern and identify the role of each important prop/hook.


### Common Mistake

Using `useEffect` for every server-state problem and rebuilding caching manually.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 58 — Setting Up TanStack Query

### Original Slide Content

### Terminal

```bash
# Install TanStack Query
npm install @tanstack/react-query
```

### app/_layout.tsx

```javascript
// app/_layout.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BugProvider } from '../context/BugContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2, // retry failed requests twice
    },
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <BugProvider>
        <Slot />
      </BugProvider>
    </QueryClientProvider>
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

TanStack Query must be installed and the app wrapped with `QueryClientProvider` so hooks can access the query client.


### Exam Tip

Practical/coding question possible: write or explain the `Setting Up TanStack Query` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 59 — useQuery — Fetching Data

### Original Slide Content

### useQuery

```javascript
import { useQuery } from '@tanstack/react-query';

// services/bugService.js
export const fetchBugs = async () => {
  const response = await fetch('https://api.example.com/bugs');
  if (!response.ok) throw new Error('Failed to fetch bugs');
  return response.json();
};

// In your screen component
export default function BugListScreen() {
  const {
    data: bugs = [], // the fetched data
    isLoading, // true on first load
    isFetching, // true on background refetch
    error, // Error object if failed
    refetch, // manually trigger refetch
  } = useQuery({
    queryKey: ['bugs'], // unique cache key
    queryFn: fetchBugs, // async function
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return <FlatList data={bugs} ... />;
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

`useQuery` is used for reading data. The `queryKey` identifies the cached data and `queryFn` fetches it.


### Exam Tip

Practical/coding question possible: write or explain the `useQuery — Fetching Data` code pattern and identify the role of each important prop/hook.


### Common Mistake

Using non-unique or unstable query keys.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 60 — useMutation — Creating & Updating Data

### Original Slide Content

### useMutation

```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function CreateBugScreen() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (newBug) =>
      fetch('/api/bugs', {
        method: 'POST',
        body: JSON.stringify(newBug),
        headers: { 'Content-Type': 'application/json' },
      }).then(r => r.json()),

    onSuccess: () => {
      // Refetch the bugs list after creating
      queryClient.invalidateQueries({ queryKey: ['bugs'] });
      router.back();
    },
    onError: (error) => {
      alert(`Failed: ${error.message}`);
    },
  });

  const handleSubmit = () => {
    createMutation.mutate({ title, description, status: 'Open' });
  };

  return (
    <Pressable onPress={handleSubmit}
      disabled={createMutation.isPending}>
      <Text>{createMutation.isPending ? 'Saving...' : 'Save Bug'}</Text>
    </Pressable>
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

`useMutation` is used for creating, updating, or deleting data. After success, invalidate related queries so the UI refreshes.


### Exam Tip

Practical/coding question possible: write or explain the `useMutation — Creating & Updating Data` code pattern and identify the role of each important prop/hook.


### Common Mistake

Forgetting to invalidate queries after a mutation.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 61 — TanStack Query — Data Flow

### Original Slide Content

```text
API /api/bugs
    ↓ response
TanStack Query Cache
    ↓ instant data
UI Component

Background refetch happens when staleTime is exceeded.
```

- Instant navigation — Cached data shows immediately on screen visit.
- Background sync — Fresh data loads silently without spinner.
- Optimistic UI — Show changes before server confirms.


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

The data-flow model is: API response enters cache, UI reads from cache, stale data refetches in the background.


### Visual/Text Diagram

```text
API /api/bugs
    ↓ response
TanStack Query Cache
    ↓ instant data
UI Component

Background refetch happens when staleTime is exceeded.
```

- Instant navigation — Cached data shows immediately on screen visit.
- Background sync — Fresh data loads silently without spinner.
- Optimistic UI — Show changes before server confirms.


### Exam Tip

Short-answer question possible: define or explain **TanStack Query — Data Flow** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 62 — Bug Report App — Project

### Original Slide Content

SECTION
Bug Report App — Project
Full CRUD App · Expo Router · Context · TanStack Query


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Bug Report App — Project.


### Explanation

This slide starts the section on **Bug Report App — Project**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 63 — Project: Bug Report App

### Original Slide Content

Tech Stack: Expo Router + Context API + TanStack Query + Mock API

| Feature | Description |
|---|---|
| View Bugs | FlatList of all reported bugs with status badges |
| Create Bug | Form with title, description, and status picker |
| Edit Bug | Pre-filled form to update existing bug details |
| Delete Bug | Swipe or button to delete with confirmation |
| Bug Detail | Full detail screen with all bug information |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

The Bug Report App combines the lecture concepts into one CRUD application: list, create, edit, delete, and detail screens.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Project: Bug Report App**.


### Common Mistake

No major common mistake.


## Page 64 — Data Model — Bug Object

### Original Slide Content

### Bug Data Model

```javascript
// The Bug data model
{
  id: "1", // Unique identifier
  title: "Login button not working", // Bug title (required)
  description: "When clicking the login button, nothing happens. No error shown to user.", // Detailed description
  status: "Open" // "Open" | "In Progress" | "Closed"
}

// Status options
const STATUS_OPTIONS = ['Open', 'In Progress', 'Closed'];

// Status colors for badges
const STATUS_COLORS = {
  'Open': '#2563EB', // Blue
  'In Progress': '#D97706', // Amber
  'Closed': '#16A34A', // Green
};
```

| Field | Type | Meaning |
|---|---|---|
| `id` | string | unique key |
| `title` | string | required |
| `description` | string | optional |
| `status` | enum | Open / In Progress / Closed |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

The Bug object needs a stable `id`, a required title, optional description, and status values that map to badge colors.


### Exam Tip

Practical/coding question possible: write or explain the `Data Model — Bug Object` code pattern and identify the role of each important prop/hook.


### Common Mistake

Not matching status values exactly: `Open`, `In Progress`, `Closed`.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 65 — App Architecture

### Original Slide Content

```text
UI Layer — Screens
Home | Bug List | Bug Detail | Create Bug | Edit Bug

State Layer — Context API + TanStack Query
BugProvider | QueryClient | useQuery | useMutation

Data Layer — services/bugService.js (Mock API)
fetchBugs() | createBug() | updateBug() | deleteBug()
```


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

The architecture separates UI screens, state/data-fetching logic, and service functions. This separation makes the app easier to maintain.


### Visual/Text Diagram

```text
UI Layer — Screens
Home | Bug List | Bug Detail | Create Bug | Edit Bug

State Layer — Context API + TanStack Query
BugProvider | QueryClient | useQuery | useMutation

Data Layer — services/bugService.js (Mock API)
fetchBugs() | createBug() | updateBug() | deleteBug()
```


### Exam Tip

Short-answer question possible: define or explain **App Architecture** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 66 — Project Folder Structure

### Original Slide Content

```text
bug-report-app/
├── app/                         Root layout wraps app with providers
│   ├── _layout.tsx              Home screen / entry point
│   ├── index.tsx
│   └── bugs/                    Bug section screens
│       ├── _layout.tsx          Bug section layout
│       ├── index.tsx            Bug list screen
│       ├── create.tsx           Create bug form
│       └── [id].tsx             Bug detail screen
├── context/                     Global state management
│   └── BugContext.jsx           BugContext + useBugs hook
├── services/                    API service functions
│   └── bugService.js            Mock API: CRUD functions
└── components/                  Reusable UI components
    ├── BugCard.jsx
    └── StatusBadge.jsx
```


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

This slide explains **Project Folder Structure**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Visual/Text Diagram

```text
bug-report-app/
├── app/                         Root layout wraps app with providers
│   ├── _layout.tsx              Home screen / entry point
│   ├── index.tsx
│   └── bugs/                    Bug section screens
│       ├── _layout.tsx          Bug section layout
│       ├── index.tsx            Bug list screen
│       ├── create.tsx           Create bug form
│       └── [id].tsx             Bug detail screen
├── context/                     Global state management
│   └── BugContext.jsx           BugContext + useBugs hook
├── services/                    API service functions
│   └── bugService.js            Mock API: CRUD functions
└── components/                  Reusable UI components
    ├── BugCard.jsx
    └── StatusBadge.jsx
```


### Exam Tip

Short-answer question possible: define or explain **Project Folder Structure** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 67 — Screen Navigation Flow

### Original Slide Content

```text
Home Screen /
    ↓ router.push('/bugs')
Bug List /bugs
    ├── router.push('/bugs/' + id) → Bug Detail /bugs/[id] → Edit Bug /bugs/[id]/edit
    └── router.push('/bugs/create') → Create Bug /bugs/create

After save: router.back()
```


### Visual Explanation

The slide includes a diagram/card layout that groups related ideas visually. The relationships are described in the notes and converted into text/table form where useful.


### Explanation

This slide explains **Screen Navigation Flow**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Visual/Text Diagram

```text
Home Screen /
    ↓ router.push('/bugs')
Bug List /bugs
    ├── router.push('/bugs/' + id) → Bug Detail /bugs/[id] → Edit Bug /bugs/[id]/edit
    └── router.push('/bugs/create') → Create Bug /bugs/create

After save: router.back()
```


### Exam Tip

Short-answer question possible: define or explain **Screen Navigation Flow** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 68 — Setting Up Providers

### Original Slide Content

### app/_layout.tsx

```javascript
// app/_layout.tsx
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BugProvider } from '../context/BugContext';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <BugProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: 'Bug Reporter' }}
          />
          <Stack.Screen
            name="bugs/index"
            options={{ title: 'All Bugs' }}
          />
          <Stack.Screen
            name="bugs/create"
            options={{ title: 'Report a Bug' }}
          />
          <Stack.Screen
            name="bugs/[id]"
            options={{ title: 'Bug Detail' }}
          />
        </Stack>
      </BugProvider>
    </QueryClientProvider>
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

The root layout is where app-wide providers and stack screens are configured. This is the practical wiring point of the app.


### Exam Tip

Practical/coding question possible: write or explain the `Setting Up Providers` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 69 — services/bugService.js — Mock Data Layer

### Original Slide Content

### services/bugService.js

```javascript
// services/bugService.js
// Simulates an API with in-memory data
let bugs = [
  { id: '1', title: 'Login button broken', description: 'Nothing happens on click', status: 'Open' },
  { id: '2', title: 'Dark mode crash', description: 'App crashes when switching theme', status: 'In Progress' },
];

export const fetchBugs = async () => {
  await delay(500); // simulate network latency
  return [...bugs];
};

export const fetchBugById = async (id) => {
  await delay(300);
  return bugs.find(b => b.id === id);
};

export const createBug = async (bugData) => {
  await delay(400);
  const newBug = { ...bugData, id: Date.now().toString() };
  bugs = [...bugs, newBug];
  return newBug;
};

export const updateBug = async ({ id, ...data }) => {
  bugs = bugs.map(b => b.id === id ? { ...b, ...data } : b);
  return bugs.find(b => b.id === id);
};

export const deleteBug = async (id) => {
  bugs = bugs.filter(b => b.id !== id);
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

The mock service simulates a backend API using in-memory data and artificial delay. It is useful for learning CRUD before connecting a real API.


### Exam Tip

Practical/coding question possible: write or explain the `services/bugService.js — Mock Data Layer` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 70 — Bug List Screen

### Original Slide Content

### app/bugs/index.jsx

```javascript
// app/bugs/index.jsx
import { FlatList, Pressable, View, Text } from 'react-native';
import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchBugs } from '../../services/bugService';
import BugCard from '../../components/BugCard';

export default function BugListScreen() {
  const { data: bugs = [], isLoading, error } = useQuery({
    queryKey: ['bugs'],
    queryFn: fetchBugs,
  });

  if (isLoading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Failed to load bugs</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={bugs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BugCard
            {...item}
            onPress={() => router.push(`/bugs/${item.id}`)}
          />
        )}
        ListEmptyComponent={<Text>No bugs! </Text>}
      />
      <Pressable onPress={() => router.push('/bugs/create')}
        style={styles.fab}>
        <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
      </Pressable>
    </View>
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

The bug list screen reads data with `useQuery`, displays it with `FlatList`, and navigates to detail or create screens.


### Exam Tip

Practical/coding question possible: write or explain the `Bug List Screen` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 71 — Create & Edit Bug Screens

### Original Slide Content

### app/bugs/create.jsx

```javascript
// app/bugs/create.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBug } from '../../services/bugService';

export default function CreateBugScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createBug,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bugs'] });
      router.back();
    },
  });

  return (
    <View style={styles.container}>
      <TextInput value={title} onChangeText={setTitle}
        placeholder="Bug title" style={styles.input} />
      <TextInput value={description} onChangeText={setDescription}
        placeholder="Description" multiline style={styles.input} />
      <Pressable
        onPress={() => mutate({ title, description, status: 'Open' })}
        disabled={isPending}
        style={[styles.button, isPending && styles.disabled]}>
        <Text>{isPending ? 'Saving...' : 'Save Bug'}</Text>
      </Pressable>
    </View>
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

The create screen collects form state, sends it through a mutation, invalidates the bug list, and returns to the previous screen.


### Exam Tip

Practical/coding question possible: write or explain the `Create & Edit Bug Screens` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 72 — Bug Detail Screen & Delete Flow

### Original Slide Content

### app/bugs/[id].jsx

```javascript
// app/bugs/[id].jsx
export default function BugDetailScreen() {
  const { id } = useLocalSearchParams();
  const queryClient = useQueryClient();

  const { data: bug, isLoading } = useQuery({
    queryKey: ['bug', id],
    queryFn: () => fetchBugById(id),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteBug(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bugs'] });
      router.replace('/bugs');
    },
  });

  const handleDelete = () => {
    Alert.alert('Delete Bug', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive',
        onPress: () => deleteMutation.mutate() },
    ]);
  };

  return (
    <View>
      <Text>{bug?.title}</Text>
      <Pressable onPress={() => router.push(`/bugs/${id}/edit`)}>
        <Text>Edit</Text>
      </Pressable>
      <Pressable onPress={handleDelete} style={styles.deleteBtn}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
}
```


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

The detail screen reads a dynamic route parameter, fetches a specific bug, and uses a mutation to delete after confirmation.


### Exam Tip

Practical/coding question possible: write or explain the `Bug Detail Screen & Delete Flow` code pattern and identify the role of each important prop/hook.


### Common Mistake

Deleting immediately without confirmation or without refreshing the list.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


## Page 73 — CRUD Lifecycle

### Original Slide Content

| CRUD Operation | Hook | After Success |
|---|---|---|
| CREATE | `useMutation(createBug)` | `invalidateQueries(['bugs'])`; `router.back()` |
| READ | `useQuery(['bugs'])`, `useQuery(['bug', id])` | Automatic caching and background refresh |
| UPDATE | `useMutation(updateBug)` | `invalidateQueries(['bugs'])`; `invalidateQueries(['bug', id])` |
| DELETE | `useMutation(deleteBug)` | `invalidateQueries(['bugs'])`; `router.replace('/bugs')` |

Key pattern: Every write operation ends with `queryClient.invalidateQueries()` to keep UI in sync.


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

CRUD operations follow a repeatable pattern: read with `useQuery`, write with `useMutation`, then invalidate stale queries.


### Visual/Text Diagram

```text
CREATE/UPDATE/DELETE
        ↓
useMutation(...)
        ↓
onSuccess
        ↓
queryClient.invalidateQueries(...)
        ↓
UI refreshes with current data
```


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **CRUD Lifecycle**.


### Common Mistake

Not invalidating affected queries after create/update/delete operations.


## Page 74 — Project Recap — What We Built

### Original Slide Content

Students can now build a complete CRUD mobile app.

- Expo Router with file-based navigation and dynamic routes.
- Context API for global state management using `BugProvider`.
- TanStack Query for data fetching, caching, and mutations.
- FlatList with real data and empty/loading states.
- Create, Read, Update, Delete operations with confirmation dialogs.
- Form validation with error messages.
- Navigation patterns: push, back, replace.


### Visual Explanation

No major visual content.


### Explanation

This slide explains **Project Recap — What We Built**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Short-answer question possible: define or explain **Project Recap — What We Built** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 75 — Summary & Q&A

### Original Slide Content

SECTION
Summary & Q&A
Key takeaways · Next steps · Q&A


### Visual Explanation

Section divider slide. It visually signals a new major lecture part: Summary & Q&A.


### Explanation

This slide starts the section on **Summary & Q&A**. Treat it as a topic boundary in the lecture. In exam answers, use it to organize your explanation under the right heading.


### Exam Tip

Use this as a revision boundary; know the major ideas that come after this section divider.


### Common Mistake

No major common mistake.


## Page 76 — Key Concepts Learned Today

### Original Slide Content

| Concept | Key Learning |
|---|---|
| React Native | Native mobile apps with React — same components, no HTML |
| Expo | Simplified setup, Expo Go for instant testing, EAS for builds |
| Core Components | View, Text, Image, TextInput, Pressable, FlatList |
| Styling | StyleSheet.create with Flexbox — no CSS, all JavaScript |
| Navigation | Expo Router — file-based routes, dynamic `[id]` params |
| Context API | Global state without prop drilling — BugProvider pattern |
| TanStack Query | Professional data fetching — caching, mutations, loading states |
| CRUD App | Complete bug reporter with Create, Read, Update, Delete |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This slide collects the lecture’s must-know concepts: React Native, Expo, components, styling, navigation, Context, TanStack Query, and CRUD.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **Key Concepts Learned Today**.


### Common Mistake

No major common mistake.


## Page 77 — What to Learn Next

### Original Slide Content

| Next Topic | Purpose |
|---|---|
| AsyncStorage | Persist data locally on device; bug list survives app restarts |
| Authentication | Expo Auth Session, Clerk, Supabase Auth — add login to your app |
| Camera & Media | `expo-camera`, `expo-image-picker` — capture photos in your app |
| Push Notifications | `expo-notifications` — alert users to new bugs or updates |
| Supabase / Firebase | Replace mock API with real database and real-time updates |
| EAS Build | Build and publish to App Store and Google Play Store |


### Visual Explanation

The slide uses a table/card comparison. The table has been recreated in Markdown under Original Slide Content for readability.


### Explanation

This slide explains **What to Learn Next**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Comparison question possible: reproduce the key differences shown in the table for **What to Learn Next**.


### Common Mistake

No major common mistake.


## Page 78 — Questions & Answers

### Original Slide Content

?
Questions &
Answers
Keep building. Keep shipping.
Slide 78  |  Introduction to React Native with Expo


### Visual Explanation

Closing Q&A slide with a large question mark and the message: Questions & Answers; Keep building. Keep shipping.


### Explanation

This slide explains **Questions & Answers**. Focus on the terms, relationships, and example syntax shown because they are likely to appear in short-answer or practical coding questions.


### Exam Tip

Short-answer question possible: define or explain **Questions & Answers** using the key terms from this slide.


### Common Mistake

No major common mistake.


## Page 79 — Appendix — Useful Commands

### Original Slide Content

### Terminal Commands

```bash
# Project setup
npx create-expo-app my-app
cd my-app && npm start

# Install packages
npm install @tanstack/react-query
npm install expo-router (included by default)

# Run on specific platform
npx expo start --android
npx expo start --ios

# Build for production (EAS)
npx eas build --platform android
npx eas build --platform ios

# Clear cache
npx expo start --clear

# Check Expo doctor
npx expo-doctor
```

### Useful Links

- Expo Docs — docs.expo.dev
- Expo Router — docs.expo.dev/router/introduction
- TanStack Query — tanstack.com/query/v5/docs
- React Native — reactnative.dev
- Expo Icons — icons.expo.fyi


### Visual Explanation

The main visual is a code example/screenshot. The code has been reconstructed into Markdown code blocks so it can be copied and studied.


### Explanation

These commands are the practical command-line toolbox for creating, running, installing dependencies, building, clearing cache, and checking Expo projects.


### Exam Tip

Practical/coding question possible: write or explain the `Appendix — Useful Commands` code pattern and identify the role of each important prop/hook.


### Common Mistake

No major common mistake.


### Code Explanation

This slide contains a practical code pattern. In exams or practical labs, focus on imports, component structure, hook usage, props, and how the UI updates in response to state/navigation/data changes.


---

# Full Lecture Summary

This lecture introduces React Native with Expo as a practical way to build cross-platform Android and iOS mobile apps using JavaScript and React. It starts by separating web apps from mobile apps, then compares native development with cross-platform development. The main point is that React Native allows a large amount of shared code while still rendering native UI components rather than a browser WebView.

The lecture then explains React Native fundamentals: using `<View>` instead of `<div>`, `<Text>` for all text, `<Image>` for images, `<TextInput>` for forms, `<Pressable>` for custom touchable buttons, and `<FlatList>` for efficient lists. Styling is done with JavaScript objects and `StyleSheet.create`, usually with Flexbox layout.

Expo is introduced as the simplified development platform. It provides Expo Go for real-device testing, Expo SDK modules, and EAS Build for production builds. The practical setup flow is: install Node.js, create the app using `npx create-expo-app`, run `npm start`, and scan the QR code with Expo Go.

The second half builds toward a Bug Report App. It covers functional components, props, callbacks, state with `useState`, controlled inputs, conditional rendering, form validation, FlatList lists, file-based routing with Expo Router, Context API for global state, and TanStack Query for data fetching, caching, mutations, and query invalidation.

The final project architecture separates the app into UI screens, state/data-fetching logic, and service functions. CRUD operations are implemented using `useQuery` for reads, `useMutation` for writes, and `queryClient.invalidateQueries()` after create/update/delete so the UI stays synchronized with the latest data.


# Key Definitions Table

| Term | Meaning | Example |
|---|---|---|
| React Native | Open-source framework for building native mobile apps with JavaScript and React | Build Android and iOS apps using React-style components |
| Expo | Platform and toolchain that simplifies React Native development | Expo Go, Expo SDK, EAS Build |
| Web App | App that runs in a browser | A website opened using a URL |
| Mobile App | App installed on a mobile operating system | App installed from Play Store/App Store |
| Cross-platform development | One codebase targets multiple platforms | React Native app for Android and iOS |
| Native UI Component | Real platform UI element rendered by the OS | Native button/text/image component |
| JSX | JavaScript syntax extension used to describe UI | `<View><Text>Hello</Text></View>` |
| `<View>` | React Native layout/container component | Container similar to web `<div>` |
| `<Text>` | Required component for displaying text | `<Text>Hello</Text>` |
| `<Image>` | Component for local/remote images | Avatar image from URI |
| `<TextInput>` | Component for user text input | Bug title field |
| `<Pressable>` | Touchable component with press feedback | Submit button |
| `<FlatList>` | Efficient list component for dynamic data | Bug list from API |
| `useState` | Hook for local component state | `const [count, setCount] = useState(0)` |
| Props | Read-only data passed into components | `<Greeting name="Alice" />` |
| Callback prop | Function passed to child so child can notify parent | `onPress={() => handlePress(id)}` |
| Controlled input | Input value stored and updated through state | `value={title}` + `onChangeText={setTitle}` |
| Expo Router | File-based routing system for Expo apps | `app/bugs/[id].tsx` → `/bugs/123` |
| Dynamic route | Route segment read from URL using brackets | `[id].tsx` |
| Context API | React method for sharing global state | `BugProvider`, `useBugs()` |
| Prop drilling | Passing props through layers that do not need them | App → Screen → List → Card |
| TanStack Query | Data-fetching and caching library | `useQuery`, `useMutation` |
| Query key | Unique cache identifier | `['bugs']`, `['bug', id]` |
| Query invalidation | Mark cached query stale so it refetches | `invalidateQueries({ queryKey: ['bugs'] })` |
| Mutation | Write operation such as POST/PUT/DELETE | Create or delete bug |
| CRUD | Create, Read, Update, Delete | Bug reporter app operations |


# Quick Revision Table

| Topic | Must Remember | Page |
|---|---|---|
| Web vs Mobile Apps | Browser-based vs installed OS apps | 04 |
| Native vs Cross-platform | Native has separate codebases; React Native shares ~90% code | 05-06 |
| React Native meaning | Not a WebView; renders native UI components | 08 |
| Web to RN components | `<div>`→`<View>`, text must use `<Text>` | 09-10 |
| Expo | Simplifies setup and testing through Expo Go | 13-15 |
| Setup commands | `npx create-expo-app`, `npm start` | 18, 21, 79 |
| Core components | View, Text, Image, ScrollView, TextInput, Pressable | 25 |
| Flexbox | `flexDirection`, `justifyContent`, `alignItems` | 26 |
| Styling | Prefer `StyleSheet.create` for reusable styles | 30-32 |
| Props | Read-only data passed into components | 34-36 |
| State | `useState` handles changing local values | 38 |
| Forms | Controlled inputs + validation | 39, 44 |
| Lists | Use FlatList for dynamic/large data lists | 42-43 |
| Routing | Files in `app/` become routes | 46-49 |
| Context API | Avoid prop drilling with Provider + hook | 51-54 |
| TanStack Query | Cache, refetch, loading states, mutations | 56-61 |
| Bug app architecture | UI layer, state layer, data layer | 63-73 |


# Important Code Snippets


## Page 11 — JSX in React Native

### JSX + StyleSheet Example

```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function HelloScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hello, React Native!
      </Text>
      <Text>Welcome to mobile development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#2563EB' },
});
```

- No HTML tags — use `View`, `Text`, `Image` instead of `div`, `p`, `img`.
- `style` prop — pass a JavaScript object, not a CSS class string.
- `StyleSheet.create` — validates styles and improves performance.

**Short explanation:** This snippet demonstrates the `JSX in React Native` pattern used in the lecture.


## Page 18 — Getting Started — Terminal Commands

### Terminal / Shell

```bash
# Step 1: Verify Node.js is installed
node --version
npm --version

# Step 2: Create a new Expo app
npx create-expo-app my-first-app

# Step 3: Navigate into the project
cd my-first-app

# Step 4: Start the development server
npm start
# or: npx expo start
```

- `npx` vs `npm` — `npx` runs packages without global install. No need to install `expo-cli` globally anymore.
- QR Code — After `npm start`, a QR code appears. Scan with Expo Go app on your phone.
- Hot Reload — Save any file and the app updates instantly; no rebuild needed.

**Short explanation:** This snippet demonstrates the `Getting Started — Terminal Commands` pattern used in the lecture.


## Page 21 — create-expo-app

### Terminal

```bash
# Create a new app with the default template
npx create-expo-app my-first-app

# Navigate into your project folder
cd my-first-app

# Start the dev server
npm start
```

### Folder structure

```text
# What gets created:
my-first-app/
├── app/              ← Screens (Expo Router)
│   ├── (tabs)/       ← Tab layout group
│   │   ├── index.tsx
│   │   └── explore.tsx
│   └── _layout.tsx   ← Root layout
├── assets/           ← Images, fonts
├── components/       ← Reusable components
├── package.json
└── app.json          ← App config
```

- `app.json` — App name, version, icon, splash screen configuration.
- `package.json` — Dependencies and npm scripts.
- `app/_layout.tsx` — Root layout; wraps all screens with providers.

**Short explanation:** This snippet demonstrates the `create-expo-app` pattern used in the lecture.


## Page 23 — Running Your App

```bash
npm start

# Terminal output:
› Metro waiting on exp://192.168.1.5:8081
› Scan the QR code above with Expo Go (Android)
› or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web
› Press r │ reload app
› Press j │ open debugger
```

- Fast Refresh — Changes appear instantly without losing app state.
- Shake to Debug — Shake device to open the Expo dev menu.
- Network Tab — Inspector shows API calls and performance.

**Short explanation:** This snippet demonstrates the `Running Your App` pattern used in the lecture.


## Page 26 — Flexbox Layout in React Native

### Flexbox Example

```jsx
<View style={{ flex: 1, flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center' }}>
  <Text>I am centered!</Text>
</View>

// flexDirection: 'row' → horizontal layout
// justifyContent: 'space-between' | 'flex-start' | 'center'
// alignItems: 'stretch' | 'flex-start' | 'center'
```

Visual labels shown:
- `flexDirection: 'column'` with Box 1, Box 2, Box 3 stacked vertically.
- `justifyContent: 'center'` shows vertical centering.
- `flexDirection: 'row'` shows A, B, C arranged horizontally.

**Short explanation:** This snippet demonstrates the `Flexbox Layout in React Native` pattern used in the lecture.


## Page 27 — ScrollView & Image

### ScrollView + Image

```javascript
import { ScrollView, Image, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView>
      <Image
        source={{ uri: 'https://example.com/avatar.jpg' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>John Doe</Text>
      <Text>Software Engineer</Text>
      {/* More content... */}
    </ScrollView>
  );
}
```

**Short explanation:** This snippet demonstrates the `ScrollView & Image` pattern used in the lecture.


## Page 28 — TextInput & Pressable

### TextInput + Pressable

```javascript
const [name, setName] = useState('');

// Controlled TextInput
<TextInput
  value={name}
  onChangeText={setName}
  placeholder="Enter your name"
  style={{ borderWidth: 1, padding: 10 }}
/>

// Pressable with feedback
<Pressable
  onPress={() => console.log('Pressed!')}
  style={({ pressed }) => ({
    backgroundColor: pressed ? '#1D4ED8' : '#2563EB',
    padding: 12,
    borderRadius: 8,
  })}
>
  <Text style={{ color: 'white' }}>Submit</Text>
</Pressable>
```

- Controlled Input — Always use `value` + `onChangeText` together.
- Pressable style function — receives `{ pressed }` to create feedback effects.
- KeyboardAvoidingView — wrap forms to stop keyboard hiding inputs.

**Short explanation:** This snippet demonstrates the `TextInput & Pressable` pattern used in the lecture.


## Page 30 — Inline Styles vs StyleSheet.create

### Inline vs StyleSheet

```jsx
// Inline style — works but messy
<View style={{ flex: 1, backgroundColor: '#F3F4F6',
                padding: 20, borderRadius: 8 }}>
  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
    Hello
  </Text>
</View>

// StyleSheet.create — recommended
<View style={styles.container}>
  <Text style={styles.heading}>Hello</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
    borderRadius: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
});
```

- Performance — StyleSheet styles are validated once at startup, not on every render.
- Autocomplete — TypeScript and IDEs provide better hints with `StyleSheet.create`.
- Reusability — Style objects can be referenced multiple times across components.

**Short explanation:** This snippet demonstrates the `Inline Styles vs StyleSheet.create` pattern used in the lecture.


## Page 32 — Styling in Practice — Before & After

### Before and After

- Unstyled card: `Login button not working`, `Open`.
- Styled card: `Login button not working`, blue `Open` badge, `Reported 2h ago`.

### BugCard styles

```javascript
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3, // Android shadow
  },
  title: { fontSize: 16, fontWeight: '600', color: '#111827' },
  badge: { backgroundColor: '#2563EB', borderRadius: 12,
           paddingHorizontal: 10, paddingVertical: 3 },
  badgeText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
});
```

**Short explanation:** This snippet demonstrates the `Styling in Practice — Before & After` pattern used in the lecture.


## Page 34 — Functional Components

### Functional Component

```jsx
// A simple functional component
function Greeting({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
    </View>
  );
}

// Usage
<Greeting name="Rusiru" />
<Greeting name="Alice" />
<Greeting name="Bob" />
```

- Props — properties passed into a component. They are read-only.
- Default Export — Screens must use `export default`. Reusable components can use named exports.
- TypeScript — Define prop types with interfaces for better autocomplete and error detection.

**Short explanation:** This snippet demonstrates the `Functional Components` pattern used in the lecture.


## Page 35 — Building a Reusable BugCard Component

### BugCard Component

```jsx
function BugCard({ title, status, description }) {
  const badgeColor = status === 'Open' ? '#2563EB'
    : status === 'In Progress' ? '#D97706' : '#16A34A';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, { backgroundColor: badgeColor }]}> 
          <Text style={styles.badgeText}>{status}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

// Usage
<BugCard
  title="Login button not working"
  status="Open"
  description="Clicking login does nothing"
/>
```

**Short explanation:** This snippet demonstrates the `Building a Reusable BugCard Component` pattern used in the lecture.


## Page 36 — Working with Props

### Props + Callbacks

```jsx
// Parent component passes data and callbacks
function BugListScreen() {
  const handlePress = (id) => {
    router.push(`/bugs/${id}`);
  };

  return (
    <View>
      <BugCard
        title="Login issue"
        status="Open"
        onPress={() => handlePress('1')} // callback prop
      />
    </View>
  );
}

// Child receives and calls the callback
function BugCard({ title, status, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}
```

- Unidirectional — Data flows down; callbacks flow up. Never mutate props directly.
- Destructuring — Use `{ title, status }` in function parameters instead of `props.title`.
- Default Props — Set defaults such as `function Card({ color = 'blue' })`.

**Short explanation:** This snippet demonstrates the `Working with Props` pattern used in the lecture.


## Page 38 — useState Hook

### useState Example

```javascript
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function CounterScreen() {
  // [currentValue, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable onPress={() => setCount(0)}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}
```

Rules:
1. Always call hooks at the top level — never inside loops or conditions.
2. State updates are asynchronous — do not read state immediately after setting.
3. Use functional updates when new state depends on old: `setCount(prev => prev + 1)`.

**Short explanation:** This snippet demonstrates the `useState Hook` pattern used in the lecture.


## Page 39 — Handling Events & Controlled Inputs

### Form with State

```javascript
export default function AddBugForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      alert('Title is required!');
      return;
    }
    console.log({ title, description });
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={title}
        onChangeText={setTitle} // ← fires on every keystroke
        placeholder="Bug title"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Describe the bug"
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Pressable onPress={handleSave}>
        <Text>Save Bug</Text>
      </Pressable>
    </View>
  );
}
```

- `onChangeText` receives the new string value automatically; no `event.target.value` needed.
- `multiline` with `numberOfLines` gives textarea-like behavior.
- Validate before saving: empty strings and length limits.

**Short explanation:** This snippet demonstrates the `Handling Events & Controlled Inputs` pattern used in the lecture.


## Page 40 — Conditional Rendering

### Conditional Rendering Patterns

```jsx
const [isLoading, setIsLoading] = useState(true);
const [bugs, setBugs] = useState([]);

// Pattern 1: Ternary operator
{isLoading ? (
  <ActivityIndicator size="large" color="#2563EB" />
) : (
  <BugList bugs={bugs} />
)}

// Pattern 2: Short circuit (&&)
{bugs.length === 0 && (
  <Text>No bugs reported yet! </Text>
)}

// Pattern 3: Variable
let content;
if (isLoading) content = <ActivityIndicator />;
else if (bugs.length === 0) content = <EmptyState />;
else content = <BugList bugs={bugs} />;

return <View>{content}</View>;
```

**Short explanation:** This snippet demonstrates the `Conditional Rendering` pattern used in the lecture.


## Page 42 — FlatList — Performant Lists

### FlatList Example

```jsx
const bugs = [
  { id: '1', title: 'Login issue', status: 'Open' },
  { id: '2', title: 'Dark mode crash', status: 'In Progress' },
  { id: '3', title: 'Slow load', status: 'Closed' },
];

<FlatList
  data={bugs} // ← array of items
  keyExtractor={(item) => item.id} // ← unique key for each item
  renderItem={({ item }) => ( // ← renders each item
    <BugCard
      title={item.title}
      status={item.status}
    />
  )}
  ItemSeparatorComponent={() => ( // ← separator between items
    <View style={{ height: 8 }} />
  )}
  ListEmptyComponent={() => ( // ← shown when data is empty
    <Text>No bugs found!</Text>
  )}
  contentContainerStyle={{ padding: 16 }}
/>
```

**Short explanation:** This snippet demonstrates the `FlatList — Performant Lists` pattern used in the lecture.


## Page 44 — Building Forms with Validation

### Form Validation

```javascript
export default function CreateBugScreen() {
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (title.length > 100) newErrors.title = 'Max 100 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // proceed with save...
  };

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle}
        placeholder="Bug title *" />
      {errors.title && (
        <Text style={{ color: 'red' }}>{errors.title}</Text>
      )}
      <Pressable onPress={handleSubmit}>
        <Text>Submit Bug</Text>
      </Pressable>
    </View>
  );
}
```

- Validate on Submit — Run validation when the user presses submit, not on every keystroke.
- Show Errors Inline — Display error messages directly below the field.
- Disable Button — Add `disabled` while submitting to prevent double-submit.

**Short explanation:** This snippet demonstrates the `Building Forms with Validation` pattern used in the lecture.


## Page 48 — Navigating Between Screens

### Navigation Methods

```javascript
import { router, Link } from 'expo-router';

// Method 1: Imperative — use in event handlers
const handleCreate = async () => {
  await saveBug(formData);
  router.push('/bugs'); // navigate to /bugs
  router.replace('/bugs'); // replace (no back button)
  router.back(); // go back
};

// Method 2: Declarative — use in JSX
<Link href="/bugs" style={styles.link}>
  <Text>View All Bugs</Text>
</Link>

// Navigate with params
router.push(`/bugs/${bug.id}`);

// Or as object
router.push({
  pathname: '/bugs/[id]',
  params: { id: bug.id }
});
```

- `router.push()` adds screen to stack; user can press back.
- `router.replace()` replaces current screen; use after login or when no back navigation is needed.
- `router.back()` goes back to previous screen in the stack.

**Short explanation:** This snippet demonstrates the `Navigating Between Screens` pattern used in the lecture.


## Page 49 — Dynamic Routes & URL Parameters

### app/bugs/[id].tsx

```javascript
// File: app/bugs/[id].tsx
import { useLocalSearchParams } from 'expo-router';

export default function BugDetailScreen() {
  // Reads the [id] from the URL: /bugs/42 → id = '42'
  const { id } = useLocalSearchParams();

  // Use id to fetch the specific bug
  const { data: bug, isLoading } = useQuery({
    queryKey: ['bug', id],
    queryFn: () => fetchBugById(id),
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <View>
      <Text>{bug.title}</Text>
      <Text>{bug.description}</Text>
    </View>
  );
}
```

Route Flow: Home `/` → Bug List `/bugs` → Bug Detail `/bugs/[id]` → Edit Bug `/bugs/[id]/edit`.

**Short explanation:** This snippet demonstrates the `Dynamic Routes & URL Parameters` pattern used in the lecture.


## Page 53 — Creating BugContext

### context/BugContext.jsx

```javascript
// context/BugContext.jsx
import { createContext, useContext, useState } from 'react';

// 1. Create the context
const BugContext = createContext(null);

// 2. Create the Provider component
export function BugProvider({ children }) {
  const [bugs, setBugs] = useState([]);

  const addBug = (newBug) => {
    setBugs(prev => [...prev, { ...newBug, id: Date.now().toString() }]);
  };

  const deleteBug = (id) => {
    setBugs(prev => prev.filter(bug => bug.id !== id));
  };

  return (
    <BugContext.Provider value={{ bugs, addBug, deleteBug }}>
      {children}
    </BugContext.Provider>
  );
}

// 3. Custom hook for easy consumption
export function useBugs() {
  return useContext(BugContext);
}
```

- Step 1 — `createContext()` creates the context object with a default value.
- Step 2 — Provider component holds state and exposes it through the `value` prop.
- Step 3 — Custom hook wraps `useContext` for a clean API: `useBugs()`.

**Short explanation:** This snippet demonstrates the `Creating BugContext` pattern used in the lecture.


## Page 54 — Using Context in Components

### Using Context

```javascript
// app/_layout.tsx — Wrap app with Provider
import { BugProvider } from '../context/BugContext';

export default function RootLayout() {
  return (
    <BugProvider>
      <Slot />
    </BugProvider>
  );
}

// app/bugs/index.jsx — Consume context
import { useBugs } from '../../context/BugContext';

export default function BugListScreen() {
  const { bugs, deleteBug } = useBugs();

  return (
    <FlatList
      data={bugs}
      renderItem={({ item }) => (
        <BugCard
          {...item}
          onDelete={() => deleteBug(item.id)}
        />
      )}
    />
  );
}
```

**Short explanation:** This snippet demonstrates the `Using Context in Components` pattern used in the lecture.


## Page 57 — Why Not Just Use useEffect?

### useEffect vs useQuery

```javascript
// useEffect approach — lots of boilerplate
const [bugs, setBugs] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true);
  fetch('/api/bugs')
    .then(r => r.json())
    .then(data => { setBugs(data); setIsLoading(false); })
    .catch(err => { setError(err); setIsLoading(false); });
}, []); // No caching, no refetch, no deduplication!

// TanStack Query — clean and powerful
const { data: bugs, isLoading, error } = useQuery({
  queryKey: ['bugs'],
  queryFn: () => fetch('/api/bugs').then(r => r.json()),
  // Automatically: caches, refetches, deduplicates, handles errors
});
```

Problems with only `useEffect`:
- No Caching — re-fetches every time the component mounts.
- Race Conditions — rapid requests may arrive out of order and show stale data.
- No Deduplication — multiple components can cause duplicate requests.

**Short explanation:** This snippet demonstrates the `Why Not Just Use useEffect?` pattern used in the lecture.


## Page 58 — Setting Up TanStack Query

### Terminal

```bash
# Install TanStack Query
npm install @tanstack/react-query
```

### app/_layout.tsx

```javascript
// app/_layout.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BugProvider } from '../context/BugContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2, // retry failed requests twice
    },
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <BugProvider>
        <Slot />
      </BugProvider>
    </QueryClientProvider>
  );
}
```

**Short explanation:** This snippet demonstrates the `Setting Up TanStack Query` pattern used in the lecture.


## Page 59 — useQuery — Fetching Data

### useQuery

```javascript
import { useQuery } from '@tanstack/react-query';

// services/bugService.js
export const fetchBugs = async () => {
  const response = await fetch('https://api.example.com/bugs');
  if (!response.ok) throw new Error('Failed to fetch bugs');
  return response.json();
};

// In your screen component
export default function BugListScreen() {
  const {
    data: bugs = [], // the fetched data
    isLoading, // true on first load
    isFetching, // true on background refetch
    error, // Error object if failed
    refetch, // manually trigger refetch
  } = useQuery({
    queryKey: ['bugs'], // unique cache key
    queryFn: fetchBugs, // async function
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return <FlatList data={bugs} ... />;
}
```

**Short explanation:** This snippet demonstrates the `useQuery — Fetching Data` pattern used in the lecture.


## Page 60 — useMutation — Creating & Updating Data

### useMutation

```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function CreateBugScreen() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (newBug) =>
      fetch('/api/bugs', {
        method: 'POST',
        body: JSON.stringify(newBug),
        headers: { 'Content-Type': 'application/json' },
      }).then(r => r.json()),

    onSuccess: () => {
      // Refetch the bugs list after creating
      queryClient.invalidateQueries({ queryKey: ['bugs'] });
      router.back();
    },
    onError: (error) => {
      alert(`Failed: ${error.message}`);
    },
  });

  const handleSubmit = () => {
    createMutation.mutate({ title, description, status: 'Open' });
  };

  return (
    <Pressable onPress={handleSubmit}
      disabled={createMutation.isPending}>
      <Text>{createMutation.isPending ? 'Saving...' : 'Save Bug'}</Text>
    </Pressable>
  );
}
```

**Short explanation:** This snippet demonstrates the `useMutation — Creating & Updating Data` pattern used in the lecture.


## Page 64 — Data Model — Bug Object

### Bug Data Model

```javascript
// The Bug data model
{
  id: "1", // Unique identifier
  title: "Login button not working", // Bug title (required)
  description: "When clicking the login button, nothing happens. No error shown to user.", // Detailed description
  status: "Open" // "Open" | "In Progress" | "Closed"
}

// Status options
const STATUS_OPTIONS = ['Open', 'In Progress', 'Closed'];

// Status colors for badges
const STATUS_COLORS = {
  'Open': '#2563EB', // Blue
  'In Progress': '#D97706', // Amber
  'Closed': '#16A34A', // Green
};
```

| Field | Type | Meaning |
|---|---|---|
| `id` | string | unique key |
| `title` | string | required |
| `description` | string | optional |
| `status` | enum | Open / In Progress / Closed |

**Short explanation:** This snippet demonstrates the `Data Model — Bug Object` pattern used in the lecture.


## Page 68 — Setting Up Providers

### app/_layout.tsx

```javascript
// app/_layout.tsx
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BugProvider } from '../context/BugContext';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <BugProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: 'Bug Reporter' }}
          />
          <Stack.Screen
            name="bugs/index"
            options={{ title: 'All Bugs' }}
          />
          <Stack.Screen
            name="bugs/create"
            options={{ title: 'Report a Bug' }}
          />
          <Stack.Screen
            name="bugs/[id]"
            options={{ title: 'Bug Detail' }}
          />
        </Stack>
      </BugProvider>
    </QueryClientProvider>
  );
}
```

**Short explanation:** This snippet demonstrates the `Setting Up Providers` pattern used in the lecture.


## Page 69 — services/bugService.js — Mock Data Layer

### services/bugService.js

```javascript
// services/bugService.js
// Simulates an API with in-memory data
let bugs = [
  { id: '1', title: 'Login button broken', description: 'Nothing happens on click', status: 'Open' },
  { id: '2', title: 'Dark mode crash', description: 'App crashes when switching theme', status: 'In Progress' },
];

export const fetchBugs = async () => {
  await delay(500); // simulate network latency
  return [...bugs];
};

export const fetchBugById = async (id) => {
  await delay(300);
  return bugs.find(b => b.id === id);
};

export const createBug = async (bugData) => {
  await delay(400);
  const newBug = { ...bugData, id: Date.now().toString() };
  bugs = [...bugs, newBug];
  return newBug;
};

export const updateBug = async ({ id, ...data }) => {
  bugs = bugs.map(b => b.id === id ? { ...b, ...data } : b);
  return bugs.find(b => b.id === id);
};

export const deleteBug = async (id) => {
  bugs = bugs.filter(b => b.id !== id);
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
```

**Short explanation:** This snippet demonstrates the `services/bugService.js — Mock Data Layer` pattern used in the lecture.


## Page 70 — Bug List Screen

### app/bugs/index.jsx

```javascript
// app/bugs/index.jsx
import { FlatList, Pressable, View, Text } from 'react-native';
import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchBugs } from '../../services/bugService';
import BugCard from '../../components/BugCard';

export default function BugListScreen() {
  const { data: bugs = [], isLoading, error } = useQuery({
    queryKey: ['bugs'],
    queryFn: fetchBugs,
  });

  if (isLoading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Failed to load bugs</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={bugs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BugCard
            {...item}
            onPress={() => router.push(`/bugs/${item.id}`)}
          />
        )}
        ListEmptyComponent={<Text>No bugs! </Text>}
      />
      <Pressable onPress={() => router.push('/bugs/create')}
        style={styles.fab}>
        <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
      </Pressable>
    </View>
  );
}
```

**Short explanation:** This snippet demonstrates the `Bug List Screen` pattern used in the lecture.


## Page 71 — Create & Edit Bug Screens

### app/bugs/create.jsx

```javascript
// app/bugs/create.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBug } from '../../services/bugService';

export default function CreateBugScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createBug,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bugs'] });
      router.back();
    },
  });

  return (
    <View style={styles.container}>
      <TextInput value={title} onChangeText={setTitle}
        placeholder="Bug title" style={styles.input} />
      <TextInput value={description} onChangeText={setDescription}
        placeholder="Description" multiline style={styles.input} />
      <Pressable
        onPress={() => mutate({ title, description, status: 'Open' })}
        disabled={isPending}
        style={[styles.button, isPending && styles.disabled]}>
        <Text>{isPending ? 'Saving...' : 'Save Bug'}</Text>
      </Pressable>
    </View>
  );
}
```

**Short explanation:** This snippet demonstrates the `Create & Edit Bug Screens` pattern used in the lecture.


## Page 72 — Bug Detail Screen & Delete Flow

### app/bugs/[id].jsx

```javascript
// app/bugs/[id].jsx
export default function BugDetailScreen() {
  const { id } = useLocalSearchParams();
  const queryClient = useQueryClient();

  const { data: bug, isLoading } = useQuery({
    queryKey: ['bug', id],
    queryFn: () => fetchBugById(id),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteBug(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bugs'] });
      router.replace('/bugs');
    },
  });

  const handleDelete = () => {
    Alert.alert('Delete Bug', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive',
        onPress: () => deleteMutation.mutate() },
    ]);
  };

  return (
    <View>
      <Text>{bug?.title}</Text>
      <Pressable onPress={() => router.push(`/bugs/${id}/edit`)}>
        <Text>Edit</Text>
      </Pressable>
      <Pressable onPress={handleDelete} style={styles.deleteBtn}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
}
```

**Short explanation:** This snippet demonstrates the `Bug Detail Screen & Delete Flow` pattern used in the lecture.


## Page 79 — Appendix — Useful Commands

### Terminal Commands

```bash
# Project setup
npx create-expo-app my-app
cd my-app && npm start

# Install packages
npm install @tanstack/react-query
npm install expo-router (included by default)

# Run on specific platform
npx expo start --android
npx expo start --ios

# Build for production (EAS)
npx eas build --platform android
npx eas build --platform ios

# Clear cache
npx expo start --clear

# Check Expo doctor
npx expo-doctor
```

### Useful Links

- Expo Docs — docs.expo.dev
- Expo Router — docs.expo.dev/router/introduction
- TanStack Query — tanstack.com/query/v5/docs
- React Native — reactnative.dev
- Expo Icons — icons.expo.fyi

**Short explanation:** This snippet demonstrates the `Appendix — Useful Commands` pattern used in the lecture.


# Important Diagrams Summary

| Page | Visual/Diagram | Meaning |
|---|---|---|
| 06 | One Codebase → Two Platforms | React Native code is bundled through Expo/Metro and rendered as native Android/iOS UI components |
| 15 | Expo Go five-step flow | Complete real-device testing setup workflow |
| 22 | Project folder tree | Shows how Expo project folders map to app structure and routes |
| 26 | Flexbox column/row layouts | Demonstrates layout direction and alignment concepts |
| 47 | File structure → routes | Shows how Expo Router generates routes from files |
| 49 | Route flow | Shows moving from home to bug list to detail to edit |
| 51 | Prop drilling chain | Shows why passing props through many layers is hard to maintain |
| 52 | Context API solution | Shows direct global-state access from multiple components |
| 61 | TanStack Query data flow | API → cache → UI with background refetch |
| 65 | App architecture layers | UI screens, state/query layer, and data service layer |
| 67 | Screen navigation flow | Shows route movement for bug CRUD app |
| 73 | CRUD lifecycle table | Shows query/mutation pattern and invalidation after writes |


# Likely Exam Questions and Short Answers


## Question 1
Differentiate between web apps and mobile apps.

**Expected Answer:**
Web apps run in a browser and use URL-based routing with HTML/CSS/JS. Mobile apps run on the device OS, are installed locally, can access hardware more fully, can be distributed through app stores, and can work offline.


## Question 2
What is React Native?

**Expected Answer:**
React Native is an open-source framework created by Meta for building native mobile apps using JavaScript and React. It is not a WebView; it renders real native UI components.


## Question 3
Compare React web and React Native.

**Expected Answer:**
React web renders to the HTML DOM and uses elements like `<div>` and `<p>`, CSS/className, React Router, and `onClick`. React Native renders native UI components and uses `<View>`, `<Text>`, StyleSheet/inline objects, Expo Router, and `onPress`.


## Question 4
Why use Expo?

**Expected Answer:**
Expo simplifies React Native development by avoiding native configuration for basic apps, enabling real-device testing with Expo Go, providing SDK modules, and supporting cloud builds through EAS Build.


## Question 5
Write the command sequence to create and run an Expo app.

**Expected Answer:**
Use `npx create-expo-app my-first-app`, `cd my-first-app`, and `npm start` or `npx expo start`.


## Question 6
What is the role of `<TextInput>` in React Native forms?

**Expected Answer:**
`<TextInput>` receives user text input. A controlled input should use `value` with `onChangeText` so React state controls the displayed value.


## Question 7
When should you use FlatList instead of ScrollView?

**Expected Answer:**
Use FlatList for dynamic or large lists/API data because it virtualizes items and supports list helpers like `keyExtractor`, `ItemSeparatorComponent`, and `ListEmptyComponent`.


## Question 8
Explain Expo Router file-based routing.

**Expected Answer:**
Every file inside the `app/` directory becomes a route. For example, `app/settings.tsx` becomes `/settings`, and `app/bugs/[id].tsx` creates a dynamic route like `/bugs/123`.


## Question 9
What is prop drilling and how does Context API solve it?

**Expected Answer:**
Prop drilling is passing data through intermediate components that do not need it. Context API solves this by wrapping the app with a Provider and allowing components to access shared data directly using `useContext` or a custom hook.


## Question 10
Why is TanStack Query better than manual useEffect fetching for server state?

**Expected Answer:**
TanStack Query provides caching, background refetching, loading/error states, deduplication, mutations, and query invalidation. Manual `useEffect` requires more boilerplate and lacks these features by default.


## Question 11
What is query invalidation?

**Expected Answer:**
Query invalidation marks cached data as stale so TanStack Query refetches it. After creating, updating, or deleting a bug, invalidate `['bugs']` so the list updates.


## Question 12
Describe the Bug Report App architecture.

**Expected Answer:**
The UI layer contains screens such as Home, Bug List, Bug Detail, Create Bug, and Edit Bug. The state layer uses Context API and TanStack Query. The data layer uses `services/bugService.js` with functions such as `fetchBugs`, `createBug`, `updateBug`, and `deleteBug`.


# Common Mistakes to Avoid

- Saying React Native is a WebView — incorrect; it renders native UI components.
- Using HTML tags like `<div>`, `<p>`, `<button>`, or `<img>` directly in React Native.
- Writing plain text directly inside `<View>` instead of wrapping text in `<Text>`.
- Passing CSS class strings instead of JavaScript style objects.
- Mixing up `justifyContent` and `alignItems` in Flexbox.
- Mutating props inside child components.
- Calling hooks inside loops, conditions, or nested functions.
- Using `event.target.value` instead of `onChangeText` in React Native inputs.
- Using ScrollView for large dynamic lists instead of FlatList.
- Forgetting `keyExtractor` for FlatList items.
- Creating dynamic route files but forgetting `useLocalSearchParams()`.
- Creating Context but forgetting to wrap the app with the Provider.
- Using manual `useEffect` for complex server-state logic when TanStack Query is available.
- Forgetting to call `queryClient.invalidateQueries()` after create/update/delete operations.
- Not showing loading and error states when fetching API data.


# Final One-Page Revision Notes

## Must-Know Core

- React Native = native mobile apps with JavaScript + React.
- React Native is **not** a WebView.
- Expo = simplified React Native platform with Expo Go, Expo SDK, and EAS Build.
- One codebase can target Android and iOS with around 90% shared code.

## Component Mapping

| Web | React Native |
|---|---|
| `<div>` | `<View>` |
| `<p>` / `<span>` | `<Text>` |
| `<button>` | `<Pressable>` |
| `<img>` | `<Image>` |
| `<input>` | `<TextInput>` |
| `<ul>` | `<FlatList>` |

## Layout + Styling

- Use Flexbox: `flexDirection`, `justifyContent`, `alignItems`.
- Use `StyleSheet.create` for cleaner, reusable, validated styles.
- Use JS style objects, not CSS files/classes.

## State + Forms

- `useState(initialValue)` returns `[value, setter]`.
- Hooks must be called at the top level.
- Controlled inputs: `value={title}` + `onChangeText={setTitle}`.
- Validate before submit. Show inline errors.

## Lists

- `ScrollView` = small/static content.
- `FlatList` = dynamic/large lists.
- Important props: `data`, `keyExtractor`, `renderItem`, `ListEmptyComponent`.

## Navigation

- Expo Router uses file-based routing.
- `app/index.tsx` → `/`.
- `app/bugs/[id].tsx` → `/bugs/123`.
- `router.push()` = add screen to stack.
- `router.replace()` = replace current screen.
- `router.back()` = go back.

## Global State

- Prop drilling = passing props through unnecessary layers.
- Context API = Provider wraps app; components use context directly.
- Pattern: `createContext` → Provider → custom hook.

## TanStack Query

- `useQuery` = read/fetch data.
- `useMutation` = create/update/delete data.
- `queryKey` identifies cached data.
- `invalidateQueries()` refreshes stale data after writes.

## CRUD Pattern

```text
READ: useQuery(['bugs'])
CREATE/UPDATE/DELETE: useMutation(...)
After success: queryClient.invalidateQueries({ queryKey: ['bugs'] })
```

## Exam Keywords

React Native, Expo, native UI components, Expo Go, EAS Build, JSX, View, Text, TextInput, Pressable, FlatList, StyleSheet, Flexbox, props, callbacks, useState, controlled input, validation, Expo Router, dynamic route, Context API, prop drilling, TanStack Query, useQuery, useMutation, query invalidation, CRUD.
