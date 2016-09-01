myApp.controller('ListingController', ['$scope', '$http', function ($scope, $http) {
  console.log('ListingController running!');
  $scope.heroes = [];
  $scope.displayHeroId = '';

  getHeroes();


  $scope.deleteHero = function (id) {
      $http.delete('/heroes/' + id)
      .then(function () {
        console.log('DELETE /heroes/' + id);
        getHeroes();
      });
    };


  /** --- utility functions --- **/
  function getHeroes() {
    $http.get('/heroes')
      .then(function (response) {
          console.log('GET /heroes', response.data);
          var heroDataArray = response.data;
          $scope.heroes = heroDataArray;
        });
  }

}]);
