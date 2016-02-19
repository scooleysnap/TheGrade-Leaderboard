'use strict';

module.exports = function($scope, $rootScope, requestService){

	$scope.users = [];

	$rootScope.$on('tabService::activeTypeUpdated', function(event, type){
		console.log('tabService::activeTypeUpdated : ' + type );
		requestService.buildUrl();
	});

	$rootScope.$on('tabService::activeGenderUpdated', function(event, gender){
		console.log('tabService::activeGenderUpdated : ' + gender );
		requestService.buildUrl();
	});

	$rootScope.$on('requestService::urlUpdated', function(event, url){
		console.log('requestService::urlUpdated : ' + url );
	});
};