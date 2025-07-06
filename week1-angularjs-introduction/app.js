
// Define the AngularJS Module
var app = angular.module("myApp", []);

// Attach controller to the module
app.controller("MainController", MainController);

// Define the controller function
function MainController($scope) {
  $scope.name = "Aaditya Kumar Mittal";
}