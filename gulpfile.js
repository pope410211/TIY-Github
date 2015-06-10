// http://ryanchristiani.com/getting-started-with-gulp-and-sass/

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', function() {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('src/css/'));
});
// Watch
gulp.task('default',function() {
    gulp.watch('./src/css/**/*.scss',['styles']);
});
