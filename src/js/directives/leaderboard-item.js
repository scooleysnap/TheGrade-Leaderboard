'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			user: '=',
			goNativeUrl: '&'
		},
		templateUrl: 'leaderboard-item',
		controller: ['$scope', function(){
			console.log('leaderboard-item loaded');
		}],
		link: function (scope, elem, attrs){
			
			scope.goToProfile = function(){
				scope.goNativeUrl({location: 'profile', data: scope.user.fbid});
			}

		}
	};
};