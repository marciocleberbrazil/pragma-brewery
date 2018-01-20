(function(){
	'use strict';

	angular
		.module('app')
		.factory('thermometerSensor', thermometerSensor)

	thermometerSensor.$inject = [];

	function thermometerSensor() {
		var service = {
			getTemperature: getTemperature
		};

		return service;

		function getTemperature() {
			return 0;
		}
	}
})();
