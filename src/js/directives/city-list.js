'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			activeType: "=",
			activeCity: "=",
			citiesAreUp: '&'
		},
		templateUrl: 'city-list',
		controller: function ($scope){
			$scope.setActiveCity = function(city){
				$scope.activeCity = city;
				$scope.toggleCityList();
			};


			$scope.citiesAreVisible = function(){
				if ($scope.activeType === 'location'){
					return true;
				}
				return false;
			};

			var isUp = true;

			$scope.citiesAreUp = function(){
				if ($scope.activeCity === ''){
					return true;
				} else {
					if (isUp === true){
						return true;
					} else {
						return false;
					}
				}
			}

			$scope.toggleCityList = function(){
				if($scope.activeCity === ''){
					isUp = true;
				} else {
					if(isUp === true){
						isUp = false;
					} else {
						isUp = true;
					}
				}
			};
		},
		link: function (scope, elem, attrs){

			scope.cities = ['Chicago', 'New York', 'Los Angeles'];



		}
	};
};
