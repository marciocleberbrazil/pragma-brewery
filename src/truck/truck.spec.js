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

		it('should increase the temperature', function(){

			var currentTemperature = 1;
			truck.currentTemperature = currentTemperature;
			truck.doorOpen = true;
			truck.toggleDoor();
			var timerStep = 0.5;
			interval.flush(2000);
			expect(truck.currentTemperature).toBe(currentTemperature - timerStep);

			/*expect(truck).toBeDefined();
			expect(truck.close).toBeDefined();

			var timerStep = 0.5;
			var currentTemperature = 1;
			truck.currentTemperature = currentTemperature;
			truck.close(timerStep);

			interval.flush(1000);

			expect(truck.currentTemperature).toBe(currentTemperature - timerStep);*/
		});

		/*it('should stop timer based on truck temperature', function(){

		});*/
	});


    /*describe('Truck Controller', function () {





        it('should provide simple access to its data', function () {
            var scope = {};
            var truck = $controller('Truck', {$scope: scope});

			expect(truck).toBeDefined();

			expect(truck.currentTemperature).toBeDefined();


			expect(truck.minTemperature).toBeDefined();
			expect(truck.minTemperature).toBeGreaterThan(2);

			expect(truck.open).toBeDefined();

			expect(truck.close).toBeDefined();
        });
    });*/
});
