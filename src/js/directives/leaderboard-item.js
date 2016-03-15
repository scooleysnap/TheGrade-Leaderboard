'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			user: '=',
			activeUser: '@?'
		},
		templateUrl: 'leaderboard-item',
		controller: ['$scope', function($scope){
			console.log($scope.user);
		}],
		link: function (scope, elem, attrs){
			var rankCell = angular.element(elem[0].querySelector('.leaderboard-item'));
			if ('activeUser' in attrs){
				rankCell.addClass('leaderboard-rank');
			} else {
				rankCell.addClass('leaderboard-count');
			}
		}
	};
};