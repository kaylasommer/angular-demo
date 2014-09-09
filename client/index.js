(function(){
  'use strict';

  angular.module('demo', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.name = 'Groot!';
    $scope.age = 25;
    $scope.dogs = [
      {name:'fido', age:3},
      {name:'churro', age:5},
      {name:'jarvis',age:7}
    ];
  }]);

})();

