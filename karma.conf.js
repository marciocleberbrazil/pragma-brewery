module.exports = function (config) {
	config.set({
		basePath: './',

		frameworks: [
			'jasmine',
			'jasmine-matchers'
		],

		files: [
			/*'src/bower_components/angular/angular.js',
			'src/bower_components/angular-ui-router/release/angular-ui-router.js',
			'src/bower_components/angular-mocks/angular-mocks.js',*/
			'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/**/*module.js',
			'src/**/*.js'
		],

		exclude: [
			'src/bower_components/**/*.js'
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
