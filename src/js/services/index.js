'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').service('TabService', ['$rootScope', require('./tab-service')]);
angular.module('TheGrade.Leaderboard').service('DataService', ['$rootScope', require('./data-service')]);
angular.module('TheGrade.Leaderboard').service('FilterService', ['$rootScope', require('./request-service')]);
angular.module('TheGrade.Leaderboard').service('requestService', ['$rootScope', 'TabService', 'FilterService', require('./filter-service')]);
