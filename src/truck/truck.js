(function() {
    'use strict';

    angular.module('app.truck')
        .controller('Truck', Truck);

	Truck.$inject = ['$interval', 'beers'];

    function Truck($interval, beers) {
		var vm = this;
		vm.currentTemperature = 0;
		vm.minTemperature = 4;
		vm.switchDoor = false;

		vm.open = open;
		vm.close = close;

		var _timerStep = 0.5;
		var _timerSize = 1000;
		var _timerIncrease;
		var _timerDecrease;

		function close(timerStep) {
			timerStep =  timerStep || _timerStep;
			vm.switchDoor = false;

			$interval.cancel(_timerIncrease);
			_timerDecrease = $interval(function(){
				decreaseTime(timerStep);
			}, _timerSize);
		}

		function open() {
			vm.switchDoor = true;
			$interval.cancel(_timerDecrease);
			_timerIncrease = $interval(function() {
				vm.currentTemperature += _timerStep;
			}, _timerSize);
		}

		function decreaseTime(timerStep) {
			timerStep =  timerStep || _timerStep;
			if(vm.currentTemperature <= vm.minTemperature)
				$interval.cancel(_timerDecrease);
			else
				vm.currentTemperature -= timerStep;
		}

		this.$onInit = function () {
			vm.currentTemperature = vm.minTemperature;
			vm.beers = beers.getBeers();
		}
    }
})();
