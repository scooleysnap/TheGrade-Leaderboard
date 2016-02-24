'use strict';

module.exports = function($rootscope, $http){
	
  var _baseUrl = 'https://www.thegradedating.com/dev_envs/rbrisita/data/leaderboard/search.php?',
  _proxAuth = window.theGrade.proxAuth,
  _fbid = window.theGrade.fbid,
  _activeType = '',
  _activeGender = '',
  _activeCity = '',
  _activeFilters = {};

  this.setActiveType = function(type){
    _activeType = type;
    if (type !== 'location'){
      $rootscope.$emit('tabBar::activeTypeUpdated', type);
    } else if (type === 'location' && _activeCity !== '') {
      $rootscope.$emit('tabBar::activeTypeUpdated', type);
    }
  }

  this.setActiveGender = function(gender){
    _activeGender = gender;
    $rootscope.$emit('tabBar::activeGenderUpdated', gender);
  }

  this.setActiveCity = function(city){
    _activeCity = city;
    $rootscope.$emit('cityList::activeCityUpdated', city);
  }

  this.setActiveFilters = function(filters){
    _activeFilters = filters;
    if (filters !== {}){
      $rootscope.$emit('filters::activeFiltersUpdated', filters);
    }
  }

  function makeUrl(){
    var _url = _baseUrl + 'fbid=' + _fbid + '&prox_auth_token=' + _proxAuth;

    if (_activeType === 'location'){
      _url += '&type=location';
      _url += '&gender=' + _activeGender;
      _url += '&city=' + _activeCity;
    } else {
      _url += '&type=' + _activeType;
      _url += '&gender=' + _activeGender;
    }

    if (Object.keys(_activeFilters).length > 0){
      for (var key in _activeFilters){
        _url += '&' + key + '=' + _activeFilters[key];
      }
    }

    return _url;

  }

  this.fetchData = function(){
    return $http({method: "GET", url: makeUrl()});
  }

  this.requestUrl = function(){
    return makeUrl();
  }

};