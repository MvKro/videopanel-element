angular.module('polymer.controllers',[])

.controller('HomeController',['$scope',function($scope){
  $scope.imgUrl="";
  $scope.send= function(url){
      $scope.imgUrl=url;
  }
}])
