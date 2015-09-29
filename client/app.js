/**
 * Created by gfrethem on 9/28/15.
 */
var app = angular.module('prezPicker3000', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.DemWinner ="";
    $scope.democrats = [];
    $scope.republicans = [];

    $http({
        method: 'GET',
        url: '/getDems'
    }).then(function (response) {
        $scope.democrats = response.data;
        $scope.DemWinner = $scope.democrats[randomNumber(0,4)];

    });

    $http({
        method: 'GET',
        url: '/getReps'
    }).then(function (response) {
        $scope.republicans = response.data;
        $scope.RepWinner = $scope.republicans[randomNumber(0,4)];
    });

    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    };

    if (randomNumber(0,1) == 0) {
        $scope.demsWin = true;
    } else {
        $scope.repsWin = true;
    }

}]);