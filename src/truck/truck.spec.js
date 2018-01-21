describe('truck section', function () {

	var truck, scope, interval;

	beforeEach(module('app.truck'));

	beforeEach(inject(function (_$controller_, _$interval_) {
		truck = _$controller_('Truck', {
			$scope: scope
		});
		interval = _$interval_;
	}));

	describe('Close door', function () {
		var currentTemperature;

		beforeEach(function(){
			currentTemperature = 5;
			truck.currentTemperature = currentTemperature;
		});

		it('should increase the temperature', function(){
			truck.doorOpen = false;
			truck.toggleDoor();
			var timerStep = 0.5;
			interval.flush(1000);
			expect(truck.currentTemperature).toBe(currentTemperature + timerStep);
		});

		it('should decrease the temperature', function(){
			truck.doorOpen = true;
			truck.toggleDoor();
			var timerStep = 0.5;
			interval.flush(1000);
			expect(truck.currentTemperature).toBe(currentTemperature - timerStep);
		});

		it('should not decrease minimal temperature', function(){
			var minimalTemperature = 4;
			currentTemperature = 4;
			truck.currentTemperature = currentTemperature;

			truck.doorOpen = true;
			truck.toggleDoor();
			interval.flush(1000);
			expect(truck.currentTemperature).toBe(minimalTemperature);
		});
	});
});
