'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').service('DataService', ['$rootScope', '$http', require('./data-service')]);
