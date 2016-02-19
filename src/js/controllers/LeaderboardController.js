'use strict';

module.exports = function($scope, $rootScope, requestService){

	$scope.users = [];

	$rootScope.$on('tabService::activeTypeUpdated', function(event, type){
		console.log('tabService::activeTypeUpdated : ' + type );
		$scope.requestUrl = requestService.requestUrl();
		console.log($scope.requestUrl);
	});

	$rootScope.$on('tabService::activeGenderUpdated', function(event, gender){
		console.log('tabService::activeGenderUpdated : ' + gender );
		$scope.requestUrl = requestService.requestUrl();
		console.log($scope.requestUrl);
	});
};