angular.module('app.container.container-component', [])
	.component('containerComponent', {
		bindings: {
			beer: '=',
			currentTemperature: '@'
		},
		controller: ContainerController,
		template: '<div ng-class="{red:$ctrl.temperatureIsOutOfRange() }"><h1>{{ $ctrl.beer.name }}</h1><h2>{{ $ctrl.beer.type }}</h2><p>{{ $ctrl.beer.temperature.min }}°C - {{ $ctrl.beer.temperature.max }}°C</p><p>Current: {{ $ctrl.currentTemperature }}°C</p><p><button ng-click="$ctrl.increaseTemperature()">increase</button></p><p><button ng-click="$ctrl.decreaseTemperature()">decrease</button></p></div>'
	});
