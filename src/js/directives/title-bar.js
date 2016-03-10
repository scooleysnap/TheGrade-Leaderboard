'use strict';

module.exports = function() {
	return {
		templateUrl: 'title-bar',
		restrict: 'E',
		replace: true,
		controller: ['$scope', function($scope){
			console.log('title-bar loaded');
			var titleBarTitle = '';

			$scope.getTitle = function(){
				if($scope.activeType === 'location'){
					if(!$scope.activeCity){
						titleBarTitle = 'Location';
						return titleBarTitle;
					} else {
						titleBarTitle = $scope.activeCity.replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase()});
						return titleBarTitle;
					}
				} else {
					titleBarTitle = $scope.activeType.charAt(0).toUpperCase() + $scope.activeType.slice(1);
					return titleBarTitle;
				}
			};

		}],
		link: function(scope, elem, attrs){

		}
	}
}