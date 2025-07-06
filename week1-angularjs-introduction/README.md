# 📘 Introduction to AngularJS

![AngularJS](https://img.shields.io/badge/AngularJS-1.8.2-red?logo=angularjs&style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![Live Preview](https://img.shields.io/badge/Live_Server-Enabled-brightgreen?style=for-the-badge&logo=visualstudiocode&logoColor=white) ![Status](https://img.shields.io/badge/Project-Complete-blue?style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## Table of Contents

- [📘 Introduction to AngularJS](#-introduction-to-angularjs)
  - [Table of Contents](#table-of-contents)
  - [🧠 Introduction](#-introduction)
  - [🗂 Folder Structure](#-folder-structure)
  - [🛠 Technologies Used](#-technologies-used)
  - [🚀 Getting Started](#-getting-started)
    - [📦 Steps to Run the Project Locally](#-steps-to-run-the-project-locally)
  - [🔁 Explanation \& Data Flow](#-explanation--data-flow)
    - [🔹 1. Module Declaration](#-1-module-declaration)
    - [🔹 2. Controller Registration](#-2-controller-registration)
    - [🔹 3. HTML Binding (`ng-model`, `{{ }}`)](#-3-html-binding-ng-model--)
      - [In your `index.html`](#in-your-indexhtml)
  - [🔄 Real-Time Data Flow Diagram](#-real-time-data-flow-diagram)
  - [🧪 Live Demo Walkthrough](#-live-demo-walkthrough)
    - [1. Initial Load](#1-initial-load)
    - [2. User types “Alex” in input](#2-user-types-alex-in-input)
    - [3. User clears input (empty string)](#3-user-clears-input-empty-string)
  - [🖼 Output Screenshot (Text Representation)](#-output-screenshot-text-representation)
  - [🏁 Conclusion](#-conclusion)

---

## 🧠 Introduction

This project demonstrates the **core foundation of AngularJS** — data binding between HTML and JavaScript using `ng-model` and displaying that data with expressions like `{{ name }}`.

As the user types into the input field, the heading dynamically updates in real time.

---

## 🗂 Folder Structure

```md
angular-intro/
│
├── index.html # Main HTML file containing AngularJS code
├── app.js # JavaScript containing module and controller
└── README.md # Project explanation
```

---

## 🛠 Technologies Used

- **AngularJS 1.8.2**
- HTML5, CSS3
- JavaScript (ES5)
- Live Server (for previewing changes)

---

## 🚀 Getting Started

### 📦 Steps to Run the Project Locally

1. Clone or download this repository.
2. Open `index.html` in your browser (or right-click and open with Live Server in VS Code).
3. You’ll see an input box and a heading that updates as you type.

---

## 🔁 Explanation & Data Flow

Let’s break it down **step by step**:

---

### 🔹 1. Module Declaration

```js
var app = angular.module("myApp", []);
```

- `angular.module(...)` creates a new AngularJS app named **`myApp`**.
- This module is the **core container** where all controllers, services, directives, etc., will be attached.

---

### 🔹 2. Controller Registration

```js
app.controller("MainController", MainController);

function MainController($scope) {
  $scope.name = "Aaditya Kumar Mittal";
}
```

- This creates a controller named `MainController`.
- The `$scope` object is a **bridge between your JavaScript and HTML**.
- `name` is initialized with `"Aaditya Kumar Mittal"` and is now **available inside HTML**.

---

### 🔹 3. HTML Binding (`ng-model`, `{{ }}`)

#### In your `index.html`

```html
<body ng-controller="MainController">
  <h2>Hello, {{ name || 'Guest' }}!</h2>
  <input type="text" ng-model="name" />
</body>
```

| Directive       | What it Does                                                        |
| --------------- | ------------------------------------------------------------------- |
| `ng-controller` | Links the controller (`MainController`) to this part of the DOM     |
| `ng-model`      | Binds the input field to `$scope.name`. Two-way binding is enabled. |
| `{{ name }}`    | Outputs the value of `name` wherever it's referenced inside the DOM |

---

## 🔄 Real-Time Data Flow Diagram

```text
[User Input Field]
     │   (ng-model="name")
     ▼
[$scope.name]  ←→  {{ name }} in DOM
```

- The `ng-model` binds the input field to the `$scope.name` value.
- When the user types something, `$scope.name` updates automatically.
- Any reference to `{{ name }}` updates live because AngularJS uses a **digest cycle** to watch variables.

---

## 🧪 Live Demo Walkthrough

### 1. Initial Load

```html
<h2>Hello, Aaditya Kumar Mittal!</h2>
```

### 2. User types “Alex” in input

```html
<h2>Hello, Alex!</h2>
```

### 3. User clears input (empty string)

```html
<h2>Hello, Guest!</h2>
<!-- Default fallback due to {{ name || 'Guest' }} -->
```

---

## 🖼 Output Screenshot (Text Representation)

```md
---

| Hello, Aaditya Kumar Mittal! |
| [ Enter your name: ______________ ] |

---
```

---

## 🏁 Conclusion

✅ You’ve successfully created your first AngularJS app!
✅ You understand **modules**, **controllers**, **data binding**, and how AngularJS communicates between the DOM and logic.
✅ You’re ready to dive deeper into components like `ng-repeat`, `ng-click`, `ng-show`, forms, filters, services, and routing.
