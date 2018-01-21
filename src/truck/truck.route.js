(function () {
    angular.module('app.truck')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('truck', {
                url: '/truck',
                views: {
                    "main": {
                        controller: 'Truck as truckCtrl',
                        templateUrl: './truck/truck.html'
                    }
                },
                data: {pageTitle: 'Truck'}
            });
        }])
})();

