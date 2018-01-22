describe('truck section', function () {

	var controller, scope, interval;

	beforeEach(module('app.truck'));

	beforeEach(inject(function (_$controller_) {
		controller = _$controller_('Truck', {
			$scope: scope
		});
	}));

	describe('Close door', function () {
		it('should exist increase the temperature', function(){
			expect(controller.increase).toBeDefined();
		});

		it('should exist decrease the temperature', function(){
			expect(controller.decrease).toBeDefined();
		});
	});
});
