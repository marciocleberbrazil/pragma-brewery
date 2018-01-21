angular.module('app.container.container-component', [])
	.component('containerComponent', {
		bindings: {
			beer: '=',
			currentTemperature: '@'
		},
		controller: ContainerController,
		template: '<div ng-class="{red:$ctrl.currentTemperature > $ctrl.beer.temperature.max }"><h1>{{ $ctrl.beer.name }}</h1><h2>{{ $ctrl.beer.type }}</h2><p>{{ $ctrl.beer.temperature.min }}°C - {{ $ctrl.beer.temperature.max }}°C</p></div>'
		//templateUrl: 'components/container/container.html'
	});

angular.module('app.container.container-component')
	.controller('ContainerController', ContainerController);

ContainerController.$inject = [];

function ContainerController() {

}
