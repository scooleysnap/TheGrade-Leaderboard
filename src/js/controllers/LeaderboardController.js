'use strict';

module.exports = function($scope, $rootScope, DataService){
	
	$scope.users = DataService.fetchData();

};