'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').directive('titleBar', require('./title-bar'));
angular.module('TheGrade.Leaderboard').directive('tabBar', ['tabService', require('./tab-bar')]);
angular.module('TheGrade.Leaderboard').directive('filterView', ['filterService', require('./filter-view')]);
