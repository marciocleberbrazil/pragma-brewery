angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('./index.html','<!DOCTYPE html>\n<html lang="en" ng-app="app">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t<title>PragmaBrewery</title>\n\n\t<link rel="stylesheet" href="./app.css">\n</head>\n<body>\n\t<div ui-view="main"></div>\n\n\t<script type="text/javascript" src="./angular.min.js"></script>\n\t<script type="text/javascript" src="./angular-ui-router.min.js"></script>\n\t<script type="text/javascript" src="./app.min.js"></script>\n</body>\n</html>\n');
$templateCache.put('./truck/truck.html','<div>\n\t<fieldset>\n\t\t<legend>Truck temperature</legend>\n\t\t<p>Minimum: {{truckCtrl.minTemperature}}\xB0C</p>\n\t\t<p>Current: {{truckCtrl.currentTemperature}}\xB0C</p>\n\t\t<p><button ng-click="truckCtrl.toggleDoor()">{{truckCtrl.doorOpen ? \'Close\' : \'Open\' }} truck door</button></p>\n\t</fieldset>\n\t<div class="containers">\n\t\t<container-component class="item" beer="beer" current-temperature="{{truckCtrl.currentTemperature}}" ng-repeat="beer in truckCtrl.beers"></container-component>\n\t</div>\n</div>\n');}]);