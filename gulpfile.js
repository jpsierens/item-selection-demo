/*
*	Task Automation to make my life easier.
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

// declarations, dependencies
// ----------------------------------------------------------------------------
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var reactify = require('reactify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
  	'react/addons'
];
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function() {
    bundleApp(false);
});

gulp.task('deploy', function(){
	bundleApp(true);
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', function() {
	gulp.watch(['./dev/js/**/*.js','!./web/*.js'], ['scripts']);
	cssTask({
    	development: true,
    	src: './dev/sass/**/*.scss',
    	dest: './web/css'
  	});
});

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
	scriptsCount++;
	// Browserify will bundle all our js files together in to one and will let
	// us use modules in the front end.
	var appBundler = browserify({
    	entries: './dev/js/app.js',
    	debug: true
  	})

	// If it's not for production, a separate vendors.js file will be created
	// so that we don't have to rebundle things like react everytime there's a 
	// change in the js file
  	if (!isProduction && scriptsCount === 1){
  		// create vendors.js for dev environment.
  		browserify({
			require: dependencies,
			debug: true
		})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest('./web/js/'));
  	}
  	if (!isProduction){
  		// make the dependencies external so they dont get bundled by the 
		// app bundler. Dependencies are already bundled in vendor.js for
		// development environments.
  		dependencies.forEach(function(dep){
  			appBundler.external(dep);
  		})
  	}

  	appBundler
  		// transform ES6 and JSX to ES5 with babelify
	  	.transform(babelify)
	    .bundle()
	    .on('error',gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('./web/js/'));
}

function cssTask (options) {
    if (options.development) {
      	var run = function () {
	        console.log(arguments);
	        var start = new Date();
	        console.log('Building CSS bundle');
	        gulp
	        	.src(options.src)
	          	.pipe(sass({errLogToConsole: true}))
	          	.pipe(concat('main.css'))
	          	.pipe(gulp.dest(options.dest))
	          	.pipe(notify(function () {
	            	console.log('CSS bundle built in ' + 
	            		(Date.now() - start) + 'ms');
	          	}));
      	};
    	run();
    	gulp.watch(options.src, run);
    } else {
	    gulp
	      	.src(options.src)
	        .pipe(concat('main.css'))
	        .pipe(cssmin())
	        .pipe(gulp.dest(options.dest));   
    }
}