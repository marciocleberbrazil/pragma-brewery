describe('truck section', function () {

    beforeEach(module('app.truck'));

    describe('Truck Controller', function () {

        var $controller;

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it('should provide simple access to its data', function () {
            var scope = {};
            var truck = $controller('Truck', {$scope: scope});

            expect(truck).toBeDefined();
            expect(truck.name).toBeDefined();
            expect(truck.number).toBeDefined();

            expect(truck.name).toBe('Kaiser Sose');
            expect(truck.number).toBe('867-5309');


        });
    });
});
