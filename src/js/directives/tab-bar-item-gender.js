'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			gender: '@',
			label: '@',
			icon: '@'
		},
		templateUrl: 'tab-bar-item-gender',
		require: '^tabBar',
		controller: ['$scope', function(){
		}],
		link: function (scope, elem, attrs, tabBarCtrl){
			
			scope.makeActiveGender = function() {
				if(!scope.isActiveGender()){
					tabBarCtrl.setActiveGender(scope.gender);
				}
			};

			scope.isActiveGender = function() {
				return tabBarCtrl.getActiveGender() === scope.gender;
			};

		}
	};
};