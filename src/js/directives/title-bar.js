'use strict';

module.exports = function() {
	return {
		templateUrl: 'title-bar',
		restrict: 'E',
		replace: true,
		scope: {
			showFilters: '&',
			citiesAreUp: '&',
			activeType: '=',
			activeCity: '='
		},
		controller: function($scope){

			$scope.disableFilterButton = function(){
				if ($scope.citiesAreUp() === true){
					return true;
				}
				return false;
			}

			var titleBarTitle = '';

			$scope.getTitle = function(){
				if($scope.activeType === 'location'){
					if($scope.activeCity === ''){
						titleBarTitle = 'Location';
						return titleBarTitle;
					} else {
						titleBarTitle = $scope.activeCity.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase()});
						return titleBarTitle;
					}
				} else {
					titleBarTitle = $scope.activeType.charAt(0).toUpperCase() + $scope.activeType.slice(1);
					return titleBarTitle;
				}
			};

		},
		link: function(scope, elem, attrs){

		}
	}
}