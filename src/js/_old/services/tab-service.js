'use strict';

module.exports = function($rootScope){
	var _types = [
		{
			'type':'nearby',
			'label': 'nearby'
		},
		{
			'type':'location',
			'label': 'cities'
		},
		{
			'type':'friends',
			'label': 'friends'
		}
	];

	var _genders = [
		{
			'gender': 'F',
			'label': 'Female'
		},
		{
			'gender': 'M',
			'label': 'Male'
		},
	];

	this.getTypes = function(){
		return _types;
	};

	this.getGenders = function(){
		return _genders
	}

};