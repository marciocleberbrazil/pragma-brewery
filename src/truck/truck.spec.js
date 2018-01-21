describe('truck section', function () {

	var truck, scope;

	beforeEach(module('app.truck'));

	beforeEach(inject(function (_$controller_) {
		truck = _$controller_('Truck', {
			$scope: scope
		});
	}));

	describe('Close door', function () {

		it('should decrease the timer', function(){

			expect(truck).toBeDefined();
			expect(truck.close).toBeDefined();

			var timerStep = 0.5;
			var currentTemperature = 1;
			truck.currentTemperature = currentTemperature;
			truck.close(timerStep);
			expect(truck.currentTemperature).toBe(currentTemperature - timerStep);
		});

		it('should stop timer based on truck temperature', function(){

		});

		it('should disable close button', function(){

		});

		it('should enable open button', function(){

		});
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
