var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');


gulp.task('styles', function() {
    gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/css'))
});

gulp.task('js', function() {
	return browserify('./src/js/on_load.js')
	.bundle()
	.on('error', function(e) {
		gutil.log(e);
	})
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./dist/js'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/**/*.scss',['styles']);
});


// browserify
// scss-lint
// js-hint
// watch
// git hooks (precommit in grunt)
