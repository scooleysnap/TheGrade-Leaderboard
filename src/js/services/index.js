'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').service('tabService', ['$rootScope', require('./tab-service')]);