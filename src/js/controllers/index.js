'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').controller('LeaderboardController', ['$scope', '$rootScope', 'DataService', 'UserAgentService', require('./LeaderboardController')]);
