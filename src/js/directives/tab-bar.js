'use strict';

module.exports = function(DataService) {
	return {
		replace: true,
		restrict: "E",
		scope: {
			activeType: "=",
			activeGender: "=",
			citiesAreUp: '='
		},
		templateUrl: 'tab-bar',
		controller: ['$scope', function ($scope){
			console.log('tab-bar loaded');
			this.setActiveType = function (type){
				$scope.activeType = type;
				DataService.setActiveType(type);

				if(type === 'location'){
					$scope.citiesAreUp = true;
				}
			};

			this.getActiveType = function() {
				return $scope.activeType;
			};

			this.setActiveGender = function(gender){
				$scope.activeGender = gender;
				DataService.setActiveGender(gender);
			};

			this.getActiveGender = function() {
				return $scope.activeGender;
			};
		}],
		link: function (scope, elem, attrs){


		}
	};
};
