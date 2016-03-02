'use strict';

module.exports = function(DataService) {
	return {
		templateUrl: 'filter-view',
		restrict: 'E',
		replace: true,
		controller: function($scope){
			$scope.filtersAreVisible = false;
			$scope._activeFilters = {};

			$scope.showFilters = function(){
				if(!$scope.filtersAreVisible){
					$scope.filtersAreVisible = true;
				}

			};

			$scope.hideFilters = function(){
				if($scope.filtersAreVisible){
					$scope.filtersAreVisible = false;
				}

			};

			$scope.hideDistanceFilter = function(){
				if($scope.activeType === 'location'){

					return true;
				}
				return false;
			};

			$scope.isActiveFilter = function(filter){
				if($scope._activeFilters[filter]){
					return true;
				}
				return false;
			};

			$scope.activateFilter = function(filter){
				if(!$scope._activeFilters[filter]){
					$scope._activeFilters[filter] = $scope.filters[filter];
				}
			};

			$scope.toggleFilter = function(filter){
				if(typeof $scope._activeFilters[filter] !== 'undefined'){
					delete $scope._activeFilters[filter];
				} else {
					$scope._activeFilters[filter] = $scope.filters[filter];
				}
			}

			

			$scope.applyFilters = function(){
				DataService.setActiveFilters($scope._activeFilters);
			}

		},
		link: function(scope, elem, attrs){
			scope.filters = {
				'radius_mi' : '2',
				'age_min' : 18,
				'age_max' : 25,
				'occupation' : 'All',
				'religion' : 'All'
			};
		}
	}
}