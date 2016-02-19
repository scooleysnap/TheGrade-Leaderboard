'use strict';

module.exports = function($rootScope){
	var _types = ['nearby', 'location', 'friends'];
	var _genders = ['B', 'M', 'F'];

	//default values
	this.activeType = 'nearby';
	this.activeGender = 'F';

	this.setActiveType = function(type){
		if(_types.indexOf(type) >= 0) {
			this.activeType = type;
			$rootScope.$broadcast('tabService::activeTypeUpdated', type);
		}
	}

	this.setActiveGender = function(gender){
		if(_genders.indexOf(gender) >= 0) {
			this.activeGender = gender;
			$rootScope.$broadcast('tabService::activeGenderUpdated', gender);
		}
	}



};