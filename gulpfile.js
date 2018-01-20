var gulp = require('gulp'), $ = require('gulp-load-plugins')({ lazy: true });
var karma = require('karma');

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

/**
 * Run tests with watcher
 */
gulp.task('tests', function (done) {
	new karma.Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false
	}, done).start();
});
