'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').directive('tabBar', ['DataService', require('./tab-bar')]);
angular.module('TheGrade.Leaderboard').directive('tabBarItemType', require('./tab-bar-item-type'));
angular.module('TheGrade.Leaderboard').directive('tabBarItemGender', require('./tab-bar-item-gender'));
angular.module('TheGrade.Leaderboard').directive('titleBar', require('./title-bar'));
angular.module('TheGrade.Leaderboard').directive('cityList', ['DataService', require('./city-list')]);
angular.module('TheGrade.Leaderboard').directive('filterView', ['DataService', require('./filter-view')]);