'use strict';

module.exports = function(DataService) {
	return {
		templateUrl: 'city-list',
		restrict: 'E',
		replace: true,
		controller: ['$scope', function($scope){
			$scope.citiesAreVisible = function(){
				if ($scope.activeType === 'location'){
					if($scope.citiesAreUp === true){
						
						
					}
					return true;
				}
				return false;
			};

			$scope.citiesAreUp = true;

			$scope.showCityList = function(){
				$scope.citiesAreUp = true;
			}

			$scope.hideCityList = function(){
				$scope.citiesAreUp = false;
			}

			$scope.toggleCityList = function(){
				if ($scope.activeCity){
					if ($scope.citiesAreUp === true){
						$scope.hideCityList();
					} else {
						$scope.showCityList();
					}
				}
			};


		}],
		link: function(scope, elem, attrs){
			scope.setActiveCity = function(city){
					scope.activeCity = city;
					DataService.setActiveCity(city);

					scope.hideCityList();
			};
		}
	}
}