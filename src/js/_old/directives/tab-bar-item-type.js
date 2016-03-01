'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			type: '='
		},
		templateUrl: 'tab-bar-item-type',
		require: '^tabBar',
		link: function (scope, elem, attrs, tabBarCtrl){
			
			scope.makeActiveType = function() {
				tabBarCtrl.setActiveType(scope.type.type);
			};

			scope.isActiveType = function() {
				return tabBarCtrl.getActiveType() === scope.type.type;
			};

		}
	};
};
