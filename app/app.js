var myApp = angular.module('myApp', []);

myApp.controller('NamesController', function ($scope) {
  $scope.names = [
//    {'first': 'test',
//    'last': 'fart',}
  ];
  $scope.bgColors = [
    'none',
    'red',
    'blue',
    'pink',
    '#F8F8FF'
  ];
  $scope.myFonts = [
    'Open Sans',
    'Pacifico',
    'Miniver',
    'Limelight'
  ];
  $scope.myColor = [
    'gray',
    'green',
    '#F8F8FF'
  ];
  $scope.update = function () {
    $scope.names.length = 0;
    $scope.names.push({
      first: $scope.firstname,
      last: $scope.lastname
    });
  };
});
