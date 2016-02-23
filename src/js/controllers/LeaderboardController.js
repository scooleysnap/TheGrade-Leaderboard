'use strict';

module.exports = function($scope, $rootScope, DataService){
	
	$scope.users = DataService.fetchData();

	//Set initial states
	$scope.activeType = 'nearby';
	$scope.activeGender = 'F';
	$scope.activeFilters = {};
	$scope.activeCity = 'Atlanta';

	// hide filters by default
	$scope.filtersAreVisible = false;

	$scope.showFilters = function(){
		$scope.filtersAreVisible = true;
	}

	$scope.hideFilters = function(){
		$scope.filtersAreVisible = false;
	}

	//hide cities by default

	$scope.citiesAreVisible = function(){
		if ($scope.activeType === 'location'){
			return true;
		}
		return false;
	};

	$scope.citiesAreUp = true;

	$scope.toggleCityList = function(){
		if ($scope.citiesAreUp){
			scope.citiesAreUp = false;
		}
	}




};