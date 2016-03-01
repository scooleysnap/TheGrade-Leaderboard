'use strict';

module.exports = function(DataService) {
	return {
		templateUrl: 'filter-view',
		restrict: 'E',
		replace: true,
		controller: function($scope){
			$scope.filtersAreVisible = false;

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

			$scope.filters = {
				'range_mi' : {
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
				'occupation' : {
					'value' : '',
					'isActive' : false
				},
				'religion' : {
					'value' : '',
					'isActive' : false
				}
			};

			$scope.isActiveFilter = function(filter){
				scope.filters[filter].isActive = true;
			};

		},
		link: function(scope, elem, attrs){

		}
	}
}