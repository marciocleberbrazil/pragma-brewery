(function() {
    'use strict';

    angular.module('app.truck')
        .controller('Truck', Truck);

	Truck.$inject = ['$scope', 'beers'];

    function Truck($scope, beers) {
		var vm = this;

		vm.increase = function() {
			$scope.$broadcast('eventIncreaseTemperature', null);
		}

		vm.decrease = function() {
			$scope.$broadcast('eventDecreaseTemperature', null);
		}

		vm.$onInit = function () {
			vm.beers = beers.getBeers();
		}
    }
})();
