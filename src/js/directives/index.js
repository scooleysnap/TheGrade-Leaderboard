'use strict';

require('angular');

angular.module('TheGrade.Leaderboard').directive('titleBar', require('./title-bar'));
angular.module('TheGrade.Leaderboard').directive('tabBar', ['TabService', require('./tab-bar')]);
angular.module('TheGrade.Leaderboard').directive('leaderboardItem', require('./leaderboard-item'));
angular.module('TheGrade.Leaderboard').directive('tabBarItemType', require('./tab-bar-item-type'));
angular.module('TheGrade.Leaderboard').directive('tabBarItemGender', require('./tab-bar-item-gender'));
angular.module('TheGrade.Leaderboard').directive('filterView', ['FilterService', require('./filter-view')]);
