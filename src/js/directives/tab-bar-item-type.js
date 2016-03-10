'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			type: '@',
			label: '@',
			icon: '@'
		},
		templateUrl: 'tab-bar-item-type',
		require: '^tabBar',
		controller: ['$scope', function(){
			console.log('tab-bar-item-type loaded');
		}],
		link: function (scope, elem, attrs, tabBarCtrl){
			
			scope.makeActiveType = function() {
				if (!scope.isActiveType()){
					tabBarCtrl.setActiveType(scope.type);	
				}
				
			};

			scope.isActiveType = function() {
				return tabBarCtrl.getActiveType() === scope.type;
			};

		}
	};
};
