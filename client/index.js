'use strict';

angular.module('alpha', [])
.run(['$rootScope', function($rootScope) {
  console.info('running the run function');
  $rootScope.z = 12;
}])
.controller('rainbow', ['$scope', function($scope) {
  console.info('rainbow controller initialized');
  $scope.colors = ['blue', 'green', 'yellow'];

  $scope.removeColor = function(index) {
    console.warn('you clicked remove', index);
    $scope.colors.splice(index, 1);
  };

  $scope.newcolor = '#ff33cc';
  $scope.addColor = function() {
    console.warn('you just clicked add color');
    var color = $scope.newcolor;
    console.info('you want to add the color', color);
    $scope.colors.push(color);
  };
}])
.controller('listfun', ['$scope', function($scope) {
  console.info('listfun controller initialized');

  $scope.compute = function() {
    console.info('compute');
    $scope.numbers = $scope.numString.split(',').map(function(x) {
      return x * 1;
    });
    computeStats();
  };
  $scope.removeNumber = function(index) {
    $scope.numbers.splice(index, 1);
    computeStats();
  };
  $scope.addNumber = function() {
    $scope.numbers.push($scope.number);
    computeStats();
  };
  $scope.getBg = function() {
    return num % 2 ? 'pink' : 'green';
  };

  function computeStats() {
    $scope.sum = $scope.numbers.reduce(function(x, y) {return x + y;});
    $scope.product = $scope.numbers.reduce(function(x, y) {return x * y;});
  }
}])
.controller('beta', ['$scope', function($scope) {
  console.info('beta controller initialized');
  $scope.x = 3;
  $scope.y = 2;
}])
.controller('gamma', ['$scope', function($scope) {
  console.info('gammaa controller initialized');
  $scope.x = 5;
  $scope.y = 7;
}])
.controller('calculator', ['$scope', function($scope) {
  console.info('calculator controller initialized');
  $scope.compute = function() {
    console.warn('we just clicked the green compute button');

    var result;
    var x = $scope.x;
    var y = $scope.y;

    switch($scope.op) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x + y;
    }
    $scope.result = result;
  }
}]);
