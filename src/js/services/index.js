'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').service('DataService', ['$rootScope', '$http', require('./data-service')]);
angular.module('TheGrade.Leaderboard').service('UserAgentService', require('./user-agent-service'));
