describe('thermometerSensorFactory', function() {
	'use strict';

	var thermometerSensor;

	beforeEach(module('app'));

	beforeEach(inject(function(_thermometerSensor_) {
		thermometerSensor = _thermometerSensor_;
	}));

	afterEach(function() {

	});

	it('should return numeric temperature', function() {
		var temperature = thermometerSensor.getTemperature();

		expect(isNaN(temperature)).toBeFalsy();
	});
  });
