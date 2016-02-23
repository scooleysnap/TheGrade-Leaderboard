'use strict';

module.exports = function() {
	return {
		replace: true,
		restirct: "E",
		scope: {},
		templateUrl: 'filter-view',
		controller: function ($scope){

		},
		link: function (scope, elem, attrs){
			scope.numActiveFilters = 0;
			scope.activeFilters = {};
			scope.filters = {
				'radius_mi': {
					'value': '2',
					'isActive': false
				},
				'age_min': {
					'value': 18,
					'isActive': false
				},
				'age_max': {
					'value': 25,
					'isActive': false
				},
				'occupation': {
					'value': '',
					'isActive': false
				},
				'religion': {
					'value': '',
					'isActive': false
				}
			};

			scope.isActive = function(filter){
				return scope.filters[filter].isActive;
			};

			scope.activateFilter = function(filter){
				if (!scope.isActive(filter)){
					scope.filters[filter].isActive = true;
					scope.numActiveFilters++;
				}
			};

			scope.toggleFilter = function(filter){
				if (scope.isActive(filter)){
					scope.filters[filter].isActive = false;
					scope.numActiveFilters--;
				}else {
					scope.filters[filter].isActive = true;
					scope.numActiveFilters++;
				}
			};

			scope.resetFilters = function(){
				for (var key in scope.filters){
					scope.filters[key].isActive = false;
				}
				scope.numActiveFilters = 0;
			};

			scope.pushActiveFilters = function(){
				if (scope.numActiveFilters > 0){
					
					scope.activeFilters = {};
					
					for (var key in scope.filters){
						
						if (scope.filters[key].isActive === true){
							scope.activeFilters[key] = scope.filters[key].value;
							
						}
					}

					console.log(scope.activeFilters);
				}
			};

		}
	};
};
