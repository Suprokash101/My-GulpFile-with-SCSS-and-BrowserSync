var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
    gulp.src('./app/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });

    gulp.watch('./app/sass/*.scss', ['styles']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['styles', 'serve']);
