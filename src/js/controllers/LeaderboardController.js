'use strict';

module.exports = function($scope, $rootScope, DataService, UserAgentService){
	console.log('LeaderboardController loaded');
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
		console.log('init ajax request');
		//get data
		DataService.fetchData().success(function(data){
			//get current user data if it exists
			if(data.data.user_rank_details){
				$scope.currentUser = data.data.user_rank_details;
			} else {
				$scope.currentUser = null;
			}
			$scope.users = data.data.rankings;
			$scope.isLoading = false;
			console.log('ajax request success');
		});
		
	}

	//Set height of body/html for Android
	var _isAndroid = UserAgentService.isAndroid();

	if(_isAndroid){
		setAndroidHeight();
	}

	function setAndroidHeight(){
		var _height = window.outerHeight;
		console.log('setting android height');
		angular.element(document.querySelectorAll('body')).css('height', _height + 'px');

	}

	$scope.hideActiveUser = function(){
		if($scope.currentUser === null){
			return true;
		}
		return false;
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