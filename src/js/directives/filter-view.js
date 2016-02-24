'use strict';

module.exports = function(FilterService, DataService) {
	return {
		replace: true,
		restirct: "E",
		scope: {
			filtersAreVisible: '=',
			activeType: '=',
			hideFilters: '&',
			activeFilters: '='
		},
		templateUrl: 'filter-view',
		controller: function ($scope){

		},
		link: function (scope, elem, attrs){
			scope.numActiveFilters = 0;
			scope.errorFilters = [];
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

			scope.hideDistance = function(){
				if (scope.activeType === 'location'){
					scope.filters.radius_mi.isActive = false;
					
					if (scope.activeFilters['radius_mi']) {
						delete scope.activeFilters['radius_mi'];
					}
					
					return true;
				}
				return false;
			}

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

			scope.cancelFilters = function(){
				for (var key in scope.filters){
					scope.filters[key].isActive = false;
				}
				scope.numActiveFilters = 0;
				scope.activeFilters = {};
				DataService.setActiveFilters(scope.activeFilters);
				scope.hideFilters();
			};

			scope.validateFilters = function(){

			}

			scope.pushActiveFilters = function(){
				if (scope.numActiveFilters > 0){
					
					scope.activeFilters = {};
					scope.errorFilters = [];
					//make sure min age is less than max age
					if(scope.filters.age_min.isActive && scope.filters.age_max.isActive){
							
							if (scope.filters.age_min.value >= scope.filters.age_max.value) {
								scope.errorFilters.push('Max age is less than min age');	
							}

							if (scope.filtersForm.age_min.$error.min || scope.filtersForm.age_max.$error.min || scope.filtersForm.age_min.$error.max || scope.filtersForm.age_max.$error.max){
								scope.errorFilters.push('Age must be between 18 and 100');	
							}
							
					}


					
					for (var key in scope.filters){
						
						if (scope.filters[key].isActive === true){

							// check for blank strings in options
							if (scope.filters[key].value !== ''){
						
								scope.activeFilters[key] = scope.filters[key].value;

							} else {

								scope.errorFilters.push(key + ' - select value');

							}

							
						} 
					}




					if (scope.errorFilters.length > 0){
						alert('Please fix or remove the following filters: \n' + scope.errorFilters.join('\n'));
					} else {

						DataService.setActiveFilters(scope.activeFilters);
						scope.hideFilters();	
					}

					
				}
			};

		}
	};
};
