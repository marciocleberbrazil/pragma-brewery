describe('Check the container controller', function () {
    var controller, scope;

    beforeEach(module('app.container.container-component'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        scope = _$rootScope_.$new();
            
		controller = _$controller_('ContainerController', {
			$scope: scope
		});
    }));
    
    it('should set inicial temperature by 5 when min is 4 and max is 6', function() {
        controller.beer = {
            temperature: {
                min: 4,
                max: 6
            }
        };

        expect(controller.setContainerInitialTemperature).toBeDefined();
        controller.setContainerInitialTemperature();
        expect(controller.currentTemperature).toBe(5);
    });

    it('should set inicial temperature by 4.5 when min is 4 and max is 5', function() {
        controller.beer = {
            temperature: {
                min: 4,
                max: 5
            }
        };

        expect(controller.setContainerInitialTemperature).toBeDefined();
        controller.setContainerInitialTemperature();
        expect(controller.currentTemperature).toBe(4.5);
    });

    it('should set inicial temperature by 5.5 when min is 4 and max is 7', function() {
        controller.beer = {
            temperature: {
                min: 4,
                max: 7
            }
        };

        expect(controller.setContainerInitialTemperature).toBeDefined();
        controller.setContainerInitialTemperature();
        expect(controller.currentTemperature).toBe(5.5);
    });

    it('should set inicial temperature by 5 when min is 5 and max is 5', function() {
        controller.beer = {
            temperature: {
                min: 5,
                max: 5
            }
        };

        expect(controller.setContainerInitialTemperature).toBeDefined();
        controller.setContainerInitialTemperature();
        expect(controller.currentTemperature).toBe(5);
    });

    it('should set inicial temperature by 1.5 when min is -1 and max is 4', function() {
        controller.beer = {
            temperature: {
                min: -1,
                max: 4
            }
        };

        expect(controller.setContainerInitialTemperature).toBeDefined();
        controller.setContainerInitialTemperature();
        expect(controller.currentTemperature).toBe(1.5);
    });

    it('should set inicial temperature by -3.5 when min is -5 and max is -2', function() {
        controller.beer = {
            temperature: {
                min: -5,
                max: -2
            }
        };

        expect(controller.setContainerInitialTemperature).toBeDefined();
        controller.setContainerInitialTemperature();
        expect(controller.currentTemperature).toBe(-3.5);
    });

    it('should increase temperature from 5 to 5.5 by constant value 0.5', function() {
        controller.beer = {
            temperature: {
                min: 5,
                max: 5
            }
        };
        controller.setContainerInitialTemperature();
        expect(controller.increaseTemperature).toBeDefined();
        controller.increaseTemperature();
        expect(controller.currentTemperature).toBe(5.5);
    });

    it('should increase temperature from -5 to -4.5 by constant value 0.5', function() {
        controller.beer = {
            temperature: {
                min: -5,
                max: -5
            }
        };
        controller.setContainerInitialTemperature();
        expect(controller.increaseTemperature).toBeDefined();
        controller.increaseTemperature();
        expect(controller.currentTemperature).toBe(-4.5);
    });

    it('should decrease temperature from 5 to 4.5 by constant value 0.5', function() {
        controller.beer = {
            temperature: {
                min: 5,
                max: 5
            }
        };
        controller.setContainerInitialTemperature();
        expect(controller.decreaseTemperature).toBeDefined();
        controller.decreaseTemperature();
        expect(controller.currentTemperature).toBe(4.5);
    });

    it('should decrease temperature from -5 to -5.5 by constant value 0.5', function() {
        controller.beer = {
            temperature: {
                min: -5,
                max: -5
            }
        };
        controller.setContainerInitialTemperature();
        expect(controller.decreaseTemperature).toBeDefined();
        controller.decreaseTemperature();
        expect(controller.currentTemperature).toBe(-5.5);
    });

    it('should warn if the temperature is 7 and it is above maximum', function() {
        controller.beer = {
            temperature: {
                min: 3,
                max: 5
            }
        };
        controller.currentTemperature = 7;
        expect(controller.checkTemperature).toBeDefined();
        expect(controller.checkTemperature()).toBe('up');
    });

    it('should warn if the temperature is 2.5 and it is below minimum', function() {
        controller.beer = {
            temperature: {
                min: 3,
                max: 5
            }
        };
        controller.currentTemperature = 2.5;
        expect(controller.checkTemperature).toBeDefined();
        expect(controller.checkTemperature()).toBe('down');
    });

    it('should not warn because temperature is 4 and it is not out of range', function() {
        controller.beer = {
            temperature: {
                min: 3,
                max: 5
            }
        };
        controller.currentTemperature = 4;
        expect(controller.checkTemperature).toBeDefined();
        expect(controller.checkTemperature()).toBe('okay');
    });
});