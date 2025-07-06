# ✅ AngularJS Todo List App – Week 3

![AngularJS](https://img.shields.io/badge/AngularJS-1.8.2-red?logo=angularjs&style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow?style=for-the-badge&logo=javascript) ![Live Server](https://img.shields.io/badge/Live_Server-Enabled-brightgreen?style=for-the-badge) ![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Table of Contents

- [✅ AngularJS Todo List App – Week 3](#-angularjs-todo-list-app--week-3)
  - [📚 Table of Contents](#-table-of-contents)
  - [📖 Project Overview](#-project-overview)
  - [⚙️ Features](#️-features)
  - [💡 Key AngularJS Concepts Used](#-key-angularjs-concepts-used)
  - [🔄 Data Flow Diagram](#-data-flow-diagram)
  - [📁 Folder Structure](#-folder-structure)
  - [▶️ How to Run the Project](#️-how-to-run-the-project)
    - [💻 Steps](#-steps)
  - [🧠 Learning Summary](#-learning-summary)
    - [✅ Controller (`TodoController`)](#-controller-todocontroller)
    - [✅ Two-Way Binding](#-two-way-binding)
    - [✅ Adding Logic](#-adding-logic)
    - [✅ Removing Logic](#-removing-logic)
  - [📸 Screenshot Preview](#-screenshot-preview)

---

## 📖 Project Overview

This is a simple **Todo List Web App** built using **AngularJS v1.8.2**, designed for beginners to learn the foundational concepts of:

- Controllers
- Two-way data binding (`ng-model`)
- Dynamic rendering (`ng-repeat`)
- Event handling (`ng-click`)

Users can:

- Add new tasks
- Remove tasks
- See the todo list update in real-time

---

## ⚙️ Features

✅ Add new todo tasks
✅ Remove completed tasks
✅ Live UI updates using two-way data binding
✅ Responsive and minimalist design

---

## 💡 Key AngularJS Concepts Used

| Concept         | Purpose                                        |
| --------------- | ---------------------------------------------- |
| `ng-app`        | Initializes the AngularJS application          |
| `ng-controller` | Connects the view to the controller logic      |
| `$scope`        | Acts as the bridge between controller and view |
| `ng-model`      | Enables two-way data binding                   |
| `ng-click`      | Binds user actions like "Add" and "Remove"     |
| `ng-repeat`     | Loops through the todo list dynamically        |

---

## 🔄 Data Flow Diagram

```plaintext
graph TD
  A[User Input (Text Box)] --> B[ng-model binds to $scope.newTodo]
  B --> C[User clicks "Add" button]
  C --> D[addTodo() pushes newTodo into $scope.todos]
  D --> E[ng-repeat updates UI with latest todos]
  E --> F[User clicks "Remove"]
  F --> G[removeTodo(index) removes item from $scope.todos]
  G --> E
```

---

## 📁 Folder Structure

```plaintext
week3-todo-app/
├── index.html       # Main HTML file with view + controller reference
├── app.js           # AngularJS controller logic
└── README.md        # Project documentation
```

---

## ▶️ How to Run the Project

> **Requirements**: A modern browser and optionally [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for auto-reload.

### 💻 Steps

1. Download or clone the folder
2. Open `index.html` in your browser
3. Or open in VS Code and right-click → **Open with Live Server**

---

## 🧠 Learning Summary

### ✅ Controller (`TodoController`)

Manages the entire app logic through `$scope`:

```js
$scope.todos = [...];
$scope.addTodo = function() { ... }
$scope.removeTodo = function(index) { ... }
```

### ✅ Two-Way Binding

```html
<input ng-model="newTodo" />
```

Live updates from input box to controller and vice-versa.

### ✅ Adding Logic

```js
if ($scope.newTodo && $scope.newTodo.trim() !== "") {
  $scope.todos.push({ text: $scope.newTodo });
}
```

Ensures no empty or whitespace-only tasks are added.

### ✅ Removing Logic

```js
$scope.removeTodo = function (index) {
  $scope.todos.splice(index, 1);
};
```

Removes task at given index from the array.

---

## 📸 Screenshot Preview

```plaintext
📝 Todo List
[ Buy Groceries           ] [Add]

- Learn AngularJS         [Remove]
- Build Todo App          [Remove]
```

---
