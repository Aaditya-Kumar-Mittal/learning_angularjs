# 🧾 AngularJS User Registration Form

![AngularJS](https://img.shields.io/badge/AngularJS-1.8.2-red?logo=angularjs&style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow?style=for-the-badge&logo=javascript) ![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge) ![Responsive](https://img.shields.io/badge/Responsive-Yes-blue?style=for-the-badge)

---

## 📌 Table of Contents

- [🧾 AngularJS User Registration Form](#-angularjs-user-registration-form)
  - [📌 Table of Contents](#-table-of-contents)
  - [📖 Overview](#-overview)
  - [✨ Features](#-features)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [📐 AngularJS Concepts](#-angularjs-concepts)
  - [🔄 Data Flow](#-data-flow)
  - [📂 Folder Structure](#-folder-structure)
  - [▶️ How to Run](#️-how-to-run)
  - [📸 Screenshots](#-screenshots)
    - [✅ Form View](#-form-view)
  - [🧠 What You Learn](#-what-you-learn)

---

## 📖 Overview

This is a **User Registration Form** built using **AngularJS** that includes:

- Form inputs (`ng-model`)
- Real-time validations
- Error display using `ng-show`
- Submit logic using `ng-submit`
- Disabled submit button until all fields are valid

---

## ✨ Features

✅ Full Name, Email, and Password fields
✅ Real-time validation messages
✅ Password strength check (min 6 characters)
✅ Submit button disabled until form is valid
✅ Success message on submission

---

## 🛠️ Technologies Used

| Tech       | Purpose                     |
| ---------- | --------------------------- |
| AngularJS  | Frontend logic & validation |
| HTML5      | Markup structure            |
| CSS3       | Styling the form            |
| JavaScript | Controller logic            |

---

## 📐 AngularJS Concepts

| Directive/Property         | Purpose                                   |
| -------------------------- | ----------------------------------------- |
| `ng-model`                 | Two-way binding for form inputs           |
| `ng-submit`                | Triggers form submission                  |
| `ng-show`                  | Displays error or success messages        |
| `$scope`                   | Acts as controller's view-model           |
| `ng-disabled`              | Disables submit button if form is invalid |
| `required`, `ng-minlength` | HTML5 + Angular validations               |

---

## 🔄 Data Flow

```plaintext
graph TD
  A[User types in form fields] --> B[ng-model updates $scope.user]
  B --> C[AngularJS validators run]
  C --> D[Form errors shown with ng-show]
  D --> E[If valid → Enable Register button]
  E --> F[User clicks Register]
  F --> G[ng-submit triggers submitForm()]
  G --> H[Success message displayed]
```

---

## 📂 Folder Structure

```plaintext
week4-user-registration/
├── index.html       # Main View
├── app.js           # AngularJS Controller
├── style.css        # Styling
└── README.md        # Documentation
```

---

## ▶️ How to Run

1. Download or clone the folder
2. Open `index.html` in your browser
3. Or, open the folder in VS Code and use **Live Server**

---

## 📸 Screenshots

### ✅ Form View

```plaintext
Full Name: [              ]  ✴️ Required
Email:     [              ]  ✴️ Must be valid
Password:  [              ]  ✴️ Min 6 chars

[ Register ] ✅ (Enabled only when valid)

🎉 Registered Successfully!
```

---

## 🧠 What You Learn

- How to build forms in AngularJS
- How to use `ng-model` to bind inputs
- How to use AngularJS’s built-in validators
- How to conditionally show/hide messages
- How to manage form submission logic

---
