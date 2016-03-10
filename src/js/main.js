'use strict';

require('angular');
var attachFastClick = require('fastclick');

angular.module('TheGrade.Leaderboard', [require('angular-route')]).config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'LeaderboardController',
		templateUrl: 'leaderboard-view'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

angular.module('TheGrade.Leaderboard').run(function(){
	attachFastClick(document.body);
});

require('./services');
require('./controllers');
require('./directives');
