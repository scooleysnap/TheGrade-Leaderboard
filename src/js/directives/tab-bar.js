'use strict';

module.exports = function(tabService) {
	return {
		scope: {},
		templateUrl: 'tab-bar',
		link: function (scope, elem, attrs){
			
			scope.selectType = function (type){
				tabService.setActiveType(type);
			};

			scope.isActiveType = function (type) {
				return type === tabService.activeType;
			};

			scope.selectGender = function (gender){
				tabService.setActiveGender(gender);
			};

			scope.isActiveGender = function (gender) {
				return gender === tabService.activeGender;
			};


		}
	};
};
