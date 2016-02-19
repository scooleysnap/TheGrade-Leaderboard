'use strict';

module.exports = function(){
	var _activeFilters = {};

	this.addFilter = function(filter, value){
		if (!(filter in _activeFilters)){
			_activeFilters[filter] = value;
		}
	}

	this.removeFilter = function(filter){
		if (filter in _activeFilters) {
			delete _filters[filter];
		}
	}

	this.resetFilters = function(){
		_activeFilters = {};
	}

	this.activeFilters = _activeFilters;
};