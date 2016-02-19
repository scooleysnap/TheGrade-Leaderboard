'use strict';

module.exports = function(filterService){
	return {
		templateUrl: 'filter-view',
		require: 'ngModel',
		link: function(scope, elem, attrs) {

			scope.selectFilter = function(filter, value) {
				filterService.addFilter(filter, value);
			};
			scope.deselectFilter = function(filter, value) {
				filterService.addFilter(filter, value);
			};
			scope.updateFilter = function(filter, value){
				filterservice.activeFilters[filter] = value;
			}
			scope.isSelected = function(filter, value){
				return filter in filterService.activeFilters;
			};

		}
	}
};