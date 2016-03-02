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
				if($scope.filters[filter].isActive){
					return true;
				}
				return false;
			};

			$scope.activateFilter = function(filter){
				if(!$scope.filters[filter].isActive){
					$scope.filters[filter].isActive = true;
				}
			};

			$scope.toggleFilter = function(filter){
				if($scope.filters[filter].isActive){
					$scope.filters[filter].isActive = false;
				} else {
					$scope.filters[filter].isActive = true;
				}
			}

			

			$scope.applyFilters = function(){
				//create and reset object
				var _activeFilters = {};

				for (var key in $scope.filters){
					//only if filter is active and is not set to 'All' (in the case of occupation and religion)
					if ($scope.filters[key].isActive && $scope.filters[key].value !== 'All'){
						_activeFilters[key] = $scope.filters[key].value;
					}
				}

				if(Object.keys(_activeFilters)){
					console.log(_activeFilters);
					$scope.hideFilters();
				}else {
					$scope.hideFilters();
					console.log(_activeFilters);
				}

				
			}

		},
		link: function(scope, elem, attrs){
			scope.filters = {
				'radius_mi' : {
					'value' : '2',
					'isActive' : false
				},
				'age_min' : {
					'value' : 18,
					'isActive' : false
				},
				'age_max' : {
					'value' : 25,
					'isActive' : false
				},
				'religion' : {
					'value' : 'All',
					'isActive' : false
				},
				'occupation' : {
					'value' : 'All',
					'isActive' : false
				}
			};
		}
	}
}