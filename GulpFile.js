var gulp = require('gulp');
var sass = require('gulp-sass');
var jslint = require('gulp-jslint-simple');

gulp.task('lint', function () {
    gulp.src('./src/js/source.js')
        .pipe(jslint.run({
            node: true,
            vars: true
        }))
        .pipe(jslint.report({
            reporter: require('jshint-stylish').reporter
        }));
});

gulp.task('styles', function() {
    gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/css'))
});


//Watch task
gulp.task('default',function() {
    gulp.watch('src/**/*.scss',['styles']);
    gulp.watch('src/**/*.js',['lint']);
});


 //js Lint D
 //json inputs, answers correct
 //split questions
 //move JS to design pattern D
 //style conventions
