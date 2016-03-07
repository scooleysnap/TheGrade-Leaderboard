'use strict'

module.exports = function(){

	function getMobileOperatingSystem() {
	  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	  console.log('looking up user agent');
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
	//cache the UA
	var _mobileOS = getMobileOperatingSystem();

	this.getMobileOS = function(){
		return _mobileOS;
	}
}