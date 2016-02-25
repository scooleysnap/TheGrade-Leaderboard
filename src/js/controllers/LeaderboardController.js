'use strict';

module.exports = function($scope, $rootScope, DataService){
	//Set initial states
	$scope.activeType = 'nearby';
	$scope.activeGender = 'F';
	$scope.activeFilters = {};
	$scope.activeCity = '';
	$scope.loading = true;

	//set up init data service
	DataService.setActiveType($scope.activeType);
	DataService.setActiveGender($scope.activeGender);
	DataService.setActiveCity($scope.activeCity);
	DataService.setActiveFilters($scope.activeFilters);

	console.log(DataService.requestUrl());

	function getData(){
		//set loading
		$scope.loading = true;
		//get data
		DataService.fetchData().success(function(data){
			$scope.users = data.data.rankings;
			$scope.loading = false;
		});
		
	}

	$scope.noResults = function(){
		if ($scope.users && $scope.users.length){
			return false;
		} else if (!$scope.loading){
			return true;
		}
		
	}

	//fetch initial data
	getData();





	// hide filters by default
	$scope.filtersAreVisible = false;

	$scope.showFilters = function(){
		$scope.filtersAreVisible = true;
	}

	$scope.hideFilters = function(){
		$scope.filtersAreVisible = false;
	}

	//event handling for data
	$rootScope.$on("tabBar::activeTypeUpdated", function(event, data){
		console.log(DataService.requestUrl());
		getData();
	});

	$rootScope.$on("tabBar::activeGenderUpdated", function(event, data){
		console.log(DataService.requestUrl());
		getData();
	});

	$rootScope.$on("cityList::activeCityUpdated", function(event, data){
		console.log(DataService.requestUrl());
		getData();
	});

	$rootScope.$on("filters::activeFiltersUpdated", function(event, data){
		console.log(DataService.requestUrl());
		getData();
	});
};