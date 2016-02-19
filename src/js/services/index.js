'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').service('tabService', ['$rootScope', require('./tab-service')]);
angular.module('TheGrade.Leaderboard').service('filterService', ['$rootScope', require('./request-service')]);
angular.module('TheGrade.Leaderboard').service('requestService', ['$rootScope', 'tabService', 'filterService', require('./filter-service')]);
