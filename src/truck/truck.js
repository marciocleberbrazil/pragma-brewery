(function() {
    'use strict';

    angular.module('app.truck')
        .controller('Truck', Truck);

		Truck.$inject = ['$interval', 'beers'];

    function Truck($interval, beers) {
		var vm = this;
		vm.currentTemperature = 0;
		vm.minTemperature = 3;
		vm.switchDoor = false;

		vm.open = open;
		vm.close = close;

		var timerStep = 0.5;
		var timerSize = 1000;
		var timerIncrease;
		var timerDecrease;

		function close() {
			vm.switchDoor = false;
			$interval.cancel(timerIncrease);
			timerDecrease = $interval(function() {
				if(vm.currentTemperature <= vm.minTemperature)
					$interval.cancel(timerDecrease);
				else
					vm.currentTemperature -= timerStep;
			}, timerSize);
		}

		function open() {
			vm.switchDoor = true;
			$interval.cancel(timerDecrease);
			timerIncrease = $interval(function() {
				vm.currentTemperature += timerStep;
			}, timerSize);
		}

		this.$onInit = function () {
			vm.currentTemperature = vm.minTemperature;
			vm.beers = beers.getBeers();
		}
    }
})();
