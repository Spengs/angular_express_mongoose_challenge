var myApp = angular.module('myApp', ['ngRoute']);

console.log('working');

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/create', {
      templateUrl: 'views/templates/create.html',
      controller: 'CreateController',
    })
    .when('/listing', {
      templateUrl: 'views/templates/listing.html',
      controller: 'ListingController',
    })
    .otherwise({
      redirectTo: 'create'
    });
}]);
