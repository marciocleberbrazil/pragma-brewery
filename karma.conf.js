module.exports = function (config) {
	config.set({
		basePath: './',

		frameworks: [
			'jasmine',
			'jasmine-matchers'
		],

		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/**/*.js'
		],

		reporters: ['mocha'],

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			// 'PhantomJS', 'Chrome', 'Firefox', 'Safari'
			'PhantomJS'
		],

		// Which plugins to enable
		plugins: [
			'karma-mocha-reporter',
			'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-jasmine-matchers'
		],

		singleRun: true
	});
};
