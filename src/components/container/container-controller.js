angular.module('app.container.container-component')
	.controller('ContainerController', ContainerController);

ContainerController.$inject = ['$scope'];

function ContainerController($scope) {
	var vm = this;
	vm.currentTemperature = 0;
	vm.temperatureStep = 0.5;

	$scope.$on('eventIncreaseTemperature', function(event, data) {
		vm.increaseTemperature();
	});

	$scope.$on('eventDecreaseTemperature', function(event, data) {
		vm.decreaseTemperature();
	});

	vm.checkTemperature = function () {
		var outOfRange = (vm.currentTemperature < vm.beer.temperature.min) || (vm.currentTemperature > vm.beer.temperature.max);
		if(outOfRange) {
			if(vm.currentTemperature > vm.beer.temperature.max)
				return 'up';
			if(vm.currentTemperature < vm.beer.temperature.min)
				return 'down';
		} else {
			return 'okay';
		}
	}

	vm.increaseTemperature = function () {
		vm.currentTemperature += vm.temperatureStep;
	}

	vm.decreaseTemperature = function () {
		vm.currentTemperature -= vm.temperatureStep;
	}

	vm.setContainerInitialTemperature = function () {
		vm.currentTemperature = ((vm.beer.temperature.max - vm.beer.temperature.min) / 2) + vm.beer.temperature.min;
	}

	vm.$onInit = function () {
		vm.setContainerInitialTemperature();
	}
}