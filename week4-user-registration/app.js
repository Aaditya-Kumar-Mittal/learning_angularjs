var app = angular
  .module("formApp", [])
  .controller("FormController", FormController);

/** @ngInject */
function FormController($scope) {
  $scope.user = {};
  $scope.isSubmitted = false;

  $scope.submitForm = function () {
    if ($scope.userForm.$valid) {
      $scope.submitted = true;
      console.log("User Registered:", $scope.user);
    }
  };
}
