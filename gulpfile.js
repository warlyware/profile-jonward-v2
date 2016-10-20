'use strict';

var gulp = require('gulp');
var config = require('./gulp/config.json');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');


// watch files for changes and reload

gulp.task('styles', function() {
    return gulp.src(config.paths.src.styles)
        .pipe(sass.sync({includePaths: config.paths.src.styles_imports}).on('error', sass.logError))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('copy:html', function() {
  return gulp.src(config.paths.src.html)
    .pipe(gulp.dest('build'));
});


gulp.task('copy:images', function() {
  return gulp.src(config.paths.src.images)
    .pipe(gulp.dest('build/img'));
});

gulp.task('copy:js', function() {
  return gulp.src(config.paths.src.js)
    .pipe(gulp.dest('build'));
});

gulp.task('copy:vendor', function() {
  return gulp.src(config.paths.vendor)
    .pipe(gulp.dest('build/vendor'));
});

gulp.task('watch', function() {
    gulp.watch(config.paths.src.html, ['copy:html']);
    gulp.watch(config.paths.src.js, ['copy:js']);
    gulp.watch(config.paths.src.styles, ['styles']);
});

gulp.task('default', ['styles', 'copy:html', 'copy:js', 'copy:images', 'copy:vendor', 'watch']);
