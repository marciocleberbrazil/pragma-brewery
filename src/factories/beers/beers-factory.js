angular.module('app.beers.beers-factory',[])
		.factory('beers', beers);
		beers.$inject = [];

function beers() {
	return {
		getBeers: getBeers
	};

	function getBeers() {
		return [
			{
				name: 'Beer 1',
				type: 'Pilsner',
				temperature: {
					min: 4,
					max: 6
				}
			},
			{
				name: 'Beer 2',
				type: 'IPA',
				temperature: {
					min: 5,
					max: 6
				}
			},
			{
				name: 'Beer 3',
				type: 'Lager',
				temperature: {
					min: 4,
					max: 7
				}
			},
			{
				name: 'Beer 4',
				type: 'Stout',
				temperature: {
					min: 6,
					max: 8
				}
			},
			{
				name: 'Beer 5',
				type: 'Wheat beer',
				temperature: {
					min: 3,
					max: 5
				}
			},
			{
				name: 'Beer 6',
				type: 'Pale Ale',
				temperature: {
					min: 4,
					max: 6
				}
			},
		];
	}
}
