'use strict';

module.exports = function($scope, $rootScope, DataService){
	
	$scope.users = DataService.fetchData();

	//Set initial states
	$scope.activeType = 'nearby';
	$scope.activeGender = 'F';
	$scope.activeFilters = {};
	$scope.activeCity = '';

	// hide filters by default
	$scope.filtersAreVisible = false;

	$scope.showFilters = function(){
		$scope.filtersAreVisible = true;
	}

	$scope.hideFilters = function(){
		$scope.filtersAreVisible = false;
	}
};