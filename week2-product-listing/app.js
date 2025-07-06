var application = angular.module("myApp", []);

// Defining Controllers
application.controller("ProductController", ProductController);

/** @ngInject */
function ProductController($scope) {
  $scope.products = [
    { name: "Laptop", price: 50000 },
    { name: "Smartphone", price: 20000 },
    { name: "Headphones", price: 1500 },
    { name: "Smartwatch", price: 3000 },
    { name: "Keyboard", price: 800 },
  ];

  $scope.cart = [];

  $scope.addToCart = function (product) {
    $scope.cart.push(product);
  };
}
