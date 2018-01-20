(function() {
    'use strict';

    angular.module('app.truck')
        .controller('Truck', Truck);

		Truck.$inject = [];

    function Truck() {
		var vm = this;
		this.name = 'Kaiser Sose';
        this.number = '867-5309';
    }
})();
