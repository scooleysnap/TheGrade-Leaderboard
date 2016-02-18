'use strict';

module.exports = function() {
	return {
		scope: true,
		templateUrl: 'tab-bar',
		controller: function($scope) {
			$scope.tabs = [];
			$scope.tabs.activeTab = 'nearby';

			$scope.tabs.setActiveTab = function(tab){
				$scope.tabs.activeTab = tab;
			};

			$scope.tabs.isActiveTab = function(tab){
				return $scope.tabs.activeTab === tab;
			};

			$scope.gender = [];
			$scope.gender.activeGender = 'f';
			$scope.gender.setActiveGender = function(gender) {
				$scope.gender.activeGender = gender;
			};

			$scope.gender.isActiveGender = function(gender) {
				return $scope.gender.activeGender === gender;
			}
		}
	};
}