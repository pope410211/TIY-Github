// http://ryanchristiani.com/getting-started-with-gulp-and-sass/

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./css'));
});
