var app = angular.module('app', ['ngRoute', 'ngAnimate'])

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html"
    })
    .when("/ninjas", {
      templateUrl: "views/ninjas.html"
    })
})


app.controller('control1', ["$scope", function ($scope) {
  $scope.ninjas = [
    {
      name: 'Yoshi',
      price: 40,
      available: true
    },
    {
      name: 'Crystal',
      price: 45,
      available: true
    },
    {
      name: 'Ru',
      price: 56,
      available: true
    },
    {
      name: 'Heroku',
      price: 60,
      available: true
    }
  ]
  $scope.addNinja = function () {
    $scope.ninjas.push({ name: $scope.ninjaName, price: Number($scope.ninjaPrice), available: true })
  }
}])