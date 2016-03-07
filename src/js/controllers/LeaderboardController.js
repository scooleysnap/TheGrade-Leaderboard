'use strict';

module.exports = function($scope, $rootScope, DataService){
	//Inits for view
	$scope.activeType = "nearby";
	$scope.activeGender = "F";

	//Inits for DataService
	DataService.setActiveType($scope.activeType);
	DataService.setActiveGender($scope.activeGender);

	console.log(DataService.getUrl());


	$scope.isLoading = true;

	$scope.noResults = function(){
		if ($scope.users && $scope.users.length){
			return false;
		} else if (!$scope.isLoading){
			return true;
		}
		
	};

	function getData(){
		//set loading
		$scope.isLoading = true;
		//get data
		DataService.fetchData().success(function(data){
			$scope.users = data.data.rankings;
			$scope.isLoading = false;
		});
		
	}

	//Get Initial Data
	getData();

	$rootScope.$on('tabBar::activeTypeUpdated', function(event, data){
		console.log('Active Type Updated: ' + data);
		console.log(DataService.getUrl());
		getData();

	});

	$rootScope.$on('tabBar::activeGenderUpdated', function(event, data){
		console.log('Active Gender Updated: ' + data);
		console.log(DataService.getUrl());
		getData();
	});

	$rootScope.$on('cityList::activeCityUpdated', function(event, data){
		console.log('Active City Updated: ' + data);
		console.log(DataService.getUrl());
		getData();
	});

	$rootScope.$on('filterView::activeFiltersUpdated', function(event, data){
		console.log('Active Filters Updated: ' + data);
		console.log(DataService.getUrl());
		getData();
	});

};