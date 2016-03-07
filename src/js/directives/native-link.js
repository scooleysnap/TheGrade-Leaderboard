'use strict';

module.exports = function(UserAgentService) {
	return {
		restrict: 'A',
		controller: function($scope){

			var _mobileOS = UserAgentService.getMobileOS();


			$scope.goNativeUrl = function(location, data){
				if (_mobileOS === 'iOS'){
					var baseUrl = 'thegrade://'
					var url = baseUrl + location;
					if (data !== undefined) {
						url += '/' + data;
					}
					
					window.location.href = url;
					console.log('iOS fired', url);

				} else if (_mobileOS === 'Android'){
					if(data !== undefined){
						Titanium.App.fireEvent("web2app", { text: location , id: data});
					} else {
						Titanium.App.fireEvent("web2app", { text: location });
					}
					console.log('Android Fired');
				}
			};



		},
		link: function(scope, elem, attrs){

		}
	}
}