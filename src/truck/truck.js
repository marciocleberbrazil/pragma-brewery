(function() {
    'use strict';

    angular.module('app.truck')
        .controller('Truck', Truck);

	Truck.$inject = ['$interval', 'beers'];

    function Truck($interval, beers) {
		var _timer;
		var _timerStep = 0.5;
		var _timerDelay = 1000;
		var vm = this;
		vm.currentTemperature = 0;
		vm.minTemperature = 4;
		vm.toggleDoor = toggleDoor;
		vm.doorOpen = false;

		function toggleDoor() {
			vm.doorOpen = !vm.doorOpen;

			killTimer();

			_timer = $interval(function() {
				if(vm.doorOpen)
					increaseTime();
				else
					decreaseTime();
			}, _timerDelay);
		}

		function increaseTime(timerStep) {
			timerStep =  timerStep || _timerStep;
			vm.currentTemperature += _timerStep;
		}

		function decreaseTime(timerStep) {
			timerStep =  timerStep || _timerStep;
			if(vm.currentTemperature <= vm.minTemperature)
				killTimer();
			else
				vm.currentTemperature -= timerStep;
		}

		function killTimer() {
			if(_timer) $interval.cancel(_timer);
		}

		this.$onInit = function () {
			vm.currentTemperature = vm.minTemperature;
			vm.beers = beers.getBeers();
		}
    }
})();
