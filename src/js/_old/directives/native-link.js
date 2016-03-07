'use strict';

module.exports = function() {
	return {
		restrict: 'A',
		replace: true,
		controller: function($scope){

			function getMobileOperatingSystem() {
			  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

			  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
			  {
			    return 'iOS';

			  }
			  else if( userAgent.match( /Android/i ) )
			  {

			    return 'Android';
			  }
			  else
			  {
			    return 'unknown';
			  }
			}


			_mobileOS = getMobileOperatingSystem();
			console.log(_mobileOS);

			$scope.goNativeUrl = function(location, data){
				if (_mobileOS === 'iOS'){
					var baseUrl = 'thegrade://'
					var url = baseUrl + location;
					if (data !== undefined) {
						url += '/' + data;
					}
					
					window.location.href = url;
					console.log('iOS fired');

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