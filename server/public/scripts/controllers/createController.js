myApp.controller('CreateController', ['$scope', '$http', function ($scope, $http) {
  console.log('CreateController running!');
  // $scope.heroes = [];
  $scope.newHero = {};

  $scope.submitHero = function () {
      var data = $scope.newHero;
      $http.post('/heroes', data)
      .then(function () {
        console.log('POST /heroes', data);
      });
    };



}]);
