angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('./index.html','<!DOCTYPE html>\r\n<html lang="en" ng-app="app">\r\n<head>\r\n\t<meta charset="UTF-8">\r\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n\t<title>PragmaBrewery</title>\r\n\r\n\t<link rel="stylesheet" href="./app.css">\r\n</head>\r\n<body>\r\n\t<div ui-view="main"></div>\r\n\r\n\t<script type="text/javascript" src="./angular.min.js"></script>\r\n\t<script type="text/javascript" src="./angular-ui-router.min.js"></script>\r\n\t<script type="text/javascript" src="./app.min.js"></script>\r\n</body>\r\n</html>\r\n');
$templateCache.put('./truck/truck.html','<div>\r\n\t<fieldset>\r\n\t\t<legend>Manage the truck temperature</legend>\r\n\t\t<p><button ng-click="truckCtrl.increase()">Increase</button></p>\r\n\t\t<p><button ng-click="truckCtrl.decrease()">Decrease</button></p>\r\n\t</fieldset>\r\n\t<div class="containers">\r\n\t\t<container-component class="item" beer="beer" ng-repeat="beer in truckCtrl.beers"></container-component>\r\n\t</div>\r\n</div>\r\n');}]);