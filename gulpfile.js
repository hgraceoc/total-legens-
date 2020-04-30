let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

gulp.task('minify-css', () => {

    return gulp.src('style/main.css')

        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./style/'));
})



gulp.task('watch-css', () => {
    return gulp.watch('style/**/*.scss', gulp.task('minify-css'))

});

gulp.task('combine', () => {

    return gulp.src(['js/*.js'])

        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});

gulp.task('watch-js', () => {
    return gulp.watch('js/**/*.js', gulp.task('combine'))

});
