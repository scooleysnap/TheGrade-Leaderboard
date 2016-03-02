'use strict'

module.exports = function($rootscope, $http){
	var _activeType = '';
	var _activeGender = '';
	var _activeCity = '';
	var _activeFilters = '';

	this.setActiveType = function(type){
		_activeType = type;
	}

	this.setActiveGender = function(gender){
		_activeGender = gender;
	}

	this.setActiveCity = function(city){
		_activeCity = city;
	};

	this.setActiveFilters = function(filters){
		_activeFilters = filters;
	}



}