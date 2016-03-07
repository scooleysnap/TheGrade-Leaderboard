'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').controller('LeaderboardController', ['$scope', '$rootScope', 'DataService', require('./LeaderboardController')]);
