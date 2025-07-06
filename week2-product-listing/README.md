# 🛍️ AngularJS Product Listing App

![AngularJS](https://img.shields.io/badge/AngularJS-1.8.2-red?logo=angularjs&style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![VS Code](https://img.shields.io/badge/Editor-VS%20Code-blue?style=for-the-badge&logo=visualstudiocode) ![Live Server](https://img.shields.io/badge/Live_Server-Enabled-brightgreen?style=for-the-badge) ![Status](https://img.shields.io/badge/Status-Complete-green?style=for-the-badge)

---

## 📌 Table of Contents

- [🛍️ AngularJS Product Listing App](#️-angularjs-product-listing-app)
  - [📌 Table of Contents](#-table-of-contents)
  - [📝 Project Overview](#-project-overview)
  - [✨ Features](#-features)
  - [🧰 Technologies Used](#-technologies-used)
  - [🖼️ Screenshots](#️-screenshots)
  - [⚙️ How It Works](#️-how-it-works)
    - [✅ 1. `ng-repeat`](#-1-ng-repeat)
    - [✅ 2. `ng-model`](#-2-ng-model)
    - [✅ 3. `ng-click`](#-3-ng-click)
    - [✅ 4. `filter`](#-4-filter)
  - [📁 Folder Structure](#-folder-structure)
  - [▶️ How to Run](#️-how-to-run)
  - [✅ Conclusion](#-conclusion)

---

## 📝 Project Overview

This project is a **Product Listing Web App** built using **AngularJS**. It demonstrates key AngularJS concepts like:

- Displaying items dynamically with `ng-repeat`
- Filtering items live with `filter`
- Handling button clicks with `ng-click`
- Two-way data binding using `ng-model`

---

## ✨ Features

- ✅ Real-time product search
- ✅ Dynamic product list rendering
- ✅ Add-to-cart functionality with live count
- ✅ Clean, user-friendly interface

---

## 🧰 Technologies Used

| Tool            | Usage                     |
| --------------- | ------------------------- |
| AngularJS 1.8.2 | Frontend framework        |
| HTML5           | Structure & layout        |
| CSS3            | Styling                   |
| JavaScript      | Controller logic          |
| Live Server     | Local development preview |

---

## 🖼️ Screenshots

```md
---

| 🛒 Cart Items: 2 |
| |
| 🔍 [Smart] |
| |
| 📦 Smartwatch ₹3000 [Add to Cart] |
| 📦 Smartphone ₹20000 [Add to Cart] |

---
```

---

## ⚙️ How It Works

### ✅ 1. `ng-repeat`

```html
<div ng-repeat="product in products"></div>
```

- Loops through every product in `$scope.products`
- Dynamically creates a card for each item

---

### ✅ 2. `ng-model`

```html
<input type="text" ng-model="searchText" />
```

- Two-way binds the user’s input to a variable `searchText`
- Used in real-time search (live filtering)

---

### ✅ 3. `ng-click`

```html
<button ng-click="addToCart(product)">Add to Cart</button>
```

- Triggers a function defined in the controller
- Adds that product to the `cart` array

---

### ✅ 4. `filter`

```html
ng-repeat="product in products | filter:searchText"
```

- Filters the product list by name based on what the user types
- Works seamlessly with `ng-model`

---

## 📁 Folder Structure

```md
week2-product-listing/
├── index.html            # View Layer (HTML + Angular Directives)
├── app.js                # Controller logic (AngularJS + Scope)
└── README.md             # Documentation
```

---

## ▶️ How to Run

1. Clone or download the folder.
2. Open `index.html` in VS Code.
3. Right-click → **"Open with Live Server"** _(if installed)_.
4. Type in the search box to filter products, and click buttons to add to cart.

---

## ✅ Conclusion

You now have understood the core concepts of AngularJS:

- 🔁 How to loop through data (`ng-repeat`)
- 🔍 How to filter and search (`filter`)
- 🧠 How to bind data to input (`ng-model`)
- ⚡ How to handle events (`ng-click`)

This lays the foundation for interactive AngularJS apps.

---
