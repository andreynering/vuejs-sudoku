var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default', ['less', 'js']);

gulp.task('less', function() {
  return gulp.
    src('less/*.less').
    pipe(less({
      paths: [path.join(__dirname, 'less', 'include')]
    })).
    pipe(cleanCSS()).
    pipe(gulp.dest('bundle'));
});

gulp.task('js', function() {
  return gulp.
    src(['js/vue.js', 'js/boards.js', 'js/sudoku.js']).
    pipe(concat('sudoku.js')).
    pipe(minify()).
    pipe(gulp.dest('bundle'));
});
