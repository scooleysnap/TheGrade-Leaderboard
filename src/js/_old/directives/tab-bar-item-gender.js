'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			gender: '='
		},
		templateUrl: 'tab-bar-item-gender',
		require: '^tabBar',
		link: function (scope, elem, attrs, tabBarCtrl){
			
			scope.makeActiveGender = function() {
				tabBarCtrl.setActiveGender(scope.gender.gender);
			};

			scope.isActiveGender = function() {
				return tabBarCtrl.getActiveGender() === scope.gender.gender;
			};

		}
	};
};