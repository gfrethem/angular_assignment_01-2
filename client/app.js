/**
 * Created by gfrethem on 9/28/15.
 */
//var app = angular.module('prezPicker3000', []);
//
//app.controller('MainController', ['$scope', '$http', function($scope, $http) {
//    $scope.DemWinner ="";
//    $scope.democrats = [];
//    $scope.republicans = [];
//
//    $http({
//        method: 'GET',
//        url: '/getDems'
//    }).then(function (response) {
//        $scope.democrats = response.data;
//        $scope.DemWinner = $scope.democrats[randomNumber(0,4)];
//
//    });
//
//    $http({
//        method: 'GET',
//        url: '/getReps'
//    }).then(function (response) {
//        $scope.republicans = response.data;
//        $scope.RepWinner = $scope.republicans[randomNumber(0,4)];
//    });
//

//
//    if (randomNumber(0,1) == 0) {
//        $scope.demsWin = true;
//    } else {
//        $scope.repsWin = true;
//    }
//
//}]);

var candidatesArray = [];
var winningParty = "";

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};



$(function() {
    $.ajax({
        url: '/getDems'
    }).done(function (response) {
        for (i=0; i < response.length; i++) {
            var demCandidate = response[i].fname + ' ' + response[i].lname;
            candidatesArray.push(demCandidate);
            var $htmlToAppend = '<li>' + demCandidate + '</li>';
            $('.dems').append($htmlToAppend);
        }
    });

    $.ajax({
        url: '/getReps'
    }).done(function (response) {
        for (i=0; i < response.length; i++) {
            var repCandidate = response[i].fname + ' ' + response[i].lname;
            candidatesArray.push(repCandidate);
            var $htmlToAppend = '<li>' + repCandidate + '</li>';
            $('.reps').append($htmlToAppend);
        }
    });


    function pickAWinner() {
        var winnerIndex = randomNumber(0, (candidatesArray.length - 1));
        if (winnerIndex <= 4) {
            winningParty = "dems"
        } else {
            winningParty = "reps"
        }
        return candidatesArray[winnerIndex];
    }

    $('.displayButton').on('click', function() {
        $('.listOfCandidates').css('visibility', 'visible');
        $('.decideButton').css('visibility', 'visible');
    });

    $('.decideButton').on('click', function () {
        $('.winnerDisplay').children().remove();
        var newPres = pickAWinner();
        var $htmlToAppend = '<h2>The winner is: <div class="' + winningParty + '">' + newPres + '</div></h2>';
        $('.winnerDisplay').append($htmlToAppend);
        $('.winnerDisplay').css('visibility', 'visible');

    })

});

