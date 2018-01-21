describe('Factory beers', function() {
	'use strict';

	var beers;

	beforeEach(module('app.beers.beers-factory'));

	beforeEach(inject(function(_beers_) {
		beers = _beers_;
	}));

	afterEach(function() {

	});

	it('should return the length of an array', function() {
		var allBeers = beers.getBeers();

		expect(allBeers.length).toBeGreaterThan(0);
		expect(allBeers[0].name).toBeDefined();

	});
});
