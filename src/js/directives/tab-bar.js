'use strict';

module.exports = function(TabService, DataService) {
	return {
		replace: true,
		restrict: "E",
		scope: {
			activeType: "=",
			activeGender: "="
		},
		templateUrl: 'tab-bar',
		controller: function ($scope){

			this.setActiveType = function (type){
				$scope.activeType = type;
				DataService.setActiveType(type);
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
		},
		link: function (scope, elem, attrs){

			scope.types = TabService.getTypes();
			scope.genders = TabService.getGenders();


		}
	};
};
