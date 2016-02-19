'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').controller('LeaderboardController', ['$scope', '$rootScope', 'requestService', require('./LeaderboardController')]);
