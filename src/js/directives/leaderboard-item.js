'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			user: '='
		},
		templateUrl: 'leaderboard-item',
		link: function (scope, elem, attrs, tabBarCtrl){
			
			scope.goToProfile = function(){
				var baseUrl = 'thegrade://profile/';
				window.location.href = baseUrl + scope.user.fbid;
			}

		}
	};
};