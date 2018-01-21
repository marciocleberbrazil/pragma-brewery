describe('app.container module', function() {
	beforeEach(module('app.container'));

	describe('container service', function() {
		it('should return current version', inject(function(version) {
		expect(version).toEqual('0.1');
		}));
	});
});
