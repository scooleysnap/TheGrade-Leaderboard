'use strict';

module.exports = function($rootScope, tabService){
	var _baseUrl = 'https://www.thegradedating.com/dev_envs/rbrisita/data/leaderboard/search.php?',
	_fbid = '48611106',
	_proxAuth = 'oE9FaTgLsDFNvQLkiYGS6ML2FdffDsi4SA54eN1qGKmYJymhEcsyBFtQokJc';



	var buildParams = function() {
		var _type = tabService.activeType;
		var _gender = tabService.activeGender;

		var _params = {};

		if (_type === 'location') {
			_params.type = _type;
			_params.city = 'Atlanta';
			_params.gender = _gender;
		}
		else {
			_params.type = _type;
			_params.gender = _gender;
		}

		return _params;
	};
	

	var makeUrl = function(params) {
		var _url = _baseUrl + '?fbid=' + _fbid + '&prox_auth_token=' + _proxAuth;


		_url += '&type=' + params.type,
		_url += '&gender=' + params.gender;
			

		if ('city' in params) {
			_url += '&city=' + params.city;
		}

		return _url;
	};

	this.requestUrl = function() {
		var params = buildParams();
		var finalUrl = makeUrl(params);

		return finalUrl;
	};

};