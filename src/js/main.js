'use strict';

require('angular');

angular.module('TheGrade.Leaderboard', [require('angular-route')]).config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'LeaderboardController',
		templateUrl: 'leaderboard-view'
	})
	.otherwise({
		redirectTo: '/'
	});
});

require('./services');
require('./controllers');
require('./directives');
