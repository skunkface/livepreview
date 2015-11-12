var myApp = angular.module('myApp', []);

myApp.controller('namesCtrl', function ($scope) {
  $scope.names = [
//    {'first': 'test',
//    'last': 'fart',}
  ];
  $scope.update = function() {
    $scope.names.push({
      first: $scope.firstname,
      last: $scope.lastname,
    })
  }
});