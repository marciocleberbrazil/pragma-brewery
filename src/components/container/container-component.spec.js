describe('Component: containerComponent', function () {
	beforeEach(module('app.container.container-component'));

	var element;
	var scope;
	beforeEach(inject(function($rootScope, $compile){
			scope = $rootScope.$new();
			scope.beer = {
				name: 'Beer 1',
				type: 'Pilsner',
				temperature: {
					min: 4,
					max: 6
				}
			};
			
			
	  	element = angular.element('<container-component beer="beer"></container-component>');
			element = $compile(element)(scope);
			scope.$apply();
	}));

	it('should render the text', function() {
	  var h1 = element.find('h1');
	  expect(h1.text()).toBe('Beer 1');
	});

});
