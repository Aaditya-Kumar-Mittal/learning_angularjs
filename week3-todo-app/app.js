var application = angular
  .module("todoApplication", [])
  .controller("TodoController", TodoController);

/** @ngInject */
function TodoController($scope) {
  // Initial list of todos
  $scope.todos = [{ text: "Learn AngularJS" }, { text: "Build Todo App" }];

  // Functionalities

  // Add a new todo
  $scope.addTodo = function () {
    // Checks if the variable is not undefined, null, or an empty string. Removes any extra spaces from the beginning and end of the input using .trim().
    if ($scope.newTodo && $scope.newTodo.trim() !== "") {
      $scope.todos.push({ text: $scope.newTodo });
      $scope.newTodo = ""; // Clear the input
    }
  };

  // Remove a todo by index
  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };
}
