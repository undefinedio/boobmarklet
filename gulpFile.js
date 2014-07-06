var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');

gulp.task('compress', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('compressed'))
});

gulp.task('minify-css', function() {
    gulp.src('./font/*.css')
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('./compressed/'))
});

gulp.task('default', function () {
    gulp.src('font/*.css')
        .pipe(watch(function() {
            gulp.start('minify-css');
        }));
    gulp.src('js/*.js')
        .pipe(watch(function() {
            gulp.start('compress');
        }));
});