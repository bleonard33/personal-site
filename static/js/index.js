angular.module('bleonard', [])
  .controller('sidebarController', ['$scope', function($scope) {
    $scope.testVar = 'sidebar';
  }])
.controller('bodyController', ['$scope', function($scope) {
    $scope.testVar = 'body';
  }])