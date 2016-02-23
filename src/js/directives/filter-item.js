'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			filter: '=',
			filterName: '@'
		},
		templateUrl: 'tab-bar-item-type',
		require: '^tabBar',
		link: function (scope, elem, attrs, filterViewCtrl){
			scope.filter = {};
			scope.filter.name = scope.name;

			scope.pushActiveFilter = function(){
				filterViewCtrl.addActiveFilter(scope.filter);
			};

			scope.pullActiveFilter = function(){
				filterViewCtrl.addActiveFilter(scope.filter);
			};

			scope.isActiveFilter = function(){
				var _activeFilters = filterViewCtrl.getActiveFilters();

				var i;
				for (i=0, i < _activeFilters.length, i++) {
					if (_activeFilters[i].name === scope.name){
						return true;
					}
				}
				return false;
			};

			scope.toggleActiveFilter = function(){
				if (scope.isActiveFilter) {
					scope.pushActiveFilter;
				}
			}
		}
	};
};
