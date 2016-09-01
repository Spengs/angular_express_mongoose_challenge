myApp.controller('CreateController', ['$scope', '$http', function ($scope, $http) {
  console.log('CreateController running!');
  // $scope.heroes = [];
  $scope.newHero = {};
  $scope.power = {};
  $scope.powers = [
    {type:"Invisibility", display: "Invisibility"},
    {type:"Flight", display: "Flight"},
    {type:"Super Speed", display: "Super Speed"},
    {type:"Heat Vision", display: "Heat Vision"},
    {type:"Super Strength", display: "Super Strength"},
    {type:"Accelerated Healing", display: "Accelerated Healing"},
    {type:"Power Blast", display: "Power Blast"},
    {type:"Animal Affinity", display: "Animal Affinity"},
  ];

  $scope.submitHero = function () {
      var data = $scope.newHero;
      $http.post('/heroes', data)
      .then(function () {
        console.log('POST /heroes', data);
      });
    };



}]);
