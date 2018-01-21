var $ = require('gulp-load-plugins')({ lazy: true }),
	args = require('yargs').argv,
	browserSync = require('browser-sync').create(),
	del = require('del'),
	gulp = require('gulp'),
	karma = require('karma');

var config = {
	isDebug: args.debug ? args.debug : false,
	folder: {
		test: './test/',
		src: './src/',
		dist: './dist/',
	},
	filename: {
		js: 'app.min.js',
		html: 'index.html',
		templates: 'templates.js'
	}
};

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

/**
 * Copy Files
 */
gulp.task('build:copyfiles', function () {
	return gulp.src([
			'node_modules/angular/angular.min.js',
			'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
			config.folder.src + 'app.css',
			config.folder.src + config.filename.html
		])
		.pipe(gulp.dest(config.folder.dist));
});

/**
 * Compile Html files and Cache with $templateCache
 */
gulp.task('build:html', function () {
	return gulp.src([
			config.folder.src + '**/*.html',
		])
		.pipe($.if(config.isDebug, $.debug()))
		.pipe($.sourcemaps.init())
		.pipe($.angularTemplatecache({
			module: 'app',
			root: './',
			standalone: false
		}))
		.pipe($.concat(config.filename.templates))
		.pipe(gulp.dest(config.folder.src));
});

/**
 * Compile JavaScript files
 */
gulp.task('build:js', ['build:html'], function () {
	return gulp.src([
			config.folder.src + '**/*.js', '!' + config.folder.src + '**/*.spec.js'
		])
		.pipe($.if(config.isDebug, $.debug()))
		.pipe($.sourcemaps.init())
		.pipe($.angularFilesort())
		.pipe($.concat(config.filename.js))
		.pipe(gulp.dest(config.folder.dist));
});

/**
 * Clean Destination folder
 */
gulp.task('build:cleanup', function () {
	return del(config.folder.dist);
});

/**
 * Run all build process step by step
 */
gulp.task('build', ['build:cleanup'], function () {
	gulp.start(['build:js', 'build:copyfiles']);
});

/**
 * Run tests with watcher
 */
gulp.task('tests', function (done) {
	new karma.Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false
	}, done).start();
});

/**
 * Open Application in the Browser and start watcher
 */
gulp.task('start', ['build'], function () {
	browserSync.init({
        server: {
            baseDir: config.folder.dist
		},
		files: [config.folder.dist + '/**/*.*'],
		notify: true,
        reloadDelay: 1000
	});

	gulp.watch(
		[
			config.folder.src + '**/*.js',
			config.folder.src + '**/*.html',
		],
		['build']
	)
	.on('change', browserSync.reload);
});
