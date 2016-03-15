'use strict'

module.exports = function($rootScope, $http){
	var _baseUrl = 'https://www.thegradedating.com/dev_envs/rbrisita/data/leaderboard/search.php',
	_proxAuth = window.theGrade.proxAuth,
	_fbid = window.theGrade.fbid,
	_activeType = '',
	_activeGender = '',
	_activeCity = '',
	_activeFilters = {};

	function makeUrl(){
		var _url = _baseUrl + '?fbid=' + _fbid + '&prox_auth_token=' + _proxAuth;
		if(_activeType === 'location'){
			_url += '&type=location';
			_url += '&gender=' + _activeGender;
			_url += '&city=' + _activeCity;
		} else {
			_url += '&type=' + _activeType;
			_url += '&gender=' + _activeGender;
		}

		if(Object.keys(_activeFilters).length > 0){
			for(var key in _activeFilters){
				_url += '&' + key + '=' + _activeFilters[key];
			}
		}

		return _url;
	}

	this.setActiveType = function(type){
		_activeType = type;
		if(type !== 'location'){
			$rootScope.$emit('tabBar::activeTypeUpdated', type);
		} else if (type === 'location' && _activeCity !== ''){
			$rootScope.$emit('tabBar::activeTypeUpdated', type);
		}
	}

	this.setActiveGender = function(gender){
		_activeGender = gender;
		$rootScope.$emit('tabBar::activeGenderUpdated', gender);
	}

	this.setActiveCity = function(city){
		_activeCity = city;
		$rootScope.$emit('cityList::activeCityUpdated', city);
	};

	this.setActiveFilters = function(filters){
		_activeFilters = {};

		//catch the 'All' value for religion and occupation
		for(var key in filters){
			if(filters[key] !== 'All'){
				_activeFilters[key] = filters[key];
			}
		}
		$rootScope.$emit('filterView::activeFiltersUpdated', JSON.stringify(_activeFilters));
	}

	this.getUrl = function(){
		return makeUrl();
	}

	this.fetchData = function(){
	  return $http({method: "GET", url: makeUrl()});
	}





}