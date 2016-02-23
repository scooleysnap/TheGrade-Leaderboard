'use strict';

module.exports = function() {
	return {
		replace: true,
		restrict: "E",
		scope: {
			activeType: "=",
			activeCity: "=",
			citiesAreVisible: '=',
			citiesAreUp: '='
		},
		templateUrl: 'city-list',
		controller: function ($scope){
			$scope.setActiveCity = function(city){
				$scope.activeCity = city;
			}
		},
		link: function (scope, elem, attrs){

			scope.cities = ['Chicago', 'New York', 'Los Angeles'];



		}
	};
};
