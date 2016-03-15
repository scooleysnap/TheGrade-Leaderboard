'use strict';

module.exports = function(DataService) {
	return {
		templateUrl: 'filter-view',
		restrict: 'E',
		replace: true,
		controller: ['$scope', function($scope){
			$scope.filtersAreVisible = false;
			var _activeFilters = {};

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

			$scope.clearFilters = function(){
				//clear active filters
				$scope._activeFilters = {};
				//reset all filters
				for(var key in $scope.filters){
					$scope.filters[key].isActive = false;
				}
			}

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
			};

			$scope.checkFilterAgeMin = function(){
				if ($scope.filters.age_min.value > $scope.filters.age_max.value){
					$scope.filters.age_min.value = $scope.filters.age_max.value;
				}
			};

			$scope.checkFilterAgeMax = function(){
				if($scope.filters.age_max.value < $scope.filters.age_min.value){
					if($scope.filters.age_min.value == 50){
						$scope.filters.age_max.value = 100;
					} else {
						$scope.filters.age_max.value = $scope.filters.age_min.value;
					}
				}
			};

			$scope.cancelButtonFilters = function(){
				for(var key in $scope.filters){
					if($scope.filters[key].isActive && !_activeFilters[key]){
						//remove un-applied filters
						$scope.filters[key].isActive = false;
					} else if (!$scope.filters[key].isActive && _activeFilters[key]){
						//re-apply active filters
						$scope.filters[key].isActive = true;
					}
				}
				$scope.hideFilters();
			}
			

			$scope.applyFilters = function(){
				//reset object
				_activeFilters = {};

				for (var key in $scope.filters){
					//only if filter is active and is not set to 'All' (in the case of occupation and religion)
					if ($scope.filters[key].isActive){
						_activeFilters[key] = $scope.filters[key].value;
					}
				}

				if(Object.keys(_activeFilters)){
					console.log(_activeFilters);
					DataService.setActiveFilters(_activeFilters);
					$scope.hideFilters();
				}else {
					$scope.hideFilters();
					console.log(_activeFilters);
				}

				
			};
			//generate options for age_min filters;
			$scope.ageRangeOptionsMin = {};

			for(var i = 18; i <= 50; i++){
				if(i != 50){
					$scope.ageRangeOptionsMin[i] = i;
				} else {
					$scope.ageRangeOptionsMin['50+'] = 50;
				}
			}

			//generate options for age_max filters
			$scope.ageRangeOptionsMax = {};
			
			for(var i = 18; i <= 50; i++){
				if(i != 50){
					$scope.ageRangeOptionsMax[i] = i;
				} else {
					$scope.ageRangeOptionsMax['50+'] = 100;
				}
			}

			


		}],
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