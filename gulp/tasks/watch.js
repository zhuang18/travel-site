var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir:"app"
        }
    })

    gulp.watch('./app/index.html',function(){
        browserSync.reload();
    });

    gulp.watch('./app/assets/styles/**/*.css', ['cssInject']);

})

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
});